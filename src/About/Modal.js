import React from 'react';
import './Modal.css';

const Modal = ({ imageUrl, onClose }) => {
  if (!imageUrl) {
    return null; // Don't render anything if no image is selected
  }

  return (
    <div className="modal" onClick={onClose}>
      <span className="close" onClick={onClose}>&times;</span>
      <img 
        className="modal-content" 
        src={imageUrl} 
        alt="Enlarged view" 
        onClick={(e) => e.stopPropagation()} // Prevents modal from closing when clicking on the image
      />
    </div>
  );
};

export default Modal;