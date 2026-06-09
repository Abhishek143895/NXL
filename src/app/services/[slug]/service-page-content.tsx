"use client";

import { motion } from "framer-motion";
import { FadeUp, FadeLeft, FadeRight } from "@/components/animations";
import { FloatingOrbs } from "@/components/anime-effects";
import type { ServiceDetail } from "@/data/services";
import Link from "next/link";

export function ServicePageContent({ service }: { service: ServiceDetail }) {
  return (
    <main className="min-h-screen pt-24 pb-16">
      {/* Hero */}
      <section className="relative px-6 py-20 overflow-hidden">
        <FloatingOrbs count={3} colors={["#3b82f6", "#8b5cf6", "#06b6d4"]} />

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <FadeUp>
            <motion.div
              className="text-6xl mb-6"
              animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              {service.icon}
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {service.title}
            </h1>
            <p className={`text-xl md:text-2xl font-medium bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent mb-6`}>
              {service.tagline}
            </p>
            <p className="text-lg opacity-70 max-w-3xl mx-auto leading-relaxed">
              {service.description}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              How This <span className="gradient-text">Helps Your Business</span>
            </h2>
            <p className="text-center opacity-60 mb-12 max-w-2xl mx-auto">
              Real impact, not just features
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.benefits.map((benefit, i) => {
              const Wrapper = i % 2 === 0 ? FadeLeft : FadeRight;
              return (
                <Wrapper key={benefit.title} delay={i * 0.1}>
                  <div className="glass-card p-6 h-full group hover:border-blue-500/30 transition-colors">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${service.gradient} opacity-80 flex items-center justify-center text-white font-bold mb-4`}>
                      {i + 1}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="opacity-60 leading-relaxed">{benefit.description}</p>
                  </div>
                </Wrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-20 relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              What&apos;s <span className="gradient-text">Included</span>
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.features.map((feature, i) => (
              <FadeUp key={feature} delay={i * 0.05}>
                <motion.div
                  className="flex items-center gap-3 p-4 rounded-xl glass-card group"
                  whileHover={{ x: 4, backgroundColor: "rgba(59,130,246,0.05)" }}
                >
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} flex-shrink-0`} />
                  <span className="opacity-80 group-hover:opacity-100 transition-opacity">{feature}</span>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Who <span className="gradient-text">Benefits</span>
            </h2>
            <p className="text-center opacity-60 mb-12">
              Real results for real businesses
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.useCases.map((useCase, i) => {
              const Wrapper = i % 2 === 0 ? FadeLeft : FadeRight;
              return (
                <Wrapper key={useCase.business} delay={i * 0.1}>
                  <div className="glass-card p-6 h-full border-l-4 border-l-blue-500/50">
                    <h3 className="text-lg font-semibold mb-2">{useCase.business}</h3>
                    <p className="opacity-60 leading-relaxed">{useCase.result}</p>
                  </div>
                </Wrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <FadeUp>
            <div className="glass-card p-12 relative overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5`} />
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                <p className="opacity-60 mb-8 max-w-xl mx-auto">
                  Let&apos;s discuss how {service.title.toLowerCase()} can transform your business. No commitments — just a conversation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href="/#contact"
                    className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-lg relative overflow-hidden group"
                    whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(59,130,246,0.3)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    <span className="relative z-10">{service.cta}</span>
                  </motion.a>
                  <motion.a
                    href="https://wa.me/919999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 rounded-xl glass-card font-semibold text-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    💬 WhatsApp Us
                  </motion.a>
                </div>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <Link
              href="/#services"
              className="inline-block mt-8 text-sm opacity-50 hover:opacity-100 transition-opacity"
            >
              ← Back to all services
            </Link>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
