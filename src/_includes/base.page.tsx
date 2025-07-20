import Footer from "./footer.page.tsx";
export default (
  { title, children }: { title: string; children: JSX.Children },
) => (
  <>
    {{ __html: "<!DOCTYPE html>" }}
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/smol-v2.css" />
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
