# Rebuild verification — 2026-09-08

- `npm run lint`: passed.
- `npm run typecheck`: passed.
- `npm run build`: passed; 12 portfolio pages are prerendered, including five case studies.
- `npm run check:site` against `next start`: passed for all 12 pages, canonical/social metadata, 13 internal destinations, 60 local fragments, sitemap, robots, PDF/PNG signatures and media types, and both unknown-route 404 responses.
- Production dependency audit: zero reported vulnerabilities. Manifest, lockfile, and installed direct dependencies match.
- Data verification: 365 consecutive GitHub activity days, matching contribution and active-day totals, six selected repositories, 18 user-supplied certifications, 17 credential IDs, and two languages.
- Browser verification: desktop at 1280 × 720; mobile at 390 × 844 and 375 × 667; menu resize check at 1024 × 768; short-screen navigation at 580 × 320. No horizontal overflow in the checked layouts.
- Interaction verification: project navigation and chapter anchors; timeline ArrowRight and Home keys with focused/selected tab synchronization; menu Escape and focus return; viewport-constrained mobile menu scrolling; native certification disclosure by pointer and keyboard; successful email-copy feedback.
- Production browser console: no hydration errors on the final pages inspected. The SVG title mismatch found during development was corrected by rendering each title as one string.
- Reduced motion is supported in CSS and the Framer Motion provider. Reviewed in source; operating-system preferences were not changed for testing.

The GitHub snapshot remains explicitly dated 2026-09-06, rather than presenting historical figures as live data. Public demos, integration companions, and exact quantum simulation are described with their scope and limitations. Legacy project concept illustrations are not displayed as screenshots.

The existing resume is linked without altering its contents. Deployment was not part of this rebuild; the local production preview runs at http://127.0.0.1:3000.
