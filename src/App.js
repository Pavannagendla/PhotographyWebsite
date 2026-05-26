import React from "react";
/* CHANGED: Swapped out HashRouter for BrowserRouter */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./Home/HomePage";
import Work from "./Work/Work";
import About from "./About/About";
import Contact from "./Contact/Contact";
import CombinedPage from "./Common/CombinedPage";

function App() {
  return (
    /* CHANGED: Added the repository name as the basename so GitHub Pages can route cleanly */
    <Router basename="/hacker-camerawork">
      {/* THE TECHNICAL UTILITY RIBBON LAYER */}
      <Header />
      
      {/* LENS DIAL HUD OVERLAY OVERRIDES */}
      <Navbar />

      {/* CORE DISPLAY WINDOW PORTAL */}
      <div className="portfolio-master-frame">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/overview" element={<CombinedPage />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;