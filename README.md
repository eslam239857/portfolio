# Eslam Hesuien: Cybersecurity Portfolio

Next.js 14 (App Router) · React 18 · TypeScript · Tailwind CSS · Framer Motion · Lucide Icons.

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production check
```

## Replace your profile photo
Overwrite **`public/images/profile.jpg`** with your photo (same file name). Portrait, about 4:5 works best (e.g. 800x1000). To use another name or format, change `photo` in `src/data/site.ts`.

## Customise your info
Everything is in **`src/data/site.ts`**:
- `site.email`: replace the placeholder, then set `emailIsPlaceholder: false`.
- `site.links.github`: add your GitHub URL. Empty means the site shows "add link / soon" states, never a broken link.
- `projects`: edit text, tech, and add `github` / `demo` URLs. The last project is a marked **Sample**; replace or delete it.
- `about`, `skillGroups`, `achievements`, `timeline`: edit the text directly.
Colours live in `tailwind.config.ts`; global styles in `src/app/globals.css`.

## Contact form
Validated on the client and server, with a hidden honeypot field, a minimum-time check and a per-IP rate limit. Delivery uses [Resend](https://resend.com) (free tier). Copy `.env.example` to `.env.local` and set `RESEND_API_KEY` and `CONTACT_TO_EMAIL`. Until then the form shows "not configured yet".

## Deploy to Vercel
1. Push this folder to a GitHub repo.
2. On vercel.com choose **Add New > Project**, import the repo (framework auto-detected as Next.js).
3. Add environment variables: `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `NEXT_PUBLIC_SITE_URL` (your final URL).
4. Deploy. Redeploy after changing env vars.

## Notes
- Only CV facts are used. Courses (eJPT v2 on Udemy, eWPTX, etc.) are listed as courses, not certifications. No bounty counts, payouts or rankings are claimed.
- Phone number and GPA from the CV are intentionally not shown.
