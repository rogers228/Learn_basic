工具 > 編譯系統 > 新增編譯系統 > 儲存
以下可以測試看看


```Python_312.sublime-build
{
    "cmd": ["C:\\Python312\\python.exe", "-u", "$file"],
    "env": {"PYTHONIOENCODING": "utf-8"},
    "file_regex": "^[ ]*File \"(...*?)\", line ([0-9]*)",
    "selector": "source.python"
}
```

```Python_312.sublime-build
    "cmd": ["C:\\Users\\USER\\Documents\\py_env\\py312\\python.exe", "-u", "$file"],
    "file_regex": "^[ ]*File \"(...*?)\", line ([0-9]*)",
    "selector": "source.python",
    "shell": true,
    "encoding": "utf-8"
```
