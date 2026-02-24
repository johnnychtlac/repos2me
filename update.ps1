param(
    [Alias("DF")]
    [string]
    $DateFrom,

    [Alias("DT")]
    [string]
    $DateTo
)

try {
    $startDate = [DateTime]::ParseExact($DateFrom, "yyyy/MM/dd", $null)
    $endDate = [DateTime]::ParseExact($DateTo, "yyyy/MM/dd", $null)
} catch {
    Write-Error "日期格式必须为 yyyy/MM/dd，例如 2026/01/01。"
    exit 1
}

if ($startDate -gt $endDate) {
    Write-Error "起始日期不能晚于结束日期"
    exit 1
}

# 根据参数生成两个DateTime之间的所有日期的一个字符串数组[yyyy/MM/dd, yyyy/MM/dd, ....]
$dates = 0 .. (($endDate - $startDate).Days) | ForEach-Object {
    $startDate.AddDays($_).ToString("yyyy/MM/dd")
}

# 下载CTAN原始数据
if (-not (Test-Path -Path "$PSScriptRoot\datatmp\filesbyname.txt")) {
    New-Item -Name "datatmp" -ItemType Directory
    Invoke-WebRequest -Uri "https://mirrors.aliyun.com/CTAN/FILES.byname" -Out "$PSScriptRoot\datatmp\filesbyname.txt"
}

$extensionFilter = [System.Collections.Generic.HashSet[string]]@("exe","dtx","edtx","tex","cls","sty","pdf","lua","txt","html","css","java","pl","sh","1")

Import-Module -Name "$PSScriptRoot\powershell-yaml\powershell-yaml.psd1"

# 获取收藏宏包的id数组
$pkgstmp = (Get-Content -Path "$PSScriptRoot\data\pkg.txt" -Raw | ConvertFrom-Yaml) | ForEach-Object {
    $_.id
}

$pkgs = [System.Collections.Generic.HashSet[string]]$pkgstmp

$pkgstmp = $null

$pkgsCount = $pkgs.Count

Get-Content -Path "$PSScriptRoot\datatmp\filesbyname.txt" | Where-Object {
    $temp = ($_ -replace " ", "") -split '[\|.]'
    if (($temp[0] -in $dates) -and ($temp[-1] -in $extensionFilter)) {
        $_
    }
} | ForEach-Object {
    $lines = ($_ -split "\|")[-1] -split "\/"
    $linesCount = $lines.Count
    $mergesData = [System.Collections.Generic.HashSet[string]]($lines + $pkgs)
    $mergedDataCount = $mergesData.Count
    if ($mergedDataCount -eq ($pkgsCount + $linesCount)) {
        $_
    }
} | Set-Content -Path "$PSScriptRoot\datatmp\report.txt"

