+++
id = "REPOMIX-RULE-WORKFLOW-V4"
title = "Repomix Specialist: Standard Generation Workflow"
context_type = "rules"
scope = "Defines the standard workflow for generating Repomix context files"
target_audience = ["MODE-SPEC-REPOMIX"]
granularity = "procedure"
status = "active"
last_updated = "2025-04-29"
tags = ["rules", "repomix", "workflow", "generation", "output", "json", "chunking"]
related_context = [".ruru/modes/mode-spec-repomix/kb/01-repomix-procedures.md", ".ruru/docs/repomix/", ".ruru/modes/mode-spec-repomix/kb/repomix-readme.md"]
template_schema_doc = ".ruru/templates/toml-md/16_ai_rule.README.md"
+++

# Rule: Repomix Specialist - Standard Generation Workflow

This rule defines the standard workflow for generating Repomix context files.

**1. User Interaction & Workflow Choice:**

*   When receiving a request, determine if the user wants a "Quick" or "Comprehensive" generation.
*   If unclear, **MUST** use `<ask_followup_question>` to clarify. Offer these choices:
    *   "Quick Generation (Single MD file)"
    *   "Quick Generation (Single XML file)"
    *   "Comprehensive Generation (JSON config, multiple files/formats, README)"
*   Default to "Comprehensive Generation" if the user provides sufficient detail implying multiple outputs or complex sources.
* **MUST** consult `.ruru/modes/mode-spec-repomix/kb/repomix-readme.md` to understand Repomix capabilities (e.g., remote repo handling, compression) before proceeding.

**2. Comprehensive Generation Workflow:**

1.  **Path Discipline:** All operations (directory creation, cloning, config generation, Repomix execution, output generation, cleanup) **MUST** occur strictly within the designated task subfolder (`.ruru/docs/repomix/[task_name]-[timestamp]/`). No intermediate or final files should be placed outside this directory.
2.  **Consult KBs:** Refer to `.ruru/modes/mode-spec-repomix/kb/01-repomix-procedures.md` (V3+) for the detailed clone-first procedure *and* `.ruru/modes/mode-spec-repomix/kb/repomix-readme.md` for general Repomix features/syntax.
3.  **Output Structure:** All outputs **MUST** be placed within a new, timestamped subfolder inside `.ruru/docs/repomix/` (e.g., `.ruru/docs/repomix/task_name-YYYYMMDDHHMMSS/`).
4.  **JSON Configuration:** **MUST** generate a `config.repomix.json` file within the task subfolder. This config will point to the *locally cloned* sources within the task subfolder's `temp_clone/` directory (if remote sources were used), define outputs (MD/XML, single/chunked) relative to the task subfolder, include the `compress: true` option, and specify the chunking strategy. Paths within the config **MUST** be relative to the task subfolder or correctly point to the `temp_clone` directory within it. See KB for details.
5.  **Execution:** **MUST** execute the `repomix` command using the generated JSON configuration file, ensuring all its inputs and outputs target paths *within* the task subfolder. See KB for details.
6.  **Chunking:** Follow the chunking logic defined in the KB to create logically grouped smaller files.
7.  **Cleanup:** **MUST** remove the temporary local clone directory (`temp_clone/`) *within* the task subfolder if one was created. See KB.
8.  **README:** **MUST** generate a `README.md` file within the task subfolder explaining the generated files and their structure.
9.  **Reporting:** Report completion, linking to the generated README.md in the task subfolder.

**3. Quick Generation Workflow:**

1.  **Output Location:** Output the single file directly into `.ruru/docs/repomix/`.
2.  **Filename:** Use a descriptive name (e.g., `repo_name.repomix.[md|xml]`).
3.  **Execution:** Execute the `repomix` command directly. If using remote sources, **MUST** follow the clone-first procedure detailed in the KB (`01-repomix-procedures.md` V3+), adapting it for single file output and cleanup. Ensure compression (`--compress`) is used. All temporary files (like clones) and the final output **MUST** be handled strictly within the `.ruru/docs/repomix/` directory (or a temporary subfolder within it that is cleaned up, leaving only the final output file). Refer to KBs for correct flag usage and procedures.
4.  **Reporting:** Report completion, linking to the generated file.

**4. Error Handling:**

*   Log errors appropriately.
*   Report failures clearly to the coordinator.