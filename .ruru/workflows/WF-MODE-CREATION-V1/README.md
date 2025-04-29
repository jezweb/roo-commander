+++
# --- Basic Metadata ---
id = "WF-MODE-CREATION-V1"
title = "Interactive New Mode Creation Workflow (.ruru/modes/ Structure)"
status = "active" # Updated status
created_date = "2025-04-29"
updated_date = "2025-04-29" # Keep current date for now
version = "1.0" # Initial version for directory format
tags = [
    "workflow", "mode-creation", "interactive", "modes-structure", "naming-convention",
    "kb-population", "readme-enhancement", "kb-generation", "template-enforcement",
    "mode-registry", "context-handling", "user-input", "scalability", "json-context", "mcp-preference",
    "synthesis-templates", "core-knowledge", "vertex-ai", "ux-improvement",
    "ai-assessment", "kb-granularity", "subfolders", "workflow-directory-format" # Added tag
]

# --- Ownership & Context ---
owner = "Roo Commander"
related_docs = [
    "`.ruru/modes/roo-commander/kb/available-modes-summary.md`",
    "`.ruru/rules/00-standard-toml-md-format.md`",
    "`.ruru/processes/acqa-process.md`",
    "`.ruru/processes/afr-process.md`",
    "`.ruru/processes/pal-process.md`",
    "`.ruru/templates/synthesis-task-sets/README.md`"
]
related_templates = [
    "`.ruru/templates/modes/00_standard_mode.md`", # Standard Mode Template (v1.1)
    "`.ruru/templates/toml-md/16_ai_rule.md`", # For KB lookup rule
    "`.ruru/templates/synthesis-task-sets/*.toml`", # Synthesis task templates
    "`.ruru/templates/toml-md/23_workflow_readme.md`",
    "`.ruru/templates/toml-md/24_workflow_step_start.md`",
    "`.ruru/templates/toml-md/25_workflow_step_standard.md`",
    "`.ruru/templates/toml-md/26_workflow_step_finish.md`"
]

