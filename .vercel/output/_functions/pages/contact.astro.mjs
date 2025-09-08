import { c as createComponent, e as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_nJrU_vTu.mjs';
import { $ as $$H1 } from '../chunks/h1_DCeoxfaL.mjs';
import { $ as $$InfoLayout } from '../chunks/InfoLayout_RvDZgxyJ.mjs';
import { c as client } from '../chunks/client_uhJTwVYE.mjs';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const contact = await client.queries.contact({ relativePath: "contact.md" });
  return renderTemplate`${renderComponent($$result, "InfoLayout", $$InfoLayout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="p-4 sm:pt-8 sm:px-12 pb-20 min-h-dvh flex flex-col justify-between"> <div> ${renderComponent($$result2, "H1", $$H1, {}, { "default": async ($$result3) => renderTemplate`How I can help? ` })} <p class="mt-4 md:mt-8 lg:mt-12 text-xl xl:text-2xl text-zinc-400 text-balance">
Interested in working together?
                    Get in touch for new projects and experiments.
</p> <div class="mt-6 sm:mt-12 flex flex-col gap-1"> <a${addAttribute(`mailto:${contact.data.contact.email}`, "href")} class="mb-8 w-fit group flex items-center gap-1 text-base lg:text-xl text-zinc-400 hover:text-zinc-50"> ${contact.data.contact.email} <svg xmlns="http://www.w3.org/2000/svg" class="-rotate-45 group-hover:rotate-0 transition-all duration-300 ease-in-out" width="24" height="24" viewBox="0 0 24 24"> <title>Arrow Icon</title> <path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" opacity=".5"></path> <path fill="currentColor" d="M13.53 8.47a.75.75 0 1 0-1.06 1.06l1.72 1.72H8a.75.75 0 0 0 0 1.5h6.19l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06z"></path> </svg> </a> <div class="text-zinc-500"> ${renderComponent($$result2, "TinaMarkdown", TinaMarkdown, { "content": contact.data.contact.social })} </div> </div> </div> <div class="text-base text-zinc-500"> ${renderComponent($$result2, "TinaMarkdown", TinaMarkdown, { "content": contact.data.contact.address })} </div> </div> ` })}`;
}, "/home/inarty/Portfolio/astro/Raghvendra712.github.io/src/pages/contact.astro", void 0);

const $$file = "/home/inarty/Portfolio/astro/Raghvendra712.github.io/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
     __proto__: null,
     default: $$Contact,
     file: $$file,
     url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
