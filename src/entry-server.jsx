import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.jsx';

// Used only at build time (scripts/prerender.mjs) to write the page's HTML
// into dist/index.html, so readers that don't run JavaScript still get the content.
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
