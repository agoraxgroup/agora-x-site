# Workflows Quick Reference

A quick guide to understanding the automated checks on the Agora X website.

## Status Badges

All badges are visible at the top of [README.md](../README.md)

- ![Green Badge](https://img.shields.io/badge/build-passing-brightgreen) = All checks passed
- ![Red Badge](https://img.shields.io/badge/build-failing-red) = Some checks failed
- ![Gray Badge](https://img.shields.io/badge/build-no%20status-lightgrey) = Not run yet

## Workflows at a Glance

| Workflow | Purpose | Runs On | Can Fail? |
|----------|---------|---------|-----------|
| **CI - Quality Checks** | Quick validation checks | Push, PR | Yes |
| **Jekyll Build Test** | Ensures site builds | Push, PR | Yes |
| **Linting** | Code formatting checks | Push, PR | No (warnings only) |
| **Link Checker** | Finds broken links | Push, PR, Weekly | No (warnings only) |
| **Accessibility Testing** | WCAG compliance | Push, PR | No (warnings only) |
| **Spell Check** | Catches typos | Push, PR | No (warnings only) |
| **Image Optimization** | Checks image sizes | Image changes | No (advisory) |
| **Security Scanning** | Security vulnerabilities | Push, PR, Weekly | Varies |

## What Each Workflow Checks

### CI - Quality Checks
- Site builds successfully
- Critical pages exist
- Config files are valid
- No large files (>5MB)

### Jekyll Build Test
- Jekyll can compile the site
- No build errors
- All dependencies installed

### Linting
- Markdown formatting
- HTML structure
- CSS syntax
- YAML validity

### Link Checker
- Internal page links work
- External URLs are accessible
- Images are referenced correctly

### Accessibility Testing
- Images have alt text
- Good color contrast
- Proper heading structure
- Keyboard navigation

### Spell Check
- Spelling in markdown files
- Custom dictionary support
- Excludes code blocks

### Image Optimization
- Images under 500KB
- WebP conversion suggestions
- Format recommendations

### Security Scanning
- Vulnerable dependencies
- Exposed secrets
- Mixed content (HTTP/HTTPS)
- Code security issues

## Common Issues and Fixes

### Build Failure
**Problem:** Jekyll can't build the site
**Solution:** Check for syntax errors in YAML or markdown

### Broken Links
**Problem:** Link checker finds dead links
**Solution:** Update or remove the broken links

### Large Images
**Problem:** Images over 500KB detected
**Solution:** Compress images with TinyPNG or similar tool

### Accessibility Warning
**Problem:** Missing alt text on images
**Solution:** Add descriptive alt text: `![description](image.jpg)`

### Spelling Error
**Problem:** Unknown word detected
**Solution:** Fix typo OR add to `.wordlist.txt` if correct

## When to Worry

### You SHOULD fix:
- Build failures (red X on Jekyll Build Test)
- Broken internal links
- Missing alt text on images
- Actual spelling errors
- Security vulnerabilities

### You CAN ignore (usually):
- Markdown formatting warnings
- External link failures (if link works in browser)
- Minor CSS linting suggestions
- Known technical terms flagged by spell check

## Quick Actions

### View All Workflows
1. Go to GitHub repository
2. Click "Actions" tab
3. See all workflow runs

### Run a Workflow Manually
1. Go to "Actions" tab
2. Click workflow name
3. Click "Run workflow"
4. Select branch and click "Run workflow"

### Download Artifacts
1. Go to workflow run
2. Scroll to bottom
3. Click artifact name to download

### Cancel a Running Workflow
1. Go to workflow run
2. Click "Cancel workflow" (top right)

## Schedules

Some workflows run automatically:

- **Link Checker:** Mondays at 9am UTC
- **Security Scanning:** Sundays at 2am UTC

## Adding Custom Words

For spell checking, edit `.wordlist.txt`:

```bash
# Navigate to repository root
cd /path/to/agora-x-site

# Add words (one per line)
echo "CustomWord" >> .wordlist.txt

# Commit
git add .wordlist.txt
git commit -m "Add word to dictionary"
git push
```

## Workflow Files

All workflow files are in `.github/workflows/`:

```
.github/workflows/
├── ci.yml                      # Main quality checks
├── jekyll-build.yml           # Build test
├── linting.yml                # Code formatting
├── link-checker.yml           # Link validation
├── accessibility.yml          # A11y testing
├── spell-check.yml            # Spelling
├── image-optimization.yml     # Image checks
└── security.yml               # Security scanning
```

## Need Help?

- Full documentation: [WORKFLOW-GUIDE.md](WORKFLOW-GUIDE.md)
- Editing guide: [EDITING-GUIDE.md](../EDITING-GUIDE.md)
- GitHub Actions docs: https://docs.github.com/en/actions

## Pro Tips

1. **Before committing:** Build locally with `bundle exec jekyll build`
2. **After committing:** Check the Actions tab for results
3. **For images:** Keep them under 500KB, use descriptive alt text
4. **For links:** Test them before committing
5. **For typos:** Add legitimate words to `.wordlist.txt`

## Resource Usage

GitHub provides generous free usage:
- 2,000 minutes per month for free accounts
- These workflows use ~5-10 minutes per run
- You can monitor usage in repository settings

---

**Quick Links:**
- [View Actions](https://github.com/agoraxgroup/agora-x-site/actions)
- [Full Workflow Guide](WORKFLOW-GUIDE.md)
- [Repository README](../README.md)
