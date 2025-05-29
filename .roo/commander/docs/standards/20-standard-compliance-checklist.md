+++
# --- Basic Metadata ---
id = "STANDARD-COMPLIANCE-CHECKLIST-V1"
title = "Standard: Workspace Standards Compliance Checklist Definition"
context_type = "standards_document"
scope = "Defines the standard checklist items, format, and procedure for performing a Roo Commander workspace standards compliance review."
target_audience = ["developers", "standards-guardian", "quality-assurance_roles", "ai_modes_performing_reviews"]
granularity = "checklist_definition_and_procedure"
status = "active"
created_date = "20250515" # Date this standard document itself was created/formalized
last_updated = "20250515" # Date this standard document itself was last updated
version = "1.0"
tags = ["standards", "compliance", "checklist", "quality-assurance", "governance", "workspace-maintenance", "review-procedure"]
related_context = [
    # Links to all the standards this checklist helps enforce
    ".roo/commander/docs/standards/00-directory-structure.md",
    ".roo/commander/docs/standards/01-naming-conventions.md",
    ".roo/commander/docs/standards/02-toml-md-document-format.md",
    ".roo/commander/docs/standards/03-mdtm-task-files.md",
    ".roo/commander/docs/standards/04-session-logs-and-artifacts.md",
    ".roo/commander/docs/standards/05-kb-structuring-best-practices.md",
    ".roo/commander/docs/standards/06-documentation-style-guide.md",
    ".roo/commander/docs/standards/07-template-authoring-guide.md",
    ".roo/commander/docs/standards/08-mdtm-task-checklist-authoring-best-practices.md",
    ".roo/commander/docs/standards/09-error-handling-and-reporting-standard.md",
    ".roo/commander/docs/standards/10-roo-commander-version-naming-convention.md",
    ".roo/commander/docs/standards/11-git-workflow-and-branching-strategy.md",
    ".roo/commander/docs/standards/12-security-best-practices-for-mode-development.md",
    ".roo/commander/docs/standards/13-inter-mode-communication-protocol.md",
    ".roo/commander/docs/standards/14-readme-files-standard.md"
]
template_schema_doc = ".roo/commander/templates/docs/template_00_standard_document.README.md" # This standard doc uses the generic standard doc template
# --- Document Specific Fields ---
# maintainer = "Core Architecture Team"
# review_cycle = "Semi-Annually"
+++

# Standard: Workspace Standards Compliance Checklist

## 1. Purpose & How to Use This Document

*   **Purpose:** This document defines the **standard checklist** to be used for verifying adherence to established workspace standards within the Roo Commander system. It serves as a template and guide for conducting compliance reviews of various components like modes, rules, KBs, templates, and other documentation.
*   **How to Use for a Review:**
    1.  When performing a compliance review of a specific component (e.g., a new `.mode.md` file, an updated KB procedure), a **new instance document** should be created (e.g., as an MDTM task for `standards-guardian` or a manual review log).
    2.  That new instance document should reference this standard (e.g., in its `related_docs` or by stating "Review performed against `STANDARD-COMPLIANCE-CHECKLIST-V1`").
    3.  The TOML frontmatter of the *instance document* should include context like:
        *   `checklist_for_component = "[.roo/path/to/component_being_reviewed]"`
        *   `reviewed_by = "[ModeSlug/PersonName]"`
        *   `review_date = "YYYY-MM-DD"`
        *   `overall_compliance_status = "[Compliant | Compliant with Warnings | Non-Compliant]"`
    4.  The reviewer then goes through each item in the checklist sections below (Sections 2-8).
    5.  For each checklist item, mark with:
        *   `[✅]` - Compliant
        *   `[⚠️]` - Compliant with minor issues/warnings (note in "Review Notes" of the instance document)
        *   `[❌]` - Non-Compliant (detail in "Review Notes" of the instance document)
        *   `[N/A]` - Not Applicable for the component under review.
    6.  The instance document should contain detailed notes for any `[⚠️]` or `[❌]` items.
    7.  The instance document concludes with an overall compliance status and summary.

---
*(The following sections constitute the actual checklist items to be used during a review)*
---

## 2. General File & Directory Standards

