import { useState } from "react";
import { Link } from "react-router-dom";
import Flashcard from "../components/Flashcard";
import FlashcardChallenge from "../components/FlashcardChallenge";
import { mountainRangeRegions } from "../data/mountainRanges";

export default function MountainRangesPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [mode, setMode] = useState<"study" | "challenge">("study");
  const activeRegion = mountainRangeRegions[activeTab];
  const challengeCards = activeRegion.cards.map((card) => ({
    id: card.range,
    prompt: card.range,
    answer: card.location,
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
            onClick={() => selectTab(index)}
          >
            {region.name}
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
      ) : (
        <FlashcardChallenge key={activeRegion.name} cards={challengeCards} promptLabel="Range" answerLabel="Where" />
      )}
    </div>
  );
}
