import React, { useState } from 'react';
import './BehindTheLens.css';

// Import images directly
import photo1 from '../images/About/photo1.jpg';
import photo2 from '../images/About/photo2.jpg';
import photo3 from '../images/About/photo3.jpg';
import photo4 from '../images/About/photo4.jpg';
import photo5 from '../images/About/photo5.jpg';
import photo6 from '../images/About/photo6.jpg';
import photo7 from '../images/About/photo7.jpg';
import photo8 from '../images/About/photo8.jpg';
import photo9 from '../images/About/photo9.jpg';
import photo10 from '../images/About/photo10.jpg';

const images = [
  { src: photo1, alt: 'A photo of the creator with a camera' },
  { src: photo2, alt: 'A candid shot of the creator during a photoshoot' },
  { src: photo3, alt: 'The creator setting up a shot' },
  { src: photo4, alt: 'A photo of the creator in a scenic location' },
  { src: photo5, alt: 'A photo of the creator with a camera' },
  { src: photo6, alt: 'A candid shot of the creator during a photoshoot' },
  { src: photo7, alt: 'The creator setting up a shot' },
  { src: photo8, alt: 'A photo of the creator in a scenic location' },
  { src: photo9, alt: 'The creator setting up a shot' },
  { src: photo10, alt: 'A photo of the creator in a scenic location' },
];

const BehindTheLens = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section className="about-section">
      <h2>Behind the Lens</h2>
      <div className="photo-grid">
        {images.map((img, index) => (
          <div 
            className="photo-card" 
            key={index}
            onClick={() => setSelectedImg(img.src)}
          >
            <img src={img.src} alt={img.alt} loading="lazy" />
          </div>
        ))}
      </div>

      {/* Simple Modal */}
      {selectedImg && (
        <div className="photo-modal" onClick={() => setSelectedImg(null)}>
          <span className="close-btn">&times;</span>
          <img src={selectedImg} alt="Enlarged view" className="modal-img" />
        </div>
      )}
    </section>
  );
};

export default BehindTheLens;
