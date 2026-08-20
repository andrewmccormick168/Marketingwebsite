import React from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { FadeIn, SectionLabel } from "@/components/site/ui";

const includes = [
  "Job management & scheduling",
  "Engineer mobile app",
  "Digital job reports & forms",
  "Customer & site management",
  "Quotes, invoicing & POs",
  "Reporting & customer portal",
];

export default function PricingTeaser() {
  return (
    <section id="pricing" className="scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <SectionLabel className="mx-auto">Pricing</SectionLabel>
          <h2 className="mt-5 font-heading text-3xl font-extrabold tracking-tight sm:text-4xl text-balance">
            Simple, transparent pricing
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            One straightforward plan. No hidden tiers, no artificial limits — just everything you need, per user.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mx-auto mt-12 max-w-md">
            <div className="relative rounded-2xl border border-border bg-background p-8 shadow-lg">
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

              <ul className="mt-6 flex flex-col gap-2.5">
                {includes.map((i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm">
                    <Check className="h-4 w-4 text-primary" /> {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15} className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">
            Need more than 30 users?{" "}
            <Link to="/contact" className="font-semibold text-primary hover:underline">
              Contact us for tailored Enterprise pricing
            </Link>
            .
          </p>
        </FadeIn>
      </div>
    </section>
  );
}