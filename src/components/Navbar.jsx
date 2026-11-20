import { useEffect, useRef, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks, site } from "../data/site";
import { messages, whatsappUrl } from "../utils/whatsapp";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const toggleRef = useRef(null);
  const openRef = useRef(false);
  openRef.current = open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const hidden = [document.querySelector("main"), document.querySelector("footer"), document.querySelector(".wa-float")];
    hidden.forEach((element) => {
      if (!element) return;
      if (open) element.setAttribute("inert", "");
      else element.removeAttribute("inert");
    });
    return () => {
      document.body.style.overflow = "";
      hidden.forEach((element) => element?.removeAttribute("inert"));
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape" && openRef.current) {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onResize = () => {
      if (window.innerWidth > 980) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    const nodes = [...document.querySelectorAll("[data-section]")];
    const visible = new Set();

    const update = () => {
      let best = null;
      visible.forEach((id) => {
        const element = document.getElementById(id);
        if (!element) return;
        const score = Math.abs(element.getBoundingClientRect().top - 80);
        if (!best || score < best.score) best = { id, score };
      });
      if (best) setActive(best.id);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        });
        update();
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const frame = requestAnimationFrame(() => {
      document.querySelector("#mobile-menu a")?.focus();
    });
    return () => cancelAnimationFrame(frame);
  }, [open]);

  const light = !scrolled && !open;

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className={`nav ${light ? "nav--light" : "nav--solid"}`}>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <div className="nav-bar">
        <div className="container nav-inner">
          <a className="logo" href="#home" onClick={closeMenu}>
            <span className="logo-word">{site.brand}</span>
            <span className="logo-sub">{site.brandLine}</span>
          </a>

          <nav className="nav-links" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                aria-current={active === link.id ? "true" : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <a
              className="icon-btn"
              href={whatsappUrl(messages.general)}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="WhatsApp the showroom"
            >
              <FaWhatsapp />
            </a>
            <a className="btn btn-fill nav-cta" href="#collections">
              Explore Collection
            </a>
            <button
              type="button"
              ref={toggleRef}
              className="nav-toggle"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <div className="nav-panel" id="mobile-menu">
          <nav className="nav-panel-links" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                aria-current={active === link.id ? "true" : undefined}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="nav-panel-foot">
            <a className="btn btn-fill" href="#collections" onClick={closeMenu}>
              Explore Collection
            </a>
            <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
