import { useState } from "react";
import { Link } from "react-router-dom";
import Flashcard from "../components/Flashcard";
import { operaTriviaGroups } from "../data/operaTrivia";

export default function OperaTriviaPage() {
  const [activeTab, setActiveTab] = useState(0);
  const activeGroup = operaTriviaGroups[activeTab];

  return (
    <div className="study-page">
      <Link to="/" className="back-link">
        &larr; Back to Topics
      </Link>
      <h1>Opera Trivia</h1>
      <p className="page-intro">
        Study famous operas, composers, voice types, and core opera terms.
      </p>
      <p className="study-note">Tap a card to flip it.</p>

      <div className="continent-tabs">
        {operaTriviaGroups.map((group, index) => (
          <button
            key={group.name}
            className={`continent-tab${index === activeTab ? " active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {group.name}
          </button>
        ))}
      </div>

      <div className="countries-grid fact-grid opera-trivia-grid">
        {activeGroup.cards.map((card) => (
          <Flashcard
            key={card.prompt}
            frontLabel="Question"
            frontValue={card.prompt}
            backLabel="Answer"
            backValue={card.answer}
            wrapperClassName="opera-trivia-card"
          />
        ))}
      </div>
    </div>
  );
}
