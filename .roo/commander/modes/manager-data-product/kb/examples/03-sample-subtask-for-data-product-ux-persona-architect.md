+++
# --- KB Example Metadata (Required for all KB Example Files) ---
id = "KB-EX-MDP-SUBTASK-DPUXPA-V1" # MDP for Manager Data Product, DPUXPA for Data Product UX Persona Architect
title = "Example: MDTM Sub-Task for Data Product UX Persona Architect (from Manager Data Product)"
context_type = "kb_example"
scope = "Illustrates a typical MDTM sub-task created by manager-data-product and assigned to data-product-ux-persona-architect for the 'UX Persona Development' phase."
target_audience = ["manager-data-product", "data-product-ux-persona-architect", "developers_maintaining_mode"]
granularity = "specific_instance"
status = "active"
last_updated = "{{YYYYMMDD}}"
version = "1.0"
tags = ["kb", "example", "manager-data-product", "data-product-ux-persona-architect", "mdtm-task", "subtask-example", "persona-development", "ux"]
related_context = [
    ".roo/commander/templates/tasks/template_00_mdtm_task_generic.md", # The template this example is an instance of
    ".roo/commander/modes/manager-data-product/manager-data-product.mode.md",
    ".roo/commander/modes/data-product-ux-persona-architect/data-product-ux-persona-architect.mode.md",
    ".roo/commander/templates/design_artifacts/template_user_persona.md" # The output template for the persona architect
]
template_schema_doc = ".roo/commander/templates/modes/common/kb/examples/template_00_kb_example_file.README.md"

# --- Example Specific Fields ---
illustrates_artifact_type = "MDTM Sub-Task (for Squad Member)"
scenario_description = "Sub-task for data-product-ux-persona-architect to develop user personas for the 'Customer Retention Analyzer' PoC, based on the strategy and PoC ideation."
source_for_example_content = "Based on template_00_mdtm_task_generic.md"
key_takeaway_from_example = "Shows delegation of persona development, providing strategy and ideation as inputs, and expecting one or more persona documents as outputs."
+++

# Example: MDTM Sub-Task for Data Product UX Persona Architect

## 1. Purpose of this Example

This document provides a concrete example of a typical MDTM (Markdown-Driven Task Management) sub-task that the **`manager-data-product`** mode would create and assign to the **`data-product-ux-persona-architect`** mode. This sub-task covers the "UX Persona Development" phase of designing a Data Product PoC.

It illustrates:
*   How outputs from previous phases (`product_strategy_v1.md`, `poc_ideation_v1.md`) serve as inputs.
*   The expectation of one or more `persona_*.md` documents as outputs.
*   A detailed checklist guiding the `data-product-ux-persona-architect`.

## 2. Example Content

---
### Illustrative Instance of: MDTM Sub-Task (for `data-product-ux-persona-architect`)

