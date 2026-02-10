# Website Redesign Implementation Plan

## Phase Status
- [x] Phase 0: Baseline and Safety
- [x] Phase 1: Information Architecture
- [x] Phase 2: Global Visual System
- [x] Phase 3: Navigation + Theme Controls
- [x] Phase 4: Intro Shell (No Hero)
- [ ] Phase 5: ASCII Animation Integration
- [ ] Phase 6: Experience Log Redesign
- [ ] Phase 7: Portfolio to Project Ledger
- [ ] Phase 8: Startup Spotlight
- [ ] Phase 9: Contact Simplification
- [ ] Phase 10: Quality Passes
- [ ] Phase 11: Verification + Release

## Goal
Rebuild the current portfolio into a minimalist, high-credibility developer site with:
- a strict monochrome base (pure black default)
- ASCII/retro terminal character
- clear emphasis on ML + software engineering depth
- concise Bloomberg + startup impact signals
- dark mode default with light mode toggle

## Design North Star
- Style: minimal, technical, intentional, no visual noise
- Voice: short, technical, readable (not overly dense)
- Layout density: generous breathing room
- Interaction: restrained motion, optional scanline texture
- Credibility model: achievements first, decoration second

## Phase 0: Baseline and Safety
1. Create a working branch for redesign changes.
2. Snapshot current app behavior:
- capture current section order
- record any existing animation libraries/components in use
3. Confirm build baseline with `npm run build`.
4. Define rollback safety:
- commit after each phase
- keep changes isolated by file grouping

## Phase 1: Information Architecture
1. Finalize section structure in `src/App.jsx`.
2. Replace current flow with:
- `Intro` (no traditional hero)
- `Experience Log`
- `Project Ledger`
- `Blaze Sentry`
- `Contact`
3. Remove `Testimonials` from page flow.
4. Keep section IDs stable for anchor navigation.

## Phase 2: Global Visual System
1. Refactor `src/index.css` into token-driven theme variables.
2. Define dark theme tokens:
- `--bg: #000000`
- `--fg: #f2f2f2`
- `--muted: #9a9a9a`
- `--line: #2a2a2a`
- `--accent: #ffffff`
3. Define light theme equivalents behind `[data-theme="light"]`.
4. Add global layout rules:
- max readable line length
- consistent vertical rhythm
- border-first cards/containers
5. Remove old rounded + shadow-heavy styling patterns.
6. Add optional scanline/noise layer with low opacity and `prefers-reduced-motion` fallback.

## Phase 3: Navigation + Theme Controls
1. Rebuild `src/components/nav/Nav.jsx` from icon nav to text command nav.
2. Use labels like:
- `about`
- `experience`
- `projects`
- `startup`
- `contact`
3. Keep scroll-aware active state behavior.
4. Add theme toggle (`dark` / `light`) in nav.
5. Persist theme preference in `localStorage`.

## Phase 4: Intro Shell (No Hero)
1. Replace current `Header` treatment with compact intro block.
2. Keep identity concise:
- name
- role line (ML Engineer / Software Engineer)
- one-sentence current focus
3. Remove CTA-heavy framing and icon-heavy skill ribbon.
4. Place ASCII animation adjacent to intro on desktop, inline on mobile.

## Phase 5: ASCII Animation Integration
1. Create `src/components/ui/KnotAnimation.jsx` using your knot renderer logic.
2. Convert TypeScript-style annotations to JSX-compatible JavaScript.
3. Use `requestAnimationFrame` + refs for smoother rendering and less state churn.
4. Add props:
- `color` (default false)
- `speedA`
- `speedB`
5. Ensure graceful fallback for small screens and reduced motion users.

## Phase 6: Experience Log Redesign
1. Redesign `src/components/experience/Experience.jsx` into timeline/log format.
2. Add Bloomberg entries with concise impact lines:
- 2025 ingestion: Flink/Kafka, 99.9% reliability, anomaly detection, resilient ETL
- 2024 derivatives streaming: PySpark/Argo/Airflow, runtime reduction, throughput gains
3. Keep bullets single-line wherever possible.
4. Add location and date in a subtle metadata row.

## Phase 7: Portfolio to Project Ledger
1. Redesign `src/components/portfolio/Portfolio.jsx` away from large cards.
2. Use a compact project ledger layout:
- project name
- domain tag
- short capability line
- links (`code`, `docs`)
3. Keep filtering, but style it as lightweight command tabs.
4. Emphasize infrastructure/ML/system projects first.

## Phase 8: Startup Spotlight
1. Add or repurpose a section for Blaze Sentry.
2. Include:
- one-line mission
- one-line technical architecture focus
- production intent (scalable, operational, real-time)
3. Link to `https://www.blazesentry.org/`.

## Phase 9: Contact Simplification
1. Keep contact section minimalist.
2. Decide between:
- EmailJS form + LinkedIn/GitHub links, or
- link-only contact panel
3. Apply same monochrome visual language and spacing system.

## Phase 10: Quality Passes
1. Accessibility:
- semantic headings
- keyboard focus styles
- contrast checks in both themes
2. Performance:
- avoid unnecessary re-renders in ASCII animation
- keep CSS effects lightweight
3. Responsive:
- validate mobile spacing and text measure
- ensure nav and ASCII layout degrade cleanly
4. Motion:
- respect `prefers-reduced-motion`
- keep animation subtle and non-distracting

## Phase 11: Verification + Release
1. Run `npm run build`.
2. Manual smoke test:
- anchors and section scroll
- theme toggle persistence
- external links and CTA behavior
3. Final polish:
- copy consistency
- spacing consistency
- remove leftover legacy classes
4. Ship with a final changelog summary.

## Execution Checklist (Quick View)
- [ ] Baseline build passes
- [x] New section architecture implemented
- [x] Global monochrome theming complete
- [x] Nav converted to text + theme toggle
- [x] Intro shell rebuilt (no hero)
- [ ] Knot ASCII animation integrated
- [ ] Bloomberg experience timeline implemented
- [ ] Portfolio ledger style implemented
- [ ] Blaze Sentry spotlight added
- [ ] Contact section simplified
- [ ] Accessibility/perf/responsive checks done
- [ ] Production build passes
