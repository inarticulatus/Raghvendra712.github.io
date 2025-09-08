import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, r as renderSlot, a as renderTemplate } from './astro/server_nJrU_vTu.mjs';
import 'clsx';
import clsx from 'clsx/lite';

const $$Astro$1 = createAstro();
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Link;
  const { href, variant = "primary", className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(clsx(
    "w-fit text-base sm:text-2xl px-5 py-2 rounded-full transition-all duration-300 ease-in-out whitespace-nowrap",
    variant === "primary" && "text-zinc-900 bg-zinc-100 hover:outline-2 outline-offset-2 outline-zinc-100",
    variant === "secondary" && "text-zinc-100 hover:text-white bg-transparent hover:bg-zinc-100/20 hover:outline-2 outline-offset-2 outline-zinc-100/20",
    className
  ), "class")}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/home/inarty/Portfolio/astro/Raghvendra712.github.io/src/components/link.astro", void 0);

const $$Astro = createAstro();
const $$Available = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Available;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div style="justify-content: end; margin: 10px"${addAttribute(`flex items-center gap-2 ${className}`, "class")}> <span class="relative flex items-center justify-center size-3"> <span class="absolute inline-flex h-full w-full animate-ping duration-1000 rounded-full bg-zinc-100 opacity-75"></span> <span class="relative inline-flex size-2 rounded-full bg-zinc-100"></span> </span> <p class="text-zinc-300">Available For Work</p> </div>`;
}, "/home/inarty/Portfolio/astro/Raghvendra712.github.io/src/components/available.astro", void 0);

const $$VidBackground = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="heroVideo video-container"> <video autoplay="autoplay" loop="loop" id="myVideo" class="absolute z-10 w-auto min-w-full min-h-full max-w-none"> <source src="https://www.dropbox.com/scl/fi/wl2qd4mw853o2shecltdj/rvd.mp4?rlkey=ao19hk4sr0nv4clc45iwmvl4a&st=riktolzo&raw=1"> </video> </div>`;
}, "/home/inarty/Portfolio/astro/Raghvendra712.github.io/src/components/vid-background.astro", void 0);

export { $$Link as $, $$Available as a, $$VidBackground as b };
