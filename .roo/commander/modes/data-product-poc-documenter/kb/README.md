+++
# --- Basic Metadata (Required for KB READMEs) ---
id = "KB-INDEX-DATA-PRODUCT-POC-DOCUMENTER"
title = "Knowledge Base (KB) Index for Data Product PoC Documenter"
context_type = "kb_index"
scope = "Index and overview of the KB for the 'Data Product PoC Documenter' (data-product-poc-documenter) mode."
target_audience = ["data-product-poc-documenter", "developers_maintaining_mode"]
granularity = "overview"
status = "active"
last_updated = "{{YYYYMMDD}}"
version = "1.0"
tags = ["kb", "index", "readme", "data-product-poc-documenter", "squad-member", "documentation", "poc-plan"]
related_context = [
    ".roo/commander/modes/data-product-poc-documenter/data-product-poc-documenter.mode.md",
    ".roo/rules-data-product-poc-documenter/00-data-product-poc-documenter-core-principles.md"
]
template_schema_doc = ".roo/commander/templates/modes/common/kb/template_00_mode_kb_readme.README.md"

# --- KB Specific Fields (Optional) ---
key_reference_document = "kb/reference/00-output-artifact-template-info.md" # Points to template_data_product_poc_plan.md
# key_skill_article = "kb/skills/01-synthesizing-multiple-documents.md"
+++

# Knowledge Base (KB) Index for Data Product PoC Documenter & Planner (📝)

## 1. Purpose of this Knowledge Base

This KB contains guidelines, techniques, and references for the **Data Product PoC Documenter & Planner** (`data-product-poc-documenter`) mode. Its primary function is to consolidate all design artifacts from previous squad members into a comprehensive `data_product_poc_plan.md`. This KB supports the creation of this final deliverable.

## 2. How `data-product-poc-documenter` Uses This KB

The `data-product-poc-documenter` consults this KB, as directed by its Core Principles rule, for:
*   Best practices in technical writing and document consolidation.
*   Guidance on structuring a comprehensive PoC plan.
*   Examples of well-formed PoC plan sections.
*   References to its output template (`template_data_product_poc_plan.md`).

## 3. KB Structure & Key Documents Overview

*   **`README.md` (This file):** Index and overview.

*   **`procedures/` (Optional - Likely minimal):**
    *   Core procedure is largely checklist-driven from its MDTM task (which will be very detailed for this mode, listing each section of the PoC plan to populate).

*   **`reference/` (Recommended):**
    *   **Key File (to be created):**
        *   `reference/00-output-artifact-template-info.md` - Provides a direct reference or link to `template_data_product_poc_plan.md` and highlights its key sections.

*   **`examples/` (Optional):**
    *   `examples/01-sample-poc-plan-executive-summary.md`
    *   `examples/02-sample-poc-roadmap-section.md`

*   **`skills/` (Recommended for development):**
    *   **Key Files (to be created):**
        *   `skills/01-synthesizing-information-from-multiple-sources.md`
        *   `skills/02-structuring-a-comprehensive-poc-plan.md`
        *   `skills/03-writing-clear-executive-summaries-for-technical-plans.md`

*   **`wisdom/` (Optional):**
    *   `wisdom/01-importance-of-traceability-in-final-documentation.md` (linking back to source artifacts).
    *   `wisdom/02-communicating-technical-plans-to-diverse-stakeholders.md`

## 4. Maintaining This KB

Update when new best practices for PoC plan documentation are identified or if the `template_data_product_poc_plan.md` changes significantly.