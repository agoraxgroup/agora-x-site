# Agora X Website Setup Guide

This guide will walk you through deploying the Agora X website to GitHub Pages.

## Prerequisites

1. ✅ GitHub account created for Agora X (using agoraxgroup@gmail.com)
2. ✅ Website files ready (you have them in the `agora-x-site` folder)

## Step-by-Step Deployment

### Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and log in with agoraxgroup@gmail.com
2. Click the **"+"** icon in the top right → **"New repository"**
3. Repository settings:
   - **Repository name:** `agora-x-site` or `agorax.github.io` (recommended)
   - **Description:** "Agora X official website - Where community & music intersect"
   - **Visibility:** Public (required for free GitHub Pages)
   - **Initialize:** Do NOT check any boxes (we have existing files)
4. Click **"Create repository"**

### Step 2: Upload Website Files

**Option A: Via GitHub Web Interface (Easier)**

1. On your new repository page, click **"uploading an existing file"**
2. Drag and drop ALL files and folders from `agora-x-site/`
3. Scroll down and click **"Commit changes"**

**Option B: Via Command Line (If comfortable with git)**

```bash
cd agora-x-site
git init
git add .
git commit -m "Initial commit: Agora X website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/agora-x-site.git
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. In your repository, click **"Settings"** (top right)
2. In the left sidebar, click **"Pages"**
3. Under "Source", select:
   - **Source:** Deploy from a branch
   - **Branch:** `main`
   - **Folder:** `/ (root)`
4. Click **"Save"**
5. Wait 1-3 minutes for deployment

You'll see a message: "Your site is published at https://YOUR-USERNAME.github.io/agora-x-site/"

### Step 4: Configure Custom Domain (agorax.org)

#### Part A: GitHub Settings

1. Still in **Settings → Pages**
2. Under "Custom domain", enter: `agorax.org`
3. Click **"Save"**
4. Check the box **"Enforce HTTPS"** (wait a few minutes if it's not available yet)

#### Part B: Update DNS Settings

1. Go to [Google Domains](https://domains.google.com/registrar/?hl=en_US&authuser=1)
2. Log in with agoraxgroup@gmail.com
3. Find **agorax.org** → Click **"Manage"**
4. Go to **"DNS"** section
5. Add/Update these DNS records:

**A Records (for apex domain):**
| Type | Host | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

**CNAME Record (for www subdomain):**
| Type | Host | Value |
|------|------|-------|
| CNAME | www | YOUR-USERNAME.github.io |

6. Click **"Save"**

**Note:** DNS changes can take up to 24-48 hours to propagate (usually much faster)

### Step 5: Verify Everything Works

After DNS propagates:

1. Visit `https://agorax.org` - should load your new site
2. Visit `https://www.agorax.org` - should redirect to agorax.org
3. Check that HTTPS works (🔒 padlock icon)

## Customizing Content

Now that the site is live, Lisia's team can edit content:

1. Navigate to any `.md` file in the repository
2. Click the **pencil icon** ✏️ to edit
3. Make changes using the [EDITING-GUIDE.md](EDITING-GUIDE.md)
4. Commit changes
5. Site updates automatically in 1-3 minutes

## Using the Image Converter Tool

1. Download `image-converter.html` from the repository
2. Open it in a web browser
3. Paste Google Drive share links
4. Copy the converted markdown code
5. Use in any `.md` file

**Or host it online:**
- GitHub Pages will serve it at `https://agorax.org/image-converter.html`
- Share this link with your team for easy access

## Troubleshooting

### Site Not Updating After Changes

- Wait 2-3 minutes for GitHub Pages to rebuild
- Check the "Actions" tab for build status
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)

### Custom Domain Not Working

- Verify DNS records are correct
- Wait up to 24 hours for DNS propagation
- Check GitHub Pages settings show your domain
- Ensure HTTPS is enforced

### Images Not Showing

- Verify Google Drive link is set to "Anyone with the link"
- Check the image URL format is correct
- Use the image converter tool to double-check

### CSS Styles Not Loading

- Make sure all files were uploaded, especially `assets/css/style.css`
- Check `_config.yml` is in the root directory
- Force refresh the page (Ctrl+Shift+R)

## Ongoing Maintenance

### Regular Updates

Team members can edit markdown files directly on GitHub:
1. Click file → Edit (✏️)
2. Make changes
3. Commit with a brief message
4. Changes go live automatically

### Adding New Pages

1. Create a new `.md` file in the root directory
2. Add front matter at the top:
```yaml
---
layout: default
title: Page Title
---
```
3. Add content below using markdown
4. Link to it from other pages

### Monthly Checklist

- [ ] Review and update events
- [ ] Add news items
- [ ] Check all links still work
- [ ] Update photos if needed

## Security Notes

**Important:**
- Never commit passwords or sensitive data to the repository
- Keep the Google account password secure
- Only give repository access to trusted team members

## Support Resources

- **GitHub Pages Docs:** https://docs.github.com/en/pages
- **Jekyll Docs:** https://jekyllrb.com/docs/
- **Markdown Guide:** https://guides.github.com/features/mastering-markdown/
- **Editing Guide:** See [EDITING-GUIDE.md](EDITING-GUIDE.md)

---

## Quick Reference

**Site URL:** https://agorax.org
**Repository:** https://github.com/YOUR-USERNAME/agora-x-site
**Image Converter:** https://agorax.org/image-converter.html
**Gmail:** agoraxgroup@gmail.com

---

**Questions?** Reach out to your technical support person who set this up.

Good luck with your new website! 🎵
