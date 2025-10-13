# AiriGo Landing Page

## Overview

AiriGo is a product landing page for a pocket-sized AI air purification device. The application is a single-page marketing website built with React, showcasing the product's features, benefits, specifications, and providing waitlist signup functionality. The design follows a premium, Apple-inspired aesthetic with clean layouts, generous white space, and product-first presentation.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

### Waitlist Feature Implementation (October 2025)
- Changed all "Pre Order Now" CTAs to "Join Waitlist"
- Implemented complete waitlist functionality with:
  - Waitlist data schema with name and email fields
  - In-memory storage with duplicate email detection
  - POST /api/waitlist endpoint with Zod validation
  - WaitlistDialog component with form and success state
  - Auto-close dialog after 3 seconds on success
  - Integration with Header, Hero, and CTA buttons
  - Error handling for duplicate submissions (409 Conflict)
  - End-to-end testing completed and verified

## System Architecture

### Frontend Architecture

**Framework & Build System:**
- React 18+ with TypeScript for type-safe component development
- Vite as the build tool and development server for fast HMR and optimized production builds
- Wouter for lightweight client-side routing (single page application with 404 fallback)

**UI Component System:**
- Shadcn/ui component library following the "New York" style variant
- Radix UI primitives for accessible, unstyled base components
- Tailwind CSS for utility-first styling with custom design tokens
- CSS variables for theming with a light-mode-only color system

**Design System:**
- Premium color palette: Fresh Mint (primary), Clean Blue (secondary), Friendly Coral (accent)
- Typography: SF Pro Display for headings, Inter for body text
- Generous spacing and white space following Apple/Dyson design principles
- Responsive layouts with mobile-first breakpoints

**State Management:**
- TanStack Query (React Query) for server state management and caching
- React hooks for local component state
- No global state management (simple marketing site doesn't require it)

**Component Structure:**
- Page-level component: `Home.tsx` orchestrating all sections
- Feature sections: Hero, Features, Benefits, Specifications, CTA, Footer, Header
- Reusable UI components from Shadcn/ui library in `components/ui/`
- Smooth scroll navigation between sections via anchor links

### Backend Architecture

**Server Framework:**
- Express.js with TypeScript for API routing
- Development: Vite middleware for HMR and dev server integration
- Production: Static file serving of built React application

**Data Layer:**
- In-memory storage implementation (`MemStorage`) for user data
- Drizzle ORM configured for PostgreSQL (via Neon serverless driver)
- Database schema defined with Drizzle for user authentication structure
- Storage interface pattern allowing easy swap between memory and database implementations

**API Structure:**
- RESTful API endpoints prefixed with `/api`
- Middleware for request/response logging with timing metrics
- JSON body parsing and URL-encoded form data support
- Error handling middleware with status code normalization

**Session Management:**
- Connect-pg-simple configured for PostgreSQL session storage
- Cookie-based sessions with secure HTTP-only flags

### External Dependencies

**Database:**
- PostgreSQL via Neon serverless driver (`@neondatabase/serverless`)
- Drizzle ORM for type-safe database queries and migrations
- Connection configured via `DATABASE_URL` environment variable

**UI Libraries:**
- Radix UI component primitives (20+ components for dialogs, dropdowns, tooltips, etc.)
- Lucide React for iconography
- React Icons for social media icons
- Embla Carousel for potential image carousels
- Class Variance Authority for component variant management

**Development Tools:**
- TSX for TypeScript execution in development
- ESBuild for production server bundling
- Replit-specific plugins for error overlays and dev tools
- PostCSS with Tailwind CSS and Autoprefixer

**Asset Management:**
- Static images stored in `attached_assets` directory
- Vite alias `@assets` for clean import paths
- Product photography, lifestyle images, and background imagery

**Design Guidelines:**
- Documented design system in `design_guidelines.md`
- Reference-based approach inspired by Apple and Dyson
- Premium simplicity with product-first presentation
- Specific color palette (HSL values), typography scale, and spacing primitives defined