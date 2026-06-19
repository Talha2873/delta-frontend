import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [searchParams] = useSearchParams();

  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const serviceFromUrl = searchParams.get("service");
    if (serviceFromUrl) {
      setForm((prev) => ({ ...prev, service: serviceFromUrl }));
    }
  }, [searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.service || !form.message) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        "service_5tsjxj4",
        "template_c0ew6nk",
        {
          name: form.name,
          email: form.email,
          service: form.service,
          message: form.message,
          to_email: "deltadevelopers.team@gmail.com",
        },
        "SL8N5-GMhS8DEjQhI"
      );

      const whatsappMessage = `
New project inquiry

Name: ${form.name}
Email: ${form.email}
Service: ${form.service}

Project details:
${form.message}
      `;

      const whatsappUrl = `https://wa.me/19132035960?text=${encodeURIComponent(
        whatsappMessage
      )}`;

      setSent(true);

      setForm({ name: "", email: "", service: "", message: "" });

      window.open(whatsappUrl, "_blank");
    } catch (error) {
      console.error(error);
      alert(error?.text || error?.message || "Failed to send message");
    } finally {
      setLoading(false);
    }
  };

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

        .ww-root input, .ww-root select, .ww-root textarea{
          font-family:'Inter',sans-serif;
          background:var(--cream);
          border:1px solid var(--line);
          border-radius:3px;
          color:var(--ink);
          width:100%;
          outline:none;
          transition:border-color .2s ease;
        }
        .ww-root input::placeholder, .ww-root textarea::placeholder{ color:var(--muted-soft); }
        .ww-root input:focus, .ww-root select:focus, .ww-root textarea:focus{ border-color:var(--terracotta); }
      `}</style>

      <main className="ww-root grain-bg relative min-h-screen">
        {/* HERO */}
        <section className="px-5 sm:px-8 pt-14 sm:pt-20 pb-12 sm:pb-16 border-b border-[var(--line)]">
          <div className="max-w-[1200px] mx-auto">
            <div className="eyebrow mb-6">Start your project</div>

            <h1 className="font-display leading-[0.98] font-medium text-[40px] sm:text-[64px] max-w-3xl">
              Let's build something
              <span className="block italic text-[var(--terracotta)]">exceptional</span>
            </h1>

            <p className="mt-7 text-[var(--muted)] text-base sm:text-lg max-w-2xl leading-[1.75]">
              We craft AI systems, premium websites, automations, and
              scalable digital products designed to increase revenue and
              elevate your business.
            </p>
          </div>
        </section>

        {/* CONTENT */}
        <section className="px-5 sm:px-8 py-14 sm:py-20">
          <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-10">
            {/* LEFT SIDE */}
            <div className="space-y-5 order-2 lg:order-1">
              <div className="card p-6 sm:p-8">
                <div className="flex items-center gap-3.5 mb-7">
                  <div className="w-11 h-11 rounded-[3px] bg-[var(--pine)] text-[var(--cream)] flex items-center justify-center font-mono font-bold text-sm">
                    DD
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Why work with us</h3>
                    <p className="text-[var(--muted)] text-sm mt-0.5">
                      Focused on growth, speed, and premium execution.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      title: "Fast delivery",
                      desc: "High-quality projects delivered quickly without compromising design or performance.",
                    },
                    {
                      title: "Premium UI/UX",
                      desc: "Modern interfaces built to increase trust, engagement, and conversions.",
                    },
                    {
                      title: "Business-focused",
                      desc: "Every feature is designed around real business outcomes and ROI.",
                    },
                    {
                      title: "Long-term support",
                      desc: "Ongoing support, improvements, and scaling assistance after launch.",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex gap-4 border border-[var(--line-soft)] bg-[var(--cream)] rounded-[3px] p-4 sm:p-5"
                    >
                      <span className="font-mono text-xs font-bold text-[var(--terracotta-deep)] pt-1">
                        0{i + 1}
                      </span>
                      <div>
                        <h4 className="font-semibold text-sm">{item.title}</h4>
                        <p className="text-sm text-[var(--muted)] mt-1 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* QUICK STATS */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {[
                  { value: "50+", label: "Projects" },
                  { value: "30+", label: "Clients" },
                  { value: "24/7", label: "Support" },
                ].map((item, i) => (
                  <div key={i} className="card text-center p-4 sm:p-5">
                    <div className="font-display text-xl sm:text-2xl font-medium text-[var(--terracotta)]">
                      {item.value}
                    </div>
                    <div className="text-[10px] sm:text-[11px] tracking-wider text-[var(--muted)] uppercase mt-1 font-mono font-bold">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FORM */}
            <div className="order-1 lg:order-2">
              <div className="card p-6 sm:p-10">
                {!sent ? (
                  <>
                    <div className="mb-8 sm:mb-10">
                      <div className="eyebrow mb-4">Contact form</div>

                      <h2 className="font-display text-3xl sm:text-4xl font-medium leading-tight">
                        Tell us about
                        <span className="block italic text-[var(--terracotta)]">your vision</span>
                      </h2>

                      <p className="text-[var(--muted)] mt-4 max-w-lg leading-relaxed">
                        Share your project details and we'll respond with
                        strategy, timeline, and the best solution for your
                        business.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                      <div>
                        <label className="block text-sm font-semibold mb-2.5">
                          Full name
                        </label>
                        <input
                          type="text"
                          placeholder="John Anderson"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="px-4 py-3.5"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2.5">
                          Email address
                        </label>
                        <input
                          type="email"
                          placeholder="you@example.com"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="px-4 py-3.5"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2.5">
                          Select service
                        </label>
                        <select
                          value={form.service}
                          onChange={(e) => setForm({ ...form, service: e.target.value })}
                          className="px-4 py-3.5"
                        >
                          <option value="" disabled>
                            Choose a service
                          </option>

                          <optgroup label="AI & Automation">
                            <option>AI Chatbot Integration</option>
                            <option>AI Business Automation</option>
                            <option>WhatsApp AI Chatbots</option>
                            <option>AI Email Automation</option>
                          </optgroup>

                          <optgroup label="Web Development">
                            <option>Business Website</option>
                            <option>E-Commerce Store</option>
                            <option>Dashboard & Admin Panel</option>
                            <option>Full Stack Web App</option>
                          </optgroup>

                          <optgroup label="Other">
                            <option>Custom Solution</option>
                          </optgroup>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2.5">
                          Project details
                        </label>
                        <textarea
                          rows={6}
                          placeholder="Tell us about your project goals, features, timeline, and business requirements..."
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          className="px-4 py-3.5 resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full h-14 rounded-[3px] bg-[var(--terracotta)] text-[var(--cream)] font-bold tracking-wide hover:bg-[var(--terracotta-deep)] transition-all disabled:opacity-50"
                      >
                        {loading ? "Sending..." : "Send project inquiry →"}
                      </button>

                      <p className="text-center text-sm text-[var(--muted)]">
                        Average response time: under 24 hours
                      </p>
                    </form>
                  </>
                ) : (
                  <div className="py-16 sm:py-24 text-center">
                    <div className="w-20 h-20 rounded-full bg-[var(--pine-tint)] border border-[var(--pine)] flex items-center justify-center text-[var(--pine)] text-3xl mx-auto mb-7 font-display">
                      ✓
                    </div>

                    <h2 className="font-display text-4xl sm:text-5xl font-medium text-[var(--terracotta)] mb-4">
                      Message sent
                    </h2>

                    <p className="text-[var(--muted)] text-base sm:text-lg max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out. We'll review your project
                      and contact you shortly.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}