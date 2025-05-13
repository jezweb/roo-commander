+++
# --- KB Example Metadata (Required for all KB Example Files) ---
id = "KB-EX-MDP-SUBTASK-DPID-V1" # MDP for Manager Data Product, DPID for Data Product Ideator
title = "Example: MDTM Sub-Task for Data Product Ideator (from Manager Data Product)"
context_type = "kb_example"
scope = "Illustrates a typical MDTM sub-task created by manager-data-product and assigned to data-product-ideator for the 'Ideation & Scoping' phase of a Data Product PoC."
target_audience = ["manager-data-product", "data-product-ideator", "developers_maintaining_mode"]
granularity = "specific_instance"
status = "active"
last_updated = "{{YYYYMMDD}}"
version = "1.0"
tags = ["kb", "example", "manager-data-product", "data-product-ideator", "mdtm-task", "subtask-example", "ideation-phase"]
related_context = [
    ".roo/commander/templates/tasks/template_00_mdtm_task_generic.md", # The template this example is an instance of
    ".roo/commander/modes/manager-data-product/manager-data-product.mode.md",
    ".roo/commander/modes/data-product-ideator/data-product-ideator.mode.md",
    ".roo/commander/templates/design_artifacts/template_poc_ideation.md" # The output template for the ideator
]
template_schema_doc = ".roo/commander/templates/modes/common/kb/examples/template_00_kb_example_file.README.md"

# --- Example Specific Fields ---
illustrates_artifact_type = "MDTM Sub-Task (for Squad Member)"
scenario_description = "Sub-task for data-product-ideator to develop PoC features, scope, and initial data requirements for the 'Customer Retention Analyzer' PoC, based on the previously defined strategy."
source_for_example_content = "Based on template_00_mdtm_task_generic.md"
key_takeaway_from_example = "Shows how a manager delegates the ideation phase, providing the strategy document as input and defining the PoC ideation document as the expected output."
+++

# Example: MDTM Sub-Task for Data Product Ideator

## 1. Purpose of this Example

This document provides a concrete example of a typical MDTM (Markdown-Driven Task Management) sub-task that the **`manager-data-product`** mode would create and assign to the **`data-product-ideator`** mode. This sub-task covers the "Ideation & Scoping" phase of designing a Data Product PoC, following the completion of the strategy phase.

It illustrates:
*   How the output from a previous squad member (`product_strategy_v1.md`) becomes the input for this task.
*   The definition of `output_artifacts` expected from the `data-product-ideator` (i.e., the `poc_ideation.md` document).
*   A detailed checklist guiding the `data-product-ideator`.

## 2. Example Content

---
### Illustrative Instance of: MDTM Sub-Task (for `data-product-ideator`)

