### 🟡 P4 — Overengineering & Architecture

**12. Inline repeated `Translated*` type definitions into their hooks**
`TranslatedBlogPost`, `TranslatedProject`, `TranslatedTimelineItem`, `TranslatedTestimonial` are all defined inline inside their respective component files. They should be derived types exported from the hooks or types files instead.

**13. Simplify `useLanguagesData` — remove unused utility methods**
`getRTLLanguages()`, `isLanguageSupported()`, `getSupportedLanguageCodes()`, and `getLanguageByCode()` are defined but never called anywhere in the app. Remove them.

**14. Fix `getSorted` causing unnecessary re-renders in `About.tsx`**
`getSorted` is defined inside `useSkillsData` as a plain function (not memoized), so `useMemo(() => getSorted('level'), [getSorted])` in `About.tsx` will recompute every render anyway. Either memoize `getSorted` inside the hook with `useCallback`, or just call it directly without `useMemo`.

**15. Make resume download language-aware**
`Hero.tsx` and `Footer/index.tsx` both hardcode `'/resume.pdf'` and `'Pedro_Paulo_Fernandes_Cardoso_Resume.pdf'`. The `contactInfo` in `personal.ts` already has per-language filenames defined — wire them up using the current language from `usePersonalData`.

---

### 🟢 P5 — Minor Clean Code

**16. Move `footerNavItems` outside the `Footer` component**
It's a static constant defined inside the component body, so it gets recreated on every render. Move it to module scope.

**17. Remove `usePersonalData`'s redundant `socials` return value**
The hook returns `{ personal, contact, socials }` where `socials` is just `contactInfo.socialMedia` — already accessible via `contact.socialMedia`. Redundant shorthand that adds confusion.

**18. Add more blog posts or remove the Blog section**
The entire `Blog` component, `BlogModal`, `useBlogData` hook, and all blog types exist to render exactly **one** post. Either add 2–3 real posts, or remove the section entirely until you have content for it. An empty-looking section harms the portfolio impression.

**19. Collapse `usePersonalData` and `useSkillsData` — they don't need to be separate hooks**
`About.tsx` imports both just to render one section. Since both are consumed together always, they could be one hook or simply imported directly from the data files with a single translation call at the component level.
