import { useState } from "react";
import { Link } from "react-router-dom";
import Flashcard from "../components/Flashcard";
import FlashcardChallenge from "../components/FlashcardChallenge";
import { geologicTimeGroups } from "../data/geologicTime";

export default function GeologicTimePage() {
  const [activeTab, setActiveTab] = useState(0);
  const [mode, setMode] = useState<"study" | "challenge">("study");
  const activeGroup = geologicTimeGroups[activeTab];
  const challengeCards = activeGroup.cards.map((card) => ({
    id: card.name,
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
      <h1>Geologic Time</h1>
      <p className="page-intro">
        Study major eons, eras, and periods in Earth history.
      </p>
      <p className="study-note">Tap a card to flip it.</p>

      <div className="continent-tabs">
        {geologicTimeGroups.map((group, index) => (
          <button
            key={group.name}
            className={`continent-tab${index === activeTab ? " active" : ""}`}
            onClick={() => selectTab(index)}
          >
            {group.name}
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
        <div className="countries-grid fact-grid geologic-time-grid">
          {activeGroup.cards.map((card) => (
            <Flashcard
              key={card.name}
              frontLabel="Interval"
              frontValue={card.name}
              backLabel="Fact"
              backValue={card.answer}
              wrapperClassName="geologic-time-card"
            />
          ))}
        </div>
      ) : (
        <FlashcardChallenge key={activeGroup.name} cards={challengeCards} promptLabel="Interval" answerLabel="Fact" />
      )}
    </div>
  );
}
