import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Portfolio from "./Pages/Portfolio";
import Pricing from "./Pages/Pricing";
import Expertise from "./Pages/Expertise";
import Contact from "./Pages/Contact";

import Navbar from "./components/Navbar";
import DeltaAssistant from "./components/DeltaAssistant";

import { Mail, Phone, MessageCircle, ExternalLink } from "lucide-react";

import "./App.css";

// TODO: same Calendly URL used elsewhere — consider a shared config.js
const CALENDLY_URL = "https://calendly.com/your-handle/intro-call";

function Footer() {
  return (
    <>
      <style>{`
        .ww-footer { font-family: 'Inter', sans-serif; background: var(--ink); }
        .ww-footer .font-display { font-family: 'Fraunces', serif; }
        .ww-footer .font-mono { font-family: 'Space Mono', monospace; }

        .ww-footer .platform-link {
          background: rgba(251,248,242,0.04);
          border: 1px solid rgba(251,248,242,0.12);
          border-radius: 4px;
          transition: border-color .2s ease, background .2s ease;
        }
        .ww-footer .platform-link:hover {
          border-color: var(--terracotta);
          background: rgba(251,248,242,0.07);
        }
      `}</style>

      <footer className="ww-footer relative overflow-hidden">
        <div className="relative max-w-[1200px] mx-auto px-5 sm:px-8 py-14 sm:py-20">
          {/* TOP GRID */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-10 border-b border-[rgba(251,248,242,0.12)] pb-12">
            {/* BRAND */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-[3px] bg-[var(--terracotta)] flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <polygon points="12,2 22,20 2,20" fill="#1a1a16" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-[var(--cream)] font-mono font-bold tracking-wide text-sm">
                    DELTA<span className="text-[var(--terracotta)]"> DEVELOPERS</span>
                  </h2>
                  <p className="text-[rgba(251,248,242,0.45)] text-xs mt-0.5">AI automation workshop</p>
                </div>
              </div>

              <p className="text-[rgba(251,248,242,0.55)] text-sm leading-relaxed">
                We build AI chatbots, automations, dashboards, CRM systems and
                modern web experiences that help businesses scale faster.
              </p>
            </div>

            {/* SERVICES */}
            <div>
              <h3 className="text-[var(--cream)] font-display font-medium mb-5 text-lg">Services</h3>
              <div className="flex flex-col gap-3 text-[rgba(251,248,242,0.6)] text-sm">
                <a href="/services" className="hover:text-[var(--terracotta)] transition-colors">AI Chatbots</a>
                <a href="/services" className="hover:text-[var(--terracotta)] transition-colors">Business Automation</a>
                <a href="/services" className="hover:text-[var(--terracotta)] transition-colors">CRM Systems</a>
                <a href="/services" className="hover:text-[var(--terracotta)] transition-colors">Dashboards</a>
                <a href="/services" className="hover:text-[var(--terracotta)] transition-colors">AI Calling Assistants</a>
                <a href="/pricing" className="hover:text-[var(--terracotta)] transition-colors">Pricing</a>
              </div>
            </div>

            {/* OTHER SITES */}
            {/*
              TODO: these two links point to other businesses/sites that
              aren't visually or narratively connected to Delta Developers
              anywhere else on the site. Two options:
              1. If these are genuinely your own other ventures, add one
                 sentence of context (e.g. "Other projects we run") so it
                 doesn't look like an outbound ad.
              2. If they're past client sites, move them into the Portfolio
                 case studies instead — they're more credible as proof of
                 work than as a footer link.
            */}
            <div>
              <h3 className="text-[var(--cream)] font-display font-medium mb-5 text-lg">Our platforms</h3>
              <div className="flex flex-col gap-3">
                <a href="https://delta-developer.vercel.app/" target="_blank" rel="noreferrer" className="platform-link p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[var(--cream)] font-semibold text-sm">Delta Developers</p>
                      <p className="text-[rgba(251,248,242,0.45)] text-xs mt-0.5">Main agency website</p>
                    </div>
                    <ExternalLink size={15} className="text-[var(--terracotta)] flex-shrink-0" />
                  </div>
                </a>

                <a href="https://delta-restaurants.vercel.app/" target="_blank" rel="noreferrer" className="platform-link p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[var(--cream)] font-semibold text-sm">Delta Restaurants</p>
                      <p className="text-[rgba(251,248,242,0.45)] text-xs mt-0.5">Restaurant automation</p>
                    </div>
                    <ExternalLink size={15} className="text-[var(--terracotta)] flex-shrink-0" />
                  </div>
                </a>
              </div>
            </div>

            {/* CONTACT */}
            <div>
              <h3 className="text-[var(--cream)] font-display font-medium mb-5 text-lg">Contact</h3>
              <div className="flex flex-col gap-4">
                <a href="mailto:deltadevelopers.team@gmail.com" className="flex items-center gap-3 text-[rgba(251,248,242,0.6)] hover:text-[var(--terracotta)] transition-colors">
                  <Mail size={17} className="flex-shrink-0" />
                  <span className="text-sm break-all">deltadevelopers.team@gmail.com</span>
                </a>

                <a href="tel:+19132035960" className="flex items-center gap-3 text-[rgba(251,248,242,0.6)] hover:text-[var(--terracotta)] transition-colors">
                  <Phone size={17} className="flex-shrink-0" />
                  <span className="text-sm">+1 (913) 203-5960</span>
                </a>

                <a href="https://wa.me/19132035960" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-[rgba(251,248,242,0.6)] hover:text-[var(--terracotta)] transition-colors">
                  <MessageCircle size={17} className="flex-shrink-0" />
                  <span className="text-sm">WhatsApp Chat</span>
                </a>

                <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-[rgba(251,248,242,0.6)] hover:text-[var(--terracotta)] transition-colors">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span className="text-sm">Book a call</span>
                </a>

                <a href="https://instagram.com/delt.adevelopers" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-[rgba(251,248,242,0.6)] hover:text-[var(--terracotta)] transition-colors">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  <span className="text-sm">@delt.adevelopers</span>
                </a>
              </div>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[rgba(251,248,242,0.4)] text-sm text-center sm:text-left font-mono">
              © 2026 Delta Developers. All rights reserved.
            </p>

            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[var(--terracotta)]" />
              <p className="text-[rgba(251,248,242,0.6)] text-sm">Available worldwide for AI projects</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#fbf8f2] text-[#1a1a16] font-sans">
        <Navbar />

        <div className="pt-16 sm:pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/expertise" element={<Expertise />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <Footer />
        <DeltaAssistant />
      </div>
    </Router>
  );
}