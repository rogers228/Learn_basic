# 撤銷修改
初始狀態，文件未編輯時，最後一次提交。
當你對文件不管做了多次修改，儲存了多少次，但未提交commit。
當你反悔了，或亂了想重來，你可以復原到初始狀態

## Discard Changes
針對一個文件要撤銷修改，在GitHub Desktop是使用 Discard Changes...  它將出現確認對話框，提示你撤銷將無法復原。

## git bash命令
如果使用git bash命令則是
git restore example.txt
