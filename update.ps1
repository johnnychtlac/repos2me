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
$dateArray = 0 .. (($endDate - $startDate).Days) | ForEach-Object {
    $startDate.AddDays($_).ToString("yyyy/MM/dd")
}
$dateSet = [System.Collections.Generic.HashSet[string]]$dateArray
$dateArray = $null

$extSet = [System.Collections.Generic.HashSet[string]]@("exe","dtx","edtx","tex","cls","sty","pdf","lua","txt","html","css","java","pl","sh","1")

# 下载CTAN原始数据
if (-not (Test-Path -Path "$PSScriptRoot\datatmp\filesbyname.txt")) {
    New-Item -Name "datatmp" -ItemType Directory
    Invoke-WebRequest -Uri "https://mirrors.aliyun.com/CTAN/FILES.byname" -Out "$PSScriptRoot\datatmp\filesbyname.txt"
}
$filebynameArray = Get-Content -Path "$PSScriptRoot\datatmp\filesbyname.txt"
$fileSet = [System.Collections.Generic.HashSet[string]]$filebynameArray
$filebynameArray = $null

# 根据日期和拓展名过滤数据
$fileSet = foreach ($el in $fileSet) {
    $temp = ($el.Replace(" ", "")).Split([char[]]@("|", "."), [System.StringSplitOptions]::RemoveEmptyEntries)
    $lineSet = [System.Collections.Generic.HashSet[string]]$temp
    if ($lineSet.Overlaps($dateSet) -and $lineSet.Overlaps($extSet)) {
        $el.Replace(" ", "")
    }
}
$dateSet = $null
$extSet = $null

Import-Module -Name "$PSScriptRoot\powershell-yaml\powershell-yaml.psd1"
# 获取收藏宏包的id数组
$pkgArray = (Get-Content -Path "$PSScriptRoot\data\pkg.txt" -Raw | ConvertFrom-Yaml) | ForEach-Object {
    $_.id
}
$pkgSet = [System.Collections.Generic.HashSet[string]]$pkgArray
$pkgArray = $null

# 获取黑名单
$blacklistArray = Get-Content -Path "$PSScriptRoot\data\blacklist.txt"
$blacklistSet = [System.Collections.Generic.HashSet[string]]$blacklistArray
$blacklistArray = $null

$fileSet = foreach ($el in $fileSet) {
    $temp = $el.Split("/", [System.StringSplitOptions]::RemoveEmptyEntries)
    $lineSet = [System.Collections.Generic.HashSet[string]]$temp
    if (-not ($lineSet.Overlaps($pkgSet) -or $lineSet.Overlaps($blacklistSet))) {
        $el
    }
}
$pkgSet = $null
$blacklistSet = $null

if (Test-Path -Path "$PSScriptRoot\datatmp\report.txt") {
    Remove-Item -Path "$PSScriptRoot\datatmp\report.txt" -Force
}
Set-Content -Path "$PSScriptRoot\datatmp\report.txt" -Value $fileSet

