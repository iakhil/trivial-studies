import TopicCard from "../components/TopicCard";

export default function HomePage() {
  return (
    <div className="home-page">
      <h1>Trivial Studies</h1>
      <p className="subtitle">Pick a topic to study</p>
      <div className="topics-grid">
        <TopicCard title="American Literature" emoji="📚" to="/american-literature" />
        <TopicCard title="Art History" emoji="🖼️" to="/art-history" />
        <TopicCard title="Country Flags" emoji="🌍" to="/country-flags" />
        <TopicCard title="Countries & Capitals" emoji="🏛️" to="/country-capitals" />
        <TopicCard title="Countries & Populations" emoji="📊" to="/country-populations" />
        <TopicCard title="Dinosaurs" emoji="🦖" to="/dinosaurs" />
        <TopicCard title="Geologic Time" emoji="🪨" to="/geologic-time" />
        <TopicCard title="World's Mountain Ranges" emoji="🏔️" to="/mountain-ranges" />
        <TopicCard title="Geography" emoji="🧭" to="/geography" />
        <TopicCard title="Mythology" emoji="⚡" to="/mythology" />
        <TopicCard title="Opera Trivia" emoji="🎭" to="/opera-trivia" />
        <TopicCard title="Science Grab Bag" emoji="🔬" to="/science-grab-bag" />
        <TopicCard title="Shakespeare Trivia" emoji="🪶" to="/shakespeare-trivia" />
        <TopicCard title="Sports Trivia" emoji="🏅" to="/sports-trivia" />
        <TopicCard title="US History" emoji="📜" to="/us-history" />
        <TopicCard title="US Presidents" emoji="🇺🇸" to="/us-presidents" />
        <TopicCard title="US States Map Game" emoji="🗺️" to="/us-states-game" />
        <TopicCard title="Volcanoes" emoji="🌋" to="/volcanoes" />
        <TopicCard title="Word Origins & Language" emoji="🔤" to="/word-origins" />
        <TopicCard title="World History" emoji="🏺" to="/world-history" />
      </div>
    </div>
  );
}
