import { useState } from "react";

interface FlashcardProps {
  frontLabel: string;
  frontValue: string;
  backLabel: string;
  backValue: string;
  wrapperClassName?: string;
}

export default function Flashcard({
  frontLabel,
  frontValue,
  backLabel,
  backValue,
  wrapperClassName,
}: FlashcardProps) {
  const [flipped, setFlipped] = useState(false);
  const wrapperClasses = `country-card-wrapper fact-card-wrapper${
    wrapperClassName ? ` ${wrapperClassName}` : ""
  }`;

  return (
    <div
      className={wrapperClasses}
      onClick={() => setFlipped(!flipped)}
    >
      <div className={`country-card-inner${flipped ? " flipped" : ""}`}>
        <div className="country-card-front fact-card-front">
          <span className="fact-card-label">{frontLabel}</span>
          <span className="fact-card-country">{frontValue}</span>
        </div>
        <div className="country-card-back fact-card-back">
          <span className="fact-card-label">{backLabel}</span>
          <span className="fact-card-value">{backValue}</span>
        </div>
      </div>
    </div>
  );
}