# --- Workflow Specific Fields ---
objective = "To guide the creation of a new Roo Commander mode from scratch, incorporating refined user requirements gathering (with improved UX for context preferences), using the `.ruru/modes/` structure, applying predefined naming conventions, generating a detailed 'Core Knowledge & Capabilities' section (with enhanced detail request), separating knowledge base (KB) content (with option to generate basic KB if missing), creating mode-specific rules, generating an enhanced KB README, running `scripts/build_roomodes.js` to update the mode registry, enforcing the standard mode template structure, maximizing delegation, managing context via a temporary JSON file, utilizing synthesis task templates, and preferring MCP tools where available."
scope = "Applies when creating a *new* Roo Commander mode. Requires user interaction. Gathers detailed user input upfront (using simplified options for context preferences). Includes AI assessment of research depth. Creates structure in `.ruru/modes/` and `.roo/rules-<slug>/`. Uses naming conventions. Generates 'Core Knowledge' using Vertex AI MCP (if available) or fallback methods. Optionally populates KB files (potentially in subfolders) based on synthesized context (from JSON), applying requested detail level and AI assessment. Populates the standard mode template (from JSON). Generates KB README and KB lookup rule. Triggers mode registry update (`scripts/build_roomodes.js`). Cleans up temporary JSON context file. Prefers MCP tools."
roles = ["User", "Coordinator (Roo Commander)", "Context Gatherer (e.g., agent-research)", "Context Synthesizer (e.g., agent-context-condenser)", "Mode Structure Agent (e.g., mode-maintainer, technical-writer, toml-specialist)", "QA Agent (e.g., code-reviewer)"]
trigger = "User request to create a new mode, specifying its purpose and basic identification."
success_criteria = [
    "Mode definition file exists in `.ruru/modes/<new-slug>/<new-slug>.mode.md`, adhering to the standard template structure (`.ruru/templates/modes/00_standard_mode.md`), containing gathered/generated data (including Core Knowledge and AI assessment results if applicable) with the correct `id`.",
    "KB directory exists at `.ruru/modes/<new-slug>/kb/`.",
    "KB directory contains either generated content from provided sources (parsed from JSON context) or generated basic KB content (unless explicitly skipped).",
    "KB README (`.ruru/modes/<new-slug>/kb/README.md`) exists and contains an overview, file list with summaries and line counts (or indicates pending/skipped population).",
    "Mode-specific rule directory exists at `.roo/rules-<slug>/`.",
    "KB lookup rule file exists at `.roo/rules-<slug>/01-kb-lookup-rule.md` using the standard rule template (`.ruru/templates/toml-md/16_ai_rule.md`) with enhanced instructions.",
    "The mode registry is successfully updated after running `scripts/build_roomodes.js`.",
    "The temporary context file (`.ruru/temp/mode-creation-context-<new-slug>.json`) is deleted.",
    "The created structure passes Quality Assurance (QA) review against specifications (including template structure).",
    "User confirms the generated mode meets initial requirements and is accessible after window reload."
]
failure_criteria = [
    "Unable to determine a valid `prefix-topic` slug with user.",
    "Unable to gather sufficient context (including from user-provided files or based on selected preference).",
    "Failure during AI assessment of context depth/breadth (Step 3).",
    "Failure during context synthesis using task templates.",
    "Failure during context saving to temporary JSON file.",
    "Failure during Core Knowledge generation (MCP or fallback methods).",
    "Failure during optional KB population/generation sub-process (including parsing JSON context).",
    "Worker Agent fails to correctly populate the standard mode template (potentially due to failure reading/parsing temp JSON context file).",
    "Worker Agent fails critical file/directory operations (potentially due to MCP tool failure without fallback success).",
    "Worker Agent fails to generate enhanced KB README.",
    "Failure during execution of `scripts/build_roomodes.js`.",
    "Failure to delete the temporary context JSON file.",
    "Generated structure repeatedly fails QA.",
    "User rejects the final mode structure or cannot access it after reload."
]
steps = [
    { id = "WF-MODE-CREATION-V1-00-START", file = "00_start.md", title = "Initiation & Refined Requirements Gathering" },
    { id = "WF-MODE-CREATION-V1-01-CONTEXT-GATHERING", file = "01_context_gathering.md", title = "Context Gathering" },
    { id = "WF-MODE-CREATION-V1-02-AI-ASSESSMENT", file = "02_ai_assessment.md", title = "AI Assessment of Context Depth/Breadth" },
    { id = "WF-MODE-CREATION-V1-03-CONTEXT-SYNTHESIS", file = "03_context_synthesis.md", title = "Context Synthesis" },
    { id = "WF-MODE-CREATION-V1-04-SAVE-CONTEXT", file = "04_save_context.md", title = "Save Synthesized Context (JSON)" },
    { id = "WF-MODE-CREATION-V1-05-KB-PROMPT", file = "05_kb_prompt.md", title = "Optional KB Population Prompt" },
    { id = "WF-MODE-CREATION-V1-06-CREATE-DIRS", file = "06_create_dirs.md", title = "Delegate Directory Creation" },
    { id = "WF-MODE-CREATION-V1-07-CREATE-MODE-FILE", file = "07_create_mode_file.md", title = "Delegate Initial Mode File Creation" },
    { id = "WF-MODE-CREATION-V1-08-GEN-CORE-KNOWLEDGE", file = "08_gen_core_knowledge.md", title = "Generate Core Knowledge & Capabilities" }, # Corrected file
    { id = "WF-MODE-CREATION-V1-09-CREATE-KB-CONTENT", file = "09_create_kb_content.md", title = "Delegate KB Content / Instruction File Creation" },
    { id = "WF-MODE-CREATION-V1-10-UPDATE-KB-README", file = "10_update_kb_readme.md", title = "Delegate Enhanced KB README Update" },
    { id = "WF-MODE-CREATION-V1-11-CREATE-KB-RULE", file = "11_create_kb_rule.md", title = "Delegate KB Rule Creation" },
    { id = "WF-MODE-CREATION-V1-12-QA", file = "12_qa.md", title = "Quality Assurance (ACQA)" }, # Corrected file
    { id = "WF-MODE-CREATION-V1-13-USER-REVIEW", file = "13_user_review.md", title = "User Review & Refinement" },
    { id = "WF-MODE-CREATION-V1-14-BUILD-REGISTRY", file = "14_build_registry.md", title = "Build Mode Registry" },
    { id = "WF-MODE-CREATION-V1-15-DELETE-TEMP-FILE", file = "15_delete_temp_file.md", title = "Delete Temporary Context File" },
    { id = "WF-MODE-CREATION-V1-16-RELOAD-PROMPT", file = "16_reload_prompt.md", title = "Prompt User to Reload Window" },
    { id = "WF-MODE-CREATION-V1-17-FINALIZATION", file = "17_finalization.md", title = "Finalization" }, # Added Step 17
    { id = "WF-MODE-CREATION-V1-99-FINISH", file = "99_finish.md", title = "Workflow Finished" } # Renumbered final step
]

