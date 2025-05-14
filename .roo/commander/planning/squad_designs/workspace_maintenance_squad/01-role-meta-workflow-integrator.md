+++
# --- Squad Planning: Squad Member Role Definition ---
id = "SQUAD-ROLE-WSMAINT-WKFLINTEG-20250720" # WSMAINT for Workspace Maintenance, WKFLINTEG for Workflow Integrator
title = "Squad Member Role Definition: Meta Workflow Integrator for Workspace Maintenance Squad"
status = "draft"
created_date = "{{YYYYMMDD}}"
updated_date = "{{YYYYMMDD}}"
version = "1.0"
tags = ["squad-planning", "role-definition", "mode-design", "workspace-maintenance-squad", "integration", "roo-commander-config", "meta-programming"]
template_schema_doc = ".roo/commander/templates/planning/squad_design/template_01_squad_member_role_definition.README.md"

# --- Squad & Role Identification ---
squad_unit_name_ref = "Workspace Maintenance Squad"
squad_concept_doc_id = "SQUAD-CONCEPT-WS-MAINT-20250720"

proposed_mode_slug = "meta-workflow-integrator"
proposed_mode_name = "🔗 Meta Workflow Integrator"
proposed_classification = "worker" # Or "specialist"

# --- Core Function & Deliverables ---
core_responsibility_summary = "Updates Roo Commander's Knowledge Base and mode definition to integrate a new, fully developed Manager mode and its associated workflow, making it available to the user."
primary_output_artifact_description = "Updated Roo Commander KB files (specifically '00-available-managers-summary.md' and potentially '00-initial-options.md') and an updated 'roo-commander.mode.md' file."
# primary_output_artifact_template_ref = "" # Modifies existing configuration files.

# --- Skills & Knowledge ---
key_skills_required = [
    "Precise understanding of Roo Commander's KB structure, especially `kb/reference/00-available-managers-summary.md` and `kb/prompts/00-initial-options.md`.",
    "Knowledge of the `roo-commander.mode.md` TOML structure, specifically the `[metadata].delegate_to` field.",
    "Ability to accurately edit Markdown and TOML files, often requiring precise line insertions or modifications.",
    "Understanding of how Roo Commander uses its KB to discover and delegate to Manager modes.",
    "Attention to detail to ensure consistency and avoid breaking existing configurations."
]
potential_kb_skill_topics = [
    "Updating '00-available-managers-summary.md' for a New Manager",
    "Modifying '00-initial-options.md' (If Necessary)",
    "Adding a Manager to Roo Commander's 'delegate_to' List",
    "Verifying Integration Consistency"
]
potential_kb_wisdom_topics = [
    "Importance of Accurate Manager Summaries for User Experience",
    "Impact of Changes to Roo Commander's Core Configuration"
]

# --- Interactions & Dependencies ---
typical_input_artifacts_expected = [
    "Details of the new, fully developed and tested Manager mode: its slug, human-friendly name, a concise description of the workflow it manages, and its typical high-level goal.",
    "Confirmation that the new Manager mode and its squad are ready for integration."
]
downstream_squad_members_dependent_on_output = [
    "Roo Commander (its behavior is directly affected by these changes).",
    "Human developers and users (who will now see the new workflow as an option)."
]
+++

# Squad Member Role Definition: 🔗 Meta Workflow Integrator

## 1. Overview

*   **Proposed Mode Name:** `🔗 Meta Workflow Integrator`
*   **Proposed Mode Slug:** `meta-workflow-integrator`
*   **Squad Unit:** `Workspace Maintenance Squad`
*   **Purpose of this Document:** To define the role, responsibilities, skills, inputs, and outputs for the proposed `meta-workflow-integrator` squad member. This mode specializes in the critical task of updating `roo-commander`'s configuration and Knowledge Base to make a new, fully developed "Manager" mode and its associated workflow discoverable and usable by end-users.

## 2. Core Responsibility & Domain Focus

