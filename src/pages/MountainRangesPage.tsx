import { useState } from "react";
import { Link } from "react-router-dom";
import Flashcard from "../components/Flashcard";
import { mountainRangeRegions } from "../data/mountainRanges";

export default function MountainRangesPage() {
  const [activeTab, setActiveTab] = useState(0);
  const activeRegion = mountainRangeRegions[activeTab];

  return (
    <div className="study-page">
      <Link to="/" className="back-link">
        &larr; Back to Topics
      </Link>
      <h1>World&apos;s Mountain Ranges</h1>
      <p className="page-intro">
        Flip each card to connect major mountain ranges with where they are found.
      </p>
      <p className="study-note">Tap a card to flip it.</p>

      <div className="continent-tabs">
        {mountainRangeRegions.map((region, index) => (
          <button
            key={region.name}
            className={`continent-tab${index === activeTab ? " active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {region.name}
          </button>
        ))}
      </div>

      <div className="countries-grid fact-grid mountain-range-grid">
        {activeRegion.cards.map((card) => (
          <Flashcard
            key={card.range}
            frontLabel="Range"
            frontValue={card.range}
            backLabel="Where"
            backValue={card.location}
            wrapperClassName="mountain-range-card"
          />
        ))}
      </div>
    </div>
  );
}
