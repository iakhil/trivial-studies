import { Link } from "react-router-dom";

interface TopicCardProps {
  title: string;
  emoji: string;
  to: string;
}

export default function TopicCard({ title, emoji, to }: TopicCardProps) {
  return (
    <Link to={to} className="topic-card">
      <span className="topic-card-emoji">{emoji}</span>
      <span className="topic-card-title">{title}</span>
    </Link>
  );
}
