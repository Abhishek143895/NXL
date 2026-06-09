"use client";

import { motion } from "framer-motion";
import { ParticleField } from "@/components/three/particle-field";
import { MagneticButton } from "@/components/magnetic-button";
import { useEffect, useState } from "react";

const headline = "We Build What's Next";

export function Hero() {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(headline.slice(0, i + 1));
      i++;
      if (i >= headline.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleField />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="gradient-text">{displayText}</span>
          <span className="animate-pulse">|</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="text-lg md:text-xl opacity-70 mb-10 max-w-2xl mx-auto"
        >
          AI-powered solutions, stunning web experiences, and digital strategies
          that propel your business into the future.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <MagneticButton href="#contact" className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-lg hover:scale-105 transition-transform glow-blue">
            Get Started
          </MagneticButton>
          <MagneticButton href="#services" className="px-8 py-4 rounded-xl glass-card font-semibold text-lg hover:scale-105 transition-transform">
            Our Services
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 rounded-full border-2 border-current opacity-50 flex items-start justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-current" />
        </motion.div>
      </motion.div>
    </section>
  );
}
