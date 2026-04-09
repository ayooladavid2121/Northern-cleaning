# Northern Cleaning & Services - Product Requirements Document

## Original Problem Statement
Create a modern, high-converting business website for Northern Cleaning & Services - a janitorial and cleaning services company in the United States. The website should generate leads (calls & quote requests), build trust using reviews and reputation (4.6-star rating, 80+ reviews), and convert visitors into booked clients.

## Business Information
- **Business Name**: Northern Cleaning & Services
- **Industry**: Janitorial & Cleaning Services
- **Location**: United States
- **Rating**: 4.6 stars from 80+ reviews
- **Phone**: (907) 830-9287
- **Hours**: Open Daily – Closes 5 PM

## Services Offered
1. Residential Cleaning (routine and deep cleaning)
2. Commercial Cleaning (offices and business facilities)
3. Airbnb Cleaning (turnover and guest-ready preparation)
4. Move-Out Cleaning (detailed end-of-lease cleaning)

## User Personas
1. **Homeowners** - Need routine or deep cleaning services
2. **Property Managers** - Manage multiple properties, need reliable service
3. **Airbnb Hosts** - Require fast turnover cleaning between guests
4. **Business Owners** - Need professional commercial cleaning

## Website Structure

### Pages Implemented
1. **Home Page** (`/`)
   - Hero section with gradient background
   - Services overview with images
   - "Why Choose Us" section with 4 key benefits
   - Customer testimonials preview
   - Multiple CTAs (Request Quote, Call Now)

2. **About Page** (`/about`)
   - Company introduction and mission
   - Team photo
   - 4 core values (Experience, Attention to Detail, Reliability, Trustworthiness)
   - Commitment statement

3. **Services Page** (`/services`)
   - Detailed service descriptions with images
   - Feature lists for each service
   - "Why Book With Us" section
   - CTA to contact form

4. **Reviews Page** (`/reviews`)
   - Large rating display (4.6 stars)
   - 8 customer testimonials with ratings
   - Stats section (80+ customers, 4.6 rating, 100% satisfaction focus)
   - Customer highlights

5. **Contact Page** (`/contact`)
   - Quote request form (name, email, phone, service, message)
   - Contact information cards (phone, hours, location)
   - Quick response guarantee
   - Rating badge

## Design System (Green-ai Guidelines)

### Colors
- **Backgrounds**: Clean white (#FFFFFF)
- **Text**: Dark green primary (rgb(0, 55, 32)), body text (rgb(14, 15, 12))
- **Accent**: Green (#8FEC78, #81DD67)
- **Hero Gradient**: Radial gradients with yellow/green/orange tones

### Typography
- **Font**: System fonts (system-ui, -apple-system, BlinkMacSystemFont)
- **Headings**: Responsive sizing with clamp()
- **Line heights**: Tight for headings (0.9-1.2), relaxed for body (1.5-1.6)

### Components
- **Buttons**: Pill-shaped (border-radius: 9999px), green gradient for primary
- **Cards**: White background, subtle borders, hover lift effects
- **Navigation**: Fixed floating header with blur backdrop
- **Images**: Professional cleaning service photos from Unsplash/Pexels

## What's Been Implemented (Phase 1 - Frontend Only)
**Date**: April 9, 2026

### ✅ Completed
1. Complete 5-page website structure with React Router
2. Responsive design (mobile, tablet, desktop)
3. Professional images integrated (6 high-quality images)
4. Mock data system (testimonials, services, business info)
5. Contact form with frontend validation (stores to mock.js)
6. Clean, modern design following Green-ai guidelines
7. Accessibility features (keyboard navigation, focus states)
8. Performance optimizations (system fonts, CSS-only animations)

### 📝 Current State
- Frontend is fully functional with mock data
- All pages load correctly with proper navigation
- Contact form submissions save to mock data array
- Design is professional, clean, and conversion-optimized
- Mobile-responsive with hamburger menu
- All CTAs prominently placed throughout the site

## Prioritized Backlog

### P0 Features (Next Phase - Backend Integration)
1. **Database Setup**
   - MongoDB models for contact form submissions
   - Store customer inquiries with timestamps

2. **Contact Form Backend**
   - POST `/api/contact` endpoint to save form submissions
   - Email notification system (optional - requires email service integration)
   - Admin panel to view submissions

3. **Testing**
   - End-to-end testing with testing agent
   - Form submission validation
   - API endpoint testing

### P1 Features (Future Enhancements)
1. **Testimonials Management**
   - Admin panel to add/edit/delete testimonials
   - Display real customer reviews from database

2. **Booking System**
   - Service selection with date/time picker
   - Price calculator based on service type
   - Booking confirmation emails

3. **SEO Optimization**
   - Meta tags for all pages
   - Sitemap generation
   - Local SEO for "cleaning services near me"

### P2 Features (Nice to Have)
1. Service area map integration
2. Before/after photo gallery
3. Live chat widget
4. Blog section for cleaning tips
5. Customer portal for scheduling

## Next Tasks
1. ✅ User confirmation to proceed with backend development
2. Build backend API endpoints for contact form
3. Integrate frontend with backend (remove mock.js)
4. Test full-stack functionality with testing agent
5. Deploy and optimize for production

## Technical Stack
- **Frontend**: React 19, React Router 7, Tailwind CSS, Shadcn UI components
- **Backend**: FastAPI (Python), MongoDB
- **Design**: Green-ai design system, responsive, mobile-first
- **Images**: Unsplash & Pexels (professional stock photos)

## Success Metrics (Goals)
- Generate qualified leads through contact form
- Build trust through reviews and professional design
- Achieve high conversion rate (visitors to quote requests)
- Mobile-friendly experience (50%+ mobile traffic expected)
- Fast page load times (<3 seconds)