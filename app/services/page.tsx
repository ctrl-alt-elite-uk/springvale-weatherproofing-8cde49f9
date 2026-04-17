import type { Metadata } from "next";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-4xl font-bold tracking-tight">Services</h1>
      <p className="mt-4 max-w-2xl text-lg text-slate-600">
        Replace this page with the business's service catalogue.
      </p>
    </section>
  );
}
