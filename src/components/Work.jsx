const SHOW_MASALA = true;

const JOBS = [
  {
    now: true,
    meta: '2026 — · Remote, Bangkok quarterly 🇹🇭',
    title: 'Marketing Consultant · SabaiHealth',
    desc: 'Making healthcare feel human — positioning, content-led growth, and trust as the only metric that matters. Bangkok visits every quarter.',
  },
  {
    meta: '2025 – 26 · Remote, Bengaluru for events 🇮🇳',
    title: 'Sr. Marketing Associate · LVX',
    desc: 'Brand launches, lead-gen engines and organic visibility — shoulder to shoulder with founders.',
  },
  {
    meta: '2021 – 23 · Remote, Mumbai in peak season 🇮🇳',
    title: 'Marketing Ops · Miko',
    desc: 'Sold robots to kids and logic to their parents. Intern → full-time in 18 months.',
  },
  {
    meta: '2023 – 24 · Edinburgh 🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    title: 'MSc · University of Edinburgh',
    desc: 'Business School by day, ResLife and a Greggs counter by night. Character-building, highly recommend.',
    scribble: 'what ma, ask me about the sausage rolls',
  },
];

export default function Work() {
  return (
    <div id="work" className="work-section">
      <div className="kicker">02 · The work</div>
      <div className="work-header">
        <h2 className="section-title">
          Strategy AND execution.
          <br />
          Always both.
        </h2>
        {SHOW_MASALA && (
          <div className="work-scribble">jeevan = brand building, basically</div>
        )}
      </div>
      <div className="work-grid">
        {JOBS.map((job, i) => (
          <div className="work-card" key={i}>
            {job.now && <div className="work-badge-now">NOW</div>}
            <div className="work-meta">{job.meta}</div>
            <div className="work-title">{job.title}</div>
            <p className="work-desc">{job.desc}</p>
            {job.scribble && SHOW_MASALA && (
              <div className="work-scribble-note">{job.scribble}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
