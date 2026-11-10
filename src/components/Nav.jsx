import { useEffect, useRef, useState } from 'react';

const LINKS = [
  { id: 'chat', num: '01', label: 'the chat' },
  { id: 'work', num: '02', label: 'the work' },
  { id: 'references', num: '03', label: 'the receipts' },
  { id: 'writing', num: '04', label: 'the writing' },
  { id: 'wandering', num: '05', label: 'the wandering' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);
  const navRef = useRef(null);
  const close = () => setOpen(false);

  const goTop = (e) => {
    e.preventDefault();
    close();
    document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' });
    history.replaceState(null, '', window.location.pathname + window.location.search);
  };

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

  // Track reading progress and which section is on screen.
  useEffect(() => {
    let frame = null;
    const update = () => {
      frame = null;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      navRef.current?.style.setProperty('--read', max > 0 ? (window.scrollY / max).toFixed(4) : '0');
      const line = window.innerHeight * 0.4;
      let current = null;
      for (const link of LINKS) {
        const el = document.getElementById(link.id);
        if (el && el.getBoundingClientRect().top <= line) current = link.id;
      }
      setActive(current);
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
    <div className="nav" ref={navRef}>
      <div className="nav-progress" aria-hidden="true" />
      <div className="nav-inner">
        <a href="#top" className="nav-logo" onClick={goTop}>
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
          {LINKS.map((link) => (
            <a
              href={`#${link.id}`}
              key={link.id}
              onClick={close}
              className={active === link.id ? 'is-active' : ''}
            >
              <span className="nav-num">{link.num}</span>
              {link.label}
            </a>
          ))}
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
