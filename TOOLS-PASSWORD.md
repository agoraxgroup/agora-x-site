# Tools Password Protection

The tools section (QR Generator, Image Converter) is password-protected to keep it for site maintainers only.

## Current Password

**Default Password:** `agorax2025`

## How It Works

- **Client-side protection** - Simple JavaScript-based password check
- **7-day authentication** - Once you enter the password, you won't need to re-enter for 7 days
- **localStorage** - Uses browser storage to remember authentication
- **Not military-grade** - This is basic protection to keep casual users out, not high-security encryption

## Protected Pages

- `/tools` - Main tools page
- `/qr-generator.html` - QR Code Generator
- `/image-converter.html` - Google Drive Image Converter

## Changing the Password

1. Open `/assets/js/password-protect.js`
2. Find this line near the top:
   ```javascript
   const PASSWORD = 'agorax2025'; // Change this to your desired password
   ```
3. Change `'agorax2025'` to your new password
4. Save and commit the change
5. Push to GitHub - the new password takes effect immediately

## Sharing the Password

The password should be shared with:
- Agora X team members who manage the website
- Anyone who needs to create QR codes or convert images
- People who update site content

**Don't share publicly!** The tools aren't secret, but they're not meant for general public use.

## Resetting Authentication

If you need to force everyone to re-enter the password (e.g., after changing it):

Users should clear their browser's localStorage for the site, or just wait 7 days for it to expire naturally.

## Security Notes

⚠️ **This is NOT high-security protection!**

- The password is visible in the JavaScript source code
- Tech-savvy users could bypass this if they really wanted to
- This is fine for protecting utility tools from casual access
- **DO NOT** use this for truly sensitive information

This protection is perfect for:
- Keeping tools "members only"
- Preventing accidental public use
- Organizing site sections

This protection is **NOT** suitable for:
- Sensitive data
- Payment information
- Personal information
- Anything requiring real security

## Troubleshooting

**"I can't access the tools!"**
- Make sure you have the correct password (case-sensitive)
- Try clearing your browser cache and localStorage
- Contact the Agora X team for the current password

**"I changed the password but it's not working!"**
- Clear your browser cache
- Do a hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
- Make sure you saved and pushed the changes to GitHub
- Wait a few minutes for GitHub Pages to rebuild

**"I want to remove password protection entirely"**
1. Delete the `<script src="assets/js/password-protect.js"></script>` lines from:
   - `tools.md`
   - `qr-generator.html`
   - `image-converter.html`
2. Commit and push the changes

---

**Questions?** Contact the Agora X technical team.
