# FIX AI LP implementation guide

- `requirements_definition.md` is the source of truth. Do not delete, replace, or edit it.
- Use Vite, React, strict TypeScript, Tailwind CSS, and only the minimum shadcn-style UI required.
- Do not add routing, APIs, authentication, a backend, Storybook, speculative URLs, or CTA navigation.
- Keep source file names lowercase kebab-case and React component identifiers PascalCase.
- Keep repeated content in `src/data/landing-page.ts`.
- Preserve semantic HTML, keyboard access, visible focus, sufficient contrast, and reduced-motion support.
- Verify changes with `npm run validate` and, when browser dependencies are available, `npm run test:e2e`.
- Only one implementation agent may write at a time. Review agents remain read-only.
