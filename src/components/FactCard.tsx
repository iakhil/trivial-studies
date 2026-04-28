import { useState } from "react";

interface FactCardProps {
  countryName: string;
  factLabel: string;
  factValue: string;
}

export default function FactCard({
  countryName,
  factLabel,
  factValue,
}: FactCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="country-card-wrapper fact-card-wrapper"
      onClick={() => setFlipped(!flipped)}
    >
      <div className={`country-card-inner${flipped ? " flipped" : ""}`}>
        <div className="country-card-front fact-card-front">
          <span className="fact-card-label">Country</span>
          <span className="fact-card-country">{countryName}</span>
        </div>
        <div className="country-card-back fact-card-back">
          <span className="fact-card-label">{factLabel}</span>
          <span className="fact-card-value">{factValue}</span>
        </div>
      </div>
    </div>
  );
}
