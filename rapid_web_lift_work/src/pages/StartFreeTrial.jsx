import React, { useState } from 'react';
import { FadeIn, SectionLabel } from '@/components/site/ui';
import { Check, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';
import { submitWebsiteEnquiry } from '@/services/websiteLeadService';

const perks = [
  'Full access to the DigiTise360 platform',
  'Job scheduling, engineer app and reporting',
  'Customer portal and commercial workflows',
  'No credit card required to start',
];

export default function StartFreeTrial() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    const form = new FormData(e.currentTarget);

    try {
      await submitWebsiteEnquiry({
        enquiryType: 'trial',
        name: form.get('name'),
        company: form.get('company'),
        email: form.get('email'),
        phone: form.get('phone'),
        userCount: form.get('users'),
        message: 'Free trial requested from marketing website.',
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Trial request failed:', err);
      setError('We could not submit your trial request. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <FadeIn className="max-w-3xl">
            <SectionLabel>Start Free Trial</SectionLabel>
            <h1 className="mt-5 font-heading text-4xl font-extrabold tracking-tight sm:text-5xl text-balance">Start your DigiTise360 free trial</h1>
            <p className="mt-5 text-lg text-muted-foreground">Tell us about your business and we’ll get your DigiTise360 trial set up. £29.99 per user/month after your trial.</p>
          </FadeIn>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <FadeIn>
              <h2 className="font-heading text-2xl font-bold tracking-tight">What’s included</h2>
              <ul className="mt-6 flex flex-col gap-4">{perks.map((p) => <li key={p} className="flex items-start gap-3 text-sm text-muted-foreground"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {p}</li>)}</ul>
              <div className="mt-10 rounded-2xl border border-primary/30 bg-accent/40 p-6">
                <p className="font-heading text-lg font-bold text-accent-foreground">DigiTise360 Standard</p>
                <p className="mt-1 text-sm text-muted-foreground">£29.99 /user/month · everything included</p>
                <p className="mt-3 text-sm text-muted-foreground">Need more than 30 users? Contact us for tailored Enterprise pricing.</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-primary/30 bg-accent/40 p-10 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground"><Check className="h-7 w-7" /></div>
                  <h3 className="mt-5 font-heading text-xl font-bold">Trial request received</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Thanks — we’ll contact you with the next steps to access DigiTise360.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-background p-6 sm:p-8">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-2"><Label htmlFor="name">Full name</Label><Input id="name" name="name" required placeholder="Jane Smith" /></div>
                    <div className="flex flex-col gap-2"><Label htmlFor="company">Company</Label><Input id="company" name="company" required placeholder="Acme Services Ltd" /></div>
                  </div>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-2"><Label htmlFor="email">Work email</Label><Input id="email" name="email" type="email" required placeholder="jane@acme.co.uk" /></div>
                    <div className="flex flex-col gap-2"><Label htmlFor="phone">Phone</Label><Input id="phone" name="phone" placeholder="Phone number" /></div>
                  </div>
                  <div className="mt-4 flex flex-col gap-2"><Label htmlFor="users">Approx. number of users</Label><Input id="users" name="users" placeholder="e.g. 12" /></div>
                  {error && <p className="mt-4 text-sm text-destructive">{error}</p>}
                  <Button type="submit" disabled={submitting} className="mt-6 w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    {submitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Submitting…</> : 'Request free trial'}
                  </Button>
                  <p className="mt-3 text-center text-xs text-muted-foreground">Prefer a guided walkthrough first? <Link to="/book-a-demo" className="font-semibold text-primary hover:underline">Book a demo</Link>.</p>
                </form>
              )}
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
