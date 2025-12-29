import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Work.css";

/* ===============================
   IMPORT IMAGES
================================ */
import babymonk from "./Wildlife/babymonk.jpg";
import bear1 from "./Wildlife/bear1.jpg";
import cat from "./Wildlife/cat.jpg";
import ele1 from "./Wildlife/ele1.jpg";
import elephant8 from "./Wildlife/elephant (8).jpg";
import elephant12 from "./Wildlife/elephant (12).jpg";
import elephant3 from "./Wildlife/elephant (3).jpg";
import elephant1 from "./Wildlife/elephant(1).jpg";
import lion from "./Wildlife/lion.jpg";
import lion1 from "./Wildlife/lion1.jpg";
import monkey5 from "./Wildlife/monkey (5).jpg";
import squirrel from "./Wildlife/squirrel.jpg";
import monkey10 from "./Wildlife/monkey (10).jpg";
import gardenLizard from "./Wildlife/Garden Lizard.jpg";
import gardenLizard1 from "./Wildlife/gardenlizard1.jpg";
import girraf from "./Wildlife/girraf.jpg";
import grey from "./Wildlife/grey.jpg";
import grey2 from "./Wildlife/grey2.jpg";
import greylangur2 from "./Wildlife/Greylangur (2).jpg";
import greylangur3 from "./Wildlife/Greylangur (3).jpg";
import deer1 from "./Wildlife/deer (1).jpg";
import deer from "./Wildlife/deer.jpg";
import deerCloseup from "./Wildlife/deer1.jpg";
import dog from "./Wildlife/dog.jpg";
import gaintsquirrel from "./Wildlife/gaintsquirrel.jpg";
import lepord from "./Wildlife/lepord.jpg";
import nilgiri1 from "./Wildlife/nilgiri (1).jpg";
import nilgiri4 from "./Wildlife/nilgiri (4).jpg";
import rhino from "./Wildlife/rhino.jpg";
import squirel from "./Wildlife/squirel.jpg";
import monkey13 from "./Wildlife/monkey (13).jpg";
import hairstyle from "./Wildlife/hairstyle.jpg";
import tiger1 from "./Wildlife/tiger1.jpg";
import tiger2 from "./Wildlife/tiger2.jpg";
import tiger3 from "./Wildlife/tiger3.jpg";
import whitetiger from "./Wildlife/whitetiger.jpg";
import wildsquirrel from "./Wildlife/wildsquirrel.jpg";
import crocodile1 from "./Wildlife/crocodile1.jpg";
import crocodile2 from "./Wildlife/crocodile2.jpg";
import tortoise from "./Wildlife/tortoise.jpg";
import deer3 from "./Wildlife/deer3.jpg";
import monkey1 from "./Wildlife/monkey1.jpg";
import monkey2 from "./Wildlife/monkey2.jpg";
import gardenlizard2 from "./Wildlife/gardenlizard2.jpg";
import gardenlizard3 from "./Wildlife/gardenlizard3.jpg";
import gardenlizard4 from "./Wildlife/gardenlizard4.jpg";
import gardenlizard5 from "./Wildlife/gardenlizard5.jpg";
import dog1 from "./Wildlife/dog1.jpg";
import dog2 from "./Wildlife/dog2.jpg";



import bird1 from "./Birds/3.jpg";
import bird2 from "./Birds/4.jpg";
import bird3 from "./Birds/5.jpg";
import bird6 from "./Birds/8.jpg";
import bird7 from "./Birds/9.jpg";
import bird14 from "./Birds/14.jpg";
import bird16 from "./Birds/16.jpg";
import bird18 from "./Birds/18.jpg";
import bird19 from "./Birds/19.jpg";
import bird20 from "./Birds/20.jpg";
import bird22 from "./Birds/22.jpg";
import bird23 from "./Birds/23.jpg";  
import bird25 from "./Birds/25.jpg";
import bird29 from "./Birds/29.jpg";
import bird35 from "./Birds/35.jpg";
import bird36 from "./Birds/36.jpg";
import bird41 from "./Birds/41.jpg";
import bird43 from "./Birds/43.jpg";
import bird47 from "./Birds/47.jpg";
import bird48 from "./Birds/48.jpg";
import bird49 from "./Birds/49.jpg";  
import Dragonfly from "./Birds/Dragonfly.jpg";
import Dragonfly1 from "./Birds/Dragonfly1.jpg";
import Butterfly from "./Birds/Butterfly.jpg";
import Eagle1 from "./Birds/Eagle1.jpg";
import Eagle2 from "./Birds/Eagle2.jpg";
import Eagle3 from "./Birds/Eagle3.jpg";
import Eagle4 from "./Birds/Eagle4.jpg";
import Eagle5 from "./Birds/Eagle5.jpg";
import Wings from "./Birds/Wings.jpg";

