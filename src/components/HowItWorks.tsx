const steps = [
  {
    number: "01",
    title: "Upload",
    description:
      "Upload a screenshot of your product, landing page, or application.",
    emoji: "📸",
  },
  {
    number: "02",
    title: "Analyze",
    description:
      "Signal evaluates UX, accessibility, security, and overall product quality.",
    emoji: "🤖",
  },
  {
    number: "03",
    title: "Improve",
    description:
      "Receive actionable recommendations before your users ever see the product.",
    emoji: "✨",
  },
];

export default function HowItWorks() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-6xl text-center">

        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#D4AF37]">
          Workflow
        </p>

        <h2 className="mt-4 text-4xl font-bold text-white md:text-6xl">
          How Signal Works
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
          From screenshot to actionable feedback in under a minute.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#D4AF37]/40 hover:bg-[#D4AF37]/[0.04]"
            >
              <div className="text-5xl">{step.emoji}</div>

              <p className="mt-8 text-sm font-semibold text-[#D4AF37]">
                {step.number}
              </p>

              <h3 className="mt-2 text-2xl font-semibold text-white">
                {step.title}
              </h3>

              <p className="mt-4 leading-relaxed text-gray-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}