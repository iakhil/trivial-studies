import { useEffect, useMemo, useState } from "react";
import type { MouseEvent } from "react";
import { Link } from "react-router-dom";
import { mixedDrillClues, type MixedDrillClue } from "../data/jeopardyPrepDeck";
import {
  archiveStyleNotes,
  canonChecklist,
  categoryPatternDrills,
  finalJeopardyPrompt,
  finalJeopardyPrompts,
  jeopardyBoardPacks,
  jeopardyPrepLanes,
  wagerScenarios,
  type JeopardyBoardClue,
} from "../data/jeopardyPrep";

type ClueResult = "correct" | "missed";
type GameRound = "single" | "double" | "final" | "complete";

interface DrillStats {
  attempted: number;
  correct: number;
  bestStreak: number;
  currentStreak: number;
  byTopic: Record<string, TopicDrillStats>;
}

interface TopicDrillStats {
  attempted: number;
  correct: number;
}

interface FinalTrainerStats {
  attempted: number;
  correct: number;
}

interface SessionHistoryEntry {
  id: string;
  kind: "Mixed Drill" | "Buzz-In" | "Game" | "Final Jeopardy";
  detail: string;
  score: string;
  createdAt: string;
}

interface MissedClueEntry {
  id: string;
  source: "Board" | "Mixed Drill" | "Buzz-In" | "Game" | "Final Jeopardy";
  topic: string;
  prompt: string;
  answer: string;
  missedAt: string;
}

interface FinalWagerScores {
  leader: number;
  second: number;
  third: number;
}

interface WagerRecommendation {
  role: string;
  wager: string;
  explanation: string;
}

interface GameClue extends MixedDrillClue {
  gameId: string;
  value: number;
  round: Exclude<GameRound, "final" | "complete">;
  dailyDouble: boolean;
}

const BOARD_RESULTS_KEY = "trivial-studies-jeopardy-board-results";
const DRILL_STATS_KEY = "trivial-studies-jeopardy-drill-stats";
const FINAL_STATS_KEY = "trivial-studies-jeopardy-final-stats";
const SESSION_HISTORY_KEY = "trivial-studies-jeopardy-session-history";
const MISSED_CLUES_KEY = "trivial-studies-jeopardy-missed-clues";
const CANON_PROGRESS_KEY = "trivial-studies-jeopardy-canon-progress";

const emptyDrillStats: DrillStats = {
  attempted: 0,
  correct: 0,
  bestStreak: 0,
  currentStreak: 0,
  byTopic: {},
};

const emptyFinalStats: FinalTrainerStats = {
  attempted: 0,
  correct: 0,
};

function clueKey(categoryTitle: string, clue: JeopardyBoardClue) {
  return `${categoryTitle}-${clue.value}-${clue.clue}`;
}

function readStoredJson<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") {
    return fallback;
  }

  try {
    const storedValue = window.localStorage.getItem(key);
    return storedValue ? (JSON.parse(storedValue) as T) : fallback;
  } catch {
    return fallback;
  }
}

