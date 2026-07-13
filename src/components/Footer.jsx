const SHOW_MASALA = true;

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-inner">
        {SHOW_MASALA && (
          <div className="footer-scribble">
            sahi hai, chalo baat karte hain ✨
          </div>
        )}
        <h2 className="footer-title">Coffee? My treat.</h2>
        <p className="footer-lead">
          Recruiters, founders, editors, fellow overthinkers — my inbox is
          friendlier than most.
        </p>
        <a href="mailto:mundrakhushi22@gmail.com" className="footer-email">
          mundrakhushi22@gmail.com
        </a>
        <div className="footer-social">
          <a
            href="https://www.linkedin.com/in/mundrakhushi/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://khushimundra.substack.com/"
            target="_blank"
            rel="noreferrer"
          >
            Substack
          </a>
          <a
            href="https://medium.com/@mundrakhushi22"
            target="_blank"
            rel="noreferrer"
          >
            Medium
          </a>
          <a
            href="https://x.com/mundrakhushi"
            target="_blank"
            rel="noreferrer"
          >
            X (Twitter)
          </a>
        </div>
        <div className="footer-fine">
          Made with ☕ and one plot twist · Khushi Mundra
        </div>
      </div>
    </div>
  );
}
