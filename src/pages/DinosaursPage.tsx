import { useState } from "react";
import { Link } from "react-router-dom";
import Flashcard from "../components/Flashcard";
import { dinosaurGroups } from "../data/dinosaurs";

export default function DinosaursPage() {
  const [activeTab, setActiveTab] = useState(0);
  const activeGroup = dinosaurGroups[activeTab];

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
            onClick={() => setActiveTab(index)}
          >
            {group.name}
          </button>
        ))}
      </div>

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
    </div>
  );
}
