import React from "react";
import { Link } from "react-router-dom";
import usePageMeta from "../components/usePageMeta";

export default function NotFound() {
  usePageMeta("Page not found");
  return (
    <div className="page">
      <div className="container page-head page-head--center">
        <p className="eyebrow">404</p>
        <h1 className="h1">This frame is out of focus.</h1>
        <p className="lead">The page you&apos;re looking for doesn&apos;t exist.</p>
        <div className="btn-row btn-row--center">
          <Link to="/" className="btn btn--light">Back to home</Link>
          <Link to="/work" className="btn btn--ghost">View portfolio</Link>
        </div>
      </div>
    </div>
  );
}
