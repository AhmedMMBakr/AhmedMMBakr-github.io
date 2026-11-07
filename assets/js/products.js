/*
  Product catalogue — edit this file to change the range.

  PACKS: the pack formats drawn on the site (ids match symbols in assets/img/packs.svg).
    h / ar: drawing height and aspect ratio (don't change unless you change the drawing).

  PRODUCTS: one entry per product.
    id      unique, lowercase, no spaces (used in links: contact.html?p=<id>)
    range   "preserved", "iqf" or "dates"
    type    "artichokes" | "peppers" | "olives" | "vegetables" | "fruit"
    packs   list of pack ids from PACKS
    img     optional photo path, e.g. "assets/img/products/artichoke-hearts.jpg"
            (when set, the photo replaces the drawing on the product card)
    en / de name, cut (cut / grade), medium (packing medium), shelf (typical shelf life)
  Specifications are typical values and are confirmed per order.
*/
window.PACKS = {
  "jar-s":  { h: 84,  ar: "56 / 84",   en: "Glass jar 370 ml",        de: "Glas 370 ml" },
  "jar-l":  { h: 120, ar: "64 / 120",  en: "Glass jar 660 ml",        de: "Glas 660 ml" },
  "pouch":  { h: 120, ar: "84 / 120",  en: "Pouch 1–5 kg",            de: "Beutel 1–5 kg" },
  "tin":    { h: 124, ar: "104 / 124", en: "Tin 3 kg (A10)",          de: "Dose 3 kg (A10)" },
  "pail":   { h: 140, ar: "124 / 140", en: "Pail 5–10 kg",            de: "Eimer 5–10 kg" },
  "carton": { h: 112, ar: "160 / 112", en: "IQF carton 10 kg",        de: "TK-Karton 10 kg" },
  "drum":   { h: 160, ar: "110 / 160", en: "Bulk drum 120–220 kg",    de: "Fass 120–220 kg" },
  "box":    { en: "Retail box 250 g–1 kg",  de: "Schachtel 250 g–1 kg" },
  "date-carton": { en: "Carton 5 kg",       de: "Karton 5 kg" }
};

