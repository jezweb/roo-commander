+++
# --- Basic Metadata ---
id = "REPOMIX-KB-PROCEDURES-V3" # Updated ID
title = "Repomix Specialist: Detailed Procedures"
context_type = "kb"
scope = "Provides detailed steps for Repomix generation workflows"
target_audience = ["MODE-SPEC-REPOMIX"]
granularity = "detailed-procedure"
status = "active"
last_updated = "2025-04-29" # Updated date
tags = ["kb", "repomix", "procedure", "json", "chunking", "output", "readme", "git", "clone"] # Added tags
related_context = [".roo/rules-MODE-SPEC-REPOMIX/01-repomix-workflow.md", ".ruru/docs/repomix/", ".ruru/modes/mode-spec-repomix/kb/repomix-readme.md"]
template_schema_doc = ".ruru/templates/toml-md/14_kb_article.README.md"
+++

# KB: Repomix Specialist - Detailed Procedures

This document provides detailed procedures referenced by the Repomix Specialist rules.

## 1. Comprehensive Generation Workflow Procedure

This procedure details the steps for the "Comprehensive Generation" option defined in rule `REPOMIX-RULE-WORKFLOW-V1`.

1.  **Determine Task Name:** Extract a concise, filesystem-safe task name from the user request (e.g., `roo_code_docs_context`).
2.  **Generate Timestamp:** Create a timestamp string (e.g., `YYYYMMDDHHMMSS`).
3.  **Prepare Task Directory:** # Renamed Step
    *   Construct the path: `.ruru/docs/repomix/[task_name]-[timestamp]/` (e.g., `.ruru/docs/repomix/roo_code_docs_context-20250429101000/`). Let's call this `[task_directory]`.
    *   Use `execute_command` with `mkdir -p [task_directory]` to create the directory.
    *   Define a temporary clone directory path *within* this task directory (e.g., `[task_directory]/temp_clone/`). Let's call this `[temp_clone_path]`. # Added substep
4.  **Clone Remote Sources (If Applicable):** # New Step 4
    *   Identify if the sources include remote Git repository URLs.
    *   If remote sources exist, use `execute_command` to clone the repository into the defined temporary clone directory. Command: `git clone --depth 1 [repo_url] [temp_clone_path]` (Use `--depth 1` for efficiency). Handle potential errors during cloning.
    *   Adjust the source paths in the subsequent JSON configuration step to point to the relevant subdirectories/files *within the local temporary clone* instead of the original remote URLs.
5.  **Prepare `config.repomix.json`:** # Renumbered (was 4)
    *   **Sources:** List all source paths. If remote sources were cloned, these paths **MUST** point to the files/directories within the local `temp_clone/` directory (e.g., `[temp_clone_path]/src`, `[temp_clone_path]/README.md`). For local workspace sources, use their original paths. # Reworded point
    *   **Outputs:** Define output configurations for:
        *   Single combined Markdown file (e.g., `[task_name].repomix.md`) in the task directory.
        *   Single combined XML file (e.g., `[task_name].repomix.xml`) in the task directory.
        *   Chunked Markdown files (output to a `chunks_md/` subdirectory within the task directory).
        *   Chunked XML files (output to a `chunks_xml/` subdirectory within the task directory).
        *   Include `"compress": true` at the top level of the JSON configuration to enable code compression.
    *   **Chunking Strategy:**
        *   **Default:** Use `directory` chunking. Group files based on their source directory structure.
        *   **Analysis (Future Enhancement):** If sources are diverse or lack clear directory structure, analyze file paths/names to infer logical groupings (e.g., by feature, file type). This requires more advanced logic. For V1, stick to `directory` chunking primarily.
        *   Specify the chunking strategy in the JSON config (e.g., `"chunking": {"strategy": "directory", "output_dir_md": "chunks_md", "output_dir_xml": "chunks_xml"}`).
    *   Example snippet (assuming cloning occurred):
        ```json
        {
          "compress": true,
          "sources": [
            ".ruru/docs/repomix/roo_code_docs_context-20250429101000/temp_clone/src", // Example local path after clone
            ".ruru/docs/repomix/roo_code_docs_context-20250429101000/temp_clone/README.md", // Example local path after clone
            "src/some_local_file.ts" // Example local workspace path
            // ... other sources
          ],
          "outputs": {
            // ... output definitions ...
          },
          "chunking": {
            // ... chunking definitions ...
          }
        }
        ```
    *   **Write JSON:** Use `write_to_file` to save the generated JSON content to `[task_directory]/config.repomix.json`.
6.  **Execute Repomix:** # Renumbered (was 5)
    *   Use `execute_command` to run the `repomix` command, pointing to the generated `config.repomix.json`.
    *   Command: `repomix --config [task_directory]/config.repomix.json`
    *   Ensure all paths used by the command (config file, output directories) are relative to the main workspace root or absolute paths within the workspace, and correctly target files *within* the task directory (`.ruru/docs/repomix/[task_name]-[timestamp]/`). # Added clarification
7.  **Generate `README.md`:** # Renumbered (was 6)
    *   **Content:**
        *   Briefly describe the source repository/paths used (mentioning if cloning occurred).
        *   List the generated files (single MD/XML, chunked MD/XML directories).
        *   Explain the chunking strategy used (e.g., "Files chunked by source directory").
    *   **Write README:** Use `write_to_file` to save the content to `[task_directory]/README.md`.
8.  **Cleanup Temporary Clone (If Applicable):** # New Step 8
    *   If a temporary clone was created in step 4, use `execute_command` to remove the temporary clone directory. Command: `rm -rf [temp_clone_path]`. Handle potential errors during cleanup.
9.  **Report Completion:** # Renumbered (was 7)
    Use `<attempt_completion>` reporting success and providing the path to the generated `README.md` in the task directory.

## 2. Quick Generation Workflow Procedure

Refer to rule `REPOMIX-RULE-WORKFLOW-V1`, section 3 for this simpler procedure.

## 3. Chunking Strategy Details (V1)

*   **Directory Chunking:** The primary strategy. Creates separate output files for each distinct directory found in the source list. Files not in a subdirectory relative to a listed source directory might be grouped into a root/miscellaneous chunk.
*   **Filename Convention (Chunks):** Use the directory name (sanitized) as the base for chunk filenames (e.g., `advanced_usage.repomix.md`, `features.repomix.xml`).