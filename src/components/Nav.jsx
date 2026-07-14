import { useEffect, useRef, useState } from 'react';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const handleOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    document.addEventListener('touchstart', handleOutside);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('touchstart', handleOutside);
    };
  }, [open]);

  return (
    <div className="nav" ref={navRef}>
      <div className="nav-inner">
        <a href="#top" className="nav-logo" onClick={close}>
          khushi<span>.</span>
        </a>
        <button
          className="nav-burger"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
        <div className={`nav-links${open ? ' open' : ''}`}>
          <a href="#chat" onClick={close}>the chat</a>
          <a href="#work" onClick={close}>the work</a>
          <a href="#references" onClick={close}>the receipts</a>
          <a href="#writing" onClick={close}>the writing</a>
          <a href="#wandering" onClick={close}>the wandering</a>
          <a
            href="mailto:mundrakhushi22@gmail.com"
            className="nav-cta"
            onClick={close}
          >
            say areee →
          </a>
        </div>
      </div>
    </div>
  );
}
