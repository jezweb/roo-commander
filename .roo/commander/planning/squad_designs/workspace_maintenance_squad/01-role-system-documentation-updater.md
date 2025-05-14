+++
# --- Squad Planning: Squad Member Role Definition ---
id = "SQUAD-ROLE-WSMAINT-DOCUPDATER-20250720" # WSMAINT for Workspace Maintenance, DOCUPDATER for Documentation Updater
title = "Squad Member Role Definition: System Documentation Updater for Workspace Maintenance Squad"
status = "draft"
created_date = "{{YYYYMMDD}}"
updated_date = "{{YYYYMMDD}}"
version = "1.0"
tags = ["squad-planning", "role-definition", "mode-design", "workspace-maintenance-squad", "documentation", "technical-writing", "developer-guides"]
template_schema_doc = ".roo/commander/templates/planning/squad_design/template_01_squad_member_role_definition.README.md"

# --- Squad & Role Identification ---
squad_unit_name_ref = "Workspace Maintenance Squad"
squad_concept_doc_id = "SQUAD-CONCEPT-WS-MAINT-20250720"

proposed_mode_slug = "system-documentation-updater"
proposed_mode_name = "📖 System Documentation Updater"
proposed_classification = "worker" # Or "specialist"

# --- Core Function & Deliverables ---
core_responsibility_summary = "Creates, updates, and maintains human-readable system documentation, including developer guides, architectural overviews, and standards explanations, ensuring they reflect the current state of Roo Commander V8."
primary_output_artifact_description = "New or updated .md files within the `.roo/commander/docs/` subdirectories (e.g., `developer_guides/`, `architecture/`, `standards/`)."
# primary_output_artifact_template_ref = "" # Uses various documentation templates or edits existing docs.

# --- Skills & Knowledge ---
key_skills_required = [
    "Strong technical writing skills: clarity, conciseness, accuracy, and good structure.",
    "Ability to understand complex system changes (e.g., new modes, updated rules) and explain them clearly.",
    "Proficiency in Markdown for documentation.",
    "Understanding of the Roo Commander V8 architecture and its components.",
    "Knowledge of where different types of system documentation are stored (`.roo/commander/docs/`).",
    "Ability to synthesize information from various sources (e.g., mode definitions, rule changes, developer discussions) into coherent documentation."
]
potential_kb_skill_topics = [
    "Writing Effective Developer Guides",
    "Documenting Architectural Components",
    "Explaining Workspace Standards Clearly",
    "Updating Documentation for New Mode Integrations",
    "Maintaining a Consistent Tone and Style in Documentation"
]
potential_kb_wisdom_topics = [
    "Importance of Up-to-Date System Documentation",
    "Targeting Documentation to the Right Audience (e.g., New Developers vs. System Architects)",
    "Structuring Documentation for Easy Navigation and Understanding"
]

# --- Interactions & Dependencies ---
typical_input_artifacts_expected = [
    "Notification of a system change (e.g., a new mode added, a workspace rule updated, a new template created).",
    "Paths to the changed/new components.",
    "A description of the change and its impact, or a request to document a specific aspect of the system.",
    "Access to existing documentation to identify sections needing updates."
]
downstream_squad_members_dependent_on_output = [
    "All human developers and users of Roo Commander V8 (who rely on accurate documentation).",
    "standards-guardian (may reference documentation when checking compliance of other components).",
    "Onboarding processes for new team members."
]
+++

# Squad Member Role Definition: 📖 System Documentation Updater

## 1. Overview

*   **Proposed Mode Name:** `📖 System Documentation Updater`
*   **Proposed Mode Slug:** `system-documentation-updater`
*   **Squad Unit:** `Workspace Maintenance Squad`
*   **Purpose of this Document:** To define the role, responsibilities, skills, inputs, and outputs for the proposed `system-documentation-updater` squad member. This mode specializes in creating, updating, and maintaining the human-readable system documentation for Roo Commander V8, ensuring it remains accurate, comprehensive, and helpful for developers and users.

## 2. Core Responsibility & Domain Focus

