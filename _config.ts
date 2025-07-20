import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";
import date from "lume/plugins/date.ts";
import sitemap from "lume/plugins/sitemap.ts";

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

site.add("_readme.md", "index.html");

site.add("public/smol-v2.css", "smol-v2.css");
site.add("public/syntax.css", "syntax.css");
site.add("public/favicon.ico", "favicon.ico");

export default site;
