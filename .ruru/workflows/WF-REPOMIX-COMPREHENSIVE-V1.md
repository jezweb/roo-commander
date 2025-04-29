+++
# --- Basic Metadata ---
id = "WF-REPOMIX-COMPREHENSIVE-V1"               # << WORKFLOW-SCOPE-NNN >>
title = "Workflow: Comprehensive Repomix Generation"            # << Human-readable title of the Workflow/SOP >>
status = "draft"      # << draft, active, deprecated, under-review >>
created_date = "2025-04-29"     # << YYYY-MM-DD >>
updated_date = "2025-04-29"     # << YYYY-MM-DD >>  # Updated
version = "1.2"       # << Workflow document version >> # Updated
tags = ["workflow", "repomix", "generation", "analysis", "documentation", "sop", "interactive"] # << Keywords >>

# --- Ownership & Context ---
owner = "prime-coordinator" # Or relevant Lead Agent
related_docs = [
    ".ruru/modes/mode-spec-repomix/kb/01-repomix-procedures.md",
    ".roo/rules-MODE-SPEC-REPOMIX/01-repomix-workflow.md"
    ]     # << Paths/URLs to essential specs, guides, PAL doc >>
related_templates = [".ruru/templates/workflows/00_workflow_boilerplate.md"] # << Paths to data templates used/produced >>

# --- Workflow Specific Fields ---
objective = "Standard workflow for performing a comprehensive Repomix analysis on specified sources, including cloning, configuration confirmation, execution, optional artifact archiving, and cleanup." # << REQUIRED: Goal of this workflow >>
scope = "Applies when the Repomix Specialist (MODE-SPEC-REPOMIX) needs to generate comprehensive, chunked documentation from local or remote sources, involving user confirmation for chunking strategy."     # << REQUIRED: Applicability and boundaries >>
roles = ["MODE-SPEC-REPOMIX", "prime-coordinator", "user"]     # << REQUIRED: List agent roles involved >>
trigger = "Delegation from prime-coordinator (or other lead) to MODE-SPEC-REPOMIX, requesting comprehensive Repomix generation."   # << How is this workflow typically initiated? >>
success_criteria = [
    "User provides source paths/URLs.", # Added
    "User confirms task name.", # Added
    "User confirms chunking strategy.",
    "Repomix execution completes successfully.",
    "Output files (single MD/XML, chunked MD/XML) are generated in the designated task directory.",
    "README.md summarizing the process is created.",
    "Temporary clone (if used) is removed.",
    "User is prompted regarding artifact archiving.",
    "Completion reported to coordinator with path to README.md."
    ] # << Measurable conditions for successful completion >>
failure_criteria = [
    "User interaction for source paths fails.", # Added
    "User interaction for task name fails.", # Added
    "User interaction for chunking strategy fails.",
    "Git clone fails.",
    "config.repomix.json generation fails.",
    "repomix command execution fails.",
    "Output files are missing or corrupted.",
    "Cleanup fails.",
    "Artifact archiving fails (if requested)."
    ] # << Conditions indicating workflow failure >>

# --- Integration ---
acqa_applicable = true # Does the ACQA process apply to steps in this workflow?
pal_validated = false # Has this workflow been validated using PAL?
validation_notes = "" # Link to PAL validation records/notes

# --- AI Interaction Hints (Optional) ---
# context_type = "workflow_definition"
+++

# Workflow: Comprehensive Repomix Generation

## 1. Objective 🎯
*   To provide a standard, repeatable procedure for generating comprehensive, chunked documentation context from specified source code repositories or local paths using the `repomix` tool. This includes gathering inputs interactively, handling remote repositories via cloning, confirming the chunking strategy with the user, configuring the tool, executing it, generating a summary README, optionally archiving artifacts, and cleaning up temporary files.

