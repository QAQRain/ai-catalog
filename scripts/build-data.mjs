// 由 data.json 產生 data.mjs 與 public/data.js，請勿手動編輯產生檔。
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const HEADER = "// 由 data.json 產生，請勿手動編輯；要改資料請改 data.json 後執行 npm run build\n";

const raw = await readFile(path.join(root, "data.json"), "utf8");
const data = JSON.parse(raw);

if (!Array.isArray(data.items)) {
  throw new Error("data.json 缺少 items 陣列");
}

const seen = new Set();
for (const item of data.items) {
  if (!item.id) throw new Error("有項目缺少 id");
  if (seen.has(item.id)) throw new Error(`id 重複：${item.id}`);
  seen.add(item.id);
}

const json = JSON.stringify(data, null, 2);

await writeFile(
  path.join(root, "data.mjs"),
  `${HEADER}const data = ${json}\n\nexport const updated = data.updated\nexport const items = data.items\nexport default data\n`,
  "utf8"
);

await writeFile(
  path.join(root, "public", "data.js"),
  `${HEADER}window.AI_DATA = ${json};\n`,
  "utf8"
);

console.log(`已產生 data.mjs 與 public/data.js（${data.items.length} 筆，${Buffer.byteLength(json)} bytes）`);
