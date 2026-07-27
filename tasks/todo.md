# SEO Recovery — sakinstitutions.com (plan: how-to-make-the-rustling-floyd.md)

## Part B — Code changes
- [x] B1: Site-wide canonical `./` + og:url in layout.tsx; remove per-page alternates (page.tsx, faq/page.tsx)
- [x] B2: title.template + default in layout.tsx; homepage title.absolute; normalize 37 page titles
- [x] B3: JSON-LD @graph (CollegeOrUniversity + WebSite) in layout.tsx
- [x] B4: Fix Guwahati map → Bangalore embed; ApplicationForm affiliation line; "Banglore" spellings
- [x] B5: Navbar h1 → p (single h1 per page)
- [x] B6: sitemap.ts drop lastModified; lang="en-IN"
- [x] Verify: npm run build + grep prerendered HTML — canonicals self-referencing per route, titles templated, 1 ld+json script (2 on /faq), exactly 1 h1 per page
- [ ] Commit, push, verify live pages after deploy

## Part A — Operational (user's browser; offer to drive via Chrome)
- [ ] Vercel: add old domain sakinstitutes.com (+www) as permanent redirect to sakinstitutions.com
- [ ] GSC old property: verify via DNS TXT → Change of Address → new property
- [ ] GSC new property: sitemap submitted; request indexing of homepage
- [ ] Google Business Profile with new URL; Instagram bio link

## Review
(to fill in at the end)
