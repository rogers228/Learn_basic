@echo off
REM chcp 65001 顯示中文
chcp 65001 >nul
set "config=C:\Users\user\Documents\Rogers\Learn_basic\cmd\config.txt"
echo %config%
for /f "delims=" %%a in (%config%) do set %%a
echo name: %name%
echo age: %age%
echo 執行終了
pause >nul