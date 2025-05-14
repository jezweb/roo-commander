# Roo Commander V8: Master Template Index

## 1. Purpose of this Document

This document provides a categorized index of all standard **TOML+Markdown templates** used within the Roo Commander V8 system. Templates are the foundational blueprints for creating consistent and structured:

*   AI Mode Definitions
*   Workspace and Mode-Specific Rules
*   Knowledge Base (KB) Articles (including KB READMEs)
*   MDTM Task Files
*   Session Logs and Session Artifacts
*   Squad Planning & Design Documents
*   Design Artifacts (outputs of specialist squads)
*   Project Root Files (like `CHANGELOG.md`)
*   Standard Operating Procedures (SOPs)
*   Testing Documentation

Each template typically has an accompanying `.README.md` file in its respective template directory that details its specific TOML schema and usage guidelines. This index points to the primary template `.md` files.

**All primary templates are located under:** `[.roo/commander/templates/](.roo/commander/templates/)`

For a narrative overview of how to use and manage these templates, see `[.roo/commander/docs/developer_guides/08_creating_and_managing_system_templates.md](.roo/commander/docs/developer_guides/08_creating_and_managing_system_templates.md)`.

## 2. Mode Definition Templates
Location: `[.roo/commander/templates/modes/](.roo/commander/templates/modes/)`

*   **Orchestrator Archetype:**
    *   `[.roo/commander/templates/modes/orchestrator/template_00_orchestrator_mode.md](.roo/commander/templates/modes/orchestrator/template_00_orchestrator_mode.md)`
*   **Manager Archetype:**
    *   `[.roo/commander/templates/modes/manager/template_00_manager_mode.md](.roo/commander/templates/modes/manager/template_00_manager_mode.md)`
*   **Squad Member Archetype:**
    *   `[.roo/commander/templates/modes/squad/template_00_squad_mode.md](.roo/commander/templates/modes/squad/template_00_squad_mode.md)`

## 3. Mode Knowledge Base (KB) Article Templates
Location: `[.roo/commander/templates/modes/common/kb/](.roo/commander/templates/modes/common/kb/)`

*   **KB Index (README):**
    *   `[.roo/commander/templates/modes/common/kb/template_00_mode_kb_readme.md](.roo/commander/templates/modes/common/kb/template_00_mode_kb_readme.md)`
*   **KB Procedures:**
    *   `[.roo/commander/templates/modes/common/kb/procedures/template_00_kb_procedure.md](.roo/commander/templates/modes/common/kb/procedures/template_00_kb_procedure.md)`
*   **KB Prompts:**
    *   `[.roo/commander/templates/modes/common/kb/prompts/template_00_kb_prompt.md](.roo/commander/templates/modes/common/kb/prompts/template_00_kb_prompt.md)`
*   **KB References:**
    *   `[.roo/commander/templates/modes/common/kb/reference/template_00_kb_reference.md](.roo/commander/templates/modes/common/kb/reference/template_00_kb_reference.md)`
*   **KB Examples:**
    *   `[.roo/commander/templates/modes/common/kb/examples/template_00_kb_example_file.md](.roo/commander/templates/modes/common/kb/examples/template_00_kb_example_file.md)`
*   **KB Skills:**
    *   `[.roo/commander/templates/modes/common/kb/skills/template_00_kb_skill.md](.roo/commander/templates/modes/common/kb/skills/template_00_kb_skill.md)`
*   **KB Wisdom:**
    *   `[.roo/commander/templates/modes/common/kb/wisdom/template_00_kb_wisdom.md](.roo/commander/templates/modes/common/kb/wisdom/template_00_kb_wisdom.md)`
*   **Manager KB Specific Templates:**
    Location: `[.roo/commander/templates/modes/manager/kb/](.roo/commander/templates/modes/manager/kb/)`
    *   `template_01_manager_orchestration_flow.md`
    *   `template_02_manager_squad_composition.md`

