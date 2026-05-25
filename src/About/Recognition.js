import React, { useState } from "react";
import "./Recognition.css";

import retrokolkata from "../images/Retro_Kolkata.png";
import asx from "../images/ASX.png";
import lensified from "../images/Lensified.png";

const achievements = [
  {
    num: "01",
    category: "PRINT EXPORT // JOURNAL",
    title: "Retro Kolkata Magazine",
    feature: "Selected for 'India In 100 Frames'",
    imageUrl: retrokolkata,
    description:
      "Curated among the premier visual essays capturing the diverse raw textures, landscape geometry, and powerful architectural heritage across the modern Indian continent.",
  },
  {
    num: "02",
    category: "GLOBAL SPOTLIGHT // EDITORIAL",
    title: "ASX The Picture Perfect",
    feature: "Featured Visual Layout & Essay",
    imageUrl: asx,
    description:
      "A multi-page print feature showcasing conceptual cinematic lighting mechanics and contemporary narrative design. Celebrated for distinctive exposure choices.",
  },
  {
    num: "03",
    category: "GALLERY COMPETITION // AWARD",
    title: "Lensified Competition",
    feature: "Spotlight Selection: 'Consequat Reimagined'",
    imageUrl: lensified,
    description:
      "Awarded top portfolio honors for an intimate wildlife photography series captured within native habitats. Recognized for technical balance and patient composition.",
  },
];

const Recognition = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="exhibition-section">
      {/* BACKGROUND GRAPHIC STRIP */}
      <div className="exhibition-watermark">ARCHIVE</div>

      <div className="exhibition-container">
        
        {/* LEFT COLUMN: CRITIC & TEXT DIRECTORY */}
        <div className="exhibition-directory">
          <div className="exhibition-header">
            <span className="exhibition-eyebrow">// PORTFOLIO SPOTLIGHT</span>
            <h2 className="exhibition-title-serif">
              Honors & <br /><em>Publications</em>
            </h2>
          </div>

          <div className="exhibition-list">
            {achievements.map((item, index) => (
              <div
                key={index}
                className={`exhibition-row-item ${activeIndex === index ? "is-active" : ""}`}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <div className="row-meta-line">
                  <span className="row-number">{item.num}</span>
                  <span className="row-category">{item.category}</span>
                </div>
                
                <h3 className="row-headline">{item.title}</h3>
                <span className="row-feature-tag">{item.feature}</span>

                {/* EXPANDING DESCRIPTION SUB-TEXT */}
                <div className="row-body-drawer">
                  <p className="row-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: CINEMATIC VIEW_FINDER DISPLAY */}
        <div className="exhibition-viewer-panel">
          <div className="camera-viewfinder-frame">
            {/* VIEW_FINDER GRAPHICS */}
            <div className="viewfinder-corner top-left"></div>
            <div className="viewfinder-corner top-right"></div>
            <div className="viewfinder-corner bottom-left"></div>
            <div className="viewfinder-corner bottom-right"></div>
            <div className="viewfinder-crosshair">+</div>
            <div className="viewfinder-status-bar">
              <span>RAW</span>
              <span>1/250s</span>
              <span>f/2.8</span>
              <span>ISO 400</span>
            </div>

            {/* DYNAMIC IMAGE CANVAS LAYERS */}
            <div className="viewer-canvas-stack">
              {achievements.map((item, index) => (
                <div
                  key={index}
                  className={`viewer-image-backdrop ${activeIndex === index ? "visible" : "hidden"}`}
                  style={{ "--exhibition-img": `url(${item.imageUrl})` }}
                >
                  <div className="image-overlay-vignette" />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Recognition;