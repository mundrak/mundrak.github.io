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

const STICK_TOP = 90;
const STACK_GAP = 26;

export default function References() {
  const wrapperRefs = useRef([]);
  const cardRefs = useRef([]);
  const dotRefs = useRef([]);

  useEffect(() => {
    let frame = null;

    const update = () => {
      frame = null;
      let active = 0;

      wrapperRefs.current.forEach((wrapper, i) => {
        const card = cardRefs.current[i];
        if (!wrapper || !card) return;

        const stickyTop = STICK_TOP + i * STACK_GAP;
        const rect = wrapper.getBoundingClientRect();
        const cardHeight = card.offsetHeight;
        const range = Math.max(rect.height - cardHeight, 1);
        const progress = Math.min(Math.max((stickyTop - rect.top) / range, 0), 1);

        card.style.transform = `scale(${1 - progress * 0.06}) translateY(${-progress * 10}px)`;
        card.style.opacity = String(1 - progress * 0.25);
        card.style.filter = `brightness(${1 - progress * 0.08})`;

        if (rect.top <= stickyTop + 2) active = i;
      });

      dotRefs.current.forEach((dot, i) => {
        if (!dot) return;
        dot.classList.toggle('is-active', i === active);
      });
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
    <div id="references" className="references-section">
      <div className="kicker">03 · The receipts</div>
      <div className="work-header">
        <h2 className="section-title">Don't take my word for it.</h2>
        {SHOW_MASALA && (
          <div className="work-scribble">bosses ke words, promise</div>
        )}
      </div>

      <div className="references-stack-row">
        <div className="references-stack">
          {TESTIMONIALS.map((t, i) => (
            <div
              className="reference-stack-item"
              key={t.name}
              ref={(el) => (wrapperRefs.current[i] = el)}
            >
              <div
                className={`reference-card card-${t.color}`}
                style={{ top: `${STICK_TOP + i * STACK_GAP}px`, zIndex: i + 1 }}
                ref={(el) => (cardRefs.current[i] = el)}
              >
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
            </div>
          ))}
        </div>
        <div className="references-dots-rail">
          <div className="references-dots" aria-hidden="true">
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
