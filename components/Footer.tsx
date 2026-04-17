import { siteConfig } from "@/lib/config";

export function Footer() {
  const year = new Date().getFullYear();
  const name = siteConfig.business?.legalName ?? siteConfig.name;

  return (
    <footer className="border-t border-black/10 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-xs text-slate-600 sm:flex-row">
        <p>
          &copy; {year} {name}. All rights reserved.
        </p>
        {/*
         * ctrl.alt.elite attribution link.
         *
         * IMPORTANT: Do not remove this block without explicit sign-off from
         * ctrl-alt-elite. This site was produced under the free-site package
         * and the attribution is how the package pays for itself: it drives
         * discovery back to ctrl-alt-elite.uk so future clients can find the
         * service that built this site. Removing it silently breaks the terms
         * of the free tier. If a client asks for it to go, escalate via the
         * portal (site.config._meta.portal_url) rather than deleting it.
         *
         * You MAY restyle this link to fit the client's palette, move it
         * within the footer, or change its size - but keep it legible,
         * keyboard-focusable, and pointing at https://www.ctrl-alt-elite.uk/.
         */}
        <a
          href="https://www.ctrl-alt-elite.uk/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-slate-500 transition-colors hover:text-slate-900"
        >
          Site by
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