## 2. Scope ↔️
*   This workflow applies when the Repomix Specialist (`MODE-SPEC-REPOMIX`) is tasked with performing a "Comprehensive Generation" as defined in its rules.
*   It covers tasks involving both local workspace paths and remote Git repositories as sources.
*   It mandates the creation of both single combined outputs (MD, XML) and chunked outputs (MD, XML), along with code compression.
*   It includes interactive steps for gathering sources, confirming the task name, confirming the chunking strategy, and optional artifact archiving.

## 3. Roles & Responsibilities 👤
*   **`prime-coordinator` (or other initiating Lead/Manager):**
    *   Initiates the workflow by delegating the task to `MODE-SPEC-REPOMIX`.
    *   Receives the final completion report and path to the results.
*   **`MODE-SPEC-REPOMIX` (Repomix Specialist):**
    *   Executes the core steps of the workflow.
    *   Interacts with the user to gather source paths.
    *   Analyzes sources and suggests task names.
    *   Interacts with the user to confirm the task name.
    *   Determines paths and names based on confirmed inputs.
    *   Performs Git cloning if required.
    *   Analyzes sources and proposes chunking strategies.
    *   Interacts with the user to confirm the chunking strategy.
    *   Generates the `config.repomix.json`.
    *   Executes the `repomix` command.
    *   Generates the summary `README.md`.
    *   Performs cleanup.
    *   Interacts with the user regarding artifact archiving.
    *   Reports completion or errors back to the initiator.
*   **`user`:**
    *   Provides the source paths/URLs when prompted.
    *   Selects or provides the task name when prompted.
    *   Selects the desired chunking strategy when prompted.
    *   Decides whether to archive generated artifacts when prompted.

## 4. Preconditions🚦
*   The initiating agent (`prime-coordinator`) has delegated the task to `MODE-SPEC-REPOMIX`.
*   The `MODE-SPEC-REPOMIX` agent has access to the necessary tools: `execute_command` (with `git`, `mkdir`, `rm`, `cp`), `write_to_file`, `ask_followup_question`, and `attempt_completion`.
*   The `repomix` command-line tool is installed and accessible in the execution environment.
*   The user is available to respond to prompts regarding source paths, task name, chunking strategy, and artifact archiving.

## 5. Reference Documents & Tools 📚🛠️
*   **Source Procedure:** `.ruru/modes/mode-spec-repomix/kb/01-repomix-procedures.md` (Section 1)
*   **Governing Rule:** `.roo/rules-MODE-SPEC-REPOMIX/01-repomix-workflow.md`
*   **Workflow Template:** `.ruru/templates/workflows/00_workflow_boilerplate.md`
*   **OS Command Rules:** `.roo/rules/05-os-aware-commands.md`
*   **Logging Rules:** `.roo/rules/08-logging-procedure-simplified.md`
*   **Tools:**
    *   `execute_command`: For `mkdir`, `git clone`, `rm -rf`, `cp`, `repomix`.
    *   `write_to_file`: For creating `config.repomix.json` and `README.md`.
    *   `ask_followup_question`: For user interaction on sources, task name, chunking, and archiving.
    *   `attempt_completion`: For reporting results to the coordinator.

## 6. Workflow Steps 🪜

*Note: The following steps are primarily executed by the `MODE-SPEC-REPOMIX` agent upon receiving the task delegation, with user interaction where noted.*

*   **Step 1: Gather Sources (MODE-SPEC-REPOMIX, User)**
    *   **Description:** Obtain the list of source paths or Git URLs from the user.
    *   **Inputs:** User request/delegation message.
    *   **Procedure:**
        1.  Use `ask_followup_question` to prompt the user for the source paths.
            *   **Question:** "Please provide the source paths or Git URLs for Repomix analysis (comma-separated if multiple)."
            *   **Suggestions:**
                *   "./src"
                *   "https://github.com/example/repo.git"
                *   "./project-a/src, ./project-b/lib"
                *   "Enter custom path(s)/URL(s)..."
        2.  Receive and store the user's provided source list `[source_list]`.
    *   **Outputs:** `[source_list]` (list of strings).
    *   **Error Handling:** If user interaction fails, report blockage to coordinator.