### 2.1. Directory Structure Adherence
*   Reference: `[.roo/commander/docs/standards/00-directory-structure.md](.roo/commander/docs/standards/00-directory-structure.md)`
*   `[ ]` **DS-01:** Is the component located in the correct standard directory based on its type?
*   `[ ]` **DS-02:** If a mode, does it have its own slug-named directory under `[.roo/commander/modes/](.roo/commander/modes/)` containing its `.mode.md` and `kb/` subdirectory?
*   `[ ]` **DS-03:** If a mode, does it have its own `[.roo/rules-[mode_slug]/](.roo/rules-[mode_slug]/)` directory?
*   `[ ]` **DS-04:** If a session, does it follow the `SESSION-[Goal]-[Timestamp]` naming and reside in `[.roo/commander/sessions/](.roo/commander/sessions/)?`
*   `[ ]` **DS-05:** If a session, does it contain a `session_log.md` and an `artifacts/` directory with the standard scaffold?
*   `[ ]` **DS-06:** Are MDTM tasks stored in `[.roo/commander/tasks/](.roo/commander/tasks/)` (potentially in subdirectories)?
*   Review Notes for 2.1:

### 2.2. Naming Conventions
*   Reference: `[.roo/commander/docs/standards/01-naming-conventions.md](.roo/commander/docs/standards/01-naming-conventions.md)`
*   `[ ]` **NC-01 (General Dirs):** Are general directory names `kebab-case` or `snake_case` and descriptive?
*   `[ ]` **NC-02 (Mode Slugs/Dirs):** Is the mode slug (and its directory name) `kebab-case`, descriptive, and using recommended prefixes?
*   `[ ]` **NC-03 (General Files):** Are general filenames `kebab-case` or `snake_case` with appropriate extensions?
*   `[ ]` **NC-04 (MDTM Tasks):** Does the MDTM task filename follow `TASK-[PREFIX_CAPS]-[YYYYMMDD-HHMMSS].md`?
*   `[ ]` **NC-05 (Session Artifacts):** Do session artifact filenames follow `[TYPE_PREFIX_CAPS]-[Topic_Kebab_Case]-[YYMMDDHHMMSS].[ext]`?
*   Review Notes for 2.2:

### 2.3. Path Referencing (CRITICAL)
*   Reference: `[.roo/commander/docs/standards/01-naming-conventions.md](.roo/commander/docs/standards/01-naming-conventions.md)` (Section 3)
*   `[ ]` **PR-01:** Do ALL internal file/directory path references in TOML frontmatter and Markdown links start with `.roo/`?
*   `[ ]` **PR-02:** Are there NO uses of relative navigation like `../` in stored path references?
*   `[ ]` **PR-03:** Are there NO uses of `./` (except potentially for immediate script execution context, not for stored references)?
*   Review Notes for 2.3:

## 3. TOML+Markdown Document Format
*   Reference: `[.roo/commander/docs/standards/02-toml-md-document-format.md](.roo/commander/docs/standards/02-toml-md-document-format.md)`
*   Rule: `[.roo/rules/01-standard-toml-md-format.md](.roo/rules/01-standard-toml-md-format.md)`

### 3.1. Core Structure
*   `[ ]` **TMD-01:** Does the document begin with a TOML frontmatter block?
*   `[ ]` **TMD-02:** Is the TOML frontmatter correctly enclosed by `+++` delimiters on separate lines?
*   `[ ]` **TMD-03:** Is all content between the `+++` delimiters valid TOML syntax?
*   `[ ]` **TMD-04:** Is the content following the closing `+++` delimiter standard Markdown (GFM preferred)?
*   Review Notes for 3.1:

### 3.2. Schema Adherence & Data Types
*   `[ ]` **TMD-05:** Does the document adhere to the specific TOML schema defined in its corresponding template's `.README.md` file? (Check required fields, optional fields, data types).
*   `[ ]` **TMD-06 (Strings):** Are strings correctly quoted? Are multiline strings using `"""`?
*   `[ ]` **TMD-07 (Booleans):** Are booleans `true` or `false` (lowercase)?
*   `[ ]` **TMD-08 (Dates):** Do date-only fields use `YYYY-MM-DD` format?
*   `[ ]` **TMD-09 (Datetimes):** Do datetime fields use ISO 8601 UTC format `YYYY-MM-DDTHH:MM:SSZ`?
*   `[ ]` **TMD-10 (Arrays):** Are arrays correctly formatted?
*   Review Notes for 3.2:

