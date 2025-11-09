---
description: Complete release checklist for publishing software
argument-hint: <version>
---

# Release

Complete checklist for preparing and publishing a software release.

---

## Your Task

Guide the user through a comprehensive release checklist covering version bump, build, test, and deployment.

### Step 1: Pre-Release Checklist

Verify project is ready for release:

```
🔍 Pre-Release Checklist

Repository Status:
- [ ] All changes committed
- [ ] Working directory clean (git status)
- [ ] All tests passing
- [ ] No known critical bugs
- [ ] Documentation up-to-date

Code Quality:
- [ ] Linting passes (npm run lint)
- [ ] Type checking passes (tsc --noEmit)
- [ ] No TODO/FIXME comments for release blockers
- [ ] Security audit clean (npm audit)

Dependencies:
- [ ] All dependencies up-to-date
- [ ] No deprecated packages
- [ ] Licenses compatible

Completed? (y/n)
```

If any items incomplete, prompt user to resolve before continuing.

### Step 2: Version Bump

Update version number in project files:

**Parse version** (from command or ask):

```
📦 Version Bump

Current version: [read from package.json]
New version: [provided or ask user]

Semantic versioning:
- Major (2.0.0): Breaking changes
- Minor (1.1.0): New features
- Patch (1.0.1): Bug fixes

Which files to update?
- [ ] package.json (version field)
- [ ] CHANGELOG.md (add new version entry)
- [ ] README.md (if version mentioned)
- [ ] Other docs with version numbers
```

**Update package.json**:

```bash
npm version [major|minor|patch] --no-git-tag-version
```

Or manual edit:

```json
{
  "version": "[new-version]"
}
```

**Update CHANGELOG.md**:

```markdown
## [version] - YYYY-MM-DD

### Added
- [Feature 1]
- [Feature 2]

### Changed
- [Change 1]

### Fixed
- [Fix 1]
- [Fix 2]

### Breaking Changes
- [Breaking change description]
```

**Update other version references**:

Check these common locations:
- README.md badges or install instructions
- Documentation version numbers
- Constants files (VERSION = "x.y.z")

### Step 3: Build & Test

Run complete build and test suite:

```
🔨 Build & Test

Running:
1. Clean build: npm run clean (if exists)
2. Full build: npm run build
3. Test suite: npm test
4. Integration tests: npm run test:integration (if exists)
5. E2E tests: npm run test:e2e (if exists)
```

Execute commands:

```bash
npm run clean || true
npm run build
npm test
```

**If build fails**:
```
❌ Build failed!

Error: [error message]

Fix the build before proceeding with release.
Stop here and resolve issues.
```

**If tests fail**:
```
❌ Tests failed!

Failed tests:
[list failed tests]

Fix tests before releasing.
Stop here and resolve issues.
```

**If success**:
```
✅ Build successful!
✅ All tests passing!

Ready to proceed with release.
```

### Step 4: Git Commit & Tag

Commit version bump and create tag:

```bash
# Commit version changes
git add package.json CHANGELOG.md [other files]
git commit -m "chore: bump version to [version]"

# Create annotated tag
git tag -a v[version] -m "Release v[version]

See CHANGELOG.md for details.
"

# Verify
git log --oneline -3
git tag --list v[version]
```

**Output**:
```
✅ Version bumped to [version]
✅ Git tag v[version] created
```

### Step 5: Deploy (Platform-Specific)

Guide deployment based on project type:

**Check deployment target**:
- npm package?
- Cloudflare Workers?
- Docker image?
- Static hosting?
- App store?

**npm Package**:
```bash
# Dry run first
npm publish --dry-run

# If looks good, publish
npm publish

# If scoped package
npm publish --access public
```

**Cloudflare Workers**:
```bash
# Build if needed
npm run build

# Deploy
npx wrangler deploy

# Verify
npx wrangler tail
```

**Docker**:
```bash
# Build image
docker build -t [registry]/[image]:[version] .

# Tag as latest
docker tag [registry]/[image]:[version] [registry]/[image]:latest

# Push
docker push [registry]/[image]:[version]
docker push [registry]/[image]:latest
```

**Static Hosting** (Vercel/Netlify/Cloudflare Pages):
```bash
# Push to git (triggers deploy)
git push origin main

# Or manual deploy
npm run deploy
```

### Step 6: Push to Git

Push commits and tags:

```bash
# Push commits
git push origin main

# Push tag
git push origin v[version]
```

**Verify**:
```
✅ Code pushed to GitHub
✅ Tag v[version] pushed

View at:
https://github.com/[user]/[repo]/tree/v[version]
```

### Step 7: Create GitHub Release

Use GitHub release command or manual:

