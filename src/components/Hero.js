import React, { useEffect, useState } from "react";
import profileImg from "../assets/profile.jpg";
import "./HeroGlow.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaDownload } from "react-icons/fa";

const TITLES = [
  "IT Analyst (SDET 2)",
  "Java Backend Developer",
  "AWS Functional Architect"
];

const SUBTITLES = [
  "Currently working at TCS as an IT Analyst (SDET 2), specializing in automation testing Manual,Functional testing, API validation, and quality engineering.",

  "Experienced in Java, Spring Boot, REST APIs, Selenium, Postman, and enterprise application testing.",

  "Previously worked at Atos as a Senior Associate, contributing to Stellantis and NEST projects as a Java Backend Developer, QA Analyst, and AWS Functional Architect."
];

const startDate = new Date("2021-12-20");

const totalExperience = (
  (new Date() - startDate) /
  (1000 * 60 * 60 * 24 * 365.25)
).toFixed(1);

function useTypewriter(
  words,
  typingSpeed = 80,
  pause = 1200,
  deletingSpeed = 40
) {
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
  }, [
    displayed,
    isDeleting,
    index,
    words,
    typingSpeed,
    pause,
    deletingSpeed
  ]);

  return displayed;
}

const Hero = () => {
  const typedTitle = useTypewriter(TITLES, 80, 1200, 40);
  const [subtitleIndex, setSubtitleIndex] = useState(0);

  useEffect(() => {
    const idx = TITLES.findIndex(
      (t) => t.startsWith(typedTitle) || typedTitle === ""
    );
    setSubtitleIndex(idx === -1 ? 0 : idx);
  }, [typedTitle]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="flex flex-col md:flex-row items-center justify-between min-h-[70vh] px-6 md:px-16 py-12 gap-10">
      <div className="flex-1 flex flex-col items-start justify-center gap-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-100 leading-tight">
          Hi, I'm <span className="text-primary-400">Saikumar Machavaram</span>
        </h1>

        <h2 className="text-xl md:text-2xl font-medium text-primary-400 transition-all duration-500 min-h-[2.5rem]">
          {typedTitle}
          <span className="animate-pulse">|</span>
        </h2>

        <div className="flex flex-wrap gap-3">
          <span className="px-4 py-2 rounded-full bg-primary-500/20 text-primary-300 text-sm font-medium">
            TCS
          </span>

          <span className="px-4 py-2 rounded-full bg-primary-500/20 text-primary-300 text-sm font-medium">
            {totalExperience}+ Years Experience
          </span>

          <span className="px-4 py-2 rounded-full bg-primary-500/20 text-primary-300 text-sm font-medium">
            Java • AWS • Automation
          </span>
        </div>

        <p className="text-neutral-400 max-w-xl transition-all duration-500 min-h-[4rem]">
          {SUBTITLES[subtitleIndex]}
        </p>

        <a
          href="/resume.pdf"
          download
          className="mt-6 inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white border-2 border-white font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-150 cursor-pointer"
          aria-label="Download Resume (PDF)"
        >
          <FaDownload className="text-lg" />
          Download Resume
        </a>
      </div>

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