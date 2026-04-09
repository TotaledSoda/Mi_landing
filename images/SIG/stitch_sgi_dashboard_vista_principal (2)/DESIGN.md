# Design System Strategy: The Luminescent Executive

## 1. Overview & Creative North Star: "The Digital Curator"
This design system rejects the "SaaS-in-a-box" aesthetic in favor of a **Digital Curator** philosophy. Rather than treating a dashboard as a rigid grid of data containers, we treat the UI as a curated gallery. The "Creative North Star" is **Luminescent Depth**—a feeling that the interface is not just pixels on a screen, but a series of precision-cut glass layers illuminated from within.

We break the "template" look by utilizing intentional asymmetry in sidebar layouts, extreme generous negative space (using our 16 and 20 spacing tokens), and a typographic scale that leans into "Display" sizes for key metrics to create an editorial, high-end feel.

---

## 2. Colors & Surface Philosophy
The palette is built on a foundation of `#060e20`, moving away from pure blacks into a deep, "Midnight Ink" spectrum.

### The "No-Line" Rule
**Explicit Instruction:** 1px solid borders are strictly prohibited for defining sections. 
Boundaries must be defined solely through:
- **Background Shifts:** Placing a `surface_container_low` card on a `surface` background.
- **Tonal Transitions:** Using the `outline_variant` at 10-15% opacity only when absolutely necessary for accessibility.
- **Spatial Separation:** Using the 8 (2.75rem) and 10 (3.5rem) spacing tokens to let content breathe.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of semi-translucent materials.
- **Base Layer:** `surface` (#060e20)
- **Primary Layout Blocks:** `surface_container` (#0f1930)
- **Elevated Interactive Elements:** `surface_container_high` (#141f38)
- **Deep Inset Elements (e.g., Search Bars):** `surface_container_low` (#091328)

### The "Glass & Gradient" Rule
To achieve a premium "soul," use the following signature textures:
- **Primary CTA:** A linear gradient from `primary` (#a3a6ff) to `secondary` (#c180ff) at a 135-degree angle.
- **Floating Modals:** Use `surface_container_highest` with a `backdrop-filter: blur(20px)` and 80% opacity to allow the deep background hues to bleed through the edges.

---

## 3. Typography: Editorial Authority
We utilize **Outfit** (aliased as Plus Jakarta Sans for weight parity) and **Manrope** to create a sophisticated hierarchy.

*   **Display & Headlines (Plus Jakarta Sans/Outfit):** Use `display-lg` and `headline-lg` for high-level data storytelling. The wide letterforms of Outfit provide an expensive, tech-forward feel.
*   **Body & Labels (Manrope):** Manrope is used for data density. Its geometric nature maintains legibility even at the `label-sm` (0.6875rem) level.
*   **The Power of Weight:** Use `Medium` (500) for body text and `Bold` (700) for headlines. Avoid `Regular` (400) on dark backgrounds to prevent "ink bleed" and maintain AA accessibility.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are replaced by **Ambient Luminance**.

*   **The Layering Principle:** Instead of a shadow, place a `surface_container_lowest` card inside a `surface_container_high` section to create "Inner Depth." 
*   **Ambient Shadows:** When an element must float (e.g., a dropdown), use a shadow with a 40px blur, 0% spread, and a color derived from `surface_tint` at 8% opacity. This creates a glow rather than a dark "hole."
*   **The Ghost Border:** For high-density tables, use `outline_variant` (#40485d) at **15% opacity**. If you can clearly see the border, it is too heavy. It should be felt, not seen.

---

## 5. Components: Principles of Minimalist Premium

### Sidebar & Navigation
*   **Structure:** No vertical divider. Use a `surface_container_low` background for the entire sidebar against the `surface` main content area.
*   **Active State:** Avoid "pill" backgrounds. Use a vertical "light bar" (2px wide) of `primary` on the far left and transition the icon color to `primary_fixed`.

### Cards & Metrics
*   **The Metric Hero:** A metric card should feature a `display-md` value. 
*   **No Dividers:** Separate the header from the data using a `2.5` (0.85rem) spacing gap.
*   **Roundedness:** Use the `xl` (1.5rem) token for all cards. Large radii signal a modern, custom-built feel.

### Stylized Tables
*   **Layout:** Remove all vertical lines. Use `surface_container_low` for the header row with a `DEFAULT` (0.5rem) corner radius.
*   **Row Hover:** On hover, shift the background to `surface_bright` and apply a `xl` corner radius to the entire row instantly.

### Status Badges
*   **Success/Danger/Warning:** Do not use heavy solid backgrounds. Use a "Soft Glow" approach: `error_container` background at 20% opacity with `error` colored text.

### Input Fields
*   **Style:** Use `surface_container_highest`. On focus, do not just change the border; apply a 2px outer glow using the `primary` color at 20% opacity.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use `20` (7rem) padding for top-level page margins to create an elite, spacious feel.
*   **Do** use gradients for "Success" or "Primary" states to give them a tactile, vibrating quality.
*   **Do** treat icons as secondary to typography. Icons should be `outline` style, 20px, with `on_surface_variant` color.

### Don’t:
*   **Don’t** use `#000000` for shadows. Use a tinted version of the background.
*   **Don’t** use 100% white text. Use `on_surface` (#dee5ff) to reduce eye strain and maintain the premium dark-blue tint.
*   **Don’t** use dividers (`<hr>`). If you need to separate content, use a background color shift or a `1.5` (0.5rem) vertical space.

---

## 7. Signature Component: The "Lume-Metric"
For the most important dashboard KPIs, use the **Lume-Metric** component:
- A `surface_container_high` card.
- A subtle `secondary` to `primary` gradient "glow" emanating from the top-left corner (10% opacity radial gradient).
- `display-sm` typography for the value.
- A micro-sparkline using the `secondary_fixed` color with a 2px stroke width.