*   **Summary:** Updates `roo-commander`'s Knowledge Base and mode definition to integrate a new, fully developed Manager mode and its associated workflow, making it available to the user.
*   **Detailed Responsibilities:**
    *   Receive an MDTM task specifying a new Manager mode that is ready for integration. The task must include the new Manager's slug, its user-facing workflow description, a brief domain summary, and its typical high-level goal.
    *   **Edit `roo-commander`'s KB:**
        *   Modify `.roo/commander/modes/roo-commander/kb/reference/00-available-managers-summary.md`: Add a new entry for the new Manager mode, including its user-facing workflow description, slug, domain summary, and typical goal, following the established format.
        *   (If explicitly instructed by the MDTM task or if it's a very distinct top-level workflow) Modify `.roo/commander/modes/roo-commander/kb/prompts/00-initial-options.md`: Add a new top-level option for the new workflow. (Note: This should be done sparingly; most new managers should be discoverable via the "Start New Design / Workflow Session..." option which then consults the `00-available-managers-summary.md`).
    *   **Edit `roo-commander`'s Mode Definition File:**
        *   Modify `.roo/commander/modes/roo-commander/roo-commander.mode.md`: Add the slug of the new Manager mode to the `[metadata].delegate_to` array in the TOML frontmatter.
    *   Ensure all modifications are syntactically correct (Markdown and TOML).
    *   Verify that paths and references in the updated files are correct.

## 3. Primary Output Artifact(s)

*   **Description:** The primary outputs are modified configuration files for `roo-commander`:
    1.  Updated `.roo/commander/modes/roo-commander/kb/reference/00-available-managers-summary.md`
    2.  (Potentially) Updated `.roo/commander/modes/roo-commander/kb/prompts/00-initial-options.md`
    3.  Updated `.roo/commander/modes/roo-commander/roo-commander.mode.md` (specifically the `delegate_to` list).
*   **Format/Template:** Direct modifications to existing TOML+Markdown files.

## 4. Key Skills & Knowledge Required

*   **Precise understanding of `roo-commander`'s KB structure**, particularly the format and purpose of:
    *   `kb/reference/00-available-managers-summary.md`
    *   `kb/prompts/00-initial-options.md`
*   **Knowledge of the `roo-commander.mode.md` TOML structure**, specifically the `[metadata].delegate_to` field.
*   **High proficiency in accurately editing Markdown and TOML files**, often requiring precise line insertions or modifications to arrays and lists.
*   Understanding of how `roo-commander` uses its KB (specifically the `00-available-managers-summary.md`) to discover and delegate to Manager modes.
*   Extreme attention to detail to ensure consistency and avoid breaking `roo-commander`'s existing configuration or behavior.

*   **Potential KB Topics (to bootstrap its expertise):**
    *   **Skills (`kb/skills/`):**
        *   `01-editing-available-managers-summary.md` (Step-by-step with examples)
        *   `02-modifying-initial-options-prompt.md` (When and how)
        *   `03-updating-delegate-to-list-in-mode-toml.md`
        *   `04-verification-checklist-for-rc-integration.md`
    *   **Wisdom (`kb/wisdom/`):**
        *   `01-impact-of-changes-to-roo-commander-kb.md`
        *   `02-maintaining-scalability-of-initial-options.md`

## 5. Interactions & Dependencies within the Squad Workflow

### 5.1. Typical Input Artifacts Expected
*   An MDTM task from `manager-workspace-maintenance` specifying:
    *   The slug of the new Manager mode to be integrated.
    *   The user-facing "Workflow Description" for this new Manager (for `00-available-managers-summary.md`).
    *   A brief domain summary for the new Manager.
    *   The typical high-level goal statement for the new Manager.
    *   Confirmation that the new Manager mode and its squad are fully developed, tested, and ready for user access via `roo-commander`.

### 5.2. Downstream Dependencies (Who uses its output?)
*   `roo-commander`: Its behavior and available workflow options are directly changed by this mode's outputs.
*   End-users of Roo Commander V8: They will now see and be able to select the new workflow.
*   `system-documentation-updater`: May need to update overall system documentation to reflect the new capability.

## 6. Considerations for `.mode.md` & System Prompt

*   The system prompt must emphasize its role as a precise configuration editor for `roo-commander`'s specific KB and mode files.
*   It needs to be highly reliable in making targeted modifications without unintended side effects.
*   It should always confirm the exact changes to be made (e.g., by showing a diff) before applying them, especially if interacting with a human supervisor via `manager-workspace-maintenance`.

## 7. Open Questions / Further Definition Needed

*   What level of validation should this mode perform on the input details for the new Manager? (e.g., does it check if the new Manager's mode files actually exist?). Initially, assume inputs are correct and validated.
*   How are rollbacks handled if an integration causes issues? (Likely a manual Git revert process, but this mode could potentially assist in creating the "undo" changes).