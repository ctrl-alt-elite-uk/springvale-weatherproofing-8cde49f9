import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/lib/config";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Enquire about a roof survey, repair, or installation. Springvale Weatherproofing replies the same working day.",
};

export default function ContactPage() {
  const accessKey =
    siteConfig.contact.web3formsAccessKey ??
    process.env.NEXT_PUBLIC_CONTACT_ACCESS_KEY;
  const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;

  const hasEmail = !!siteConfig.contact.email;
  const hasPhone = !!siteConfig.contact.phone;
  const hasAddress = !!siteConfig.contact.address;

  return (
    <>
      <section className="relative overflow-hidden bg-ink pb-24 pt-40 text-white md:pb-32 md:pt-48">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images.heroContact}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-90"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/55 to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "88px 88px",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-0 h-[420px] w-[420px] rounded-full bg-signal/20 blur-[140px]"
        />
        <div className="relative mx-auto max-w-[1440px] px-6 md:px-10">
          <span className="eyebrow inline-flex items-center gap-3 text-signal">
            <span className="h-px w-8 bg-signal" />
            Contact
          </span>
          <h1 className="mt-8 max-w-4xl font-display text-[clamp(2.5rem,7vw,5.5rem)] font-black leading-[0.98] tracking-tightest text-white">
            Start with a few
            <br />
            lines of <span className="italic text-ink-soft">context.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
            Tell us about the building, the issue, and anything you already
            know - previous repairs, age of the roof, access constraints. The
            more detail you can share upfront, the quicker we can come back
            with something useful.
          </p>
        </div>
      </section>

      <section className="relative bg-surface">
        <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
            <aside className="lg:col-span-5">
              <span className="eyebrow text-signal">Enquiries</span>
              <h2 className="mt-6 font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-black leading-[1.05] tracking-tighter text-ink">
                We reply the same
                <br />
                working day.
              </h2>
              <p className="mt-6 text-[1.0625rem] leading-relaxed text-slab-dim">
                Every enquiry gets a human response. If it needs a site visit,
                we&apos;ll arrange one. If we&apos;re not the right fit for the
                work, we&apos;ll say so and point you somewhere that is.
              </p>

              {(hasEmail || hasPhone || hasAddress) && (
                <dl className="mt-10 space-y-6">
                  {hasEmail && (
                    <div>
                      <dt className="eyebrow text-slab-dim">Email</dt>
                      <dd className="mt-2">
                        <a
                          href={`mailto:${siteConfig.contact.email}`}
                          className="font-display text-xl font-black tracking-tight text-ink transition-colors duration-300 ease-spring hover:text-signal"
                        >
                          {siteConfig.contact.email}
                        </a>
                      </dd>
                    </div>
                  )}
                  {hasPhone && (
                    <div>
                      <dt className="eyebrow text-slab-dim">Phone</dt>
                      <dd className="mt-2">
                        <a
                          href={`tel:${siteConfig.contact.phone!.replace(/\s/g, "")}`}
                          className="font-display text-xl font-black tracking-tight text-ink transition-colors duration-300 ease-spring hover:text-signal"
                        >
                          {siteConfig.contact.phone}
                        </a>
                      </dd>
                    </div>
                  )}
                  {hasAddress && (
                    <div>
                      <dt className="eyebrow text-slab-dim">Office</dt>
                      <dd className="mt-2 text-[0.9375rem] leading-relaxed text-slab">
                        {siteConfig.contact.address}
                      </dd>
                    </div>
                  )}
                </dl>
              )}

              <div className="mt-10 border-l-2 border-signal pl-6">
                <p className="eyebrow text-signal">Typical turnaround</p>
                <ul className="mt-3 space-y-1 text-[0.9375rem] text-slab-dim">
                  <li>Email reply &mdash; same working day</li>
                  <li>Site survey &mdash; usually within one week</li>
                  <li>Written quote &mdash; within a week of the survey</li>
                </ul>
              </div>
            </aside>

            <div className="lg:col-span-7">
              <ContactForm accessKey={accessKey} endpoint={endpoint} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
