declare module "astro:actions" {
	type Actions = typeof import("/home/inarty/Portfolio/astro/Raghvendra712.github.io/src/actions/index.ts")["server"];

	export const actions: Actions;
}