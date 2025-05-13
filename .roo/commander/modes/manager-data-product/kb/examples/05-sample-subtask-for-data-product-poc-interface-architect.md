+++
# --- KB Example Metadata (Required for all KB Example Files) ---
id = "KB-EX-MDP-SUBTASK-DPPIA-V1" # MDP for Manager Data Product, DPPIA for Data Product PoC Interface Architect
title = "Example: MDTM Sub-Task for Data Product PoC Interface Architect (from Manager Data Product)"
context_type = "kb_example"
scope = "Illustrates a typical MDTM sub-task created by manager-data-product and assigned to data-product-poc-interface-architect for the 'Conceptual Interface Design' phase."
target_audience = ["manager-data-product", "data-product-poc-interface-architect", "developers_maintaining_mode"]
granularity = "specific_instance"
status = "active"
last_updated = "{{YYYYMMDD}}"
version = "1.0"
tags = ["kb", "example", "manager-data-product", "data-product-poc-interface-architect", "mdtm-task", "subtask-example", "ui-design", "ux-design", "wireframing"]
related_context = [
    ".roo/commander/templates/tasks/template_00_mdtm_task_generic.md", # The template this example is an instance of
    ".roo/commander/modes/manager-data-product/manager-data-product.mode.md",
    ".roo/commander/modes/data-product-poc-interface-architect/data-product-poc-interface-architect.mode.md",
    ".roo/commander/templates/design_artifacts/template_poc_interface_design.md" # The output template for the interface architect
]
template_schema_doc = ".roo/commander/templates/modes/common/kb/examples/template_00_kb_example_file.README.md"

# --- Example Specific Fields ---
illustrates_artifact_type = "MDTM Sub-Task (for Squad Member)"
scenario_description = "Sub-task for data-product-poc-interface-architect to design a conceptual UI/UX for the 'Customer Retention Analyzer' PoC, based on personas, PoC scope, and simulated data."
source_for_example_content = "Based on template_00_mdtm_task_generic.md"
key_takeaway_from_example = "Shows delegation of conceptual interface design, providing personas, data schema, and PoC scope as inputs, and expecting an interface design document as output."
+++

# Example: MDTM Sub-Task for Data Product PoC Interface Architect

## 1. Purpose of this Example

This document provides a concrete example of a typical MDTM (Markdown-Driven Task Management) sub-task that the **`manager-data-product`** mode would create and assign to the **`data-product-poc-interface-architect`** mode. This sub-task covers the "Conceptual Interface Design" phase of designing a Data Product PoC.

It illustrates:
*   How user personas, PoC scope (from ideation), and the simulated data schema serve as key inputs.
*   The expectation of a `poc_interface_design.md` document as the primary output.
*   A detailed checklist guiding the `data-product-poc-interface-architect`.

## 2. Example Content

---
### Illustrative Instance of: MDTM Sub-Task (for `data-product-poc-interface-architect`)

