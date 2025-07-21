import Footer from "./footer.page.tsx";
export default (
  { title, children, isPost }: {
    title: string;
    children: JSX.Children;
    isPost?: boolean;
  },
) => (
  <>
    {{ __html: "<!DOCTYPE html>" }}
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href={isPost ? "/smol.css" : "/smol-v2.css"} />
        {isPost && <link rel="stylesheet" href="/syntax.css" />}
        <link
          rel="icon"
          href="/favicon.ico"
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
