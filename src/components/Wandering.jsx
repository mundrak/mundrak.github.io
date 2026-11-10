import { useRef } from 'react';
import useReveal from './useReveal';
import wFood from '../assets/photos/w-food.webp';
import wCity from '../assets/photos/w-city.webp';
import wFriends from '../assets/photos/w-friends.webp';
import wCoffee from '../assets/photos/w-coffee.webp';
import wDublin from '../assets/photos/w-dublin.webp';
import wVienna from '../assets/photos/w-vienna.webp';
import wStockholm from '../assets/photos/w-stockholm.webp';
import wPrague from '../assets/photos/w-prague.webp';
import wBudapest from '../assets/photos/w-budapest.webp';
import wLondon from '../assets/photos/w-london.webp';

const SHOW_MASALA = true;

const LIVED = [
  'Surat — born & raised',
  'Chennai — B.Tech',
  'Mumbai',
  'Edinburgh — MSc',
  'Bengaluru',
];

const WANDERED = [
  { label: 'Bangkok', color: 'pill-peach' },
  { label: 'Dublin', color: 'pill-butter' },
  { label: 'Vienna', color: 'pill-sage' },
  { label: 'Stockholm', color: 'pill-peach' },
  { label: 'Prague', color: 'pill-butter' },
  { label: 'Budapest', color: 'pill-sage' },
  { label: 'London', color: 'pill-peach' },
];

const PHOTOS = [
  { src: wFood, rotate: -2, objectPosition: '50% 62.1%', caption: "At my Graduation Ceremony in Nov'24" },
  { src: wCity, rotate: 1.5, objectPosition: '50% 50%', caption: "MSc Welcome Week in Sept'23" },
  { src: wFriends, rotate: -1, objectPosition: '50% 50%', caption: 'Giving an example speech at Speakeasy' },
  { src: wCoffee, rotate: 2, objectPosition: '50% 50%', caption: 'Giving my final presentation for the Edinburgh Award by the Reslife team' },
  { src: wDublin, rotate: -1.5, objectPosition: '50% 50%', caption: 'At Global Alumni Day in May at the Business School' },
  { src: wVienna, rotate: 1, objectPosition: '50% 50%', caption: 'UEBS Alumni Meet in Dublin' },
  { src: wStockholm, rotate: -1, objectPosition: '50% 50%', caption: 'A visit to the Natwest office organised by UEBS' },
  { src: wPrague, rotate: 2, objectPosition: '50% 50%', caption: 'At the Business Innovation Summit by the Economist in March 2024, London' },
  { src: wBudapest, rotate: -2, objectPosition: '50% 15.5%', caption: 'Stockholm 🌉' },
  { src: wLondon, rotate: 1.5, objectPosition: '50% 50%', caption: 'Bangkok ☕' },
];

export default function Wandering() {
  const railRef = useRef(null);
  const trailRef = useReveal(0.4);
  const tagsRef = useReveal(0.4);
  const wallRef = useReveal(0.15);
  const drag = useRef({ down: false, startX: 0, startLeft: 0, moved: false });

  function scrollRail(dir) {
    railRef.current?.scrollBy({ left: dir * 600, behavior: 'smooth' });
  }

  // Mouse drag-to-scroll; touch devices already swipe natively.
  const onPointerDown = (e) => {
    if (e.pointerType !== 'mouse') return;
    drag.current = { down: true, startX: e.clientX, startLeft: railRef.current.scrollLeft, moved: false };
  };
  const onPointerMove = (e) => {
    const d = drag.current;
    if (!d.down) return;
    const dx = e.clientX - d.startX;
    if (Math.abs(dx) > 4 && !d.moved) {
      d.moved = true;
      railRef.current.classList.add('is-dragging');
    }
    if (d.moved) railRef.current.scrollLeft = d.startLeft - dx;
  };
  const endDrag = () => {
    drag.current.down = false;
    railRef.current?.classList.remove('is-dragging');
  };

  return (
    <div id="wandering" className="wander-section">
      <div className="kicker">05 · The wandering</div>
      <div className="work-header">
        <h2 className="wander-title">
          Lived in some cities. Wandered many more.
          <br />
          One growing list of cheap eats.
        </h2>
      </div>

      <div className="trail" ref={trailRef}>
        <div className="wander-label">lived</div>
        <div className="trail-track">
          <div className="trail-line" aria-hidden="true" />
          {LIVED.map((city, i) => {
            const [name, note] = city.split(' — ');
            return (
              <div className="trail-stop" key={city} style={{ '--i': i }}>
                <span className={`trail-pin${i === LIVED.length - 1 ? ' is-now' : ''}`} />
                <span className="trail-name">{name}</span>
                <span className="trail-note">{i === LIVED.length - 1 ? 'now' : note || '\u00a0'}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="tags" ref={tagsRef}>
        <div className="wander-label">wandered</div>
        <div className="tags-row">
          {WANDERED.map((city, i) => (
            <span
              key={city.label}
              className={`luggage-tag ${city.color}`}
              style={{ '--i': i, '--tilt': `${[-4, 3, -2, 5, -3, 2, -5][i % 7]}deg` }}
            >
              {city.label}
            </span>
          ))}
          {SHOW_MASALA && <span className="wander-scribble">The list is not done yet</span>}
        </div>
      </div>

      <div className="rail-wrap" ref={wallRef}>
        <div
          className="rail"
          ref={railRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
        >
          {PHOTOS.map((p, i) => (
            <figure className="polaroid" key={i} style={{ '--tilt': `${p.rotate * 1.6}deg`, '--i': i }}>
              <span className="polaroid-tape" aria-hidden="true" />
              <img
                className="polaroid-photo"
                src={p.src}
                alt={p.caption}
                draggable="false"
                style={{ objectPosition: p.objectPosition }}
              />
              <figcaption className="polaroid-caption">{p.caption}</figcaption>
            </figure>
          ))}
        </div>
        <button className="rail-btn left" aria-label="Scroll left" onClick={() => scrollRail(-1)}>
          ←
        </button>
        <button className="rail-btn right" aria-label="Scroll right" onClick={() => scrollRail(1)}>
          →
        </button>
      </div>
      <div className="rail-footnote">drag for the full photo dump →</div>
    </div>
  );
}
