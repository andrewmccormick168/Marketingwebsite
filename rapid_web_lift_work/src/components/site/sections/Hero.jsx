import React from "react";
import { FadeIn, CTAButtons, BrowserFrame } from "@/components/site/ui";
import DashboardMockup from "@/components/site/DashboardMockup";
import MobileMockup from "@/components/site/MobileMockup";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-dots opacity-60 mask-fade-b" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold text-muted-foreground shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Field Service Management Software · UK
            </span>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="mt-6 font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Field Service Management. <span className="text-primary">Simplified.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground text-balance">
              Manage your entire field operation from one connected platform. From the first job to the final report,
              DigiTise360 keeps your office, engineers and customers connected.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <CTAButtons className="mt-8 justify-center" size="lg" />
          </FadeIn>
        </div>

        {/* Product mockup */}
        <FadeIn delay={0.2} y={28}>
          <div className="relative mx-auto mt-16 max-w-5xl">
            <BrowserFrame url="app.digitise360.co.uk/dashboard">
              <DashboardMockup />
            </BrowserFrame>
            <div className="absolute -bottom-10 -right-4 hidden lg:block">
              <MobileMockup />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}