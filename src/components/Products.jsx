import { useCallback, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { filters, products } from "../data/products";
import { messages, whatsappUrl } from "../utils/whatsapp";
import ProductModal from "./ProductModal";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import "./Products.css";

export default function Products({ filter, onFilter }) {
  const [selected, setSelected] = useState(null);
  const closeProduct = useCallback(() => setSelected(null), []);
  const shown =
    filter === "All"
      ? products
      : products.filter((item) => {
          if (filter === "Wardrobes" || filter === "Storage Furniture") {
            return item.type === "Wardrobes" || item.category === "Storage";
          }
          return item.category === filter || item.type === filter;
        });
  const roomFilter = filters.includes(filter);
  const countLabel =
    shown.length === 0 ? "Made to order" : shown.length === 1 ? "1 piece" : `${shown.length} pieces`;

  return (
    <section className="section section--white" id="products" aria-labelledby="products-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Featured"
            id="products-title"
            title="Designed for Everyday Living"
            text="Discover furniture that combines craftsmanship, comfort, and timeless design."
          />

          <div className="filter-row">
            <div className="filters" role="group" aria-label="Filter furniture">
              {filters.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={`chip ${roomFilter && filter === item ? "is-active" : ""}`}
                  aria-pressed={roomFilter && filter === item}
                  onClick={() => onFilter(item)}
                >
                  {item}
                </button>
              ))}
            </div>
            <p className="count">{roomFilter ? countLabel : `${filter} · ${countLabel}`}</p>
          </div>

          {shown.length === 0 ? (
            <div className="empty">
              <h3>Made for the room you work in</h3>
              <p>
                Desks, study units, and shelving are planned around your space. Tell us the
                room and how you like to work, and the showroom will suggest a piece.
              </p>
              <a
                className="btn btn-fill"
                href={whatsappUrl(messages.workspace)}
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaWhatsapp aria-hidden="true" />
                Discuss a workspace
              </a>
            </div>
          ) : (
            <ul className="product-grid" key={filter}>
              {shown.map((product) => (
                <li key={product.id}>
                  <article className="product-card">
                    <div className="product-photo">
                      <img
                        src={product.image}
                        alt={product.alt}
                        loading="lazy"
                        style={product.position ? { objectPosition: product.position } : undefined}
                      />
                    </div>
                    <div className="product-body">
                      <p className="product-cat">{product.category}</p>
                      <h3>{product.name}</h3>
                      <p className="product-price">{product.price}</p>
                      <div className="product-actions">
                        <button type="button" className="btn btn-line" onClick={() => setSelected(product)}>
                          View Details
                        </button>
                        <a
                          className="btn btn-soft"
                          href={whatsappUrl(messages.product(product))}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <FaWhatsapp aria-hidden="true" />
                          WhatsApp
                        </a>
                      </div>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          )}

          <p className="price-note">
            Prices are showroom prices in Kottayam. Delivery across Kerala is confirmed before dispatch.
          </p>
        </Reveal>
      </div>

      {selected ? <ProductModal product={selected} onClose={closeProduct} /> : null}
    </section>
  );
}
