import Footer from "./footer.page.tsx";
export default (
  { title, children, isPost, icon: avatar }: {
    title: string;
    children: JSX.Children;
    isPost?: boolean;
    icon?: string;
  },
) => (
  <>
    {{ __html: "<!DOCTYPE html>" }}
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href={isPost ? "/smol.css" : "/smol-v2.css"} />
        {isPost && <link rel="stylesheet" href="/styles.css" />}
        <link
          rel="icon"
          href={avatar || "/favicon.ico"}
        >
        </link>
        <title>{title}</title>
      </head>
      <body>
        {children}
        <Footer />
      </body>
      <script
        src="https://esm.sh/instant.page"
        integrity="sha384-8IgzZkM7ErR+/6XIgiV5MSouLg56ItSeABCBOel+oSoHayvCv2kqyQSY+tpSug3A"
        crossorigin="anonymous"
      >
      </script>
    </html>
  </>
);
