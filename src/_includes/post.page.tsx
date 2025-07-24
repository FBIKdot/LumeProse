import Base from "./base.page.tsx";

export default (
  { content, title, date, tags, description, footer, update, icon }: Lume.Data,
  helpers: Lume.Helpers,
) => (
  <Base title={title || "title"} isPost={true} icon={icon}>
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
          {tags.map((tag) => (
            <code class="pill tag">
              <a href={`/blog/#tag-${tag}`}>{`#${tag}`}</a>
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
          <div id="post-footer">
            <hr />
            {{ __html: helpers.md(footer) }}
          </div>
        )}
      </article>
    </main>
  </Base>
);
