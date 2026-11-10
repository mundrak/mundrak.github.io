import { useState } from 'react';

const SHOW_MASALA = true;

const JOBS = [
  {
    meta: 'May – Aug 2026 · Remote, Bangkok 🇹🇭',
    when: 'May – Aug 2026',
    stamp: 'BKK',
    place: 'Bangkok, remote',
    title: 'Marketing Consultant · SabaiHealth',
    desc: 'Walked into marketing spread across freelancers and agencies, with nobody holding the thread. Pulled it into one system, then put it to work.',
    price: '3.7K → 36K+ users',
    receipt: <><strong>3.7K → 36K+</strong> 7-day active users across five markets in three months, CAC under <strong>$0.44</strong></>,
  },
  {
    meta: '2025 – 26 · Bengaluru 🇮🇳',
    when: '2025 – 26',
    stamp: 'BLR',
    place: 'Bengaluru',
    title: 'Sr. Marketing Associate · LVX',
    desc: 'Strategy at 10am, execution by lunch. Helped turn LetsVenture into LVX, and learnt that brand, content and numbers are really one job.',
    price: '1,000+ leads @ ₹50',
    receipt: <><strong>1,000+ investor leads</strong> at <strong>₹50</strong> each on LinkedIn Ads</>,
  },
  {
    meta: '2023 – 24 · Edinburgh 🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    when: '2023 – 24',
    stamp: 'EDI',
    place: 'Edinburgh',
    title: 'MSc · University of Edinburgh',
    desc: 'Business School by day, ResLife and a Greggs counter by night. 58 residents taught me people; the counter taught me brand loyalty.',
    price: 'Distinction',
    receipt: <><strong>Distinction</strong> in dissertation, <strong>Edinburgh Award</strong></>,
    scribble: 'what ma, ask me about the sausage rolls',
  },
  {
    meta: '2021 – 23 · Mumbai 🇮🇳',
    when: '2021 – 23',
    stamp: 'BOM',
    place: 'Mumbai',
    title: 'Marketing Ops · Miko',
    desc: 'Started out building learning content for a kids’ robot, then moved into CRM. Where the engineer in me found out marketing has data, problems and room to experiment.',
    price: '+20% opens · +15% CTR',
    receipt: <>Email open rates <strong>+20%</strong>, CTR <strong>+15%</strong> on Airship campaigns; analysed content of <strong>300+ apps</strong></>,
  },
];

const IS_PREVIEW = Boolean(import.meta.env.VITE_PREVIEW);
const VARIANTS = ['menu', 'route', 'cards'];

function MenuView() {
  return (
    <div className="menu-card">
      <div className="menu-inner">
        <div className="menu-top">
          <div className="menu-title">The Menu</div>
          <div className="menu-sub">house specials · brewed fresh since 2021</div>
        </div>
        {JOBS.map((job, i) => (
          <div className="menu-item" key={i}>
            <div className="menu-row">
              <span className="menu-name">{job.title}</span>
              <span className="menu-leader" aria-hidden="true" />
              <span className="menu-price">{job.price}</span>
            </div>
            <div className="menu-meta">{job.meta}</div>
            <p className="menu-desc">{job.desc}</p>
            <div className="menu-proof">
              <span className="work-receipt-label">proof</span>
              <span>{job.receipt}</span>
            </div>
            {job.scribble && SHOW_MASALA && <div className="menu-scribble">{job.scribble}</div>}
          </div>
        ))}
        <div className="menu-foot">all items served with strategy AND execution</div>
      </div>
    </div>
  );
}

function RouteView() {
  return (
    <div className="route">
      <div className="route-start">latest stop first ↓</div>
      {JOBS.map((job, i) => (
        <div className="route-stop" key={i}>
          <div className="route-stamp" style={{ transform: `rotate(${i % 2 ? 7 : -8}deg)` }}>
            <span>{job.stamp}</span>
          </div>
          <div className="ticket">
            <div className="ticket-main">
              <div className="work-title">{job.title}</div>
              <p className="work-desc">{job.desc}</p>
              {job.scribble && SHOW_MASALA && <div className="menu-scribble">{job.scribble}</div>}
            </div>
            <div className="ticket-stub">
              <div className="ticket-label">when</div>
              <div className="ticket-value">{job.when}</div>
              <div className="ticket-label">where</div>
              <div className="ticket-value">{job.place}</div>
              <div className="ticket-label">proof</div>
              <div className="ticket-proof">{job.receipt}</div>
            </div>
          </div>
        </div>
      ))}
      <div className="route-end">next stop: yours? ✈</div>
    </div>
  );
}

function CardsView() {
  return (
    <div className="work-grid">
      {JOBS.map((job, i) => (
        <div className="work-card" key={i}>
          <div className="work-meta">{job.meta}</div>
          <div className="work-title">{job.title}</div>
          <p className="work-desc">{job.desc}</p>
          <div className="work-receipt">
            <span className="work-receipt-label">proof</span>
            <span>{job.receipt}</span>
          </div>
          {job.scribble && SHOW_MASALA && <div className="work-scribble-note">{job.scribble}</div>}
        </div>
      ))}
    </div>
  );
}

export default function Work() {
  const [variant, setVariant] = useState('menu');
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

      {IS_PREVIEW && (
        <div className="preview-switch">
          <span>preview only · work layout:</span>
          {VARIANTS.map((v) => (
            <button
              type="button"
              key={v}
              className={v === variant ? 'is-on' : ''}
              onClick={() => setVariant(v)}
            >
              {v === 'cards' ? 'cards (current)' : v}
            </button>
          ))}
        </div>
      )}

      {variant === 'menu' && <MenuView />}
      {variant === 'route' && <RouteView />}
      {variant === 'cards' && <CardsView />}

      <div className="pikachu-card" id="pikachu-story">
        <div>
          <div className="pikachu-title">
            <span className="only-pointer">Noticed the Pikachu chasing your cursor? ⚡</span>
            <span className="only-touch">Noticed the Pikachu in the corner? ⚡</span>
          </div>
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
