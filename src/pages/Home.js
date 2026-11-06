import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiArrowDown } from "react-icons/fi";
import PhotoGrid from "../components/PhotoGrid";
import usePageMeta from "../components/usePageMeta";
import { asset, byId, CATEGORIES, CATEGORY_BLURBS, featured, photos, recognition, site } from "../data/site";

/* Landscape frames for wide screens, portrait frames for phones */
const HERO = [
  { wide: "wildlife-tiger2", tall: "street-street33" },
  { wide: "birds-16", tall: "portraits-arunachalam" },
  { wide: "wildlife-gaintsquirrel", tall: "wildlife-tiger3" },
  { wide: "nature-mrng2", tall: "street-kol9" },
];

const CATEGORY_COVERS = {
  Wildlife: "wildlife-tiger3",
  Birds: "birds-49",
  Street: "street-kol9",
  Portraits: "portraits-dancer",
  Nature: "nature-sun",
};

const INSTAGRAM = [
  { src: "photos/instagram/monkey-baby.jpg", href: "https://www.instagram.com/p/DIwUhldTXD6/", alt: "Monkey with her baby" },
  { src: "photos/instagram/squirrel.jpg", href: "https://www.instagram.com/p/CViTnZdsDae/", alt: "Squirrel" },
  { src: "photos/instagram/eagel.jpg", href: "https://www.instagram.com/p/C7JvutFvxix/", alt: "Eagle" },
  { src: "photos/instagram/fishing-boat.jpg", href: "https://www.instagram.com/p/CrDl4kzv_NA/", alt: "Fishing boat" },
];

function Hero() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const t = setInterval(() => setSlide((s) => (s + 1) % HERO.length), 6000);
    return () => clearInterval(t);
  }, []);

  const current = HERO[slide];

  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero__slides" aria-hidden="true">
        {HERO.map((h, i) => (
          <picture key={h.wide} className={`hero__slide ${i === slide ? "is-active" : ""}`}>
            <source media="(max-width: 760px) and (orientation: portrait)" srcSet={asset(byId[h.tall].src)} />
            <img src={asset(byId[h.wide].src)} alt="" fetchpriority={i === 0 ? "high" : "auto"} loading={i === 0 ? "eager" : "lazy"} />
          </picture>
        ))}
      </div>
      <div className="hero__shade" />

      <div className="container hero__content">
        <p className="eyebrow">{site.brand}</p>
        <h1 className="hero__title">{site.name}</h1>
        <p className="hero__lead">
          {site.tagline} from Andhra Pradesh, India. Exhibited in Kolkata and Bengaluru, published in
          <em> India in 100 Frames</em>.
        </p>
        <div className="btn-row">
          <Link to="/work" className="btn btn--light">
            View portfolio <FiArrowRight aria-hidden="true" />
          </Link>
          <Link to="/contact" className="btn btn--ghost">Get in touch</Link>
        </div>
      </div>

      <div className="container hero__foot">
        <span className="hero__credit">
          <span className="sr-only">Current photo: </span>
          <span className="hero__credit-desktop">{byId[current.wide].title}</span>
          <span className="hero__credit-mobile">{byId[current.tall].title}</span>
        </span>
        <div className="hero__dots" role="tablist" aria-label="Choose hero photo">
          {HERO.map((h, i) => (
            <button
              key={h.wide}
              role="tab"
              aria-selected={i === slide}
              aria-label={`Photo ${i + 1}`}
              className={i === slide ? "is-active" : ""}
              onClick={() => setSlide(i)}
            />
          ))}
        </div>
        <a href="#selected" className="hero__scroll" aria-label="Scroll to selected work">
          <FiArrowDown />
        </a>
      </div>
    </section>
  );
}

