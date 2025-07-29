import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const About = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      id="about"
      className="relative overflow-hidden max-w-3xl mx-auto py-16 px-6 bg-gradient-to-br from-indigo-800 via-purple-800 to-blue-800 rounded-2xl shadow-2xl"
      aria-label="About Me Section"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={
        shouldReduceMotion ? false : { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
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
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">About Me</h2>
        <p className="text-lg md:text-xl leading-relaxed text-gray-200">
          Hello! I’m <strong>Saikumar Machavaram</strong>, a results-driven <strong>Java Backend Developer</strong> with over 3+ years of hands-on experience in building high-performance, scalable applications. At Atos, I’ve contributed to the <strong>Stellantis - Majestic</strong> project, driving version updates, regex-based data validations, and enhancements to complex backend systems.
          <br /><br />
          I also play the role of an <strong>AWS Functional Architect</strong>, crafting reliable cloud-native solutions that scale and perform. With a keen eye for detail, I’ve performed <strong>manual API testing</strong> across development lifecycles, ensuring quality delivery and business reliability.
          <br /><br />
          I thrive in Agile teams, value clean code, and believe in continuous improvement. I’m passionate about using technology to solve real-world problems and elevate user experience.
        </p>
      </div>
    </motion.section>
  );
};

export default About;
