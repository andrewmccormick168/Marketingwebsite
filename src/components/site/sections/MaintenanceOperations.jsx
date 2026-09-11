import React from "react";
import { FadeIn, SectionLabel, BrowserFrame } from "@/components/site/ui";
import {
  CalendarClock,
  CheckCircle2,
  RefreshCcw,
  ShieldCheck,
} from "lucide-react";

const points = [
  {
    icon: CalendarClock,
    title: "Plan recurring maintenance",
    desc: "Schedule service visits by customer, site, system and frequency.",
  },
  {
    icon: RefreshCcw,
    title: "Stay ahead of due dates",
    desc: "Keep upcoming maintenance visible so contract obligations are not missed.",
  },
  {
    icon: CheckCircle2,
    title: "Create repeatable workflows",
    desc: "Move planned maintenance through engineer attendance, completion and reporting.",
  },
  {
    icon: ShieldCheck,
    title: "Maintain service history",
    desc: "Keep maintenance activity tied back to the correct customer, site and system.",
  },
];

export default function MaintenanceOperations() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <SectionLabel className="mx-auto">Planned Maintenance</SectionLabel>

          <h2 className="mt-5 font-heading text-3xl font-extrabold tracking-tight sm:text-4xl text-balance">
            Keep every planned visit under control
          </h2>

          <p className="mt-5 text-lg text-muted-foreground">
            DigiTise360 helps service businesses manage recurring maintenance,
            contract obligations and upcoming visits without relying on spreadsheets.
          </p>
        </FadeIn>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <FadeIn delay={0.1}>
            <BrowserFrame url="app.digitise360.co.uk/maintenance">
              <img
                src="/assets/maintenance-scheduler.png"
                alt="DigiTise360 planned maintenance scheduler"
                className="block w-full"
              />
            </BrowserFrame>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="flex flex-col gap-5">
              {points.map((point) => (
                <div
                  key={point.title}
                  className="flex gap-4 rounded-xl border border-border bg-background p-5 shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
                    <point.icon className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="font-heading text-base font-bold">
                      {point.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
