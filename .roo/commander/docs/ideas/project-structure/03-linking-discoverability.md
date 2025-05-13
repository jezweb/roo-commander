+++
# --- Metadata ---
id = "PLAN-PROJECT-STRUCTURE-PHASE3-V1"
title = "Project Structure Plan: Phase 3 - Linking & Discoverability"
status = "draft"
created_date = "2025-04-24"
updated_date = "2025-04-24"
version = "1.0"
tags = ["plan", "phase3", "linking", "discoverability", "metadata", "index", "search"]
related_docs = [
    ".ruru/planning/project-structure/00-epic-feature-task-plan.md",
    ".ruru/planning/project-structure/01-define-artifacts-formats.md"
]
objective = "Define how hierarchical artifacts (Epics, Features, Tasks) are linked and how modes can discover related items."
scope = "Focuses on metadata linking and potential search/query strategies."
# --- Plan Specific Fields ---
epic_dir = ".ruru/epics/"
feature_dir = ".ruru/features/"
task_dir = ".ruru/tasks/"
+++

# Project Structure Plan: Phase 3 - Linking & Discoverability

**Objective:** Ensure clear relationships between Epics, Features, and Tasks, and enable modes to find related items efficiently.

**1. Linking Mechanism:**

*   **Primary Method:** Use unique IDs stored in TOML frontmatter metadata fields.
    *   **Features link to Epics:** The `epic_id` field in a Feature file (`FEAT-...md`) contains the ID of its parent Epic (`EPIC-...`).
    *   **Tasks link to Features:** The `feature_id` field in a Task file (`TASK-...md`) contains the ID of its parent Feature (`FEAT-...`).
    *   **Tasks link to Epics (Recommended):** The `epic_id` field can also be added to Task files (derived from the parent Feature) for easier grouping/reporting at the Epic level.
    *   **Epics link to Features:** The `related_features` list in an Epic file (`EPIC-...md`) can be populated with the IDs of its child Features. (Maintained during Feature creation).
    *   **Features link to Tasks:** The `related_tasks` list in a Feature file (`FEAT-...md`) can be populated with the IDs of its child Tasks. (Maintained during Task creation).

**2. Discoverability / Querying:**

*   **Direct Lookup (Requires ID):** If a mode knows the ID of a parent/child (e.g., a Task knows its `feature_id`), it can construct the likely filename (e.g., `FEAT-[ID]-*.md`) and use `list_files` with a pattern in the relevant directory (`.ruru/features/`) to find the specific file, then use `read_file`.
*   **Metadata Search (More Complex):**
    *   **Action:** Implement a capability (potentially via `agent-context-resolver` or a dedicated search function) to scan files within specific directories (`.ruru/epics/`, `.ruru/features/`, `.ruru/tasks/`), parse their TOML frontmatter, and filter based on metadata values (e.g., "Find all Features with `status = 'Ready for Dev'`", "Find all Tasks assigned to `dev-react` under `epic_id = 'EPIC-001'`").
    *   **Tools:** Requires `list_files` (recursive), `read_file` (for each file), and TOML parsing logic.
    *   **Consideration:** This can be slow for many files. May require optimization or a dedicated index if performance becomes an issue.
*   **Simple Index Files (Optional - Future):**
    *   If metadata search proves too slow or complex for the AI to manage directly, dedicated index files (e.g., `.ruru/epics/index.toml`, `.ruru/features/index.toml`) could be generated, summarizing key metadata (ID, Title, Status, Parent ID) for faster lookups. This mirrors the KB indexing approach.

**Implementation Notes:**

*   The logic for adding/updating `related_features` in Epics and `related_tasks` in Features needs to be integrated into the Feature/Task creation workflows (Phase 2). Use `apply_diff` or `search_and_replace` to modify these lists safely.
*   Parsing TOML frontmatter reliably is crucial for metadata search.