# --- Integration ---
acqa_applicable = true
pal_validated = false
validation_notes = ""

# --- AI Interaction Hints (Optional) ---
# context_type = "workflow_definition"
+++

# Workflow: Interactive New Mode Creation (.ruru/modes/ Structure)

## 1. Objective 🎯
To guide the creation of a new Roo Commander mode from scratch. This involves:
*   Gathering refined requirements and context preferences from the user upfront **using simplified options**.
*   Using the `.ruru/modes/` directory structure.
*   Applying predefined naming conventions (see `.ruru/modes/roo-commander/kb/available-modes-summary.md`).
*   Generating a detailed "Core Knowledge & Capabilities" section within the mode definition file, preferring Vertex AI MCP tools.
*   Separating knowledge base (KB) content into the `kb/` subdirectory, with an interactive option to generate basic KB if source material is missing or insufficient, **applying the requested level of detail and potentially using subfolders**.
*   Creating mode-specific rules in the corresponding `.roo/rules-<slug>/` directory, **deferring standard rules**.
*   Generating an enhanced KB `README.md` file summarizing the KB contents.
*   Running the `scripts/build_roomodes.js` script to update the application's mode registry.
*   Enforcing the use and structure of the standard mode template (`.ruru/templates/modes/00_standard_mode.md`).
*   Maximizing delegation of tasks to specialized agents where appropriate.
*   Using a temporary JSON file (`.ruru/temp/mode-creation-context-<new-slug>.json`) to pass synthesized context between steps.
*   Utilizing synthesis task templates from `.ruru/templates/synthesis-task-sets/` for structured context generation.
*   Preferring MCP tools (e.g., for file operations, research) with fallbacks to standard tools (`execute_command`, `write_to_file`, etc.).

## 2. Scope ↔️
This workflow applies when creating a *new* Roo Commander mode. Requires user interaction. Gathers detailed user input upfront (using simplified options for context preferences). Includes AI assessment of research depth. Creates structure in `.ruru/modes/` and `.roo/rules-<slug>/`. Uses naming conventions. Generates 'Core Knowledge' using Vertex AI MCP (if available) or fallback methods. Optionally populates KB files (potentially in subfolders) based on synthesized context (from JSON), applying requested detail level and AI assessment. Populates the standard mode template (from JSON). Generates KB README and KB lookup rule. Triggers mode registry update (`scripts/build_roomodes.js`). Cleans up temporary JSON context file. Prefers MCP tools.

## 3. Roles & Responsibilities 👤
*   **User:** Initiates the request, provides purpose/context, selects context preference option (or provides details), approves slug/classification/emoji, reviews KB options, potentially provides source files for Core Knowledge, and confirms final mode usability.
*   **Coordinator (Roo Commander):** Orchestrates the workflow, interacts with the User, delegates tasks to Worker Agents, performs QA, manages temporary context file, and manages finalization steps.
*   **Context Gatherer:** (Worker Agent, e.g., `agent-research`) Gathers relevant information based on the mode's purpose, scope, and user preferences from Step 1.5, **applying the selected detail level**.
*   **Context Synthesizer:** (Worker Agent, e.g., `agent-context-condenser`) Condenses gathered information into a structured JSON format based on synthesis task templates, suitable for mode definition and KB.
*   **Mode Structure Agent:** (Worker Agent, e.g., `mode-maintainer`, `technical-writer`, `toml-specialist`) Creates directories, reads/parses context from temporary JSON file, populates template files (mode definition, KB files, KB README, rules) based on context and templates, preferring MCP tools.
*   **QA Agent:** (Worker Agent, potentially Coordinator) Reviews generated artifacts against standards and requirements (part of ACQA process).

