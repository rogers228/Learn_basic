# 使用python執行push to github

## 建立 Personal access tokens (classic)

github頭像 > settings > Personal access tokens > tokens (classic)

button > generate new token > generate new token (classic)

建立後得到 token 字串，請紀錄好

## python push

```py
import os, sys
from git import Repo

sys.path.append(os.getenv('GRST_PATH'))
from global_config import OPTION
GITHUB_ACCOUNT = OPTION.get("GITHUB_ACCOUNT")
GITHUB_ACCESS_TOKENS = OPTION.get("GITHUB_ACCESS_TOKENS")

def git_push(repo_path, token, username, repo_name):
    try:
        repo = Repo(repo_path)
        authenticated_url = f"https://{token}@github.com/{username}/{repo_name}.git"
        # 修改遠端 (origin) 的網址
        origin = repo.remote(name='origin')
        origin.set_url(authenticated_url)
        # 執行 Push
        print(f"🚀 push {repo_name}...")
        repo.git.add(A=True) # 將工作目錄中所有的變動（新增、修改、刪除）全部放進「暫存區 (Staging Area)」
        repo.index.commit("auto update from svelte-ssg") # 將暫存區的內容永久存入本地資料庫，產生一個新的節點 (Commit)，並附上訊息
        origin.push() # 將剛才產生的那個新節點上傳到 GitHub
        print("✅ push success!")
        return True

    except Exception as e:
        print(f"❌ Token 驗證推送失敗: {e}")
        return False

git_push(repo_path=WEB_ISCP_SVELTE,token=GITHUB_ACCESS_TOKENS,
    username=GITHUB_ACCOUNT, repo_name='web_iscp_svelte') # push web_iscp_svelte, netlify將自動部屬
```

