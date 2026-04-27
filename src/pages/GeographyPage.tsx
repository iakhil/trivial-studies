import { useState } from "react";
import { Link } from "react-router-dom";

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

export default function GeographyPage() {
  const [mapZoom, setMapZoom] = useState(DEFAULT_MAP_ZOOM);

  return (
    <div className="study-page geography-page">
      <Link to="/" className="back-link">
        &larr; Back to Topics
      </Link>
      <h1>Geography</h1>
      <p className="page-intro">
        Build fluency across the world map with place-based study sets.
      </p>

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
            <span className="geography-map-zoom">{Math.round(mapZoom * 100)}%</span>
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
    </div>
  );
}
