-- DigiTise360 marketing website enquiries.
-- Safe to apply to the existing Supabase project.

create table if not exists public.website_enquiries (
  id uuid primary key default gen_random_uuid(),
  enquiry_type text not null check (enquiry_type in ('contact', 'demo', 'trial')),
  name text not null,
  company text not null,
  email text not null,
  phone text,
  user_count text,
  message text,
  status text not null default 'new' check (status in ('new', 'contacted', 'qualified', 'closed')),
  created_at timestamptz not null default now()
);

create index if not exists website_enquiries_created_at_idx
  on public.website_enquiries (created_at desc);

create index if not exists website_enquiries_status_idx
  on public.website_enquiries (status);

alter table public.website_enquiries enable row level security;

-- Public website visitors may submit enquiries, but cannot read them back.
drop policy if exists "website_enquiries_public_insert" on public.website_enquiries;
create policy "website_enquiries_public_insert"
on public.website_enquiries
for insert
to anon, authenticated
with check (
  enquiry_type in ('contact', 'demo', 'trial')
  and char_length(name) between 1 and 200
  and char_length(company) between 1 and 250
  and char_length(email) between 3 and 320
);

revoke all on table public.website_enquiries from anon, authenticated;
grant insert on table public.website_enquiries to anon, authenticated;
