import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import usePageMeta from "../components/usePageMeta";
import { asset, recognition, site } from "../data/site";

const FIELD = [
  { src: "photos/about/photo1.jpg", alt: "Shooting on a Kolkata street" },
  { src: "photos/about/photo7.jpg", alt: "Tracking birds with a telephoto lens" },
  { src: "photos/about/me2.jpg", alt: "Framing a shot in the forest" },
  { src: "photos/about/photo10.jpg", alt: "Portrait of Pavan in black and white" },
];

const GENRES = ["Wildlife", "Birds", "Street", "Portraits", "Nature"];

export default function About() {
  usePageMeta("About", "The story of Pavan Kumar Nagendla — a software engineer and photographer from Andhra Pradesh, exhibited at ICCR Kolkata and Chitrakala Parishath Bengaluru.");

  return (
    <div className="page">
      {/* Intro */}
      <section className="container split split--intro">
        <div className="split__text">
          <p className="eyebrow">About</p>
          <h1 className="h1">Hi, I&apos;m Pavan.</h1>
          <p className="lead">
            I&apos;m a software engineer and a self-taught photographer based in {site.location}. Under the name
            <strong> {site.brand}</strong>, I photograph wildlife, birds, street life and people.
          </p>
          <dl className="facts">
            <div><dt>Shooting since</dt><dd>2020</dd></div>
            <div><dt>Exhibitions</dt><dd>3</dd></div>
            <div><dt>In print</dt><dd>2 magazines</dd></div>
          </dl>
          <ul className="tags" aria-label="Genres">
            {GENRES.map((g) => (
              <li key={g}><Link to={`/work?category=${g.toLowerCase()}`}>{g}</Link></li>
            ))}
          </ul>
        </div>
        <div className="split__media split__media--tall">
          <img src={asset("photos/about/photo.jpg")} alt="Pavan Kumar Nagendla photographing on the street" width="1067" height="1600" />
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container prose">
          <p className="eyebrow">My story</p>
          <h2 className="h2">How a rented camera changed everything</h2>
          <p>
            It started during the pandemic. Those long, uncertain months gave me something unexpected: time, and the
            space to discover a passion I didn&apos;t know I had.
          </p>
          <p>
            I knew almost nothing about light or composition. I simply joined friends on their outdoor photo walks. On
            our third outing I finally took full control of the camera and made a single frame that I was proud of.
          </p>
          <blockquote className="pullquote">
            That day, curiosity turned into something permanent.
          </blockquote>
          <p>
            The very next morning I rented a camera body. Google and YouTube became my teachers, and every outing became
            a lesson. Eventually I bought my first camera, a Nikon D5600, and began exploring every genre I could: street,
            portraits, landscapes, wildlife and architecture.
          </p>
          <p>
            Today my camera has become my voice. It tells stories, holds on to moments, and preserves feelings that words
            often can&apos;t.
          </p>
        </div>
      </section>

      {/* Recognition timeline */}
      <section className="section section--tint">
        <div className="container">
          <header className="section-head">
            <div>
              <p className="eyebrow">Recognition</p>
              <h2 className="h2">Exhibitions &amp; publications</h2>
            </div>
          </header>
          <ol className="timeline">
            {recognition.map((r) => (
              <li key={r.date} className="timeline__item">
                <span className="timeline__date">{r.date}</span>
                <div>
                  <span className="timeline__type">{r.type}</span>
                  <h3 className="timeline__title">{r.title}</h3>
                  <p className="timeline__place">{r.place}</p>
                  <p className="timeline__note">{r.note}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* In the field */}
      <section className="section">
        <div className="container">
          <header className="section-head">
            <div>
              <p className="eyebrow">Behind the lens</p>
              <h2 className="h2">In the field</h2>
            </div>
          </header>
          <ul className="field">
            {FIELD.map((f) => (
              <li key={f.src}>
                <img src={asset(f.src)} alt={f.alt} loading="lazy" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="cta">
        <div className="container cta__inner">
          <h2 className="h2">Let&apos;s create something together.</h2>
          <div className="btn-row btn-row--center">
            <Link to="/contact" className="btn btn--light">
              Get in touch <FiArrowRight aria-hidden="true" />
            </Link>
            <Link to="/work" className="btn btn--ghost">View portfolio</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
