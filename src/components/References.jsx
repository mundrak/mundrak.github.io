const SHOW_MASALA = true;

const TESTIMONIALS = [
  {
    quote:
      'Khushi has been an active contributor to our projects and a valued team player. She is very sincere and makes sure that every task assigned to her provides the best ROI. We recommend Khushi to any future employer — I am confident she will be a valued addition to your team.',
    initials: 'AS',
    color: 'pill-sage',
    name: 'Ashish Singh',
    role: 'Co-Founder, iGenPod',
    rotate: 0.6,
  },
  {
    quote:
      'Pragmatic and diligent, Khushi was absolutely committed to the whole purpose of Speakeasy — enabling others to improve. Consistently asking for feedback and looking for opportunities to grow leaves me comfortable that Khushi will excel regardless of the next step in her career.',
    initials: 'SF',
    color: 'pill-peach',
    name: 'Stuart Fenwick',
    role: 'Speakeasy, University of Edinburgh Business School',
    rotate: -0.6,
  },
  {
    quote:
      "Khushi led by example and role-modelled what good looks like. She captivated the audience with a clear, creative and engaging presentation. It's easy to work with Khushi and I admire the way she makes things happen, while bringing others along with her.",
    initials: 'JM',
    color: 'pill-butter',
    name: 'Jo McLaren',
    role: 'Speakeasy, University of Edinburgh Business School',
    rotate: 0.5,
  },
];

export default function References() {
  return (
    <div id="references" className="references-section">
      <div className="kicker">03 · The receipts</div>
      <div className="work-header">
        <h2 className="section-title">Don't take my word for it.</h2>
        {SHOW_MASALA && (
          <div className="work-scribble">bosses ke words, promise</div>
        )}
      </div>
      <div className="references-grid">
        {TESTIMONIALS.map((t) => (
          <div
            className="reference-card"
            key={t.name}
            style={{ transform: `rotate(${t.rotate}deg)` }}
          >
            <div className="reference-quote-mark">&ldquo;</div>
            <p className="reference-quote">{t.quote}</p>
            <div className="reference-attribution">
              <div className={`reference-avatar ${t.color}`}>{t.initials}</div>
              <div>
                <div className="reference-name">{t.name}</div>
                <div className="reference-role">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
        <div className="reference-card" style={{ transform: 'rotate(-.5deg)' }}>
          <div className="reference-quote-mark">&ldquo;</div>
          <p className="reference-quote-pending">one more brewing… ☕</p>
          <div className="reference-attribution">
            <div className="reference-avatar pill-peach">?</div>
            <div>
              <div className="reference-name">Coming soon</div>
              <div className="reference-role">watch this space</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
