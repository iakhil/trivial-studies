import { useState } from "react";
import { Link } from "react-router-dom";
import Flashcard from "../components/Flashcard";
import { usHistoryEras } from "../data/usHistory";

export default function USHistoryPage() {
  const [activeTab, setActiveTab] = useState(0);
  const activeEra = usHistoryEras[activeTab];

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
            onClick={() => setActiveTab(index)}
          >
            {era.name}
          </button>
        ))}
      </div>

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
    </div>
  );
}