```toml
+++
# --- MDTM Task Generic ---
id = "TASK-DPPIA-20250718-140000" # Example Sub-Task ID
title = "Design Conceptual PoC Interface for 'Customer Retention Analyzer'"
status = "🟡 To Do"
type = "📊 DataProductDesignPhase"
priority = "🟧 High"

created_date = "2025-07-18T14:00:00Z"
updated_date = "2025-07-18T14:00:00Z"
# due_date = ""

assigned_to = "data-product-poc-interface-architect"
coordinator = "manager-data-product"
parent_task_id = "TASK-MDP-20250718-100000" # Links to the manager's primary task

# --- Task Context & I/O ---
input_artifacts = [
    "[ActiveSessionPath]/artifacts/design_outputs/CustomerRetentionAnalyzer/poc_ideation_v1.md",
    "[ActiveSessionPath]/artifacts/design_outputs/CustomerRetentionAnalyzer/persona_marketing_analyst_v1.md",
    "[ActiveSessionPath]/artifacts/design_outputs/CustomerRetentionAnalyzer/persona_success_manager_v1.md",
    "[ActiveSessionPath]/artifacts/design_outputs/CustomerRetentionAnalyzer/simulated_data_schema_v1.md",
    "[ActiveSessionPath]/artifacts/design_outputs/CustomerRetentionAnalyzer/simulated_data_v1.csv" # For understanding data values
]
output_artifacts = [] # To be populated by assignee with path to poc_interface_design_v1.md
related_docs = [
    ".roo/commander/templates/design_artifacts/template_poc_interface_design.md" # Reference to the output template
]
tags = ["mdtm", "data-product-squad", "data-product-poc-interface-architect", "ui-design", "ux-design", "wireframing", "dashboard-design", "customer-retention-analyzer"]
template_schema_doc = ".roo/commander/templates/tasks/template_00_mdtm_task_generic.README.md"
+++

# Task: Design Conceptual PoC Interface for 'Customer Retention Analyzer'

## 1. Description ✍️

*   **Goal:** Based on the User Personas, PoC Ideation (features/scope), and Simulated Data Schema, design a conceptual user interface (UI/UX) for the "Customer Retention Analyzer" PoC. This should focus on how users will interact with the data to achieve the PoC's objectives.
*   **Context:** This is Phase 5 of the Data Product PoC design. Inputs include `persona_*.md`, `poc_ideation_v1.md`, and `simulated_data_schema_v1.md` (and sample data).
*   **Scope:** Produce a `poc_interface_design_v1.md` document using the standard template. This should include textual descriptions of UI components, key screens/views (e.g., a main dashboard), choices of visualizations, and high-level user interaction flows. Simple wireframes (Markdown tables, ASCII art, or descriptions of externally sketched wireframes) are encouraged. Focus on concept and usability, not high-fidelity visual design.

## 2. Acceptance Criteria ✅

*   - [ ] A `poc_interface_design_v1.md` document is created and saved to `[ActiveSessionPath]/artifacts/design_outputs/CustomerRetentionAnalyzer/poc_interface_design_v1.md`.
*   - [ ] The document outlines key UI components (e.g., dashboards, charts, tables, filters).
*   - [ ] Appropriate visualization types are chosen for the simulated data, aligning with PoC goals and persona needs.
*   - [ ] High-level user interaction flows for key PoC features are described.
*   - [ ] The design considers the goals and pain points of the target personas.
*   - [ ] This MDTM task's `output_artifacts` field is updated with the path to the created `poc_interface_design_v1.md`.
*   - [ ] This MDTM task status is updated to "🟢 Done".

## 3. Checklist / Sub-Tasks 📝

*   - [ ] Review all `input_artifacts`: `poc_ideation_v1.md` (for features & scope), `persona_*.md` files (for user goals, needs, pain points), and `simulated_data_schema_v1.md` / `simulated_data_v1.csv` (to understand data to be presented).
*   - [ ] For each primary persona, identify 1-2 key user stories or scenarios from `poc_ideation_v1.md` that the interface must support.
*   - [ ] Outline the main views or screens for the PoC interface (e.g., Main Dashboard, Detail View if applicable).
*   - [ ] For each view, sketch or describe the layout of key components:
    *   - [ ] Identify necessary data visualizations (charts, graphs) and select appropriate types based on data and insights to be conveyed.
    *   - [ ] Define any data tables needed, specifying key columns.
    *   - [ ] List interactive elements (filters, buttons, search functionality).
*   - [ ] Describe the high-level user interaction flow for completing the key user stories/scenarios.
*   - [ ] Briefly document design rationale, explaining how choices support persona needs and PoC goals.
*   - [ ] Note any specific usability considerations.
*   - [ ] Compile all information into the `poc_interface_design_v1.md` document using the standard template.
*   - [ ] Save `poc_interface_design_v1.md` to `[ActiveSessionPath]/artifacts/design_outputs/CustomerRetentionAnalyzer/poc_interface_design_v1.md`.
*   - [ ] Update this MDTM task's `output_artifacts` TOML field with the correct path.
*   - [ ] Update this MDTM task's `status` TOML field to "🟢 Done".
*   - [ ] Report completion to `manager-data-product`.

## 4. Log Entries / Notes 🪵
*(data-product-poc-interface-architect will append its log entries here.)*

*   `[YYYY-MM-DDTHH:MM:SSZ] - data-product-poc-interface-architect: Task ingested. Reviewing personas, ideation, and data schema for interface design.`
```

---

## 3. How to Use This Example

*   **For `manager-data-product`:** This illustrates how to structure the MDTM sub-task for `data-product-poc-interface-architect`, providing all necessary design inputs (personas, scope, data context).
*   **For `data-product-poc-interface-architect`:** This is an example of the task you will receive. Your focus is on translating user needs and data into an effective and intuitive conceptual interface design.
*   **For Developers/Users:** Shows how the UI/UX conceptualization builds upon the user understanding, feature definition, and data design phases.