import { FiCompass, FiLayers, FiPenTool, FiTruck } from "react-icons/fi";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import "./WhyChooseUs.css";

const points = [
  {
    icon: FiLayers,
    title: "Quality Materials",
    text: "Carefully selected materials designed for durability.",
  },
  {
    icon: FiCompass,
    title: "Timeless Design",
    text: "Furniture that remains beautiful for years.",
  },
  {
    icon: FiPenTool,
    title: "Custom Solutions",
    text: "Furniture designed to fit your home and lifestyle.",
  },
  {
    icon: FiTruck,
    title: "Kerala Delivery",
    text: "Reliable delivery service across Kerala.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section section--cream" aria-labelledby="why-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="The workshop"
            id="why-title"
            title="Why Choose Us"
          />
          <ul className="why-grid">
            {points.map((point) => {
              const Icon = point.icon;
              return (
                <li key={point.title} className="why-card">
                  <Icon aria-hidden="true" />
                  <h3>{point.title}</h3>
                  <p>{point.text}</p>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
