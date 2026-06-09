"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const services = [
  { icon: "🤖", title: "AI Solutions", slug: "ai-solutions", desc: "Chatbots, virtual assistants & AI automation" },
  { icon: "🌐", title: "Web & App Development", slug: "web-app-development", desc: "Modern websites & mobile apps" },
  { icon: "📈", title: "Digital Marketing", slug: "digital-marketing", desc: "SEO, ads & social media growth" },
  { icon: "⚡", title: "Business Automation", slug: "business-automation", desc: "WhatsApp bots, CRM & workflows" },
  { icon: "🧠", title: "Business Intelligence", slug: "business-intelligence", desc: "Dashboards & predictive analytics" },
  { icon: "🏗️", title: "Smart Infrastructure", slug: "smart-infrastructure", desc: "AI CCTV, kiosks & IoT systems" },
];

type NavItem = {
  label: string;
  href: string;
  megaMenu?: "services" | "products";
};

const navLinks: NavItem[] = [
  { label: "Services", href: "#services", megaMenu: "services" },
  { label: "Products", href: "#products", megaMenu: "products" },
  { label: "Why Us", href: "#why-nexloom" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

function ServicesMegaMenu({ currentSlug }: { currentSlug: string | null }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleViewAll = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === "/") {
      document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#services");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[600px] p-6 rounded-2xl shadow-2xl border border-[var(--card-border)] bg-[#0d0d14]/95 backdrop-blur-xl"
    >
      {/* Arrow */}
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 glass-card border-b-0 border-r-0" />

      <div className="grid grid-cols-2 gap-3">
        {services.map((service) => {
          const isActive = currentSlug === service.slug;
          return (
            <Link
              key={service.title}
              href={`/services/${service.slug}`}
              className={`flex items-start gap-3 p-3 rounded-xl transition-colors group ${
                isActive
                  ? "bg-blue-500/15 ring-1 ring-blue-500/40"
                  : "hover:bg-blue-500/10"
              }`}
            >
              <span className="text-2xl group-hover:scale-110 transition-transform">
                {service.icon}
              </span>
              <div>
                <div className={`font-medium text-sm transition-colors ${
                  isActive ? "text-blue-400" : "group-hover:text-blue-400"
                }`}>
                  {service.title}
                </div>
                <div className="text-xs opacity-50">{service.desc}</div>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-4 pt-4 border-t border-[var(--card-border)]">
        <a
          href="/#services"
          onClick={handleViewAll}
          className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
        >
          View all services →
        </a>
      </div>
    </motion.div>
  );
}

function ProductsMegaMenu() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[380px] p-6 rounded-2xl shadow-2xl border border-[var(--card-border)] bg-[#0d0d14]/95 backdrop-blur-xl"
    >
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 glass-card border-b-0 border-r-0" />

      <a href="#products" className="flex items-center gap-4 p-4 rounded-xl hover:bg-blue-500/10 transition-colors group">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
          ⚙️
        </div>
        <div className="flex-1">
          <div className="font-semibold group-hover:text-blue-400 transition-colors">Syncora</div>
          <div className="text-xs opacity-50">AI-powered business management suite</div>
          <div className="flex gap-2 mt-2">
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400">AI CRM</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-400">Automation</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-500/10 text-green-400">Analytics</span>
          </div>
        </div>
      </a>

      <div className="mt-3 pt-3 border-t border-[var(--card-border)]">
        <p className="text-xs opacity-40 italic">More products coming soon...</p>
      </div>
    </motion.div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  // Extract current service slug from pathname
  const currentServiceSlug = pathname.startsWith("/services/")
    ? pathname.replace("/services/", "")
    : null;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (menu: string | undefined) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (menu) setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 200);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled ? "bg-[var(--background)]/80 backdrop-blur-xl border-[var(--card-border)] py-3" : "border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo with bounce */}
        <Link href="/">
          <motion.span
            className="text-2xl font-bold gradient-text"
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Nexloom
          </motion.span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.href}
              className="relative"
              onMouseEnter={() => handleMouseEnter(link.megaMenu)}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href={link.href}
                onClick={(e) => {
                  if (link.href.startsWith("#")) {
                    if (pathname === "/") {
                      e.preventDefault();
                      document.getElementById(link.href.slice(1))?.scrollIntoView({ behavior: "smooth" });
                    } else {
                      e.preventDefault();
                      router.push("/" + link.href);
                    }
                  }
                }}
                className="relative px-4 py-2 text-sm font-medium opacity-70 hover:opacity-100 transition-all group block"
              >
                {link.label}
                {link.megaMenu && (
                  <span className="ml-1 text-[10px] opacity-50 group-hover:opacity-100 transition-opacity">▾</span>
                )}
                {/* Underline animation */}
                <span
                  className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                />
              </a>

              {/* Mega Menus */}
              <AnimatePresence>
                {activeMenu === "services" && link.megaMenu === "services" && (
                  <ServicesMegaMenu currentSlug={currentServiceSlug} />
                )}
                {activeMenu === "products" && link.megaMenu === "products" && (
                  <ProductsMegaMenu />
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`h-0.5 w-full bg-current transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`h-0.5 w-full bg-current transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-full bg-current transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden glass-card mt-2 mx-4 rounded-xl"
          >
            <div className="p-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block py-3 text-lg font-medium opacity-70 hover:opacity-100 hover:translate-x-2 transition-all"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
