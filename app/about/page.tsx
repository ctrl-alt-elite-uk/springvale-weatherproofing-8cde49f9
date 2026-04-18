import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Award, FileCheck2, Building2 } from "lucide-react";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "About",
  description:
    "Springvale Weatherproofing - a Newport-based roofing contractor serving South Wales. NFRC and Constructionline accredited. Long-term contracts with local authorities and main contractors.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader />
      <Narrative />
      <Capabilities />
      <Accreditations />
      <Values />
      <BottomCta />
    </>
  );
}

function PageHeader() {
  return (
    <section className="relative overflow-hidden bg-ink pb-24 pt-40 text-white md:pb-32 md:pt-48">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={images.heroAbout}
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
          About Springvale
        </span>
        <h1 className="mt-8 max-w-4xl font-display text-[clamp(2.5rem,7vw,5.5rem)] font-black leading-[0.98] tracking-tightest text-white">
          Newport-based.
          <br />
          South Wales <span className="italic text-ink-soft">covered.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
          Springvale Weatherproofing Limited is a roofing contractor based in
          Newport, South Wales. We offer a complete roofing service - new
          roofs, replacements, emergency repairs and day-to-day maintenance -
          for local authorities, main contractors and private clients.
        </p>
      </div>
    </section>
  );
}

