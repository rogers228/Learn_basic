# Open URL

打開他，在markdown 直接打開檔案跳到指定行數


Ctrl + Shift + P -> Package Control: Install Package -> 搜尋 Open URL -> 安裝

安裝後就能使用

(test.svelte:10:1)
$HOME/Desktop
https://news.ycombinator.com
google.com
search_for_me
(svelte/src/App.svelte)

點擊以上游標到 Ctrl + Alt + U 再按Enter，非常難用

使用滑數開啟，設定如下
點擊選單：Preferences -> Browse Packages...。
進入 User 資料夾。
建立一個新檔案，命名為 Default (Windows).sublime-mousemap

將以下代碼貼入並儲存：
```
[
    {
        "button": "button1",
        "count": 1,
        "modifiers": ["ctrl"],
        "command": "open_url",
        "args": { "show_menu": false }
    }
]
```
只要按住 Ctrl 並點擊 test.svelte:10:5，它就會立刻跳轉到該檔案的該行。
```
(test.svelte:10:1)
$HOME/Desktop
https://news.ycombinator.com
google.com
search_for_me
(svelte/src/App.svelte)
```


