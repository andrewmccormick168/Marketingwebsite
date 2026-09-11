import React from "react";
import {
  AlertTriangle,
  CalendarDays,
  CheckCircle2,
  FileCheck2,
  FileText,
  Receipt,
  Smartphone,
} from "lucide-react";
import { FadeIn, SectionLabel } from "@/components/site/ui";

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Job raised",
    desc: "Create reactive, service, installation, remedial or survey work against the correct customer and site.",
  },
  {
    icon: CalendarDays,
    number: "02",
    title: "Schedule & dispatch",
    desc: "Allocate engineers, plan visits and manage workloads from the office calendar.",
  },
  {
    icon: Smartphone,
    number: "03",
    title: "Engineer attends",
    desc: "Engineers receive the job, start their journey, arrive on site and work from their mobile device.",
  },
  {
    icon: CheckCircle2,
    number: "04",
    title: "Complete & report",
    desc: "Capture work carried out, photos, signatures, forms and completion information digitally.",
  },
  {
    icon: AlertTriangle,
    number: "05",
    title: "Defects identified",
    desc: "Record site defects and remedial requirements without losing the link back to the original job and site.",
  },
  {
    icon: FileCheck2,
    number: "06",
    title: "Quote & approve",
    desc: "Build a professional quotation and let the customer review and accept it digitally.",
  },
  {
    icon: Receipt,
    number: "07",
    title: "Invoice & report",
    desc: "Move completed work through invoicing and commercial reporting without re-entering the same information.",
  },
];

export default function Workflow() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-[50rem] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <SectionLabel className="mx-auto border-white/10 bg-white/5 text-white">
            One connected workflow
          </SectionLabel>

          <h2 className="mt-5 font-heading text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            From the first callout to the final invoice
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">
            Every stage of the job lifecycle follows the same live record, giving
            office teams, engineers and customers clear information from start to finish.
          </p>
        </FadeIn>

        <div className="relative mt-16">
          <div className="absolute left-8 right-8 top-[31px] hidden h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent lg:block" />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-7">
            {steps.map((step, index) => (
              <FadeIn key={step.title} delay={index * 0.05}>
                <div className="group relative h-full rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/50 hover:bg-white/[0.07]">
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/30 bg-slate-950 text-primary shadow-lg shadow-black/20">
                    <step.icon className="h-6 w-6" />
                  </div>

                  <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.22em] text-primary">
                    Step {step.number}
                  </p>

                  <h3 className="mt-2 font-heading text-base font-bold">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {step.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn delay={0.15}>
          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-primary/20 bg-primary/10 px-6 py-5 text-center">
            <p className="font-heading text-lg font-bold">
              Capture it once. Use it throughout the job.
            </p>
            <p className="mt-1 text-sm text-slate-300">
              Field information flows straight into defects, quotations,
              remedials, invoicing and management reporting.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
