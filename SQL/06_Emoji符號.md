# mssql如何正確儲存emoji符號

1. 欄位的資料類型應使用 nvarchar(MAX)
2. SQL語法應使用 N'string' 強制儲存為UTF-16
