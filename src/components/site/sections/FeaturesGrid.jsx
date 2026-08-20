import React from "react";
import { Link } from "react-router-dom";
import {
  CalendarDays,
  Smartphone,
  FileText,
  Users,
  Repeat,
  FileSignature,
  Receipt,
  ShoppingCart,
  Package,
  Wallet,
  FolderKanban,
  BarChart3,
  LayoutDashboard,
  Truck,
  Plug,
  ArrowRight,
} from "lucide-react";
import { FadeIn, SectionLabel } from "@/components/site/ui";

const groups = [
  {
    title: "Operations",
    blurb: "Plan, dispatch and complete work efficiently across your whole workforce.",
    items: [
      { icon: CalendarDays, name: "Job Management & Scheduling", desc: "Plan visits, allocate engineers and balance workloads with a clear drag-and-drop board." },
      { icon: Smartphone, name: "Engineer Mobile App", desc: "Engineers receive jobs, navigate to site and update statuses from their phone." },
      { icon: FileText, name: "Digital Job Reports & Forms", desc: "Replace paperwork with structured digital forms, signatures and photos." },
      { icon: Users, name: "Customer & Site Management", desc: "A single record for every customer, site, asset and service history." },
      { icon: Repeat, name: "Planned Preventative Maintenance", desc: "Schedule recurring visits automatically and stay ahead of contract obligations." },
    ],
  },
  {
    title: "Commercial",
    blurb: "Quote, cost and control the commercial side of every job from end to end.",
    items: [
      { icon: FileSignature, name: "Quotes & Customer Acceptance", desc: "Send professional quotes and let customers accept digitally." },
      { icon: Receipt, name: "Invoicing Workflows", desc: "Turn completed work into accurate invoices without rekeying data." },
      { icon: ShoppingCart, name: "Purchase Orders", desc: "Raise and track POs against jobs to keep costs visible." },
      { icon: Package, name: "Stock Control", desc: "Track stock levels, allocations and engineer van stock." },
      { icon: Wallet, name: "Expenses", desc: "Capture engineer expenses and reconcile against jobs." },
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
      { icon: Plug, name: "Xero Integrations", desc: "Sync invoices, contacts and financial data directly with Xero to keep your books accurate and up to date." },
    ],
  },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <SectionLabel className="mx-auto">Features</SectionLabel>
          <h2 className="mt-5 font-heading text-3xl font-extrabold tracking-tight sm:text-4xl text-balance">
            Everything your field operation needs
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Grouped into logical categories — each capability is designed around a real field-service workflow, not a
            checklist of features.
          </p>
        </FadeIn>

        <div className="mt-16 flex flex-col gap-16">
          {groups.map((group, gi) => (
            <FadeIn key={group.title} delay={gi * 0.05}>
              <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">{group.title}</span>
                  <h3 className="mt-2 font-heading text-2xl font-bold tracking-tight">{group.title}</h3>
                  <p className="mt-3 text-muted-foreground">{group.blurb}</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {group.items.map((f) => (
                    <div
                      key={f.name}
                      className="group rounded-xl border border-border bg-background p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <f.icon className="h-5 w-5" />
                      </div>
                      <h4 className="mt-4 text-sm font-bold">{f.name}</h4>
                      <p className="mt-1.5 text-sm text-muted-foreground">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-16 text-center">
          <Link
            to="/features"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
          >
            Explore every feature <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}