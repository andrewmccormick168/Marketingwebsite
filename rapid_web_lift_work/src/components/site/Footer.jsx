import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "@/components/site/Logo";

const columns = [
{
  title: "Product",
  links: [
  { label: "Features", to: "/features" },
  { label: "Industries", to: "/industries" },
  { label: "Pricing", to: "/pricing" },
  { label: "Book a Demo", to: "/book-a-demo" },
  { label: "Start Free Trial", to: "/start-free-trial" }]

},
{
  title: "Company",
  links: [
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "Login", href: "https://app.digitise360.com" }]

}];


export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo className="h-[60px] w-[320px]" />
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Field service management software that connects your office, engineers and customers on one simple, compliant platform.
            </p>
            <p className="mt-3 text-sm font-medium text-foreground">Paperless. Simple. Compliant.</p>
          </div>

          {columns.map((col) =>
          <div key={col.title}>
              <h4 className="font-heading text-sm font-bold">{col.title}</h4>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.links.map((l) =>
              <li key={l.label}>
                {l.href ? (
                  <a href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {l.label}
                  </a>
                ) : (
                  <Link to={l.to} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {l.label}
                  </Link>
                )}
              </li>
              )}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-6">
            <span className="flex items-center gap-1.5"><Mail className="h-4 w-4 text-primary" /> Info@digitise360.co.uk</span>
            
            <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-primary" /> United Kingdom</span>
          </div>
          <p>© {new Date().getFullYear()} DigiTise360. All rights reserved.</p>
        </div>
      </div>
    </footer>);

}