import Base from "./base.page.tsx";
import Footer from "./footer.page.tsx";

export default (
  { content, title, search, date, tags, description, footer, update }:
    Lume.Data,
  helpers: Lume.Helpers,
) => (
  <Base title={title || "title"}>
    <link rel="stylesheet" href="/smol-v2.css" />
    <header>
      <h1 class="text-2xl font-bold">{title}</h1>
      <p class="font-bold m-0">
        <time
          datetime={date.toISOString()}
        >
          {helpers.date(date)}
        </time>
        <span>{" "}&middot;{" "}</span>
        <a href="/">FBIK.</a>
      </p>
      {description && description !== "" && (
        <blockquote>{description}</blockquote>
      )}
      <hr />
    </header>
    <main>
      <article class="md">
        {{ __html: content }}

        <div class="tags">
          {tags.map((value) => (
            <code class="pill tag">
              <a href={`/?tag=${value}`}>{`#${value}`}</a>
            </code>
          ))}
        </div>

        <div id="last-updated" class="text-sm">
          last updated:{" "}
          <time datetime={new Date(update || date).toISOString()}>
            {helpers.date(update || date)}
          </time>
        </div>

        {footer && footer !== "" && (
          <>
            <hr />
            <div id="post-footer">{footer}</div>
          </>
        )}
      </article>
    </main>
  </Base>
);
