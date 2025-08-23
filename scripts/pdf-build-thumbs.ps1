# ─────────────────────────────────────────────────────────────────────────────
# Script: scripts/pdf-build-thumbs.ps1
# Scopo: per ogni PDF sotto -Root, crea -preview.webp e -thumb.webp se mancanti
# Requisiti: ImageMagick ("magick") + Ghostscript
# Uso:
#   powershell -NoProfile -ExecutionPolicy Bypass -File scripts/pdf-build-thumbs.ps1 `
#     -Root public -PreviewWidth 1600 -ThumbWidth 300 [-Overwrite] [-LogFile logs\pdf-thumbs.log]
# ─────────────────────────────────────────────────────────────────────────────

param(
  [string]$Root = "public",
  [int]$PreviewWidth = 1600,
  [int]$ThumbWidth = 300,
  [int]$Density = 180,
  [int]$Quality = 82,
  [switch]$Overwrite,         # rigenera anche se i file esistono gia'
  [string]$LogFile            # se impostato, scrive anche su file
)

# ============================
# Helpers: logging
# ============================
function Write-Log {
  param(
    [string]$Message,
    [ValidateSet("INFO","WARN","ERR","OK","MAKE","SKIP")] [string]$Level = "INFO"
  )
  $ts = (Get-Date).ToString("yyyy-MM-dd HH:mm:ss")
  $line = "[{0}] {1}  {2}" -f $ts, $Level.PadRight(4), $Message
  if ($Level -eq "INFO") { Write-Host $line -ForegroundColor Gray }
  elseif ($Level -eq "OK") { Write-Host $line -ForegroundColor Green }
  elseif ($Level -eq "MAKE") { Write-Host $line -ForegroundColor Cyan }
  elseif ($Level -eq "SKIP") { Write-Host $line -ForegroundColor DarkGray }
  elseif ($Level -eq "WARN") { Write-Host $line -ForegroundColor Yellow }
  elseif ($Level -eq "ERR") { Write-Host $line -ForegroundColor Red }
  if ($LogFile) { Add-Content -LiteralPath $LogFile -Value $line }
}

# ============================
# Pre-check
# ============================
if ($LogFile) {
  New-Item -ItemType Directory -Force -Path (Split-Path -Parent $LogFile) | Out-Null
  Remove-Item -LiteralPath $LogFile -ErrorAction SilentlyContinue
}

if (-not (Test-Path $Root)) {
  Write-Log ("Cartella non trovata: {0}" -f $Root) "ERR"
  exit 1
}
if (-not (Get-Command magick -ErrorAction SilentlyContinue)) {
  Write-Log "ImageMagick non trovato. Installa: choco install imagemagick" "ERR"
  exit 1
}

# Detect Ghostscript (PS 5.1 friendly)
$gsCmd = Get-Command gswin64c -ErrorAction SilentlyContinue
if (-not $gsCmd) { $gsCmd = Get-Command gswin32c -ErrorAction SilentlyContinue }
if (-not $gsCmd) { $gsCmd = Get-Command gs -ErrorAction SilentlyContinue }
$gsPath = $null
if ($gsCmd) { $gsPath = $gsCmd.Source }

if (-not $gsPath) {
  Write-Log "Ghostscript non trovato. La conversione dei PDF fallira' (installare Ghostscript)." "WARN"
}

Write-Log ("Root           : {0}" -f $Root)
Write-Log ("PreviewWidth   : {0}  | ThumbWidth: {1}" -f $PreviewWidth, $ThumbWidth)
Write-Log ("Density        : {0}  | Quality   : {1}" -f $Density, $Quality)
Write-Log ("Overwrite      : {0}" -f $Overwrite.IsPresent)
if ($gsPath) { Write-Log ("Ghostscript    : {0}" -f $gsPath) } else { Write-Log "Ghostscript    : NOT FOUND" }
Write-Log "Scan in corso..."

# ============================
# Funzioni helper (convert)
# ============================
function New-Preview {
  param(
    [Parameter(Mandatory=$true)][string]$PdfPath,
    [Parameter(Mandatory=$true)][string]$OutWebp,
    [int]$Width,
    [int]$Dpi,
    [int]$Q
  )
  $args = @(
    "-density", $Dpi,
    ($PdfPath + "[0]"),
    "-colorspace", "sRGB",
    "-background", "white",
    "-alpha", "remove",
    "-alpha", "off",
    "-strip",
    "-resize", ("{0}x" -f $Width),
    "-quality", $Q,
    $OutWebp
  )
  & magick @args | Out-Null
}

