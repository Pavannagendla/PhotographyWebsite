import React from 'react';
import './PhotoModal.css';

const PhotoModal = ({ selectedPhoto, categoryPhotos, onClose }) => {
  return (
    <div className="photo-modal" data-scroll-container>
      <div className="modal-left" data-scroll data-scroll-speed="0">
        <img src={selectedPhoto.src} alt="Enlarged" />
      </div>
      <div className="modal-right" data-scroll data-scroll-speed="0.2">
        <h3>{selectedPhoto.category} Gallery</h3>
        <div className="thumb-grid">
          {categoryPhotos.map((photo, index) => (
            <img
              key={index}
              src={photo.src}
              alt={photo.category}
              className={`thumb ${photo.src === selectedPhoto.src ? 'active' : ''}`}
              data-scroll
              data-scroll-speed={photo.speed !== undefined ? photo.speed : 0}
            />
          ))}
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default PhotoModal;