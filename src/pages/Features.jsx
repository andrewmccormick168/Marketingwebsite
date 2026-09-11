import React from "react";
import { FadeIn, SectionLabel, CTAButtons } from "@/components/site/ui";
import {
  AlertTriangle,
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

const groups = [
  {
    title: "Operations",
    blurb: "Run day-to-day field operations from job creation through engineer completion.",
    items: [
      {
        icon: CalendarDays,
        name: "Job Management & Scheduling",
        desc: "Create reactive, service, installation, remedial, commissioning and survey work, then allocate engineers and manage visits from the office calendar.",
      },
      {
        icon: Smartphone,
        name: "Engineer Mobile App",
        desc: "Engineers receive jobs, start journeys, arrive on site, update statuses and complete work from their mobile device.",
      },
      {
        icon: FileText,
        name: "Digital Job Reports & Forms",
        desc: "Capture work carried out, photos, signatures, notes and structured forms directly from site.",
      },
      {
        icon: Repeat,
        name: "Planned Preventative Maintenance",
        desc: "Manage recurring servicing, upcoming visits and contract obligations with automated scheduling and reminders.",
      },
      {
        icon: AlertTriangle,
        name: "Defects & Remedials",
        desc: "Record defects against jobs and sites, track outstanding actions and move remedial work into quotation and return-visit workflows.",
      },
      {
        icon: BadgeCheck,
        name: "Certificates",
        desc: "Complete, store and issue service and compliance certificates against the relevant customer, site and job.",
      },
    ],
  },
  {
    title: "Customers & Service",
    blurb: "Keep customer, site, contract and service information in one place.",
    items: [
      {
        icon: Users,
        name: "Customers & Sites",
        desc: "Maintain customers, multiple sites, contacts, site history and service information from one record.",
      },
      {
        icon: BriefcaseBusiness,
        name: "CRM",
        desc: "Manage prospects, opportunities and customer relationships alongside live operational activity.",
      },
      {
        icon: ClipboardCheck,
        name: "Maintenance Agreements",
        desc: "Manage service agreements, planned visits and recurring contractual obligations.",
      },
      {
        icon: ShieldCheck,
        name: "SLA Management",
        desc: "Set response targets, monitor time-sensitive work and keep service performance visible.",
      },
      {
        icon: LayoutDashboard,
        name: "Customer Portal",
        desc: "Give customers secure access to jobs, quotes, invoices, defects, maintenance activity and service information.",
      },
      {
        icon: Repeat,
        name: "Customer Notifications",
        desc: "Keep customers informed when maintenance is due and support recurring service communications automatically.",
      },
    ],
  },
  {
    title: "Commercial",
    blurb: "Move work from quotation through purchasing, delivery and invoicing without duplicated admin.",
    items: [
      {
        icon: FileSignature,
        name: "Quotes & Digital Acceptance",
        desc: "Create professional quotations, email them directly and let customers accept or decline online without a portal login.",
      },
      {
        icon: Receipt,
        name: "Invoicing Workflows",
        desc: "Turn completed work into invoices using the customer, site and job data already captured.",
      },
      {
        icon: ShoppingCart,
        name: "Purchase Orders",
        desc: "Raise and track supplier purchase orders against jobs and projects.",
      },
      {
        icon: Package,
        name: "Stock & Van Stock",
        desc: "Track stock levels, engineer allocations, transfers and materials used against work.",
      },
      {
        icon: Wallet,
        name: "Expenses",
        desc: "Capture engineer expenses and associate them with jobs and operational costs.",
      },
      {
        icon: Plug,
        name: "Accounting Integration",
        desc: "Connect commercial data with accounting platforms such as Xero to reduce rekeying and keep financial records aligned.",
      },
    ],
  },
  {
    title: "Projects & Management",
    blurb: "Control larger installations, costs, assets and business performance.",
    items: [
      {
        icon: FolderKanban,
        name: "Projects & Installations",
        desc: "Manage project activity, labour, materials, expected costs, actual costs and profitability.",
      },
      {
        icon: BarChart3,
        name: "Financial & Operational Reporting",
        desc: "Track revenue, productivity, utilisation, job performance and project profitability.",
      },
      {
        icon: Truck,
        name: "Vehicle Management",
        desc: "Manage vehicles, MOT dates, insurance, mileage and related fleet information.",
      },
      {
        icon: GraduationCap,
        name: "Training Matrix",
        desc: "Keep workforce qualifications, competencies and training records visible.",
      },
      {
        icon: ShieldCheck,
        name: "Audit & Security",
        desc: "Role-based access, company separation and audit visibility help keep operational data controlled.",
      },
      {
        icon: ClipboardCheck,
        name: "Specialist Workflows",
        desc: "Support industry-specific processes including asbestos surveying, compliance forms and specialist reporting.",
      },
    ],
  },
];

export default function Features() {
  return (
    <>
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <FadeIn className="max-w-4xl">
            <SectionLabel>Platform Capabilities</SectionLabel>

            <h1 className="mt-5 font-heading text-4xl font-extrabold tracking-tight sm:text-5xl text-balance">
              More than field service management
            </h1>

            <p className="mt-5 max-w-3xl text-lg text-muted-foreground">
              DigiTise360 brings operations, maintenance, customer management,
              commercial control, projects and reporting into one system —
              helping your team manage the full lifecycle of every job.
            </p>
          </FadeIn>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-20">
            {groups.map((group, gi) => (
              <FadeIn key={group.title} delay={gi * 0.05}>
                <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">
                      {group.title}
                    </span>

                    <h2 className="mt-2 font-heading text-2xl font-bold tracking-tight">
                      {group.title}
                    </h2>

                    <p className="mt-3 text-muted-foreground">
                      {group.blurb}
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {group.items.map((feature) => (
                      <div
                        key={feature.name}
                        className="group h-full rounded-xl border border-border bg-background p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                          <feature.icon className="h-5 w-5" />
                        </div>

                        <h3 className="mt-4 text-sm font-bold">
                          {feature.name}
                        </h3>

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
        </div>
      </section>

      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-balance">
              See how the whole platform works together
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              From the first customer call to engineer completion, quotation,
              remedial work, invoicing and reporting.
            </p>

            <CTAButtons className="mt-8 justify-center" size="lg" />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
