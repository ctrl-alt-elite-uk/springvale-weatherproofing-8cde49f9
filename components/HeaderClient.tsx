"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type NavEntry = { label: string; href: string };

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
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Every page opens with a dark hero band, so default the header text to
  // white when we are at the top of the page. Once the user scrolls past
  // the hero, we drop the glass panel and switch to dark text on light.
  const onDark = !scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,box-shadow,border-color] duration-500 ease-spring ${
        scrolled || open
          ? "glass border-b border-slab-mute/30 shadow-ambient"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-6 px-6 md:h-20 md:px-10">
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label={siteName}
        >
          {logoUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={logoUrl} alt="" className="h-8 w-auto" />
          ) : (
            <span
              className={`flex h-8 w-8 items-center justify-center font-display font-black text-sm tracking-tighter transition-colors duration-300 ease-spring ${
                onDark
                  ? "bg-white text-ink group-hover:bg-signal group-hover:text-white"
                  : "bg-ink text-white group-hover:bg-signal"
              }`}
            >
              SV
            </span>
          )}
          <span
            className={`font-display text-[0.8125rem] md:text-sm font-black uppercase tracking-[0.18em] transition-colors duration-300 ease-spring ${
              onDark ? "text-white" : "text-ink"
            }`}
          >
            {siteName}
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((entry) => {
            const active = pathname === entry.href;
            return (
              <Link
                key={entry.href}
                href={entry.href}
                aria-current={active ? "page" : undefined}
                className={`eyebrow transition-colors duration-300 ease-spring ${
                  active
                    ? "text-signal"
                    : onDark
                      ? "text-white/70 hover:text-white"
                      : "text-slab-dim hover:text-ink"
                }`}
              >
                {entry.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className={`eyebrow inline-flex items-center gap-2 px-5 py-3 transition-colors duration-300 ease-spring ${
              onDark
                ? "bg-signal text-white hover:bg-white hover:text-ink"
                : "bg-ink text-white hover:bg-signal"
            }`}
          >
            Request quote
            <span aria-hidden="true" className="text-base leading-none">
              &rarr;
            </span>
          </Link>
        </nav>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="relative flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span
            className={`block h-[2px] w-5 transition-[transform,background-color] duration-300 ease-spring ${
              onDark ? "bg-white" : "bg-ink"
            } ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`block h-[2px] w-5 transition-[opacity,background-color] duration-200 ${
              onDark ? "bg-white" : "bg-ink"
            } ${open ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`block h-[2px] w-5 transition-[transform,background-color] duration-300 ease-spring ${
              onDark ? "bg-white" : "bg-ink"
            } ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`md:hidden ${open ? "block" : "hidden"} glass border-t border-slab-mute/30`}
      >
        <nav className="mx-auto flex max-w-[1440px] flex-col gap-1 px-6 py-6">
          {nav.map((entry) => {
            const active = pathname === entry.href;
            return (
              <Link
                key={entry.href}
                href={entry.href}
                aria-current={active ? "page" : undefined}
                className={`font-display text-2xl font-black tracking-tighter py-2 ${
                  active ? "text-signal" : "text-ink"
                }`}
              >
                {entry.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="eyebrow mt-4 inline-flex items-center justify-between bg-ink px-5 py-4 text-white"
          >
            <span>Request quote</span>
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
