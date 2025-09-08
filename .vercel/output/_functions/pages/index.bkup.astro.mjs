import { c as createComponent, e as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_nJrU_vTu.mjs';
import { $ as $$H1 } from '../chunks/h1_DCeoxfaL.mjs';
import { $ as $$Link, a as $$Available, b as $$VidBackground } from '../chunks/vid-background_D3WEr347.mjs';
import { $ as $$RootLayout } from '../chunks/RootLayout_boNY-ri8.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "RootLayout", $$RootLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <div class="group relative w-full min-h-dvh flex items-center justify-center"> <div class="absolute w-full h-dvh -z-10"> <!-- <WarpBackground
					color1="#09090b"
					color2="#27272a"
					color3="#52525b"
					speed={0.6}
					swirl={0.5}
					swirlIterations={10}
					shapeScale={0.3}
					client:load
				/> --> </div> <div style="display: flex;" class="p-4 sm:p-8 absolute w-full h-dvh flex flex-col justify-between z-10"> <div style="display: flex; gap:20px; justify-content: space-between;"> <div> ${renderComponent($$result2, "H1", $$H1, { "size": "large" }, { "default": ($$result3) => renderTemplate` Raghvendra Singh ` })} <br> ${renderComponent($$result2, "H1", $$H1, { "size": "default" }, { "default": ($$result3) => renderTemplate` Writer | Editor | Director` })} </div> <div style="align-content: center;"> <div style="padding: 2em 0;" class="mb-2 sm:mb-4 flex items-center justify-between"> <nav id="homeNav"> <!-- <div class="flex items-center gap-4"> --> <!-- </div> --> <!-- <nav id="homeNav"> --> ${renderComponent($$result2, "Link", $$Link, { "href": "/portfolio", "variant": "secondary" }, { "default": ($$result3) => renderTemplate`Portfolio` })} ${renderComponent($$result2, "Link", $$Link, { "href": "/blog", "variant": "secondary" }, { "default": ($$result3) => renderTemplate`Blog` })} ${renderComponent($$result2, "Link", $$Link, { "href": "/about", "variant": "secondary" }, { "default": ($$result3) => renderTemplate`About` })} <!-- <Link href="/contact" variant="secondary">Contact</Link> --> ${renderComponent($$result2, "Link", $$Link, { "href": "/contact" }, { "default": ($$result3) => renderTemplate`Contact Me` })} <div>${renderComponent($$result2, "AvailableForWork", $$Available, { "className": "py-4" })}</div> </nav> </div> </div> </div> ${renderComponent($$result2, "VidBackground", $$VidBackground, {})} </div> </div> </main> ` })}`;
}, "/home/inarty/Portfolio/astro/Raghvendra712.github.io/src/pages/index.bkup.astro", void 0);

const $$file = "/home/inarty/Portfolio/astro/Raghvendra712.github.io/src/pages/index.bkup.astro";
const $$url = "/index.bkup";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
