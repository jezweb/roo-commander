+++
# --- Metadata ---
id = "PLAN-KB-ENRICH-PHASE3-V2" # Incremented version
title = "KB Enrichment Plan: Phase 3 - Organization & TOML Indexing (Refined)"
status = "draft"
created_date = "2025-04-24"
updated_date = "2025-04-24"
version = "2.0"
tags = ["plan", "kb", "enrichment", "phase3", "indexing", "organization", "toml", "modes"]
related_docs = [
    ".ruru/planning/kb-enrichment/00-kb-enrichment-plan.md",
    ".ruru/planning/kb-enrichment/02-ai-synthesis.md",
    ".roo/rules/01-standard-toml-md-format.md" # Reference for TOML usage
]
objective = "Create robust TOML-based index files for the AI-synthesized knowledge base documents within the target mode's directory structure (`.ruru/modes/{mode_slug}/kb/`) to make the synthesized context discoverable and usable by the mode."
scope = "Scanning synthesized markdown documents, reliably parsing their TOML frontmatter, generating a library-specific `index.toml`, and updating the mode's master `kb/index.toml`."
# --- Plan Specific Fields ---
synthesized_kb_dir_template = ".ruru/modes/{mode_slug}/kb/{library_name}/synthesized/"
library_index_file_template = ".ruru/modes/{mode_slug}/kb/{library_name}/index.toml"
mode_master_index_file_template = ".ruru/modes/{mode_slug}/kb/index.toml"
+++

# KB Enrichment Plan: Phase 3 - Organization & TOML Indexing (Refined)

**Objective:** Generate valid, well-structured `index.toml` files to index the AI-synthesized KB documents located in `[synthesized_kb_dir_template]`, enabling the target mode (`[mode_slug]`) to discover and utilize this knowledge.

**Procedure (for a given `[library_name]` and `[mode_slug]`):**

1.  **Scan for Synthesized Documents (Coordinator Task):**
    *   **Description:** Identify all synthesized markdown files for the specified library within the target mode's KB.
    *   **Tool:** `list_files`
    *   **Action:** Execute `<list_files><path>[synthesized_kb_dir_template]</path><recursive>false</recursive></list_files>`. Filter the result to include only `.md` files. Store the list of full file paths as `[Synthesized File Paths]`.
    *   **Error Handling:** If `list_files` fails or returns an empty list, log a warning "No synthesized documents found in `[synthesized_kb_dir_template]`. Cannot generate index." and **Stop this phase.**

2.  **Extract Metadata & Build Library Index Data (Coordinator Task):**
    *   **Description:** Read each synthesized file, parse its TOML frontmatter, and collect metadata for the library-specific index.
    *   **Tool:** `read_file`
    *   **Action:**
        *   Initialize an empty array `library_index_entries = []`.
        *   For each `file_path` in `[Synthesized File Paths]`:
            *   Read the file content: `<read_file><path>[file_path]</path></read_file>`. Handle read errors (log warning, skip file).
            *   **Parse TOML Frontmatter:**
                *   Attempt to extract the content between the `+++` delimiters.
                *   Use a reliable method to parse this extracted string as TOML. **Note:** Direct parsing by LLM can be unreliable. If parsing fails, consider:
                    *   Logging a warning and skipping the file for indexing.
                    *   *(Advanced)* Delegating the parsing of the specific TOML block to `prime-coordinator` or a dedicated TOML parsing utility mode if available.
                *   Assume successful parsing results in a `frontmatter` object.
            *   Extract `title`, `summary`, and `tags` from the `frontmatter` object. Use fallback values if missing (e.g., `title = path.basename(file_path, '.md')`, `summary = ""`, `tags = []`). Ensure `tags` is an array of strings.
            *   Create the index entry object: `{ title = "[Extracted Title]", summary = "[Extracted Summary]", tags = [Extracted Tags], file = "synthesized/[filename]" }` (where `[filename]` is just the base name of the file).
            *   Append this entry object to `library_index_entries`.
    *   **Output:** `library_index_entries` array populated with data from valid synthesized files.
    *   **Error Handling:** Log warnings for files that cannot be read or parsed. Ensure the process continues for other valid files.

