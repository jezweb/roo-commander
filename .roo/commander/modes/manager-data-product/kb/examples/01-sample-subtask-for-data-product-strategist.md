+++
# --- KB Example Metadata (Required for all KB Example Files) ---
id = "KB-EX-MDP-SUBTASK-DPS-V1" # MDP for Manager Data Product, DPS for Data Product Strategist
title = "Example: MDTM Sub-Task for Data Product Strategist (from Manager Data Product)"
context_type = "kb_example"
scope = "Illustrates a typical MDTM sub-task created by manager-data-product and assigned to data-product-strategist for the 'Strategy Definition' phase of a Data Product PoC."
target_audience = ["manager-data-product", "data-product-strategist", "developers_maintaining_mode"]
granularity = "specific_instance"
status = "active"
last_updated = "{{YYYYMMDD}}"
version = "1.0"
tags = ["kb", "example", "manager-data-product", "data-product-strategist", "mdtm-task", "subtask-example", "strategy-phase"]
related_context = [
    ".roo/commander/templates/tasks/template_00_mdtm_task_generic.md", # The template this example is an instance of
    ".roo/commander/modes/manager-data-product/manager-data-product.mode.md",
    ".roo/commander/modes/data-product-strategist/data-product-strategist.mode.md",
    ".roo/commander/templates/design_artifacts/template_product_strategy.md" # The output template for the strategist
]
template_schema_doc = ".roo/commander/templates/modes/common/kb/examples/template_00_kb_example_file.README.md"

# --- Example Specific Fields ---
illustrates_artifact_type = "MDTM Sub-Task (for Squad Member)"
scenario_description = "Sub-task for data-product-strategist to define the product strategy for the 'Customer Retention Analyzer' PoC, as part of the workflow managed by manager-data-product."
source_for_example_content = "Based on template_00_mdtm_task_generic.md"
key_takeaway_from_example = "Shows how a manager delegates a specific design phase, providing necessary inputs and defining expected outputs for a squad member."
+++

# Example: MDTM Sub-Task for Data Product Strategist

## 1. Purpose of this Example

This document provides a concrete example of a typical MDTM (Markdown-Driven Task Management) sub-task that the **`manager-data-product`** mode would create and assign to the **`data-product-strategist`** mode. This sub-task covers the "Strategy Definition" phase of designing a Data Product PoC.

It illustrates:
*   The structure of a sub-task, including `parent_task_id` linking it to the manager's primary task.
*   How `input_artifacts` (like initial briefs or session context) are passed down.
*   The definition of `output_artifacts` expected from the `data-product-strategist` (i.e., the `product_strategy.md` document).
*   A detailed checklist guiding the `data-product-strategist`.

## 2. Example Content

---
### Illustrative Instance of: MDTM Sub-Task (for `data-product-strategist`)

