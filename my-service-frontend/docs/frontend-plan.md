# Frontend Roadmap: Vercel-like Dashboard (Next.js + TS + Tailwind v4)

This plan outlines a step-by-step path to build a Vercel-style dashboard using Next.js App Router, TypeScript, and Tailwind CSS v4. We will iterate from an app shell to fully functional pages and components with strong DX and quality gates.

## 1) Architecture & Foundations
- Next.js 15 App Router under `src/app`
- TypeScript strict mode
- Tailwind v4 with `@import "tailwindcss"` and `@theme inline` tokens in `globals.css`
- Global layout: sidebar + topbar, responsive, dark mode support
- Data layer placeholder: local mock JSON first; can swap for API later

Deliverables:
- `src/app/layout.tsx`: App shell with header/sidebar slots
- `src/app/(dashboard)/layout.tsx`: dashboard-scoped layout
- `src/components/ui/*`: design system primitives

## 2) Design tokens (Tailwind v4)
Define tokens with `@theme inline` in `globals.css` and optional `tailwind.config.ts` extensions.
- Colors: background, foreground, muted, card, primary, secondary, destructive, ring
- Typography: font-sans, font-mono, leading, tracking
- Radius, shadows, spacing scale

Deliverables:
- Updated `globals.css` tokens
- Verified dark mode vars

## 3) App Shell & Navigation
- Sidebar: Projects, Deployments, Analytics, Activity, Settings
- Topbar: search, account avatar, team switcher, theme toggle
- Mobile: collapsible sidebar, accessible focus management

Deliverables:
- `src/components/nav/Sidebar.tsx`, `Topbar.tsx`, `MobileNav.tsx`
- Keyboard navigation + ARIA roles

## 4) Core UI Components
- Button, Input, Select, Checkbox, Switch, Tabs, Dialog/Modal, DropdownMenu, Sheet/Drawer, Tooltip, Card, Table, Badge, Tag
- Use headless primitives (e.g., Radix) or simple a11y patterns; keep bundle small

Deliverables:
- `src/components/ui/*` with simple props and variants
- Story-like demo route at `/kitchen-sink`

## 5) Dashboard Pages
- `/dashboard` Overview: recent deployments, project list, activity feed
- `/projects`: grid/list, create project modal
- `/deployments`: table with status, filters, pagination
- `/analytics`: charts placeholder (e.g., recharts or charts.js later)
- `/activity`: feed grouped by date
- `/settings`: profile, team, billing tabs

Deliverables:
- Static pages with mock data
- Loading & empty states

## 6) Tables & Data Fetching
- Client components for filtering/sorting
- Server components for initial data fetch (mock JSON)
- Pagination (cursor-like mock)

Deliverables:
- `DataTable` with columns, sorting, filter input, skeletons

## 7) Forms & Modals
- Project creation, environment variables, team invite
- Zod for schemas, react-hook-form for forms

Deliverables:
- Validated forms with error states and toasts

## 8) Theming & Accessibility
- Theme toggle persists (localStorage), prefers-color-scheme fallback
- Focus outlines, reduced motion, proper contrast

Deliverables:
- `useTheme` hook
- a11y audit checklist

## 9) Quality Tooling
- ESLint rules tuned for Next + TS
- Prettier config (optional) and format script
- Husky + lint-staged pre-commit
- Bundle analyzer

Deliverables:
- Scripts in `package.json`
- Config files

## 10) Testing
- Vitest + React Testing Library for unit tests
- Playwright for smoke E2E (routing, navigation, forms)

Deliverables:
- Example unit tests for Button and DataTable
- E2E smoke: visit `/dashboard`, open project modal, submit form

## 11) Deployment-ready polish
- 404/500 pages
- Meta, Open Graph, favicons
- Lighthouse checks and minor perf wins (images, memoization)

---

## Milestone 1 (Day 1): Shell + Nav + Tokens
- Implement tokens, layouts, sidebar/topbar, basic pages routes stubs

## Milestone 2 (Day 2): UI Kit + Overview Page
- Build core UI components, overview with mocked data

## Milestone 3 (Day 3): Projects + Deployments
- DataTable, filters, modals, optimistic UI

## Milestone 4 (Day 4): Settings + Testing + QA
- Settings pages, tests, lint/type/build green

