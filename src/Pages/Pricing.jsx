import { useState } from "react";
import { Check, Plus, Minus, ArrowRight, ShieldCheck } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/your-handle/intro-call";

// TODO: replace with real packages and prices once finalized.
// Keep the structure (name / price / note / desc / features) —
// just swap the values.
const PACKAGES = [
  {
    name: "Starter site",
    price: "$1,200",
    note: "one-time",
    desc: "A professional, conversion-ready website for a local business that needs to look credible fast.",
    features: [
      "Up to 5 pages",
      "Mobile-optimized design",
      "Basic on-page SEO setup",
      "Contact form integration",
      "2 weeks delivery",
      "7 days post-launch support",
    ],
  },
  {
    name: "AI automation",
    price: "$2,500",
    note: "starting at",
    desc: "A chatbot, voice agent, or workflow automation built around one core business process.",
    features: [
      "Custom AI assistant (chat or voice)",
      "CRM / WhatsApp / calendar integration",
      "Analytics dashboard",
      "3–4 weeks delivery",
      "30 days post-launch support",
      "Team training session",
    ],
    featured: true,
  },
  {
    name: "Full system",
    price: "Custom",
    note: "quoted after call",
    desc: "Website, automation, and CRM working together as one connected system.",
    features: [
      "Everything in AI Automation",
      "Custom website included",
      "Dedicated project lead",
      "Ongoing optimization plan",
      "Priority support channel",
      "Quarterly performance review",
    ],
  },
];

const ADDONS = [
  { name: "Extra automation workflow", price: "from $400" },
  { name: "Additional language support", price: "from $300" },
  { name: "Monthly maintenance plan", price: "from $150/mo" },
  { name: "Priority support upgrade", price: "from $200/mo" },
];

const FAQS = [
  {
    q: "Is the price on this page final?",
    a: "These are starting prices for typical scope. Your free call gets you an exact, written quote based on what you actually need — some projects come in at the listed price, others need more or less depending on complexity.",
  },
  {
    q: "Do you require full payment upfront?",
    a: "No. Most projects are split into milestones — typically 40% to start, 30% at a build checkpoint, and 30% at launch. This protects both sides and means you're never paying for work you haven't seen.",
  },
  {
    q: "What's NOT included in the starting price?",
    a: "Third-party costs like domain registration, hosting, paid API usage (OpenAI, Twilio, etc.), and premium plugins are billed separately at cost — we'll list these clearly in your quote so there are no surprises.",
  },
  {
    q: "Can I start small and add automation later?",
    a: "Yes, this is common. Many clients start with a website, then add a chatbot or CRM automation a few months later once they see where the manual work is piling up.",
  },
  {
    q: "How long does a typical project take?",
    a: "Websites: 2–3 weeks. AI chatbots and single-process automations: 3–5 weeks. Full systems: 6–10 weeks. Exact timelines are confirmed in your written scope before work starts.",
  },
  {
    q: "What if the project goes over the agreed scope?",
    a: "We flag scope changes before doing the work, not after — you'll always get a clear add-on quote to approve first. No surprise invoices at delivery.",
  },
];

