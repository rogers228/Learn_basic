## Git Bash 指令介面
不要使用其它的例如 cmd, shell

## 查詢git版本
git --version 
按shift insert 等同貼上


## 切換到目錄
第一種在檔按總管下
按右鍵 Git Bash Here

第二種，較不推薦，只按cd會切換到預設目錄
1.輸入pwd，按Enter
2.輸入cd /c/...，按Enter，路徑寫法與windows不同
pwd 顯示當前
cd /C/Users/user/Documents/Rogers/git_test  切換到


## 顯示所有檔案
ls -al

## 建立檔案
touch index.html   若重複建立時，僅會改變修改時間，不會改變內容

## 建立資料夾
mkdir demo


## 建立使用者  全域
git config --global user.name "rogers Lu"
git config --global user.email "rogers2288@gmail.com"

git config --global github.token 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

##　查看使用者  全域
git config --global user.name
git config --global user.email

## 查看全域內容
git config --list

## 顯示工作目錄
pwd

## 初始化，將此工作目錄納入git，將產生一個.git資料夾(隱藏)
若想不再使用git控制，將.git整個資料夾刪除即可
git init


## 查詢目前狀態 有哪些檔案未提交
git status

## 將檔案加入  暫存區  版控追蹤
git add test.html
git add *.html   使用萬用字將所有html加入
git add --all    全部加入拉

加入暫存區之後，又持續修改，最後還是要再加入暫存區喔

## 將暫存區提交
將暫存區所有東西  提交到倉庫，就是我對此專案做了一個版本的存檔
若無輸入說明，就無法提交。
git commit -m "說明"

## 忽略檔案，不要版控，建立.gitignore檔案，裡面輸入要忽略的檔案即可
.gitignore
若已追蹤過，只能先將他刪除然後再 commit 一次

## 推送
git push origin main
