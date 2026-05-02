import TopicCard from "../components/TopicCard";

export default function HomePage() {
  return (
    <div className="home-page">
      <h1>Trivial Studies</h1>
      <p className="subtitle">Pick a topic to study</p>
      <div className="topics-grid">
        <TopicCard title="Country Flags" emoji="🌍" to="/country-flags" />
        <TopicCard title="Countries & Capitals" emoji="🏛️" to="/country-capitals" />
        <TopicCard title="Countries & Populations" emoji="📊" to="/country-populations" />
        <TopicCard title="World's Mountain Ranges" emoji="🏔️" to="/mountain-ranges" />
        <TopicCard title="Geography" emoji="🧭" to="/geography" />
      </div>
    </div>
  );
}
