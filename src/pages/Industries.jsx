import React from "react";
import { FadeIn, SectionLabel, CTAButtons } from "@/components/site/ui";
import {
  Building2,
  ClipboardCheck,
  Flame,
  ShieldCheck,
  Wrench,
  Zap,
} from "lucide-react";

const industries = [
  {
    icon: Flame,
    name: "Fire & Security",
    desc: "Manage fire alarm, CCTV, access control, intruder, emergency lighting and life-safety service operations from one platform.",
    capabilities: [
      "PPM and recurring service schedules",
      "Reactive callouts and engineer dispatch",
      "Defects and remedial workflows",
      "Digital reports and certificates",
      "Quote approval and return visits",
      "Customer portal visibility",
    ],
  },
  {
    icon: Zap,
    name: "Electrical",
    desc: "Control planned and reactive electrical work with engineer scheduling, reporting, certification and commercial workflows.",
    capabilities: [
      "Planned and reactive work",
      "Digital forms and site reporting",
      "Remedial quotations",
      "Engineer scheduling",
      "Purchase orders and materials",
      "Customer and site history",
    ],
  },
  {
    icon: Wrench,
    name: "Plumbing & Heating",
    desc: "Manage servicing, breakdowns, planned maintenance and engineer activity across customer sites.",
    capabilities: [
      "Recurring servicing",
      "Reactive repairs",
      "Engineer attendance tracking",
      "Job reports and photos",
      "Customer notifications",
      "Quotes and invoicing",
    ],
  },
  {
    icon: Building2,
    name: "M&E Contractors",
    desc: "Coordinate multi-trade service work and installation projects with commercial control built into the same system.",
    capabilities: [
      "Multi-trade scheduling",
      "Project and installation management",
      "Labour and material costs",
      "Purchase orders",
      "Profitability reporting",
      "Customer portal access",
    ],
  },
  {
    icon: ShieldCheck,
    name: "Facilities Management",
    desc: "Control PPM, reactive calls, SLAs and customer estates while maintaining clear operational and commercial oversight.",
    capabilities: [
      "Portfolio and site management",
      "PPM and reactive workflows",
      "SLA monitoring",
      "Defect tracking",
      "Maintenance agreements",
      "Operational reporting",
    ],
  },
  {
    icon: ClipboardCheck,
    name: "Service & Maintenance Contractors",
    desc: "Run recurring service contracts, engineer visits, customer communication and commercial processes from one place.",
    capabilities: [
      "Automated maintenance scheduling",
      "Customer due notifications",
      "Digital engineer reports",
      "Defect and remedial tracking",
      "Online quote acceptance",
      "Invoice and spend visibility",
    ],
  },
];

export default function Industries() {
  return (
    <>
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <FadeIn className="max-w-4xl">
            <SectionLabel>Industries</SectionLabel>

            <h1 className="mt-5 font-heading text-4xl font-extrabold tracking-tight sm:text-5xl text-balance">
              Built around the way service contractors actually work
            </h1>

            <p className="mt-5 max-w-3xl text-lg text-muted-foreground">
              DigiTise360 adapts to different trades while keeping the same core
              operational workflow — jobs, engineers, maintenance, defects,
              commercial control and customer visibility.
            </p>
          </FadeIn>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            {industries.map((industry, index) => (
              <FadeIn key={industry.name} delay={index * 0.04}>
                <div className="group h-full rounded-2xl border border-border bg-background p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <industry.icon className="h-6 w-6" />
                  </div>

                  <h2 className="mt-5 font-heading text-xl font-bold">
                    {industry.name}
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {industry.desc}
                  </p>

                  <div className="mt-6 grid gap-2 sm:grid-cols-2">
                    {industry.capabilities.map((capability) => (
                      <div
                        key={capability}
                        className="flex items-start gap-2 rounded-lg bg-muted/40 px-3 py-2"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span className="text-xs font-medium text-muted-foreground">
                          {capability}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-slate-950 text-white">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <FadeIn>
            <SectionLabel className="mx-auto border-white/10 bg-white/5 text-white">
              Your Workflow
            </SectionLabel>

            <h2 className="mt-5 font-heading text-3xl font-extrabold tracking-tight text-balance">
              Your trade may be different. The operational problem is usually the same.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-slate-300">
              Schedule the work, get the engineer to site, capture what happened,
              deal with defects, keep the customer informed and control the commercial outcome.
            </p>

            <CTAButtons className="mt-8 justify-center" size="lg" />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
