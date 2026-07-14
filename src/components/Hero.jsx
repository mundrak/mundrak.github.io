import heroPhoto from '../assets/photos/hero-photo.webp';

const SHOW_MASALA = true;
const WIGGLE = true;

export default function Hero() {
  return (
    <div id="top" className="hero">
      <div className="hero-grid">
        <div>
          {SHOW_MASALA && (
            <div className="hero-kicker">*sound of coffee being poured*</div>
          )}
          <h1>
            Areeee,
            <br />
            you found me.
          </h1>
          <p className="hero-lead">
            I'm Khushi — engineer by degree, marketer by heart, foodie by
            destiny. Currently making healthcare feel human at SabaiHealth,
            Bangkok. Pull up a chair, the coffee's on me.
          </p>
          <div className="hero-chips">
            <span
              className={`chip${WIGGLE ? ' wiggle' : ''}`}
              style={{ background: 'var(--peach)', transform: 'rotate(-1.5deg)' }}
            >
              insightful, allegedly
            </span>
            <span
              className={`chip${WIGGLE ? ' wiggle' : ''}`}
              style={{ background: 'var(--sage)', transform: 'rotate(1deg)' }}
            >
              outspoken, definitely
            </span>
            <span
              className={`chip${WIGGLE ? ' wiggle' : ''}`}
              style={{ background: 'var(--butter)', transform: 'rotate(-.5deg)' }}
            >
              loyal to friends &amp; street food
            </span>
          </div>
          <div className="hero-ctas">
            <a href="#chat" className="btn-dark">
              start the conversation ↓
            </a>
            <a href="#writing" className="link-underline">
              or read my writing
            </a>
          </div>
        </div>
        <div className="hero-photo-wrap">
          <div className="hero-photo-frame">
            <img
              className="hero-photo"
              src={heroPhoto}
              alt="Khushi mid-laugh"
              style={{ objectPosition: '50% 40%', transform: 'scale(1)' }}
            />
          </div>
          <div className="hero-badge">100% me</div>
          {SHOW_MASALA && <div className="hero-sticker">sahi hai ✨</div>}
        </div>
      </div>
    </div>
  );
}
