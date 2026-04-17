# CLAUDE.md - free-site-template

You (Claude Code) are iterating on a client site. This repo was cloned from `ctrl-alt-elite-uk/free-site-template` by the automation framework and is linked to a project in the ctrl-alt-elite portal.

This file is **technical guidance only**. It tells you what you must not break and how a few cross-cutting systems work. It does **not** prescribe how the site should look, what components to reach for, or what layout language to use. Those calls are yours to make per client. The starter scaffold is deliberately minimal - treat the home, about, services, and contact pages as blank canvases, not templates to tweak.

---

## Design philosophy

The `frontend-design` skill handles creative direction, typography choices, colour philosophy, motion language, and layout principles. Read and follow it before writing any frontend code, every session, no exceptions.

This section adds the constraints and client context that make those creative choices land for real businesses rather than portfolio demos.

### Read the brief first, design second

Before writing a single component:

1. Read `site.config.ts` in full. Understand what the business does, who its customers are, and what the site needs to achieve.
2. Read `.notes/inspiration.md` if it exists. These are real URLs the client shared. Open them mentally as reference, not as things to clone. Extract the *feeling* they have in common: is the client drawn to clean and professional? Dark and technical? Warm and approachable?
3. Scan the brand assets (see below). If real assets exist, they dictate your creative direction.
4. Only then decide on your aesthetic direction per the `frontend-design` skill.

### Brand assets

Client brand material lives in two places:

- `public/` - logo files (`logo.svg` / `logo.webp` / `logo.png` / `logo.jpg`), favicons, and any images the seeder placed.
- `brand_assets/` - everything else the client or the onboarding flow provided: colour guides, style guides, font files, photography, PDF brochures, business cards, existing signage photos, social media assets, van livery photos, etc.

**Rules:**

1. **Inventory first.** Before making any design decisions, list every file in `public/` and `brand_assets/`. Read any PDFs or text files that look like brand guidelines. If there's a colour guide, those are the colours. If there's a font file, that's the font. If there are real photos, those replace placeholders.
2. **Real assets always win.** If a logo exists, use it. If client photography exists, use it instead of `placehold.co`. If a brand guide specifies colours, those override `site.config.theme.accent` for the extended palette (the accent CSS variable still comes from config, but your supporting palette should align with the brand guide).
3. **Derive, don't invent.** When a client has a logo but no formal brand guide, extract the palette from the logo. Pull the dominant colour, a secondary, and a neutral. Match the logo's visual weight when choosing typography: a heavy bold logo pairs with a lighter body font, a refined thin logo pairs with something equally restrained.
4. **Nothing gets fabricated.** If `brand_assets/` contains a photo of a van wrap with a phone number, use the number from `site.config.ts`, not the one on the van (it may be outdated). If the brand guide says "Est. 2015", verify against `site.config.ts` or escalate. Brand assets are design cues, `site.config.ts` is the source of truth for facts.
5. **Don't link or expose `brand_assets/`.** This folder is internal reference material. Nothing in it should be served to visitors, linked from the site, or committed to `public/` unless you're deliberately promoting an asset to production use (e.g. copying client photography into `public/images/`).

**When `brand_assets/` is empty or missing:**

Most early clients won't have formal brand material. That's fine. In that case:

- The accent hex from `site.config.ts` is your only seed. Build outward from it.
- The logo (if present in `public/`) tells you the visual register: cheap clip-art logo means the site needs to elevate the brand, not match the clip-art. A professional logo means match its quality.
- If there's genuinely nothing, you have full creative freedom, but anchor every choice in the business type and audience from `site.config.ts`. A heating engineer and a wedding photographer should never end up with the same palette, typography, or layout language.

### Anti-generic rules

These apply to every build. They exist because Claude Code's default output for "small business website" converges on the same patterns every time.

**Colour:**
- Never use the default Tailwind palette as-is (indigo-500, blue-600, slate-*, etc.). The accent hex in `site.config.theme.accent` is the starting point. Build a full palette from it: tints for backgrounds, shades for text, a complementary or analogous secondary.
- If the accent is a common blue, push the palette somewhere unexpected (warm neutrals, off-whites with character, tinted greys) so it doesn't read as a Bootstrap site.

