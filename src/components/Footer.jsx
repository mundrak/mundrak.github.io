import { useState } from 'react';
import useReveal from './useReveal';

const EMAIL = 'mundrakhushi22@gmail.com';

const SOCIALS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mundrakhushi/' },
  { label: 'Substack', href: 'https://khushimundra.substack.com/' },
  { label: 'Medium', href: 'https://medium.com/@mundrakhushi22' },
  { label: 'X (Twitter)', href: 'https://x.com/mundrakhushi' },
];

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const ref = useReveal(0.25);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard unavailable: the address is visible on the button anyway.
    }
  };

  return (
    <div className="footer">
      <div className="footer-inner" ref={ref}>
        <div className="footer-status">
          <span className="footer-status-dot" />
          open to new roles · Bengaluru
        </div>

        <h2 className="footer-title">
          <span>Coffee?</span> <span>My treat.</span>
          <svg className="footer-cup" viewBox="0 0 80 80" fill="none" strokeWidth="3.5" strokeLinecap="round" aria-hidden="true">
            <path d="M18 34 h38 v22 c0 8 -8 14 -19 14 c-11 0 -19 -6 -19 -14 Z" />
            <path d="M56 40 c10 -2 14 4 10 10 c-3 5 -8 5 -11 4" />
            <path d="M28 26 c-3 -4 3 -6 0 -10 M40 26 c-3 -4 3 -6 0 -10" style={{ animation: 'steam 2s ease-in-out infinite' }} />
          </svg>
        </h2>
        <p className="footer-lead">
          Recruiters, founders, editors, fellow overthinkers — my inbox is
          friendlier than most.
        </p>

        <div className="footer-actions">
          <div className="footer-email-group">
            <a href={`mailto:${EMAIL}`} className="footer-email">
              {EMAIL}
            </a>
            <button type="button" className="footer-copy" onClick={copyEmail} aria-live="polite">
              {copied ? 'copied ✓' : 'copy'}
            </button>
          </div>
          <a
            href="https://calendar.app.google/WiQAN96fniavPuM39"
            target="_blank"
            rel="noreferrer"
            className="footer-book"
          >
            book 15 mins →
          </a>
        </div>

        <div className="footer-social">
          {SOCIALS.map((s) => (
            <a href={s.href} target="_blank" rel="noreferrer" key={s.label}>
              {s.label} <span>↗</span>
            </a>
          ))}
          <a href="/khushi-mundra-resume.pdf" target="_blank" rel="noreferrer">
            Résumé <span>↓</span>
          </a>
        </div>

        <div className="footer-bottom">
          <span>Made with ☕ and one plot twist · Khushi Mundra</span>
          <button
            type="button"
            className="footer-top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            back to the top ↑
          </button>
        </div>
      </div>
    </div>
  );
}
