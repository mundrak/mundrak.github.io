import { useEffect, useRef, useState } from 'react';
import sprite from '../assets/cursors/pikachu-cursor.png';

// Desktop: a little buddy that trails the pointer with a lag.
// Touch: sits in the corner and hops when the page scrolls.
// Reduced motion: falls back to the original static cursor.
export default function PikachuBuddy() {
  const ref = useRef(null);
  const [mode, setMode] = useState(null);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    setMode(reduce ? (fine ? 'static' : 'none') : fine ? 'follow' : 'corner');
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    if (mode === 'follow') {
      let tx = -100, ty = -100, x = -100, y = -100, facing = 1, frame = null, seen = false;
      const onMove = (e) => {
        tx = e.clientX + 18;
        ty = e.clientY + 20;
        if (!seen) {
          seen = true;
          x = tx;
          y = ty;
          el.classList.add('is-visible');
        }
      };
      const tick = () => {
        const dx = tx - x;
        const dy = ty - y;
        x += dx * 0.12;
        y += dy * 0.12;
        if (Math.abs(dx) > 2) facing = dx > 0 ? -1 : 1;
        const running = Math.hypot(dx, dy) > 6;
        el.classList.toggle('is-running', running);
        el.style.transform = `translate3d(${x}px, ${y}px, 0) scaleX(${facing})`;
        frame = requestAnimationFrame(tick);
      };
      const onLeave = () => el.classList.remove('is-visible');
      const onEnter = () => seen && el.classList.add('is-visible');
      window.addEventListener('pointermove', onMove, { passive: true });
      document.documentElement.addEventListener('mouseleave', onLeave);
      document.documentElement.addEventListener('mouseenter', onEnter);
      frame = requestAnimationFrame(tick);
      return () => {
        window.removeEventListener('pointermove', onMove);
        document.documentElement.removeEventListener('mouseleave', onLeave);
        document.documentElement.removeEventListener('mouseenter', onEnter);
        cancelAnimationFrame(frame);
      };
    }

    if (mode === 'corner') {
      let timer = null;
      const onScroll = () => {
        el.classList.add('is-running');
        clearTimeout(timer);
        timer = setTimeout(() => el.classList.remove('is-running'), 220);
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => {
        window.removeEventListener('scroll', onScroll);
        clearTimeout(timer);
      };
    }
    return undefined;
  }, [mode]);

  if (mode === 'static') {
    return <style>{`body, a, button { cursor: url(${sprite}) 6 4, auto; }`}</style>;
  }
  if (mode === 'follow') {
    return (
      <div className="buddy buddy-follow" ref={ref} aria-hidden="true">
        <img src={sprite} alt="" />
      </div>
    );
  }
  if (mode === 'corner') {
    return (
      <button
        type="button"
        className="buddy buddy-corner"
        ref={ref}
        aria-label="What's with the Pikachu?"
        onClick={() =>
          document.getElementById('pikachu-story')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
      >
        <img src={sprite} alt="" />
      </button>
    );
  }
  return null;
}
