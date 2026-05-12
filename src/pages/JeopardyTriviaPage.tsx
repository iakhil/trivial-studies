import { useState } from "react";
import { Link } from "react-router-dom";
import Flashcard from "../components/Flashcard";
import type { JeopardyTopic } from "../data/jeopardyTopics";

interface JeopardyTriviaPageProps {
  topic: JeopardyTopic;
}

export default function JeopardyTriviaPage({ topic }: JeopardyTriviaPageProps) {
  const [activeTab, setActiveTab] = useState(0);
  const activeGroup = topic.groups[activeTab];

  return (
    <div className="study-page">
      <Link to="/" className="back-link">
        &larr; Back to Topics
      </Link>
      <h1>{topic.title}</h1>
      <p className="page-intro">{topic.intro}</p>
      <p className="study-note">Tap a card to flip it.</p>

      <div className="continent-tabs">
        {topic.groups.map((group, index) => (
          <button
            key={group.name}
            className={`continent-tab${index === activeTab ? " active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {group.name}
          </button>
        ))}
      </div>

      <div className="countries-grid fact-grid jeopardy-trivia-grid">
        {activeGroup.cards.map((card) => (
          <Flashcard
            key={card.prompt}
            frontLabel="Question"
            frontValue={card.prompt}
            backLabel="Answer"
            backValue={card.answer}
            wrapperClassName="jeopardy-trivia-card"
          />
        ))}
      </div>
    </div>
  );
}
