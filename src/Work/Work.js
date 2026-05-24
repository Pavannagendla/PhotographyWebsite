import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Work.css";

import elephant12 from "./Wildlife/elephant (12).jpg";
import lion1 from "./Wildlife/lion1.jpg";
import gardenLizard1 from "./Wildlife/gardenlizard1.jpg";
import grey2 from "./Wildlife/grey2.jpg";
import greylangur2 from "./Wildlife/Greylangur (2).jpg";
import greylangur3 from "./Wildlife/Greylangur (3).jpg";
import gaintsquirrel from "./Wildlife/gaintsquirrel.jpg";
import nilgiri1 from "./Wildlife/nilgiri (1).jpg";
import tiger1 from "./Wildlife/tiger1.jpg";
import tiger2 from "./Wildlife/tiger2.jpg";
import tiger3 from "./Wildlife/tiger3.jpg";
import wildsquirrel from "./Wildlife/wildsquirrel.jpg";
import deer3 from "./Wildlife/deer3.jpg";
import gardenlizard5 from "./Wildlife/gardenlizard5.jpg";

import bird3 from "./Birds/5.jpg";
import bird6 from "./Birds/7.jpg";
import bird7 from "./Birds/10.jpg";
import bird14 from "./Birds/14.jpg";
import bird16 from "./Birds/16.jpg";
import bird18 from "./Birds/17.jpg";
import bird25 from "./Birds/32.jpg";
import bird29 from "./Birds/29.jpg";
import bird35 from "./Birds/35.jpg";
import bird36 from "./Birds/38.jpg";
import bird41 from "./Birds/42.jpg";
import bird43 from "./Birds/43.jpg";
import bird48 from "./Birds/48.jpg";
import bird49 from "./Birds/49.jpg";
import Eagle5 from "./Birds/51.jpg";
import Wings from "./Birds/Wings.jpg";

import street2 from "./Street/street2.jpg";
import street3 from "./Street/street3.jpg";
import street9 from "./Street/street9.jpg";
import street10 from "./Street/street10.jpg";
import street13 from "./Street/street13.jpg";
import street14 from "./Street/street14.jpg";
import street18 from "./Street/street18.jpg";
import kol6 from "./Street/kol6.jpg";
import street31 from "./Street/street31.jpg";
import street33 from "./Street/street33.jpg";
import street35 from "./Street/street35.jpg";
import street37 from "./Street/street37.jpg";
import street40 from "./Street/street40.jpg";

import ankita from "./Portraits/ankita.jpg";
import ankita1 from "./Portraits/ankita1.jpg";
import Arunachalam from "./Portraits/Arunachalam.jpg";
import bhima from "./Portraits/bhima.jpg";
import bro1 from "./Portraits/bro.jpg";
import dancer from "./Portraits/dancer.jpg";
import birthday1 from "./Portraits/birthday1.jpg";
import mithwa2 from "./Portraits/mithwa2.jpg";
import pandu from "./Portraits/pandu.jpg";
import teju2 from "./Portraits/teju2.jpg";
import vaishu from "./Portraits/vaishu.jpg";
import kush from "./Portraits/kush.jpg";

export const photoData = [
  { src: lion1, category: "Wildlife" },
  { src: bhima, category: "Portraits" },
  { src: bro1, category: "Portraits" },
  { src: tiger3, category: "Wildlife" },
  { src: vaishu, category: "Portraits" },
  { src: pandu, category: "Portraits" },
  { src: wildsquirrel, category: "Small Life" },
  { src: gaintsquirrel, category: "Small Life" },
  { src: bird29, category: "Birds" },
  { src: bird35, category: "Birds" },
  { src: greylangur2, category: "Primates" },
  { src: elephant12, category: "Wildlife" },
  { src: street9, category: "Street" },
  { src: bird3, category: "Birds" },
  { src: grey2, category: "Primates" },
  { src: nilgiri1, category: "Primates" },
  { src: street3, category: "Street" },
  { src: bird6, category: "Birds" },
  { src: bird16, category: "Birds" },
  { src: bird18, category: "Birds" },
  { src: street14, category: "Street" },
  { src: bird36, category: "Birds" },
  { src: gardenLizard1, category: "Reptiles" },
  { src: bird41, category: "Birds" },
  { src: bird43, category: "Birds" },
  { src: street2, category: "Street" },
  { src: bird7, category: "Birds" },
  { src: street13, category: "Street" },
  { src: bird14, category: "Birds" },
  { src: teju2, category: "Portraits" },
  { src: dancer, category: "Portraits" },
  { src: bird48, category: "Birds" },
  { src: kush, category: "Portraits" },
  { src: street10, category: "Street" },
  { src: street18, category: "Street" },
  { src: ankita, category: "Portraits" },
  { src: bird49, category: "Birds" },
  { src: birthday1, category: "Portraits" },
  { src: Arunachalam, category: "Portraits" },
  { src: bird25, category: "Birds" },
  { src: kol6, category: "Street" },
  { src: greylangur3, category: "Primates" },
  { src: ankita1, category: "Portraits" },
  { src: Eagle5, category: "Birds" },
  { src: Wings, category: "Birds" },
  { src: gardenlizard5, category: "Reptiles" },
  { src: deer3, category: "Wildlife" },
  { src: street31, category: "Street" },
  { src: tiger2, category: "Wildlife" },
  { src: street35, category: "Street" },
  { src: street37, category: "Street" },
  { src: street40, category: "Street" },
  { src: mithwa2, category: "Portraits" },
  { src: street33, category: "Street" }
];

const categories = [
  "All",
  "Wildlife",
  "Primates",
  "Birds",
  "Reptiles",
  "Small Life",
  "Portraits",
  "Street"
];

const Work = () => {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    if (!location.hash) return;

    const hash = decodeURIComponent(location.hash.replace("#", ""));
    const formattedCategory = hash
      .split("-")
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");

    if (categories.includes(formattedCategory)) {
      setActiveCategory(formattedCategory);
    }
  }, [location.hash]);

  const filteredPhotos =
    activeCategory === "All"
      ? photoData
      : photoData.filter(photo => photo.category === activeCategory);

  return (
    <div className="work-container">
      <header className="work-header">
        <h1>My Work</h1>

        <p key={activeCategory} className="work-subtitle">
          {activeCategory === "All"
            ? "Complete Photography Collection"
            : `${activeCategory} Photography`}
        </p>

        <div className="header-line"></div>
      </header>

      <div className="work-filters">
        {categories.map(cat => (
          <button
            key={cat}
            className={activeCategory === cat ? "active" : ""}
            onClick={() => {
              setActiveCategory(cat);

              if (cat === "All") {
                window.history.replaceState(null, "", "/work");
              } else {
                window.history.replaceState(
                  null,
                  "",
                  `/work#${cat.toLowerCase().replace(/\s+/g, "-")}`
                );
              }
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="work-gallery">
        {filteredPhotos.map((photo, idx) => (
          <div key={idx} className="work-card">
            <img
              src={photo.src}
              alt={photo.category}
              loading="lazy"
            />
            <div className="overlay"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;