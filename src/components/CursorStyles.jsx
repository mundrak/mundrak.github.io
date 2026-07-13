import cursorDefault from '../assets/cursors/pikachu-cursor.png';
import cursorHover from '../assets/cursors/pikachu-cursor-hover.png';

export default function CursorStyles() {
  return (
    <style>{`
      body { cursor: url(${cursorDefault}) 6 4, auto; }
      a, button, [onclick] { cursor: url(${cursorHover}) 7 6, pointer !important; }
    `}</style>
  );
}