## 4. Rule Templates
Location: `[.roo/commander/templates/rules/](.roo/commander/templates/rules/)`

*   **Workspace Rules:**
    *   `[.roo/commander/templates/rules/workspace/template_00_workspace_rule.md](.roo/commander/templates/rules/workspace/template_00_workspace_rule.md)`
*   **Mode-Specific Rules (Common & Archetype Specific):**
    *   `[.roo/commander/templates/rules/mode_specific/common/template_00_mode_core_principles_rule.md](.roo/commander/templates/rules/mode_specific/common/template_00_mode_core_principles_rule.md)`
    *   `[.roo/commander/templates/rules/mode_specific/manager/template_01_manager_squad_orchestration_rule.md](.roo/commander/templates/rules/mode_specific/manager/template_01_manager_squad_orchestration_rule.md)`
    *   *(Note: `template_00_mode_specific_rule.md` (generic) and `template_00_mode_kb_lookup_rule.md` were superseded by the `template_00_mode_core_principles_rule.md` which consolidates core principles and KB lookup logic).*

## 5. MDTM Task Template
Location: `[.roo/commander/templates/tasks/](.roo/commander/templates/tasks/)`

*   `[.roo/commander/templates/tasks/template_00_mdtm_task_generic.md](.roo/commander/templates/tasks/template_00_mdtm_task_generic.md)`

## 6. Session Management Templates
Location: `[.roo/commander/templates/sessions/](.roo/commander/templates/sessions/)`

*   **Session Log:**
    *   `[.roo/commander/templates/sessions/template_00_mdtm_session_generic.md](.roo/commander/templates/sessions/template_00_mdtm_session_generic.md)`
*   **Session Artifacts (Examples - see full list in `artifacts/` subdirectories):**
    Location: `[.roo/commander/templates/sessions/artifacts/](.roo/commander/templates/sessions/artifacts/)`
    *   `blocker/template_00_session_blocker.md`
    *   `note/template_00_session_note.md`
    *   `learning/template_00_session_learning.md`
    *   `summary/template_00_session_summary.md`
    *   *(...and others for context, deferred, document, environment, feature, feedback, question, research, snippet)*

## 7. Squad Planning & Design Templates
Location: `[.roo/commander/templates/planning/squad_design/](.roo/commander/templates/planning/squad_design/)`

*   `template_00_squad_concept_and_mission.md`
*   `template_01_squad_member_role_definition.md`
*   `template_02_squad_workflow_and_artifact_flow.md`
*   `template_03_squad_knowledge_and_research_plan.md`
*   `template_04_squad_design_summary_and_blueprint.md`
Location: `[.roo/commander/templates/planning/squad_member_addition/](.roo/commander/templates/planning/squad_member_addition/)`
*   `template_00_new_squad_member_proposal.md`

## 8. Design Artifact Templates (Data Product Squad Example)
Location: `[.roo/commander/templates/design_artifacts/data_product/](.roo/commander/templates/design_artifacts/data_product/)`

*   `template_product_strategy.md`
*   `template_poc_ideation.md`
*   `template_user_persona.md`
*   `template_simulated_data_schema.md`
*   `template_poc_interface_design.md`
*   `template_data_product_poc_plan.md`

## 9. Project Root Templates
Location: `[.roo/commander/templates/project_root/](.roo/commander/templates/project_root/)`

*   `template_CHANGELOG.md`

## 10. Process (SOP) Templates
Location: `[.roo/commander/templates/processes/](.roo/commander/templates/processes/)`

*   `template_00_sop_generic.md`
*   `template_01_ai_git_commit_sop.md`

## 11. Testing Documentation Templates
Location: `[.roo/commander/templates/testing/](.roo/commander/templates/testing/)`

*   `template_00_test_plan.md`
*   `template_01_test_case.md`
*   `template_02_test_summary_report.md`

This index should help in quickly locating the appropriate template for various development and documentation tasks within the Roo Commander V8 ecosystem.