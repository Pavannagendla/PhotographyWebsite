import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ email: "" });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState("");
  const [activeTheme, setActiveTheme] = useState("default");

  const MAX_MESSAGE_LENGTH = 600;

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return "";
    return regex.test(email) ? "" : "Invalid email address format.";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "message" && value.length > MAX_MESSAGE_LENGTH) return;

    setForm((prev) => ({ ...prev, [name]: value }));

    if (name === "email") {
      setErrors((prev) => ({ ...prev, email: validateEmail(value) }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(form.email) || !form.name || !form.message) {
      return;
    }
    setSent(true);
  };

  const handleReset = () => {
    setSent(false);
    setForm({ name: "", email: "", message: "" });
    setErrors({ email: "" });
  };

  return (
    <main className={`contact-viewport theme-${activeTheme}`}>
      <div className="contact-grid">
        
        {/* VISUAL & INFO SIDE */}
        <section className="panel-editorial">
          <div className="editorial-header">
            <span className="eyebrow-mono">03 // CONNECTION</span>
            <h1 className="display-serif">
              Let’s frame <br />
              something <em>timeless</em>.
            </h1>
            <p className="editorial-lead">
              Seeking rare frames, deep stories, or creative collaborations. Drop a line to design concepts together.
            </p>
          </div>

          <div className="interactive-directory">
            <a
              href="https://www.instagram.com/hacker_camerawork"
              target="_blank"
              rel="noopener noreferrer"
              className="directory-card"
              onMouseEnter={() => setActiveTheme("instagram")}
              onMouseLeave={() => setActiveTheme("default")}
            >
              <div className="directory-meta">
                <span className="directory-num">01</span>
                <div>
                  <h4>INSTAGRAM</h4>
                  <p>@hacker_camerawork</p>
                </div>
              </div>
              <div className="directory-arrow">➔</div>
            </a>

            <a
              href="mailto:hackercamerawork@gmail.com"
              className="directory-card"
              onMouseEnter={() => setActiveTheme("email")}
              onMouseLeave={() => setActiveTheme("default")}
            >
              <div className="directory-meta">
                <span className="directory-num">02</span>
                <div>
                  <h4>EMAIL</h4>
                  <p>hackercamerawork@gmail.com</p>
                </div>
              </div>
              <div className="directory-arrow">➔</div>
            </a>

            <div className="directory-card static-card">
              <div className="directory-meta">
                <span className="directory-num">03</span>
                <div>
                  <h4>STUDIO BASE</h4>
                  <p>Andhra Pradesh, India</p>
                </div>
              </div>
            </div>
          </div>

          <footer className="editorial-footer">
            <blockquote className="minimal-quote">
              “Every frame tells a story worth sharing.”
            </blockquote>
          </footer>
        </section>

        {/* INTERACTIVE FORM SIDE */}
        <section className="panel-interactive">
          <div className="form-canvas">
            {sent ? (
              <div className="immersive-success">
                <div className="success-visual">
                  <div className="shutter-ring"></div>
                  <i className="fas fa-camera"></i>
                </div>
                <h2 className="display-serif">Captured perfectly.</h2>
                <p>Thank you for reaching out. I'll get back to you within 24 hours.</p>
                <button className="btn-action-outline" onClick={handleReset}>
                  <span>Send Another Message</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="editorial-form">
                <div className={`input-row ${focused === "name" ? "is-focused" : ""} ${form.name ? "has-value" : ""}`}>
                  <label htmlFor="name" className="label-mono">01 / Your Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    autoComplete="off"
                    required
                    value={form.name}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused("")}
                    onChange={handleChange}
                  />
                </div>

                <div className={`input-row ${focused === "email" ? "is-focused" : ""} ${form.email ? "has-value" : ""} ${errors.email ? "has-error" : ""}`}>
                  <label htmlFor="email" className="label-mono">02 / Email Address</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    autoComplete="off"
                    required
                    value={form.email}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused("")}
                    onChange={handleChange}
                  />
                  {errors.email && <span className="canvas-error-msg">{errors.email}</span>}
                </div>

                <div className={`input-row ${focused === "message" ? "is-focused" : ""} ${form.message ? "has-value" : ""}`}>
                  <label htmlFor="message" className="label-mono">03 / The Project Idea</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    value={form.message}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused("")}
                    onChange={handleChange}
                  />
                  <div className="canvas-counter">
                    {form.message.length} // {MAX_MESSAGE_LENGTH}
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="btn-submit-luxury" 
                  disabled={!!errors.email || !form.name || !form.message}
                >
                  <span className="btn-txt">Transmit Message</span>
                  <span className="btn-arrow">➔</span>
                </button>
              </form>
            )}
          </div>
        </section>

      </div>
    </main>
  );
};

export default Contact;