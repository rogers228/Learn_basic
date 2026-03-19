@echo off
rem chcp 65001 顯示中文
chcp 65001 >nul

:: 這是非常高級的技巧，把複雜的邏輯寫成python，前題是要有裝

:: // python code
set FIND_ENGINE_CMD=import sys, os; ^
sys.path.append(os.getenv('GRST_PATH', '')); ^
from global_config import current_base_path; ^
print(os.path.join(current_base_path(), 'CommentEngine'))



:: tokens=* 拿到整個字串 適合路徑
for /f "tokens=*" %%i in ('python -c "%FIND_ENGINE_CMD%"') do set ENGINE_DIR=%%i
echo # Engine detected at: %ENGINE_DIR%

pause
