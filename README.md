# Sina Qasempour — Engineer

A personal engineering publication: production work, startup leadership, and computing exploration. Next.js 16, React 19, TypeScript, Tailwind CSS 4, Framer Motion.

## Local development

Node.js 20.9 or newer. Run `npm ci`, then `npm run dev`.

For a production preview run `npm run build` and `npm start`. Keep server logs outside `.next` so Windows file locks do not interrupt builds.

## Validation

- `npm run lint`
- `npm run typecheck`
- `npm run build`
- `npm run check:site` with the local preview running: 10 content routes, legacy redirects, SEO, internal links, anchors, PDF, OpenGraph image, sitemap, robots and 404 responses.

## Content architecture

- `data/profile.ts`: identity, contact, philosophy, seven responsibility chapters and capabilities.
- `data/experience.ts`: résumé project roles; no inferred employment dates.
- `data/case-studies.ts`: five professional accounts and research record, typed role/period/context/contribution/focus/technology/status/source fields.
- `data/research.ts`: research introduction, study methods, limitations and source.
- `data/github.ts`: seven curated repositories with engineering questions and source links.
- `data/credentials.ts`: 18 explicitly user-supplied credentials, preserving IDs and dates; not issuer-verified.
- `data/site-content.ts`: editorial headings and diagram explanations.

The ten content pages are Home, About, Work, five professional case studies, Research, and its SVM/QSVM study. Previous Journey, Stack, Lab, Open Source and research-under-Work URLs permanently redirect to their new locations. Contact is a shared footer, not a thin standalone page.

Components are server-rendered except navigation, chapter selection, motion infrastructure and email-copy feedback. The computing illustration is an accessible SVG of two Hadamard transformations, not the QSVM feature map. No WebGL, live GitHub request, dashboard statistics or framework-logo wall.

## Evidence and maintenance

See `docs/second-pass-plan.md` and `docs/second-pass-audit.md`. Personal/project prose belongs in structured data. Keep repository features distinct from personal ownership and production evidence. Never infer deployment scale from a repository.

The original résumé is retained, but its English level and IBM study progress predate the newer details supplied by Sina. Refresh it before publication. Exact project dates and wider Danobin leadership responsibilities remain to be confirmed.

## SEO and hosting

`NEXT_PUBLIC_SITE_URL` configures the canonical origin; the existing Vercel URL is the fallback. Metadata retains Software Engineer, Backend Engineering, Systems and Quantum Computing search terms while the visible identity is Engineer. Includes Person JSON-LD, sitemap, robots and a social preview.

**Do not deploy until Sina explicitly approves the final website.** This pass is local only.