```toml
+++
# --- MDTM Task Generic ---
id = "TASK-DPUXPA-20250718-120000" # Example Sub-Task ID
title = "Develop User Personas for 'Customer Retention Analyzer' PoC"
status = "🟡 To Do"
type = "📊 DataProductDesignPhase"
priority = "🟧 High"

created_date = "2025-07-18T12:00:00Z"
updated_date = "2025-07-18T12:00:00Z"
# due_date = ""

assigned_to = "data-product-ux-persona-architect"
coordinator = "manager-data-product"
parent_task_id = "TASK-MDP-20250718-100000" # Links to the manager's primary task

# --- Task Context & I/O ---
input_artifacts = [
    "[ActiveSessionPath]/artifacts/design_outputs/CustomerRetentionAnalyzer/product_strategy_v1.md",
    "[ActiveSessionPath]/artifacts/design_outputs/CustomerRetentionAnalyzer/poc_ideation_v1.md"
]
output_artifacts = [] # To be populated by assignee with paths to persona_*.md files
related_docs = [
    ".roo/commander/templates/design_artifacts/template_user_persona.md" # Reference to the output template
]
tags = ["mdtm", "data-product-squad", "data-product-ux-persona-architect", "persona-development", "ux", "customer-retention-analyzer"]
template_schema_doc = ".roo/commander/templates/tasks/template_00_mdtm_task_generic.README.md"
+++

# Task: Develop User Personas for 'Customer Retention Analyzer' PoC

## 1. Description ✍️

*   **Goal:** Based on the Product Strategy and PoC Ideation documents, develop 1-2 detailed key user personas who would interact with or benefit from the "Customer Retention Analyzer" PoC.
*   **Context:** This is Phase 3 of the Data Product PoC design. Inputs are `product_strategy_v1.md` and `poc_ideation_v1.md`.
*   **Scope:** Focus on creating comprehensive persona documents using the standard template (`.roo/commander/templates/design_artifacts/template_user_persona.md`), covering goals, motivations, pain points, needs, and a typical interaction journey related to the PoC.

## 2. Acceptance Criteria ✅

*   - [ ] At least one, preferably two, detailed `persona_[RoleName]_v1.md` documents are created and saved to `[ActiveSessionPath]/artifacts/design_outputs/CustomerRetentionAnalyzer/`.
*   - [ ] Each persona document is well-developed, addressing all sections of the `template_user_persona.md`.
*   - [ ] Personas are directly relevant to the target audience and features outlined in the input strategy and ideation documents.
*   - [ ] This MDTM task's `output_artifacts` field is updated with the paths to all created `persona_*.md` files.
*   - [ ] This MDTM task status is updated to "🟢 Done".

## 3. Checklist / Sub-Tasks 📝

*   - [ ] Thoroughly review `product_strategy_v1.md` to understand the target audience and strategic goals.
*   - [ ] Thoroughly review `poc_ideation_v1.md` to understand the PoC features and scope.
*   - [ ] Identify 1-2 primary user archetypes for the "Customer Retention Analyzer" PoC based on the inputs. (e.g., "Marketing Analyst", "Customer Success Manager").
*   - [ ] For each identified archetype:
    *   - [ ] Draft Persona 1: `persona_[RoleName1]_v1.md` using `template_user_persona.md`.
        *   - [ ] Define Name, Role, Background.
        *   - [ ] Articulate Primary Goals & Motivations related to the PoC.
        *   - [ ] Identify current Pain Points & Frustrations the PoC could address.
        *   - [ ] List specific Needs & Expectations from the PoC.
        *   - [ ] Describe a Typical Data Interaction Journey / Scenario with PoC features.
        *   - [ ] Summarize how the PoC will help this persona.
    *   - [ ] (If applicable) Draft Persona 2: `persona_[RoleName2]_v1.md` following the same steps.
*   - [ ] Save all created `persona_*.md` files to `[ActiveSessionPath]/artifacts/design_outputs/CustomerRetentionAnalyzer/`.
*   - [ ] Update this MDTM task's `output_artifacts` TOML field with the paths to all created persona files.
*   - [ ] Update this MDTM task's `status` TOML field to "🟢 Done".
*   - [ ] Report completion to `manager-data-product`.

## 4. Log Entries / Notes 🪵
*(data-product-ux-persona-architect will append its log entries here.)*

*   `[YYYY-MM-DDTHH:MM:SSZ] - data-product-ux-persona-architect: Task ingested. Reviewing strategy and ideation documents for persona development.`
```

---

## 3. How to Use This Example

*   **For `manager-data-product`:** This illustrates how to structure the MDTM sub-task for `data-product-ux-persona-architect`, providing the necessary strategic and PoC context as inputs.
*   **For `data-product-ux-persona-architect`:** This is an example of the task you will receive. Your focus is on deeply understanding the target users and translating that into detailed persona documents.
*   **For Developers/Users:** Shows the progression of the design workflow and how personas are built upon earlier phases.