# 重新開始

當你覺得git紀錄想要重新開始，可以使用以下，
前提是單獨開發，時沒有團隊時可用。

## 1. 刪除遠端 github 

1. 使用 Github Desktop 在倉庫 按右鍵，view in gitgub，將開啟 github網頁
2. settings > 拉到最下 Delete this Repository 將倉庫刪除


## 2. 刪除本地 .git資料夾
預設.git是隱藏的，在檔案總管中，可以打開顯示隱藏的項目，就會看到.git
可以手動刪除，也可以命令刪除，
刪除後，在Github Desktop中，將不存在該專案。(不再納管)

```cmd
cd /d your_project
rm -rf .git
```

## 3. 初始化 .git
以下命令會重新建立 .git資料夾\
```
git init
```

## 4. 重新使用 github desktop 管理
File > Add Local Repository (新增本地倉庫)
