import React, { useEffect } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import PhotoGrid from "../components/PhotoGrid";
import usePageMeta from "../components/usePageMeta";
import { CATEGORIES, CATEGORY_BLURBS, photos } from "../data/site";

/* Old site used #wildlife, #small-life, #primates … in the URL */
const LEGACY = { primates: "wildlife", reptiles: "wildlife", "small-life": "wildlife" };

export default function Work() {
  const [params, setParams] = useSearchParams();
  const { hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!hash) return;
    const key = decodeURIComponent(hash.slice(1)).toLowerCase();
    const mapped = LEGACY[key] || key;
    if (CATEGORIES.some((c) => c.toLowerCase() === mapped)) {
      navigate(`/work?category=${mapped}`, { replace: true });
    }
  }, [hash, navigate]);

  const slug = (params.get("category") || "").toLowerCase();
  const active = CATEGORIES.find((c) => c.toLowerCase() === slug) || "All";
  const list = active === "All" ? photos : photos.filter((p) => p.category === active);

  usePageMeta(active === "All" ? "Work" : `${active} photography`);

  const select = (c) => {
    if (c === "All") setParams({}, { replace: true });
    else setParams({ category: c.toLowerCase() }, { replace: true });
  };

  return (
    <div className="page">
      <div className="container">
        <header className="page-head">
          <p className="eyebrow">Portfolio</p>
          <h1 className="h1">{active === "All" ? "Selected work" : active}</h1>
          <p className="lead">
            {active === "All"
              ? "A collection of wildlife, birds, street, portrait and nature photographs. Tap any image to view it full screen."
              : CATEGORY_BLURBS[active]}
          </p>
        </header>

        <div className="filters" role="toolbar" aria-label="Filter by subject">
          {["All", ...CATEGORIES].map((c) => {
            const n = c === "All" ? photos.length : photos.filter((p) => p.category === c).length;
            return (
              <button key={c} className={`chip ${active === c ? "is-active" : ""}`} aria-pressed={active === c} onClick={() => select(c)}>
                {c} <span className="chip__count">{n}</span>
              </button>
            );
          })}
        </div>

        <PhotoGrid key={active} photos={list} columns={3} showCategory={active === "All"} />
      </div>
    </div>
  );
}
