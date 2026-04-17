import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-4xl font-bold tracking-tight">About {siteConfig.name}</h1>
      <p className="mt-4 max-w-2xl text-lg text-slate-600">
        Replace this page with a narrative about the business.
      </p>
    </section>
  );
}
