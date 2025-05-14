# Documentation: Template `template_00_project_handoff_status.md`

## 1. Purpose

This template defines the standard structure for creating a **Project Handoff & Status Update document**. This document is designed to provide a concise yet comprehensive snapshot of a project's (specifically, the Roo Commander V8 ecosystem's) current state at a particular point in time.

It is intended to be used when:
*   Pausing work and needing to capture context for easy resumption.
*   Handing off development to another person or AI instance.
*   Starting a new AI context window where previous detailed history is lost.
*   Archiving a significant phase of development.

This document, when used with a project Repomix and directory tree file, allows for rapid re-engagement and understanding of the project's trajectory.

## 2. Usage

1.  **Before Pausing/Handoff:**
    *   Copy `[.roo/commander/templates/project_management/template_00_project_handoff_status.md](.roo/commander/templates/project_management/template_00_project_handoff_status.md)` to a suitable location (e.g., a dedicated `_project_handoff_context/` directory at the project root, or a versioned status update directory).
2.  **Rename File:** Rename it descriptively, including the date (e.g., `project_status_update_20250720.md`).
3.  **Populate TOML Frontmatter:**
    *   `id`: Unique ID for this status update.
    *   `title`: `Project Handoff & Status Update: [Project Name] - [Date]`.
    *   `handoff_date`: Current timestamp.
    *   `project_version_snapshot`: Current version/state of the main system.
    *   Fill in `previous_focus_area`, `next_immediate_tasks`, and relevant `tags`.
    *   **Crucially, list the filenames of the accompanying Repomix and tree files** in `repomix_file_reference` and `tree_file_reference`. Also list the standard companion context documents.
4.  **Detail Status in Markdown Body:**
    *   Fill in all sections of the Markdown body with the latest information regarding project goals, accomplishments, current focus, next steps, recent decisions, and any open questions or blockers.

## 3. TOML Frontmatter Schema

*   **`id` (String, Required):** Unique ID. Convention: `HANDOFF-[ProjectShortName]-[YYYYMMDDHHMM]`.
*   **`title` (String, Required):** Title of the handoff document.
*   **`handoff_date` (String, Required):** Timestamp of handoff.
*   `project_version_snapshot` (String, Optional): Version/state of the project.
*   `previous_focus_area` (String, Optional, Multiline): What was last being worked on.
*   `next_immediate_tasks` (Array of Strings, Optional): Key next steps.
*   **`tags` (Array of Strings, Required):** Include `"handoff"`, `"status-report"`, `"project-context"`.
*   **`template_schema_doc` (String, Required):** `".roo/commander/templates/project_management/template_00_project_handoff_status.README.md"`

### Links to Supporting Context (TOML)

*   `repomix_file_reference` (String, Optional): Filename of the accompanying Repomix output.
*   `tree_file_reference` (String, Optional): Filename of the accompanying directory tree output.
*   `architectural_overview_ref` (String, Optional): Filename of the architectural overview.
*   `master_template_index_ref` (String, Optional): Filename of the template index.
*   `new_squad_ideas_ref` (String, Optional): Filename of squad ideas doc.
*   `new_template_ideas_ref` (String, Optional): Filename of template ideas doc.

## 4. Markdown Body Structure

*   `# Project Handoff & Status Update: {{ title }}`: Main title.
*   `## 1. Project & Version Snapshot`: Basic identifiers.
*   `## 2. Purpose of this Document`: Explains its role.
*   `## 3. Overall Project Goal Reminder`: High-level vision.
*   `## 4. Last Major Accomplishments / Current State`: Key progress.
*   `## 5. Current Focus / Immediate Next Steps (Before Handoff)`: What was just happening.
*   `## 6. Next Logical Steps (Post Re-engagement)`: Priority tasks moving forward.
*   `## 7. Key Decisions Made Recently`: Important recent decisions.
*   `## 8. Open Questions / Blockers / Discussion Points`: Items needing attention.
*   `## 9. Supporting Context Files`: Lists the companion files (Repomix, tree, other context docs).

This template ensures that critical project context can be efficiently captured and transferred, facilitating smoother transitions and continued productivity.