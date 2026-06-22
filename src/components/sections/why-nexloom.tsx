"use client";

import { FadeUp, FadeLeft, FadeRight, ScaleIn } from "@/components/animations";
import { AnimatedGrid, CountUpNumber } from "@/components/anime-effects";
import { TextReveal } from "@/components/text-reveal";
import { motion } from "framer-motion";

const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 24, suffix: "/7", label: "Support Available" },
  { value: 3, suffix: "x", label: "Faster Delivery" },
];

const usps = [
  {
    title: "AI-First Approach",
    description: "We leverage AI at every stage — from design to deployment — for smarter, faster results.",
    icon: "⚡",
  },
  {
    title: "End-to-End Solutions",
    description: "From ideation to launch and beyond. One team, complete ownership, zero gaps.",
    icon: "🔗",
  },
  {
    title: "Future-Proof Tech",
    description: "Built with modern stacks that scale. No legacy debt, no rewrites needed.",
    icon: "🚀",
  },
  {
    title: "Transparent Process",
    description: "Real-time updates, clear timelines, and no surprises. You're always in the loop.",
    icon: "👁️",
  },
];

export function WhyNexloom() {
  return (
    <section id="why-nexloom" className="py-24 px-6 relative">
      <AnimatedGrid />

      <div className="max-w-7xl mx-auto relative z-10">
        <FadeUp>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Why <span className="gradient-text">Nexloom</span>?
          </h2>
          <p className="text-center opacity-60 mb-16 max-w-2xl mx-auto text-lg">
            <TextReveal text="Because your business deserves more than templates and mediocrity. We craft digital excellence." />
          </p>
        </FadeUp>

        {/* Stats with count-up animation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => (
            <ScaleIn key={stat.label} delay={i * 0.1}>
              <motion.div 
                className="glass-card p-6 text-center group"
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(59,130,246,0.15)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  <CountUpNumber value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm opacity-60 group-hover:opacity-100 transition-opacity">{stat.label}</div>
              </motion.div>
            </ScaleIn>
          ))}
        </div>

        {/* USPs with hover effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {usps.map((usp, i) => {
            const Wrapper = i % 2 === 0 ? FadeLeft : FadeRight;
            return (
              <Wrapper key={usp.title} delay={i * 0.1}>
                <motion.div 
                  className="glass-card p-8 h-full group relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 flex gap-4">
                    <motion.span 
                      className="text-3xl flex-shrink-0"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {usp.icon}
                    </motion.span>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">{usp.title}</h3>
                      <p className="opacity-60 leading-relaxed group-hover:opacity-80 transition-opacity">{usp.description}</p>
                    </div>
                  </div>
                </motion.div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
