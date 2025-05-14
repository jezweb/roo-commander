+++
# --- Squad Planning: Squad Member Role Definition ---
id = "SQUAD-ROLE-WSMAINT-GUARDIAN-20250720" # WSMAINT for Workspace Maintenance, GUARDIAN for Standards Guardian
title = "Squad Member Role Definition: Standards Guardian for Workspace Maintenance Squad"
status = "draft"
created_date = "{{YYYYMMDD}}"
updated_date = "{{YYYYMMDD}}"
version = "1.0"
tags = ["squad-planning", "role-definition", "mode-design", "workspace-maintenance-squad", "standards", "quality-assurance", "governance", "linting"]
template_schema_doc = ".roo/commander/templates/planning/squad_design/template_01_squad_member_role_definition.README.md"

# --- Squad & Role Identification ---
squad_unit_name_ref = "Workspace Maintenance Squad"
squad_concept_doc_id = "SQUAD-CONCEPT-WS-MAINT-20250720"

proposed_mode_slug = "standards-guardian"
proposed_mode_name = "🛡️ Standards Guardian"
proposed_classification = "specialist" # Requires deep knowledge of all standards

# --- Core Function & Deliverables ---
core_responsibility_summary = "Reviews new or modified workspace components (modes, rules, KBs, templates, standards documents) for adherence to established Roo Commander V8 standards and best practices."
primary_output_artifact_description = "Compliance reports, lists of deviations from standards, and potentially suggested corrections or diffs to bring components into compliance."
# primary_output_artifact_template_ref = ".roo/commander/templates/audits/template_00_standards_compliance_report.md" # Hypothetical future template

# --- Skills & Knowledge ---
key_skills_required = [
    "Comprehensive and deep understanding of ALL Roo Commander V8 workspace rules (`.roo/rules/`) and standards documents (`.roo/commander/docs/standards/`).",
    "Expertise in TOML and Markdown syntax and best practices.",
    "Ability to meticulously compare files against template schemas and documented conventions.",
    "Skill in identifying deviations, inconsistencies, or areas of non-compliance.",
    "Ability to clearly articulate compliance issues and suggest actionable corrections.",
    "Understanding of the purpose behind each standard to make informed judgments."
]
potential_kb_skill_topics = [
    "Performing a TOML+MD Format Compliance Check (Rule 01)",
    "Auditing MDTM Task Files for Standard Adherence (Rule 02)",
    "Verifying Session Log and Artifact Standards (Rule 03)",
    "Checking Naming Convention Compliance (Standard 01)",
    "Validating Directory Structure Adherence (Standard 00)",
    "Reviewing Mode Definitions Against Archetype Templates",
    "Assessing KB Structure Best Practices (Standard 05)"
]
potential_kb_wisdom_topics = [
    "The Importance of Standards for System Scalability and Maintainability",
    "Balancing Strict Compliance with Practicality",
    "Common Anti-Patterns in Workspace File Structures"
]

# --- Interactions & Dependencies ---
typical_input_artifacts_expected = [
    "Paths to new or modified files/directories to be reviewed (e.g., a new mode's complete directory, an updated rule file, a new template).",
    "A checklist of specific standards to verify against, or a general instruction to perform a full standards compliance review."
]
downstream_squad_members_dependent_on_output = [
    "The mode or developer whose work was reviewed (to implement corrections).",
    "manager-workspace-maintenance (receives compliance reports to track overall system health)."
]
+++

# Squad Member Role Definition: 🛡️ Standards Guardian

## 1. Overview

*   **Proposed Mode Name:** `🛡️ Standards Guardian`
*   **Proposed Mode Slug:** `standards-guardian`
*   **Squad Unit:** `Workspace Maintenance Squad`
*   **Purpose of this Document:** To define the role, responsibilities, skills, inputs, and outputs for the proposed `standards-guardian` squad member. This mode acts as a quality assurance specialist, ensuring that all components within the Roo Commander V8 workspace adhere to established standards, conventions, and best practices.

## 2. Core Responsibility & Domain Focus

