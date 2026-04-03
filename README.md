# 🧹 Rani Delight Services — Premium Scrollytelling Landing Page

## About the Business

**Rani Delight Services** is a professional cleaning company based in **Parramatta, NSW, Australia**, founded by **Rita Rani**. The company provides premium cleaning services for homes, offices, and rental properties across Sydney.

### Brand Identity
- **Tagline:** "You Relax, We Clean"
- **Mission:** "We started with a simple goal: to give our neighbors their weekends back."
- **Promise:** "We make spaces shine so you can breathe easy and enjoy your day."
- **Tone:** Professional, warm, trustworthy, premium

### Services Offered
1. **Home Cleaning** — Regular house cleaning, deep cleans
2. **Office Cleaning** — Commercial and workspace cleaning
3. **Rental/Bond Cleaning** — End-of-lease cleaning for tenants
4. **Specialty Cleaning** — Tailored cleaning packages

### Contact & Social
| Channel | Link |
|---------|------|
| 📞 Phone | +61 478 815 629 |
| 📧 Email | ritarani180037237@gmail.com |
| 📍 Address | 36 Cowper St, Parramatta NSW 2150, Australia |
| 📅 Booking | [ranidelightservices.setmore.com](https://form.jotform.com/253574195593065) |
| 📸 Instagram | [@rani_delight_services](https://www.instagram.com/rani_delight_services) |
| 📘 Facebook | [Rani Delight Services Pty Ltd](https://www.facebook.com/ranidelightservicesptyltd) |
| 💬 WhatsApp | [wa.me/61478815629](https://wa.me/61478815629) |

---

## Technical Architecture & AI Context

Built as a high-end, Awwwards-winning level creative frontend experience. This project uses a custom scrollytelling engine integrated with Next.js 14.

> [!TIP]
> **AI Assistants:** Please refer to [AI_CONTEXT.md](./AI_CONTEXT.md) for a detailed technical breakdown, design tokens, and development guidelines tailored for AI interaction.

### Core Stack
| Technology | Purpose |
|-----------|---------|
| **Next.js 14 (App Router)** | Core framework for SSR and routing efficiency. |
| **TypeScript** | Strict type safety across the scrollytelling engine and components. |
| **Tailwind CSS 4** | Modern theme-based styling with local variables. |
| **Framer Motion** | Advanced scroll-linked animations (`useScroll`, `useSpring`, `useTransform`). |
| **HTML5 Canvas** | High-performance 192-frame 60fps image sequence scrollytelling renderer. |

### Project Structure
- `src/app/`: App router pages and global styles.
- `src/components/`: Modular UI components including the `ScrollCanvas` engine.
- `public/sequence/`: Source frames for the scrollytelling animation.

## Key Features
- **Deterministic Scrollytelling**: Frame-perfect synchronization between user scroll and visual narrative.
- **Luxury Aesthetic**: Minimalist black/white/indigo palette with premium micro-animations.
- **Performance Optimized**: Intelligent image preloading and canvas-based rendering to prevent DOM bloat.
- **Mobile-First**: Fully responsive layouts using Tailwind's adaptive container system.
- **Interactive Experience**: 
    - **How It Works**: Bespoke cleaning journey breakdown.
    - **Why Choose Us**: Value proposition grid with custom iconography.
    - **Before/After Sliders**: High-impact visual proof of service quality.
    - [x] Live Stats: Real-time counters for business achievements.
    - [x] FAQ Accordion: Seamless access to essential service information.

---

## 🔬 Service Strategy & Professional Research

To deliver a world-class cleaning experience, we've benchmarked our service architecture against industry leaders like **The Cleaning Authority**. This research informs our `/services` page structure and operational standards.

### Core Service Methodology: The Precision Rotation System
Inspired by the *Detail-Clean Rotation System®*, Rani Delight Services operates on a systematic frequency that ensures no corner is ever neglected.

1.  **Phase 1: Deep Clean (Intensive)**
    *   Focus on heavy-duty areas: Kitchen (inside appliances, degreasing) and Bathrooms (tile scrubbing, lime removal).
2.  **Phase 2: Standard Maintenance (Preservation)**
    *   Consistent dusting, vacuuming, and sanitizing of all living and sleeping areas.
3.  **Phase 3: Periodic Rotation**
    *   Specific tasks (baseboards, window tracks, ceiling fans) are rotated to maintain a "showroom" quality year-round.

### Service Categories & Detailed Workflow

| Category | Detailed Focus | Standard Frequency |
|----------|----------------|--------------------|
| **Elite Kitchen Care** | Sinks, counters, stove exteriors, inside microwave, floor mopping. | Every Visit |
| **Sanitary Bathroom Suites** | Disinfecting toilets, showers/tubs, mirrors, chrome polishing. | Every Visit |
| **Sleeping & Living Areas** | Dusting surfaces, furniture polishing, bed making, carpet vacuuming. | Every Visit |
| **Move-In / Move-Out** | Deep interior cabinet cleaning, wall washing, comprehensive sanitation. | On-Demand |

### Professional Guarantees
*   **24-Hour Quality Shield**: If any area isn’t perfect, we return the next day to reclean it at zero cost.
*   **Eco-Sustainable Luxury**: Exclusive use of non-toxic, sustainable cleaning agents that protect your health and the environment.
*   **Bonded & Insured Security**: Total peace of mind with comprehensive liability coverage for our elite cleaning crews.

---

## 🎨 Design Philosophy (Services Page)

The `/services` page is designed for **Genuine Professionalism**, utilizing a refined, corporate-luxury palette:
- **Primary Black & White**: High contrast for readability and "crisp" feel.
- **Tonal Gray**: Used for structural divisions and technical diagrams.
- **Strategic Blue**: Indicates action, trust (Checkmarks, Buttons, and Highlights).

### Implementation Roadmap
1. Initialize `/services` route with Next.js App Router.
2. Build modular `ServiceDetail` components for each category.
3. Implement the `RotationSystem` visualization using Framer Motion.
4. Finalize mobile-first grid layouts for high-density information.
