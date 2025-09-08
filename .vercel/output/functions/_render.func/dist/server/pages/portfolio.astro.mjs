import { c as createComponent, e as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_nJrU_vTu.mjs';
import { $ as $$H1 } from '../chunks/h1_DCeoxfaL.mjs';
import { c as createSlug } from '../chunks/utils_Slli6Dm2.mjs';
import { $ as $$InfoLayout } from '../chunks/InfoLayout_RvDZgxyJ.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_LlxUGYAR.mjs';
import { g as getCollection } from '../chunks/_astro_content_eVorROf4.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const articles = await getCollection("articles", ({ data }) => {
    return data.portfolio === true;
  });
  return renderTemplate`${renderComponent($$result, "InfoLayout", $$InfoLayout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="p-4 sm:pt-8 sm:px-12 pb-20 min-h-dvh"> ${renderComponent($$result2, "H1", $$H1, {}, { "default": async ($$result3) => renderTemplate` Portfolio ` })} <ul class="mt-4 sm:mt-12 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-16 sm:gap-8"> ${articles.map((article) => renderTemplate`<li> <a${addAttribute(`/portfolio/${createSlug(article.data.title)}`, "href")}> ${renderComponent($$result2, "Image", $$Image, { "src": article.data.cover, "inferSize": true, "for": true, "alt": article.data.title, "class": "aspect-[1/1.33] object-center object-cover rounded-lg shadow-lg mb-4 sm:mb-0 sm:mr-4" })} <div class="p-1 sm:p-2"> <h2 class="text-base text-zinc-100">${article.data.title}</h2> <p class="text-sm text-zinc-400 text-balance">${article.data.snippet}</p> </div> </a> </li>`)} </ul> </div> ` })}`;
}, "/home/inarty/Portfolio/astro/Raghvendra712.github.io/src/pages/portfolio/index.astro", void 0);

const $$file = "/home/inarty/Portfolio/astro/Raghvendra712.github.io/src/pages/portfolio/index.astro";
const $$url = "/portfolio";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
