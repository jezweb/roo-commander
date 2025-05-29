---
Timestamp: 2025-04-01 14:23:00 UTC+11:00 
Mode: roo-commander
Event: DECISION
---

**Context:** Implementing versioning for mode templates in `tools/mode_configurator/`.

**Details:**
Decided to adopt the "Archive Folder" approach:
-   `public/mode_templates/` holds the latest development version.
-   `public/archived_mode_templates/[version_tag]/` holds static snapshots of released versions (e.g., `v2.1.0`, `v2.2.0-beta.1`).
-   `public/mode_versions.json` stores metadata (version, date, summary, path, status) for UI population.
-   Pre-release versions (beta, rc) will use tags (e.g., `v2.2.0-beta.1`) and a `status` field in the metadata.

**Rationale:** Keeps development separate, simplifies UI loading, centralizes metadata.

**Next Steps:**
-   Create initial directory structure and metadata file (`code` mode task created).
-   Delegate detailed planning and implementation tasks to relevant modes (TA, Frontend, PM, Git/DevOps).

---