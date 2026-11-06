import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { asset, site } from "../data/site";

const LINKS = [
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Nav() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", open);
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const overlay = pathname === "/" && !scrolled && !open;

  return (
    <header className={`nav ${overlay ? "nav--overlay" : "nav--solid"} ${open ? "nav--open" : ""}`}>
      <div className="nav__inner">
        <Link to="/" className="nav__brand" aria-label={`${site.brand} — home`}>
          <img src={asset("logo-light.png")} alt="" width="720" height="323" />
          <span className="sr-only">{site.brand}</span>
        </Link>

        <nav className="nav__links" aria-label="Main">
          {LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} className={({ isActive }) => (isActive ? "is-active" : "")}>
              {l.label}
            </NavLink>
          ))}
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="nav__icon" aria-label="Instagram">
            <FaInstagram />
          </a>
        </nav>

        <button
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </div>

      <div id="mobile-menu" className="nav__drawer" hidden={!open}>
        <nav aria-label="Mobile">
          <NavLink to="/" end>Home</NavLink>
          {LINKS.map((l) => (
            <NavLink key={l.to} to={l.to}>{l.label}</NavLink>
          ))}
        </nav>
        <div className="nav__drawer-foot">
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={site.instagram} target="_blank" rel="noopener noreferrer">{site.instagramHandle}</a>
        </div>
      </div>
    </header>
  );
}
