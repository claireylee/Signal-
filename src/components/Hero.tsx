export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-24 text-center md:pb-28 md:pt-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.2)_0%,rgba(212,175,55,0.08)_35%,transparent_70%)]" />

      <div className="relative mx-auto max-w-4xl">
        <div className="inline-flex items-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-2 text-sm text-[#D4AF37]">
          AI-powered product feedback
        </div>

        <h1 className="mt-8 text-7xl font-bold tracking-tight text-[#D4AF37] md:text-8xl">
          Signal
        </h1>

        <h2 className="mt-8 text-4xl font-bold leading-tight text-[#D4AF37] md:text-6xl">
          AI Product Reviews
          <br />
          Before You Ship
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
          Improve your product&apos;s UX, security, and accessibility with
          focused, AI-powered feedback.
        </p>
      </div>
    </section>
  );
}