# Open Beekeeping docs

The public documentation for [Open Beekeeping](https://openbeekeeping.org) and its products, published at [docs.openbeekeeping.org](https://docs.openbeekeeping.org).

Built with [Starlight](https://starlight.astro.build) and styled with the [Open Beekeeping design system](https://github.com/OpenBeekeeping/design).

## Writing

Each page is a Markdown file in `src/content/docs/`. The folder a file sits in sets its section in the sidebar (see `astro.config.mjs`), and the file's path is its address: `openbka/self-hosting.md` is `/openbka/self-hosting/`.

Follow the voice in the [brand book](https://github.com/OpenBeekeeping/design/blob/main/docs/brand.md): beekeeper first, plain British English, no superlatives, exclamation marks or emoji.

These docs are public. Only document what is meant to be public: no internal addresses, secrets, or details of private repositories.

## Development

Requires Node 24 (`nvm use` picks it up from `.nvmrc`).

```sh
npm install
npm run dev
```

| Command           | What it does                                        |
| ----------------- | --------------------------------------------------- |
| `npm run dev`     | Start the dev server at `http://localhost:4321`     |
| `npm run build`   | Build the site into `dist/`                         |
| `npm run check`   | Check the content and types                         |
| `npm run preview` | Serve the built site locally in the Workers runtime |
| `npm run deploy`  | Build and deploy to Cloudflare                      |

## Hosting

The site is static files served by Cloudflare Workers, on the custom domain `docs.openbeekeeping.org` (set in `wrangler.jsonc`). The domain must be on a Cloudflare zone in the same account; Cloudflare creates the DNS record and certificate on the first deploy.

To deploy on every push to `main`, connect this repository in the Cloudflare dashboard (Workers & Pages → Create → Import a repository) with build command `npm run build` and deploy command `npx wrangler deploy`.

## Licences

- Code and configuration: [MIT](LICENSE).
- Written content in `src/content/`: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
- The Open Beekeeping, OpenBKA and OpenApiary names and marks identify this project. Use them to refer to it, not to brand other things.
