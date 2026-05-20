import { useState } from "react";
import { Link } from "react-router-dom";
import Flashcard from "../components/Flashcard";
import FlashcardChallenge from "../components/FlashcardChallenge";
import { dinosaurGroups } from "../data/dinosaurs";

export default function DinosaursPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [mode, setMode] = useState<"study" | "challenge">("study");
  const activeGroup = dinosaurGroups[activeTab];
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
      <h1>Dinosaurs</h1>
      <p className="page-intro">
        Study famous dinosaurs, major groups, and the periods when dinosaurs
        lived.
      </p>
      <p className="study-note">Tap a card to flip it.</p>

      <div className="continent-tabs">
        {dinosaurGroups.map((group, index) => (
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
        <div className="countries-grid fact-grid dinosaur-grid">
          {activeGroup.cards.map((card) => (
            <Flashcard
              key={card.name}
              frontLabel="Dinosaur"
              frontValue={card.name}
              backLabel="Fact"
              backValue={card.answer}
              wrapperClassName="dinosaur-card"
            />
          ))}
        </div>
      ) : (
        <FlashcardChallenge key={activeGroup.name} cards={challengeCards} promptLabel="Dinosaur" answerLabel="Fact" />
      )}
    </div>
  );
}
