import { FaWhatsapp } from "react-icons/fa";
import { asset } from "../utils/asset";
import { messages, whatsappUrl } from "../utils/whatsapp";
import "./CustomFurniture.css";

export default function CustomFurniture() {
  return (
    <section className="custom" id="custom" data-section aria-labelledby="custom-title">
      <div className="custom-media">
        <img
          src={asset("images/custom-banner.jpg")}
          alt="Sunlit living room with a leather sofa, white lounge chairs, and a round timber coffee table"
          loading="lazy"
        />
      </div>
      <div className="custom-shade" />
      <div className="container custom-content">
        <div className="custom-copy">
          <p className="hero-kicker">Custom furniture</p>
          <h2 id="custom-title">
            Your Space.
            <br />
            Your Style.
            <br />
            <em>Our Craft.</em>
          </h2>
          <p>
            From custom wardrobes to complete living spaces, we bring your furniture ideas to life.
          </p>
          <a
            className="btn btn-fill"
            href={whatsappUrl(messages.custom)}
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaWhatsapp aria-hidden="true" />
            Discuss Your Design
          </a>
        </div>
      </div>
    </section>
  );
}
