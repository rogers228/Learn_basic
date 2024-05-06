# 多重left join

找不到時，回傳空字串為預設值

```py
        sql= """
            SELECT
                nt01,nt02,nt03,
                nt04, COALESCE(US1.us02, '') AS nt04_no,
                nt05, COALESCE(US2.us02, '') AS nt05_no,
                nt06,nt07,nt08
            FROM
                rec_nt
            LEFT JOIN
                rec_us AS US1 ON rec_nt.nt04 = US1.us01
            LEFT JOIN
                rec_us AS US2 ON rec_nt.nt05 = US2.us01
            WHERE nt01 = {0}
        """.format(nt01)
```