function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-[var(--line)] last:border-b-0">
      <button onClick={onToggle} className="w-full flex items-center justify-between gap-4 py-5 sm:py-6 text-left group" aria-expanded={isOpen}>
        <span className="font-display text-lg sm:text-xl font-medium text-[var(--ink)] group-hover:text-[var(--terracotta)] transition-colors duration-200">
          {faq.q}
        </span>
        <span className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-200 ${isOpen ? "bg-[var(--terracotta)] border-[var(--terracotta)] text-[var(--cream)]" : "border-[var(--line)] text-[var(--ink)]"}`}>
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-72 pb-6" : "max-h-0"}`}>
        <p className="text-[var(--muted)] text-base leading-relaxed max-w-2xl pr-10">{faq.a}</p>
      </div>
    </div>
  );
}

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState(0);

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
        .ww-root .card{ background:var(--paper); border:1px solid var(--line); border-radius:4px; }
        .grain-bg{ background-image: radial-gradient(circle at 1px 1px, rgba(26,26,22,0.04) 1px, transparent 0); background-size:16px 16px; }
        .ww-root .btn-primary{
          display:inline-flex; align-items:center; justify-content:center; gap:8px;
          background:var(--terracotta); color:var(--cream); font-weight:700; font-size:14px;
          padding:15px 26px; border-radius:3px; border:1px solid var(--terracotta);
          transition:background .2s ease, transform .2s ease;
        }
        .ww-root .btn-primary:hover{ background:var(--terracotta-deep); transform:translateY(-1px); }
        .ww-root .pricing-card{
          background:var(--paper); border:1px solid var(--line); border-radius:6px;
          transition:border-color .2s ease, transform .2s ease;
        }
        .ww-root .pricing-card:hover{ transform:translateY(-3px); }
        .ww-root .pricing-card.featured{ background:var(--ink); border-color:var(--ink); color:var(--cream); }
      `}</style>

      <main className="ww-root grain-bg min-h-screen">
        {/* HERO */}
        <section className="px-5 sm:px-8 pt-14 sm:pt-20 pb-10 sm:pb-14">
          <div className="max-w-[1200px] mx-auto text-center">
            <div className="eyebrow justify-center mb-6">Pricing</div>
            <h1 className="font-display leading-[0.98] font-medium text-[38px] sm:text-[58px] lg:text-[64px] max-w-3xl mx-auto">
              Clear pricing.
              <span className="block italic text-[var(--terracotta)]">No surprise invoices.</span>
            </h1>
            <p className="mt-6 max-w-xl mx-auto text-[var(--muted)] text-base sm:text-lg leading-[1.75]">
              Every project gets a written scope and fixed price before work
              starts. These are starting points — your free call gets you an
              exact number for your situation.
            </p>
          </div>
        </section>

        {/* PRICING GRID */}
        <section className="px-5 sm:px-8 pb-16 sm:pb-20">
          <div className="max-w-[1200px] mx-auto grid sm:grid-cols-3 gap-5 sm:gap-6">
            {PACKAGES.map((tier) => (
              <div key={tier.name} className={`pricing-card p-7 sm:p-8 flex flex-col ${tier.featured ? "featured" : ""}`}>
                {tier.featured && (
                  <span className="inline-block mb-4 px-2.5 py-1 bg-[var(--terracotta)] text-[var(--cream)] text-[10px] font-mono font-bold uppercase tracking-wider rounded-sm w-fit">
                    Most popular
                  </span>
                )}
                <h3 className={`font-display text-xl font-medium mb-1 ${tier.featured ? "text-[var(--cream)]" : "text-[var(--ink)]"}`}>{tier.name}</h3>
                <p className={`text-sm mb-5 ${tier.featured ? "text-[rgba(251,248,242,0.65)]" : "text-[var(--muted)]"}`}>{tier.desc}</p>

                <div className="mb-6">
                  <span className="font-display text-3xl font-medium text-[var(--terracotta)]">{tier.price}</span>
                  <span className={`ml-2 text-xs font-mono uppercase tracking-wider ${tier.featured ? "text-[rgba(251,248,242,0.5)]" : "text-[var(--muted-soft)]"}`}>{tier.note}</span>
                </div>

                <ul className="space-y-3 mb-7 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className={`flex items-start gap-2.5 text-sm ${tier.featured ? "text-[rgba(251,248,242,0.85)]" : "text-[var(--ink-soft)]"}`}>
                      <Check size={15} className={`flex-shrink-0 mt-0.5 ${tier.featured ? "text-[var(--terracotta)]" : "text-[var(--pine)]"}`} />
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

          {/* Risk reversal under pricing */}
          <div className="max-w-[1200px] mx-auto mt-8 flex items-start gap-3 justify-center text-center">
            <ShieldCheck size={18} className="text-[var(--pine)] flex-shrink-0 mt-0.5" />
            <p className="text-[var(--ink-soft)] text-sm max-w-lg">
              Every quote is delivered in writing before any work or payment
              happens. If the scope doesn't match what we agreed, we fix it
              at no extra cost.
            </p>
          </div>
        </section>

        {/* ADD-ONS */}
        <section className="px-5 sm:px-8 pb-16 sm:pb-20">
          <div className="max-w-[1200px] mx-auto card p-7 sm:p-10">
            <h2 className="font-display text-2xl sm:text-3xl font-medium mb-7">Common add-ons</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {ADDONS.map((a) => (
                <div key={a.name} className="flex items-center justify-between border border-[var(--line-soft)] rounded-[3px] px-5 py-4">
                  <span className="text-sm font-medium text-[var(--ink-soft)]">{a.name}</span>
                  <span className="text-sm font-bold font-mono text-[var(--terracotta-deep)]">{a.price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-5 sm:px-8 pb-16 sm:pb-24 border-t border-[var(--line)] pt-16 sm:pt-20">
          <div className="max-w-[800px] mx-auto">
            <div className="mb-12 text-center">
              <div className="eyebrow justify-center mb-5">Pricing questions</div>
              <h2 className="font-display text-3xl sm:text-5xl font-medium leading-[1.1]">Before you book</h2>
            </div>
            <div className="card px-6 sm:px-8">
              {FAQS.map((faq, i) => (
                <FaqItem key={faq.q} faq={faq} isOpen={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? -1 : i)} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-5 sm:px-8 pb-16 sm:pb-24">
          <div className="max-w-[1200px] mx-auto card bg-[var(--ink)] border-[var(--ink)] p-10 sm:p-16 text-center">
            <h2 className="font-display text-3xl sm:text-5xl font-medium leading-[1.1] text-[var(--cream)] mb-5">
              Still not sure which package fits?
            </h2>
            <p className="text-[rgba(251,248,242,0.65)] text-base sm:text-lg max-w-xl mx-auto mb-9 leading-relaxed">
              That's exactly what the free call is for. Tell us what you're
              dealing with and we'll tell you honestly what it'll take.
            </p>
            <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="btn-primary inline-flex">
              Book your free call
              <ArrowRight size={15} />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}