+++
# --- KB Example Metadata (Required for all KB Example Files) ---
id = "KB-EX-MDP-SUBTASK-DPPD-V1" # MDP for Manager Data Product, DPPD for Data Product PoC Documenter
title = "Example: MDTM Sub-Task for Data Product PoC Documenter (from Manager Data Product)"
context_type = "kb_example"
scope = "Illustrates a typical MDTM sub-task created by manager-data-product and assigned to data-product-poc-documenter for the 'PoC Plan Consolidation' phase."
target_audience = ["manager-data-product", "data-product-poc-documenter", "developers_maintaining_mode"]
granularity = "specific_instance"
status = "active"
last_updated = "{{YYYYMMDD}}"
version = "1.0"
tags = ["kb", "example", "manager-data-product", "data-product-poc-documenter", "mdtm-task", "subtask-example", "documentation", "poc-plan"]
related_context = [
    ".roo/commander/templates/tasks/template_00_mdtm_task_generic.md", # The template this example is an instance of
    ".roo/commander/modes/manager-data-product/manager-data-product.mode.md",
    ".roo/commander/modes/data-product-poc-documenter/data-product-poc-documenter.mode.md",
    ".roo/commander/templates/design_artifacts/template_data_product_poc_plan.md" # The output template for the PoC Documenter
]
template_schema_doc = ".roo/commander/templates/modes/common/kb/examples/template_00_kb_example_file.README.md"

# --- Example Specific Fields ---
illustrates_artifact_type = "MDTM Sub-Task (for Squad Member)"
scenario_description = "Final sub-task for data-product-poc-documenter to consolidate all design artifacts into a comprehensive PoC Plan for the 'Customer Retention Analyzer' PoC."
source_for_example_content = "Based on template_00_mdtm_task_generic.md"
key_takeaway_from_example = "Shows delegation of the final documentation phase, providing all preceding design artifacts as inputs, and expecting the consolidated PoC plan as the ultimate output of the design workflow."
+++

# Example: MDTM Sub-Task for Data Product PoC Documenter

## 1. Purpose of this Example

This document provides a concrete example of the final MDTM (Markdown-Driven Task Management) sub-task that the **`manager-data-product`** mode would create and assign to the **`data-product-poc-documenter`** mode. This sub-task covers the "PoC Plan Consolidation" phase, which is the culmination of the Data Product PoC design lifecycle.

It illustrates:
*   How all previously created design artifacts serve as inputs.
*   The expectation of a single, comprehensive `data_product_poc_plan.md` document as the primary output.
*   A detailed checklist guiding the `data-product-poc-documenter` in synthesizing the information.

## 2. Example Content

---
### Illustrative Instance of: MDTM Sub-Task (for `data-product-poc-documenter`)

