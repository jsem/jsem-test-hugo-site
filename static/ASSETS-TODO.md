# Images & content still to provide

Most branding is now in place (real van photo, brand colours and fonts sampled from the
van livery). The items below still use placeholders. To swap the real thing in, drop a file
at the path shown (keep the same filename), no code changes needed.

| What | Status | Where |
|------|--------|-------|
| **Hero / van photo** | Done | `static/images/prancing-paws-van.jpg` (swap the file to update it) |
| **Gallery photos** | Placeholder | Add ~800×800px files to `static/images/gallery/`, then list them in `data/gallery.yaml` (image path + caption). Delete the placeholder entries. |
| **Customer reviews** | Placeholder | Add to `data/reviews.yaml` (quote, name, suburb). |
| **Prices** | Optional | Add a `price:` to any tier in `data/services.yaml` (e.g. `price: "from $75"`). Left blank, each service shows “Enquire for a quote”. |
| **Logo file** | Optional | The header uses a styled “Prancing Paws” wordmark. If Lisa has a transparent PNG/SVG logo, we can use it instead. |

Tip: resize photos to roughly the sizes above and save as JPG before uploading so pages stay fast.
