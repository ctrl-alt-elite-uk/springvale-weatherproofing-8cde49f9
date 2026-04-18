import Link from "next/link";
import { siteConfig, navEntries } from "@/lib/config";

export function Footer() {
  const year = new Date().getFullYear();
  const name = siteConfig.business?.legalName ?? siteConfig.name;
  const nav = navEntries();

  return (
    <footer className="relative bg-ink-deep text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal/40 to-transparent" />

      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-14 px-6 py-20 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <p className="font-display text-2xl font-black tracking-tight text-white">
            {name}
          </p>
          <p className="mt-4 max-w-sm text-[0.9375rem] leading-relaxed text-white/60">
            {siteConfig.tagline}
          </p>

          {(siteConfig.contact.phone || siteConfig.contact.address) && (
            <dl className="mt-8 space-y-4 text-[0.9375rem]">
              {siteConfig.contact.phone && (
                <div>
                  <dt className="eyebrow text-ink-soft">Phone</dt>
                  <dd className="mt-1">
                    <a
                      href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                      className="font-display text-xl font-black tracking-tight text-white transition-colors duration-300 ease-spring hover:text-signal"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </dd>
                </div>
              )}
              {siteConfig.contact.address && (
                <div>
                  <dt className="eyebrow text-ink-soft">Office</dt>
                  <dd className="mt-1 text-white/70">
                    {siteConfig.contact.address}
                  </dd>
                </div>
              )}
            </dl>
          )}

          <p className="mt-8 eyebrow text-ink-soft">Ready when you are</p>
          <Link
            href="/contact"
            className="group mt-3 inline-flex items-baseline gap-3 font-display text-3xl font-black tracking-tight text-white transition-colors duration-300 ease-spring hover:text-signal md:text-4xl"
          >
            Start a project
            <span
              aria-hidden="true"
              className="text-signal transition-transform duration-300 ease-spring group-hover:translate-x-1"
            >
              &rarr;
            </span>
          </Link>
        </div>

        <div className="md:col-span-3 md:col-start-7">
          <p className="eyebrow text-ink-soft">Sitemap</p>
          <ul className="mt-5 space-y-3">
            {nav.map((entry) => (
              <li key={entry.href}>
                <Link
                  href={entry.href}
                  className="inline-flex items-center gap-2 text-[0.9375rem] text-white/80 transition-colors duration-300 ease-spring hover:text-signal"
                >
                  {entry.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow text-ink-soft">Capabilities</p>
          <ul className="mt-5 space-y-3 text-[0.9375rem] text-white/80">
            <li>Built-up felt roofing</li>
            <li>Pitched roofing systems</li>
            <li>Single ply membranes</li>
            <li>Liquid coating systems</li>
            <li>Profiled metal cladding</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1440px] flex-col gap-4 border-t border-white/5 px-6 py-6 text-[0.75rem] text-white/40 md:flex-row md:items-center md:justify-between md:px-10">
        <p>
          &copy; {year} {name}. All rights reserved.
        </p>
        {/*
         * ctrl.alt.elite attribution. Do not remove without explicit sign-off.
         * Restyled to fit the footer palette; link + destination unchanged.
         */}
        <a
          href="https://www.ctrl-alt-elite.uk/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-white/40 transition-colors duration-300 ease-spring hover:text-signal focus-visible:text-signal"
        >
          <span>Site by</span>
          <svg
            className="h-3 w-3"
            viewBox="0 0 32 32"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M0 0h32v32H0V0Zm11 6a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z"
            />
          </svg>
          <span className="font-semibold tracking-tight">ctrl.alt.elite</span>
        </a>
      </div>
    </footer>
  );
}
