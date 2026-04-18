# Design System Specification: Architectural Integrity

## 1. Overview & Creative North Star
### Creative North Star: "The Structural Monolith"
This design system moves away from the "contractor template" aesthetic, opting instead for a high-end editorial experience that mirrors the precision of modern engineering. We are not just selling "roofing"; we are selling architectural protection and structural permanence. 

The visual language is defined by **Intentional Asymmetry** and **Tonal Depth**. By utilizing massive, high-contrast typography scales against a backdrop of layered, monochromatic surfaces, we create a sense of "Industrial Elegance." We eschew the cluttered look of typical corporate sites in favor of expansive white space (breathing room) and overlapping elements that mimic the literal layering of weatherproofing materials.

---

## 2. Colors
Our palette is rooted in the "Industrial Nocturnal" spectrum—deep, authoritative blues and charcoals that evoke steel and sky.

### The Palette
- **Primary Foundation:** `primary` (#000d21) and `primary_container` (#002347). These are the "Midnight Steel" tones that establish institutional trust.
- **The High-Vis Accent:** `tertiary_container` (#401600) and `on_tertiary_container` (#e66100). This safety-orange derivative is used sparingly to guide the eye to critical actions (CTAs), mimicking industrial safety markings.
- **Neutral Sophistication:** `secondary` (#51606b) and `surface_variant` (#e2e2e5). These bridge the gap between the dark primary tones and the light background.

### The "No-Line" Rule
**Explicit Instruction:** Traditional 1px solid borders are strictly prohibited for sectioning. Boundaries must be defined solely through background color shifts. For example, a `surface_container_low` section should sit directly against a `surface` background. The transition of the tonal block is the divider.

### Surface Hierarchy & Nesting
Treat the UI as a physical assembly. 
- Use `surface` (#f9f9fb) for the base "ground."
- Use `surface_container_low` (#f3f3f6) for secondary content blocks.
- Use `surface_container_lowest` (#ffffff) for high-importance "floating" interactive cards.
- **Signature Texture:** Apply a subtle linear gradient from `primary` to `primary_container` on hero sections to provide a "metallic" depth that flat hex codes cannot achieve.

---

## 3. Typography
We use a dual-sans-serif approach to balance authority with modern utility.

### Typography Scale
- **Display (Manrope):** Used for "Statement" headlines. `display-lg` (3.5rem) should be used with tight letter-spacing (-0.02em) to feel like an architectural blueprint title.
- **Headline (Manrope):** `headline-lg` (2rem) and `headline-md` (1.75rem). Bold and unapologetic.
- **Title (Inter):** `title-lg` (1.375rem). Inter provides a technical, clean readability that balances the character of Manrope.
- **Body (Inter):** `body-lg` (1rem) for general copy. Ensure a line height of 1.6 for maximum legibility against dark backgrounds.

**Identity Logic:** Manrope’s geometric qualities feel engineered and modern, while Inter’s neutrality ensures that technical specifications (materials, warranties) are delivered with clarity and zero friction.

---

## 4. Elevation & Depth
In this system, depth is "baked in" to the surface rather than "stuck on" with shadows.

### The Layering Principle
Achieve hierarchy by "stacking" tonal tiers. A card using `surface_container_lowest` (#ffffff) placed on a `surface_container_low` (#f3f3f6) background creates a natural lift. This mimics the way shingles or panels overlap.

### Ambient Shadows & Glassmorphism
- **Ambient Shadows:** For floating elements (like a navigation bar or primary lead form), use a shadow with a blur radius of 40px, set at 4% opacity using a tint of `on_surface`. It should feel like a soft glow, not a dark smudge.
- **Glassmorphism:** Use `surface_container_lowest` at 80% opacity with a `backdrop-filter: blur(12px)` for sticky headers. This allows the high-quality imagery of roofing projects to "bleed through" as the user scrolls, creating a premium, integrated feel.
- **The "Ghost Border" Fallback:** If a container requires a border for accessibility, use `outline_variant` at **15% opacity**. High-contrast borders are forbidden as they "shatter" the architectural flow.

---

## 5. Components

### Buttons
- **Primary:** Background: `primary`; Label: `on_primary`. Shape: `md` (0.375rem). For a premium touch, add a subtle 10% safety orange (`tertiary_fixed`) inner-glow on hover.
- **Secondary:** Background: `surface_container_high`; Label: `on_surface`. No border.
- **Tertiary (Ghost):** No background. Label: `primary`. 

### Cards & Lists
- **Forbid Dividers:** Do not use `<hr>` tags or border-bottoms. Use vertical spacing (32px or 48px) from our spacing scale to separate list items.
- **The "Material Card":** Use `surface_container_lowest` with a `xl` (0.75rem) corner radius. Place these over `surface_container` backgrounds to create "islands" of information.

### Input Fields
- **Industrial Inputs:** Use `surface_container_high` as the fill. On focus, transition the background to `surface_container_lowest` and add a 2px "safety orange" (`on_tertiary_container`) underline rather than a full box stroke.

### Specialized Component: "The Blueprint Overlay"
A specialized image gallery component where high-quality project photography is partially overlaid by a semi-transparent `primary_container` pane containing technical specs (Material, Pitch, Weather Rating).

---

## 6. Do's and Don'ts

### Do:
- **Do** use intentional asymmetry. Place a headline on the left and the body copy offset to the right to create a "grid-breaking" editorial look.
- **Do** use high-quality, high-contrast architectural photography (lots of blues, greys, and sunlight).
- **Do** treat "White Space" as a design element. If a section feels crowded, double the padding.

### Don't:
- **Don't** use 100% black. Always use `primary` (#000d21) or `on_background` (#1a1c1e) for text to maintain a high-end tonal range.
- **Don't** use standard "Drop Shadows." If you can't achieve depth through color layering, your layout is likely too flat.
- **Don't** use "Safety Orange" for everything. It is a tool for urgency and action (CTAs, Error states, Icons). Overusing it destroys its psychological impact.

---

**Director’s Final Note:** This design system is about the "Strength of Silence." Let the typography be large, the images be crisp, and the colors be deep. We are building a digital structure as reliable as the roofs the company installs.