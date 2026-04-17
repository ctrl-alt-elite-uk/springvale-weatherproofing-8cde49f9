import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  // Per-site override wins; otherwise fall back to the shared env var set by
  // the automation framework on the Vercel project.
  const accessKey =
    siteConfig.contact.web3formsAccessKey ??
    process.env.NEXT_PUBLIC_CONTACT_ACCESS_KEY;
  const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-4xl font-bold tracking-tight">Contact</h1>
      <p className="mt-4 max-w-2xl text-lg text-slate-600">
        Replace the copy around this form to suit the client.
      </p>
      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <dl className="space-y-3 text-sm text-slate-700">
          {siteConfig.contact.email && (
            <div>
              <dt className="font-semibold text-slate-900">Email</dt>
              <dd>
                <a
                  className="text-accent hover:underline"
                  href={`mailto:${siteConfig.contact.email}`}
                >
                  {siteConfig.contact.email}
                </a>
              </dd>
            </div>
          )}
          {siteConfig.contact.phone && (
            <div>
              <dt className="font-semibold text-slate-900">Phone</dt>
              <dd>
                <a
                  className="text-accent hover:underline"
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                >
                  {siteConfig.contact.phone}
                </a>
              </dd>
            </div>
          )}
          {siteConfig.contact.address && (
            <div>
              <dt className="font-semibold text-slate-900">Address</dt>
              <dd>{siteConfig.contact.address}</dd>
            </div>
          )}
        </dl>
        <ContactForm accessKey={accessKey} endpoint={endpoint} />
      </div>
    </section>
  );
}
