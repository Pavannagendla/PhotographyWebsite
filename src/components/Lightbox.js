import React, { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
import { asset } from "../data/site";

/**
 * Full-screen photo viewer.
 * items: [{ src, title, category, width, height }]
 * index: number | null (null = closed)
 */
export default function Lightbox({ items, index, onChange, onClose }) {
  const closeRef = useRef(null);
  const lastFocus = useRef(null);
  const touchX = useRef(null);
  const open = index !== null && index !== undefined;
  const count = items.length;

  const go = useCallback(
    (step) => onChange((index + step + count) % count),
    [index, count, onChange]
  );

  useEffect(() => {
    if (!open) return undefined;
    lastFocus.current = document.activeElement;
    document.body.classList.add("no-scroll");
    closeRef.current?.focus();
    return () => {
      document.body.classList.remove("no-scroll");
      lastFocus.current?.focus?.();
    };
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, go, onClose]);

  // Preload neighbours so next/previous feel instant
  useEffect(() => {
    if (!open || count < 2) return;
    [1, -1].forEach((s) => {
      const img = new Image();
      img.src = asset(items[(index + s + count) % count].src);
    });
  }, [open, index, items, count]);

  if (!open) return null;
  const item = items[index];

  return createPortal(
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
        touchX.current = null;
      }}
    >
      <div className="lightbox__bar">
        <span className="lightbox__count">
          {index + 1} / {count}
        </span>
        <button ref={closeRef} className="lightbox__btn" onClick={onClose} aria-label="Close viewer">
          <FiX />
        </button>
      </div>

      <figure className="lightbox__stage" onClick={(e) => e.target === e.currentTarget && onClose()}>
        <img
          key={item.src}
          src={asset(item.src)}
          alt={item.title}
          width={item.width}
          height={item.height}
          style={item.thumb ? { backgroundImage: `url("${asset(item.thumb)}")` } : undefined}
        />
        <figcaption>
          <span className="lightbox__title">{item.title}</span>
          {item.category && <span className="lightbox__cat">{item.category}</span>}
        </figcaption>
      </figure>

      {count > 1 && (
        <>
          <button className="lightbox__btn lightbox__nav lightbox__nav--prev" onClick={() => go(-1)} aria-label="Previous photo">
            <FiChevronLeft />
          </button>
          <button className="lightbox__btn lightbox__nav lightbox__nav--next" onClick={() => go(1)} aria-label="Next photo">
            <FiChevronRight />
          </button>
        </>
      )}
    </div>,
    document.body
  );
}
