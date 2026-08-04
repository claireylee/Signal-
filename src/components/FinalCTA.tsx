import Link from "next/link";
export default function FinalCTA() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl border border-[#D4AF37]/20 bg-white/[0.03] px-8 py-16 text-center md:px-16 md:py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.18),transparent_65%)]" />

          <div className="relative mx-auto max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#D4AF37]">
              Build with confidence
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight text-white md:text-6xl">
              Review your product
              <br />
              before your users do.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
              Catch UX, accessibility, security, and product clarity issues
              before they reach production.
            </p>

            <Link
              href="/sign-up"
              className="mt-9 inline-flex rounded-xl bg-[#D4AF37] px-7 py-3.5 font-semibold text-black transition duration-200 hover:scale-105 hover:bg-[#E6C55A]"
            >
              Start Your First Review
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}