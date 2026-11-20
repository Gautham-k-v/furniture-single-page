import { useState } from "react";
import { asset } from "../utils/asset";
import Reveal from "./Reveal";
import "./About.css";

export default function About() {
  const [open, setOpen] = useState(false);

  return (
    <section className="section section--beige" id="about" data-section aria-labelledby="about-title">
      <div className="container">
        <Reveal>
          <div className="about-grid">
            <figure className="about-photo">
              <img
                src={asset("images/about.jpg")}
                alt="Bright living room with timber ceiling beams, a fireplace, and upholstered seating"
                loading="lazy"
              />
            </figure>
            <div className="about-copy">
              <p className="section-label">Our showroom</p>
              <h2 id="about-title">
                Built With Care.
                <br />
                <em>Made To Last.</em>
              </h2>
              <p>
                At Woodcraft Furniture, we believe furniture is more than just something you
                place in a room. It becomes part of your everyday life. We combine quality
                materials, thoughtful design, and craftsmanship to create furniture that feels
                beautiful, comfortable, and built to last.
              </p>
              <button
                type="button"
                className="btn btn-line"
                aria-expanded={open}
                aria-controls="our-story"
                onClick={() => setOpen((value) => !value)}
              >
                {open ? "Show less" : "Discover Our Story"}
              </button>
            </div>
          </div>

          {open ? (
            <div className="about-more" id="our-story">
              <p>
                The showroom sits on MC Road in Kottayam. Most families start there — sitting
                on a sofa, opening a wardrobe, comparing wood tones in daylight. If a piece
                needs a different size, finish, or interior, we measure the room before it is made.
              </p>
              <p>
                We work mainly with teak, rubberwood, and selected veneers, and with linens and
                performance fabrics suited to Kerala’s climate. Finished pieces are delivered
                across the state, from Kochi and Thrissur to Trivandrum, once the order and the
                delivery day are confirmed.
              </p>
            </div>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
