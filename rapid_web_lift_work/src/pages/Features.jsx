import React from "react";
import { FadeIn, SectionLabel, CTAButtons } from "@/components/site/ui";
import {
  CalendarDays, Smartphone, FileText, Users, Repeat, FileSignature,
  Receipt, ShoppingCart, Package, Wallet, FolderKanban, BarChart3,
  LayoutDashboard, Truck, Plug, AlertTriangle,
} from "lucide-react";

const groups = [
  {
    title: "Operations",
    blurb: "Plan, dispatch and complete work efficiently across your whole workforce.",
    items: [
      { icon: CalendarDays, name: "Job Management & Scheduling", desc: "Plan visits, allocate engineers and balance workloads with a clear drag-and-drop scheduling board." },
      { icon: Smartphone, name: "Engineer Mobile App", desc: "Engineers receive jobs, navigate to site, update statuses and complete work from their phone." },
      { icon: FileText, name: "Digital Job Reports & Forms", desc: "Replace paperwork with structured digital forms, signatures and photos submitted from site." },
      { icon: Users, name: "Customer & Site Management", desc: "A single record for every customer, site, asset and service history." },
      { icon: Repeat, name: "Planned Preventative Maintenance", desc: "Schedule recurring visits automatically and stay ahead of contract obligations." },
      { icon: AlertTriangle, name: "Defect Management", desc: "Log, track and resolve defects raised on site — with full visibility from report through to closure." },
    ],
  },
  {
    title: "Commercial",
    blurb: "Quote, cost and control the commercial side of every job from end to end.",
    items: [
      { icon: FileSignature, name: "Quotes & Digital Acceptance", desc: "Send professional quotes by email that customers can review and accept digitally — straight from the quote itself, no portal login needed." },
      { icon: Receipt, name: "Invoicing Workflows", desc: "Turn completed work into accurate invoices without rekeying data." },
      { icon: ShoppingCart, name: "Purchase Orders", desc: "Raise and track purchase orders against jobs to keep costs visible." },
      { icon: Package, name: "Stock Control", desc: "Track stock levels, allocations and engineer van stock in one place." },
      { icon: Wallet, name: "Expenses", desc: "Capture engineer expenses and reconcile them against jobs." },
    ],
  },
  {
    title: "Projects, Finance & Connect",
    blurb: "Bring projects, reporting and integrations into one trusted system of record.",
    items: [
      { icon: FolderKanban, name: "Project & Installation Management", desc: "Manage multi-stage installations against a single project plan and budget." },
      { icon: BarChart3, name: "Financial & Operational Reporting", desc: "Clear reporting on revenue, productivity, utilisation and job profitability." },
      { icon: LayoutDashboard, name: "Customer Portal", desc: "Give customers their own portal to view jobs and interact digitally." },
      { icon: Truck, name: "Vehicle Management", desc: "Track vehicles, MOT, insurance and mileage in one place." },
      { icon: Plug, name: "Xero Integration", desc: "Sync invoices, contacts and financial data directly with Xero to keep your books accurate and up to date." },
    ],
  },
];

export default function Features() {
  return (
    <>
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <FadeIn className="max-w-3xl">
            <SectionLabel>Features</SectionLabel>
            <h1 className="mt-5 font-heading text-4xl font-extrabold tracking-tight sm:text-5xl text-balance">
              Field service software that does it all
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              DigiTise360 is a complete field service management platform — digital job management, engineer scheduling,
              reporting, commercial control and customer engagement in one connected system.
            </p>
          </FadeIn>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16">
            {groups.map((group, gi) => (
              <FadeIn key={group.title} delay={gi * 0.05}>
                <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">{group.title}</span>
                    <h2 className="mt-2 font-heading text-2xl font-bold tracking-tight">{group.title}</h2>
                    <p className="mt-3 text-muted-foreground">{group.blurb}</p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {group.items.map((f) => (
                      <div key={f.name} className="group rounded-xl border border-border bg-background p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                          <f.icon className="h-5 w-5" />
                        </div>
                        <h3 className="mt-4 text-sm font-bold">{f.name}</h3>
                        <p className="mt-1.5 text-sm text-muted-foreground">{f.desc}</p>
                      </div>
                    ))}
                  </div>
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
              See it all working together
            </h2>
            <CTAButtons className="mt-8 justify-center" size="lg" />
          </FadeIn>
        </div>
      </section>
    </>
  );
}