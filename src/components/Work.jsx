import { Fragment } from 'react';

const SHOW_MASALA = true;

const JOBS = [
  {
    now: true,
    meta: '2026 — · Remote, Bangkok quarterly 🇹🇭',
    title: 'Marketing Consultant · SabaiHealth',
    desc: 'Setting up marketing from scratch — the whole engine, zero to one.',
    bullets: [
      <><strong>Branding</strong> — identity, voice &amp; positioning built from the ground up</>,
      <><strong>Social media</strong> — channels, content strategy &amp; calendar from day one</>,
      <><strong>Meta ads</strong> — paid acquisition set up &amp; scaled end-to-end</>,
      <><strong>Influencer marketing</strong> — sourcing, partnerships &amp; campaign management</>,
    ],
  },
  {
    meta: '2025 – 26 · Remote, Bengaluru for events 🇮🇳',
    title: 'Sr. Marketing Associate · LVX',
    desc: 'Brand launches and lead-gen engines — shoulder to shoulder with founders.',
    bullets: [
      <>Led the <strong>LetsVenture → LVX rebrand</strong> + brand identity for PhotonX, LVXQ &amp; PitchRoom</>,
      <><strong>~480% lead growth</strong> via end-to-end email campaigns; <strong>1,000+ investor leads</strong> at ₹50 CPL on LinkedIn Ads</>,
      <>Founder's brand: Substack subscribers <strong>+50%</strong>, content views <strong>~+1100%</strong></>,
      <>Domain authority <strong>+25%</strong> through SEO; Instagram views <strong>+200%</strong></>,
    ],
  },
  {
    meta: '2023 – 24 · Edinburgh 🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    title: 'MSc · University of Edinburgh',
    desc: 'Business School by day, ResLife and a Greggs counter by night. Character-building, highly recommend.',
    bullets: [
      <>MSc Management with <strong>distinction</strong> in dissertation</>,
      <>Resident Assistant — <strong>36 engagement programs</strong>, participation <strong>+20%</strong>, 58 residents</>,
      <><strong>Global Employability Award</strong> + <strong>Edinburgh Award</strong></>,
    ],
    scribble: 'what ma, ask me about the sausage rolls',
  },
  {
    meta: '2021 – 23 · Remote, Mumbai in peak season 🇮🇳',
    title: 'Marketing Ops · Miko',
    desc: 'Sold robots to kids and logic to their parents. Intern → full-time in 18 months.',
    bullets: [
      <>Multi-channel CRM campaigns (Airship) — email open rates <strong>+20%</strong>, CTR <strong>+15%</strong></>,
      <>Mixpanel-driven targeting &amp; messaging optimisation</>,
      <>Curated &amp; onboarded content for <strong>300+ apps</strong> on the Miko robot</>,
    ],
  },
];

const STACK = [
  { label: 'CRM', tools: ['Zoho', 'Airship', 'Mailchimp', 'HubSpot'] },
  { label: 'Ads', tools: ['Meta Ads', 'LinkedIn Ads'] },
  { label: 'Design', tools: ['Figma', 'Canva'] },
  { label: 'Analytics', tools: ['Mixpanel', 'Google Analytics', 'Google Search Console'] },
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
            <div className="work-bullets">
              {job.bullets.map((b, bi) => (
                <div className="work-bullet" key={bi}>
                  <span className="work-bullet-arrow">→</span>
                  <span>{b}</span>
                </div>
              ))}
            </div>
            {job.scribble && SHOW_MASALA && (
              <div className="work-scribble-note">{job.scribble}</div>
            )}
          </div>
        ))}
      </div>

      <div className="toolbox-card">
        <div className="toolbox-title">The toolbox 🛠</div>
        <div className="toolbox-grid">
          {STACK.map((row) => (
            <Fragment key={row.label}>
              <div className="toolbox-label">{row.label}</div>
              <div className="toolbox-tools">
                {row.tools.map((tool) => (
                  <span className="toolbox-tool" key={tool}>
                    {tool}
                  </span>
                ))}
              </div>
            </Fragment>
          ))}
        </div>
        <div className="toolbox-scribble">the stack behind the stories</div>
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
