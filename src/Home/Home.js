import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Home.css";

/* =========================
   FEATURED WORK IMAGES (With Masonry Weight Layouts)
========================= */
const featuredImages = [
  { src: "/Images/Instagram/gardenlizard5.jpg", size: "tall", label: "WILDLIFE // DETAIL" },
  { src: "/Images/Instagram/street25.jpg", size: "wide", label: "STREET // TEXTURE" },
  { src: "/Images/Instagram/mithwa 2.jpg", size: "normal", label: "PORTRAIT // COMPOSE" },
  { src: "/Images/Instagram/green.jpg", size: "big", label: "AVIAN // ENVIRONMENT" },
];

/* =========================
   INSTAGRAM PREVIEW IMAGES
========================= */
const instagramImages = [
  {
    src: "/Images/Instagram/Monkey & Baby.jpg",
    link: "https://www.instagram.com/p/DIwUhldTXD6/",
    label: "PRIMATE INFANCY // CURATION"
  },
  {
    src: "/Images/Instagram/Squirrel.jpg",
    link: "https://www.instagram.com/p/CViTnZdsDae/",
    label: "RODENT SYMMETRY // MACRO"
  },
  {
    src: "/Images/Instagram/Eagel.jpg",
    link: "https://www.instagram.com/p/C7JvutFvxix/",
    label: "AERODYNAMIC FOCUS // ACCENT"
  },
  {
    src: "/Images/Instagram/Fishing Boat.jpg",
    link: "https://www.instagram.com/p/CrDl4kzv_NA/",
    label: "MARINE GEOMETRY // HORIZON"
  },
];

