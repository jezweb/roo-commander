+++
# --- Release Notes ---
id = "RELEASE-[VersionNumber]-[YYYYMMDD]" # e.g., RELEASE-V8.1.0-20250801
title = "Release Notes: Roo Commander V8 - Version [VersionNumber]"
version_number = "[X.Y.Z, e.g., 8.1.0]" # The specific version being released
codename = "[Associated Codename if Major Release, e.g., Wombat]" # Optional, for major versions
release_date = "{{YYYYMMDD}}"
status = "draft" # Options: draft, published, archived
tags = ["release-notes", "version", "[VersionNumber_tag]", "[codename_tag]"]
template_schema_doc = ".roo/commander/templates/releases/template_00_release_notes.README.md"

# --- Release Summary ---
# primary_focus = "[e.g., New Data Product Management Capabilities, Stability Improvements, Squad Onboarding Enhancements]"
# key_highlights = [
#    "Highlight 1: New 'manager-data-product' mode introduced.",
#    "Highlight 2: Enhanced session artifact organization.",
#    "Highlight 3: Addressed critical bug X in roo-commander."
# ]
# link_to_milestone_or_project_board = "[URL if applicable]"

# --- Related Commits / PRs (Optional) ---
# related_commit_hashes = ["[hash1]", "[hash2]"]
# related_pull_request_urls = ["[url1]", "[url2]"]
+++

# Release Notes: Roo Commander V8 - Version {{ version_number | default: "[X.Y.Z]" }} {{ codename | default: ""}}

*   **Release Date:** `{{ release_date }}`
*   **Version:** `{{ version_number }}`
*   **(Optional) Codename:** `{{ codename }}`
*   **Primary Focus:** `{{ primary_focus | default: "[Summarize main theme of this release]" }}`

## 1. Overview & Key Highlights ✨

[Provide a brief, engaging overview of what this release is about. Bullet points for key highlights are effective.]

*   `{{ key_highlights[0] | default: "Highlight 1..." }}`
*   `{{ key_highlights[1] | default: "Highlight 2..." }}`
*   `{{ key_highlights[2] | default: "Highlight 3..." }}`

*(Optional: Link to project board or milestone: `{{ link_to_milestone_or_project_board }}`)*

## 2. What's New / New Features 🚀

[Detail any new major features, new modes (Managers or Squad Members), or significant new capabilities introduced in this version. For each, provide a brief description and its benefit.]

*   **New Feature/Mode 1: `[Name of Feature/Mode]`**
    *   Description: [What it is, what it does]
    *   Benefit: [Why it's valuable]
    *   Related Documentation: `[Link to relevant user guide or mode documentation]`
*   **New Feature/Mode 2: `[Name of Feature/Mode]`**
    *   Description: ...
    *   Benefit: ...
    *   Related Documentation: ...

## 3. Changes & Improvements 🛠️

[List significant enhancements, refactorings, or improvements to existing functionalities, modes, rules, or templates.]

*   **Improvement 1: `[Area of Improvement]`**
    *   Description: [Details of the change and its impact]
*   **Improvement 2: `[Area of Improvement]`**
    *   Description: ...

## 4. Bug Fixes 🐞

[List key bugs that were resolved in this version. Reference bug report IDs if applicable.]

*   **Fix 1: `[Brief Description of Bug Fixed]`**
    *   Details: [e.g., "Resolved issue where X failed under Y condition."]
    *   (Optional) Defect ID: `[Link or ID]`
*   **Fix 2: `[Brief Description of Bug Fixed]`**
    *   Details: ...

## 5. Known Issues & Limitations ⚠️

[Document any known issues, limitations, or workarounds that users should be aware of in this version.]

*   Issue 1: [Description]
    *   Workaround (if any):
*   Limitation 1: [Description]

## 6. Important Notes for Upgrading (If Applicable)

[If this release requires any special steps for users upgrading from a previous version, or if there are any breaking changes (should be rare for minor/patch), detail them here.]

## 7. Acknowledgements (Optional)

[Thank any key contributors to this release.]

---
For detailed commit history, see: `{{ related_commit_hashes | join: ", " }}`
For related Pull Requests, see: `{{ related_pull_request_urls | join: ", " }}`