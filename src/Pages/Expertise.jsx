const stats = [
  { num: "50+", label: "Projects delivered" },
  { num: "30+", label: "Clients worldwide" },
  { num: "3+", label: "Years experience" },
  { num: "100%", label: "Client satisfaction" },
];

const skills = [
  {
    category: "AI & automation",
    mark: "01",
    desc: "Smart systems that save time and increase conversions.",
    items: [
      { name: "OpenAI / Claude API", level: 92 },
      { name: "WhatsApp Business API", level: 88 },
      { name: "LangChain", level: 78 },
      { name: "n8n / Zapier", level: 85 },
    ],
  },
  {
    category: "Frontend development",
    mark: "02",
    desc: "Modern responsive interfaces built for growth.",
    items: [
      { name: "React / Next.js", level: 95 },
      { name: "Tailwind CSS", level: 95 },
      { name: "TypeScript", level: 85 },
      { name: "Framer Motion", level: 80 },
    ],
  },
  {
    category: "Backend systems",
    mark: "03",
    desc: "Scalable architecture for real business operations.",
    items: [
      { name: "Node.js / Express", level: 88 },
      { name: "Python / Django", level: 80 },
      { name: "PostgreSQL", level: 82 },
      { name: "REST & GraphQL", level: 90 },
    ],
  },
  {
    category: "E-commerce",
    mark: "04",
    desc: "Stores optimized for conversions and customer retention.",
    items: [
      { name: "Shopify", level: 90 },
      { name: "WooCommerce", level: 85 },
      { name: "Stripe integration", level: 88 },
      { name: "Conversion optimization", level: 80 },
    ],
  },
];

const testimonials = [
  {
    name: "Ahmad R.",
    role: "Motion Founder",
    text: "Delta Developers delivered beyond expectations. Fast, professional, and genuinely invested in our success.",
  },
  {
    name: "Sarah M.",
    role: "Veauly Founder",
    text: "The team built our entire online store in 2 weeks. The quality and communication were exceptional.",
  },
  {
    name: "James K.",
    role: "Unleay Founder",
    text: "Our WhatsApp AI assistant now handles most customer queries automatically. Incredible experience.",
  },
];

const businessBenefits = [
  {
    title: "More leads",
    desc: "Websites and AI systems designed to convert visitors into paying customers.",
  },
  {
    title: "Save time",
    desc: "Automate repetitive tasks and customer support with intelligent workflows.",
  },
  {
    title: "Look professional",
    desc: "Premium digital experiences that build trust instantly with customers.",
  },
  {
    title: "Scale faster",
    desc: "Technology infrastructure built to grow with your business.",
  },
];

const snapshot = [
  { title: "Lead conversion", value: 89 },
  { title: "Automation efficiency", value: 76 },
  { title: "Client retention", value: 94 },
];

