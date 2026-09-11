import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  Check,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { FadeIn, SectionLabel, CTAButtons } from "@/components/site/ui";

const includes = [
  "Job management & scheduling",
  "Engineer mobile app",
  "Digital job reports & forms",
  "Customer & site management",
  "Planned preventative maintenance",
  "Defects & remedials",
  "Certificates",
  "Quotes & digital customer acceptance",
  "Invoicing workflows",
  "Purchase orders",
  "Stock & van stock",
  "Expenses",
  "Maintenance agreements",
  "SLA management",
  "CRM",
  "Project & installation management",
  "Financial & operational reporting",
  "Customer portal",
  "Vehicle management",
  "Training matrix",
  "Automated customer notifications",
  "Xero integration",
];

const highlights = [
  "No Basic / Pro / Premium feature tiers",
  "No hidden module charges",
  "Access to the full DigiTise360 platform",
  "Scale your team without changing systems",
];

export default function Pricing() {
  return (
    <>
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <FadeIn className="max-w-4xl">
            <SectionLabel>Pricing</SectionLabel>

            <h1 className="mt-5 font-heading text-4xl font-extrabold tracking-tight sm:text-5xl text-balance">
              One platform. One simple price.
            </h1>

            <p className="mt-5 max-w-3xl text-lg text-muted-foreground">
              DigiTise360 gives you access to the full platform without locking
              core features behind multiple pricing tiers or add-on modules.
            </p>
          </FadeIn>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <FadeIn>
              <div className="relative h-full overflow-hidden rounded-3xl border border-primary/30 bg-background p-8 shadow-xl sm:p-10">
                <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />

                <div className="relative">
                  <div className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                    <Sparkles className="h-3.5 w-3.5" />
                    DigiTise360 Standard
                  </div>

                  <div className="mt-7 flex flex-wrap items-end gap-x-2 gap-y-1">
                    <span className="font-heading text-6xl font-extrabold tracking-tight">
                      £29.99
                    </span>
                    <span className="mb-2 text-muted-foreground">
                      / user / month
                    </span>
                  </div>

                  <p className="mt-3 text-base text-muted-foreground">
                    The full platform. No artificial feature tiers.
                  </p>

                  <Link
                    to="/contact"
                    className="mt-8 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
                  >
                    Start Free Trial <ArrowRight className="h-4 w-4" />
                  </Link>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {highlights.map((item) => (
                      <div key={item} className="flex items-start gap-2.5">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span className="text-sm text-muted-foreground">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="h-full rounded-3xl border border-border bg-muted/30 p-8 sm:p-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Building2 className="h-5 w-5" />
                </div>

                <h2 className="mt-6 font-heading text-2xl font-bold">
                  Enterprise
                </h2>

                <p className="mt-4 text-muted-foreground">
                  For organisations with more than 30 users or more complex
                  operational requirements, DigiTise360 offers tailored
                  Enterprise pricing.
                </p>

                <div className="mt-7 space-y-3">
                  {[
                    "Larger user deployments",
                    "Tailored commercial arrangements",
                    "Support for more complex operations",
                    "Scalable multi-team environments",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-sm">
                      <ShieldCheck className="h-4 w-4 text-primary" />
                      {item}
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-lg border border-primary/40 bg-background px-4 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Contact us for Enterprise pricing
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.15} className="mt-16">
            <div className="text-center">
              <SectionLabel className="mx-auto">Everything Included</SectionLabel>

              <h2 className="mt-5 font-heading text-3xl font-extrabold tracking-tight">
                No module maze
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                The tools you need to run operations, field teams, customers and
                commercial workflows are included in the standard platform.
              </p>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {includes.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3.5 text-sm shadow-sm"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-4 w-4" />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-t border-border bg-slate-950 text-white">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <FadeIn>
            <SectionLabel className="mx-auto border-white/10 bg-white/5 text-white">
              Get Started
            </SectionLabel>

            <h2 className="mt-5 font-heading text-3xl font-extrabold tracking-tight text-balance">
              See what DigiTise360 can replace in your business
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-300">
              Jobs, scheduling, maintenance, reports, quotations, invoices,
              customer visibility and more — all under one subscription.
            </p>

            <CTAButtons className="mt-8 justify-center" size="lg" />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
