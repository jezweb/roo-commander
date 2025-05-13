+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-103"
title = "Implement schema definitions for validation (Initiative, Epic, Feature, Task, Configs)"
status = "⚪️ Planned"
type = "🛠️ Task"
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-001"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..."
# reporter = "..."
priority = "🔥 Highest"
# estimated_effort = "..."
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["core", "framework", "schema", "validation", "toml", "cle", "data-model"]
related_docs = ["DOC-SCHEMA-001", "TASK-IM-102"]
depends_on = ["TASK-IM-102"] # Depends on having the validation module ready
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Implement schema definitions for validation (Initiative, Epic, Feature, Task, Configs)

## Description ✍️

Translate the TOML schema specifications defined in `DOC-SCHEMA-001` into concrete schema definitions usable by the TOML parsing and validation module (implemented in `TASK-IM-102`). This involves creating the data structures (e.g., Zod schemas, JSON schemas, Pydantic models, or custom validation objects) that define the required fields, optional fields, data types, and allowed enum values for each IntelliManage artifact type and configuration file.

## Acceptance Criteria ✅

*   - [ ] A schema definition exists in code for Initiative TOML frontmatter.
*   - [ ] A schema definition exists in code for Epic TOML frontmatter.
*   - [ ] A schema definition exists in code for Feature TOML frontmatter.
*   - [ ] A schema definition exists in code for Task/Story/Bug TOML frontmatter.
*   - [ ] A schema definition exists in code for `project_config.toml`.
*   - [ ] A schema definition exists in code for `projects_config.toml` (if implemented).
*   - [ ] Each schema definition accurately reflects the fields, types (String, Integer, Boolean, Array, Date format), required/optional status, and enum constraints specified in `DOC-SCHEMA-001`.
*   - [ ] The implemented schemas are correctly consumed and used by the validation module from `TASK-IM-102`.
*   - [ ] Code adheres to project coding standards and is well-organized (e.g., schemas grouped logically).

## Implementation Notes / Details 📝

*   Use the validation library/approach chosen in `TASK-IM-102` (e.g., Zod, Pydantic, JSON Schema).
*   Define base types or reusable components where applicable (e.g., a standard ID format, common date fields, standard enum types like `status` or `priority`).
*   Pay close attention to required vs. optional fields.
*   Ensure correct validation for array types and date string formats (YYYY-MM-DD).
*   Implement validation for the specific allowed string values for enum-like fields (`status`, `type`, `priority`).
*   Organize the schema definition code logically (e.g., separate files per schema, a central schema registry).

## Subtasks / Checklist ☑️

*   - [ ] Implement Initiative schema definition.
*   - [ ] Implement Epic schema definition.
*   - [ ] Implement Feature schema definition.
*   - [ ] Implement Task/Story/Bug schema definition.
*   - [ ] Implement `project_config.toml` schema definition.
*   - [ ] Implement `projects_config.toml` schema definition (if using).
*   - [ ] Define reusable base types/enums for validation (e.g., StatusEnum, PriorityEnum, IDFormat).
*   - [ ] Integrate schemas with the validation module/function from `TASK-IM-102`.
*   - [ ] Add comments or documentation explaining the schema definitions in code.
*   - [ ] Refactor schemas for clarity and reusability.