import sublime
import sublime_plugin

class FormatAndSaveCommand(sublime_plugin.TextCommand):
    def run(self, edit):
        # 先執行 JsPrettier 格式化
        self.view.run_command("js_prettier")
        # 接著執行原生存檔
        self.view.run_command("save")