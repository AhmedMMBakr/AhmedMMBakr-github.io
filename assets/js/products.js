/*
  Product catalogue — edit this file to change the range.

  PACKS: the pack formats drawn on the site (ids match symbols in assets/img/packs.svg).
    h / ar: drawing height and aspect ratio (don't change unless you change the drawing).

  PRODUCTS: one entry per product.
    id      unique, lowercase, no spaces (used in links: contact.html?p=<id>)
    range   "preserved" or "iqf"
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
  "drum":   { h: 160, ar: "110 / 160", en: "Bulk drum 120–220 kg",    de: "Fass 120–220 kg" }
};

window.PRODUCTS = [
  /* Preserved in oil */
  { id: "eggplant-oil", range: "preserved", type: "vegetables", packs: ["jar-s", "jar-l", "tin"],
    en: { name: "Grilled eggplant slices in oil", cut: "Slices, grilled", medium: "Sunflower oil with garlic and herbs", shelf: "24 months, unopened" },
    de: { name: "Gegrillte Auberginenscheiben in Öl", cut: "Scheiben, gegrillt", medium: "Sonnenblumenöl mit Knoblauch und Kräutern", shelf: "24 Monate, ungeöffnet" } },
  { id: "zucchini-oil", range: "preserved", type: "vegetables", packs: ["jar-l", "tin"],
    en: { name: "Grilled zucchini in oil", cut: "Slices, grilled", medium: "Sunflower oil with herbs", shelf: "24 months, unopened" },
    de: { name: "Gegrillte Zucchini in Öl", cut: "Scheiben, gegrillt", medium: "Sonnenblumenöl mit Kräutern", shelf: "24 Monate, ungeöffnet" } },
  { id: "sundried-tomatoes", range: "preserved", type: "vegetables", packs: ["jar-s", "tin", "pail"],
    en: { name: "Sun-dried tomatoes in oil", cut: "Halves or julienne strips", medium: "Sunflower oil with herbs", shelf: "24 months, unopened" },
    de: { name: "Getrocknete Tomaten in Öl", cut: "Hälften oder Streifen", medium: "Sonnenblumenöl mit Kräutern", shelf: "24 Monate, ungeöffnet" } },
  { id: "red-pepper-strips", range: "preserved", type: "peppers", packs: ["jar-l", "tin"],
    en: { name: "Roasted red pepper strips", cut: "Strips, flame-roasted, peeled", medium: "Light brine or oil", shelf: "24 months, unopened" },
    de: { name: "Geröstete rote Paprikastreifen", cut: "Streifen, geröstet, geschält", medium: "Leichte Lake oder Öl", shelf: "24 Monate, ungeöffnet" } },

  /* Preserved in brine */
  { id: "jalapeno-brine", range: "preserved", type: "peppers", packs: ["jar-s", "tin", "pouch", "drum"],
    en: { name: "Green jalapeño slices in brine", cut: "Slices, 3–5 mm", medium: "Brine with vinegar", shelf: "24 months (jar, tin), 12 months (drum)" },
    de: { name: "Grüne Jalapeño-Scheiben in Lake", cut: "Scheiben, 3–5 mm", medium: "Lake mit Essig", shelf: "24 Monate (Glas, Dose), 12 Monate (Fass)" } },
  { id: "pepperoncini", range: "preserved", type: "peppers", packs: ["jar-l", "pouch", "drum"],
    en: { name: "Pepperoncini (Lombardi peppers) in brine", cut: "Whole or sliced", medium: "Brine with vinegar", shelf: "24 months (jar), 12 months (drum)" },
    de: { name: "Pfefferoni (Lombardi-Paprika) in Lake", cut: "Ganz oder in Scheiben", medium: "Lake mit Essig", shelf: "24 Monate (Glas), 12 Monate (Fass)" } },
  { id: "green-olives", range: "preserved", type: "olives", packs: ["jar-s", "tin", "pouch", "drum"],
    en: { name: "Green olives, whole, pitted or sliced", cut: "Whole, pitted or sliced; sized per count/kg", medium: "Brine", shelf: "24 months (jar, tin), 12 months (drum)" },
    de: { name: "Grüne Oliven, ganz, entsteint oder in Scheiben", cut: "Ganz, entsteint oder in Scheiben; nach Stück/kg sortiert", medium: "Lake", shelf: "24 Monate (Glas, Dose), 12 Monate (Fass)" } },
  { id: "black-olives", range: "preserved", type: "olives", packs: ["tin", "pouch"],
    en: { name: "Black olives (ripe), sliced or pitted", cut: "Sliced or pitted", medium: "Light brine", shelf: "36 months (tin), 24 months (pouch)" },
    de: { name: "Schwarze Oliven, in Scheiben oder entsteint", cut: "In Scheiben oder entsteint", medium: "Leichte Lake", shelf: "36 Monate (Dose), 24 Monate (Beutel)" } },
  { id: "pickled-mix", range: "preserved", type: "vegetables", packs: ["jar-l", "pail", "drum"],
    en: { name: "Mixed pickled vegetables", cut: "Carrot, cauliflower, cucumber, pepper", medium: "Brine with vinegar", shelf: "24 months (jar), 12 months (drum)" },
    de: { name: "Gemischtes Essiggemüse", cut: "Karotte, Blumenkohl, Gurke, Paprika", medium: "Lake mit Essig", shelf: "24 Monate (Glas), 12 Monate (Fass)" } },

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
    de: { name: "TK Zitronen (IQF)", cut: "Ganz, Scheiben oder Spalten", medium: "Einzeln schockgefroren", shelf: "24 Monate bei −18 °C" } }
];
