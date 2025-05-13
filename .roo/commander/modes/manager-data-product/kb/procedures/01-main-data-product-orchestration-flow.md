+++
# --- Basic Metadata (Required for Manager Orchestration Flow KB Procedure) ---
id = "KB-PROC-MDP-MAIN-ORCH-FLOW-V1" # MDP for Manager-Data-Product
title = "Manager Data Product: Main Data Product PoC Design Orchestration Flow"
context_type = "kb_procedure" # Fixed type for KB procedure files
scope = "Details the primary end-to-end workflow for the 'Manager Data Product' (manager-data-product) mode to orchestrate its 'data-product-*' squad and fulfill its main MDTM task of delivering a Data Product PoC Plan."
target_audience = ["manager-data-product"] # The Manager mode itself
granularity = "detailed_procedure"
status = "active"
last_updated = "{{YYYYMMDD}}" # Placeholder for date of last update
version = "1.0" # Version of this procedure document
tags = ["kb", "procedure", "manager", "manager-data-product", "orchestration", "workflow", "squad-management", "mdtm", "data-product-design"]
related_context = [
    ".roo/commander/modes/manager-data-product/manager-data-product.mode.md",
    ".roo/commander/modes/manager-data-product/kb/reference/00-data-product-squad-composition.md", # CRITICAL
    ".roo/rules/02-mdtm-task-standard.md",
    ".roo/commander/templates/tasks/template_00_mdtm_task_generic.md",
    # Links to each data-product-* squad member's output artifact template for reference
    ".roo/commander/templates/design_artifacts/template_product_strategy.md",
    ".roo/commander/templates/design_artifacts/template_poc_ideation.md",
    ".roo/commander/templates/design_artifacts/template_user_persona.md",
    ".roo/commander/templates/design_artifacts/template_simulated_data_schema.md",
    ".roo/commander/templates/design_artifacts/template_poc_interface_design.md",
    ".roo/commander/templates/design_artifacts/template_data_product_poc_plan.md"
]
template_schema_doc = ".roo/commander/templates/modes/manager/kb/template_01_manager_orchestration_flow.README.md"

# --- Procedure Specific Fields (Optional) ---
# estimated_duration_of_flow = "6 squad member cycles"
# key_decision_points_in_flow = ["Review of Product Strategy before Ideation", "Review of PoC Scope before Persona Development"]
+++

# Manager Data Product: Main Data Product PoC Design Orchestration Flow

## 1. Objective

This document outlines the step-by-step procedure that the **`manager-data-product`** mode **MUST** follow to manage its specialist `data-product-*` squad and achieve the overall goal of producing a comprehensive Data Product Proof of Concept (PoC) Plan, as defined in its primary MDTM task (received from `roo-commander`).

## 2. Prerequisites

*   `manager-data-product` has received and thoroughly read its primary MDTM task from `roo-commander`. This task includes the overall PoC objective, any initial user inputs, and the active `RooComSessionID` and `[Active Session Path]`.
*   `manager-data-product` has consulted its `kb/reference/00-data-product-squad-composition.md` to understand the sequence, roles, and expected outputs of its squad members.
*   The target `[ProductName]` for the PoC (used for artifact naming/paths) is known, either from the primary MDTM task or elicited early in the process.

## 3. Orchestration Workflow Steps

1.  **Phase 0: Initialization & Planning**
    1.  Log in your primary MDTM task file: "Starting orchestration for Data Product PoC Design. Primary Task ID: `[Your Primary MDTM Task ID]`. Session ID: `[Active RooComSessionID]`."
    2.  Confirm the target `[ProductName]` for consistent artifact pathing (e.g., `artifacts/design_outputs/[ProductName]/`). If not clear from initial inputs, this might be the first clarification point or derived from the session goal.
    3.  Update the checklist in your primary MDTM task to reflect the six main design phases: Strategy, Ideation, Personas, Data Simulation, Interface Design, and PoC Documentation.

