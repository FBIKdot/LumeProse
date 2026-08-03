import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";
import date from "lume/plugins/date.ts";
import sitemap from "lume/plugins/sitemap.ts";
import feed from "lume/plugins/feed.ts";
import slugifyUrls from "lume/plugins/slugify_urls.ts";
import codeHighlight from "lume/plugins/code_highlight.ts";
import toc, { linkInsideHeader } from "lume/plugins/toc.ts";
import { toKebabCase } from "@std/text";

import mila from "markdown-it-link-attributes";

const site = lume({
  location: new URL("https://fbik.top"),
  src: "src",
  server: {
    port: 4173,
    debugBar: false,
  },
});

site.use(jsx());
site.use(date());
site.use(sitemap());
site.use(feed({
  output: ["./feed.xml"],
}));
site.use(slugifyUrls());
site.use(codeHighlight({
  theme: [{
    name: "github-dark-dimmed",
    cssFile: "/hlghlight.css",
    placeholder: "/* dark */",
  }, {
    name: "github",
    cssFile: "/hlghlight.css",
    placeholder: "/* light */",
  }],
}));
site.use(toc({
  anchor: linkInsideHeader({
    content: "#",
  }),
  slugify: (str) => toKebabCase(str),
}));

site.hooks.addMarkdownItPlugin(mila, {
  attrs: {
    target: "_blank",
    rel: "noopener noreferrer",
  },
});

// use on production
if (!Deno.args.includes("-s")) {
  site.use((await import("lume/plugins/lightningcss.ts")).default());
  site.use((await import("lume/plugins/purgecss.ts")).default());
  site.use((await import("lume/plugins/minify_html.ts")).default());
}

site.add("_readme.md", "index.html");

site.add("public/smol.css", "smol.css");
site.add("public/smol-v2.css", "smol-v2.css");
site.add("public/styles.css", "styles.css");
site.add("public/highlight.css", "highlight.css");
site.add("public/favicon.png", "favicon.ico");
site.add("public/prose.ico", "prose.ico");

export default site;
