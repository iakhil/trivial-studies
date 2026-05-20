import { useState } from "react";
import { Link } from "react-router-dom";
import Flashcard from "../components/Flashcard";
import FlashcardChallenge from "../components/FlashcardChallenge";
import { usPresidentEras } from "../data/usPresidents";

export default function USPresidentsPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [mode, setMode] = useState<"study" | "challenge">("study");
  const activeEra = usPresidentEras[activeTab];
  const challengeCards = activeEra.cards.map((card) => ({
    id: card.number,
    prompt: card.name,
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
      <h1>US Presidents</h1>
      <p className="page-intro">
        Study every numbered United States presidency by era, including
        non-consecutive terms as separate cards.
      </p>
      <p className="study-note">Tap a card to flip it.</p>

      <div className="continent-tabs">
        {usPresidentEras.map((era, index) => (
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
        <div className="countries-grid fact-grid us-presidents-grid">
          {activeEra.cards.map((card) => (
            <Flashcard
              key={card.number}
              frontLabel={`President #${card.number}`}
              frontValue={card.name}
              backLabel="Term"
              backValue={card.answer}
              wrapperClassName="us-presidents-card"
            />
          ))}
        </div>
      ) : (
        <FlashcardChallenge key={activeEra.name} cards={challengeCards} promptLabel="President" answerLabel="Term" />
      )}
    </div>
  );
}