2.  **Phase 1: Delegate to `data-product-strategist`**
    1.  **Prepare Sub-Task:**
        *   `[SubTask_Title]`: "Define Product Strategy for '[ProductName]' PoC"
        *   `[SubTask_Type]`: `"📊 DataProductDesignPhase"`
        *   `[SubTask_Input_Artifacts]`: Any initial briefing documents or user requirements passed in your primary MDTM task. Reference the active `RooComSessionID`.
        *   `[Target_Output_Artifact_Path]`: `[Active Session Path]/artifacts/design_outputs/[ProductName]/product_strategy_v1.md`
        *   `[SubTask_Checklist]`: Instruct `data-product-strategist` to collaborate with the user (if applicable, via `roo-commander` for user interaction) to define vision, objectives, target audience, value proposition, and strategic alignment, and to produce the `product_strategy_v1.md` using `template_product_strategy.md`.
    2.  **Create & Delegate MDTM Sub-Task:** Follow `.roo/rules/02-mdtm-task-standard.md` to create and delegate the sub-task to `data-product-strategist`.
    3.  **Monitor & Process Completion:** Await "🟢 Done". Verify `product_strategy_v1.md` is created and listed in the sub-task's `output_artifacts`. Log completion and artifact path in your primary MDTM task. Let `[StrategyDocPath]` be this path.

3.  **Phase 2: Delegate to `data-product-ideator`**
    1.  **Prepare Sub-Task:**
        *   `[SubTask_Title]`: "Develop PoC Ideation & Scope for '[ProductName]'"
        *   `[SubTask_Type]`: `"📊 DataProductDesignPhase"`
        *   `[SubTask_Input_Artifacts]`: `["[StrategyDocPath]"]`
        *   `[Target_Output_Artifact_Path]`: `[Active Session Path]/artifacts/design_outputs/[ProductName]/poc_ideation_v1.md`
        *   `[SubTask_Checklist]`: Instruct `data-product-ideator` to use the strategy document to brainstorm features, define PoC scope (in/out), outline high-level data needs & success metrics, and produce `poc_ideation_v1.md` using `template_poc_ideation.md`.
    2.  **Create & Delegate MDTM Sub-Task:** To `data-product-ideator`.
    3.  **Monitor & Process Completion:** Verify `poc_ideation_v1.md`. Log. Let `[IdeationDocPath]` be this path.

4.  **Phase 3: Delegate to `data-product-ux-persona-architect`**
    1.  **Prepare Sub-Task:**
        *   `[SubTask_Title]`: "Develop User Personas for '[ProductName]' PoC"
        *   `[SubTask_Type]`: `"📊 DataProductDesignPhase"`
        *   `[SubTask_Input_Artifacts]`: `["[StrategyDocPath]", "[IdeationDocPath]"]`
        *   `[Target_Output_Artifact_Pattern]`: `[Active Session Path]/artifacts/design_outputs/[ProductName]/persona_[RoleName]_v1.md` (as multiple personas might be created).
        *   `[SubTask_Checklist]`: Instruct `data-product-ux-persona-architect` to develop 1-2 key user personas based on strategy and ideation, producing `persona_*.md` files using `template_user_persona.md`.
    2.  **Create & Delegate MDTM Sub-Task:** To `data-product-ux-persona-architect`.
    3.  **Monitor & Process Completion:** Verify `persona_*.md` files. Log. Let `[PersonaDocPaths]` be the list of these paths.

5.  **Phase 4: Delegate to `data-product-simdata-designer`**
    1.  **Prepare Sub-Task:**
        *   `[SubTask_Title]`: "Design Simulated Data Schema & Data for '[ProductName]' PoC"
        *   `[SubTask_Type]`: `"📊 DataProductDesignPhase"`
        *   `[SubTask_Input_Artifacts]`: `["[IdeationDocPath]"] + [PersonaDocPaths]`
        *   `[Target_Output_Artifact_SchemaPath]`: `[Active Session Path]/artifacts/design_outputs/[ProductName]/simulated_data_schema_v1.md`
        *   `[Target_Output_Artifact_DataPath]`: `[Active Session Path]/artifacts/design_outputs/[ProductName]/simulated_data_v1.csv` (or `.json`)
        *   `[SubTask_Checklist]`: Instruct `data-product-simdata-designer` to define a schema and generate/describe sample data relevant to personas and PoC features, producing the schema document and a data file.
    2.  **Create & Delegate MDTM Sub-Task:** To `data-product-simdata-designer`.
    3.  **Monitor & Process Completion:** Verify schema & data file. Log. Let `[SchemaDocPath]` and `[DataFilePath]` be these paths.

