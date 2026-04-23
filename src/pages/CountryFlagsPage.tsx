import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import { continents } from "../data/countryFlags";
import type { Country } from "../data/countryFlags";
import CountryCard from "../components/CountryCard";

const ROUND_SIZE = 10;
const TIME_LIMIT_SECONDS = 10;
const REVEAL_DELAY_MS = 1200;

function shuffleCountries(countries: Country[]) {
  const shuffled = [...countries];

  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

function normalizeAnswer(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim()
    .toLowerCase();
}

export default function CountryFlagsPage() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [activeTab, setActiveTab] = useState(0);
  const [mode, setMode] = useState<"study" | "challenge">("study");
  const [roundCountries, setRoundCountries] = useState<Country[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [guess, setGuess] = useState("");
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT_SECONDS);
  const [score, setScore] = useState(0);
  const [roundComplete, setRoundComplete] = useState(false);
  const [feedback, setFeedback] = useState<{
    kind: "correct" | "incorrect" | "timeout";
    countryName: string;
  } | null>(null);
  const active = continents[activeTab];
  const currentChallengeCountry = roundCountries[currentIndex];

  useEffect(() => {
    setMode("study");
    setRoundCountries([]);
    setCurrentIndex(0);
    setGuess("");
    setTimeLeft(TIME_LIMIT_SECONDS);
    setScore(0);
    setRoundComplete(false);
    setFeedback(null);
  }, [activeTab]);

  useEffect(() => {
    if (
      mode !== "challenge" ||
      roundComplete ||
      feedback ||
      !currentChallengeCountry
    ) {
      return;
    }

    if (timeLeft === 0) {
      setFeedback({
        kind: "timeout",
        countryName: currentChallengeCountry.name,
      });
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setTimeLeft((currentTime) => currentTime - 1);
    }, 1000);

    return () => window.clearTimeout(timeoutId);
  }, [currentChallengeCountry, feedback, mode, roundComplete, timeLeft]);

  useEffect(() => {
    if (!feedback) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      const isLastQuestion = currentIndex === roundCountries.length - 1;

      if (isLastQuestion) {
        setRoundComplete(true);
        setFeedback(null);
        return;
      }

      setCurrentIndex((index) => index + 1);
      setGuess("");
      setTimeLeft(TIME_LIMIT_SECONDS);
      setFeedback(null);
    }, REVEAL_DELAY_MS);

    return () => window.clearTimeout(timeoutId);
  }, [currentIndex, feedback, roundCountries.length]);

  useEffect(() => {
    if (
      mode !== "challenge" ||
      roundComplete ||
      feedback ||
      !currentChallengeCountry
    ) {
      return;
    }

    inputRef.current?.focus();
  }, [currentChallengeCountry, feedback, mode, roundComplete]);

  function startChallenge() {
    setMode("challenge");
    setRoundCountries(shuffleCountries(active.countries).slice(0, ROUND_SIZE));
    setCurrentIndex(0);
    setGuess("");
    setTimeLeft(TIME_LIMIT_SECONDS);
    setScore(0);
    setRoundComplete(false);
    setFeedback(null);
  }

  function submitGuess(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!currentChallengeCountry || feedback) {
      return;
    }

    const isCorrect =
      normalizeAnswer(guess) === normalizeAnswer(currentChallengeCountry.name);

    if (isCorrect) {
      setScore((currentScore) => currentScore + 1);
    }

    setFeedback({
      kind: isCorrect ? "correct" : "incorrect",
      countryName: currentChallengeCountry.name,
    });
  }

  return (
    <div className="study-page">
      <Link to="/" className="back-link">&larr; Back to Topics</Link>
      <h1>Country Flags</h1>
      <p className="page-intro">
        Study by continent or switch into challenge mode for a timed round.
      </p>
      <div className="continent-tabs">
        {continents.map((continent, i) => (
          <button
            key={continent.name}
            className={`continent-tab${i === activeTab ? " active" : ""}`}
            onClick={() => setActiveTab(i)}
          >
            {continent.name}
          </button>
        ))}
      </div>

      <div className="mode-toggle">
        <button
          className={`mode-button${mode === "study" ? " active" : ""}`}
          onClick={() => setMode("study")}
        >
          Study Mode
        </button>
        <button
          className={`mode-button${mode === "challenge" ? " active" : ""}`}
          onClick={startChallenge}
        >
          Challenge Mode
        </button>
      </div>

      {mode === "study" ? (
        <div className="countries-grid">
          {active.countries.map((country) => (
            <CountryCard
              key={country.code}
              name={country.name}
              code={country.code}
            />
          ))}
        </div>
      ) : (
        <section className="challenge-panel">
          <div className="challenge-header">
            <div>
              <p className="challenge-kicker">{active.name} challenge</p>
              <h2>Guess 10 flags in 10 seconds each</h2>
            </div>
            <button className="challenge-reset-button" onClick={startChallenge}>
              New Round
            </button>
          </div>

          {roundComplete ? (
            <div className="challenge-summary">
              <p className="challenge-score">
                Final score: {score} / {roundCountries.length}
              </p>
              <button className="challenge-reset-button" onClick={startChallenge}>
                Play Again
              </button>
            </div>
          ) : currentChallengeCountry ? (
            <>
              <div className="challenge-stats">
                <span>
                  Question {currentIndex + 1} / {roundCountries.length}
                </span>
                <span>Score: {score}</span>
                <span>Time: {timeLeft}s</span>
              </div>

              <div className="challenge-flag-card">
                <img
                  className="challenge-flag"
                  src={`/flags/${currentChallengeCountry.code}.svg`}
                  alt="Guess this country"
                />
              </div>

              <form className="challenge-form" onSubmit={submitGuess}>
                <input
                  ref={inputRef}
                  className="challenge-input"
                  type="text"
                  value={guess}
                  onChange={(event) => setGuess(event.target.value)}
                  placeholder="Type the country name"
                  autoComplete="off"
                  disabled={Boolean(feedback)}
                />
                <button
                  className="challenge-submit-button"
                  type="submit"
                  disabled={Boolean(feedback) || !guess.trim()}
                >
                  Submit
                </button>
              </form>

              {feedback ? (
                <p className={`challenge-feedback ${feedback.kind}`}>
                  {feedback.kind === "correct"
                    ? `Correct: ${feedback.countryName}`
                    : feedback.kind === "timeout"
                      ? `Time's up: ${feedback.countryName}`
                      : `Incorrect: ${feedback.countryName}`}
                </p>
              ) : null}
            </>
          ) : null}
        </section>
      )}
    </div>
  );
}
