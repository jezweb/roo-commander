+++
# --- Metadata ---
id = "STRAT-MODE-KB-ENRICH-PHASE1-V1" # Updated ID for strategy set
title = "KB Enrichment Strategy: Phase 1 - Source Preparation" # Updated Title
status = "draft"
created_date = "2025-04-25" # Set to current date
updated_date = "2025-04-25" # Set to current date
version = "1.0"
tags = ["strategy", "kb-enrichment", "phase1", "preparation", "source-data", "workflow-step"]
related_docs = [
    ".ruru/planning/mode-kb-enrichment-strategy/00-strategy-overview.md",
    ".ruru/planning/mode-kb-enrichment-strategy/WF-MODE-KB-ENRICHMENT-001.md", # Link to main workflow
    "kb_generation_process.md" # Reference to the script's origin if needed
]
objective = "Ensure the source documentation for a specific library exists in the required structured format (markdown files grouped by topic/page within `kb/[library_name]/`) before AI synthesis begins."
scope = "Details the procedure for verifying or executing the initial structural processing step, corresponding to Step 1 of the main enrichment workflow (WF-MODE-KB-ENRICHMENT-001)."
# --- Plan Specific Fields ---
source_script = "create_kb_from_json.js"
source_directory_template = "kb/{library_name}/"
input_data_template = "source_json/{library_name}_llms*.json" # Handles chunks
+++

# KB Enrichment Strategy: Phase 1 - Source Preparation

**Objective:** Verify that the raw documentation snippets for the target library (`[library_name]`) have been processed into the intermediate structured format (markdown files per page, organized into categories) located in `kb/[library_name]/`. If not present, run the initial processing script. This corresponds to **Step 1** in the main workflow document (`WF-MODE-KB-ENRICHMENT-001.md`).

**Procedure (Executed by `roo-commander` for a given `[library_name]`):**

1.  **Check for Existing Processed Files:**
    *   **Tool:** `list_files`
    *   **Action:** Check if the directory `kb/[library_name]/` exists and contains category subdirectories (e.g., `guide`, `api`) with `.md` files.
    *   **Decision:**
        *   If Yes: Proceed to Phase 2 (AI Synthesis - Step 2 in the main workflow).
        *   If No: Proceed to Step 2 below.

2.  **Run Initial Processing Script:**
    *   **Tools:** `list_files`, `execute_command`
    *   **Action:**
        *   Identify the source JSON file(s) for the library (e.g., `source_json/[library_name]_llms.json` or `source_json/[library_name]_llms_part_*.json`). Use `list_files` to confirm existence. Handle errors if source JSON is missing (Log, **Stop**).
        *   For each source JSON file found: Execute `node [source_script] [path_to_source_json] [library_name]` using `execute_command`.
        *   Await completion. Check for errors in `stderr`. Handle script execution errors (Log, **Stop**).
    *   **Output:** Structured markdown files created in `kb/[library_name]/`.

3.  **Verification:**
    *   **Tool:** `list_files`
    *   **Action:** Re-verify that the directory `kb/[library_name]/` now contains the expected structure (category folders, `.md` files, `index.json` files).
    *   **Decision:**
        *   If Verification Fails: Report error, potentially attempt re-run or diagnose. **Stop.**
        *   If Verification Succeeds: Proceed to Phase 2 (AI Synthesis - Step 2 in the main workflow).

**Completion:** The source documentation is confirmed to be structured in `kb/[library_name]/`, ready for the AI synthesis phase.