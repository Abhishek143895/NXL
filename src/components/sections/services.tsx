"use client";

import { FadeUp, FadeLeft, FadeRight } from "@/components/animations";
import { FloatingOrbs, GlowingLines } from "@/components/anime-effects";
import { TiltCard } from "@/components/tilt-card";
import Link from "next/link";

const services = [
  {
    icon: "🤖",
    title: "AI Solutions",
    slug: "ai-solutions",
    description: "Custom chatbots, virtual assistants, and AI automation that handle customer queries, appointments, and workflows 24/7.",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: "🌐",
    title: "Web & App Development",
    slug: "web-app-development",
    description: "High-performance websites, web apps, and mobile apps built with modern frameworks — from landing pages to full-scale platforms.",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: "📈",
    title: "Digital Marketing",
    slug: "digital-marketing",
    description: "AI-optimized SEO, Google & Meta ads, social media management, and content strategy that drives measurable growth.",
    gradient: "from-orange-500/20 to-yellow-500/20",
  },
  {
    icon: "⚡",
    title: "Business Automation",
    slug: "business-automation",
    description: "WhatsApp bots, CRM systems, workflow automation, and smart integrations that eliminate repetitive manual work.",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: "🧠",
    title: "Business Intelligence",
    slug: "business-intelligence",
    description: "Real-time dashboards, predictive analytics, and data-driven insights to make smarter decisions faster.",
    gradient: "from-indigo-500/20 to-blue-500/20",
  },
  {
    icon: "🏗️",
    title: "Smart Infrastructure",
    slug: "smart-infrastructure",
    description: "AI-powered CCTV analytics, digital kiosks, IoT monitoring, and smart attendance systems for modern businesses.",
    gradient: "from-rose-500/20 to-purple-500/20",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 px-6 relative">
      <FloatingOrbs count={4} colors={["#3b82f6", "#8b5cf6", "#06b6d4"]} />
      <GlowingLines />

      <div className="max-w-7xl mx-auto relative z-10">
        <FadeUp>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-center opacity-60 mb-16 max-w-2xl mx-auto">
            End-to-end digital solutions to transform your business
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            // Alternate: left for col 0, up for col 1, right for col 2
            const col = i % 3;
            const Wrapper = col === 0 ? FadeLeft : col === 2 ? FadeRight : FadeUp;
            return (
              <Wrapper key={service.title} delay={i * 0.1}>
                <Link href={`/services/${service.slug}`}>
                  <TiltCard className="h-full">
                    <div className="glass-card p-8 transition-all duration-300 group cursor-pointer h-full relative overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                      <div className="relative z-10">
                        <div className="text-4xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                          {service.icon}
                        </div>
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">{service.title}</h3>
                        <p className="opacity-60 leading-relaxed group-hover:opacity-80 transition-opacity">{service.description}</p>
                        <span className="inline-block mt-4 text-sm text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                          Learn more →
                        </span>
                      </div>
                    </div>
                  </TiltCard>
                </Link>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
