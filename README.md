# voya.events

The official product website for **Voya** — _Plan less. Live more._

Live at **https://voya.events** (GitHub Pages).

## About Voya

Voya is a social discovery and planning app built around shared experiences:

- **Trips** — plan your next adventure together: destination, dates, travelers, must-dos and a day-by-day itinerary.
- **Hangouts** — go from "we should do something" to actually doing it: suggest places, vote together and lock in the plan.
- **Events** — bring everyone together: invitations, RSVPs, schedules and details in one place.

The product journey is **Discover → Decide → Plan → Go**.

## What this website is

A static, single-page product website that explains Voya, showcases the approved mobile design (Voya Design V1) and points visitors to the App Store and Google Play once the apps are published. It has no backend, accounts, CMS or tracking.

Sections: Navigation · Hero · Explore Voya · How it works · Trips · Hangouts · Events · App showcase (carousel) · Why Voya · Download · Footer.

## Tech stack

- React 19 + TypeScript
- Vite 7
- Plain responsive CSS (`src/styles.css`) using the Voya brand tokens
- ESLint 9 (flat config, `typescript-eslint`, React Hooks rules)
- GitHub Actions → GitHub Pages

## Prerequisites

- Node.js **22** (see `.nvmrc`; Node ≥ 20.19 works)
- npm 10+

```bash
nvm use
```

## Install & run locally

```bash
npm install
npm run dev
```

The dev server runs at **http://localhost:5173**.

## Scripts

| Command             | What it does                                   |
| ------------------- | ---------------------------------------------- |
| `npm run dev`       | Start the Vite dev server                      |
| `npm run build`     | Type-check (`tsc -b`) and build into `dist/`   |
| `npm run preview`   | Serve the production build locally             |
| `npm run lint`      | Run ESLint                                     |
| `npm run typecheck` | Type-check only                                |

## Project structure

```
.github/workflows/deploy.yml   # Build + deploy to GitHub Pages on push to main
public/                        # Served as-is: CNAME, favicons, OG image, robots.txt, sitemap.xml
src/
  config/stores.ts             # App Store / Google Play URLs and availability (edit at launch)
  content.ts                   # Copy, navigation, curated screens
  components/                  # Nav, Hero, ExploreVoya, HowItWorks, ExperienceSection,
                               # Showcase, WhyVoya, Download, Footer, StoreBadges, Phone, Icon, Reveal
  assets/brand/                # Approved Voya logo and emblem (SVG, plum and cream)
  assets/screens/              # WebP exports of approved Voya Design V1 screens
  styles.css                   # All styles, brand tokens at the top
index.html                     # SEO, Open Graph and social metadata
```

### Brand

| Token    | Hex       |
| -------- | --------- |
| Cream    | `#FFF8EE` |
| Lavender | `#CEBDF3` |
| Peach    | `#FFC87A` |
| Violet   | `#7650AB` |
| Plum     | `#3B2E59` |

The logo and emblem are the approved SVGs from the Voya design folder. App screens in `src/assets/screens/` are exports of the frozen Voya Design V1 frames (with their device frames), not mock-ups invented for the site. To refresh them, re-export the same frames from the design file at 3× and convert to 720 px-wide WebP.

## Activating the store buttons

All store buttons (Hero, Download section and Footer) read from one file: **`src/config/stores.ts`**.

```ts
export const storeConfig: StoreConfig = {
  appStore: {
    url: null,          // ← paste the real App Store listing URL
    available: false,   // ← set to true
  },
  googlePlay: {
    url: null,          // ← paste the real Google Play listing URL
    available: false,   // ← set to true
  },
  launchStatusText: 'Coming soon to the App Store and Google Play.',
};
```

- A button becomes a real link **only when both** `url` is set and `available` is `true`. Until then it is rendered as a non-interactive badge with a "Coming soon" label and an accessible "not available yet" description — never a dead link.
- Stores can go live independently (e.g. iOS first).
- The "Coming soon…" status line disappears automatically once both stores are live. Edit `launchStatusText` if one store launches first (e.g. "Now on the App Store. Coming soon to Google Play.").

Commit and push to `main`; the site redeploys automatically.

## Deployment (GitHub Pages)

Every push to `main` runs `.github/workflows/deploy.yml`, which installs dependencies, lints, type-checks, builds and deploys `dist/` to GitHub Pages. It can also be started manually from **Actions → Deploy to GitHub Pages → Run workflow**.

One-time repository settings (**Settings → Pages**):

1. **Build and deployment → Source:** _GitHub Actions_.
2. **Custom domain:** `voya.events` (also committed as `public/CNAME`).
3. **Enforce HTTPS:** enable once GitHub has issued the certificate.

The Vite `base` is `/` because the site is served from the domain root.

## Domain & DNS

Configure these at the DNS provider for `voya.events` (values per [GitHub's custom-domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)):

| Type  | Host  | Value                 |
| ----- | ----- | --------------------- |
| A     | `@`   | `185.199.108.153`     |
| A     | `@`   | `185.199.109.153`     |
| A     | `@`   | `185.199.110.153`     |
| A     | `@`   | `185.199.111.153`     |
| AAAA  | `@`   | `2606:50c0:8000::153` |
| AAAA  | `@`   | `2606:50c0:8001::153` |
| AAAA  | `@`   | `2606:50c0:8002::153` |
| AAAA  | `@`   | `2606:50c0:8003::153` |
| CNAME | `www` | `abilal9.github.io`   |

- AAAA records are optional but recommended (IPv6).
- TTL: 3600 s (or the provider default). Lower to 300 s while testing if you like.
- Remove any conflicting registrar defaults for `@` and `www` (parking-page A/CNAME/ALIAS/URL-forward records). Do **not** touch MX, TXT (SPF/DKIM/DMARC) or other email records.
- With `voya.events` as the custom domain and `www` pointing to GitHub, GitHub redirects `www.voya.events` → `https://voya.events`.
- Recommended: verify the domain at **GitHub → Settings (account) → Pages → Add a domain**, which adds a `_github-pages-challenge-abilal9` TXT record and prevents domain takeover.

Check the records:

```bash
dig voya.events +noall +answer -t A
dig voya.events +noall +answer -t AAAA
dig www.voya.events +noall +answer -t CNAME
```

Future subdomains (`api.`, `staging-api.`, `admin.`) are not part of this site and are intentionally left unconfigured.

## Future expansion

Planned, not yet built:

- Live App Store / Google Play links (flip the config above).
- Privacy Policy and Terms of Service pages (no legal text is published until supplied).
- Support page and account-deletion instructions (required by the app stores).
- Invitation deep-link fallback at `/i/{token}` (will need a SPA `404.html` fallback or pre-rendered route on GitHub Pages; no private plan data will ever be rendered on the website).
- App announcements.

## Contact

[support@voya.events](mailto:support@voya.events)

© Voya