function shuffleClues<T>(clues: T[]) {
  const shuffled = [...clues];

  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

function buildGameRound(
  clues: MixedDrillClue[],
  round: Exclude<GameRound, "final" | "complete">,
  values: number[],
  dailyDoubleCount: number,
) {
  const cluesByTopic = clues.reduce<Record<string, MixedDrillClue[]>>((groups, clue) => {
    return {
      ...groups,
      [clue.topic]: [...(groups[clue.topic] ?? []), clue],
    };
  }, {});
  const topics = shuffleClues(
    Object.values(cluesByTopic)
      .filter((topicClues) => topicClues.length >= values.length)
      .map((topicClues) => topicClues[0]),
  )
    .slice(0, 6)
    .map((clue) => clue.topic);

  const roundClues = topics.flatMap((topic) => {
    return shuffleClues(cluesByTopic[topic])
      .slice(0, values.length)
      .map((clue, index) => ({
        ...clue,
        gameId: `${round}-${topic}-${index}-${clue.id}`,
        value: values[index],
        round,
        dailyDouble: false,
      }));
  });
  const dailyDoubleIndexes = new Set(
    shuffleClues(roundClues).slice(0, dailyDoubleCount).map((clue) => clue.gameId),
  );

  return roundClues.map((clue) => ({
    ...clue,
    dailyDouble: dailyDoubleIndexes.has(clue.gameId),
  }));
}

function normalizeDrillStats(stats: DrillStats): DrillStats {
  return {
    ...emptyDrillStats,
    ...stats,
    byTopic: stats.byTopic ?? {},
  };
}

function getTopicAccuracy(stats: TopicDrillStats) {
  return stats.attempted === 0 ? 0 : Math.round((stats.correct / stats.attempted) * 100);
}

function normalizeResponse(value: string) {
  return value
    .toLowerCase()
    .replace(/^(what|who|where|when|which|whom|whose)\s+(is|are|was|were)\s+/u, "")
    .replace(/^(what|who|where|when|which|whom|whose)\s+/u, "")
    .replace(/^(the|a|an)\s+/u, "")
    .replace(/[^a-z0-9\s]/gu, "")
    .replace(/\s+/gu, " ")
    .trim();
}

function isCloseResponse(guess: string, answer: string) {
  const normalizedGuess = normalizeResponse(guess);
  const normalizedAnswer = normalizeResponse(answer);

  return (
    normalizedGuess.length > 0 &&
    (normalizedGuess === normalizedAnswer ||
      normalizedAnswer.includes(normalizedGuess) ||
      normalizedGuess.includes(normalizedAnswer))
  );
}

function formatDollars(value: number) {
  return `$${Math.max(0, Math.round(value)).toLocaleString()}`;
}

function formatWagerRange(low: number, high: number) {
  const normalizedLow = Math.max(0, Math.round(low));
  const normalizedHigh = Math.max(0, Math.round(high));

  if (normalizedHigh < normalizedLow) {
    return formatDollars(normalizedLow);
  }

  if (normalizedLow === normalizedHigh) {
    return formatDollars(normalizedLow);
  }

  return `${formatDollars(normalizedLow)} to ${formatDollars(normalizedHigh)}`;
}

function calculateFinalWagers(scores: FinalWagerScores): WagerRecommendation[] {
  const leader = Math.max(0, scores.leader);
  const second = Math.max(0, scores.second);
  const third = Math.max(0, scores.third);
  const leaderCover = Math.min(leader, Math.max(0, second * 2 - leader + 1));
  const secondCoverThird = Math.min(second, Math.max(0, third * 2 - second + 1));
  const passLeaderIfWrong = Math.min(second, Math.max(0, leader - second + 1));

  const leaderRecommendation =
    leader > second * 2
      ? {
          wager: formatWagerRange(0, leader - second * 2 - 1),
          explanation: "Lock position: preserve a win even if second doubles up.",
        }
      : leader === second * 2
        ? {
            wager: formatDollars(0),
            explanation: "Exact two-thirds edge: a zero wager guarantees at least a tie if second doubles.",
          }
        : {
            wager: formatDollars(leaderCover),
            explanation: "Cover second place's possible double-up. Consider less only with low category confidence.",
          };

  const secondRecommendation =
    second > third * 2
      ? {
          wager: formatWagerRange(0, second - third * 2 - 1),
          explanation: "Protect second place while hoping the leader misses a cover wager.",
        }
      : {
          wager: formatDollars(secondCoverThird),
          explanation: "Cover third place's possible double-up before deciding whether to chase the leader.",
        };

  return [
    {
      role: "Leader",
      ...leaderRecommendation,
    },
    {
      role: "Second",
      wager: secondCoverThird > 0 ? secondRecommendation.wager : formatWagerRange(0, passLeaderIfWrong),
      explanation:
        secondCoverThird > 0
          ? secondRecommendation.explanation
          : "Third cannot catch you with a double-up, so choose between a small wager and a leader-miss path.",
    },
    {
      role: "Third",
      wager: formatWagerRange(Math.min(third, Math.max(0, second - third + 1)), third),
      explanation: "Create upside against a second-place miss; all-in is reasonable when the category is strong.",
    },
  ];
}

export default function JeopardyPrepPage() {
  const [revealedClues, setRevealedClues] = useState<Set<string>>(() => new Set());
  const [clueResults, setClueResults] = useState<Record<string, ClueResult>>(() =>
    readStoredJson<Record<string, ClueResult>>(BOARD_RESULTS_KEY, {}),
  );
  const [activeScenarioIndex, setActiveScenarioIndex] = useState(0);
  const [wagerRevealed, setWagerRevealed] = useState(false);
  const [drillCards, setDrillCards] = useState<MixedDrillClue[]>([]);
  const [drillIndex, setDrillIndex] = useState(0);
  const [drillRevealed, setDrillRevealed] = useState(false);
  const [drillResults, setDrillResults] = useState<Record<string, ClueResult>>({});
  const [drillComplete, setDrillComplete] = useState(false);
  const [drillStats, setDrillStats] = useState<DrillStats>(() =>
    normalizeDrillStats(readStoredJson<DrillStats>(DRILL_STATS_KEY, emptyDrillStats)),
  );
  const [gameRound, setGameRound] = useState<GameRound>("single");
  const [singleGameClues, setSingleGameClues] = useState<GameClue[]>([]);
  const [doubleGameClues, setDoubleGameClues] = useState<GameClue[]>([]);
  const [activeGameClueId, setActiveGameClueId] = useState<string | null>(null);
  const [gameRevealedClues, setGameRevealedClues] = useState<Set<string>>(() => new Set());
  const [gameResults, setGameResults] = useState<Record<string, ClueResult>>({});
  const [gameScore, setGameScore] = useState(0);
  const [finalGameRevealed, setFinalGameRevealed] = useState(false);
  const [finalGameResult, setFinalGameResult] = useState<ClueResult | null>(null);
  const [finalTrainerIndex, setFinalTrainerIndex] = useState(0);
  const [finalTrainerRevealed, setFinalTrainerRevealed] = useState(false);
  const [finalTrainerStats, setFinalTrainerStats] = useState<FinalTrainerStats>(() =>
    readStoredJson<FinalTrainerStats>(FINAL_STATS_KEY, emptyFinalStats),
  );
  const [gameFinalPrompt, setGameFinalPrompt] = useState(finalJeopardyPrompt);
  const [sessionHistory, setSessionHistory] = useState<SessionHistoryEntry[]>(() =>
    readStoredJson<SessionHistoryEntry[]>(SESSION_HISTORY_KEY, []),
  );
  const [libraryQuery, setLibraryQuery] = useState("");
  const [libraryTopic, setLibraryTopic] = useState("All");
  const [activeBoardPackIndex, setActiveBoardPackIndex] = useState(0);
  const [buzzCards, setBuzzCards] = useState<MixedDrillClue[]>([]);
  const [buzzIndex, setBuzzIndex] = useState(0);
  const [buzzGuess, setBuzzGuess] = useState("");
  const [buzzResults, setBuzzResults] = useState<Record<string, ClueResult>>({});
  const [buzzFeedback, setBuzzFeedback] = useState<ClueResult | null>(null);
  const [buzzComplete, setBuzzComplete] = useState(false);
  const [missedClues, setMissedClues] = useState<MissedClueEntry[]>(() =>
    readStoredJson<MissedClueEntry[]>(MISSED_CLUES_KEY, []),
  );
  const [finalWagerScores, setFinalWagerScores] = useState<FinalWagerScores>({
    leader: 18400,
    second: 9200,
    third: 7400,
  });
  const [activePatternIndex, setActivePatternIndex] = useState(0);
  const [patternRevealed, setPatternRevealed] = useState(false);
  const [canonProgress, setCanonProgress] = useState<Record<string, boolean>>(() =>
    readStoredJson<Record<string, boolean>>(CANON_PROGRESS_KEY, {}),
  );

  const activeBoardPack = jeopardyBoardPacks[activeBoardPackIndex];
  const activePracticeBoard = activeBoardPack.categories;
  const clueCount = useMemo(
    () => activePracticeBoard.reduce((total, category) => total + category.clues.length, 0),
    [activePracticeBoard],
  );
  const coryatScore = useMemo(() => {
    return activePracticeBoard.reduce((total, category) => {
      return category.clues.reduce((categoryTotal, clue) => {
        const result = clueResults[clueKey(category.title, clue)];

        if (result === "correct") {
          return categoryTotal + clue.value;
        }

        if (result === "missed") {
          return categoryTotal - clue.value;
        }

        return categoryTotal;
      }, total);
    }, 0);
  }, [activePracticeBoard, clueResults]);
  const attemptedCount = Object.keys(clueResults).length;
  const correctCount = Object.values(clueResults).filter((result) => result === "correct").length;
  const drillRoundCorrect = Object.values(drillResults).filter((result) => result === "correct").length;
  const currentDrillCard = drillCards[drillIndex];
  const revealedCount = revealedClues.size + (finalTrainerRevealed ? 1 : 0);
  const activeScenario = wagerScenarios[activeScenarioIndex];
  const drillAccuracy =
    drillStats.attempted === 0 ? 0 : Math.round((drillStats.correct / drillStats.attempted) * 100);
  const topicDiagnostics = useMemo(() => {
    const topicsByName = new Map<string, { route: string; clueCount: number }>();

    mixedDrillClues.forEach((clue) => {
      const current = topicsByName.get(clue.topic);
      topicsByName.set(clue.topic, {
        route: clue.route,
        clueCount: (current?.clueCount ?? 0) + 1,
      });
    });

    return Array.from(topicsByName.entries())
      .map(([topic, metadata]) => {
        const stats = drillStats.byTopic[topic] ?? { attempted: 0, correct: 0 };
        return {
          topic,
          route: metadata.route,
          clueCount: metadata.clueCount,
          attempted: stats.attempted,
          correct: stats.correct,
          accuracy: getTopicAccuracy(stats),
        };
      })
      .sort((left, right) => {
        if (left.attempted === 0 && right.attempted > 0) {
          return -1;
        }

        if (right.attempted === 0 && left.attempted > 0) {
          return 1;
        }

        if (left.accuracy !== right.accuracy) {
          return left.accuracy - right.accuracy;
        }

        return right.clueCount - left.clueCount;
      });
  }, [drillStats.byTopic]);
  const focusTopics = topicDiagnostics.slice(0, 3);
  const currentGameClues = gameRound === "double" ? doubleGameClues : singleGameClues;
  const activeGameClue = currentGameClues.find((clue) => clue.gameId === activeGameClueId);
  const currentGameCategories = Array.from(new Set(currentGameClues.map((clue) => clue.topic)));
  const scoredCurrentRoundCount = currentGameClues.filter((clue) => gameResults[clue.gameId]).length;
  const gameRoundComplete =
    currentGameClues.length > 0 && scoredCurrentRoundCount === currentGameClues.length;
  const activeFinalTrainerPrompt = finalJeopardyPrompts[finalTrainerIndex];
  const finalTrainerAccuracy =
    finalTrainerStats.attempted === 0
      ? 0
      : Math.round((finalTrainerStats.correct / finalTrainerStats.attempted) * 100);
  const sessionSummary = sessionHistory
    .map((entry) => `${entry.kind}: ${entry.score} (${entry.detail})`)
    .join("\n");
  const libraryTopics = useMemo(
    () => ["All", ...Array.from(new Set(mixedDrillClues.map((clue) => clue.topic))).sort()],
    [],
  );
  const libraryClues = useMemo(() => {
    const normalizedQuery = libraryQuery.trim().toLowerCase();

    return mixedDrillClues
      .filter((clue) => libraryTopic === "All" || clue.topic === libraryTopic)
      .filter((clue) => {
        if (!normalizedQuery) {
          return true;
        }

        return [clue.topic, clue.category, clue.prompt, clue.answer].some((value) =>
          value.toLowerCase().includes(normalizedQuery),
        );
      })
      .slice(0, 40);
  }, [libraryQuery, libraryTopic]);
  const totalBoardClues = useMemo(
    () =>
      jeopardyBoardPacks.reduce(
        (packTotal, pack) =>
          packTotal +
          pack.categories.reduce((categoryTotal, category) => categoryTotal + category.clues.length, 0),
        0,
      ),
    [],
  );
  const testedTopicCount = Object.values(drillStats.byTopic).filter((stats) => stats.attempted > 0).length;
  const totalTopicCount = libraryTopics.length - 1;
  const readinessScore = Math.min(
    100,
    Math.round(
      Math.min(drillStats.attempted / 60, 1) * 30 +
        Math.min(finalTrainerStats.attempted / 12, 1) * 20 +
        Math.min(sessionHistory.length / 8, 1) * 20 +
        Math.min(testedTopicCount / Math.max(totalTopicCount, 1), 1) * 30,
    ),
  );
  const currentBuzzCard = buzzCards[buzzIndex];
  const buzzCorrectCount = Object.values(buzzResults).filter((result) => result === "correct").length;
  const recentMissedClues = missedClues.slice(0, 6);
  const finalWagerRecommendations = useMemo(
    () => calculateFinalWagers(finalWagerScores),
    [finalWagerScores],
  );
  const activePatternDrill = categoryPatternDrills[activePatternIndex];
  const completedCanonCount = canonChecklist.filter((item) => canonProgress[item.id]).length;
  const canonProgressPercent = Math.round((completedCanonCount / canonChecklist.length) * 100);
  const canonAreas = Array.from(new Set(canonChecklist.map((item) => item.area)));

  useEffect(() => {
    window.localStorage.setItem(BOARD_RESULTS_KEY, JSON.stringify(clueResults));
  }, [clueResults]);

  useEffect(() => {
    window.localStorage.setItem(DRILL_STATS_KEY, JSON.stringify(drillStats));
  }, [drillStats]);

  useEffect(() => {
    window.localStorage.setItem(FINAL_STATS_KEY, JSON.stringify(finalTrainerStats));
  }, [finalTrainerStats]);

  useEffect(() => {
    window.localStorage.setItem(SESSION_HISTORY_KEY, JSON.stringify(sessionHistory));
  }, [sessionHistory]);

  useEffect(() => {
    window.localStorage.setItem(MISSED_CLUES_KEY, JSON.stringify(missedClues));
  }, [missedClues]);

  useEffect(() => {
    window.localStorage.setItem(CANON_PROGRESS_KEY, JSON.stringify(canonProgress));
  }, [canonProgress]);

  function toggleClue(categoryTitle: string, clue: JeopardyBoardClue) {
    const key = clueKey(categoryTitle, clue);
    setRevealedClues((current) => {
      const next = new Set(current);

      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }

      return next;
    });
  }

  function resetBoard() {
    setRevealedClues(new Set());
    setClueResults({});
  }

  function selectBoardPack(index: number) {
    setActiveBoardPackIndex(index);
    setRevealedClues(new Set());
    setClueResults({});
  }

  function scoreClue(
    event: MouseEvent<HTMLButtonElement>,
    categoryTitle: string,
    clue: JeopardyBoardClue,
    result: ClueResult,
  ) {
    event.stopPropagation();
    setClueResults((current) => ({
      ...current,
      [clueKey(categoryTitle, clue)]: result,
    }));

    if (result === "missed") {
      recordMissedClue({
        id: `board-${clueKey(categoryTitle, clue)}`,
        source: "Board",
        topic: categoryTitle,
        prompt: clue.clue,
        answer: clue.response,
      });
    }
  }

  function selectWagerScenario(index: number) {
    setActiveScenarioIndex(index);
    setWagerRevealed(false);
  }

  function updateFinalWagerScore(scoreKey: keyof FinalWagerScores, value: string) {
    setFinalWagerScores((current) => ({
      ...current,
      [scoreKey]: Math.max(0, Number(value) || 0),
    }));
  }

  function selectPatternDrill(index: number) {
    setActivePatternIndex(index);
    setPatternRevealed(false);
  }

  function toggleCanonProgress(id: string) {
    setCanonProgress((current) => ({
      ...current,
      [id]: !current[id],
    }));
  }

  function resetCanonProgress() {
    setCanonProgress({});
  }

  function startMixedDrill(topicNames?: string[]) {
    const cluePool =
      topicNames && topicNames.length > 0
        ? mixedDrillClues.filter((clue) => topicNames.includes(clue.topic))
        : mixedDrillClues;

    setDrillCards(shuffleClues(cluePool).slice(0, 12));
    setDrillIndex(0);
    setDrillRevealed(false);
    setDrillResults({});
    setDrillComplete(false);
  }

  function scoreDrillCard(result: ClueResult) {
    if (!currentDrillCard) {
      return;
    }

    setDrillResults((current) => ({
      ...current,
      [currentDrillCard.id]: result,
    }));

    if (result === "missed") {
      recordMissedClue({
        id: `drill-${currentDrillCard.id}`,
        source: "Mixed Drill",
        topic: currentDrillCard.topic,
        prompt: currentDrillCard.prompt,
        answer: currentDrillCard.answer,
      });
    }

    setDrillStats((current) => {
      const currentStreak = result === "correct" ? current.currentStreak + 1 : 0;

      return {
        attempted: current.attempted + 1,
        correct: current.correct + (result === "correct" ? 1 : 0),
        currentStreak,
        bestStreak: Math.max(current.bestStreak, currentStreak),
        byTopic: {
          ...current.byTopic,
          [currentDrillCard.topic]: {
            attempted: (current.byTopic[currentDrillCard.topic]?.attempted ?? 0) + 1,
            correct:
              (current.byTopic[currentDrillCard.topic]?.correct ?? 0) +
              (result === "correct" ? 1 : 0),
          },
        },
      };
    });

    if (drillIndex === drillCards.length - 1) {
      const correctThisRound = drillRoundCorrect + (result === "correct" ? 1 : 0);
      const topics = Array.from(new Set(drillCards.map((card) => card.topic))).slice(0, 3);
      logSession({
        kind: "Mixed Drill",
        detail: topics.join(", "),
        score: `${correctThisRound}/${drillCards.length}`,
      });
      setDrillComplete(true);
      return;
    }

    setDrillIndex((current) => current + 1);
    setDrillRevealed(false);
  }

  function resetDrillStats() {
    setDrillStats(emptyDrillStats);
  }

  function startFocusDrill() {
    startMixedDrill(focusTopics.map((topic) => topic.topic));
  }

  function startBuzzRound(topicNames?: string[]) {
    const cluePool =
      topicNames && topicNames.length > 0
        ? mixedDrillClues.filter((clue) => topicNames.includes(clue.topic))
        : mixedDrillClues;

    setBuzzCards(shuffleClues(cluePool).slice(0, 8));
    setBuzzIndex(0);
    setBuzzGuess("");
    setBuzzResults({});
    setBuzzFeedback(null);
    setBuzzComplete(false);
  }

  function submitBuzzGuess() {
    if (!currentBuzzCard || buzzFeedback) {
      return;
    }

    const result: ClueResult = isCloseResponse(buzzGuess, currentBuzzCard.answer) ? "correct" : "missed";
    setBuzzResults((current) => ({
      ...current,
      [currentBuzzCard.id]: result,
    }));
    if (result === "missed") {
      recordMissedClue({
        id: `buzz-${currentBuzzCard.id}`,
        source: "Buzz-In",
        topic: currentBuzzCard.topic,
        prompt: currentBuzzCard.prompt,
        answer: currentBuzzCard.answer,
      });
    }
    setBuzzFeedback(result);
  }

  function nextBuzzClue() {
    if (buzzIndex === buzzCards.length - 1) {
      const score = buzzCorrectCount + (buzzFeedback === "correct" ? 1 : 0);
      const topics = Array.from(new Set(buzzCards.map((card) => card.topic))).slice(0, 3);
      logSession({
        kind: "Buzz-In",
        detail: topics.join(", "),
        score: `${score}/${buzzCards.length}`,
      });
      setBuzzComplete(true);
      return;
    }

    setBuzzIndex((current) => current + 1);
    setBuzzGuess("");
    setBuzzFeedback(null);
  }

  function logSession(entry: Omit<SessionHistoryEntry, "id" | "createdAt">) {
    const timestamp = new Date().toISOString();
    setSessionHistory((current) =>
      [
        {
          ...entry,
          id: `${timestamp}-${entry.kind}-${entry.score}`,
          createdAt: timestamp,
        },
        ...current,
      ].slice(0, 12),
    );
  }

  function startGameSession() {
    setSingleGameClues(buildGameRound(mixedDrillClues, "single", [200, 400, 600, 800, 1000], 1));
    setDoubleGameClues(buildGameRound(mixedDrillClues, "double", [400, 800, 1200, 1600, 2000], 2));
    setGameRound("single");
    setActiveGameClueId(null);
    setGameRevealedClues(new Set());
    setGameResults({});
    setGameScore(0);
    setFinalGameRevealed(false);
    setFinalGameResult(null);
    setGameFinalPrompt(shuffleClues(finalJeopardyPrompts)[0]);
  }

  function openGameClue(clue: GameClue) {
    if (gameResults[clue.gameId]) {
      return;
    }

    setActiveGameClueId(clue.gameId);
    setGameRevealedClues((current) => new Set(current).add(clue.gameId));
  }

  function scoreGameClue(result: ClueResult) {
    if (!activeGameClue) {
      return;
    }

    setGameResults((current) => ({
      ...current,
      [activeGameClue.gameId]: result,
    }));
    if (result === "missed") {
      recordMissedClue({
        id: `game-${activeGameClue.gameId}`,
        source: "Game",
        topic: activeGameClue.topic,
        prompt: activeGameClue.prompt,
        answer: activeGameClue.answer,
      });
    }
    setGameScore((current) =>
      result === "correct" ? current + activeGameClue.value : current - activeGameClue.value,
    );
    setActiveGameClueId(null);
  }

  function advanceGameRound() {
    setActiveGameClueId(null);

    if (gameRound === "single") {
      setGameRound("double");
      return;
    }

    if (gameRound === "double") {
      setGameRound("final");
    }
  }

  function scoreFinalGame(result: ClueResult) {
    setFinalGameResult(result);
    setGameRound("complete");
    if (result === "missed") {
      recordMissedClue({
        id: `game-final-${gameFinalPrompt.category}-${gameFinalPrompt.clue}`,
        source: "Game",
        topic: gameFinalPrompt.category,
        prompt: gameFinalPrompt.clue,
        answer: gameFinalPrompt.response,
      });
    }
    logSession({
      kind: "Game",
      detail: gameFinalPrompt.category,
      score: `${gameScore} + ${result === "correct" ? "Final" : "missed Final"}`,
    });
  }

  function nextFinalTrainerPrompt() {
    setFinalTrainerIndex((current) => (current + 1) % finalJeopardyPrompts.length);
    setFinalTrainerRevealed(false);
  }

  function scoreFinalTrainer(result: ClueResult) {
    setFinalTrainerStats((current) => ({
      attempted: current.attempted + 1,
      correct: current.correct + (result === "correct" ? 1 : 0),
    }));
    if (result === "missed") {
      recordMissedClue({
        id: `final-${activeFinalTrainerPrompt.category}-${activeFinalTrainerPrompt.clue}`,
        source: "Final Jeopardy",
        topic: activeFinalTrainerPrompt.category,
        prompt: activeFinalTrainerPrompt.clue,
        answer: activeFinalTrainerPrompt.response,
      });
    }
    logSession({
      kind: "Final Jeopardy",
      detail: activeFinalTrainerPrompt.category,
      score: result === "correct" ? "Correct" : "Missed",
    });
    nextFinalTrainerPrompt();
  }

  function resetFinalTrainerStats() {
    setFinalTrainerStats(emptyFinalStats);
  }

  function clearSessionHistory() {
    setSessionHistory([]);
  }

  function recordMissedClue(entry: Omit<MissedClueEntry, "missedAt">) {
    const timestamp = new Date().toISOString();
    setMissedClues((current) =>
      [
        {
          ...entry,
          missedAt: timestamp,
        },
        ...current.filter((clue) => clue.id !== entry.id),
      ].slice(0, 30),
    );
  }

  function removeMissedClue(id: string) {
    setMissedClues((current) => current.filter((clue) => clue.id !== id));
  }

  function clearMissedClues() {
    setMissedClues([]);
  }

  function reviewMissedClues() {
    const reviewCards = missedClues.slice(0, 8).map<MixedDrillClue>((clue) => ({
      id: `missed-review-${clue.id}`,
      topic: clue.topic,
      route: "/jeopardy-prep",
      category: clue.source,
      prompt: clue.prompt,
      answer: clue.answer,
    }));

    setBuzzCards(reviewCards);
    setBuzzIndex(0);
    setBuzzGuess("");
    setBuzzResults({});
    setBuzzFeedback(null);
    setBuzzComplete(false);
  }

  return (
    <div className="jeopardy-prep-page">
      <Link to="/" className="back-link">
        &larr; Back to Topics
      </Link>

      <header className="jeopardy-prep-hero">
        <div>
          <p className="jeopardy-prep-kicker">Jeopardy prep command center</p>
          <h1>Train by board, category, clue style, and final response.</h1>
          <p>
            A focused path through the study sets in Trivial Studies, shaped around
            the board format used by archive games: category columns, rising values,
            Daily Doubles, wordplay categories, and Final Jeopardy.
          </p>
        </div>
        <div className="jeopardy-scorecard" aria-label="Practice progress">
          <span>{revealedCount}</span>
          <small>revealed of {clueCount + 1}</small>
        </div>
      </header>

      <section className="jeopardy-stats-row" aria-label="Practice stats">
        <div className="jeopardy-stat">
          <span>Coryat</span>
          <strong>${coryatScore}</strong>
        </div>
        <div className="jeopardy-stat">
          <span>Accuracy</span>
          <strong>
            {attemptedCount === 0 ? "0%" : `${Math.round((correctCount / attemptedCount) * 100)}%`}
          </strong>
        </div>
        <div className="jeopardy-stat">
          <span>Logged clues</span>
          <strong>
            {attemptedCount} / {clueCount}
          </strong>
        </div>
      </section>

      <section className="jeopardy-prep-section">
        <div className="jeopardy-section-heading">
          <div>
            <p className="jeopardy-prep-kicker">Canon checklist</p>
            <h2>Track the recurring subject areas that show up across boards</h2>
          </div>
          <div className="canon-progress">
            <span>{canonProgressPercent}%</span>
            <small>
              {completedCanonCount}/{canonChecklist.length} covered
            </small>
          </div>
        </div>

        <div className="canon-area-row" aria-label="Canon coverage areas">
          {canonAreas.map((area) => {
            const areaItems = canonChecklist.filter((item) => item.area === area);
            const areaCompleted = areaItems.filter((item) => canonProgress[item.id]).length;

            return (
              <span key={area}>
                {area} {areaCompleted}/{areaItems.length}
              </span>
            );
          })}
        </div>

        <div className="canon-checklist">
          {canonChecklist.map((item) => (
            <article className={`canon-item${canonProgress[item.id] ? " complete" : ""}`} key={item.id}>
              <label>
                <input
                  type="checkbox"
                  checked={Boolean(canonProgress[item.id])}
                  onChange={() => toggleCanonProgress(item.id)}
                />
                <span>
                  <strong>{item.title}</strong>
                  <small>
                    {item.area} / {item.priority}
                  </small>
                </span>
              </label>
              <p>{item.examples.join(", ")}</p>
              <Link to={item.route}>Study</Link>
            </article>
          ))}
        </div>

        <div className="canon-actions">
          <button type="button" className="challenge-reset-button" onClick={resetCanonProgress}>
            Reset Checklist
          </button>
        </div>
      </section>

      <section className="jeopardy-prep-section">
        <div className="jeopardy-section-heading">
          <div>
            <p className="jeopardy-prep-kicker">Category pattern lab</p>
            <h2>Practice the clue constraints hiding in category titles</h2>
          </div>
          <button
            type="button"
            className="challenge-reset-button"
            onClick={() => setPatternRevealed((current) => !current)}
          >
            {patternRevealed ? "Hide Move" : "Reveal Move"}
          </button>
        </div>

        <div className="pattern-lab">
          <div className="pattern-tabs" role="tablist" aria-label="Category pattern drills">
            {categoryPatternDrills.map((pattern, index) => (
              <button
                type="button"
                className={`pattern-tab${index === activePatternIndex ? " active" : ""}`}
                key={pattern.title}
                onClick={() => selectPatternDrill(index)}
              >
                {pattern.title}
              </button>
            ))}
          </div>

          <div className="pattern-card">
            <div className="pattern-card-header">
              <div>
                <span>Example category</span>
                <strong>{activePatternDrill.exampleCategory}</strong>
              </div>
              <small>{activePatternDrill.signal}</small>
            </div>
            <p className="pattern-clue">{activePatternDrill.clue}</p>

            {patternRevealed ? (
              <div className="pattern-answer">
                <strong>{activePatternDrill.response}</strong>
                <span>{activePatternDrill.solveMove}</span>
              </div>
            ) : null}

            <div className="pattern-traps">
              {activePatternDrill.traps.map((trap) => (
                <span key={trap}>{trap}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="jeopardy-prep-section">
        <div className="jeopardy-section-heading">
          <div>
            <p className="jeopardy-prep-kicker">Missed clue notebook</p>
            <h2>Turn misses into the next typed review round</h2>
          </div>
          <div className="missed-notebook-actions">
            <button
              type="button"
              className="challenge-submit-button"
              onClick={reviewMissedClues}
              disabled={missedClues.length === 0}
            >
              Review Misses
            </button>
            <button
              type="button"
              className="challenge-reset-button"
              onClick={clearMissedClues}
              disabled={missedClues.length === 0}
            >
              Clear
            </button>
          </div>
        </div>

        {missedClues.length > 0 ? (
          <div className="missed-notebook-list">
            {recentMissedClues.map((clue) => (
              <article className="missed-notebook-row" key={clue.id}>
                <div>
                  <span>
                    {clue.source} / {clue.topic}
                  </span>
                  <strong>{clue.prompt}</strong>
                  <small>{clue.answer}</small>
                </div>
                <button
                  type="button"
                  className="challenge-reset-button"
                  onClick={() => removeMissedClue(clue.id)}
                >
                  Remove
                </button>
              </article>
            ))}
          </div>
        ) : (
          <p className="session-history-empty">
            Missed clues from boards, drills, buzz-in rounds, games, and Final Jeopardy will collect here.
          </p>
        )}
      </section>

      <section className="jeopardy-prep-section">
        <div className="jeopardy-section-heading">
          <div>
            <p className="jeopardy-prep-kicker">Readiness dashboard</p>
            <h2>Coverage, reps, and next actions</h2>
          </div>
          <div className="readiness-score">
            <span>{readinessScore}</span>
            <small>readiness</small>
          </div>
        </div>

        <div className="readiness-grid">
          <div className="readiness-metric">
            <span>Clue bank</span>
            <strong>{mixedDrillClues.length}</strong>
            <small>searchable clues</small>
          </div>
          <div className="readiness-metric">
            <span>Board packs</span>
            <strong>{jeopardyBoardPacks.length}</strong>
            <small>{totalBoardClues} board clues</small>
          </div>
          <div className="readiness-metric">
            <span>Finals</span>
            <strong>{finalJeopardyPrompts.length}</strong>
            <small>{finalTrainerStats.attempted} attempted</small>
          </div>
          <div className="readiness-metric">
            <span>Topics tested</span>
            <strong>
              {testedTopicCount}/{totalTopicCount}
            </strong>
            <small>{drillStats.attempted} drill clues</small>
          </div>
        </div>

        <div className="prep-plan">
          <div className="prep-plan-card">
            <span>1</span>
            <div>
              <strong>Warm up weak areas</strong>
              <p>{focusTopics.map((topic) => topic.topic).join(", ")}</p>
            </div>
            <button type="button" className="challenge-reset-button" onClick={startFocusDrill}>
              Start
            </button>
          </div>
          <div className="prep-plan-card">
            <span>2</span>
            <div>
              <strong>Play a full game</strong>
              <p>Use generated Jeopardy, Double Jeopardy, and Final flow.</p>
            </div>
            <button type="button" className="challenge-reset-button" onClick={startGameSession}>
              Start
            </button>
          </div>
          <div className="prep-plan-card">
            <span>3</span>
            <div>
              <strong>Finish with Final Jeopardy</strong>
              <p>Score one broad-category association clue.</p>
            </div>
            <button
              type="button"
              className="challenge-reset-button"
              onClick={() => setFinalTrainerRevealed(true)}
            >
              Reveal
            </button>
          </div>
        </div>
      </section>

      <section className="jeopardy-prep-section">
        <div className="jeopardy-section-heading">
          <div>
            <p className="jeopardy-prep-kicker">Study log</p>
            <h2>Recent prep sessions</h2>
          </div>
          <button type="button" className="challenge-reset-button" onClick={clearSessionHistory}>
            Clear Log
          </button>
        </div>

        {sessionHistory.length > 0 ? (
          <div className="session-history-layout">
            <div className="session-history-list">
              {sessionHistory.map((entry) => (
                <div className="session-history-row" key={entry.id}>
                  <div>
                    <span>{entry.kind}</span>
                    <strong>{entry.score}</strong>
                    <small>{entry.detail}</small>
                  </div>
                  <time dateTime={entry.createdAt}>
                    {new Date(entry.createdAt).toLocaleDateString(undefined, {
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                </div>
              ))}
            </div>
            <div className="session-summary-box">
              <span>Summary</span>
              <pre>{sessionSummary}</pre>
            </div>
          </div>
        ) : (
          <p className="session-history-empty">
            Complete a mixed drill, Final Jeopardy prompt, or generated game to start a study log.
          </p>
        )}
      </section>

      <section className="jeopardy-prep-section">
        <div className="jeopardy-section-heading">
          <div>
            <p className="jeopardy-prep-kicker">Clue library</p>
            <h2>Search the prep bank by topic, category, clue, or response</h2>
          </div>
          <span className="library-count">
            {libraryClues.length} shown / {mixedDrillClues.length} total
          </span>
        </div>

        <div className="clue-library-controls">
          <input
            className="clue-library-search"
            type="search"
            value={libraryQuery}
            onChange={(event) => setLibraryQuery(event.target.value)}
            placeholder="Search clues, responses, categories..."
          />
          <select
            className="clue-library-select"
            value={libraryTopic}
            onChange={(event) => setLibraryTopic(event.target.value)}
          >
            {libraryTopics.map((topic) => (
              <option value={topic} key={topic}>
                {topic}
              </option>
            ))}
          </select>
        </div>

        <div className="clue-library-list">
          {libraryClues.map((clue) => (
            <article className="clue-library-row" key={clue.id}>
              <div>
                <span>{clue.topic}</span>
                <strong>{clue.category}</strong>
              </div>
              <p>{clue.prompt}</p>
              <small>{clue.answer}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="jeopardy-prep-section">
        <div className="jeopardy-section-heading">
          <div>
            <p className="jeopardy-prep-kicker">Buzz-in trainer</p>
            <h2>Type the response before revealing the answer</h2>
          </div>
          <button type="button" className="challenge-reset-button" onClick={() => startBuzzRound()}>
            {buzzCards.length === 0 ? "Start Buzz-In" : "New Buzz-In"}
          </button>
        </div>

        <div className="buzz-trainer">
          {buzzCards.length === 0 ? (
            <p className="buzz-empty">
              Start an 8-clue typed round. The checker ignores common Jeopardy phrasing,
              articles, punctuation, and capitalization.
            </p>
          ) : buzzComplete ? (
            <div className="buzz-summary">
              <p className="jeopardy-prep-kicker">Round complete</p>
              <h3>
                {buzzCorrectCount} / {buzzCards.length} accepted
              </h3>
              <div className="mixed-drill-review">
                {buzzCards.map((card) => (
                  <div className={`mixed-drill-review-row ${buzzResults[card.id]}`} key={card.id}>
                    <span>{card.topic}</span>
                    <strong>{card.prompt}</strong>
                    <small>{card.answer}</small>
                  </div>
                ))}
              </div>
            </div>
          ) : currentBuzzCard ? (
            <>
              <div className="mixed-drill-meta">
                <span>
                  Clue {buzzIndex + 1} / {buzzCards.length}
                </span>
                <span>{currentBuzzCard.topic}</span>
                <span>{currentBuzzCard.category}</span>
              </div>
              <p className="buzz-prompt">{currentBuzzCard.prompt}</p>
              <form
                className="buzz-form"
                onSubmit={(event) => {
                  event.preventDefault();
                  submitBuzzGuess();
                }}
              >
                <input
                  className="buzz-input"
                  value={buzzGuess}
                  onChange={(event) => setBuzzGuess(event.target.value)}
                  placeholder="Type your response"
                  disabled={Boolean(buzzFeedback)}
                />
                <button
                  type="submit"
                  className="challenge-submit-button"
                  disabled={buzzGuess.trim().length === 0 || Boolean(buzzFeedback)}
                >
                  Submit
                </button>
              </form>
              {buzzFeedback ? (
                <div className={`buzz-feedback ${buzzFeedback}`}>
                  <strong>{buzzFeedback === "correct" ? "Accepted" : "Not accepted"}</strong>
                  <span>{currentBuzzCard.answer}</span>
                  <button type="button" className="challenge-reset-button" onClick={nextBuzzClue}>
                    Next
                  </button>
                </div>
              ) : null}
            </>
          ) : null}
        </div>
      </section>

      <section className="jeopardy-prep-section">
        <div className="jeopardy-section-heading">
          <div>
            <p className="jeopardy-prep-kicker">Mixed clue drill</p>
            <h2>Random recall across {mixedDrillClues.length} Jeopardy-style clues</h2>
          </div>
          <button type="button" className="challenge-reset-button" onClick={() => startMixedDrill()}>
            {drillCards.length === 0 ? "Start Drill" : "New Drill"}
          </button>
        </div>

        <div className="mixed-drill-layout">
          <div className="mixed-drill-card">
            {drillCards.length === 0 ? (
              <p className="mixed-drill-empty">
                Start a 12-clue round pulled from history, science, mythology, arts, parks,
                language, sports, and geography study banks.
              </p>
            ) : drillComplete ? (
              <div className="mixed-drill-summary">
                <p className="jeopardy-prep-kicker">Round complete</p>
                <h3>
                  {drillRoundCorrect} / {drillCards.length} correct
                </h3>
                <div className="mixed-drill-review">
                  {drillCards.map((card) => (
                    <div
                      className={`mixed-drill-review-row ${drillResults[card.id]}`}
                      key={card.id}
                    >
                      <span>{card.topic}</span>
                      <strong>{card.prompt}</strong>
                      <small>{card.answer}</small>
                    </div>
                  ))}
                </div>
              </div>
            ) : currentDrillCard ? (
              <>
                <div className="mixed-drill-meta">
                  <span>
                    Clue {drillIndex + 1} / {drillCards.length}
                  </span>
                  <span>{currentDrillCard.topic}</span>
                  <span>{currentDrillCard.category}</span>
                </div>
                <p className="mixed-drill-prompt">{currentDrillCard.prompt}</p>
                {drillRevealed ? (
                  <div className="mixed-drill-answer">
                    <span>{currentDrillCard.answer}</span>
                    <div className="mixed-drill-actions">
                      <button
                        type="button"
                        className="challenge-submit-button"
                        onClick={() => scoreDrillCard("correct")}
                      >
                        Got it
                      </button>
                      <button
                        type="button"
                        className="challenge-miss-button"
                        onClick={() => scoreDrillCard("missed")}
                      >
                        Miss
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    type="button"
                    className="challenge-submit-button"
                    onClick={() => setDrillRevealed(true)}
                  >
                    Reveal Response
                  </button>
                )}
              </>
            ) : null}
          </div>

          <div className="mixed-drill-stats" aria-label="Mixed drill lifetime stats">
            <div>
              <span>Lifetime accuracy</span>
              <strong>{drillAccuracy}%</strong>
            </div>
            <div>
              <span>Answered</span>
              <strong>{drillStats.attempted}</strong>
            </div>
            <div>
              <span>Best streak</span>
              <strong>{drillStats.bestStreak}</strong>
            </div>
            <button type="button" className="challenge-reset-button" onClick={resetDrillStats}>
              Reset Drill Stats
            </button>
          </div>
        </div>
      </section>

      <section className="jeopardy-prep-section">
        <div className="jeopardy-section-heading">
          <div>
            <p className="jeopardy-prep-kicker">Game simulator</p>
            <h2>Play a generated Jeopardy, Double Jeopardy, and Final session</h2>
          </div>
          <button type="button" className="challenge-reset-button" onClick={startGameSession}>
            {singleGameClues.length === 0 ? "Start Game" : "New Game"}
          </button>
        </div>

        <div className="game-sim-layout">
          <div className="game-sim-score">
            <span>{gameRound === "single" ? "Jeopardy" : gameRound === "double" ? "Double Jeopardy" : "Final"}</span>
            <strong>${gameScore}</strong>
            <small>
              {gameRound === "complete"
                ? finalGameResult === "correct"
                  ? "Final correct"
                  : "Final missed"
                : `${scoredCurrentRoundCount} / ${currentGameClues.length || 30} clues`}
            </small>
          </div>

          <div className="game-sim-main">
            {singleGameClues.length === 0 ? (
              <p className="game-sim-empty">
                Start a full game session generated from the study bank. Clues lock after scoring,
                and the score carries through both boards into Final Jeopardy.
              </p>
            ) : gameRound === "final" || gameRound === "complete" ? (
              <div className="game-final-card">
                <p className="jeopardy-prep-kicker">Final Jeopardy</p>
                <h3>{gameFinalPrompt.category}</h3>
                <p>{gameFinalPrompt.clue}</p>
                {finalGameRevealed || gameRound === "complete" ? (
                  <div className="game-final-response">
                    <strong>{gameFinalPrompt.response}</strong>
                    <span>{gameFinalPrompt.wagerHint}</span>
                  </div>
                ) : null}
                {gameRound === "final" ? (
                  <div className="game-final-actions">
                    {finalGameRevealed ? (
                      <>
                        <button
                          type="button"
                          className="challenge-submit-button"
                          onClick={() => scoreFinalGame("correct")}
                        >
                          Got Final
                        </button>
                        <button
                          type="button"
                          className="challenge-miss-button"
                          onClick={() => scoreFinalGame("missed")}
                        >
                          Missed Final
                        </button>
                      </>
                    ) : (
                      <button
                        type="button"
                        className="challenge-submit-button"
                        onClick={() => setFinalGameRevealed(true)}
                      >
                        Reveal Final
                      </button>
                    )}
                  </div>
                ) : null}
              </div>
            ) : (
              <>
                <div className="game-board">
                  {currentGameCategories.map((category) => (
                    <div className="game-board-column" key={`${gameRound}-${category}`}>
                      <div className="game-category-cell">{category}</div>
                      {currentGameClues
                        .filter((clue) => clue.topic === category)
                        .map((clue) => {
                          const isScored = Boolean(gameResults[clue.gameId]);
                          const isRevealed = gameRevealedClues.has(clue.gameId);
                          return (
                            <button
                              type="button"
                              className={`game-clue-cell${isScored ? " scored" : ""}${activeGameClueId === clue.gameId ? " active" : ""}`}
                              key={clue.gameId}
                              onClick={() => openGameClue(clue)}
                              disabled={isScored}
                            >
                              {isScored ? (
                                <span>{gameResults[clue.gameId] === "correct" ? "✓" : "×"}</span>
                              ) : isRevealed ? (
                                <span>Open</span>
                              ) : (
                                <span>${clue.value}</span>
                              )}
                            </button>
                          );
                        })}
                    </div>
                  ))}
                </div>

                {activeGameClue ? (
                  <div className="game-active-clue">
                    <div className="mixed-drill-meta">
                      <span>{activeGameClue.topic}</span>
                      <span>${activeGameClue.value}</span>
                      {activeGameClue.dailyDouble ? <span>Daily Double</span> : null}
                    </div>
                    <p>{activeGameClue.prompt}</p>
                    <div className="game-final-response">
                      <strong>{activeGameClue.answer}</strong>
                    </div>
                    <div className="mixed-drill-actions">
                      <button
                        type="button"
                        className="challenge-submit-button"
                        onClick={() => scoreGameClue("correct")}
                      >
                        Got it
                      </button>
                      <button
                        type="button"
                        className="challenge-miss-button"
                        onClick={() => scoreGameClue("missed")}
                      >
                        Miss
                      </button>
                    </div>
                  </div>
                ) : null}

                {gameRoundComplete ? (
                  <button type="button" className="challenge-submit-button" onClick={advanceGameRound}>
                    {gameRound === "single" ? "Go To Double Jeopardy" : "Go To Final Jeopardy"}
                  </button>
                ) : null}
              </>
            )}
          </div>
        </div>
      </section>

      <section className="jeopardy-prep-section">
        <div className="jeopardy-section-heading">
          <div>
            <p className="jeopardy-prep-kicker">Weak-category radar</p>
            <h2>Use drill history to pick the next study target</h2>
          </div>
          <button type="button" className="challenge-reset-button" onClick={startFocusDrill}>
            Drill Weak Areas
          </button>
        </div>

        <div className="weak-radar-grid">
          {focusTopics.map((topic) => (
            <div className="weak-topic-card" key={topic.topic}>
              <div>
                <span className="weak-topic-label">
                  {topic.attempted === 0 ? "Not tested yet" : `${topic.accuracy}% accuracy`}
                </span>
                <h3>{topic.topic}</h3>
                <p>
                  {topic.attempted} answered from {topic.clueCount} available clues.
                </p>
              </div>
              <Link to={topic.route} className="weak-topic-link">
                Study Set
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="jeopardy-prep-section">
        <div className="jeopardy-section-heading">
          <div>
            <p className="jeopardy-prep-kicker">Practice board</p>
            <h2>{activeBoardPack.title}</h2>
            <p className="board-pack-description">{activeBoardPack.description}</p>
          </div>
          <button type="button" className="challenge-reset-button" onClick={resetBoard}>
            Reset Board
          </button>
        </div>

        <div className="board-pack-tabs" role="tablist" aria-label="Practice board packs">
          {jeopardyBoardPacks.map((pack, index) => (
            <button
              type="button"
              className={`board-pack-tab${index === activeBoardPackIndex ? " active" : ""}`}
              key={pack.title}
              onClick={() => selectBoardPack(index)}
            >
              {pack.title}
            </button>
          ))}
        </div>

        <div className="jeopardy-board" aria-label="Jeopardy practice board">
          {activePracticeBoard.map((category) => (
            <div className="jeopardy-board-column" key={category.title}>
              <div className="jeopardy-category-cell">
                <span>{category.title}</span>
                <small>{category.focus}</small>
              </div>
              {category.clues.map((clue) => {
                const key = clueKey(category.title, clue);
                const isRevealed = revealedClues.has(key);
                const result = clueResults[key];

                return (
                  <div
                    role="button"
                    tabIndex={0}
                    className={`jeopardy-clue-cell${isRevealed ? " revealed" : ""}`}
                    key={key}
                    onClick={() => toggleClue(category.title, clue)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        toggleClue(category.title, clue);
                      }
                    }}
                  >
                    {isRevealed ? (
                      <>
                        <span className="jeopardy-clue-text">{clue.clue}</span>
                        <span className="jeopardy-response-text">{clue.response}</span>
                        {clue.dailyDouble ? (
                          <span className="jeopardy-daily-double">Daily Double</span>
                        ) : null}
                        <span className="jeopardy-clue-actions">
                          <button
                            type="button"
                            className={`jeopardy-result-button${result === "correct" ? " active" : ""}`}
                            onClick={(event) => scoreClue(event, category.title, clue, "correct")}
                          >
                            Got it
                          </button>
                          <button
                            type="button"
                            className={`jeopardy-result-button missed${result === "missed" ? " active" : ""}`}
                            onClick={(event) => scoreClue(event, category.title, clue, "missed")}
                          >
                            Miss
                          </button>
                        </span>
                      </>
                    ) : (
                      <span className="jeopardy-clue-value">${clue.value}</span>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </section>

      <section className="jeopardy-prep-section">
        <div className="jeopardy-section-heading">
          <div>
            <p className="jeopardy-prep-kicker">Wagering lab</p>
            <h2>Practice the decisions that swing games</h2>
          </div>
        </div>

        <div className="wager-lab">
          <div className="wager-scenario-tabs" role="tablist" aria-label="Wager scenarios">
            {wagerScenarios.map((scenario, index) => (
              <button
                type="button"
                className={`wager-scenario-tab${index === activeScenarioIndex ? " active" : ""}`}
                key={scenario.title}
                onClick={() => selectWagerScenario(index)}
              >
                {scenario.title}
              </button>
            ))}
          </div>

          <div className="wager-scenario-card">
            <div className="wager-scenario-header">
              <div>
                <p className="jeopardy-prep-kicker">{activeScenario.stage}</p>
                <h3>{activeScenario.category}</h3>
              </div>
              <span className={`wager-confidence ${activeScenario.confidence}`}>
                {activeScenario.confidence} confidence
              </span>
            </div>

            <dl className="wager-score-grid">
              <div>
                <dt>Your score</dt>
                <dd>${activeScenario.score}</dd>
              </div>
              <div>
                <dt>Leader</dt>
                <dd>${activeScenario.leaderScore}</dd>
              </div>
              <div>
                <dt>Clue value</dt>
                <dd>{activeScenario.clueValue ? `$${activeScenario.clueValue}` : "Final"}</dd>
              </div>
            </dl>

            {wagerRevealed ? (
              <div className="wager-recommendation">
                <strong>{activeScenario.recommendation}</strong>
                <span>{activeScenario.reasoning}</span>
              </div>
            ) : null}

            <button
              type="button"
              className="challenge-submit-button"
              onClick={() => setWagerRevealed((current) => !current)}
            >
              {wagerRevealed ? "Hide Recommendation" : "Reveal Recommendation"}
            </button>
          </div>
        </div>

        <div className="final-wager-calculator">
          <div className="final-wager-heading">
            <div>
              <p className="jeopardy-prep-kicker">Final wager calculator</p>
              <h3>Enter pre-Final scores and compare standard ranges</h3>
            </div>
          </div>

          <div className="final-wager-inputs">
            <label>
              <span>Leader</span>
              <input
                type="number"
                min="0"
                step="100"
                value={finalWagerScores.leader}
                onChange={(event) => updateFinalWagerScore("leader", event.target.value)}
              />
            </label>
            <label>
              <span>Second</span>
              <input
                type="number"
                min="0"
                step="100"
                value={finalWagerScores.second}
                onChange={(event) => updateFinalWagerScore("second", event.target.value)}
              />
            </label>
            <label>
              <span>Third</span>
              <input
                type="number"
                min="0"
                step="100"
                value={finalWagerScores.third}
                onChange={(event) => updateFinalWagerScore("third", event.target.value)}
              />
            </label>
          </div>

          <div className="final-wager-results" aria-label="Final Jeopardy wager recommendations">
            {finalWagerRecommendations.map((recommendation) => (
              <article className="final-wager-result" key={recommendation.role}>
                <span>{recommendation.role}</span>
                <strong>{recommendation.wager}</strong>
                <p>{recommendation.explanation}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="jeopardy-prep-layout">
        <div className="jeopardy-prep-panel">
          <div className="final-trainer-heading">
            <div>
              <p className="jeopardy-prep-kicker">Final Jeopardy trainer</p>
              <h2>{activeFinalTrainerPrompt.category}</h2>
            </div>
            <div className="final-trainer-stats">
              <span>{finalTrainerAccuracy}%</span>
              <small>
                {finalTrainerStats.correct} / {finalTrainerStats.attempted}
              </small>
            </div>
          </div>
          <p className="jeopardy-final-clue">{activeFinalTrainerPrompt.clue}</p>
          {finalTrainerRevealed ? (
            <div className="jeopardy-final-answer">
              <strong>{activeFinalTrainerPrompt.response}</strong>
              <span>{activeFinalTrainerPrompt.wagerHint}</span>
            </div>
          ) : null}
          <div className="final-trainer-actions">
            {finalTrainerRevealed ? (
              <>
                <button
                  type="button"
                  className="challenge-submit-button"
                  onClick={() => scoreFinalTrainer("correct")}
                >
                  Got Final
                </button>
                <button
                  type="button"
                  className="challenge-miss-button"
                  onClick={() => scoreFinalTrainer("missed")}
                >
                  Missed Final
                </button>
                <button type="button" className="challenge-reset-button" onClick={nextFinalTrainerPrompt}>
                  Skip
                </button>
              </>
            ) : (
              <button
                type="button"
                className="challenge-submit-button"
                onClick={() => setFinalTrainerRevealed(true)}
              >
                Reveal Response
              </button>
            )}
            <button type="button" className="challenge-reset-button" onClick={resetFinalTrainerStats}>
              Reset Final Stats
            </button>
          </div>
        </div>

        <div className="jeopardy-prep-panel">
          <p className="jeopardy-prep-kicker">Archive habits</p>
          <h2>What to notice in real games</h2>
          <ul className="jeopardy-note-list">
            {archiveStyleNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="jeopardy-prep-section">
        <div className="jeopardy-section-heading">
          <div>
            <p className="jeopardy-prep-kicker">Study lanes</p>
            <h2>Build coverage across recurring categories</h2>
          </div>
        </div>

        <div className="jeopardy-lanes-grid">
          {jeopardyPrepLanes.map((lane) => (
            <Link className="jeopardy-lane-card" to={lane.route} key={lane.title}>
              <h3>{lane.title}</h3>
              <p>{lane.detail}</p>
              <div className="jeopardy-lane-tags">
                {lane.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
