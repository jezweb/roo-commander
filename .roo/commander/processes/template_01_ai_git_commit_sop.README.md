# README: Standard Operating Procedure (SOP) Templates

## Purpose

This directory, `[.roo/commander/templates/processes/](.roo/commander/templates/processes/)`, contains TOML+Markdown templates for creating **Standard Operating Procedure (SOP) documents**.

SOPs are detailed, step-by-step instructions designed to ensure that complex or critical tasks within the Roo Commander V8 ecosystem are performed consistently and correctly every time. They can guide human actions or serve as the specification for an AI mode designed to automate a particular process.

## Available SOP Templates

1.  **`template_00_sop_generic.md`**
    *   **Purpose:** A generic template for any standard operating procedure. It provides a comprehensive structure covering objectives, prerequisites, roles, detailed steps, expected outcomes, error handling, and maintenance.
    *   **Schema Doc:** `template_00_sop_generic.README.md`
    *   **Use For:** Documenting manual processes, specifications for future automation, or complex multi-step tasks not tied to a single mode's internal KB procedure.

2.  **`template_01_ai_git_commit_sop.md`**
    *   **Purpose:** A specialized SOP template tailored for defining how an AI agent (e.g., a future `agent-git-committer`) should handle the process of checking for unstaged changes, prompting for staging if necessary, analyzing staged changes, and generating Git commit messages.
    *   **Schema Doc:** `template_01_ai_git_commit_sop.README.md`
    *   **Use For:** Specifying the logic for AI-assisted or automated Git commit workflows.

*   *(Add new SOP templates here as they are created, along with a link to their `.README.md` schema documentation.)*

## Creating New SOP Documents (Instances)

1.  **Identify Process:** Determine a repeatable process that needs standardization.
2.  **Choose Template:** Select the most appropriate SOP template from the list above (usually `template_00_sop_generic.md` unless a more specialized one exists).
3.  **Copy & Locate:**
    *   Copy the chosen template `.md` file to the `[.roo/commander/processes/](.roo/commander/processes/)` directory.
    *   Consider creating a subdirectory for the new SOP if it might have associated scripts or configuration examples (e.g., `[.roo/commander/processes/01_build_and_github_release/](.roo/commander/processes/01_build_and_github_release/)`).
4.  **Rename File:** Rename the SOP instance descriptively (e.g., `01_sop_build_and_github_release.md`).
5.  **Populate:** Fill in the TOML frontmatter and Markdown body with the specific details of the procedure, adhering to the schema defined in the template's `.README.md`.
6.  **Update Processes Index:** Add a reference to the new SOP document in `[.roo/commander/processes/README.md](.roo/commander/processes/README.md)` (this file).

Well-documented SOPs are crucial for the operational consistency, quality, and maintainability of the Roo Commander V8 project and its associated workflows.