+++
# --- Metadata ---
id = "PLAN-KB-ENRICH-PHASE1-V1"
title = "KB Enrichment Plan: Phase 1 - Source Preparation"
status = "draft"
created_date = "2025-04-24"
updated_date = "2025-04-24"
version = "1.0"
tags = ["plan", "kb", "enrichment", "phase1", "preparation", "source-data"]
related_docs = [".ruru/planning/kb-enrichment/00-kb-enrichment-plan.md", "kb_generation_process.md"]
objective = "Ensure the source documentation for a specific library exists in the required structured format (markdown files grouped by topic/page within `kb/[library_name]/`) before AI synthesis begins."
scope = "Verifying or executing the initial structural processing step."
# --- Plan Specific Fields ---
source_script = "create_kb_from_json.js"
source_directory_template = "kb/{library_name}/"
input_data_template = "source_json/{library_name}_llms*.json" # Handles chunks
+++

# KB Enrichment Plan: Phase 1 - Source Preparation

**Objective:** Verify that the raw documentation snippets for the target library have been processed into the intermediate structured format (markdown files per page, organized into categories) located in `kb/[library_name]/`. If not present, run the initial processing script.

**Procedure (for a given `[library_name]`):**

1.  **Check for Existing Processed Files (Coordinator Task):**
    *   Tool: `list_files`
    *   Action: Check if the directory `kb/[library_name]/` exists and contains category subdirectories (e.g., `guide`, `api`) with `.md` files.
    *   If Yes: Proceed to Phase 2 (`02-ai-synthesis.md`).
    *   If No: Proceed to Step 2 below.

2.  **Run Initial Processing Script (Coordinator Task):**
    *   Tool: `execute_command`, `list_files`
    *   Action:
        *   Identify the source JSON file(s) for the library (e.g., `source_json/[library_name]_llms.json` or `source_json/[library_name]_llms_part_*.json`). Use `list_files` to confirm existence. Handle errors if source JSON is missing.
        *   For each source JSON file found: Execute `node [source_script] [path_to_source_json] [library_name]`.
        *   Await completion. Check for errors in `stderr`.
    *   Output: Structured markdown files created in `kb/[library_name]/`.

3.  **Verification (Coordinator Task):**
    *   Tool: `list_files`
    *   Action: Re-verify that the directory `kb/[library_name]/` now contains the expected structure (category folders, `.md` files, `index.json` files).
    *   If Verification Fails: Report error, potentially attempt re-run or diagnose. **Stop.**
    *   If Verification Succeeds: Proceed to Phase 2 (`02-ai-synthesis.md`).

**Completion:** The source documentation is confirmed to be structured in `kb/[library_name]/`, ready for AI synthesis.