import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Expertise", href: "/expertise" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

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

        .ww-nav { font-family: 'Inter', sans-serif; }
        .ww-nav .font-display { font-family: 'Fraunces', serif; }
        .ww-nav .font-mono { font-family: 'Space Mono', monospace; }

        .ww-nav .stub{
          position:relative; display:inline-flex; align-items:center; gap:6px;
          padding:9px 16px 9px 14px; background:var(--terracotta); border:1px solid var(--terracotta);
          font-family:'Space Mono',monospace; font-size:11px; letter-spacing:0.06em;
          text-transform:uppercase; font-weight:700; color:var(--cream); border-radius:3px;
          white-space:nowrap; transition:background .2s ease, transform .2s ease;
        }
        .ww-nav .stub:hover{ background:var(--terracotta-deep); transform:translateY(-1px); }

        .ww-nav .audit-link{
          font-family:'Space Mono',monospace; font-size:11px; letter-spacing:0.04em;
          font-weight:700; color:var(--ink); padding:9px 14px; border:1px solid var(--line);
          border-radius:3px; white-space:nowrap; transition:border-color .2s ease, color .2s ease;
        }
        .ww-nav .audit-link:hover{ border-color:var(--terracotta); color:var(--terracotta-deep); }

        .ww-mobile-link {
          font-family: 'Fraunces', serif;
          font-size: 32px;
          font-weight: 500;
        }
      `}</style>

      <nav
        className={`ww-nav fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[var(--cream)]/95 backdrop-blur-md border-b border-[var(--line)]"
            : "bg-[var(--cream)]/0 border-b border-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-4 flex items-center gap-6">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2.5 mr-auto no-underline" onClick={() => setMenuOpen(false)}>
            <div className="w-9 h-9 rounded-[3px] bg-[var(--ink)] flex items-center justify-center flex-shrink-0">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <polygon points="12,2 22,20 2,20" fill="#e8632c" />
              </svg>
            </div>

            <div className="leading-none">
              <p className="text-[10px] font-bold tracking-[0.18em] text-[var(--terracotta-deep)] font-mono">
                DELTA
              </p>
              <p className="text-[10px] font-bold tracking-[0.18em] text-[var(--ink)] font-mono">
                DEVELOPERS
              </p>
            </div>
          </Link>

          {/* DESKTOP NAV LINKS */}
          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.label}
                to={l.href}
                className={({ isActive }) =>
                  `text-[13px] font-semibold tracking-wide transition-colors no-underline ${
                    isActive
                      ? "text-[var(--terracotta-deep)]"
                      : "text-[var(--muted)] hover:text-[var(--ink)]"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>

          {/* DESKTOP BUTTONS */}
          <div className="hidden sm:flex items-center gap-3">
            <Link to="/contact" className="audit-link no-underline">
              Free audit →
            </Link>
            <Link to="/contact" className="stub no-underline">
              Hire us
            </Link>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden w-10 h-10 rounded-[3px] border border-[var(--line)] flex items-center justify-center text-[var(--ink)] flex-shrink-0"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      {menuOpen && (
        <div className="ww-nav fixed inset-0 z-40 bg-[var(--cream)] sm:hidden flex flex-col pt-24 px-6">
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((l, i) => (
              <NavLink
                key={l.label}
                to={l.href}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `ww-mobile-link no-underline py-3 border-b border-[var(--line-soft)] ${
                    isActive ? "text-[var(--terracotta)] italic" : "text-[var(--ink)]"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3">
            <Link to="/contact" onClick={() => setMenuOpen(false)} className="stub justify-center no-underline py-4">
              Hire us
            </Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)} className="audit-link text-center no-underline py-3">
              Free audit →
            </Link>
          </div>
        </div>
      )}
    </>
  );
}