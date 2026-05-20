import { useState } from "react";
import { Link } from "react-router-dom";
import Flashcard from "../components/Flashcard";
import FlashcardChallenge from "../components/FlashcardChallenge";
import { usHistoryEras } from "../data/usHistory";

export default function USHistoryPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [mode, setMode] = useState<"study" | "challenge">("study");
  const activeEra = usHistoryEras[activeTab];
  const challengeCards = activeEra.cards.map((card) => ({
    id: card.term,
    prompt: card.term,
    answer: card.answer,
  }));

  function selectTab(index: number) {
    setActiveTab(index);
    setMode("study");
  }

  return (
    <div className="study-page">
      <Link to="/" className="back-link">
        &larr; Back to Topics
      </Link>
      <h1>US History</h1>
      <p className="page-intro">
        Review major events, documents, court cases, and movements from United
        States history.
      </p>
      <p className="study-note">Tap a card to flip it.</p>

      <div className="continent-tabs">
        {usHistoryEras.map((era, index) => (
          <button
            key={era.name}
            className={`continent-tab${index === activeTab ? " active" : ""}`}
            onClick={() => selectTab(index)}
          >
            {era.name}
          </button>
        ))}
      </div>

      <div className="mode-toggle">
        <button className={`mode-button${mode === "study" ? " active" : ""}`} onClick={() => setMode("study")}>
          Study Mode
        </button>
        <button className={`mode-button${mode === "challenge" ? " active" : ""}`} onClick={() => setMode("challenge")}>
          Challenge Mode
        </button>
      </div>

      {mode === "study" ? (
        <div className="countries-grid fact-grid us-history-grid">
          {activeEra.cards.map((card) => (
            <Flashcard
              key={card.term}
              frontLabel="Term"
              frontValue={card.term}
              backLabel="Answer"
              backValue={card.answer}
              wrapperClassName="us-history-card"
            />
          ))}
        </div>
      ) : (
        <FlashcardChallenge key={activeEra.name} cards={challengeCards} promptLabel="Term" answerLabel="Answer" />
      )}
    </div>
  );
}
