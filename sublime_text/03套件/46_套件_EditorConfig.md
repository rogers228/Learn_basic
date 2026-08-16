# EditorConfig

EditorConfig 是一個用來跨不同編輯器（如 Sublime Text, VS Code, WebStorm）跨不同作業系統（Windows, macOS, Linux）維護統一程式碼風格的工具。

它透過在專案根目錄下放置一份文字設定檔 .editorconfig，讓所有開啟該專案的編輯器自動遵守相同的縮排、換行符號與字元集格式。

結論：對你的開發環境（Sublime Text + Windows + Cloudflare/SvelteKit）來說，非常有安裝的必要！


1. 徹底解決跨平台換行問題（Windows CRLF vs Linux LF）
你在 Windows 上開發，預設換行符號是 CRLF，但 Cloudflare / Linux 伺服器與 SvelteKit 的編譯環境需要 LF。如果沒有 EditorConfig，Sublime Text 很有可能在新建檔案時自動存成 CRLF，進而再次觸發 GitHub Desktop 的換行警告或 Linux 部署報錯。


🛠️ 如何在 Sublime Text 中安裝 EditorConfig？
在 Sublime Text 中按下 Ctrl + Shift + P 開啟 Command Palette。

輸入 Package Control: Install Package 並 Enter。

搜尋 EditorConfig 並點擊安裝。

安裝完成後，只要專案根目錄有 .editorconfig，Sublime Text 在你開啟、建立或儲存檔案時，就會自動將換行符號強制轉為 LF、將縮排鎖定為 2 個空格，完全不用手動調整！