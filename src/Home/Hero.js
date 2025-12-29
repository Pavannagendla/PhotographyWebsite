import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="content">
      <div className="text-section">
        <h1>HACKER_CAMERAWORK</h1>
        <h3>CHECK ME ON INSTAGRAM FOR MORE UPDATES</h3>
        <p><a href="https://www.instagram.com/explore/tags/hacker_camerawork/" target="_blank" rel="noopener noreferrer">#hacker_camerawork</a></p>
        <a href="https://www.instagram.com//hacker_camerawork" target="_blank" rel="noopener noreferrer">
          <button type="button" className="styled-button"><span></span>Know More</button>
        </a>
      </div>
      <div className="image-section">
        <img src="/creator1.jpg" alt="The photographer" />
      </div>
    </div>
  );
};

export default Hero;