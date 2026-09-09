# Repository Guidelines

## Project Structure & Module Organization

This portfolio frontend uses Next.js 15 App Router, React 19, TypeScript, and Tailwind CSS 4.

- `src/app/layout.tsx` wraps the home page with the theme provider, navbar, and footer. `src/app/page.tsx` renders `src/app/about.tsx`; `about.tsx` is a component, not an `/about` route. Follow App Router folder conventions when adding routes.
- `src/components/` contains `Navbar.tsx`, `Footer.tsx`, `ThemeToggle.tsx`, and `EmailButton.tsx`. The email button copies the address to the clipboard and displays a tooltip.
- `src/providers/ThemeProvider.tsx` reads the `theme` cookie or falls back to the system preference on mount, applies a class to `<html>`, and saves toggles in a cookie for 365 days. `public/js/theme-preload.js` applies the initial dark class before hydration via the layout's `beforeInteractive` script.
- `public/` contains `Middleton_Jacob_resume.pdf`, `favicon.ico`, and `js/theme-preload.js`. The current download link in `about.tsx` uses `/Middleton_Jacob_Resume.pdf`; this capitalization differs from the asset filename and should be checked on case-sensitive hosts.
- `src/app/globals.css` imports Tailwind and defines the light/dark CSS variables. `postcss.config.mjs` uses `@tailwindcss/postcss`. A `tailwind.config.mjs` exists, but the stylesheet has no `@config` directive referencing it; do not assume its custom utilities are active. Treat `.next/` and `node_modules/` as generated directories.

## Build, Test, and Development Commands

Use npm with the committed `package-lock.json`:

- `npm ci`: install dependencies from the lockfile.
- `npm run dev`: start the Turbopack development server at `http://localhost:3000`.
- `npm run build`: create a production build using Turbopack.
- `npm start`: serve the production build after building.
- `npm run lint`: run ESLint with Next.js Core Web Vitals and TypeScript rules.

## Coding Style & Naming Conventions

Use TypeScript with strict typing, functional React components, two-space indentation, double quotes, and semicolons. Match surrounding formatting; no dedicated formatter is configured. Use PascalCase for component files and exports, camelCase for functions and variables, and `@/` imports for modules under `src/`. Keep framework filenames such as `page.tsx` and `layout.tsx` lowercase. Add `"use client"` to components requiring client hooks or browser interactions. Prefer Tailwind utilities and existing theme variables for styling.

## Validation Expectations

No automated test framework, `npm test` script, or coverage threshold is configured. Run `npm run lint` and `npm run build` for code changes. Manually verify affected UI on desktop and mobile, including the hamburger menu, external links, email copying and tooltip, resume download, keyboard access, and theme persistence after reload. Keep theme provider and preload behavior consistent; check the system-preference fallback without a theme cookie and check for hydration warnings. For documentation-only changes, review accuracy and whitespace. Report checks performed and any failures or checks not run.

## Commit & Pull Request Guidelines

Use concise descriptive commit subjects and focused changes; history includes issue-style branches such as `jmdev-39`. PRs should explain purpose, link related issues, record validation, and include screenshots for UI changes.

## Git Safety

Check `git status` before editing; preserve existing user changes. Review the final diff and untracked files. Do not commit or push unless requested. Do not reset, clean, discard changes, rewrite history, or force-push without explicit authorization. Stage only intended files when authorized; exclude generated output.

## Secrets & Configuration

Keep credentials in local environment files; `.env*` and `*.pem` are ignored. Never commit secrets or expose them in logs, screenshots, source, or `public/`. Treat `NEXT_PUBLIC_*` values as public browser data. Use placeholders in documentation. Do not add dependencies without task authorization.
