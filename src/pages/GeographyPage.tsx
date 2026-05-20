import { useState } from "react";
import { Link } from "react-router-dom";
import FlashcardChallenge from "../components/FlashcardChallenge";

const DEFAULT_MAP_ZOOM = 1.5;
const MIN_MAP_ZOOM = 1;
const MAX_MAP_ZOOM = 3;
const MAP_ZOOM_STEP = 0.5;

function clampMapZoom(zoom: number) {
  return Math.min(MAX_MAP_ZOOM, Math.max(MIN_MAP_ZOOM, zoom));
}

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

const geographyChallengeCards = [
  {
    id: "largest-ocean",
    prompt: "What is the largest ocean on Earth?",
    answer: "The Pacific Ocean.",
  },
  {
    id: "equator",
    prompt: "What imaginary line divides Earth into Northern and Southern Hemispheres?",
    answer: "The Equator.",
  },
  {
    id: "prime-meridian",
    prompt: "What imaginary line is 0 degrees longitude?",
    answer: "The Prime Meridian.",
  },
  {
    id: "largest-desert",
    prompt: "What is the largest hot desert in the world?",
    answer: "The Sahara Desert.",
  },
  {
    id: "longest-river",
    prompt: "Which river is commonly cited as the longest river in the world?",
    answer: "The Nile River.",
  },
  {
    id: "largest-country-area",
    prompt: "What is the largest country in the world by land area?",
    answer: "Russia.",
  },
  {
    id: "smallest-country",
    prompt: "What is the smallest independent country in the world?",
    answer: "Vatican City.",
  },
  {
    id: "highest-mountain",
    prompt: "What is the highest mountain above sea level?",
    answer: "Mount Everest.",
  },
  {
    id: "archipelago",
    prompt: "What term means a group or chain of islands?",
    answer: "An archipelago.",
  },
  {
    id: "landlocked",
    prompt: "What does it mean for a country to be landlocked?",
    answer: "It has no coastline or direct access to the ocean.",
  },
  {
    id: "strait",
    prompt: "What is a strait?",
    answer: "A narrow passage of water connecting two larger bodies of water.",
  },
  {
    id: "peninsula",
    prompt: "What is a peninsula?",
    answer: "A piece of land surrounded by water on most sides but connected to a larger landmass.",
  },
];

export default function GeographyPage() {
  const [mapZoom, setMapZoom] = useState(DEFAULT_MAP_ZOOM);
  const [mode, setMode] = useState<"study" | "challenge">("study");

  return (
    <div className="study-page geography-page">
      <Link to="/" className="back-link">
        &larr; Back to Topics
      </Link>
      <h1>Geography</h1>
      <p className="page-intro">
        Build fluency across the world map with place-based study sets.
      </p>

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
        <>
          <section className="geography-map-panel" aria-labelledby="world-map-title">
            <div className="geography-map-header">
              <div>
                <p className="geography-map-kicker">Reference Map</p>
                <h2 id="world-map-title">World map labelled with country names</h2>
              </div>
              <div
                className="geography-map-controls"
                role="group"
                aria-label="Map zoom controls"
              >
                <button
                  type="button"
                  className="geography-map-button"
                  onClick={() => {
                    setMapZoom((zoom) => clampMapZoom(zoom - MAP_ZOOM_STEP));
                  }}
                  disabled={mapZoom <= MIN_MAP_ZOOM}
                >
                  Zoom out
                </button>
                <span className="geography-map-zoom">
                  {Math.round(mapZoom * 100)}%
                </span>
                <button
                  type="button"
                  className="geography-map-button"
                  onClick={() => {
                    setMapZoom((zoom) => clampMapZoom(zoom + MAP_ZOOM_STEP));
                  }}
                  disabled={mapZoom >= MAX_MAP_ZOOM}
                >
                  Zoom in
                </button>
                <button
                  type="button"
                  className="geography-map-button geography-map-reset"
                  onClick={() => {
                    setMapZoom(DEFAULT_MAP_ZOOM);
                  }}
                  disabled={mapZoom === DEFAULT_MAP_ZOOM}
                >
                  Reset
                </button>
              </div>
            </div>

            <p className="geography-map-help">
              Scroll to pan across the map and zoom in to read smaller country labels.
            </p>

            <div className="geography-map-viewport">
              <div
                className="geography-map-canvas"
                style={{
                  width: `${mapZoom * 100}%`,
                  minWidth: `${900 * mapZoom}px`,
                }}
              >
                <img
                  className="geography-map-image"
                  src="/world-map-with-labels.svg"
                  alt="World map labelled with country names"
                />
              </div>
            </div>
          </section>

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
        </>
      ) : (
        <FlashcardChallenge
          cards={geographyChallengeCards}
          promptLabel="Question"
          answerLabel="Answer"
        />
      )}
    </div>
  );
}
