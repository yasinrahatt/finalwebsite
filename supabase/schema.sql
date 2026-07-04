create table if not exists public.publisher_emails (
  email text primary key
);

insert into public.publisher_emails (email)
values ('2rahatyasin@gmail.com')
on conflict (email) do nothing;

create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  title text not null,
  slug text not null unique,
  date date not null default current_date,
  type text not null,
  summary text not null,
  tags text[] not null default '{}',
  category text not null,
  content text not null,
  status text not null default 'draft' check (status in ('draft', 'published')),
  author_id uuid not null references auth.users(id) default auth.uid()
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_blog_posts_updated_at on public.blog_posts;

create trigger set_blog_posts_updated_at
before update on public.blog_posts
for each row
execute function public.set_updated_at();

alter table public.blog_posts enable row level security;

drop policy if exists "Public can read published blog posts" on public.blog_posts;
drop policy if exists "Publishers can manage blog posts" on public.blog_posts;

create policy "Public can read published blog posts"
on public.blog_posts
for select
using (status = 'published');

create policy "Publishers can manage blog posts"
on public.blog_posts
for all
to authenticated
using (
  exists (
    select 1
    from public.publisher_emails
    where lower(email) = lower(auth.jwt() ->> 'email')
  )
)
with check (
  author_id = auth.uid()
  and exists (
    select 1
    from public.publisher_emails
    where lower(email) = lower(auth.jwt() ->> 'email')
  )
);