### 3.3. TOML `id` and `title` Fields
*   Reference: `[.roo/commander/docs/standards/01-naming-conventions.md](.roo/commander/docs/standards/01-naming-conventions.md)`
*   `[ ]` **TMD-11 (ID Format):** Does the TOML `id` field follow the convention appropriate for its document type?
*   `[ ]` **TMD-12 (Title Format):** Is the TOML `title` field in Title Case and descriptive?
*   Review Notes for 3.3:

### 3.4. Tags (TOML `tags` array)
*   Reference: `[.roo/commander/docs/standards/01-naming-conventions.md](.roo/commander/docs/standards/01-naming-conventions.md)`
*   `[ ]` **TMD-13 (Tag Format):** Are all tags `kebab-case` and lowercase?
*   `[ ]` **TMD-14 (Mandatory Tags):** Does the document include mandatory tags for its type?
*   Review Notes for 3.4:

### 3.5. Status Fields (TOML `status`)
*   Reference: `[.roo/commander/docs/standards/01-naming-conventions.md](.roo/commander/docs/standards/01-naming-conventions.md)` (and template READMEs)
*   `[ ]` **TMD-15 (Status Value):** Does the `status` field use one of the standard defined values (with emoji) for its document type?
*   Review Notes for 3.5:

### 3.6. Placeholder Conventions (for Templates themselves)
*   Reference: `[.roo/commander/docs/standards/01-naming-conventions.md](.roo/commander/docs/standards/01-naming-conventions.md)`
*   `[ ]` **TMD-16 (Template Placeholders):** If reviewing a template, does it use `{{AUTO_FILLED}}` and `[MANUAL_OR_CONTEXTUAL]` placeholders correctly?
*   `[ ]` **TMD-17 (Optional Field Guidance):** Do placeholders for optional fields in templates guide the user/AI to fill or remove the field?
*   Review Notes for 3.6:

## 4. Mode Definition Files (`.mode.md`)
*   Reference: Template READMEs (e.g., `[.roo/commander/templates/modes/orchestrator/template_00_orchestrator.README.md]`)
*   `[ ]` **MD-01 (Archetype Template):** Is the mode definition based on the correct archetype template (`orchestrator`, `manager`, `squad`)?
*   `[ ]` **MD-02 (TOML `name`):** Is `name` present and human-friendly (with standard emoji)?
*   `[ ]` **MD-03 (TOML `roleDefinition`):** Is `roleDefinition` present, concise, with a critical first sentence, and does NOT start with "You are Roo..."?
*   `[ ]` **MD-04 (TOML `groups`):** Is `groups` present and correctly formatted (default includes all)?
*   `[ ]` **MD-05 (TOML `customInstructions` Field):** Is the TOML `customInstructions` field ABSENT (as detailed instructions are in rules files)?
*   `[ ]` **MD-06 (TOML `classification`):** Is `classification` correct (`"orchestrator"`, `"manager"`, `"squad"`)?
*   `[ ]` **MD-07 (TOML `custom_instructions_dir`):** Is `custom_instructions_dir` a full workspace-root-relative path to the mode's `kb/` directory (e.g., `[.roo/commander/modes/[slug]/kb/]`)?
*   `[ ]` **MD-08 (TOML Metadata):** Are `domain`, `summary`, `tags`, `categories`, `delegate_to` (if applicable), `reports_to` populated correctly?
*   `[ ]` **MD-09 (Specialist Metadata):** If `classification` is "squad", are `squad_name`, `primary_output_description`, and `primary_output_template` (if applicable) populated?
*   `[ ]` **MD-10 (Markdown Body):** Does the Markdown body follow the standard 9-section structure for human-readable documentation?
*   Review Notes for 4:

