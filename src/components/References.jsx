import { useRef } from 'react';

const SHOW_MASALA = true;

const TESTIMONIALS = [
  {
    quote:
      'Khushi has an infectious attitude to work and is always ready to push forward, learn and pursue new ideas, concepts and products. She is a trusted resource, and I would recommend her to any new organisation.',
    initials: 'RN',
    color: 'pill-butter',
    name: 'Rohit Nambiar',
    role: 'Co-Founder & CEO, SabaiHealth',
  },
  {
    quote:
      'Accountability and extreme ownership is part of Khushi\'s DNA. It does not matter if she is reporting to you or you are reporting to her, if anything slips, be prepared for the Pikachu to stare at you say "Areee!"',
    initials: 'DM',
    color: 'pill-sage',
    name: 'Divyansh Meena',
    role: 'Manager (Sankalp) at Intellecap',
  },
  {
    quote:
      'Khushi has been an active contributor to our projects and a valued team player. She is very sincere and makes sure that every task assigned to her provides the best ROI. We recommend Khushi to any future employer — I am confident she will be a valued addition to your team.',
    initials: 'AS',
    color: 'pill-sage',
    name: 'Ashish Shekhawat',
    role: 'Head of AI Products, CheQ',
  },
  {
    quote:
      'Pragmatic and diligent, Khushi was absolutely committed to the whole purpose of Speakeasy — enabling others to improve. Consistently asking for feedback and looking for opportunities to grow leaves me comfortable that Khushi will excel regardless of the next step in her career.',
    initials: 'SF',
    color: 'pill-peach',
    name: 'Stuart Fenwick',
    role: 'Speakeasy, University of Edinburgh Business School',
  },
  {
    quote:
      "Khushi led by example and role-modelled what good looks like. She captivated the audience with a clear, creative and engaging presentation. It's easy to work with Khushi and I admire the way she makes things happen, while bringing others along with her.",
    initials: 'JM',
    color: 'pill-butter',
    name: 'Jo McLaren',
    role: 'Speakeasy, University of Edinburgh Business School',
  },
];

export default function References() {
  const trackRef = useRef(null);

  const scrollByCard = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector('.reference-card');
    const amount = card ? card.offsetWidth + 22 : 340;
    track.scrollBy({ left: dir * amount, behavior: 'smooth' });
  };

  return (
    <div id="references" className="references-section">
      <div className="kicker">03 · The receipts</div>
      <div className="work-header">
        <h2 className="section-title">Don't take my word for it.</h2>
        {SHOW_MASALA && (
          <div className="work-scribble">bosses ke words, promise</div>
        )}
      </div>
      <div className="references-carousel">
        <button
          type="button"
          className="references-arrow references-arrow-prev"
          aria-label="Previous testimonial"
          onClick={() => scrollByCard(-1)}
        >
          ←
        </button>
        <div className="references-track" ref={trackRef}>
          {TESTIMONIALS.map((t) => (
            <div className="reference-card" key={t.name}>
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
        </div>
        <button
          type="button"
          className="references-arrow references-arrow-next"
          aria-label="Next testimonial"
          onClick={() => scrollByCard(1)}
        >
          →
        </button>
      </div>
    </div>
  );
}
