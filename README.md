# COCONEST – Pure Coconut Living
### Premium Coconut Products & Virgin Oil Shop – Advanced HTML5 Commercial Website Template

> **Tagline:** "Pure Nature. Pure Goodness."  
> **Target Standard:** ThemeForest, TemplateMonster & Enterprise Client Deployments  
> **Technology Stack:** HTML5, CSS3 Custom Properties, JavaScript ES6+, Bootstrap 5.3, Font Awesome 6.5, Google Fonts

---

## 🌴 1. Project Overview

**COCONEST** is an ultra-premium, modern, mobile-responsive HTML website template engineered specifically for luxury organic coconut brands, virgin coconut oil producers, superfood snack manufacturers, and international bulk exporters.

The template delivers an organic, tropical, authentic aesthetic paired with cutting-edge e-commerce and B2B capabilities, including:
- **Dual Unique Homepages:** Home 1 (Commercial E-Commerce Landing) & Home 2 (Editorial Organic Brand Storytelling).
- **Universal Theme Toggle:** Light Mode (Coconut Cream `#FFF9ED`) & Dark Mode (Deep Forest `#173D2D` / `#0C1A14`) with `localStorage` persistence.
- **Complete RTL Engine:** Native Right-to-Left support for Arabic & Hebrew with mirrored navigation, badges, sliders, and form direction.
- **Dynamic Offcanvas Cart Drawer:** Live item counters, increment/decrement controls, real-time subtotal, and an animated Free Shipping threshold progress bar.
- **Interactive Product Catalog:** Category filtering pills, live text search, price sorting, and instant Grid/List view switcher.
- **Quick View Modal & Wishlist:** Floating action buttons with visual toast confirmations.
- **FormSubmit.co Bulk Enquiry Integration:** Zero-backend AJAX form submission with required field validation, loading spinner, and real error/success alerts.
- **4K Curated Imagery:** High-definition verified photography across every page.

---

## 🎨 2. Brand Identity & Color Palette

| Color Name | Hex Code | Purpose & Context |
| :--- | :--- | :--- |
| **Coconut Green** | `#285C43` | Primary brand accent, badges, buttons, active highlights |
| **Deep Forest** | `#173D2D` | High-contrast dark backgrounds, headers, typography |
| **Coconut Cream** | `#FFF9ED` | Subtle luxury background, card accents, dark mode text |
| **Natural Beige** | `#E9D8B9` | Delicate border lines, divider accents, earthy tones |
| **Golden Coconut** | `#C99B51` | Premium foil accent, star ratings, CTAs, sale tags |
| **Pure White** | `#FFFFFF` | Card surfaces, container cards, light mode contrast |

### Typography
- **Headings:** `Cormorant Garamond` & `Playfair Display` (Luxury serif)
- **Body & Controls:** `Plus Jakarta Sans` (Clean, highly legible modern geometric sans-serif)

---

## 📁 3. File & Directory Structure

