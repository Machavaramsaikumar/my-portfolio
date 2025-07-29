import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StellantisDetail from './components/StellantisDetail';
import NestDetail from './components/NestDetail';

// Prevent browser from restoring scroll on refresh
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = "manual";
}

function MainSections() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainSections />} />
        <Route path="/projects/stellantis" element={<StellantisDetail />} />
        <Route path="/projects/nest" element={<NestDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
