"use client";

import { FadeUp } from "@/components/animations";
import { motion } from "framer-motion";
import { useState, FormEvent } from "react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-blue-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto">
        <FadeUp>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-center opacity-60 mb-16 max-w-2xl mx-auto">
            Ready to build something amazing? Get in touch.
          </p>
        </FadeUp>

        <FadeUp delay={0.2}>
          <motion.div 
            className="glass-card p-8 md:p-12 relative overflow-hidden"
            whileHover={{ boxShadow: "0 25px 50px rgba(59,130,246,0.1)" }}
            transition={{ duration: 0.5 }}
          >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-blue-500/30 rounded-tl-2xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-purple-500/30 rounded-br-2xl" />

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", bounce: 0.5 }}
                className="text-center py-12"
              >
                <motion.div 
                  className="text-6xl mb-4"
                  animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                  transition={{ duration: 1 }}
                >
                  🎉
                </motion.div>
                <h3 className="text-2xl font-bold mb-2 gradient-text">Message Sent!</h3>
                <p className="opacity-60">We&apos;ll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 opacity-70">Name</label>
                    <motion.input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-transparent border border-[var(--card-border)] focus:border-blue-500 focus:outline-none transition-all duration-300"
                      placeholder="Your name"
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      animate={focusedField === "name" ? { boxShadow: "0 0 20px rgba(59,130,246,0.2)" } : { boxShadow: "none" }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 opacity-70">Email</label>
                    <motion.input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-transparent border border-[var(--card-border)] focus:border-blue-500 focus:outline-none transition-all duration-300"
                      placeholder="you@example.com"
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      animate={focusedField === "email" ? { boxShadow: "0 0 20px rgba(59,130,246,0.2)" } : { boxShadow: "none" }}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 opacity-70">Service Interested In</label>
                  <select
                    className="w-full px-4 py-3 rounded-xl bg-[var(--background)] text-[var(--foreground)] border border-[var(--card-border)] focus:border-blue-500 focus:outline-none transition-colors"
                    defaultValue=""
                  >
                    <option value="" disabled className="bg-[#0d0d14] text-white">Select a service</option>
                    <option value="ai" className="bg-[#0d0d14] text-white">AI Solutions</option>
                    <option value="web" className="bg-[#0d0d14] text-white">Web & App Development</option>
                    <option value="marketing" className="bg-[#0d0d14] text-white">Digital Marketing</option>
                    <option value="automation" className="bg-[#0d0d14] text-white">Business Automation</option>
                    <option value="bi" className="bg-[#0d0d14] text-white">Business Intelligence</option>
                    <option value="infrastructure" className="bg-[#0d0d14] text-white">Smart Infrastructure</option>
                    <option value="other" className="bg-[#0d0d14] text-white">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 opacity-70">Message</label>
                  <textarea
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-transparent border border-[var(--card-border)] focus:border-blue-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    type="submit"
                    className="flex-1 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-lg relative overflow-hidden group"
                    whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(59,130,246,0.3)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    <span className="relative z-10">Send Message</span>
                  </motion.button>
                  <motion.a
                    href="https://wa.me/919999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-8 py-4 rounded-xl glass-card font-semibold text-lg text-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    💬 WhatsApp Us
                  </motion.a>
                </div>
              </form>
            )}
          </motion.div>
        </FadeUp>
      </div>
    </section>
  );
}
