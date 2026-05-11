import { useState } from "react";
import { Link } from "react-router-dom";
import Flashcard from "../components/Flashcard";
import { shakespeareTriviaGroups } from "../data/shakespeareTrivia";

export default function ShakespeareTriviaPage() {
  const [activeTab, setActiveTab] = useState(0);
  const activeGroup = shakespeareTriviaGroups[activeTab];

  return (
    <div className="study-page">
      <Link to="/" className="back-link">
        &larr; Back to Topics
      </Link>
      <h1>Shakespeare Trivia</h1>
      <p className="page-intro">
        Study Shakespeare's famous plays, characters, quotes, and theater terms.
      </p>
      <p className="study-note">Tap a card to flip it.</p>

      <div className="continent-tabs">
        {shakespeareTriviaGroups.map((group, index) => (
          <button
            key={group.name}
            className={`continent-tab${index === activeTab ? " active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {group.name}
          </button>
        ))}
      </div>

      <div className="countries-grid fact-grid shakespeare-trivia-grid">
        {activeGroup.cards.map((card) => (
          <Flashcard
            key={card.prompt}
            frontLabel="Question"
            frontValue={card.prompt}
            backLabel="Answer"
            backValue={card.answer}
            wrapperClassName="shakespeare-trivia-card"
          />
        ))}
      </div>
    </div>
  );
}
