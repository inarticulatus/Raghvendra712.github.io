import { c as createComponent, e as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_nJrU_vTu.mjs';
import { $ as $$H1 } from '../chunks/h1_DCeoxfaL.mjs';
import { $ as $$InfoLayout } from '../chunks/InfoLayout_RvDZgxyJ.mjs';
import { c as client } from '../chunks/client_uhJTwVYE.mjs';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const about = await client.queries.about({ relativePath: "about.md" });
  return renderTemplate`${renderComponent($$result, "InfoLayout", $$InfoLayout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="p-4 sm:pt-8 sm:px-12 pb-20 min-h-dvh flex flex-col justify-between gap-32"> <div class="space-y-4 sm:space-y-12"> ${renderComponent($$result2, "H1", $$H1, {}, { "default": async ($$result3) => renderTemplate`${about.data.about.title}` })} <div class="text-xl xl:text-2xl text-zinc-500 text-balance text-zinc-400"> ${renderComponent($$result2, "TinaMarkdown", TinaMarkdown, { "content": about.data.about.description })} </div> </div> <div class="space-y-2 text-base sm:text-lg"> <h2 class="px-4 text-zinc-400 underline underline-offset-4 decoration-zinc-500">Achievements</h2> <ul class="px-4 text-zinc-400 list-disc list-outside"> ${renderComponent($$result2, "TinaMarkdown", TinaMarkdown, { "content": about.data.about.achievements })} </ul> </div> </div> ` })}`;
}, "/home/inarty/Portfolio/astro/Raghvendra712.github.io/src/pages/about.astro", void 0);

const $$file = "/home/inarty/Portfolio/astro/Raghvendra712.github.io/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
     __proto__: null,
     default: $$About,
     file: $$file,
     url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