export default function Expertise() {
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
      `}</style>

      <main className="ww-root grain-bg min-h-screen pt-8">
        {/* HERO */}
        <section className="px-5 sm:px-8 py-14 sm:py-20 border-b border-[var(--line)]">
          <div className="max-w-[1200px] mx-auto">
            <div className="eyebrow mb-6">Skills & expertise</div>

            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-start">
              {/* LEFT */}
              <div>
                <h1 className="font-display leading-[0.98] font-medium">
                  <span className="block text-[40px] sm:text-[60px] lg:text-[68px]">
                    Technology
                  </span>
                  <span className="block text-[40px] sm:text-[60px] lg:text-[68px] italic text-[var(--terracotta)]">
                    that grows
                  </span>
                  <span className="block text-[40px] sm:text-[60px] lg:text-[68px]">
                    small businesses
                  </span>
                </h1>

                <p className="mt-7 text-[var(--muted)] text-base sm:text-lg leading-[1.75] max-w-xl">
                  We help startups, restaurants, local businesses, and online
                  brands build modern digital systems that increase revenue,
                  automate work, and create better customer experiences.
                </p>

                <div className="flex flex-wrap gap-3 mt-9">
                  {[
                    { label: "AI support", value: "24/7" },
                    { label: "Delivery", value: "Fast" },
                    { label: "Focus", value: "ROI" },
                  ].map((b) => (
                    <div key={b.label} className="card px-5 py-3.5">
                      <div className="font-display text-2xl font-medium text-[var(--terracotta)]">
                        {b.value}
                      </div>
                      <div className="text-[var(--muted)] text-[11px] font-mono uppercase tracking-wider mt-1">
                        {b.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT - snapshot card */}
              <div className="card p-6 sm:p-8">
                <div className="flex items-center justify-between mb-7">
                  <div>
                    <p className="text-[11px] font-mono text-[var(--muted)] uppercase tracking-wider font-bold">
                      Performance snapshot
                    </p>
                    <h3 className="font-display text-2xl font-medium mt-2">
                      Business growth metrics
                    </h3>
                  </div>
                </div>

                <div className="space-y-6">
                  {snapshot.map((item) => (
                    <div key={item.title}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-[var(--ink-soft)]">{item.title}</span>
                        <span className="text-sm font-bold font-mono text-[var(--terracotta)]">
                          {item.value}%
                        </span>
                      </div>
                      <div className="h-1.5 rounded-full bg-[var(--cream-deep)] overflow-hidden">
                        <div
                          className="h-full rounded-full bg-[var(--terracotta)]"
                          style={{ width: `${item.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="px-5 sm:px-8 py-14 sm:py-20">
          <div className="max-w-[1200px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {stats.map((s, i) => (
              <div
                key={i}
                className="card text-center p-6 sm:p-8 hover:border-[var(--terracotta)] transition-colors duration-200"
              >
                <div className="font-display text-3xl sm:text-4xl font-medium text-[var(--terracotta)]">
                  {s.num}
                </div>
                <div className="mt-2 text-[var(--muted)] uppercase tracking-wider text-[11px] font-mono font-bold">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BUSINESS BENEFITS */}
        <section className="px-5 sm:px-8 pb-16 sm:pb-24">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-12 sm:mb-16 max-w-2xl mx-auto">
              <div className="eyebrow justify-center mb-5">Why businesses choose us</div>
              <h2 className="font-display text-3xl sm:text-5xl font-medium leading-[1.1]">
                Built for real business growth
              </h2>
              <p className="mt-5 text-[var(--muted)] text-base sm:text-lg leading-relaxed">
                Every solution we build is designed to increase revenue,
                improve efficiency, and strengthen your brand presence online.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {businessBenefits.map((item, i) => (
                <div
                  key={i}
                  className="card p-6 sm:p-7 hover:border-[var(--terracotta)] transition-colors duration-200"
                >
                  <div className="w-11 h-11 rounded-[3px] bg-[var(--pine-tint)] border border-[var(--pine)] flex items-center justify-center text-[var(--pine)] text-lg mb-6 font-display">
                    ✦
                  </div>
                  <h3 className="text-lg font-semibold mb-2.5">{item.title}</h3>
                  <p className="text-[var(--muted)] leading-relaxed text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="px-5 sm:px-8 pb-16 sm:pb-24 border-t border-[var(--line)] pt-16 sm:pt-24">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="eyebrow justify-center mb-5">Technical expertise</div>
              <h2 className="font-display text-3xl sm:text-5xl font-medium">
                What we specialize in
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
              {skills.map((cat, i) => (
                <div
                  key={i}
                  className="card p-6 sm:p-8 hover:border-[var(--terracotta)] transition-colors duration-200"
                >
                  <div className="flex items-start gap-4 mb-7">
                    <span className="font-mono text-xs text-[var(--terracotta-deep)] font-bold pt-1.5">
                      {cat.mark}
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold">{cat.category}</h3>
                      <p className="text-[var(--muted)] text-sm mt-1.5 leading-relaxed">
                        {cat.desc}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-5">
                    {cat.items.map((skill, j) => (
                      <div key={j}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm text-[var(--ink-soft)]">{skill.name}</span>
                          <span className="text-xs font-bold font-mono text-[var(--terracotta)]">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-1.5 rounded-full bg-[var(--cream-deep)] overflow-hidden">
                          <div
                            className="h-full rounded-full bg-[var(--terracotta)]"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="border-t border-[var(--line)] py-16 sm:py-24 px-5 sm:px-8">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="eyebrow justify-center mb-5">Client success</div>
              <h2 className="font-display text-3xl sm:text-5xl font-medium">
                Trusted by growing businesses
              </h2>
              <p className="mt-5 text-[var(--muted)] text-base sm:text-lg">
                Real feedback from clients worldwide.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="card p-7 sm:p-8 hover:border-[var(--terracotta)] transition-colors duration-200"
                >
                  <div className="flex gap-1 mb-5 text-[var(--terracotta)]">
                    {[...Array(5)].map((_, idx) => (
                      <span key={idx}>★</span>
                    ))}
                  </div>

                  <p className="text-[var(--ink-soft)] leading-relaxed italic font-display text-lg mb-7">
                    "{t.text}"
                  </p>

                  <div className="flex items-center gap-3.5 pt-5 border-t border-[var(--line-soft)]">
                    <div className="w-11 h-11 rounded-full bg-[var(--terracotta-tint)] border border-[var(--terracotta)] flex items-center justify-center text-[var(--terracotta-deep)] font-bold font-mono text-base">
                      {t.name[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{t.name}</div>
                      <div className="text-[var(--muted)] text-xs mt-0.5">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}