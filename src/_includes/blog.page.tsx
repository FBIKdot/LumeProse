import Base from "./base.page.tsx";
import { header } from "./header.ts";

export default (
  { content, title, search, showPostsList, bio, icon }: Lume.Data,
  helpers: Lume.Helpers,
) => {
  const posts = search.pages().filter((page) => page.type !== "page");
  const tags = [...new Set(posts.map((page) => page.tags).flat())];
  return (
    <Base title={title || "title"} icon={icon}>
      <style>
        {`
      .invisibility{ display:none }
      .post { display: var(--display, block); }
      ${
          tags.map((tag) =>
            `#tag-${tag}:target ~ main .post:not([tag~="${tag}"])`
          ).join(",")
        }{ --display: none; }
      ${
          tags.map((tag) => `#tag-${tag}:target ~ main .clear-filter`).join(",")
        }{ display: block}
        
      `}
      </style>
      {tags.map((tag) => (
        <a class="invisibility" href={`#tag-${tag}`} id={`tag-${tag}`}></a>
      ))}
      <header class="text-center">
        <h1 class="text-2xl font-bold mt-2">{title}</h1>
        {bio}
        <nav>
          {[...Object.entries(header.nav), ["rss", "/feed.xml"]].map((
            [key, value],
            index,
          ) => (
            <>
              <span>{index !== 0 && " | "}</span>
              <a
                href={value as string}
                target={value.includes("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                class="text-lg transform-none"
              >
                {key}
              </a>
            </>
          ))}
        </nav>

        <hr />
      </header>
      <main>
        {content && (
          <section>
            <article class="md">
              {{ __html: content }}
            </article>
            {showPostsList && <hr />}
          </section>
        )}
        {showPostsList && (
          <section class="posts group mt-2">
            <a href="#" class="invisibility clear-filter">clear filters</a>
            {posts.map((page) => (
              <article class="post" tag={page.tags.join(" ")}>
                <div class="flex items-center">
                  <time
                    datetime={page.date.toISOString()}
                    class="text-sm post-date"
                  >
                    {helpers.date(page.date)}
                  </time>
                  <span class="text-md flex-1 m-0 transform-none">
                    <a href={page.url}>{page.title}</a>
                  </span>
                </div>
              </article>
            ))}
          </section>
        )}
      </main>
    </Base>
  );
};
