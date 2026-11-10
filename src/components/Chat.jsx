import { useEffect, useRef, useState } from 'react';

const GREETING = 'Areee, hi! Pick a question, I’ll do the talking. ☕';

const QUESTIONS = [
  {
    id: 'engineer',
    q: "So… you're an engineer or a marketer?",
    a: 'Yes. Engineering taught me how things work; marketing taught me why people care. I use both, daily.',
  },
  {
    id: 'switch',
    q: 'How did that switch even happen?',
    a: 'Mid-B.Tech, I ran my first campaign and felt more alive than any code review ever made me feel. Been chasing that feeling from Chennai to Mumbai to Edinburgh to Bengaluru.',
  },
  {
    id: 'offwork',
    q: "And when you're not working?",
    a: "Eating my way through a new city, third coffee in hand, reading the news like it's gossip. Then writing about all of it.",
  },
  {
    id: 'pikachu',
    q: "What's with the Pikachu?",
    a: "There's a story. It's a good one. But that one I only tell over coffee, so you'll have to book one. ⚡",
  },
  {
    id: 'belief',
    q: 'One thing you believe in?',
    a: "Zindagi mein haara wohi, jo lada nahi. You only lose if you don't fight. 🥊",
    final: true,
  },
];

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [asked, setAsked] = useState([]);
  const [typing, setTyping] = useState(false);
  const [started, setStarted] = useState(false);
  const sectionRef = useRef(null);
  const timers = useRef([]);

  const later = (fn, ms) => {
    timers.current.push(setTimeout(fn, prefersReducedMotion() ? 0 : ms));
  };

  // Say hello only once the visitor actually reaches the chat.
  useEffect(() => {
    const node = sectionRef.current;
    if (!node || started) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        setStarted(true);
        setTyping(true);
        later(() => {
          setTyping(false);
          setMessages([{ side: 'right', text: GREETING }]);
        }, 900);
      },
      { threshold: 0.35 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const ask = (item) => {
    if (typing || asked.includes(item.id)) return;
    setAsked((prev) => [...prev, item.id]);
    setMessages((prev) => [...prev, { side: 'left', text: item.q }]);
    later(() => setTyping(true), 250);
    later(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { side: 'right', text: item.a, final: item.final }]);
    }, 500 + Math.min(item.a.length * 9, 1300));
  };

  const remaining = QUESTIONS.filter((item) => !asked.includes(item.id));
  const ready = started && messages.length > 0;

  return (
    <div id="chat" className="chat-section" ref={sectionRef}>
      <div className="chat-grid">
        <div className="chat-sticky">
          <div className="kicker">01 · The chat</div>
          <h2 className="section-title">The conversation, basically</h2>
          <p className="section-lead">
            Everything a first coffee with me covers, minus the part where I
            finish your plate before you do.
          </p>
          <div className="chat-cup">
            <svg
              viewBox="0 0 80 80"
              style={{ width: 74, height: 74 }}
              fill="none"
              stroke="#33291f"
              strokeWidth="3"
              strokeLinecap="round"
            >
              <path d="M18 34 h38 v22 c0 8 -8 14 -19 14 c-11 0 -19 -6 -19 -14 Z" />
              <path d="M56 40 c10 -2 14 4 10 10 c-3 5 -8 5 -11 4" />
              <path
                d="M28 26 c-3 -4 3 -6 0 -10 M40 26 c-3 -4 3 -6 0 -10"
                style={{ animation: 'steam 2s ease-in-out infinite' }}
              />
            </svg>
          </div>
          <div className="resume-cta-wrap">
            <a
              href="/khushi-mundra-resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="resume-btn"
            >
              grab my resume ↓
            </a>
            <div className="resume-caption">the formal version of all this</div>
          </div>
        </div>

        <div className="chat-thread">
          <div className="bubbles" aria-live="polite">
            {messages.map((m, i) => (
              <div key={i} className={`bubble ${m.side}${m.final ? ' final' : ''}`}>
                {m.text}
              </div>
            ))}
            {typing && (
              <div className="bubble right typing" aria-label="Khushi is typing">
                <span />
                <span />
                <span />
              </div>
            )}
          </div>

          {ready && remaining.length > 0 && (
            <div className="chat-asks">
              <div className="chat-asks-label">
                {asked.length === 0 ? 'tap to ask →' : 'ask another →'}
              </div>
              <div className="chat-chips">
                {remaining.map((item) => (
                  <button
                    type="button"
                    key={item.id}
                    className="chat-chip"
                    onClick={() => ask(item)}
                    disabled={typing}
                  >
                    {item.q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {ready && remaining.length === 0 && !typing && (
            <div className="chat-done">
              <span className="chat-done-note">that’s the first coffee done</span>
              <a
                href="https://calendar.app.google/WiQAN96fniavPuM39"
                target="_blank"
                rel="noreferrer"
                className="link-underline"
              >
                book the second one →
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
