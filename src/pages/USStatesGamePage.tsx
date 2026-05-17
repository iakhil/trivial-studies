import { useState } from "react";
import { Link } from "react-router-dom";
import { usStateTargets } from "../data/usStatesGame";
import type { USStateTarget } from "../data/usStatesGame";

const MAP_WIDTH = 959;
const MAP_HEIGHT = 593;

function shuffleStates(states: USStateTarget[]) {
  const shuffled = [...states];

  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

export default function USStatesGamePage() {
  const [shuffledStates, setShuffledStates] = useState(() =>
    shuffleStates(usStateTargets)
  );
  const [placedStates, setPlacedStates] = useState<Record<string, boolean>>({});
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [feedback, setFeedback] = useState("Drag a state name onto its spot.");
  const placedCount = Object.keys(placedStates).length;
  const isComplete = placedCount === usStateTargets.length;

  function placeState(targetCode: string, droppedCode: string | null) {
    if (!droppedCode || placedStates[targetCode]) {
      return;
    }

    const droppedState = usStateTargets.find((state) => state.code === droppedCode);
    const targetState = usStateTargets.find((state) => state.code === targetCode);

    if (!droppedState || !targetState) {
      return;
    }

    if (droppedCode === targetCode) {
      setPlacedStates((current) => ({
        ...current,
        [targetCode]: true,
      }));
      setSelectedState(null);
      setFeedback(`${droppedState.name} placed correctly.`);
      return;
    }

    setFeedback(`${droppedState.name} does not go on ${targetState.name}.`);
  }

  function resetGame() {
    setShuffledStates(shuffleStates(usStateTargets));
    setPlacedStates({});
    setSelectedState(null);
    setFeedback("Drag a state name onto its spot.");
  }

  return (
    <div className="study-page states-game-page">
      <Link to="/" className="back-link">
        &larr; Back to Topics
      </Link>
      <h1>US States Map Game</h1>
      <p className="page-intro">
        Drag each state name into the matching state boundary on the map.
      </p>

      <div className="states-game-status">
        <p className="states-game-score">
          {placedCount} / {usStateTargets.length} states placed
        </p>
        <p className={`states-game-feedback${isComplete ? " complete" : ""}`}>
          {isComplete ? "All states placed correctly." : feedback}
        </p>
        <button type="button" className="states-game-reset" onClick={resetGame}>
          Reset
        </button>
      </div>

      <div className="states-game-layout">
        <section className="states-map-panel" aria-label="Blank United States map">
          <div className="states-map-canvas">
            <img
              className="states-map-image"
              src="/us-states-map.svg"
              alt="Blank map of the United States with state boundaries"
              draggable={false}
            />
            {usStateTargets.map((state) => {
              const isPlaced = placedStates[state.code];
              const isSelected = selectedState === state.code;

              return (
                <button
                  key={state.code}
                  type="button"
                  className={`state-drop-target${isPlaced ? " placed" : ""}${
                    isSelected ? " selected" : ""
                  }`}
                  style={{
                    left: `${(state.x / MAP_WIDTH) * 100}%`,
                    top: `${(state.y / MAP_HEIGHT) * 100}%`,
                  }}
                  aria-label={`Drop target for ${state.name}`}
                  onDragOver={(event) => event.preventDefault()}
                  onDrop={(event) => {
                    event.preventDefault();
                    placeState(state.code, event.dataTransfer.getData("text/plain"));
                  }}
                  onClick={() => {
                    placeState(state.code, selectedState);
                  }}
                >
                  {isPlaced ? state.name : null}
                </button>
              );
            })}
          </div>
        </section>

        <section className="state-name-bank" aria-label="State name bank">
          {shuffledStates.map((state) => {
            const isPlaced = placedStates[state.code];
            const isSelected = selectedState === state.code;

            return (
              <button
                key={state.code}
                type="button"
                className={`state-name-chip${isPlaced ? " placed" : ""}${
                  isSelected ? " selected" : ""
                }`}
                draggable={!isPlaced}
                disabled={isPlaced}
                onDragStart={(event) => {
                  event.dataTransfer.setData("text/plain", state.code);
                  event.dataTransfer.effectAllowed = "move";
                  setSelectedState(state.code);
                }}
                onDragEnd={() => {
                  setSelectedState(null);
                }}
                onClick={() => {
                  if (!isPlaced) {
                    setSelectedState((current) =>
                      current === state.code ? null : state.code
                    );
                  }
                }}
              >
                {state.name}
              </button>
            );
          })}
        </section>
      </div>
    </div>
  );
}
