import { siteConfig } from "@/lib/config";

export default function HomePage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        {siteConfig.name}
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-slate-600">
        {siteConfig.tagline}
      </p>
    </section>
  );
}
