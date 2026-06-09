export interface ServiceDetail {
  slug: string;
  icon: string;
  title: string;
  tagline: string;
  description: string;
  gradient: string;
  benefits: { title: string; description: string }[];
  features: string[];
  useCases: { business: string; result: string }[];
  cta: string;
}

export const servicesData: ServiceDetail[] = [
  {
    slug: "ai-solutions",
    icon: "🤖",
    title: "AI Solutions",
    tagline: "Intelligent automation that works for you 24/7",
    description:
      "We build custom AI-powered chatbots, virtual assistants, and automation systems that handle customer queries, book appointments, qualify leads, and streamline operations — so you can focus on growing your business.",
    gradient: "from-blue-500 to-cyan-500",
    benefits: [
      {
        title: "Never Miss a Lead",
        description:
          "AI responds to every inquiry instantly — even at 3 AM. No more lost customers because you were busy or closed.",
      },
      {
        title: "Cut Operational Costs",
        description:
          "Replace repetitive manual tasks with AI. One chatbot can handle the work of 3-4 support staff at a fraction of the cost.",
      },
      {
        title: "Personalized Customer Experience",
        description:
          "AI remembers every customer interaction, provides personalized recommendations, and makes each customer feel valued.",
      },
      {
        title: "Scale Without Hiring",
        description:
          "Handle 10x more customer queries without adding headcount. AI scales instantly during peak hours.",
      },
    ],
    features: [
      "Custom AI Chatbots (Website & WhatsApp)",
      "AI Virtual Receptionist (Voice & Text)",
      "Appointment Booking Automation",
      "Lead Qualification & Scoring",
      "FAQ Auto-Responder trained on your data",
      "Multi-language Support",
      "Analytics & Conversation Insights",
      "Integration with CRM & existing tools",
    ],
    useCases: [
      {
        business: "Clinics & Hospitals",
        result: "70% fewer phone calls, automated appointment booking, patient follow-ups",
      },
      {
        business: "Coaching Institutes",
        result: "Instant course info, fee structure, and demo class booking without staff",
      },
      {
        business: "Real Estate",
        result: "AI qualifies leads, shares property details, schedules site visits automatically",
      },
      {
        business: "Restaurants & Hotels",
        result: "Reservation management, menu queries, and review collection on autopilot",
      },
    ],
    cta: "Get Your AI Assistant →",
  },
  {
    slug: "web-app-development",
    icon: "🌐",
    title: "Web & App Development",
    tagline: "Digital presence that converts visitors into customers",
    description:
      "We design and develop high-performance websites, web applications, and mobile apps using modern frameworks. From stunning landing pages to complex platforms — built fast, built right.",
    gradient: "from-purple-500 to-pink-500",
    benefits: [
      {
        title: "First Impressions That Convert",
        description:
          "A professional website builds instant trust. 75% of customers judge a business's credibility based on their website.",
      },
      {
        title: "Available Everywhere",
        description:
          "Responsive designs that look perfect on phones, tablets, and desktops. Your business is accessible to everyone, anywhere.",
      },
      {
        title: "Speed = Revenue",
        description:
          "Fast-loading sites rank higher on Google and keep visitors engaged. Every 1-second delay costs you 7% in conversions.",
      },
      {
        title: "Own Your Platform",
        description:
          "Stop depending on social media algorithms. Your website is your digital real estate — you control the experience.",
      },
    ],
    features: [
      "Custom Website Design & Development",
      "Progressive Web Apps (PWA)",
      "Mobile Apps (Android & iOS)",
      "E-commerce & Online Stores",
      "Admin Panels & Dashboards",
      "SEO-Optimized Architecture",
      "Payment Gateway Integration",
      "Hosting & Maintenance Support",
    ],
    useCases: [
      {
        business: "Local Businesses",
        result: "Professional website with Google My Business integration — found by nearby customers",
      },
      {
        business: "E-commerce",
        result: "Online store with UPI/card payments, inventory management, and delivery tracking",
      },
      {
        business: "Service Providers",
        result: "Booking-enabled websites for salons, gyms, consultants with automated scheduling",
      },
      {
        business: "Startups",
        result: "MVP development in weeks — validate your idea without burning through capital",
      },
    ],
    cta: "Start Your Project →",
  },
  {
    slug: "digital-marketing",
    icon: "📈",
    title: "Digital Marketing",
    tagline: "Data-driven growth that fills your pipeline",
    description:
      "We combine AI-powered tools with human creativity to run SEO, Google Ads, Meta Ads, and social media campaigns that deliver measurable ROI. No vanity metrics — just leads, sales, and growth.",
    gradient: "from-orange-500 to-yellow-500",
    benefits: [
      {
        title: "Targeted Reach",
        description:
          "Show your ads to exactly the right people — by location, interest, behavior. No wasted budget on irrelevant audiences.",
      },
      {
        title: "Measurable Results",
        description:
          "Track every rupee spent. Know exactly how many leads, calls, and sales each campaign generates.",
      },
      {
        title: "Outrank Competitors",
        description:
          "SEO puts you at the top of Google when customers search for your services. Be found before your competition.",
      },
      {
        title: "Build Brand Authority",
        description:
          "Consistent social media presence + quality content positions you as the go-to expert in your field.",
      },
    ],
    features: [
      "Google Ads & Meta Ads Management",
      "Local SEO & Google My Business",
      "Social Media Management",
      "AI-Generated Content (Posts, Reels, Blogs)",
      "Performance Reporting & Analytics",
      "Review Management & Reputation Building",
      "Email & WhatsApp Marketing Campaigns",
      "Competitor Analysis & Strategy",
    ],
    useCases: [
      {
        business: "Restaurants & Cafés",
        result: "3x more footfall through Instagram marketing + Google Maps optimization",
      },
      {
        business: "Doctors & Clinics",
        result: "Top Google ranking for 'best [specialty] in [city]' — consistent patient flow",
      },
      {
        business: "Coaching Centers",
        result: "Lead generation ads that fill batches before the session starts",
      },
      {
        business: "Retail Shops",
        result: "Local awareness campaigns that drive walk-ins during sale season",
      },
    ],
    cta: "Grow Your Business →",
  },
  {
    slug: "business-automation",
    icon: "⚡",
    title: "Business Automation",
    tagline: "Eliminate repetitive work, multiply your output",
    description:
      "We build WhatsApp bots, CRM systems, and workflow automations that handle follow-ups, reminders, data entry, and customer communication — so your team can focus on what actually grows revenue.",
    gradient: "from-green-500 to-emerald-500",
    benefits: [
      {
        title: "Zero Missed Follow-ups",
        description:
          "Automated reminders and follow-ups ensure no lead goes cold. Systems never forget — humans do.",
      },
      {
        title: "WhatsApp as a Sales Channel",
        description:
          "Broadcast offers, send catalogs, take orders, and provide support — all through the app your customers already use daily.",
      },
      {
        title: "Save 20+ Hours/Week",
        description:
          "Automate data entry, invoice generation, appointment reminders, and report creation. Reclaim your team's time.",
      },
      {
        title: "Professional Operations",
        description:
          "Automated workflows make a 5-person team operate like a 20-person organization. Scale without chaos.",
      },
    ],
    features: [
      "WhatsApp Business Bots & Broadcasts",
      "Custom CRM with Lead Pipeline",
      "Automated Follow-up Sequences",
      "Invoice & Payment Reminders",
      "Appointment/Booking Automation",
      "Data Sync Between Tools",
      "Custom Workflow Builders",
      "Team Task & Assignment Automation",
    ],
    useCases: [
      {
        business: "Car Dealers",
        result: "Automated test drive booking, follow-ups, and finance document collection via WhatsApp",
      },
      {
        business: "Real Estate Agents",
        result: "CRM tracks every lead, auto-sends property brochures, schedules site visits",
      },
      {
        business: "Gyms & Fitness Centers",
        result: "Automated membership reminders, class schedules, and renewal follow-ups",
      },
      {
        business: "Service Businesses",
        result: "Quote generation, job scheduling, and client updates — fully automated",
      },
    ],
    cta: "Automate Your Business →",
  },
  {
    slug: "business-intelligence",
    icon: "🧠",
    title: "Business Intelligence",
    tagline: "Turn raw data into profitable decisions",
    description:
      "We build real-time dashboards, analytics systems, and AI-powered insights that help you understand what's working, predict what's next, and make decisions backed by data — not guesswork.",
    gradient: "from-indigo-500 to-blue-500",
    benefits: [
      {
        title: "See Everything in Real-Time",
        description:
          "Sales, inventory, expenses, performance — all on one dashboard. No more digging through spreadsheets.",
      },
      {
        title: "Predict Before It Happens",
        description:
          "AI forecasts demand, identifies trends, and warns you about problems before they become costly.",
      },
      {
        title: "Data-Backed Decisions",
        description:
          "Stop guessing which products sell best, which ads work, or when to restock. Let data tell you.",
      },
      {
        title: "Spot Hidden Opportunities",
        description:
          "Analytics reveal patterns humans miss — underperforming areas, untapped segments, and pricing opportunities.",
      },
    ],
    features: [
      "Custom Real-Time Dashboards",
      "Sales & Revenue Analytics",
      "Inventory & Demand Forecasting",
      "Customer Behavior Analytics",
      "Expense & Profit Tracking",
      "Automated Reports (Daily/Weekly/Monthly)",
      "AI-Powered Insights & Recommendations",
      "Multi-Source Data Integration",
    ],
    useCases: [
      {
        business: "Retail & Distribution",
        result: "Know exactly what to stock, when to reorder, and which products to promote",
      },
      {
        business: "Manufacturers",
        result: "Production efficiency tracking, defect rate monitoring, and supply chain visibility",
      },
      {
        business: "Multi-Location Businesses",
        result: "Compare branch performance, identify top and underperforming locations",
      },
      {
        business: "E-commerce",
        result: "Customer lifetime value, cart abandonment analysis, and pricing optimization",
      },
    ],
    cta: "Get Data-Driven →",
  },
  {
    slug: "smart-infrastructure",
    icon: "🏗️",
    title: "Smart Infrastructure",
    tagline: "Physical spaces powered by intelligent technology",
    description:
      "We deploy AI-powered CCTV analytics, digital kiosks, IoT monitoring systems, and smart access control — turning your physical business into a tech-enabled, efficient operation.",
    gradient: "from-rose-500 to-purple-500",
    benefits: [
      {
        title: "Security + Intelligence",
        description:
          "CCTV that doesn't just record — it detects theft, counts footfall, generates heatmaps, and alerts you in real-time.",
      },
      {
        title: "Reduce Staff Dependency",
        description:
          "Self-service kiosks handle ordering, check-ins, and information requests without human intervention.",
      },
      {
        title: "24/7 Monitoring",
        description:
          "IoT sensors monitor temperature, power, humidity, and equipment health — alerting you before problems escalate.",
      },
      {
        title: "Modern Customer Experience",
        description:
          "Digital displays, QR systems, and touchless interactions signal that your business is forward-thinking.",
      },
    ],
    features: [
      "AI-Powered CCTV Analytics",
      "Footfall Counting & Heatmaps",
      "Self-Service Digital Kiosks",
      "Smart Attendance (Face Recognition)",
      "IoT Monitoring (Temp, Power, Humidity)",
      "Digital Signage & Display Systems",
      "QR-Based Systems (Menu, Catalog, Feedback)",
      "Access Control & Visitor Management",
    ],
    useCases: [
      {
        business: "Retail Stores",
        result: "Footfall analytics, theft detection, and customer flow optimization",
      },
      {
        business: "Warehouses & Cold Storage",
        result: "Temperature monitoring, inventory tracking, and automated alerts",
      },
      {
        business: "Restaurants",
        result: "Self-ordering kiosks, digital menus, and kitchen display systems",
      },
      {
        business: "Offices & Factories",
        result: "Face recognition attendance, visitor management, and access control",
      },
    ],
    cta: "Upgrade Your Space →",
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return servicesData.find((s) => s.slug === slug);
}
