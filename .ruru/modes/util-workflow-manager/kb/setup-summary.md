+++
id = "KB-UTIL-WORKFLOW-MANAGER-SETUP"
title = "Setup Summary: util-workflow-manager"
context_type = "knowledge_base"
scope = "Prerequisites and core concepts for using util-workflow-manager"
target_audience = ["util-workflow-manager"]
tags = ["workflow", "manager", "setup", "structure", "toml-md", "templates"]
+++

# Setup Summary: util-workflow-manager

Effective use of the `util-workflow-manager` requires understanding the established workflow structure and conventions:

1.  **Directory Structure:** Workflows reside in `.ruru/workflows/WF-[NAME]-V[VERSION]/`.
2.  **File Format:** All workflow files (`README.md`, `NN_*.md`) use TOML frontmatter (`+++` delimited) for metadata and Markdown for content. Adherence to Rule `01-standard-toml-md-format.md` is mandatory.
3.  **Core Files & Templates:**

    *   **Workflow Definition (`README.md`):** Defines the workflow's purpose, inputs, outputs, and entry point. Uses template `.ruru/templates/toml-md/23_workflow_readme.md`.

    *   **Step Files (`NN_*.md`):** Define individual steps, dependencies, delegation targets, and data flow. Use templates:

        *   Start: `.ruru/templates/toml-md/24_workflow_step_start.md`

        *   Standard: `.ruru/templates/toml-md/25_workflow_step_standard.md`

        *   Finish: `.ruru/templates/toml-md/26_workflow_step_finish.md`
4.  **CRUD Operations:** The mode performs CRUD by manipulating these files and directories using appropriate file system tools (`write_to_file`, `apply_diff`, `execute_command` for `mkdir`/`rm`, etc.), respecting the defined structures and templates.