import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_D-apUKse.mjs';
import { manifest } from './manifest_DUmOCmwX.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/_actions/_---path_.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/blog.astro.mjs');
const _page4 = () => import('./pages/blog/_---slug_.astro.mjs');
const _page5 = () => import('./pages/contact.astro.mjs');
const _page6 = () => import('./pages/index.bkup.astro.mjs');
const _page7 = () => import('./pages/portfolio.astro.mjs');
const _page8 = () => import('./pages/portfolio/_---slug_.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.7.5_@types+node@24.3.0_jiti@2.4.2_lightningcss@1.29.2_rollup@4.40.0_typescript@5.8.3_yaml@2.8.1/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/.pnpm/astro@5.7.5_@types+node@24.3.0_jiti@2.4.2_lightningcss@1.29.2_rollup@4.40.0_typescript@5.8.3_yaml@2.8.1/node_modules/astro/dist/actions/runtime/route.js", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/blog/index.astro", _page3],
    ["src/pages/blog/[...slug].astro", _page4],
    ["src/pages/contact.astro", _page5],
    ["src/pages/index.bkup.astro", _page6],
    ["src/pages/portfolio/index.astro", _page7],
    ["src/pages/portfolio/[...slug].astro", _page8],
    ["src/pages/index.astro", _page9]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_astro-internal_actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "e3981324-7e30-4202-9ba8-f64b2b466dca",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
