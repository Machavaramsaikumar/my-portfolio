import React from "react";
import { FaEye } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import StellantisLogo from "../assets/stellantis-logo.png";
import NestLogo from "../assets/nest-logo.png";

const projects = [
  {
    name: "Stellantis",
    image: StellantisLogo,
    desc: (
      <div>
        <span className="block mb-3 text-base text-gray-300 font-semibold">
          <b>What is Stellantis?</b><br />
          Stellantis is a top-5 global automaker and mobility provider, home to Jeep, Fiat, Peugeot, Citroën and more.
          Created by merging Fiat Chrysler and PSA Group in 2021, Stellantis powers innovation and automotive tech worldwide.
        </span>
        <span className="block text-base text-gray-200">
          I contributed to the <b>Majestic backend platform</b> powering vehicle data, activation flows, and robust API management for Stellantis’ digital transformation.
        </span>
      </div>
    ),
    internalRoute: "/projects/stellantis",
  },
  {
    name: "NEST",
    image: NestLogo,
    desc: (
      <div>
        <span className="block text-base text-gray-200">
          Built scalable microservices for seamless third-party API integration, with focus on QA/testing of backend APIs and continuous platform improvement.
        </span>
      </div>
    ),
    internalRoute: "/projects/nest",
  },
  // Add more projects as needed
];

export default function Projects() {
  const [active, setActive] = React.useState(0);
  const navigate = useNavigate();

  return (
    <section className="relative w-full min-h-screen py-24 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-white mb-16 text-center tracking-tight">
        Projects
      </h2>
      <div className="w-full flex items-center justify-center">
        <div className="relative w-[94vw] h-[70vh] md:w-[90vw] md:h-[76vh] max-w-[1350px] min-h-[340px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={projects[active].name}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="relative w-full h-full border border-sky-700/30 rounded-3xl shadow-2xl px-12 py-12 flex flex-col pointer-events-auto bg-black/25 backdrop-blur-md overflow-hidden"
              style={{
                background: "rgba(20,24,31,0.37)",
                boxShadow: "0 8px 54px 0 rgba(16,20,31,0.21)",
              }}
            >
              {projects[active].image && (
                <div className="w-full mb-5">
                  <img
                    src={projects[active].image}
                    alt={projects[active].name}
                    className="w-full h-[150px] md:h-[170px] object-cover rounded-2xl"
                    draggable={false}
                    style={{ minHeight: 100, maxHeight: 220 }}
                  />
                </div>
              )}
              <div className="flex flex-col flex-1 w-full h-full min-h-0">
                <span className="text-4xl md:text-5xl font-bold text-white">
                  {projects[active].name}
                </span>
                <div className="mt-6 text-lg text-gray-200 font-medium">
                  {projects[active].desc}
                </div>
                {projects[active].internalRoute ? (
                  <button
                    onClick={() => navigate(projects[active].internalRoute)}
                    className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-sky-500/95 to-indigo-500/90 text-white text-2xl font-semibold shadow-2xl hover:from-indigo-600/90 hover:to-sky-400/90 transition"
                    aria-label={`View ${projects[active].name}`}
                    style={{ alignSelf: "flex-start" }}
                  >
                    <FaEye className="text-3xl" />
                    <span>View the Project</span>
                  </button>
                ) : (
                  <a
                    href={projects[active].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-sky-500/95 to-indigo-500/90 text-white text-2xl font-semibold shadow-2xl hover:from-indigo-600/90 hover:to-sky-400/90 transition"
                    aria-label={`View ${projects[active].name}`}
                    style={{ alignSelf: "flex-start" }}
                  >
                    <FaEye className="text-3xl" />
                    <span>View the Project</span>
                  </a>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className="flex justify-center mt-10 gap-6">
        <button
          onClick={() => setActive(active > 0 ? active - 1 : projects.length - 1)}
          className="rounded-full bg-sky-700/80 p-3 hover:bg-sky-600 text-white text-xl transition"
          aria-label="Previous Project"
        >
          &#8592;
        </button>
        <button
          onClick={() => setActive((active + 1) % projects.length)}
          className="rounded-full bg-sky-700/80 p-3 hover:bg-sky-600 text-white text-xl transition"
          aria-label="Next Project"
        >
          &#8594;
        </button>
      </div>
    </section>
  );
}
