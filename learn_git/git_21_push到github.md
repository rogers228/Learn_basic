# 新增遠端節點
git remote add origin git@github.com:rogers228/Learning_git.git

git remote 遠端指令
add 新增節點名稱為origin
origin為慣例預設值 也可以改
git@github.com:kaochenlong/practice-git.git 為github對應的位址


# 將檔案上傳
git push -u origin main

將main分支內容，push推向origin位址
-u 參數代表 設定upstream  設定為上游

git push origin main


# 更換位址
git remote -v
git remote set-url origin git@github.com:rogers228/Learning_git.git
git remote set-url origin https://github.com/rogers228/Learning_git.git

# 建立token

設定
git config --global github.token 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

ssh-add ~/.ssh/git@github.com:rogers228/Learning_git.git