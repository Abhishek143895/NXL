"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
}

export function TextReveal({ text, className = "" }: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const words = text.split(" ");

  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.3em]"
          initial={{ opacity: 0.2 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

export function HighlightReveal({ text, className = "" }: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <span ref={ref} className={`relative inline ${className}`}>
      <span className="relative z-10">{text}</span>
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 -z-0 rounded"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ originX: 0 }}
      />
    </span>
  );
}
