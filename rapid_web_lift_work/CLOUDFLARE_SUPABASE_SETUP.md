# DigiTise360 Marketing Website — Supabase + Cloudflare Pages

This export has been converted away from Base44.

## What changed

- Removed `@base44/sdk` and `@base44/vite-plugin`.
- Removed Base44 app configuration, auth context, OAuth consent code and Base44 client.
- Added a standard Supabase browser client.
- Contact, demo and free-trial request forms now insert into `public.website_enquiries` in Supabase.
- Login/register/password routes redirect to the existing DigiTise360 application (`https://app.digitise360.com` by default), so the marketing site does not create orphan auth users outside the app's company onboarding flow.
- Removed Base44-hosted image dependencies. Logo/dashboard/mobile screenshots are now optional environment-configured assets with built-in fallbacks.
- Added a Cloudflare Pages SPA `_redirects` file.
- Added a Supabase migration for website enquiries.

## 1. Install dependencies

```bash
npm install
```

## 2. Apply the Supabase migration

Apply:

```text
supabase/migrations/20260820000001_website_enquiries.sql
```

Use your existing DigiTise360 Supabase project.

The table is RLS protected. Public visitors can INSERT enquiries but cannot SELECT, UPDATE or DELETE them.

## 3. Local environment

Copy:

```bash
cp .env.example .env.local
```

Set:

```text
VITE_SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=YOUR_PUBLIC_PUBLISHABLE_KEY
VITE_APP_URL=https://app.digitise360.com
```

Never put the Supabase service-role key in a Vite environment variable or Cloudflare Pages frontend variable.

## 4. Optional marketing images

You can either place images in `public/assets/` or host them elsewhere.

Example:

```text
VITE_MARKETING_LOGO_URL=/assets/digitise360-logo.png
VITE_DASHBOARD_IMAGE_URL=/assets/dashboard.jpg
VITE_MOBILE_APP_IMAGE_URL=/assets/mobile-app.jpg
```

If these are blank, the website uses built-in visual fallbacks and remains functional.

## 5. Test locally

```bash
npm run dev
```

Production build:

```bash
npm run build
```

The output directory is:

```text
dist
```

## 6. Deploy with Cloudflare Pages

Create a new GitHub repository for this marketing website (recommended: keep it separate from the DigiTise360 application repository).

In Cloudflare Pages connect the GitHub repository and use:

- Framework preset: Vite (or none/custom)
- Build command: `npm run build`
- Build output directory: `dist`

Add the environment variables from `.env.example` in the Cloudflare Pages project settings.

The included `public/_redirects` contains:

```text
/* /index.html 200
```

so React Router routes such as `/pricing`, `/features` and `/book-a-demo` work on direct refresh.

## 7. Domain layout

Recommended:

```text
digitise360.com      -> Cloudflare Pages marketing website
app.digitise360.com  -> existing DigiTise360 application
```

Login buttons already point at the application domain.

## 8. Supabase website enquiry records

The website stores these enquiry types:

- `contact`
- `demo`
- `trial`

They are stored in `public.website_enquiries` with status `new` by default.

You can later add an office/admin view inside DigiTise360 to manage these leads, or trigger an Edge Function/email notification when a new row is inserted.

## Important

This conversion does not modify your existing DigiTise360 application or its Supabase authentication/company onboarding logic. It is intended to be a separate public marketing website using the same Supabase project only for public website enquiry capture.
