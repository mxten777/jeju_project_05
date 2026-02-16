# Data Todo & Localization Gap Analysis (v1.0.1 Candidate)

## 📌 Critical Translations (Need English -> Korean)
**Location:** `src/pages/Home.tsx`  
**Description:** The "Company Statistics" section has hardcoded English labels that need to be moved into `locales/en.json` and `locales/ko.json`.

| English Label | Korean Requirement | Key Name (Suggestion) |
| :--- | :--- | :--- |
| "Annual Revenue" | "연간 매출액" | `home.stats.revenue` |
| "Global Customers" | "글로벌 고객사" | `home.stats.customers` |
| "Patents Held" | "보유 특허" | `home.stats.patents` |
| "Export Countries" | "수출 국가" | `home.stats.export_countries` |

## 📌 Missing Metadata (SEO)
**Location:** `All sub-pages` (except Home)  
**Action:** Add `<PageMeta />` component to the following pages with unique descriptions:
- `src/pages/Products.tsx`
- `src/pages/News.tsx`
- `src/pages/Contact.tsx`
- `src/pages/company/*.tsx`

## 📌 Placeholder Content (Need Actual Data)
**Location:** `src/pages/Products.tsx`  
**Action:** Replace dummy product list with real API data or finalized static JSON.

**Location:** `src/pages/News.tsx`  
**Action:** Integrate actual press releases or notices from 2024-2025.

## 📌 Performance Optimization
**Priority:** Medium  
**Action:** Implement code splitting for Firebase and heavy libraries using `React.lazy` and `Suspense`.
