# ANVA Software Shelf

A small, standalone collection of released ANVA applications: **Folio** (personal finance) and **Character Paper** (characters and writing). The owner confirmed Folio's finance identity; the Markdown description in the initial brief was not used.

## Preview locally

Open a terminal in this folder and run:

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Open `http://127.0.0.1:8000/`. Stop the server with Ctrl+C. Python is only an optional preview tool; the published site needs no server runtime, build process, package installation or environment variables. Opening index.html directly also displays the page, though storage behavior can vary for local files.

## Manual GitHub upload

Extract the ZIP. Upload **this folder's contents**, so `index.html`, `.nojekyll`, `css/`, `js/` and `assets/` sit at the repository publishing root. Do not upload only the ZIP or nest the whole folder one level below the publishing root. Include the hidden `.nojekyll` file.

Expected root-level GitHub Pages configuration: **Settings → Pages → Build and deployment → Deploy from a branch**, select the branch containing these files, then **/(root)**. No custom workflow is required by this package. Existing repository configuration is yours to review; this work did not change it.

Official guide: [Configure a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

All website asset paths are document-relative, so they also work beneath a repository subpath. No Cloudflare headers, CNAME file, credentials, GitHub Actions workflow or deployment tools are included. The official studio links point to https://anvastudio.in/ . A portfolio canonical URL is intentionally omitted until its final address is chosen.

## Add a genuinely released product

1. Confirm the release, public description, supported platforms and exact links with the owner. Nothing is discovered or added automatically.
2. Place approved, unmodified images in a new `assets/<product>/` directory. Record provenance and hashes in ASSETS.md. Do not recompress existing artwork.
3. In index.html, duplicate a clearly marked `PRODUCT START` / `PRODUCT END` article. Give it a unique section ID and heading ID, truthful copy, meaningful image alt text, correct image aspect ratios, official product link and verified downloads. Use the existing layouts as a starting point; extend styles.css only if the product needs its own identity.
4. Add a matching entry to `.shelf-index`, with the next number and working section link. Update the page description if needed.
5. Check mobile/desktop and both themes, links, image loading, keyboard focus and reduced motion; update VERIFICATION.md. Hand over a fresh static ZIP for manual upload.

Product content lives directly in semantic HTML, not JavaScript-generated cards. There is no generator to run and no data file to accidentally drift out of sync. Content, index links and downloads remain usable without JavaScript. JavaScript adds only theme preference and the current copyright year.

## Implementation

- `index.html`: semantic page and curated product information; early theme selection avoids an incorrect-palette flash.
- `css/styles.css`: authored cream/midnight palettes, responsive layouts, focus states and gentle motion. Reduced-motion preferences disable entrance animation, transitions and smooth scrolling.
- `js/main.js`: accessible keyboard-operable theme button, system preference on first visit and remembered explicit preference. Storage failures do not break the site.
- Local approved branding and product screenshots. Typography uses Georgia and installed system UI fonts; no font downloads or external services.

See **VERIFICATION.md** and **ASSETS.md** for checks and provenance. This package does not grant a new license to ANVA branding or application artwork; public repository visibility was verified separately and is not treated as a blanket license.

**ANVA GitHub Software Shelf is ready for manual GitHub upload. No GitHub deployment or production website changes were performed.**