```
Would you like to create a GitHub release?

Options:
1. Use /github-release command (recommended)
2. Manual via web browser
3. Skip (can do later)

Your choice:
```

If option 1, invoke `/github-release [version]`

If option 2, provide manual instructions (see github-release command)

### Step 8: Post-Release Tasks

Complete post-release checklist:

```
📣 Post-Release Tasks

Communication:
- [ ] Update project website/documentation
- [ ] Write release blog post (if applicable)
- [ ] Announce on social media
- [ ] Notify users via email/newsletter
- [ ] Update README with new features

Monitoring:
- [ ] Monitor error tracking (Sentry, etc.)
- [ ] Check deployment metrics
- [ ] Verify production functionality
- [ ] Watch for issue reports

Housekeeping:
- [ ] Close released issues/PRs
- [ ] Update project board
- [ ] Archive old versions (if needed)
- [ ] Plan next release features
```

### Step 9: Confirm Success

Output final summary:

```
🎉 Release [version] Complete!

✅ Version bumped
✅ Build successful
✅ Tests passing
✅ Deployed to [platform]
✅ Git tagged and pushed
✅ GitHub release created

Release Details:
- Version: [version]
- Commits: [N] since last release
- Deployment: [URL or platform]
- GitHub: https://github.com/[user]/[repo]/releases/tag/v[version]

📊 Next Steps:
1. Monitor production for issues
2. Watch for user feedback
3. Plan next release cycle
4. Celebrate! 🎊
```

---

## Platform-Specific Guides

### npm Package

```bash
# Prerequisites
npm login

# Verify package.json
cat package.json

# Check what will be published
npm publish --dry-run

# Publish
npm publish

# Verify
npm view [package-name]@[version]
```

### Cloudflare Workers

```bash
# Prerequisites
npx wrangler login

# Build
npm run build

# Deploy
npx wrangler deploy

# Verify deployment
curl https://[worker-name].[account].workers.dev

# Check logs
npx wrangler tail
```

### Docker Registry

```bash
# Prerequisites
docker login [registry]

# Build
docker build -t [image]:[version] .

# Test locally
docker run -p 3000:3000 [image]:[version]

# Push
docker push [image]:[version]

# Verify
docker pull [image]:[version]
```

### Vercel

```bash
# Prerequisites
vercel login

# Deploy production
vercel --prod

# Or push to main (auto-deploys)
git push origin main

# Check deployment
vercel ls
```

---

## Error Handling

**Uncommitted changes**:
```
⚠️ You have uncommitted changes!

Files:
[list modified files]

Commit or stash before releasing:
git add .
git commit -m "chore: prepare for release"
```

**Tests failing**:
```
❌ Cannot release with failing tests!

Failed: [N] tests

Fix tests first, then re-run /release
```

**npm publish fails**:
```
❌ npm publish failed

Common causes:
- Not logged in: npm login
- Package name taken: Change name in package.json
- Version already published: Bump version higher
- 2FA required: npm publish --otp=123456
```

**Deployment fails**:
```
❌ Deployment failed

Check:
1. Credentials configured?
2. Build successful?
3. Environment variables set?
4. Network/firewall issues?

Debug: [platform-specific troubleshooting]
```

---

## Best Practices

### DO

✅ **Test thoroughly** before releasing
✅ **Update CHANGELOG** with all changes
✅ **Follow semantic versioning** (major.minor.patch)
✅ **Create git tags** for all releases
✅ **Monitor after release** (catch issues early)
✅ **Communicate changes** to users

### DON'T

❌ **Don't release with failing tests** (quality matters)
❌ **Don't skip version bump** (causes confusion)
❌ **Don't forget CHANGELOG** (users need context)
❌ **Don't deploy untested code** (test first!)
❌ **Don't ignore post-release tasks** (monitor and communicate)

---

## Quick Reference

**Version bumping**:
```bash
npm version patch  # 1.0.0 → 1.0.1
npm version minor  # 1.0.0 → 1.1.0
npm version major  # 1.0.0 → 2.0.0
```

**Git workflow**:
```bash
git add .
git commit -m "chore: bump version to [version]"
git tag -a v[version] -m "Release v[version]"
git push origin main
git push origin v[version]
```

**Common deploy commands**:
```bash
npm publish              # npm
npx wrangler deploy      # Cloudflare Workers
vercel --prod            # Vercel
docker push [image]      # Docker
```

**Checklist summary**:
1. Pre-release checks (tests, docs, security)
2. Version bump (package.json, CHANGELOG)
3. Build & test
4. Git commit & tag
5. Deploy
6. Push to Git
7. Create GitHub release
8. Post-release tasks

---

*This command is part of Roo Commander v9.0.0 - Use /github-release for GitHub-specific releases*
