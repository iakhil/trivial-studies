import { Link } from "react-router-dom";

const geographyGroups = [
  {
    name: "World Basics",
    topics: [
      "Continents and regions",
      "Major countries by shape and location",
      "World capitals",
      "Time zones and hemispheres",
    ],
  },
  {
    name: "Land And Water",
    topics: [
      "Oceans and major seas",
      "Longest rivers",
      "Major mountain ranges",
      "Deserts, islands, and peninsulas",
    ],
  },
  {
    name: "Human Geography",
    topics: [
      "Population centers",
      "Borders and neighboring countries",
      "Official languages",
      "Global landmarks and monuments",
    ],
  },
];

export default function GeographyPage() {
  return (
    <div className="study-page">
      <Link to="/" className="back-link">
        &larr; Back to Topics
      </Link>
      <h1>Geography</h1>
      <p className="page-intro">
        Build fluency across the world map with place-based study sets.
      </p>

      <div className="study-groups">
        {geographyGroups.map((group) => (
          <section key={group.name} className="study-group-card">
            <h2>{group.name}</h2>
            <ul className="study-topic-list">
              {group.topics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
