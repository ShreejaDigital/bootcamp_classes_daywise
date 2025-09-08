import "../styles/Feature.css";

export default function FeatureCard({ icon, title, desc }) {
  return (
    <div className="feature-card">
      {icon}
      <div className="feature-text">
        <h2 className="feature-title">{title}</h2>
        <p className="feature-desc">{desc}</p>
      </div>
    </div>
  );
}
