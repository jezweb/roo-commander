---
Timestamp: 2025-04-01 02:43:00 UTC
Mode: devops-manager
Event: DECISION
---

**Context:** Setting up preview deployments for the Mode Configurator application (`tools/mode_configurator`) within the `jezweb/roo-commander` repository.

**Details:**
Decided to use Netlify for automated preview deployments of feature branches and pull requests. This approach leverages the user's existing Netlify account and provides unique, shareable URLs for testing and review, separate from the existing GitHub Pages deployment for the `main` branch.

**Netlify Configuration Summary:**
*   Repository: `jezweb/roo-commander`
*   Base Directory: `tools/mode_configurator`
*   Build Command: `npm run build`
*   Publish Directory: `tools/mode_configurator/dist`

**Rationale:**
Netlify offers seamless integration with GitHub, automated builds/deploys per branch/PR, and unique preview URLs. This significantly simplifies the process compared to modifying the existing GitHub Actions workflow for multi-branch deployments to subdirectories or implementing manual deployment procedures.

**Next Steps:**
*   User to connect the `jezweb/roo-commander` repository to their Netlify account via the Netlify dashboard.
*   User to confirm or input the build settings (Base directory, Build command, Publish directory) in Netlify.
*   Consider disabling the `.github/workflows/deploy-configurator.yml` workflow later if the GitHub Pages deployment becomes redundant for the `main` branch.

---