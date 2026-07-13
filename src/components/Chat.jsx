const BUBBLES = [
  { side: 'left', delay: 0.1, text: "So… you're an engineer or a marketer?" },
  {
    side: 'right',
    delay: 0.35,
    text: 'Yes. Engineering taught me how things work; marketing taught me why people care. I use both, daily.',
  },
  { side: 'left', delay: 0.6, text: 'How did that switch even happen?' },
  {
    side: 'right',
    delay: 0.85,
    text: 'Mid-B.Tech, I ran my first campaign and felt more alive than any code review ever made me. Followed that feeling from Chennai to Mumbai to Edinburgh to Bangkok.',
  },
  { side: 'left', delay: 1.1, text: "And when you're not working?" },
  {
    side: 'right',
    delay: 1.35,
    text: "Eating my way through a new city, third coffee in hand, reading the news like it's gossip. Then writing about all of it.",
  },
  { side: 'left', delay: 1.6, text: 'One thing you believe?' },
  {
    side: 'right',
    delay: 1.85,
    final: true,
    text: 'Zindagi mein haara wohi, jo lada nahi. You only lose if you don\'t fight. 🥊',
  },
];

export default function Chat() {
  return (
    <div id="chat" className="chat-section">
      <div className="chat-grid">
        <div className="chat-sticky">
          <div className="kicker">01 · The chat</div>
          <h2 className="section-title">The conversation, basically</h2>
          <p className="section-lead">
            Everything a first coffee with me covers, minus the part where I
            steal your fries.
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
              href={`${import.meta.env.BASE_URL}khushi-mundra-resume.pdf`}
              target="_blank"
              rel="noreferrer"
              className="resume-btn"
            >
              grab my resume ↓
            </a>
            <div className="resume-caption">the formal version of all this</div>
          </div>
        </div>
        <div className="bubbles">
          {BUBBLES.map((b, i) => (
            <div
              key={i}
              className={`bubble ${b.side}${b.final ? ' final' : ''}`}
              style={{ animationDelay: `${b.delay}s` }}
            >
              {b.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
