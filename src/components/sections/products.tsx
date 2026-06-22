"use client";

import { FadeUp, FadeLeft, FadeRight } from "@/components/animations";
import { MorphingBlob } from "@/components/anime-effects";
import { motion } from "framer-motion";

export function Products() {
  return (
    <section id="products" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <FadeUp>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Our <span className="gradient-text">Products</span>
          </h2>
          <p className="text-center opacity-60 mb-16 max-w-2xl mx-auto">
            Scalable platforms built by us, for businesses like yours
          </p>
        </FadeUp>

        <FadeLeft delay={0.2}>
          <div className="glass-card p-8 md:p-12 max-w-5xl mx-auto relative overflow-hidden group">
            {/* Morphing blob background */}
            <div className="absolute -top-20 -right-20">
              <MorphingBlob />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <motion.span 
                    className="text-3xl"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  >
                    ⚙️
                  </motion.span>
                  <h3 className="text-3xl font-bold gradient-text">Syncora</h3>
                  <span className="px-2 py-0.5 rounded-full text-xs bg-blue-500/20 text-blue-400 border border-blue-500/30 font-medium">Early Access</span>
                </div>
                <p className="text-lg opacity-70 mb-6 leading-relaxed">
                  An AI-powered business management suite that unifies your operations.
                  Smart CRM, automated workflows, WhatsApp integration, client portals,
                  and real-time analytics — everything a growing business needs in one platform.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {["AI CRM", "WhatsApp Automation", "Client Portal", "Analytics Dashboard", "Workflow Engine"].map((tag, i) => (
                    <motion.span 
                      key={tag} 
                      className="px-3 py-1 rounded-full text-sm glass-card font-medium"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(59,130,246,0.2)" }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                <motion.a
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59,130,246,0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold"
                >
                  Learn More →
                </motion.a>
              </div>

              {/* Animated phone mockup */}
              <motion.div 
                className="flex-shrink-0 w-52 h-52 rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center relative"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 animate-pulse" />
                <span className="text-7xl relative z-10">📱</span>
                
                <motion.div
                  className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  ✓
                </motion.div>
                <motion.div
                  className="absolute -bottom-1 -left-1 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ repeat: Infinity, duration: 2.5, delay: 0.5 }}
                >
                  3
                </motion.div>
              </motion.div>
            </div>
          </div>
        </FadeLeft>
      </div>
    </section>
  );
}
