import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
        404
      </p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight">Page not found</h1>
      <p className="mt-4 max-w-xl text-lg text-slate-600">
        We couldn&apos;t find the page you were looking for.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block bg-accent px-6 py-3 font-semibold text-accent-foreground"
      >
        Back to home
      </Link>
    </section>
  );
}
