import React from "react";
import { FadeIn, SectionLabel } from "@/components/site/ui";
import {
  FileSignature,
  ShoppingCart,
  Receipt,
  FolderKanban,
  BarChart3,
  BadgePoundSterling,
} from "lucide-react";

const items = [
  {
    icon: FileSignature,
    title: "Professional quotations",
    desc: "Create and send quotes directly from customer, site, defect or job information, then track acceptance digitally.",
  },
  {
    icon: ShoppingCart,
    title: "Purchase order control",
    desc: "Raise and track purchase orders against jobs and projects so committed costs remain visible.",
  },
  {
    icon: FolderKanban,
    title: "Installation & project management",
    desc: "Manage planned work, labour, materials and project activity from one connected record.",
  },
  {
    icon: Receipt,
    title: "Invoicing workflow",
    desc: "Move completed work through to invoice without duplicating customer, site or job information.",
  },
  {
    icon: BadgePoundSterling,
    title: "Cost & profitability visibility",
    desc: "Compare expected and actual costs so commercial performance can be reviewed throughout the job lifecycle.",
  },
  {
    icon: BarChart3,
    title: "Management reporting",
    desc: "Track revenue, operational activity and commercial performance with live reporting across the business.",
  },
];

export default function CommercialProjects() {
  return (
    <section className="border-y border-border bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <FadeIn>
            <SectionLabel className="border-white/10 bg-white/5 text-white">
              Commercial & Projects
            </SectionLabel>

            <h2 className="mt-5 font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
              Keep the commercial side connected to the work
            </h2>

            <p className="mt-5 text-lg text-slate-300">
              DigiTise360 keeps quotations, purchase orders, project costs,
              invoices and reporting tied back to the jobs and sites that created them.
            </p>

            <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/10 p-6">
              <p className="font-heading text-lg font-bold">
                Quote → Approve → Deliver → Cost → Invoice → Report
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Commercial information follows the operational workflow instead of
                being managed separately in spreadsheets or disconnected systems.
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.04}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:bg-white/[0.07]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 font-heading text-lg font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
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
