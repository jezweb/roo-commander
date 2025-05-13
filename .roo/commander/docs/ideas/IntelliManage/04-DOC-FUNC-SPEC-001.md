# --- Basic Metadata ---
id = "DOC-FUNC-SPEC-001"
title = "IntelliManage: Core Functionality Specification (CRUD & Linking)"
status = "draft"
doc_version = "1.0"
content_version = 1.0
audience = ["developers", "architects", "contributors", "ai_modes"]
last_reviewed = "2025-04-28" # Use current date
template_schema_doc = "BROKEN_LINK_NEEDS_MANUAL_REVIEW_.roo/commander/templates/documentation/09_documentation.README.md" # Assuming this is the schema doc template
tags = ["intellimanage", "architecture", "specification", "crud", "linking", "core-functionality", "multi-project"]
related_docs = ["DOC-ARCH-001", "DOC-FS-SPEC-001", "DOC-SCHEMA-001"] # Link to Architecture, File System, Schema docs
+++

# IntelliManage: Core Functionality Specification (CRUD & Linking)

## 1. Introduction / Overview 🎯

This document details the core functionalities of the IntelliManage framework, focusing on the Create, Read, Update, and Delete (CRUD) operations for project management artifacts (Initiatives, Epics, Features, Tasks/Stories/Bugs) and the mechanisms for establishing and maintaining hierarchical links between them. It also covers the management of subtasks within parent items.

These specifications guide the implementation of the **Core Logic Engine** component described in the Overall Architecture document (`DOC-ARCH-001`). All operations must respect the defined File System Structure (`DOC-FS-SPEC-001`) and TOML Schemas (`DOC-SCHEMA-001`).

## 2. Core Principles 💡

*   **Atomicity (Best Effort):** Operations modifying files (Create, Update, Delete) should aim for atomicity where possible, though the file-based nature presents challenges. Use temporary files or backups for critical updates if feasible.
*   **Validation:** All data modifications **MUST** be validated against the relevant TOML schema before writing to disk. Invalid data should result in an error.
*   **Traceability:** All CRUD operations, especially Create, Update (status changes), and Delete, should be logged appropriately (mechanism TBD, potentially within the artifact, a central log, or Git history).
*   **Consistency:** Link management should strive to maintain consistency, updating relevant fields during operations.
*   **Tool Preference:** Implementations should prefer using designated MCP tools for file operations if available, falling back to standard tools (`read_file`, `write_to_file`, `apply_diff`, `execute_command rm`) otherwise.

## 3. CRUD Operations by Artifact Type 🛠️

All operations are performed within the context of a specific project (`[project_slug]`) identified by the Core Logic Engine.

### 3.1. Initiatives (`.roo/commander/projects/[project_slug]/initiatives/`)

*   **Create (`!pm create initiative ...`)**
    *   **Trigger:** User command, AI suggestion.
    *   **Inputs:** `title`, `project_name`, potentially other optional fields (`owner`, `tags`, etc.).
    *   **Process:**
        1.  Generate unique `id` (e.g., `INIT-NNN`).
        2.  Select Initiative template.
        3.  Populate TOML frontmatter (Required: `id`, `title`, `status="⚪️ Planned"`, `type="🎯 Initiative"`, `created_date`, `updated_date`, `project_name`).
        4.  Populate Markdown body placeholders.
        5.  Construct filename: `INIT-ID_description.md`.
        6.  Use `write_to_file` (or MCP equivalent) to save the new file.
    *   **Output:** Path to the newly created Initiative file. Confirmation message.
*   **Read (`!pm show initiative INIT-ID`, `!pm list initiatives ...`)**
    *   **Trigger:** User command, AI context gathering.
    *   **Inputs:** `id` or query parameters (e.g., `status`, `tag`).
    *   **Process:**
        1.  For specific `id`: Use `read_file` (or MCP) on the corresponding `.md` file. Parse TOML/Markdown.
        2.  For lists: Use `list_files`/`search_files` (or MCP) in the `initiatives/` directory. Filter by parsing TOML metadata based on query parameters.
    *   **Output:** Formatted display of Initiative details or list.
*   **Update (`!pm update initiative INIT-ID --field value ...`)**
    *   **Trigger:** User command, AI action.
    *   **Inputs:** `id`, field(s) to update, new value(s).
    *   **Process:**
        1.  Use `read_file` (or MCP) to get current content.
        2.  Parse TOML. Validate changes against schema.
        3.  Use `apply_diff` (or MCP `edit_file_content`) to modify specific TOML fields (e.g., `status`, `title`, `tags`) or Markdown sections.
        4.  **MUST** update the `updated_date` field.
    *   **Output:** Confirmation of update.