```toml
+++
# --- MDTM Task Generic ---
id = "TASK-DPPD-20250718-150000" # Example Sub-Task ID
title = "Consolidate Data Product PoC Plan for 'Customer Retention Analyzer'"
status = "🟡 To Do"
type = "📊 DataProductDesignPhase" # Could also be "📖 Documentation"
priority = "🚨 Critical" # This is the final deliverable

created_date = "2025-07-18T15:00:00Z"
updated_date = "2025-07-18T15:00:00Z"
# due_date = ""

assigned_to = "data-product-poc-documenter"
coordinator = "manager-data-product"
parent_task_id = "TASK-MDP-20250718-100000" # Links to the manager's primary task

# --- Task Context & I/O ---
input_artifacts = [
    "[ActiveSessionPath]/artifacts/design_outputs/CustomerRetentionAnalyzer/product_strategy_v1.md",
    "[ActiveSessionPath]/artifacts/design_outputs/CustomerRetentionAnalyzer/poc_ideation_v1.md",
    "[ActiveSessionPath]/artifacts/design_outputs/CustomerRetentionAnalyzer/persona_marketing_analyst_v1.md",
    "[ActiveSessionPath]/artifacts/design_outputs/CustomerRetentionAnalyzer/persona_success_manager_v1.md",
    "[ActiveSessionPath]/artifacts/design_outputs/CustomerRetentionAnalyzer/simulated_data_schema_v1.md",
    # Optional: "[ActiveSessionPath]/artifacts/design_outputs/CustomerRetentionAnalyzer/simulated_data_v1.csv",
    "[ActiveSessionPath]/artifacts/design_outputs/CustomerRetentionAnalyzer/poc_interface_design_v1.md"
]
output_artifacts = [] # To be populated by assignee with path to data_product_poc_plan_v1.md
related_docs = [
    ".roo/commander/templates/design_artifacts/template_data_product_poc_plan.md" # Reference to the output template
]
tags = ["mdtm", "data-product-squad", "data-product-poc-documenter", "documentation", "poc-plan", "consolidation", "customer-retention-analyzer"]
template_schema_doc = ".roo/commander/templates/tasks/template_00_mdtm_task_generic.README.md"
+++

# Task: Consolidate Data Product PoC Plan for 'Customer Retention Analyzer'

## 1. Description ✍️

*   **Goal:** Synthesize all previously created design artifacts (Strategy, Ideation, Personas, Data Schema, Interface Design) into a single, cohesive, and comprehensive "Data Product PoC Plan" document for the "Customer Retention Analyzer" PoC.
*   **Context:** This is the final phase (Phase 6) of the Data Product PoC design lifecycle. All other design artifacts are expected to be complete and available as `input_artifacts`.
*   **Scope:** Produce a `data_product_poc_plan_v1.md` document using the standard template (`.roo/commander/templates/design_artifacts/template_data_product_poc_plan.md`). Ensure all sections are appropriately populated by summarizing and referencing the input artifacts. Add a high-level PoC development roadmap/phases if requested by the template or `manager-data-product`.

## 2. Acceptance Criteria ✅

*   - [ ] A `data_product_poc_plan_v1.md` document is created and saved to `[ActiveSessionPath]/artifacts/design_outputs/CustomerRetentionAnalyzer/data_product_poc_plan_v1.md`.
*   - [ ] The PoC Plan accurately summarizes and integrates key information from all input design artifacts.
*   - [ ] All sections of the `template_data_product_poc_plan.md` are addressed.
*   - [ ] The document is well-organized, clear, and provides a complete overview of the planned PoC.
*   - [ ] (If applicable) A high-level PoC development roadmap/phases section is included.
*   - [ ] This MDTM task's `output_artifacts` field is updated with the path to the created `data_product_poc_plan_v1.md`.
*   - [ ] This MDTM task status is updated to "🟢 Done".

## 3. Checklist / Sub-Tasks 📝

*   - [ ] Review all `input_artifacts` to gain a comprehensive understanding of the entire PoC design.
*   - [ ] Initialize the `data_product_poc_plan_v1.md` using the `template_data_product_poc_plan.md`.
*   - [ ] Populate "Section 1: Introduction & Executive Summary".
*   - [ ] Populate "Section 2: Business Objectives & Strategic Context (Summary)" by summarizing `product_strategy_v1.md`.
*   - [ ] Populate "Section 3: PoC Scope & Features (Summary)" by summarizing `poc_ideation_v1.md`.
*   - [ ] Populate "Section 4: Target User Personas (Summary)" by summarizing `persona_*.md` files.
*   - [ ] Populate "Section 5: Simulated Data Overview (Summary)" by summarizing `simulated_data_schema_v1.md`.
*   - [ ] Populate "Section 6: Conceptual Interface Design (Summary)" by summarizing `poc_interface_design_v1.md`.
*   - [ ] Populate "Section 7: PoC Success Metrics & Validation Plan" (from `poc_ideation_v1.md` and potentially refined).
*   - [ ] (Optional, if guided) Draft "Section 8: High-Level PoC Development Roadmap/Phases".
*   - [ ] (Optional, if guided) Draft "Section 9: PoC Team & Resources (Conceptual)".
*   - [ ] Consolidate and populate "Section 10: Assumptions, Risks, and Dependencies".
*   - [ ] Write "Section 11: Conclusion & Next Steps Post-PoC".
*   - [ ] Add the "Document Appendix: Links to Source Artifacts" section, ensuring all input artifact paths are correctly listed.
*   - [ ] Review the entire `data_product_poc_plan_v1.md` for clarity, consistency, and completeness.
*   - [ ] Save `data_product_poc_plan_v1.md` to `[ActiveSessionPath]/artifacts/design_outputs/CustomerRetentionAnalyzer/data_product_poc_plan_v1.md`.
*   - [ ] Update this MDTM task's `output_artifacts` TOML field with the correct path.
*   - [ ] Update this MDTM task's `status` TOML field to "🟢 Done".
*   - [ ] Report completion to `manager-data-product`.

## 4. Log Entries / Notes 🪵
*(data-product-poc-documenter will append its log entries here.)*

*   `[YYYY-MM-DDTHH:MM:SSZ] - data-product-poc-documenter: Task ingested. Reviewing all design artifacts for PoC plan consolidation.`
```

---

## 3. How to Use This Example

*   **For `manager-data-product`:** This illustrates how to structure the final MDTM sub-task for `data-product-poc-documenter`, ensuring all previously generated design documents are provided as inputs.
*   **For `data-product-poc-documenter`:** This is an example of the task you will receive. Your focus is on careful synthesis and clear presentation of all prior work into the final PoC plan document.
*   **For Developers/Users:** Shows the culmination of the design process, where all individual design pieces are brought together into a single, actionable plan.