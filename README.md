# Pearcedale Prancing Paws - Mobile Dog Grooming website

A fast, single-page marketing site built with [Hugo](https://gohugo.io). No external theme -
the whole look-and-feel lives in this repo, so there's nothing to break on Hugo upgrades.

- **Live host:** Netlify (auto-deploys on push to `main`)
- **Hugo version:** 0.163.3 **extended** (pinned in `netlify.toml`)

---

## Run it locally

```bash
hugo server
# open http://localhost:1313
```

Build a production copy into `public/`:

```bash
hugo --gc --minify
```

---

## Where to edit things

Everything editable is text - no need to touch the HTML/CSS for day-to-day updates.

| To change... | Edit this file |
|------------|----------------|
| Phone, email, hours, service area, tagline, socials | `hugo.toml` -> `[params]` |
| Homepage hero + welcome + about copy | `content/_index.md` |
| Services, what's included, prices, special breeds | `data/services.yaml` |
| Suburbs / service area list | `data/areas.yaml` |
| Customer reviews | `data/reviews.yaml` |
| Gallery photos & captions | `data/gallery.yaml` |
| Colours & fonts (design tokens) | top of `assets/css/main.css` (`:root`) |
| Navigation menu items | `hugo.toml` -> `[[menus.main]]` |

---

## Deploying

Netlify is already connected to this GitHub repo. Push to `main` and Netlify runs
`hugo --gc --minify` and publishes `public/`. The live domain is set in `hugo.toml` (`baseURL`).

### Contact

There's no contact form by design - the site directs enquiries to **call or email** directly.
Phone and email are set in `hugo.toml` -> `[params]`; the Contact section and header button use
`tel:` and `mailto:` links.
