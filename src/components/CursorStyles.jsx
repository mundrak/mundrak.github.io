import cursorDefault from '../assets/cursors/pikachu-cursor.png';

export default function CursorStyles() {
  return (
    <style>{`
      body, a, button, [onclick] { cursor: url(${cursorDefault}) 6 4, auto !important; }
    `}</style>
  );
}