## 4. Workflow Steps 🪜

This workflow proceeds through the following steps, defined in separate files within this directory:

*   **[00_start.md](./00_start.md):** Initiation & Refined Requirements Gathering
*   **[01_context_gathering.md](./01_context_gathering.md):** Context Gathering
*   **[02_ai_assessment.md](./02_ai_assessment.md):** AI Assessment of Context Depth/Breadth
*   **[03_context_synthesis.md](./03_context_synthesis.md):** Context Synthesis
*   **[04_save_context.md](./04_save_context.md):** Save Synthesized Context (JSON)
*   **[05_kb_prompt.md](./05_kb_prompt.md):** Optional KB Population Prompt
*   **[06_create_dirs.md](./06_create_dirs.md):** Delegate Directory Creation
*   **[07_create_mode_file.md](./07_create_mode_file.md):** Delegate Initial Mode File Creation
*   **[08_gen_core_knowledge.md](./08_gen_core_knowledge.md):** Generate Core Knowledge & Capabilities
*   **[09_create_kb_content.md](./09_create_kb_content.md):** Delegate KB Content / Instruction File Creation
*   **[10_update_kb_readme.md](./10_update_kb_readme.md):** Delegate Enhanced KB README Update
*   **[11_create_kb_rule.md](./11_create_kb_rule.md):** Delegate KB Rule Creation
*   **[12_qa.md](./12_qa.md):** Quality Assurance (ACQA)
*   **[13_user_review.md](./13_user_review.md):** User Review & Refinement
*   **[14_build_registry.md](./14_build_registry.md):** Build Mode Registry
*   **[15_delete_temp_file.md](./15_delete_temp_file.md):** Delete Temporary Context File
*   **[16_reload_prompt.md](./16_reload_prompt.md):** Prompt User to Reload Window
*   **[99_finish.md](./99_finish.md):** Finalization

## 5. Preconditions🚦
*   The Roo Commander system and its delegated agents are operational.
*   Relevant MCP servers (e.g., `vertex-ai-mcp-server`) are connected and operational (preferred, but workflow includes fallbacks).
*   The User is available for interaction and providing necessary input/confirmations.
*   Required templates (`.ruru/templates/modes/00_standard_mode.md`, `.ruru/templates/toml-md/16_ai_rule.md`, `.ruru/templates/synthesis-task-sets/*.toml`) exist and are accessible.
*   Reference documents (naming convention, available modes summary, synthesis template README) are accessible.
*   The `scripts/build_roomodes.js` script exists and is executable by the Coordinator.
*   The `.ruru/temp/` directory exists and is writable by the Coordinator.

## 6. Reference Documents & Tools 📚🛠️
*   Naming Convention: `.ruru/modes/roo-commander/kb/available-modes-summary.md`
*   Existing Mode Examples: `.ruru/modes/roo-commander/kb/available-modes-summary.md`
*   Standard Mode Template: `.ruru/templates/modes/00_standard_mode.md`
*   Standard Rule Template: `.ruru/templates/toml-md/16_ai_rule.md`
*   Synthesis Task Templates: `.ruru/templates/synthesis-task-sets/` (see `README.md` there)
*   TOML+MD Format Rule: `.ruru/rules/00-standard-toml-md-format.md`
*   QA Process: `.ruru/processes/acqa-process.md`
*   Failure Resolution Process: `.ruru/processes/afr-process.md`
*   Process Validation Lifecycle: `.ruru/processes/pal-process.md`
*   Mode Registry Build Script: `scripts/build_roomodes.js` (Assumed location accessible to Coordinator)
*   Temporary JSON Context File Structure: (See `.ruru/templates/synthesis-task-sets/README.md` for expected output structure based on synthesis templates)
*   **MCP Tools (Preferred):**
    *   `vertex-ai-mcp-server`: `read_file_content`, `read_multiple_files_content`, `write_file_content`, `create_directory`, `move_file_or_directory`, `explain_topic_with_docs`, `get_doc_snippets`, `answer_query_websearch`, `answer_query_direct`
