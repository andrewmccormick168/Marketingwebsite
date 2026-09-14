import React from "react";
import { FadeIn } from "@/components/site/ui";

const stats = [
  {
    value: "25+",
    label: "Disciplines",
    text: "Supporting fire & security, electrical, M&E, renewables, asbestos, building services and more.",
  },
  {
    value: "1",
    label: "Platform",
    text: "Connect office teams, engineers, customers and commercial workflows in one system.",
  },
  {
    value: "£29.99",
    label: "Per user / month",
    text: "The complete DigiTise360 platform without artificial feature tiers or module bundles.",
  },
  {
    value: "End-to-End",
    label: "Digital workflow",
    text: "From job creation and engineer attendance through to quotes, return visits and invoicing.",
  },
];

export default function ProofStats() {
  return (
    <section className="border-y border-border bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="px-6 py-7 text-center first:pl-0 last:pr-0 lg:px-8"
              >
                <div className="font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                  {stat.value}
                </div>

                <div className="mt-2 text-sm font-bold uppercase tracking-[0.14em] text-primary">
                  {stat.label}
                </div>

                <p className="mx-auto mt-3 max-w-[260px] text-sm leading-6 text-slate-300">
                  {stat.text}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