3.  **Generate and Write Library `index.toml` (Coordinator Task):**
    *   **Description:** Create the formatted TOML index file listing all processed synthesized documents for the specific library.
    *   **Tool:** `write_to_file`
    *   **Action:**
        *   If `library_index_entries` is empty (due to errors in previous step), log "No valid entries to write to library index `[library_index_file_template]`." and skip to Step 4.
        *   Sort the `library_index_entries` array alphabetically by `title`.
        *   **Format as TOML:** Construct the final TOML string. This typically involves creating an array of tables named `documents`.
            ```toml
            # index.toml for [library_name] synthesized knowledge base in [mode_slug] mode.
            # Auto-generated on [current_date]

            [[documents]]
              title = "[Title from entry 1]"
              summary = "[Summary from entry 1]"
              tags = [ "[tag1]", "[tag2]" ] # Ensure tags are quoted strings in the array
              file = "[Relative file path from entry 1]" # e.g., "synthesized/core-concepts-summary.md"

            [[documents]]
              title = "[Title from entry 2]"
              summary = "[Summary from entry 2]"
              tags = [ "[tagA]", "[tagB]" ]
              file = "[Relative file path from entry 2]"

            # ... etc. for all sorted entries ...
            ```
        *   **CRITICAL:** Ensure the generated string is valid TOML (correct array of tables syntax, quoted strings, valid arrays).
        *   Calculate line count `[Line Count]`.
        *   Explain: "Writing synthesized document index for `[library_name]` to `[library_index_file_template]`..."
        *   Execute: `<write_to_file><path>[library_index_file_template]</path><content>[Generated TOML String]</content><line_count>[Line Count]</line_count></write_to_file>`.
    *   **Output:** Library-specific `index.toml` file created or overwritten.
    *   **Error Handling:** Handle `write_to_file` errors (log, report failure). If TOML generation is complex/error-prone, consider delegating the array-to-TOML conversion to `prime-dev`.

4.  **Update Mode Master `index.toml` (Coordinator Task):**
    *   **Description:** Add or update the entry for this library in the mode's top-level KB index.
    *   **Tool:** `read_file`, `write_to_file`
    *   **Action:**
        *   Read `[mode_master_index_file_template]`. Handle "File not found" by initializing `master_index_data = { libraries = [] }`. Handle read/parse errors (attempt to recover or report failure). If parsing existing TOML fails, *ask the user* if okay to overwrite with a new index containing only this library entry.
        *   Find the index `i` where `master_index_data.libraries[i].name == "[library_name]"`.
        *   Get the current date `[current_date]`.
        *   Construct the entry for this library: `library_entry = { name = "[library_name]", description = "Synthesized KB for [library_name]", index_file = "[library_name]/index.toml", last_updated = "[current_date]" }`.
        *   If found (`i >= 0`), update `master_index_data.libraries[i] = library_entry`.
        *   If not found, append `library_entry` to the `master_index_data.libraries` array.
        *   Sort the `master_index_data.libraries` array alphabetically by `name`.
        *   **Format as TOML:** Convert the entire `master_index_data` object back into a valid TOML string `[Master TOML String]`. Calculate `[Master Line Count]`.
        *   Explain: "Updating mode's master KB index at `[mode_master_index_file_template]`..."
        *   Execute: `<write_to_file><path>[mode_master_index_file_template]</path><content>[Master TOML String]</content><line_count>[Master Line Count]</line_count></write_to_file>`.
    *   **Output:** Updated mode master `index.toml` file.
    *   **Error Handling:** Handle read/parse/write errors. Get user confirmation before overwriting a potentially corrupt master index.