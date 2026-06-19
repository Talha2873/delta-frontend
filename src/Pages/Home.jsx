import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Check, ShieldCheck, ArrowRight, Plus, Minus } from "lucide-react";

/* =========================================================
   DELTA DEVELOPERS — HOME PAGE (v2)
   "Warm Workshop" design direction — kept, sharpened.

   ░░ EDITABLE CONTENT ░░
   Everything you'll want to swap in (real proof, real numbers,
   real Calendly link) lives in the CONFIG / CONTENT objects
   right below. Search "TODO" to find every placeholder.
========================================================= */

// TODO: replace with your real Calendly link once created.
// Free at calendly.com — takes 5 minutes to set up.
const CALENDLY_URL = "https://calendly.com/your-handle/intro-call";

const STATS = [
  { value: "120+", label: "Projects completed" }, // TODO: verify real number
  { value: "48+", label: "Global clients" },        // TODO: verify real number
  { value: "4.2x", label: "Average ROI" },           // TODO: verify or remove if unverifiable
];

const TECH_STACK = [
  "OpenAI", "LangChain", "n8n", "React", "Stripe",
  "Supabase", "Meta", "Vercel", "WhatsApp API", "Node.js",
];

const SHOWCASE = [
  {
    id: 0,
    title: "AI chatbots",
    subtitle: "Smart AI assistants handling customer conversations 24/7.",
    badge: "Chatbot AI",
    video: "https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4",
  },
  {
    id: 1,
    title: "AI call assistant",
    subtitle: "AI voice agents booking appointments & answering calls automatically.",
    badge: "Voice AI",
    video: "https://videos.pexels.com/video-files/4106998/4106998-uhd_2560_1440_25fps.mp4",
  },
  {
    id: 2,
    title: "Business automation",
    subtitle: "Automating workflows, CRM pipelines, payments & operations.",
    badge: "Automation",
    video: "https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_25fps.mp4",
  },
];

const SPECIALTIES = [
  "AI chatbots", "Voice assistants", "CRM systems",
  "Lead generation", "Workflow automation", "Premium websites",
];

// NEW — concrete process steps. Replace copy once your real process is locked.
const PROCESS = [
  {
    step: "01",
    title: "Free strategy call",
    desc: "30 minutes. We map your current workflow, find where leads or time are leaking, and tell you honestly whether AI/automation is the right fix.",
  },
  {
    step: "02",
    title: "Fixed-scope build",
    desc: "You get a written scope and price before any work starts. No surprise invoices. Most projects ship in 2–4 weeks.",
  },
  {
    step: "03",
    title: "Launch & support",
    desc: "We deploy, train your team on it, and stay on for 30 days to fix anything that needs adjusting based on real usage.",
  },
];

// NEW — pricing anchor teaser. Replace with real packages.
const PRICING_TEASER = [
  {
    name: "Starter site",
    price: "$1,200",
    note: "one-time",
    desc: "A professional, conversion-ready website for a local business.",
    features: ["5 pages", "Mobile-optimized", "Basic SEO setup", "2 weeks delivery"],
  },
  {
    name: "AI automation",
    price: "$2,500",
    note: "starting at",
    desc: "A chatbot or workflow automation built around one core process.",
    features: ["Custom AI assistant", "CRM/WhatsApp integration", "Analytics dashboard", "30-day support"],
    featured: true,
  },
  {
    name: "Full system",
    price: "Custom",
    note: "quoted after call",
    desc: "Website + automation + CRM working together as one system.",
    features: ["Everything above", "Dedicated project lead", "Ongoing optimization", "Priority support"],
  },
];

