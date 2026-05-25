import React, { useMemo } from "react";
import "./CombinedPage.css";

import AboutIntro from "../About/AboutIntro";
import { photoData } from "../Work/Work";
import Contact from "../Contact/Contact";

/* Instagram preview images */
const instagramImages = [
  {
    src: "/Images/Instagram/Monkey & Baby.jpg",
    link: "https://www.instagram.com/p/DIwUhldTXD6/",
    label: "WILDLIFE // MOMENT"
  },
  {
    src: "/Images/Instagram/Squirrel.jpg",
    link: "https://www.instagram.com/p/CViTnZdsDae/",
    label: "NATURAL // LIGHT"
  },
  {
    src: "/Images/Instagram/Eagel.jpg",
    link: "https://www.instagram.com/p/C7JvutFvxix/",
    label: "AVIAN // FOCUS"
  },
  {
    src: "/Images/Instagram/Fishing Boat.jpg",
    link: "https://www.instagram.com/p/CrDl4kzv_NA/",
    label: "STREET // GEOMETRY"
  },
];

/* Utility: pick random items cleanly */
function sampleArray(arr, n) {
  const copy = arr.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, n);
}

const CombinedPage = () => {
  /* Persist random gallery layouts per browser session session */
  const selectedPhotos = useMemo(() => {
    const cached = sessionStorage.getItem("combinedGallery");
    if (cached) return JSON.parse(cached);

    const allowed = photoData.filter(p =>
      ["Wildlife", "Street", "Portraits", "Birds"].includes(p.category)
    );

    const count = Math.min(24, allowed.length);
    const result = sampleArray(allowed, count);

    // Apply modular random sizing logic for the editorial masonry grid array natively
    const formattedResult = result.map((photo, index) => {
      let size = 'normal';
      if (index % 3 === 0) size = 'tall';
      else if (index % 5 === 0) size = 'wide';
      else if (index % 7 === 0) size = 'big';
      return { ...photo, size };
    });

    sessionStorage.setItem("combinedGallery", JSON.stringify(formattedResult));
    return formattedResult;
  }, []);

  return (
    <main className="combined-page-canvas">
      {/* TECHNICAL LAYOUT SCAFFOLD BACKGROUND */}
      <div className="canvas-matrix-substratum"></div>

      {/* INTRO HERO SECTION */}
      <section className="landing-hero-strip">
        <div className="hero-editorial-left">
          <span className="landing-mono-tag">// MASTER INDEX V3</span>
          <h1 className="landing-title-serif">
            Nagendla Pavan Kumar
            <span>Architecting Code. <em>Capturing Life.</em></span>
          </h1>
        </div>
        <div className="hero-editorial-right">
          <p className="landing-lead-narrative">
            A software developer by trade navigating structural architectures, driven by an artistic dedication to document transient real-world stories and native visual spaces.
          </p>
        </div>
      </section>

      {/* PHILOSOPHY SEPARATOR BLOCK */}
      <section className="landing-philosophy-bar">
        <div className="philosophy-inner-quote">
          <span className="quote-marker-mono">“</span>
          <p>Photography is not about the technical frame. It is entirely about the moments you choose to feel forever.</p>
        </div>
      </section>

      {/* INSTAGRAM LIVE CARRIER STREAM */}
      <section className="landing-instagram-exhibit">
        <div className="exhibit-header-line">
          <span className="mono-label">01 / RECENT LOGS</span>
          <h2 className="section-serif-title">The Instagram <em>Archive</em></h2>
        </div>

        <div className="landing-instagram-grid">
          {instagramImages.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="instagram-editorial-card"
            >
              <div className="insta-image-wrapper">
                <img
                  src={encodeURI(process.env.PUBLIC_URL + item.src)}
                  alt={`Instagram frame allocation ${index}`}
                  loading="lazy"
                />
                <div className="insta-frame-vignette" />
                <div className="insta-hover-hud">
                  <span className="hud-txt">LAUNCH INSTAGRAM ➔</span>
                </div>
              </div>
              <div className="insta-card-footer">
                <span className="insta-index">IDX // 0{index + 1}</span>
                <span className="insta-tag-label">{item.label}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* NESTED ABOUTINTRO SUBSECTION MODULE */}
      <section id="about" className="landing-nested-about-row">
        <AboutIntro />
      </section>

      {/* ASYMMETRIC PORTFOLIO EXHIBITION */}
      <section id="portfolio" className="landing-portfolio-exhibition">
        <div className="exhibit-header-line">
          <span className="mono-label">02 / CURATED STACK</span>
          <h2 className="section-serif-title">Bespoke <em>Portfolios</em></h2>
          <p className="exhibit-context-sub">
            A dynamic cross-section sample raw harvest covering Wildlife, Street, Portraiture, and Avian studies.
          </p>
        </div>

        <div className="landing-portfolio-mosaic-grid">
          {selectedPhotos.map((p, idx) => (
            <div key={idx} className={`portfolio-mosaic-item ${p.size || 'normal'}`}>
              <div className="portfolio-mosaic-img-scaffold">
                <img src={p.src} alt={p.category} loading="lazy" />
                <div className="portfolio-card-gradient-overlay" />
                <div className="portfolio-card-caption-hud">
                  <span className="portfolio-category-badge">{p.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT MODULE CONTAINER */}
      <section id="contact" className="landing-contact-isolation-grid">
        <Contact showImages={false} />
      </section>
    </main>
  );
};

export default CombinedPage;