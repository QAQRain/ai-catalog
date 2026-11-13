# AI 工具總覽

把主流 AI 服務整理成一份可搜尋、可比較的清單：能做什麼、支援哪些輸入、免費額度有多少，一次看完。資料同時以 npm 套件形式發佈，可被程式直接取用。

**網站：<https://ai-catalog.qaqrain.workers.dev/>**
**npm 套件：<https://www.npmjs.com/package/@qaqrain/ai-catalog>**
**專案位址：<https://github.com/QAQRain/ai-catalog/>**

目前收錄 52 個服務。

## 功能

- **卡片 / 比較表**兩種檢視，可切換
- **中英雙語**介面，含每一筆的說明
- **搜尋**名稱、廠商、功能關鍵字
- **分類篩選**：對話、圖像、影片、音樂語音、程式、搜尋、代理、本機、平台
- **只顯示免費**，並標示看圖／生圖／生影片／語音／寫程式五種能力
- 深色模式、手機版

## 系統需求

- 瀏覽網站：任何現代瀏覽器，不需要安裝任何東西。
- 修改資料或發佈套件：Node.js 18 以上（含 npm）。
- 部署到 Cloudflare：Node.js 18 以上與 Cloudflare 帳號。

## 安裝

瀏覽網站不需要安裝。

若要把資料用在自己的專案：

```powershell
npm install @qaqrain/ai-catalog
```

## 使用方式

### 瀏覽網站

線上版直接開 <https://ai-catalog.qaqrain.workers.dev/>。

本機版二選一：

- 直接雙擊 `public/index.html`。
- 或啟動內建的預覽伺服器：

```powershell
npm run preview
```

啟動後開 <http://localhost:8787/>（連接埠 8787，可用環境變數 `PORT` 更改）。

**關閉方式**：在執行 `npm run preview` 的終端按 `Ctrl+C`。關閉後該網址會無法開啟，代表伺服器已停止。

### 取用資料（npm 套件）

```js
import catalog, { items, updated, byCategory, search, getById } from "@qaqrain/ai-catalog";

console.log(updated);              // "2026-11-06"
console.log(items.length);         // 52
console.log(byCategory("chat"));   // 對話類工具
console.log(search("免費", "zh"));  // 關鍵字搜尋
console.log(getById("chatgpt"));   // 單筆資料
```

也可以直接抓 JSON，不需要安裝：

- 套件內的 `data.json`：`https://cdn.jsdelivr.net/npm/@qaqrain/ai-catalog@1/data.json`
- 整站檔案：`https://cdn.jsdelivr.net/npm/@qaqrain/ai-catalog@1/public/`

### 更新資料

1. 編輯 `data.json`，照現有格式加一筆，`id` 不重複，`cat` 用下列九種之一：

   `chat` `image` `video` `audio` `code` `search` `agent` `local` `platform`

2. 重新產生給網站用的檔案：

   ```powershell
   npm run build
   ```

   這個指令會由 `data.json` 產生 `data.mjs` 與 `public/data.js`，兩個都是產生檔，不要手動編輯。

### 發佈套件

```powershell
npm login
npm version patch
npm publish --access public
```

scoped 套件必須加 `--access public`，否則會維持私有而發佈失敗。

## 部署

```powershell
npm install -g wrangler
wrangler login
wrangler deploy
```

或在 Cloudflare 後台接上 GitHub repo，之後 push 就自動部署。

## 檔案結構

```
ai-catalog/
├── data.json             資料唯一來源（updated + items）
├── data.mjs              由 data.json 產生的 ESM 資料檔
├── index.js              套件入口：items、byCategory、search、getById
├── index.d.ts            TypeScript 型別
├── scripts/
│   ├── build-data.mjs    由 data.json 產生 data.mjs 與 public/data.js
│   └── serve.mjs         本機預覽伺服器
├── public/               網站本體（index.html、style.css、app.js、data.js）
├── wrangler.jsonc        Cloudflare 設定
├── LICENSE               程式碼授權（MIT）
├── LICENSE-DATA          資料授權（CC0 1.0）
└── README.md
```

## 授權

- 程式碼（`index.js`、`scripts/`、`public/` 內的 HTML / CSS / JS）：MIT，見 `LICENSE`。
- 資料（`data.json` 的內容）：CC0 1.0 通用，屬於公共領域，可自由使用、修改、商用，不需標註來源，見 `LICENSE-DATA`。
- 各 AI 服務的名稱與商標仍屬各廠商所有。

## 資料來源

資料由 QAQRain 人工整理自各服務官方網站與定價頁面。免費額度會隨官方政策變動，內容為靜態快照，實際以各服務官網為準。本專案與任何 AI 服務廠商無合作或背書關係。
