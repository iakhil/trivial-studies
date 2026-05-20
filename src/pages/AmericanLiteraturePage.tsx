import { useState } from "react";
import { Link } from "react-router-dom";
import Flashcard from "../components/Flashcard";
import FlashcardChallenge from "../components/FlashcardChallenge";
import { americanLiteratureGroups } from "../data/americanLiterature";

export default function AmericanLiteraturePage() {
  const [activeTab, setActiveTab] = useState(0);
  const [mode, setMode] = useState<"study" | "challenge">("study");
  const activeGroup = americanLiteratureGroups[activeTab];
  const challengeCards = activeGroup.cards.map((card) => ({
    id: card.prompt,
    prompt: card.prompt,
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
      ) : (
        <FlashcardChallenge key={activeGroup.name} cards={challengeCards} promptLabel="Question" answerLabel="Answer" />
      )}
    </div>
  );
}
