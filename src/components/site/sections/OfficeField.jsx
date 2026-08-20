import React from "react";
import { FadeIn, SectionLabel, BrowserFrame } from "@/components/site/ui";
import DashboardMockup from "@/components/site/DashboardMockup";
import MobileMockup from "@/components/site/MobileMockup";
import { Monitor, Smartphone, ArrowRight, ArrowLeft } from "lucide-react";

const office = [
  "Schedule and allocate work across the team",
  "Monitor live progress and job statuses",
  "Manage customers, sites and contracts",
  "Raise quotes, POs and invoices",
];

const field = [
  "Receive jobs and navigate to site",
  "Update job statuses in real time",
  "Complete digital reports and forms",
  "Capture signatures and photos, then submit",
];

export default function OfficeField() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <SectionLabel className="mx-auto">Office + Field</SectionLabel>
          <h2 className="mt-5 font-heading text-3xl font-extrabold tracking-tight sm:text-4xl text-balance">
            One connected workforce, from desk to doorstep
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Office teams schedule work, monitor progress and manage customers while engineers receive jobs, update
            statuses, complete digital reports, capture signatures and photos and submit completed work from the field —
            all on the same platform.
          </p>
        </FadeIn>

        {/* Desktop platform */}
        <FadeIn delay={0.1} className="mt-16">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 text-sm font-bold text-primary">
                <Monitor className="h-4 w-4" /> Desktop platform — for the office
              </span>
              <h3 className="mt-3 font-heading text-2xl font-bold tracking-tight">Run the operation from one screen</h3>
              <ul className="mt-5 flex flex-col gap-3">
                {office.map((o) => (
                  <li key={o} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {o}
                  </li>
                ))}
              </ul>
            </div>
            <BrowserFrame url="app.digitise360.co.uk/scheduler">
              <DashboardMockup />
            </BrowserFrame>
          </div>
        </FadeIn>

        {/* Mobile app */}
        <FadeIn delay={0.15} className="mt-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="order-2 flex justify-center lg:order-1">
              <MobileMockup />
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-flex items-center gap-2 text-sm font-bold text-primary">
                <Smartphone className="h-4 w-4" /> Engineer app — for the field
              </span>
              <h3 className="mt-3 font-heading text-2xl font-bold tracking-tight">Everything an engineer needs on site</h3>
              <ul className="mt-5 flex flex-col gap-3">
                {field.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <ArrowLeft className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}