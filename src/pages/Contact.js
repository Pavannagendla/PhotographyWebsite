import React, { useState } from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiMail, FiMapPin, FiPhone, FiArrowRight } from "react-icons/fi";
import usePageMeta from "../components/usePageMeta";
import { site } from "../data/site";

const TYPES = ["Portrait session", "Event or occasion", "Collaboration", "Something else"];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  usePageMeta("Contact", "Get in touch with Pavan Kumar Nagendla for portrait sessions, events and creative collaborations.");

  const [form, setForm] = useState({ name: "", email: "", type: TYPES[0], date: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name.trim()) errs.name = "Please enter your name.";
    if (!EMAIL_RE.test(form.email)) errs.email = "Please enter a valid email address.";
    if (!form.message.trim()) errs.message = "Please tell me a little about your idea.";
    setErrors(errs);
    if (Object.keys(errs).length) return;

    const subject = `${form.type} enquiry from ${form.name}`;
    const body = [
      form.message,
      "",
      "—",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Enquiry: ${form.type}`,
      form.date ? `Preferred date: ${form.date}` : null,
    ]
      .filter((l) => l !== null)
      .join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const field = (name) => ({
    id: name,
    name,
    value: form[name],
    onChange: update,
    "aria-invalid": errors[name] ? "true" : undefined,
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });

  return (
    <div className="page">
      <div className="container contact">
        <section className="contact__info">
          <p className="eyebrow">Contact</p>
          <h1 className="h1">Let&apos;s make something timeless.</h1>
          <p className="lead">
            Planning a portrait session, an occasion, or a creative collaboration? Send a message with a few details and
            I&apos;ll reply as soon as I can.
          </p>

          <ul className="contact__list">
            <li>
              <FiMail aria-hidden="true" />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <FaWhatsapp aria-hidden="true" />
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp {site.phone}</a>
            </li>
            <li>
              <FiPhone aria-hidden="true" />
              <a href={site.phoneHref}>{site.phone}</a>
            </li>
            <li>
              <FaInstagram aria-hidden="true" />
              <a href={site.instagram} target="_blank" rel="noopener noreferrer">{site.instagramHandle}</a>
            </li>
            <li>
              <FiMapPin aria-hidden="true" />
              <span>{site.location}</span>
            </li>
          </ul>
        </section>

        <section className="contact__form-wrap" aria-label="Enquiry form">
          {sent ? (
            <div className="notice" role="status">
              <h2 className="h3">Your email is ready to send</h2>
              <p>
                Your email app should have opened with your message filled in. Just press send. If nothing opened, email me
                directly at <a href={`mailto:${site.email}`}>{site.email}</a> or message me on{" "}
                <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>.
              </p>
              <button className="btn btn--ghost" onClick={() => setSent(false)}>Edit message</button>
            </div>
          ) : (
            <form className="form" onSubmit={submit} noValidate>
              <div className="form__row">
                <div className="form__field">
                  <label htmlFor="name">Name</label>
                  <input type="text" autoComplete="name" {...field("name")} />
                  {errors.name && <span id="name-error" className="form__error">{errors.name}</span>}
                </div>
                <div className="form__field">
                  <label htmlFor="email">Email</label>
                  <input type="email" autoComplete="email" {...field("email")} />
                  {errors.email && <span id="email-error" className="form__error">{errors.email}</span>}
                </div>
              </div>
              <div className="form__row">
                <div className="form__field">
                  <label htmlFor="type">What&apos;s it for?</label>
                  <select {...field("type")}>
                    {TYPES.map((t) => <option key={t}>{t}</option>)}
                  </select>
                </div>
                <div className="form__field">
                  <label htmlFor="date">Preferred date <span className="form__optional">(optional)</span></label>
                  <input type="date" {...field("date")} />
                </div>
              </div>
              <div className="form__field">
                <label htmlFor="message">Message</label>
                <textarea rows="6" maxLength={2000} placeholder="Tell me about your idea, location and anything else I should know." {...field("message")} />
                {errors.message && <span id="message-error" className="form__error">{errors.message}</span>}
              </div>
              <button type="submit" className="btn btn--light btn--block">
                Send message <FiArrowRight aria-hidden="true" />
              </button>
              <p className="form__hint">This opens your email app with the message ready to send.</p>
            </form>
          )}
        </section>
      </div>
    </div>
  );
}
