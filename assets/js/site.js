/* Site behaviour: menu, language switch, catalogue, inquiry form. */
(function () {
  var I = window.I18N;
  var PACKS = window.PACKS || {};
  var PRODUCTS = window.PRODUCTS || [];
  var SPRITE = "assets/img/packs.svg";

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function packSvg(id) {
    var p = PACKS[id];
    if (!p) return "";
    return '<svg style="--h:' + p.h + "px;--ar:" + p.ar + '" aria-hidden="true" focusable="false"><use href="' + SPRITE + "#" + id + '"/></svg>';
  }
  function rangeTag(range) {
    return '<span class="tag tag-' + range + '">' + esc(I.t("range." + range)) + "</span>";
  }
  function params() { return new URLSearchParams(location.search); }

  /* Menu ------------------------------------------------------------- */
  var toggle = $(".nav-toggle"), nav = $("#nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") !== "true";
      toggle.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("open", open);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("open")) {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("open");
        toggle.focus();
      }
    });
  }

  /* Language --------------------------------------------------------- */
  $$("[data-lang]").forEach(function (b) {
    b.addEventListener("click", function () { I.set(b.getAttribute("data-lang")); });
  });

  /* Catalogue (products page) --------------------------------------- */
  var grid = $("#grid");
  if (grid) {
    var q = params();
    var state = {
      range: q.get("range") || "all",
      type: q.get("type") || "all",
      pack: q.get("pack") || "all"
    };
    var dialog = $("#quick");
    var opener = null, openId = null;

    var matches = function (p) {
      return (state.range === "all" || p.range === state.range) &&
             (state.type === "all" || p.type === state.type) &&
             (state.pack === "all" || p.packs.indexOf(state.pack) > -1);
    };

    var render = function () {
      var lang = I.lang;
      var list = PRODUCTS.filter(matches);
      grid.innerHTML = list.map(function (p) {
        var d = p[lang];
        var art = p.img
          ? '<img src="' + esc(p.img) + '" alt="" loading="lazy">'
          : p.packs.slice(0, 3).map(packSvg).join("");
        var packNames = p.packs.map(function (id) { return PACKS[id][lang]; }).join(", ");
        return '<li><button type="button" class="product" data-id="' + p.id + '" data-range="' + p.range + '" aria-haspopup="dialog">' +
          '<span class="product-art' + (p.img ? " has-img" : "") + '">' + art + "</span>" +
          '<span class="product-body">' +
            '<span class="product-name">' + esc(d.name) + "</span>" +
            '<span class="product-meta">' + esc(d.medium) + "</span>" +
            '<span class="product-meta">' + esc(packNames) + "</span>" +
          "</span></button></li>";
      }).join("");
      $("#results").textContent = list.length === 1 ? I.t("count.one") : I.t("count.many", { n: list.length });
      $("#empty").hidden = list.length > 0;
      var filtered = state.range !== "all" || state.type !== "all" || state.pack !== "all";
      $(".result-bar .reset").hidden = !filtered;
      $$(".chips").forEach(function (group) {
        var key = group.getAttribute("data-filter");
        $$(".chip", group).forEach(function (c) {
          c.setAttribute("aria-pressed", String(c.getAttribute("data-value") === state[key]));
        });
      });
    };

    var syncUrl = function () {
      var u = new URLSearchParams();
      Object.keys(state).forEach(function (k) { if (state[k] !== "all") u.set(k, state[k]); });
      var s = u.toString();
      history.replaceState(null, "", location.pathname + (s ? "?" + s : ""));
    };

    $$(".chips").forEach(function (group) {
      group.addEventListener("click", function (e) {
        var c = e.target.closest(".chip");
        if (!c) return;
        state[group.getAttribute("data-filter")] = c.getAttribute("data-value");
        render(); syncUrl();
      });
    });
    $$(".reset, .reset-inline").forEach(function (b) {
      b.addEventListener("click", function () {
        state = { range: "all", type: "all", pack: "all" };
        render(); syncUrl();
      });
    });

    var fill = function (id) {
      var p = PRODUCTS.filter(function (x) { return x.id === id; })[0];
      if (!p) return;
      var d = p[I.lang];
      dialog.setAttribute("data-range", p.range);
      $('[data-q="art"]', dialog).classList.toggle("has-img", !!p.img);
      $('[data-q="art"]', dialog).innerHTML = p.img ? '<img src="' + esc(p.img) + '" alt="">' : p.packs.map(packSvg).join("");
      var tag = $('[data-q="range"]', dialog);
      tag.className = "tag tag-" + p.range;
      tag.textContent = I.t("range." + p.range);
      $('[data-q="name"]', dialog).textContent = d.name;
      $('[data-q="cut"]', dialog).textContent = d.cut;
      $('[data-q="medium"]', dialog).textContent = d.medium;
      $('[data-q="packs"]', dialog).textContent = p.packs.map(function (k) { return PACKS[k][I.lang]; }).join(", ");
      $('[data-q="shelf"]', dialog).textContent = d.shelf;
      $('[data-q="ask"]', dialog).href = "contact.html?p=" + encodeURIComponent(p.id);
    };

    grid.addEventListener("click", function (e) {
      var card = e.target.closest(".product");
      if (!card) return;
      opener = card;
      openId = card.getAttribute("data-id");
      fill(openId);
      if (dialog.showModal) dialog.showModal(); else dialog.setAttribute("open", "");
    });
    $$("[data-close]", dialog).forEach(function (b) {
      b.addEventListener("click", function () { dialog.close(); });
    });
    dialog.addEventListener("click", function (e) { if (e.target === dialog) dialog.close(); });
    dialog.addEventListener("close", function () {
      openId = null;
      if (opener) {
        var again = $('.product[data-id="' + opener.getAttribute("data-id") + '"]');
        (again || opener).focus();
      }
    });

    document.addEventListener("langchange", function () {
      render();
      if (openId) fill(openId);
    });
    render();
  }

  /* Inquiry form (contact page) ------------------------------------- */
  var form = $("#inquiry");
  if (form) {
    var TO = "info@infinity-import-export.de";
    var checks = $("#pack-checks");
    checks.innerHTML = Object.keys(PACKS).map(function (id) {
      return '<label><input type="checkbox" name="packs" value="' + id + '"> <span data-pack-name="' + id + '">' + esc(PACKS[id][I.lang]) + "</span></label>";
    }).join("");

    var status = $("#status"), out = $("#out"), outText = $("#out-text");
    var products = $("#f-products");

    // Arriving from a product's quick view: contact.html?p=<id>
    var pid = params().get("p");
    var asked = PRODUCTS.filter(function (x) { return x.id === pid; })[0];
    var askLine = function () { return asked ? I.t("mail.ask", { name: asked[I.lang].name }) : ""; };
    if (asked) {
      products.value = askLine() + "\n";
      asked.packs.forEach(function (id) {
        var box = $('input[value="' + id + '"]', checks);
        if (box) box.checked = true;
      });
    }
    document.addEventListener("langchange", function () {
      // Swap the pre-filled line to the new language if the visitor hasn't changed it
      if (asked) {
        var other = I.lang === "de" ? asked.en.name : asked.de.name;
        var otherLine = (I.lang === "de" ? "I'm interested in: " : "Ich interessiere mich für: ") + other;
        if (products.value.indexOf(otherLine) === 0) products.value = askLine() + products.value.slice(otherLine.length);
      }
      I.apply(checks);
    });

    var val = function (n) { return (form.elements[n].value || "").trim(); };
    var buildText = function () {
      var typeSel = form.elements.type;
      var packs = $$('input[name="packs"]:checked', form).map(function (b) { return PACKS[b.value][I.lang]; });
      var lines = [
        [I.t("mail.company"), val("company")],
        [I.t("mail.name"), val("name")],
        [I.t("mail.email"), val("email")],
        [I.t("mail.country"), val("country")],
        [I.t("mail.type"), typeSel.value ? typeSel.options[typeSel.selectedIndex].text : ""],
        [I.t("mail.packs"), packs.join(", ")],
        [I.t("mail.dest"), val("dest")]
      ].filter(function (l) { return l[1]; }).map(function (l) { return l[0] + ": " + l[1]; });
      lines.push("", I.t("mail.products") + ":", val("products"));
      if (val("msg")) lines.push("", I.t("mail.msg") + ":", val("msg"));
      return lines.join("\n");
    };

    var check = function () {
      var missing = ["company", "name", "email", "products"].filter(function (n) { return !val(n); });
      $$("input, textarea", form).forEach(function (el) { el.removeAttribute("aria-invalid"); });
      missing.forEach(function (n) { form.elements[n].setAttribute("aria-invalid", "true"); });
      if (missing.length) {
        status.className = "form-status error";
        status.textContent = I.t("form.err.required");
        form.elements[missing[0]].focus();
        return false;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val("email"))) {
        form.elements.email.setAttribute("aria-invalid", "true");
        status.className = "form-status error";
        status.textContent = I.t("form.err.email");
        form.elements.email.focus();
        return false;
      }
      return true;
    };

    var showOut = function (text) {
      outText.value = text;
      out.classList.add("show");
    };

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!check()) return;
      var text = buildText();
      showOut(text);
      status.className = "form-status";
      status.textContent = I.t("form.opened");
      var href = "mailto:" + TO +
        "?subject=" + encodeURIComponent(I.t("mail.subject", { company: val("company") })) +
        "&body=" + encodeURIComponent(text);
      if (href.length < 1900) location.href = href;
      else status.textContent = I.t("form.toolong");
    });

    $("#copy").addEventListener("click", function () {
      if (!check()) return;
      var text = buildText();
      showOut(text);
      var done = function () { status.className = "form-status"; status.textContent = I.t("form.copied"); };
      var fail = function () {
        outText.focus(); outText.select();
        status.className = "form-status"; status.textContent = I.t("form.copyfail");
      };
      if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(done, fail);
      else {
        outText.select();
        try { document.execCommand("copy") ? done() : fail(); } catch (err) { fail(); }
      }
    });
  }
})();
