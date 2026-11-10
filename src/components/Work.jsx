import SectionHead from './SectionHead';
import { useEffect, useRef } from 'react';
import useReveal from './useReveal';

const SHOW_MASALA = true;

const JOBS = [
  {
    when: 'May – Aug 2026',
    stamp: 'BKK',
    place: 'Bangkok, remote',
    title: 'Marketing Consultant · SabaiHealth',
    desc: 'Walked into marketing spread across freelancers and agencies, with nobody holding the thread. Pulled it into one system, then put it to work.',
    receipt: <><strong>3.7K → 36K+</strong> 7-day active users across five markets in three months, CAC under <strong>$0.44</strong></>,
  },
  {
    when: '2025 – 26',
    stamp: 'BLR',
    place: 'Bengaluru',
    title: 'Sr. Marketing Associate · LVX',
    desc: 'Strategy at 10am, execution by lunch. Helped turn LetsVenture into LVX, and learnt that brand, content and numbers are really one job.',
    receipt: <><strong>1,000+ investor leads</strong> at <strong>₹50</strong> each on LinkedIn Ads</>,
  },
  {
    when: '2023 – 24',
    stamp: 'EDI',
    place: 'Edinburgh',
    title: 'MSc · University of Edinburgh',
    desc: 'Business School by day, ResLife and a Greggs counter by night. 58 residents taught me people; the counter taught me brand loyalty.',
    receipt: <><strong>Distinction</strong> in dissertation, <strong>Edinburgh Award</strong></>,
    scribble: 'what ma, ask me about the sausage rolls',
  },
  {
    when: '2021 – 23',
    stamp: 'BOM',
    place: 'Mumbai',
    title: 'Marketing Ops · Miko',
    desc: 'Started out building learning content for a kids’ robot, then moved into CRM. Where the engineer in me found out marketing has data, problems and room to experiment.',
    receipt: <>Email open rates <strong>+20%</strong>, CTR <strong>+15%</strong> on Airship campaigns; analysed content of <strong>300+ apps</strong></>,
  },
];

function Stop({ job, index }) {
  const ref = useReveal(0.3);
  return (
    <div className="route-stop" ref={ref} style={{ '--tilt-t': `${index % 2 ? 0.5 : -0.5}deg` }}>
      <div className="route-stamp" style={{ '--tilt': `${index % 2 ? 7 : -8}deg` }}>
        <span>{job.stamp}</span>
      </div>
      <div className="ticket">
        <div className="ticket-main">
          <div className="work-title">{job.title}</div>
          <p className="work-desc">{job.desc}</p>
          {job.scribble && SHOW_MASALA && <div className="ticket-scribble">{job.scribble}</div>}
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
  );
}

function Route() {
  const routeRef = useRef(null);
  const endRef = useReveal(0.6);

  // The route line "travels" down as the visitor scrolls through the stops.
  useEffect(() => {
    const route = routeRef.current;
    let frame = null;
    const update = () => {
      frame = null;
      const rect = route.getBoundingClientRect();
      const anchor = window.innerHeight * 0.6;
      const progress = Math.min(Math.max((anchor - rect.top) / rect.height, 0), 1);
      route.style.setProperty('--progress', progress.toFixed(4));
    };
    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="route" ref={routeRef}>
      <div className="route-line" aria-hidden="true">
        <div className="route-line-fill" />
        <div className="route-plane">✈</div>
      </div>
      <div className="route-start">latest stop first ↓</div>
      {JOBS.map((job, i) => (
        <Stop job={job} index={i} key={job.stamp} />
      ))}
      <div className="route-end" ref={endRef}>
        next stop: yours? ✈
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <div id="work" className="work-section">
      <SectionHead
        num="02"
        label="The work"
        title={
          <>
            Strategy AND execution.
            <br />
            Always both.
          </>
        }
        scribble={SHOW_MASALA && 'jeevan = brand building, basically'}
      />
      <p className="work-intro">
        Four stops, one pattern: walk into something messy, figure out what needs to
        change, build the thing that works. The formal version lives in my{' '}
        <a href="/khushi-mundra-resume.pdf" target="_blank" rel="noreferrer" className="link-underline">
          résumé
        </a>
        .
      </p>

      <Route />

      <div className="pikachu-card" id="pikachu-story">
        <span className="tape" aria-hidden="true" />
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
