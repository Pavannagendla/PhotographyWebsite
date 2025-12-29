import React from "react";
import Slider from "react-slick";
import "./Recognition.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import retrokolkata from "../images/Retro_Kolkata.png";
import asx from "../images/ASX.png";
import lensified from "../images/Lensified.png";

const achievements = [
  {
    title: "Retro Kolkata Magazine",
    imageUrl: retrokolkata,
    description:
      'Selected for the "India In 100 Frames" magazine, celebrating diverse and powerful photography from across the nation.',
  },
  {
    title: "ASX The Picture Perfect",
    imageUrl: asx,
    description:
      'Featured in the magazine launched by "ASX The Picture Perfect," showcasing compelling visual stories and artistic talent.',
  },
  {
    title: "Lensified Competition",
    imageUrl: lensified,
    description:
      'Participated in the "Consequat Reimagined" competition with a series of personal wildlife photographs.',
  },
];

const AchievementCard = ({ imageUrl, title, description }) => (
  <div
    className="achievement-card"
    style={{ "--image-url": `url(${imageUrl})` }}
  >
    <div className="card-inner">
      <span className="badge">Featured In</span>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  </div>
);

const Recognition = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    pauseOnFocus: true,
    arrows: false,
  };

  return (
    <section className="recognition-section">
      <h2>Recognition & Features</h2>
      <p className="section-subtitle">
        Selected works and photography features across magazines and creative
        platforms
      </p>

      <div className="achievements-slider">
        <Slider {...settings}>
          {achievements.map((item, index) => (
            <div key={index}>
              <AchievementCard {...item} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Recognition;
