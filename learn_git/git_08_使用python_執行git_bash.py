if True:
    import sys, os
    import subprocess

    sys.path.append(os.getenv('GRST_PATH'))
    from global_config import OPTION, current_base_path
    from tool_path import windows_to_posix

    PROJECT_PATH = os.path.join(current_base_path(), 'selecter_fwjs') # for git bash
    # print(PROJECT_PATH)

def run_git_bash(commands):
    git_bash_path = OPTION.get('GITBASH_PATH')[os.environ['COMPUTERNAME']]
    bash_commands = [f"{e}" for e in commands] # 過濾
    bash_script = "\n".join(bash_commands)
    # print(bash_script)
    try:
        result = subprocess.run([git_bash_path], input=bash_script, text=True, capture_output=True, check=True, encoding='utf-8')
        print(result.stdout)

    except subprocess.CalledProcessError as e:
        print("Error executing Git Bash commands:")
        print(e.stderr)

def checkout(branch): # 切換分支
    commands = [
        "echo Run by Git Bash",
        f"cd {windows_to_posix(PROJECT_PATH)}", # 以 posix路徑 格式 切換為專案目錄
        "pwd",
        f"git checkout {branch}",
    ]
    run_git_bash(commands)


def push_current(comment): # 推送當前分支
    commands = [
        "echo Run by Git Bash",
        f"cd {windows_to_posix(PROJECT_PATH)}", # 以 posix路徑 格式 切換為專案目錄
        "pwd",
        "echo Run SSL Proxy",
        'eval "$(ssh-agent -s)"',               # 啟動SSL代理
        "ssh-add C:/Users/user/.ssh/id_rsa",    # 添加公鑰匙
        f"{OPTION.get('SSH_KEY_S')}",
        'echo "Current branch: $(git branch --show-current)"', ## Current branch
        'git add --all',                        # 全部加入暫存區
        f'git commit -m "{comment}"',           # 提交註解
        'git push',                             # push
    ]
    run_git_bash(commands)

if __name__ == '__main__':
    # checkout('main')        # 切換至 main
    # checkout('feature')     # 切換至 feature
    push_current('調整快速選單')
