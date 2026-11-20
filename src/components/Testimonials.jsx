import { FaStar } from "react-icons/fa";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import "./Testimonials.css";

const testimonials = [
  {
    quote: "Beautiful furniture and excellent quality. The sofa completely transformed our living room.",
    name: "Anjali Menon",
    place: "Kottayam",
  },
  {
    quote: "Great service, reasonable pricing, and delivery on time. Highly recommended!",
    name: "Rohit Nair",
    place: "Kochi",
  },
  {
    quote:
      "The custom wardrobe was exactly what we wanted. Excellent craftsmanship and attention to detail.",
    name: "Meera Thomas",
    place: "Changanassery",
  },
];

function Stars() {
  return (
    <span className="stars" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }, (_, index) => (
        <FaStar key={index} aria-hidden="true" />
      ))}
    </span>
  );
}

export default function Testimonials() {
  return (
    <section className="section section--beige" aria-labelledby="reviews-title">
      <div className="container">
        <Reveal>
          <SectionHeading eyebrow="From Kerala homes" id="reviews-title" title="What Our Customers Say" />
          <ul className="quote-grid">
            {testimonials.map((item) => (
              <li key={item.name} className="quote-card">
                <Stars />
                <blockquote>
                  <p>“{item.quote}”</p>
                </blockquote>
                <footer>
                  <strong>{item.name}</strong>
                  <span>{item.place}</span>
                </footer>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
