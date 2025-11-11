# GitHub Actions Workflow Guide

This guide explains the automated quality checks that run on the Agora X website.

## Overview

The Agora X website uses GitHub Actions to automatically check for issues every time you make changes. These checks help ensure the site is high-quality, accessible, and secure.

## What Are GitHub Actions?

GitHub Actions are automated tasks that run in the background when you:
- Push changes to the main branch
- Create a pull request
- Trigger them manually

Think of them as helpful robots that check your work and give you feedback.

## Available Workflows

### 1. CI - Quality Checks
**File:** `.github/workflows/ci.yml`

**What it does:**
- Runs quick quality checks on every commit
- Validates Jekyll configuration
- Checks for large files
- Verifies site structure
- Tests that the site builds successfully

**When it runs:**
- Every push to main
- Every pull request

**Status Badge:** ![CI - Quality Checks](https://github.com/agoraxgroup/agora-x-site/actions/workflows/ci.yml/badge.svg)

### 2. Jekyll Build Test
**File:** `.github/workflows/jekyll-build.yml`

**What it does:**
- Tests that Jekyll can build the site
- Checks for build errors or warnings
- Uploads the built site as an artifact

**When it runs:**
- Every push to main
- Every pull request
- Can be triggered manually

**What to do if it fails:**
- Check the error message in the workflow log
- Usually indicates syntax errors in markdown or YAML
- Fix the error and commit again

**Status Badge:** ![Jekyll Build Test](https://github.com/agoraxgroup/agora-x-site/actions/workflows/jekyll-build.yml/badge.svg)

### 3. Linting
**File:** `.github/workflows/linting.yml`

**What it does:**
- Checks markdown files for formatting issues
- Validates HTML structure
- Checks CSS for errors
- Validates YAML syntax

**When it runs:**
- Every push to main
- Every pull request

**Types of checks:**
- **Markdown Lint:** Ensures consistent markdown formatting
- **HTML Lint:** Checks HTML structure in built pages
- **CSS Lint:** Validates stylesheet syntax
- **YAML Lint:** Checks configuration files

**Note:** Most linting issues are warnings, not errors. The workflow will complete even with warnings.

**Status Badge:** ![Linting](https://github.com/agoraxgroup/agora-x-site/actions/workflows/linting.yml/badge.svg)

### 4. Link Checker
**File:** `.github/workflows/link-checker.yml`

**What it does:**
- Checks all internal links (links to other pages on the site)
- Checks external links (links to other websites)
- Creates issues automatically if broken links are found

**When it runs:**
- Every push to main
- Every pull request
- Weekly on Mondays at 9am UTC
- Can be triggered manually

**Internal vs External Links:**
- **Internal links:** Links between pages on your site (e.g., `/about.html`)
- **External links:** Links to other websites (e.g., `https://example.com`)

**Known limitations:**
- Social media sites (Facebook, Instagram, LinkedIn, Twitter) often block automated checks
- These are excluded from external link checking

**What to do if it fails:**
- Check the workflow log for broken links
- Fix or remove broken links
- Update outdated URLs

**Status Badge:** ![Link Checker](https://github.com/agoraxgroup/agora-x-site/actions/workflows/link-checker.yml/badge.svg)

### 5. Accessibility Testing
**File:** `.github/workflows/accessibility.yml`

**What it does:**
- Tests the site against WCAG 2.1 Level AA accessibility standards
- Checks for common accessibility issues
- Helps ensure the site is usable by everyone

**When it runs:**
- Every push to main
- Every pull request

**What it checks:**
- Alt text on images
- Color contrast ratios
- Heading structure
- Form labels
- Link text clarity
- Keyboard navigation

**Note:** Some warnings are informational and don't necessarily require fixes.

**Status Badge:** ![Accessibility Testing](https://github.com/agoraxgroup/agora-x-site/actions/workflows/accessibility.yml/badge.svg)

### 6. Spell Check
**File:** `.github/workflows/spell-check.yml`

**What it does:**
- Checks markdown files for spelling errors
- Uses a custom dictionary for technical terms

**When it runs:**
- Every push to main
- Every pull request

**Custom dictionary:**
- Located at `.wordlist.txt`
- Add technical terms, proper nouns, and brand names here
- One word per line

**What to do if it fails:**
- Review flagged words
- Fix actual typos
- Add correct technical terms to `.wordlist.txt`

**Status Badge:** ![Spell Check](https://github.com/agoraxgroup/agora-x-site/actions/workflows/spell-check.yml/badge.svg)

### 7. Image Optimization Check
**File:** `.github/workflows/image-optimization.yml`

**What it does:**
- Checks for large images (>500KB)
- Suggests WebP conversion for better performance
- Reports image statistics

**When it runs:**
- When images are added or changed
- Can be triggered manually

**What it checks:**
- File sizes
- Image formats
- Optimization opportunities

**Recommendations:**
- Keep images under 500KB
- Use WebP format when possible
- Optimize with TinyPNG, ImageOptim, or similar tools

**Status Badge:** ![Image Optimization Check](https://github.com/agoraxgroup/agora-x-site/actions/workflows/image-optimization.yml/badge.svg)

### 8. Security Scanning
**File:** `.github/workflows/security.yml`

**What it does:**
- Scans for security vulnerabilities
- Checks Ruby gems for known issues
- Looks for accidentally committed secrets
- Scans code for security issues
- Checks for mixed content (HTTP in HTTPS site)

**When it runs:**
- Every push to main
- Every pull request
- Weekly on Sundays at 2am UTC

**Security checks:**
- **Dependency Review:** Checks new dependencies in pull requests
- **Secret Scanning:** Looks for API keys, passwords, etc.
- **CodeQL Analysis:** Analyzes JavaScript for security issues
- **Gem Audit:** Checks Ruby gems for vulnerabilities
- **Mixed Content:** Ensures all resources use HTTPS

**Status Badge:** ![Security Scanning](https://github.com/agoraxgroup/agora-x-site/actions/workflows/security.yml/badge.svg)

## How to Use These Workflows

### Viewing Workflow Results

1. Go to the repository on GitHub
2. Click the "Actions" tab
3. Click on any workflow to see its results
4. Green checkmark = passed
5. Red X = failed
6. Yellow dot = in progress

### Understanding Status Badges

The status badges at the top of the README show the current status of each workflow:
- Green "passing" badge = All checks passed
- Red "failing" badge = Some checks failed
- Gray badge = Workflow hasn't run yet

### When a Workflow Fails

1. Don't panic - failures are learning opportunities
2. Click on the red X in GitHub
3. Read the error message
4. Fix the issue
5. Commit and push - the workflow will run again

### Triggering Workflows Manually

Some workflows can be run manually:

1. Go to the "Actions" tab
2. Click on the workflow you want to run
3. Click "Run workflow"
4. Select the branch
5. Click "Run workflow"

## Best Practices

### For Content Editors

- Add alt text to all images for accessibility
- Check your spelling before committing
- Keep image files under 500KB
- Use descriptive link text (not "click here")

### For Developers

- Run `bundle exec jekyll build` locally before pushing
- Test links after adding or changing them
- Review workflow results after each commit
- Fix linting issues when you have time
- Keep gems up to date

### For Everyone

- Review the workflow results regularly
- Don't ignore persistent failures
- Ask for help if you don't understand an error
- Celebrate when all checks pass!

## Workflow Configuration

### Customizing Workflows

Workflows are configured in `.github/workflows/*.yml` files. Each file uses YAML syntax.

### Adding to Custom Dictionary

For spell checking, add words to `.wordlist.txt`:

```bash
# Edit the file
nano .wordlist.txt

# Add one word per line
newword
techterm

# Commit the changes
git add .wordlist.txt
git commit -m "Update custom dictionary"
git push
```

### Configuring Markdown Lint

Markdown linting rules are in `.markdownlint.json`:

```json
{
  "default": true,
  "MD013": {
    "line_length": 120
  }
}
```

## Troubleshooting

### Workflow Stuck or Taking Too Long

- Wait 5-10 minutes - some checks take time
- Check GitHub Status: https://www.githubstatus.com/
- Try canceling and re-running the workflow

### False Positives

Some checks may flag things that aren't actually problems:
- Social media links often fail external link checks (excluded by default)
- Technical terms may be flagged by spell check (add to `.wordlist.txt`)
- Some accessibility warnings are informational only

### Getting Help

- Check the workflow log for details
- Search GitHub issues for similar problems
- Ask your technical support person
- Refer to GitHub Actions documentation: https://docs.github.com/en/actions

## Performance Impact

These workflows:
- Run in GitHub's cloud (not on your computer)
- Don't affect the live site
- Don't slow down your local work
- Have generous usage limits on GitHub's free tier

## Privacy and Security

- Workflows run in isolated environments
- Only have access to the repository code
- Cannot access private data
- Results are visible to repository collaborators

## Future Enhancements

Potential additions:
- Automated deployment to staging environment
- Performance testing (page load times)
- SEO checks
- Automated screenshot comparisons
- Broken image detection

## Questions?

If you have questions about these workflows:
1. Review this guide
2. Check the workflow logs in GitHub
3. Contact your technical support person
4. Refer to the main [EDITING-GUIDE.md](../../EDITING-GUIDE.md)

---

**Last Updated:** 2025-01-11
