# Quick Setup Guide for GitHub Pages

## Step 1: Install Git (if not already installed)

Download Git from: https://git-scm.com/download/win

During installation, use the default options.

## Step 2: Create GitHub Repository

1. Go to https://github.com and sign in (or create an account)
2. Click the **"+"** icon in the top right → **"New repository"**
3. Repository name: `spanish-learning-app` (or any name you like)
4. Make it **Public** (required for free GitHub Pages)
5. **DO NOT** check "Initialize with README"
6. Click **"Create repository"**

## Step 3: Upload Files to GitHub

After creating the repository, GitHub will show you instructions. Use these commands in PowerShell or Command Prompt:

### Option A: Using Command Line (Recommended)

Open PowerShell or Command Prompt in this folder and run:

```powershell
# Initialize git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Macu's Spanish Learning App"

# Add your GitHub repository (REPLACE YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/spanish-learning-app.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Important:** Replace `YOUR_USERNAME` with your actual GitHub username!

### Option B: Using GitHub Desktop (Easier)

1. Download GitHub Desktop: https://desktop.github.com/
2. Install and sign in with your GitHub account
3. Click "File" → "Add Local Repository"
4. Select this folder
5. Click "Publish repository" button
6. Make sure "Keep this code private" is UNCHECKED
7. Click "Publish repository"

## Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

## Step 5: Access Your App

GitHub will give you a URL like:
```
https://YOUR_USERNAME.github.io/spanish-learning-app/
```

Wait 2-5 minutes for it to go live. You'll see a green checkmark when ready!

## Updating Your App

When you make changes, run:

```powershell
git add .
git commit -m "Description of changes"
git push
```

## Troubleshooting

**"git is not recognized"**
- Install Git from https://git-scm.com/download/win
- Restart your terminal after installation

**"Repository not found"**
- Make sure you replaced YOUR_USERNAME with your actual GitHub username
- Check that the repository name matches

**"Permission denied"**
- You may need to authenticate. GitHub Desktop handles this automatically
- Or use a Personal Access Token (see GitHub docs)

## Need Help?

- GitHub Pages Docs: https://docs.github.com/en/pages
- Git Tutorial: https://git-scm.com/docs
