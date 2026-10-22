import { useEffect, useRef } from 'react';

const SHOW_MASALA = true;

const TESTIMONIALS = [
  {
    quote:
      'Khushi has an infectious attitude to work and is always ready to push forward, learn and pursue new ideas, concepts and products. She is a trusted resource, and I would recommend her to any new organisation.',
    initials: 'RN',
    color: 'peach',
    name: 'Rohit Nambiar',
    role: 'Co-Founder & CEO, SabaiHealth',
  },
  {
    quote:
      'Accountability and extreme ownership is part of Khushi\'s DNA. It does not matter if she is reporting to you or you are reporting to her, if anything slips, be prepared for the Pikachu to stare at you say "Areee!"',
    initials: 'DM',
    color: 'sage',
    name: 'Divyansh Meena',
    role: 'Manager (Sankalp) at Intellecap',
  },
  {
    quote:
      'Khushi has been an active contributor to our projects and a valued team player. She is very sincere and makes sure that every task assigned to her provides the best ROI. We recommend Khushi to any future employer — I am confident she will be a valued addition to your team.',
    initials: 'AS',
    color: 'butter',
    name: 'Ashish Shekhawat',
    role: 'Head of AI Products, CheQ',
  },
  {
    quote:
      'Pragmatic and diligent, Khushi was absolutely committed to the whole purpose of Speakeasy — enabling others to improve. Consistently asking for feedback and looking for opportunities to grow leaves me comfortable that Khushi will excel regardless of the next step in her career.',
    initials: 'SF',
    color: 'peach',
    name: 'Stuart Fenwick',
    role: 'Speakeasy, University of Edinburgh Business School',
  },
  {
    quote:
      "Khushi led by example and role-modelled what good looks like. She captivated the audience with a clear, creative and engaging presentation. It's easy to work with Khushi and I admire the way she makes things happen, while bringing others along with her.",
    initials: 'JM',
    color: 'sage',
    name: 'Jo McLaren',
    role: 'Speakeasy, University of Edinburgh Business School',
  },
];

export default function References() {
  const sectionRef = useRef(null);
  const wrapRef = useRef(null);
  const innerRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const dotRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const wrap = wrapRef.current;
    const inner = innerRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;
    let pinned = false;
    let distance = 0;
    let navH = 0;
    let frame = null;

    const setActive = (active) => {
      dotRefs.current.forEach((dot, i) => dot && dot.classList.toggle('is-active', i === active));
    };

    const update = () => {
      frame = null;
      if (!pinned) return;
      const range = Math.max(wrap.offsetHeight - inner.offsetHeight, 1);
      const progress = Math.min(Math.max((navH - wrap.getBoundingClientRect().top) / range, 0), 1);
      track.style.transform = `translateX(${-progress * distance}px)`;
      setActive(Math.round(progress * (TESTIMONIALS.length - 1)));
    };

    const measure = () => {
      navH = document.querySelector('.nav')?.offsetHeight || 0;
      section.style.setProperty('--nav-h', `${navH}px`);
      section.classList.remove('is-pinned');
      wrap.style.height = '';
      track.style.transform = '';

      // Only pin when the whole section fits on screen; otherwise fall back to swiping.
      pinned = inner.scrollHeight <= window.innerHeight - navH;
      if (pinned) {
        section.classList.add('is-pinned');
        distance = Math.max(track.scrollWidth - viewport.clientWidth, 0);
        wrap.style.height = `${inner.offsetHeight + distance}px`;
        update();
      }
    };

    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(update);
    };
    const onNativeScroll = () => {
      if (pinned) return;
      const card = track.querySelector('.reference-card');
      const step = card ? card.offsetWidth + 24 : 1;
      setActive(Math.round(viewport.scrollLeft / step));
    };

    measure();
    setActive(0);
    document.fonts?.ready.then(measure);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', measure);
    viewport.addEventListener('scroll', onNativeScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', measure);
      viewport.removeEventListener('scroll', onNativeScroll);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div id="references" className="references-section" ref={sectionRef}>
      <div className="references-pin-wrap" ref={wrapRef}>
        <div className="references-pin-inner" ref={innerRef}>
          <div className="kicker">03 · The receipts</div>
          <div className="work-header">
            <h2 className="section-title">Don't take my word for it.</h2>
            {SHOW_MASALA && (
              <div className="work-scribble">bosses ke words, promise</div>
            )}
          </div>
          <div className="references-viewport" ref={viewportRef}>
            <div className="references-track-h" ref={trackRef}>
              {TESTIMONIALS.map((t) => (
                <div className="reference-card" key={t.name}>
                  <div className="reference-quote-mark">&ldquo;</div>
                  <p className="reference-quote">{t.quote}</p>
                  <div className="reference-attribution">
                    <div className={`reference-avatar pill-${t.color}`}>{t.initials}</div>
                    <div>
                      <div className="reference-name">{t.name}</div>
                      <div className="reference-role">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="references-dots-h" aria-hidden="true">
            {TESTIMONIALS.map((t, i) => (
              <span className="references-dot" key={t.name} ref={(el) => (dotRefs.current[i] = el)} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