// NEW — FAQ for objection handling.
const FAQS = [
  {
    q: "How long does a typical project take?",
    a: "Most websites take 2–3 weeks. AI chatbots and automations typically take 3–5 weeks depending on how many systems they need to connect to. You'll get a specific timeline in writing before we start.",
  },
  {
    q: "What if I'm not technical at all?",
    a: "That's normal, and it's our job to translate. We explain every decision in plain language, and you'll never need to touch code or configuration after launch — we handle that.",
  },
  {
    q: "Do you work with businesses outside the US?",
    a: "Yes. We work with clients worldwide and are set up for remote collaboration across time zones, with async updates so you're never waiting on a call to get an answer.",
  },
  {
    q: "What happens after the project launches?",
    a: "Every project includes a 30-day support window to fix issues and tune things based on real usage. After that, we offer ongoing maintenance plans if you want continued support.",
  },
  {
    q: "What if I'm not happy with the result?",
    a: "We scope every project in writing before starting, with milestones you approve along the way — so there are no surprises at delivery. If something doesn't match what we agreed, we fix it.",
  },
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

        <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between gap-2">
          <div className="stub bg-[var(--cream)]/95">● Live system</div>
          <div className="px-3 py-1.5 bg-[var(--terracotta)] text-[var(--cream)] text-[11px] font-mono font-bold uppercase tracking-wider rounded-sm">
            {activeItem.badge}
          </div>
        </div>

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

function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-[var(--line)] last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 sm:py-6 text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-display text-lg sm:text-xl font-medium text-[var(--ink)] group-hover:text-[var(--terracotta)] transition-colors duration-200">
          {faq.q}
        </span>
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-200 ${
            isOpen
              ? "bg-[var(--terracotta)] border-[var(--terracotta)] text-[var(--cream)]"
              : "border-[var(--line)] text-[var(--ink)]"
          }`}
        >
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-60 pb-6" : "max-h-0"}`}
      >
        <p className="text-[var(--muted)] text-base leading-relaxed max-w-2xl pr-10">
          {faq.a}
        </p>
      </div>
    </div>
  );
}

/* ========================================================= */

