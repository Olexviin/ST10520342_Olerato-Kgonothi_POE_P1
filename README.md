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

  PART 3 POE WED: Added Java Script Features;

# ConnectEd Futures — Website (POE Part 3)

> **Breaking the digital divide, one student at a time in South African education.**

A dynamic, interactive, five-page website for **ConnectEd Futures**, a non-profit organisation that provides refurbished laptops, internet access, digital skills training, and mentorship to underprivileged high-school students across South Africa.

This project is the **POE Part 3** submission. It builds upon the HTML and CSS from previous parts by introducing **JavaScript** to improve user experience, add interactivity, and make the site fully responsive.


## Project Overview

**Purpose:**
Provide a public-facing site for ConnectEd Futures where visitors can
learn about the organisation, view its programmes, and submit an enquiry
to become a sponsor, volunteer, mentor, or laptop donor.

**New in Part 3 (JavaScript):**
The site is no longer static. It now features dynamic counters, a dark/light mode toggle, smart form validation, an interactive FAQ, a mobile slide-out menu, and a custom image light box gallery.


## JavaScript Feature Set (Part 3)

### Home Page (`index.html`)
1. **Interactive Testimonial Slider:**
   - **How it works:** The two student testimonials are stored in a JavaScript array. "Next" and "Previous" buttons allow the user to cycle through the quotes without reloading the page.
   - **Skills shown:** DOM manipulation (`innerText`), Arrays, Event Listeners (`click`).
2. **Typewriter Effect for Hero Subtitle:**
   - **How it works:** The text *"Breaking the digital divide..."* types itself out letter-by-letter on page load using `setTimeout` and string manipulation.
   - **Skills shown:** String manipulation, Asynchronous timing.
3. **Scroll-to-Top Button:**
   - **How it works:** A floating button appears in the bottom corner only after the user scrolls down 300px. Clicking it smoothly scrolls the user back to the top.
   - **Skills shown:** Window events (`scroll`), DOM visibility toggling, `window.scrollTo()`.

### About Page (`about.html`)
1. **"Read More" Team Bios:**
   - **How it works:** The team member bios are kept short. Clicking a "Read Full Bio" button expands the text smoothly using CSS class toggling.
   - **Skills shown:** DOM manipulation (`classList.toggle`), Event handling.
2. **Image Lightbox Gallery:**
   - **How it works:** Clicking on a team member's photo opens a larger version of that image in a modal overlay, dimming the background. A close button or clicking outside the image closes the modal.
   - **Skills shown:** Dynamic element creation, DOM styling, Event Delegation.

### Services Page (`services.html`)
1. **Interactive FAQ Accordion:**
   - **How it works:** A new FAQ section (e.g., *"How do I apply for a laptop?"*). Clicking a question reveals the answer using a smooth CSS height transition, while closing any previously opened answers.
   - **Skills shown:** DOM traversal (`nextElementSibling`), `classList` manipulation.
2. **Laptop Eligibility Calculator:**
   - **How it works:** A small form asking: *"What grade are you in?"* and *"Do you have a laptop at home?"* Based on the answers, JavaScript calculates if the student qualifies and displays a green (Qualified) or red (Not Eligible) result box.
   - **Skills shown:** Conditional logic (`if/else`), reading form values, dynamic DOM updates.

### Enquiry / Get Involved Page (`enquiry.html`)
1. **Dynamic Form Validation:**
   - **How it works:** Instead of relying solely on HTML `required`, JavaScript checks the input. It verifies if the email is formatted correctly (RegEx) and if the required fields are filled, showing red error messages below the fields if fail.
   - **Skills shown:** Form handling (`e.preventDefault()`), Regular Expressions, Dynamic element creation.
2. **Conditional Form Logic:**
   - **How it works:** If the user selects "Become a Volunteer" from the dropdown, a new field appears asking *"What skills do you have?"*. If they select "Laptop Donation," the field changes to *"How many laptops?"*
   - **Skills shown:** Event listening (`change`), DOM element creation and deletion based on conditions.

### Features (Across All Pages)
1. **Dark / Light Mode Toggle:**
   - **How it works:** A moon/sun icon in the header. Clicking it toggles a `.dark-mode` class on the `<body>`. The choice is saved to `localStorage` so the theme persists as the user navigates between pages.
   - **Skills shown:** `localStorage`, `classList.toggle`, DOM styling.
2. **Mobile Hamburger Menu (Slide-out):**
   - **How it works:** On small screens, the standard navigation links are replaced by a hamburger icon. Clicking it toggles a class that slides the full navigation menu in from the side of the screen.
   - **Skills shown:** Responsive event handling, `classList.toggle`, CSS transitions triggered by JS.
3. **Active Nav Link Highlighter:**
   - **How it works:** JavaScript reads the current page URL (`window.location.pathname`). It automatically adds an `active` class to the matching link in the navigation, instead of manually hardcoding it in HTML.
   - **Skills shown:** `window.location`, Array iteration, DOM manipulation.


  

