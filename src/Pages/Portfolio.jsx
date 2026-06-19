import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, ExternalLink } from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const teamMembers = [
  {
    name: "Muhammad Talha Ilyas",
    role: "Founder & AI Architect",
    image: "/images/talha.jpg",
    skills: ["Python", "LangChain", "AI Engineering", "System Design"],
    progress: 95,
  },
  {
    name: "Ahmed Raza",
    role: "Senior Full Stack Engineer",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800",
    skills: [".NET", "React", "PostgreSQL", "AWS"],
    progress: 90,
  },
  {
    name: "Usman Ali",
    role: "AI Automation Engineer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
    skills: ["Python", "n8n", "APIs", "Automation"],
    progress: 88,
  },
  {
    name: "Fatima Noor",
    role: "UI/UX Designer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800",
    skills: ["Figma", "UI Design", "Prototyping", "Branding"],
    progress: 92,
  },
  {
    name: "Nayyab Rasheed",
    role: "Frontend Developer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800",
    skills: ["React", "Next.js", "Tailwind CSS", "UI Development"],
    progress: 89,
  },
];

const projects = [
  {
    title: "AI Support Chatbot",
    category: "Chatbot",
    description:
      "Customer support AI chatbot integrated with websites, reducing support load by 70%.",
    demoUrl: "chat.deltadevelopers.ai",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200",
    stack: ["OpenAI", "LangChain", "FastAPI", "React"],
    features: [
      "24/7 automated customer responses",
      "Smart escalation to human agents",
      "Multi-language support",
      "Analytics dashboard",
      "CRM integration",
    ],
    metrics: { Satisfaction: "94%", "Queries/mo": "12K", "Resolution Rate": "87%" },
  },
  {
    title: "Restaurant AI Website",
    category: "Website",
    description:
      "Full-stack restaurant ordering platform with AI-powered menu recommendations and upsell engine.",
    demoUrl: "order.tastehouse.com",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200",
    stack: ["Next.js", "Django", "Stripe", "Tailwind"],
    features: [
      "Online ordering with real-time tracking",
      "AI menu recommendations",
      "Stripe payments integration",
      "Staff management panel",
      "Loyalty rewards system",
    ],
    metrics: { "Orders/mo": "2.4K", "Revenue Lift": "+38%", Retention: "81%" },
  },
  {
    title: "Smart CRM Dashboard",
    category: "Dashboard",
    description:
      "AI-powered CRM with predictive analytics, automated follow-ups, and comprehensive reporting.",
    demoUrl: "crm.deltatech.io",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
    stack: [".NET", "React", "PostgreSQL", "AI"],
    features: [
      "Lead scoring with AI predictions",
      "Automated email sequences",
      "Revenue forecasting",
      "Team performance tracking",
      "Custom reports & exports",
    ],
    metrics: { "Lead Growth": "+65%", "Close Rate": "29%", "Time Saved": "40%" },
  },
  {
    title: "AI Voice Call Assistant",
    category: "Voice AI",
    description:
      "Outbound AI voice agent handling sales calls, appointment reminders, and customer callbacks.",
    demoUrl: "voice.deltaai.io",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200",
    stack: ["Twilio", "OpenAI", "Node.js", "Whisper"],
    features: [
      "Natural voice conversations",
      "Appointment scheduling",
      "Sentiment analysis",
      "Call transcription & summary",
      "CRM auto-logging",
    ],
    metrics: { "Calls/mo": "5K", "Booking Rate": "34%", "Cost Reduction": "60%" },
  },
  {
    title: "E-Commerce AI Store",
    category: "Website",
    description:
      "Full e-commerce platform with AI personalization, inventory automation, and smart analytics.",
    demoUrl: "shop.smartstore.io",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200",
    stack: ["Next.js", "Stripe", "PostgreSQL", "AI"],
    features: [
      "Personalized product feeds",
      "Dynamic pricing engine",
      "Abandoned cart recovery",
      "Inventory auto-reorder",
      "Multi-vendor support",
    ],
    metrics: { Conversion: "4.2%", "Avg Order Value": "+22%", Returns: "-18%" },
  },
  {
    title: "Clinic Appointment Bot",
    category: "Chatbot",
    description:
      "Smart appointment booking chatbot for clinics with reminders, rescheduling, and patient intake.",
    demoUrl: "book.healthbot.io",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200",
    stack: ["FastAPI", "React", "OpenAI", "Twilio"],
    features: [
      "Instant appointment booking",
      "SMS & WhatsApp reminders",
      "Patient intake forms",
      "Calendar sync",
      "No-show reduction",
    ],
    metrics: { "No-shows": "-52%", "Bookings/mo": "800", Rating: "4.9" },
  },
  {
    title: "Real Estate CRM",
    category: "CRM",
    description:
      "End-to-end real estate lead management with AI valuation, pipeline tracking, and auto follow-ups.",
    demoUrl: "realty.deltacrm.io",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200",
    stack: ["Django", "PostgreSQL", "React", "AI"],
    features: [
      "AI property valuation",
      "Lead nurture automation",
      "Pipeline visualizer",
      "Document management",
      "Agent performance KPIs",
    ],
    metrics: { "Lead Growth": "+80%", "Close Rate": "+22%", Speed: "3x faster" },
  },
  {
    title: "Inventory Management",
    category: "Inventory",
    description:
      "Real-time inventory tracking with AI demand forecasting, supplier automation, and low-stock alerts.",
    demoUrl: "inventory.deltaops.io",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1200",
    stack: [".NET", "React", "SQL Server", "AI"],
    features: [
      "Real-time stock tracking",
      "AI demand forecasting",
      "Automated PO generation",
      "Barcode & QR scanning",
      "Multi-warehouse support",
    ],
    metrics: { "Waste Reduced": "34%", Stockouts: "-78%", Efficiency: "+45%" },
  },
];

