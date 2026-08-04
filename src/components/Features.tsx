const features = [
  {
    number: "01",
    title: "UX Review",
    description:
      "Evaluate visual hierarchy, navigation, onboarding, and overall product clarity.",
  },
  {
    number: "02",
    title: "Accessibility Checks",
    description:
      "Identify contrast, labeling, readability, and usability issues before users encounter them.",
  },
  {
    number: "03",
    title: "Security Insights",
    description:
      "Surface potential authentication, privacy, and secure-by-design concerns early.",
  },
  {
    number: "04",
    title: "Actionable Recommendations",
    description:
      "Receive prioritized feedback that explains what to improve and why it matters.",
  },
];

export default function Features() {
  return (
    <section id="features" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#D4AF37]">
            What Signal Reviews
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-white md:text-6xl">
            One review.
            <br />
            Multiple perspectives.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-400">
            Signal evaluates your product like a designer, accessibility
            specialist, security engineer, and product manager working
            together.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {features.map((feature) => (
            <article
              key={feature.number}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/40 hover:bg-[#D4AF37]/[0.04]"
            >
              <div className="flex items-start justify-between gap-6">
                <span className="text-sm font-semibold text-[#D4AF37]">
                  {feature.number}
                </span>

                <span className="text-2xl text-gray-700 transition group-hover:text-[#D4AF37]">
                  ↗
                </span>
              </div>

              <h3 className="mt-12 text-2xl font-semibold text-white">
                {feature.title}
              </h3>

              <p className="mt-4 max-w-lg leading-relaxed text-gray-400">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}