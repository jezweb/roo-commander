+++
# --- Basic Metadata (Required for KB READMEs) ---
id = "KB-INDEX-DATA-PRODUCT-SIMDATA-DESIGNER"
title = "Knowledge Base (KB) Index for Data Product Simulated Data Designer"
context_type = "kb_index"
scope = "Index and overview of the KB for the 'Data Product Simulated Data Designer' (data-product-simdata-designer) mode."
target_audience = ["data-product-simdata-designer", "developers_maintaining_mode"]
granularity = "overview"
status = "active"
last_updated = "{{YYYYMMDD}}"
version = "1.0"
tags = ["kb", "index", "readme", "data-product-simdata-designer", "squad-member", "data-simulation", "schema"]
related_context = [
    ".roo/commander/modes/data-product-simdata-designer/data-product-simdata-designer.mode.md",
    ".roo/rules-data-product-simdata-designer/00-data-product-simdata-designer-core-principles.md"
]
template_schema_doc = ".roo/commander/templates/modes/common/kb/template_00_mode_kb_readme.README.md"

# --- KB Specific Fields (Optional) ---
key_reference_document = "kb/reference/00-output-artifact-template-info.md" # Points to template_simulated_data_schema.md
# key_skill_article = "kb/skills/01-generating-plausible-test-data.md"
+++

# Knowledge Base (KB) Index for Data Product Simulated Data Designer (🔧)

## 1. Purpose of this Knowledge Base

This KB contains guidelines, techniques, and references for the **Data Product Simulated Data Designer** (`data-product-simdata-designer`) mode. Its primary function is to define data schemas and generate/describe realistic (but fictional) sample datasets for Data Product PoCs, based on inputs like PoC ideation and user personas. This KB supports the creation of its `simulated_data_schema.md` and sample data deliverables.

## 2. How `data-product-simdata-designer` Uses This KB

The `data-product-simdata-designer` consults this KB, as directed by its Core Principles rule, for:
*   Best practices in data schema design for PoCs.
*   Techniques for generating plausible and relevant simulated data.
*   Examples of data schemas or sample data structures.
*   References to its output template (`template_simulated_data_schema.md`).

## 3. KB Structure & Key Documents Overview

*   **`README.md` (This file):** Index and overview.

*   **`procedures/` (Optional - Likely minimal):**
    *   Core procedure is largely checklist-driven from its MDTM task.

*   **`reference/` (Recommended):**
    *   **Key File (to be created):**
        *   `reference/00-output-artifact-template-info.md` - Provides a direct reference or link to `template_simulated_data_schema.md`.
        *   `reference/01-common-data-types-for-simulation.md` - List of common data types and considerations for simulating them.

*   **`examples/` (Optional):**
    *   `examples/01-sample-schema-for-customer-data.md`
    *   `examples/02-sample-python-script-for-data-generation.py` (if applicable)

*   **`skills/` (Recommended for development):**
    *   **Key Files (to be created):**
        *   `skills/01-designing-effective-poc-data-schemas.md`
        *   `skills/02-techniques-for-generating-plausible-fictional-data.md` (e.g., using ranges, distributions, controlled randomness).
        *   `skills/03-simulating-data-patterns-for-specific-use-cases.md` (e.g., how to create data that shows churn).

*   **`wisdom/` (Optional):**
    *   `wisdom/01-importance-of-data-relevance-to-personas.md`
    *   `wisdom/02-balancing-realism-vs-simplicity-in-poc-data.md`

## 4. Maintaining This KB

Update when new data simulation techniques are adopted or best practices for PoC data design evolve.