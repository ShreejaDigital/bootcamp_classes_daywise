import { Link } from "react-router";
import "../styles/HeroSection.css";
export default function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-container">
        <div className="hero-left-outer">
          <div className="hero-left-inner">
            <p className="hero-starting">
              Starting At <span className="hero-price">$999</span>
            </p>
            <h2 className="hero-title">The best notebook collection 2024</h2>
            <h3 className="hero-subtitle">
              Exclusive offer <span className="hero-discount">-10%</span> off
              this week
            </h3>
            <Link to="/product/79" className="hero-btn">
              Shop Now
            </Link>
          </div>
        </div>
        <div className="hero-right">
          <img src="/hero.png" alt="hero" />
        </div>
      </div>
    </div>
  );
}
