# Anaconda 套件

語法錯誤檢查（Linting） - 自動偵測 Python 代碼中的錯誤。
自動補全（Autocomplete） - 提供更強大的 Python 代碼補全功能，比 Sublime 內建的補全更強。
代碼格式化（Code Formatting） - 幫助統一 Python 代碼風格，像是 PEP 8。
即時 Docstring 顯示 - 允許開發者在寫程式時，快速查看函式或類別的文件說明。



## Anaconda 防火牆錯誤訊息

每次我開啟sublime text 不久後就會出現錯誤訊息如下:

anaconda woker could not start because

connection to loahosst:64129 timed out after 0.2s. tried to connect 7 times during 2.0 seconds

check that there is Python process executing the anaconda jsonserver.py script running in your system, If there is, check that you can connect to your localhost writing the following script in your Sublime Text 3 console.

import socket; socket.socket(socket.AF_INET, socket.SOCK_STREAM).connect(("localhost",64129))

if anaconda works just fine agter you received this error and the connand avove worked you can make anaconda to do now show you this error anymore setting the 'swallow_startup_errors' to 'true' in your configuration file.

手動指定 Python 解析器，實測無效

Preferences → Package Settings → Anaconda → Settings – User
```json
{
    "python_interpreter": "C:\\Python39\\python.exe"
}
```


關閉 Anaconda Worker
```
{
    "anaconda_linter": false,
    "auto_complete": false
}
```
