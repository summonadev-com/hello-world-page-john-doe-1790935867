---
status: implemented
title: Hello World Page
---

1. Create the app entry point at `src/main.tsx` that mounts React into the page root, sets up the TanStack Router instance from the generated route tree, and imports the single stylesheet once.
   - Expected outcome: the app boots in the browser with routing active.

2. Create `src/styles/global.css` containing exactly the Tailwind v4 import line.
   - Expected outcome: Tailwind utility classes work anywhere in the app.

3. Create `index.html` at the project root with a root container element and a script reference to the entry point.
   - Expected outcome: Vite can serve and build the app.

4. Create `vite.config.ts` wiring the TanStack Router Vite plugin, the React plugin, the Tailwind CSS v4 Vite plugin, and the `@/` alias pointing at `src/`.
   - Expected outcome: routes are auto-generated, styles compile, and `@/` imports resolve.

5. Add `package.json` and `tsconfig.json` with the dependencies for React, TanStack Router, Tailwind v4, Vite, and TypeScript, plus the matching `@/` path mapping.
   - Expected outcome: `npm install` and `npm run dev` work; TypeScript resolves aliases.

6. Create the app shell route at `src/routes/__root.tsx` rendering a minimal full-height page container with an outlet for child routes.
   - Expected outcome: every page renders inside a consistent centered layout.

7. Create the home route at `src/routes/index.tsx` showing a large centered "Hello, world!" heading with a short subtitle, styled with Tailwind (soft background, bold heading, muted subtitle).
   - Expected outcome: visiting the site root shows a clean, centered Hello World page.

8. Verify the page renders at the root URL and the generated route tree file `src/routeTree.gen.ts` is produced automatically (never edited by hand).
   - Expected outcome: the page loads with no console errors.
