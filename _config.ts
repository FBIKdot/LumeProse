import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";
import date from "lume/plugins/date.ts";
import sitemap from "lume/plugins/sitemap.ts";
import feed from "lume/plugins/feed.ts";
import lightningCss from "lume/plugins/lightningcss.ts";
import purgecss from "lume/plugins/purgecss.ts";
import minifyHTML from "lume/plugins/minify_html.ts";
import brotli from "lume/plugins/brotli.ts";
import gzip from "lume/plugins/gzip.ts";

const site = lume({
  location: new URL("https://blog.fbik.top"),
  src: "src",
  server: {
    port: 4173,
  },
});

site.use(jsx());
site.use(date());
site.use(sitemap());
site.use(feed({
  output: ["./rss.xml"],
}));
site.use(lightningCss());
site.use(purgecss());
site.use(minifyHTML());
site.use(brotli());
site.use(gzip());

site.add("_readme.md", "index.html");

site.add("public/smol-v2.css", "smol-v2.css");
site.add("public/syntax.css", "syntax.css");
site.add("public/favicon.ico", "favicon.ico");

export default site;
