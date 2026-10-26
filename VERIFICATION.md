# Verification — 26 October 2026

**ANVA GitHub Software Shelf is ready for manual GitHub upload. No GitHub deployment or production website changes were performed.**

## Scope and facts

Only Folio and Character Paper are showcased. The owner confirmed the existing Folio finance app; the brief's Markdown/document description was intentionally omitted. Features are conservative summaries of the approved official product pages and genuine screenshots. No unverified capabilities, release dates, testimonials, client content or unfinished projects were added. Public repository access was independently verified; the portfolio labels the links “Source on GitHub” without inferring a license.

## Link checks

Unauthenticated, read-only requests verified both public GitHub repositories, published non-draft/non-prerelease release records, both official ANVA product pages (HTTP200), and all four exact download links (HTTP200 after redirects on HEAD). No installer was downloaded or executed. Character Paper's differing package versions were preserved intentionally. No GitHub login, writes or configuration occurred.

### Folio

Official product: https://anvastudio.in/products/folio

Public source: https://github.com/anva-studio/Folio

- https://github.com/anva-studio/Folio/releases/download/v1.0.0/Folio-1.0.0.Android.apk — HEAD200; asset listed in the published release.
- https://github.com/anva-studio/Folio/releases/download/v1.0.0/Folio-Setup-1.0.0-Windows-x64.exe — HEAD200; asset listed in the published release.
### Character-Paper

Official product: https://anvastudio.in/products/character-paper

Public source: https://github.com/anva-studio/Character-Paper

- https://github.com/anva-studio/Character-Paper/releases/download/V1.0.2/Character-Paper-1.0.3.apk — HEAD200; asset listed in the published release.
- https://github.com/anva-studio/Character-Paper/releases/download/V1.0.2/Character-Paper-Setup-1.0.2-x64.exe — HEAD200; asset listed in the published release.

## Local QA

- Real loopback static HTTP server; buildless HTML, CSS and JavaScript.
- Desktop1440×1000, tablet768×1024, portrait390×844 and320×740, in both light and dark themes. No horizontal overflow; no broken images. All five displayed images loaded successfully.
- Theme activated with keyboard Enter; choice survives a reload. Ten deterministic tests cover first-visit system preference, explicit/invalid preferences, blocked storage, early palette selection and the toggle.
- Working shelf-index anchors checked against their actual section destinations. Meaningful headings, skip link, image alt text, visible keyboard focus and native anchor/download controls reviewed. Mobile download targets48px tall; theme target44px. No global swipe, wheel or click interception exists.
- CSS parser recognizes the reduced-motion rules: no entrance animation, transitions or smooth scrolling under prefers-reduced-motion:reduce. The physical OS preference was not manually toggled; a physical phone/touchscreen was not used. Browser mobile-size checks do not substitute for physical-device testing.
- No captured console errors/warnings during local checks. JavaScript syntax check passed; CSS braces balanced. Every document-relative file reference and internal anchor resolves case-correctly. Image display aspect ratios and copied asset SHA256 hashes verified.
- Artwork was not resized, recompressed or re-encoded. No remote fonts, framework, build service, Cloudflare configuration, CMS, analytics or credentials. Content and links remain in the HTML without JavaScript.
- Relative paths have no user-site or repository-base assumption. No /Website/ links, local machine paths, localhost references or placeholder anchors in runtime website files. Local preview instructions alone use loopback URLs.

## Remaining limits and maintenance

Download availability is a point-in-time check; GitHub release assets may change later. Downloaded application execution, physical devices and cross-browser Safari/Firefox testing were not performed. No blocking local issue remains. The final portfolio URL is not invented: no portfolio canonical URL or absolute OG image URL is supplied until that address is known. See README.md for root-level manual upload and future product maintenance.

Screenshots, raw link records and executable QA checks remain in the separate local ANVA-GitHub-Portfolio-QA directory; they are not needed for publishing and are excluded from the ZIP. The finished directory contains only static site files and its short handoff documents.
