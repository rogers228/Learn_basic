# Anaconda 套件

語法錯誤檢查（Linting） - 自動偵測 Python 代碼中的錯誤。
自動補全（Autocomplete） - 提供更強大的 Python 代碼補全功能，比 Sublime 內建的補全更強。
代碼格式化（Code Formatting） - 幫助統一 Python 代碼風格，像是 PEP 8。
即時 Docstring 顯示 - 允許開發者在寫程式時，快速查看函式或類別的文件說明。



## Anaconda 防火牆錯誤訊息

手動指定 Python 解析器

Preferences → Package Settings → Anaconda → Settings – User
```json
{
    "python_interpreter": "C:\\Python39\\python.exe"
}
```

開啟 Windows 防火牆，允許 Sublime Text 連線：
控制台 → Windows Defender 防火牆 → 允許應用程式通過防火牆
找到 Sublime Text 和 Python，確保它們允許通過防火牆。