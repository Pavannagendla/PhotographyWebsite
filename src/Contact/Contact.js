import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main className="contact-wrapper">

      {/* LEFT PANEL */}
      <aside className="contact-left">
        <div className="contact-left-inner">
          <p className="contact-eyebrow">Get In Touch</p>
          <h1 className="contact-heading">
            Let's create<br />
            something<br />
            <span>meaningful.</span>
          </h1>
          <p className="contact-desc">
            Whether it's a collaboration, a project, or just a conversation
            about photography — I'd love to hear from you.
          </p>

          <div className="contact-info-list">
            <a
              href="https://www.instagram.com/hacker_camerawork"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-info-item"
            >
              <div className="contact-icon">
                <i className="fab fa-instagram"></i>
              </div>
              <div>
                <p className="info-label">Instagram</p>
                <p className="info-value">@hacker_camerawork</p>
              </div>
            </a>

            <a
              href="mailto:hackercamerawork@gmail.com"
              className="contact-info-item"
            >
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <p className="info-label">Email</p>
                <p className="info-value">hackercamerawork@gmail.com</p>
              </div>
            </a>

            <div className="contact-info-item">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <p className="info-label">Based In</p>
                <p className="info-value">Andhra Pradesh, India</p>
              </div>
            </div>
          </div>

          <div className="contact-quote">
            "Every frame tells a story worth sharing."
          </div>
        </div>
      </aside>

      {/* RIGHT PANEL */}
      <section className="contact-right">
        {sent ? (
          <div className="success-box">
            <div className="success-icon">
              <i className="fas fa-check"></i>
            </div>
            <h2>Message Sent!</h2>
            <p>Thank you for reaching out. I'll get back to you within a day.</p>
            <button
              className="send-again-btn"
              onClick={() => { setSent(false); setForm({ name: "", email: "", message: "" }); }}
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2 className="form-title">Send a Message</h2>

            <div className={`form-group ${focused === "name" ? "active" : ""}`}>
              <label>Your Name</label>
              <input
                type="text"
                placeholder="Pavan Kumar"
                required
                value={form.name}
                onFocus={() => setFocused("name")}
                onBlur={() => setFocused("")}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>

            <div className={`form-group ${focused === "email" ? "active" : ""}`}>
              <label>Email Address</label>
              <input
                type="email"
                placeholder="your@email.com"
                required
                value={form.email}
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused("")}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            <div className={`form-group ${focused === "message" ? "active" : ""}`}>
              <label>Your Message</label>
              <textarea
                placeholder="Tell me about your project or idea..."
                rows="5"
                required
                value={form.message}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused("")}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>

            <button type="submit" className="submit-btn">
              <span>Send Message</span>
              <i className="fas fa-paper-plane"></i>
            </button>

            <p className="form-note">
              I usually reply within 24 hours.
            </p>
          </form>
        )}
      </section>

    </main>
  );
};

export default Contact;