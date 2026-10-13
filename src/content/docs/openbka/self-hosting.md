---
title: Self-hosting OpenBKA
description: Run your own copy of OpenBKA on a free Cloudflare account.
sidebar:
  order: 2
---

OpenBKA runs on Cloudflare: there are no servers to patch and no database open to the internet, and most associations fit within Cloudflare’s free tier.

## What you need

- A free [Cloudflare](https://dash.cloudflare.com/sign-up) account
- [Node.js](https://nodejs.org) 24
- A copy of the [OpenBKA code](https://github.com/OpenBeekeeping/openbka)
- A client ID and secret for your copy, issued when it is registered with Open Beekeeping accounts

## Settings

| Setting              | Value                                                      |
| -------------------- | ---------------------------------------------------------- |
| `ORIGIN`             | Your copy’s public address, e.g. `https://bka.example.org` |
| `OIDC_ISSUER`        | Defaults to `https://accounts.openbeekeeping.org`          |
| `OIDC_CLIENT_ID`     | Issued when your copy is registered                        |
| `OIDC_CLIENT_SECRET` | Issued with the client ID                                  |

## Deploy

```sh
npx wrangler login
npm run setup       # once: create the database in the EU jurisdiction
npx wrangler secret put ORIGIN
npx wrangler secret put OIDC_CLIENT_ID
npx wrangler secret put OIDC_CLIENT_SECRET
npm run deploy      # deploy, creating file storage (EU) on the first run
npm run db:migrate  # bring the database up to date
```

## Keeping data in the EU

Member data is stored in Cloudflare’s EU jurisdiction. To use another jurisdiction, change `jurisdiction` in `wrangler.jsonc` and the `setup` script **before** your first deploy.
