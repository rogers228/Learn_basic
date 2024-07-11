

## 生成SSH KEY

ssh-keygen -t rsa -b 4096 -C "rogers2288@gmail.com"
將生成公鑰 及 私鑰

輸入簡單密碼，及再次輸入，輸入時命令行看不到反應是正常的
要記得簡單密碼

將生成於資料夾 C:\Users\user\.ssh

GitHub 設定 "SSH and GPG keys" 添加 new ssh key
設定名稱，並將id_rsa.pub的內容貼上，後儲存，成功後會收到email

將您的 Git 遠端 URL 從 HTTPS 更新為 SSH
每個專案都要設定

git remote set-url origin git@github.com:rogers228/selecter_fwjs.git


## 使用git bash 操作

"echo run by Git Bash",
"cd /c/Users/user/Documents/Rogers/selecter_fwjs", # 切換目錄
'eval "$(ssh-agent -s)"',                          # 啟動SSL代理
'ssh-add /c/Users/user/.ssh/id_rsa',               # 添加 SSL KEY
'ghijwacn',                                        # key
'git add --all',                                   # 全部加入暫存區
'git commit -m "addnew"',                          # 提交註解
'git push origin main',                            # push
