import { Fragment, useRef } from 'react';
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

  function scrollRail(dir) {
    railRef.current?.scrollBy({ left: dir * 600, behavior: 'smooth' });
  }

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

      <div className="wander-row">
        <span className="wander-label">lived —</span>
        {LIVED.map((city, i) => (
          <Fragment key={city}>
            <span className="pill-outline">{city}</span>
            {i < LIVED.length - 1 && <span className="wander-arrow">→</span>}
          </Fragment>
        ))}
        <span className="pill-final-wrap">
          <span className="wander-arrow">→</span>
          <span className="pill-final">working remote, from anywhere ☀️</span>
        </span>
      </div>

      <div className="wander-row wandered">
        <span className="wander-label">wandered —</span>
        {WANDERED.map((city) => (
          <span key={city.label} className={`pill-small ${city.color}`}>
            {city.label}
          </span>
        ))}
        {SHOW_MASALA && (
          <span className="wander-scribble">…the list is not done</span>
        )}
      </div>

      <div className="rail-wrap">
        <div className="rail" ref={railRef}>
          {PHOTOS.map((p, i) => (
            <div
              className="rail-item"
              key={i}
              style={{ transform: `rotate(${p.rotate}deg)` }}
            >
              <img
                className="rail-photo"
                src={p.src}
                alt={p.caption}
                style={{ objectPosition: p.objectPosition }}
              />
              <div className="rail-caption">{p.caption}</div>
            </div>
          ))}
        </div>
        <button
          className="rail-btn left"
          aria-label="Scroll left"
          onClick={() => scrollRail(-1)}
        >
          ←
        </button>
        <button
          className="rail-btn right"
          aria-label="Scroll right"
          onClick={() => scrollRail(1)}
        >
          →
        </button>
      </div>
      <div className="rail-footnote">scroll for the full photo dump →</div>
    </div>
  );
}
