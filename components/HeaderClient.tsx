"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavEntry = { label: string; href: string };

// Minimal client header. Renders logo + site name + nav links driven by
// site.config.pages. Deliberately unopinionated so each client site can
// impose its own design language - rewrite this component freely.
export function HeaderClient({
  logoUrl,
  siteName,
  nav,
}: {
  logoUrl: string | null;
  siteName: string;
  nav: NavEntry[];
}) {
  const pathname = usePathname();

  return (
    <header className="border-b border-black/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="flex items-center gap-2" aria-label={siteName}>
          {logoUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={logoUrl} alt="" className="h-8 w-auto" />
          ) : null}
          <span className="font-semibold tracking-tight">{siteName}</span>
        </Link>

        {nav.length > 1 && (
          <nav className="flex items-center gap-5 text-sm">
            {nav.map((entry) => (
              <Link
                key={entry.href}
                href={entry.href}
                aria-current={pathname === entry.href ? "page" : undefined}
                className="text-slate-600 hover:text-slate-900"
              >
                {entry.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
