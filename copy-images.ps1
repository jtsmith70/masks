# PowerShell script to copy mask images from C:\masks to the website masks folder
$sourceDir = "C:\masks"
$destDir = ".\masks"

if (Test-Path $sourceDir) {
    Write-Host "Copying images from $sourceDir to $destDir..."
    Copy-Item "$sourceDir\*.jpg" -Destination $destDir -Force
    Write-Host "Images copied successfully!"
    Write-Host "Total images copied: $((Get-ChildItem $destDir -Filter *.jpg).Count)"
} else {
    Write-Host "Error: Source directory $sourceDir not found!"
    exit 1
}
