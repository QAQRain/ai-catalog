# TODO

## 待辦

- [ ] 安裝 Node.js 18 以上（目前這台電腦的 `node` / `npm` 不在 PATH）
- [ ] 註冊 npm 帳號並開啟兩步驟驗證（2FA）
- [ ] `npm login` 後執行 `npm pack --dry-run`，確認套件內容與大小
- [ ] 執行 `npm publish --access public` 首次發佈
- [ ] 發佈後在 README 加上 npm 版本 badge

## 已完成

- [x] 把 `public/data.js` 的資料抽成 `data.json`（52 筆）
- [x] 由 `data.json` 產生 `data.mjs` 與 `public/data.js`
- [x] 新增套件入口 `index.js` 與型別 `index.d.ts`
- [x] 新增 `scripts/build-data.mjs`（重建產生檔）與 `scripts/serve.mjs`（本機預覽）
- [x] 新增 `package.json`（`@qaqrain/ai-catalog` 1.0.0）
- [x] 新增 `LICENSE`（MIT）與 `LICENSE-DATA`（CC0 1.0）
- [x] 更新 README 的安裝、使用、關閉、檔案結構與授權段落

## 決策紀錄

- **不發佈到 crates.io**：crates.io 只收 Rust crate，本專案是純靜態網站，沒有 Rust 程式碼，重寫成本過高。
- **改以 npm 發佈資料套件**：讓他人可 `npm install` 或經 jsDelivr 直接取用 `data.json`。
- **套件包含整個 `public/`**：除了資料，也讓他人能自行架設同一份網站。
- **資料授權採 CC0 1.0**：完全放棄權利，不要求標註來源，降低轉用門檻；程式碼維持 MIT。
- **`data.json` 為唯一資料來源**：`data.mjs` 與 `public/data.js` 一律由 `npm run build` 產生，不手動編輯。
