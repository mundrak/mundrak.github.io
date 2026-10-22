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

const STICK_TOP = 96;

export default function References() {
  const pinWrapRef = useRef(null);
  const pinInnerRef = useRef(null);
  const trackRef = useRef(null);
  const dotRefs = useRef([]);

  useEffect(() => {
    let frame = null;
    let scrollDistance = 0;

    const isPinned = () => window.matchMedia('(min-width: 761px)').matches;

    const measure = () => {
      const track = trackRef.current;
      const inner = pinInnerRef.current;
      const wrap = pinWrapRef.current;
      if (!track || !inner || !wrap) return;

      if (!isPinned()) {
        wrap.style.height = '';
        return;
      }

      scrollDistance = Math.max(track.scrollWidth - inner.offsetWidth, 0);
      wrap.style.height = `${scrollDistance + inner.offsetHeight}px`;
    };

    const update = () => {
      frame = null;
      const wrap = pinWrapRef.current;
      const track = trackRef.current;
      if (!wrap || !track || !isPinned()) return;

      const inner = pinInnerRef.current;
      const range = Math.max(wrap.offsetHeight - inner.offsetHeight, 1);
      const rect = wrap.getBoundingClientRect();
      const progress = Math.min(Math.max((STICK_TOP - rect.top) / range, 0), 1);

      track.style.transform = `translateX(${-progress * scrollDistance}px)`;

      const active = Math.min(
        TESTIMONIALS.length - 1,
        Math.round(progress * (TESTIMONIALS.length - 1))
      );
      dotRefs.current.forEach((dot, i) => {
        if (dot) dot.classList.toggle('is-active', i === active);
      });
    };

    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(update);
    };
    const onResize = () => {
      measure();
      update();
    };

    measure();
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div id="references" className="references-section">
      <div className="kicker">03 · The receipts</div>
      <div className="work-header">
        <h2 className="section-title">Don't take my word for it.</h2>
        {SHOW_MASALA && (
          <div className="work-scribble">bosses ke words, promise</div>
        )}
      </div>

      <div className="references-pin-wrap" ref={pinWrapRef}>
        <div className="references-pin-inner" ref={pinInnerRef}>
          <div className="references-track-h" ref={trackRef}>
            {TESTIMONIALS.map((t, i) => (
              <div className="reference-card" key={t.name}>
                <div className="reference-stack-index">{String(i + 1).padStart(2, '0')}</div>
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
          <div className="references-dots-h" aria-hidden="true">
            {TESTIMONIALS.map((t, i) => (
              <span
                className="references-dot"
                key={t.name}
                ref={(el) => (dotRefs.current[i] = el)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
