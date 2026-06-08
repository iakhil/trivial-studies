import TopicCard from "../components/TopicCard";

export default function HomePage() {
  return (
    <div className="home-page">
      <h1>Trivial Studies</h1>
      <p className="subtitle">Pick a topic to study</p>
      <div className="featured-topic">
        <TopicCard title="Jeopardy Prep Hub" emoji="▦" to="/jeopardy-prep" />
      </div>
      <div className="topics-grid">
        <TopicCard title="20th Century Literature" emoji="📕" to="/20th-century-literature" />
        <TopicCard title="English Literature" emoji="📖" to="/english-literature" />
        <TopicCard title="American Literature" emoji="📚" to="/american-literature" />
        <TopicCard title="Ancient History" emoji="🏛️" to="/ancient-history" />
        <TopicCard title="Art History" emoji="🖼️" to="/art-history" />
        <TopicCard title="Astronomy" emoji="🔭" to="/astronomy" />
        <TopicCard title="Biology" emoji="🧬" to="/biology" />
        <TopicCard title="Brazilian Geography" emoji="🇧🇷" to="/brazilian-geography" />
        <TopicCard title="Chemistry" emoji="⚗️" to="/chemistry" />
        <TopicCard title="Country Flags" emoji="🌍" to="/country-flags" />
        <TopicCard title="Countries & Capitals" emoji="🏛️" to="/country-capitals" />
        <TopicCard title="Countries & Populations" emoji="📊" to="/country-populations" />
        <TopicCard title="Dinosaurs" emoji="🦖" to="/dinosaurs" />
        <TopicCard title="European History" emoji="🏰" to="/european-history" />
        <TopicCard title="Geologic Time" emoji="🪨" to="/geologic-time" />
        <TopicCard title="World's Mountain Ranges" emoji="🏔️" to="/mountain-ranges" />
        <TopicCard title="Geography" emoji="🧭" to="/geography" />
        <TopicCard title="Mythology" emoji="⚡" to="/mythology" />
        <TopicCard title="Opera Trivia" emoji="🎭" to="/opera-trivia" />
        <TopicCard title="Polish History" emoji="🇵🇱" to="/polish-history" />
        <TopicCard title="World Rivers by Country" emoji="🌊" to="/rivers" />
        <TopicCard title="Science Grab Bag" emoji="🔬" to="/science-grab-bag" />
        <TopicCard title="Shakespeare Trivia" emoji="🪶" to="/shakespeare-trivia" />
        <TopicCard title="Sports Trivia" emoji="🏅" to="/sports-trivia" />
        <TopicCard title="US History" emoji="📜" to="/us-history" />
        <TopicCard title="US National Parks" emoji="🏞️" to="/us-national-parks" />
        <TopicCard title="US Presidents" emoji="🇺🇸" to="/us-presidents" />
        <TopicCard title="US States Map Game" emoji="🗺️" to="/us-states-game" />
        <TopicCard title="Volcanoes" emoji="🌋" to="/volcanoes" />
        <TopicCard title="Word Origins & Language" emoji="🔤" to="/word-origins" />
        <TopicCard title="World Wars" emoji="🎖️" to="/world-wars" />
        <TopicCard title="World History" emoji="🏺" to="/world-history" />
      </div>
    </div>
  );
}
