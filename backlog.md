### 🔴 P1 — Bugs & Broken Things

**1. Fix missing `phoneMin` validation key in all locales**
The contact form schema references `t('contact.validation.phoneMin')` but this key doesn't exist in any locale file. Silent validation failure.

**2. Fix wrong icon for Phone in `contactLinks`**
`src/data/socials.ts` uses the `Mail` icon for the Phone entry. Import and use `Phone` from lucide-react.

**3. Complete incomplete locale files (fr, it, zh)**
French, Italian and Chinese are missing: `nav.blog`, `nav.testimonials`, `nav.timeline`, the entire `timeline` section, `blog` section, `testimonials` section, `about.languagesTitle`, `contact.validation`, and `footer.downloadResume`. Fallback silently shows raw keys.

---

### 🟠 P2 — Content Alignment (Web Developer Focus)

**4. Rebalance skills data toward web development**
Flutter and Dart are marked as `EXPERT` and lead the skills list. Since you're focusing on web, TypeScript, React, Next.js and Node.js should be elevated. Flutter/Dart can be removed or placed at a lower level/separate category.

**5. Reorder and reframe projects toward web**
The Flutter mobile projects (project_04) are featured alongside web projects. Reorder to lead with web projects (Next.js, Laravel API, Vue). Consider adding a note or category label to distinguish web vs. mobile.

**6. Update personal `description` and `bio` to reflect web focus**
Both still lead with "Flutter and Laravel." The pitch should lead with TypeScript, React, Next.js given the career direction.

---

### 🟡 P3 — Duplicate & Dead Code

**7. Remove duplicate `translate` function**
The exact same function is defined in both `src/hooks/useData.ts` and `src/hooks/useTranslatedContent.ts`. One should be the single source of truth, and the other should import from it.

**8. Remove `isLoaded` state from `Header`**
`setIsLoaded(true)` is called in `useEffect` but `isLoaded` is never read or used anywhere in the component. Dead code.

**9. Remove useless `useMemo(() => personal, [personal])` in `About.tsx`**
`const personalInfo = useMemo(() => personal, [personal])` does nothing — it memoizes an already-memoized value and returns it as-is. Just use `personal` directly.

**10. Consolidate social media data — remove `src/data/socials.ts`**
`src/data/socials.ts` duplicates social links already defined in `src/data/personal.ts` (`contactInfo.socialMedia`). `Contact.tsx` and `Hero.tsx` consume from `socials.ts` while `usePersonalData` exposes the same data from `personal.ts`. One source of truth is enough.

---

### 🟡 P4 — Overengineering & Architecture

**11. Fix broken generic typing — eliminate `as unknown as Translated*` casts**
`Testimonials.tsx`, `Timeline.tsx`, and `Projects.tsx` all do `testimonial as unknown as TranslatedTestimonial`. This means the translation hooks return `any`-like types. The `useTranslatedData` generic should be typed so the translator's return type flows correctly, eliminating all forced casts.

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
