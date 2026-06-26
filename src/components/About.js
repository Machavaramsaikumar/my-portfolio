import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const About = () => {
  const shouldReduceMotion = useReducedMotion();

  const totalExperience = (
    (new Date() - new Date("2021-12-20")) /
    (1000 * 60 * 60 * 24 * 365.25)
  ).toFixed(1);

  return (
    <motion.section
      id="about"
      className="relative overflow-hidden max-w-3xl mx-auto py-16 px-6 bg-gradient-to-br from-indigo-800 via-purple-800 to-blue-800 rounded-2xl shadow-2xl"
      aria-label="About Me Section"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={
        shouldReduceMotion
          ? false
          : {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                ease: "easeOut",
              },
            }
      }
      viewport={{ once: true, amount: 0.3 }}
      style={
        shouldReduceMotion
          ? {}
          : {
              animation: "borderGlowPulse 3.3s ease-in-out infinite",
              borderWidth: "2px",
              borderStyle: "solid",
              borderImage:
                "linear-gradient(135deg, rgba(99,102,241,0.8), rgba(168,85,247,0.9), rgba(79,70,229,0.8)) 1",
              borderRadius: "1rem",
            }
      }
    >
      {!shouldReduceMotion && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{
            zIndex: 1,
            background:
              "linear-gradient(135deg, transparent 0%, rgba(129,140,248,0.4) 20%, rgba(168,85,247,0.3) 50%, rgba(99,102,241,0.4) 80%, transparent 100%)",
            backgroundSize: "500% 500%",
            animation: "edgeLaser 6s linear infinite",
            opacity: 0.3,
            mixBlendMode: "lighten",
          }}
        />
      )}

      <div className="relative z-10 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          About Me
        </h2>

        <p className="text-lg md:text-xl leading-relaxed text-gray-200">
          Hello! I’m <strong>Saikumar Machavaram</strong>, an experienced{" "}
          <strong>IT Analyst (SDET 2)</strong> currently working at{" "}
          <strong>TCS</strong>, with over{" "}
          <strong>{totalExperience}+ years</strong> of professional
          experience in software testing, backend development, automation
          engineering, and cloud technologies.

          <br />
          <br />

          Prior to joining TCS, I worked at <strong>Atos</strong> as a{" "}
          <strong>Senior Associate</strong>, contributing to enterprise-scale
          automotive and financial platforms including{" "}
          <strong>Stellantis (Majestic Vehicle Platform)</strong> and{" "}
          <strong>NEST Workplace Pension Scheme</strong>. My responsibilities
          included backend development, API integrations, quality assurance,
          cloud solution design, version upgrades, production support, and
          system enhancements.

          <br />
          <br />

          My technical expertise spans{" "}
          <strong>Java</strong>, <strong>Spring Boot</strong>,{" "}
          <strong>Microservices</strong>, <strong>REST APIs</strong>,{" "}
          <strong>Selenium</strong>, <strong>TestNG</strong>,{" "}
          <strong>Postman</strong>, <strong>AWS</strong>,{" "}
          <strong>SQL</strong>, <strong>Jenkins</strong>,{" "}
          <strong>CI/CD</strong>, and modern Agile development practices.
          I have hands-on experience in automation testing, API validation,
          backend engineering, and ensuring software quality across the
          development lifecycle.

          <br />
          <br />

          I am passionate about building scalable solutions, improving
          software quality through automation, and leveraging technology to
          solve complex business challenges. I enjoy collaborating with
          cross-functional teams, learning new technologies, and delivering
          reliable, high-quality applications that create meaningful impact.
        </p>
      </div>
    </motion.section>
  );
};

export default About;