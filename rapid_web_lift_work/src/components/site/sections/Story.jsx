import React from "react";
import { FadeIn, SectionLabel } from "@/components/site/ui";

export default function Story() {
  return (
    <section id="about" className="scroll-mt-20 border-y border-border bg-muted/30">
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <FadeIn className="text-center">
          <SectionLabel className="mx-auto">Our story</SectionLabel>
        </FadeIn>

        <FadeIn delay={0.05}>
          <h2 className="mt-6 text-center font-heading text-3xl font-extrabold tracking-tight sm:text-4xl text-balance">
            The problem came first. The software came second.
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
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

        <FadeIn delay={0.15}>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { k: "Industry-first", v: "Built from real field-service experience" },
              { k: "One platform", v: "Office, engineers and customers connected" },
              { k: "Commercially ready", v: "Designed for growing contractors" },
            ].map((s) => (
              <div key={s.k} className="rounded-xl border border-border bg-background p-5 text-center">
                <p className="font-heading text-sm font-bold text-primary">{s.k}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.v}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}