import { useState } from "react";
import { Link } from "react-router-dom";
import Flashcard from "../components/Flashcard";
import { geologicTimeGroups } from "../data/geologicTime";

export default function GeologicTimePage() {
  const [activeTab, setActiveTab] = useState(0);
  const activeGroup = geologicTimeGroups[activeTab];

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
            onClick={() => setActiveTab(index)}
          >
            {group.name}
          </button>
        ))}
      </div>

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
    </div>
  );
}
