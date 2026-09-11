import React from "react";
import { Link } from "react-router-dom";
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  CalendarDays,
  ClipboardCheck,
  FileSignature,
  FileText,
  FolderKanban,
  GraduationCap,
  LayoutDashboard,
  Package,
  Plug,
  Receipt,
  Repeat,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Truck,
  Users,
  Wallet,
} from "lucide-react";
import { FadeIn, SectionLabel } from "@/components/site/ui";

const groups = [
  {
    title: "Operations",
    blurb: "Plan, dispatch, complete and monitor field work from one connected platform.",
    items: [
      {
        icon: CalendarDays,
        name: "Job Management & Scheduling",
        desc: "Create, schedule and allocate reactive, service, installation, remedial and survey work.",
      },
      {
        icon: Smartphone,
        name: "Engineer Mobile App",
        desc: "Give engineers their jobs, travel status, site details, forms, photos and completion workflows on mobile.",
      },
      {
        icon: Repeat,
        name: "Planned Preventative Maintenance",
        desc: "Schedule recurring maintenance, manage due dates and keep future service obligations visible.",
      },
      {
        icon: AlertTriangle,
        name: "Defects & Remedials",
        desc: "Record defects against jobs and sites, track status and move remedial work into quoting and return visits.",
      },
      {
        icon: FileText,
        name: "Digital Job Reports & Forms",
        desc: "Replace paperwork with structured reports, signatures, images and digital field forms.",
      },
      {
        icon: BadgeCheck,
        name: "Certificates",
        desc: "Manage service certificates and compliance documents from the same customer and site record.",
      },
    ],
  },
  {
    title: "Commercial",
    blurb: "Keep quotations, purchasing, invoicing and project costs connected to the work.",
    items: [
      {
        icon: FileSignature,
        name: "Quotes & Digital Acceptance",
        desc: "Create professional quotes, email them to customers and allow online accept or decline.",
      },
      {
        icon: Receipt,
        name: "Invoicing Workflows",
        desc: "Move completed jobs into invoicing without re-entering customer, site or job information.",
      },
      {
        icon: ShoppingCart,
        name: "Purchase Orders",
        desc: "Raise and track supplier purchase orders against jobs and projects.",
      },
      {
        icon: Package,
        name: "Stock & Van Stock",
        desc: "Track stock levels, engineer allocations, transfers and job usage.",
      },
      {
        icon: Wallet,
        name: "Expenses",
        desc: "Capture engineer expenses and associate them with jobs and operational costs.",
      },
      {
        icon: FolderKanban,
        name: "Projects & Installations",
        desc: "Manage labour, materials, planned costs, actual costs and project profitability.",
      },
    ],
  },
  {
    title: "Customers & Contracts",
    blurb: "Keep every customer, site, agreement and service obligation visible.",
    items: [
      {
        icon: Users,
        name: "Customers & Sites",
        desc: "Maintain a single record for customers, multiple sites, contacts and service history.",
      },
      {
        icon: BriefcaseBusiness,
        name: "CRM",
        desc: "Manage prospects, customer relationships and commercial opportunities alongside live operations.",
      },
      {
        icon: ClipboardCheck,
        name: "Maintenance Agreements",
        desc: "Create and manage service agreements, planned visits and recurring contractual obligations.",
      },
      {
        icon: ShieldCheck,
        name: "SLA Management",
        desc: "Set response targets, monitor performance and keep time-sensitive work visible.",
      },
      {
        icon: LayoutDashboard,
        name: "Customer Portal",
        desc: "Give customers secure visibility of jobs, quotes, invoices, defects and maintenance activity.",
      },
      {
        icon: Plug,
        name: "Accounting Integration",
        desc: "Connect commercial data with accounting platforms such as Xero to reduce duplicated administration.",
      },
    ],
  },
  {
    title: "Management & Compliance",
    blurb: "Give management better visibility while keeping operational records controlled and auditable.",
    items: [
      {
        icon: BarChart3,
        name: "Financial & Operational Reporting",
        desc: "Track revenue, performance, productivity, utilisation and job or project profitability.",
      },
      {
        icon: Truck,
        name: "Vehicle Management",
        desc: "Manage vehicles, mileage, MOT, insurance and related fleet information.",
      },
      {
        icon: GraduationCap,
        name: "Training Matrix",
        desc: "Keep workforce qualifications, training and competency records visible.",
      },
      {
        icon: ShieldCheck,
        name: "Audit & Security",
        desc: "Role-based access, company separation and audit visibility help keep business data controlled.",
      },
      {
        icon: ClipboardCheck,
        name: "Asbestos Surveying",
        desc: "Support structured asbestos survey workflows, findings, reports and site records.",
      },
      {
        icon: Repeat,
        name: "Automated Notifications",
        desc: "Support maintenance reminders, customer notifications, quote follow-ups and recurring service workflows.",
      },
    ],
  },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <SectionLabel className="mx-auto">Platform Capabilities</SectionLabel>

          <h2 className="mt-5 font-heading text-3xl font-extrabold tracking-tight sm:text-4xl text-balance">
            More than job management
          </h2>

          <p className="mt-5 text-lg text-muted-foreground">
            DigiTise360 brings field operations, maintenance, commercial control,
            customer management and reporting together in one connected system.
          </p>
        </FadeIn>

        <div className="mt-16 flex flex-col gap-16">
          {groups.map((group, gi) => (
            <FadeIn key={group.title} delay={gi * 0.04}>
              <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">
                    {group.title}
                  </span>

                  <h3 className="mt-2 font-heading text-2xl font-bold tracking-tight">
                    {group.title}
                  </h3>

                  <p className="mt-3 text-muted-foreground">{group.blurb}</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {group.items.map((feature) => (
                    <div
                      key={feature.name}
                      className="group rounded-xl border border-border bg-background p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <feature.icon className="h-5 w-5" />
                      </div>

                      <h4 className="mt-4 text-sm font-bold">{feature.name}</h4>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {feature.desc}
                      </p>
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
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
          >
            Explore every feature <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
