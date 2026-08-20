import React from "react";
import { FadeIn, SectionLabel } from "@/components/site/ui";

const pillars = ["Jobs", "Engineers", "Customers", "Reporting", "Commercial", "Field Operations"];

export default function OnePlatform() {
  return (
    <section className="border-y border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <SectionLabel>One connected platform</SectionLabel>
            <h2 className="mt-5 font-heading text-3xl font-extrabold tracking-tight sm:text-4xl text-balance">
              One platform. Your entire operation.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              DigiTise360 brings jobs, engineers, customers, reporting, commercial management and field operations
              together — rather than forcing businesses to use multiple disconnected systems, spreadsheets and paperwork.
            </p>
            <p className="mt-4 text-muted-foreground">
              From scheduling the first visit to issuing the final invoice, every part of your operation lives in one
              place, updated in real time across the office and the field.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {pillars.map((p) => (
                <div
                  key={p}
                  className="rounded-xl border border-border bg-background p-5 text-center shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <p className="text-sm font-semibold">{p}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}