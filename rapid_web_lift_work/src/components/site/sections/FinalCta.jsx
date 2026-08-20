import React from "react";
import { FadeIn, CTAButtons } from "@/components/site/ui";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-5xl text-balance">
            Ready to simplify your field operations?
          </h2>
        </FadeIn>
        <FadeIn delay={0.05}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground text-balance">See how DigiTise360 can bring your office, engineers and customers together on one simple, compliant platform.


          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <CTAButtons className="mt-8 justify-center" size="lg" />
        </FadeIn>
      </div>
    </section>);

}