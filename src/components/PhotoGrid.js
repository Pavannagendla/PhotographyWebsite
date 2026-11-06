import React, { useEffect, useMemo, useState } from "react";
import Lightbox from "./Lightbox";
import { asset } from "../data/site";

function useColumnCount(max) {
  const get = () => {
    const w = typeof window === "undefined" ? 1200 : window.innerWidth;
    if (w < 760) return Math.min(2, max);
    if (w < 1100) return Math.min(2, max);
    return max;
  };
  const [cols, setCols] = useState(get);
  useEffect(() => {
    const onResize = () => setCols(get());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [max]);
  return cols;
}

/**
 * Masonry grid that keeps the curated order reading left-to-right:
 * each photo goes into the currently shortest column.
 */
export default function PhotoGrid({ photos, columns = 3, showCategory = true }) {
  const [active, setActive] = useState(null);
  const cols = useColumnCount(columns);

  const layout = useMemo(() => {
    const out = Array.from({ length: cols }, () => ({ h: 0, items: [] }));
    photos.forEach((p, i) => {
      const col = out.reduce((a, b) => (b.h < a.h - 0.01 ? b : a));
      col.items.push({ p, i });
      col.h += p.height / p.width;
    });
    return out;
  }, [photos, cols]);

  return (
    <>
      <div className="masonry" style={{ "--cols": cols }}>
        {layout.map((col, c) => (
          <ul key={c} className="masonry__col">
            {col.items.map(({ p, i }) => (
              <li key={p.id}>
                <button className="tile" onClick={() => setActive(i)} aria-label={`View “${p.title}” larger`}>
                  <img
                    src={asset(p.thumb)}
                    alt={p.title}
                    width={p.width}
                    height={p.height}
                    loading={i < 6 ? "eager" : "lazy"}
                    decoding="async"
                  />
                  <span className="tile__caption">
                    <span className="tile__title">{p.title}</span>
                    {showCategory && <span className="tile__cat">{p.category}</span>}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        ))}
      </div>
      <Lightbox items={photos} index={active} onChange={setActive} onClose={() => setActive(null)} />
    </>
  );
}