```text
coconest/
│
├── index.html                           # Home Page 1 – E-Commerce Landing
├── index-2.html                         # Home Page 2 – Editorial Organic Brand
├── about.html                           # About Us (Heritage, Mission, Team, Ethics)
│
├── products.html                        # Product Catalog (Filters, Search, Grid/List)
├── product-oil-virgin.html              # Extra Virgin Cold-Pressed Coconut Oil (500ml)
├── product-oil-centrifuge.html           # Raw Centrifuged Coconut Oil (1000ml)
├── product-desiccated-fine.html         # Organic Fine Desiccated Coconut (500g)
├── product-chips-toasted.html           # Golden Sea Salt Toasted Coconut Chips (150g)
├── product-details.html                 # Flagship Product Details Master Showcase
│
├── sourcing-story.html                  # 8-Stage Interactive Farm-To-Bottle Story
│
├── services.html                        # B2B Services Overview
├── service-wholesale.html               # Wholesale Coconut Products
├── service-bulk-oil.html                # Bulk Virgin Coconut Oil Supply (IBC & Drums)
├── service-private-label.html           # Private-Label OEM Contract Packing
├── service-retail-distribution.html     # Retail and Distribution Partnerships
├── service-export.html                  # Export & International Logistics
├── service-packaging.html               # Custom Sustainable Packaging Labs
├── service-details.html                 # Master Service Details Showcase
│
├── blog.html                            # Editorial Journal Archive (Search & Filters)
├── blog-virgin-coconut-oil-benefits.html# 10 Proven Health & Beauty Benefits of VCO
├── blog-traditional-extraction.html     # From Palm to Press: How We Cold-Extract
├── blog-organic-farming.html            # Regenerative Organic Farming in Ceylon
├── blog-oil-vs-refined.html             # Virgin vs Refined RBD Coconut Oil
├── blog-uses-desiccated-coconut.html    # 12 Delicious Culinary Uses for Desiccated
├── blog-healthy-recipes.html            # 5 Chef Superfood Bowls with Coconut Chips
├── blog-details.html                    # Master Article Showcase
│
├── contact.html                         # Advanced Contact & Bulk Enquiry Page
├── pricing.html                         # Wholesale Supply & Volume Tiers
├── 404.html                             # Creative Coconut 404 Error Page
├── coming-soon.html                     # Coming Soon Page with Live Countdown
├── maintenance.html                     # Scheduled Maintenance Notice
│
├── assets/
│   ├── css/
│   │   ├── style.css                    # Main design system & responsive styling
│   │   └── rtl.css                      # Right-to-Left overrides & mirrored layouts
│   ├── js/
│   │   └── main.js                      # Centralized JavaScript engine (Theme, Cart, Filters, etc.)
│   └── images/
│       └── branding/
│           ├── logo.svg                 # Vector luxury brand logo
│           └── favicon.svg              # Vector brand favicon
│
└── README.md                            # Comprehensive Template Documentation
```

---

## ⚡ 4. Feature Implementation & Configuration

### A. FormSubmit.co Contact Configuration
In `contact.html`, locate the contact form:
```html
<form id="coconestContactForm" action="https://formsubmit.co/ajax/your-email@example.com" method="POST">
```
1. Replace `orders@coconestliving.com` with your real receiving email address.
2. The form automatically sends submissions asynchronously via `fetch()` in `assets/js/main.js`.
3. Validation checks required fields (Name, Email, Phone, Message) and enforces valid email formatting before transmitting.
4. An animated spinner is shown while processing, followed by a green success notification or error banner upon response.

### B. Light & Dark Theme System
- Controlled via `data-theme="light"` or `data-theme="dark"` on the `<html>` element.
- Persisted automatically in `localStorage.getItem('coconest-theme')`.
- All cards, navigation dropdowns, modals, and offcanvas drawers adjust dynamically via CSS custom variables.

### C. Right-to-Left (RTL) System
- Toggled via `dir="rtl"` on `<html>`.
- Handled seamlessly with `assets/css/rtl.css`.
- Reverses navigation menus, offcanvas slide-ins, chevron directions, and form alignments.
- Persisted in `localStorage.getItem('coconest-dir')`.

### D. Interactive Shopping Cart
- Stored client-side in `localStorage.getItem('coconest-cart')`.
- Allows instant quantity addition, removal, and recalculation of total value.
- Includes a live progress bar tracking the $50 threshold for **Free Global Express Shipping**.

---

## 📱 5. Responsive Breakpoints

The template is fully verified across all modern viewport resolutions:
- **Ultra-Wide Screens:** 1920px and above
- **Standard Desktop:** 1440px
- **Laptops:** 1366px – 1024px
- **Tablets:** 768px – 991px
- **Smartphones:** 430px, 390px, 375px, 360px, and 320px

---

## 📜 6. Credits & Third-Party Assets
- **CSS Framework:** [Bootstrap 5.3.3](https://getbootstrap.com/)
- **Icons:** [Font Awesome 6.5.1](https://fontawesome.com/)
- **Fonts:** [Google Fonts](https://fonts.google.com/) (`Cormorant Garamond`, `Playfair Display`, `Plus Jakarta Sans`)
- **Photography:** [Unsplash](https://unsplash.com/) (High-resolution, free commercial license)

---

## 🥥 7. License & Usage
Created for **COCONEST – Pure Coconut Living**. Suitable for direct production use, ThemeForest commercial sales, and custom enterprise e-commerce client customization.
