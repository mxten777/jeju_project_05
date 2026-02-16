# Release Notes - v1.0.0 (Release Candidate 1)

**Release Date:** 2026-02-16  
**Status:** Pre-Release (RC1)

## 🚀 Key Highlights
- **Global Reach Ready:** Fully integrated `i18n` with support for English and Korean, featuring robust language detection and fallback.
- **Brand Identity Revamp:** Header and Mega Menu redesigned for maximum clarity and professionalism, aligning with the "Clean & Global" brand voice.
- **Accessibility Upgrade:** Improved keyboard navigation (Tab/Enter/Esc) for main navigation and screen reader support (`aria-expanded`, `focus-rings`).

## 🛠 Fixes & Improvements

### 🌐 Internationalization (i18n)
- **Resolved:** Fixed the issue where the language toggle button was unresponsive on certain browser locales (e.g., `en-GB`).
- **Improved:** Added explicit locale file loading with debug mode enabled for better traceability.
- **Updated:** `i18n.ts` configuration now supports flexible locale matching.

### 🎨 UI/UX & Design
- **Header Visibility:** Implemented a new "Scrim" overlay to ensure menu text is readable against any background image.
- **Mega Menu Contrast:** Changed the mega menu background to pure white with a 2px defined top border (`#003366`) and deep drop shadow for clear visual hierarchy.
- **Responsive:** Mobile menu animations are smoother, and the layout adapts seamlessly to tablet dimensions.

### 🔧 Build & Performance
- **TypeScript:** Cleared all `unused variable` warnings (e.g., `location`, `isDarkHeroPage`) that were causing build failures.
- **SEO:** Introduced a `PageMeta` component for dynamic title and description management across pages.
- **Tailwind v4:** Transitioned gradient syntax to `bg-linear-to-*` for future-proof compatibility.

## ⚠️ Known Issues / Limitations
- **[Minor] Bundle Size:** Some vendor chunks exceed 500kB. Future updates will focus on code splitting (Priority: Medium).
- **[Content] Translations:** Some hardcoded strings remain in the `Home` dashboard components. These will be moved to translation keys in v1.0.1.
