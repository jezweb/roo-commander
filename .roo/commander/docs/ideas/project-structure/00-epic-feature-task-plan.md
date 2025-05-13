+++
# --- Metadata ---
id = "PLAN-PROJECT-STRUCTURE-V1"
title = "Plan: Implement Epic-Feature-Task Hierarchy"
status = "draft"
created_date = "2025-04-24"
updated_date = "2025-04-24"
version = "1.0"
tags = ["plan", "project-management", "structure", "epic", "feature", "task", "mdtm", "hierarchy"]
related_docs = [
    ".ruru/planning/project-structure/01-define-artifacts-formats.md",
    ".ruru/planning/project-structure/02-planning-decomposition-workflow.md",
    ".ruru/planning/project-structure/03-linking-discoverability.md",
    ".ruru/planning/project-structure/04-mode-role-updates.md",
    ".roo/rules/04-mdtm-workflow-initiation.md" # Core task rule
]
objective = "Define and implement a hierarchical structure (Epics -> Features -> Tasks) for planning, managing, and tracking larger bodies of work within Roo Commander projects."
scope = "Covers the definition of new artifacts (Epics, Features), their file formats, the workflow for creating and decomposing them, linking mechanisms, and necessary updates to mode responsibilities and rules."
# --- Plan Specific Fields ---
responsible_coordinator = "roo-commander"
target_directories = [".ruru/epics/", ".ruru/features/", ".ruru/tasks/"]
+++

# Plan: Implement Epic-Feature-Task Hierarchy

This plan outlines the steps to implement a structured hierarchy for managing complex projects within Roo Commander, moving beyond simple task lists or workflows.

**Phases:**

1.  **Define Artifacts & Formats:** Specify the structure, metadata (TOML schema), content guidelines, naming conventions, and file locations for new Epic and Feature artifacts. Define necessary updates to the existing Task (MDTM) artifact format. Create corresponding templates.
    *   **Details:** See `.ruru/planning/project-structure/01-define-artifacts-formats.md`

2.  **Define Planning & Decomposition Workflow:** Detail the process for creating Epics, breaking them down into Features, and decomposing Features into Tasks. Define user interactions and mode responsibilities (e.g., `manager-product`, `manager-project`, `core-architect`, Leads).
    *   **Details:** See `.ruru/planning/project-structure/02-planning-decomposition-workflow.md`

3.  **Implement Linking & Discoverability:** Define how Epics, Features, and Tasks will be linked via metadata IDs. Outline how modes can discover related items (e.g., find all tasks for a feature, find the epic for a feature).
    *   **Details:** See `.ruru/planning/project-structure/03-linking-discoverability.md`

4.  **Update Mode Roles & Rules:** Identify which existing mode definitions and rules need modification to understand and interact with the new hierarchy (e.g., task creation rule, status review logic).
    *   **Details:** See `.ruru/planning/project-structure/04-mode-role-updates.md`

**Execution:** Roo Commander will coordinate the implementation of these changes, delegating file creation, template definition, workflow implementation, and rule updates as needed.