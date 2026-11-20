import { useEffect, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { messages, whatsappUrl } from "../utils/whatsapp";

export default function ProductModal({ product, onClose }) {
  const ref = useRef(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return undefined;
    if (!dialog.open) dialog.showModal();

    const handleCancel = (event) => {
      event.preventDefault();
      onCloseRef.current();
    };

    dialog.addEventListener("cancel", handleCancel);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      dialog.removeEventListener("cancel", handleCancel);
      document.body.style.overflow = previousOverflow;
      if (dialog.open) dialog.close();
    };
  }, []);

  function onBackdrop(event) {
    if (event.target === ref.current) onClose();
  }

  return (
    <dialog ref={ref} className="modal" aria-labelledby="product-title" onClick={onBackdrop}>
      <div className="modal-grid">
        <div className="modal-photo">
          <img
            src={product.image}
            alt={product.alt}
            style={product.position ? { objectPosition: product.position } : undefined}
          />
        </div>
        <div className="modal-body">
          <button type="button" className="modal-close" aria-label="Close details" onClick={onClose}>
            <FiX />
          </button>
          <p className="product-cat">{product.category}</p>
          <h2 id="product-title">{product.name}</h2>
          <p className="modal-price">{product.price}</p>
          <p className="modal-summary">{product.summary}</p>
          <ul className="modal-specs">
            {product.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
          <a
            className="btn btn-fill"
            href={whatsappUrl(messages.product(product))}
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaWhatsapp aria-hidden="true" />
            Enquire on WhatsApp
          </a>
        </div>
      </div>
    </dialog>
  );
}