*   **Delete (`!pm delete initiative INIT-ID`)**
    *   **Trigger:** User command.
    *   **Inputs:** `id`.
    *   **Process:**
        1.  **Confirmation Required:** Prompt user to confirm deletion.
        2.  Use `execute_command rm` (or MCP `delete_file`) on the corresponding `.md` file. (Consider moving to an `archive/` subfolder instead of permanent deletion).
        3.  (Optional) Log the deletion or update related links if feasible.
    *   **Output:** Confirmation of deletion/archival.

### 3.2. Epics (`.roo/commander/projects/[project_slug]/epics/`)

*   **Create (`!pm create epic ...`)**
    *   **Trigger:** User command, AI suggestion.
    *   **Inputs:** `title`, `project_name`, potentially `initiative_id` and other optional fields.
    *   **Process:** Similar to Initiative Create, using Epic template. Required TOML: `id` (EPIC-NNN), `title`, `status`, `type="🗺️ Epic"`, `created_date`, `updated_date`, `project_name`. Link to `initiative_id` if provided.
    *   **Output:** Path to the newly created Epic file. Confirmation.
*   **Read (`!pm show epic EPIC-ID`, `!pm list epics ...`)**
    *   **Process:** Similar to Initiative Read, targeting the `epics/` directory.
*   **Update (`!pm update epic EPIC-ID ...`)**
    *   **Process:** Similar to Initiative Update. **MUST** update `updated_date`.
*   **Delete (`!pm delete epic EPIC-ID`)**
    *   **Process:** Similar to Initiative Delete. **Confirmation Required.** (Consider archival).

### 3.3. Features (`.roo/commander/projects/[project_slug]/features/`)

*   **Create (`!pm create feature --epic EPIC-ID ...`)**
    *   **Trigger:** User command, AI suggestion.
    *   **Inputs:** `title`, `project_name`, **`epic_id` (Required)**, potentially other optional fields.
    *   **Process:** Similar to Epic Create, using Feature template. Required TOML: `id` (FEAT-NNN), `title`, `status`, `type="🌟 Feature"`, `created_date`, `updated_date`, `project_name`, `epic_id`.
    *   **Output:** Path to the newly created Feature file. Confirmation.
*   **Read (`!pm show feature FEAT-ID`, `!pm list features --epic EPIC-ID ...`)**
    *   **Process:** Similar to Epic Read, targeting the `features/` directory. Can filter by `epic_id`.
*   **Update (`!pm update feature FEAT-ID ...`)**
    *   **Process:** Similar to Epic Update. **MUST** update `updated_date`.
*   **Delete (`!pm delete feature FEAT-ID`)**
    *   **Process:** Similar to Epic Delete. **Confirmation Required.** (Consider archival).

### 3.4. Tasks / Stories / Bugs (`.roo/commander/projects/[project_slug]/tasks/`)

*   **Create (`!pm create task --feature FEAT-ID ...`, `!pm create bug ...`)**
    *   **Trigger:** User command, AI suggestion.
    *   **Inputs:** `title`, `project_name`, **`feature_id` (Required)**, **`type` (Required - Task/Story/Bug/etc.)**, potentially other optional fields.
    *   **Process:** Similar to Feature Create, using appropriate Task/Bug/Story template. Required TOML: `id` (TASK-NNN or BUG-NNN), `title`, `status`, `type`, `created_date`, `updated_date`, `project_name`, `feature_id`. Infer `epic_id` from parent Feature if needed.
    *   **Output:** Path to the newly created Task/Bug/Story file. Confirmation.
*   **Read (`!pm show task TASK-ID`, `!pm list tasks --feature FEAT-ID ...`)**
    *   **Process:** Similar to Feature Read, targeting the `tasks/` directory. Can filter by `feature_id`, `type`, `status`, `assigned_to`, `tags`.
*   **Update (`!pm update task TASK-ID --status "In Progress" ...`)**
    *   **Trigger:** User command, AI action, Git/GitHub integration event.
    *   **Inputs:** `id`, field(s) to update, new value(s).
    *   **Process:** Similar to Feature Update. **MUST** update `updated_date`. Validate status transitions based on project methodology (`project_config.toml`).
