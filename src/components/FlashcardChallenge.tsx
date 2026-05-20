import { useState } from "react";

export interface ChallengeCard {
  id: string;
  prompt: string;
  answer: string;
}

interface FlashcardChallengeProps {
  cards: ChallengeCard[];
  promptLabel?: string;
  answerLabel?: string;
  roundSize?: number;
}

function shuffleCards(cards: ChallengeCard[]) {
  const shuffled = [...cards];

  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

export default function FlashcardChallenge({
  cards,
  promptLabel = "Prompt",
  answerLabel = "Answer",
  roundSize = 10,
}: FlashcardChallengeProps) {
  const [roundCards, setRoundCards] = useState<ChallengeCard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [knownCards, setKnownCards] = useState<Set<string>>(() => new Set());
  const [missedCards, setMissedCards] = useState<Set<string>>(() => new Set());
  const [roundComplete, setRoundComplete] = useState(false);
  const currentCard = roundCards[currentIndex];

  function startRound() {
    setRoundCards(shuffleCards(cards).slice(0, Math.min(roundSize, cards.length)));
    setCurrentIndex(0);
    setRevealed(false);
    setKnownCards(new Set());
    setMissedCards(new Set());
    setRoundComplete(false);
  }

  function scoreCurrentCard(result: "known" | "missed") {
    if (!currentCard) {
      return;
    }

    if (result === "known") {
      setKnownCards((current) => new Set(current).add(currentCard.id));
    } else {
      setMissedCards((current) => new Set(current).add(currentCard.id));
    }

    const isLastCard = currentIndex === roundCards.length - 1;

    if (isLastCard) {
      setRoundComplete(true);
      return;
    }

    setCurrentIndex((index) => index + 1);
    setRevealed(false);
  }

  if (cards.length === 0) {
    return (
      <section className="flashcard-challenge-panel">
        <p>No cards are available for this challenge.</p>
      </section>
    );
  }

  if (roundCards.length === 0) {
    return (
      <section className="flashcard-challenge-panel">
        <div className="flashcard-challenge-intro">
          <div>
            <p className="challenge-kicker">Challenge mode</p>
            <h2>Run a shuffled recall round</h2>
          </div>
          <button
            type="button"
            className="challenge-reset-button"
            onClick={startRound}
          >
            Start Round
          </button>
        </div>
        <p className="flashcard-challenge-help">
          Reveal each answer, then mark whether you knew it.
        </p>
      </section>
    );
  }

  if (roundComplete) {
    return (
      <section className="flashcard-challenge-panel">
        <div className="challenge-summary">
          <div>
            <p className="challenge-kicker">Round complete</p>
            <p className="challenge-score">
              Score: {knownCards.size} / {roundCards.length}
            </p>
          </div>

          <div className="flashcard-challenge-review">
            {roundCards.map((card) => {
              const result = knownCards.has(card.id) ? "correct" : "incorrect";

              return (
                <div
                  key={card.id}
                  className={`flashcard-challenge-review-row ${result}`}
                >
                  <span className="flashcard-challenge-review-prompt">
                    {card.prompt}
                  </span>
                  <span className="flashcard-challenge-review-answer">
                    {card.answer}
                  </span>
                </div>
              );
            })}
          </div>

          <button
            type="button"
            className="challenge-reset-button"
            onClick={startRound}
          >
            New Round
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="flashcard-challenge-panel">
      <div className="challenge-header">
        <div>
          <p className="challenge-kicker">Challenge mode</p>
          <h2>
            Card {currentIndex + 1} / {roundCards.length}
          </h2>
        </div>
        <button type="button" className="challenge-reset-button" onClick={startRound}>
          New Round
        </button>
      </div>

      <div className="challenge-stats">
        <span>Known: {knownCards.size}</span>
        <span>Missed: {missedCards.size}</span>
      </div>

      <div className="flashcard-challenge-card">
        <span className="fact-card-label">{promptLabel}</span>
        <span className="flashcard-challenge-prompt">{currentCard.prompt}</span>
      </div>

      {revealed ? (
        <>
          <div className="flashcard-challenge-answer">
            <span className="fact-card-label">{answerLabel}</span>
            <span>{currentCard.answer}</span>
          </div>
          <div className="flashcard-challenge-actions">
            <button
              type="button"
              className="challenge-submit-button"
              onClick={() => scoreCurrentCard("known")}
            >
              I Knew It
            </button>
            <button
              type="button"
              className="challenge-miss-button"
              onClick={() => scoreCurrentCard("missed")}
            >
              Missed It
            </button>
          </div>
        </>
      ) : (
        <button
          type="button"
          className="challenge-submit-button"
          onClick={() => setRevealed(true)}
        >
          Reveal Answer
        </button>
      )}
    </section>
  );
}
