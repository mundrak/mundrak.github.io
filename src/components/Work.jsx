const SHOW_MASALA = true;

const JOBS = [
  {
    meta: 'May – Aug 2026 · Remote, Bangkok 🇹🇭',
    title: 'Marketing Consultant · SabaiHealth',
    desc: 'Walked into marketing spread across freelancers and agencies, with nobody holding the thread. Pulled it into one system, then put it to work.',
    receipt: <><strong>3.7K → 36K+</strong> 7-day active users across five markets in three months, CAC under <strong>$0.44</strong></>,
  },
  {
    meta: '2025 – 26 · Bengaluru 🇮🇳',
    title: 'Sr. Marketing Associate · LVX',
    desc: 'Strategy at 10am, execution by lunch. Helped turn LetsVenture into LVX, and learnt that brand, content and numbers are really one job.',
    receipt: <><strong>1,000+ investor leads</strong> at <strong>₹50</strong> each on LinkedIn Ads</>,
  },
  {
    meta: '2023 – 24 · Edinburgh 🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    title: 'MSc · University of Edinburgh',
    desc: 'Business School by day, ResLife and a Greggs counter by night. 58 residents taught me people; the counter taught me brand loyalty.',
    receipt: <><strong>Distinction</strong> in dissertation, <strong>Edinburgh Award</strong></>,
    scribble: 'what ma, ask me about the sausage rolls',
  },
  {
    meta: '2021 – 23 · Mumbai 🇮🇳',
    title: 'Marketing Ops · Miko',
    desc: 'Started out building learning content for a kids’ robot, then moved into CRM. Where the engineer in me found out marketing has data, problems and room to experiment.',
    receipt: <>Email open rates <strong>+20%</strong>, CTR <strong>+15%</strong> on Airship campaigns; content for <strong>300+ apps</strong></>,
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
      <p className="work-intro">
        Four stops, one pattern: walk into something messy, figure out what needs to
        change, build the thing that works. The formal version lives in my{' '}
        <a href="/khushi-mundra-resume.pdf" target="_blank" rel="noreferrer" className="link-underline">
          résumé
        </a>
        .
      </p>
      <div className="work-grid">
        {JOBS.map((job, i) => (
          <div className="work-card" key={i}>
            <div className="work-meta">{job.meta}</div>
            <div className="work-title">{job.title}</div>
            <p className="work-desc">{job.desc}</p>
            <div className="work-receipt">
              <span className="work-receipt-label">receipt</span>
              <span>{job.receipt}</span>
            </div>
            {job.scribble && SHOW_MASALA && (
              <div className="work-scribble-note">{job.scribble}</div>
            )}
          </div>
        ))}
      </div>

      <div className="pikachu-card">
        <div>
          <div className="pikachu-title">Noticed the Pikachu chasing your cursor? ⚡</div>
          <p className="pikachu-desc">
            There's a story behind it. It's a good one. But you'll have to ask me yourself.
          </p>
        </div>
        <div className="pikachu-cta-wrap">
          <a
            href="https://calendar.app.google/WiQAN96fniavPuM39"
            target="_blank"
            rel="noreferrer"
            className="pikachu-cta"
          >
            book a coffee, hear the story →
          </a>
          <div className="pikachu-caption">15 mins, my calendar's open</div>
        </div>
      </div>
    </div>
  );
}
