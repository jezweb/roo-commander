+++
# --- Metadata ---
id = "PLAN-PROJECT-STRUCTURE-PHASE1-V1"
title = "Project Structure Plan: Phase 1 - Define Artifacts & Formats"
status = "draft"
created_date = "2025-04-24"
updated_date = "2025-04-24"
version = "1.0"
tags = ["plan", "phase1", "artifacts", "schema", "toml", "epic", "feature", "task", "template"]
related_docs = [".ruru/planning/project-structure/00-epic-feature-task-plan.md"]
objective = "Define the structure, TOML schema, content guidelines, naming conventions, and file locations for Epic and Feature artifacts, and specify required additions to Task artifacts."
# --- Plan Specific Fields ---
epic_dir = ".ruru/epics/"
feature_dir = ".ruru/features/"
task_dir = ".ruru/tasks/" # Existing
template_dir = ".ruru/templates/toml-md/"
+++

# Project Structure Plan: Phase 1 - Define Artifacts & Formats

**1. Epic Artifact:**

*   **Location:** `[epic_dir]`
*   **Naming Convention:** `EPIC-[ID]-[kebab-case-short-name].md` (e.g., `EPIC-001-user-authentication.md`)
    *   `[ID]`: Sequential number (e.g., 001) or potentially a date-based unique ID. Needs consistent generation logic.
*   **Template:** Create `[template_dir]/20_epic.md` (Use next available number).
*   **TOML Schema (`+++` block):**
    *   `id`: "EPIC-[ID]" (string, required)
    *   `title`: "User-friendly Epic Title" (string, required)
    *   `status`: "Draft" | "Planned" | "In Progress" | "Done" | "On Hold" (string, required)
    *   `objective`: "High-level goal of this Epic." (string, required)
    *   `scope_description`: "Brief description of what this epic includes." (string, optional)
    *   `owner`: "{mode_slug}" (string, optional, e.g., `manager-product`)
    *   `created_date`: "YYYY-MM-DD" (string, required)
    *   `updated_date`: "YYYY-MM-DD" (string, required)
    *   `related_features`: ["FEAT-[ID1]", "FEAT-[ID2]", ...] (array of strings, optional, populated as features are linked)
    *   `tags`: ["keyword1", "keyword2"] (array of strings, optional)
*   **Markdown Body Content:** Detailed description, rationale, business value, high-level requirements, constraints, assumptions, success metrics.

**2. Feature Artifact:**

*   **Location:** `[feature_dir]`
*   **Naming Convention:** `FEAT-[ID]-[kebab-case-short-name].md` (e.g., `FEAT-023-password-reset-flow.md`)
    *   `[ID]`: Sequential number or unique ID.
*   **Template:** Create `[template_dir]/21_feature.md`.
*   **TOML Schema (`+++` block):**
    *   `id`: "FEAT-[ID]" (string, required)
    *   `title`: "User-friendly Feature Title" (string, required)
    *   `status`: "Draft" | "Ready for Dev" | "In Progress" | "Blocked" | "In Review" | "Done" (string, required)
    *   `epic_id`: "EPIC-[ID]" (string, required, links to parent Epic)
    *   `description`: "Detailed description of the feature and its value." (string, required)
    *   `acceptance_criteria`: ["Criterion 1", "Criterion 2"] (array of strings, required)
    *   `lead_assignee`: "{mode_slug}" (string, optional, e.g., `lead-backend`, `lead-frontend`)
    *   `created_date`: "YYYY-MM-DD" (string, required)
    *   `updated_date`: "YYYY-MM-DD" (string, required)
    *   `related_tasks`: ["TASK-[MODE]-[ID]", ...] (array of strings, optional, populated as tasks are created/linked)
    *   `related_docs`: ["path/to/design.md", ...] (array of strings, optional)
    *   `tags`: ["keyword1", "auth", "ui"] (array of strings, optional)
*   **Markdown Body Content:** User stories (optional), detailed requirements, technical notes, links to UI mockups/designs, potential implementation considerations.

**3. Task Artifact (MDTM - Existing):**

*   **Location:** `[task_dir]` (Existing)
*   **Naming Convention:** `TASK-[MODE_PREFIX]-[YYYYMMDD-HHMMSS].md` (Existing)
*   **Template:** Update existing templates (`01_mdtm_feature.md`, `02_mdtm_bug.md`, etc.) or ensure creation logic includes the new fields.
*   **TOML Schema Additions:**
    *   **Add:** `feature_id`: "FEAT-[ID]" (string, required, links to parent Feature)
    *   **Add:** `epic_id`: "EPIC-[ID]" (string, optional but recommended, derived from parent Feature)
    *   *(Ensure existing required fields like `id`, `title`, `status`, `assigned_to`, `coordinator` are maintained)*.
*   **Markdown Body Content:** (Existing: Description, Acceptance Criteria, Checklist).

**Implementation Actions:**

*   Create the new template files (`20_epic.md`, `21_feature.md`) in `[template_dir]`.
*   Update existing MDTM task templates (or the logic that uses them) to include `feature_id` and `epic_id`.
*   Define the ID generation strategy (e.g., use a simple counter file or rely on date/time uniqueness).