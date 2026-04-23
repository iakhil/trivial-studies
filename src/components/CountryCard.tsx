import { useState } from "react";

interface CountryCardProps {
  name: string;
  code: string;
}

export default function CountryCard({ name, code }: CountryCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="country-card-wrapper" onClick={() => setFlipped(!flipped)}>
      <div className={`country-card-inner${flipped ? " flipped" : ""}`}>
        <div className="country-card-front">
          <img
            className="country-flag"
            src={`/flags/${code}.svg`}
            alt={`Flag of ${name}`}
          />
        </div>
        <div className="country-card-back">
          <span className="country-name">{name}</span>
        </div>
      </div>
    </div>
  );
}
