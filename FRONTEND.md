# Frontend Design & UI/UX Rules for Cursor AI Assistant

You should treat this as a long-term frontend operating system — not just “design tips.”
The goal is:

* modern UI
* premium feel
* scalable design decisions
* consistency across projects
* fast development with AI
* industry-standard UX patterns
* clean developer experience

Use this document as your permanent frontend framework for all future projects.

---

# Core Philosophy

## 1. Build Systems, Not Screens

Never design isolated pages.

Every UI must feel like it belongs to a larger design system.

That means:

* reusable components
* consistent spacing
* predictable typography
* reusable layout patterns
* shared interaction behaviors
* shared color logic
* shared animation principles

Avoid random styling decisions.

---

# Tech Stack Rules

## 2. Default Frontend Stack

### Web Apps

Always prefer:

* React / Next.js
* TailwindCSS
* shadcn/ui
* motion.dev (or Framer Motion)
* Lucide icons
* React Hook Form
* Zod validation
* TanStack Query
* Zustand (light state)
* TypeScript

---

## 3. React Native Stack

For mobile apps:

* React Native
* Expo (unless native modules are required)
* NativeWind
* React Native Reanimated
* React Navigation
* TypeScript

Avoid heavy UI libraries unless absolutely necessary.

---

# Design System Rules

## 4. Component-First Development

Always build UI from reusable components.

Never repeat raw UI structures multiple times.

Preferred structure:

* primitives
* shared components
* feature components
* page sections
* full pages

Example:

* Button
* Input
* Modal
* Card
* Table
* EmptyState
* DashboardShell
* PricingCard
* StatCard

Every project should evolve into a reusable internal UI library.

---

## 5. Use shadcn/ui Whenever Possible

Default to shadcn components before building custom ones.

Benefits:

* accessibility
* consistency
* speed
* modern patterns
* composability

Customize them to fit the product brand.

Do NOT leave apps looking like default shadcn templates.

---

# Typography Rules

## 6. Strict Typography System

Typography creates professionalism more than colors.

Never randomly choose text sizes.

Use a strict scale.

Recommended scale:

* text-xs
* text-sm
* text-base
* text-lg
* text-xl
* text-2xl
* text-4xl
* text-5xl

Rules:

* one primary font
* maximum two fonts
* avoid decorative fonts
* maintain consistent font weights
* use line-height generously

Recommended fonts:

* Inter
* Geist
* Satoshi
* Plus Jakarta Sans
* General Sans

---

## 7. Visual Hierarchy Is Mandatory

Every screen must clearly communicate:

1. primary action
2. secondary action
3. supporting information

Use:

* size
* spacing
* contrast
* opacity
* borders
* font weight

Do NOT rely only on colors.

---

# Color Rules

## 8. Limit Color Palette

Use:

* 1 primary color
* 1 accent color
* neutrals
* semantic colors

Avoid rainbow UI.

Premium products usually use restrained color systems.

---

## 9. Prefer Neutral-Heavy Interfaces

Use neutrals for:

* surfaces
* cards
* layouts
* containers

Use brand colors sparingly:

* CTAs
* highlights
* active states
* charts

This creates modern SaaS aesthetics.

---

# Spacing & Layout

## 10. Use the 8px Spacing System

All spacing should be multiples of 4 or 8.

Examples:

* p-2
* p-4
* p-6
* p-8
* gap-4
* gap-6
* gap-8

Avoid random values.

Consistency creates polish.

---

## 11. Prioritize Whitespace

Whitespace is not wasted space.

Crowded interfaces look amateur.

Use generous:

* padding
* margins
* section spacing
* breathing room

Rule:
If a screen feels crowded, increase spacing before changing colors.

---

## 12. Respect Layout Containers

Never let content stretch endlessly.

Use max-width containers:

* max-w-7xl
* max-w-5xl
* max-w-3xl

Readable interfaces feel premium.

---

# Modern UI Rules

## 13. Prefer Minimalism Over Decoration

Avoid:

* excessive gradients
* heavy shadows
* too many borders
* noisy backgrounds
* glassmorphism everywhere

Modern premium UI is:

* clean
* restrained
* focused

---

## 14. Use Depth Carefully

Use subtle:

* shadows
* borders
* blur
* elevation

Do not overdo effects.

A little depth > excessive visual noise.

---

## 15. Design for Real Content

Never design only with placeholder text.

Think about:

* empty states
* long names
* huge tables
* loading states
* errors
* missing images
* mobile constraints

Real-world robustness is part of great UX.

---

# Responsiveness Rules

## 16. Mobile-First Always

Start with mobile layouts first.

Then scale upward.

Avoid designing desktop first.

---

## 17. Let AI Handle Responsiveness — But Verify

AI can generate responsive layouts quickly, but:

