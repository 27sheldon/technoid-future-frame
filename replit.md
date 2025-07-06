# Replit.md - IT Consultancy Landing Page

## Overview

This is a modern, responsive landing page for "Technoid", an IT consultancy company specializing in SaaS development, enterprise tools, and digital transformation. The application is built as a full-stack TypeScript project with React frontend and Express backend, designed to showcase services and capture leads.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Routing**: React Router DOM for client-side navigation
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: In-memory storage (MemStorage class) with planned PostgreSQL integration
- **API Structure**: RESTful API with `/api` prefix

### UI/UX Design System
- **Component Library**: Radix UI primitives with custom styling
- **Design Tokens**: HSL color system with CSS custom properties
- **Theme**: Tech-focused design with primary red accent (Technoid brand)
- **Animations**: Smooth transitions and hover effects using CSS transitions

## Key Components

### Frontend Components
1. **Landing Page Sections**:
   - Header with navigation and CTA buttons
   - Hero section with company overview and statistics
   - Services showcase (SaaS, Internal Tools, ERP, Cloud & DevOps)
   - Why Choose Us section with key differentiators
   - Client testimonials with scrolling logo gallery
   - About Us team section
   - Call-to-action section
   - Footer with contact information

2. **UI Components**: Comprehensive shadcn/ui component library including buttons, cards, forms, dialogs, and navigation elements

### Backend Components
1. **Storage Interface**: Abstract storage layer supporting both in-memory and database operations
2. **User Management**: User schema with authentication capabilities
3. **Express Server**: Development server with Vite integration and API routing

## Data Flow

### Current State
- Static content rendering for marketing pages
- In-memory user storage for development
- No active database connections (prepared for PostgreSQL)

### Planned Data Flow
1. **Lead Capture**: Contact forms → API endpoints → Database storage
2. **User Management**: Registration/login → Session management → Database persistence
3. **Analytics**: User interactions → Backend tracking → Database analytics

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database adapter
- **drizzle-orm**: Type-safe database queries and migrations
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Accessible UI primitives
- **react-router-dom**: Client-side routing
- **tailwindcss**: Utility-first CSS framework

### Development Dependencies
- **vite**: Build tool and development server
- **typescript**: Type checking and compilation
- **tsx**: TypeScript execution for development

## Deployment Strategy

### Development
- **Dev Server**: Vite development server with HMR
- **API Server**: Express server with TypeScript compilation
- **Database**: Planned PostgreSQL integration via Drizzle

### Production
- **Build Process**: 
  - Frontend: Vite build to `dist/public`
  - Backend: esbuild compilation to `dist/index.js`
- **Deployment**: Single process serving both static assets and API
- **Database**: PostgreSQL with Drizzle migrations

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string (required for production)
- **NODE_ENV**: Environment mode (development/production)

## Changelog

```
Changelog:
- July 06, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```