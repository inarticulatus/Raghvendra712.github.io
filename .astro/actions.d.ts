declare module "astro:actions" {
	type Actions = typeof import("/home/inarty/Portfolio/astro/Raghvendra712.github.io/src/actions")["server"];

	export const actions: Actions;
}