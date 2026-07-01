# Images & content Lisa still needs to provide

Everything below currently shows a tasteful placeholder. To swap in the real thing,
just drop a file at the path shown (keep the same filename) — no code changes needed.

| What | Drop the file here | Suggested size | Notes |
|------|--------------------|----------------|-------|
| **Hero background** | `static/images/hero-scotties.jpg` | 1600×900px, landscape | Posed, happy Scotties works well. After adding, change the one line in `content/_index.md` (`hero.image`) from `.svg` to `.jpg`. |
| **Van / team photo** | `static/images/van.jpg` | 640×480px | Then change `images/van.svg` → `images/van.jpg` in `layouts/partials/sections/about.html`. |
| **Business logo** | `static/images/logo.svg` (or `.png`) | — | Optional. The header currently uses a paw + text logo. |
| **Gallery photos** | `static/images/gallery/` | ~800×800px, square | Add the files, then list them in `data/gallery.yaml` (image path + caption). Delete the placeholder entries. |

## Text still to come from Lisa

- **Customer reviews** → add to `data/reviews.yaml` (quote, name, suburb).
- **Prices** (optional) → add a `price:` to any tier in `data/services.yaml`
  (e.g. `price: "from $75"`). Left blank, each service shows “Enquire for a quote”.

Tip: photos load faster if you save them as JPG (photos) or keep SVG (graphics), and
resize them to roughly the sizes above before uploading.
