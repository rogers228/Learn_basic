# 配置vue環境
https://github.com/sublimelsp/LSP-volar

## 安裝套件
LSP-Volar

## 設定專案配置
為你的vue專案設定專屬的專案配置
這將只屬於這一個專案的配置
在專案資料夾中建立一個檔案名為vue.sublime-project
```
{
    "folders":
    [
        {
            "path": "."
        }
    ],
    "settings": {
        "LSP": {
            "LSP-volar": {
                "selector": "text.html.vue | source.ts | source.tsx | source.js | source.jsx"
            },
            "LSP-typescript": {
                "enabled": false
            }
        }
    }
}
```


## 設定
設定全域使用者設定
設定>Package Setting> LSP > Servers > LSP-volar
會出現設定視窗，左方為公用, 右方為使用者自訂
在右方貼上
```
// Settings in here override those in "LSP-volar/LSP-volar.sublime-settings"

{
    "selector": "text.html.vue | source.ts | source.tsx | source.js | source.jsx"
}
```

## 設定 鑲入提示
通提示應輸入的類型或引數名稱，直接鑲入顯示在sublime中


