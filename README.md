# AI Tools Catalog

純靜態的 AI 工具目錄：卡片／比較表兩種檢視、中英文介面切換、搜尋與分類篩選、深色模式。

**沒有後端、沒有建置流程、沒有 npm 依賴。** 打開 `public/index.html` 就能跑。

## 檔案結構

```
ai-catalog/
├── public/            ← 這個資料夾的內容就是網站本體
│   ├── index.html
│   ├── style.css
│   ├── app.js         ← 介面邏輯
│   └── data.js        ← 全部資料在這裡，要增減工具只改這個檔
├── wrangler.jsonc     ← 用指令部署時才需要
└── README.md
```

## 本機預覽

直接雙擊 `public/index.html`。

不需要開本機伺服器，也不會有 CORS 問題（資料是 `data.js`，不是 `fetch` 讀 JSON）。

## 資料怎麼改

打開 `public/data.js`，每一筆長這樣：

```js
{
  id: "chatgpt",
  name: "ChatGPT",
  vendor: "OpenAI",
  cat: "chat",                    // chat|image|video|audio|code|search|agent|local|platform
  url: "https://chatgpt.com",
  desc:  { zh: "中文說明", en: "English description" },
  quota: { zh: "中文額度說明", en: "English quota note" },
  free: "limited",                // yes（免費）| limited（部分免費）| no（需付費）
  caps: { vision: true, image: true, video: false, audio: true, code: true }
}
```

- `caps` 的 `vision` / `image` / `video` / `audio` / `code` 會對應卡片上的標籤與比較表的欄位。
- 新增工具記得 `id` 不要重複；分類填沒出現過的 `cat` 不會被顯示。
- 改完記得更新檔案最上面的 `updated` 日期。

## 上傳到 Cloudflare

### 方法 A：後台拖曳（不用安裝任何東西）

1. 登入 <https://dash.cloudflare.com>
2. 左側選 **Workers & Pages**
3. 右上 **Create**（新版叫 *Create application*）→ 切到 **Pages** 分頁 → **Upload assets**
4. 專案名稱填 `ai-catalog`
   ⚠️ 這個名稱會變成網址 `ai-catalog.pages.dev`，建立後不能改
5. 把 **`public` 資料夾裡的 4 個檔案**全選拖進上傳框
   （不要拖整個 `ai-catalog`，否則網站根目錄會多一層）
6. 按 **Deploy site**，完成後會給你 `https://ai-catalog.pages.dev`

改版：同一個專案 → **Create new deployment** → 重新拖檔案 → Deploy。舊版本會保留，可回滾。

### 方法 B：指令部署（需 Node.js 20 以上）

```powershell
npm install -g wrangler
wrangler login        # 會開瀏覽器，由你按授權
wrangler deploy       # 在本資料夾執行
```

`wrangler.jsonc` 已指定 `assets.directory` 為 `./public`，所以要在 `ai-catalog/` 這一層執行
`wrangler deploy`，不是在 `public/` 裡面。

## 費用

純靜態資源的請求免費且不限量，`*.pages.dev` 子網域也不用錢。只有綁自訂網域需要買網域。

## 已知限制

- 資料是人工整理的靜態快照，**免費額度會隨官方政策變動**，網站上已標示資料版本日與免責說明。
- 沒有自動更新機制（靜態網站沒有後端可爬）。要更新就改 `data.js` 再重新部署。
