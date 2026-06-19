import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  ArrowRight,
  Bot,
  Globe,
  ShoppingCart,
  Phone,
  LayoutDashboard,
  Database,
  BrainCircuit,
  Rocket,
  Store,
  Building2,
  MessageCircle,
  Scissors,
  Headset,
} from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Salon & beauty websites",
    tag: "Salon",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop",
    desc: "Professional salon websites with booking systems, pricing pages, and AI-powered assistants.",
    tech: ["Booking System", "React", "SEO", "AI Assistant"],
  },
  {
    icon: Building2,
    title: "Real estate property websites",
    tag: "Real Estate",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop",
    desc: "Modern real estate websites with property listings, lead forms, maps, and CRM integration.",
    tech: ["Property CMS", "Google Maps", "React", "CRM"],
  },
  {
    icon: MessageCircle,
    title: "WhatsApp AI chat assistant",
    tag: "WhatsApp",
    image:
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1200&auto=format&fit=crop",
    desc: "AI chatbot for WhatsApp that instantly replies to customers and automates orders.",
    tech: ["WhatsApp API", "OpenAI", "Automation", "CRM"],
  },
  {
    icon: Phone,
    title: "24/7 appointment booking AI",
    tag: "Booking AI",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
    desc: "Voice AI assistant for salons, clinics, restaurants, and service businesses.",
    tech: ["Voice AI", "Calendars", "SMS", "Automation"],
  },
  {
    icon: Store,
    title: "Local business websites",
    tag: "Small Business",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
    desc: "Professional websites for gyms, restaurants, clinics, shops, and local businesses.",
    tech: ["React", "SEO", "Mobile Design", "Fast Hosting"],
  },
  {
    icon: Headset,
    title: "Customer support AI agent",
    tag: "Support AI",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop",
    desc: "AI-powered support systems that answer customer questions 24/7 automatically.",
    tech: ["OpenAI", "Chatbot", "Automation", "CRM"],
  },
  {
    icon: Bot,
    title: "AI chatbot integration",
    tag: "Chatbot",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
    desc: "Custom AI assistants for support, lead generation, and workflow automation.",
    tech: ["OpenAI", "LangChain", "FastAPI", "React"],
  },
  {
    icon: Globe,
    title: "Restaurant AI website",
    tag: "Restaurant",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    desc: "Restaurant websites with online ordering, reservations, and AI customer service.",
    tech: ["Next.js", "Stripe", "Booking System", "Tailwind"],
  },
  {
    icon: LayoutDashboard,
    title: "Smart CRM dashboard",
    tag: "CRM",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    desc: "Manage sales, reports, customers, and analytics in one smart business dashboard.",
    tech: [".NET", "React", "PostgreSQL", "Analytics"],
  },
  {
    icon: ShoppingCart,
    title: "Small business e-commerce",
    tag: "Store",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    desc: "Online stores with payment systems, inventory tracking, and AI recommendations.",
    tech: ["Shopify", "Stripe", "React", "Inventory"],
  },
  {
    icon: Database,
    title: "Inventory management system",
    tag: "Inventory",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1200&auto=format&fit=crop",
    desc: "Warehouse and stock management software with automation and reporting.",
    tech: ["Python", ".NET", "SQL", "Automation"],
  },
  {
    icon: BrainCircuit,
    title: "AI auto reply system",
    tag: "Automation",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    desc: "Automated replies for websites, WhatsApp, Messenger, and Instagram using AI.",
    tech: ["WhatsApp API", "OpenAI", "Automation", "CRM"],
  },
  {
    icon: Rocket,
    title: "Startup & SaaS MVP",
    tag: "Startup",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
    desc: "Launch scalable SaaS products with authentication, billing, and dashboards.",
    tech: ["Next.js", "Supabase", "Stripe", "Tailwind"],
  },
];

