# AiriGo Landing Page - Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from Apple's product pages and Dyson's clean tech aesthetic - premium hardware presentation with focus on product photography, generous white space, and sophisticated simplicity.

## Core Design Principles
- **Product-First**: The AiriGo device is the hero; all design elements support and frame the product
- **Premium Simplicity**: Clean, uncluttered layouts that convey innovation and quality
- **Friendly Technology**: Balance technical sophistication with approachable, playful elements
- **Breathing Space**: Generous white space reflects the product's purpose (clean air)

## Color System

**Primary Palette:**
- Fresh Mint: 166 100% 41% - Primary brand color for CTAs, highlights, and key UI elements
- Clean Blue: 211 70% 58% - Secondary for supporting elements and icons
- Friendly Coral: 0 100% 70% - Accent sparingly for important callouts and micro-interactions
- Pure White: 0 0% 100% - Primary background throughout
- Deep Slate: 210 29% 24% - Primary text color
- Light Mint: 165 100% 98% - Subtle background tints for alternating sections

**Dark Mode**: Not required for this product page

**Usage Guidelines:**
- Mint green for all primary CTAs and interactive elements
- Blue for feature icons and supporting graphics
- Coral very sparingly for special highlights only
- Maintain high contrast ratios (4.5:1 minimum for text)

## Typography

**Font Stack:**
- Primary: SF Pro Display (headings, hero text)
- Secondary: Inter (body text, descriptions)
- Fallback: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif

**Scale:**
- Hero Headline: 4xl-6xl (responsive), 700 weight, -2% letter-spacing, Deep Slate
- Section Headlines: 3xl-4xl, 700 weight, Deep Slate
- Feature Titles: xl-2xl, 600 weight
- Body Text: base-lg, 400 weight, 1.7 line-height
- Captions: sm, 500 weight, slightly reduced opacity

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 8, 12, 16, 20, 24, 32 for consistent rhythm
- Section padding: py-20 (mobile), py-32 (desktop)
- Component spacing: gap-8 to gap-16
- Container max-width: max-w-7xl with px-6 padding

**Grid Strategy:**
- Hero: Single column, centered content
- Features: 3-column grid (desktop), single column (mobile)
- Benefits: 2-3 column layout with imagery
- Specifications: 2-column split or single column list

## Component Library

**Hero Section:**
- Full-width layout with 80vh minimum height
- Large product image (the uploaded AiriGo render) positioned prominently - either centered or offset right
- Headline: "Meet AiriGo" or "Every Breath, Smarter" - bold, 5xl-6xl size
- Subheadline: One-sentence value proposition, lg-xl size
- Primary CTA: Large button with mint background, white text, rounded-full, px-8 py-4
- Optional: Subtle animated floating particles or air quality visualization in background

**Feature Cards:**
- Icon (from Heroicons): 48-64px size, blue color, mb-6
- Feature Title: 2xl size, 600 weight, mb-4
- Description: Base-lg size, gray-600 color
- Card styling: Subtle border or soft shadow, p-8, rounded-2xl
- Hover: Gentle lift effect (translate-y-1), shadow increase

**Benefits Section:**
- Image + Text combinations showing use cases
- Asymmetric layout: Alternate image left/right
- Each scenario includes: Context photo, headline, 2-3 bullet benefits
- Icons for each benefit point

**Product Specifications:**
- Clean table or grid layout
- Icon + spec pairs
- Technical details presented accessibly
- Light mint background alternating rows

**CTA Section:**
- Full-width mint background section
- White text, centered content
- Large headline + subtext + prominent white-outlined button
- Include trust signals: "Free shipping" "30-day trial" badges

**Footer:**
- Multi-column layout: Product info, Company, Support, Social links
- Newsletter signup with inline form
- Legal links and copyright
- Subtle gray background (50-100 lightness)

## Images

**Hero Image:**
- The uploaded AiriGo product render as the primary hero visual
- High resolution, clean background
- Position: Center-right or full center with subtle gradient background
- Size: Large enough to see product details clearly

**Feature Section Images:**
- Use case photography: Person walking in city with AiriGo, traveler with device, office worker
- Real-world contexts showing portability and use scenarios
- Lifestyle photography with natural lighting
- Dimensions: Minimum 800x600px, optimized for web

**Icon Strategy:**
- Heroicons for feature icons (outline style)
- Consistent 2px stroke width
- Clean blue color matching brand
- Animated on scroll (subtle fade-in)

## Interactions & Animations

**Scroll Behavior:**
- Fade-in animations for sections (opacity 0 to 1, translate-y-8 to 0)
- Stagger feature cards by 100-150ms
- Smooth scroll for anchor navigation

**Hover States:**
- Buttons: Slight darken, scale-105
- Cards: Lift (translate-y-1), shadow increase
- Links: Underline reveal animation

**Performance:**
- Minimize animation to key moments
- Use transform and opacity only
- Lazy load images below fold

## Responsive Strategy

**Breakpoints:**
- Mobile: < 768px (single column, stacked)
- Tablet: 768-1024px (2-column layouts)
- Desktop: > 1024px (full multi-column)

**Mobile Priorities:**
- Larger touch targets (min 44px)
- Simplified navigation
- Reduced text sizes but maintain readability
- Full-width CTAs
- Product image optimized for vertical viewing

## Accessibility

- Maintain WCAG AA contrast standards
- Alt text for all images describing product and context
- Semantic HTML headings hierarchy
- Focus indicators for keyboard navigation
- Touch-friendly tap targets (44x44px minimum)

This design creates a premium, breathable experience that mirrors the product's core value: making air quality smart, portable, and accessible.