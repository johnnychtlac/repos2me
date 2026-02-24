# repos2me

cloudbase/powershell-yaml

v0.4.12

搜索时使用`/xxx.xxx`的模板
排除obsolete/
`exe,dtx,edtx,tex,cls,sty,pdf,lua,txt,html,css,java,pl,sh,1`

pkg.yaml

```yaml
- id: id1
  files: ["a","b"]
  description: zzz
...
```

```json
[
  {
    "id": "id1",
    "date": "",
    "file": "b",
    "labels": ["suoyou",""],
    "description": "zzz"
  }
]
```

# 更新数据

目的是更改`pkg.yaml`内的数据（人工判断），日期是否更改，是否出现新的宏包需要添加

根据参数及DateFrom和DateTo数据判断



# 生成数据