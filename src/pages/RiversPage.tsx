import { useState } from "react";
import { Link } from "react-router-dom";
import Flashcard from "../components/Flashcard";
import FlashcardChallenge from "../components/FlashcardChallenge";
import { riverRegions } from "../data/rivers";

export default function RiversPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [mode, setMode] = useState<"study" | "challenge">("study");
  const activeRegion = riverRegions[activeTab];
  const challengeCards = activeRegion.cards.map((card) => ({
    id: card.country,
    prompt: card.country,
    answer: card.rivers.join(", "),
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
      <h1>World Rivers by Country</h1>
      <p className="page-intro">
        Flip each card to connect major countries with the major rivers that flow through them.
      </p>
      <p className="study-note">Tap a card to flip it.</p>

      <div className="continent-tabs">
        {riverRegions.map((region, index) => (
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
        <div className="countries-grid fact-grid river-grid">
          {activeRegion.cards.map((card) => (
            <Flashcard
              key={card.country}
              frontLabel="Country"
              frontValue={card.country}
              backLabel="Major rivers"
              backValue={card.rivers.join(", ")}
              wrapperClassName="river-card"
            />
          ))}
        </div>
      ) : (
        <FlashcardChallenge key={activeRegion.name} cards={challengeCards} promptLabel="Country" answerLabel="Major rivers" />
      )}
    </div>
  );
}
