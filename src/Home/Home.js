import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Home.css";

/* =========================
   FEATURED WORK IMAGES
========================= */
const featuredImages = [
  "/Images/Wildlife/tiger1.jpg",
  "/Images/Street/7.jpg",
  "/Images/Portraits/mithwa 2.jpg",
  "/Images/Nature/Mrng2.jpg",
];

/* =========================
   INSTAGRAM PREVIEW IMAGES
========================= */
const instagramImages = [
  {
    src: "/Images/Instagram/Monkey & Baby.jpg",
    link: "https://www.instagram.com/p/DIwUhldTXD6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==/",
  },
  {
    src: "/Images/Instagram/Squirrel.jpg",
    link: "https://www.instagram.com/p/CViTnZdsDae/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    src: "/Images/Instagram/Eagel.jpg",
    link: "https://www.instagram.com/p/C7JvutFvxix/?utm_source=ig_web_copy_link/",
  },
  {
    src: "/Images/Instagram/Fishing Boat.jpg",
    link: "https://www.instagram.com/p/CrDl4kzv_NA/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
];

const Home = () => {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section className="home">
      {/* =========================
          1. HERO SECTION
      ========================== */}
      <motion.section
        className="hero"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/Images/Wildlife/tiger1.jpg'})` }}
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
      >
        <div className="hero-overlay">
          <h1>Pavan Kumar Nagendla</h1>

          <p className="hero-tagline">
            Capturing stories through light & life
          </p>

<p className="hero-subtext">
  • <Link to="/work#wildlife">Wildlife</Link>
  • <Link to="/work#street">Street</Link>
  • <Link to="/work#portraits">Portrait</Link>
  • <Link to="/work#birds">Birds</Link>
</p>


          <div className="hero-actions">
            <Link to="/work" className="btn primary">
              View My Work
            </Link>

            <Link to="/contact" className="btn outline">
              Get In Touch
            </Link>
          </div>
        </div>
      </motion.section>

      {/* =========================
          2. FEATURED WORK
      ========================== */}
      <section className="featured-work">
        <h2>Featured Work</h2>

        <p className="section-caption">
          A curated selection of moments that define my journey
        </p>

        <div className="featured-grid">
          {featuredImages.map((src, index) => (
            <motion.div
              key={index}
              className="featured-card"
              onClick={() => setLightbox(process.env.PUBLIC_URL + src)}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src={encodeURI(process.env.PUBLIC_URL + src)} alt="Featured photography" />
            </motion.div>
          ))}
        </div>

        <div className="categories-list">
          <div className="categories-list1">
            <span>
              Wildlife Photography – capturing raw moments of nature
            </span>
            <br />
            <span>
              Street Photography – real stories from everyday life
            </span>
          </div>

          <div className="categories-list2">
            <span>Portraits – emotions and expressions</span>
            <br />
            <span>
              Nature & Landscapes – calm, colors, and compositions
            </span>
          </div>
        </div>
      </section>

      {/* =========================
          3. ABOUT ME
      ========================== */}
      <section className="about-section">
        <h2>About Me</h2>

        <p>
          I’m <strong>Pavan Kumar</strong>, a software developer by profession
          and a passionate photographer driven by curiosity and storytelling.

          Based in Andhra Pradesh, India, my work focuses on wildlife, street
          life, and human expressions — capturing life as it naturally unfolds.
        </p>

        <p>
          Through my photography, I strive to preserve authentic emotions, raw
          details, and fleeting moments that feel real and timeless.
        </p>

        <Link to="/about" className="btn secondary">
          Know More About Me
        </Link>
      </section>

      {/* =========================
          4. PHOTOGRAPHY PHILOSOPHY
      ========================== */}
      <section className="philosophy">
        <blockquote>
          “Photography is not about the camera. It’s about the moment you
          choose to feel forever.”
        </blockquote>
      </section>

      {/* =========================
          5. INSTAGRAM PREVIEWS
      ========================== */}
      <section className="instagram-section">
        <h2>Follow My Journey</h2>

        <div className="instagram-grid">
          {instagramImages.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="instagram-card"
            >
              <img src={encodeURI(process.env.PUBLIC_URL + item.src)} alt="Instagram post" />
              <div className="instagram-overlay">
                View on Instagram
              </div>
            </a>
          ))}
        </div>

        <h4 className="instagram-handle">
          Follow my journey on Instagram
        </h4>

        <a
          href="https://instagram.com/hacker_camerawork"
          target="_blank"
          rel="noreferrer"
          className="btn primary"
        >
          @hacker_camerawork
        </a>
      </section>

      {/* =========================
          6. FINAL CTA
      ========================== */}
      <section className="final-cta">
        <h2>Let’s create something meaningful together</h2>

        <div className="cta-actions">
          <Link to="/contact" className="btn primary">
            Contact Me
          </Link>

          <Link to="/work" className="btn outline">
            View Full Portfolio
          </Link>
        </div>
      </section>

      {/* =========================
          LIGHTBOX
      ========================== */}
      {lightbox && (
        <div
          className="lightbox"
          onClick={() => setLightbox(null)}
        >
          <img src={encodeURI(lightbox)} alt="Preview" />
        </div>
      )}
    </section>
  );
};

export default Home;
