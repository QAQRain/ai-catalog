/* AI 工具目錄資料
 * 要新增或修改工具，只改這個檔案即可。
 * free 欄位可填："yes"（完全免費）、"limited"（部分免費）、"no"（需付費）
 * caps 欄位：vision 看圖、image 生圖、video 生影片、audio 語音、code 寫程式
 */
window.AI_DATA = {
  updated: "2026-11-06",
  items: [
    /* ---------- 對話助理 ---------- */
    {
      id: "chatgpt", name: "ChatGPT", vendor: "OpenAI", cat: "chat",
      url: "https://chatgpt.com",
      desc: {
        zh: "最通用的對話助理，可看圖、生圖、語音對話與分析檔案。",
        en: "The most general assistant: vision, image generation, voice chat and file analysis."
      },
      free: "limited",
      quota: { zh: "免費版可用基礎模型，進階模型與較高用量需訂閱 Plus", en: "Basic models are free; advanced models and higher usage need Plus" },
      caps: { vision: true, image: true, video: false, audio: true, code: true }
    },
    {
      id: "claude", name: "Claude", vendor: "Anthropic", cat: "chat",
      url: "https://claude.ai",
      desc: {
        zh: "擅長長文閱讀與寫程式，支援上傳文件與 Artifacts 即時預覽。",
        en: "Strong at long documents and coding, with file uploads and live Artifacts previews."
      },
      free: "limited",
      quota: { zh: "免費版每日有訊息上限，Pro 方案提高額度", en: "Daily message cap on free plan; Pro raises the limit" },
      caps: { vision: true, image: false, video: false, audio: false, code: true }
    },
    {
      id: "gemini", name: "Gemini", vendor: "Google", cat: "chat",
      url: "https://gemini.google.com",
      desc: {
        zh: "Google 的助理，深度整合搜尋與 Workspace，可看圖、生圖、即時語音。",
        en: "Google's assistant, tied into Search and Workspace, with vision, image generation and live voice."
      },
      free: "yes",
      quota: { zh: "免費版額度相對寬鬆，進階模型需 Google AI Pro", en: "Generous free tier; advanced models need Google AI Pro" },
      caps: { vision: true, image: true, video: false, audio: true, code: true }
    },
    {
      id: "copilot", name: "Microsoft Copilot", vendor: "Microsoft", cat: "chat",
      url: "https://copilot.microsoft.com",
      desc: {
        zh: "微軟的助理，整合 Windows 與 Office，可用 DALL·E 生圖。",
        en: "Microsoft's assistant, wired into Windows and Office, with DALL·E image generation."
      },
      free: "yes",
      quota: { zh: "免費版可用多數功能，商用整合需 Microsoft 365", en: "Most features free; business integration needs Microsoft 365" },
      caps: { vision: true, image: true, video: false, audio: true, code: true }
    },
    {
      id: "grok", name: "Grok", vendor: "xAI", cat: "chat",
      url: "https://grok.com",
      desc: {
        zh: "即時接上 X 上的討論，可看圖並生成圖片。",
        en: "Hooked into live discussions on X, with vision and image generation."
      },
      free: "limited",
      quota: { zh: "免費版有每日次數限制，重度使用需 SuperGrok", en: "Daily limits on free; heavy use needs SuperGrok" },
      caps: { vision: true, image: true, video: false, audio: false, code: true }
    },
    {
      id: "deepseek", name: "DeepSeek", vendor: "DeepSeek", cat: "chat",
      url: "https://chat.deepseek.com",
      desc: {
        zh: "以開源模型起家，推理與程式表現突出，網頁版完全免費。",
        en: "Known for open-weight models with strong reasoning and coding; the web app is free."
      },
      free: "yes",
      quota: { zh: "目前免費使用，尖峰時段可能排隊", en: "Free to use; may queue at peak times" },
      caps: { vision: true, image: false, video: false, audio: false, code: true }
    },
    {
      id: "qwen", name: "Qwen Chat", vendor: "Alibaba", cat: "chat",
      url: "https://chat.qwen.ai",
      desc: {
        zh: "阿里巴巴的通義千問，文字、生圖、生影片都在同一個介面完成。",
        en: "Alibaba's Qwen: text, image and video generation in one interface."
      },
      free: "yes",
      quota: { zh: "多數功能免費，部分生成有每日次數上限", en: "Mostly free; some generation features have daily caps" },
      caps: { vision: true, image: true, video: true, audio: true, code: true }
    },
    {
      id: "kimi", name: "Kimi", vendor: "Moonshot AI", cat: "chat",
      url: "https://www.kimi.com",
      desc: {
        zh: "超長上下文，適合整本書或大量文件一次讀完。",
        en: "Very long context, good for reading whole books or large document sets at once."
      },
      free: "yes",
      quota: { zh: "免費使用，長文件與高頻使用有每日上限", en: "Free; daily caps on long documents and heavy use" },
      caps: { vision: true, image: false, video: false, audio: false, code: true }
    },
    {
      id: "doubao", name: "豆包 Doubao", vendor: "ByteDance", cat: "chat",
      url: "https://www.doubao.com",
      desc: {
        zh: "中文對話與語音自然，附帶生圖與影片工具。",
        en: "Natural Chinese chat and voice, bundled with image and video tools."
      },
      free: "yes",
      quota: { zh: "免費使用，生成類功能有每日額度", en: "Free; generation features have daily quotas" },
      caps: { vision: true, image: true, video: true, audio: true, code: true }
    },
    {
      id: "lechat", name: "Le Chat", vendor: "Mistral AI", cat: "chat",
      url: "https://chat.mistral.ai",
      desc: {
        zh: "歐洲的 Mistral，回應速度快，支援看圖與網頁搜尋。",
        en: "Europe's Mistral: fast responses, with vision and web search."
      },
      free: "limited",
      quota: { zh: "免費版可用，Pro 解鎖更高用量", en: "Free tier available; Pro unlocks higher usage" },
      caps: { vision: true, image: true, video: false, audio: false, code: true }
    },

    /* ---------- 圖像生成 ---------- */
    {
      id: "midjourney", name: "Midjourney", vendor: "Midjourney", cat: "image",
      url: "https://www.midjourney.com",
      desc: {
        zh: "以藝術風格見長的生圖服務，現在主要在網頁版使用。",
        en: "Image generation known for its artistic style, now mostly used on the web."
      },
      free: "no",
      quota: { zh: "沒有免費方案，訂閱約 US$10/月起", en: "No free tier; plans from about US$10/month" },
      caps: { vision: true, image: true, video: true, audio: false, code: false }
    },
    {
      id: "stability", name: "Stability AI", vendor: "Stability AI", cat: "image",
      url: "https://stability.ai",
      desc: {
        zh: "Stable Diffusion 的官方平台，可調參數，也有開源模型可自架。",
        en: "Home of Stable Diffusion: tunable parameters plus open models you can self-host."
      },
      free: "limited",
      quota: { zh: "註冊贈送少量點數，之後按點數計費", en: "A few free credits at signup, then pay per credit" },
      caps: { vision: false, image: true, video: false, audio: false, code: false }
    },
    {
      id: "ideogram", name: "Ideogram", vendor: "Ideogram", cat: "image",
      url: "https://ideogram.ai",
      desc: {
        zh: "文字排版最強的生圖工具，適合海報、logo 草稿。",
        en: "Best-in-class text rendering, handy for posters and logo drafts."
      },
      free: "limited",
      quota: { zh: "免費版每日有慢速生成額度", en: "Free plan gets a daily allotment of slower generations" },
      caps: { vision: false, image: true, video: false, audio: false, code: false }
    },
    {
      id: "leonardo", name: "Leonardo AI", vendor: "Leonardo AI", cat: "image",
      url: "https://leonardo.ai",
      desc: {
        zh: "遊戲與概念美術常用，模型與風格預設豐富。",
        en: "Popular for game and concept art, with many models and style presets."
      },
      free: "limited",
      quota: { zh: "免費版每日約 150 個 token", en: "About 150 tokens per day on the free plan" },
      caps: { vision: false, image: true, video: false, audio: false, code: false }
    },
    {
      id: "firefly", name: "Adobe Firefly", vendor: "Adobe", cat: "image",
      url: "https://firefly.adobe.com",
      desc: {
        zh: "訓練資料授權清楚，適合商業使用，整合 Photoshop。",
        en: "Cleanly licensed training data for commercial use, integrated with Photoshop."
      },
      free: "limited",
      quota: { zh: "免費版每月少量生成點數", en: "A small monthly credit allowance on the free plan" },
      caps: { vision: false, image: true, video: true, audio: false, code: false }
    },
    {
      id: "designer", name: "Microsoft Designer", vendor: "Microsoft", cat: "image",
      url: "https://designer.microsoft.com",
      desc: {
        zh: "前身是 Bing Image Creator，用 DALL·E 生圖並能直接排版。",
        en: "Formerly Bing Image Creator: DALL·E generation with basic layout tools."
      },
      free: "yes",
      quota: { zh: "免費使用，用加速點數換更快的生成", en: "Free, with boost credits for faster generation" },
      caps: { vision: false, image: true, video: false, audio: false, code: false }
    },
    {
      id: "flux", name: "FLUX", vendor: "Black Forest Labs", cat: "image",
      url: "https://blackforestlabs.ai",
      desc: {
        zh: "開源生圖模型，細節與人物表現好，被多家平台採用。",
        en: "Open image model with strong detail and people rendering, used by many platforms."
      },
      free: "limited",
      quota: { zh: "官方 playground 有少量免費，其餘走 API 或第三方平台", en: "Limited free use on the official playground; otherwise API or third parties" },
      caps: { vision: false, image: true, video: false, audio: false, code: false }
    },
    {
      id: "recraft", name: "Recraft", vendor: "Recraft", cat: "image",
      url: "https://www.recraft.ai",
      desc: {
        zh: "專攻向量圖與品牌風格一致的生圖工具。",
        en: "Focused on vector output and consistent brand styling."
      },
      free: "limited",
      quota: { zh: "免費版每日少量點數", en: "A small daily credit allowance on the free plan" },
      caps: { vision: false, image: true, video: false, audio: false, code: false }
    },

    /* ---------- 影片生成 ---------- */
    {
      id: "sora", name: "Sora", vendor: "OpenAI", cat: "video",
      url: "https://sora.com",
      desc: {
        zh: "用文字或圖片生成影片，畫面連貫性佳。",
        en: "Text- or image-to-video generation with strong scene consistency."
      },
      free: "limited",
      quota: { zh: "免費額度很少，主要搭配 ChatGPT 付費方案", en: "Very small free allowance; mostly bundled with paid ChatGPT" },
      caps: { vision: true, image: true, video: true, audio: true, code: false }
    },
    {
      id: "veo", name: "Veo", vendor: "Google", cat: "video",
      url: "https://deepmind.google/models/veo/",
      desc: {
        zh: "Google 的影片生成模型，可同時產生環境音效。",
        en: "Google's video model, able to generate matching ambient audio."
      },
      free: "limited",
      quota: { zh: "透過 Gemini 免費版有限次使用，Pro 較多", en: "Limited uses through free Gemini; more on Pro" },
      caps: { vision: true, image: true, video: true, audio: true, code: false }
    },
    {
      id: "runway", name: "Runway", vendor: "Runway", cat: "video",
      url: "https://runwayml.com",
      desc: {
        zh: "專業影片生成與剪輯工具，Gen 系列模型。",
        en: "Professional video generation and editing with the Gen model family."
      },
      free: "limited",
      quota: { zh: "註冊送一次性點數，之後需訂閱", en: "One-time free credits at signup, then subscription" },
      caps: { vision: true, image: true, video: true, audio: false, code: false }
    },
    {
      id: "pika", name: "Pika", vendor: "Pika", cat: "video",
      url: "https://pika.art",
      desc: {
        zh: "輕量好上手的影片生成，特效模板多。",
        en: "Lightweight video generation with plenty of effect templates."
      },
      free: "limited",
      quota: { zh: "免費版每月少量點數", en: "A small monthly credit allowance on the free plan" },
      caps: { vision: true, image: true, video: true, audio: false, code: false }
    },
    {
      id: "kling", name: "Kling 可靈", vendor: "Kuaishou", cat: "video",
      url: "https://klingai.com",
      desc: {
        zh: "人物動作與物理表現不錯，有每日免費額度。",
        en: "Good human motion and physics, with a daily free allowance."
      },
      free: "limited",
      quota: { zh: "每日登入贈送點數", en: "Daily login credits" },
      caps: { vision: true, image: true, video: true, audio: false, code: false }
    },
    {
      id: "hailuo", name: "Hailuo 海螺", vendor: "MiniMax", cat: "video",
      url: "https://hailuoai.video",
      desc: {
        zh: "生成速度快，社群模板多，中文提示詞支援好。",
        en: "Fast generation, lots of community templates, strong Chinese prompts."
      },
      free: "limited",
      quota: { zh: "每日免費點數", en: "Daily free credits" },
      caps: { vision: true, image: true, video: true, audio: false, code: false }
    },
    {
      id: "luma", name: "Luma Dream Machine", vendor: "Luma AI", cat: "video",
      url: "https://lumalabs.ai/dream-machine",
      desc: {
        zh: "運鏡自然，可用圖片轉影片。",
        en: "Natural camera movement, with image-to-video support."
      },
      free: "limited",
      quota: { zh: "免費版每月少量生成次數", en: "A small monthly generation allowance on the free plan" },
      caps: { vision: true, image: true, video: true, audio: false, code: false }
    },

    /* ---------- 音樂與語音 ---------- */
    {
      id: "suno", name: "Suno", vendor: "Suno", cat: "audio",
      url: "https://suno.com",
      desc: {
        zh: "用文字生成完整歌曲（含人聲），華語也支援。",
        en: "Full songs from text prompts, vocals included; Chinese works too."
      },
      free: "limited",
      quota: { zh: "免費版每日約 50 點，可生成約 10 首", en: "About 50 credits per day, roughly 10 songs" },
      caps: { vision: false, image: false, video: false, audio: true, code: false }
    },
    {
      id: "udio", name: "Udio", vendor: "Udio", cat: "audio",
      url: "https://www.udio.com",
      desc: {
        zh: "音樂生成，編曲與混音細節佳。",
        en: "Music generation with detailed arrangement and mixing."
      },
      free: "limited",
      quota: { zh: "免費版每月有生成額度", en: "A monthly generation allowance on the free plan" },
      caps: { vision: false, image: false, video: false, audio: true, code: false }
    },
    {
      id: "elevenlabs", name: "ElevenLabs", vendor: "ElevenLabs", cat: "audio",
      url: "https://elevenlabs.io",
      desc: {
        zh: "最自然的文字轉語音與聲音複製，支援多語言。",
        en: "Very natural text-to-speech and voice cloning across many languages."
      },
      free: "limited",
      quota: { zh: "免費版每月約 1 萬字元", en: "About 10,000 characters per month on the free plan" },
      caps: { vision: false, image: false, video: false, audio: true, code: false }
    },

    /* ---------- 程式開發 ---------- */
    {
      id: "copilot-gh", name: "GitHub Copilot", vendor: "GitHub", cat: "code",
      url: "https://github.com/features/copilot",
      desc: {
        zh: "編輯器內的寫程式助手：補完、對話、程式碼審查。",
        en: "In-editor coding assistant: completions, chat and code review."
      },
      free: "limited",
      quota: { zh: "免費方案每月約 2,000 次補完與 50 次對話", en: "Free plan gives about 2,000 completions and 50 chats per month" },
      caps: { vision: true, image: false, video: false, audio: false, code: true }
    },
    {
      id: "cursor", name: "Cursor", vendor: "Anysphere", cat: "code",
      url: "https://cursor.com",
      desc: {
        zh: "以 AI 為核心的編輯器，能整個專案一起改。",
        en: "An AI-first editor that can refactor across a whole project."
      },
      free: "limited",
      quota: { zh: "免費 Hobby 方案功能受限，Pro 約 US$20/月", en: "Limited free Hobby plan; Pro is about US$20/month" },
      caps: { vision: true, image: false, video: false, audio: false, code: true }
    },
    {
      id: "windsurf", name: "Windsurf", vendor: "Windsurf", cat: "code",
      url: "https://windsurf.com",
      desc: {
        zh: "另一個 AI 編輯器，主打自動串接多步驟修改。",
        en: "Another AI editor, focused on chaining multi-step edits automatically."
      },
      free: "limited",
      quota: { zh: "免費版每月少量 credits", en: "A small monthly credit allowance on the free plan" },
      caps: { vision: true, image: false, video: false, audio: false, code: true }
    },
    {
      id: "claude-code", name: "Claude Code", vendor: "Anthropic", cat: "code",
      url: "https://www.anthropic.com/claude-code",
      desc: {
        zh: "在終端機裡操作整個專案，適合大型重構。",
        en: "Works on your whole project from the terminal; good for large refactors."
      },
      free: "no",
      quota: { zh: "需 Claude 付費方案或 API 額度", en: "Requires a paid Claude plan or API credits" },
      caps: { vision: true, image: false, video: false, audio: false, code: true }
    },
    {
      id: "v0", name: "v0", vendor: "Vercel", cat: "code",
      url: "https://v0.dev",
      desc: {
        zh: "用一句話生成網頁介面，直接給 React 程式碼。",
        en: "Generate a web UI from one sentence and get React code back."
      },
      free: "limited",
      quota: { zh: "免費版每月少量點數", en: "A small monthly credit allowance on the free plan" },
      caps: { vision: true, image: false, video: false, audio: false, code: true }
    },
    {
      id: "bolt", name: "Bolt.new", vendor: "StackBlitz", cat: "code",
      url: "https://bolt.new",
      desc: {
        zh: "在瀏覽器裡生成並直接執行完整專案。",
        en: "Generate and run full projects right inside the browser."
      },
      free: "limited",
      quota: { zh: "免費版每日 token 額度", en: "Daily token allowance on the free plan" },
      caps: { vision: true, image: false, video: false, audio: false, code: true }
    },
    {
      id: "lovable", name: "Lovable", vendor: "Lovable", cat: "code",
      url: "https://lovable.dev",
      desc: {
        zh: "對話式全端開發，直接接上資料庫與部署。",
        en: "Conversational full-stack building, wired to a database and deployment."
      },
      free: "limited",
      quota: { zh: "免費版每日少量訊息", en: "A few messages per day on the free plan" },
      caps: { vision: true, image: false, video: false, audio: false, code: true }
    },
    {
      id: "replit", name: "Replit", vendor: "Replit", cat: "code",
      url: "https://replit.com",
      desc: {
        zh: "雲端 IDE 加上 Agent，從寫程式到部署都在瀏覽器完成。",
        en: "Cloud IDE plus an agent; write and deploy entirely in the browser."
      },
      free: "limited",
      quota: { zh: "免費 Starter 有基本額度，Agent 需付費", en: "Free Starter has basic limits; the agent needs a paid plan" },
      caps: { vision: false, image: false, video: false, audio: false, code: true }
    },

    /* ---------- 搜尋與研究 ---------- */
    {
      id: "perplexity", name: "Perplexity", vendor: "Perplexity", cat: "search",
      url: "https://www.perplexity.ai",
      desc: {
        zh: "會附上來源的 AI 搜尋引擎。",
        en: "An AI search engine that cites its sources."
      },
      free: "yes",
      quota: { zh: "免費版每日有限次 Pro 搜尋", en: "Limited Pro searches per day on the free plan" },
      caps: { vision: true, image: false, video: false, audio: false, code: false }
    },
    {
      id: "notebooklm", name: "NotebookLM", vendor: "Google", cat: "search",
      url: "https://notebooklm.google.com",
      desc: {
        zh: "上傳文件做成筆記，能生成語音摘要（類 Podcast）。",
        en: "Turn uploaded documents into notes, including podcast-style audio summaries."
      },
      free: "yes",
      quota: { zh: "免費版有來源數量與每日次數上限", en: "Free plan caps the number of sources and daily requests" },
      caps: { vision: true, image: false, video: false, audio: true, code: false }
    },
    {
      id: "genspark", name: "Genspark", vendor: "Genspark", cat: "search",
      url: "https://www.genspark.ai",
      desc: {
        zh: "搜尋加自動整理的代理人，會產出完整報告。",
        en: "A search-and-synthesize agent that produces full reports."
      },
      free: "limited",
      quota: { zh: "免費版每日少量點數", en: "A small daily credit allowance on the free plan" },
      caps: { vision: true, image: true, video: false, audio: false, code: false }
    },
    {
      id: "felo", name: "Felo", vendor: "Felo", cat: "search",
      url: "https://felo.ai",
      desc: {
        zh: "中文搜尋體驗好，可自動整理成簡報。",
        en: "Strong Chinese search experience that can turn results into slides."
      },
      free: "yes",
      quota: { zh: "免費版可用，進階功能需訂閱", en: "Free tier available; advanced features need a subscription" },
      caps: { vision: true, image: true, video: false, audio: false, code: false }
    },
    {
      id: "phind", name: "Phind", vendor: "Phind", cat: "search",
      url: "https://www.phind.com",
      desc: {
        zh: "針對工程師的搜尋，答案以程式碼為主。",
        en: "Search built for engineers, with answers centered on code."
      },
      free: "limited",
      quota: { zh: "免費版每日有限次數", en: "Daily limits on the free plan" },
      caps: { vision: true, image: false, video: false, audio: false, code: true }
    },

    /* ---------- 自動化代理 ---------- */
    {
      id: "manus", name: "Manus", vendor: "Manus", cat: "agent",
      url: "https://manus.im",
      desc: {
        zh: "收到任務後自己開瀏覽器、寫程式、產出檔案。",
        en: "Takes a task, then drives a browser, writes code and produces files on its own."
      },
      free: "limited",
      quota: { zh: "免費版每日少量任務額度", en: "A small daily task allowance on the free plan" },
      caps: { vision: true, image: false, video: false, audio: false, code: true }
    },
    {
      id: "devin", name: "Devin", vendor: "Cognition", cat: "agent",
      url: "https://devin.ai",
      desc: {
        zh: "會自己開 PR 的工程代理人，偏向團隊付費使用。",
        en: "An engineering agent that opens its own pull requests; aimed at paid teams."
      },
      free: "no",
      quota: { zh: "沒有免費方案，按席位計費", en: "No free tier; billed per seat" },
      caps: { vision: true, image: false, video: false, audio: false, code: true }
    },
    {
      id: "n8n", name: "n8n", vendor: "n8n", cat: "agent",
      url: "https://n8n.io",
      desc: {
        zh: "視覺化自動化流程，可串接數百種服務與 LLM。",
        en: "Visual workflow automation that connects hundreds of services and LLMs."
      },
      free: "yes",
      quota: { zh: "自架完全免費；雲端試用後付費", en: "Free when self-hosted; the cloud version is paid after a trial" },
      caps: { vision: false, image: false, video: false, audio: false, code: true }
    },
    {
      id: "dify", name: "Dify", vendor: "LangGenius", cat: "agent",
      url: "https://dify.ai",
      desc: {
        zh: "開源 LLMOps 平台，拖拉就能做出 RAG 與聊天機器人。",
        en: "Open-source LLMOps platform for building RAG apps and chatbots by drag and drop."
      },
      free: "yes",
      quota: { zh: "自架免費；雲端有免費方案", en: "Free to self-host; the cloud plan has a free tier" },
      caps: { vision: true, image: false, video: false, audio: false, code: true }
    },

    /* ---------- 本機執行 ---------- */
    {
      id: "ollama", name: "Ollama", vendor: "Ollama", cat: "local",
      url: "https://ollama.com",
      desc: {
        zh: "一行指令就在本機跑開源模型，資料不出門。",
        en: "Run open models locally with one command; your data never leaves the machine."
      },
      free: "yes",
      quota: { zh: "完全免費，吃自己的顯卡與記憶體", en: "Completely free; uses your own GPU and memory" },
      caps: { vision: true, image: false, video: false, audio: false, code: true }
    },
    {
      id: "lmstudio", name: "LM Studio", vendor: "LM Studio", cat: "local",
      url: "https://lmstudio.ai",
      desc: {
        zh: "圖形介面的本機模型工具，可直接下載與對話。",
        en: "A GUI for local models: download and chat without touching a terminal."
      },
      free: "yes",
      quota: { zh: "免費，個人與非商業用途", en: "Free for personal and non-commercial use" },
      caps: { vision: true, image: false, video: false, audio: false, code: true }
    },
    {
      id: "jan", name: "Jan", vendor: "Menlo Research", cat: "local",
      url: "https://jan.ai",
      desc: {
        zh: "開源離線助理，介面像 ChatGPT，完全在本地跑。",
        en: "Open-source offline assistant with a ChatGPT-like UI, fully local."
      },
      free: "yes",
      quota: { zh: "完全免費", en: "Completely free" },
      caps: { vision: true, image: false, video: false, audio: false, code: true }
    },

    /* ---------- 平台與 API ---------- */
    {
      id: "poe", name: "Poe", vendor: "Quora", cat: "platform",
      url: "https://poe.com",
      desc: {
        zh: "一次訂閱就能用多家模型，也能自訂 Bot。",
        en: "One subscription for many vendors' models, plus custom bots."
      },
      free: "limited",
      quota: { zh: "免費版每日少量點數", en: "A small daily point allowance on the free plan" },
      caps: { vision: true, image: true, video: false, audio: true, code: false }
    },
    {
      id: "huggingface", name: "Hugging Face", vendor: "Hugging Face", cat: "platform",
      url: "https://huggingface.co",
      desc: {
        zh: "開源模型的集散地，可線上試玩 Spaces。",
        en: "The hub for open models, with Spaces you can try in the browser."
      },
      free: "yes",
      quota: { zh: "免費額度足夠試用，推論端點需付費", en: "Free tier is enough to explore; inference endpoints are paid" },
      caps: { vision: true, image: true, video: false, audio: true, code: true }
    },
    {
      id: "openrouter", name: "OpenRouter", vendor: "OpenRouter", cat: "platform",
      url: "https://openrouter.ai",
      desc: {
        zh: "一個 API 金鑰呼叫各家模型，也有免費模型可用。",
        en: "One API key for many vendors' models, including some free ones."
      },
      free: "yes",
      quota: { zh: "標示 :free 的模型可免費呼叫，有速率限制", en: "Models marked :free cost nothing, with rate limits" },
      caps: { vision: true, image: true, video: false, audio: false, code: true }
    },
    {
      id: "groq", name: "Groq", vendor: "Groq", cat: "platform",
      url: "https://groq.com",
      desc: {
        zh: "推論速度極快，免費層就能跑開源大模型。",
        en: "Extremely fast inference; the free tier runs large open models."
      },
      free: "yes",
      quota: { zh: "免費層有每分鐘與每日請求上限", en: "Free tier has per-minute and daily request caps" },
      caps: { vision: true, image: false, video: false, audio: true, code: true }
    }
  ]
};
