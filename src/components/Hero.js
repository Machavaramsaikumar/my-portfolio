import React, { useEffect, useState } from "react";
import profileImg from "../assets/profile.jpg";
import "./HeroGlow.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaDownload } from "react-icons/fa";

const TITLES = [
  "Java Backend Developer",
  "AWS Functional Architect",
  "Manual API Tester"
];

const SUBTITLES = [
  "Passionate about building scalable backend systems and delivering robust solutions.",
  "Designing cloud-native solutions and optimizing AWS architectures.",
  "Ensuring API quality with thorough manual testing and documentation."
];

// Custom hook for typing effect
function useTypewriter(words, typingSpeed = 80, pause = 1200, deletingSpeed = 40) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const currentWord = words[index];

    if (!isDeleting && displayed.length < currentWord.length) {
      timeout = setTimeout(() => {
        setDisplayed(currentWord.slice(0, displayed.length + 1));
      }, typingSpeed);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(currentWord.slice(0, displayed.length - 1));
      }, deletingSpeed);
    } else if (!isDeleting && displayed.length === currentWord.length) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, index, words, typingSpeed, pause, deletingSpeed]);

  return displayed;
}

const Hero = () => {
  const typedTitle = useTypewriter(TITLES, 80, 1200, 40);
  const [subtitleIndex, setSubtitleIndex] = useState(0);

  // Sync subtitle with title
  useEffect(() => {
    const idx = TITLES.findIndex((t) => t.startsWith(typedTitle) || typedTitle === "");
    setSubtitleIndex(idx === -1 ? 0 : idx);
  }, [typedTitle]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="flex flex-col md:flex-row items-center justify-between min-h-[70vh] px-6 md:px-16 py-12 gap-10">
      {/* Left: Text */}
      <div className="flex-1 flex flex-col items-start justify-center gap-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-100 leading-tight">
          Hi, I&apos;m <span className="text-primary-400">Saikumar Machavaram</span>
        </h1>
        <h2 className="text-xl md:text-2xl font-medium text-primary-400 transition-all duration-500 min-h-[2.5rem]">
          {typedTitle}
          <span className="animate-pulse">|</span>
        </h2>
        <p className="text-neutral-400 max-w-xl transition-all duration-500 min-h-[3rem]">
          {SUBTITLES[subtitleIndex]} Let&apos;s connect and create something amazing together!
        </p>
        {/* Only Download Resume Button */}
        <a
          href="/resume.pdf" // Make sure resume.pdf is in your /public folder!
          download
          className="mt-6 inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white border-2 border-white font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-150 cursor-pointer"
          aria-label="Download Resume (PDF)"
        >
          <FaDownload className="text-lg" />
          Download Resume
        </a>
      </div>
      {/* Right: Image with animated neon border */}
      <div className="profile-glow-container">
        <img
          src={profileImg}
          alt="Saikumar Machavaram"
          className="profile-glow-img"
        />
      </div>
    </section>
  );
};

export default Hero;
