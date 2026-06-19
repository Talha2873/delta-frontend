import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { Calendar, ArrowRight } from "lucide-react";

// TODO: same Calendly URL as Navbar.jsx / Home.jsx — keep in sync,
// or better, move to a single shared config file.
const CALENDLY_URL = "https://calendly.com/your-handle/intro-call";

export default function Contact() {
  const [searchParams] = useSearchParams();

  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [prefilledFromChat, setPrefilledFromChat] = useState(false);

  // Pre-fill from the chat widget handoff: ?service=...&message=...
  // The widget sends `service` as an exact match to one of the <option>
  // values below, and `message` as a short recap of what the visitor
  // already told the assistant, so they don't have to retype anything.
  useEffect(() => {
    const serviceFromUrl = searchParams.get("service");
    const messageFromUrl = searchParams.get("message");

    if (serviceFromUrl || messageFromUrl) {
      setForm((prev) => ({
        ...prev,
        ...(serviceFromUrl ? { service: serviceFromUrl } : {}),
        ...(messageFromUrl ? { message: messageFromUrl } : {}),
      }));
      setPrefilledFromChat(true);
    }
  }, [searchParams]);

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Enter your name";
    if (!form.email.trim()) {
      next.email = "Enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Enter a valid email address";
    }
    if (!form.service) next.service = "Select a service";
    if (!form.message.trim()) next.message = "Tell us a bit about your project";
    return next;
  };

  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
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

      setSent(true);
      setForm({ name: "", email: "", service: "", message: "" });
    } catch (error) {
      console.error(error);
      setSubmitError(
        error?.text || error?.message || "Something went wrong sending your message. Please try again or email us directly."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        :root{
          --cream:#fbf8f2; --cream-deep:#f3eee2; --paper:#ffffff; --ink:#1a1a16;
          --ink-soft:#3c3a32; --muted:#6b6a5c; --muted-soft:#8c8a78;
          --terracotta:#e8632c; --terracotta-deep:#c44d1c; --terracotta-tint:#fbe4d6;
          --pine:#2f4f3a; --pine-deep:#203a29; --pine-tint:#e3ebe2; --line:#d8d2c2; --line-soft:#e7e2d4;
          --error:#c0392b; --error-tint:#fbe9e7;
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
          font-family:'Inter',sans-serif; background:var(--cream); border:1px solid var(--line);
          border-radius:3px; color:var(--ink); width:100%; outline:none; transition:border-color .2s ease;
        }
        .ww-root input::placeholder, .ww-root textarea::placeholder{ color:var(--muted-soft); }
        .ww-root input:focus, .ww-root select:focus, .ww-root textarea:focus{ border-color:var(--terracotta); }
        .ww-root input.has-error, .ww-root select.has-error, .ww-root textarea.has-error{ border-color: var(--error); }
        .field-error { color: var(--error); font-size: 12.5px; margin-top: 6px; }

        .ww-root .btn-primary{
          display:inline-flex; align-items:center; justify-content:center; gap:8px;
          background:var(--terracotta); color:var(--cream); font-weight:700; font-size:14px;
          padding:15px 26px; border-radius:3px; border:1px solid var(--terracotta);
          transition:background .2s ease, transform .2s ease;
        }
        .ww-root .btn-primary:hover{ background:var(--terracotta-deep); transform:translateY(-1px); }

        .ww-root .chat-banner{
          background:var(--pine-tint); border:1px solid var(--pine); border-radius:3px;
          padding:12px 16px; font-size:13px; color:var(--pine-deep);
          display:flex; align-items:center; gap:10px; margin-bottom:24px;
        }
      `}</style>

      <main className="ww-root grain-bg relative min-h-screen">
        {/* HERO */}
        <section className="px-5 sm:px-8 pt-14 sm:pt-20 pb-12 sm:pb-16 border-b border-[var(--line)]">
          <div className="max-w-[1200px] mx-auto">
            <div className="eyebrow mb-6">Start your project</div>

            <h1 className="font-display leading-[0.98] font-medium text-[38px] sm:text-[60px] max-w-3xl">
              Two ways to
              <span className="block italic text-[var(--terracotta)]">get started</span>
            </h1>

            <p className="mt-7 text-[var(--muted)] text-base sm:text-lg max-w-2xl leading-[1.75]">
              Book a free 30-minute call if you want to talk it through, or
              send us the details below and we'll reply within 24 hours.
            </p>
          </div>
        </section>

        {/* CALENDLY BAND */}
        <section className="px-5 sm:px-8 py-10 sm:py-12 border-b border-[var(--line)]">
          <div className="max-w-[1200px] mx-auto card p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-[3px] bg-[var(--pine-tint)] border border-[var(--pine)] flex items-center justify-center flex-shrink-0">
                <Calendar size={20} className="text-[var(--pine)]" />
              </div>
              <div>
                <h2 className="font-display text-xl font-medium">Prefer to talk it through?</h2>
                <p className="text-[var(--muted)] text-sm mt-1">
                  Free 30-minute call, no pressure. Pick a time that works for you.
                </p>
              </div>
            </div>
            <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="btn-primary whitespace-nowrap">
              Book a call
              <ArrowRight size={15} />
            </a>
          </div>
        </section>

        {/* CONTENT */}
        <section className="px-5 sm:px-8 py-14 sm:py-20">
          <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-10">
            {/* LEFT SIDE */}
            <div className="space-y-5 order-2 lg:order-1">
              <div className="card p-6 sm:p-8">
                <div className="flex items-center gap-3.5 mb-7">
                  <div className="w-11 h-11 rounded-[3px] bg-[var(--pine)] text-[var(--cream)] flex items-center justify-center font-mono font-bold text-sm">DD</div>
                  <div>
                    <h3 className="font-semibold text-lg">Why work with us</h3>
                    <p className="text-[var(--muted)] text-sm mt-0.5">Focused on growth, speed, and premium execution.</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { title: "Fast delivery", desc: "High-quality projects delivered quickly without compromising design or performance." },
                    { title: "Premium UI/UX", desc: "Modern interfaces built to increase trust, engagement, and conversions." },
                    { title: "Business-focused", desc: "Every feature is designed around real business outcomes and ROI." },
                    { title: "Long-term support", desc: "Ongoing support, improvements, and scaling assistance after launch." },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 border border-[var(--line-soft)] bg-[var(--cream)] rounded-[3px] p-4 sm:p-5">
                      <span className="font-mono text-xs font-bold text-[var(--terracotta-deep)] pt-1">0{i + 1}</span>
                      <div>
                        <h4 className="font-semibold text-sm">{item.title}</h4>
                        <p className="text-sm text-[var(--muted)] mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {[
                  { value: "50+", label: "Projects" }, // TODO: verify
                  { value: "30+", label: "Clients" },   // TODO: verify
                  { value: "24/7", label: "Support" },
                ].map((item, i) => (
                  <div key={i} className="card text-center p-4 sm:p-5">
                    <div className="font-display text-xl sm:text-2xl font-medium text-[var(--terracotta)]">{item.value}</div>
                    <div className="text-[10px] sm:text-[11px] tracking-wider text-[var(--muted)] uppercase mt-1 font-mono font-bold">{item.label}</div>
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
                        <span className="block italic text-[var(--terracotta)]">your project</span>
                      </h2>
                      <p className="text-[var(--muted)] mt-4 max-w-lg leading-relaxed">
                        Share your project details and we'll respond with
                        strategy, timeline, and pricing for your specific situation.
                      </p>
                    </div>

                    {/* Shown only when the visitor arrived from the chat widget,
                        so the prefilled fields don't look unexplained. */}
                    {prefilledFromChat && (
                      <div className="chat-banner">
                        <span>💬</span>
                        <span>
                          We've carried over what you told our assistant — just double-check
                          the details below and add anything else before sending.
                        </span>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6" noValidate>
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold mb-2.5">Full name</label>
                        <input
                          id="name"
                          type="text"
                          placeholder="John Anderson"
                          value={form.name}
                          onChange={(e) => updateField("name", e.target.value)}
                          className={`px-4 py-3.5 ${errors.name ? "has-error" : ""}`}
                          aria-invalid={!!errors.name}
                        />
                        {errors.name && <p className="field-error">{errors.name}</p>}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold mb-2.5">Email address</label>
                        <input
                          id="email"
                          type="email"
                          placeholder="you@example.com"
                          value={form.email}
                          onChange={(e) => updateField("email", e.target.value)}
                          className={`px-4 py-3.5 ${errors.email ? "has-error" : ""}`}
                          aria-invalid={!!errors.email}
                        />
                        {errors.email && <p className="field-error">{errors.email}</p>}
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-sm font-semibold mb-2.5">Select service</label>
                        <select
                          id="service"
                          value={form.service}
                          onChange={(e) => updateField("service", e.target.value)}
                          className={`px-4 py-3.5 ${errors.service ? "has-error" : ""}`}
                          aria-invalid={!!errors.service}
                        >
                          <option value="" disabled>Choose a service</option>
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
                        {errors.service && <p className="field-error">{errors.service}</p>}
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold mb-2.5">Project details</label>
                        <textarea
                          id="message"
                          rows={6}
                          placeholder="Tell us about your project goals, features, timeline, and business requirements..."
                          value={form.message}
                          onChange={(e) => updateField("message", e.target.value)}
                          className={`px-4 py-3.5 resize-none ${errors.message ? "has-error" : ""}`}
                          aria-invalid={!!errors.message}
                        />
                        {errors.message && <p className="field-error">{errors.message}</p>}
                      </div>

                      {submitError && (
                        <div className="text-sm rounded-[3px] px-4 py-3 border" style={{ background: "var(--error-tint)", borderColor: "var(--error)", color: "var(--error)" }}>
                          {submitError}
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full h-14 rounded-[3px] bg-[var(--terracotta)] text-[var(--cream)] font-bold tracking-wide hover:bg-[var(--terracotta-deep)] transition-all disabled:opacity-50"
                      >
                        {loading ? "Sending..." : "Send project inquiry →"}
                      </button>

                      <p className="text-center text-sm text-[var(--muted)]">Average response time: under 24 hours</p>
                    </form>
                  </>
                ) : (
                  <div className="py-12 sm:py-16 text-center">
                    <div className="w-20 h-20 rounded-full bg-[var(--pine-tint)] border border-[var(--pine)] flex items-center justify-center text-[var(--pine)] text-3xl mx-auto mb-7 font-display">✓</div>

                    <h2 className="font-display text-3xl sm:text-4xl font-medium text-[var(--terracotta)] mb-4">Message sent</h2>

                    <p className="text-[var(--muted)] text-base sm:text-lg max-w-md mx-auto leading-relaxed mb-8">
                      Thank you for reaching out. We'll review your project
                      and reply within 24 hours with next steps.
                    </p>

                    <p className="text-[var(--ink-soft)] text-sm mb-4">
                      Want to skip the wait? Book a call now and we can talk through it today.
                    </p>

                    <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="btn-primary inline-flex">
                      Book a call
                      <ArrowRight size={15} />
                    </a>
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