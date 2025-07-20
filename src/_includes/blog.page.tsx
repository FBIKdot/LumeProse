import date from "lume/plugins/date.ts";
import Base from "./base.page.tsx";

export default (
  { content, title, bio, header, search }: Lume.Data,
  helpers: Lume.Helpers,
) => (
  <Base title={title || "title"}>
    <link rel="stylesheet" href="/syntax.css" />
    <header class="text-center">
      <h1 class="text-2xl font-bold mt-2">{title}</h1>
      {bio ? bio : ""}
      <nav>
        {[...Object.entries(header.nav), ["rss", "./rss.xml"]].map((
          [key, value],
          index,
        ) => (
          <>
            <span>{index !== 0 && " | "}</span>
            <a
              href={value as string}
              target="_blank"
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
          <hr />
        </section>
      )}
      <section class="posts group mt-2">
        {search.pages().map((page) =>
          page.url !== "/" &&
          (
            <article>
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
          )
        )}
      </section>
    </main>
  </Base>
);
