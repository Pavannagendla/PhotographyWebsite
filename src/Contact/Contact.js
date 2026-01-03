import React, { useState, useEffect } from "react";
import "./Contact.css";

// Images
import image1 from "../images/Grey Langur.jpg";
import image2 from "../images/kissing birds.jpg";
import image3 from "../images/babymom.jpg";
import image4 from "../images/butterfly3.jpg";
import image5 from "../images/flower 3.jpg";
import image6 from "../images/evening1.JPG";

const images = [image1, image2, image3, image4, image5, image6];

const Contact = ({ showImages = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!showImages) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [showImages]);

  return (
    <main className="contact-wrapper">
      {/* Left Content */}
      <section className="contact-content">
        <h1>Let’s Connect</h1>
        <p className="subtitle">
          Whether it’s photography, collaboration, or development work —
          feel free to reach out. I usually reply within a day.
        </p>

        {/* Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required />
          <button type="submit">Send Message</button>
        </form>

        {/* Quick Actions */}
        <div className="contact-links">
          <a
            href="https://www.instagram.com/hacker_camerawork"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a href="mailto:hackercamerawork@gmail.com">
            <i className="fas fa-envelope"></i> Email
          </a>
        </div>
      </section>

      {/* Right Slideshow (optional) */}
      {showImages && (
        <section className="contact-slideshow">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index}`}
              className={index === currentIndex ? "active" : ""}
            />
          ))}
        </section>
      )}
    </main>
  );
};

export default Contact;
