"use client";

import { useState } from "react";

type ReviewState = "idle" | "analyzing" | "complete";

const feedbackItems = [
  "Your visual hierarchy is clear and easy to scan.",
  "The gold-on-black branding feels distinctive and consistent.",
  "The hero section needs a product visual to explain Signal faster.",
  "Some secondary text may need stronger contrast for accessibility.",
];

export default function ProductPreview() {
  const [reviewState, setReviewState] = useState<ReviewState>("idle");

  function startAnalysis() {
    setReviewState("analyzing");

    window.setTimeout(() => {
      setReviewState("complete");
    }, 2200);
  }

  function resetAnalysis() {
    setReviewState("idle");
  }

  return (
    <section id="preview" className="px-6 pb-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#D4AF37]">
            See Signal in action
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
            Product feedback that feels like a conversation
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-400">
            Ask Signal to review your interface and receive focused,
            actionable recommendations in seconds.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-2xl shadow-[#D4AF37]/5">
          {/* Window header */}
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-300/80" />
              <span className="h-3 w-3 rounded-full bg-green-400/80" />
            </div>

            <p className="text-sm text-gray-500">Signal Product Review</p>

            <div className="w-14" />
          </div>

          <div className="grid min-h-[560px] md:grid-cols-[0.9fr_1.1fr]">
            {/* Fake product preview */}
            <div className="border-b border-white/10 bg-black/40 p-6 md:border-b-0 md:border-r md:p-8">
              <div className="rounded-2xl border border-white/10 bg-[#070707] p-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <p className="font-semibold text-[#D4AF37]">NOVA</p>

                  <div className="flex gap-4 text-xs text-gray-500">
                    <span>Features</span>
                    <span>Pricing</span>
                    <span>About</span>
                  </div>
                </div>

                <div className="py-12 text-center">
                  <div className="mx-auto mb-5 h-2 w-20 rounded-full bg-[#D4AF37]/40" />

                  <h3 className="text-3xl font-bold text-white">
                    Plan better.
                    <br />
                    Travel smarter.
                  </h3>

                  <p className="mx-auto mt-5 max-w-xs text-sm leading-relaxed text-gray-500">
                    A collaborative travel planner for groups who want less
                    chaos and better trips.
                  </p>

                  <button
                    type="button"
                    className="mt-7 rounded-lg bg-[#D4AF37] px-5 py-2.5 text-sm font-semibold text-black"
                  >
                    Start Planning
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="h-20 rounded-xl border border-white/10 bg-white/[0.03]" />
                  <div className="h-20 rounded-xl border border-white/10 bg-white/[0.03]" />
                  <div className="h-20 rounded-xl border border-white/10 bg-white/[0.03]" />
                </div>
              </div>

              <p className="mt-4 text-center text-sm text-gray-500">
                nova-landing-page.png
              </p>
            </div>

            {/* Conversation */}
            <div className="flex flex-col bg-[#050505] p-6 md:p-8">
              <div className="flex-1 space-y-6">
                {/* User message */}
                <div className="flex justify-end">
                  <div className="max-w-md rounded-2xl rounded-br-md bg-[#D4AF37] px-5 py-4 text-black">
                    <p className="text-xs font-semibold uppercase tracking-wider opacity-60">
                      You
                    </p>

                    <p className="mt-2 font-medium">
                      Analyze this landing page and tell me what I should
                      improve before shipping.
                    </p>
                  </div>
                </div>

                {reviewState === "idle" && (
                  <div className="rounded-2xl rounded-bl-md border border-white/10 bg-white/[0.04] px-5 py-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
                      Signal
                    </p>

                    <p className="mt-2 leading-relaxed text-gray-300">
                      I&apos;m ready to review the interface for UX,
                      accessibility, security, and product clarity.
                    </p>
                  </div>
                )}

                {reviewState === "analyzing" && (
                  <div className="rounded-2xl rounded-bl-md border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-5 py-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
                      Signal
                    </p>

                    <p className="mt-3 text-gray-300">
                      Analyzing your product...
                    </p>

                    <div className="mt-5 space-y-3">
                      <AnalysisStep label="Reviewing visual hierarchy" />
                      <AnalysisStep label="Checking accessibility" />
                      <AnalysisStep label="Evaluating product clarity" />
                    </div>

                    <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-3/4 animate-pulse rounded-full bg-[#D4AF37]" />
                    </div>
                  </div>
                )}

                {reviewState === "complete" && (
                  <div className="rounded-2xl rounded-bl-md border border-white/10 bg-white/[0.04] px-5 py-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
                      Signal
                    </p>

                    <div className="mt-4 flex items-end gap-3">
                      <span className="text-5xl font-bold text-[#D4AF37]">
                        86
                      </span>
                      <span className="pb-1 text-gray-500">/100</span>

                      <span className="mb-1 rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1 text-xs font-medium text-green-300">
                        Strong foundation
                      </span>
                    </div>

                    <div className="mt-6">
                      <p className="font-semibold text-white">
                        Here&apos;s what I found:
                      </p>

                      <ul className="mt-4 space-y-3">
                        {feedbackItems.map((item, index) => (
                          <li
                            key={item}
                            className="flex gap-3 text-sm leading-relaxed text-gray-300"
                          >
                            <span
                              className={
                                index < 2
                                  ? "text-green-400"
                                  : "text-[#D4AF37]"
                              }
                            >
                              {index < 2 ? "✓" : "•"}
                            </span>

                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/10 p-4">
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
                        Top recommendation
                      </p>

                      <p className="mt-2 text-sm leading-relaxed text-white">
                        Add an interactive product preview below the hero so
                        visitors understand what the product does without
                        reading additional copy.
                      </p>
                    </div>

                    <button
                      type="button"
                      className="mt-5 rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-gray-300 transition hover:border-[#D4AF37]/40 hover:text-[#D4AF37]"
                    >
                      Generate redesign
                    </button>
                  </div>
                )}
              </div>

              <div className="mt-8">
                {reviewState === "idle" && (
                  <button
                    type="button"
                    onClick={startAnalysis}
                    className="w-full rounded-xl bg-[#D4AF37] px-5 py-3.5 font-semibold text-black transition hover:scale-[1.01] hover:bg-[#E6C55A]"
                  >
                    Analyze Product
                  </button>
                )}

                {reviewState === "analyzing" && (
                  <button
                    type="button"
                    disabled
                    className="w-full cursor-not-allowed rounded-xl bg-[#D4AF37]/50 px-5 py-3.5 font-semibold text-black/60"
                  >
                    Reviewing Interface...
                  </button>
                )}

                {reviewState === "complete" && (
                  <button
                    type="button"
                    onClick={resetAnalysis}
                    className="w-full rounded-xl border border-[#D4AF37]/30 px-5 py-3.5 font-semibold text-[#D4AF37] transition hover:bg-[#D4AF37]/10"
                  >
                    Run Analysis Again
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AnalysisStep({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 text-sm text-gray-400">
      <span className="h-2 w-2 animate-pulse rounded-full bg-[#D4AF37]" />
      <span>{label}</span>
    </div>
  );
}