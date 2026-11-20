import { FiArrowRight } from "react-icons/fi";
import { categories } from "../data/categories";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import "./Categories.css";

export default function Categories({ onBrowse }) {
  return (
    <section className="section section--cream categories" aria-labelledby="categories-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Collections"
            id="categories-title"
            title="Find Your Perfect Piece"
            text="Explore thoughtfully designed furniture for every corner of your home."
          />
          <div className="category-grid">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                className={`cat-card cat-card--${category.layout}`}
                onClick={() => onBrowse(category.filter)}
              >
                <img src={category.image} alt={category.alt} aria-hidden="true" />
                <span className="cat-copy">
                  <span className="cat-name">{category.name}</span>
                  <span className="cat-desc">{category.description}</span>
                  <span className="cat-more">
                    {category.filter === "custom" ? "Start a design" : "View pieces"}
                    <FiArrowRight aria-hidden="true" />
                  </span>
                </span>
              </button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
