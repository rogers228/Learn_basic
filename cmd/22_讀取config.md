```bat
@echo off
for /f "delims=" %%a in (config.txt) do set %%a
echo name: %name%
echo age: %age%
```