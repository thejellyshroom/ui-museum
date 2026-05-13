---
version: "alpha"
name: "UI Museum"
description: "UI Museum is a virtual museum for studying emergent interface behaviors. The shell presents categorized UI specimens, archive-style writing, and curated navigation. Visual atmosphere is optional and must never gate access to exhibits or catalog content."
colors:
  primary: "#A29E85"
  secondary: "#F4F4F4"
  tertiary: "#96AD85"
  neutral: "#F4F4F4"
  background: "#A29E85"
  surface: "#2D2D2D"
  text-primary: "#F4F4F4"
  text-secondary: "#A29E85"
  border: "#2D2D2D"
  accent: "#A29E85"
typography:
  display-lg:
    fontFamily: "Playfair Display"
    fontSize: "149.16px"
    fontWeight: 400
    lineHeight: "119.328px"
    letterSpacing: "-0.05em"
  body-md:
    fontFamily: "Manrope"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: "16px"
    letterSpacing: "0.226em"
    textTransform: "uppercase"
spacing:
  base: "4.79px"
  sm: "4.79px"
  md: "13.56px"
  lg: "19.14px"
  xl: "20.34px"
  gap: "6.78px"
  card-padding: "40.68px"
  section-padding: "40.68px"
---

## Overview

- **Museum framing:** Present preservation and study of interface behaviors, not a showcase of “bad UI.” Catalog copy, specimen labels, and navigation should read like an archive or institution site (reference tone: [UNESCO Museum](https://museum.unesco.org)).
- **Composition cues:**
  - Layout: Flex
  - Content Width: Full Bleed
  - Framing: Framed
  - Grid: Minimal
- **Content hierarchy:** Exhibit and category pages carry meaning; ambient graphics sit behind them and must remain decorative.

## Colors

The color system uses light mode with #A29E85 as the main accent and #F4F4F4 as the neutral foundation.

- **Primary (#A29E85):** Main accent and emphasis color.
- **Secondary (#F4F4F4):** Supporting accent for secondary emphasis.
- **Tertiary (#96AD85):** Reserved accent for supporting contrast moments.
- **Neutral (#F4F4F4):** Neutral foundation for backgrounds, surfaces, and supporting chrome.

- **Usage:** Background: #A29E85; Surface: #2D2D2D; Text Primary: #F4F4F4; Text Secondary: #A29E85; Border: #2D2D2D; Accent: #A29E85

- **Gradients:** bg-gradient-to-l from-transparent to-base/80 via-base/20, bg-gradient-to-r from-surface/0 to-surface/0 via-surface/40

## Typography

Typography pairs Playfair Display for display hierarchy with Manrope for supporting content and interface copy.

- **Display (`display-lg`):** Playfair Display, 149.16px, weight 400, line-height 119.328px, letter-spacing -0.05em.
- **Body (`body-md`):** Manrope, 12px, weight 500, line-height 16px, letter-spacing 0.226em, uppercase.

## Layout

Layout follows a flex composition with reusable spacing tokens. Preserve the flex, full bleed structural frame before changing ornament or component styling. Use 4.79px as the base rhythm and let larger gaps step up from that cadence instead of introducing unrelated spacing values.

Treat the page as a flex / full bleed composition, and keep that framing stable when adding or remixing sections.

- **Layout type:** Flex
- **Content width:** Full Bleed
- **Base unit:** 4.79px
- **Scale:** 4.79px, 13.56px, 19.14px, 20.34px, 40.68px, 47.85px, 67.8px, 160px
- **Section padding:** 40.68px
- **Card padding:** 40.68px
- **Gaps:** 6.78px, 9.57px, 13.56px, 20.34px

## Elevation & Depth

Depth is communicated through outlined, border contrast, and reusable shadow or blur treatments. Keep those recipes consistent across hero panels, cards, and controls so the page reads as one material system.

Surfaces should read as outlined first, with borders, shadows, and blur only reinforcing that material choice.

- **Surface style:** Outlined
- **Borders:** 1px #2D2D2D

### Techniques
- **Gradient border shell:** Use a thin gradient border shell around the main card. Wrap the surface in an outer shell with 0px padding and a 0px radius. Drive the shell with linear-gradient(to right, rgba(26, 26, 26, 0), rgba(26, 26, 26, 0.4), rgba(26, 26, 26, 0)) so the edge reads like premium depth instead of a flat stroke. Keep the actual stroke understated so the gradient shell remains the hero edge treatment. Inset the real content surface inside the wrapper with a slightly smaller radius so the gradient only appears as a hairline frame.

## Shapes

Shapes rely on a tight radius system anchored by 9999px and scaled across cards, buttons, and supporting surfaces. Icon geometry should stay compatible with that soft-to-controlled silhouette.

Use the radius family intentionally: larger surfaces can open up, but controls and badges should stay within the same rounded DNA instead of inventing sharper or pill-only exceptions.

- **Corner radii:** 9999px
- **Icon treatment:** Linear
- **Icon sets:** Solar

## Components

Component styling should inherit the shared button, icon, spacing, and surface rules instead of inventing one-off treatments. Favor a small family of repeatable patterns for actions, content containers, and fields.

### Iconography
- **Treatment:** Linear.
- **Sets:** Solar.

## Do's and Don'ts

Use these constraints to keep future generations aligned with the current system instead of drifting into adjacent styles.

### Do
- Do use the primary palette as the main accent for emphasis and action states.
- Do keep spacing aligned to the detected 4.79px rhythm.
- Do reuse the Outlined surface treatment consistently across cards and controls.
- Do keep corner radii within the detected 9999px family.

### Don't
- Don't introduce extra accent colors outside the core palette roles unless the page needs a new semantic state.
- Don't exceed the detected moderate motion intensity without a deliberate reason.
- Don't require WebGL, Three.js, or hardware-accelerated graphics for navigation, specimen viewing, or reading museum copy.
- Don't block interaction on the ambient canvas layer; keep it non-interactive and out of the tab order.

## Motion

Motion feels controlled and interface-led across text, layout, and section transitions. Timing clusters around 500ms and 300ms. Easing favors ease and cubic-bezier(0.4. Hover behavior focuses on color and text changes.

**Motion Level:** moderate

**Durations:** 500ms, 300ms, 1000ms, 700ms

**Easings:** ease, cubic-bezier(0.4, 0, 0.2, 1)

**Hover Patterns:** color, text

## WebGL

Reconstruct the graphics as a full-bleed **decorative** background field using WebGL (via Three.js when available): renderer with alpha, antialias, and a clamped device pixel ratio. The effect should read as retro-futurist, technical, and meditative: dot-matrix particle field with green on black and sparse spacing. Build it from dot particles + soft depth fade so the effect reads clearly. Animate it as slow breathing pulse. Interaction can react to the pointer, but only as a subtle drift.

**Policy:** WebGL is an enhancement layer only. Exhibits, categories, and specimen interactions must work with WebGL disabled, failed, or blocked (including Windows setups where hardware acceleration is off or unreliable).

**Id:** webgl

**Label:** WebGL

**Stack:** ThreeJS, WebGL

**Insights:**
  - **Scene:**
    - **Value:** Full-bleed background field
  - **Effect:**
    - **Value:** Dot-matrix particle field
  - **Primitives:**
    - **Value:** Dot particles + soft depth fade
  - **Motion:**
    - **Value:** Slow breathing pulse
  - **Interaction:**
    - **Value:** Pointer-reactive drift (non-essential; disable when reduced motion is requested)
  - **Render:**
    - **Value:** WebGL, Renderer, alpha, antialias, DPR clamp

**Techniques:** Dot matrix, Breathing pulse, Pointer parallax, Progressive enhancement, DOM fallback

### Accessibility and fallbacks

Treat the atmosphere as optional. Ship a default experience that does not depend on a GPU context.

**Fallback ladder (use the first tier that succeeds):**
1. **DOM/CSS atmosphere (default baseline):** CSS gradients, `background-image`, or a lightweight SVG dot grid with optional CSS animation. Same palette and density as the WebGL field; no canvas required.
2. **Static poster frame:** A pre-rendered still (or first-frame capture) shown when animation is reduced or when runtime init is skipped.
3. **WebGL / Three.js (enhancement):** Load only after capability checks pass; lazy-init after first paint or when the background enters the viewport.
4. **Solid surface:** Museum background and surface tokens only—no motion, no canvas.

**When to skip WebGL (non-exhaustive):** `prefers-reduced-motion: reduce`; `prefers-reduced-data` / Save-Data; user toggles “Reduce motion” or “Simple backgrounds” in museum settings; WebGL context creation fails; software renderer or blocklisted GPU detected; tab hidden or `document.visibilityState !== 'visible'`.

**Windows / hardware acceleration:** Do not instruct visitors to change browser or OS settings to use the museum. If acceleration is unavailable, stay on the CSS or poster tier and log telemetry only if needed for QA—never surface a blocking error for decorative graphics.

**DOM and assistive tech:** Keep the canvas `pointer-events-none`, `aria-hidden="true"`, and out of focus order. Do not put exhibit labels, controls, or specimen copy inside the WebGL layer. Respect `forced-colors` / high-contrast modes by falling back to tokenized surfaces without blend-mode tricks that disappear in forced colors.

**Motion:** Cap DPR on large displays; respect reduced motion with a static or minimally animated CSS/SVG tier before attempting WebGL pulse or pointer drift.

**Code Evidence:**
  - **HTML reference:**
    - **Language:** html
    - **Snippet:**
      ```html
      <!-- WebGL Background Container -->
      <canvas id="webgl-canvas" class="absolute inset-0 w-full h-full z-0 opacity-40 pointer-events-none mix-blend-screen"></canvas>

      <!-- SVG Mask Definition -->
      ```
  - **JS reference:**
    - **Language:** html
    - **Snippet:**
      ```html
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
      ```

## ThreeJS

Three.js is the **optional implementation** of the WebGL atmosphere above—not a separate product surface. Use it only on the enhancement tier after the accessibility and fallback rules in **WebGL** are satisfied.

Reconstruct the Three.js layer as a full-bleed background field with layered spatial depth that feels retro-futurist, volumetric, and technical. Use alpha, antialias, and DPR-clamped renderer settings, perspective camera (~75° FOV), custom buffer geometry, `PointsMaterial`, and ambient + key + rim lighting. Motion should read as slow orbital drift, aligned with the breathing pulse described for WebGL.

**Id:** threejs

**Label:** ThreeJS

**Stack:** ThreeJS, WebGL

**Insights:**
  - **Scene:**
    - **Value:** Full-bleed background field with layered spatial depth
  - **Render:**
    - **Value:** alpha, antialias, DPR clamp
  - **Camera:**
    - **Value:** Perspective, ~75deg FOV
  - **Lighting:**
    - **Value:** ambient + key + rim
  - **Materials:**
    - **Value:** PointsMaterial
  - **Geometry:**
    - **Value:** custom buffer geometry
  - **Motion:**
    - **Value:** Slow orbital drift (disable pointer reactivity and pulse when reduced motion is requested)
  - **Lifecycle:**
    - **Value:** Lazy init, dispose on route change or tier downgrade, no retry loops on context loss

**Techniques:** Particle depth, Timeline beats, alpha, antialias, DPR clamp, Poster frame + DOM fallback, Progressive enhancement

**Implementation note:** Prefer a single module that selects CSS/SVG, poster, or Three.js at runtime. Bundle or dynamically import Three.js only for the enhancement path so catalog pages stay usable when WebGL is off.

**Code Evidence:**
  - **HTML reference:**
    - **Language:** html
    - **Snippet:**
      ```html
      <!-- WebGL Background Container -->
      <canvas id="webgl-canvas" class="absolute inset-0 w-full h-full z-0 opacity-40 pointer-events-none mix-blend-screen"></canvas>

      <!-- SVG Mask Definition -->
      ```
  - **JS reference:**
    - **Language:** html
    - **Snippet:**
      ```html
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
      ```
