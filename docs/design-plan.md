# Portfolio rebuild

## Before implementation

Reviewed the deployed portfolio and its source on 2026-09-06. The old hero and metadata positioned Sina as an AI engineer; neon colors, WebGL, empty gallery/certificate sections, and shallow project modals distracted from the engineering work. Existing project descriptions, resume, email, and LinkedIn are retained as source material. Legacy project images were inspected and are concept illustrations, so they are not presented as interface screenshots in the rebuild. No `agent-rules/Agent.md` exists in this checkout or parent directories. The matching file in the neighboring SVM-Vs-QSVM project was read and is specific to that research project.

Reviewed public GitHub profile and repository source before implementation. Strongest evidence: Zaraamad Portal (FastAPI/SQLAlchemy/domain modules), Rahtal API companion (authentication and safe write handling), QueryRunner (SQL Server operations), TypePlus (desktop process boundaries), Leximood (packaged text processing), SVM-Vs-QSVM (reproducible simulation). Professional experience is user supplied. Public demo code is distinguished from deployed enterprise systems; no impact metrics or private architecture are invented.

## Visual thesis

A quiet engineering journal: charcoal surfaces, warm white editorial typography, muted teal, and a precise computational wireframe convey depth and curiosity.

## Content plan / information architecture

- `/`: identity and computing visual; selected engineering work; journey; engineering stack; future computing; selected GitHub work; contact.
- `/work`: five editorial case-study entries, with `/work/[slug]` for overview, problem, architecture, technology, contribution, challenges, and lessons.
- `/about`: engineering story, portrait, credentials and languages supplied by Sina.
- `/journey`: interactive progression through frontend, full-stack, backend, software engineering, quantum exploration.
- `/stack`: tools grouped by engineering responsibility.
- `/lab`: research interests and the documented SVM/QSVM experiment with explicit simulation limitations.
- `/open-source`: selected repositories, dated contribution calendar and primary-language distribution.
- Contact is a real email link; GitHub, LinkedIn and existing resume remain directly accessible.

## Component structure

- `components/engineering`: header/footer, section heading, hero, computational SVG, work index, journey tabs, stack, research, repository activity, credentials, motion provider.
- `data`: typed case studies, dated GitHub snapshot, credentials, shared profile and journey content.
- Server pages compose reusable sections. Client boundaries are restricted to navigation, journey interactions, motion, and copy-email feedback.
- Metadata, canonical URLs, sitemap, robots, social preview, semantic landmarks, keyboard focus and reduced motion are first-class.

## Interaction thesis

1. A short, staggered hero entrance establishes hierarchy; the technical figure remains immediately visible.
2. A subtle scroll-progress line and chapter navigation orient long-form reading.
3. The timeline reveals one engineering chapter at a time, with keyboard-operable tabs; project rows sharpen their link affordance on hover.

## Technical direction

Next.js latest stable verified against npm (16.3.4), React 19, TypeScript strict, Tailwind CSS 4, Framer Motion. Lightweight SVG replaces WebGL. Fonts are self-hosted by Next. GitHub data is a verified build-independent snapshot with an explicit refresh command. Standard npm lockfile, strict production build, lint, typecheck, responsive and keyboard browser verification.
