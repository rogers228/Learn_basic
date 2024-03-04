# snippet 程式碼片段

輸入keyword Tab 即可產生程式碼片段，無須外掛

## 建立程式碼片段

工具 > 外掛程式開發 > 新增程式碼片段
及建立新檔如以下說明`,
儲存為 svelte_subs.sublime-snippet
預設將儲存到 C:\Users\USER\AppData\Roaming\Sublime Text 3\Packages\User
可以由 設定 > 瀏覽資源包開啟

```xml
<snippet>s
    <content><![CDATA[
let ${1:variable}; = ${2:store}.subscribe((val) => ${1:variable}=val);
]]></content>

    <!-- 觸發keyword 不可以包含空格-->
    <tabTrigger>subs</tabTrigger>
    <!-- 作用範圍檔案 可使用逗號分隔 -->
    <scope>source.js, source.svelte</scope>
    <!-- 程式碼片段敘述 -->
    <description>svelte subscribe store</description>
</snippet>
```


