import React from "react";
import { FadeIn, SectionLabel, CTAButtons } from "@/components/site/ui";
import {
  Lightbulb,
  Layers,
  Users2,
  TrendingUp,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Problem first, software second",
    desc: "DigiTise360 was built from first-hand experience of paperwork, duplicated admin and disconnected field-service processes.",
  },
  {
    icon: Workflow,
    title: "Designed around real workflows",
    desc: "Jobs, engineers, defects, quotations, maintenance, invoicing and customer visibility are designed to work together.",
  },
  {
    icon: Users2,
    title: "For office and field teams",
    desc: "Straightforward tools for office users, engineers and customers across desktop and mobile.",
  },
  {
    icon: Layers,
    title: "One operational system",
    desc: "Reduce reliance on spreadsheets, paper forms and separate applications that do not share the same information.",
  },
  {
    icon: ShieldCheck,
    title: "Built for controlled operations",
    desc: "Company separation, roles, audit visibility and structured workflows help businesses keep operational data under control.",
  },
  {
    icon: TrendingUp,
    title: "Built to grow with you",
    desc: "Suitable for growing service contractors, with Enterprise options for larger teams and more complex operations.",
  },
];

export default function About() {
  return (
    <>
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <FadeIn className="max-w-4xl">
            <SectionLabel>About DigiTise360</SectionLabel>

            <h1 className="mt-5 font-heading text-4xl font-extrabold tracking-tight sm:text-5xl text-balance">
              The problem came first. The software came second.
            </h1>

            <p className="mt-5 max-w-3xl text-lg text-muted-foreground">
              DigiTise360 was created from real field-service experience, not from
              building software first and trying to find a market for it afterwards.
            </p>
          </FadeIn>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionLabel>Why it exists</SectionLabel>

            <div className="mt-6 space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                After years of working around paperwork, duplicated administration,
                disconnected spreadsheets and software that often made simple tasks
                harder than they needed to be, the idea behind DigiTise360 was simple:
                build a system around how service businesses actually operate.
              </p>

              <p>
                That means following the full lifecycle of the work — from the first
                callout or planned visit, through engineer attendance, reporting,
                defects and remedials, quotations, invoicing and customer visibility.
              </p>

              <p>
                What started as a way to simplify field operations has grown into a
                broader platform covering service delivery, maintenance, commercial
                control, projects, customer engagement and management reporting.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <FadeIn className="max-w-3xl">
            <SectionLabel>What we stand for</SectionLabel>

            <h2 className="mt-5 font-heading text-3xl font-extrabold tracking-tight sm:text-4xl text-balance">
              Practical software for real service operations
            </h2>

            <p className="mt-4 text-lg text-muted-foreground">
              Paperless. Simple. Compliant.
            </p>
          </FadeIn>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <FadeIn key={value.title} delay={index * 0.04}>
                <div className="h-full rounded-2xl border border-border bg-background p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary">
                    <value.icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 font-heading text-lg font-bold">
                    {value.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {value.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionLabel>Who DigiTise360 is for</SectionLabel>

            <h2 className="mt-5 font-heading text-3xl font-extrabold tracking-tight text-balance">
              Built for contractors that have outgrown disconnected systems
            </h2>

            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                DigiTise360 is aimed at service and maintenance businesses that need
                better control of jobs, engineers, customers, maintenance, commercial
                activity and reporting without moving to an unnecessarily complicated
                enterprise platform.
              </p>

              <p>
                It is particularly suited to growing contractors that have outgrown
                paperwork, spreadsheets or basic job-management systems and want one
                platform that can support both office and field teams.
              </p>
            </div>

            <CTAButtons className="mt-8" size="lg" />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
