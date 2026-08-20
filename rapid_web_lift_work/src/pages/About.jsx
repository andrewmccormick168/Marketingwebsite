import React from "react";
import { FadeIn, SectionLabel, CTAButtons } from "@/components/site/ui";
import { Lightbulb, Layers, Users2, TrendingUp } from "lucide-react";

const values = [
  { icon: Lightbulb, title: "Problem first, software second", desc: "Built from first-hand experience of the paperwork and disconnected processes that slow field-service businesses down." },
  { icon: Layers, title: "One connected platform", desc: "Jobs, engineers, customers, reporting and commercial operations together — not a patchwork of tools." },
  { icon: Users2, title: "For office and field", desc: "Straightforward interfaces for both administrators and engineers, on desktop and mobile." },
  { icon: TrendingUp, title: "Grow without changing systems", desc: "Suitable for growing contractors, with Enterprise options for larger organisations." },
];

export default function About() {
  return (
    <>
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <FadeIn className="max-w-3xl">
            <SectionLabel>About DigiTise360</SectionLabel>
            <h1 className="mt-5 font-heading text-4xl font-extrabold tracking-tight sm:text-5xl text-balance">
              The problem came first. The software came second.
            </h1>
          </FadeIn>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                DigiTise360 was created from first-hand experience within the field-service industry. After years of
                dealing with paperwork, disconnected processes, duplicated administration and overly complicated software,
                the idea was to build something better.
              </p>
              <p>
                DigiTise360 wasn’t created by developing technology and then searching for a problem. The problem was
                understood first. The software came second.
              </p>
              <p>
                What began as an idea to simplify field operations has developed into a comprehensive platform connecting
                engineers, office teams, customers and commercial operations.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <FadeIn className="max-w-2xl">
            <SectionLabel>What we stand for</SectionLabel>
            <h2 className="mt-5 font-heading text-3xl font-extrabold tracking-tight sm:text-4xl text-balance">
              Principles behind everything we build
            </h2>
            <p className="mt-4 text-muted-foreground">Paperless. Simple. Compliant.</p>
          </FadeIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-border bg-background p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary">
                    <v.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-bold">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionLabel>Who DigiTise360 is for</SectionLabel>
            <h2 className="mt-5 font-heading text-3xl font-extrabold tracking-tight text-balance">
              Built for small and medium-sized field-service businesses
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                DigiTise360 is primarily aimed at small and medium-sized field-service businesses, particularly companies
                with approximately 5–30 users, while larger organisations can be supported through Enterprise
                arrangements.
              </p>
              <p>
                The typical customer has outgrown paperwork, spreadsheets or basic systems, or is frustrated with
                existing software that has become too expensive or complicated.
              </p>
            </div>
            <CTAButtons className="mt-8" size="lg" />
          </FadeIn>
        </div>
      </section>
    </>
  );
}