function Narrative() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-[1440px] px-6 py-28 md:px-10 md:py-36">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <span className="eyebrow text-signal">What we do</span>
            <h2 className="mt-6 font-display text-[clamp(2rem,4vw,3.5rem)] font-black leading-[1.02] tracking-tighter text-ink">
              A complete roofing service, across the whole envelope.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-4">
            <div className="space-y-8 text-[1.0625rem] leading-[1.75] text-slab-dim">
              <p>
                A roof is the most exposed part of a building, and the most
                expensive thing to get wrong. When a covering fails, the damage
                rarely stays on the roof - it finds its way down through
                ceilings, insulation and electrics until someone notices a
                stain.
              </p>
              <p>
                Our work starts well before the first fix. We survey the
                structure, look at how water actually moves across it, and
                specify the system that suits the building - not the system
                we&apos;d most like to fit. Where existing coverings can be
                overlaid safely, we overlay. Where they need to come off, we
                strip cleanly and protect the interior while we work.
              </p>
              <p>
                Then we install - properly, methodically, and to the
                manufacturer&apos;s detailing. Every project carries a
                photographic record and a manufacturer insurance-backed
                warranty on the system. That&apos;s it. No drama, no repeat
                call-outs, no surprise invoices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  const rows = [
    {
      label: "Built-up felt",
      body: "Multi-layer bituminous flat roofing for commercial and civic buildings. Torch-applied and self-adhesive systems, specified for the substrate.",
    },
    {
      label: "Pitched roofing",
      body: "Natural slate, concrete and clay tile, interlocking profiles. Re-roofs, extensions, dormers and heritage repairs.",
    },
    {
      label: "Single ply",
      body: "Single-layer synthetic membranes. Fast to install, light on the structure, detailed cleanly around penetrations and upstands.",
    },
    {
      label: "Liquid coating",
      body: "Cold-applied waterproofing for complex roof details, gutters and balconies. Ideal for refurbishment where removing the existing covering isn't practical.",
    },
    {
      label: "Profiled cladding",
      body: "Single-skin and composite panel cladding for industrial and agricultural envelopes. Wall panels, roof sheets and trim detailing.",
    },
    {
      label: "Repairs & maintenance",
      body: "Emergency repairs, leak tracing, flashing renewals and planned maintenance programmes for existing roofs.",
    },
  ];

  return (
    <section className="bg-surface-low">
      <div className="mx-auto max-w-[1440px] px-6 py-28 md:px-10 md:py-36">
        <div className="mb-14 max-w-2xl">
          <span className="eyebrow text-signal">Capabilities</span>
          <h2 className="mt-6 font-display text-[clamp(2rem,4vw,3.5rem)] font-black leading-[1.02] tracking-tighter text-ink">
            The systems we install.
          </h2>
        </div>

        <div className="divide-y divide-slab-mute/30 border-y border-slab-mute/30">
          {rows.map((row, i) => (
            <div
              key={row.label}
              className="grid grid-cols-1 gap-4 py-8 md:grid-cols-12 md:gap-10 md:py-10"
            >
              <div className="md:col-span-1">
                <span className="font-display text-xl font-black tracking-tighter text-signal">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="md:col-span-4">
                <h3
                  className="font-display text-2xl font-black tracking-tight text-ink"
                  dangerouslySetInnerHTML={{ __html: row.label }}
                />
              </div>
              <div className="md:col-span-7">
                <p
                  className="text-[1.0625rem] leading-relaxed text-slab-dim"
                  dangerouslySetInnerHTML={{ __html: row.body }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Accreditations() {
  const items = [
    {
      Icon: ShieldCheck,
      label: "NFRC",
      body: "Full and active member of the National Federation of Roofing Contractors.",
    },
    {
      Icon: Award,
      label: "Constructionline",
      body: "Full and active member of Constructionline, the UK procurement pre-qualification standard.",
    },
    {
      Icon: FileCheck2,
      label: "Insurance-backed warranty",
      body: "Manufacturer insurance-backed warranties on the systems we install.",
    },
    {
      Icon: Building2,
      label: "Public & private sector",
      body: "Long-term contracts with several local authorities and main contractors.",
    },
  ];

  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-[1440px] px-6 py-28 md:px-10 md:py-36">
        <div className="mb-14 max-w-2xl">
          <span className="eyebrow text-signal">Credentials</span>
          <h2 className="mt-6 font-display text-[clamp(2rem,4vw,3.5rem)] font-black leading-[1.02] tracking-tighter text-ink">
            Accredited, insured, accountable.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.label}>
              <item.Icon
                size={40}
                strokeWidth={1.75}
                aria-hidden="true"
                className="text-signal"
              />
              <p
                className="mt-6 font-display text-xl font-black tracking-tight text-ink"
                dangerouslySetInnerHTML={{ __html: item.label }}
              />
              <p
                className="mt-3 text-[0.9375rem] leading-relaxed text-slab"
                dangerouslySetInnerHTML={{ __html: item.body }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Values() {
  const values = [
    {
      title: "Tidy sites",
      body: "A roofing job shouldn&apos;t be something a customer has to survive. Materials are stacked, paths kept clear, debris removed daily.",
    },
    {
      title: "Plain language",
      body: "We explain what we&apos;re doing and why in words the building owner can actually follow - including on the quote.",
    },
    {
      title: "Work we stand behind",
      body: "If something&apos;s not right, we come back. Manufacturer insurance-backed warranties on materials, our own on workmanship.",
    },
  ];

  return (
    <section className="bg-ink text-white">
      <div className="mx-auto max-w-[1440px] px-6 py-28 md:px-10 md:py-36">
        <div className="mb-16 max-w-3xl">
          <span className="eyebrow text-signal">How we work</span>
          <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,4rem)] font-black leading-[1.02] tracking-tightest text-white">
            Quiet roofs.
            <br />
            Quieter handovers.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-ink-raised p-10 transition-transform duration-500 ease-spring hover:-translate-y-1"
            >
              <h3 className="font-display text-2xl font-black tracking-tight text-white">
                {value.title}
              </h3>
              <p
                className="mt-4 text-[0.9375rem] leading-relaxed text-white/70"
                dangerouslySetInnerHTML={{ __html: value.body }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BottomCta() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-12">
          <div className="md:col-span-8">
            <h2 className="font-display text-[clamp(1.75rem,3.5vw,3rem)] font-black leading-[1.05] tracking-tighter text-ink">
              Got a roof you&apos;re not sure about?
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-slab">
              Call{" "}
              <a
                href="tel:01633213433"
                className="text-signal hover:underline"
              >
                01633 213433
              </a>{" "}
              or send a few photos and a short description - we&apos;ll tell
              you whether it needs repair, overlay or replacement, honestly.
            </p>
          </div>
          <div className="md:col-span-4 md:justify-self-end">
            <Link
              href="/contact"
              className="eyebrow group inline-flex items-center gap-3 bg-ink px-10 py-6 text-white transition-colors duration-300 ease-spring hover:bg-signal"
            >
              Start an enquiry
              <span
                aria-hidden="true"
                className="transition-transform duration-300 ease-spring group-hover:translate-x-1"
              >
                &rarr;
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
