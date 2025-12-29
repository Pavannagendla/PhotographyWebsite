import React from 'react';
import './Story.css';

import photo from '../images/About/photo.jpg';

const Story = () => {
  return (
    <section className="about-section">
      <h2 className="about-heading">About My Photography</h2>

      <div className="story-layout">
        {/* Left: Image */}
        <div className="story-image">
          <img src={photo} alt="A portrait of the photographer" />
          <div className="year-of-service">
            Photographing since 2020
          </div>
        </div>

        {/* Right: Story Content */}
        <div className="story-content">
          <div className="story-text">
            <p>
              In the midst of the pandemic&apos;s trying days, a flicker of inspiration ignited within me.
              Those gloomy times, marked by the shadow of COVID-19, provided an unexpected opportunity
              for me to unearth my hidden passion for photography.
            </p>

            <p>
              At the outset, I was blissfully ignorant about the art of photography, save for the fact that
              I was armed with a DSLR camera. What initially drew me in was the prospect of joining my
              friends on their photoshoot adventures. The turning point came during my third photoshoot,
              when I mustered the courage to take the reins and capture an image. That day, a spark ignited
              within me.
            </p>

            <p>
              The very next day, I ventured out to secure a camera on rent, embarking on a journey that
              would forever change my life. As I began clicking photographs, I delved into the intricacies
              of the camera. Google and YouTube became my trusty companions, offering an endless well of
              knowledge. With each passing day, my skills improved, and I painstakingly honed my craft.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
