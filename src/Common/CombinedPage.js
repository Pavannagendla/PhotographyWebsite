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
  },
  {
    src: "/Images/Instagram/Squirrel.jpg",
    link: "https://www.instagram.com/p/CViTnZdsDae/",
  },
  {
    src: "/Images/Instagram/Eagel.jpg",
    link: "https://www.instagram.com/p/C7JvutFvxix/",
  },
  {
    src: "/Images/Instagram/Fishing Boat.jpg",
    link: "https://www.instagram.com/p/CrDl4kzv_NA/",
  },
];

/* Utility: pick random items */
function sampleArray(arr, n) {
  const copy = arr.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, n);
}

const CombinedPage = () => {
  /* Persist gallery per session */
  const selectedPhotos = useMemo(() => {
    const cached = sessionStorage.getItem("combinedGallery");
    if (cached) return JSON.parse(cached);

    const allowed = photoData.filter(p =>
      ["Wildlife", "Street", "Portraits", "Birds"].includes(p.category)
    );

    const count = Math.min(24, allowed.length);
    const result = sampleArray(allowed, count);

    sessionStorage.setItem("combinedGallery", JSON.stringify(result));
    return result;
  }, []);

  return (
    <main className="combined-page">
      {/* INTRO */}
      <section className="about-section section-wrapper">
        <h1 className="intro-title">
          Pavan Kumar <span>Nagendla</span>
        </h1>
        <p className="intro-sub">
          Software Developer • Photographer
        </p>
        <p className="intro-text">
          I’m a software developer by profession and a passionate photographer,
          driven by curiosity, storytelling, and moments that deserve to be felt forever.
        </p>
      </section>

      {/* PHILOSOPHY */}
      <section className="philosophy section-wrapper">
        <blockquote>
          Photography is not about the camera.
          It’s about the moment you choose to feel forever.
        </blockquote>
      </section>

      {/* INSTAGRAM */}
      <section className="instagram-section section-wrapper">
        <h2 className="section-title">My Journey</h2>

        <div className="instagram-grid">
          {instagramImages.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="instagram-card"
            >
              <img
                src={encodeURI(process.env.PUBLIC_URL + item.src)}
                alt={`Instagram ${index}`}
                loading="lazy"
              />
              <div className="instagram-overlay">View on Instagram</div>
            </a>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section-wrapper">
        <AboutIntro />
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="section-wrapper">
        <h2 className="section-title">Portfolio</h2>
        <p className="portfolio-note">
          A curated selection from Wildlife, Street, Portraits, and Birds.
        </p>

        <div className="combined-gallery">
          {selectedPhotos.map((p, idx) => (
            <div key={idx} className="combined-card">
              <img src={p.src} alt={p.category} loading="lazy" />
              <div className="overlay">{p.category}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section-wrapper">
        <Contact showImages={false} />
      </section>
    </main>
  );
};

export default CombinedPage;
