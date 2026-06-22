"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface Props {
  variant?: "wave" | "gradient" | "dots";
  flip?: boolean;
}

export function SectionDivider({ variant = "wave", flip = false }: Props) {
  if (variant === "wave") {
    return (
      <div className={`w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""}`}>
        <svg
          className="relative block w-full h-[60px] md:h-[80px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,60 L1200,120 L0,120 Z"
            className="fill-[var(--background)] opacity-50"
          />
          <path
            d="M0,80 C300,120 600,40 900,80 C1050,100 1150,60 1200,80 L1200,120 L0,120 Z"
            className="fill-[var(--background)]"
          />
        </svg>
      </div>
    );
  }

  if (variant === "gradient") {
    return (
      <div className="w-full h-px relative my-12">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent translate-y-px" />
      </div>
    );
  }

  // dots variant
  return (
    <div className="flex justify-center gap-2 py-8">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
          animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
          transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }}
        />
      ))}
    </div>
  );
}

export function ParallaxSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