6.  **Phase 5: Delegate to `data-product-poc-interface-architect`**
    1.  **Prepare Sub-Task:**
        *   `[SubTask_Title]`: "Design Conceptual PoC Interface for '[ProductName]'"
        *   `[SubTask_Type]`: `"📊 DataProductDesignPhase"`
        *   `[SubTask_Input_Artifacts]`: `[[PersonaDocPaths], "[SchemaDocPath]", "[DataFilePath]", "[IdeationDocPath]"]`
        *   `[Target_Output_Artifact_Path]`: `[Active Session Path]/artifacts/design_outputs/[ProductName]/poc_interface_design_v1.md`
        *   `[SubTask_Checklist]`: Instruct `data-product-poc-interface-architect` to design a conceptual UI based on personas, data, and PoC scope, producing `poc_interface_design_v1.md`.
    2.  **Create & Delegate MDTM Sub-Task:** To `data-product-poc-interface-architect`.
    3.  **Monitor & Process Completion:** Verify interface design doc. Log. Let `[InterfaceDesignDocPath]` be this path.

7.  **Phase 6: Delegate to `data-product-poc-documenter`**
    1.  **Prepare Sub-Task:**
        *   `[SubTask_Title]`: "Consolidate Data Product PoC Plan for '[ProductName]'"
        *   `[SubTask_Type]`: `"📊 DataProductDesignPhase"`
        *   `[SubTask_Input_Artifacts]`: `["[StrategyDocPath]", "[IdeationDocPath"] + [PersonaDocPaths] + ["[SchemaDocPath]", "[InterfaceDesignDocPath]"]` (and potentially `[DataFilePath]` for reference).
        *   `[Target_Output_Artifact_Path]`: `[Active Session Path]/artifacts/design_outputs/[ProductName]/data_product_poc_plan_v1.md`
        *   `[SubTask_Checklist]`: Instruct `data-product-poc-documenter` to synthesize all previous artifacts into the comprehensive PoC plan using `template_data_product_poc_plan.md`.
    2.  **Create & Delegate MDTM Sub-Task:** To `data-product-poc-documenter`.
    3.  **Monitor & Process Completion:** Verify the final `data_product_poc_plan_v1.md`. Log. Let `[FinalPoCPlanPath]` be this path.

8.  **Phase 7: Finalization & Reporting**
    1.  Verify all squad sub-tasks are "🟢 Done" and the `[FinalPoCPlanPath]` is correctly produced.
    2.  Update your primary MDTM task:
        *   List `[FinalPoCPlanPath]` in your `output_artifacts` TOML field.
        *   Ensure all your checklist items (Phases 1-6) are marked "✅".
        *   Write a final summary in your primary task's log: "All Data Product PoC design phases for '[ProductName]' completed. Final PoC Plan available at `[FinalPoCPlanPath]`."
        *   Set your primary task `status` to "🟢 Done".
        *   Update `updated_date`.
    3.  Report completion of your primary MDTM task to `roo-commander`.

## 4. Artifact Management Summary

*   `manager-data-product` defines the target paths for all key design artifacts within the active session's `artifacts/design_outputs/[ProductName]/` directory.
*   Each `data-product-*` squad member saves its output to the path specified in its MDTM sub-task and lists this path in its `output_artifacts`.
*   `manager-data-product` ensures these output paths are used as inputs for subsequent squad members.
*   The final `data_product_poc_plan.md` path is the primary output of `manager-data-product`'s main MDTM task.

## 5. Error Handling within Orchestration

*   If any squad member reports "🔴 Error" or "⚪ Blocked" on their sub-task:
    1.  Log the issue in your primary MDTM task.
    2.  Analyze the sub-task's log for details.
    3.  Attempt to resolve (e.g., provide clarification, adjust sub-task scope if minor).
    4.  If unresolvable, update your primary MDTM task status to "⚪ Blocked" or "🔴 Error" and escalate to `roo-commander`, providing details of the problematic sub-task ID and squad member.

This procedure details the core operational logic for `manager-data-product` to successfully guide its squad through the Data Product PoC design lifecycle.