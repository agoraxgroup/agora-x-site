# GitHub Actions Deployment Checklist

Use this checklist to deploy the GitHub Actions workflows to the repository.

## Pre-Deployment

- [ ] Review all workflow files in `.github/workflows/`
- [ ] Read WORKFLOW-GUIDE.md to understand what each workflow does
- [ ] Ensure you have write access to the repository
- [ ] Back up any existing workflows (if any)
- [ ] Review custom dictionary in `.wordlist.txt`
- [ ] Review markdown config in `.markdownlint.json`

## Deployment Steps

### 1. Commit the Workflows

```bash
cd /Users/mick/Developer/Organizations/agorax/agora-x-site

# Check status
git status

# Add all new workflow files
git add .github/
git add .markdownlint.json
git add README.md
git add GITHUB-ACTIONS-IMPLEMENTATION.md

# Commit
git commit -m "Add GitHub Actions workflows for automated quality checks

- Add CI workflow for quick quality checks
- Add Jekyll build test workflow
- Add linting workflows (Markdown, HTML, CSS, YAML)
- Add internal and external link checking
- Add accessibility testing (WCAG 2.1 AA)
- Add spell checking with custom dictionary
- Add image optimization checks
- Add security scanning workflows
- Add comprehensive documentation
- Add status badges to README
- Add PR template with checklist

These workflows provide automated quality checks to ensure:
- Site builds successfully
- Links work correctly
- Content is accessible
- Code quality is maintained
- Security vulnerabilities are detected
- Images are optimized
- Spelling is correct

All workflows are documented in .github/WORKFLOW-GUIDE.md"

# Push to GitHub
git push origin main
```

### 2. Verify Workflows Are Recognized

- [ ] Go to repository on GitHub
- [ ] Click "Actions" tab
- [ ] Verify all workflows are listed
- [ ] Check that they're enabled (not disabled)

### 3. Monitor First Run

- [ ] Wait for workflows to start (automatic on push)
- [ ] Monitor each workflow's progress
- [ ] Check for any immediate failures
- [ ] Review logs if any workflow fails

### 4. Review Initial Results

For each workflow that runs:

**CI - Quality Checks:**
- [ ] Passes successfully
- [ ] No large files detected
- [ ] Config files valid
- [ ] Critical pages exist

**Jekyll Build Test:**
- [ ] Build completes successfully
- [ ] No build errors
- [ ] Artifact uploaded

**Linting:**
- [ ] Markdown lint completes
- [ ] HTML lint completes
- [ ] CSS lint completes
- [ ] YAML lint completes
- [ ] Review any warnings (fix if easy)

**Link Checker:**
- [ ] Internal links checked
- [ ] External links checked
- [ ] Review any broken links
- [ ] Note any false positives

**Accessibility Testing:**
- [ ] All pages tested
- [ ] Review any issues
- [ ] Prioritize critical issues

**Spell Check:**
- [ ] Completes without errors
- [ ] Review flagged words
- [ ] Add legitimate terms to `.wordlist.txt`

**Image Optimization:**
- [ ] Report generated
- [ ] Note any large images
- [ ] Review WebP suggestions

**Security Scanning:**
- [ ] No secrets detected
- [ ] No critical vulnerabilities
- [ ] CodeQL completes

### 5. Fix Initial Issues

Priority order:

1. **Critical (fix immediately):**
   - [ ] Jekyll build failures
   - [ ] Broken internal links
   - [ ] Security vulnerabilities

2. **Important (fix soon):**
   - [ ] Missing alt text
   - [ ] Large images (>500KB)
   - [ ] Broken external links

3. **Nice to have (fix when time allows):**
   - [ ] Markdown formatting
   - [ ] Spelling warnings
   - [ ] CSS linting suggestions

### 6. Configure Repository Settings

- [ ] Go to repository Settings
- [ ] Go to Actions → General
- [ ] Ensure Actions are enabled
- [ ] Set workflow permissions (read/write if needed)
- [ ] Configure branch protection rules (optional)

### 7. Update Custom Dictionary

Add any terms flagged incorrectly:

```bash
# Edit .wordlist.txt
echo "TermToAdd" >> .wordlist.txt

# Commit and push
git add .wordlist.txt
git commit -m "Update custom dictionary"
git push
```

### 8. Test Manual Triggers

For workflows that support manual triggers:

- [ ] CI - Quality Checks
- [ ] Jekyll Build Test
- [ ] Linting
- [ ] Link Checker
- [ ] Accessibility Testing
- [ ] Spell Check
- [ ] Image Optimization
- [ ] Security Scanning

Steps:
1. Go to Actions tab
2. Click workflow name
3. Click "Run workflow"
4. Select branch
5. Click "Run workflow"
6. Verify it runs successfully

### 9. Verify Status Badges

