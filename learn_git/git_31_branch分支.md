# branch分支
通常主分支是 main, 開發新功能的分支是 feature

## 查看分支
git branch

## 重新命名分支為main
若舊有的名稱為master，建議重新命名為main
git branch -M main
-M 為大寫

## 開啟gitk (GUI介面)
gitk --all

## 開啟gitk (GUI介面) 獨立執行  讓bash可以下指令
gitk --all &

## 建立分支
git branch feature

## 切換過去分支
git checkout feature

以上2個命令可以合併
## 創建並切換到新分支
git checkout -b feature

## 在開發完畢後，使用過沒有問題，就要轉正為  main
以main的角度來看，將feature合併過來
先切換
git checkout main
git merge feature

## 將main的最新檔案整理過來feature
而我僅專注在我開發的項目即可
先切換
git checkout feature
git rebase main

## 查看2個branch的不同
git diff main cat

## 刪除分支
如果已經開發完成，也完成將分支合併到主幹，就可以把分支刪除，維持乾淨
或者，開發到一半失敗，直接刪除分支
先切換
git checkout main
git branch -d feature
git branch -D feature     不管feature暫存區是否有 一律強制刪除