## 5. MDTM Task Files
*   Reference: `[.roo/commander/docs/standards/03-mdtm-task-files.md](.roo/commander/docs/standards/03-mdtm-task-files.md)`
*   Rule: `[.roo/rules/02-mdtm-task-standard.md](.roo/rules/02-mdtm-task-standard.md)`
*   Template: `[.roo/commander/templates/tasks/template_00_mdtm_task_generic.README.md](.roo/commander/templates/tasks/template_00_mdtm_task_generic.README.md)`
*   `[ ]` **MDTM-01 (Schema Adherence):** Does the task file adhere to the schema of `template_00_mdtm_task_generic.md`?
*   `[ ]` **MDTM-02 (Required Fields):** Are all required TOML fields populated?
*   `[ ]` **MDTM-03 (Hierarchy):** Are `coordinator` and `parent_task_id` used correctly?
*   `[ ]` **MDTM-04 (Artifact Paths):** Are paths in `input_artifacts` and `output_artifacts` workspace-root-relative and correct?
*   `[ ]` **MDTM-05 (Markdown Body):** Are Description, Acceptance Criteria, Checklist, and Log Entries sections present and used appropriately, following `[.roo/commander/docs/standards/08-mdtm-task-checklist-authoring-best-practices.md](.roo/commander/docs/standards/08-mdtm-task-checklist-authoring-best-practices.md)`?
*   `[ ]` **MDTM-06 (Executor Updates):** (If applicable) Has the assigned mode updated the checklist, logs (with ISO 8601 UTC timestamps), status, and `output_artifacts`?
*   Review Notes for 5:

## 6. Session Logs & Artifacts
*   Reference: `[.roo/commander/docs/standards/04-session-logs-and-artifacts.md](.roo/commander/docs/standards/04-session-logs-and-artifacts.md)`
*   Rule: `[.roo/rules/03-session-management-standard.md](.roo/rules/03-session-management-standard.md)`
*   Template: `[.roo/commander/templates/sessions/template_00_mdtm_session_generic.README.md](.roo/commander/templates/sessions/template_00_mdtm_session_generic.README.md)`
*   `[ ]` **SESS-01 (Log Schema):** Does `session_log.md` adhere to its template's schema?
*   `[ ]` **SESS-02 (Log Required Fields):** Are `id`, `title`, `status`, `start_time` (ISO 8601 UTC), `coordinator` populated?
*   `[ ]` **SESS-03 (Related Tasks/Artifacts):** Are `related_tasks` (MDTM IDs) and `related_artifacts` (relative paths from session root) correctly populated?
*   `[ ]` **SESS-04 (Artifacts Directory):** Does the `artifacts/` directory exist with the standard scaffold of subdirectories (each with a README)?
*   `[ ]` **SESS-05 (Artifact Naming & Templates):** Do session artifacts follow naming conventions and use appropriate templates?
*   Review Notes for 6:

## 7. Knowledge Base (KB) Structuring
*   Reference: `[.roo/commander/docs/standards/05-kb-structuring-best-practices.md](.roo/commander/docs/standards/05-kb-structuring-best-practices.md)`
*   `[ ]` **KB-01 (Location):** Is the mode's KB located at `[.roo/commander/modes/[mode_slug]/kb/](.roo/commander/modes/[mode_slug]/kb/)`?
*   `[ ]` **KB-02 (Standard Subdirs):** Does it use standard subdirectories (`README.md`, `prompts/`, `procedures/`, `reference/`, `examples/`, `skills/`, `wisdom/`) appropriately?
*   `[ ]` **KB-03 (KB README):** Does `kb/README.md` use `template_00_mode_kb_readme.md` and correctly index key KB content?
*   `[ ]` **KB-04 (Article Format):** Do KB articles use correct TOML+MD format and relevant KB article templates?
*   Review Notes for 7:

## 8. Mode-Specific Rules
*   Reference: `[.roo/commander/docs/architecture/07_rules_system_architecture.md](.roo/commander/docs/architecture/07_rules_system_architecture.md)`
*   `[ ]` **MSR-01 (Location):** Are mode-specific rules located in `[.roo/rules-[mode_slug]/](.roo/rules-[mode_slug]/)`?
*   `[ ]` **MSR-02 (Core Principles Rule):** Does a `00-[mode_slug]-core-principles.md` file exist, using `template_00_mode_core_principles_rule.md`?
*   `[ ]` **MSR-03 (Core Principles Content):** Does it define core operational principles and the KB utilization procedure?
*   `[ ]` **MSR-04 (Manager Orchestration Rule):** If a Manager mode, does an `01-[manager_slug]-squad-orchestration.md` file exist, using `template_01_manager_squad_orchestration_rule.md`?
*   Review Notes for 8:

---
*(End of checklist items. The section below would be part of an *instance* of a review, not this standard definition document.)*

## Overall Compliance Assessment (For a Review Instance)

*   **Overall Status:** `[Compliant | Compliant with Warnings | Non-Compliant]`
*   **Summary of Key Issues (if any):**
*   **Recommendations for Remediation:**