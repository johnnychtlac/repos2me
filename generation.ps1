if (-not (Test-Path -Path "$PSScriptRoot\datatmp\filesbyname.txt")) {
    New-Item -Name "datatmp" -ItemType Directory
    Invoke-WebRequest -Uri "https://mirrors.aliyun.com/CTAN/FILES.byname" -Out "$PSScriptRoot\datatmp\filesbyname.txt"
}

$extSet = [System.Collections.Generic.HashSet[string]]@("exe","dtx","edtx","tex","cls","sty","pdf","lua","txt","html","css","java","pl","sh","1")

# 原始filebyname数据
$filebynameArray = Get-Content -Path "$PSScriptRoot\datatmp\filesbyname.txt"
$filebynameSet = [System.Collections.Generic.HashSet[string]]$filebynameArray
$filebynameArray = $null

# 原始blacklist数据
$blacklistArray = Get-Content -Path "$PSScriptRoot\data\blacklist.txt"
$blacklistSet = [System.Collections.Generic.HashSet[string]]$blacklistArray
$blacklistArray = $null

# 按照拓展名进行数据过滤
$fileFilteredByExt = foreach ($el in $filebynameSet) {
    $lineSet = [System.Collections.Generic.HashSet[string]]($el.Split("."))
    if ($lineSet.Overlaps($extSet)) {
        $el
    }
}
$extSet = $nul
# 按照黑名单进行数据过滤，结果为xxxx/xx/xx|xxxx|xx/xxx/xxx/xx.xxx的字符串数组
$fileFilteredByBlacklist = foreach ($el in $fileFilteredByExt) {
    $temp = $el.Replace(" ", "")
    $temp = $temp.Split([char[]]@("/", "|"), [System.StringSplitOptions]::RemoveEmptyEntries)
    $lineSet = [System.Collections.Generic.HashSet[string]]$temp
    $temp = $null
    if (-not ($lineSet.Overlaps($blacklistSet))) {
        $el.Replace(" ", "")
    }
}
$fileFilteredByExt = $null

Import-Module -Name "$PSScriptRoot\powershell-yaml\powershell-yaml.psd1"
$pkgYaml = Get-Content -Path "$PSScriptRoot\data\pkg.txt" -Raw | ConvertFrom-Yaml

# 生成hashtable的数组，键值为id、description、datefile、docfile?
$pkgSet = foreach ($el in $pkgYaml) {
    $data = @{
        id = $el.id
        description = $el.description
        datefile = $el.files[0].Contains("<id>") ? $el.files[0].Replace("<id>", $el.id) : $el.files[0]
    }
    if ($el.files[1] -ne "") {
        $data.docfile = $el.files[1].Contains("<id>") ? $el.files[1].Replace("<id>", $el.id) : $el.files[1]
    }
    $data
}
$pkgSet = foreach ($el in $pkgSet) {
    $data = @{
        id = $el.id
        description = $el.description
        date = foreach ($file in $fileFilteredByBlacklist) {
            $temp = $file.Split("|", [System.StringSplitOptions]::RemoveEmptyEntries)
            $lineSet = [System.Collections.Generic.HashSet[string]]$temp
            if ([System.Linq.Enumerable]::Last($lineSet).Contains($el.datefile)) {
                [System.Linq.Enumerable]::First($lineSet)
                break
            }
        }
    }
    if ($el.docfile) {
        $data.docfile = foreach ($file in $fileFilteredByBlacklist) {
            $temp = $file.Split("|", [System.StringSplitOptions]::RemoveEmptyEntries)
            $lineSet = [System.Collections.Generic.HashSet[string]]$temp
            if ([System.Linq.Enumerable]::Last($lineSet).Contains($el.docfile)) {
                [System.Linq.Enumerable]::Last($lineSet)
                break
            }
        }
    }
    $data
}

$pkgSet | ConvertTo-Json -Compress | Set-Content -Path "$PSScriptRoot\public\ctan.json"
