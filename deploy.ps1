# PowerShell script to deploy to GitHub Pages
# Run this script after creating your GitHub repository

Write-Host "=== Macu's Spanish Learning App - GitHub Deployment ===" -ForegroundColor Cyan
Write-Host ""

# Check if git is installed
try {
    $gitVersion = git --version
    Write-Host "✓ Git is installed: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ Git is not installed!" -ForegroundColor Red
    Write-Host "Please install Git from: https://git-scm.com/download/win" -ForegroundColor Yellow
    Write-Host "Then run this script again." -ForegroundColor Yellow
    exit
}

Write-Host ""
Write-Host "Before running this script:" -ForegroundColor Yellow
Write-Host "1. Create a repository on GitHub (https://github.com/new)" -ForegroundColor Yellow
Write-Host "2. Make it PUBLIC (required for free GitHub Pages)" -ForegroundColor Yellow
Write-Host "3. DO NOT initialize with README" -ForegroundColor Yellow
Write-Host ""
$continue = Read-Host "Have you created the repository? (y/n)"

if ($continue -ne "y" -and $continue -ne "Y") {
    Write-Host "Please create the repository first, then run this script again." -ForegroundColor Yellow
    exit
}

Write-Host ""
$username = Read-Host "Enter your GitHub username"
$repoName = Read-Host "Enter your repository name (default: spanish-learning-app)"

if ([string]::IsNullOrWhiteSpace($repoName)) {
    $repoName = "spanish-learning-app"
}

Write-Host ""
Write-Host "Initializing git repository..." -ForegroundColor Cyan

# Initialize git if not already done
if (-not (Test-Path .git)) {
    git init
    Write-Host "✓ Git repository initialized" -ForegroundColor Green
} else {
    Write-Host "✓ Git repository already exists" -ForegroundColor Green
}

Write-Host ""
Write-Host "Adding files..." -ForegroundColor Cyan
git add .
Write-Host "✓ Files added" -ForegroundColor Green

Write-Host ""
Write-Host "Creating commit..." -ForegroundColor Cyan
git commit -m "Initial commit: Macu's Spanish Learning App"
Write-Host "✓ Commit created" -ForegroundColor Green

Write-Host ""
Write-Host "Setting up remote..." -ForegroundColor Cyan
$remoteUrl = "https://github.com/$username/$repoName.git"

# Remove existing remote if it exists
git remote remove origin 2>$null

# Add new remote
git remote add origin $remoteUrl
Write-Host "✓ Remote added: $remoteUrl" -ForegroundColor Green

Write-Host ""
Write-Host "Pushing to GitHub..." -ForegroundColor Cyan
git branch -M main
git push -u origin main

Write-Host ""
Write-Host "=== Deployment Complete! ===" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Go to: https://github.com/$username/$repoName/settings/pages" -ForegroundColor White
Write-Host "2. Under 'Source', select:" -ForegroundColor White
Write-Host "   - Branch: main" -ForegroundColor White
Write-Host "   - Folder: / (root)" -ForegroundColor White
Write-Host "3. Click 'Save'" -ForegroundColor White
Write-Host ""
Write-Host "Your app will be available at:" -ForegroundColor Cyan
Write-Host "https://$username.github.io/$repoName/" -ForegroundColor White
Write-Host ""
Write-Host "It may take 2-5 minutes for the site to go live." -ForegroundColor Yellow
