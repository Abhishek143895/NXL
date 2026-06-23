"use client";

import { FadeUp, FadeLeft, FadeRight } from "@/components/animations";
import { FloatingOrbs } from "@/components/anime-effects";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import anime from "animejs";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We understand your business, goals, and challenges through deep consultation.",
    icon: "🔍",
  },
  {
    number: "02",
    title: "Strategy & Design",
    description: "Crafting the blueprint — wireframes, architecture, and a clear roadmap.",
    icon: "✏️",
  },
  {
    number: "03",
    title: "Development",
    description: "Building with precision using modern tech stacks. Weekly demos, constant iteration.",
    icon: "⚙️",
  },
  {
    number: "04",
    title: "Launch & Scale",
    description: "Deployment, monitoring, and continuous optimization to maximize growth.",
    icon: "🚀",
  },
];

function AnimatedTimeline() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          anime({
            targets: lineRef.current,
            scaleY: [0, 1],
            duration: 2000,
            easing: "easeInOutExpo",
          });
        }
      },
      { threshold: 0.2 }
    );

    if (lineRef.current) observer.observe(lineRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={lineRef}
      className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 origin-top"
      style={{ transform: "scaleY(0)" }}
    />
  );
}

export function Process() {
  return (
    <section id="process" className="py-24 px-6 relative">
      <FloatingOrbs count={3} colors={["#8b5cf6", "#3b82f6"]} />

      <div className="max-w-4xl mx-auto relative z-10">
        <FadeUp>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-center opacity-60 mb-16 max-w-2xl mx-auto">
            A proven framework that delivers results, every time
          </p>
        </FadeUp>

        <div className="relative">
          <AnimatedTimeline />

          <div className="space-y-12">
            {steps.map((step, i) => {
              const Wrapper = i % 2 === 0 ? FadeLeft : FadeRight;
              return (
                <Wrapper key={step.number} delay={i * 0.2}>
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-6 md:gap-8 group"
                >
                  <motion.div 
                    className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg relative"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 animate-ping opacity-20" />
                    <span className="relative z-10 text-2xl">{step.icon}</span>
                  </motion.div>

                  <motion.div 
                    className="glass-card p-6 flex-1 group-hover:border-blue-500/30 transition-all duration-300"
                    whileHover={{ boxShadow: "0 10px 30px rgba(59,130,246,0.1)" }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-mono text-blue-400 opacity-60">{step.number}</span>
                      <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">{step.title}</h3>
                    </div>
                    <p className="opacity-60 leading-relaxed">{step.description}</p>
                  </motion.div>
                </motion.div>
              </Wrapper>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
