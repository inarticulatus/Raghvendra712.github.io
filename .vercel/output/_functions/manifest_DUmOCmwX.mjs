import { i as decodeKey } from './chunks/astro/server_nJrU_vTu.mjs';
import 'clsx';
import './chunks/astro-designed-error-pages_Bv31odRo.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_wM3hKgJX.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/inarty/Portfolio/astro/Raghvendra712.github.io/","cacheDir":"file:///home/inarty/Portfolio/astro/Raghvendra712.github.io/node_modules/.astro/","outDir":"file:///home/inarty/Portfolio/astro/Raghvendra712.github.io/dist/","srcDir":"file:///home/inarty/Portfolio/astro/Raghvendra712.github.io/src/","publicDir":"file:///home/inarty/Portfolio/astro/Raghvendra712.github.io/public/","buildClientDir":"file:///home/inarty/Portfolio/astro/Raghvendra712.github.io/dist/client/","buildServerDir":"file:///home/inarty/Portfolio/astro/Raghvendra712.github.io/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.7.5_@types+node@24.3.0_jiti@2.4.2_lightningcss@1.29.2_rollup@4.40.0_typescript@5.8.3_yaml@2.8.1/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_actions/[...path]","pattern":"^\\/_actions(?:\\/(.*?))?\\/?$","segments":[[{"content":"_actions","dynamic":false,"spread":false}],[{"content":"...path","dynamic":true,"spread":true}]],"params":["...path"],"component":"node_modules/.pnpm/astro@5.7.5_@types+node@24.3.0_jiti@2.4.2_lightningcss@1.29.2_rollup@4.40.0_typescript@5.8.3_yaml@2.8.1/node_modules/astro/dist/actions/runtime/route.js","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.EAwbsuR-.css"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.EAwbsuR-.css"}],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.EAwbsuR-.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.EAwbsuR-.css"}],"routeData":{"route":"/index.bkup","isIndex":false,"type":"page","pattern":"^\\/index\\.bkup\\/?$","segments":[[{"content":"index.bkup","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/index.bkup.astro","pathname":"/index.bkup","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.EAwbsuR-.css"}],"routeData":{"route":"/portfolio","isIndex":true,"type":"page","pattern":"^\\/portfolio\\/?$","segments":[[{"content":"portfolio","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/portfolio/index.astro","pathname":"/portfolio","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.EAwbsuR-.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/inarty/Portfolio/astro/Raghvendra712.github.io/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/home/inarty/Portfolio/astro/Raghvendra712.github.io/src/pages/blog/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["/home/inarty/Portfolio/astro/Raghvendra712.github.io/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["/home/inarty/Portfolio/astro/Raghvendra712.github.io/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/home/inarty/Portfolio/astro/Raghvendra712.github.io/src/pages/portfolio/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["/home/inarty/Portfolio/astro/Raghvendra712.github.io/src/pages/portfolio/index.astro",{"propagation":"in-tree","containsHead":true}],["/home/inarty/Portfolio/astro/Raghvendra712.github.io/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/inarty/Portfolio/astro/Raghvendra712.github.io/src/pages/index.bkup.astro",{"propagation":"none","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/home/inarty/Portfolio/astro/Raghvendra712.github.io/src/actions/categories.ts",{"propagation":"in-tree","containsHead":false}],["/home/inarty/Portfolio/astro/Raghvendra712.github.io/src/actions/index.ts",{"propagation":"in-tree","containsHead":false}],["\u0000astro-internal:actions",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/portfolio/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/portfolio/index@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.7.5_@types+node@24.3.0_jiti@2.4.2_lightningcss@1.29.2_rollup@4.40.0_typescript@5.8.3_yaml@2.8.1/node_modules/astro/dist/actions/runtime/route@_@js":"pages/_actions/_---path_.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"pages/blog/_---slug_.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/index.bkup@_@astro":"pages/index.bkup.astro.mjs","\u0000@astro-page:src/pages/portfolio/index@_@astro":"pages/portfolio.astro.mjs","\u0000@astro-page:src/pages/portfolio/[...slug]@_@astro":"pages/portfolio/_---slug_.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000astro-internal:actions":"_astro-internal_actions.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.7.5_@types+node@24.3.0_jiti@2.4.2_lightningcss@1.29.2_rollup@4.40.0_typescript@5.8.3_yaml@2.8.1/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","/home/inarty/Portfolio/astro/Raghvendra712.github.io/.astro/content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BZWWw9pU.mjs","/home/inarty/Portfolio/astro/Raghvendra712.github.io/node_modules/.pnpm/astro@5.7.5_@types+node@24.3.0_jiti@2.4.2_lightningcss@1.29.2_rollup@4.40.0_typescript@5.8.3_yaml@2.8.1/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CzwwA-7T.mjs","\u0000virtual:astro:assets/fonts/internal":"chunks/internal_ClEpEiWl.mjs","/home/inarty/Portfolio/astro/Raghvendra712.github.io/.astro/content-assets.mjs":"chunks/content-assets_B7_MskMQ.mjs","\u0000@astrojs-manifest":"manifest_DUmOCmwX.mjs","/home/inarty/Portfolio/astro/Raghvendra712.github.io/src/components/navigation":"_astro/navigation.CM2NY1g5.js","@astrojs/react/client.js":"_astro/client.BPIbHqJh.js","/home/inarty/Portfolio/astro/Raghvendra712.github.io/node_modules/.pnpm/astro@5.7.5_@types+node@24.3.0_jiti@2.4.2_lightningcss@1.29.2_rollup@4.40.0_typescript@5.8.3_yaml@2.8.1/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.BZs-2RF_.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/r1.klh5nv8y.png","/_astro/about.EAwbsuR-.css","/favicon.svg","/r1.png","/r2.png","/r3.png","/r4.png","/social-image.jpg","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.BZs-2RF_.js","/_astro/client.BPIbHqJh.js","/_astro/index.BVOCwoKb.js","/_astro/navigation.CM2NY1g5.js","/admin/index.html","/public/r1.png","/_astro/fonts/64089cc6c5685dcf.woff2","/_astro/fonts/c85113a126e93940.woff2","/_astro/fonts/cf851a541402ee05.woff2"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"aga5p8VLvNQ/m8o8WY8WZfGDN9Koghf1Gb/o4DaALjc="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
