+++
# --- KB Example Metadata (Required for all KB Example Files) ---
id = "KB-EX-MDP-INPUT-TASK-FROM-RC-V1" # RC for Roo Commander
title = "Example: MDTM Task for Manager Data Product (from Roo Commander)"
context_type = "kb_example"
scope = "Illustrates the typical high-level MDTM task that manager-data-product receives from roo-commander to initiate a Data Product PoC design workflow."
target_audience = ["manager-data-product", "roo-commander", "developers_maintaining_mode"]
granularity = "specific_instance"
status = "active"
last_updated = "{{YYYYMMDD}}"
version = "1.0"
tags = ["kb", "example", "manager-data-product", "mdtm-task", "input-example", "roo-commander-delegation"]
related_context = [
    ".roo/commander/templates/tasks/template_00_mdtm_task_generic.md", # The template this example is an instance of
    ".roo/commander/modes/manager-data-product/manager-data-product.mode.md",
    ".roo/commander/modes/roo-commander/roo-commander.mode.md"
]
template_schema_doc = ".roo/commander/templates/modes/common/kb/examples/template_00_kb_example_file.README.md"

# --- Example Specific Fields ---
illustrates_artifact_type = "MDTM Task (Primary Input)"
scenario_description = "Initial delegation from roo-commander to manager-data-product to start the design of a new Data Product PoC named 'Customer Retention Analyzer'."
source_for_example_content = "Based on template_00_mdtm_task_generic.md"
key_takeaway_from_example = "Shows the high-level goal, coordinator, and session context provided to manager-data-product."
+++

# Example: MDTM Task for Manager Data Product (from Roo Commander)

## 1. Purpose of this Example

This document provides a concrete example of a typical high-level MDTM (Markdown-Driven Task Management) task that the **`manager-data-product`** mode would receive from **`roo-commander`**. This task initiates the end-to-end workflow for designing a Data Product Proof of Concept (PoC).

It illustrates:
*   The expected TOML frontmatter fields and their typical values for such a task.
*   The kind of high-level goal, description, and acceptance criteria provided by `roo-commander`.
*   How the active session context is referenced.

The `manager-data-product` mode will use this task as its primary input to begin its orchestration of the `data-product-*` squad.

## 2. Example Content

---
### Illustrative Instance of: MDTM Task (Primary Input for `manager-data-product`)

```toml
+++
# --- MDTM Task Generic ---
id = "TASK-MDP-20250718-100000" # Example Task ID for manager-data-product
title = "Orchestrate: Design Data Product PoC for 'Customer Retention Analyzer' - Session: SESSION-RetentionPoC-20250718-095500"
status = "🟡 To Do"
type = "⚙️ ManagedWorkflow" # A type indicating this is a high-level workflow for the manager
priority = "🟧 High"

created_date = "2025-07-18T10:00:00Z"
updated_date = "2025-07-18T10:00:00Z"
# due_date = ""

assigned_to = "manager-data-product"
coordinator = "roo-commander" # Delegated by roo-commander
# parent_task_id = "" # This is a top-level task from roo-commander

# --- Task Context & I/O ---
input_artifacts = [
    ".roo/commander/sessions/SESSION-RetentionPoC-20250718-095500/session_log.md",
    # Potentially a path to an initial user brief if captured as a session artifact
    # ".roo/commander/sessions/SESSION-RetentionPoC-20250718-095500/artifacts/notes/NOTE-InitialUserBrief-20250718-095800.md"
]
output_artifacts = [] # To be populated by manager-data-product with the path to the final PoC Plan
related_docs = [
    ".roo/commander/sessions/SESSION-RetentionPoC-20250718-095500/session_log.md" # Session context is key
]
tags = ["mdtm", "manager-task", "manager-data-product", "data-product-poc", "customer-retention-analyzer"]
template_schema_doc = ".roo/commander/templates/tasks/template_00_mdtm_task_generic.README.md"
+++

# Task: Orchestrate: Design Data Product PoC for 'Customer Retention Analyzer'

## 1. Description ✍️

*   **Goal:** Manage the end-to-end design lifecycle for a Proof of Concept (PoC) of a new data product tentatively named "Customer Retention Analyzer".
*   **Context:** This task is initiated by `roo-commander` as part of user session `SESSION-RetentionPoC-20250718-095500`. All work and generated artifacts should be associated with this session. An initial user brief might be available in the session artifacts (see `input_artifacts`).
*   **Scope:** Oversee all design phases from initial strategy definition through to the creation of a comprehensive PoC plan document. This involves coordinating the specialist `data-product-*` squad.

## 2. Acceptance Criteria ✅

*   - [ ] All phases of the Data Product PoC design lifecycle (Strategy, Ideation, Personas, Data Simulation, Interface Design, Documentation) are successfully completed by the respective squad members.
*   - [ ] A final, consolidated `data_product_poc_plan_v1.md` for the "Customer Retention Analyzer" is produced and its path is listed in the `output_artifacts` of this task.
*   - [ ] All squad sub-tasks are marked as "🟢 Done".
*   - [ ] This primary MDTM task is updated to "🟢 Done".

## 3. Checklist / Sub-Tasks 📝
*(This checklist will be populated and managed by `manager-data-product` as it orchestrates its squad. It outlines the high-level phases it will manage.)*

*   - [ ] **Phase 0: Ingest & Plan:** Thoroughly review this task and its inputs. Consult KB (`procedures/01-main-data-product-orchestration-flow.md`) to plan squad sub-task sequence. Update this checklist with planned phases.
*   - [ ] **Phase 1: Strategy Definition:** Create and delegate MDTM sub-task to `data-product-strategist`. Monitor for completion and `product_strategy_v1.md`.
*   - [ ] **Phase 2: Ideation & Scoping:** Create and delegate MDTM sub-task to `data-product-ideator`. Monitor for completion and `poc_ideation_v1.md`.
*   - [ ] **Phase 3: UX Persona Development:** Create and delegate MDTM sub-task to `data-product-ux-persona-architect`. Monitor for completion and `persona_*.md` files.
*   - [ ] **Phase 4: Simulated Data Design:** Create and delegate MDTM sub-task to `data-product-simdata-designer`. Monitor for completion and `simulated_data_schema_v1.md` / `simulated_data_v1.csv`.
*   - [ ] **Phase 5: Conceptual Interface Design:** Create and delegate MDTM sub-task to `data-product-poc-interface-architect`. Monitor for completion and `poc_interface_design_v1.md`.
*   - [ ] **Phase 6: PoC Plan Consolidation:** Create and delegate MDTM sub-task to `data-product-poc-documenter`. Monitor for completion and final `data_product_poc_plan_v1.md`.
*   - [ ] **Phase 7: Finalize & Report:** Update this task's `output_artifacts` with the path to the final PoC plan. Set status to "🟢 Done". Report completion to `roo-commander`.

## 4. Log Entries / Notes 🪵
*(manager-data-product will append its orchestration log entries here.)*

*   `[YYYY-MM-DDTHH:MM:SSZ] - manager-data-product: Task ingested from roo-commander. Session ID: SESSION-RetentionPoC-20250718-095500. Planning squad sub-tasks.`
```

---

## 3. How to Use This Example

*   **For `manager-data-product`:** This illustrates the structure and typical content of the primary MDTM task you will receive from `roo-commander`. Use it to understand the expected inputs and the overall goal you need to orchestrate.
*   **For `roo-commander` (and developers):** This serves as a reference for how `roo-commander` should structure the MDTM tasks it creates when delegating a full Data Product PoC design workflow to `manager-data-product`.