# AI Assistant Context: Rani Delight Services

This document provides a high-level technical overview and design guidelines for AI assistants working on this repository.

## Project Overview
- **Business**: Rani Delight Services (Premium Cleaning in Parramatta, NSW)
- **Core Experience**: A "scrollytelling" landing page where image sequences sync with scroll progress.
- **Tech Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS 4, Framer Motion, HTML5 Canvas.

## Key Architecture & Components

### 1. The Scrollytelling Engine (`src/components/ScrollCanvas.tsx`)
- **Mechanism**: Renders a 192-frame image sequence (`/sequence/frame_n.jpg`) onto an HTML5 Canvas.
- **Scroll Sync**: Uses `framer-motion`'s `useScroll` and `useSpring` to map scroll progress to frame indices.
- **Text Beats**: Defined in the `BEATS` array. Triggers overlays (title/subtitle) at specific scroll ranges.
- **Performance**: Preloads all frames into an `imagesRef` to ensure stutter-free playback.

### 2. Styling System (`src/app/globals.css`)
- **Tailwind 4**: Uses `@theme` block for custom tokens.
- **Color Palette**: Strictly professional/luxury. 
  - `primary-black`: #000000
  - `light-gray`: #EEEEEE
  - `accent-indigo`: #4E4FEB
  - `action-blue`: #068FFF
- **Animations**: Custom shimmer, pulse-glow, and float animations defined via standard CSS keyframes.

### 3. Component Library (`src/components/`)
- **Visual Effects**: Components like `ElectricBorder`, `StarBorder`, and `ScrollFloatAnimation` provide premium micro-interactions.
- **Content Sections**: `ServicesGrid`, `BeforeAfterSlider`, `StatsRow`, and `TestimonialCarousel` follow the scrollytelling header.

## Development Guidelines for AI
1. **Performance First**: When modifying the `ScrollCanvas`, ensure `requestAnimationFrame` and `useCallback` are used properly to maintain 60FPS.
2. **Aesthetic Consistency**: Maintain the luxury minimalist aesthetic. Avoid neon or "cheap" looking effects unless explicitly requested.
3. **Responsive Design**: All components must be mobile-first. Use `md:` and `lg:` prefixes for desktop-specific layouts.
4. **Asset Management**: Image frames are expected in `public/sequence/`. New scenes require regenerating this sequence.

## Interaction Flow
- `page.tsx` is the entry point.
- `ScrollCanvas` occupies the first `500vh` of the page.
- Other sections follow as standard scrollable content.
