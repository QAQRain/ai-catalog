/* AI 工具目錄 —— 前端邏輯（無框架、無 build） */
(function () {
  "use strict";

  var DATA = (window.AI_DATA && window.AI_DATA.items) || [];
  var UPDATED = (window.AI_DATA && window.AI_DATA.updated) || "";

  var CATS = ["chat", "image", "video", "audio", "code", "search", "agent", "local", "platform"];
  var CAP_KEYS = ["vision", "image", "video", "audio", "code"];

  var I18N = {
    zh: {
      lang: "zh-Hant",
      title: "AI 工具總覽",
      sub: "主流 AI 服務的免費額度、支援能力一次看完",
      notice: "免費額度會隨官方政策變動，本表為靜態整理，實際以各服務官網為準。",
      search: "搜尋工具、廠商或功能…",
      viewCards: "卡片",
      viewTable: "比較表",
      all: "全部",
      freeOnly: "只顯示有免費額度",
      count: function (n, total) { return "顯示 " + n + " / " + total + " 個工具"; },
      empty: "找不到符合條件的工具，換個關鍵字試試。",
      free: { yes: "免費", limited: "部分免費", no: "需付費" },
      cat: {
        chat: "對話助理", image: "圖像生成", video: "影片生成", audio: "音樂與語音",
        code: "程式開發", search: "搜尋與研究", agent: "自動化代理",
        local: "本機執行", platform: "平台與 API"
      },
      cap: { vision: "看圖", image: "生圖", video: "生影片", audio: "語音", code: "寫程式" },
      th: ["工具", "廠商", "類型", "免費", "免費額度", "看圖", "生圖", "影片", "語音", "程式"],
      quotaLabel: "免費額度",
      visit: "官方網站",
      footerNote: "資料為人工整理的靜態快照，不構成任何價格承諾。要更新請直接修改 data.js。",
      footerUpdated: "資料版本"
    },
    en: {
      lang: "en",
      title: "AI Tools Catalog",
      sub: "Free tiers and capabilities of mainstream AI services, in one place",
      notice: "Free tiers change with vendor policy. This is a static snapshot — always confirm on the official site.",
      search: "Search tools, vendors or features…",
      viewCards: "Cards",
      viewTable: "Table",
      all: "All",
      freeOnly: "Free tier only",
      count: function (n, total) { return "Showing " + n + " of " + total + " tools"; },
      empty: "No tools match those filters. Try another keyword.",
      free: { yes: "Free", limited: "Limited free", no: "Paid" },
      cat: {
        chat: "Assistants", image: "Image gen", video: "Video gen", audio: "Music & voice",
        code: "Coding", search: "Search & research", agent: "Agents",
        local: "Local models", platform: "Platforms & APIs"
      },
      cap: { vision: "Vision", image: "Image", video: "Video", audio: "Voice", code: "Code" },
      th: ["Tool", "Vendor", "Type", "Free", "Free tier", "Vision", "Image", "Video", "Voice", "Code"],
      quotaLabel: "Free tier",
      visit: "Official site",
      footerNote: "A hand-maintained static snapshot, not a price guarantee. Edit data.js to update.",
      footerUpdated: "Data version"
    }
  };

  /* 以 file:// 直接開檔時，部分瀏覽器會封鎖 localStorage，因此包一層保護 */
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) { /* 忽略 */ } }
  };

  var state = {
    lang: store.get("aicat:lang") === "en" ? "en" : "zh",
    view: store.get("aicat:view") === "table" ? "table" : "cards",
    q: "",
    cat: "all",
    freeOnly: false
  };

  var el = {
    html: document.documentElement,
    title: document.getElementById("site-title"),
    sub: document.getElementById("site-sub"),
    notice: document.getElementById("notice"),
    search: document.getElementById("search"),
    filters: document.getElementById("filters"),
    cards: document.getElementById("cards"),
    tableWrap: document.getElementById("table-wrap"),
    table: document.getElementById("cmp-table"),
    count: document.getElementById("count"),
    empty: document.getElementById("empty"),
    langBtn: document.getElementById("lang-toggle"),
    themeBtn: document.getElementById("theme-toggle"),
    themeIcon: document.getElementById("theme-icon"),
    footerNote: document.getElementById("footer-note"),
    footerUpdated: document.getElementById("footer-updated"),
    viewBtns: Array.prototype.slice.call(document.querySelectorAll("[data-view]"))
  };

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function t() { return I18N[state.lang]; }
  function pick(obj) { return obj ? (obj[state.lang] || obj.zh || obj.en || "") : ""; }

  /* ---------- 篩選 ---------- */
  function visibleItems() {
    var q = state.q.trim().toLowerCase();
    var dict = t();
    return DATA.filter(function (it) {
      if (state.cat !== "all" && it.cat !== state.cat) return false;
      if (state.freeOnly && it.free === "no") return false;
      if (!q) return true;
      var hay = [
        it.name, it.vendor, pick(it.desc), pick(it.quota),
        dict.cat[it.cat] || "", dict.free[it.free] || ""
      ].join(" ").toLowerCase();
      return hay.indexOf(q) !== -1;
    });
  }

  /* ---------- 篩選標籤 ---------- */
  function renderFilters() {
    var dict = t();
    var html = '<button type="button" class="chip' + (state.cat === "all" ? " is-active" : "") +
      '" data-cat="all">' + esc(dict.all) + "</button>";

    CATS.forEach(function (c) {
      var n = DATA.filter(function (it) { return it.cat === c; }).length;
      if (!n) return;
      html += '<button type="button" class="chip' + (state.cat === c ? " is-active" : "") +
        '" data-cat="' + c + '">' + esc(dict.cat[c]) +
        '<span class="chip-n">' + n + "</span></button>";
    });

    html += '<button type="button" class="chip chip-free' + (state.freeOnly ? " is-active" : "") +
      '" data-free="1" aria-pressed="' + state.freeOnly + '">' + esc(dict.freeOnly) + "</button>";

    el.filters.innerHTML = html;
  }

  /* ---------- 卡片 ---------- */
  function freeBadge(it) {
    var dict = t();
    return '<span class="badge badge--' + it.free + '">' + esc(dict.free[it.free]) + "</span>";
  }

  function capsHtml(it, dict) {
    return CAP_KEYS.filter(function (k) { return it.caps && it.caps[k]; })
      .map(function (k) { return '<span class="cap">' + esc(dict.cap[k]) + "</span>"; })
      .join("");
  }

  function renderCards(items) {
    var dict = t();
    el.cards.innerHTML = items.map(function (it) {
      return '' +
        '<article class="card">' +
          '<div class="card-top">' +
            '<h3 class="card-name">' + esc(it.name) + "</h3>" +
            freeBadge(it) +
          "</div>" +
          '<p class="card-vendor">' + esc(it.vendor) + "</p>" +
          '<p class="card-desc">' + esc(pick(it.desc)) + "</p>" +
          '<p class="card-quota"><span class="k">' + esc(dict.quotaLabel) + "</span>" +
            esc(pick(it.quota)) + "</p>" +
          '<div class="card-caps">' + capsHtml(it, dict) + "</div>" +
          '<div class="card-foot">' +
            '<span class="cat-tag">' + esc(dict.cat[it.cat]) + "</span>" +
            '<a class="visit" href="' + esc(it.url) + '" target="_blank" rel="noopener">' +
              esc(dict.visit) + " ↗</a>" +
          "</div>" +
        "</article>";
    }).join("");
  }

  /* ---------- 比較表 ---------- */
  function renderTable(items) {
    var dict = t();
    var head = "<tr>" + dict.th.map(function (h) { return "<th>" + esc(h) + "</th>"; }).join("") + "</tr>";
    el.table.tHead.innerHTML = head;

    var rows = items.map(function (it) {
      var marks = CAP_KEYS.map(function (k) {
        var on = !!(it.caps && it.caps[k]);
        return '<td class="bool">' + (on ? '<span class="yes">✓</span>' : '<span class="no">·</span>') + "</td>";
      }).join("");

      return "<tr>" +
        "<td class=\"tool\">" +
          '<a href="' + esc(it.url) + '" target="_blank" rel="noopener">' + esc(it.name) + "</a>" +
          '<div class="tool-desc">' + esc(pick(it.desc)) + "</div>" +
        "</td>" +
        "<td>" + esc(it.vendor) + "</td>" +
        "<td>" + esc(dict.cat[it.cat]) + "</td>" +
        "<td>" + freeBadge(it) + "</td>" +
        '<td class="quota">' + esc(pick(it.quota)) + "</td>" +
        marks +
      "</tr>";
    }).join("");

    el.table.tBodies[0].innerHTML = rows;
  }

  /* ---------- 整體畫面 ---------- */
  function render() {
    var dict = t();
    var items = visibleItems();

    el.html.lang = dict.lang;
    document.title = dict.title + " | " + I18N[state.lang === "zh" ? "en" : "zh"].title;
    el.title.textContent = dict.title;
    el.sub.textContent = dict.sub;
    el.notice.textContent = dict.notice;
    el.search.placeholder = dict.search;
    el.langBtn.textContent = state.lang === "zh" ? "EN" : "中";

    el.viewBtns.forEach(function (b) {
      b.classList.toggle("is-active", b.dataset.view === state.view);
      b.textContent = b.dataset.view === "cards" ? dict.viewCards : dict.viewTable;
    });

    renderFilters();

    el.count.textContent = dict.count(items.length, DATA.length);
    el.empty.textContent = dict.empty;
    el.empty.classList.toggle("is-hidden", items.length > 0);

    var isCards = state.view === "cards";
    el.cards.classList.toggle("is-hidden", !isCards);
    el.tableWrap.classList.toggle("is-hidden", isCards);

    if (isCards) renderCards(items); else renderTable(items);

    el.footerNote.textContent = dict.footerNote;
    el.footerUpdated.textContent = dict.footerUpdated + "：" + UPDATED;
  }

  /* ---------- 事件 ---------- */
  el.search.addEventListener("input", function (e) {
    state.q = e.target.value;
    render();
  });

  el.filters.addEventListener("click", function (e) {
    var chip = e.target.closest(".chip");
    if (!chip) return;
    if (chip.dataset.free) {
      state.freeOnly = !state.freeOnly;
    } else {
      state.cat = chip.dataset.cat;
    }
    render();
  });

  el.viewBtns.forEach(function (b) {
    b.addEventListener("click", function () {
      state.view = b.dataset.view;
      store.set("aicat:view", state.view);
      render();
    });
  });

  el.langBtn.addEventListener("click", function () {
    state.lang = state.lang === "zh" ? "en" : "zh";
    store.set("aicat:lang", state.lang);
    render();
  });

  /* 主題 */
  function applyTheme(mode) {
    el.html.dataset.theme = mode;
    el.themeIcon.textContent = mode === "dark" ? "☾" : "☀";
    store.set("aicat:theme", mode);
  }

  el.themeBtn.addEventListener("click", function () {
    applyTheme(el.html.dataset.theme === "dark" ? "light" : "dark");
  });

  (function initTheme() {
    var saved = store.get("aicat:theme");
    if (saved === "dark" || saved === "light") {
      applyTheme(saved);
    } else {
      var dark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      applyTheme(dark ? "dark" : "light");
    }
  })();

  render();
})();
