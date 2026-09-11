import React from "react";
import { FadeIn, CTAButtons, BrowserFrame } from "@/components/site/ui";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-dots opacity-60 mask-fade-b" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold text-muted-foreground shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Field Service Management Software · UK
            </span>
          </FadeIn>

          <FadeIn delay={0.05}>
            <h1 className="mt-6 font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Run your entire field operation.
              <span className="text-primary"> From one platform.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground text-balance">
              Manage jobs, engineers, customers and commercial activity in real time —
              from the first callout and scheduled visit through to defects,
              quotations, reports and invoicing.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <CTAButtons className="mt-8 justify-center" size="lg" />
          </FadeIn>
        </div>

        <FadeIn delay={0.2} y={28}>
          <div className="relative mx-auto mt-16 max-w-[88rem]">
            <BrowserFrame url="app.digitise360.co.uk/dashboard">
              <img
                src="/assets/dashboard.jpg"
                alt="DigiTise360 operations dashboard"
                className="block w-full object-cover"
              />
            </BrowserFrame>

            <div className="absolute -bottom-16 right-6 hidden w-[250px] overflow-hidden rounded-[2.25rem] border-[7px] border-slate-950 bg-slate-950 shadow-2xl xl:block">
              <img
                src="/assets/mobile-app.jpg"
                alt="DigiTise360 engineer mobile app"
                className="block w-full rounded-[1.6rem]"
              />
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-3 text-center sm:grid-cols-4">
            {[
              ["Office", "Live operations"],
              ["Field", "Engineer mobile"],
              ["Commercial", "Quote to invoice"],
              ["Customers", "Self-service portal"],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-xl border border-border bg-background/90 px-4 py-4 shadow-sm backdrop-blur"
              >
                <p className="text-sm font-bold">{title}</p>
                <p className="mt-1 text-xs text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
