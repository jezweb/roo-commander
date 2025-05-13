# --- Basic Metadata ---
id = "DOC-FS-SPEC-001"
title = "IntelliManage: File System Structure Specification"
status = "draft"
doc_version = "1.0"
content_version = 1.0
audience = ["developers", "architects", "contributors", "ai_modes"]
last_reviewed = "2025-04-28" # Use current date
template_schema_doc = ".ruru/templates/toml-md/09_documentation.README.md"
tags = ["intellimanage", "architecture", "file-system", "specification", "structure", "naming-convention", "multi-project"]
related_docs = ["DOC-ARCH-001"] # Link to the Architecture document
+++

# IntelliManage: File System Structure Specification

## 1. Introduction / Overview 🎯

This document specifies the standard file system structure and naming conventions for the **IntelliManage** project management framework. Adherence to this structure is crucial for ensuring consistency, enabling automated tooling (including AI agents), facilitating navigation, and supporting multi-project workspaces within the `.ruru/` directory.

This specification details the organization of project artifacts (Initiatives, Epics, Features, Tasks, etc.), configuration files, and supporting documents.

## 2. Core Principles 💡

*   **Centralized Location:** All IntelliManage artifacts reside within a dedicated `.ruru/projects/` directory at the workspace root.
*   **Multi-Project Support:** The structure explicitly supports managing multiple distinct projects within a single workspace.
*   **Hierarchical Organization:** Directory structure mirrors the conceptual hierarchy of work items (Initiative -> Epic -> Feature -> Task).
*   **Discoverability:** Consistent naming conventions make it easy for both humans and AI to locate specific artifacts.
*   **Version Controlled:** The entire structure lives within the project's Git repository.
*   **Separation of Concerns:** Project management artifacts are kept separate from source code (`src/`), Roo mode configurations (`.ruru/modes/`, `.roo/`), and general documentation (`docs/`).

## 3. Workspace Root Structure (`.ruru/projects/`) 🌳

The primary IntelliManage directory resides within the `.ruru` folder at the workspace root.

```
WORKSPACE_ROOT/
├── .ruru/
│   ├── projects/             # 👈 **Main IntelliManage Directory**
│   │   ├── projects_config.toml # Optional: Workspace-level config (lists projects)
│   │   ├── [project_slug_1]/   # 👈 Project 1 Directory
│   │   │   └── ... (See Project Directory Structure below)
│   │   ├── [project_slug_2]/   # 👈 Project 2 Directory
│   │   │   └── ...
│   │   └── ...                 # Other project directories
│   │
│   ├── modes/                # (Roo Code Modes)
│   ├── processes/            # (Roo Code Processes)
│   ├── templates/            # (Roo Code Templates)
│   └── ...                   # (Other .ruru subdirectories)
│
├── .roo/                     # (Roo Code Rules)
│   └── ...
│
├── src/                      # (Project Source Code)
│   └── ...
│
└── ...                       # (Other workspace files)
```

*   **`.ruru/projects/`**: The root directory for all IntelliManage data.
*   **`projects_config.toml` (Optional):** A workspace-level configuration file. Can be used to list all managed projects within the workspace, define global tags, or set workspace-wide defaults. Its presence helps tools and AI discover the managed projects.
*   **`[project_slug]/`**: A subdirectory for each distinct project being managed. The `[project_slug]` should be lowercase, use hyphens or underscores, and be unique within the workspace (e.g., `frontend-app`, `backend-api`, `shared-library`).

## 4. Project Directory Structure (`.ruru/projects/[project_slug]/`) 📂

Each project subdirectory follows a standardized internal structure:

```
.ruru/projects/[project_slug]/
├── initiatives/          # Contains Initiative artifacts (.md)
│   └── INIT-001_example-initiative.md
├── epics/                # Contains Epic artifacts (.md)
│   └── EPIC-001_example-epic.md
├── features/             # Contains Feature artifacts (.md)
│   └── FEAT-001_example-feature.md
├── tasks/                # Contains Task, Story, Bug artifacts (.md)
│   ├── TASK-001_implement-widget.md
│   └── BUG-002_fix-login-error.md
├── decisions/            # Contains Architecture Decision Records (.md)
│   └── ADR-001_database-choice.md
├── reports/              # Contains generated or manual reports (.md, .csv, etc.)
│   └── sprint-1_summary.md
├── planning/             # Contains high-level plans, roadmaps (.md)
│   └── roadmap_q3_2025.md
├── context/              # Optional: Project-specific context files for AI/humans
│   └── api_style_guide.md
└── project_config.toml   # Project-specific configuration
```

*   **`initiatives/`**: Stores `.md` files representing high-level strategic Initiatives linked to this project.
*   **`epics/`**: Stores `.md` files representing project Epics.
*   **`features/`**: Stores `.md` files representing project Features.
*   **`tasks/`**: Stores `.md` files representing Tasks, User Stories, and Bugs for this project. This aligns with the existing task system foundation.
*   **`decisions/`**: Stores Architecture Decision Records (ADRs) specific to this project using the standard ADR format.
*   **`reports/`**: Stores generated reports (e.g., sprint summaries, burndown charts) or manually created status reports relevant to this project.
*   **`planning/`**: Stores higher-level planning documents, roadmaps, or strategy outlines specific to this project.
*   **`context/` (Optional):** Can store project-specific context files (e.g., style guides, specific workflow notes) used by AI or team members.
*   **`project_config.toml`**: **Required** file within each project directory. Defines project-specific settings:
    *   `project_name`: Human-readable project name.
    *   `methodology`: `"Scrum"`, `"Kanban"`, `"Custom"`, or `"None"`.
    *   `custom_statuses`: (If methodology="Custom") Array of status strings.
    *   `default_assignee`: (Optional) Default user/role for new tasks.
    *   Other project-specific configurations.