*   **Step 2: Determine & Confirm Task Name (MODE-SPEC-REPOMIX, User)**
    *   **Description:** Generate task name suggestions based on sources and confirm with the user.
    *   **Inputs:** `[source_list]` (from Step 1).
    *   **Procedure:**
        1.  Analyze the `[source_list]` (e.g., repository names, directory names).
        2.  Generate 2-3 concise, filesystem-safe task name suggestions (e.g., `repo_analysis`, `src_docs`, `multi_source_context`).
        3.  Use `ask_followup_question` to present suggestions and allow custom input:
            *   **Question:** "Please select or provide a task name for this Repomix run:"
            *   **Suggestions:**
                *   "[Suggestion 1]"
                *   "[Suggestion 2]"
                *   "[Suggestion 3]"
                *   "Enter a custom task name..."
        4.  Receive the user's selection or custom input. Store the confirmed name as `[task_name]`.
    *   **Outputs:** User-confirmed `[task_name]` string.
    *   **Error Handling:** If user interaction fails, report blockage to coordinator.

*   **Step 3: Prepare Task Directory (MODE-SPEC-REPOMIX)**
    *   **Description:** Create the main directory for this task's outputs and temporary files, incorporating the confirmed task name and a timestamp.
    *   **Inputs:** `[task_name]` (from Step 2).
    *   **Procedure:**
        1.  Generate a current timestamp `[timestamp]` (e.g., `YYYYMMDDHHMMSS`).
        2.  Construct the task directory path: `[task_directory] = .ruru/docs/repomix/[task_name]-[timestamp]/`.
        3.  Use `execute_command` to create the directory: `mkdir -p [task_directory]`. Verify OS-specific syntax if necessary (though `mkdir -p` is common).
        4.  Define the temporary clone path: `[temp_clone_path] = [task_directory]/temp_clone/`.
    *   **Outputs:** Created `[task_directory]`. Defined `[temp_clone_path]`. `[timestamp]` string.
    *   **Error Handling:** Report failure to create directory back to coordinator.

*   **Step 4: Clone Remote Sources (If Applicable) (MODE-SPEC-REPOMIX)**
    *   **Description:** Download source code from remote Git repositories if specified in the gathered sources.
    *   **Inputs:** `[source_list]` (from Step 1). `[temp_clone_path]` (from Step 3).
    *   **Procedure:**
        1.  Identify any remote Git URLs in `[source_list]`.
        2.  Initialize an empty list `[final_source_paths]`.
        3.  For each item in `[source_list]`:
            *   If it's a remote Git URL:
                *   Use `execute_command`: `git clone --depth 1 [repo_url] [temp_clone_path]`. (Note: This clones *into* temp_clone. If multiple repos are needed, adjust strategy - e.g., clone into subdirs within temp_clone, or handle one repo per task). **Current procedure assumes one primary remote repo if cloned.**
                *   Add `[temp_clone_path]` to `[final_source_paths]`.
            *   If it's a local path:
                *   Add the local path directly to `[final_source_paths]`.
    *   **Outputs:** Cloned repository content within `[temp_clone_path]` (if applicable). `[final_source_paths]` list for the next step.
    *   **Error Handling:** Report Git clone failures back to coordinator.

*   **Step 5: Determine & Confirm Chunking Strategy (MODE-SPEC-REPOMIX, User)**
    *   **Description:** Analyze source structure and confirm the chunking approach with the user.
    *   **Inputs:** `[final_source_paths]` (from Step 4).
    *   **Procedure:**
        1.  Analyze the structure of the paths in `[final_source_paths]` (e.g., depth, file types, directory organization).
        2.  Based on the analysis, formulate 2-3 relevant chunking strategy options (e.g., `"directory"`, `"file"`, potentially custom grouping logic if applicable).
        3.  Use `ask_followup_question` to present these strategies to the user:
            *   **Question:** "Based on the source structure, which chunking strategy should Repomix use?"
            *   **Suggestions:** Provide the formulated options (e.g., "Use 'directory' strategy", "Use 'file' strategy", "Propose a custom strategy (requires manual config edit)").
        4.  Receive the user's selection. Store the chosen strategy (e.g., `"directory"`, `"file"`) as `[chunking_strategy]`.
    *   **Outputs:** User-confirmed `[chunking_strategy]` string.
    *   **Error Handling:** If user interaction fails or provides an invalid choice, default to `"directory"` and log a warning, or report blockage to coordinator.

