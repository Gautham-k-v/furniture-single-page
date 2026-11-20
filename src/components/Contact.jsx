import { useEffect, useRef, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiClock, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { interests, site } from "../data/site";
import { messages, openWhatsApp, whatsappUrl } from "../utils/whatsapp";
import Reveal from "./Reveal";
import "./Contact.css";

const emptyForm = {
  name: "",
  phone: "",
  interest: "",
  message: "",
};

function isValidPhone(value) {
  const digits = value.replace(/\D/g, "");
  if (digits.length === 10) return /^[6-9]\d{9}$/.test(digits);
  if (digits.length === 11 && digits.startsWith("0")) return /^[6-9]\d{9}$/.test(digits.slice(1));
  if (digits.length === 12 && digits.startsWith("91")) return /^[6-9]\d{9}$/.test(digits.slice(2));
  return false;
}

function validate(form) {
  const errors = {};
  if (form.name.trim().length < 2) errors.name = "Please enter your full name.";
  if (!isValidPhone(form.phone)) errors.phone = "Enter a valid 10-digit mobile number.";
  if (!form.interest) errors.interest = "Please choose what you’re interested in.";
  if (form.message.trim().length < 10) {
    errors.message = "Please add a short message so we know how to help.";
  }
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(null);
  const successRef = useRef(null);

  useEffect(() => {
    if (sent) successRef.current?.focus();
  }, [sent]);

  function update(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  }

  function onSubmit(event) {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    const firstInvalid = Object.keys(nextErrors)[0];
    if (firstInvalid) {
      document.getElementById(firstInvalid)?.focus();
      return;
    }

    const payload = {
      name: form.name.trim(),
      phone: form.phone.trim(),
      interest: form.interest,
      message: form.message.trim(),
    };
    const url = whatsappUrl(messages.enquiry(payload));
    setSent({ name: payload.name, url });
    setForm(emptyForm);
    openWhatsApp(messages.enquiry(payload));
  }

  return (
    <section className="section section--cream contact" id="contact" data-section aria-labelledby="contact-title">
      <div className="container">
        <Reveal>
          <div className="contact-grid">
            <div>
              <p className="section-label">Visit or enquire</p>
              <h2 id="contact-title">
                Let’s Furnish
                <br />
                <em>Your Home.</em>
              </h2>
              <p className="contact-lead">
                Visit our showroom or get in touch to discover furniture that fits your home perfectly.
              </p>

              <p className="contact-name">WOODCRAFT FURNITURE</p>
              <ul className="detail-list">
                <li>
                  <FiMapPin aria-hidden="true" />
                  <div>
                    <span>Address</span>
                    <a href={site.mapsUrl} target="_blank" rel="noreferrer noopener">
                      {site.address}
                    </a>
                  </div>
                </li>
                <li>
                  <FiPhone aria-hidden="true" />
                  <div>
                    <span>Phone</span>
                    <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
                  </div>
                </li>
                <li>
                  <FiMail aria-hidden="true" />
                  <div>
                    <span>Email</span>
                    <a href={`mailto:${site.email}`}>{site.email}</a>
                  </div>
                </li>
                <li>
                  <FiClock aria-hidden="true" />
                  <div>
                    <span>Opening Hours</span>
                    <dl className="hours">
                      {site.hours.map((slot) => (
                        <div key={slot.days}>
                          <dt>{slot.days}</dt>
                          <dd>{slot.time}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </li>
              </ul>

              <div className="contact-actions">
                <a className="btn btn-fill" href={`tel:${site.phoneTel}`}>
                  <FiPhone aria-hidden="true" />
                  Call Now
                </a>
                <a
                  className="btn btn-line"
                  href={whatsappUrl(messages.general)}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FaWhatsapp aria-hidden="true" />
                  WhatsApp Us
                </a>
                <a className="btn btn-line" href={site.mapsUrl} target="_blank" rel="noreferrer noopener">
                  <FiMapPin aria-hidden="true" />
                  Get Directions
                </a>
              </div>
            </div>

            <div className="contact-card">
              {sent ? (
                <div className="form-success" role="status" tabIndex={-1} ref={successRef}>
                  <p className="section-label">Enquiry ready</p>
                  <h3>Thank you, {sent.name}.</h3>
                  <p>
                    WhatsApp should now be open with your message to the showroom. If it didn’t,
                    use the button below.
                  </p>
                  <a className="btn btn-fill" href={sent.url} target="_blank" rel="noreferrer noopener">
                    <FaWhatsapp aria-hidden="true" />
                    Open WhatsApp
                  </a>
                  <button type="button" className="btn btn-line" onClick={() => setSent(null)}>
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate>
                  <h3>Send an enquiry</h3>
                  <p className="form-note">
                    This opens WhatsApp with your details filled in, ready to send to the showroom.
                  </p>

                  <div className="field">
                    <label htmlFor="name">Full Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={update}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name ? <p className="field-error" id="name-error">{errors.name}</p> : null}
                  </div>

                  <div className="field">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      placeholder="98765 43210"
                      value={form.phone}
                      onChange={update}
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                    />
                    {errors.phone ? <p className="field-error" id="phone-error">{errors.phone}</p> : null}
                  </div>

                  <div className="field">
                    <label htmlFor="interest">Interested In</label>
                    <select
                      id="interest"
                      name="interest"
                      value={form.interest}
                      onChange={update}
                      aria-invalid={Boolean(errors.interest)}
                      aria-describedby={errors.interest ? "interest-error" : undefined}
                    >
                      <option value="">Select a category</option>
                      {interests.map((interest) => (
                        <option key={interest} value={interest}>
                          {interest}
                        </option>
                      ))}
                    </select>
                    {errors.interest ? (
                      <p className="field-error" id="interest-error">{errors.interest}</p>
                    ) : null}
                  </div>

                  <div className="field">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={form.message}
                      onChange={update}
                      placeholder="Tell us about the room, the piece, or a visit."
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? "message-error" : undefined}
                    />
                    {errors.message ? (
                      <p className="field-error" id="message-error">{errors.message}</p>
                    ) : null}
                  </div>

                  <button type="submit" className="btn btn-fill form-submit">
                    Send enquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
