import Link from "next/link";
import {
  Layers3,
  Home as HomeIcon,
  Droplets,
  Columns4,
  Scroll,
  ShieldCheck,
  Award,
  FileCheck2,
  Building2,
} from "lucide-react";
import { images } from "@/lib/images";

const systems = [
  {
    key: "felt",
    name: "Built-up felt",
    summary:
      "Multi-layer bituminous membranes for flat roofs - engineered for long-life performance on commercial and civic builds.",
    span: "lg:col-span-7",
    image: images.systems.felt,
    Icon: Layers3,
  },
  {
    key: "pitched",
    name: "Pitched roofing",
    summary:
      "Slate, tile and composite pitched systems for residential, heritage and new-build projects.",
    span: "lg:col-span-5",
    image: images.systems.pitched,
    Icon: HomeIcon,
  },
  {
    key: "single-ply",
    name: "Single ply",
    summary:
      "Single-layer synthetic membranes - fast to install, light on the structure, detailed cleanly around penetrations.",
    span: "lg:col-span-5",
    image: images.systems.singlePly,
    Icon: Scroll,
  },
  {
    key: "liquid",
    name: "Liquid coating",
    summary:
      "Cold-applied waterproofing for complex geometries, roof details and refurbishment overlays.",
    span: "lg:col-span-7",
    image: images.systems.liquid,
    Icon: Droplets,
  },
  {
    key: "cladding",
    name: "Profiled cladding",
    summary:
      "Steel and composite envelope solutions for warehousing, industrial and agricultural assets.",
    span: "lg:col-span-12",
    image: images.systems.cladding,
    Icon: Columns4,
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <AccreditationsStrip />
      <CoreSystems />
      <Approach />
      <CtaBand />
    </>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={images.heroHome}
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
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "88px 88px",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 h-[560px] w-[560px] rounded-full bg-signal/25 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -bottom-40 h-[520px] w-[520px] rounded-full bg-ink-raised/70 blur-[140px]"
      />

      <div className="relative mx-auto grid min-h-[92vh] max-w-[1440px] grid-cols-1 gap-12 px-6 pb-24 pt-36 md:px-10 md:pt-40 lg:grid-cols-12 lg:pb-32 lg:pt-48">
        <div className="lg:col-span-8">
          <span className="eyebrow inline-flex items-center gap-3 text-signal">
            <span className="h-px w-8 bg-signal" />
            Roofing &amp; weatherproofing &middot; South Wales
          </span>
          <h1 className="mt-8 font-display text-[clamp(2.75rem,7.5vw,6rem)] font-black leading-[0.98] tracking-tightest text-white">
            A complete
            <br />
            roofing <span className="italic text-ink-soft">service.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/70 md:text-xl">
            New roofs, replacements, emergency repairs and day-to-day
            maintenance - across commercial, public sector and residential
            buildings. Long-term contracts with local authorities and main
            contractors throughout South Wales.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="eyebrow group inline-flex items-center gap-3 bg-signal px-8 py-5 text-white transition-transform duration-300 ease-spring hover:-translate-y-0.5"
            >
              Request a quote
              <span
                aria-hidden="true"
                className="transition-transform duration-300 ease-spring group-hover:translate-x-1"
              >
                &rarr;
              </span>
            </Link>
            <a
              href="tel:01633213433"
              className="eyebrow group inline-flex items-center gap-3 border border-white/15 px-8 py-5 text-white transition-colors duration-300 ease-spring hover:border-white/40 hover:bg-white/5"
            >
              01633 213433
            </a>
          </div>
        </div>

        <aside className="lg:col-span-4 lg:pt-10">
          <div className="relative h-full">
            <div className="glass-dark flex h-full flex-col justify-between gap-10 border border-white/10 p-8">
              <div>
                <span className="eyebrow text-signal">What we install</span>
                <ul className="mt-6 space-y-4 font-display text-2xl font-black tracking-tight text-white">
                  <li className="flex items-baseline gap-3">
                    <span className="text-signal">01</span> Built-up felt
                  </li>
                  <li className="flex items-baseline gap-3">
                    <span className="text-signal">02</span> Pitched roofing
                  </li>
                  <li className="flex items-baseline gap-3">
                    <span className="text-signal">03</span> Single ply
                  </li>
                  <li className="flex items-baseline gap-3">
                    <span className="text-signal">04</span> Liquid coating
                  </li>
                  <li className="flex items-baseline gap-3">
                    <span className="text-signal">05</span> Profiled cladding
                  </li>
                </ul>
              </div>
              <div className="border-t border-white/10 pt-6">
                <p className="text-sm leading-relaxed text-white/60">
                  New, replacement, repair or maintenance - we survey the roof
                  and specify the system that suits the building.
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

function AccreditationsStrip() {
  const items = [
    {
      Icon: ShieldCheck,
      label: "NFRC",
      body: "Full and active member of the National Federation of Roofing Contractors.",
    },
    {
      Icon: Award,
      label: "Constructionline",
      body: "Full and active member of Constructionline, the UK procurement standard.",
    },
    {
      Icon: FileCheck2,
      label: "Insurance-backed",
      body: "Manufacturer insurance-backed warranties on the systems we install.",
    },
    {
      Icon: Building2,
      label: "Public & private",
      body: "Long-term contracts with local authorities and main contractors.",
    },
  ];

  return (
    <section className="relative bg-surface-low">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-28">
        <div className="mb-14 max-w-xl">
          <span className="eyebrow text-signal">Credentials</span>
          <h2 className="mt-5 font-display text-2xl font-black tracking-tight text-ink md:text-3xl">
            Accredited, insured, accountable.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-4">
          {items.map((item) => (
            <div key={item.label}>
              <item.Icon
                size={32}
                strokeWidth={1.75}
                aria-hidden="true"
                className="text-signal"
              />
              <p className="mt-5 font-display text-xl font-black tracking-tight text-ink">
                {item.label}
              </p>
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

function CoreSystems() {
  return (
    <section className="relative bg-surface">
      <div className="mx-auto max-w-[1440px] px-6 py-28 md:px-10 md:py-36">
        <div className="grid grid-cols-1 items-end gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <span className="eyebrow text-signal">Core systems</span>
            <h2 className="mt-6 font-display text-[clamp(2.25rem,5vw,4.25rem)] font-black leading-[1.02] tracking-tighter text-ink">
              Five systems.
              <br />
              One standard of finish.
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-lg leading-relaxed text-slab">
              We work across the weatherproofing systems most buildings
              actually need. Each one is specified to the building in front of
              us - pitch, substrate, access, lifetime - not to whatever we
              happen to stock.
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-6">
          {systems.map((system, i) => (
            <SystemCard key={system.key} system={system} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SystemCard({
  system,
  index,
}: {
  system: (typeof systems)[number];
  index: number;
}) {
  return (
    <article
      className={`group relative isolate flex min-h-[360px] flex-col justify-end overflow-hidden bg-ink p-8 text-white transition-transform duration-500 ease-spring hover:-translate-y-1 lg:min-h-[440px] lg:p-12 ${system.span}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={system.image}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-85 transition-transform duration-700 ease-spring group-hover:scale-[1.04]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-spring group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(120% 80% at 100% 0%, rgba(230,97,0,0.22), transparent 55%)",
        }}
      />

      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-8 top-8 font-display text-5xl font-black tracking-tighter text-white/15 lg:right-12 lg:top-10 lg:text-6xl"
      >
        0{index}
      </span>

      <div className="relative">
        <h3 className="font-display text-3xl font-black leading-tight tracking-tight text-white lg:text-4xl">
          {system.name}
        </h3>
        <p className="mt-4 max-w-md text-[0.9375rem] leading-relaxed text-white/75">
          {system.summary}
        </p>
        <system.Icon
          size={20}
          strokeWidth={2.25}
          aria-hidden="true"
          className="mt-8 text-signal transition-transform duration-500 ease-spring group-hover:-translate-y-0.5"
        />
      </div>
    </article>
  );
}

function Approach() {
  const pillars = [
    {
      title: "Specified to the building",
      body: "We survey the substrate, falls, and details before we recommend a system. The right spec lasts longer than the cheapest one.",
    },
    {
      title: "Clean, methodical sites",
      body: "Materials stacked, access protected, waste managed. Customers consistently tell us the tidy handover stood out.",
    },
    {
      title: "Insurance-backed warranties",
      body: "Manufacturer insurance-backed warranties on the systems we install, with photographic records kept for every project.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-surface-low">
      <div className="mx-auto max-w-[1440px] px-6 py-28 md:px-10 md:py-36">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="relative lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={images.approach}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover opacity-95"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-br from-ink/35 via-ink/20 to-ink/70"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.1]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(115deg, rgba(255,255,255,0.5) 0 1px, transparent 1px 18px)",
                }}
              />
              <div className="absolute inset-0 flex flex-col justify-between p-10 text-white">
                <span className="eyebrow text-signal">The approach</span>
                <div>
                  <p className="font-display text-4xl font-black leading-[0.95] tracking-tightest text-white md:text-5xl">
                    Survey.
                    <br />
                    Specify.
                    <br />
                    Install.
                    <br />
                    <span className="text-signal">Sign off.</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 hidden bg-signal p-6 text-white shadow-lift lg:block">
              <p className="eyebrow opacity-90">Every project</p>
              <p className="mt-2 font-display text-2xl font-black tracking-tight">
                Photographic record
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-8">
            <span className="eyebrow text-signal">How we work</span>
            <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,3.75rem)] font-black leading-[1.02] tracking-tighter text-ink">
              A tidy site, a
              <br />
              properly specified system,
              <br />
              a roof that stays quiet.
            </h2>

            <div className="mt-12 grid gap-10">
              {pillars.map((pillar, i) => (
                <div
                  key={pillar.title}
                  className="grid grid-cols-[auto_1fr] items-start gap-6"
                >
                  <span className="font-display text-2xl font-black tracking-tightest text-signal">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-black tracking-tight text-ink">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-[0.9375rem] leading-relaxed text-slab">
                      {pillar.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-signal/20 blur-[120px]"
      />
      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-12 px-6 py-24 md:px-10 md:py-32 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <span className="eyebrow text-signal">Next step</span>
          <h2 className="mt-6 font-display text-[clamp(2rem,5vw,4.5rem)] font-black leading-[0.98] tracking-tightest text-white">
            Tell us what&apos;s
            <br />
            on the roof.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            Share a few details about the building and the issue. Call us on
            {" "}
            <a
              href="tel:01633213433"
              className="text-signal transition-colors duration-300 ease-spring hover:text-white"
            >
              01633 213433
            </a>
            , or drop a note through the form and we&apos;ll come back the same
            working day.
          </p>
        </div>
        <div className="lg:col-span-4 lg:justify-self-end">
          <Link
            href="/contact"
            className="eyebrow group inline-flex items-center gap-3 bg-signal px-10 py-6 text-white transition-transform duration-300 ease-spring hover:-translate-y-0.5"
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
    </section>
  );
}
