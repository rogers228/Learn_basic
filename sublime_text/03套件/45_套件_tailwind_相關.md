# 1. LSP 與 LSP-tailwindcss（最重要！自動補全心臟）

這是 Sublime Text 官方生態中最推薦的寫法。它是透過 LSP (Language Server Protocol) 直接連結 Tailwind 官方的語言伺服器，功能與 VS Code 的官方套件完全一致！

功能：

自動補全：輸入 Class 名稱（例如 bg-bl...）時跳出提示選單。

即時 CSS 預覽：當游標停在 p-4 或 flex 上時，會彈出浮動視窗顯示它對應的真實 CSS（例如 padding: 1rem;）。

色彩預覽：提示選單旁會直接顯示顏色的色區色塊。

⚙️ 安裝與設定方式：
按下 Ctrl + Shift + P (Mac: Cmd + Shift + P) 開啟 Package Control。

輸入 Install Package，搜尋並安裝 LSP。

再次開啟 Package Control，搜尋並安裝 LSP-tailwindcss

再次開啟 Package Control，搜尋並安裝 LSP-svelte

讓 LSP-tailwindcss 支援 .svelte 檔案：
安裝完成後，開啟 Sublime 的選單 

Preferences > Package Settings > LSP > Servers > LSP-tailwindcss
```
{
  "selector": "text.html, source.css, source.js, source.ts, text.html.svelte, source.svelte"
}
```
Preferences > Package Settings > LSP > Servers > LSP-svelte
```
{
  "enabled": true,
  "settings": {
    "svelte": {
      "plugin": {
        "svelte": { "enable": true },
        "css": { "enable": true },
        "ts": { "enable": true }
      }
    }
  }
}
```



## 重啟 LSP 伺服器驗證
設定完畢後，不需要關閉 Sublime，可以直接重載 LSP 服務：

按下 Ctrl + Shift + P 開啟指令面板。
輸入 LSP: Restart Servers 並按 Enter。

打開你的 .svelte 檔，測試以下兩件事：

測 Tailwind：在 HTML 標籤裡輸入 class="bg-red- 並按下 Ctrl + Space，應該要出現顏色補全選單。
測 Svelte/TS：游標移到 <script> 內的變數上，應該會顯示型態提示。

# 2. Svelte（Svelte 語法高亮）

要在 Sublime Text 裡順暢開發 SvelteKit，必須讓 Sublime 看懂 .svelte 檔案的結構（HTML + TS + CSS 三合一）。功能：提供 .svelte 檔案的語法高亮（Syntax Highlighting）與基礎縮排支援。安裝：Package Control > Svelte 安裝即可。

# 3. Color Highlight（直接高亮顯示所有顏色）
功能：不僅支援 HEX/RGB，還能為程式碼中的顏色值加上背景色或底線高亮。安裝：Ctrl + Shift + P > Install Package > 搜尋 Color Highlight。



