import { c as createComponent, b as createAstro, d as addAttribute, f as renderScript, a as renderTemplate, g as defineScriptVars, u as unescapeHTML, e as renderComponent, h as renderHead, r as renderSlot } from './astro/server_nJrU_vTu.mjs';
/* empty css                         */
import { c as $$Font } from './_astro_assets_LlxUGYAR.mjs';
import 'clsx';

const $$Astro$2 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/home/inarty/Portfolio/astro/Raghvendra712.github.io/node_modules/.pnpm/astro@5.7.5_@types+node@24.3.0_jiti@2.4.2_lightningcss@1.29.2_rollup@4.40.0_typescript@5.8.3_yaml@2.8.1/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/inarty/Portfolio/astro/Raghvendra712.github.io/node_modules/.pnpm/astro@5.7.5_@types+node@24.3.0_jiti@2.4.2_lightningcss@1.29.2_rollup@4.40.0_typescript@5.8.3_yaml@2.8.1/node_modules/astro/components/ClientRouter.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$LoadingIndicator = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LoadingIndicator;
  const {
    color,
    height = "2px",
    class: className = "astro-loading-indicator",
    animationDuration = 300,
    threshold: defaultThreshold = 200
  } = Astro2.props;
  const threshold = defaultThreshold === false ? 0 : defaultThreshold;
  const styles = `.${className} {
  pointer-events: none;
  background-color: ${color};
  position: fixed;
  z-index: 1031;
  top: 0;
  left: 0;
  width: 100%;
  height: ${height};
  transition: transform ${animationDuration}ms ease-out, opacity ${animationDuration / 2}ms ${animationDuration / 2}ms ease-in;
	transform: translate3d(0, 0, 0) scaleX(var(--progress, 0));
  transform-origin: 0;
}

[dir="rtl"] .${className} {
  transform-origin: 100% 0;
}
`;
  return renderTemplate(_a || (_a = __template(["<style>", "</style><script>(function(){", `
(() => {
  let progress = 0.25
  let opacity = 0
  /** @type {number | undefined} */
  let trickleInterval = undefined
  /** @type {number | undefined} */
  let thresholdTimeout = undefined;

  const element = document.createElement("div")
  element.classList.add(className)
  element.ariaHidden = "true"

  /** @param {typeof progress} _progress */
  const setProgress = (_progress) => {
    progress = _progress
    element.style.setProperty('--progress', String(progress))
  }

  /** @param {typeof opacity} _opacity */
  const setOpacity = (_opacity) => {
    opacity = _opacity
    element.style.setProperty('opacity', String(opacity))
  }

  setOpacity(opacity)

  document.addEventListener("DOMContentLoaded", () => {
    document.body.prepend(element)
  })

  document.addEventListener("astro:before-preparation", () => {
    thresholdTimeout = setTimeout(() => {
      setOpacity(1)
      trickleInterval = window.setInterval(() => {
        setProgress(progress + Math.random() * 0.03)
      }, animationDuration)
    }, threshold)
  })

  document.addEventListener("astro:before-swap", (ev) => {
    if (!thresholdTimeout) {
      return
    }
    window.clearTimeout(thresholdTimeout)

    ev.newDocument.body.prepend(element)
    window.clearInterval(trickleInterval)
    trickleInterval = undefined

    setProgress(1)
    window.setTimeout(() => {
      setOpacity(0)
    }, animationDuration / 2)

    window.setTimeout(() => {
      setProgress(0.25)
    }, animationDuration * 2)
  })
})()
})();<\/script>`])), unescapeHTML(styles), defineScriptVars({ className, animationDuration, threshold }));
}, "/home/inarty/Portfolio/astro/Raghvendra712.github.io/node_modules/.pnpm/astro-loading-indicator@0.7.0_astro@5.7.5_@types+node@24.3.0_jiti@2.4.2_lightningcss@1._0dcd5dd5b897ca4217fe97bae8a65f25/node_modules/astro-loading-indicator/src/LoadingIndicator.astro", void 0);

const $$Astro = createAstro();
const $$RootLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RootLayout;
  const { title, description } = Astro2.props;
  const defaultTitle = "Name";
  const defaultDescription = "Short Description ";
  return renderTemplate`<html lang="en" data-astro-cid-mdysn4oi> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title ?? defaultTitle}</title><meta name="description"${addAttribute(description ?? defaultDescription, "content")}><meta property="og:url" content="https://nikola.fluidinterfaces.com/"><meta property="og:type" content="website"><meta property="og:title"${addAttribute(defaultTitle, "content")}><meta property="og:description"${addAttribute(defaultDescription, "content")}><meta property="og:image" content="/social-image.jpg"><!-- Twitter Meta Tags --><meta name="twitter:card" content="summary_large_image"><meta property="twitter:domain" content="nikola.fluidinterfaces.com"><meta property="twitter:url" content="https://nikola.fluidinterfaces.com/"><meta name="twitter:title"${addAttribute(defaultTitle, "content")}><meta name="twitter:description"${addAttribute(defaultDescription, "content")}><meta name="twitter:image" content="/social-image.jpg">${renderComponent($$result, "Font", $$Font, { "cssVariable": "--font-geist", "preload": true, "data-astro-cid-mdysn4oi": true })}${renderComponent($$result, "ClientRouter", $$ClientRouter, { "data-astro-cid-mdysn4oi": true })}${renderComponent($$result, "LoadingIndicator", $$LoadingIndicator, { "color": "#f4f4f5", "height": "2px", "data-astro-cid-mdysn4oi": true })}${renderHead()}</head> <body class="font-sans min-h-screen bg-zinc-900" data-astro-cid-mdysn4oi> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/inarty/Portfolio/astro/Raghvendra712.github.io/src/layouts/RootLayout.astro", void 0);

export { $$RootLayout as $ };
