# Image Management Guide for Agora X

**For Lesya's Team**

## Why We Store Images Locally

✅ **Full Control** - You own the images, they never disappear
✅ **Fast Loading** - Images load from GitHub, not external services
✅ **Reliable** - No broken links if Google changes URLs
✅ **Simple** - Everything in one place

---

## Two Ways to Add Images

### Option 1: Local Images (Recommended for Site Content)

**Best for:** Logo, backgrounds, permanent site images

**How to add:**

1. **Prepare your image:**
   - Save it with a simple name (e.g., `event-march-2025.jpg`)
   - Keep file size reasonable (under 2MB for web)

2. **Upload to GitHub:**
   - Go to your repository: https://github.com/agoraxgroup/agora-x-site
   - Navigate to the `images/` folder
   - Click **"Add file"** → **"Upload files"**
   - Drag your image file
   - Click **"Commit changes"**

3. **Use in your pages:**
   ```markdown
   ![Event photo]({{ '/images/event-march-2025.jpg' | relative_url }})
   ```

**Why use this:** Images are part of your site, load fast, never break

---

### Option 2: Google Drive Images (For Frequently Changed Content)

**Best for:** Event photos, news images, things you update often

**How to add:**

1. **Upload to Google Drive**
2. **Share:** Right-click → "Get link" → "Anyone with the link"
3. **Convert:** Use the Image Converter tool at `/tools`
4. **Paste** the markdown code into your page

**Why use this:** Easy to update photos, no file size limits, familiar interface

---

## Current Site Images

Your site already has these images stored locally:

| Image | Location | Used For |
|-------|----------|----------|
| `logo.png` | `/images/logo.png` | Navigation header logo |
| `hero-background.jpg` | `/images/hero-background.jpg` | Homepage background |

---

## Best Practices

### Image Sizes
- **Logos:** Keep under 100KB, PNG format
- **Backgrounds:** Under 500KB, JPG format
- **Event photos:** Under 300KB, JPG format
- **Thumbnails:** Under 100KB, JPG format

### Naming Convention
Use descriptive, lowercase names with dashes:
- ✅ `event-spring-concert-2025.jpg`
- ✅ `sponsor-logo-acme.png`
- ✅ `team-photo-june-2025.jpg`
- ❌ `IMG_1234.jpg`
- ❌ `photo (1).png`

### File Types
- **Photos:** Use `.jpg` (smaller file size)
- **Logos/Graphics:** Use `.png` (better quality, transparency)
- **Avoid:** `.bmp`, `.tiff` (too large)

---

## How to Replace an Image

### Replace Logo or Background:

1. **Upload new image** to `/images/` folder with the **same filename**
   - Example: Upload new `logo.png` to replace old one
2. **Commit changes**
3. **Wait 2 minutes** for site to rebuild
4. **Done!** - No code changes needed

### Replace Event Photo:

**If using local storage:**
1. Upload new image with a different name
2. Edit the markdown page
3. Change the image filename
4. Commit

**If using Google Drive:**
1. Upload new photo to Google Drive
2. Get share link
3. Convert using Image Converter tool
4. Update the markdown page with new URL

---

## Quick Reference

### Add Local Image to a Page:

```markdown
![Description of image]({{ '/images/your-image.jpg' | relative_url }})
```

### Add Google Drive Image to a Page:

```markdown
![Description](https://drive.google.com/uc?export=view&id=YOUR_IMAGE_ID)
```

(Use the Image Converter tool to get the correct URL!)

---

## Our Recommendation

**Use Local Images For:**
- Site logo
- Background images
- Graphics that rarely change
- Important permanent images

**Use Google Drive For:**
- Event photos you change frequently
- News images
- Temporary promotional images
- Photos you want to organize in folders

---

## Need Help?

- **Image Converter Tool:** https://agoraxgroup.github.io/agora-x-site/image-converter.html
- **Editing Guide:** See `EDITING-GUIDE.md` in the repository
- **GitHub Images Folder:** https://github.com/agoraxgroup/agora-x-site/tree/main/images

---

**Questions?** Contact your technical support person.

Happy image managing! 📸
