import { asset } from "../utils/asset";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home" data-section aria-label="Introduction">
      <div className="hero-media">
        <img
          src={asset("images/hero.jpg")}
          alt="Sunlit living room with a grey sofa, a timber coffee table, leather chairs, and indoor plants"
          fetchPriority="high"
        />
      </div>
      <div className="hero-shade" />
      <div className="container hero-content">
        <div className="hero-copy">
          <p className="hero-kicker">Showroom · Kottayam, Kerala</p>
          <h1>
            <span>Furniture That</span>
            <span>
              <em>Feels Like Home.</em>
            </span>
          </h1>
          <p className="hero-text">
            Thoughtfully crafted furniture designed to bring comfort, character, and
            timeless elegance to your home.
          </p>
          <div className="hero-actions">
            <a className="btn btn-fill" href="#collections">
              Explore Collection
            </a>
            <a className="btn btn-ghost" href="#custom">
              Custom Furniture
            </a>
          </div>
        </div>
      </div>
      <a className="hero-scroll" href="#collections">
        <span>Scroll</span>
        <span className="hero-scroll-line" aria-hidden="true" />
      </a>
    </section>
  );
}
