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
    </html>
  </>
);
