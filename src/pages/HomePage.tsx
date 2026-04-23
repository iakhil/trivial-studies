import TopicCard from "../components/TopicCard";

export default function HomePage() {
  return (
    <div className="home-page">
      <h1>Trivial Studies</h1>
      <p className="subtitle">Pick a topic to study</p>
      <div className="topics-grid">
        <TopicCard title="Country Flags" emoji="🌍" to="/country-flags" />
      </div>
    </div>
  );
}
