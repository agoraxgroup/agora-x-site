# Agora X Website Editing Guide

Welcome! This guide will help you update the Agora X website easily. No coding experience needed!

## Table of Contents
1. [How to Edit Pages](#how-to-edit-pages)
2. [How to Add Images from Google Drive](#how-to-add-images)
3. [How to Add New Events](#how-to-add-new-events)
4. [Common Tasks](#common-tasks)

---

## How to Edit Pages

### Step 1: Navigate to the File
1. Go to your GitHub repository at `https://github.com/YOUR-USERNAME/agora-x-site`
2. Find the page you want to edit:
   - Homepage: `index.md`
   - Events: `events.md`
   - Projects: `projects.md`
   - About: `about.md`
   - Journey: `journey.md`
   - News: `news.md`
   - Contact: `contact.md`

### Step 2: Edit the File
1. Click on the file name
2. Click the **pencil icon** (✏️) in the top right that says "Edit this file"
3. Make your changes using simple markdown formatting
4. Scroll down and click **"Commit changes"**
5. Add a brief description of what you changed (optional but helpful)
6. Click **"Commit changes"** again

### Step 3: Wait for Your Changes to Go Live
- Your changes will appear on the website in 1-3 minutes
- Visit `https://agorax.org` to see your updates

---

## How to Add Images from Google Drive

### Step 1: Upload to Google Drive
1. Go to [Google Drive](https://drive.google.com)
2. Upload your image
3. Right-click the image → Select **"Share"**
4. Change settings to **"Anyone with the link"** → Click **"Copy link"**

### Step 2: Convert the Link
Your Google Drive link looks like this:
```
https://drive.google.com/file/d/1ABC123xyz456/view?usp=sharing
```

You need to extract the **ID** (the part between `/d/` and `/view`). In this example: `1ABC123xyz456`

Then create your image URL:
```
https://drive.google.com/uc?export=view&id=1ABC123xyz456
```

### Step 3: Add to Your Page
In your markdown file, add:
```markdown
![Description of image](https://drive.google.com/uc?export=view&id=YOUR_IMAGE_ID)
```

**Quick Tool:** Use the Google Drive Image Converter (navigate to Tools page or visit `/image-converter.html`) to automatically convert links!

---

## How to Add New Events

### Adding an Upcoming Event

1. Open `events.md`
2. Find the "Upcoming Events" section
3. Copy this template:

```markdown
### Event Name Here
**Date:** Month Day, Year
**Location:** Venue Name, City

Brief description of the event goes here.

![Event photo](https://drive.google.com/uc?export=view&id=YOUR_IMAGE_ID)

<a href="#" class="btn btn-primary">Learn More</a>

---
```

4. Paste it under "Upcoming Events"
5. Replace the placeholder text with your event details
6. Add your Google Drive image URL
7. Commit your changes

### Moving an Event to "Past Events"

1. Cut (copy and delete) the event from "Upcoming Events"
2. Paste it under "Past Events"
3. Update the description to reflect what happened
4. Commit your changes

---

## Common Tasks

### Changing Text
Simply find the text and type your new version. Markdown files are like Word documents - just type!

### Adding a Link
```markdown
[Link text here](https://example.com)
```

### Making Text Bold
```markdown
**This text will be bold**
```

### Making Text Italic
```markdown
*This text will be italic*
```

### Creating a Heading
```markdown
# Large Heading
## Medium Heading
### Small Heading
```

### Creating a List
```markdown
- Item one
- Item two
- Item three
```

Or numbered:
```markdown
1. First item
2. Second item
3. Third item
```

---

## Need Help?

### Common Issues

**Q: My changes aren't showing up**
A: Wait 2-3 minutes and refresh the page. GitHub Pages can take a moment to rebuild.

**Q: I made a mistake, how do I undo it?**
A: GitHub keeps a history of all changes. Click "History" on any file to see previous versions and restore them.

**Q: My image isn't showing**
A: Make sure:
- The Google Drive link is set to "Anyone with the link"
- You extracted the ID correctly
- You're using the `uc?export=view&id=` format

**Q: The website looks broken**
A: You may have accidentally deleted important formatting. Check the file history and restore the previous version.

---

## Tips for Success

1. **Preview Before Committing:** GitHub shows a preview of your changes
2. **Make Small Changes:** Edit one thing at a time so it's easy to track
3. **Write Commit Messages:** Brief notes help you remember what you changed
4. **Test Your Links:** Click them to make sure they work
5. **Keep Backups:** If you're making major changes, copy the text somewhere safe first

---

## Markdown Cheat Sheet

```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text**
*Italic text*

[Link text](https://example.com)

![Image description](image-url-here)

- Bullet point
- Another point

1. Numbered item
2. Another item

---
(This creates a horizontal line)
```

---

## Using the QR Code Generator

Need QR codes for donations, sponsorships, or promotions?

1. Navigate to Tools page or visit `/qr-generator.html`
2. Enter your URL (donation page, event registration, social media, etc.)
3. Customize size and colors if desired
4. Click "Generate QR Code"
5. Download as PNG or print directly

**Perfect for:**
- Donation links (PayPal, Venmo, Cash App)
- Event tickets and registrations
- Sponsorship pages
- Social media profiles
- Contact information
- Any URL you want to share

**These QR codes:**
- ✅ Never expire (generated on your device)
- ✅ Completely free
- ✅ Work offline once downloaded
- ✅ Can be customized to match your brand

---

**Questions?** Contact your technical support person or consult [GitHub's Markdown Guide](https://guides.github.com/features/mastering-markdown/).

**Tools:** Visit the Tools page (in the navigation menu) for QR generator and image converter.

Happy editing! 🎵