*   **Delete (`!pm delete task TASK-ID`)**
    *   **Process:** Similar to Feature Delete. **Confirmation Required.** (Consider archival).

## 4. Hierarchical Linking Mechanism 🔗

*   **Identification:** Each artifact (Initiative, Epic, Feature, Task/Story/Bug) has a unique `id` within its TOML frontmatter. This `id` is the primary key.
*   **Parent Links:** Relationships are established using specific "foreign key" fields in the child artifact's TOML frontmatter:
    *   Epic links to Initiative via `initiative_id`.
    *   Feature links to Epic via `epic_id`.
    *   Task/Story/Bug links to Feature via `feature_id`. (Can optionally link directly to `epic_id` if not part of a specific feature).
*   **Link Management:**
    *   **Creation:** When creating an artifact, the relevant parent ID **MUST** be provided or inferred and stored in the child's TOML.
    *   **Update:** If an artifact's parent changes (rare), the corresponding ID field must be updated.
    *   **Deletion/Archival:** When deleting/archiving a parent, child links become "dangling". The system should ideally handle this gracefully (e.g., allow filtering for orphaned items, potentially offer bulk re-linking or archival of children). Direct modification of child links during parent deletion is complex and potentially slow; logging or later cleanup might be preferred.
*   **Cross-Project Linking (Future):** A convention like `"project_slug:TYPE-ID"` (e.g., `"backend-api:FEAT-010"`) could be used in `depends_on` fields to link items across projects within the workspace.

## 5. Subtask Management (Markdown Checklists) ☑️

*   **Definition:** Subtasks are defined as GFM checklist items (`- [ ] Description` or `- [x] Description`) within the Markdown body of their parent Task/Story/Bug artifact file.
*   **Create:**
    *   **Process:** Use `apply_diff` or `insert_content` to add a new line with `- [ ] New Subtask Description` to the appropriate section of the parent `.md` file.
*   **Read:**
    *   **Process:** Subtasks are read as part of reading the parent artifact's Markdown content. AI or tooling can parse the checklist syntax.
*   **Update (Status):**
    *   **Process:** Use `apply_diff` or `search_and_replace` to change `- [ ]` to `- [x]` or vice-versa for a specific subtask line.
*   **Update (Description):**
    *   **Process:** Use `apply_diff` to modify the text description following the checkbox marker.
*   **Delete:**
    *   **Process:** Use `apply_diff` to remove the specific checklist line.
*   **Tracking:** AI or tooling can calculate completion percentage based on checked (`[x]`) vs. unchecked (`[ ]`) items.

## 6. Validation and Data Integrity ✅

*   **TOML Schema Validation:** The Core Logic Engine **MUST** validate TOML frontmatter against the defined schemas (`DOC-SCHEMA-001`) before writing any changes to disk during Create or Update operations.
*   **Status Transition Validation:** The Core Logic Engine **MUST** validate requested status changes against the rules defined by the project's methodology (from `project_config.toml`). Invalid transitions (e.g., directly from "To Do" to "Archived") should be rejected with an error.
*   **Link Existence Validation (Optional):** During Create/Update, the system *may* optionally attempt to verify that provided parent IDs (`epic_id`, `feature_id`) correspond to existing artifacts. This can prevent orphaned links but may impact performance. A configuration flag could control this behavior.

## 7. AI Interaction 🤖

*   The **AI Engine** interacts with the **Core Logic Engine** to perform CRUD and linking operations based on natural language understanding.
*   AI generates requests for the Core Logic Engine (e.g., "Create task with title X, feature_id Y").
*   AI parses results from the Core Logic Engine (e.g., confirmation messages, artifact data) to inform its responses or next actions.
*   AI uses Read operations extensively for context gathering and report generation.

## 8. Error Handling ⚠️

*   **File Not Found:** Report errors clearly if an artifact ID referenced in an operation does not correspond to an existing file.
*   **Parse Errors:** Report errors if TOML frontmatter or configuration files are malformed.
*   **Validation Errors:** Report errors if data fails schema validation or status transition rules.
*   **Permission Errors:** Report errors if file system operations fail due to permissions.
*   **Linking Errors:** Report warnings for potentially dangling links (if detected) or errors if required parent IDs are missing during creation.

## 9. Conclusion ✅

This specification defines the fundamental operations for managing IntelliManage artifacts. By standardizing CRUD operations, hierarchical linking, subtask management, and validation rules, the Core Logic Engine provides a reliable foundation for both user-driven and AI-driven project management within the development environment.