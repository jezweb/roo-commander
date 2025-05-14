+++
# --- Squad Planning: Squad Member Role Definition ---
id = "SQUAD-ROLE-WSMAINT-METADEV-20250720" # WSMAINT for Workspace Maintenance, METADEV for Meta Mode Developer
title = "Squad Member Role Definition: Meta Mode Developer for Workspace Maintenance Squad"
status = "draft"
created_date = "{{YYYYMMDD}}"
updated_date = "{{YYYYMMDD}}"
version = "1.0"
tags = ["squad-planning", "role-definition", "mode-design", "workspace-maintenance-squad", "scaffolding", "meta-programming"]
template_schema_doc = ".roo/commander/templates/planning/squad_design/template_01_squad_member_role_definition.README.md"

# --- Squad & Role Identification ---
squad_unit_name_ref = "Workspace Maintenance Squad"
squad_concept_doc_id = "SQUAD-CONCEPT-WS-MAINT-20250720"

proposed_mode_slug = "meta-mode-developer"
proposed_mode_name = "🛠️ Meta Mode Developer" # Re-using MCP Setup emoji, consider a different one if available e.g., 🧬 or 🧩
proposed_classification = "worker" # Or "specialist"

# --- Core Function & Deliverables ---
core_responsibility_summary = "Scaffolds the directory structure and boilerplate files for new AI modes (Orchestrator, Manager, Squad Member), their rules, and KBs, based on an approved Squad Design Summary & Blueprint."
primary_output_artifact_description = "A complete set of new directories and template-based boilerplate files for a new mode or Manager+Squad unit, ready for content population."
# primary_output_artifact_template_ref = "" # Its outputs are instances of *other* templates.

# --- Skills & Knowledge ---
key_skills_required = [
    "Deep understanding of the Roo Commander V8 directory structure standard.",
    "Expertise in all system templates (for modes, rules, KBs, KB articles).",
    "Ability to accurately copy, rename, and perform minor placeholder replacements in template files.",
    "Knowledge of file system operations (creating directories, creating files).",
    "Understanding of the Naming Conventions standard."
]
potential_kb_skill_topics = [
    "Scaffolding an Orchestrator Mode Structure",
    "Scaffolding a Manager Mode Structure (inc. Rules & KB dirs)",
    "Scaffolding a Squad Member Mode Structure (inc. Rules & KB dirs)",
    "Populating Initial TOML Placeholders in New Mode Files",
    "Verifying Correct Template Usage for Scaffolding"
]
potential_kb_wisdom_topics = [
    "Importance of Adhering to Archetype Templates",
    "Ensuring Consistent File Naming During Scaffolding"
]

# --- Interactions & Dependencies ---
typical_input_artifacts_expected = [
    "The 'Squad Design Summary & Blueprint' document (e.g., 04-blueprint-[squad_name].md).",
    "Access to all templates in `.roo/commander/templates/`."
]
downstream_squad_members_dependent_on_output = [
    "meta-kb-editor (will populate the KBs scaffolded by this mode)",
    "Human developers who will write the detailed system prompts and KB content."
]
+++

# Squad Member Role Definition: 🛠️ Meta Mode Developer

## 1. Overview

*   **Proposed Mode Name:** `🛠️ Meta Mode Developer`
*   **Proposed Mode Slug:** `meta-mode-developer`
*   **Squad Unit:** `Workspace Maintenance Squad`
*   **Purpose of this Document:** To define the role, responsibilities, skills, inputs, and outputs for the proposed `meta-mode-developer` squad member. This mode specializes in the automated or semi-automated scaffolding of new AI modes, their rule directories, and their Knowledge Base structures, based on approved design blueprints.

## 2. Core Responsibility & Domain Focus

