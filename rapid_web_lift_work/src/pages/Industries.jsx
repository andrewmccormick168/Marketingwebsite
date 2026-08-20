import React from "react";
import { FadeIn, SectionLabel, CTAButtons } from "@/components/site/ui";
import { Flame, Zap, Wrench, Building2, ShieldCheck, ClipboardCheck } from "lucide-react";

const industries = [
  { icon: Flame, name: "Fire & Security", desc: "Servicing, installations and compliance for alarm and security systems, with digital certification and recurring service schedules." },
  { icon: Zap, name: "Electrical", desc: "EICRs, fixed-wiring and remedial works supported by digital forms and job reporting from site." },
  { icon: Wrench, name: "Plumbing & Heating", desc: "Reactive repairs, boiler servicing and planned maintenance with full engineer scheduling." },
  { icon: Building2, name: "M&E", desc: "Mechanical and electrical contractors managing multi-trade workloads, projects and resources." },
  { icon: ShieldCheck, name: "Facilities Management", desc: "Hard and soft FM services across portfolios and contracts with PPM and reactive workflows." },
  { icon: ClipboardCheck, name: "Service & Maintenance Contractors", desc: "Planned and reactive maintenance with full contract visibility and commercial control." },
];

export default function Industries() {
  return (
    <>
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <FadeIn className="max-w-3xl">
            <SectionLabel>Industries</SectionLabel>
            <h1 className="mt-5 font-heading text-4xl font-extrabold tracking-tight sm:text-5xl text-balance">
              Adapts to your trade, not the other way around
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              DigiTise360 adapts the available disciplines and workflows to suit the type of business using the
              platform — giving you a system that fits how you already work.
            </p>
          </FadeIn>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, i) => (
              <FadeIn key={ind.name} delay={i * 0.05}>
                <div className="group h-full rounded-2xl border border-border bg-background p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <ind.icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-5 font-heading text-xl font-bold">{ind.name}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{ind.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-balance">
              Not sure if DigiTise360 fits your business?
            </h2>
            <p className="mt-4 text-muted-foreground">Book a demo and we’ll show you how it adapts to your operation.</p>
            <CTAButtons className="mt-8 justify-center" size="lg" />
          </FadeIn>
        </div>
      </section>
    </>
  );
}