* check spacing manually
* check overflow
* verify typography scaling
* verify tap targets
* verify navbar behavior

Never trust responsiveness blindly.

---

## 18. Avoid Complex Breakpoint Logic

Prefer:

* flex
* grid
* wrapping
* stacking

Over:

* excessive breakpoint overrides

Responsive simplicity scales better.

---

# Animation Rules

## 19. Use Motion Intentionally

Animations should:

* guide attention
* improve clarity
* communicate state
* improve perceived performance

Avoid animations that exist only for decoration.

---

## 20. Standard Animation Rules

Preferred animation style:

* fast
* smooth
* subtle

Recommended durations:

* 150ms
* 200ms
* 300ms

Avoid slow animations.

---

## 21. Animate These Things

Good candidates:

* modals
* dropdowns
* page transitions
* hover states
* accordions
* loading skeletons
* sidebar expansion
* notifications

Avoid animating everything.

---

# UX Rules

## 22. Reduce Cognitive Load

Users should not think too hard.

Avoid:

* too many actions
* too many colors
* too many cards
* too much text
* overly complex navigation

Clarity beats creativity.

---

## 23. One Primary Action Per Section

Every screen should have a dominant action.

Example:

* Create Project
* Continue
* Publish
* Save
* Upgrade

Avoid competing CTAs.

---

## 24. Accessibility Is Mandatory

Always:

* use semantic HTML
* ensure keyboard navigation
* maintain color contrast
* use proper labels
* use focus states
* support screen readers

Accessibility improves product quality.

---

# Dashboard Rules

## 25. Dashboards Must Prioritize Information Hierarchy

Order:

1. key metrics
2. important actions
3. secondary analytics
4. supporting content

Do not overload dashboards.

---

## 26. Avoid Excessive Cards

New designers overuse cards.

Instead:

* group related content
* simplify layouts
* reduce unnecessary containers

Too many cards create noise.

---

# Forms Rules

## 27. Forms Must Feel Effortless

Rules:

* minimal fields
* clear labels
* inline validation
* helpful placeholders
* proper spacing
* clear success/error states

Long forms should use:

* steps
* sections
* progress indicators

---

# Table Rules

## 28. Tables Must Be Readable

Rules:

* zebra striping optional
* avoid dense spacing
* sticky headers when necessary
* actions grouped consistently
* search + filters always accessible

Mobile tables should transform intelligently.

---

# Empty & Loading States

## 29. Never Leave Dead Space

Always design:

* empty states
* skeleton loaders
* onboarding states
* no-results states
* error states

Polished products handle edge states beautifully.

---

# AI-Specific Instructions

## 30. AI Must Avoid Generic Template UI

Avoid:

* obvious template layouts
* repetitive hero sections
* overused gradients
* generic startup illustrations

Aim for:

* refined spacing
* premium typography
* thoughtful hierarchy
* modern interaction design

---

## 31. AI Must Reuse Existing Patterns

Before creating new UI:

1. inspect current patterns
2. reuse existing spacing
3. reuse existing typography
4. reuse existing components

Consistency > novelty.

---

## 32. AI Should Prioritize Maintainability

Prefer:

* clean Tailwind
* reusable variants
* composable components
* semantic naming

Avoid:

* huge JSX files
* repeated class names
* deeply nested structures

---

# Tailwind Rules

## 33. Tailwind Standards

Prefer:

* utility composition
* cn() helpers
* cva() variants

Avoid:

* massive inline class chaos
* arbitrary values everywhere
* inconsistent spacing

---

## 34. Use Design Tokens

Centralize:

* colors
* spacing
* radii
* shadows
* typography

Avoid hardcoding design decisions repeatedly.

---

# Premium Feel Rules

## 35. Premium UI Comes From:

* spacing
* typography
* restraint
* consistency
* motion
* hierarchy

NOT from:

* excessive effects
* random gradients
* too many colors
* visual overload

---

# Product Thinking Rules

## 36. Always Think Like a Product Designer

Before building any screen, ask:

* What is the user's goal?
* What is the fastest path?
* What information matters most?
* What can be removed?
* What action should stand out?

---

# Final Non-Negotiable Rules

## 37. Every Interface Must Be:

* responsive
* accessible
* scalable
* modern
* clean
* performant
* maintainable

---

## 38. Simplicity Is a Competitive Advantage

Do not confuse complexity with sophistication.

The best modern products feel:

* obvious
* calm
* fast
* focused

---

## 39. Always Optimize for Production Quality

Every UI should look:

* startup-ready
* investor-ready
* App Store-ready
* enterprise-capable

Never ship “AI-looking” interfaces.

---

## 40. Default Visual Direction

Target aesthetic:

* Linear
* Stripe
* Notion
* Vercel
* Raycast
* Arc Browser
* Airbnb
* Framer

Clean, modern, restrained, premium.