function New-Thumb {
  param(
    [Parameter(Mandatory=$true)][string]$FromImage,
    [Parameter(Mandatory=$true)][string]$OutWebp,
    [int]$Width,
    [int]$Q
  )
  $args = @(
    $FromImage,
    "-strip",
    "-resize", ("{0}x" -f $Width),
    "-quality", $Q,
    $OutWebp
  )
  & magick @args | Out-Null
}

# ============================
# Scan & Build
# ============================
$pdfs = Get-ChildItem -Path $Root -Recurse -File -Filter *.pdf
if ($pdfs.Count -eq 0) {
  Write-Log ("Nessun PDF trovato sotto: {0}" -f $Root) "WARN"
  exit 0
}

# Counters
[int]$countPDF = 0
[int]$countPreviewCreated = 0
[int]$countThumbCreated = 0
[int]$countSkipped = 0
[int]$countErrors = 0
$errors = @()

foreach ($pdf in $pdfs) {
  $countPDF++
  $dir  = $pdf.DirectoryName
  $name = [IO.Path]::GetFileNameWithoutExtension($pdf.Name)
  $rel  = $pdf.FullName.Replace($PWD.Path + "\","")

  $previewPath = Join-Path $dir ($name + "-preview.webp")
  $thumbPath   = Join-Path $dir ($name + "-thumb.webp")

  $hasPreview = Test-Path $previewPath
  $hasThumb   = Test-Path $thumbPath

  if (-not $Overwrite -and $hasPreview -and $hasThumb) {
    Write-Log ("OK   (skip) {0}" -f $rel) "SKIP"
    $countSkipped++
    continue
  }

  Write-Log ("PROC        {0}" -f $rel) "INFO"

  try {
    if ($Overwrite -or -not $hasPreview) {
      Write-Log ("make preview -> {0}" -f $previewPath) "MAKE"
      New-Preview -PdfPath $pdf.FullName -OutWebp $previewPath -Width $PreviewWidth -Dpi $Density -Q $Quality
      $countPreviewCreated++
    } else {
      Write-Log "preview gia' presente" "SKIP"
    }

    if ($Overwrite -or -not $hasThumb) {
      if (Test-Path $previewPath) {
        Write-Log ("make thumb   -> {0} (da preview)" -f $thumbPath) "MAKE"
        New-Thumb -FromImage $previewPath -OutWebp $thumbPath -Width $ThumbWidth -Q $Quality
      } else {
        Write-Log ("make thumb   -> {0} (da PDF)" -f $thumbPath) "MAKE"
        $args = @(
          "-density", $Density,
          ($pdf.FullName + "[0]"),
          "-colorspace", "sRGB",
          "-background", "white",
          "-alpha", "remove",
          "-alpha", "off",
          "-strip",
          "-resize", ("{0}x" -f $ThumbWidth),
          "-quality", $Quality,
          $thumbPath
        )
        & magick @args | Out-Null
      }
      $countThumbCreated++
    } else {
      Write-Log "thumb gia' presente" "SKIP"
    }

    Write-Log "done" "OK"
  }
  catch {
    $countErrors++
    $msg = ("{0} :: {1}" -f $rel, $_.Exception.Message)
    $errors += $msg
    Write-Log ("ERRORE: {0}" -f $msg) "ERR"
  }
}

# ============================
# Summary
# ============================
Write-Log "--------------------------------------------------------" "INFO"
$summary = ("SUMMARY  PDFs: {0} | preview+: {1} | thumb+: {2} | skipped: {3} | errors: {4}" `
  -f $countPDF, $countPreviewCreated, $countThumbCreated, $countSkipped, $countErrors)
Write-Log $summary "INFO"

if ($countErrors -gt 0) {
  Write-Log "ERROR LIST (prime voci):" "WARN"
  $errors | Select-Object -First 10 | ForEach-Object { Write-Log $_ "ERR" }
}

Write-Log "Finito." "INFO"
