import { useEffect, useRef, useState } from 'react';
import SectionHead from './SectionHead';
import useReveal from './useReveal';

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
    role: 'My manager at LVX · now Manager (Sankalp), Intellecap',
  },
  {
    quote:
      'Khushi has been an active contributor to our projects and a valued team player. She is very sincere and makes sure that every task assigned to her provides the best ROI. We recommend Khushi to any future employer — I am confident she will be a valued addition to your team.',
    initials: 'AS',
    color: 'butter',
    name: 'Ashish Shekhawat',
    role: 'My first internship, 2020 · now Head of AI Products, CheQ',
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
  const viewportRef = useRef(null);
  const [active, setActive] = useState(0);
  const trackRef = useReveal(0.2);
  const drag = useRef({ down: false, startX: 0, startLeft: 0, moved: false });

  const step = () => {
    const card = viewportRef.current?.querySelector('.receipt-wrap');
    return card ? card.offsetWidth + 28 : 1;
  };

  useEffect(() => {
    const viewport = viewportRef.current;
    const onScroll = () => {
      const max = viewport.scrollWidth - viewport.clientWidth;
      const atEnd = max > 0 && viewport.scrollLeft >= max - 4;
      setActive(atEnd ? TESTIMONIALS.length - 1 : Math.round(viewport.scrollLeft / step()));
    };
    viewport.addEventListener('scroll', onScroll, { passive: true });
    return () => viewport.removeEventListener('scroll', onScroll);
  }, []);

  const go = (dir) => viewportRef.current?.scrollBy({ left: dir * step(), behavior: 'smooth' });

  // Mouse drag-to-scroll; touch devices already swipe natively.
  const onPointerDown = (e) => {
    if (e.pointerType !== 'mouse') return;
    drag.current = { down: true, startX: e.clientX, startLeft: viewportRef.current.scrollLeft, moved: false };
  };
  const onPointerMove = (e) => {
    const d = drag.current;
    if (!d.down) return;
    const dx = e.clientX - d.startX;
    if (Math.abs(dx) > 4 && !d.moved) {
      d.moved = true;
      viewportRef.current.classList.add('is-dragging');
    }
    if (d.moved) viewportRef.current.scrollLeft = d.startLeft - dx;
  };
  const endDrag = () => {
    drag.current.down = false;
    viewportRef.current?.classList.remove('is-dragging');
  };

  return (
    <div id="references" className="references-section">
      <SectionHead
        num="03"
        label="The receipts"
        title="Don't take my word for it."
        scribble={SHOW_MASALA && 'bosses ke words, promise'}
      />
      <div
        className="references-viewport"
        ref={viewportRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
      >
        <div className="references-track-h" ref={trackRef}>
          {TESTIMONIALS.map((t, i) => (
            <div className="receipt-wrap" key={t.name} style={{ '--i': i }}>
              <div className="receipt">
                <div className="receipt-head">
                  <span>Coffee par Charcha</span>
                  <span>
                    No. {String(i + 1).padStart(2, '0')}/{String(TESTIMONIALS.length).padStart(2, '0')}
                  </span>
                </div>
                <div className="receipt-rule" />
                <div className="receipt-from">
                  <div className={`reference-avatar pill-${t.color}`}>{t.initials}</div>
                  <div>
                    <div className="receipt-label">billed by</div>
                    <div className="reference-name">{t.name}</div>
                    <div className="reference-role">{t.role}</div>
                  </div>
                </div>
                <div className="receipt-rule" />
                <p className="reference-quote">&ldquo;{t.quote}&rdquo;</p>
                <div className="receipt-foot">
                  <div className="receipt-rule" />
                  <div className="receipt-barcode" aria-hidden="true" />
                  <div className="receipt-thanks">thank you · visit again</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="references-controls">
        <button type="button" className="receipt-btn" onClick={() => go(-1)} aria-label="Previous receipt">
          ←
        </button>
        <div className="references-dots-h" aria-hidden="true">
          {TESTIMONIALS.map((t, i) => (
            <span className={`references-dot${i === active ? ' is-active' : ''}`} key={t.name} />
          ))}
        </div>
        <button type="button" className="receipt-btn" onClick={() => go(1)} aria-label="Next receipt">
          →
        </button>
      </div>
    </div>
  );
}
