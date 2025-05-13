+++
# --- Basic Metadata (Required for KB READMEs) ---
id = "KB-INDEX-DATA-PRODUCT-IDEATOR"
title = "Knowledge Base (KB) Index for Data Product Ideator"
context_type = "kb_index"
scope = "Index and overview of the Knowledge Base for the 'Data Product Ideator' (data-product-ideator) mode."
target_audience = ["data-product-ideator", "developers_maintaining_mode"]
granularity = "overview"
status = "active"
last_updated = "{{YYYYMMDD}}"
version = "1.0"
tags = ["kb", "index", "readme", "data-product-ideator", "squad-member", "ideation"]
related_context = [
    ".roo/commander/modes/data-product-ideator/data-product-ideator.mode.md",
    ".roo/rules-data-product-ideator/00-data-product-ideator-core-principles.md"
]
template_schema_doc = ".roo/commander/templates/modes/common/kb/template_00_mode_kb_readme.README.md"

# --- KB Specific Fields (Optional) ---
key_reference_document = "kb/reference/00-output-artifact-template-info.md"
# key_skill_article = "kb/skills/01-feature-brainstorming-techniques.md"
+++

# Knowledge Base (KB) Index for Data Product Ideator (💡)

## 1. Purpose of this Knowledge Base

This KB contains guidelines, techniques, and references for the **Data Product Ideator** (`data-product-ideator`) mode. Its primary function is to transform a defined product strategy into a concrete Proof of Concept (PoC) scope, including features, high-level requirements, and success metrics. This KB supports the creation of its main deliverable, `poc_ideation.md`.

## 2. How `data-product-ideator` Uses This KB

The `data-product-ideator` consults this KB, as directed by its Core Principles rule, for:
*   Techniques for feature brainstorming and prioritization.
*   Best practices for defining PoC scope effectively.
*   Guidance on outlining conceptual data needs and success metrics.
*   References to its output template (`template_poc_ideation.md`).

## 3. KB Structure & Key Documents Overview

*   **`README.md` (This file):** Index and overview.

*   **`procedures/` (Optional - Likely minimal):**
    *   Core procedure is largely checklist-driven from its MDTM task.

*   **`reference/` (Recommended):**
    *   **Key File (to be created):**
        *   `reference/00-output-artifact-template-info.md` - Points to `template_poc_ideation.md`.

*   **`examples/` (Optional):**
    *   `examples/01-sample-poc_ideation_section.md` - Example of a well-defined feature list or scope statement.

*   **`skills/` (Recommended for development):**
    *   **Key Files (to be created):**
        *   `skills/01-feature-brainstorming-techniques.md` (e.g., User Story Mapping, SCAMPER).
        *   `skills/02-poc-feature-prioritization.md` (e.g., Value vs. Effort, MoSCoW).
        *   `skills/03-defining-clear-poc-scope.md` (Inclusions/Exclusions).

*   **`wisdom/` (Optional):**
    *   `wisdom/01-avoiding-scope-creep-in-pocs.md`
    *   `wisdom/02-linking-poc-features-to-strategic-objectives.md`

## 4. Maintaining This KB

Update when new ideation techniques are adopted or best practices for PoC scoping evolve.