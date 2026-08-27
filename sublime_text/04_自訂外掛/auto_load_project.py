import sublime
import sublime_plugin
import os
import glob

# 用於紀錄已處理過的視窗 ID，避免重複處理
PROCESSED_WINDOWS = set()

def check_and_load_project(window):
    if not window or window.id() in PROCESSED_WINDOWS:
        return

    folders = window.folders()
    # 只有當「開啟了單一資料夾」且「當前視窗尚未載入專案檔」時才處理
    if len(folders) == 1 and not window.project_file_name():
        target_dir = folders[0]
        search_pattern = os.path.join(target_dir, "*.sublime-project")
        project_files = glob.glob(search_pattern)

        if project_files:
            target_project = project_files[0]
            PROCESSED_WINDOWS.add(window.id())

            print(f"[AutoLoadProject] 正在套用專案檔並關閉原視窗: {target_project}")

            def replace_window():
                # 1. 另開專案視窗
                window.run_command("open_project_or_workspace", {
                    "file": target_project,
                    "new_window": True
                })
                # 2. 關閉舊視窗
                window.run_command("close_window")

            # 延遲 150ms 確保視窗初始化完畢後執行替換
            sublime.set_timeout(replace_window, 150)

class AutoLoadProjectListener(sublime_plugin.EventListener):
    def on_activated_async(self, view):
        """當 View 獲得焦點時觸發"""
        window = view.window()
        if window:
            check_and_load_project(window)