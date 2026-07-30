# 錯誤是怎麼產生的？

文字檔在電腦裡其實是一長串字元。當你在文字檔裡按下 Enter 換行時：

Windows 系統：會寫入兩個隱形字元 \r\n (CRLF, Carriage Return + Line Feed)。
Linux / macOS 系統：只會寫入一個隱形字元 \n (LF, Line Feed)。


正常的 .sh 開頭
#!/bin/bash\n  \n為隱藏符號
讀取 #!/bin/bash

linux 讀取 windows產生的.sh
#!/bin/bash\r\n  \n為隱藏符號
讀取 #!/bin/bash\r  把\r當成路徑造成找不到 r



# 讓 Sublime Text 自動把所有 .sh 腳本存成 Linux 格式（最推薦）

用 Sublime Text 開啟任意一個 .sh 檔案。

點擊頂部選單的 Preferences ➔ Settings - Syntax Specific（語法特定設定）。

右側會打開一個專屬於 Shell Script 的設定檔，請貼上這行：

```JSON
{
    "default_line_ending": "unix"
}
```

按 Ctrl + S 存檔。
效果： 這樣設定後，你在 Sublime Text 編輯 Python、HTML 或其他 Windows 檔案時依然保持預設；只有當你編輯 .sh 檔案時，Sublime Text 才會自動強制用 Linux (Unix) 的 \n 換行格式存檔！


# 在 linux的臨時做法

## 消除 Windows 換行符號 (\r)

\r 會導致 錯誤無法執行，在 linux的臨時做法

消除 Windows 換行符號 (\r)
```
sed -i 's/\r$//' /home/rogers/projects/ispc_watcher/check_all.sh
```