# SEO Recovery — sakinstitutions.com (plan: how-to-make-the-rustling-floyd.md)

## Part B — Code changes
- [x] B1: Site-wide canonical `./` + og:url in layout.tsx; remove per-page alternates (page.tsx, faq/page.tsx)
- [x] B2: title.template + default in layout.tsx; homepage title.absolute; normalize 37 page titles
- [x] B3: JSON-LD @graph (CollegeOrUniversity + WebSite) in layout.tsx
- [x] B4: Fix Guwahati map → Bangalore embed; ApplicationForm affiliation line; "Banglore" spellings
- [x] B5: Navbar h1 → p (single h1 per page)
- [x] B6: sitemap.ts drop lastModified; lang="en-IN"
- [x] Verify: npm run build + grep prerendered HTML — canonicals self-referencing per route, titles templated, 1 ld+json script (2 on /faq), exactly 1 h1 per page
- [x] Commit, push, verify live pages after deploy (9cc6c41; live check passed: new title + self-referencing canonical on /courses/gnm)

## Part A — Operational (done by user 2026-07-28)
- [x] Vercel: old domain (+www, apex) 308-redirects to sakinstitutions.com, path-preserving — externally verified via curl
- [x] GSC old property: verify via DNS TXT → Change of Address → new property (user-reported done)
- [x] GSC new property: sitemap submitted; request indexing of homepage (user-reported done)
- [x] Google Business Profile with new URL; Instagram bio link (user-reported done)

## Waiting on Google (nothing left to do; monitor only)
- Brand queries ("sak college") typically flip to the new domain in days–2 weeks
- Full authority transfer via Change of Address: ~1–3 months; GSC old property shows "Site moving"
- Keep old domain registration + redirect live for at least 1 year; keep googleee7820ad7c6e8f9c.html in public/

## Review (2026-07-28)
All Part B code changes shipped in commit 9cc6c41 and verified live on
www.sakinstitutions.com: self-referencing canonicals + og:url on all 38 routes
(single `canonical: "./"` in root layout), title.template with keyword-bearing
per-page titles, CollegeOrUniversity + WebSite JSON-LD with alternateName
"SAK College of Nursing", Bangalore location consistency (map embed,
affiliation line, spelling), single h1 per page, sitemap lastModified dropped,
lang="en-IN". Build-output checks passed before push (canonical/title/ld+json/h1
per page). Part A (Vercel old-domain redirect, GSC Change of Address, Google
Business Profile) remains — requires the user's logged-in browser; the redirect
for sakinstitutes.com is the critical unfinished step.
