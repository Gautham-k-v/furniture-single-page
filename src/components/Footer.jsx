import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { footerCategories, navLinks, site } from "../data/site";
import { messages, whatsappUrl } from "../utils/whatsapp";
import "./Footer.css";

export default function Footer({ onBrowse }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <p className="footer-logo">
              {site.brand}
              <span>{site.brandLine}</span>
            </p>
            <p className="footer-tag">Crafting comfort. Creating homes.</p>
            <div className="socials">
              <a href={site.instagram} target="_blank" rel="noreferrer noopener" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href={site.facebook} target="_blank" rel="noreferrer noopener" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a
                href={whatsappUrl(messages.general)}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          <div>
            <p className="footer-label">Navigate</p>
            <ul className="footer-list">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="footer-label">Furniture</p>
            <ul className="footer-list">
              {footerCategories.map((item) => (
                <li key={item.label}>
                  <button type="button" className="footer-link" onClick={() => onBrowse(item.filter)}>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="footer-label">Showroom</p>
            <ul className="footer-list">
              <li>
                <a href={site.mapsUrl} target="_blank" rel="noreferrer noopener">
                  {site.address}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
              </li>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              {site.hours.map((slot) => (
                <li key={slot.days}>
                  {slot.days}: {slot.time}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-base">
          <p>© 2026 Woodcraft Furniture. All rights reserved.</p>
          <p>MC Road, Kottayam</p>
        </div>
      </div>
    </footer>
  );
}
