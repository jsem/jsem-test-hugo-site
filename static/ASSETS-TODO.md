# Images & content still to provide

Most branding is now in place (real van photo, brand colours and fonts sampled from the
van livery). The items below still use placeholders. To swap the real thing in, drop a file
at the path shown (keep the same filename), no code changes needed.

| What | Status | Where |
|------|--------|-------|
| **Hero / van photo** | Done | `static/images/prancing-paws-van.jpg` (swap the file to update it) |
| **Gallery photos** | Done | Real photos supplied, optimised into `static/images/gallery/`, grouped into "Everyday grooms" and "Breed & show grooms" in `data/gallery.yaml`. Full-size originals kept in `_originals/gallery/` (not published). The van photo was cropped to remove the old Jim's franchise branding. |
| **Customer reviews** | Sample data | `data/reviews.yaml` currently holds 6 TEST testimonials. Replace with genuine reviews before launch. |
| **Prices** | Optional | Add a `price:` to any tier in `data/services.yaml` (e.g. `price: "from $75"`). Left blank, each service shows “Enquire for a quote”. |
| **Logo file** | Optional | The header uses a styled “Prancing Paws” wordmark. If Lisa has a transparent PNG/SVG logo, we can use it instead. |

Tip: resize photos to roughly the sizes above and save as JPG before uploading so pages stay fast.
