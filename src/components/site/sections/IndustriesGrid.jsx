import React from "react";
import { Link } from "react-router-dom";
import { Flame, Zap, Wrench, Building2, ShieldCheck, ArrowRight } from "lucide-react";
import { FadeIn, SectionLabel } from "@/components/site/ui";

const industries = [
  {
    icon: Flame,
    name: "Fire & Security",
    desc: "Manage fire alarm, CCTV, access control, intruder, emergency lighting and life-safety work including PPM, defects, certificates, remedials and customer approvals.",
  },
  {
    icon: Zap,
    name: "Electrical",
    desc: "Manage planned and reactive electrical work, digital reports, certification, remedials, quotations and engineer scheduling.",
  },
  {
    icon: Wrench,
    name: "Plumbing & Heating",
    desc: "Control reactive repairs, servicing, recurring maintenance, engineer attendance and customer communication from one platform.",
  },
  {
    icon: Building2,
    name: "M&E",
    desc: "Coordinate multi-trade projects, service activity, labour, materials, purchase orders, commercial reporting and customer visibility.",
  },
  {
    icon: ShieldCheck,
    name: "Facilities Management",
    desc: "Manage PPM, reactive calls, subcontract activity, SLAs, customer sites, defects, service history and operational reporting across portfolios.",
  },
  {
    icon: Wrench,
    name: "Service & Maintenance Contractors",
    desc: "Automate recurring maintenance, notify customers when visits are due, schedule engineers, capture digital reports and move work through quote, remedial and invoice stages.",
  },
];

export default function IndustriesGrid() {
  return (
    <section id="industries" className="scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <SectionLabel className="mx-auto">Industries</SectionLabel>
          <h2 className="mt-5 font-heading text-3xl font-extrabold tracking-tight sm:text-4xl text-balance">
            Built for the way your trade works
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            DigiTise360 adapts the available disciplines and workflows to suit the type of business using the platform —
            so it fits your operation, not the other way around.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <FadeIn key={ind.name} delay={i * 0.04}>
              <div className="group h-full rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <ind.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold">{ind.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{ind.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-14 text-center">
          <Link to="/industries" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
            See how DigiTise360 adapts to your industry <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}