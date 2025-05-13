+++
# --- Metadata ---
id = "PLAN-KB-ENRICH-CUSTOM-SYNTH-V1"
title = "Plan: Customizable AI Synthesis Tasks for KB Enrichment"
status = "draft"
created_date = "2025-04-24"
updated_date = "2025-04-24"
version = "1.0"
tags = ["plan", "kb", "enrichment", "synthesis", "customization", "pipeline", "modes"]
related_docs = [
    ".ruru/planning/kb-enrichment/00-kb-enrichment-plan.md", # Parent plan
    ".ruru/planning/kb-enrichment/02-ai-synthesis.md", # The phase using this system
    ".ruru/planning/kb-enrichment/02c-library-type-mapping-plan.md", # Plan for the mapping file
    ".ruru/templates/synthesis-task-sets/README.md" # Template/Standard definition
]
objective = "Define a system where specific sets of AI synthesis tasks can be defined based on library type (e.g., UI framework, backend API, utility), allowing for tailored knowledge base enrichment."
scope = "Describes the components needed: task set definitions, library type mapping, and the updated orchestration logic."
# --- Plan Specific Fields ---
task_set_template_dir = ".ruru/templates/synthesis-task-sets/"
library_type_mapping_file = "scripts/library-types.json"
responsible_coordinator = "roo-commander"
+++

# Plan: Customizable AI Synthesis Task System

**1. Overview**

To improve the relevance and quality of AI-synthesized knowledge base documents, this plan outlines a system for defining **customizable sets of synthesis tasks** based on the *type* of library being processed. Instead of a single, fixed set of synthesis tasks (like 'core concepts', 'api overview'), different types of libraries will have their own tailored list of synthesis goals.

**2. System Components**

*   **Synthesis Task Set Definition Files:**
    *   Location: `[task_set_template_dir]` (e.g., `.ruru/templates/synthesis-task-sets/`)
    *   Format: TOML (`.toml` extension). One file per library type (e.g., `ui-library-tasks.toml`, `backend-framework-tasks.toml`, `generic-tasks.toml`).
    *   Content: Defines the specific synthesis tasks (ID, description, input source categories, output filename, AI prompt focus) relevant for that library type.
    *   Standard: See `[task_set_template_dir]/README.md` for the detailed TOML structure standard.
*   **Library Type Mapping File:**
    *   Location: `[library_type_mapping_file]` (e.g., `scripts/library-types.json`)
    *   Format: JSON object mapping library names (as used in the `kb/` directory structure, e.g., `vuejs-docs`) to a library type string (e.g., `"frontend-framework"`, `"ui-library"`, `"generic"`).
    *   Purpose: Allows the system to determine which Task Set Definition File to use for a given library.
    *   Maintenance: Requires initial population and ongoing updates as new libraries are processed. (See `02c-library-type-mapping-plan.md`).
*   **Updated Orchestration Logic (in Phase 2 Plan):**
    *   The main AI Synthesis plan (`02-ai-synthesis.md`) needs modification.
    *   It will first read the `[library_type_mapping_file]` to find the type for the current library.
    *   It will then construct the path to the correct Task Set Definition File (e.g., `[task_set_template_dir]/[library_type]-tasks.toml`, falling back to `generic-tasks.toml`).
    *   It reads and parses this TOML file to get the specific list of `[[tasks]]` to execute.
    *   The existing loop will then iterate through *this dynamically loaded task list*, delegating each one to `agent-context-synthesizer`.

**3. Benefits**

*   **Tailored Context:** Generates more relevant synthesized documents (e.g., focusing on component props for UI libs, middleware for backend frameworks).
*   **Extensibility:** Easy to add new library types or refine existing task sets by modifying the TOML definition files.
*   **Consistency:** Standardizes how synthesis tasks are defined and executed.
*   **Repeatability:** Ensures the same set of targeted synthesis tasks are run for libraries of the same type.

**4. Next Steps**

1.  Define the standard TOML format for Task Set Definition Files (create `.ruru/templates/synthesis-task-sets/README.md`).
2.  Plan the creation and population of the Library Type Mapping file (create `.ruru/planning/kb-enrichment/02c-library-type-mapping-plan.md`).
3.  Update the AI Synthesis Phase plan (`.ruru/planning/kb-enrichment/02-ai-synthesis.md`) to incorporate reading the mapping and task set files.
4.  Create initial Task Set Definition files for common library types (e.g., `generic-tasks.toml`, `ui-library-tasks.toml`).