```toml
+++
# --- MDTM Task Generic ---
id = "TASK-DPID-20250718-110000" # Example Sub-Task ID for data-product-ideator
title = "Develop PoC Ideation & Scope for 'Customer Retention Analyzer'"
status = "🟡 To Do"
type = "📊 DataProductDesignPhase"
priority = "🟧 High"

created_date = "2025-07-18T11:00:00Z"
updated_date = "2025-07-18T11:00:00Z"
# due_date = ""

assigned_to = "data-product-ideator"
coordinator = "manager-data-product"
parent_task_id = "TASK-MDP-20250718-100000" # Links to the manager's primary task

# --- Task Context & I/O ---
input_artifacts = [
    # This MUST be the path to the output from data-product-strategist
    "[ActiveSessionPath]/artifacts/design_outputs/CustomerRetentionAnalyzer/product_strategy_v1.md"
]
output_artifacts = [] # To be populated by data-product-ideator with path to poc_ideation_v1.md
related_docs = [
    ".roo/commander/templates/design_artifacts/template_poc_ideation.md" # Reference to the output template
]
tags = ["mdtm", "data-product-squad", "data-product-ideator", "ideation-phase", "poc-scope", "customer-retention-analyzer"]
template_schema_doc = ".roo/commander/templates/tasks/template_00_mdtm_task_generic.README.md"
+++

# Task: Develop PoC Ideation & Scope for 'Customer Retention Analyzer'

## 1. Description ✍️

*   **Goal:** Based on the approved Product Strategy (`product_strategy_v1.md`), develop concrete ideas for the "Customer Retention Analyzer" Proof of Concept (PoC). This includes brainstorming features, defining a clear PoC scope (inclusions and exclusions), outlining high-level data requirements (conceptual), and identifying initial PoC success metrics.
*   **Context:** This is Phase 2 of the Data Product PoC design, following strategy definition. Input is the `product_strategy_v1.md` from `data-product-strategist`.
*   **Scope:** Focus on all elements required for a complete `poc_ideation.md` document, using the standard template (`.roo/commander/templates/design_artifacts/template_poc_ideation.md`).

## 2. Acceptance Criteria ✅

*   - [ ] A `poc_ideation_v1.md` document is created and saved to `[ActiveSessionPath]/artifacts/design_outputs/CustomerRetentionAnalyzer/poc_ideation_v1.md`.
*   - [ ] The PoC's primary goal is clearly stated.
*   - [ ] Key features for the PoC are listed and described.
*   - [ ] Features explicitly out of scope for the PoC are identified.
*   - [ ] High-level conceptual data requirements (entities, key attributes, potential sources) are outlined.
*   - [ ] Initial, measurable PoC success metrics are defined.
*   - [ ] This MDTM task's `output_artifacts` field is updated with the path to the created `poc_ideation_v1.md`.
*   - [ ] This MDTM task status is updated to "🟢 Done".

## 3. Checklist / Sub-Tasks 📝

*   - [ ] Thoroughly review the `input_artifacts`, primarily `product_strategy_v1.md`, to understand strategic objectives, target audience, and value proposition.
*   - [ ] Based on the strategy, brainstorm a list of potential features that could be part of the "Customer Retention Analyzer" PoC.
*   - [ ] Prioritize these features, focusing on those that deliver core value and help validate key assumptions for an initial PoC.
*   - [ ] Define and document the "Key Features (In Scope)" for the PoC.
*   - [ ] Define and document "Key Features (Out of Scope)" for the PoC, providing brief reasons.
*   - [ ] Outline the "High-Level Data Requirements (Conceptual)":
    *   Identify necessary data entities (e.g., Customer Profiles, Interaction History, Subscription Data).
    *   List key attributes for each entity.
    *   Suggest potential (conceptual) data sources.
*   - [ ] Define 2-3 "Initial PoC Success Metrics" that are specific and measurable for this PoC.
*   - [ ] Note any key "Assumptions & Dependencies" for this PoC ideation.
*   - [ ] Compile all information into the `poc_ideation_v1.md` document using the standard template.
*   - [ ] Save `poc_ideation_v1.md` to `[ActiveSessionPath]/artifacts/design_outputs/CustomerRetentionAnalyzer/poc_ideation_v1.md`.
*   - [ ] Update this MDTM task's `output_artifacts` TOML field with the correct path.
*   - [ ] Update this MDTM task's `status` TOML field to "🟢 Done".
*   - [ ] Report completion to `manager-data-product`.

## 4. Log Entries / Notes 🪵
*(data-product-ideator will append its log entries here.)*

*   `[YYYY-MM-DDTHH:MM:SSZ] - data-product-ideator: Task ingested. Reviewing product_strategy_v1.md for 'Customer Retention Analyzer'.`
```

---

## 3. How to Use This Example

*   **For `manager-data-product`:** This illustrates how to structure the MDTM sub-task for `data-product-ideator`, ensuring the strategy document is passed as input and the `poc_ideation.md` is the expected output.
*   **For `data-product-ideator`:** This is an example of the task you will receive. Focus on using the input strategy to define the PoC scope, features, and initial data/metric considerations.
*   **For Developers/Users:** Shows the sequential flow of artifacts and responsibilities within the Data Product Design Squad.