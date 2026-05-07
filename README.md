# EkkoNow — Power the Future. Today. 🌍⚡

> **Africa's premier climate-tech platform** — connecting homes, businesses, and communities with clean solar energy while driving waste recovery, sustainability education, and green economic growth.

[![Next.js](https://img.shields.io/badge/Next.js-15.x-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Proprietary-red)](./LICENSE)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Brand Identity](#brand-identity)
- [Tech Stack](#tech-stack)
- [Monorepo Structure](#monorepo-structure)
- [App Routes](#app-routes)
- [Component Architecture](#component-architecture)
- [Key Features](#key-features)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Recent Updates](#recent-updates)
- [Contact](#contact)

---

## Overview

EkkoNow is a **climate-tech company** and **solar energy marketplace** built for the African market. The platform combines:

- 🔋 A **Solar Marketplace** with multi-currency support and verified vendors
- ♻️ **Waste Recovery & Recycling** programs creating circular economy value
- ☀️ **Solar & Renewable Energy** advisory, installation, and product sourcing
- 📊 **Impact Tracking** across waste recovered, jobs created, and communities reached
- 🤝 **Partnership Infrastructure** for NGOs, governments, and global manufacturers

---

## Brand Identity

The EkkoNow design system is built around four official brand tokens:

| Token | Hex | Role |
|-------|-----|------|
| **Deep Indigo** | `#1A0B4F` | Primary background — serious, investor-ready tech |
| **Electric Blue** | `#1F8BFF` | Technology, intelligence, modern systems |
| **Mint Green** | `#2EE6A6` | Sustainability, renewal, environment |
| **Pure White** | `#FFFFFF` | Clarity, simplicity, transparency |

Typography: **Outfit** (headings) + **Inter** (body) via Google Fonts.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router, Turbopack) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS + custom CSS design tokens |
| Fonts | Google Fonts — Outfit & Inter |
| Icons | Lucide React |
| Images | `next/image` (optimised, fill-mode) |
| Animation | CSS keyframes + `IntersectionObserver` (no external lib) |
| Package Manager | npm (monorepo via workspaces) |

---

## Monorepo Structure

```
ekkonowFE/
├── apps/
│   └── web/                        # Main Next.js web application
│       ├── app/                    # App Router pages & layouts
│       ├── components/             # Shared UI components
│       ├── public/                 # Static assets
│       └── lib/                    # Utility functions & constants
│
├── packages/
│   ├── config/                     # Shared configuration (colours, tokens)
│   ├── types/                      # Shared TypeScript types
│   └── utils/                      # Shared utility functions
│
├── package.json                    # Root workspace config
└── .env                            # Environment variables
```

---

## App Routes

All routes live under `apps/web/app/`. The platform uses Next.js App Router with server and client components as needed.

```
app/
├── layout.tsx                      # Root layout — Navbar + Footer
├── page.tsx                        # Home page (/)
│
├── about/
│   └── page.tsx                    # About EkkoNow (/about)
│
├── solutions/
│   └── page.tsx                    # Full-stack solutions (/solutions)
│
├── solar-marketplace/
│   ├── layout.tsx                  # CurrencyProvider wrapper for all marketplace routes
│   ├── page.tsx                    # Marketplace listing (/solar-marketplace)
│   ├── [productId]/
│   │   └── page.tsx                # Product detail page
│   ├── categories/
│   │   ├── solar-panels/page.tsx   # /solar-marketplace/categories/solar-panels
│   │   ├── batteries/page.tsx      # /solar-marketplace/categories/batteries
│   │   ├── inverters/page.tsx      # /solar-marketplace/categories/inverters
│   │   ├── accessories/page.tsx    # /solar-marketplace/categories/accessories
│   │   ├── mounting/page.tsx       # /solar-marketplace/categories/mounting (agent form)
│   │   ├── mini-systems/page.tsx   # /solar-marketplace/categories/mini-systems
│   │   └── solar-lights/page.tsx   # /solar-marketplace/categories/solar-lights
│   ├── components/                 # Marketplace-specific components
│   │   ├── MarketplaceHero.tsx
│   │   ├── ProductCard.tsx
│   │   ├── ProductGrid.tsx
│   │   ├── CategoryTabs.tsx
│   │   ├── Filters.tsx
│   │   ├── VendorBadge.tsx
│   │   └── CurrencySelector.tsx    # Multi-currency dropdown
│   ├── context/
│   │   └── CurrencyContext.tsx     # Currency state + formatter
│   └── data/
│       └── products.ts             # Product catalogue & vendor data
│
├── impact/
│   └── page.tsx                    # Impact stats & stories (/impact)
│
├── partners/
│   ├── page.tsx                    # Partners page — server component (/partners)
│   └── PartnersGrid.tsx            # Client component — animated partner cards
│
├── investors/
│   └── page.tsx                    # Investor relations (/investors)
│
├── contact/
│   └── page.tsx                    # Contact form (/contact)
│
├── faq/
│   └── page.tsx                    # FAQ accordion (/faq)
│
├── privacy/
│   └── page.tsx                    # Privacy Policy (/privacy)
│
└── terms/
    └── page.tsx                    # Terms of Service (/terms)
```

---

## Component Architecture

```
components/
├── layout/
│   ├── Navbar.tsx                  # Sticky navigation with Marketplace dropdown
│   ├── Footer.tsx                  # Full footer with links, socials, newsletter
│   └── PageHero.tsx                # Reusable hero banner (image bg + text overlay)
│
├── sections/                       # Home page section components
│   ├── Hero.tsx                    # Landing hero with stats
│   ├── About.tsx
│   ├── Solutions.tsx
│   ├── Impact.tsx
│   └── ...
│
├── marketplace/                    # Shared marketplace card components
│   └── ProductCard.tsx
│
└── ui/                             # Base UI primitives
    ├── Button.tsx
    ├── Badge.tsx
    └── ...
```

---

## Key Features

### 🛒 Solar Marketplace
- **Multi-currency support**: NGN 🇳🇬, USD 🇺🇸, GHS 🇬🇭, KES 🇰🇪, ZAR 🇿🇦, CFA 🌍, EGP 🇪🇬, ETB 🇪🇹
- Auto-detects user location to set default currency; saves preference to `localStorage`
- Category browsing: Solar Panels, Batteries, Inverters, Accessories, Mini Systems, Solar Lights
- **Mounting Services** category → agent contact form (not a product listing)
- Real-time price conversion on all product cards

### 🏗️ Mounting Agent Form (`/solar-marketplace/categories/mounting`)
Collects:
- What is being mounted (8 structure types)
- Location (all 37 Nigerian states + FCT + major African cities)
- Urgency: ASAP / 24h / 48h / Within a week / Flexible
- System size, preferred contact method (WhatsApp / Call / Email), notes

### 📊 Animated Impact Stats (`/impact`)
- Four key metrics with animated counters using `IntersectionObserver`
- Numbers count up with cubic ease-out when scrolled into view
- Stats: **20,000+ Waste Recovered**, **2,500+ Solar Systems**, **1,100+ Jobs Created**, **45+ Communities Reached**

### 🤝 Partners (`/partners`)
- Server/client split: `page.tsx` (server) + `PartnersGrid.tsx` (client)
- Tier-coloured glassmorphism cards with hover glow effects
- Platinum: SunPower, **GYNIX VERTEX** | Gold: BYD Energy, SolaX, USAID | Silver: AfDB, Growatt, LONGi

### 🖼️ PageHero Component
Reusable full-bleed hero banner used across all sub-pages:
```tsx
<PageHero
  title="Built Through"
  titleHighlight="Collaboration"     // Renders in gradient
  subtitle="Supporting text..."
  badgeText="Partnership"            // Badge with pulsing dot
  imageSrc="/images/hero_partners.png"
/>
```
Props are plain strings (not ReactNode) to comply with Next.js server component serialization rules.

### 📄 Legal & Help Pages
| Route | Content |
|-------|---------|
| `/faq` | 5-category accordion FAQ (native `<details>`, no JS library) |
| `/privacy` | 10-section Privacy Policy |
| `/terms` | 12-section Terms of Service |

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd ekkonowFE

# Install all workspace dependencies
npm install
```

### Development

```bash
# Run the web app in development mode
cd apps/web
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
cd apps/web
npm run build
npm run start
```

---

## Environment Variables

Create a `.env` file at the root of the project:

```env
# Add any required environment variables here
# e.g. API keys, database URLs, payment gateway tokens
```

> ⚠️ Never commit `.env` to version control.

---

## Recent Updates

### May 2026 — Premium Visual Brand Overhaul

#### Design System
- ✅ Migrated entire platform to official EkkoNow brand tokens (Deep Indigo / Electric Blue / Mint Green)
- ✅ Implemented glassmorphism design language with consistent blur, border, and glow effects
- ✅ Applied `Outfit` (headings) and `Inter` (body) typography system-wide

#### Hero Images
Generated and integrated 8 high-fidelity, culturally authentic hero images featuring Black African professionals and communities:
- `hero_home.png` — Landing hero
- `hero_about.png` — About page
- `hero_solutions.png` — Solutions
- `hero_solar.png` — Solar Marketplace
- `hero_impact.png` — Impact page
- `hero_partners.png` — Partners
- `hero_investors.png` — Investors
- `hero_contact.png` — Contact

#### New Components & Pages
- ✅ `PageHero` — reusable server-compatible hero component
- ✅ `/faq`, `/privacy`, `/terms` — legal and help pages wired into footer
- ✅ `/solar-marketplace/categories/accessories` — accessories product listing
- ✅ `/solar-marketplace/categories/mounting` — agent contact form
- ✅ `CurrencyContext` + `CurrencySelector` — 8-currency marketplace

#### Fixes & Improvements
- ✅ Resolved Next.js server component serialization error (ReactNode props in PageHero)
- ✅ Fixed `useCurrency must be used inside CurrencyProvider` error on category pages by moving `CurrencyProvider` to `solar-marketplace/layout.tsx`
- ✅ Fixed `metadata` + `'use client'` conflict on Partners page via server/client split
- ✅ Corrected contact details site-wide: `info.ekkonow@gmail.com` / `+2347047581704`
- ✅ Updated Instagram link to `@official_ekkonow`
- ✅ Navbar Marketplace dropdown: solid dark background (was transparent/glassy, items were hard to read)
- ✅ Home page stat: Countries changed from `15+` → `5+`
- ✅ Partners: JinkoSolar replaced with **GYNIX VERTEX** (Platinum)

---

## Contact

**EKKO NOW**
- 📧 Email: [info.ekkonow@gmail.com](mailto:info.ekkonow@gmail.com)
- 📱 WhatsApp: [+2347047581704](https://wa.me/2347047581704)
- 🌐 Website: [www.ekkonow.com](https://www.ekkonow.com)
- 📸 Instagram: [@official_ekkonow](https://www.instagram.com/official_ekkonow?igsh=OHd3aXN2MndhYm1w)

---

*Built with ⚡ for a solar-powered future.*
