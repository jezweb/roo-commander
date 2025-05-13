+++
# --- Metadata ---
id = "PLAN-KB-ENRICH-PHASE2-V3" # Incremented version
title = "KB Enrichment Plan: Phase 2 - AI Synthesis using Customizable Task Sets (Refined)"
status = "draft"
created_date = "2025-04-24"
updated_date = "2025-04-24"
version = "3.0"
tags = ["plan", "kb", "enrichment", "phase2", "synthesis", "ai", "context-generation", "agent-context-synthesizer", "customizable", "toml"]
related_docs = [
    ".ruru/planning/kb-enrichment/00-kb-enrichment-plan.md",
    ".ruru/planning/kb-enrichment/01-source-preparation.md",
    ".ruru/planning/kb-enrichment/02a-mode-context-synthesizer.md",
    ".ruru/planning/kb-enrichment/02b-customizable-synthesis-plan.md", # Describes this system
    ".ruru/planning/kb-enrichment/02c-library-type-mapping-plan.md", # Describes mapping file
    ".ruru/modes/agent-context-synthesizer/agent-context-synthesizer.mode.md",
    "scripts/library-types.json", # Input mapping file
    ".ruru/templates/synthesis-task-sets/" # Location of task definitions
]
objective = "Define and orchestrate the tasks for `agent-context-synthesizer` to generate synthesized context documents based on prepared source markdown files, using **customizable task sets** defined in TOML files according to library type."
scope = "Defines input file selection logic, delegation message construction based on dynamically loaded task definitions, and output locations for the AI synthesis phase."
# --- Plan Specific Fields ---
synthesizer_mode_slug = "agent-context-synthesizer"
source_directory_template = "kb/{library_name}/" # Where initial structured MD files are
target_directory_template = ".ruru/modes/{mode_slug}/kb/{library_name}/synthesized/" # Where synthesized MD files will be saved
library_type_mapping_file = "scripts/library-types.json"
task_set_template_dir = ".ruru/templates/synthesis-task-sets/"
fallback_task_set_file = "generic-tasks.toml"
+++

# KB Enrichment Plan: Phase 2 - AI Synthesis using Customizable Task Sets (Refined)

**Objective:** Use the `[synthesizer_mode_slug]` (`agent-context-synthesizer`) to process structured markdown files from `[source_directory_template]`. Generate synthesized context documents based on a **dynamically selected set of tasks** defined in TOML files, tailored to the library's type. Save outputs to the target mode's KB directory at `[target_directory_template]`.

**Procedure (for a given `[library_name]` and `[mode_slug]`):**

1.  **Determine Library Type (Coordinator Task):**
    *   **Description:** Find the type classification for the current library.
    *   **Tool:** `read_file`
    *   **Action:**
        *   Read the mapping file: `<read_file><path>[library_type_mapping_file]</path></read_file>`. Handle read/parse errors (log, maybe default to "generic", stop if critical).
        *   Parse the JSON content into `library_type_map`.
        *   Look up the type: `[library_type] = library_type_map[library_name] || "[fallback_task_set_file without .toml]";` (Default to 'generic').
    *   **Output:** `[library_type]` string.

2.  **Load Synthesis Task Set (Coordinator Task):**
    *   **Description:** Read the TOML file defining the synthesis tasks for the determined library type.
    *   **Tool:** `read_file`
    *   **Action:**
        *   Construct the task set file path: `[task_set_file_path] = "[task_set_template_dir]/[library_type]-tasks.toml"`.
        *   Check if this file exists using `<list_files>`.
        *   If it does not exist, construct the fallback path: `[task_set_file_path] = "[task_set_template_dir]/[fallback_task_set_file]"`. Log a warning that fallback is being used. Check if *this* exists; stop if even the generic fallback is missing.
        *   Read the selected task set file: `<read_file><path>[task_set_file_path]</path></read_file>`. Handle read errors (log, stop).
        *   **Parse the TOML content:** Use a reliable TOML parser. Store the parsed data, specifically the `[[tasks]]` array, as `[synthesis_tasks_list]`. Handle TOML parsing errors (log, stop). Validate that `[[tasks]]` exists and is an array.
    *   **Output:** `[synthesis_tasks_list]` array containing task definition objects.

3.  **Prepare Target Directory (Coordinator Task):**
    *   **Description:** Ensure the output directory for synthesized files exists.
    *   **Tool:** `execute_command`
    *   **Action:** Execute `mkdir -p "[target_directory_template]"` (Handle path quoting; Check OS Rule 05). Handle errors. Log action (Rule `08`).

4.  **Execute Synthesis Tasks (Coordinator Task - Looping through `[synthesis_tasks_list]`):**
    *   **Description:** Iterate through the dynamically loaded tasks and delegate each one to the synthesizer mode.
    *   For each `task` object in `[synthesis_tasks_list]`:
        *   **A. Identify Input Files:**
            *   Tool: `list_files`
            *   Action:
                *   Initialize `[Input File List] = []`.
                *   For each `category` string in `task.input_categories`:
                    *   Construct path: `[Category Path]` = `[source_directory_template]/[category]/`.
                    *   Use `<list_files><path>[Category Path]</path><recursive>false</recursive></list_files>` to get `.md` files. Handle errors gracefully (log warning, continue).
                    *   Append full paths of found `.md` files to `[Input File List]`.
                *   If `[Input File List]` is empty, log warning: "Skipping synthesis task '[task.task_id]' for [library_name] as no input files were found in categories: [task.input_categories.join(', ')]". **Continue to the next task in the loop.**
        *   **B. Delegate Synthesis Task:**
            *   Tool: `new_task`
            *   Mode: `[synthesizer_mode_slug]`
            *   Message Construction:
                *   `[Output File Path]` = `[target_directory_template]/[task.output_filename]`
                *   Generate the delegation message using data from the current `task` object:
                    ```xml
                    <new_task>
                      <mode>[synthesizer_mode_slug]</mode>
                      <message>
                      🧠 Synthesize KB Context:
                      Task ID: [task.task_id]
                      Task Description: [task.description]
                      Library: [library_name]
                      Target Mode: [mode_slug]
                      Output File Path: [Output File Path]
                      Input File Paths:
                      [List each path from [Input File List] on a new line]

                      Synthesis Instructions (Focus): [task.prompt_focus]

                      Please read the input files, generate the synthesized Markdown content with appropriate TOML frontmatter (title, summary, tags) according to the focus instructions, and write the result to the output file path. Report success or failure.
                      </message>
                    </new_task>
                    ```
            *   Action: Delegate the task. Log delegation (Rule `08`), including the `task.task_id`. Await completion (`attempt_completion`).
            *   Error Handling: If `agent-context-synthesizer` reports failure for a specific task, log the error details (including `task.task_id`). Decide whether to continue with the next task or stop the entire phase (potentially configurable). If `new_task` itself fails, log and report error.

**Completion:** All defined synthesis tasks from the selected TOML task set file have been attempted. Synthesized `.md` files should exist in `[target_directory_template]`. Proceed to Phase 3 (`03-kb-organization-indexing.md`).