- [ ] Go to repository README on GitHub
- [ ] Verify all badges are displayed
- [ ] Verify badges link to workflows
- [ ] Verify badges show correct status
- [ ] Wait for first runs to complete for accurate status

Expected badges:
1. CI - Quality Checks
2. Jekyll Build Test
3. Link Checker
4. Linting
5. Accessibility Testing
6. Security Scanning

### 10. Review Documentation

- [ ] README.md has status badges
- [ ] WORKFLOW-GUIDE.md is accessible
- [ ] WORKFLOWS-QUICK-REFERENCE.md is accessible
- [ ] Pull request template appears in PRs
- [ ] GITHUB-ACTIONS-IMPLEMENTATION.md is complete

## Post-Deployment

### Team Communication

- [ ] Notify team about new workflows
- [ ] Share WORKFLOW-GUIDE.md link
- [ ] Explain status badges
- [ ] Set expectations about warnings vs errors
- [ ] Schedule team training/demo (optional)

### Team Training

Cover these topics:
1. What GitHub Actions are
2. How to view workflow results
3. What each workflow checks
4. When to worry about failures
5. How to fix common issues
6. How to use the custom dictionary
7. How to read status badges

### Monitoring Schedule

Set up regular checks:

**Daily (first week):**
- [ ] Check Actions tab
- [ ] Review any failures
- [ ] Update custom dictionary
- [ ] Fix critical issues

**Weekly (first month):**
- [ ] Review link checker results
- [ ] Check accessibility warnings
- [ ] Monitor workflow minute usage
- [ ] Update documentation as needed

**Monthly (ongoing):**
- [ ] Review security scan results
- [ ] Update dependencies
- [ ] Check for workflow updates
- [ ] Review team feedback

### Fine-Tuning

Based on initial results, consider:

- [ ] Adjust linting rules (`.markdownlint.json`)
- [ ] Add more terms to dictionary (`.wordlist.txt`)
- [ ] Exclude specific files/folders
- [ ] Adjust workflow schedules
- [ ] Update documentation
- [ ] Add more workflows

## Troubleshooting

### Workflows Not Running

**Problem:** Workflows don't start after push

**Solutions:**
1. Check Actions are enabled in Settings
2. Verify workflow YAML syntax
3. Check branch names match (main vs master)
4. Wait a few minutes (can be delayed)

### Workflow Fails Immediately

**Problem:** Workflow fails at first step

**Solutions:**
1. Check workflow logs for errors
2. Verify Ruby version compatibility
3. Verify Node.js version compatibility
4. Check GitHub Actions status

### Too Many Warnings

**Problem:** Linting produces too many warnings

**Solutions:**
1. Adjust config files
2. Fix gradually over time
3. Add continue-on-error to workflow
4. Focus on critical issues first

### False Positives

**Problem:** Checks flag things that aren't problems

**Solutions:**
1. Add to custom dictionary (spelling)
2. Exclude specific files/patterns
3. Adjust linting rules
4. Document why it's a false positive

### Performance Issues

**Problem:** Workflows take too long

**Solutions:**
1. Run fewer checks per workflow
2. Split into smaller workflows
3. Use caching for dependencies
4. Reduce scope of checks

## Rollback Plan

If workflows cause problems:

### Quick Disable

```bash
# Rename workflows directory to disable all
cd .github
mv workflows workflows-disabled
git add .
git commit -m "Temporarily disable workflows"
git push
```

### Selective Disable

```bash
# Disable specific workflow
mv .github/workflows/problematic.yml .github/workflows/problematic.yml.disabled
git add .
git commit -m "Disable problematic workflow"
git push
```

### Re-enable

```bash
# Re-enable workflows
cd .github
mv workflows-disabled workflows
git add .
git commit -m "Re-enable workflows"
git push
```

## Success Criteria

Workflows are successfully deployed when:

- [ ] All workflows run without errors
- [ ] Status badges display correctly
- [ ] Team understands how to use them
- [ ] Critical issues are being caught
- [ ] Documentation is accessible
- [ ] No blocking issues for content editors

## Support

### Resources

- **Full Guide:** `.github/WORKFLOW-GUIDE.md`
- **Quick Reference:** `.github/WORKFLOWS-QUICK-REFERENCE.md`
- **Implementation Summary:** `GITHUB-ACTIONS-IMPLEMENTATION.md`
- **GitHub Docs:** https://docs.github.com/en/actions

### Getting Help

1. Check workflow logs in Actions tab
2. Review documentation files
3. Search GitHub Actions documentation
4. Check GitHub Status: https://www.githubstatus.com/
5. Ask in repository Discussions

## Notes

Use this space for deployment notes:

```
Date: _______________
Deployed by: _______________
Initial status: _______________
Issues encountered: _______________
Resolution: _______________
Team notified: _______________
```

---

**Checklist Complete!** ✓

Once all items are checked, workflows are fully deployed and operational.
