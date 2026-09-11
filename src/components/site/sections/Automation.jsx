import React from "react";
import { FadeIn, SectionLabel } from "@/components/site/ui";
import {
  BellRing,
  Mail,
  RefreshCcw,
  FileCheck2,
  Workflow,
  Clock3,
} from "lucide-react";

const automations = [
  {
    icon: BellRing,
    title: "Maintenance due notifications",
    desc: "Keep customers informed when planned maintenance is due and help reduce missed service obligations.",
  },
  {
    icon: Mail,
    title: "Automated customer communication",
    desc: "Send key updates and documents directly from the platform without relying on manual email chains.",
  },
  {
    icon: FileCheck2,
    title: "Digital quote acceptance",
    desc: "Customers can review, accept or decline quotations online, helping work move forward faster.",
  },
  {
    icon: RefreshCcw,
    title: "Recurring maintenance workflows",
    desc: "Plan repeat visits and keep future service activity visible across customers, sites and systems.",
  },
  {
    icon: Clock3,
    title: "Follow-ups & reminders",
    desc: "Support quote follow-ups, maintenance reminders and time-sensitive commercial actions automatically.",
  },
  {
    icon: Workflow,
    title: "Connected next steps",
    desc: "Carry job information into defects, quotations, remedials and invoices without rekeying the same details.",
  },
];

export default function Automation() {
  return (
    <section className="relative overflow-hidden bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <FadeIn>
            <SectionLabel>Automation</SectionLabel>

            <h2 className="mt-5 font-heading text-3xl font-extrabold tracking-tight sm:text-4xl text-balance">
              Let routine admin happen in the background
            </h2>

            <p className="mt-5 text-lg text-muted-foreground">
              Automate repetitive service, customer and commercial tasks so your
              office team spends less time sending reminders, chasing approvals
              and re-entering information.
            </p>

            <div className="mt-8 rounded-2xl border border-primary/20 bg-background p-6 shadow-sm">
              <p className="font-heading text-lg font-bold">
                Less chasing. Less duplication. More control.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                From planned maintenance reminders to digital quote acceptance,
                DigiTise360 helps keep customers, engineers and office teams aligned.
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-4 sm:grid-cols-2">
            {automations.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.04}>
                <div className="h-full rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 font-heading text-lg font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
