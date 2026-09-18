# ST10520342_Olerato-Kgonothi_POE_P1
ConnectEd Futures, is a website designed to break the digital divide within South Africans High-schools. This website is designed to help underprivileged high-school students by providing them with laptops, equipped with latest software and tools to help study and prepare for exams and tests. We also provide internet access to the students so that they don't fall behind with school work or assessments.
We provide internet access for students who don't own. This makes it possible for them to be caught up and on track.

# Change Log

All notable changes to **ConnectEd Futures** website (POE Part 2) are documented within this file.

## 2026-09-18

# Overview 
I've refactored the HTML structure and added an external CSS file, to make the layout
consistent across all five pages, removed invalid markups, and fixed visible
rendering bugs (footer overlap, stacked CTA buttons, nav links styled as
buttons, and stacked red separators).

## Added

-**'css/style.css' :
- `.header-inner` wrapper for a centred, fixed header.
  - `main` content wrapper with `max-width: 1140px` and top padding that
    clears the fixed header on every page.
  - `.cta-row` flex container so CTA buttons sit **side by side** on
    desktop and tablet instead of stacking vertically.
  - `a.btn` class for CTA links (Donate, Learn More, Get Involved,
    Join Our Programme, Sign Up for Training, Become a Mentee,
    Get Full Impact Report).
  - `.stat` class for impact number cards on `index.html` and
    `services.html`.
  - `.testimonial` and `.author` classes to replace the invalid
    `<footer>` tags previously used inside the body copy.
  - `hr.thin-line` class for subtle separators between sections.
  - `footer.site-footer` and `.site-footer-inner` for a proper page
    footer with a red top border, quick-access list, and copyright bar.
  - Responsive breakpoints at **995px**, **700px**, and **480px**.
  - `:focus-visible` outline and `prefers-reduced-motion` support for accessability.

  - **`CHANGELOG.md`** (this file) — tracks every change made to the project.

- **`README.md`** — rewritten to document the site structure, colour
  scheme, file layout, and how to run the project locally.
- `alt` text on every image on `about.html` and `services.html` for
  screen-reader and SEO support.
- `class="active"` on each page's own nav link for current-page highlighting.

### Changed
- **All five HTML pages** (`index.html`, `about.html`, `services.html`,

  `enquiry.html`, `contact.html`):
  - Header markup now uses the structure
    `<header><div class="header-inner">…</div></header>`.
  - All page content is wrapped inside a single `<main>` element
    between `</header>` and the footer.
  - All navigation lists (`<ul><li><a>` → `<nav><a>`) simplified to
    a single `<nav>` element with direct anchor children.
  - All CTA links now carry `class="btn"` and are grouped inside
    `<div class="cta-row">`.
  - Footer markup is now
    `<footer class="site-footer"><div class="site-footer-inner">…</div></footer>`.
    
- **`index.html`**:
  - Impact numbers now use `<p class="stat">` instead of bare `<p>`
    with `<br>` spacing.
  - Testimonials now use `<p class="testimonial">` and the attribution
    uses `<p class="author">` instead of `<footer>` inside body content.
  - Replaced the black `<hr size="2" width="100%" color="black">`
   with `<hr class="thin-line">`.
  - Fixed typo: "improving" → "improves" in "How we Empower Students".
  - Fixed typo: "its equipped" → "it's equipped".

- **`about.html`**:
  - Fixed typo: "success in academics and success" →
    "success in academics and beyond".
  - Fixed typo: "our-day-to-day operations" →
    "our day-to-day operations".
  - Corrected manager title "Sarah Van Der Merwe" (was inconsistent
    with the file name `Sarah Van De Merwe.png`).

- **`services.html`**:
  - Removed empty `<img src="">` placeholder.
  - Promoted `<p>Programme Highlights</p>` for Internet Access Program
    to `<h3>Programme Highlights</h3>` for consistent heading hierarchy.

- **`enquiry.html`**:
  - Fixed typo: "PLease select..." → "Please select...".
  - Converted the pre-filled textarea default into a proper
    `placeholder` attribute so the prompt is no longer submitted as message content

- **`contact.html`**:
  - Removed the duplicate contact form that appeared inside the footer.
  - Removed the second Quick Access list inside the footer and kept one.

  ### Removed

- **All inline `<style>` blocks** inside `<body>` on every page
  (the `hr { height: 10px; background-color: rgb(168, 49, 49); }`
  rule duplicated in five files). This rule now lives only in
  `css/style.css` as `hr.banner-line`.

- **Invalid `<>` opening tag** in `index.html` that was breaking
  document structure and causing the footer to overlap content.

- **Stray `</footer>` closing tags** inside body content
  (in `index.html` — the testimonial attribution was incorrectly
  using `<footer>` elements).

- **Duplicate footer blocks** in `contact.html`.

- **Yellow and sky-blue colour variants** from the initial proposed
  palette (kept the original dark-red `#b74b4b` accent used throughout
  the mark scheme and the original `rgb(168, 49, 49)` banner line).

  ### Fixed
- **Footer overlapping page content** — caused by invalid `<footer>`
  tags inside body content and the missing `<main>` wrapper. Fixed by
  placing a single `<footer class="site-footer">` at the document root
  after `</main>` with `clear: both; position: relative; z-index: 1;`.

- **CTA buttons stacked vertically on desktop** — caused by an
  over-broad `a[href="…"]` selector matching nav links and by a
  `@media (max-width: 700px)` rule applying `display: block` to all
  buttons. Fixed by scoping button styles to `a.btn` inside `.cta-row`
  and only allowing full-width stacking below **480px**.

- **Nav links rendered as ovals** — same cause as above; the button
  selector previously targeted `a[href="about.html"]` and
  `a[href="enquiry.html"]` globally. Now scoped to `a.btn`.

- **Thick red bars between impact stats** — inline `hr` styling was
  applying `height: 10px; background: rgb(168,49,49)` to decorative
  separators. Replaced by `hr.thin-line` (2px grey) and left
  `hr.banner-line` for the header/footer accents only.

- **Fixed header covering page headings** — every page's `<main>`
  now has `padding-top: 22rem` (adjusting to `24rem` on small screens) so the first heading appears below the header.
  

