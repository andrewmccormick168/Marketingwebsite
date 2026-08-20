import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function FadeIn({ children, delay = 0, y = 16, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionLabel({ children, className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-foreground",
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      {children}
    </span>
  );
}

export function CTAButtons({ className, size = "default", bookLabel = "Book a Demo", trialLabel = "Start Free Trial" }) {
  return (
    <div className={cn("flex flex-col gap-3 sm:flex-row", className)}>
      <Button asChild size={size} className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm">
        <Link to="/contact">{trialLabel}</Link>
      </Button>
      <Button asChild size={size} variant="outline" className="border-border bg-background hover:bg-accent hover:text-accent-foreground">
        <Link to="/book-a-demo">{bookLabel}</Link>
      </Button>
    </div>
  );
}

export function BrowserFrame({ url = "app.digitise360.co.uk", children, className }) {
  return (
    <div className={cn("overflow-hidden rounded-xl border border-border bg-card shadow-2xl shadow-slate-900/10", className)}>
      <div className="flex items-center gap-2 border-b border-border bg-muted/60 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        <div className="ml-3 hidden flex-1 items-center sm:flex">
          <div className="flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-1 text-[11px] text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-primary/70" />
            {url}
          </div>
        </div>
      </div>
      <div className="bg-background">{children}</div>
    </div>
  );
}