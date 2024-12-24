# .gitignore

## 忽略納管github

1. 忽略納管，代表不納管，版本控制，github將不存在此 檔案 或 資料夾
2. 僅本機存在，適合用在config 機敏檔案類，或本機執行檔類。



## 忽略更新是辦不到的。

忽略更新，github要存在此檔案，且忽略更新，是辦不到的。



## 建立
建立.gitignore
裡面輸入檔案或資料夾即可忽略
可以使用

```
*：匹配零個或多個字符。
?：匹配一個字符。
[]：匹配指定範圍的字符。例如，[abc] 匹配 a、b 或 c 中的任何一個字符。
!：在模式前面加上 ! 表示取反，即不要忽略該文件或目錄。
```

## 忽略檔案
config.py
test*

## 忽略資料夾
test/

## 忽略無效時
已存在於暫存區時，將無法忽略，
使用已下指令，從暫存區刪除

```cmd
git rm --cached sublime_hide.py
git rm --cached website/prodect_202405/13_sass/all.css
```

## 將所有層級的__pycache__資料夾底下所有檔案，從暫存區移除
```
git rm --cached -r '**/__pycache__/*'
```
搭配.gitignore 忽略
```
**/__pycache__/
*.py[cod]
```