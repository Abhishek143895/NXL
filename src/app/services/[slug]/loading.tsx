"use client";

import { motion } from "framer-motion";

export default function ServiceLoading() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-blue-500/20"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
          <motion.div
            className="h-12 w-80 mx-auto mb-4 rounded-xl bg-white/5"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ repeat: Infinity, duration: 1.5, delay: 0.1 }}
          />
          <motion.div
            className="h-6 w-64 mx-auto mb-6 rounded-lg bg-white/5"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}
          />
          <motion.div
            className="h-20 w-full max-w-3xl mx-auto rounded-xl bg-white/5"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ repeat: Infinity, duration: 1.5, delay: 0.3 }}
          />
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="h-40 rounded-2xl bg-white/5"
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.1 }}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
