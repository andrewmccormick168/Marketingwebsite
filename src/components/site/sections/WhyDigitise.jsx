import React from "react";
import { FadeIn, SectionLabel } from "@/components/site/ui";
import { Check } from "lucide-react";

const reasons = [
  {
    title: "Simple to use",
    desc: "Powerful functionality without unnecessary complexity — your team can get up and running quickly.",
  },
  {
    title: "Built from industry experience",
    desc: "Designed around genuine field-service operations, not technology looking for a problem to solve.",
  },
  {
    title: "One connected platform",
    desc: "Reduce reliance on paperwork, spreadsheets and disconnected applications that don’t talk to each other.",
  },
  {
    title: "Built for the office and field",
    desc: "Straightforward interfaces for both administrators and engineers, on desktop and mobile.",
  },
  {
    title: "Grow without changing systems",
    desc: "Suitable for growing contractors, with Enterprise options for larger organisations.",
  },
];

export default function WhyDigitise() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <SectionLabel>Why DigiTise360?</SectionLabel>
            <h2 className="mt-5 font-heading text-3xl font-extrabold tracking-tight sm:text-4xl text-balance">
              A simpler alternative to complicated, expensive field-management systems
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              DigiTise360 is positioned as the practical choice for field-service businesses that want genuine
              capability without the overhead, complexity or cost of legacy platforms.
            </p>
            <div className="mt-8 rounded-2xl border border-primary/20 bg-accent/60 p-6">
              <p className="font-heading text-lg font-bold text-accent-foreground">
                Paperless. Simple. Compliant.
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                The principles behind everything we build.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="flex flex-col gap-4">
              {reasons.map((r) => (
                <div key={r.title} className="flex gap-4 rounded-xl border border-border bg-background p-5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold">{r.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}