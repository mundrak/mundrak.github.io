// Renders the fun site to HTML at build time and writes it into dist/fun/index.html.
import { readFileSync, writeFileSync, rmSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const dist = resolve('dist');
const ssrDir = resolve('dist-ssr');

const { render } = await import(pathToFileURL(resolve(ssrDir, 'entry-server.js')).href);
const appHtml = render();

const file = resolve(dist, 'fun', 'index.html');
const template = readFileSync(file, 'utf8');
const marker = '<div id="root"></div>';
if (!template.includes(marker)) {
  throw new Error('prerender: could not find the empty #root in dist/fun/index.html');
}
writeFileSync(file, template.replace(marker, `<div id="root">${appHtml}</div>`));
rmSync(ssrDir, { recursive: true, force: true });
console.log(`prerendered ${appHtml.length} characters into dist/fun/index.html`);
