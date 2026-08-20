import React from "react";
import { FadeIn, SectionLabel } from "@/components/site/ui";
import { Monitor, FileCheck, MessagesSquare } from "lucide-react";

const points = [
{
  icon: Monitor,
  title: "Their own portal",
  desc: "Customers access a branded portal to view relevant job information, quotes and documents."
},
{
  icon: FileCheck,
  title: "Interact digitally",
  desc: "Accept quotes, approve work and review reports online — no phone tag or email chasing."
},
{
  icon: MessagesSquare,
  title: "A more professional experience",
  desc: "Give customers visibility and a modern way to interact with your business."
}];


export default function CustomerPortal() {
  return (
    <section className="border-y border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <SectionLabel>Customer Portal</SectionLabel>
            <h2 className="mt-5 font-heading text-3xl font-extrabold tracking-tight sm:text-4xl text-balance">
              Give your customers their own window into the work
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Customers can access their own portal to view relevant information and interact digitally with the
              contractor — helping provide a more professional customer experience and reducing back-office admin.
            </p>
            <div className="mt-8 flex flex-col gap-4">
              {points.map((p) =>
              <div key={p.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-background text-primary shadow-sm">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold">{p.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                  </div>
                </div>
              )}
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="rounded-2xl border border-border bg-background p-6 shadow-xl">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div>
                  <p className="text-xs text-muted-foreground">Customer portal</p>
                  <p className="font-heading font-bold">AKB Facilities Ltd</p>
                </div>
                <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">Active</span>
              </div>
              <div className="mt-4 flex flex-col gap-3">
                {[
                { t: "Service visit completed", s: "Redwood Retail Park", tag: "Report" },
                { t: "Quote awaiting acceptance", s: "PPM contract renewal", tag: "Accept" },
                { t: "Invoice #1042", s: "Due 30 Aug 2026", tag: "View" }].
                map((row) =>
                <div key={row.t} className="flex items-center justify-between rounded-lg border border-border p-3">
                    <div>
                      <p className="text-sm font-semibold">{row.t}</p>
                      <p className="text-xs text-muted-foreground">{row.s}</p>
                    </div>
                    <span className="rounded-md bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">{row.tag}</span>
                  </div>
                )}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>);

}