import street1 from "./Street/street1.jpg";
import street2 from "./Street/street2.jpg";
import street3 from "./Street/street3.jpg";
import street4 from "./Street/street4.jpg";
import street5 from "./Street/street5.jpg";
import street6 from "./Street/street6.jpg";
import street7 from "./Street/street7.jpg";
import street8 from "./Street/street8.jpg";
import street9 from "./Street/street9.jpg";
import street10 from "./Street/street10.jpg";
import street11 from "./Street/street11.jpg";
import street12 from "./Street/street12.jpg";
import street13 from "./Street/street13.jpg";
import street14 from "./Street/street14.jpg";

import street15 from "./Street/street15.jpg";
import street16 from "./Street/street16.jpg";
import street17 from "./Street/street17.jpg";
import street18 from "./Street/street18.jpg";
import street19 from "./Street/street19.jpg";
import street20 from "./Street/street20.jpg";
import kol4 from "./Street/kol4.jpg";
import kol5 from "./Street/kol5.jpg";
import kol6 from "./Street/kol6.jpg";
import kol8 from "./Street/kol8.jpg";
import street21 from "./Street/street21.jpg";
import street22 from "./Street/street22.jpg";
import street23 from "./Street/street23.jpg";
import street24 from "./Street/street24.jpg";
import street25 from "./Street/street25.jpg";
import street26 from "./Street/street26.jpg";
import street27 from "./Street/street27.jpg";
import street28 from "./Street/street28.jpg";
import street29 from "./Street/street29.jpg";
import street30 from "./Street/street30.jpg";
import street31 from "./Street/street31.jpg";
import street32 from "./Street/street32.jpg";
import street33 from "./Street/street33.jpg";
import street34 from "./Street/street34.jpg";
import street35 from "./Street/street35.jpg";
import street36 from "./Street/street36.jpg";
import street37 from "./Street/street37.jpg";
import street38 from "./Street/street38.jpg";
import street39 from "./Street/street39.jpg";
import street40 from "./Street/street40.jpg";
import street41 from "./Street/street41.jpg";
import street42 from "./Street/street42.jpg";

import ankita from "./Portraits/ankita.jpg";
import ankita1 from "./Portraits/ankita1.jpg";
import Arunachalam from "./Portraits/Arunachalam.jpg";
import bhima from "./Portraits/bhima.jpg";
import bro1 from "./Portraits/bro1.jpg";
import dancer from "./Portraits/dancer.jpg";
import guruvayoor1 from "./Portraits/guruvayoor1.jpg";
import guruvayoor2 from "./Portraits/guruvayoor2.jpg";
import birthday1 from "./Portraits/birthday1.jpg";
import mithwa1 from "./Portraits/mithwa1.jpg";
import pandu from "./Portraits/pandu.jpg";
import prasuu from "./Portraits/prasuu.jpg";
import teju2 from "./Portraits/teju2.jpg";
import vamsi from "./Portraits/vamsi.jpg";

import stru2 from "./Monuments/stru2.jpg";
import stru3 from "./Monuments/stru3.jpg";
import stru4 from "./Monuments/stru4.jpg";
import stru5 from "./Monuments/stru5.jpg";
import stru6 from "./Monuments/stru6.jpg";
import stru7 from "./Monuments/stru7.jpg";
// import stru8 from "./Monuments/stru8.jpg";
// import stru9 from "./Monuments/stru9.jpg";
// import stru10 from "./Monuments/stru10.jpg";

import Food1 from "./Food/Food1.jpg";
import Food2 from "./Food/Food2.jpg";
import vaishu from "./Portraits/vaishu.jpg"; 
import kush from "./Portraits/kush.jpg";
import stru1 from "./Monuments/stru1.jpg";
import Food3 from "./Food/Food3.jpg"; 
import Food4 from "./Food/Food4.jpg";
import Food5 from "./Food/Food5.jpg";
import Food6 from "./Food/Food6.jpg";
import Food7 from "./Food/Food7.jpg";
import Food8 from "./Food/Food8.jpg";
import Food9 from "./Food/Food9.jpg";
import Food10 from "./Food/Food10.jpg";
import Food11 from "./Food/Food11.jpg";
import Food12 from "./Food/Food12.jpg";
import Food13 from "./Food/Food13.jpg";
import Mrng2 from "./Nature/Mrng2.jpg";
import Mrng1 from "./Nature/Mrng1.jpg";
import flower1 from "./Nature/flower1.jpg";
import flower2 from "./Nature/flower2.jpg";
import flower3 from "./Nature/flower3.jpg";
import sun from "./Nature/sun.jpg";
import view from "./Nature/view.jpg";
import green from "./Nature/green.jpg";