*   **Fallback Tools:** `read_file`, `write_to_file`, `execute_command` (for `mkdir`, `rm`), `apply_diff`, `insert_content`

## 7. Error Handling & Escalation (Overall) ⚠️
*   **Invalid Slug/Classification:** If agreement cannot be reached in Step 1, escalate to the User/owner for clarification or abandon the workflow.
*   **Context Gathering Failure (Step 2):** If agents fail (including reading user files or applying preference), retry. Check MCP tool status. If persistent, notify the User and potentially proceed with minimal context or abandon.
*   **AI Assessment Failure (Step 3):** If assessment fails, log the error, default rating to 'Standard', notify User, and proceed.
*   **Context Synthesis Failure (Step 4):** If agent fails to process context or use synthesis templates, retry. Check template validity. If persistent, notify User, consider manual synthesis or abandon.
*   **Context Saving Failure (Step 5):** If writing the temporary JSON file fails (both MCP and fallback), log the error, notify the user, and likely abandon the workflow as subsequent steps depend on it.
*   **Core Knowledge Generation Failure (Step 9):** If generation fails (MCP query, fallback synthesis, file insertion), log the error, notify the User. Ensure the `.mode.md` file reflects the failure (e.g., placeholder remains). Proceed if possible, but mode quality will be lower.
*   **KB Population Failure (Step 10):** If KB generation/population fails (including parsing JSON, creating subdirs, or file writing), notify the User, ensure the KB README reflects the failure, and proceed if possible (mode might function without KB initially). Check MCP/fallback tool status.
*   **File/Directory Operations Failure:** If the Mode Structure Agent fails critical operations (Step 7, 8, 10, 11, 12), retry. Log errors. Check MCP tool status and fallback execution. Persistent failure requires manual intervention or abandoning the workflow. Check if failure is related to reading/parsing the temporary JSON context file.
*   **QA Failures (Step 13):** Minor issues trigger corrections and re-QA. Repeated or significant failures (e.g., missing Core Knowledge) should trigger the Adaptive Failure Resolution (AFR) process (`.ruru/processes/afr-process.md`) to diagnose root causes.
*   **`scripts/build_roomodes.js` Failure (Step 15):** If the script fails, log the error output. Attempt to diagnose (e.g., syntax error in a mode file). If resolvable, fix and retry Step 15. If not, escalate the script error; the mode will not be available until resolved. **Ensure Step 16 (cleanup) is skipped or handled carefully if this step fails.**
*   **Temporary File Deletion Failure (Step 16):** If deletion fails (MCP and fallback), log the error. This is generally non-critical but should be noted. Manual cleanup might be required later.
*   **User Rejection (Step 14/18):** If the user rejects the final structure or cannot access the mode, gather detailed feedback. Attempt refinement loop (back to Step 14 or earlier). If fundamental issues persist, escalate or document the rejection and close.

## 8. PAL Validation Record 🧪
*(Process Assurance Lifecycle - defined in `.ruru/processes/pal-process.md`)*
*   **Date Validated:** (Needs validation for v1.0 directory format)
*   **Method:** (e.g., Walkthrough, Test Case Execution)
*   **Test Case(s):** (e.g., Create mode 'test-basic' with 'Standard KB' preference, Create mode 'dev-complex' with 'Deep Dive KB' preference and user files, Test 'Let me specify...' option in Step 00, Test AI Assessment (Step 02), Test KB Prompt options (Step 05), Test 'Comprehensive KB (Subfolders)' option (Steps 03, 09), Test context JSON file creation/read/parse/deletion, Test MCP tool preference/fallback for file ops, Test Core Knowledge generation via MCP, Test Core Knowledge generation via fallback (user files), Test Core Knowledge generation via fallback (base LLM))
*   **Findings/Refinements:** (Document results of validation here)

## 9. Revision History 📜
*   **v1.0 (2025-04-29):** Initial creation of directory-based workflow structure based on `WF-NEW-MODE-CREATION-004.md`. Steps split into individual files (00-17, 99).