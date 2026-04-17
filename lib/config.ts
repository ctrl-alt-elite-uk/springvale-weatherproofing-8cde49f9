import rawConfig from "@/site.config";
import { SiteConfigSchema, type SiteConfig, type PageKey } from "@/site.config.types";

// Parse the config at module load. A bad config fails the build loudly,
// which is the right behaviour because a mis-seeded config would otherwise
// ship broken pages.
export const siteConfig: SiteConfig = SiteConfigSchema.parse(rawConfig);

// Convert the hex accent into the `r g b` triple Tailwind's rgb() utilities
// expect via the CSS custom property. Computed once at build time.
export function accentRgbTriple(): string {
  const hex = siteConfig.theme.accent.replace("#", "");
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  return `${r} ${g} ${b}`;
}

// Foreground colour for text on an accent-coloured background. Luminance
// check keeps us readable across any client-chosen accent.
export function accentForegroundRgbTriple(): string {
  const hex = siteConfig.theme.accent.replace("#", "");
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  const luma = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luma > 0.55 ? "15 23 42" : "255 255 255";
}

// Ordered nav entries driven by site.config.pages. Any slug is allowed:
// "home" maps to "/", anything else to "/<slug>". Labels come from
// siteConfig.pageLabels when set, otherwise derived by title-casing the
// slug (kebab-case and underscores handled, e.g. "case-studies" -> "Case
// studies").
export function navEntries(): Array<{ page: PageKey; label: string; href: string }> {
  const overrides = siteConfig.pageLabels ?? {};
  return siteConfig.pages.map((slug) => ({
    page: slug,
    href: slug === "home" ? "/" : `/${slug}`,
    label: overrides[slug] ?? titleCase(slug),
  }));
}

function titleCase(slug: string): string {
  const spaced = slug.replace(/[-_]+/g, " ").trim();
  if (!spaced) return slug;
  return spaced.charAt(0).toUpperCase() + spaced.slice(1);
}