const Home = () => {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section className="home-canvas-root">
      
{/* =========================
          1. CINEMATIC HERO SPREAD (PRIMARY EXPOSURE)
      ========================== */}
      <div className="hero-primary-stage">
        <div className="hero-editorial-gate">
          
          {/* LEFT AXIS: MASSIVE TYPOGRAPHIC IDENTITY */}
          <div className="hero-identity-manifesto">
            <div className="hero-meta-tracker">
              <span className="mono-status-pill">// STATUS: ONLINE</span>
              <span className="mono-exif-pill">RAW // ISO 100</span>
            </div>

            <h1 className="hero-display-headline">
              Pavan Kumar<br />
              <span>Nagendla</span>
            </h1>

            <p className="hero-curated-tagline">
              Architecting complex lines of code. <br />
              <em>Capturing passing fragments of life.</em>
            </p>

            {/* QUICK LINK DIRECTORY NAVIGATION */}
            <div className="hero-shutter-index">
              <Link to="/work#wildlife" className="index-anchor">01/WILDLIFE</Link>
              <Link to="/work#street" className="index-anchor">02/STREET</Link>
              <Link to="/work#portraits" className="index-anchor">03/PORTRAITS</Link>
              <Link to="/work#birds" className="index-anchor">04/BIRDS</Link>
            </div>

            <div className="hero-cta-button-cluster">
              <Link to="/work" className="luxury-action-btn solid">
                <span>Explore Exhibition</span>
              </Link>
              <Link to="/contact" className="luxury-action-btn transparent">
                <span>Initiate Connection</span>
              </Link>
            </div>
          </div>

          {/* RIGHT AXIS: PRIMARY LANDING TARGET IMAGE */}
          <div className="hero-flagship-display">
            <div className="flagship-image-scaffolding">
              {/* THE EDITORIAL ASYMMETRIC OUTLINE BACKDROP */}
              <div className="flagship-ghost-bounding"></div>
              
              <div className="flagship-canvas-chamber">
                <motion.div
                  className="flagship-raw-image"
                  style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/Images/Instagram/tiger1.jpg'})` }}
                  initial={{ scale: 1.15, opacity: 0 }}
                  animate={{ scale: 1, opacity: 0.75 }}
                  transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                />
                <div className="flagship-lens-vignette" />
              </div>
            </div>
            
            {/* CORNER TECHNICAL DATA STAMPS */}
            <div className="flagship-coordinate-labels">
              <span>LOC // 14.4455° N, 79.9865° E</span>
              <span>NATIVE_GEOMETRY_OK</span>
            </div>
          </div>

        </div>
      </div>

      {/* =========================
          2. FEATURED EXHIBITION WORK
      ========================== */}
      <section className="featured-exhibition-grid">
        <div className="home-section-header">
          <span className="section-mono-tag">01 / RECOGNITION</span>
          <h2 className="section-serif-title">Curated <em>Spotlights</em></h2>
          <p className="section-context-sub">A balanced cross-section harvest defining our focus variables.</p>
        </div>

        <div className="home-mosaic-grid-box">
          {featuredImages.map((img, index) => (
            <motion.div
              key={index}
              className={`portfolio-mosaic-item ${img.size}`}
              onClick={() => setLightbox(process.env.PUBLIC_URL + img.src)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="portfolio-mosaic-img-scaffold">
                <img src={encodeURI(process.env.PUBLIC_URL + img.src)} alt="Curated lens composition" />
                <div className="portfolio-card-gradient-overlay" />
                <div className="portfolio-card-caption-hud">
                  <span className="portfolio-category-badge">{img.label}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================
          3. EDITORIAL BIOGRAPHY STRIP
      ========================== */}
      <section className="home-editorial-bio">
        <div className="bio-asymmetric-wrapper">
          <div className="bio-left-index">
            <span className="section-mono-tag">02 / IDENTITY</span>
            <h2 className="section-serif-title">The Duality <em>Manifesto</em></h2>
          </div>
          <div className="bio-right-narrative">
            <p className="bio-lead-paragraph">
              I’m Pavan Kumar, a software developer by trade navigating structural system code blocks, and an amateur photographer by design using optics to halt time.
            </p>
            <p className="bio-sub-paragraph">
              Based out of Andhra Pradesh, India, my operations focus heavily on wildlife mechanics, street layout geometry, and the rawness of human portrait expressions.
            </p>
            <Link to="/about" className="luxury-action-btn dark-border">
              <span>Inspect Full Biography</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================
          4. INTELLECTUAL PHILOSOPHY BAR
      ========================== */}
      <section className="landing-philosophy-bar">
        <div className="philosophy-inner-quote">
          <span className="quote-marker-mono">“</span>
          <p>Photography is not about the camera gear. It is strictly about the specific micro-seconds you choose to feel forever.</p>
        </div>
      </section>

      {/* =========================
          5. INSTAGRAM RAW STACK STREAM
      ========================== */}
      <section className="landing-instagram-exhibit">
        <div className="exhibit-header-line">
          <span className="section-mono-tag">03 / CONTINUOUS STREAM</span>
          <h2 className="section-serif-title">Follow My <em>Journey</em></h2>
        </div>

        <div className="landing-instagram-grid">
          {instagramImages.map((item, index) => (
            <a key={index} href={item.link} target="_blank" rel="noreferrer" className="instagram-editorial-card">
              <div className="insta-image-wrapper">
                <img src={encodeURI(process.env.PUBLIC_URL + item.src)} alt="Instagram exposure block" />
                <div className="insta-frame-vignette" />
                <div className="insta-hover-hud">
                  <span className="hud-txt">LAUNCH STREAM EXTERNAL ➔</span>
                </div>
              </div>
              <div className="insta-card-footer">
                <span className="insta-index">LOG_ID // 0{index + 1}</span>
                <span className="insta-tag-label">{item.label}</span>
              </div>
            </a>
          ))}
        </div>

        <div className="instagram-footer-cta">
          <a href="https://instagram.com/hacker_camerawork" target="_blank" rel="noreferrer" className="luxury-action-btn solid">
            <span>Follow @hacker_camerawork</span>
          </a>
        </div>
      </section>

      {/* =========================
          6. CLOSING PRODUCTION ACTION BLOCK
      ========================== */}
      <section className="final-production-cta">
        <h2 className="section-serif-title">Let’s frame something <em>timeless</em> together.</h2>
        <div className="hero-action-buttons-row">
          <Link to="/contact" className="luxury-action-btn solid">
            <span>Initiate Transmission</span>
          </Link>
          <Link to="/work" className="luxury-action-btn transparent">
            <span>View Full Archive</span>
          </Link>
        </div>
      </section>

      {/* =========================
          LIGHTBOX VIEWFINDER WINDOW MODULE
      ========================== */}
      {lightbox && (
        <div className="btl-lightbox-overlay" onClick={() => setLightbox(null)}>
          <button className="btl-close-trigger" onClick={() => setLightbox(null)}>
            <span className="close-bar-1"></span>
            <span className="close-bar-2"></span>
          </button>
          <div className="btl-lightbox-content">
            <img src={encodeURI(lightbox)} alt="Exhibition enlargement focus view" className="btl-lightbox-img" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;