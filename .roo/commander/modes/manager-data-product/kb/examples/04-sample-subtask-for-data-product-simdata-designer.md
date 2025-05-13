+++
# --- KB Example Metadata (Required for all KB Example Files) ---
id = "KB-EX-MDP-SUBTASK-DPSSD-V1" # MDP for Manager Data Product, DPSSD for Data Product SimData Designer
title = "Example: MDTM Sub-Task for Data Product Simulated Data Designer (from Manager Data Product)"
context_type = "kb_example"
scope = "Illustrates a typical MDTM sub-task created by manager-data-product and assigned to data-product-simdata-designer for the 'Simulated Data Design' phase."
target_audience = ["manager-data-product", "data-product-simdata-designer", "developers_maintaining_mode"]
granularity = "specific_instance"
status = "active"
last_updated = "{{YYYYMMDD}}"
version = "1.0"
tags = ["kb", "example", "manager-data-product", "data-product-simdata-designer", "mdtm-task", "subtask-example", "data-simulation", "schema-design"]
related_context = [
    ".roo/commander/templates/tasks/template_00_mdtm_task_generic.md", # The template this example is an instance of
    ".roo/commander/modes/manager-data-product/manager-data-product.mode.md",
    ".roo/commander/modes/data-product-simdata-designer/data-product-simdata-designer.mode.md",
    ".roo/commander/templates/design_artifacts/template_simulated_data_schema.md" # The schema output template
]
template_schema_doc = ".roo/commander/templates/modes/common/kb/examples/template_00_kb_example_file.README.md"

# --- Example Specific Fields ---
illustrates_artifact_type = "MDTM Sub-Task (for Squad Member)"
scenario_description = "Sub-task for data-product-simdata-designer to define a schema and generate/describe sample data for the 'Customer Retention Analyzer' PoC, based on PoC ideation and user personas."
source_for_example_content = "Based on template_00_mdtm_task_generic.md"
key_takeaway_from_example = "Shows delegation of data design, providing PoC scope and personas as inputs, and expecting a schema document and a sample data file (or its description) as outputs."
+++

# Example: MDTM Sub-Task for Data Product Simulated Data Designer

## 1. Purpose of this Example

This document provides a concrete example of a typical MDTM (Markdown-Driven Task Management) sub-task that the **`manager-data-product`** mode would create and assign to the **`data-product-simdata-designer`** mode. This sub-task covers the "Simulated Data Design" phase of designing a Data Product PoC.

It illustrates:
*   How PoC ideation and user personas serve as key inputs.
*   The expectation of a `simulated_data_schema.md` document and an actual sample data file (e.g., `.csv` or `.json`) or a detailed description of how to generate it.
*   A detailed checklist guiding the `data-product-simdata-designer`.

## 2. Example Content

---
### Illustrative Instance of: MDTM Sub-Task (for `data-product-simdata-designer`)

