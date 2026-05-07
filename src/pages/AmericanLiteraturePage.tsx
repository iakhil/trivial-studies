import { useState } from "react";
import { Link } from "react-router-dom";
import Flashcard from "../components/Flashcard";
import { americanLiteratureGroups } from "../data/americanLiterature";

export default function AmericanLiteraturePage() {
  const [activeTab, setActiveTab] = useState(0);
  const activeGroup = americanLiteratureGroups[activeTab];

  return (
    <div className="study-page">
      <Link to="/" className="back-link">
        &larr; Back to Topics
      </Link>
      <h1>American Literature</h1>
      <p className="page-intro">
        Study major American authors, books, literary movements, and poetry
        terms.
      </p>
      <p className="study-note">Tap a card to flip it.</p>

      <div className="continent-tabs">
        {americanLiteratureGroups.map((group, index) => (
          <button
            key={group.name}
            className={`continent-tab${index === activeTab ? " active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {group.name}
          </button>
        ))}
      </div>

      <div className="countries-grid fact-grid american-literature-grid">
        {activeGroup.cards.map((card) => (
          <Flashcard
            key={card.prompt}
            frontLabel="Question"
            frontValue={card.prompt}
            backLabel="Answer"
            backValue={card.answer}
            wrapperClassName="american-literature-card"
          />
        ))}
      </div>
    </div>
  );
}
