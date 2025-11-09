---
description: Create a GitHub release with tag and release notes
argument-hint: <version>
---

# GitHub Release

Create a GitHub release with version tag and generated release notes.

---

## Your Task

Guide the user through creating a GitHub release with proper versioning and release notes.

### Step 1: Parse Version

Extract version from command or ask user:

**Command format**: `/github-release <version>`

Examples:
- `/github-release v1.0.0`
- `/github-release v2.1.0-beta`

If no version provided:
```
📦 GitHub Release

What version are you releasing?

Format: v[major].[minor].[patch]
Examples: v1.0.0, v2.1.0, v1.0.0-beta

Version:
```

### Step 2: Verify Git State

Check git status and recent commits:

```bash
git status
git log --oneline -10
git tag --list
```

**If uncommitted changes**:
```
⚠️ You have uncommitted changes:

[list files]

Recommendation: Commit or stash before creating release.

Proceed anyway? (y/n)
```

**If tag already exists**:
```
⚠️ Tag [version] already exists!

Existing tags:
[list recent tags]

Options:
1. Use a different version number
2. Delete existing tag (git tag -d [version])
3. Cancel

Your choice:
```

### Step 3: Generate Release Notes

Collect commits since last release:

```bash
# Get last release tag
git describe --tags --abbrev=0

# Get commits since last release
git log [last-tag]..HEAD --oneline
```

Group commits by type:

```
📝 Release Notes Draft

Since [last-version]:

Features:
• [commit message for new features]
• [commit message for new features]

Fixes:
• [commit message for fixes]
• [commit message for fixes]

Improvements:
• [commit message for improvements]

Breaking Changes:
• [any breaking changes]

Documentation:
• [documentation updates]

Total: [N] commits since [last-version]
```

Ask user:

```
Would you like to:
1. Use these release notes as-is
2. Edit/customize release notes
3. Let me generate more detailed notes

Your choice:
```

If user chooses to edit, open editor or ask for custom notes.

### Step 4: Create Git Tag

Create annotated tag:

```bash
git tag -a [version] -m "Release [version]

[Release notes summary]

Full changelog: https://github.com/[user]/[repo]/compare/[last-version]...[version]
"
```

Verify tag created:

```bash
git tag --list [version]
git show [version]
```

### Step 5: Push Tag to GitHub

Push tag to remote:

```bash
git push origin [version]
```

**If push fails**:
```
❌ Failed to push tag to remote.

Common causes:
• Remote not configured
• No push permission
• Network issue

Check: git remote -v

Fix and retry? (y/n)
```

### Step 6: Create GitHub Release

**Option A: Using GitHub CLI (gh)**

Check if gh CLI available:

```bash
which gh
```

If available:

```bash
gh release create [version] \
  --title "[version]" \
  --notes "$(cat <<'EOF'
[Release notes from Step 3]
EOF
)"
```

**Option B: Manual via Web**

If gh CLI not available:

```
📌 Manual GitHub Release Steps:

1. Go to: https://github.com/[user]/[repo]/releases/new

2. Select tag: [version]

3. Release title: [version] or "[Project Name] [version]"

4. Release notes (copy-paste):

[Formatted release notes]

5. Options:
   - [ ] Set as latest release (usually yes)
   - [ ] Create discussion for this release (optional)
   - [ ] Set as pre-release (if beta/alpha)

6. Click "Publish release"
```

### Step 7: Verify Release

Check that release was created:

**If using gh CLI**:

```bash
gh release list
gh release view [version]
```

**If manual**:

```
Visit: https://github.com/[user]/[repo]/releases

Verify:
- Release appears in list
- Version tag is correct
- Release notes are formatted properly
- Assets attached (if any)
```

### Step 8: Confirm Success

Output summary:

```
✅ GitHub Release Created!

Version: [version]
Tag: [version]
Commits: [N] since [last-version]

Release URL:
https://github.com/[user]/[repo]/releases/tag/[version]

📋 What's Next?

1. Verify release on GitHub
2. Update documentation with new version
3. Notify users (social media, changelog, etc.)
4. Deploy to production (if applicable)
```

---

## Release Notes Templates

### Standard Release

```markdown
## 🎉 What's New

- [Feature 1]: [Description]
- [Feature 2]: [Description]

## 🐛 Bug Fixes

- Fixed [issue]: [Description]
- Resolved [problem]: [Description]

## 🔧 Improvements

- Improved [aspect]: [Description]
- Optimized [component]: [Description]

## 📚 Documentation

- Updated [doc]: [Description]

## 🔗 Links

- [Full Changelog](https://github.com/[user]/[repo]/compare/[last-version]...[version])
- [Documentation](https://[docs-url])
```

### Breaking Changes Release

```markdown
## ⚠️ Breaking Changes

**[Change description]**
- Before: [old behavior]
- After: [new behavior]
- Migration: [how to update]

## 🎉 New Features

[... as above ...]

## Migration Guide

1. [Step 1 to migrate]
2. [Step 2 to migrate]
3. [Step 3 to migrate]

Need help? Open an issue or discussion.
```

### Beta/Pre-release

```markdown
## 🧪 Beta Release

This is a pre-release version for testing.

## What's Being Tested

- [Feature/change 1]
- [Feature/change 2]

## Known Issues

- [Issue 1]
- [Issue 2]

## Feedback

Please report issues at: https://github.com/[user]/[repo]/issues
```

---

## Error Handling

**Not a git repository**:
```
❌ Not a git repository.

Run: git init

Then create commits and try again.
```

**No remote configured**:
```
❌ No GitHub remote configured.

Add remote:
git remote add origin https://github.com/[user]/[repo].git

Verify:
git remote -v
```

**gh CLI not installed**:
```
💡 GitHub CLI not found.

Options:
1. Install gh CLI: https://cli.github.com/
2. Create release manually via web browser

I'll provide manual steps...
```

**No commits since last release**:
```
⚠️ No new commits since [last-version].

Current tag: [last-version]
HEAD: [same commit]

Are you sure you want to create a release?

This would be a duplicate. Consider:
- Adding more changes first
- Using a patch version bump
```

---

## Best Practices

### DO

✅ **Follow semantic versioning** (major.minor.patch)
✅ **Write clear release notes** (what changed and why)
✅ **Group commits by type** (features, fixes, improvements)
✅ **Link to full changelog** (GitHub compare view)
✅ **Mention breaking changes** (with migration guide)
✅ **Push tag before creating release** (GitHub needs the tag)

### DON'T

❌ **Don't release with uncommitted changes** (creates confusion)
❌ **Don't skip release notes** (users need context)
❌ **Don't use vague version numbers** (follow semver)
❌ **Don't forget to push tag** (release won't work)
❌ **Don't release untested code** (test first!)

---

## Quick Reference

**Semantic Versioning**:
- **Major** (v2.0.0): Breaking changes
- **Minor** (v1.1.0): New features (backwards compatible)
- **Patch** (v1.0.1): Bug fixes

**Git commands**:
```bash
git tag -a v1.0.0 -m "Release v1.0.0"  # Create tag
git push origin v1.0.0                  # Push tag
git tag -d v1.0.0                       # Delete local tag
git push origin :v1.0.0                 # Delete remote tag
```

**GitHub CLI**:
```bash
gh release create v1.0.0 --title "v1.0.0" --notes "Release notes"
gh release list                         # List releases
gh release view v1.0.0                  # View release details
```

**Manual URL**:
```
https://github.com/[user]/[repo]/releases/new
```

---

*This command is part of Roo Commander v9.0.0 - Use /release for general release checklist*
