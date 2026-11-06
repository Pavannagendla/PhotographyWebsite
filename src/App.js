import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <a className="skip-link" href="#main">Skip to content</a>
      <Nav />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Old "Portfolio" page from the previous site */}
          <Route path="/overview" element={<Navigate to="/work" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL || "/"}>
      <AppRoutes />
    </BrowserRouter>
  );
}
