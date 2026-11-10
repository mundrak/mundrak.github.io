import SectionHead from './SectionHead';
import useReveal from './useReveal';

const LEAD = {
  title: 'The Year That Chose Me',
  deck: 'A personal journey of growth, belonging and transformation at the University of Edinburgh.',
  date: 'Nov 2025',
  href: 'https://khushimundra.substack.com/p/the-year-that-chose-me',
};
const SECOND = {
  title: 'Interviews Are Harder Than You Think',
  deck: 'Insights from the other side of the interview table.',
  date: 'Oct 2025',
  href: 'https://khushimundra.substack.com/p/interviews-are-harder-than-you-think',
};
const ARCHIVE = [
  {
    title: 'The Struggles of Teachers During Online Education',
    deck: 'Virtual teaching during Covid, from teachers across the globe.',
    date: 'Jul 2020',
    href: 'https://medium.com/srmkzilla/the-struggles-of-teachers-during-online-education-772002d74bbb',
  },
  {
    title: 'Hope Amidst Chaos',
    deck: 'On India, freedom and the stroke of the midnight hour.',
    date: 'Feb 2020',
    href: 'https://medium.com/srmkzilla/hope-amidst-chaos-bdc05495d0e7',
  },
];

function Story({ item, source, className = '' }) {
  return (
    <a className={`paper-story ${className}`} href={item.href} target="_blank" rel="noreferrer">
      <div className="paper-tag">
        {source} · {item.date}
      </div>
      <h3 className="paper-headline">
        <span>{item.title}</span>
      </h3>
      <p className="paper-deck">{item.deck}</p>
      <div className="paper-more">read it →</div>
    </a>
  );
}

export default function Writing() {
  const paperRef = useReveal(0.15);
  return (
    <div id="writing" className="writing-section">
      <div className="writing-inner">
        <SectionHead
          num="04"
          label="The writing"
          title="Learn. De‑learn. Repeat."
          lead="The main event. I write the way I talk — honest, informed, a little outspoken — about marketing, consistency, and starting from scratch."
        />

        <div className="paper" ref={paperRef}>
          <div className="paper-masthead">
            <div className="paper-name">Notes in Progress</div>
            <div className="paper-dateline">
              <span>Bengaluru edition</span>
              <span>Est. 2020</span>
              <span>Price: one coffee</span>
            </div>
          </div>

          <div className="paper-grid">
            <div className="paper-main">
              <div className="paper-stamp">latest</div>
              <Story item={LEAD} source="Substack" className="is-lead" />
              <Story item={SECOND} source="Substack" />
            </div>
            <div className="paper-side">
              <div className="paper-side-title">From the archives</div>
              {ARCHIVE.map((item) => (
                <Story item={item} source="Medium" className="is-small" key={item.href} />
              ))}
            </div>
          </div>

          <a
            className="paper-longread"
            href="https://drive.google.com/file/d/10RYAqxsU8YqkmfiDBU6UftQXoTi3b7mN/view"
            target="_blank"
            rel="noreferrer"
          >
            <span className="paper-tag">The long read · MSc dissertation</span>
            <span className="paper-longread-title">
              Housing crisis × project management — Vienna vs Edinburgh
            </span>
            <span className="paper-more">open →</span>
          </a>

          <div className="paper-subscribe">
            <span>Home delivery available.</span>
            <a
              href="https://khushimundra.substack.com/"
              target="_blank"
              rel="noreferrer"
              className="writing-cta"
            >
              get the next essay in your inbox
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