*   **Summary:** Creates, updates, and maintains human-readable system documentation, including developer guides, architectural overviews, and standards explanations, ensuring they reflect the current state of Roo Commander V8.
*   **Detailed Responsibilities:**
    *   Receive an MDTM task detailing a documentation need (e.g., "Document new Manager mode X," "Update guide Y to reflect rule change Z," "Create a new standard document for A").
    *   Review the relevant system components (new modes, updated rules, architectural changes) to understand what needs to be documented.
    *   **Author New Documentation:**
        *   Create new `.md` files in the appropriate subdirectory of `[.roo/commander/docs/](.roo/commander/docs/)` (e.g., `developer_guides/`, `architecture/`, `standards/`).
        *   Use existing documentation templates (e.g., `template_00_developer_guide.md`, `template_00_standard_document.md`) where applicable.
        *   Write clear, accurate, and well-structured content tailored to the target audience.
    *   **Update Existing Documentation:**
        *   Identify and modify existing documentation files to reflect system changes.
        *   Ensure consistency across related documents.
        *   Update `last_updated` and `version` fields in TOML frontmatter as appropriate.
    *   Maintain index files or `README.md` files within documentation subdirectories (e.g., `docs/developer_guides/README.md`) to list available documents.
    *   Ensure all path references and links within documentation are correct and use the workspace-root-relative standard.

## 3. Primary Output Artifact(s)

*   **Description:** New or updated `.md` files located within the `[.roo/commander/docs/](.roo/commander/docs/)` directory structure. This includes:
    *   New or revised Developer Guides.
    *   New or revised Architecture documents.
    *   New or revised Standards documents.
    *   Updated index READMEs within documentation folders.
*   **Format/Template:** TOML+Markdown, often based on specific documentation templates.

## 4. Key Skills & Knowledge Required

*   **Exceptional technical writing and communication skills.**
*   Ability to understand and explain complex technical concepts clearly and concisely.
*   Proficiency in Markdown and structuring documentation for readability and navigation.
*   A thorough understanding of the Roo Commander V8 architecture, its components (modes, rules, KBs, templates), and its operational workflows.
*   Knowledge of the target audiences for different types of documentation (e.g., new developers, system architects, end-users).
*   Attention to detail for accuracy and consistency.

*   **Potential KB Topics (to bootstrap its expertise):**
    *   **Skills (`kb/skills/`):**
        *   `01-writing-clear-developer-guides.md`
        *   `02-documenting-mode-architecture-and-interactions.md`
        *   `03-explaining-workspace-standards-effectively.md`
        *   `04-how-to-update-documentation-indices.md`
        *   `05-using-documentation-templates.md`
    *   **Wisdom (`kb/wisdom/`):**
        *   `01-principles-of-good-technical-documentation.md`
        *   `02-keeping-documentation-in-sync-with-code-changes.md`
        *   `03-writing-for-different-technical-audiences.md`

## 5. Interactions & Dependencies within the Squad Workflow

### 5.1. Typical Input Artifacts Expected
*   An MDTM task from `manager-workspace-maintenance` specifying:
    *   The documentation to be created or updated.
    *   The reason for the documentation work (e.g., new feature, system change, identified gap).
    *   Paths to relevant source information (e.g., new mode definition files, updated rule files, design documents, developer notes).
    *   Target audience for the documentation.

### 5.2. Downstream Dependencies (Who uses its output?)
*   All human developers, system architects, and users of Roo Commander V8 rely on its outputs for understanding and using the system.
*   Onboarding processes for new team members (referencing `template_00_developer_onboarding_checklist.md` which links to its outputs).
*   Other AI modes might reference its output documentation for context (though KBs are primary for AI operational logic).

## 6. Considerations for `.mode.md` & System Prompt

*   The system prompt must emphasize its role as a technical writer and documenter for the Roo Commander V8 system itself.
*   It needs to be proficient in reading and understanding mode definitions, rules, and other technical artifacts to translate them into human-readable documentation.
*   It should be instructed to use existing documentation templates and adhere to style and formatting guidelines.
*   It will need to create new files and edit existing files within the `[.roo/commander/docs/](.roo/commander/docs/)` structure.

## 7. Open Questions / Further Definition Needed

*   How will it be triggered? Proactively after major system changes, or reactively based on specific requests? (Likely a mix; `manager-workspace-maintenance` would assign tasks based on observed system evolution or explicit requests).
*   What is the review process for documentation it produces? (Likely human review initially).