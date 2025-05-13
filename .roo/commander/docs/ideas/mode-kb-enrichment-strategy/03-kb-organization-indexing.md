+++
# --- Metadata ---
id = "STRAT-MODE-KB-ENRICH-PHASE3-V1" # Updated ID for strategy set
title = "KB Enrichment Strategy: Phase 3 - Organization & TOML Indexing" # Updated Title
status = "draft"
created_date = "2025-04-25" # Set to current date
updated_date = "2025-04-25" # Set to current date
version = "1.0" # Version for this strategy document
tags = ["strategy", "kb-enrichment", "phase3", "indexing", "organization", "toml", "modes", "workflow-step"]
related_docs = [
    ".ruru/planning/mode-kb-enrichment-strategy/00-strategy-overview.md",
    ".ruru/planning/mode-kb-enrichment-strategy/WF-MODE-KB-ENRICHMENT-001.md", # Link to main workflow
    ".roo/rules/01-standard-toml-md-format.md" # Reference for TOML usage
]
objective = "Define the procedure for creating robust TOML-based index files for the AI-synthesized knowledge base documents within the target mode's directory structure, making the context discoverable. Corresponds to Steps 7-10 of the main enrichment workflow."
scope = "Details the steps for scanning synthesized markdown documents, parsing their TOML frontmatter, generating a library-specific `index.toml`, and updating the mode's master `kb/index.toml`."
# --- Plan Specific Fields ---
synthesized_kb_dir_template = ".ruru/modes/{mode_slug}/kb/{library_name}/synthesized/"
library_index_file_template = ".ruru/modes/{mode_slug}/kb/{library_name}/index.toml"
mode_master_index_file_template = ".ruru/modes/{mode_slug}/kb/index.toml"
+++

# KB Enrichment Strategy: Phase 3 - Organization & TOML Indexing

**Objective:** Generate valid, well-structured `index.toml` files to index the AI-synthesized KB documents located in `[synthesized_kb_dir_template]`, enabling the target mode (`[mode_slug]`) to discover and utilize this knowledge. This corresponds to **Steps 7-10** in the main workflow document (`WF-MODE-KB-ENRICHMENT-001.md`).
**Procedure (Executed by `roo-commander` for a given `[library_name]` and `[mode_slug]`):**

1.  **Scan for Synthesized Documents (Workflow Step 7):**
    *   **Description:** Identify all successfully created and validated synthesized markdown files for the specified library within the target mode's KB.
    *   **Tool:** `list_files`
    *   **Action:** Execute `<list_files><path>[synthesized_kb_dir_template]</path><recursive>false</recursive></list_files>` (substituting variables). Filter the result to include only `.md` files. Store the list of full file paths as `[Validated Synthesized Files]`.
    *   **Error Handling:** If `list_files` fails or returns an empty list (after the validation step), log a warning "No validated synthesized documents found in `[synthesized_kb_dir_template]`. Cannot generate index." and **Stop this phase.**

2.  **Extract Metadata & Build Library Index Data (Workflow Step 8):**
    *   **Description:** Read each validated synthesized file, parse its TOML frontmatter, and collect metadata for the library-specific index.
    *   **Tool:** `read_file`
    *   **Action:**
        *   Initialize an empty array `library_index_entries = []`.
        *   For each `file_path` in `[Validated Synthesized Files]`:
            *   Read the file content: `<read_file><path>[file_path]</path></read_file>`. Handle read errors (Log warning, skip file).
            *   **Parse TOML Frontmatter:** Attempt to extract the content between the `+++` delimiters and parse it as TOML. Handle parsing errors robustly (Log warning, skip file, consider delegation for complex parsing). Assume successful parsing results in a `frontmatter` object.
            *   Extract `title`, `summary`, and `tags` from the `frontmatter` object. Use fallback values (e.g., filename for title, empty string/array) if missing. Ensure `tags` is an array of strings.
            *   Create the index entry object: `{ title = "[Extracted Title]", summary = "[Extracted Summary]", tags = [Extracted Tags], file = "synthesized/[filename]" }` (where `[filename]` is the base name).
            *   Append this entry object to `library_index_entries`.
    *   **Output:** `library_index_entries` array populated with data from valid synthesized files.

