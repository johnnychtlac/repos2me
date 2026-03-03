if (-not (Test-Path -Path "$PSScriptRoot\datatmp\filesbyname.txt")) {
    New-Item -Name "datatmp" -ItemType Directory
    Invoke-WebRequest -Uri "https://mirrors.aliyun.com/CTAN/FILES.byname" -Out "$PSScriptRoot\datatmp\filesbyname.txt"
}

# 原始 filebyname 数据
$filebynameArray = Get-Content -Path "$PSScriptRoot\datatmp\filesbyname.txt"
$filebynameSet = [System.Collections.Generic.HashSet[string]]$filebynameArray
$filebynameArray = $null

# blacklist数据，明确要过滤的数据
$blacklistArray = Get-Content -Path "$PSScriptRoot\data\blacklist.txt"
$blacklistSet = [System.Collections.Generic.HashSet[string]]$blacklistArray
$blacklistArray = $null

# 按照黑名单进行数据过滤，并清除所有空格
$fileData = foreach ($el in $filebynameSet) {
    $temp = $el.Replace(" ", "")
    $temp = $temp.Split([char[]]@("/", "|"), [System.StringSplitOptions]::RemoveEmptyEntries)
    $lineSet = [System.Collections.Generic.HashSet[string]]$temp
    if (-not ($lineSet.Overlaps($blacklistSet))) {
        $el.Replace(" ", "")
    }
}
$filebynameSet = $null
$blacklistSet = $null
$fileDataSet = [System.Collections.Generic.HashSet[string]]$fileData
$fileData = $null

Import-Module -Name "$PSScriptRoot\powershell-yaml\powershell-yaml.psd1"
$pkgYaml = Get-Content -Path "$PSScriptRoot\data\pkg.txt" -Raw | ConvertFrom-Yaml

# 把 pkg 中的插值替换掉，键值为id、description、files
$pkgArray = foreach ($el in $pkgYaml) {
    $el.files[0] = $el.files[0].Contains("<id>") ? $el.files[0].Replace("<id>", $el.id) : $el.files[0]
    if ($el.files[1] -ne "") {
        $el.files[1] = $el.files[1].Contains("<id>") ? $el.files[1].Replace("<id>", $el.id) : $el.files[1]
    } else {
        $el.files[1] = ""
    }
    $el
}
$pkgYaml = $null

# 设置一个用于过滤作用的 Set
$filterSet = [System.Collections.Generic.HashSet[string]]::new()

# 获取所有的 pkg id数组，并过滤
foreach ($el in $pkgArray) {
    if ($el.id -eq "") {
        throw "id 值出现空值！"
    }
    $null = $filterSet.add($el.id)
}
$fileDataSet = foreach ($el in $fileDataSet) {
    $lineSet = [System.Collections.Generic.HashSet[string]]($el.Split("/"))
    if ($lineSet.Overlaps($filterSet)) {
        $el
    }
}

$filterSet.Clear()

# 获取所有的 files 长数组，并过滤
foreach ($el in $pkgArray) {
    $null = $filterSet.add($el.files[0])
    if ($el.files[1] -ne "") {
        $null = $filterSet.Add($el.files[1])
    }
}
$fileDataSet  = foreach ($el in $fileDataSet) {
    $lineSet = [System.Collections.Generic.HashSet[string]]($el.Split("/"))
    if ($lineSet.Overlaps($filterSet)) {
        $el
    }
}
$filterSet = $null

$output = foreach ($el in $pkgArray) {
    $tempString = ($fileDataSet -like "*/$($el.files[0])")[0]
    $data = @{
        id = $el.sub ? "$($el.id)---$($el.sub)" : $el.id
        description = $el.description
    }
    if (-not $el.isgithub) {
        try {
            $null = $tempString.Split("|")
        } catch {
            Write-Host $el
        }
        $data.date = $tempString.Split("|")[0]
        if ($el.files[1] -ne "") {
            $tempString = ($fileDataSet -like "*/$($el.files[1])")[0]
            try {
                $null = $tempString.Split("|")
            } catch {
                Write-Host $el
            }
            $data.document = $tempString.Split("|")[2]
        }
    }
    $data
}

if (Test-Path -Path "$PSScriptRoot\public\ctan.json") {
    Remove-Item -Path "$PSScriptRoot\public\ctan.json" -Force
}
$output | ConvertTo-Json -Compress | Set-Content -Path "$PSScriptRoot\public\ctan.json"
