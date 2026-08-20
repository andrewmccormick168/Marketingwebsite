import React, { useState } from 'react';
import { FadeIn, SectionLabel } from '@/components/site/ui';
import { Calendar, Clock, Users, Check, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';
import { submitWebsiteEnquiry } from '@/services/websiteLeadService';

const perks = [
  'A guided walkthrough of the DigiTise360 platform',
  'See job scheduling, the engineer app and reporting in action',
  'Discuss how it adapts to your trade and workflows',
  'No obligation — just a clear look at how it works',
];

export default function BookADemo() {
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
        enquiryType: 'demo',
        name: form.get('name'),
        company: form.get('company'),
        email: form.get('email'),
        phone: form.get('phone'),
        userCount: form.get('users'),
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Demo request failed:', err);
      setError('We could not submit your demo request. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <FadeIn className="max-w-3xl">
            <SectionLabel>Book a Demo</SectionLabel>
            <h1 className="mt-5 font-heading text-4xl font-extrabold tracking-tight sm:text-5xl text-balance">See DigiTise360 in action</h1>
            <p className="mt-5 text-lg text-muted-foreground">Book a personalised demo and we’ll show you how DigiTise360 brings your office, engineers and customers together on one simple platform.</p>
          </FadeIn>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <FadeIn>
              <h2 className="font-heading text-2xl font-bold tracking-tight">What to expect</h2>
              <ul className="mt-6 flex flex-col gap-4">{perks.map((p) => <li key={p} className="flex items-start gap-3 text-sm text-muted-foreground"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {p}</li>)}</ul>
              <div className="mt-10 grid grid-cols-3 gap-4">
                {[{ icon: Clock, k: '30 mins', v: 'Focused walkthrough' }, { icon: Users, k: 'Tailored', v: 'To your trade' }, { icon: Calendar, k: 'Flexible', v: 'Book a time that suits' }].map((s) => (
                  <div key={s.k} className="rounded-xl border border-border bg-background p-4 text-center"><s.icon className="mx-auto h-5 w-5 text-primary" /><p className="mt-2 text-sm font-bold">{s.k}</p><p className="text-xs text-muted-foreground">{s.v}</p></div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-primary/30 bg-accent/40 p-10 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground"><Check className="h-7 w-7" /></div>
                  <h3 className="mt-5 font-heading text-xl font-bold">Demo request received</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Thanks — we’ll be in touch shortly to arrange your walkthrough.</p>
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
                    {submitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Submitting…</> : 'Request demo'}
                  </Button>
                  <p className="mt-3 text-center text-xs text-muted-foreground">Prefer to start now? <Link to="/start-free-trial" className="font-semibold text-primary hover:underline">Start a free trial</Link>.</p>
                </form>
              )}
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
