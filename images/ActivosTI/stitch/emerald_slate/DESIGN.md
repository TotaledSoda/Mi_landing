# The Design System: Editorial Freshness & Tonal Depth

## 1. Overview & Creative North Star: "The Digital Atrium"
This design system rejects the "boxed-in" aesthetic of traditional SaaS. Our North Star is **The Digital Atrium**—an environment characterized by light, air, and organic flow. We achieve a premium, custom feel not through heavy borders or rigid grids, but through **Tonal Layering** and **Intentional Asymmetry**. 

By prioritizing "breathing room" (generous whitespace) and a sophisticated hierarchy of light-wash surfaces, we create an interface that feels curated rather than manufactured. We move away from the "template" look by overlapping elements and using high-contrast typography scales that command attention.

---

## 2. Colors & Surface Philosophy
The palette is rooted in an expansive range of whites and soft emeralds, designed to feel "fresh-pressed" and clinical yet inviting.

### Surface Hierarchy & The "No-Line" Rule
**Rule:** 1px solid borders are strictly prohibited for sectioning. 
Boundaries must be defined by shifts in background color. We use a "Nested Depth" approach:
*   **Base:** `surface` (#f7f9fb) for the main application background.
*   **Sectioning:** `surface_container_low` (#f2f4f6) for sidebar or secondary navigation areas.
*   **Nesting:** `surface_container_lowest` (#ffffff) for primary content cards or "active" workspace areas.

### Signature Textures: Glass & Gradients
To avoid a flat, "out-of-the-box" appearance:
*   **CTAs:** Use a subtle linear gradient from `primary` (#006c49) to `primary_container` (#10b981) at a 135-degree angle. This adds "soul" and a sense of light hitting the surface.
*   **Floating Navigation:** Utilize **Glassmorphism**. Set backgrounds to `surface_container_lowest` at 80% opacity with a `backdrop-blur` of 12px. This integrates the UI into the background rather than letting it sit "on top."

---

## 3. Typography: Editorial Authority
We utilize **Plus Jakarta Sans** for its geometric clarity and modern "ink traps" that feel premium at both display and micro-label sizes.

*   **Display (lg/md/sm):** Used for "Hero" moments or high-level dashboard summaries. Tracking should be set to `-0.02em` to feel tighter and more bespoke.
*   **Headline & Title:** Use `on_surface` (#191c1e) for maximum contrast. High-contrast sizing between Headlines and Body text is the key to our editorial look.
*   **Body (lg/md/sm):** Use `on_surface_variant` (#3c4a42) for long-form text to reduce eye strain.
*   **Labels:** Always uppercase with `+0.05em` letter spacing to act as "metadata" markers.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are a fallback, not a standard. We convey hierarchy through physical stacking.

*   **The Layering Principle:** Place a `surface_container_lowest` (#ffffff) card on top of a `surface_container` (#eceef0) background. The natural contrast creates a "soft lift" without a single line of CSS shadow.
*   **Ambient Shadows:** When an element must float (e.g., a Modal or Popover), use an extra-diffused shadow: `0 20px 40px rgba(25, 28, 30, 0.06)`. The tint is derived from the `on_surface` color, mimicking natural ambient light.
*   **The "Ghost Border":** If accessibility requires a container boundary, use the `outline_variant` token at **15% opacity**. Never use a 100% opaque border.

---

## 5. Components: Soft & Intentional

### Buttons & Chips
*   **Primary Button:** Gradient fill (`primary` to `primary_container`). Corner radius: `md` (0.75rem). Use `on_primary` (#ffffff) for text.
*   **Secondary/Ghost:** No fill, no border. Use `primary` text. Upon hover, transition to a `surface_container_high` background.
*   **Status Chips:** Utilize "High-Pop" accents. For example, an "Available" chip uses `secondary_container` background with `on_secondary_container` text. Keep them pill-shaped (`full` roundness).

### Inputs & Interaction
*   **Input Fields:** Use `surface_container_lowest` with a subtle `outline_variant` "Ghost Border." Upon focus, the border disappears and is replaced by a 2px `primary` bottom-glow.
*   **Cards:** No dividers. Separate content using the Spacing Scale (e.g., 24px internal padding). Use `surface_container_highest` for a subtle hover state transition.

### Navigation Overlays
*   **The Glass Drawer:** Side panels should use the Glassmorphism rule. The background behind the drawer should use a `surface_dim` (#d8dadc) overlay at 40% opacity to maintain the "atrium" light quality.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use asymmetrical layouts. Push a headline to the far left and the body text to a narrower column on the right to create an editorial feel.
*   **Do** use the `primary_fixed_dim` color for subtle icons that shouldn't distract from the main CTA.
*   **Do** prioritize vertical white space over horizontal lines. If you think you need a divider, add 16px of padding instead.

### Don’t:
*   **Don’t** use pure black (#000000) for text. Always use `on_surface` to keep the palette organic.
*   **Don’t** use "Drop Shadows" on cards that are already resting on a contrasting surface container.
*   **Don’t** use the `error` color (#ba1a1a) for anything other than critical destructive actions or system failures. Use `tertiary` for softer "Maintenance" or "Warning" states.