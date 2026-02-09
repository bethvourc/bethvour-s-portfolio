# Phase 0 Baseline Snapshot

Date: 2026-02-09
Branch: `redesign-phase-0-baseline`
Scope: pre-redesign baseline capture before Phase 1 implementation.

## 1) Working Branch
- Created dedicated branch: `redesign-phase-0-baseline`
- Previous branch: `main`

## 2) Current App Structure Snapshot
Current component flow in `src/App.jsx`:
1. `Header`
2. `Nav`
3. `About`
4. `Experience`
5. `Portfolio`
6. `Testimonials`
7. `Contact`
8. `Footer`

Observed section anchor IDs currently in use:
- `#about`
- `#experience`
- `#portfolio`
- `#testimonials`
- `#contact`

## 3) Animation and Motion Inventory
### Dependency-level
- `swiper` in `package.json` and `src/components/testimonials/Testimonials.jsx`
- CSS animation/transitions across global and section styles

### Component-level behavior
- `src/components/header/Header.jsx`
  - custom typing effect hook (`useTypingEffect`)
  - rotating typed skill strings
- `src/components/testimonials/Testimonials.jsx`
  - `Swiper` slider + pagination
  - `IntersectionObserver` for temporary "Swipe to view others" message
- `src/components/nav/Nav.jsx`
  - scroll listener updates active nav state by visible section

### CSS-level behavior
- global smooth scroll in `src/index.css`
- repeated `fade-in` + delay classes across:
  - `src/components/header/header.css`
  - `src/components/about/about.css`
  - `src/components/experience/experience.css`
  - `src/components/testimonials/testimonials.css`
  - `src/components/contact/contact.css`
  - `src/components/footer/footer.css`
- multiple hover/transition effects in nav, portfolio, footer, and contact styles

## 4) Build Baseline Check
Command executed:
```bash
npm run build
```

Result:
- status: success
- output: optimized production build compiled successfully

Notable warnings:
- Node deprecation warning: `fs.F_OK` deprecation notice
- Browserslist warning: `caniuse-lite` outdated

## 5) Rollback Safety Protocol (Locked for Subsequent Phases)
1. Keep each phase in isolated commits with explicit phase labels.
2. Group edits by domain:
- structure (`src/App.jsx`, section wiring)
- visual system (`src/index.css`)
- per-section component refactors (`src/components/**`)
3. Run `npm run build` at the end of each completed phase.
4. Do not delete legacy components until replacement wiring is verified.
5. Maintain this baseline document as a pre-change reference.