**Typography:**
- Headings and body text use different typefaces. Pair a display or serif with a clean sans (or vice versa). Load via Google Fonts `<link>` in the layout head or `next/font`.
- Large headings get tight tracking (around -0.02em to -0.04em). Body text gets generous line-height (1.6 to 1.75).
- Never default to Inter, Roboto, Arial, Open Sans, or system-ui as the only typeface. These are the hallmarks of AI-generated output.

**Shadows and depth:**
- Flat `shadow-md` on its own is not enough. Build depth with layered shadows, or colour-tinted shadows at low opacity derived from the accent.
- Think in surface layers: base canvas, elevated cards, floating elements. Everything at the same z-level reads as flat and generic.

**Spacing:**
- Follow a consistent spacing scale. Do not scatter arbitrary Tailwind spacing classes (p-3 here, p-7 there, mt-11 somewhere else). Pick a rhythm and stick to it.
- Sections need breathing room. Default to generous vertical padding between sections (py-20 / py-24 minimum on desktop). Cramped sections are the single most common tell of AI output.

**Images and media:**
- Use `placehold.co` for placeholder images but style them so they feel intentional: rounded corners matching the design language, subtle overlays, aspect ratios that suit the layout.
- If the client has real photography (in `public/`), always use it. Never leave a placeholder when real assets exist.
- When using placeholder images, add a gradient overlay or colour treatment so they integrate with the palette rather than sitting as grey boxes.

**Interactive states:**
- Every clickable element needs hover, focus-visible, and active states. No exceptions.
- Transitions target specific properties (`transition-colors`, `transition-transform`). Never use `transition-all`.
- Easing should feel intentional. Prefer `cubic-bezier(0.16, 1, 0.3, 1)` or similar for a slightly springy feel over linear or ease-in-out.

**Layout:**
- Avoid the "three equal cards in a row" layout as the default for everything. Vary card sizes, use asymmetric grids, offset elements, or use a featured/supporting hierarchy.
- Hero sections should feel like they belong to *this* business, not like a SaaS landing page template. Consider the client's industry: a plumber doesn't need a gradient mesh hero with a floating dashboard mockup.
- Mobile-first. Every layout decision starts at small screens and scales up.

### Industry awareness

These are real businesses, mostly skilled tradespeople. The design should communicate trust, competence, and professionalism to their actual customers (homeowners, local businesses, people searching on their phones).

- Prioritise clarity over cleverness. A roofer's customer wants to see what they do, where they work, and how to get in touch. Fast.
- Contact information (phone, email, service area) should be reachable within one tap/click from any page. Consider a sticky header with a phone CTA on mobile.
- Do not bury the phone number. For trades clients, a visible phone number often matters more than a contact form.
- Service pages should answer "what do you actually do?" plainly before getting creative with layout.
- Testimonials, trust signals, and service areas carry real weight for local businesses. If the brief includes them, make them prominent.

### What "premium" means here

These sites replace outdated, broken, or non-existent web presences for real businesses. "Premium" does not mean award-winning experimental design. It means:

- Loads fast (target < 2s LCP, which Next.js mostly handles if you don't fight it).
- Looks like someone who knows what they're doing built it.
- Works perfectly on mobile (where most of these clients' customers will find them).
- Makes the business look more credible than their competitors' GoDaddy/Wix/WordPress sites.
- Has zero broken links, orphan pages, or placeholder text that shipped by accident.

### Screenshot workflow (Puppeteer)

The project includes a Puppeteer-based screenshot loop so you can see your own output, compare it to references, and fix what's off without waiting for human feedback.

**Setup.** Puppeteer is a project dependency. If `node_modules/puppeteer` is missing, run `pnpm install`. The screenshot script lives at `screenshot.mjs` in the project root. Do not modify it.

**How to use it:**

1. Make sure the dev server is running (`pnpm dev`). Check first; do not start a second instance.
2. Take a screenshot:
   ```bash
   node screenshot.mjs http://localhost:3000          # full page
   node screenshot.mjs http://localhost:3000 hero      # labelled capture
   node screenshot.mjs http://localhost:3000 mobile 390 # mobile width
   ```
3. Screenshots save to `./screenshots/screenshot-N.png` (auto-incremented, never overwritten). Labelled shots save as `screenshot-N-hero.png` etc.
4. Read the saved PNG using your file-read capability and analyse it.

**When to screenshot:**
- After completing each major section (hero, services, about, testimonials, contact, footer).
- After any significant layout or colour change.
- At minimum once at desktop width (1440) and once at mobile width (390) before considering a page done.

**What to check in each screenshot:**
- Spacing and padding: are sections breathing or cramped? Is the rhythm consistent?
- Font sizes and weights: does the hierarchy read clearly? Are headings distinct from body?
- Colours: do they match the palette you intended? Is contrast sufficient for readability?
- Alignment: are elements sitting on a grid or drifting?
- Overall impression: does this look like a site built by someone who cares, or like a template?

**Comparison rounds.** When `.notes/inspiration.md` contains reference URLs or screenshots, compare your output against them. Be specific in your analysis: "the reference has ~24px heading size but mine renders at ~32px" is useful; "looks different" is not. Run at least two comparison rounds (screenshot, analyse, fix, screenshot again) before moving on.

**Quality gate.** Before committing any design work, answer these from the screenshots:

1. Could you tell what business this site is for within 3 seconds of the hero?
2. Does the colour palette feel custom or does it look like a default theme?
3. Is there clear visual hierarchy on every page?
4. On the mobile screenshot, can you reach the phone number or contact form without scrolling?
5. Does this look like a site the client would be proud to show a customer?

If any answer is no, fix it and screenshot again before committing.

---

## Where to find client context

1. `site.config.ts` - structured facts about this client (name, tagline, goal, pages, accent colour, contact details).
2. `.notes/inspiration.md` - reference URLs the client shared during the brief, if the seed handler wrote one. Read-only for design cues; do not link from the site.
3. `site.config._meta.portal_url` - link back to the client's project in the ctrl-alt-elite portal for messaging / questionnaire data.

Do **not** reach out to the ctrl-alt-elite database. This repo is standalone. Everything you need is checked in.

## What you must not change without explicit instruction

- `site.config.types.ts` - the Zod schema is the contract with the automation framework. Changing it breaks seeding.
- `_meta` block in `site.config.ts` - preserve `project_id`, `package_slug`, `seeded_at`, `portal_url` verbatim when editing other fields.
- `app/sitemap.ts`, `app/robots.ts`, `app/opengraph-image.tsx` - stable SEO infra.
- `components/Analytics.tsx` and its mount in `app/layout.tsx` - see the Analytics section below.
- The "Powered by ctrl.alt.elite" attribution block in `components/Footer.tsx` - see Attribution below.
- The `--accent` / `--accent-foreground` CSS variable wiring in `app/layout.tsx` and `lib/config.ts` - the automation framework writes the hex into `site.config.theme.accent` and expects it to surface as the Tailwind `accent` token.

Everything else - pages, components, styling, typography, layout language, content - is fair game. Rewrite freely.

## Attribution

The "Powered by ctrl.alt.elite" link in `components/Footer.tsx` is how the ctrl-alt-elite package pays for itself: it drives discovery back to https://www.ctrl-alt-elite.uk/ so future clients can find the service that built this site. You may restyle it to fit the client's palette (keep it legible, keyboard-focusable, visually subordinate to the client's own branding) but you must not delete it, hide it with `display:none`/`aria-hidden`, move it off the footer, or change the destination URL. If a client asks for it to go, escalate via the portal and wait for sign-off.

## Commands

```bash
pnpm install
pnpm dev         # local dev server
pnpm build       # production build - run before pushing
pnpm lint        # next lint
pnpm typecheck   # tsc --noEmit
```

## Deploy

- Push to `main` auto-deploys to production via Vercel.
- Any other branch gets a preview deploy. Use branches for design revisions so the client can review without risking production.
- Do **not** run the `vercel` CLI. The project is managed by the automation framework.
- Environment variables (`NEXT_PUBLIC_CONTACT_ENDPOINT`, `NEXT_PUBLIC_CONTACT_ACCESS_KEY`, `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_ANALYTICS_ENDPOINT`, `NEXT_PUBLIC_ANALYTICS_SITE_ID`) are set on the Vercel project, not in this repo. `.env.example` documents them for local dev. Add new env vars via the Vercel project settings, not by committing them.

## Escalation

If the brief is ambiguous, or you need information you can't verify from `site.config.ts` (insurance status, year established, business claims, Google Business URL, real photography, etc.), do not invent answers. Post a question back to the client via the portal (URL in `site.config._meta.portal_url`) and wait for an answer before committing. Never fabricate trust claims (insurance, certifications, awards, years in business).

## Changelog commits

When a change is meaningful to the client, tag the commit so it auto-populates the "Recent changes" section in their portal. Format:

```
changelog(type): Short client-friendly title
changelog(type): Short title - Optional longer description
```

**Types** (must be one of these three):
- `feature` - new capability the client can use (e.g. online booking form, new gallery page)
- `bugfix` - something broken that's now fixed (e.g. contact link on mobile, missing logo)
- `update` - visual or content refresh (e.g. updated hero imagery, revised services copy)

The tag can go on the first line of the commit message or on a separate line. Only tagged commits appear in the changelog - routine chores (`chore:`, `fix(deps):`, etc.) are ignored.

**Examples:**

```
changelog(feature): Added online booking form

Integrated Cal.com embed on the contact page behind the
"Book a consultation" CTA.
```

```
changelog(bugfix): Fixed broken contact link on mobile
```

```
chore: bump dependencies

changelog(update): Refreshed hero imagery for spring campaign - New lifestyle photography replacing stock placeholders
```

**Guidelines:**
- Write titles from the client's perspective. "Added services page" not "Created app/services/page.tsx".
- One changelog tag per commit. If a commit does multiple client-visible things, pick the most important one.
- Skip the tag for internal chores (dependency bumps, linting, config tweaks). Not every commit needs to be client-visible.

## Analytics

A lightweight, cookie-free analytics beacon lives in `components/Analytics.tsx` and is rendered from `app/layout.tsx`. It sends anonymised pageview and event data to the ctrl-alt-elite portal so clients can see their site traffic in the Analytics tab.

**How it works:**
- On page load, a 1-pixel GET request fires to the portal's `/api/t` endpoint with the current path, referrer, and screen width.
- On page exit (`visibilitychange: hidden`), a POST beacon sends the time spent on the page.
- No cookies, no PII. Visitors are identified by a daily hash of date + user agent + screen size (same approach as Vercel Analytics).

**Configuration.** Two env vars set automatically by the automation framework on the Vercel project:
- `NEXT_PUBLIC_ANALYTICS_ENDPOINT` - the portal ingestion URL
- `NEXT_PUBLIC_ANALYTICS_SITE_ID` - the project UUID

If either is missing (e.g. local dev without env vars), the script silently does nothing.

**Client-side navigations.** The `Analytics` component uses `usePathname()` to fire a new pageview beacon on every Next.js route change, so all pages are tracked - not just the landing page.

**UTM campaign tracking.** When a visitor arrives via a URL with UTM parameters (e.g. `?utm_source=google&utm_medium=cpc&utm_campaign=spring`), the beacon captures `utm_source`, `utm_medium`, and `utm_campaign` from the landing page URL and sends them with the first pageview. These appear in the Campaigns section of the portal analytics dashboard. UTM params are only sent on the initial pageview per session (the landing page), not on subsequent navigations.

**Custom events (conversions).** To track user actions (form submissions, CTA clicks), call:
```ts
if (typeof window !== "undefined" && (window as any)._cae?.track) {
  (window as any)._cae.track("event_name", { optional: "props" });
}
```

Any session that fires at least one custom event counts as a "conversion" in the analytics dashboard. This lets clients see which pages, referrers, and UTM campaigns drive actual actions - not just visits.

The contact form already tracks `contact_form_submit` on successful submission. If you add new CTAs or forms, wire them up the same way. Common events to consider: `newsletter_signup`, `cta_click`, `booking_started`, `phone_click`.

**Rules:**
- Do not remove, disable, or unmount the analytics component (`components/Analytics.tsx`).
- Do not add third-party analytics (Google Analytics, Plausible, Umami, etc.). The built-in ctrl-alt-elite beacon is the only tracking allowed on this platform.
- Do not add anything that would require a cookie-consent banner (marketing cookies, third-party embeds that set cookies, etc.). The cookie-free beacon is deliberate.
- Event names should be snake_case and descriptive (e.g. `newsletter_signup`, `cta_click`).

## Contact form

`components/ContactForm.tsx` is a client component that POSTs FormData directly to Web3Forms. The access key comes from (in order):

1. `site.config.contact.web3formsAccessKey` - per-client override (rare).
2. `NEXT_PUBLIC_CONTACT_ACCESS_KEY` - shared ctrl-alt-elite key set on the Vercel project.

If neither is set, the form renders but the submit button is disabled with an inline warning. That's the correct behaviour for a fresh clone. Do not commit secrets - the shared key lives in Vercel env vars, not in `site.config.ts`.

You can restyle the form, rewrite its markup, break the fields apart, or replace it with your own component - as long as submissions still POST to the Web3Forms endpoint with the access key resolved as above, and the `contact_form_submit` analytics event still fires on success.

## Pages and nav

`site.config.pages` controls which pages appear in the nav and sitemap. Slugs are free-form strings: `"home"` always maps to `/`, anything else to `/<slug>`. The page files in `app/` ship as minimal placeholders for the four common seeds (`home`, `about`, `services`, `contact`) - rewrite them freely, and add new routes per brief (e.g. `/work`, `/menu`, `/classes`) by dropping a `page.tsx` under `app/<slug>/` and appending the slug to `site.config.pages`.

Labels in the nav are derived from the slug by title-casing it (e.g. `case-studies` -> "Case studies"). Override per-slug via `site.config.pageLabels` when the derived label is wrong (e.g. `{ "work": "Portfolio" }`).

## Logo

Drop the client's logo into `public/` as `logo.svg` (preferred) / `logo.webp` / `logo.png` / `logo.jpg`. `components/Header.tsx` auto-resolves whichever one it finds, with SVG winning for crispness. If you change the Header layout, keep the filesystem lookup (or replicate it) so the seeded logo continues to surface.

## Structured data (JSON-LD)

`lib/jsonld.ts` emits a schema.org block injected into every page via `app/layout.tsx`. It defaults to `Organization` - safe for most businesses, agencies, creators, and product companies. For bricks-and-mortar clients that benefit from LocalBusiness SEO, set `site.config.business.schemaType` to `"LocalBusiness"` or a more specific subtype (`"Restaurant"`, `"Dentist"`, `"Store"`, etc.). For anything further (Person, Event, Product, bespoke graphs), edit `lib/jsonld.ts` directly - the layout just serialises whatever the function returns.

## Theme

Only one design token is wired through from `site.config.ts`: the accent hex. `app/layout.tsx` writes it to `--accent` on `<html>`, and Tailwind picks it up as `bg-accent` / `text-accent-foreground` (the foreground is luminance-computed in `lib/config.ts` so text on the accent always reads). Any further palette, typography, spacing scale, motion language, or component vocabulary is yours to invent per client - there's no shared UI kit to reach into.

## Tier branches: free vs paid

Some clients are quoted on two tiers. The convention:

- `main` - the paid tier (multi-page bespoke build).
- `basic-tier` - the free / entry tier (one-page site, no nav). Branched off `main` and stripped down by collapsing the routes into a single `/` page and setting `site.config.pages = ["home"]` (which auto-hides the nav).

Both branches deploy automatically: `main` is production, `basic-tier` is a Vercel preview URL. You can send a client both URLs side by side so they can compare and pick. When they choose, the chosen branch becomes the live one.

You generally don't need to maintain `basic-tier` after the comparison - it's a sales artefact. If a client picks the basic tier, delete `main`'s richer pages and bring `basic-tier` over (or just rebase main onto it).