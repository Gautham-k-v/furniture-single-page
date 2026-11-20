import { FaWhatsapp } from "react-icons/fa";
import { messages, whatsappUrl } from "../utils/whatsapp";
import "./WhatsAppButton.css";

export default function WhatsAppButton() {
  return (
    <a
      className="wa-float"
      href={whatsappUrl(messages.general)}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Chat with Woodcraft Furniture on WhatsApp"
    >
      <FaWhatsapp aria-hidden="true" />
    </a>
  );
}