// ─── STYLES ───────────────────────────────────────────────────────────────────

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500;1,9..144,600&family=Inter:wght@400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap');

  :root{
    --cream:#fbf8f2; --cream-deep:#f3eee2; --paper:#ffffff; --ink:#1a1a16;
    --ink-soft:#3c3a32; --muted:#6b6a5c; --muted-soft:#8c8a78;
    --terracotta:#e8632c; --terracotta-deep:#c44d1c; --terracotta-tint:#fbe4d6;
    --pine:#2f4f3a; --pine-deep:#203a29; --pine-tint:#e3ebe2; --line:#d8d2c2; --line-soft:#e7e2d4;
  }

  .dd-root {
    background: var(--cream);
    color: var(--ink);
    font-family: 'Inter', sans-serif;
  }

  .dd-root ::-webkit-scrollbar { width: 4px; }
  .dd-root ::-webkit-scrollbar-track { background: var(--cream-deep); }
  .dd-root ::-webkit-scrollbar-thumb { background: var(--terracotta); border-radius: 2px; }

  .dd-label {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: 'Space Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--terracotta-deep);
    font-weight: 700;
    margin-bottom: 14px;
  }
  .dd-label::before {
    content: '';
    width: 6px;
    height: 6px;
    background: var(--terracotta);
    border-radius: 50%;
  }

  .proj-card {
    background: var(--paper);
    border: 1px solid var(--line);
    border-radius: 4px;
    overflow: hidden;
    transition: border-color 0.25s ease, transform 0.25s ease;
    display: flex;
    flex-direction: column;
    cursor: pointer;
  }
  .proj-card:hover {
    border-color: var(--terracotta);
    transform: translateY(-4px);
  }
  .proj-img-wrap {
    position: relative;
    height: 180px;
    overflow: hidden;
    background: var(--cream-deep);
  }
  .proj-img-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  .proj-card:hover .proj-img-wrap img {
    transform: scale(1.06);
  }
  .proj-cat-badge {
    position: absolute;
    top: 10px;
    right: 10px;
    background: var(--ink);
    border-radius: 2px;
    padding: 4px 10px;
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    color: var(--cream);
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }
  .proj-live-badge {
    position: absolute;
    top: 10px;
    left: 10px;
    background: var(--paper);
    border: 1px solid var(--ink);
    border-radius: 2px;
    padding: 4px 9px 4px 7px;
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    color: var(--ink);
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .live-dot {
    width: 5px;
    height: 5px;
    background: var(--terracotta);
    border-radius: 50%;
  }
  .proj-body {
    padding: 18px;
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .proj-title {
    font-family: 'Fraunces', serif;
    font-size: 19px;
    font-weight: 500;
    color: var(--ink);
    margin-bottom: 8px;
  }
  .proj-desc {
    font-size: 13px;
    color: var(--muted);
    line-height: 1.65;
    margin-bottom: 14px;
    flex: 1;
  }
  .proj-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 16px;
  }
  .stack-pill {
    background: var(--cream-deep);
    border: 1px solid var(--line);
    border-radius: 100px;
    padding: 3px 10px;
    font-size: 10px;
    color: var(--ink-soft);
    font-weight: 500;
  }
  .proj-demo-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--terracotta-tint);
    border: 1px solid var(--terracotta);
    border-radius: 3px;
    padding: 10px 14px;
    font-size: 12px;
    font-weight: 700;
    color: var(--terracotta-deep);
    transition: background 0.2s;
  }
  .proj-card:hover .proj-demo-row {
    background: var(--terracotta);
    color: var(--cream);
  }

  .demo-overlay {
    position: fixed;
    inset: 0;
    background: rgba(26,26,22,0.7);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
  }
  .demo-modal {
    background: var(--paper);
    border: 1px solid var(--line);
    border-radius: 6px;
    width: 100%;
    max-width: 880px;
    max-height: 90vh;
    overflow-y: auto;
  }
  .demo-header {
    padding: 20px 22px;
    border-bottom: 1px solid var(--line);
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    background: var(--paper);
    z-index: 10;
  }
  .demo-close-btn {
    background: var(--cream);
    border: 1px solid var(--line);
    border-radius: 3px;
    width: 34px;
    height: 34px;
    color: var(--ink);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;
    flex-shrink: 0;
  }
  .demo-close-btn:hover { background: var(--terracotta-tint); border-color: var(--terracotta); }
  .demo-body { padding: 22px; }
  .browser-bar {
    background: var(--cream-deep);
    border-bottom: 1px solid var(--line);
    padding: 9px 14px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .b-dots { display: flex; gap: 6px; }
  .b-dot { width: 10px; height: 10px; border-radius: 50%; }
  .b-url {
    flex: 1;
    background: var(--paper);
    border: 1px solid var(--line);
    border-radius: 4px;
    padding: 4px 10px;
    font-family: 'Space Mono', monospace;
    font-size: 11px;
    color: var(--muted);
  }
  .demo-screenshot {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  .demo-info-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 14px;
    margin-top: 18px;
  }
  .demo-card {
    background: var(--cream);
    border: 1px solid var(--line);
    border-radius: 4px;
    padding: 16px;
  }
  .demo-card-label {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    color: var(--terracotta-deep);
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 12px;
  }
  .feature-list { list-style: none; padding: 0; margin: 0; }
  .feature-list li {
    padding: 7px 0;
    border-bottom: 1px solid var(--line-soft);
    font-size: 13px;
    color: var(--ink-soft);
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .feature-list li:last-child { border-bottom: none; }
  .feature-dot {
    width: 5px;
    height: 5px;
    background: var(--terracotta);
    border-radius: 50%;
    flex-shrink: 0;
  }
  .metric-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 9px 0;
    border-bottom: 1px solid var(--line-soft);
    font-size: 13px;
  }
  .metric-row:last-child { border-bottom: none; }
  .metric-key { color: var(--muted); }
  .metric-val { color: var(--terracotta-deep); font-weight: 700; font-family: 'Space Mono', monospace; }

  .team-card {
    background: var(--paper);
    border: 1px solid var(--line);
    border-radius: 4px;
    overflow: hidden;
    transition: border-color 0.25s, transform 0.25s;
  }
  .team-card:hover {
    border-color: var(--terracotta);
    transform: translateY(-5px);
  }
  .team-img-wrap {
    position: relative;
    height: 190px;
    overflow: hidden;
    background: var(--cream-deep);
  }
  .team-img-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .team-body { padding: 16px; }
  .team-name { font-family: 'Fraunces', serif; font-size: 16px; font-weight: 500; color: var(--ink); margin-bottom: 4px; }
  .team-role { font-family: 'Space Mono', monospace; font-size: 10px; color: var(--terracotta-deep); font-weight: 700; letter-spacing: 0.04em; margin-bottom: 14px; text-transform: uppercase; }
  .team-skills { display: flex; flex-wrap: wrap; gap: 5px; margin-bottom: 16px; }
  .skill-tag {
    background: var(--cream-deep);
    border: 1px solid var(--line);
    border-radius: 100px;
    padding: 2px 9px;
    font-size: 9px;
    color: var(--ink-soft);
    font-weight: 500;
  }
  .exp-header {
    display: flex;
    justify-content: space-between;
    font-size: 11px;
    color: var(--muted);
    margin-bottom: 7px;
    font-weight: 500;
  }
  .exp-pct { color: var(--terracotta-deep); font-weight: 700; font-family: 'Space Mono', monospace; }
  .exp-track {
    height: 4px;
    background: var(--cream-deep);
    border-radius: 100px;
    overflow: hidden;
  }
  .exp-fill {
    height: 100%;
    background: var(--terracotta);
    border-radius: 100px;
  }

  @media (min-width: 640px) {
    .demo-info-grid { grid-template-columns: 1fr 1fr; }
    .demo-screenshot { height: 230px; }
  }
`;

// ─── INJECT STYLES ONCE ───────────────────────────────────────────────────────

let stylesInjected = false;
function injectStyles() {
  if (stylesInjected) return;
  const tag = document.createElement("style");
  tag.textContent = CSS;
  document.head.appendChild(tag);
  stylesInjected = true;
}

// ─── DEMO MODAL ───────────────────────────────────────────────────────────────

function DemoModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="demo-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            className="demo-modal"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
          >
            <div className="demo-header">
              <div>
                <p
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 10,
                    color: "var(--terracotta-deep)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: 4,
                    fontWeight: 700,
                  }}
                >
                  Live project demo
                </p>
                <h3
                  style={{
                    fontFamily: "'Fraunces', serif",
                    fontSize: 20,
                    fontWeight: 500,
                    color: "var(--ink)",
                  }}
                >
                  {project.title}
                </h3>
              </div>
              <button className="demo-close-btn" onClick={onClose} aria-label="Close">
                <X size={16} />
              </button>
            </div>

            <div className="demo-body">
              <div
                style={{
                  background: "var(--cream)",
                  border: "1px solid var(--line)",
                  borderRadius: 4,
                  overflow: "hidden",
                  marginBottom: 18,
                }}
              >
                <div className="browser-bar">
                  <div className="b-dots">
                    <div className="b-dot" style={{ background: "#e8632c" }} />
                    <div className="b-dot" style={{ background: "#d8a93b" }} />
                    <div className="b-dot" style={{ background: "#2f4f3a" }} />
                  </div>
                  <div className="b-url">{project.demoUrl}</div>
                  <ExternalLink size={13} color="var(--muted)" />
                </div>
                <img src={project.image} alt={project.title} className="demo-screenshot" />
              </div>

              <div className="demo-info-grid">
                <div className="demo-card">
                  <div className="demo-card-label">Key features</div>
                  <ul className="feature-list">
                    {project.features.map((f) => (
                      <li key={f}>
                        <span className="feature-dot" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="demo-card" style={{ marginBottom: 14 }}>
                    <div className="demo-card-label">Tech stack</div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {project.stack.map((s) => (
                        <span key={s} className="stack-pill">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="demo-card">
                    <div className="demo-card-label">Results</div>
                    {Object.entries(project.metrics).map(([k, v]) => (
                      <div key={k} className="metric-row">
                        <span className="metric-key">{k}</span>
                        <span className="metric-val">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function PortfolioAndTeam() {
  const [activeDemo, setActiveDemo] = useState(null);

  injectStyles();

  return (
    <div className="dd-root">
      <DemoModal project={activeDemo} onClose={() => setActiveDemo(null)} />

      {/* ══════════════ PROJECTS SECTION ══════════════ */}
      <section
        id="projects"
        style={{
          padding: "64px 20px",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 40 }}>
            <div className="dd-label">Featured projects</div>
            <h2
              style={{
                fontFamily: "'Fraunces', serif",
                fontSize: "clamp(28px, 4.5vw, 48px)",
                fontWeight: 500,
                lineHeight: 1.08,
                color: "var(--ink)",
              }}
            >
              AI products &amp;{" "}
              <em style={{ color: "var(--terracotta)", fontStyle: "italic" }}>
                business systems
              </em>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: 18,
            }}
          >
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                className="proj-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(i * 0.05, 0.3), duration: 0.35 }}
                onClick={() => setActiveDemo(project)}
              >
                <div className="proj-img-wrap">
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <div className="proj-live-badge">
                    <span className="live-dot" />
                    Live
                  </div>
                  <div className="proj-cat-badge">{project.category}</div>
                </div>

                <div className="proj-body">
                  <div className="proj-title">{project.title}</div>
                  <div className="proj-desc">{project.description}</div>
                  <div className="proj-stack">
                    {project.stack.map((s) => (
                      <span key={s} className="stack-pill">
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="proj-demo-row">
                    <span>View live demo</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ TEAM SECTION ══════════════ */}
      <section
        id="team"
        style={{
          padding: "64px 20px",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 40 }}>
            <div className="dd-label">Core team</div>
            <h2
              style={{
                fontFamily: "'Fraunces', serif",
                fontSize: "clamp(28px, 4.5vw, 48px)",
                fontWeight: 500,
                lineHeight: 1.08,
                color: "var(--ink)",
              }}
            >
              Meet{" "}
              <em style={{ color: "var(--terracotta)", fontStyle: "italic" }}>
                the experts
              </em>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))",
              gap: 18,
            }}
          >
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                className="team-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(i * 0.07, 0.3), duration: 0.35 }}
              >
                <div className="team-img-wrap">
                  <img src={member.image} alt={member.name} loading="lazy" />
                </div>

                <div className="team-body">
                  <div className="team-name">{member.name}</div>
                  <div className="team-role">{member.role}</div>
                  <div className="team-skills">
                    {member.skills.map((s) => (
                      <span key={s} className="skill-tag">
                        {s}
                      </span>
                    ))}
                  </div>
                  <div>
                    <div className="exp-header">
                      <span>Expertise</span>
                      <span className="exp-pct">{member.progress}%</span>
                    </div>
                    <div className="exp-track">
                      <motion.div
                        className="exp-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${member.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: Math.min(i * 0.08, 0.3), ease: "easeOut" }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}