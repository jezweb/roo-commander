+++
# --- Basic Metadata (Required for KB READMEs) ---
id = "KB-INDEX-DATA-PRODUCT-POC-INTERFACE-ARCHITECT"
title = "Knowledge Base (KB) Index for Data Product PoC Interface Architect"
context_type = "kb_index"
scope = "Index and overview of the KB for the 'Data Product PoC Interface Architect' (data-product-poc-interface-architect) mode."
target_audience = ["data-product-poc-interface-architect", "developers_maintaining_mode"]
granularity = "overview"
status = "active"
last_updated = "{{YYYYMMDD}}"
version = "1.0"
tags = ["kb", "index", "readme", "data-product-poc-interface-architect", "squad-member", "ui-design", "ux"]
related_context = [
    ".roo/commander/modes/data-product-poc-interface-architect/data-product-poc-interface-architect.mode.md",
    ".roo/rules-data-product-poc-interface-architect/00-data-product-poc-interface-architect-core-principles.md"
]
template_schema_doc = ".roo/commander/templates/modes/common/kb/template_00_mode_kb_readme.README.md"

# --- KB Specific Fields (Optional) ---
key_reference_document = "kb/reference/00-output-artifact-template-info.md" # Points to template_poc_interface_design.md
# key_skill_article = "kb/skills/01-low-fidelity-wireframing-techniques.md"
+++

# Knowledge Base (KB) Index for Data Product PoC Interface Architect (🎨)

## 1. Purpose of this Knowledge Base

This KB contains guidelines, techniques, and references for the **Data Product PoC Interface Architect** (`data-product-poc-interface-architect`) mode. Its primary function is to design conceptual user interfaces (UI/UX) for Data Product PoCs, based on personas, PoC scope, and simulated data. This KB supports the creation of its `poc_interface_design.md` deliverable.

## 2. How `data-product-poc-interface-architect` Uses This KB

The `data-product-poc-interface-architect` consults this KB, as directed by its Core Principles rule, for:
*   Best practices in conceptual UI/UX design for data products.
*   Principles of effective data visualization.
*   Techniques for low-fidelity wireframing or describing interface concepts.
*   Examples of interface components or layouts.
*   References to its output template (`template_poc_interface_design.md`).

## 3. KB Structure & Key Documents Overview

*   **`README.md` (This file):** Index and overview.

*   **`procedures/` (Optional - Likely minimal):**
    *   Core procedure is largely checklist-driven from its MDTM task.

*   **`reference/` (Recommended):**
    *   **Key File (to be created):**
        *   `reference/00-output-artifact-template-info.md` - Provides a direct reference or link to `template_poc_interface_design.md`.
        *   `reference/01-common-ui-patterns-for-dashboards.md`

*   **`examples/` (Optional):**
    *   `examples/01-sample-dashboard-layout-description.md`
    *   `examples/02-ascii-wireframe-example.md`

*   **`skills/` (Recommended for development):**
    *   **Key Files (to be created):**
        *   `skills/01-low-fidelity-wireframing-techniques.md` (Textual, Markdown tables, ASCII).
        *   `skills/02-choosing-effective-data-visualizations.md`
        *   `skills/03-designing-user-centric-filters-and-controls.md`

*   **`wisdom/` (Optional):**
    *   `wisdom/01-principles-of-intuitive-navigation-for-data-pocs.md`
    *   `wisdom/02-balancing-information-density-and-clarity.md`

## 4. Maintaining This KB

Update when new UI/UX design techniques for PoCs are adopted or best practices for conceptual data presentation evolve.