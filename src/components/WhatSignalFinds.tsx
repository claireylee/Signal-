"use client";

import { useState } from "react";

const findings = [
  {
    id: "ux",
    label: "User Experience",
    score: 92,
    summary: "Clear hierarchy with a few opportunities to reduce friction.",
    recommendation:
      "Shorten the onboarding flow and make the primary action more visually dominant.",
  },
  {
    id: "accessibility",
    label: "Accessibility",
    score: 78,
    summary: "Strong foundation, but some controls may be difficult to use.",
    recommendation:
      "Increase secondary text contrast and add accessible labels to icon-only buttons.",
  },
  {
    id: "security",
    label: "Security",
    score: 95,
    summary: "Secure defaults are present throughout the reviewed interface.",
    recommendation:
      "Add clearer password requirements and explain how user data is stored.",
  },
  {
    id: "product",
    label: "Product Clarity",
    score: 84,
    summary: "The concept is compelling, but the value could appear faster.",
    recommendation:
      "Show a product preview earlier so visitors understand the experience immediately.",
  },
];

export default function WhatSignalFinds() {
  const [activeFinding, setActiveFinding] = useState(findings[0]);

  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#D4AF37]">
            What Signal Finds
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-white md:text-6xl">
            More than a score.
            <br />
            Clear next steps.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-400">
            Signal identifies what is working, what needs attention, and what
            you should improve before shipping.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            {findings.map((finding) => {
              const isActive = activeFinding.id === finding.id;

              return (
                <button
                  key={finding.id}
                  type="button"
                  onMouseEnter={() => setActiveFinding(finding)}
                  onFocus={() => setActiveFinding(finding)}
                  onClick={() => setActiveFinding(finding)}
                  className={`w-full rounded-2xl border p-5 text-left transition ${
                    isActive
                      ? "border-[#D4AF37]/50 bg-[#D4AF37]/10"
                      : "border-white/10 bg-white/[0.03] hover:border-[#D4AF37]/30"
                  }`}
                >
                  <div className="flex items-center justify-between gap-6">
                    <div>
                      <p
                        className={`font-semibold ${
                          isActive ? "text-[#D4AF37]" : "text-white"
                        }`}
                      >
                        {finding.label}
                      </p>

                      <p className="mt-2 text-sm leading-relaxed text-gray-400">
                        {finding.summary}
                      </p>
                    </div>

                    <span className="text-3xl font-bold text-white">
                      {finding.score}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.14),transparent_45%)]" />

            <div className="relative">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#D4AF37]">
                Signal Recommendation
              </p>

              <div className="mt-8 flex items-end gap-3">
                <span className="text-7xl font-bold text-[#D4AF37]">
                  {activeFinding.score}
                </span>

                <span className="pb-2 text-gray-500">/100</span>
              </div>

              <h3 className="mt-8 text-3xl font-semibold text-white">
                {activeFinding.label}
              </h3>

              <p className="mt-4 text-lg leading-relaxed text-gray-300">
                {activeFinding.summary}
              </p>

              <div className="mt-8 rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/10 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#D4AF37]">
                  Recommended next step
                </p>

                <p className="mt-3 leading-relaxed text-white">
                  {activeFinding.recommendation}
                </p>
              </div>

              <div className="mt-8">
                <div className="mb-3 flex justify-between text-sm">
                  <span className="text-gray-400">Signal confidence</span>
                  <span className="text-[#D4AF37]">
                    {activeFinding.score}%
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-[#D4AF37] transition-all duration-500"
                    style={{ width: `${activeFinding.score}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}