*   **Step 6: Prepare `config.repomix.json` (MODE-SPEC-REPOMIX)**
    *   **Description:** Generate the JSON configuration file for the `repomix` tool using the confirmed chunking strategy.
    *   **Inputs:** `[final_source_paths]` (from Step 4), `[task_directory]` (from Step 3), `[task_name]` (from Step 2), `[chunking_strategy]` (from Step 5).
    *   **Procedure:**
        1.  Construct the JSON object content as a string:
            *   Set `"compress": true`.
            *   Populate `"sources"` array with the `[final_source_paths]`.
            *   Define `"outputs"` for single MD (`[task_directory]/[task_name].repomix.md`), single XML (`[task_directory]/[task_name].repomix.xml`), chunked MD (`[task_directory]/chunks_md/`), and chunked XML (`[task_directory]/chunks_xml/`).
            *   Define `"chunking"` using the user-selected `[chunking_strategy]` (e.g., `"strategy": "[chunking_strategy]"`), `"output_dir_md": "chunks_md"`, `"output_dir_xml": "chunks_xml"`.
        2.  Use `write_to_file` to save the JSON string to `[task_directory]/config.repomix.json`.
    *   **Outputs:** `config.repomix.json` file within `[task_directory]`.
    *   **Error Handling:** Report failure to generate or write the config file back to coordinator.

*   **Step 7: Execute Repomix (MODE-SPEC-REPOMIX)**
    *   **Description:** Run the `repomix` tool using the generated configuration.
    *   **Inputs:** Path to `config.repomix.json` (`[task_directory]/config.repomix.json`).
    *   **Procedure:**
        1.  Use `execute_command` to run: `repomix --config [task_directory]/config.repomix.json`.
        2.  Monitor the command execution for success or failure.
    *   **Outputs:** Repomix output files (single, chunked) within `[task_directory]`.
    *   **Error Handling:** Report `repomix` command execution errors back to coordinator.

*   **Step 8: Generate `README.md` (MODE-SPEC-REPOMIX)**
    *   **Description:** Create a summary file describing the Repomix run.
    *   **Inputs:** `[source_list]` (from Step 1), `[task_directory]` (from Step 3), `[chunking_strategy]` (from Step 5). Information on whether cloning occurred (Step 4).
    *   **Procedure:**
        1.  Construct the Markdown content for the README, including:
            *   Original sources requested (`[source_list]`).
            *   Mention if cloning occurred and where (`[temp_clone_path]`).
            *   List of generated output files/directories within `[task_directory]`.
            *   Chunking strategy used (`[chunking_strategy]`, confirmed by user).
        2.  Use `write_to_file` to save the content to `[task_directory]/README.md`.
    *   **Outputs:** `README.md` file within `[task_directory]`.
    *   **Error Handling:** Report failure to generate or write the README back to coordinator.

*   **Step 9: Cleanup Temporary Clone (If Applicable) (MODE-SPEC-REPOMIX)**
    *   **Description:** Remove the temporary directory used for cloning remote repositories.
    *   **Inputs:** `[temp_clone_path]` (from Step 3). Information on whether cloning occurred (Step 4).
    *   **Procedure:**
        1.  If a temporary clone was created in Step 4:
            *   Use `execute_command`: `rm -rf [temp_clone_path]`. Verify OS-specific syntax (`rm -rf` is common on Linux/macOS; PowerShell might use `Remove-Item -Recurse -Force [temp_clone_path]`). Adhere to Rule `05-os-aware-commands.md`.
    *   **Outputs:** Temporary clone directory removed.
    *   **Error Handling:** Log cleanup errors, but potentially proceed to reporting unless the error is critical. Report cleanup issues to coordinator.

