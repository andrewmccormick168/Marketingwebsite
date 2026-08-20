import React from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Building2 } from "lucide-react";
import { FadeIn, SectionLabel, CTAButtons } from "@/components/site/ui";

const includes = [
  "Job management & scheduling",
  "Engineer mobile app",
  "Digital job reports & forms",
  "Customer & site management",
  "Planned preventative maintenance",
  "Quotes & customer acceptance",
  "Invoicing workflows",
  "Purchase orders",
  "Stock control",
  "Expenses",
  "Project & installation management",
  "Financial & operational reporting",
  "Customer portal",
  "Vehicle management", 
  "Xero Integrations"
];

export default function Pricing() {S
  return (
    <>
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <FadeIn className="max-w-3xl">
            <SectionLabel>Pricing</SectionLabel>
            <h1 className="mt-5 font-heading text-4xl font-extrabold tracking-tight sm:text-5xl text-balance">
              Simple, transparent pricing
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              One straightforward plan with everything included. No artificial Basic/Pro/Premium tiers — just one
              price per user, per month.
            </p>
          </FadeIn>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <FadeIn>
              <div className="relative h-full rounded-2xl border border-border bg-background p-8 shadow-lg">
                <div className="absolute -top-3 left-8">
                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">DigiTise360 Standard</span>
                </div>
                <div className="mt-4 flex items-end gap-1">
                  <span className="font-heading text-5xl font-extrabold tracking-tight">£29.99</span>
                  <span className="mb-1 text-muted-foreground">/user/month</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">Everything included. Start with a free trial.</p>
                <Link
                  to="/contact"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
                >
                  Start Free Trial <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="rounded-2xl border border-primary/30 bg-accent/40 p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <h2 className="font-heading text-xl font-bold">Enterprise</h2>
                </div>
                <p className="mt-4 text-muted-foreground">
                  For organisations requiring more than 30 users, DigiTise360 offers tailored Enterprise pricing with
                  options to suit larger operations.
                </p>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-2 rounded-lg border border-primary/40 bg-background px-4 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Contact us for Enterprise pricing <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.15} className="mt-12">
            <h2 className="font-heading text-xl font-bold">Everything in DigiTise360 Standard</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {includes.map((i) => (
                <div key={i} className="flex items-center gap-2.5 rounded-lg border border-border bg-background px-4 py-3 text-sm">
                  <Check className="h-4 w-4 text-primary" /> {i}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-balance">
              Try DigiTise360 free
            </h2>
            <CTAButtons className="mt-8 justify-center" size="lg" />
          </FadeIn>
        </div>
      </section>
    </>
  );
}