export default function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

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

        .ww-root .card{ background:var(--paper); border:1px solid var(--line); border-radius:4px; }

        .grain-bg{
          background-image: radial-gradient(circle at 1px 1px, rgba(26,26,22,0.04) 1px, transparent 0);
          background-size:16px 16px;
        }

        .ww-root .pricing-card{
          background:var(--paper); border:1px solid var(--line); border-radius:6px;
          transition:border-color .2s ease, transform .2s ease;
        }
        .ww-root .pricing-card:hover{ transform:translateY(-3px); }
        .ww-root .pricing-card.featured{
          background:var(--ink); border-color:var(--ink); color:var(--cream);
        }

        @media (prefers-reduced-motion: reduce){
          .ww-root *{ transition:none !important; animation:none !important; }
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
                  <span className="block text-[40px] sm:text-[58px] lg:text-[70px] font-medium">
                    More leads.
                  </span>
                  <span className="block text-[40px] sm:text-[58px] lg:text-[70px] italic font-medium text-[var(--terracotta)]">
                    Less busywork.
                  </span>
                </h1>

                <p className="text-[var(--muted)] text-base sm:text-lg leading-[1.75] max-w-lg mb-8">
                  We build AI chatbots, voice agents, and automations that
                  answer customers, book appointments, and run your back
                  office — so you spend less time on admin and more on
                  growing the business.
                </p>

                <div className="flex flex-wrap gap-3 mb-7">
                  <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="btn-primary">
                    Book a free strategy call
                    <ArrowRight size={15} />
                  </a>
                  <Link to="/portfolio" className="btn-secondary">
                    See how it works
                  </Link>
                </div>

                {/* Risk reversal line — replaces fake stat-only trust */}
                <div className="flex items-start gap-2.5 mb-12 text-[13px] text-[var(--ink-soft)]">
                  <ShieldCheck size={17} className="text-[var(--pine)] flex-shrink-0 mt-0.5" />
                  <span>
                    Fixed price agreed in writing before we start. No call
                    pressure, no obligation — if it's not a fit, we'll tell you.
                  </span>
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

                <div className="flex flex-wrap gap-2">
                  {["24/7 AI systems", "Custom development", "Fast delivery", "Premium UI/UX"].map((item) => (
                    <div
                      key={item}
                      className="px-3.5 py-2 rounded-full border border-[var(--line)] bg-[var(--paper)] text-[var(--ink-soft)] text-[13px] font-medium"
                    >
                      {item}
                    </div>
                  ))}
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

                {/* Live chatbot demo prompt — points at the real widget already on the site */}
                <div className="mt-4 card p-4 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-[3px] bg-[var(--pine)] flex items-center justify-center flex-shrink-0">
                    <span className="text-[var(--cream)] text-xs font-bold font-mono">AI</span>
                  </div>
                  <p className="text-[13px] text-[var(--ink-soft)] leading-snug">
                    <strong className="text-[var(--ink)]">Try it now:</strong> click the chat
                    bubble in the corner — that's a real AI assistant, not a mockup.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============== TECH STACK ============== */}
        <section className="border-t border-b border-[var(--line)] py-10">
          <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
            <p className="text-center text-[11px] font-mono uppercase tracking-wider text-[var(--muted-soft)] mb-6">
              Built on the same tools used by funded startups and enterprise teams
            </p>
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

        {/* ============== PROCESS ============== */}
        <section className="py-16 sm:py-24 px-5 sm:px-8">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <div className="eyebrow justify-center mb-5">How we work</div>
              <h2 className="font-display text-3xl sm:text-5xl font-medium leading-[1.1]">
                From first call to launch,
                <span className="italic text-[var(--terracotta)]"> in three steps</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-5 sm:gap-6">
              {PROCESS.map((p) => (
                <div key={p.step} className="card p-7 sm:p-8">
                  <span className="font-mono text-xs font-bold text-[var(--terracotta-deep)]">
                    {p.step}
                  </span>
                  <h3 className="font-display text-xl font-medium mt-4 mb-3">{p.title}</h3>
                  <p className="text-[var(--muted)] text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============== WHY CLIENTS CHOOSE US ============== */}
        <section className="py-4 sm:py-8 px-5 sm:px-8">
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

        {/* ============== FOUNDER NOTE ============== */}
        {/* TODO: swap in a real photo of Talha. Until then this stays text-led, no fake headshot. */}
        <section className="py-16 sm:py-24 px-5 sm:px-8 border-t border-[var(--line)]">
          <div className="max-w-[800px] mx-auto text-center">
            <div className="eyebrow justify-center mb-7">A note from the founder</div>
            <p className="font-display text-2xl sm:text-3xl leading-[1.4] text-[var(--ink)] mb-8">
              "I started Delta because most small businesses get sold
              automation they don't need, built by people who've never run
              one. We scope every project against one question:{" "}
              <em className="text-[var(--terracotta)]">does this make you
              more money or save you real time</em> — if the answer is no,
              we'll say so on the call."
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-11 h-11 rounded-full bg-[var(--pine)] flex items-center justify-center text-[var(--cream)] font-mono font-bold text-sm">
                TI
              </div>
              <div className="text-left">
                <p className="font-semibold text-sm">Muhammad Talha Ilyas</p>
                <p className="text-[var(--muted)] text-xs font-mono uppercase tracking-wider">
                  Founder & AI Architect
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============== PRICING TEASER ============== */}
        <section className="py-16 sm:py-24 px-5 sm:px-8 border-t border-[var(--line)]">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <div className="eyebrow justify-center mb-5">Investment</div>
              <h2 className="font-display text-3xl sm:text-5xl font-medium leading-[1.1] mb-5">
                Straightforward pricing,
                <span className="italic text-[var(--terracotta)]"> no guessing games</span>
              </h2>
              <p className="text-[var(--muted)] text-base sm:text-lg leading-relaxed">
                Every project is scoped and priced in writing before work
                starts. These are starting points — your free call gets you
                an exact number.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-5 sm:gap-6">
              {PRICING_TEASER.map((tier) => (
                <div
                  key={tier.name}
                  className={`pricing-card p-7 sm:p-8 ${tier.featured ? "featured" : ""}`}
                >
                  {tier.featured && (
                    <span className="inline-block mb-4 px-2.5 py-1 bg-[var(--terracotta)] text-[var(--cream)] text-[10px] font-mono font-bold uppercase tracking-wider rounded-sm">
                      Most popular
                    </span>
                  )}
                  <h3
                    className={`font-display text-xl font-medium mb-1 ${tier.featured ? "text-[var(--cream)]" : "text-[var(--ink)]"}`}
                  >
                    {tier.name}
                  </h3>
                  <p
                    className={`text-sm mb-5 ${tier.featured ? "text-[rgba(251,248,242,0.65)]" : "text-[var(--muted)]"}`}
                  >
                    {tier.desc}
                  </p>
                  <div className="mb-6">
                    <span
                      className={`font-display text-3xl font-medium ${tier.featured ? "text-[var(--terracotta)]" : "text-[var(--terracotta)]"}`}
                    >
                      {tier.price}
                    </span>
                    <span
                      className={`ml-2 text-xs font-mono uppercase tracking-wider ${tier.featured ? "text-[rgba(251,248,242,0.5)]" : "text-[var(--muted-soft)]"}`}
                    >
                      {tier.note}
                    </span>
                  </div>
                  <ul className="space-y-3 mb-7">
                    {tier.features.map((f) => (
                      <li
                        key={f}
                        className={`flex items-start gap-2.5 text-sm ${tier.featured ? "text-[rgba(251,248,242,0.85)]" : "text-[var(--ink-soft)]"}`}
                      >
                        <Check
                          size={15}
                          className={`flex-shrink-0 mt-0.5 ${tier.featured ? "text-[var(--terracotta)]" : "text-[var(--pine)]"}`}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noreferrer"
                    className={`block text-center w-full py-3 rounded-[3px] text-sm font-bold transition-all ${
                      tier.featured
                        ? "bg-[var(--terracotta)] text-[var(--cream)] hover:bg-[var(--terracotta-deep)]"
                        : "border border-[var(--ink)] text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--cream)]"
                    }`}
                  >
                    Get exact quote
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============== FAQ ============== */}
        <section className="py-16 sm:py-24 px-5 sm:px-8 border-t border-[var(--line)]">
          <div className="max-w-[800px] mx-auto">
            <div className="mb-12 text-center">
              <div className="eyebrow justify-center mb-5">Common questions</div>
              <h2 className="font-display text-3xl sm:text-5xl font-medium leading-[1.1]">
                Before you book the call
              </h2>
            </div>

            <div className="card px-6 sm:px-8">
              {FAQS.map((faq, i) => (
                <FaqItem
                  key={faq.q}
                  faq={faq}
                  isOpen={openFaq === i}
                  onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ============== FINAL CTA ============== */}
        <section className="py-16 sm:py-24 px-5 sm:px-8">
          <div className="max-w-[1200px] mx-auto">
            <div className="card bg-[var(--ink)] border-[var(--ink)] p-10 sm:p-16 text-center">
              <h2 className="font-display text-3xl sm:text-5xl font-medium leading-[1.1] text-[var(--cream)] mb-5">
                Ready to stop losing leads
                <span className="block italic text-[var(--terracotta)]">to slow follow-up?</span>
              </h2>
              <p className="text-[rgba(251,248,242,0.65)] text-base sm:text-lg max-w-xl mx-auto mb-9 leading-relaxed">
                Book a free 30-minute call. We'll look at your current setup
                and tell you exactly where automation would help — and where
                it wouldn't.
              </p>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-primary inline-flex"
              >
                Book your free call
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}