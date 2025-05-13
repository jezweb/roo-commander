+++
# --- Basic Metadata (Required for KB READMEs) ---
id = "KB-INDEX-MANAGER-DATA-PRODUCT"
title = "Knowledge Base (KB) Index for Manager Data Product"
context_type = "kb_index" # Fixed type for KB README files
scope = "Index and overview of the Knowledge Base for the 'Manager Data Product' (manager-data-product) mode."
target_audience = ["manager-data-product", "developers_maintaining_mode"]
granularity = "overview"
status = "active"
last_updated = "{{YYYYMMDD}}" # Placeholder for date of last update
version = "1.0" # Version of this KB index structure
tags = ["kb", "index", "readme", "manager-data-product", "manager"]
related_context = [
    ".roo/commander/modes/manager-data-product/manager-data-product.mode.md", # Link to the mode definition
    ".roo/rules-manager-data-product/00-manager-data-product-core-principles.md" # Link to its Core Principles & KB Usage rule
]
template_schema_doc = ".roo/commander/templates/modes/kb/template_00_mode_kb_readme.README.md" # Path to its own schema

# --- KB Specific Fields (Optional) ---
primary_operational_procedure = "kb/procedures/01-main-orchestration-flow.md"
key_reference_document = "kb/reference/00-dp-squad-composition.md"
+++

# Knowledge Base (KB) Index for Manager Data Product (🧑‍💼)

## 1. Purpose of this Knowledge Base

This Knowledge Base (KB) contains the specific operational instructions, procedures, and reference materials that the **Manager Data Product** (`manager-data-product`) mode uses to perform its core function: orchestrating the end-to-end design lifecycle for a data product Proof of Concept (PoC) by managing its specialist `data-product-*` squad.

This `README.md` file serves as the primary index and entry point to the contents of this KB.

## 2. How `manager-data-product` Uses This KB

The `manager-data-product` mode is instructed by its system prompt and its Core Principles & KB Usage rule (`.roo/rules-manager-data-product/00-manager-data-product-core-principles.md`) to consult this KB. Typically, it will:

1.  Start by reviewing this `README.md` (this file) to understand the KB's structure and locate key documents.
2.  Access `procedures/01-main-orchestration-flow.md` as its primary guide for executing its assigned MDTM task (i.e., managing the PoC design workflow).
3.  Consult `reference/00-dp-squad-composition.md` to understand its squad members, their roles, and expected outputs.
4.  Utilize other sections (`examples/`, `skills/`, `wisdom/`) as needed for specific aspects of its orchestration task.

## 3. KB Structure & Key Documents Overview

This KB is organized into the following standard subdirectories.

*   **`README.md` (This file):** Index and overview of this Knowledge Base.

*   **`prompts/` (Optional - Not typically used by this Manager for user interaction):**
    *   This Manager primarily receives instructions via its MDTM task. Direct user prompts are rare.

*   **`procedures/` (MANDATORY):**
    *   Contains detailed, step-by-step procedures for this mode's core operational workflows.
    *   **Key File:**
        *   `procedures/01-main-orchestration-flow.md` - **CRITICAL:** Details how `manager-data-product` breaks down its primary MDTM task and sequentially delegates MDTM sub-tasks to its `data-product-*` squad members, managing artifact flow.

*   **`reference/` (MANDATORY):**
    *   Contains reference lists, mappings, or summaries that this mode consults.
    *   **Key File:**
        *   `reference/00-dp-squad-composition.md` - Lists the `data-product-*` squad members, their specific roles in the PoC design lifecycle, and their primary output artifacts.

*   **`examples/` (Highly Recommended):**
    *   This directory should store concrete examples relevant to `manager-data-product`'s operations.
    *   *Potential files:*
        *   `examples/01-sample-input-primary-mdtm-task.md` - An example of the MDTM task it expects from `roo-commander`.
        *   `examples/02-sample-squad-subtask-creation.md` - An example of an MDTM sub-task it creates for a squad member (e.g., for `data-product-strategist`).
        *   `examples/03-example-final-poc-plan-reference.md` - A note describing the structure or linking to an example of the final `data_product_poc_plan.md` it aims to deliver.

*   **`skills/` (Optional - To be developed as needed):**
    *   This directory can store specific techniques related to *managing the data product design workflow* or *coordinating its design squad*.
    *   *Potential files:*
        *   `skills/managing_design_handoffs.md`
        *   `skills/risk_assessment_for_poc_phases.md`

*   **`wisdom/` (Optional - To be developed as needed):**
    *   This directory can store guiding principles or higher-level strategic considerations for *its domain of managing data product PoC design*.
    *   *Potential files:*
        *   `wisdom/iterative_poc_development_principles.md`
        *   `wisdom/balancing_scope_and_innovation_in_pocs.md`

## 4. Maintaining This KB

This KB should be updated whenever:
*   The `manager-data-product`'s core orchestration flow (`procedures/01-main-orchestration-flow.md`) is refined.
*   The composition or roles of the `data-product-*` squad change (update `reference/00-dp-squad-composition.md`).
*   New examples, skills, or wisdom relevant to its management role are codified.
*   This `README.md` file itself should be kept current to accurately reflect the KB's contents.