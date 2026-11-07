# infinity-import-export.de

Static website for Infinity Import Export, served by GitHub Pages. Plain HTML, CSS and JavaScript: no framework and no build step. Edit a file, push, and the site updates.

## Pages

| File | Page |
| --- | --- |
| `index.html` | Home: pack shelf, the two ranges, buyers, order steps |
| `products.html` | Product catalogue with filters and a quick view |
| `about.html` | How we work, checks, documents, private label |
| `contact.html` | Inquiry form (sends the inquiry by email through Web3Forms) |
| `impressum.html` | Legal notice. **Fill in the yellow fields before going live.** |
| `datenschutz.html` | Privacy policy. **Fill in the yellow fields before going live.** |

Header and footer are repeated in every page. If you change a menu link, change it in all six files.

## Where to change things

- **Products:** `assets/js/products.js`. Each product has an id, range (`preserved` / `iqf`), type, pack formats and English + German text. To show a photo instead of the drawing, put it in `assets/img/products/` and set `img: "assets/img/products/name.jpg"`. Photos are shown cropped to fit, so any size or shape works; keep them under about 900 px on the long side so pages load fast.
- **Photos:** the site uses the resized copies in `assets/img/products/`. The originals in `assets/img/iqf-frozen/` are not used by any page.
- **German text:** `assets/js/i18n.js` → `DICT.de`. English text is written directly in the HTML; each translated element has `data-i18n="key"` and the matching German string uses the same key.
- **Email address:** search all files for `info@infinity-import-export.de`.
- **Inquiry form:** the form posts to [Web3Forms](https://web3forms.com), which emails each inquiry to the address the access key was created for. The key is the hidden `access_key` field near the top of the form in `contact.html` (Web3Forms keys are meant to be public). While it still says `YOUR_WEB3FORMS_ACCESS_KEY`, the form falls back to opening the visitor's own email program. To send inquiries to a different address, create a new key for that address at web3forms.com.
- **Phone:** `+49 157 58266399` appears in `contact.html` and `impressum.html`.
- **After changing CSS or JS:** raise the `?v=2` number on the `site.css` / `.js` links in all six HTML files (e.g. to `?v=3`), so phones load the new files instead of a cached copy.
- **Colours and fonts:** variables at the top of `assets/css/site.css` (brand greens, olive for the preserved range, frost blue for IQF).
- **Pack drawings:** `assets/img/packs.svg` (one `<symbol>` per pack). Don't put two hyphens in a row inside an XML comment in that file, or no drawing will render.

## Notes

- The font (Archivo) is self-hosted in `assets/fonts/` instead of loaded from Google, which German courts have treated as a GDPR problem.
- `.nojekyll` tells GitHub Pages to serve the files as they are. `_config.yml` is no longer used.
- Preview locally: `python3 -m http.server` in this folder, then open http://localhost:8000.