```toml
+++
# --- MDTM Task Generic ---
id = "TASK-DPSSD-20250718-130000" # Example Sub-Task ID
title = "Design Simulated Data Schema & Sample Data for 'Customer Retention Analyzer' PoC"
status = "🟡 To Do"
type = "📊 DataProductDesignPhase"
priority = "🟧 High"

created_date = "2025-07-18T13:00:00Z"
updated_date = "2025-07-18T13:00:00Z"
# due_date = ""

assigned_to = "data-product-simdata-designer"
coordinator = "manager-data-product"
parent_task_id = "TASK-MDP-20250718-100000" # Links to the manager's primary task

# --- Task Context & I/O ---
input_artifacts = [
    "[ActiveSessionPath]/artifacts/design_outputs/CustomerRetentionAnalyzer/poc_ideation_v1.md",
    "[ActiveSessionPath]/artifacts/design_outputs/CustomerRetentionAnalyzer/persona_marketing_analyst_v1.md",
    "[ActiveSessionPath]/artifacts/design_outputs/CustomerRetentionAnalyzer/persona_success_manager_v1.md"
    // Add paths to all relevant persona files
]
output_artifacts = [] # To be populated by assignee with paths to schema and data file/description
related_docs = [
    ".roo/commander/templates/design_artifacts/template_simulated_data_schema.md" # Reference to the schema output template
]
tags = ["mdtm", "data-product-squad", "data-product-simdata-designer", "data-simulation", "schema-design", "sample-data", "customer-retention-analyzer"]
template_schema_doc = ".roo/commander/templates/tasks/template_00_mdtm_task_generic.README.md"
+++

# Task: Design Simulated Data Schema & Sample Data for 'Customer Retention Analyzer' PoC

## 1. Description ✍️

*   **Goal:** Based on the PoC Ideation document (for data requirements) and User Personas (for context on data usage), define a clear schema for the simulated dataset(s) needed for the "Customer Retention Analyzer" PoC. Also, generate a small, representative sample data file (e.g., CSV or JSON) or provide a detailed description/script for generating such data.
*   **Context:** This is Phase 4 of the Data Product PoC design. Inputs include `poc_ideation_v1.md` and `persona_*.md` files.
*   **Scope:** Focus on creating a `simulated_data_schema_v1.md` document using the standard template and producing/describing a sample dataset that is plausible and sufficient for PoC demonstration purposes.

## 2. Acceptance Criteria ✅

*   - [ ] A `simulated_data_schema_v1.md` document is created and saved to `[ActiveSessionPath]/artifacts/design_outputs/CustomerRetentionAnalyzer/simulated_data_schema_v1.md`.
*   - [ ] The schema document clearly defines entities, fields, data types, example values, and any constraints for the simulated data.
*   - [ ] A sample data file (e.g., `simulated_data_v1.csv` or `simulated_data_v1.json`) is created and saved to `[ActiveSessionPath]/artifacts/design_outputs/CustomerRetentionAnalyzer/`, OR a detailed, executable script/description for generating the sample data is provided within or linked from the schema document.
*   - [ ] The simulated data reflects patterns relevant to the PoC features and persona interactions (e.g., plausible churn indicators).
*   - [ ] This MDTM task's `output_artifacts` field is updated with the paths to the created schema document and the data file/description.
*   - [ ] This MDTM task status is updated to "🟢 Done".

## 3. Checklist / Sub-Tasks 📝

*   - [ ] Review `poc_ideation_v1.md` to understand the high-level data requirements and features the data needs to support.
*   - [ ] Review `persona_*.md` files to understand how different users might interact with or be represented in the data.
*   - [ ] Define the primary data entities needed (e.g., "Customer", "Subscription", "UsageEvent", "ChurnIndicator").
*   - [ ] For each entity, define its fields:
    *   `Field Name`
    *   `Data Type` (e.g., String, Integer, Date, Boolean, Decimal)
    *   `Description` (clear business definition)
    *   `Example Value`
    *   `Constraints/Notes` (e.g., nullable, unique, format, simulated patterns)
*   - [ ] Document this schema in `simulated_data_schema_v1.md` using `template_simulated_data_schema.md`. Include a section on "Data Characteristics & Patterns (Simulated)".
*   - [ ] Decide on a method for providing sample data (direct file generation or generation script/description).
*   - [ ] If generating a file:
    *   - [ ] Create a small sample dataset (~20-50 plausible rows) conforming to the defined schema.
    *   - [ ] Ensure data includes variations relevant for the PoC (e.g., churned/active customers, different usage patterns).
    *   - [ ] Save as `simulated_data_v1.csv` (or `.json`) in `[ActiveSessionPath]/artifacts/design_outputs/CustomerRetentionAnalyzer/`.
*   - [ ] If providing a script/description:
    *   - [ ] Write a clear, executable script (e.g., Python) or a detailed step-by-step description for generating the sample data.
    *   - [ ] Include this script/description within `simulated_data_schema_v1.md` or link to it if it's a separate file.
*   - [ ] Save `simulated_data_schema_v1.md`.
*   - [ ] Update this MDTM task's `output_artifacts` TOML field with the paths to `simulated_data_schema_v1.md` and the data file (or where its generation is described).
*   - [ ] Update this MDTM task's `status` TOML field to "🟢 Done".
*   - [ ] Report completion to `manager-data-product`.

## 4. Log Entries / Notes 🪵
*(data-product-simdata-designer will append its log entries here.)*

*   `[YYYY-MM-DDTHH:MM:SSZ] - data-product-simdata-designer: Task ingested. Reviewing PoC ideation and personas for data requirements.`
```

---

## 3. How to Use This Example

*   **For `manager-data-product`:** This illustrates how to structure the MDTM sub-task for `data-product-simdata-designer`, providing the PoC ideation and personas as inputs, and expecting both a schema document and sample data (or its generation method) as outputs.
*   **For `data-product-simdata-designer`:** This is an example of the task you will receive. Your focus is on defining a plausible and useful data structure and providing sample data that enables the PoC's features and caters to the defined user personas.
*   **For Developers/Users:** Shows how data requirements flow from earlier design phases into concrete data schema and sample data definitions.