3.  **Generate and Write Library `index.toml` (Workflow Step 9):**
    *   **Description:** Create the formatted TOML index file listing all processed synthesized documents for the specific library.
    *   **Tool:** `write_to_file`
    *   **Action:**
        *   If `library_index_entries` is empty, log "No valid entries to write to library index `[library_index_file_template]`." and skip to Step 4.
        *   Sort the `library_index_entries` array alphabetically by `title`.
        *   **Format as TOML:** Construct the final TOML string using the `[[documents]]` array of tables format. Ensure valid TOML syntax (quoted strings, valid arrays). See `WF-MODE-KB-ENRICHMENT-001.md` Step 9 for example structure.
        *   Calculate line count `[Line Count]`.
        *   Explain: "Writing synthesized document index for `[library_name]` to `[library_index_file_template]`..."
        *   Execute: `<write_to_file><path>[library_index_file_template]</path><content>[Generated TOML String]
**Procedure (Executed by `roo-commander` for a given `[library_name]` and `[mode_slug]`):**

1.  **Scan for Synthesized Documents (Workflow Step 7):**
    *   **Description:** Identify all successfully created and validated synthesized markdown files for the specified library within the target mode's KB.
    *   **Tool:** `list_files`
    *   **Action:** Execute `<list_files><path>[synthesized_kb_dir_template]</path><recursive>false</recursive></list_files>` (substituting variables). Filter the result to include only `.md` files. Store the list of full file paths as `[Validated Synthesized Files]`.
    *   **Error Handling:** If `list_files` fails or returns an empty list (after the validation step), log a warning "No validated synthesized documents found in `[synthesized_kb_dir_template]`. Cannot generate index." and **Stop this phase.**

2.  **Extract Metadata & Build Library Index Data (Workflow Step 8):**
    *   **Description:** Read each validated synthesized file, parse its TOML frontmatter, and collect metadata for the library-specific index.
    *   **Tool:** `read_file`
    *   **Action:**
        *   Initialize an empty array `library_index_entries = []`.
        *   For each `file_path` in `[Validated Synthesized Files]`:
            *   Read the file content: `<read_file><path>[file_path]</path></read_file>`. Handle read errors (Log warning, skip file).
            *   **Parse TOML Frontmatter:** Attempt to extract the content between the `+++` delimiters and parse it as TOML. Handle parsing errors robustly (Log warning, skip file, consider delegation for complex parsing). Assume successful parsing results in a `frontmatter` object.
            *   Extract `title`, `summary`, and `tags` from the `frontmatter` object. Use fallback values (e.g., filename for title, empty string/array) if missing. Ensure `tags` is an array of strings.
            *   Create the index entry object: `{ title = "[Extracted Title]", summary = "[Extracted Summary]", tags = [Extracted Tags], file = "synthesized/[filename]" }` (where `[filename]` is the base name).
            *   Append this entry object to `library_index_entries`.
    *   **Output:** `library_index_entries` array populated with data from valid synthesized files.

3.  **Generate and Write Library `index.toml` (Workflow Step 9):**
    *   **Description:** Create the formatted TOML index file listing all processed synthesized documents for the specific library.
    *   **Tool:** `write_to_file`
    *   **Action:**
        *   If `library_index_entries` is empty, log "No valid entries to write to library index `[library_index_file_template]`." and skip to Step 4.
        *   Sort the `library_index_entries` array alphabetically by `title`.
        *   **Format as TOML:** Construct the final TOML string using the `[[documents]]` array of tables format. Ensure valid TOML syntax (quoted strings, valid arrays). See `WF-MODE-KB-ENRICHMENT-001.md` Step 9 for example structure.
        *   Calculate line count `[Line Count]`.
        *   Explain: "Writing synthesized document index for `[library_name]` to `[library_index_file_template]`..."
        *   Execute: `<write_to_file><path>[library_index_file_template]</path><content>[Generated TOML String]