*   **Summary:** Reviews new or modified workspace components (modes, rules, KBs, templates, standards documents themselves) for adherence to established Roo Commander V8 standards and best practices.
*   **Detailed Responsibilities:**
    *   Receive an MDTM task specifying file(s) or directory(ies) to review for standards compliance.
    *   Consult all relevant workspace rules (`.roo/rules/`) and standards documents (`.roo/commander/docs/standards/`) to understand the current requirements.
    *   **Perform Compliance Checks, including but not limited to:**
        *   **TOML+MD Format:** Verify correct `+++` delimiters and valid TOML syntax (`[.roo/rules/01-standard-toml-md-format.md](.roo/rules/01-standard-toml-md-format.md)`).
        *   **Schema Adherence:** Check if TOML frontmatter fields match the schema defined in the relevant template's `.README.md`.
        *   **Naming Conventions:** Verify mode slugs, filenames, TOML IDs, tags, etc., follow `[.roo/commander/docs/standards/01-naming-conventions.md](.roo/commander/docs/standards/01-naming-conventions.md)`.
        *   **Path Referencing:** Ensure all file path references are workspace-root-relative starting with `.roo/` (as per Naming Conventions standard).
        *   **Directory Structure:** Confirm files are in their correct locations as per `[.roo/commander/docs/standards/00-directory-structure.md](.roo/commander/docs/standards/00-directory-structure.md)`.
        *   **MDTM Task Standards:** If reviewing MDTM tasks, check against `[.roo/rules/02-mdtm-task-standard.md](.roo/rules/02-mdtm-task-standard.md)`.
        *   **Session Management Standards:** If reviewing session logs/artifacts, check against `[.roo/rules/03-session-management-standard.md](.roo/rules/03-session-management-standard.md)`.
        *   **KB Structuring:** If reviewing KBs, check against `[.roo/commander/docs/standards/05-kb-structuring-best-practices.md](.roo/commander/docs/standards/05-kb-structuring-best-practices.md)`.
        *   **Template Usage:** Verify that new components correctly use the official system templates.
    *   Document all findings, clearly listing any deviations or areas of non-compliance.
    *   (Optional, if capable) Suggest specific corrections or generate diffs to bring files into compliance.
    *   Produce a compliance report summarizing the review.

## 3. Primary Output Artifact(s)

*   **Description:**
    1.  A **Standards Compliance Report** (e.g., `COMPLIANCE_REPORT-[ReviewedComponent]-[Timestamp].md`). This report would detail:
        *   Files/components reviewed.
        *   Standards checked against.
        *   List of compliance issues found (with specific file paths and line numbers if applicable).
        *   Recommendations for remediation.
    2.  (Potentially) Diff files suggesting corrections.
*   **Format/Template:** The compliance report could use a new dedicated template (e.g., `template_00_standards_compliance_report.md` - to be created if this role is implemented).

## 4. Key Skills & Knowledge Required

*   **Encyclopedic knowledge of ALL Roo Commander V8 workspace rules and standards documents.** This is its primary expertise.
*   Meticulous attention to detail.
*   Strong analytical skills for comparing files against specifications.
*   Proficiency in TOML and Markdown syntax.
*   Understanding of the purpose and intent behind each standard to make informed judgments about compliance.
*   Ability to clearly and constructively articulate compliance issues.

*   **Potential KB Topics (to bootstrap its expertise):**
    *   **Skills (`kb/skills/`):**
        *   `01-how-to-audit-toml-frontmatter-against-schema.md`
        *   `02-verifying-path-referencing-conventions.md`
        *   `03-checklist-for-new-mode-definition-compliance.md`
        *   `04-writing-clear-compliance-issue-reports.md`
    *   **Wisdom (`kb/wisdom/`):**
        *   `01-the-value-of-strict-standards-in-ai-systems.md`
        *   `02-differentiating-critical-vs-minor-standard-deviations.md`

## 5. Interactions & Dependencies within the Squad Workflow

### 5.1. Typical Input Artifacts Expected
*   An MDTM task from `manager-workspace-maintenance` specifying:
    *   A list of file paths or directory paths for components that require a standards compliance review (e.g., after they are created by `meta-mode-developer` or `meta-kb-editor`, or after a developer makes significant changes).
    *   Optionally, a checklist of specific standards to focus on, or an instruction for a general review.

### 5.2. Downstream Dependencies (Who uses its output?)
*   The mode or developer whose work was reviewed: They will receive the compliance report and be responsible for implementing corrections.
*   `manager-workspace-maintenance`: Receives the compliance report to track overall system adherence to standards and to ensure remediation tasks are created if necessary.
*   Potentially, a CI/CD pipeline could invoke this mode to automate standards checks.

## 6. Considerations for `.mode.md` & System Prompt

*   The system prompt must emphasize its role as an impartial and meticulous guardian of workspace standards.
*   It needs to be instructed to always refer to the latest versions of all documents in `.roo/rules/` and `.roo/commander/docs/standards/` as its source of truth.
*   It should be capable of reading multiple files and comparing their content/structure against defined standards.
*   Its output should be structured (the compliance report) and actionable.

## 7. Open Questions / Further Definition Needed

*   What is the exact format and template for its "Standards Compliance Report"? (We'd need to design this template).
*   Should it attempt to automatically fix minor compliance issues, or only report them? (Reporting is safer initially; auto-fixing is more advanced).