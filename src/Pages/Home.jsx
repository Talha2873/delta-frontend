import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/* =========================================================
   DELTA DEVELOPERS — HOME PAGE
   "Warm Workshop" design direction
========================================================= */

const STATS = [
  { value: "120+", label: "Projects completed" },
  { value: "48+", label: "Global clients" },
  { value: "4.2x", label: "Average ROI" },
];

const TECH_STACK = [
  "OpenAI",
  "LangChain",
  "n8n",
  "React",
  "Stripe",
  "Supabase",
  "Meta",
  "Vercel",
  "WhatsApp API",
  "Node.js",
];

const SHOWCASE = [
  {
    id: 0,
    title: "AI chatbots",
    subtitle: "Smart AI assistants handling customer conversations 24/7.",
    badge: "Chatbot AI",
    video:
      "https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4",
  },
  {
    id: 1,
    title: "AI call assistant",
    subtitle:
      "AI voice agents booking appointments & answering calls automatically.",
    badge: "Voice AI",
    video:
      "https://videos.pexels.com/video-files/4106998/4106998-uhd_2560_1440_25fps.mp4",
  },
  {
    id: 2,
    title: "Business automation",
    subtitle: "Automating workflows, CRM pipelines, payments & operations.",
    badge: "Automation",
    video:
      "https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_25fps.mp4",
  },
];

const SPECIALTIES = [
  "AI chatbots",
  "Voice assistants",
  "CRM systems",
  "Lead generation",
  "Workflow automation",
  "Premium websites",
];

/* ========================================================= */

