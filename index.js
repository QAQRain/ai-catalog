import data from "./data.mjs";

/** 資料快照日期（YYYY-MM-DD） */
export const updated = data.updated;

/** 全部工具資料 */
export const items = data.items;

/** 分類順序，與網站篩選列一致 */
export const CATEGORIES = [
  "chat",
  "image",
  "video",
  "audio",
  "code",
  "search",
  "agent",
  "local",
  "platform",
];

/** 能力標記的欄位名稱 */
export const CAPS = ["vision", "image", "video", "audio", "code"];

function pick(text, lang) {
  if (!text) return "";
  return text[lang] || text.zh || text.en || "";
}

/**
 * 依分類取出項目。
 * @param {string} cat 分類 id，或 "all" 表示全部
 */
export function byCategory(cat) {
  if (!cat || cat === "all") return items.slice();
  return items.filter((it) => it.cat === cat);
}

/** 依 id 取單一項目，找不到回傳 null */
export function getById(id) {
  return items.find((it) => it.id === id) || null;
}

/**
 * 關鍵字搜尋，比對名稱、廠商、說明、額度與分類。
 * @param {string} query 關鍵字
 * @param {"zh"|"en"} lang 要比對說明的語言，預設中文
 */
export function search(query, lang = "zh") {
  const q = String(query == null ? "" : query).trim().toLowerCase();
  if (!q) return items.slice();
  return items.filter((it) =>
    [it.name, it.vendor, it.cat, it.free, pick(it.desc, lang), pick(it.quota, lang)]
      .join(" ")
      .toLowerCase()
      .includes(q)
  );
}

export default data;
