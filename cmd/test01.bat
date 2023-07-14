@echo off
REM chcp 65001 顯示中文
chcp 65001 >nul
echo hi roger
echo 系統將會自動關閉
REM 3秒後離開
timeout 3 >nul
exit