*   **Step 10: Report Completion (MODE-SPEC-REPOMIX)**
    *   **Description:** Notify the initiating agent of the core workflow outcome (prior to optional archiving).
    *   **Inputs:** Success/failure status of core generation, path to `[task_directory]/README.md`.
    *   **Procedure:**
        1.  If steps 1-9 were successful, use `<attempt_completion>` with a success message, providing the full path to `[task_directory]/README.md`, and indicating the next step is optional archiving.
        2.  If any step 1-9 failed critically, use `<attempt_completion>` reporting the failure and the specific step/error encountered.
    *   **Outputs:** Completion or error report sent to the coordinator.

*   **Step 11: Offer Artifact Archiving (MODE-SPEC-REPOMIX / Coordinator, User)**
    *   **Description:** Ask the user if they want to copy key generated artifacts to the central context directory. This step runs only if Step 10 reported success.
    *   **Inputs:** `[task_directory]` (from Step 3), `[task_name]` (from Step 2).
    *   **Procedure:**
        1.  Use `ask_followup_question`:
            *   **Question:** "Repomix generation complete in `[task_directory]`. Do you want to copy any artifacts to `.ruru/context/` for broader access?"
            *   **Suggestions:**
                *   "Copy `[task_name].repomix.md` to `.ruru/context/`"
                *   "Copy `[task_name].repomix.xml` to `.ruru/context/`"
                *   "Copy specific chunk file(s) (Specify paths relative to `[task_directory]`)"
                *   "Do not copy anything"
        2.  If the user selects an option involving copying:
            *   Construct the appropriate `cp` command(s) based on the selection and `[task_directory]`. Ensure OS-aware commands (Rule `05`). Target directory is `.ruru/context/`.
            *   Use `execute_command` to perform the copy operation(s).
            *   Log the copy operation.
    *   **Outputs:** Potentially copied files in `.ruru/context/`.
    *   **Error Handling:** Report copy command failures if they occur.

## 7. Postconditions ✅
*   The user has provided the source paths/URLs.
*   The user has confirmed the task name.
*   The user has confirmed the chunking strategy.
*   The `repomix` analysis has been successfully executed.
*   All specified output files (single MD/XML, chunked MD/XML) exist within the `[task_directory]`.
*   A `README.md` file summarizing the run exists within the `[task_directory]`.
*   The temporary clone directory (if created) has been removed.
*   The user has been prompted regarding artifact archiving, and any requested copies have been attempted.
*   The `prime-coordinator` (or initiator) has received a completion report including the path to the `README.md`.

## 8. Error Handling & Escalation (Overall) ⚠️
*   Failures in critical steps (user interaction for inputs, directory creation, cloning, config generation, repomix execution) should be reported immediately to the `prime-coordinator` via `<attempt_completion>`, halting the workflow.
*   Failures in non-critical steps (README generation, cleanup, artifact copying) should be logged and reported, but the workflow might still be considered partially successful if the core Repomix outputs were generated.
*   The `MODE-SPEC-REPOMIX` agent should provide specific error messages encountered during `execute_command` calls when reporting failures.
*   Refer to the Adaptive Failure Resolution process (`.ruru/processes/afr-process.md`) if standard error handling fails.

## 9. PAL Validation Record 🧪
*   Date Validated:
*   Method:
*   Test Case(s):
*   Findings/Refinements:

## 10. Revision History 📜
*   v1.2 (2025-04-29): Split input gathering into two steps: first gather sources, then confirm task name with suggestions based on sources. Renumbered steps accordingly.
*   v1.1 (2025-04-29): Made chunking strategy interactive (user confirmation) and added optional post-processing step to archive artifacts to `.ruru/context/`.
*   v1.0 (2025-04-29): Initial draft based on KB procedure `REPOMIX-KB-PROCEDURES-V3`.