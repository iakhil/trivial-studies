import { useState } from "react";
import { Link } from "react-router-dom";
import Flashcard from "./Flashcard";
import FlashcardChallenge from "./FlashcardChallenge";
import { factContinents } from "../data/countryFacts";
import type { CountryWithFacts } from "../data/countryFacts";

interface CountryFactStudyPageProps {
  title: string;
  intro: string;
  factLabel: string;
  note?: string;
  getFactValue: (country: CountryWithFacts) => string;
}

export default function CountryFactStudyPage({
  title,
  intro,
  factLabel,
  note,
  getFactValue,
}: CountryFactStudyPageProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [mode, setMode] = useState<"study" | "challenge">("study");
  const active = factContinents[activeTab];
  const challengeCards = active.countries.map((country) => ({
    id: country.code,
    prompt: country.name,
    answer: getFactValue(country),
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
      <h1>{title}</h1>
      <p className="page-intro">{intro}</p>
      {note ? <p className="study-note">{note}</p> : null}

      <div className="continent-tabs">
        {factContinents.map((continent, index) => (
          <button
            key={continent.name}
            className={`continent-tab${index === activeTab ? " active" : ""}`}
            onClick={() => selectTab(index)}
          >
            {continent.name}
          </button>
        ))}
      </div>

      <div className="mode-toggle">
        <button
          className={`mode-button${mode === "study" ? " active" : ""}`}
          onClick={() => setMode("study")}
        >
          Study Mode
        </button>
        <button
          className={`mode-button${mode === "challenge" ? " active" : ""}`}
          onClick={() => setMode("challenge")}
        >
          Challenge Mode
        </button>
      </div>

      {mode === "study" ? (
        <div className="countries-grid fact-grid">
          {active.countries.map((country) => (
            <Flashcard
              key={country.code}
              frontLabel="Country"
              frontValue={country.name}
              backLabel={factLabel}
              backValue={getFactValue(country)}
            />
          ))}
        </div>
      ) : (
        <FlashcardChallenge
          key={active.name}
          cards={challengeCards}
          promptLabel="Country"
          answerLabel={factLabel}
        />
      )}
    </div>
  );
}
