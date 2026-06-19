import { useState, useEffect, useRef, useCallback } from 'react'

/* ═══════════════════════════════════════════════════════════
   DELTA DEVELOPERS — AI CHAT WIDGET
   "Warm Workshop": Terracotta #e8632c | Cream #fbf8f2 | Ink #1a1a16
   Fraunces (display) + Inter (body) + Space Mono (labels)
═══════════════════════════════════════════════════════════ */

const TERRACOTTA = '#e8632c'
const TERRACOTTA_DEEP = '#c44d1c'
const TERRACOTTA_DIM = 'rgba(232,99,44,'
const INK = '#1a1a16'
const CREAM = '#fbf8f2'
const CREAM_DEEP = '#f3eee2'
const PAPER = '#ffffff'
const LINE = '#d8d2c2'
const MUTED = '#6b6a5c'

const QUICK_REPLIES = [
  'I need a website for my business',
  'How much does it cost?',
  'I want to automate my work',
  'I need a WhatsApp chatbot',
]

/* ─── Canvas Particle Background ───────────────────────── */
const ParticleCanvas = () => {
  const canvasRef = useRef(null)
  const animRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let W = canvas.offsetWidth
    let H = canvas.offsetHeight
    canvas.width = W
    canvas.height = H

    const resize = () => {
      W = canvas.offsetWidth
      H = canvas.offsetHeight
      canvas.width = W
      canvas.height = H
    }
    window.addEventListener('resize', resize)

    const PARTICLES = Array.from({ length: 24 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 2 + 1,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.22,
      alpha: Math.random() * 0.4 + 0.08,
    }))

    const GRID_LINES = []
    const GRID_SPACING = 38
    for (let x = 0; x < 600; x += GRID_SPACING) GRID_LINES.push({ type: 'v', pos: x })
    for (let y = 0; y < 700; y += GRID_SPACING) GRID_LINES.push({ type: 'h', pos: y })

    let frame = 0
    const draw = () => {
      animRef.current = requestAnimationFrame(draw)
      frame++
      ctx.clearRect(0, 0, W, H)

      ctx.lineWidth = 0.5
      GRID_LINES.forEach(l => {
        ctx.strokeStyle = 'rgba(196,77,28,0.05)'
        ctx.beginPath()
        if (l.type === 'v') { ctx.moveTo(l.pos, 0); ctx.lineTo(l.pos, H) }
        else { ctx.moveTo(0, l.pos); ctx.lineTo(W, l.pos) }
        ctx.stroke()
      })

      PARTICLES.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = W
        if (p.x > W) p.x = 0
        if (p.y < 0) p.y = H
        if (p.y > H) p.y = 0

        p.alpha = 0.35 + 0.4 * Math.abs(Math.sin(frame * 0.012 + p.x))

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(196,77,28,${p.alpha})`
        ctx.fill()
      })

      for (let i = 0; i < PARTICLES.length; i++) {
        for (let j = i + 1; j < PARTICLES.length; j++) {
          const dx = PARTICLES[i].x - PARTICLES[j].x
          const dy = PARTICLES[i].y - PARTICLES[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 90) {
            ctx.strokeStyle = `rgba(196,77,28,${0.14 * (1 - dist / 90)})`
            ctx.lineWidth = 0.7
            ctx.beginPath()
            ctx.moveTo(PARTICLES[i].x, PARTICLES[i].y)
            ctx.lineTo(PARTICLES[j].x, PARTICLES[j].y)
            ctx.stroke()
          }
        }
      }
    }

    draw()
    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        pointerEvents: 'none', zIndex: 0,
        borderRadius: 'inherit',
      }}
    />
  )
}

/* ─── Icons ─────────────────────────────────────────────── */
const SendIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
    stroke={CREAM} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" fill={CREAM} />
  </svg>
)

const XIcon = ({ size = 16, color = 'rgba(26,26,22,0.55)' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2.5" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

/* ─── FAB Icon: Delta D (a literal "D" mark, ticket-stub style) ── */
const DIcon = ({ size = 26, color = INK }) => (
  <svg width={size} height={size} viewBox="0 0 44 44" fill="none">
    <path
      d="M13 11H21.8C28.8 11 34.5 16.7 34.5 23C34.5 29.3 28.8 35 21.8 35H13V11Z"
      fill="none" stroke={color} strokeWidth="2.6"
      strokeLinejoin="round" strokeLinecap="round"
    />
  </svg>
)

/* ─── Avatar ─────────────────────────────────────────────── */
const BotAvatar = () => (
  <div style={{
    width: 40, height: 40, borderRadius: 10,
    background: TERRACOTTA,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0,
    position: 'relative', overflow: 'hidden',
    border: `1px solid ${TERRACOTTA_DEEP}`,
  }}>
    <DIcon size={20} color={CREAM} />
  </div>
)

/* ─── Typing Dots ────────────────────────────────────────── */
const TypingDots = () => (
  <div style={{ display: 'flex', gap: 5, alignItems: 'center', padding: '2px 0' }}>
    {[0, 1, 2].map(i => (
      <div key={i} style={{
        width: 6, height: 6, borderRadius: '50%',
        background: TERRACOTTA,
        animation: 'ddTyping 1.3s ease-in-out infinite',
        animationDelay: `${i * 0.19}s`,
        opacity: 0.3,
      }} />
    ))}
  </div>
)

/* ═══════════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════════ */
export default function DeltaAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([{
    role: 'assistant',
    content: "Hey! I'm the Delta Assistant.\n\nHow can I help your business today?",
    time: new Date(),
  }])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [hasUnread, setHasUnread] = useState(false)
  const [fabHover, setFabHover] = useState(false)

  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  useEffect(() => {
    if (!isOpen && messages.length > 1) setHasUnread(true)
  }, [messages, isOpen])

  useEffect(() => {
    document.body.style.overflow = isOpen && window.innerWidth < 640 ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const openChat = () => {
    setIsOpen(true)
    setHasUnread(false)
    setTimeout(() => inputRef.current?.focus(), 280)
  }

  const closeChat = () => setIsOpen(false)

  const sendMessage = useCallback(async text => {
    const userText = (text ?? input).trim()
    if (!userText || isTyping) return
    setInput('')
    const userMessage = { role: 'user', content: userText, time: new Date() }
    const updatedMessages = [...messages, userMessage]
    setMessages(updatedMessages)
    setIsTyping(true)
    try {
      const res = await fetch('https://delta-backend-production-3ba3.up.railway.app/api/chat/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updatedMessages.map(m => ({ role: m.role, content: m.content })),
        }),
      })
      if (!res.ok) throw new Error('Bad response')
      const data = await res.json()
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: data.reply || 'No response received.',
        time: new Date(),
      }])
    } catch {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "Couldn't reach the server. Check your connection and try again.",
        time: new Date(),
        isError: true,
        retryText: userText,
      }])
    } finally {
      setIsTyping(false)
    }
  }, [input, isTyping, messages])

  const handleKeyDown = e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage() }
  }

  const fmt = d => d?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) || ''

  return (
    <>
      {/* ── Global Styles ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500;1,9..144,600&family=Inter:wght@400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap');

        @keyframes ddTyping {
          0%,60%,100%{ transform:translateY(0); opacity:.3; }
          30%{ transform:translateY(-6px); opacity:1; }
        }
        @keyframes ddSlideUp {
          from{ opacity:0; transform:translateY(18px) scale(0.97); }
          to  { opacity:1; transform:translateY(0) scale(1); }
        }
        @keyframes ddFadeIn {
          from{ opacity:0; transform:translateY(9px); }
          to  { opacity:1; transform:translateY(0); }
        }
        @keyframes ddPulse {
          0%  { transform:scale(1); opacity:.5; }
          70% { transform:scale(1.8); opacity:0; }
          100%{ transform:scale(1.8); opacity:0; }
        }
        @keyframes ddBlink {
          0%,100%{ opacity:1; }
          50%    { opacity:.3; }
        }
        @keyframes ddBadgePop {
          0%  { transform:scale(0); }
          70% { transform:scale(1.18); }
          100%{ transform:scale(1); }
        }
        @keyframes ddQuickFade {
          from{ opacity:0; transform:translateY(6px); }
          to  { opacity:1; transform:translateY(0); }
        }

        .dd-window {
          animation: ddSlideUp 0.32s cubic-bezier(0.22,1,0.36,1) forwards;
          font-family: 'Inter', sans-serif;
        }
        .dd-msg { animation: ddFadeIn 0.28s ease forwards; }

        .dd-scroll::-webkit-scrollbar { width: 3px; }
        .dd-scroll::-webkit-scrollbar-track { background: transparent; }
        .dd-scroll::-webkit-scrollbar-thumb {
          background: rgba(232,99,44,0.3);
          border-radius: 8px;
        }

        .dd-input {
          font-family: 'Inter', sans-serif !important;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .dd-input:focus {
          outline: none !important;
          border-color: ${TERRACOTTA} !important;
          box-shadow: 0 0 0 3px rgba(232,99,44,0.1) !important;
        }
        .dd-input::placeholder { color: rgba(26,26,22,0.35); }

        .dd-send {
          transition: transform 0.18s, background 0.18s;
        }
        .dd-send:hover:not(:disabled) {
          background: ${TERRACOTTA_DEEP} !important;
          transform: scale(1.06);
        }
        .dd-send:disabled { opacity: 0.35; cursor: not-allowed; }

        .dd-quick {
          transition: all 0.2s;
          font-family: 'Inter', sans-serif;
          animation: ddQuickFade 0.32s ease forwards;
        }
        .dd-quick:hover {
          background: ${TERRACOTTA} !important;
          border-color: ${TERRACOTTA} !important;
          color: ${CREAM} !important;
        }

        .dd-retry {
          transition: background 0.18s, color 0.18s;
        }
        .dd-retry:hover {
          background: ${TERRACOTTA} !important;
          color: ${CREAM} !important;
        }

        .dd-close-btn {
          transition: background 0.18s, border-color .18s;
        }
        .dd-close-btn:hover {
          background: ${CREAM_DEEP} !important;
          border-color: ${TERRACOTTA} !important;
        }

        .dd-fab-btn {
          transition: transform 0.22s cubic-bezier(0.34,1.56,0.64,1);
        }
        .dd-fab-btn:hover { transform: scale(1.08) !important; }

        @media (max-width: 639px) {
          .dd-window {
            top: auto !important;
            right: 0 !important;
            left: 0 !important;
            bottom: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
            height: 88vh !important;
            border-radius: 16px 16px 0 0 !important;
          }
        }
      `}</style>

      {/* ══ FAB BUTTON ════════════════════════════════════ */}
      <div style={{ position: 'fixed', bottom: 22, right: 18, zIndex: 9999 }}>

        {/* Tooltip (desktop only, hover) */}
        {!isOpen && fabHover && (
          <div style={{
            position: 'absolute', bottom: 72, right: 0,
            background: INK,
            border: `1px solid ${TERRACOTTA}`,
            borderRadius: 6, padding: '8px 14px',
            color: CREAM, fontSize: 12,
            fontFamily: "'Inter', sans-serif", fontWeight: 500,
            whiteSpace: 'nowrap',
            boxShadow: '0 12px 28px rgba(26,26,22,0.35)',
            pointerEvents: 'none',
            zIndex: 10,
          }}>
            Chat with Delta Assistant
          </div>
        )}

        {/* Pulse rings */}
        {!isOpen && [0, 0.9].map((delay, i) => (
          <div key={i} style={{
            position: 'absolute', inset: 0, borderRadius: '50%',
            border: `1.5px solid ${TERRACOTTA_DIM}0.4)`,
            animation: `ddPulse 2.6s ease-out ${delay}s infinite`,
            pointerEvents: 'none',
          }} />
        ))}

        {/* FAB */}
        <button
          className="dd-fab-btn"
          onMouseEnter={() => setFabHover(true)}
          onMouseLeave={() => setFabHover(false)}
          onClick={() => isOpen ? closeChat() : openChat()}
          aria-label={isOpen ? 'Close chat' : 'Open chat'}
          style={{
            width: 58, height: 58,
            borderRadius: '50%',
            border: `2px solid ${TERRACOTTA_DEEP}`,
            cursor: 'pointer',
            background: TERRACOTTA,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            position: 'relative', overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(196,77,28,0.4)',
          }}
        >
          {isOpen ? <XIcon size={18} color={CREAM} /> : <DIcon size={24} color={CREAM} />}
        </button>

        {/* Unread badge */}
        {hasUnread && !isOpen && (
          <div style={{
            position: 'absolute', top: -4, right: -4,
            width: 20, height: 20, borderRadius: '50%',
            background: INK,
            color: CREAM, fontSize: 10, fontWeight: 700,
            fontFamily: "'Space Mono', monospace",
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            border: `2px solid ${CREAM}`,
            animation: 'ddBadgePop 0.35s cubic-bezier(0.34,1.56,0.64,1) forwards',
          }}>1</div>
        )}
      </div>

      {/* ══ CHAT WINDOW ═══════════════════════════════════ */}
      {isOpen && (
        <div className="dd-window" style={{
          position: 'fixed',
          bottom: 92, right: 18,
          width: 380,
          maxWidth: 'calc(100vw - 28px)',
          height: 560,
          maxHeight: 'calc(100vh - 110px)',
          background: PAPER,
          borderRadius: 14,
          overflow: 'hidden',
          border: `1px solid ${LINE}`,
          display: 'flex', flexDirection: 'column',
          zIndex: 9998,
          boxShadow: '0 4px 16px rgba(26,26,22,0.08), 0 30px 60px rgba(26,26,22,0.22)',
        }}>

          {/* ── HEADER ── */}
          <div style={{
            padding: '14px 16px',
            background: CREAM_DEEP,
            display: 'flex', alignItems: 'center', gap: 12,
            borderBottom: `1px solid ${LINE}`,
            flexShrink: 0,
          }}>
            <BotAvatar />

            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{
                color: INK,
                fontFamily: "'Fraunces', serif",
                fontWeight: 500, fontSize: 15,
              }}>Delta Assistant</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 2 }}>
                <div style={{
                  width: 6, height: 6, borderRadius: '50%',
                  background: TERRACOTTA,
                  animation: 'ddBlink 3s ease-in-out infinite',
                }} />
                <span style={{
                  fontSize: 11, color: MUTED,
                  fontFamily: "'Space Mono', monospace",
                }}>Online · replies instantly</span>
              </div>
            </div>

            {/* AI badge */}
            <div style={{
              fontSize: 9, fontWeight: 700,
              color: TERRACOTTA_DEEP,
              fontFamily: "'Space Mono', monospace",
              letterSpacing: '0.08em',
              background: PAPER,
              border: `1px solid ${LINE}`,
              padding: '3px 7px', borderRadius: 3,
            }}>AI</div>

            {/* Close */}
            <button
              className="dd-close-btn"
              onClick={closeChat}
              title="Close chat"
              aria-label="Close chat"
              style={{
                width: 30, height: 30, borderRadius: 6,
                border: `1px solid ${LINE}`,
                background: PAPER,
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <XIcon size={13} />
            </button>
          </div>

          {/* ── MESSAGES AREA ── */}
          <div className="dd-scroll" style={{
            flex: 1, overflowY: 'auto',
            padding: '16px 14px',
            display: 'flex', flexDirection: 'column', gap: 14,
            background: CREAM,
            position: 'relative',
          }}>
            <ParticleCanvas />

            {messages.map((msg, i) => {
              const isUser = msg.role === 'user'
              const isError = !!msg.isError
              return (
                <div key={i} className="dd-msg" style={{
                  display: 'flex', flexDirection: 'column',
                  alignItems: isUser ? 'flex-end' : 'flex-start',
                  position: 'relative', zIndex: 1,
                }}>
                  <div style={{
                    fontSize: 9, fontWeight: 700,
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    marginBottom: 5,
                    fontFamily: "'Space Mono', monospace",
                    color: isUser ? TERRACOTTA_DEEP : (isError ? '#a13f1f' : MUTED),
                  }}>
                    {isUser ? 'You' : isError ? 'Delta · connection issue' : 'Delta'}
                  </div>

                  <div style={{
                    maxWidth: '82%',
                    padding: '10px 14px',
                    borderRadius: isUser ? '12px 3px 12px 12px' : '3px 12px 12px 12px',
                    background: isUser ? TERRACOTTA : (isError ? '#fdf0e8' : PAPER),
                    color: isUser ? CREAM : INK,
                    fontSize: 13.5, lineHeight: 1.6,
                    whiteSpace: 'pre-wrap',
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: isUser ? 500 : 400,
                    border: isUser ? 'none' : `1px solid ${isError ? '#e8b89a' : LINE}`,
                    borderStyle: isError ? 'dashed' : 'solid',
                  }}>
                    {msg.content}
                  </div>

                  {isError && (
                    <button
                      className="dd-retry"
                      onClick={() => sendMessage(msg.retryText)}
                      style={{
                        marginTop: 6,
                        display: 'inline-flex', alignItems: 'center', gap: 6,
                        border: `1px solid ${TERRACOTTA}`,
                        background: PAPER,
                        color: TERRACOTTA_DEEP,
                        fontSize: 11.5, fontWeight: 600,
                        padding: '5px 12px', borderRadius: 20,
                        cursor: 'pointer',
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      ↻ Retry
                    </button>
                  )}

                  <span style={{
                    fontSize: 9,
                    color: 'rgba(26,26,22,0.3)',
                    marginTop: 4,
                    fontFamily: "'Space Mono', monospace",
                  }}>{fmt(msg.time)}</span>
                </div>
              )
            })}

            {/* Typing indicator */}
            {isTyping && (
              <div className="dd-msg" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  fontSize: 9, fontWeight: 700, letterSpacing: '0.1em',
                  textTransform: 'uppercase', marginBottom: 5,
                  fontFamily: "'Space Mono', monospace",
                  color: MUTED,
                }}>Delta</div>
                <div style={{
                  padding: '10px 14px',
                  borderRadius: '3px 12px 12px 12px',
                  background: PAPER,
                  border: `1px solid ${LINE}`,
                  width: 'fit-content',
                }}>
                  <TypingDots />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* ── QUICK REPLIES ── */}
          {messages.length <= 2 && (
            <div style={{
              padding: '10px 14px 8px',
              display: 'flex', flexWrap: 'wrap', gap: 7,
              background: CREAM_DEEP,
              borderTop: `1px solid ${LINE}`,
              flexShrink: 0,
            }}>
              <div style={{
                width: '100%', fontSize: 9, fontWeight: 700,
                color: MUTED, letterSpacing: '0.1em',
                fontFamily: "'Space Mono', monospace",
                textTransform: 'uppercase', marginBottom: 2,
              }}>Quick start</div>
              {QUICK_REPLIES.map((item, i) => (
                <button
                  key={i}
                  className="dd-quick"
                  onClick={() => sendMessage(item)}
                  style={{
                    border: `1px solid ${LINE}`,
                    padding: '6px 12px',
                    borderRadius: 20, cursor: 'pointer',
                    background: PAPER,
                    color: INK,
                    fontSize: 11.5, fontWeight: 500,
                    animationDelay: `${i * 0.06}s`,
                    opacity: 0,
                  }}
                >{item}</button>
              ))}
            </div>
          )}

          {/* ── INPUT ROW ── */}
          <div style={{
            padding: '10px 12px',
            display: 'flex', gap: 9, alignItems: 'flex-end',
            background: CREAM_DEEP,
            borderTop: `1px solid ${LINE}`,
            flexShrink: 0,
          }}>
            <textarea
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything..."
              rows={1}
              className="dd-input"
              style={{
                flex: 1, resize: 'none',
                borderRadius: 8,
                border: `1px solid ${LINE}`,
                background: PAPER,
                padding: '10px 13px',
                color: INK, fontSize: 13.5, lineHeight: 1.5,
              }}
            />
            <button
              className="dd-send"
              onClick={() => sendMessage()}
              disabled={!input.trim() || isTyping}
              aria-label="Send message"
              style={{
                width: 42, height: 42, flexShrink: 0,
                borderRadius: 8, border: 'none', cursor: 'pointer',
                background: TERRACOTTA,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <SendIcon />
            </button>
          </div>

          {/* ── FOOTER ── */}
          <div style={{
            textAlign: 'center', padding: '6px 0 10px',
            background: CREAM_DEEP,
            flexShrink: 0,
          }}>
            <span style={{
              fontSize: 10, color: MUTED,
              fontFamily: "'Space Mono', monospace",
            }}>
              Powered by{' '}
              <span style={{ color: TERRACOTTA_DEEP, fontWeight: 700 }}>
                Delta Developers
              </span>
            </span>
          </div>

        </div>
      )}
    </>
  )
}