window.PRODUCTS = [
  /* Preserved — photos in assets/img/products/ */
  { id: "green-olives", range: "preserved", type: "olives", packs: ["jar-s", "jar-l", "tin", "pouch", "drum"], img: "assets/img/products/green-olives.jpg",
    en: { name: "Green olives, whole", cut: "Whole, with stone; sized per count/kg", medium: "Brine", shelf: "24 months (jar, tin), 12 months (drum)" },
    de: { name: "Grüne Oliven, ganz", cut: "Ganz, mit Stein; nach Stück/kg sortiert", medium: "Lake", shelf: "24 Monate (Glas, Dose), 12 Monate (Fass)" } },
  { id: "grilled-olives", range: "preserved", type: "olives", packs: ["jar-s", "jar-l", "tin", "pail"], img: "assets/img/products/grilled-olives.jpg",
    en: { name: "Grilled green olives in oil", cut: "Whole, grilled", medium: "Sunflower oil with herbs", shelf: "24 months, unopened" },
    de: { name: "Gegrillte grüne Oliven in Öl", cut: "Ganz, gegrillt", medium: "Sonnenblumenöl mit Kräutern", shelf: "24 Monate, ungeöffnet" } },
  { id: "stuffed-olives", range: "preserved", type: "olives", packs: ["jar-s", "jar-l", "tin"], img: "assets/img/products/stuffed-olives.jpg",
    en: { name: "Stuffed green olives", cut: "Pitted, stuffed with red pepper", medium: "Brine", shelf: "24 months, unopened" },
    de: { name: "Gefüllte grüne Oliven", cut: "Entsteint, mit roter Paprika gefüllt", medium: "Lake", shelf: "24 Monate, ungeöffnet" } },
  { id: "sliced-green-olives", range: "preserved", type: "olives", packs: ["jar-s", "tin", "pouch", "drum"], img: "assets/img/products/sliced-green-olives.jpg",
    en: { name: "Sliced green olives", cut: "Slices, for pizza, salads and sandwiches", medium: "Brine", shelf: "24 months (jar, tin), 12 months (drum)" },
    de: { name: "Grüne Olivenscheiben", cut: "Scheiben, für Pizza, Salate und Sandwiches", medium: "Lake", shelf: "24 Monate (Glas, Dose), 12 Monate (Fass)" } },
  { id: "black-olives", range: "preserved", type: "olives", packs: ["jar-s", "tin", "pouch"], img: "assets/img/products/black-olives.jpg",
    en: { name: "Black olives, pitted", cut: "Whole, pitted", medium: "Light brine", shelf: "24 months, unopened" },
    de: { name: "Schwarze Oliven, entsteint", cut: "Ganz, entsteint", medium: "Leichte Lake", shelf: "24 Monate, ungeöffnet" } },
  { id: "pickled-cucumbers", range: "preserved", type: "vegetables", packs: ["jar-s", "jar-l", "tin", "pail", "drum"], img: "assets/img/products/pickled-cucumbers.jpg",
    en: { name: "Pickled cucumbers", cut: "Whole or sliced; sized per count/jar", medium: "Brine with vinegar", shelf: "24 months (jar, tin), 12 months (drum)" },
    de: { name: "Essiggurken", cut: "Ganz oder in Scheiben; nach Stück/Glas sortiert", medium: "Lake mit Essig", shelf: "24 Monate (Glas, Dose), 12 Monate (Fass)" } },
  { id: "jalapeno-brine", range: "preserved", type: "peppers", packs: ["jar-s", "tin", "pouch", "drum"], img: "assets/img/products/jalapeno-brine.jpg",
    en: { name: "Green jalapeño slices in brine", cut: "Slices, 3–5 mm", medium: "Brine with vinegar", shelf: "24 months (jar, tin), 12 months (drum)" },
    de: { name: "Grüne Jalapeño-Scheiben in Lake", cut: "Scheiben, 3–5 mm", medium: "Lake mit Essig", shelf: "24 Monate (Glas, Dose), 12 Monate (Fass)" } },
  { id: "pepperoncini", range: "preserved", type: "peppers", packs: ["jar-l", "pouch", "drum"], img: "assets/img/products/pepperoncini.jpg",
    en: { name: "Pepperoncini in brine", cut: "Whole or sliced", medium: "Brine with vinegar", shelf: "24 months (jar), 12 months (drum)" },
    de: { name: "Pfefferoni in Lake", cut: "Ganz oder in Scheiben", medium: "Lake mit Essig", shelf: "24 Monate (Glas), 12 Monate (Fass)" } },
  { id: "pickled-lemons", range: "preserved", type: "fruit", packs: ["jar-l", "tin", "pail", "drum"], img: "assets/img/products/pickled-lemons.jpg",
    en: { name: "Pickled lemons", cut: "Whole or quartered", medium: "Salt brine", shelf: "24 months (jar, tin), 12 months (drum)" },
    de: { name: "Eingelegte Zitronen", cut: "Ganz oder geviertelt", medium: "Salzlake", shelf: "24 Monate (Glas, Dose), 12 Monate (Fass)" } },

  /* IQF frozen — photos in assets/img/products/ */
  { id: "iqf-artichokes", range: "iqf", type: "artichokes", packs: ["carton"], img: "assets/img/products/iqf-artichokes.jpg",
    en: { name: "IQF artichokes", cut: "Hearts, quarters or bottoms", medium: "Individually quick frozen", shelf: "24 months at −18 °C" },
    de: { name: "TK Artischocken (IQF)", cut: "Herzen, Viertel oder Böden", medium: "Einzeln schockgefroren", shelf: "24 Monate bei −18 °C" } },
  { id: "iqf-mixed-peppers", range: "iqf", type: "peppers", packs: ["carton"], img: "assets/img/products/iqf-mixed-peppers.jpg",
    en: { name: "IQF diced peppers, red, yellow and green", cut: "Diced 10×10 mm or strips; single colour or mixed", medium: "Individually quick frozen", shelf: "24 months at −18 °C" },
    de: { name: "TK Paprikawürfel, rot, gelb und grün (IQF)", cut: "Würfel 10×10 mm oder Streifen; einfarbig oder gemischt", medium: "Einzeln schockgefroren", shelf: "24 Monate bei −18 °C" } },
  { id: "iqf-broccoli", range: "iqf", type: "vegetables", packs: ["carton"], img: "assets/img/products/iqf-broccoli.jpg",
    en: { name: "IQF broccoli florets", cut: "Florets, 20–40 mm or 30–50 mm", medium: "Individually quick frozen", shelf: "24 months at −18 °C" },
    de: { name: "TK Brokkoliröschen (IQF)", cut: "Röschen, 20–40 mm oder 30–50 mm", medium: "Einzeln schockgefroren", shelf: "24 Monate bei −18 °C" } },
  { id: "iqf-cauliflower", range: "iqf", type: "vegetables", packs: ["carton"], img: "assets/img/products/iqf-cauliflower.jpg",
    en: { name: "IQF cauliflower florets", cut: "Florets, 20–40 mm or 30–50 mm", medium: "Individually quick frozen", shelf: "24 months at −18 °C" },
    de: { name: "TK Blumenkohlröschen (IQF)", cut: "Röschen, 20–40 mm oder 30–50 mm", medium: "Einzeln schockgefroren", shelf: "24 Monate bei −18 °C" } },
  { id: "iqf-sweet-corn", range: "iqf", type: "vegetables", packs: ["carton"], img: "assets/img/products/iqf-sweet-corn.jpg",
    en: { name: "IQF sweet corn", cut: "Kernels or cobs", medium: "Individually quick frozen", shelf: "24 months at −18 °C" },
    de: { name: "TK Zuckermais (IQF)", cut: "Körner oder Kolben", medium: "Einzeln schockgefroren", shelf: "24 Monate bei −18 °C" } },
  { id: "iqf-onions", range: "iqf", type: "vegetables", packs: ["carton"], img: "assets/img/products/iqf-onions.jpg",
    en: { name: "IQF onions", cut: "Diced or sliced", medium: "Individually quick frozen", shelf: "24 months at −18 °C" },
    de: { name: "TK Zwiebeln (IQF)", cut: "Gewürfelt oder in Ringen", medium: "Einzeln schockgefroren", shelf: "24 Monate bei −18 °C" } },
  { id: "iqf-sweet-potato", range: "iqf", type: "vegetables", packs: ["carton"], img: "assets/img/products/iqf-sweet-potato.jpg",
    en: { name: "IQF sweet potato", cut: "Diced or cut into fries", medium: "Individually quick frozen", shelf: "24 months at −18 °C" },
    de: { name: "TK Süßkartoffeln (IQF)", cut: "Gewürfelt oder als Pommes geschnitten", medium: "Einzeln schockgefroren", shelf: "24 Monate bei −18 °C" } },
  { id: "iqf-pumpkin", range: "iqf", type: "vegetables", packs: ["carton"], img: "assets/img/products/iqf-pumpkin.jpg",
    en: { name: "IQF pumpkin", cut: "Diced, peeled", medium: "Individually quick frozen", shelf: "24 months at −18 °C" },
    de: { name: "TK Kürbis (IQF)", cut: "Gewürfelt, geschält", medium: "Einzeln schockgefroren", shelf: "24 Monate bei −18 °C" } },
  { id: "iqf-molokhia", range: "iqf", type: "vegetables", packs: ["carton"], img: "assets/img/products/iqf-molokhia.jpg",
    en: { name: "IQF molokhia", cut: "Whole leaves or minced", medium: "Individually quick frozen", shelf: "24 months at −18 °C" },
    de: { name: "TK Molokhia (Muskraut)", cut: "Ganze Blätter oder gehackt", medium: "Einzeln schockgefroren", shelf: "24 Monate bei −18 °C" } },
  { id: "iqf-strawberries", range: "iqf", type: "fruit", packs: ["carton"], img: "assets/img/products/iqf-strawberries.jpg",
    en: { name: "IQF strawberries", cut: "Whole or diced", medium: "Individually quick frozen", shelf: "24 months at −18 °C" },
    de: { name: "TK Erdbeeren (IQF)", cut: "Ganz oder gewürfelt", medium: "Einzeln schockgefroren", shelf: "24 Monate bei −18 °C" } },
  { id: "iqf-mango", range: "iqf", type: "fruit", packs: ["carton"], img: "assets/img/products/iqf-mango.jpg",
    en: { name: "IQF mango", cut: "Chunks or diced", medium: "Individually quick frozen", shelf: "24 months at −18 °C" },
    de: { name: "TK Mango (IQF)", cut: "Stücke oder gewürfelt", medium: "Einzeln schockgefroren", shelf: "24 Monate bei −18 °C" } },
  { id: "iqf-pomegranate", range: "iqf", type: "fruit", packs: ["carton"], img: "assets/img/products/iqf-pomegranate.jpg",
    en: { name: "IQF pomegranate arils", cut: "Loose arils", medium: "Individually quick frozen", shelf: "24 months at −18 °C" },
    de: { name: "TK Granatapfelkerne (IQF)", cut: "Lose Kerne", medium: "Einzeln schockgefroren", shelf: "24 Monate bei −18 °C" } },
  { id: "iqf-guava", range: "iqf", type: "fruit", packs: ["carton"], img: "assets/img/products/iqf-guava.jpg",
    en: { name: "IQF guava", cut: "Halves, diced or pulp", medium: "Individually quick frozen", shelf: "24 months at −18 °C" },
    de: { name: "TK Guave (IQF)", cut: "Hälften, gewürfelt oder Fruchtmark", medium: "Einzeln schockgefroren", shelf: "24 Monate bei −18 °C" } },
  { id: "iqf-figs", range: "iqf", type: "fruit", packs: ["carton"], img: "assets/img/products/iqf-figs.jpg",
    en: { name: "IQF figs", cut: "Whole or halves", medium: "Individually quick frozen", shelf: "24 months at −18 °C" },
    de: { name: "TK Feigen (IQF)", cut: "Ganz oder halbiert", medium: "Einzeln schockgefroren", shelf: "24 Monate bei −18 °C" } },
  { id: "iqf-apricots", range: "iqf", type: "fruit", packs: ["carton"], img: "assets/img/products/iqf-apricots.jpg",
    en: { name: "IQF apricots", cut: "Halves, pitted", medium: "Individually quick frozen", shelf: "24 months at −18 °C" },
    de: { name: "TK Aprikosen (IQF)", cut: "Hälften, entsteint", medium: "Einzeln schockgefroren", shelf: "24 Monate bei −18 °C" } },
  { id: "iqf-lemons", range: "iqf", type: "fruit", packs: ["carton"], img: "assets/img/products/iqf-lemons.jpg",
    en: { name: "IQF lemons", cut: "Whole, slices or wedges", medium: "Individually quick frozen", shelf: "24 months at −18 °C" },
    de: { name: "TK Zitronen (IQF)", cut: "Ganz, Scheiben oder Spalten", medium: "Einzeln schockgefroren", shelf: "24 Monate bei −18 °C" } },

  /* Dates */
  { id: "medjool-dates", range: "dates", type: "fruit", packs: ["box", "date-carton"], img: "assets/img/products/medjool-dates.jpg",
    en: { name: "Medjool dates", cut: "Whole, with pit; sized per count/kg", medium: "Natural, no added sugar", shelf: "12 months, cool and dry" },
    de: { name: "Medjool-Datteln", cut: "Ganz, mit Kern; nach Stück/kg sortiert", medium: "Naturbelassen, ohne Zuckerzusatz", shelf: "12 Monate, kühl und trocken" } },
  { id: "madinah-dates", range: "dates", type: "fruit", packs: ["box", "date-carton"], img: "assets/img/products/madinah-dates.jpg",
    en: { name: "Madinah dates", cut: "Whole, with pit", medium: "Natural, no added sugar", shelf: "12 months, cool and dry" },
    de: { name: "Medina-Datteln", cut: "Ganz, mit Kern", medium: "Naturbelassen, ohne Zuckerzusatz", shelf: "12 Monate, kühl und trocken" } },
  { id: "barhi-dates", range: "dates", type: "fruit", packs: ["box", "date-carton"], img: "assets/img/products/barhi-dates.jpg",
    en: { name: "Barhi dates", cut: "Fresh yellow dates, on the strand or loose", medium: "Fresh, kept chilled", shelf: "Seasonal; 2–3 weeks at 0–2 °C" },
    de: { name: "Barhi-Datteln", cut: "Frische gelbe Datteln, an der Rispe oder lose", medium: "Frisch, gekühlt", shelf: "Saisonal; 2–3 Wochen bei 0–2 °C" } },
  { id: "qassim-dates", range: "dates", type: "fruit", packs: ["box", "date-carton"], img: "assets/img/products/qassim-dates.jpg",
    en: { name: "Qassim dates", cut: "Whole, with pit", medium: "Natural, no added sugar", shelf: "12 months, cool and dry" },
    de: { name: "Qassim-Datteln", cut: "Ganz, mit Kern", medium: "Naturbelassen, ohne Zuckerzusatz", shelf: "12 Monate, kühl und trocken" } }
];
