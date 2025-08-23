# LumeProse

[Lume🔥](https://lume.land) + [prose.sh~](https://prose.sh) = LumeProse 🔥~

A blog, powered by Lume, using template and style from prose.sh

branch `my-blog` is the source of my blog: <https://fbik.top>

## Features

- Minimalism
- No JavaScript
- Purely static — no server-side rendering or special middleware required
- Built-in RSS feed support
- Fast and lightweight performance
- Markdown-first content approach

## Usage

### Deploy via Web Hosting Service

1. Fork this repository (make sure to fork only the master branch)
2. Import the project into your preferred web hosting service (e.g., Vercel,
   Netlify, etc.)
3. Configure deployment settings:

| Setting              | Value                  |
| -------------------- | ---------------------- |
| **Build Command**    | `deno task build`      |
| **Output Directory** | `_site`                |
| **Install Command**  | `yarn global add deno` |

### Local Build

Ensure you have [Deno](https://deno.com) installed, then run:

```bash
deno task build
```

The built site will be generated in the `_site` directory.

# License

MIT
