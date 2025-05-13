+++
# --- Metadata ---
id = "STRAT-MODE-KB-ENRICH-PHASE2-V1" # Updated ID for strategy set
title = "KB Enrichment Strategy: Phase 2 - AI Synthesis (Customizable Tasks)" # Updated Title
status = "draft"
created_date = "2025-04-25" # Set to current date
updated_date = "2025-04-25" # Set to current date
version = "1.0" # Version for this strategy document
tags = ["strategy", "kb-enrichment", "phase2", "synthesis", "ai", "context-generation", "customizable", "toml", "workflow-step"]
related_docs = [
    ".ruru/planning/mode-kb-enrichment-strategy/00-strategy-overview.md",
    ".ruru/planning/mode-kb-enrichment-strategy/WF-MODE-KB-ENRICHMENT-001.md", # Link to main workflow
    ".ruru/planning/kb-enrichment/02a-mode-context-synthesizer.md", # Plan for the agent
    ".ruru/planning/kb-enrichment/02b-customizable-synthesis-plan.md", # Plan for this customizable system
    ".ruru/planning/kb-enrichment/02c-library-type-mapping-plan.md", # Plan for the mapping file
    "scripts/library-types.json", # The mapping file itself
    ".ruru/templates/synthesis-task-sets/README.md" # Standard for task sets
]
objective = "Define the procedure for generating AI-synthesized context documents using customizable task sets based on library type, corresponding to Steps 2-5 of the main enrichment workflow."
scope = "Details the steps for determining library type, loading the appropriate TOML task set, preparing the output directory, and orchestrating the delegation of synthesis tasks to `agent-context-synthesizer`."
# --- Plan Specific Fields ---
synthesizer_mode_slug = "agent-context-synthesizer"
source_directory_template = "kb/{library_name}/" # Where initial structured MD files are
target_directory_template = ".ruru/modes/{mode_slug}/kb/{library_name}/synthesized/" # Where synthesized MD files will be saved
library_type_mapping_file = "scripts/library-types.json"
task_set_template_dir = ".ruru/templates/synthesis-task-sets/"
fallback_task_set_file = "generic-tasks.toml"
+++

# KB Enrichment Strategy: Phase 2 - AI Synthesis (Customizable Tasks)

**Objective:** Use the `[synthesizer_mode_slug]` (`agent-context-synthesizer`) to process structured markdown files from `[source_directory_template]`. Generate synthesized context documents based on a **dynamically selected set of tasks** defined in TOML files, tailored to the library's type. Save outputs to the target mode's KB directory at `[target_directory_template]`. This corresponds to **Steps 2-5** in the main workflow document (`WF-MODE-KB-ENRICHMENT-001.md`).

**Procedure (Executed by `roo-commander` for a given `[library_name]` and `[mode_slug]`):**

1.  **Determine Library Type (Workflow Step 2):**
    *   **Description:** Find the type classification for the current library (`[library_name]`).
    *   **Tool:** `read_file`
    *   **Action:**
        *   Read the mapping file: `<read_file><path>[library_type_mapping_file]</path></read_file>`. Handle read/parse errors (Log, default to "generic", **Stop** if critical).
        *   Parse the JSON content into `library_type_map`.
        *   Look up the type: `[library_type] = library_type_map[library_name] || "generic";`.
    *   **Output:** `[library_type]` string.

2.  **Load Synthesis Task Set (Workflow Step 3):**
    *   **Description:** Read the TOML file defining the synthesis tasks for the determined `[library_type]`.
    *   **Tool:** `read_file`, `list_files`
    *   **Action:**
        *   Construct the task set file path: `[task_set_file_path] = "[task_set_template_dir]/[library_type]-tasks.toml"`.
        *   Check if this file exists using `<list_files>`.
        *   If it does not exist, construct the fallback path: `[task_set_file_path] = "[task_set_template_dir]/[fallback_task_set_file]"`. Log a warning that fallback is being used. Check if *this* exists; **Stop** if even the generic fallback is missing.
        *   Read the selected task set file: `<read_file><path>[task_set_file_path]</path></read_file>`. Handle read errors (Log, **Stop**).
        *   Parse the TOML content. Store the `[[tasks]]` array as `[synthesis_tasks_list]`. Handle TOML parsing errors (Log, **Stop**). Validate that `[[tasks]]` exists and is an array.
    *   **Output:** `[synthesis_tasks_list]` array containing task definition objects.

3.  **Prepare Target Directory (Workflow Step 4):**
    *   **Description:** Ensure the output directory for synthesized files exists.
    *   **Tool:** `execute_command`
    *   **Action:** Execute `mkdir -p "[target_directory_template]"` (substituting `[mode_slug]` and `[library_name]`). Handle errors. Log action.
    *   **Output:** Target directory exists.

4.  **Execute Synthesis Tasks (Workflow Step 5 - Loop):**
    *   **Description:** Iterate through the dynamically loaded tasks and delegate each one to the synthesizer mode.
    *   **Procedure:** For each `task` object in `[synthesis_tasks_list]`:
        *   **A. Identify Input Files:**
            *   Tool: `list_files`
            *   Action:
                *   Initialize `[Input File List] = []`.
                *   For each `category` string in `task.input_categories`:
                    *   Construct path: `[Category Path]` = `[source_directory_template]/[category]/` (substituting `[library_name]`).
                    *   Use `<list_files><path>[Category Path]</path><recursive>false</recursive></list_files>` to get `.md` files. Handle errors gracefully (log warning, continue).
                    *   Append full paths of found `.md` files to `[Input File List]`.
                *   If `[Input File List]` is empty, log warning: "Skipping synthesis task '[task.task_id]' for [library_name] as no input files were found in categories: [task.input_categories.join(', ')]". **Continue to the next task in the loop.**
        *   **B. Delegate Synthesis Task:**
            *   Tool: `new_task`
            *   Mode: `[synthesizer_mode_slug]`
            *   Message Construction:
                *   `[Output File Path]` = `[target_directory_template]/[task.output_filename]` (substituting variables).
                *   Generate the delegation message using data from the current `task` object (Task ID, Description, Library, Target Mode, Output Path, Input Paths, Prompt Focus). See `WF-MODE-KB-ENRICHMENT-001.md` Step 5.B for the detailed message structure.
            *   Action: Delegate the task using `new_task`. Log delegation (Rule `08`), including the `task.task_id`. Await completion (`attempt_completion`).
            *   Error Handling: If `agent-context-synthesizer` reports failure, log the error details (including `task.task_id`). Decide whether to continue or **Stop**. If `new_task` itself fails, log and **Stop**.

**Completion:** All defined synthesis tasks from the selected TOML task set file have been attempted. Synthesized `.md` files should exist in `[target_directory_template]`. Proceed to Phase 3 (Organization & Indexing - Step 7 in the main workflow, following the validation step).