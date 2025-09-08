import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, r as renderSlot, a as renderTemplate } from './astro/server_nJrU_vTu.mjs';
import 'clsx';
import clsx from 'clsx/lite';

const $$Astro = createAstro();
const $$H1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$H1;
  const { size = "default", className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h1${addAttribute(clsx(
    "text-white text-balance",
    size === "default" && "text-xl md:text-2xl xl:text-3xl tracking-tight",
    size === "large" && "font-bold text-6xl md:text-[80px] lg:text-[70px] tracking-tighter",
    className
  ), "class")}> ${renderSlot($$result, $$slots["default"])} </h1>`;
}, "/home/inarty/Portfolio/astro/Raghvendra712.github.io/src/components/h1.astro", void 0);

export { $$H1 as $ };
