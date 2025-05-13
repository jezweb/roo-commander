+++
# --- Basic Metadata (Required for KB READMEs) ---
id = "KB-INDEX-DATA-PRODUCT-STRATEGIST"
title = "Knowledge Base (KB) Index for Data Product Strategist"
context_type = "kb_index" # Fixed type for KB README files
scope = "Index and overview of the Knowledge Base for the 'Data Product Strategist' (data-product-strategist) mode."
target_audience = ["data-product-strategist", "developers_maintaining_mode"]
granularity = "overview"
status = "active"
last_updated = "{{YYYYMMDD}}" # Placeholder for date of last update
version = "1.0" # Version of this KB index structure
tags = ["kb", "index", "readme", "data-product-strategist", "squad-member", "strategy"]
related_context = [
    ".roo/commander/modes/data-product-strategist/data-product-strategist.mode.md",
    ".roo/rules-data-product-strategist/00-data-product-strategist-core-principles.md" # Its Core Principles & KB Usage rule
]
template_schema_doc = ".roo/commander/templates/modes/common/kb/template_00_mode_kb_readme.README.md"

# --- KB Specific Fields (Optional) ---
# primary_operational_procedure = "" # Squad members primarily follow their MDTM task checklist
key_reference_document = "kb/reference/00-output-artifact-template-info.md" # Example key reference
# key_skill_article = "kb/skills/01-defining-smart-objectives.md" # Example key skill
+++

# Knowledge Base (KB) Index for Data Product Strategist (📊)

## 1. Purpose of this Knowledge Base

This Knowledge Base (KB) contains specific guidelines, reference materials, examples, skills, and wisdom that the **Data Product Strategist** (`data-product-strategist`) mode uses to perform its core function: defining the product strategy for a Data Product Proof of Concept (PoC).

Its primary instructions come from the MDTM task assigned by `manager-data-product`. This KB serves as a repository for supplementary knowledge to enhance the quality and consistency of its `product_strategy.md` deliverable.

This `README.md` file serves as the primary index and entry point to the contents of this KB.

## 2. How `data-product-strategist` Uses This KB

The `data-product-strategist` mode is instructed by its system prompt and its Core Principles & KB Usage rule (`.roo/rules-data-product-strategist/00-data-product-strategist-core-principles.md`) to consult this KB when it needs specific guidance beyond its MDTM task checklist. Typically, it will:

1.  Start by reviewing this `README.md` (this file) if directed to its KB generally.
2.  Access specific files within `reference/`, `skills/`, or `wisdom/` if its MDTM task checklist or internal logic identifies a need for deeper knowledge on a particular aspect of strategy definition.

## 3. KB Structure & Key Documents Overview

This KB is organized into standard subdirectories. Initial population may be minimal.

*   **`README.md` (This file):** Index and overview of this Knowledge Base.

*   **`prompts/` (Optional - Likely not used):**
    *   This mode primarily executes MDTM tasks and formulates clarification questions for its manager if needed, rather than engaging in complex user-facing prompts itself.

*   **`procedures/` (Optional - Likely minimal):**
    *   The core "procedure" for this mode is largely defined by the checklist in its assigned MDTM task.
    *   *Potential future file:* `procedures/01-strategy-document-compilation-steps.md` (if the process of filling its template becomes very complex).

*   **`reference/` (Recommended):**
    *   Contains pointers to key templates or reference data.
    *   **Key File (to be created):**
        *   `reference/00-output-artifact-template-info.md` - Provides a direct reference or link to the `template_product_strategy.md` and highlights key sections the strategist is responsible for.

*   **`examples/` (Optional - To be developed as needed):**
    *   This directory can store concrete examples relevant to strategy definition.
    *   *Potential files:*
        *   `examples/01-sample-product-strategy-section.md` - Example of a well-written "Vision" or "SMART Objectives" section.

*   **`skills/` (Recommended for development):**
    *   Contains specific "how-to" guides for strategic analysis techniques.
    *   **Key Files (to be created):**
        *   `skills/01-defining-smart-objectives.md` - Guide on writing SMART objectives.
        *   `skills/02-crafting-value-propositions.md` - Techniques for articulating a clear value proposition.
        *   `skills/03-target-audience-segmentation-basics.md` - How to think about and define target audiences for a PoC.

*   **`wisdom/` (Optional - To be developed as needed):**
    *   Contains guiding principles for effective product strategy.
    *   *Potential files:*
        *   `wisdom/01-common-pitfalls-in-poc-strategy.md`
        *   `wisdom/02-aligning-poc-strategy-with-business-goals.md`

## 4. Maintaining This KB

This KB should be updated when:
*   New skills or best practices for product strategy definition are identified.
*   The `template_product_strategy.md` (its primary output) undergoes significant changes.
*   This `README.md` file itself should be kept current.