# ANVA

A static website for a tiny independent, AI-assisted studio. No build step, package installation, remote fonts, analytics, or third-party scripts.

## Pages
- `index.html`: studio entrance and product introduction
- `products.html`: the workbench catalogue
- `about.html`: studio story and How We Work, including privacy and user control
- `support.html`: coffee support and contact at `#contact`
- `products/folio.html` and `products/character-paper.html`: intentional Coming Soon pages
- `404.html`: custom error page

## Preview
From this folder, run `python -m http.server 8000`, then visit `http://localhost:8000`. Use any ordinary static HTTP server if Python is unavailable.

## Deploy
Commit the contents of this folder to the website repository. Configure GitHub Pages to serve the branch/folder containing `index.html`. `.nojekyll` enables straightforward static delivery. Document-relative links support a repository subpath as well as a custom domain. No CNAME or deployment-dependent canonical/Open Graph URL has been invented.

GitHub Pages serves the 404 page at the failed URL. Its self-contained error document works without external assets. It recovers navigation from the last visited site base, or uses the standard GitHub Pages repository path / custom-domain root for first visits. A first visit to a missing page on another host under an arbitrary subpath needs a hosting-specific base adjustment.

## Artwork and interaction
All seven original PNGs remain intact in `Images/`. Delivery uses 640, 1280, and 1920 pixel WebP derivatives in `assets/`. The first scene loads eagerly; later artwork is lazy-loaded. Product artwork is original CSS composition, not app screenshots. Fonts use the visitor’s system. JavaScript only enhances mobile navigation and 404 recovery. Navigation remains available without JavaScript.

## Later product release
Both products are Coming Soon. Add verified screenshots, real packaged downloads, actual source repository links, version information, release notes, and product-specific documentation/privacy information once the applications are ready. There are no simulated release actions.

## Official identity
The supplied dual-metal logo source is preserved in `assets/anva-logo-source.png`. The header uses a proportion-preserving 168px WebP displayed at 42px (36px on mobile), with ANVA beside it. Local ICO, 16px/32px PNG favicons and a 180px Apple touch icon use a crop of the original sun, moon, and shared star without lettering. The 404 embeds the small logo/favicon to remain independent of the missing URL depth.