```toml
+++
# --- MDTM Task Generic ---
id = "TASK-DPSTRAT-20250718-100500" # Example Sub-Task ID for data-product-strategist
title = "Define Product Strategy for 'Customer Retention Analyzer' PoC"
status = "🟡 To Do"
type = "📊 DataProductDesignPhase"
priority = "🟧 High"

created_date = "2025-07-18T10:05:00Z"
updated_date = "2025-07-18T10:05:00Z"
# due_date = ""

assigned_to = "data-product-strategist"
coordinator = "manager-data-product" # Delegated by manager-data-product
parent_task_id = "TASK-MDP-20250718-100000" # Links to the manager's primary task

# --- Task Context & I/O ---
input_artifacts = [
    ".roo/commander/sessions/SESSION-RetentionPoC-20250718-095500/session_log.md", # For overall session context
    # Potentially a path to an initial user brief if captured as a session artifact by roo-commander
    # ".roo/commander/sessions/SESSION-RetentionPoC-20250718-095500/artifacts/notes/NOTE-InitialUserBrief-20250718-095800.md"
]
output_artifacts = [] # To be populated by data-product-strategist with path to product_strategy_v1.md
related_docs = [
    ".roo/commander/templates/design_artifacts/template_product_strategy.md" # Reference to the output template
]
tags = ["mdtm", "data-product-squad", "data-product-strategist", "strategy-phase", "customer-retention-analyzer"]
template_schema_doc = ".roo/commander/templates/tasks/template_00_mdtm_task_generic.README.md"
+++

# Task: Define Product Strategy for 'Customer Retention Analyzer' PoC

## 1. Description ✍️

*   **Goal:** Define the comprehensive product strategy for the "Customer Retention Analyzer" Proof of Concept. This includes clarifying the vision, business objectives, target audience, core value proposition, and strategic alignment.
*   **Context:** This is the first phase in the Data Product PoC design lifecycle, managed by `manager-data-product` (Task ID: `TASK-MDP-20250718-100000`) within session `SESSION-RetentionPoC-20250718-095500`.
*   **Scope:** Focus on all elements required for a complete `product_strategy.md` document, using the standard template (`.roo/commander/templates/design_artifacts/template_product_strategy.md`).

## 2. Acceptance Criteria ✅

*   - [ ] A `product_strategy_v1.md` document is created and saved to `[ActiveSessionPath]/artifacts/design_outputs/CustomerRetentionAnalyzer/product_strategy_v1.md`.
*   - [ ] All sections of the `product_strategy.md` template are thoughtfully completed and internally consistent.
*   - [ ] Key strategic objectives are defined in SMART (Specific, Measurable, Achievable, Relevant, Time-bound) format.
*   - [ ] The target audience and value proposition are clearly articulated.
*   - [ ] This MDTM task's `output_artifacts` field is updated with the path to the created `product_strategy_v1.md`.
*   - [ ] This MDTM task status is updated to "🟢 Done".

## 3. Checklist / Sub-Tasks 📝

*   - [ ] Review `input_artifacts` (session log, initial brief) to understand the high-level PoC goal for "Customer Retention Analyzer".
*   - [ ] If user interaction is required for clarification, formulate questions and request `manager-data-product` to facilitate communication with `roo-commander`/user.
*   - [ ] Draft the **Product Vision** and **Mission**.
*   - [ ] Identify and document the primary **Business Problem** this PoC aims to solve and the **Opportunity** it addresses.
*   - [ ] Define 2-3 **Strategic Objectives (SMART)** for the PoC.
*   - [ ] Define the **Primary Target Audience** and key **Stakeholders**.
*   - [ ] Articulate the **Core Value Proposition**.
*   - [ ] Document the **Strategic Alignment** with broader business goals (if known, or make plausible assumptions).
*   - [ ] Outline high-level **Success Metrics** for the PoC strategy.
*   - [ ] Note any key **Assumptions & Constraints**.
*   - [ ] Compile all information into the `product_strategy_v1.md` document using the standard template.
*   - [ ] Save `product_strategy_v1.md` to `[ActiveSessionPath]/artifacts/design_outputs/CustomerRetentionAnalyzer/product_strategy_v1.md`.
*   - [ ] Update this MDTM task's `output_artifacts` TOML field with the correct path.
*   - [ ] Update this MDTM task's `status` TOML field to "🟢 Done".
*   - [ ] Report completion to `manager-data-product`.

## 4. Log Entries / Notes 🪵
*(data-product-strategist will append its log entries here.)*

*   `[YYYY-MM-DDTHH:MM:SSZ] - data-product-strategist: Task ingested. Reviewing initial PoC goal for 'Customer Retention Analyzer'.`
```

---

## 3. How to Use This Example

*   **For `manager-data-product`:** This illustrates how to structure an MDTM sub-task when delegating the "Strategy Definition" phase to `data-product-strategist`. Pay attention to providing clear inputs, defining the expected output artifact path, and setting a detailed checklist.
*   **For `data-product-strategist`:** This is an example of the type of task you will receive. Focus on understanding the goal, inputs, and following the checklist to produce your `product_strategy.md` deliverable.
*   **For Developers/Users:** Shows the flow of work and information from a Manager to a Squad Member.