import React from "react";
import { Link } from "react-router-dom";
import { asset, site } from "../data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <img src={asset("logo-light.png")} alt={site.brand} width="720" height="323" loading="lazy" />
          <p>
            {site.tagline} by {site.name}.<br />
            Based in {site.location}.
          </p>
        </div>

        <div>
          <h2 className="footer__heading">Explore</h2>
          <ul className="footer__list">
            <li><Link to="/work">Work</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="footer__heading">Get in touch</h2>
          <ul className="footer__list">
            <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li><a href={site.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
          </ul>
        </div>

        <div>
          <h2 className="footer__heading">Follow</h2>
          <ul className="footer__list">
            {site.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container footer__base">
        <span>© {new Date().getFullYear()} {site.name}. All photographs are copyrighted and may not be used without permission.</span>
      </div>
    </footer>
  );
}
