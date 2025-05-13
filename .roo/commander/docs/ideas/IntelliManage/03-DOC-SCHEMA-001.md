# --- Basic Metadata ---
id = "DOC-SCHEMA-001"
title = "IntelliManage: TOML Schema Definitions"
status = "draft"
doc_version = "1.0"
content_version = 1.0
audience = ["developers", "architects", "contributors", "ai_modes"]
last_reviewed = "2025-04-28" # Use current date
template_schema_doc = ".ruru/templates/toml-md/09_documentation.README.md" # Assuming this is the schema doc template
tags = ["intellimanage", "architecture", "schema", "toml", "specification", "artifacts", "configuration"]
related_docs = ["DOC-ARCH-001", "DOC-FS-SPEC-001"] # Link to Architecture & File System docs
+++

# IntelliManage: TOML Schema Definitions

## 1. Introduction / Overview 🎯

This document specifies the TOML (Tom's Obvious, Minimal Language) schemas used within the IntelliManage framework. These schemas define the structure and data types for:

1.  **TOML Frontmatter:** Used within `.md` files for Initiatives, Epics, Features, Tasks, Stories, and Bugs.
2.  **Configuration Files:** Used for workspace-level (`projects_config.toml`) and project-level (`project_config.toml`) settings.

Adhering to these schemas is critical for ensuring data consistency, enabling reliable parsing by tools and AI agents, and facilitating automated workflows.

## 2. General TOML Conventions

*   **Frontmatter Delimiter:** In `.md` files, the TOML frontmatter block **MUST** be enclosed within triple-plus delimiters (`+++`).
*   **Syntax:** All TOML content must adhere to the official TOML specification (currently v1.0.0). Keys are case-sensitive.
*   **Data Types:**
    *   **String:** Enclosed in double quotes (`"value"`). Use triple quotes (`"""value"""`) for multi-line strings.
    *   **Integer:** Whole numbers (e.g., `10`, `-5`).
    *   **Float:** Decimal numbers (e.g., `3.14`, `-0.5`).
    *   **Boolean:** `true` or `false` (lowercase).
    *   **Date (as String):** Use `YYYY-MM-DD` format enclosed in double quotes (e.g., `"2025-04-28"`).
    *   **Datetime (as String):** Use ISO 8601 format enclosed in double quotes (e.g., `"2025-04-28T10:30:00Z"`).
    *   **Array:** Enclosed in square brackets (`[]`), elements separated by commas (e.g., `["tag1", "tag2"]`, `[1, 2, 3]`). All elements should ideally be of the same type.
*   **Required vs. Optional:** Fields marked as "Required" **MUST** be present. Optional fields can be omitted if not applicable.
*   **Comments:** Use the hash symbol (`#`) for comments.

## 3. Standard Enum Values

Where "Enum" is specified as a type, use one of the following standard values unless project configuration allows customization:

*   **`status`:**
    *   `"⚪️ Backlog"` (or `"⚪️ Planned"`)
    *   `"🟡 To Do"` (or `"🟡 Ready"`)
    *   `"🔵 In Progress"`
    *   `"🟣 Review"` (or `"🟣 QA"`)
    *   `"🟢 Done"` (or `"🟢 Completed"`)
    *   `"🧊 Archived"` (or `"🧊 Closed"`)
    *   `"🚧 Blocked"`
    *   *(Custom statuses can be defined in `project_config.toml`)*
*   **`priority`:**
    *   `"🔥 Highest"`
    *   `"🔼 High"`
    *   `"▶️ Medium"`
    *   `"🔽 Low"`
    *   `"🧊 Lowest"`
*   **`type` (for Task/Story/Bug):**
    *   `"✨ Story"`
    *   `"🛠️ Task"`
    *   `"🐞 Bug"`
    *   `"💡 Spike"`
    *   `"🧹 Chore"`
    *   `"📖 Docs"`
    *   `"🧪 Test"`
    *   *(This list might be extensible via configuration)*

## 4. Artifact Schemas (TOML Frontmatter in `.md` Files)

These schemas define the metadata expected within the `+++` block of the corresponding artifact files located in `.ruru/projects/[project_slug]/[artifact_type]/`.

### 4.1. Initiative Schema (`initiatives/*.md`)

```toml
# --- Initiative Metadata ---
id = "INIT-..."           # String, Required. Unique ID (e.g., "INIT-001").
title = "..."             # String, Required. Human-readable title.
status = "..."            # String, Required. Enum (e.g., "⚪️ Planned", "🔵 In Progress", "🟢 Completed").
type = "🎯 Initiative"    # String, Required, Fixed.
created_date = "YYYY-MM-DD" # String "YYYY-MM-DD", Required.
updated_date = "YYYY-MM-DD" # String "YYYY-MM-DD", Required.
project_name = "..."      # String, Required. Slug of the primary project this initiative relates to (can span multiple, but primary link needed).
# owner = "..."           # String, Optional. Owning team or individual.
# start_date = "YYYY-MM-DD" # String "YYYY-MM-DD", Optional.
# target_date = "YYYY-MM-DD" # String "YYYY-MM-DD", Optional.
# priority = "..."        # String, Optional. Enum (e.g., "▶️ Medium").
# tags = ["...", "..."]   # Array of Strings, Optional. Keywords.
# related_docs = ["...", "..."] # Array of Strings, Optional. Paths/URLs to strategy docs, etc.
# kpis = ["...", "..."]   # Array of Strings, Optional. Key Performance Indicators.
```

### 4.2. Epic Schema (`epics/*.md`)

```toml
# --- Epic Metadata ---
id = "EPIC-..."           # String, Required. Unique ID within the project (e.g., "EPIC-001").
title = "..."             # String, Required. Human-readable title.
status = "..."            # String, Required. Enum (e.g., "⚪️ Backlog", "🔵 In Progress", "🟢 Done").
type = "🗺️ Epic"          # String, Required, Fixed.
created_date = "YYYY-MM-DD" # String "YYYY-MM-DD", Required.
updated_date = "YYYY-MM-DD" # String "YYYY-MM-DD", Required.
project_name = "..."      # String, Required. Slug of the project this epic belongs to.
# initiative_id = "INIT-..." # String, Optional. ID of the parent Initiative.
# owner = "..."           # String, Optional. Owning team or individual.
# start_date = "YYYY-MM-DD" # String "YYYY-MM-DD", Optional.
# target_date = "YYYY-MM-DD" # String "YYYY-MM-DD", Optional.
# priority = "..."        # String, Optional. Enum (e.g., "▶️ Medium").
# tags = ["...", "..."]   # Array of Strings, Optional. Keywords.
# related_docs = ["...", "..."] # Array of Strings, Optional. Paths/URLs to specs, designs.
# milestone_name = "..."  # String, Optional. Name of associated milestone.
# milestone_target_date = "YYYY-MM-DD" # String "YYYY-MM-DD", Optional. Target date for the milestone.
```

### 4.3. Feature Schema (`features/*.md`)

```toml
# --- Feature Metadata ---
id = "FEAT-..."           # String, Required. Unique ID within the project (e.g., "FEAT-001").
title = "..."             # String, Required. Human-readable title.
status = "..."            # String, Required. Enum (e.g., "⚪️ Backlog", "🔵 In Progress", "🟢 Done").
type = "🌟 Feature"       # String, Required, Fixed.
created_date = "YYYY-MM-DD" # String "YYYY-MM-DD", Required.
updated_date = "YYYY-MM-DD" # String "YYYY-MM-DD", Required.
project_name = "..."      # String, Required. Slug of the project this feature belongs to.
epic_id = "EPIC-..."      # String, Required. ID of the parent Epic.
# owner = "..."           # String, Optional. Owning team or individual.
# priority = "..."        # String, Optional. Enum (e.g., "▶️ Medium").
# tags = ["...", "..."]   # Array of Strings, Optional. Keywords (e.g., "ui", "api", "auth").
# related_docs = ["...", "..."] # Array of Strings, Optional. Paths/URLs to detailed specs, mockups.
# depends_on = ["FEAT-...", "TASK-..."] # Array of Strings, Optional. IDs of prerequisite Features or Tasks.
# milestone_name = "..."  # String, Optional. Name of associated milestone.
# milestone_target_date = "YYYY-MM-DD" # String "YYYY-MM-DD", Optional. Target date for the milestone.
```

### 4.4. Task / Story / Bug Schema (`tasks/*.md`)

```toml
# --- Task/Story/Bug Metadata ---
id = "TASK-..."           # String, Required. Unique ID within the project (e.g., "TASK-001", "BUG-002").
title = "..."             # String, Required. Human-readable title/summary.
status = "..."            # String, Required. Enum (e.g., "🟡 To Do", "🔵 In Progress", "🟢 Done").
type = "..."              # String, Required. Enum (e.g., "✨ Story", "🛠️ Task", "🐞 Bug", "💡 Spike").
created_date = "YYYY-MM-DD" # String "YYYY-MM-DD", Required.
updated_date = "YYYY-MM-DD" # String "YYYY-MM-DD", Required.
project_name = "..."      # String, Required. Slug of the project this item belongs to.
feature_id = "FEAT-..."   # String, Required. ID of the parent Feature.
# epic_id = "EPIC-..."      # String, Optional. ID of the parent Epic (often implied via Feature).
# assigned_to = "..."     # String, Optional. User, AI role, or team.
# reporter = "..."        # String, Optional. Typically for Bugs.
# priority = "..."        # String, Optional. Enum (e.g., "▶️ Medium").
# estimated_effort = "..." # String or Integer, Optional. (e.g., "S", "3").
# due_date = "YYYY-MM-DD" # String "YYYY-MM-DD", Optional.
# sprint_id = "..."       # String, Optional. Identifier for the Scrum sprint.
# tags = ["...", "..."]   # Array of Strings, Optional. Keywords (e.g., "frontend", "refactor", "performance").
# related_docs = ["...", "..."] # Array of Strings, Optional. Paths/URLs to related info.
# depends_on = ["TASK-...", "BUG-..."] # Array of Strings, Optional. IDs of prerequisite items.
# related_commits = ["...", "..."] # Array of Strings, Optional. Git commit hashes related to this task.
# related_prs = ["...", "..."] # Array of Strings, Optional. Pull Request URLs/IDs.
# related_issues = ["...", "..."] # Array of Strings, Optional. External issue tracker IDs/URLs (e.g., GitHub Issue #).
```

**Note on Subtasks:** Subtasks are managed within the Markdown body of their parent Task/Story/Bug using GFM checklists (`- [ ] Subtask description`). They do not have separate files or TOML frontmatter.

## 5. Configuration File Schemas (`.toml` Files)

### 5.1. Workspace Configuration (`.ruru/projects/projects_config.toml` - Optional)

```toml
# Optional: List of project slugs managed in this workspace for discoverability.
# managed_projects = ["frontend-app", "backend-api", "shared-library"]

# Optional: Default methodology if not specified in a project's config.
# default_methodology = "Kanban" # Options: "Scrum", "Kanban", "Custom", "None"

# Optional: Define global tags or categories available across projects.
# [global_tags]
#   area = ["frontend", "backend", "infra", "docs"]
#   priority_levels = ["P0", "P1", "P2", "P3"]
```

### 5.2. Project Configuration (`.ruru/projects/[project_slug]/project_config.toml` - Required)

```toml
# --- Project Configuration ---
project_name = "..."      # String, Required. Human-readable name (e.g., "Frontend Application").
project_slug = "..."      # String, Required. Matches the directory name (e.g., "frontend-app").

methodology = "..."       # String, Required. Options: "Scrum", "Kanban", "Custom", "None".

# Required only if methodology = "Custom"
# custom_statuses = ["⚪️ Planned", "🟡 Ready", "🛠️ Development", "🧪 Testing", "✅ Deployed"]

# Optional: Define project-specific settings or overrides
# default_assignee = "Team:Frontend"
# default_priority = "▶️ Medium"
# github_repo = "owner/repo-name" # For GitHub integration mapping
# jira_project_key = "FRONT" # For potential future Jira integration

# Optional: Define sprint details if methodology = "Scrum"
# [sprints]
#   [sprints.sprint_1]
#     start_date = "2025-05-01"
#     end_date = "2025-05-14"
#     goal = "Complete user profile MVP"
#   [sprints.sprint_2]
#     start_date = "2025-05-15"
#     end_date = "2025-05-28"
#     goal = "..."
```

## 6. Milestone Representation

Milestones are not represented by dedicated files. They are tracked via optional fields within **Epic** and **Feature** artifacts:

*   `milestone_name` (String, Optional): A descriptive name for the milestone (e.g., `"Q3 Release"`, `"Beta Launch"`).
*   `milestone_target_date` (String "YYYY-MM-DD", Optional): The target date for achieving the milestone.

Multiple Epics or Features can share the same `milestone_name` and `milestone_target_date`. AI or reporting tools can aggregate artifacts based on these fields.

## 7. Conclusion ✅

These TOML schemas provide the structured foundation for IntelliManage artifacts and configuration. Consistent use of these schemas enables efficient data processing, automation, reporting, and AI integration within the framework. Refer to the specific artifact templates for guidance on the corresponding Markdown body structure.