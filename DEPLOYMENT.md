# Deployment Guide - Macu's Spanish Learning App

This guide will help you deploy the app to GitHub Pages so others can access it online.

## Prerequisites

- A GitHub account (create one at https://github.com if you don't have one)
- Git installed on your computer (download from https://git-scm.com/)

## Step 1: Create a GitHub Repository

1. Go to https://github.com and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name it: `spanish-learning-app` (or any name you prefer)
5. Make it **Public** (required for free GitHub Pages)
6. **DO NOT** initialize with README, .gitignore, or license (we already have these)
7. Click "Create repository"

## Step 2: Initialize Git and Push Files

Open your terminal/command prompt in this project folder and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Spanish Learning App"

# Add your GitHub repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/spanish-learning-app.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Note:** Replace `YOUR_USERNAME` with your actual GitHub username and `spanish-learning-app` with your repository name if different.

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

## Step 4: Access Your App

GitHub will provide you with a URL like:
```
https://YOUR_USERNAME.github.io/spanish-learning-app/
```

It may take a few minutes for the site to be available. You'll see a green checkmark when it's ready.

## Updating Your App

Whenever you make changes:

```bash
git add .
git commit -m "Description of your changes"
git push
```

Changes will be live on GitHub Pages within a few minutes.

## Alternative: Quick Deploy with Netlify

If you prefer Netlify (also free):

1. Go to https://www.netlify.com
2. Sign up/login
3. Drag and drop this entire folder onto Netlify
4. Your app will be live instantly!

## Troubleshooting

- **404 Error**: Wait a few minutes after enabling Pages, it takes time to propagate
- **Files not showing**: Make sure you pushed all files with `git add .`
- **HTTPS issues**: GitHub Pages automatically provides HTTPS, no configuration needed

## Need Help?

- GitHub Pages Docs: https://docs.github.com/en/pages
- Git Tutorial: https://git-scm.com/docs