function ShowcasePanel({ activeItem, activeIndex }) {
  return (
    <div className="relative">
      <div className="relative rounded-[6px] overflow-hidden border border-[var(--ink)] bg-[var(--ink)] aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/5]">
        <video
          key={activeIndex}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-90"
          src={activeItem.video}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[var(--ink)]/10 via-[var(--ink)]/40 to-[var(--ink)]/95" />

        {/* top row */}
        <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between gap-2">
          <div className="stub bg-[var(--cream)]/95">
            ● Live system
          </div>
          <div className="px-3 py-1.5 bg-[var(--terracotta)] text-[var(--cream)] text-[11px] font-mono font-bold uppercase tracking-wider rounded-sm">
            {activeItem.badge}
          </div>
        </div>

        {/* bottom content */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-5 sm:p-7">
          <h2 className="font-display text-3xl sm:text-4xl text-[var(--cream)] leading-[1.05] mb-2">
            {activeItem.title}
          </h2>
          <p className="text-[var(--cream)]/75 text-sm sm:text-base leading-relaxed max-w-sm">
            {activeItem.subtitle}
          </p>
        </div>
      </div>

    </div>
  );
}

/* ========================================================= */

export default function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === SHOWCASE.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const activeItem = SHOWCASE[activeIndex];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500;1,9..144,600&family=Inter:wght@400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap');

        :root{
          --cream:#fbf8f2;
          --cream-deep:#f3eee2;
          --paper:#ffffff;
          --ink:#1a1a16;
          --ink-soft:#3c3a32;
          --muted:#6b6a5c;
          --muted-soft:#8c8a78;
          --terracotta:#e8632c;
          --terracotta-deep:#c44d1c;
          --terracotta-tint:#fbe4d6;
          --pine:#2f4f3a;
          --pine-deep:#203a29;
          --pine-tint:#e3ebe2;
          --line:#d8d2c2;
          --line-soft:#e7e2d4;
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

        .ww-root .btn-secondary{
          display:inline-flex; align-items:center; justify-content:center; gap:8px;
          background:transparent; color:var(--ink); font-weight:600; font-size:14px;
          padding:15px 26px; border-radius:3px; border:1px solid var(--ink);
          transition:background .2s ease, color .2s ease;
        }
        .ww-root .btn-secondary:hover{ background:var(--ink); color:var(--cream); }

        .grain-bg{
          background-image: radial-gradient(circle at 1px 1px, rgba(26,26,22,0.04) 1px, transparent 0);
          background-size:16px 16px;
        }
      `}</style>

      <div className="ww-root grain-bg min-h-screen">
        {/* ============== HERO ============== */}
        <section className="px-5 sm:px-8 pt-12 sm:pt-20 pb-16 sm:pb-24">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
              {/* LEFT */}
              <div>
                <div className="eyebrow mb-6">AI automation workshop</div>

                <h1 className="font-display leading-[0.98] mb-6 text-[var(--ink)]">
                  <span className="block text-[44px] sm:text-[64px] lg:text-[76px] font-medium">
                    The future
                  </span>
                  <span className="block text-[44px] sm:text-[64px] lg:text-[76px] italic font-medium text-[var(--terracotta)]">
                    of business
                  </span>
                  <span className="block text-[44px] sm:text-[64px] lg:text-[76px] font-medium">
                    starts here
                  </span>
                </h1>

                <p className="text-[var(--muted)] text-base sm:text-lg leading-[1.75] max-w-lg mb-9">
                  We build premium AI systems that automate operations,
                  increase revenue, convert leads, and scale businesses with
                  intelligent automation.
                </p>

                <div className="flex flex-wrap gap-3 mb-12">
                  <Link to="/contact" className="btn-primary">
                    Free consultation
                  </Link>
                  <Link to="/portfolio" className="btn-secondary">
                    View case studies
                  </Link>
                </div>

                {/* STATS */}
                <div className="grid grid-cols-3 gap-6 max-w-lg mb-12 pt-8 border-t border-[var(--line)]">
                  {STATS.map((s) => (
                    <div key={s.label}>
                      <p className="font-display text-3xl sm:text-4xl font-medium text-[var(--terracotta)]">
                        {s.value}
                      </p>
                      <p className="mt-2 text-[11px] sm:text-xs leading-snug text-[var(--muted)] font-medium">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* tags */}
                <div className="flex flex-wrap gap-2">
                  {["24/7 AI systems", "Custom development", "Fast delivery", "Premium UI/UX"].map(
                    (item) => (
                      <div
                        key={item}
                        className="px-3.5 py-2 rounded-full border border-[var(--line)] bg-[var(--paper)] text-[var(--ink-soft)] text-[13px] font-medium"
                      >
                        {item}
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* RIGHT */}
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {SHOWCASE.map((item, idx) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveIndex(idx)}
                      className={`px-4 py-2 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider transition-all duration-200 border ${
                        activeIndex === idx
                          ? "bg-[var(--ink)] text-[var(--cream)] border-[var(--ink)]"
                          : "bg-transparent border-[var(--line)] text-[var(--muted)]"
                      }`}
                    >
                      {item.badge}
                    </button>
                  ))}
                </div>

                <ShowcasePanel activeItem={activeItem} activeIndex={activeIndex} />
              </div>
            </div>
          </div>
        </section>

        {/* ============== TECH STACK ============== */}
        <section className="border-t border-b border-[var(--line)] py-10">
          <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              {TECH_STACK.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs sm:text-sm text-[var(--muted-soft)] tracking-wide uppercase hover:text-[var(--terracotta)] transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ============== WHY CLIENTS CHOOSE US ============== */}
        <section className="py-16 sm:py-24 px-5 sm:px-8">
          <div className="max-w-[1200px] mx-auto">
            <div className="card p-7 sm:p-12 lg:p-14">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
                <div>
                  <div className="eyebrow mb-5">Why clients choose Delta</div>

                  <h2 className="font-display text-3xl sm:text-[44px] leading-[1.08] font-medium mb-5">
                    We build systems
                    <span className="italic text-[var(--terracotta)]"> that make money</span>
                  </h2>

                  <p className="text-[var(--muted)] text-base sm:text-lg leading-[1.75]">
                    Every automation, chatbot, dashboard, and AI assistant is
                    designed to generate leads, save time, and increase
                    revenue for your business.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {SPECIALTIES.map((item) => (
                    <div
                      key={item}
                      className="rounded-[4px] border border-[var(--line)] bg-[var(--cream)] p-4 sm:p-5 hover:border-[var(--terracotta)] transition-colors duration-200"
                    >
                      <div className="w-9 h-9 rounded-[3px] bg-[var(--pine)] text-[var(--cream)] flex items-center justify-center font-mono font-bold text-xs mb-4">
                        AI
                      </div>
                      <p className="font-medium text-[15px] leading-snug">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}