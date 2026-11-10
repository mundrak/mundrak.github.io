// Renders the app to HTML at build time and writes it into dist/index.html.
import { readFileSync, writeFileSync, rmSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const dist = resolve('dist');
const ssrDir = resolve('dist-ssr');

const { render } = await import(pathToFileURL(resolve(ssrDir, 'entry-server.js')).href);
const appHtml = render();

const file = resolve(dist, 'index.html');
const template = readFileSync(file, 'utf8');
const marker = '<div id="root"></div>';
if (!template.includes(marker)) {
  throw new Error('prerender: could not find the empty #root in dist/index.html');
}
writeFileSync(file, template.replace(marker, `<div id="root">${appHtml}</div>`));
rmSync(ssrDir, { recursive: true, force: true });
console.log(`prerendered ${appHtml.length} characters into dist/index.html`);
