import React, { useState } from 'react';
import { FadeIn, SectionLabel } from '@/components/site/ui';
import { Mail, Phone, MapPin, Check, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { submitWebsiteEnquiry } from '@/services/websiteLeadService';

export default function Contact() {
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
        enquiryType: 'contact',
        name: form.get('name'),
        company: form.get('company'),
        email: form.get('email'),
        userCount: form.get('users'),
        message: form.get('message'),
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Contact enquiry failed:', err);
      setError('We could not send your message. Please try again or email info@digitise360.co.uk.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <FadeIn className="max-w-3xl">
            <SectionLabel>Contact</SectionLabel>
            <h1 className="mt-5 font-heading text-4xl font-extrabold tracking-tight sm:text-5xl text-balance">
              Let’s talk about your field operation
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Whether you’re ready for a demo, need Enterprise pricing for more than 30 users, or just want to find out if DigiTise360 fits your business — get in touch.
            </p>
          </FadeIn>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <FadeIn>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4 rounded-xl border border-border bg-background p-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-primary"><Mail className="h-5 w-5" /></div>
                  <div><p className="text-sm font-bold">Email</p><p className="text-sm text-muted-foreground">info@digitise360.co.uk</p></div>
                </div>
                <div className="flex items-center gap-4 rounded-xl border border-border bg-background p-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-primary"><Phone className="h-5 w-5" /></div>
                  <div><p className="text-sm font-bold">Phone</p><p className="text-sm text-muted-foreground">Contact us by email to arrange a call</p></div>
                </div>
                <div className="flex items-center gap-4 rounded-xl border border-border bg-background p-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-primary"><MapPin className="h-5 w-5" /></div>
                  <div><p className="text-sm font-bold">Location</p><p className="text-sm text-muted-foreground">United Kingdom</p></div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-primary/30 bg-accent/40 p-10 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground"><Check className="h-7 w-7" /></div>
                  <h3 className="mt-5 font-heading text-xl font-bold">Thanks — message received</h3>
                  <p className="mt-2 text-sm text-muted-foreground">A member of the DigiTise360 team will be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-background p-6 sm:p-8">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-2"><Label htmlFor="name">Full name</Label><Input id="name" name="name" required placeholder="Jane Smith" /></div>
                    <div className="flex flex-col gap-2"><Label htmlFor="company">Company</Label><Input id="company" name="company" required placeholder="Acme Services Ltd" /></div>
                  </div>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-2"><Label htmlFor="email">Email</Label><Input id="email" name="email" type="email" required placeholder="jane@acme.co.uk" /></div>
                    <div className="flex flex-col gap-2"><Label htmlFor="users">Number of users</Label><Input id="users" name="users" placeholder="e.g. 12" /></div>
                  </div>
                  <div className="mt-4 flex flex-col gap-2"><Label htmlFor="message">How can we help?</Label><Textarea id="message" name="message" rows={4} placeholder="Tell us about your field operation…" /></div>
                  {error && <p className="mt-4 text-sm text-destructive">{error}</p>}
                  <Button type="submit" disabled={submitting} className="mt-6 w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    {submitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Sending…</> : 'Send message'}
                  </Button>
                </form>
              )}
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
