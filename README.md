# ANVA

A static website for a tiny independent, AI-assisted studio. No build step, package installation, remote fonts, analytics, or third-party scripts.

## Pages
- `index.html`: studio entrance and product introduction
- `products.html`: the workbench catalogue
- `about.html`: studio story and How We Work, including privacy and user control
- `support.html`: coffee support and contact at `#contact`
- `products/folio.html` and `products/character-paper.html`: released product pages
- `404.html`: custom error page

## Preview
From this folder, run `python -m http.server 8000`, then visit `http://localhost:8000`. Use any ordinary static HTTP server if Python is unavailable.

## Deploy
Commit the contents of this folder to the website repository. Configure GitHub Pages to serve the branch/folder containing `index.html`. `.nojekyll` enables straightforward static delivery. Document-relative links support a repository subpath as well as a custom domain. Canonical URLs use the supplied live ANVA address.

GitHub Pages serves the 404 page at the failed URL. Its self-contained error document works without external assets. It uses the known ANVA user-site root in production, and recovers the last visited local site base during subpath previews. A first visit to a missing page on another host under an arbitrary subpath needs a hosting-specific base adjustment.

## Artwork and interaction
All seven original PNGs remain intact in `Images/`. Delivery uses 640, 1280, and 1920 pixel WebP derivatives in `assets/`. The first scene loads eagerly; later artwork is lazy-loaded. Overview artwork retains its original CSS compositions; the detailed product pages use real supplied application screenshots. Fonts use the visitor’s system. JavaScript enhances navigation, theme selection, screenshot viewing, and 404 recovery. Navigation remains available without JavaScript.

## Product releases and themes
Both products are released, with direct Windows and Android download URLs and quiet canonical source links. No version numbers are presented in the visible page copy. Change release hrefs only when supplied with new verified URLs.

Themes are Midnight Studio and Cream Studio. A small synchronous inline initializer applies the saved `anva-theme` or system preference before styles load. Shared JavaScript handles the toggle, preference storage, and system changes until a user has selected a theme. Both themes are authored in the shared stylesheet.

Real app screenshots are served as readable WebP derivatives in `assets/screenshots/`; originals remain in `source/screenshots/`. Screenshot links open an accessible native dialog when JavaScript is available, or the image directly otherwise. Product claims were checked against the supplied release source; no bank sync, automatic payment matching, dedicated budget module, AI generation, collaboration, PDF, or Markdown-file export is advertised.

The live canonical website is https://anva-studio.github.io/ . Canonical links target the user-site root.

## Official identity
The supplied dual-metal logo source is preserved in `assets/anva-logo-source.png`. The header uses a proportion-preserving 168px WebP displayed at 42px (36px on mobile), with ANVA beside it. Local ICO, 16px/32px PNG favicons and a 180px Apple touch icon use a crop of the original sun, moon, and shared star without lettering. The 404 embeds the small logo/favicon to remain independent of the missing URL depth.