export default function Services() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500;1,9..144,600&family=Inter:wght@400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap');

        :root{
          --cream:#fbf8f2; --cream-deep:#f3eee2; --paper:#ffffff; --ink:#1a1a16;
          --ink-soft:#3c3a32; --muted:#6b6a5c; --muted-soft:#8c8a78;
          --terracotta:#e8632c; --terracotta-deep:#c44d1c; --terracotta-tint:#fbe4d6;
          --pine:#2f4f3a; --pine-deep:#203a29; --pine-tint:#e3ebe2; --line:#d8d2c2; --line-soft:#e7e2d4;
        }
        body{ margin:0; background:var(--cream); }
        .ww-root{ background:var(--cream); color:var(--ink); font-family:'Inter',sans-serif; }
        .ww-root .font-display{ font-family:'Fraunces',serif; }
        .ww-root .font-mono{ font-family:'Space Mono',monospace; }
        .ww-root .eyebrow{
          font-family:'Space Mono',monospace; font-size:11px; letter-spacing:0.14em;
          text-transform:uppercase; color:var(--terracotta-deep); font-weight:700;
          display:inline-flex; align-items:center; gap:8px;
        }
        .ww-root .eyebrow::before{ content:''; width:6px; height:6px; border-radius:50%; background:var(--terracotta); flex-shrink:0; }
        .ww-root .card{ background:var(--paper); border:1px solid var(--line); border-radius:4px; }
        .grain-bg{ background-image: radial-gradient(circle at 1px 1px, rgba(26,26,22,0.04) 1px, transparent 0); background-size:16px 16px; }

        .ww-root .stub{
          position:relative; display:inline-flex; align-items:center; gap:6px;
          padding:5px 14px 5px 12px; background:var(--paper); border:1px solid var(--ink);
          font-family:'Space Mono',monospace; font-size:10px; letter-spacing:0.06em;
          text-transform:uppercase; font-weight:700; color:var(--ink); border-radius:2px;
          white-space:nowrap;
        }

        .ww-root .btn-primary{
          display:inline-flex; align-items:center; justify-content:center; gap:8px;
          background:var(--terracotta); color:var(--cream); font-weight:700; font-size:14px;
          padding:15px 26px; border-radius:3px; border:1px solid var(--terracotta);
          transition:background .2s ease, transform .2s ease;
        }
        .ww-root .btn-primary:hover{ background:var(--terracotta-deep); transform:translateY(-1px); }
      `}</style>

      <main className="ww-root grain-bg min-h-screen">
        {/* HERO */}
        <section className="px-5 sm:px-8 pt-14 sm:pt-20 pb-12 sm:pb-16">
          <div className="max-w-[1200px] mx-auto">
            <div className="eyebrow mb-6">AI services for small businesses</div>

            <h1 className="font-display leading-[0.98] font-medium text-[40px] sm:text-[60px] lg:text-[68px]">
              AI systems &
              <span className="block italic text-[var(--terracotta)] mt-1">
                business websites
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-[var(--muted)] text-base sm:text-lg leading-[1.75]">
              We build AI-powered websites, dashboards, booking systems, chat
              assistants, and automation tools for salons, restaurants, real
              estate agencies, clinics, gyms, shops, and local businesses.
            </p>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section className="px-5 sm:px-8 pb-16 sm:pb-24">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: Math.min(index * 0.03, 0.25) }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="card group block h-full overflow-hidden hover:border-[var(--terracotta)] transition-colors duration-200"
                  >
                    {/* IMAGE */}
                    <div className="relative h-[200px] sm:h-[220px] overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/55 via-[var(--ink)]/5 to-transparent" />

                      <div className="absolute top-3.5 left-3.5">
                        <span className="stub bg-[var(--paper)]/95">Live</span>
                      </div>

                      <div className="absolute top-3.5 right-3.5">
                        <span className="px-2.5 py-1.5 bg-[var(--terracotta)] text-[var(--cream)] text-[10px] font-mono font-bold uppercase tracking-wider rounded-sm">
                          {service.tag}
                        </span>
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="p-5 sm:p-6 flex flex-col">
                      <div className="flex items-start gap-3.5">
                        <div className="w-10 h-10 rounded-[3px] bg-[var(--pine-tint)] border border-[var(--pine)] flex items-center justify-center flex-shrink-0">
                          <Icon className="w-[18px] h-[18px] text-[var(--pine)]" />
                        </div>

                        <h2 className="font-display text-xl leading-[1.15] font-medium text-[var(--ink)] group-hover:text-[var(--terracotta)] transition-colors duration-200">
                          {service.title}
                        </h2>
                      </div>

                      <p className="mt-4 text-[var(--muted)] text-sm leading-relaxed">
                        {service.desc}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {service.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-full bg-[var(--cream-deep)] border border-[var(--line)] text-[11px] font-medium text-[var(--ink-soft)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="mt-5 flex items-center justify-between rounded-[3px] border border-[var(--line)] bg-[var(--cream)] px-4 py-3 group-hover:bg-[var(--terracotta-tint)] group-hover:border-[var(--terracotta)] transition-all duration-200">
                        <span className="text-sm font-semibold text-[var(--ink)]">
                          View service
                        </span>
                        <ArrowRight className="w-4 h-4 text-[var(--terracotta)] group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="px-5 sm:px-8 pb-16 sm:pb-24">
          <div className="max-w-[1200px] mx-auto card p-8 sm:p-14 text-center">
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-medium leading-tight">
              Ready to automate your
              <span className="italic text-[var(--terracotta)]"> business?</span>
            </h2>

            <p className="mt-5 text-[var(--muted)] max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              We create AI assistants, websites, booking systems, dashboards,
              and automation tools designed to grow modern businesses faster.
            </p>

            <Link
              to="/contact"
              className="btn-primary inline-flex mt-9"
            >
              Hire us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}