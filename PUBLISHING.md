# Publishing Setup

This site now has a private publisher powered by Supabase.

## Pages

- `/login` sends a magic login link to your email.
- `/admin` lets you write, categorize, save drafts, and publish posts.
- `/writing` and the homepage read published posts from Supabase when it is connected.
- If Supabase is not configured, the site still uses the local TypeScript posts in `src/data/posts.ts`.

## 1. Create Supabase project

1. Create a Supabase project.
2. Open the SQL editor.
3. Run `supabase/schema.sql`.
4. In `publisher_emails`, keep `2rahatyasin@gmail.com` or add your preferred publishing email.

## 2. Add environment variables

Create `.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

For Vercel, add the same two variables in Project Settings → Environment Variables.

## 3. Enable login redirects

In Supabase Auth settings, add these redirect URLs:

```text
http://localhost:3001/admin
https://your-domain.com/admin
```

## 4. Publish

1. Go to `/login`.
2. Enter your email.
3. Open the magic link.
4. Go to `/admin`.
5. Choose a category, write the piece, and set status to `Published`.

The current categories are:

- Founder Journal
- Thought Notes
- Travel Stories
- Reading Notes
- Podcast
- Research

Published posts appear on the homepage and `/writing`. Drafts stay in Supabase.
