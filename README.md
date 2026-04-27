# Vaults Capital — website

Static website for Vaults Capital. Built as plain HTML / CSS / JS so it deploys to GitHub Pages with zero build step.

## Stack

- Plain HTML / CSS / vanilla JS
- Google Fonts: Spectral (serif), DM Sans (body), JetBrains Mono (labels)
- No frameworks, no bundler, no build step
- Mobile-responsive, dark-mode-aware, prefers-reduced-motion respected
- Inline SVG favicon (no separate asset needed)

## File structure

```
vaults-capital/
├── index.html              # Homepage
├── about.html              # About / founders
├── research.html           # Research listing with filters
├── methodology.html        # How we work
├── subscribe.html          # Pricing tiers + FAQ
├── contact.html            # Contact details + form
├── articles/
│   └── iridium-rerate.html # Sample article (template)
├── styles.css              # Single shared stylesheet
├── script.js               # Mobile nav + research filter
└── README.md               # This file
```

## Deploying to GitHub Pages

1. Create a new public repo on GitHub. If you want the site at `https://YOUR-USERNAME.github.io/`, name the repo exactly `YOUR-USERNAME.github.io`. Otherwise, any repo name works and the site will live at `https://YOUR-USERNAME.github.io/REPO-NAME/`.
2. Push these files to the `main` branch.
3. In the repo on GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main` / `(root)`**.
4. Wait ~30 seconds. GitHub will give you a live URL.

### Custom domain

1. Buy `vaultscapital.com` (or whatever) — Cloudflare Registrar is the cheapest with no markup.
2. In the repo: **Settings → Pages → Custom domain → enter your domain**.
3. In your DNS provider, add either:
   - Apex domain (`vaultscapital.com`): four `A` records pointing to GitHub's IPs (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`).
   - Subdomain (`www.vaultscapital.com`): a `CNAME` pointing to `YOUR-USERNAME.github.io`.
4. GitHub will provision SSL automatically. Tick **Enforce HTTPS** once it's available.

## Customising

### Branding

- **Colors** live in `styles.css` at the top, in `:root`. Change `--accent` to rebrand globally.
- **Fonts** are loaded from Google Fonts in each HTML `<head>`. Swap the `<link>` and update `--font-serif` / `--font-sans` / `--font-mono` to change typefaces.
- **Logo mark** is the small `<span class="brand-mark"></span>` next to "Vaults Capital" in the header. Replace with an `<img>` if you have a logo SVG.

### Founder bios

`about.html` has placeholder bios for Founder Two and Founder Three. Replace the paragraphs and the `.credentials` tags.

### Research articles

Add new articles in `articles/`. Copy `iridium-rerate.html` as a template. To list them on the research page, add a new `<a class="article-card" data-tag="...">` block in `research.html` matching the existing pattern.

### Forms (newsletter, contact)

The forms are wired with `onsubmit` placeholder alerts. To make them real:

- **Newsletter signup** → connect to **Beehiiv**, **ConvertKit**, or **Substack**. Each gives you an embeddable form HTML snippet — paste it where the existing `<form class="newsletter-form">` is.
- **Contact form** → use **Formspree**, **Getform**, or **Netlify Forms**. Change the `<form>` `action` attribute to their endpoint.

### Stripe / paid subscriptions

When you turn on Premium, the simplest path is **Beehiiv premium** (handles paywall + payments + email delivery in one) or **Substack premium**. Both give you embeds you drop in. Avoid building your own auth and Stripe integration at v1 — you have better things to do.

## Important regulatory note

This site is **not authorised or regulated by the FCA**. The disclaimer in the footer reflects that. Before you take payment from UK retail investors for investment research, get qualified UK financial-promotions advice — it shapes what the site is allowed to claim, not just the small print. Specifically, look into:

- Section 21 of FSMA (financial promotions regime)
- The "investment research" carve-out and its scope conditions
- HNW / sophisticated / professional investor exemptions
- Whether your output constitutes "investment advice" or "investment research"

The institutional path is materially less restricted than the retail path. The two-track signup design (institutional self-certification vs. retail) on `subscribe.html` is structured with this in mind.

## Roadmap

When you outgrow plain HTML:

- **Migrate to Astro** when you have 20+ articles. Posts become MDX files, the build adds an RSS feed, sitemaps, and proper SEO. Same GitHub Pages deploy.
- **Add search** with Pagefind (zero config, indexes static HTML).
- **Add a comments / discussion layer** with Cusdis or giscus (giscus uses GitHub Discussions, fits the audience).
- **Add a newsletter archive** rendered from your email tool's API.

## License

All your work. Replace this section with your own license terms before publishing.
