import { useState } from "react";
import { Link } from "react-router-dom";
import { continents } from "../data/countryFlags";
import CountryCard from "../components/CountryCard";

export default function CountryFlagsPage() {
  const [activeTab, setActiveTab] = useState(0);
  const active = continents[activeTab];

  return (
    <div className="country-flags-page">
      <Link to="/" className="back-link">&larr; Back to Topics</Link>
      <h1>Country Flags</h1>
      <div className="continent-tabs">
        {continents.map((continent, i) => (
          <button
            key={continent.name}
            className={`continent-tab${i === activeTab ? " active" : ""}`}
            onClick={() => setActiveTab(i)}
          >
            {continent.name}
          </button>
        ))}
      </div>
      <div className="countries-grid">
        {active.countries.map((country) => (
          <CountryCard
            key={country.code}
            name={country.name}
            code={country.code}
          />
        ))}
      </div>
    </div>
  );
}
