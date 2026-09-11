import React from "react";
import { FadeIn, SectionLabel, BrowserFrame } from "@/components/site/ui";
import {
  BriefcaseBusiness,
  FileCheck2,
  Receipt,
  ShieldAlert,
  Wrench,
} from "lucide-react";

const points = [
  {
    icon: BriefcaseBusiness,
    title: "Live job visibility",
    desc: "Customers can see open, completed and upcoming work across their sites.",
  },
  {
    icon: FileCheck2,
    title: "Quotes & approvals",
    desc: "Review quotations and approve work digitally without email chains or paperwork.",
  },
  {
    icon: Receipt,
    title: "Invoices & spend",
    desc: "Give customers visibility of invoices, outstanding values and year-to-date spend.",
  },
  {
    icon: ShieldAlert,
    title: "Defects & remedials",
    desc: "Keep site defects visible and track remedial work through to resolution.",
  },
  {
    icon: Wrench,
    title: "Maintenance overview",
    desc: "Show planned maintenance activity and service information in one place.",
  },
];

export default function CustomerPortal() {
  return (
    <section className="border-y border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <FadeIn>
            <SectionLabel>Customer Portal</SectionLabel>

            <h2 className="mt-5 font-heading text-3xl font-extrabold tracking-tight sm:text-4xl text-balance">
              Give every customer a live view of their service operation
            </h2>

            <p className="mt-5 text-lg text-muted-foreground">
              DigiTise360 gives customers their own secure portal, helping reduce
              admin while giving them instant visibility of jobs, quotations,
              invoices, defects and maintenance activity.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              {points.map((point) => (
                <div key={point.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-background text-primary shadow-sm">
                    <point.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold">{point.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <BrowserFrame url="portal.digitise360.co.uk">
              <img
                src="/assets/customer-portal.png"
                alt="DigiTise360 customer portal showing jobs, invoices, defects and maintenance"
                className="block w-full"
              />
            </BrowserFrame>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
