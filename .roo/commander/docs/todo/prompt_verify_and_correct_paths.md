## Objective: Verify and Correct File Path References

Your task is to meticulously review a set of provided Markdown (`.md`) and TOML+Markdown (`.toml.md` or `.md` with TOML frontmatter) files from the Roo Commander V8 workspace. The goal is to ensure all internal file path references adhere to the **Workspace-Root-Relative Path Standard**.

**Workspace-Root-Relative Path Standard:**
1.  All file and directory path references **MUST** be relative to the workspace root and **MUST** begin with `.roo/`.
2.  Paths **MUST NOT** use relative navigation like `../` or `./` (unless `./` is unambiguously referring to the workspace root itself, which is discouraged in favor of `.roo/`).
3.  This applies to:
    *   Markdown links: `[link text](.roo/path/to/file.md)`
    *   TOML frontmatter fields that store paths:
        *   `template_schema_doc`
        *   `related_context` (array of paths)
        *   `input_artifacts` (array of paths in MDTM tasks)
        *   `output_artifacts` (array of paths in MDTM tasks)
        *   Any other custom field intended to store a file path.

**Inputs You Will Receive:**
1.  A list of files to check.
2.  A `tree` command output (`00-full-workspace-tree.txt` located at `.roo/commander/docs/reference/00-full-workspace-tree.txt`) representing the correct current directory structure. Use this tree to verify the existence and correct location of target files.

**Procedure:**

For each file provided:
1.  **Read Content:** Load the file content.
2.  **Scan for Paths:**
    *   **Markdown Links:** Identify all Markdown links `[text](path)`.
    *   **TOML Fields:** In the TOML frontmatter, identify all fields that are expected to contain file paths (common ones listed above).
3.  **Verify Each Path:** For every identified path:
    *   **Check Anchoring:** Does it start with `.roo/`?
        *   If **YES**, proceed to existence check.
        *   If **NO** (e.g., it uses `../`, `./`, or is a simple relative path like `kb/somefile.md` when it should be `.roo/commander/modes/currentmode/kb/somefile.md`):
            *   **Determine Correct Absolute Path:** Based on the location of the *current file being scanned* and the relative path found, determine the intended absolute path from the workspace root (starting with `.roo/`). Use the provided `00-full-workspace-tree.txt` to help resolve this.
            *   **Correct the Path:** Replace the incorrect relative path with the correct `.roo/` anchored absolute path.
    *   **Check Existence (Using Tree Output):** Does the (now corrected, `.roo/` anchored) path point to a file or directory that actually exists in the `00-full-workspace-tree.txt`?
        *   If **YES**, the path is likely correct.
        *   If **NO**:
            *   This indicates a broken link or an incorrect path.
            *   **Attempt to Find Correct Target:** Based on the link text or TOML field name, and the surrounding context, try to identify the correct target file using the `00-full-workspace-tree.txt`.
            *   If a likely correct target is found, update the path.
            *   If no obvious correct target can be found, flag this path as "BROKEN_LINK_NEEDS_MANUAL_REVIEW" in your output.
4.  **Output:**
    *   For each file processed, provide a diff or a list of changes made.
    *   List any paths flagged as "BROKEN_LINK_NEEDS_MANUAL_REVIEW".

**Example of Correction:**

*   File being scanned: `.roo/commander/modes/manager-data-product/kb/README.md`
*   Incorrect path found in its `related_context`: `["../../rules-manager-data-product/00-core-principles.md"]`
*   AI determines correct path: `".roo/rules-manager-data-product/00-manager-data-product-core-principles.md"`
*   AI proposes change: Replace `../../rules-manager-data-product/00-core-principles.md` with `.roo/rules-manager-data-product/00-manager-data-product-core-principles.md`.

**Be meticulous. Correct pathing is critical for system integrity.**