## 5. File Naming Conventions 🏷️

Consistency in file naming is essential for identification and linking.

*   **Artifact Files (Initiatives, Epics, Features, Tasks, Bugs - `.md`):**
    *   **Format:** `TYPE-ID_short-description.md`
    *   **`TYPE`:** Uppercase abbreviation identifying the artifact type:
        *   `INIT`: Initiative
        *   `EPIC`: Epic
        *   `FEAT`: Feature
        *   `TASK`: Task/Story
        *   `BUG`: Bug
    *   **`ID`:** A unique identifier, typically numerical (e.g., `001`, `042`). Can be project-specific sequence or globally unique if needed for cross-project linking.
    *   **`short-description`:** A brief, lowercase, hyphenated description (e.g., `user-onboarding`, `fix-login-button`).
    *   **Examples:**
        *   `INIT-001_reduce-churn.md`
        *   `EPIC-001_user-onboarding.md`
        *   `FEAT-015_implement-dashboard-widget.md`
        *   `TASK-101_refactor-auth-service.md`
        *   `BUG-042_incorrect-price-display.md`

*   **Decision Files (ADRs - `.md`):**
    *   **Format:** `ADR-NNN_short-description.md`
    *   **`NNN`:** Sequential number for ADRs within the project.
    *   **Example:** `ADR-001_database-choice.md`

*   **Configuration Files (`.toml`):**
    *   `projects_config.toml` (Workspace Level - Optional)
    *   `project_config.toml` (Project Level - Required)

*   **Report/Planning/Context Files (`.md`, etc.):**
    *   Use descriptive, lowercase, hyphenated names. Include dates where relevant.
    *   **Examples:** `roadmap_q3-2025.md`, `sprint-5-retrospective.md`, `api-style-guide_v2.md`, `performance-test-results_2025-04-28.csv`.

## 6. Example Structure 🌳

```
.ruru/
└── projects/
    ├── projects_config.toml
    ├── frontend-app/
    │   ├── epics/
    │   │   └── EPIC-001_user-profile-page.md
    │   ├── features/
    │   │   ├── FEAT-001_display-user-info.md
    │   │   └── FEAT-002_edit-profile-form.md
    │   ├── tasks/
    │   │   ├── TASK-001_create-profile-component.md
    │   │   └── TASK-002_add-form-validation.md
    │   ├── decisions/
    │   │   └── ADR-002_state-management-choice.md
    │   └── project_config.toml
    │
    └── backend-api/
        ├── epics/
        │   └── EPIC-005_payment-integration.md
        ├── features/
        │   └── FEAT-010_stripe-checkout.md
        ├── tasks/
        │   ├── TASK-020_create-payment-endpoint.md
        │   └── BUG-003_incorrect-tax-calculation.md
        ├── decisions/
        │   └── ADR-001_database-choice.md
        └── project_config.toml
```

## 7. Rationale & Considerations 🤔

*   **`.ruru` Location:** Keeps IntelliManage artifacts grouped with other Roo Code configurations (modes, rules), making the workspace structure cleaner from the user's perspective compared to a root-level `.project` folder.
*   **Multi-Project:** The `projects/[project_slug]/` structure provides clear separation and allows for project-specific configuration and artifact organization.
*   **Standard Subdirectories:** Using consistent subdirectory names (`epics`, `features`, `tasks`, etc.) simplifies navigation and tooling.
*   **Naming Convention:** The `TYPE-ID_description.md` format provides immediate identification of artifact type, a unique reference, and a hint of the content.
*   **Configuration:** Separating workspace (`projects_config.toml`) and project (`project_config.toml`) configuration allows for both global defaults and specific overrides.

## 8. Future Considerations ✨

*   **Archive Directory:** Consider adding an `archive/` subdirectory within each project folder to move completed or closed items, mirroring the active structure.
*   **Cross-Project Linking:** Define a clear convention for linking artifacts across different project slugs (e.g., using a `project_slug:TYPE-ID` format in `depends_on` fields).
*   **Template Directory:** A `.ruru/projects/_templates/` directory could hold templates specific to IntelliManage artifacts.

---

This specification provides the foundational file system layout for IntelliManage. The next logical step would be **#3 TOML Schema Definitions**. Shall we proceed with that?```

## 7. Rationale & Considerations 🤔

*   **`.ruru` Location:** Keeps IntelliManage artifacts grouped with other Roo Code configurations (modes, rules), making the workspace structure cleaner from the user's perspective compared to a root-level `.project` folder.
*   **Multi-Project:** The `projects/[project_slug]/` structure provides clear separation and allows for project-specific configuration and artifact organization.
*   **Standard Subdirectories:** Using consistent subdirectory names (`epics`, `features`, `tasks`, etc.) simplifies navigation and tooling.
*   **Naming Convention:** The `TYPE-ID_description.md` format provides immediate identification of artifact type, a unique reference, and a hint of the content.
*   **Configuration:** Separating workspace (`projects_config.toml`) and project (`project_config.toml`) configuration allows for both global defaults and specific overrides.

## 8. Future Considerations ✨

*   **Archive Directory:** Consider adding an `archive/` subdirectory within each project folder to move completed or closed items, mirroring the active structure.
*   **Cross-Project Linking:** Define a clear convention for linking artifacts across different project slugs (e.g., using a `project_slug:TYPE-ID` format in `depends_on` fields).
*   **Template Directory:** A `.ruru/projects/_templates/` directory could hold templates specific to IntelliManage artifacts.\