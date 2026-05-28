# Oceanography Website Demo

**A modern reimplementation of UW's LiveOcean** — turning a static HTML oceanography site into a production-grade, interactive data visualization platform.

**Stack:** Next.js 16 · TypeScript · Leaflet.js · D3.js · Pixi.js · MapLibre · MDX · Tailwind CSS · Radix UI

---

## Project Overview

This project reimplements the [LiveOcean](https://faculty.washington.edu/pmacc/LO/LiveOcean.html) website from the University of Washington — a computer model that simulates ocean water properties and generates 3-day forecasts of currents, temperature, salinity, and biogeochemical fields. The original was a static HTML site; this is a fully dynamic, server-side-rendered Next.js application with interactive cartographic visualizations and a structured scientific knowledge base.

**Live demo:** https://dreamy-dragon-8b4e86.netlify.app/interactive/drifters/pugetsound  
**Repository:** https://github.com/xanderfehsenfeld/oceanography-website-demo

---

## By the Numbers

| Metric | Value |
|---|---|
| Total commits | 163 |
| Merged pull requests | 39 |
| TypeScript share | 55% |
| Rendering engines | 3 (Leaflet, D3, Pixi.js / WebGL) |
| Deployment | Netlify (SSR) |

---

## Developer Journey

### 1. Foundation — scaffolding for scientific content

Bootstrapped from a Next.js documentation template, then immediately restructured around an MDX content pipeline and server-side rendering. Established TypeScript strict mode, content-generation scripts, and a multi-level navigation system from the outset.

### 2. Geographic visualization — bringing the ocean to the browser

Integrated Leaflet + MapLibre + react-leaflet to render the Puget Sound, Salish Sea, and Pacific coast. D3.js was layered on top for custom data-driven overlays and cartographic annotation.

A key detail here: the map tile layer uses **custom OpenStreetMap vector tiles** generated and self-hosted in a companion repository ([openmap-tiles-demo](https://xanderfehsenfeld.github.io/openmap-tiles-demo)), served as static files via GitHub Pages — no dependency on any third-party tile service. The MapLibre plugin consumes these tiles directly, giving full control over styling and availability.

### 3. High-performance particle rendering — WebGL drifters on a live map

Added Pixi.js (via `leaflet-pixi-overlay`) to animate thousands of simulated ocean surface drifters in real time. This creates a WebGL rendering pipeline layered directly onto the Leaflet canvas, enabling GPU-accelerated particle motion that would be impossible at scale with SVG or Canvas 2D.

**Performance challenge:** Initial implementation caused frame-rate drops and UI jank because particle path geometry — computed for every visible drifter — was being rendered synchronously, blocking the main JavaScript thread during heavy update cycles.

**Solution:** Particle paths (the trail lines showing where each drifter has been) were refactored to render **lazily** — only computed and drawn on demand rather than on every frame tick. This decoupled expensive path geometry work from the animation loop, keeping the UI thread free and maintaining smooth playback even with large drifter datasets. The current open PR furthers this by extracting all playback state into a dedicated custom React hook, cleanly separating animation logic from rendering.

### 4. Developer experience — production discipline on a solo project

Introduced Husky git hooks, ESLint with TypeScript-aware rules, Prettier with import sorting, and a `clean` script that enforces formatting on every commit. The package manager is `pnpm` with a locked lockfile and a Node 22 engine constraint. 39 merged pull requests on a solo project signals deliberate, feature-branch–driven development rather than direct-to-main commits.

### 5. Polished content platform — more than just maps

Shipped a full content layer: dark/light mode with auto-detection, fuzzy search with term highlighting, auto-generated table of contents, LaTeX math rendering via KaTeX, Mermaid.js diagrams, syntax-highlighted code blocks, and Radix UI component primitives. The result is a scientific knowledge base that can embed live interactive visualizations directly in documentation pages via MDX.

---

## Technical Highlights

- **Three rendering engines, zero conflicts.** Leaflet manages tile maps and user interaction; D3 handles data-driven SVG overlays; Pixi.js runs a WebGL particle layer — all coordinated in a single React component tree without mutual interference.

- **Self-hosted vector tiles.** Custom OpenStreetMap tiles generated offline and served as static files, eliminating any dependency on external tile APIs and demonstrating end-to-end understanding of the map tile pipeline.

- **Lazy rendering for UI thread health.** Particle path geometry is computed on demand rather than synchronously, a deliberate architectural choice that keeps animation smooth at scale.

- **Full TypeScript coverage.** Type definitions span custom geographic data structures, Leaflet extension types, D3 selections, and Pixi.js display objects — not surface-level typing.

- **Interactive drifter simulation.** Users can click individual particles to trace their full forecast path, or click the map to select and highlight groups by proximity — turning a scientific forecast model into an exploratory spatial tool.

- **MDX-powered scientific documentation.** Oceanographic content pages can embed React components — live maps, diagrams, and math expressions — directly alongside prose, with SSR ensuring fast initial load and SEO-ready metadata.