export default function Home() {
  usePageMeta(null);
  const counts = Object.fromEntries(CATEGORIES.map((c) => [c, photos.filter((p) => p.category === c).length]));

  return (
    <>
      <Hero />

      {/* Credibility strip */}
      <section className="credits" aria-label="Exhibitions and publications">
        <div className="container credits__inner">
          <p className="credits__label">Exhibited &amp; published</p>
          <ul className="credits__list">
            {[...recognition].reverse().map((r) => (
              <li key={r.date}>
                <span className="credits__title">{r.title}</span>
                <span className="credits__meta">{r.place} · {r.date.split(" ")[1]}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Selected work */}
      <section id="selected" className="section">
        <div className="container">
          <header className="section-head">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 className="h2">Moments worth keeping</h2>
            </div>
            <Link to="/work" className="link-arrow">
              See all {photos.length} photographs <FiArrowRight aria-hidden="true" />
            </Link>
          </header>
          <PhotoGrid photos={featured} columns={3} />
        </div>
      </section>

      {/* Categories */}
      <section className="section section--tint">
        <div className="container">
          <header className="section-head">
            <div>
              <p className="eyebrow">Portfolio</p>
              <h2 className="h2">Browse by subject</h2>
            </div>
          </header>
          <ul className="categories">
            {CATEGORIES.map((c) => {
              const cover = byId[CATEGORY_COVERS[c]];
              return (
                <li key={c}>
                  <Link to={`/work?category=${c.toLowerCase()}`} className="category-card">
                    <img src={asset(cover.thumb)} alt="" loading="lazy" width={cover.width} height={cover.height} />
                    <span className="category-card__body">
                      <span className="category-card__name">{c}</span>
                      <span className="category-card__blurb">{CATEGORY_BLURBS[c]}</span>
                      <span className="category-card__count">{counts[c]} photographs</span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* About teaser */}
      <section className="section">
        <div className="container split">
          <div className="split__media">
            <img src={asset("photos/about/me2.jpg")} alt="Pavan Kumar Nagendla with his camera" loading="lazy" width="1600" height="1600" />
          </div>
          <div className="split__text">
            <p className="eyebrow">About</p>
            <h2 className="h2">Software engineer by day. Photographer by heart.</h2>
            <p className="lead">
              I picked up a camera in 2020, during the quiet months of the pandemic, and never put it down. What started
              with a rented DSLR became a practice spanning wildlife, birds, street and portraits.
            </p>
            <p>
              I&apos;m drawn to patient, honest moments: a langur cradling her young, a barber at work in a Kolkata lane,
              the instant a cormorant lifts off the water. Since then my work has been exhibited at ICCR Kolkata and
              Chitrakala Parishath, Bengaluru, and published in print.
            </p>
            <Link to="/about" className="link-arrow">
              Read my story <FiArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="quote">
        <div className="container">
          <blockquote>
            “Photography isn&apos;t about the gear. It&apos;s about the moments you choose to feel forever.”
          </blockquote>
        </div>
      </section>

      {/* Instagram */}
      <section className="section">
        <div className="container">
          <header className="section-head">
            <div>
              <p className="eyebrow">Instagram</p>
              <h2 className="h2">Follow the journey</h2>
            </div>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="link-arrow">
              {site.instagramHandle} <FiArrowRight aria-hidden="true" />
            </a>
          </header>
          <ul className="insta">
            {INSTAGRAM.map((it) => (
              <li key={it.src}>
                <a href={it.href} target="_blank" rel="noopener noreferrer" aria-label={`${it.alt} — view on Instagram`}>
                  <img src={asset(it.src)} alt={it.alt} loading="lazy" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container cta__inner">
          <h2 className="h2">Have a shoot, story or collaboration in mind?</h2>
          <p className="lead">Portraits, occasions and creative projects. Tell me what you&apos;re imagining.</p>
          <div className="btn-row btn-row--center">
            <Link to="/contact" className="btn btn--light">
              Start a conversation <FiArrowRight aria-hidden="true" />
            </Link>
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
              Message on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
