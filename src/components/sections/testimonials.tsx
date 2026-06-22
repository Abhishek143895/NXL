"use client";

import { FadeUp } from "@/components/animations";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Restaurant Owner",
    text: "Nexloom transformed our ordering process with Syncora. Our customers love the QR menu and we've seen a 40% increase in efficiency.",
    avatar: "RS",
  },
  {
    name: "Priya Mehta",
    role: "Startup Founder",
    text: "Their AI solutions helped us automate what used to take hours. The team is incredibly responsive and delivers beyond expectations.",
    avatar: "PM",
  },
  {
    name: "Amit Patel",
    role: "E-commerce Director",
    text: "The web app they built handles 10x our previous traffic with zero downtime. Best tech investment we've made.",
    avatar: "AP",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-500/5 to-purple-500/5 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto">
        <FadeUp>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            What <span className="gradient-text">Clients Say</span>
          </h2>
        </FadeUp>

        <div className="relative min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="glass-card p-8 md:p-12 text-center"
            >
              <div className="text-6xl opacity-10 font-serif mb-4">&ldquo;</div>
              
              <p className="text-lg md:text-xl opacity-80 mb-8 leading-relaxed italic -mt-8">
                {testimonials[current].text}
              </p>

              <div className="flex items-center justify-center gap-4">
                <motion.div 
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  {testimonials[current].avatar}
                </motion.div>
                <div className="text-left">
                  <div className="font-semibold">{testimonials[current].name}</div>
                  <div className="opacity-50 text-sm">{testimonials[current].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setCurrent(i)}
                className="relative w-3 h-3 rounded-full"
                whileHover={{ scale: 1.5 }}
              >
                <div className={`w-full h-full rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 scale-125"
                    : "bg-current opacity-30"
                }`} />
                {i === current && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-blue-500/30"
                    animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