*   **Summary:** Scaffolds the directory structure and boilerplate files for new AI modes (Orchestrator, Manager, Squad Member), their rules, and KBs, based on an approved "Squad Design Summary & Blueprint."
*   **Detailed Responsibilities:**
    *   Receive an approved "Squad Design Summary & Blueprint" as input.
    *   For the specified Manager mode and each of its Squad Member modes outlined in the blueprint:
        *   Create the main mode directory (e.g., `.roo/commander/modes/[new_mode_slug]/`).
        *   Copy the correct mode archetype template (`template_00_mode_orchestrator.mode.md`, `template_00_mode_manager.mode.md`, or `template_00_squad_mode.md`) into this directory and rename it to `[new_mode_slug].mode.md`.
        *   Create the mode-specific rules directory (e.g., `.roo/rules-[new_mode_slug]/`).
        *   Copy `template_00_mode_core_principles_rule.md` into the rules directory, renaming it `00-[new_mode_slug]-core-principles.md`.
        *   If the mode is a Manager, copy `template_01_manager_squad_orchestration_rule.md`, renaming it `01-[new_mode_slug]-squad-orchestration.md`.
        *   Create the mode's Knowledge Base directory (`kb/`) and its standard subdirectories (`prompts/`, `procedures/`, `reference/`, `examples/`, `skills/`, `wisdom/`).
        *   Copy `template_00_mode_kb_readme.md` into the `kb/` directory and rename it `README.md`.
        *   Perform initial placeholder replacements in the TOML frontmatter of the copied files (e.g., setting `id`, `name`, `target_audience` based on the blueprint).
    *   Ensure all created files and directories adhere to the workspace naming conventions and directory structure standards.

## 3. Primary Output Artifact(s)

*   **Description:** A complete, correctly named, and located set of directories and boilerplate files for a new mode (or a full Manager + Squad unit), ready for detailed content population by developers or other specialist modes like `meta-kb-editor`. This includes:
    *   `[new_mode_slug].mode.md` (from template)
    *   `rules-[new_mode_slug]/00-[new_mode_slug]-core-principles.md` (from template)
    *   (If Manager) `rules-[new_mode_slug]/01-[new_mode_slug]-squad-orchestration.md` (from template)
    *   `kb/README.md` (from template)
    *   Empty KB subdirectories (`prompts/`, `procedures/`, etc.)
*   **Format/Template:** The outputs are instances of the system's own mode, rule, and KB README templates.

## 4. Key Skills & Knowledge Required

*   **Deep understanding of the Roo Commander V8 directory structure standard** (`[.roo/commander/docs/standards/00-directory-structure.md](.roo/commander/docs/standards/00-directory-structure.md)`).
*   **Expertise in all system templates** located in `[.roo/commander/templates/](.roo/commander/templates/)`, especially for modes, rules, and KB READMEs.
*   Ability to accurately copy files and directories.
*   Ability to perform precise renaming of files according to conventions.
*   Skill in performing basic text replacement for initial TOML placeholder values (e.g., mode slugs, names).
*   Understanding of file system operations (likely needs `execute_command` for `mkdir`, `cp`, `mv`, or equivalent file system tools).

*   **Potential KB Topics (to bootstrap its expertise):**
    *   **Skills (`kb/skills/`):**
        *   `01-scaffolding-orchestrator-mode.md` (Checklist of files/dirs to create)
        *   `02-scaffolding-manager-mode.md` (Checklist)
        *   `03-scaffolding-squad-member-mode.md` (Checklist)
        *   `04-populating-initial-toml-placeholders.md`
        *   `05-verifying-scaffold-against-blueprint.md`
    *   **Wisdom (`kb/wisdom/`):**
        *   `01-importance-of-template-adherence-for-consistency.md`
        *   `02-ensuring-correct-naming-conventions-during-scaffolding.md`

## 5. Interactions & Dependencies within the Squad Workflow

### 5.1. Typical Input Artifacts Expected
*   An MDTM task from `manager-workspace-maintenance` specifying:
    *   The path to an approved "Squad Design Summary & Blueprint" document (e.g., `04-blueprint-[squad_name].md`).
    *   Confirmation that the design is approved for scaffolding.

### 5.2. Downstream Dependencies (Who uses its output?)
*   `meta-kb-editor`: Will take the scaffolded KB structures and begin populating them with content based on the research plan or user input.
*   Human Developers: Will take the scaffolded `.mode.md` and rule files to write the detailed system prompts and specific rule logic.
*   `meta-workflow-integrator`: Eventually, once the modes are developed, this mode will integrate the new Manager into `roo-commander`.

## 6. Considerations for `.mode.md` & System Prompt

*   The system prompt must emphasize its role as a scaffolder, strictly adhering to the input blueprint and using the correct templates.
*   It needs to be able to perform file system operations (create directories, copy files, rename files) and basic text manipulation for placeholder replacement in TOML.
*   It should report a list of all files and directories created upon successful completion.
*   Error handling for file system operations (e.g., directory already exists, template not found) is important.

## 7. Open Questions / Further Definition Needed

*   How will it handle updates if a blueprint changes after initial scaffolding (out of scope for initial version; focus on creation)?
*   What level of placeholder replacement should it do in TOML vs. leaving more for the developer/KB editor? (Start with essential IDs, names, and `target_audience` fields).