/* ===============================
   PHOTO DATA
================================ */
const photoData = [
  { src: lion1, category: "Wildlife" },
  { src: tiger1, category: "Wildlife" },
  { src: bhima, category: "Portraits" },
  { src: bro1, category: "Portraits" },
  { src: elephant3, category: "Wildlife" },
  { src: squirrel, category: "Small Life" },
  { src: squirel, category: "Small Life" },
  { src: bear1, category: "Wildlife" },
  { src: gardenLizard, category: "Reptiles" },
  { src: prasuu, category: "Portraits" },
  { src: tiger3, category: "Wildlife" },
  { src: ele1, category: "Wildlife" },
  { src: lion, category: "Wildlife" },
  { src: vamsi, category: "Portraits" },
  { src: vaishu, category: "Portraits" },
  { src: pandu, category: "Portraits" },
  { src: whitetiger, category: "Wildlife" },
  { src: rhino, category: "Wildlife" },
  { src: lepord, category: "Wildlife" },
  { src: girraf, category: "Wildlife" },
  { src: wildsquirrel, category: "Small Life" },
  { src: gaintsquirrel, category: "Small Life" },
  { src: monkey5, category: "Primates" },
  { src: bird20, category: "Birds" },
  { src: bird29, category: "Birds" },
  { src: bird35, category: "Birds" },
  { src: monkey13, category: "Primates" },
  { src: babymonk, category: "Primates" },
  { src: greylangur2, category: "Primates" },
  { src: elephant12, category: "Wildlife" },
  { src: deer, category: "Wildlife" },
  { src: deerCloseup, category: "Wildlife" },
  { src: street9, category: "Street" },
  { src: bird3, category: "Birds" },
  { src: cat, category: "Small Life" },
  { src: dog, category: "Small Life" },
  { src: grey2, category: "Primates" },
  { src: nilgiri1, category: "Primates" },
  { src: street3, category: "Street" },
  { src: nilgiri4, category: "Primates" },
  { src: hairstyle, category: "Primates" },
  { src: bird1, category: "Birds" },
  { src: bird2, category: "Birds" },
  { src: street7, category: "Street" },
  { src: street8, category: "Street" },
  { src: bird6, category: "Birds" },
  { src: bird16, category: "Birds" },
  { src: bird18, category: "Birds" },
  { src: street14, category: "Street" },
  { src: street15, category: "Street" },
  { src: bird47, category: "Birds" },
  { src: bird19, category: "Birds" },
  { src: bird36, category: "Birds" },
  { src: street16, category: "Street" },
  { src: street17, category: "Street" },
  { src: gardenLizard1, category: "Reptiles" },
  { src: deer1, category: "Wildlife" },
  { src: bird41, category: "Birds" },
  { src: bird43, category: "Birds" },
  { src: street1, category: "Street" },
  { src: street2, category: "Street" },
  { src: bird7, category: "Birds" },
  { src: street12, category: "Street" },
  { src: street13, category: "Street" },
  { src: bird14, category: "Birds" },
  { src: street32, category: "Street" },
  { src: street33, category: "Street" },
  { src: street34, category: "Street" },
  { src: teju2, category: "Portraits" },
  { src: elephant1, category: "Wildlife" },
  { src: grey, category: "Primates" },
  { src: street4, category: "Street" },
  { src: street5, category: "Street" },
  { src: dancer, category: "Portraits" },
  { src: bird48, category: "Birds" },
  { src: guruvayoor1, category: "Portraits" },
  { src: kush, category: "Portraits" },
  { src: street6, category: "Street" },
  { src: street10, category: "Street" },
  { src: Food3, category: "Food" },
  { src: Food4, category: "Food" },
  { src: street11, category: "Street" },
  { src: street18, category: "Street" },
  { src: ankita, category: "Portraits" },
  { src: bird49, category: "Birds" },
  { src: birthday1, category: "Portraits" },
  { src: kol4, category: "Street" },
  { src: kol5, category: "Street" },
  { src: Arunachalam, category: "Portraits" },
  { src: bird22, category: "Birds" },
  { src: bird25, category: "Birds" },
  { src: kol6, category: "Street" },
  { src: bird23, category: "Birds" },
  { src: greylangur3, category: "Primates" },
  { src: elephant8, category: "Wildlife" },
  { src: street19, category: "Street" },
  { src: ankita1, category: "Portraits" },
  { src: Eagle2, category: "Birds" },
  { src: Eagle3, category: "Birds" },
  { src: Eagle4, category: "Birds" },
  { src: Eagle5, category: "Birds" },
  { src: stru4, category: "Monuments" },
  { src: stru5, category: "Monuments" },
  { src: Mrng1, category: "Nature" },
  { src: street23, category: "Street" },
  { src: Wings, category: "Birds" },
  { src: stru3, category: "Monuments" },
  { src: street24, category: "Street" },

  { src: stru6, category: "Monuments" },
  { src: stru7, category: "Monuments" },
  // { src: stru8, category: "Monuments" },
  // { src: stru9, category: "Monuments" },
  // { src: stru10, category: "Monuments" },

  { src: crocodile1, category: "Reptiles" },
  { src: crocodile2, category: "Reptiles" },
  { src: monkey2, category: "Primates " },
  { src: street21, category: "Street" },
  { src: street22, category: "Street" },
  { src: Food13, category: "Food" },
  { src: gardenlizard5, category: "Reptiles" },
  { src: dog1, category: "Small Life" },
  { src: flower1, category: "Nature" },
  { src: street25, category: "Street" },
  { src: tortoise, category: "Reptiles" },
  { src: deer3, category: "Wildlife" },
  { src: monkey1, category: "Primates" },
  { src: street26, category: "Street" },
  { src: street27, category: "Street" },
  { src: street28, category: "Street" },
  { src: street29, category: "Street" },
  { src: street30, category: "Street" },
  { src: street31, category: "Street" },

  { src: monkey10, category: "Primates" },
  { src: tiger2, category: "Wildlife" },
  { src: street35, category: "Street" },
  { src: stru1, category: "Monuments" },
  { src: Dragonfly1, category: "Birds" },
  { src: Food7, category: "Food" },
  { src: Food8, category: "Food" },
  { src: dog2, category: "Small Life" },
  { src: Food1, category: "Food" },
  { src: street36, category: "Street" },
  { src: street37, category: "Street" },
  { src: street38, category: "Street" },
  { src: street39, category: "Street" },
  { src: street40, category: "Street" }, 
  { src: gardenlizard3, category: "Reptiles" },
  { src: Food11, category: "Food" },
  { src: gardenlizard4, category: "Reptiles" },
  { src: Food2, category: "Food" },
  { src: mithwa1, category: "Portraits" },
  { src: kol8, category: "Street" },
  { src: stru2, category: "Monuments" },
  { src: Butterfly, category: "Birds" },
  { src: Eagle1, category: "Birds" },
  { src: Food5, category: "Food" },
  { src: Food6, category: "Food" },
  { src: street20, category: "Street" },
  { src: Food10, category: "Food" },
  { src: street41, category: "Street" },
  { src: street42, category: "Street" }, 
  { src: gardenlizard2, category: "Reptiles" },
  { src: Food12, category: "Food" },
  { src: guruvayoor2, category: "Portraits" },
  { src: Dragonfly, category: "Birds" },
  { src: Food9, category: "Food" },
  { src: Mrng2, category: "Nature" },
  { src: sun, category: "Nature" },
  { src: view, category: "Nature" },
  { src: flower2, category: "Nature" },
  { src: flower3, category: "Nature" },
  { src: green, category: "Nature" }


];

const categories = [
  "All",
  "Wildlife",
  "Primates",
  "Birds",
  "Reptiles",
  "Small Life",
  "Portraits",
  "Monuments",
  "Street",
  "Food",
  "Nature"
];

/* ===============================
   COMPONENT
================================ */
const Work = () => {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState("All");

  /* Handle category from URL hash */
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

      {/* ===== POLISHED HEADER ===== */}
      <header className="work-header">
        <h1>My Work</h1>

        <p key={activeCategory} className="work-subtitle">
          {activeCategory === "All"
            ? "Complete Photography Collection"
            : `${activeCategory} Photography`}
        </p>

        <div className="header-line"></div>
      </header>

      {/* ===== FILTERS ===== */}
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

      {/* ===== GALLERY ===== */}
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