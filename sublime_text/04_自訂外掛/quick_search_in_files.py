# quick_search_in_files.py
# 將檔案放在 C:\Users\user\AppData\Roaming\Sublime Text 3\Packages\User

# 使用說明
# ctrl + left click 點擊  main.js@handleAppStartRedirection()
# 將開啟搜尋面板 在 main.js 搜尋 handleAppStartRedirection()

# 另外建立 Default (Windows).sublime-mousemap
# [
#     {
#         "button": "button1",
#         "count": 1,
#         "modifiers": ["ctrl"],
#         "command": "quick_search_in_files"
#     }
# ]

import sublime
import sublime_plugin
import re

class QuickSearchInFilesCommand(sublime_plugin.TextCommand):
    def run(self, edit):
        view = self.view
        sel = view.sel()[0]
        point = sel.begin()

        # 1. 取得整行文字與游標在行內的相對位置
        line_region = view.line(point)
        line_text = view.substr(line_region)
        pos_in_line = point - line_region.begin()

        # 2. 定義正則：抓取包含英數、點、底線、橫線、@ 的連貫字串
        regex = r"[a-zA-Z0-9_\-\.\@\(\)]+"

        # 3. 找出該行所有匹配的字串及其位置
        target_full_text = ""
        for match in re.finditer(regex, line_text):
            start, end = match.span()
            # 檢查游標是否落在這個匹配區塊內（包含邊界）
            if start <= pos_in_line <= end:
                target_full_text = match.group(0)
                break

        if not target_full_text:
            return

        # 4. 邏輯拆分：檢查是否有 @ 符號
        search_text = target_full_text
        where_clause = ""

        if "@" in target_full_text:
            parts = target_full_text.split("@", 1)
            where_clause = parts[0]   # 例如 main.js
            search_text = parts[1]    # 例如 handleAppStartRedirection

        # 5. 呼叫搜尋面板
        view.window().run_command("show_panel", {
            "panel": "find_in_files",
            "pattern": search_text,
            "where": where_clause,
            "whole_word": True, # 鎖定字詞 邊界\b
            "preserve_case": True, # 區分大小寫
            "use_buffer": True, # 新分頁顯示
            "use_regex": True, # 使用正則
        })
