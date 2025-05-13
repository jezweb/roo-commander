+++
# --- Feature Metadata ---
id = "FEAT-IM-002"
title = "Implement Methodology Support"
status = "⚪️ Planned"
type = "🌟 Feature"
created_date = "2025-04-28"
updated_date = "2025-04-28"
project_name = "intellimanage_implementation"
epic_id = "EPIC-IM-001"
priority = "🔼 High"
tags = ["methodology", "scrum", "kanban", "custom", "workflow", "cle"]
related_docs = ["DOC-METHODOLOGY-GUIDE-001", "DOC-SCHEMA-001"]
depends_on = ["FEAT-IM-001"] # Depends on Core Framework
+++

# Feature: Implement Methodology Support

## Description ✍️

Enhance the Core Logic Engine (CLE) and related components to support Scrum, Kanban, and Custom methodologies based on project configuration.

## Acceptance Criteria ✅

*   - [ ] CLE reads the `methodology` field from `project_config.toml`.
*   - [ ] CLE enforces valid status transitions based on the configured methodology (if rules apply, e.g., no direct "Backlog" to "Done").
*   - [ ] CLE correctly handles the `sprint_id` field for Scrum projects.
*   - [ ] CLE reads `custom_statuses` for Custom methodology projects and validates against them.
*   - [ ] AI Engine can access methodology info to tailor reports/visualizations (Covered in FEAT-IM-003).
*   - [ ] WIP Limit warnings can be triggered (implementation likely involves AI Engine monitoring CLE data).

## Tasks 📝

*   - [ ] **TASK-IM-201:** Implement CLE logic to read and interpret the `methodology` setting from `project_config.toml`. (Ref: `DOC-METHODOLOGY-GUIDE-001`)
*   - [ ] **TASK-IM-202:** Implement CLE status transition validation logic (consider standard transitions first, then custom).
*   - [ ] **TASK-IM-203:** Add handling for `sprint_id` field in Task/Story/Bug TOML schema and CRUD operations. (Ref: `DOC-SCHEMA-001`)
*   - [ ] **TASK-IM-204:** Implement loading and validation against `custom_statuses` from `project_config.toml`.
*   - [ ] **TASK-IM-205:** Design mechanism for monitoring WIP limits (may involve AI Engine querying CLE).
*   - [ ] **TASK-IM-206:** Write unit tests for status transition validation (Scrum, Kanban, Custom).