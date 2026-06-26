import React from "react";
import { motion } from "framer-motion";

const ContactButton = () => (
  <motion.button
    type="button"
    aria-label="Contact Me"
    className="relative inline-block px-8 py-3 font-semibold rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 overflow-hidden shadow-lg"
    // Pulse aura animation
    animate={{
      boxShadow: [
        "0 0 15px 6px rgba(99,102,241,0.2)",
        "0 0 30px 12px rgba(129,140,248,0.35)",
        "0 0 15px 6px rgba(99,102,241,0.2)"
      ]
    }}
    transition={{
      duration: 2.2,
      repeat: Infinity,
      repeatType: "reverse"
    }}
    whileHover={{
      scale: 1.07,
      boxShadow: "0 0 32px 8px rgba(129,140,248,0.50)"
    }}
    whileTap={{
      scale: 0.98
    }}
  >
    Contact Me
    {/* Optional: animated ring/aura using before pseudo */}
    <span
      aria-hidden
      className="absolute inset-0 pointer-events-none rounded-lg"
      style={{
        background:
          "radial-gradient(circle, rgba(129,140,248,0.25) 60%, transparent 100%)",
        animation: "pulseAura 2.5s infinite alternate"
      }}
    />
    <style>
      {`
        @keyframes pulseAura {
          0% { opacity: 0.78; }
          100% { opacity: 0.32; }
        }
      `}
    </style>
  </motion.button>
);

export default ContactButton;
