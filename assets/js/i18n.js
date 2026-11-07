/*
  English / German switch.
  English text lives in the HTML itself. Elements carry data-i18n="key" (text)
  or data-i18n-attr="attribute:key;attribute:key". The German text for each key
  is in DICT.de below. A key missing from DICT.de simply stays English.
  DICT.en only holds strings that JavaScript builds (they have no HTML original).
*/
(function () {
  var DICT = {
    en: {
      "count.one": "1 product",
      "count.many": "{n} products",
      "range.preserved": "Preserved",
      "range.iqf": "IQF frozen",
      "form.err.required": "Please fill in company, name, email and products.",
      "form.err.email": "Please check the email address. It needs an @ and a domain.",
      "form.opened": "Your email program should open with the inquiry. If nothing happens, use Copy inquiry text.",
      "form.copied": "Inquiry text copied. Paste it into an email to info@infinity-import-export.de.",
      "form.copyfail": "Copying didn't work. Select the text below and copy it by hand.",
      "form.toolong": "This inquiry is too long to hand to an email program. Copy the text below and paste it into an email to info@infinity-import-export.de.",
      "mail.subject": "Inquiry from {company}",
      "mail.company": "Company",
      "mail.name": "Name",
      "mail.email": "Email",
      "mail.country": "Country",
      "mail.type": "Business",
      "mail.products": "Products and quantities",
      "mail.packs": "Pack formats",
      "mail.dest": "Destination",
      "mail.msg": "Notes",
      "mail.ask": "I'm interested in: {name}"
    },
    de: {
      "skip": "Zum Inhalt springen",
      "nav.menu": "Menü",
      "nav.products": "Produkte",
      "nav.about": "Über uns",
      "nav.contact": "Kontakt",
      "cta.offer": "Angebot anfragen",
      "cta.h": "Nennen Sie uns Produkt, Packung und Menge.",
      "cta.p": "Sie erhalten ein Spezifikationsblatt und einen Preis. Wir antworten auf Deutsch und Englisch.",
      "footer.p": "Konserviertes und tiefgekühltes Gemüse und Obst aus Ägypten für Lebensmittelhersteller, Gastronomie und Importeure.",
      "footer.pages": "Seiten",
      "footer.langs": "Wir antworten auf Deutsch und Englisch.",
      "footer.privacy": "Datenschutz",
      "close": "Schließen",

      "home.title": "Infinity Import Export | Konserviertes und tiefgekühltes Gemüse und Obst aus Ägypten",
      "home.desc": "Gegrilltes Gemüse, Paprika, Oliven sowie TK-Gemüse und -Obst aus Ägypten, in Gläsern, Dosen, Beuteln, Eimern, Fässern und TK-Kartons für Lebensmittelhersteller, Gastronomie und Importeure.",
      "home.h1": "Gemüse und Obst aus Ägypten, konserviert oder tiefgekühlt, in der Packung, mit der Sie arbeiten.",
      "home.lead": "Wir beziehen konserviertes und tiefgekühltes Gemüse und Obst von ägyptischen Erzeugern und Verarbeitern und liefern es an Lebensmittelhersteller, Großküchen und Importeure.",
      "home.see": "Zum Sortiment",
      "home.ranges.h": "Konserviert oder tiefgekühlt, von denselben Feldern.",
      "home.ranges.p": "Viele Produkte gibt es in beiden Varianten. Entscheiden Sie danach, wie Sie lagern und wie schnell Sie verbrauchen.",
      "range.preserved": "Konserviert",
      "range.iqf": "TK (IQF)",
      "range.preserved.h": "In Öl und Lake konserviert",
      "range.preserved.p": "Gegrillte Auberginen, Zucchini und Paprika in Sonnenblumenöl. Oliven, Jalapeños und Pfefferoni in Lake. Bei Raumtemperatur lagerbar, direkt verwendbar.",
      "range.preserved.more": "Auberginen, Zucchini, Tomaten, Essiggemüse",
      "range.preserved.link": "Konservierte Produkte ansehen",
      "range.iqf.h": "Tiefgekühlt (IQF)",
      "range.iqf.p": "Kurz nach der Ernte einzeln schockgefroren. Sie entnehmen genau die Menge, die Sie brauchen, der Rest bleibt gefroren. Transport und Lagerung bei −18 °C.",
      "range.iqf.l2": "Brokkoli, Blumenkohl, Zuckermais, Zwiebeln",
      "range.iqf.l3": "Paprika, Kürbis, Süßkartoffeln, Molokhia",
      "range.iqf.l4": "Erdbeeren, Mango, Feigen, Guave, Granatapfel, Aprikosen, Zitronen",
      "range.iqf.link": "TK-Produkte ansehen",
      "type.artichokes": "Artischocken",
      "type.peppers": "Paprika",
      "type.olives": "Oliven",
      "type.vegetables": "Weiteres Gemüse",
      "type.fruit": "Obst",
      "home.buyers.h": "Wen wir beliefern",
      "home.buyers.p": "Drei Arten von Kunden, jede mit eigenen Packungsgrößen, Unterlagen und Lieferrhythmus.",
      "buyer.factory.h": "Lebensmittelhersteller",
      "buyer.factory.p": "Fässer in Lake und TK-Kartons mit festem Schnitt und fester Größe, damit Ihre Linie jede Woche gleich läuft. Spezifikation und Laboranalyse zu jeder Charge.",
      "buyer.horeca.h": "Hotels, Restaurants und Caterer",
      "buyer.horeca.p": "3-kg-Dosen, Eimer und Beutel, die sofort einsatzbereit sind. Weniger Abtropfen, weniger Abfall und ein Portionspreis, mit dem Sie planen können.",
      "buyer.import.h": "Importeure und Großhändler",
      "buyer.import.p": "Volle oder gemischte Container, auf Wunsch Gläser unter Ihrer eigenen Marke, und Exportpapiere, die für die Verzollung vorbereitet sind.",
      "home.steps.h": "So läuft eine Bestellung",
      "home.steps.p": "Dieselben fünf Schritte für jede Bestellung, von der ersten E-Mail bis zur Entladung.",
      "step1.h": "Anfrage",
      "step1.p": "Sie nennen uns Produkt, Schnitt, Packung, Menge und Bestimmungsort.",
      "step2.h": "Spezifikation und Muster",
      "step2.p": "Wir senden das Spezifikationsblatt und auf Wunsch Muster aus dem Herstellerwerk.",
      "step3.h": "Angebot",
      "step3.p": "Preis pro Packung oder pro kg, FOB Ägypten oder geliefert, mit Lieferzeit und Zahlungsbedingungen.",
      "step4.h": "Produktion und Prüfung",
      "step4.p": "Gepackt nach Ihrer Spezifikation. Jede Charge wird vor dem Verladen geprüft; TK-Ware bleibt bei −18 °C.",
      "step5.h": "Versand und Dokumente",
      "step5.p": "Seefracht im Standard- oder Kühlcontainer. Die Dokumente sind bei Ihnen und Ihrem Spediteur, bevor die Ware ankommt.",

      "products.title": "Produkte | Infinity Import Export",
      "products.desc": "Konserviertes und tiefgekühltes Gemüse und Obst aus Ägypten: Artischocken, Paprika, Oliven, Brokkoli, Zuckermais, Erdbeeren, Mango, Granatapfel und mehr, mit Packungsformaten und typischen Spezifikationen.",
      "products.h1": "Sortiment",
      "products.lead": "Die Spezifikationen sind typische Werte und werden mit jedem Angebot bestätigt. Wenn Sie einen Schnitt, eine Größe oder eine Packung brauchen, die hier fehlt, fragen Sie uns. Wir beschaffen nach Ihrer Spezifikation.",
      "products.empty": "Kein Produkt passt zu diesen Filtern. Entfernen Sie einen Filter, oder senden Sie uns Ihre Spezifikation und wir suchen einen Hersteller.",
      "filters.label": "Filter",
      "filters.range": "Sortiment",
      "filters.type": "Produkt",
      "filters.pack": "Packung",
      "filters.all": "Alle",
      "filters.reset": "Filter zurücksetzen",
      "packshort.jar-s": "Glas 370 ml",
      "packshort.jar-l": "Glas 660 ml",
      "packshort.pouch": "Beutel",
      "packshort.tin": "Dose 3 kg",
      "packshort.pail": "Eimer",
      "packshort.drum": "Fass",
      "packshort.carton": "TK-Karton",
      "spec.cut": "Schnitt / Sortierung",
      "spec.medium": "Aufguss",
      "spec.packs": "Packungsformate",
      "spec.shelf": "Haltbarkeit",
      "spec.note": "Typische Spezifikation. Genaue Werte, Packungsgrößen und Etikettierung werden mit jedem Angebot bestätigt.",
      "spec.ask": "Angebot für dieses Produkt anfragen",
      "count.one": "1 Produkt",
      "count.many": "{n} Produkte",

      "about.title": "Über uns | Infinity Import Export",
      "about.desc": "Wie Infinity Import Export konserviertes und tiefgekühltes Gemüse in Ägypten beschafft: Auswahl der Hersteller, Prüfung jeder Charge und Exportdokumente.",
      "about.h1": "Ein Ansprechpartner zwischen ägyptischen Herstellern und Ihrem Einkauf.",
      "about.lead": "Wir finden für jedes Produkt das passende Werk, prüfen, was es verlässt, und kümmern uns um Papiere und Fracht. Sie haben es mit einem Unternehmen zu tun, auf Deutsch oder Englisch.",
      "about.egypt.h": "Warum Ägypten",
      "about.egypt.p1": "Ägypten baut Artischocken, Paprika, Oliven, Okra und Erdbeeren in großen Mengen an, und die Haupternten fallen in die kühleren Monate, wenn die Felder in Europa ruhen. Verarbeitungsbetriebe nahe den Feldern grillen, legen ein, verpacken und frieren kurz nach der Ernte ein.",
      "about.egypt.p2": "Waren mit ägyptischem Ursprung können mit einer Warenverkehrsbescheinigung EUR.1 im Rahmen des Assoziierungsabkommens EU–Ägypten eingeführt werden. Für viele Produkte bedeutet das einen ermäßigten Zoll oder Zollfreiheit.",
      "about.f1.b": "Dez. bis Mai",
      "about.f1.s": "Hauptsaison für ägyptische Artischocken",
      "about.f2.s": "Kühlkette für TK-Ware, vom Werk bis zum Hafen",
      "about.f3.s": "Präferenzursprung für die Einfuhr in die EU",
      "about.prod.h": "Wie wir Hersteller auswählen",
      "about.prod.1": "Wir besuchen die Werke, bevor wir ihre Produkte anbieten, und sehen uns Verarbeitung, Lager und Hygiene selbst an.",
      "about.prod.2": "Zertifikate des Herstellerwerks, zum Beispiel BRCGS, IFS, FSSC 22000, Halal oder Koscher, erhalten Sie mit dem Angebot.",
      "about.prod.3": "Jedes Produkt hat ein Spezifikationsblatt: Schnitt, Größe, Abtropfgewicht, Salz- oder Säuregehalt und mikrobiologische Grenzwerte, abgestimmt vor der Produktion.",
      "about.prod.4": "Auf Wunsch erhalten Sie Muster aus der Produktionscharge, bevor Sie sich festlegen.",
      "about.checks.h": "Prüfung jeder Charge",
      "about.checks.1": "Abtropfgewicht und Füllmenge werden mit dem Spezifikationsblatt abgeglichen.",
      "about.checks.2": "Salz, Säure und pH-Wert werden bei Produkten in Lake gemessen.",
      "about.checks.3": "Metalldetektion an den Packlinien.",
      "about.checks.4": "Temperaturaufzeichnung für TK-Ware, vom Kühlhaus bis zum Container.",
      "about.checks.5": "Rückstellmuster aus jeder Charge.",
      "about.checks.6": "Vorverladungsinspektion durch einen unabhängigen Prüfer, wenn Sie es wünschen.",
      "about.docs.h": "Dokumente zu jeder Sendung",
      "about.docs.1": "Handelsrechnung und Packliste",
      "about.docs.2": "Ursprungszeugnis und EUR.1 für Ziele in der EU",
      "about.docs.3": "Gesundheits- oder Pflanzengesundheitszeugnis, wo erforderlich",
      "about.docs.4": "Analysezertifikat der Charge",
      "about.docs.5": "Konnossement (Bill of Lading)",
      "about.docs.6": "Halal- oder Koscher-Zertifikate auf Anfrage",
      "about.label.h": "Ihre eigene Marke",
      "about.label.p": "Gläser und Dosen für den Handel können unter Ihrer Marke abgefüllt werden. Senden Sie uns die Druckvorlage oder den Etikettentext, und wir gleichen ihn vor dem Druck mit der Produktspezifikation ab.",
      "about.label.cta": "Nach Eigenmarke fragen",

      "contact.title": "Angebot anfragen | Infinity Import Export",
      "contact.desc": "Fragen Sie bei Infinity Import Export ein Angebot für konserviertes oder tiefgekühltes Gemüse aus Ägypten an.",
      "contact.h1": "Angebot anfragen",
      "contact.lead": "Füllen Sie aus, was Sie wissen. Das Formular schreibt eine E-Mail, die Sie aus Ihrem eigenen E-Mail-Programm senden. Auf dieser Website wird nichts gespeichert.",
      "contact.direct": "Direkt schreiben",
      "contact.helps": "Damit wir schnell anbieten können",
      "contact.h1i": "Produkt, Schnitt und Größe",
      "contact.h2i": "Packungsformat und Menge pro Bestellung",
      "contact.h3i": "Wie oft Sie bestellen",
      "contact.h4i": "Zielhafen oder Stadt",
      "contact.h5i": "Benötigte Zertifikate (z. B. IFS, BRCGS, Halal, Koscher)",
      "form.company": "Firma",
      "form.name": "Ihr Name",
      "form.email": "E-Mail",
      "form.country": "Land",
      "form.type": "Art des Unternehmens",
      "form.type.choose": "Bitte wählen",
      "form.type.other": "Sonstiges",
      "form.products": "Produkte und Mengen",
      "form.products.hint": "Zum Beispiel: gegrillte Auberginenscheiben in Öl, 3-kg-Dosen, 2 Paletten pro Monat.",
      "form.packs": "Packungsformate, die Sie interessieren",
      "form.dest": "Zielhafen oder Lieferadresse",
      "form.msg": "Weitere Angaben",
      "form.msg.hint": "Anforderungen an die Spezifikation, benötigte Zertifikate, Eigenmarke, Liefertermine.",
      "form.send": "In E-Mail öffnen",
      "form.copy": "Anfragetext kopieren",
      "form.out": "Ihr Anfragetext. Fügen Sie ihn in eine E-Mail an info@infinity-import-export.de ein.",
      "form.err.required": "Bitte Firma, Name, E-Mail und Produkte ausfüllen.",
      "form.err.email": "Bitte die E-Mail-Adresse prüfen. Sie braucht ein @ und eine Domain.",
      "form.opened": "Ihr E-Mail-Programm sollte sich mit der Anfrage öffnen. Falls nicht, nutzen Sie „Anfragetext kopieren“.",
      "form.copied": "Anfragetext kopiert. Fügen Sie ihn in eine E-Mail an info@infinity-import-export.de ein.",
      "form.copyfail": "Kopieren hat nicht funktioniert. Markieren Sie den Text unten und kopieren Sie ihn von Hand.",
      "form.toolong": "Diese Anfrage ist zu lang für die Übergabe an ein E-Mail-Programm. Kopieren Sie den Text unten und fügen Sie ihn in eine E-Mail an info@infinity-import-export.de ein.",
      "mail.subject": "Anfrage von {company}",
      "mail.company": "Firma",
      "mail.name": "Name",
      "mail.email": "E-Mail",
      "mail.country": "Land",
      "mail.type": "Unternehmen",
      "mail.products": "Produkte und Mengen",
      "mail.packs": "Packungsformate",
      "mail.dest": "Bestimmungsort",
      "mail.msg": "Hinweise",
      "mail.ask": "Ich interessiere mich für: {name}",

      "photo.strawberries": "Tiefgekühlte Erdbeeren",
      "photo.broccoli": "Tiefgekühlte Brokkoliröschen",
      "photo.pomegranate": "Granatapfelkerne",
      "photo.peppers": "Gewürfelte rote, gelbe und grüne Paprika",
      "legal.imprint.title": "Impressum | Infinity Import Export",
      "legal.privacy.title": "Datenschutzerklärung | Infinity Import Export",
    }
  };

  var originals = {};   // key -> English text captured from the HTML
  var lang = document.documentElement.lang === "de" ? "de" : "en";

  function capture(el, slot, key, value) {
    var store = el.__i18n || (el.__i18n = {});
    if (!(slot in store)) {
      store[slot] = value;
      if (!(key in originals)) originals[key] = value;
    }
    return store[slot];
  }

  function t(key, vars) {
    var s = (DICT[lang] && DICT[lang][key]) || DICT.en[key] || originals[key] || key;
    if (vars) s = s.replace(/\{(\w+)\}/g, function (_, k) { return vars[k] != null ? vars[k] : ""; });
    return s;
  }

  function apply(root) {
    root = root || document;
    root.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var en = capture(el, "text", key, el.textContent);
      el.textContent = lang === "en" ? en : (DICT.de[key] || en);
    });
    root.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      el.getAttribute("data-i18n-attr").split(";").forEach(function (pair) {
        var p = pair.split(":"), attr = p[0].trim(), key = (p[1] || "").trim();
        if (!attr || !key) return;
        var en = capture(el, "attr:" + attr, key, el.getAttribute(attr) || "");
        el.setAttribute(attr, lang === "en" ? en : (DICT.de[key] || en));
      });
    });
    root.querySelectorAll("[data-pack-name]").forEach(function (el) {
      var p = window.PACKS && window.PACKS[el.getAttribute("data-pack-name")];
      if (p) el.textContent = p[lang];
    });
    document.querySelectorAll("[data-lang]").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang));
    });
  }

  function set(next) {
    lang = next === "de" ? "de" : "en";
    document.documentElement.lang = lang;
    try { localStorage.setItem("lang", lang); } catch (e) {}
    apply();
    document.dispatchEvent(new CustomEvent("langchange", { detail: { lang: lang } }));
  }

  window.I18N = {
    t: t,
    set: set,
    apply: apply,
    get lang() { return lang; }
  };

  // Capture English originals once, then show the stored language.
  apply();
  document.documentElement.classList.remove("i18n-pending");
})();
