import React from 'react';
import './PhotoModal.css';

const PhotoModal = ({ selectedPhoto, categoryPhotos, onSelectPhoto, onClose }) => {
  if (!selectedPhoto) return null;

  return (
    <div className="darkroom-modal-overlay" onClick={onClose}>
      {/* MINIMALIST OVERHEAD INDICATOR BAR */}
      <div className="modal-hud-header">
        <span className="hud-metric">MODE // INSPECT_EXHIBIT</span>
        <button className="hud-close-trigger" onClick={onClose}>
          CLOSE ✕
        </button>
      </div>

      <div className="modal-split-deck" onClick={(e) => e.stopPropagation()}>
        
        {/* LEFT CHANNEL: LARGE UNCOMPROMISED FOCUS IMAGE */}
        <div className="modal-lens-chamber">
          <div className="lens-canvas-wrapper">
            <img 
              src={selectedPhoto.src} 
              alt={selectedPhoto.category || "Exhibition asset"} 
              className="lens-large-img"
              style={{ objectPosition: selectedPhoto.focalPoint || 'center center' }}
            />
            <div className="lens-chroma-vignette"></div>
          </div>
        </div>

        {/* RIGHT CHANNEL: THE CONTACT STRIP CONSOLE */}
        <div className="modal-metadata-console">
          <div className="console-header">
            <span className="console-mono-tag">CLASSIFICATION INDEX</span>
            <h3 className="console-title-serif">{selectedPhoto.category} Cluster</h3>
            <p className="console-explanation">
              Select an alternative negative plate from the sheet sequence below to pivot the lens magnification focus.
            </p>
          </div>

          {/* DYNAMIC THUMBNAIL CONTACT GRID */}
          <div className="console-thumbnail-matrix">
            {categoryPhotos.map((photo, index) => {
              const isActive = photo.src === selectedPhoto.src;
              return (
                <div 
                  key={index} 
                  className={`console-thumb-cell ${isActive ? 'is-active' : ''}`}
                  onClick={() => onSelectPhoto && onSelectPhoto(photo)}
                >
                  <div className="cell-num-label">{(index + 1).toString().padStart(2, '0')}</div>
                  <div className="cell-image-bounding">
                    <img
                      src={photo.src}
                      alt={`Negative slice frame ${index + 1}`}
                      style={{ objectPosition: photo.focalPoint || 'center center' }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <footer className="console-footer-actions">
            <button className="luxury-action-btn solid" onClick={onClose}>
              <span>Exit Viewer</span>
            </button>
          </footer>
        </div>

      </div>
    </div>
  );
};

export default PhotoModal;