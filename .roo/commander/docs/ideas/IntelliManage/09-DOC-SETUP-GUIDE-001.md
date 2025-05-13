# --- Basic Metadata ---
id = "DOC-SETUP-GUIDE-001"
title = "IntelliManage: Setup & Configuration Guide"
status = "draft"
doc_version = "1.0"
content_version = 1.0
audience = ["users", "developers", "project_managers"]
last_reviewed = "2025-04-28" # Use current date
template_schema_doc = ".ruru/templates/toml-md/10_guide_tutorial.README.md" # Using the guide template schema
tags = ["intellimanage", "setup", "configuration", "guide", "tutorial", "getting-started", "github", "multi-project"]
related_docs = ["DOC-ARCH-001", "DOC-FS-SPEC-001", "DOC-SCHEMA-001", "DOC-UI-CMD-SPEC-001", "DOC-GITHUB-SPEC-001"] # Link to relevant specs
difficulty = "beginner"
estimated_time = "~15-30 minutes"
prerequisites = ["Development Environment with IntelliManage capability (e.g., Roo Code)", "Basic understanding of TOML", "Git repository initialized (optional, for GitHub integration)"]
learning_objectives = ["Initialize IntelliManage in a workspace", "Configure multiple projects", "Set project methodology (Scrum, Kanban, Custom)", "Optionally configure GitHub integration"]
+++

# IntelliManage: Setup & Configuration Guide

## 1. Introduction / Goal 🎯

Welcome to IntelliManage! This guide provides step-by-step instructions on how to set up and configure the IntelliManage project management framework within your development workspace (e.g., VS Code with Roo Code).

By the end of this guide, you will be able to:
*   Initialize the necessary IntelliManage directory structure.
*   Configure one or more projects within your workspace.
*   Set the desired project management methodology (Scrum, Kanban, Custom, or None) for each project.
*   Optionally, configure integration with GitHub.

## 2. Prerequisites Checklist ✅

*   [ ] You have a development environment where IntelliManage is available (e.g., Roo Code extension installed and active).
*   [ ] Your workspace is open in the development environment.
*   [ ] (Optional) Your workspace is initialized as a Git repository if you plan to use GitHub integration or version control for your project artifacts.
*   [ ] (Optional) You have a GitHub Personal Access Token (PAT) with appropriate scopes (`repo`) ready if you plan to enable GitHub integration.

## 3. Initializing IntelliManage (Workspace Level) 🚀

IntelliManage stores its data within the `.ruru/projects/` directory at the root of your workspace.

*   **Action:** The first time you use an IntelliManage command (e.g., `!pm init project ...` or even `!pm help`), the system should automatically detect if the `.ruru/projects/` directory exists.
*   **Automatic Creation:** If the directory does not exist, the system (Core Logic Engine or AI Engine) **MUST** automatically create it:
    *   `.ruru/` (if it doesn't exist)
    *   `.ruru/projects/`
*   **Verification:** You can manually check if the `.ruru/projects/` directory has been created in your workspace file explorer (ensure hidden folders are visible).

## 4. Configuring Your First Project 🏗️

You need to define at least one project within IntelliManage.

*   **Step 4.1: Choose a Project Slug**
    *   Decide on a short, unique, filesystem-friendly identifier for your project (lowercase, hyphens/underscores allowed).
    *   **Example:** `my-web-app`, `backend_service`, `design-system`. Let's use `my-web-app` for this example.
*   **Step 4.2: Use the `init project` Command**
    *   In the chat interface, use the `!pm init project` command.
    *   **Command:**
        ```
        !pm init project my-web-app --name "My Web Application" --methodology Kanban
        ```
    *   **Explanation:**
        *   `my-web-app`: This is the `project_slug`. The system will create the directory `.ruru/projects/my-web-app/`.
        *   `--name "My Web Application"`: Sets the human-readable project name.
        *   `--methodology Kanban`: Sets the project management methodology. Options are `Scrum`, `Kanban`, `Custom`, `None`.
*   **Step 4.3: System Action**
    *   IntelliManage will:
        1.  Create the directory `.ruru/projects/my-web-app/`.
        2.  Create the standard subdirectories inside it (`epics/`, `features/`, `tasks/`, `decisions/`, `reports/`, `planning/`).
        3.  Create the `project_config.toml` file inside `.ruru/projects/my-web-app/` with the following content:
            ```toml
            project_name = "My Web Application"
            project_slug = "my-web-app"
            methodology = "Kanban"
            ```
*   **Step 4.4: Verification**
    *   Check your file explorer for the new directory structure and the `project_config.toml` file.
    *   The system should provide a confirmation message.

## 5. Configuring Multiple Projects (Optional) 🏢

IntelliManage supports multiple projects within the same workspace.

*   **Action:** Simply repeat **Section 4** for each additional project, using a unique `project_slug`.
    *   **Example:**
        ```
        !pm init project backend-api --name "Backend API Service" --methodology Scrum
        ```
*   **Workspace Config (Optional):** To help tools discover all projects, you can optionally create/update a workspace-level configuration file: `.ruru/projects/projects_config.toml`.
    *   **Command:** `!pm config workspace --add-project my-web-app`
    *   **Command:** `!pm config workspace --add-project backend-api`
    *   **Resulting File (`.ruru/projects/projects_config.toml`):**
        ```toml
        managed_projects = ["my-web-app", "backend-api"]
        ```

## 6. Setting the Active Project Context 📌

When working with multiple projects, commands often need to know which project you're referring to.

*   **Action:** Use the `set-active` command.
*   **Command:** `!pm set-active my-web-app`
*   **Result:** Subsequent commands (like `!pm list tasks`) will default to operating on the `my-web-app` project unless explicitly overridden with the `--project <slug>` flag.
*   **Note:** The active project context is typically session-based and may need to be set again in new sessions.

## 7. Customizing Project Methodology 🛠️

You can change or customize the methodology for an existing project.

*   **Changing Methodology:**
    *   **Command:** `!pm config project my-web-app --set methodology=Scrum`
*   **Defining Custom Statuses (if `methodology = "Custom"`):**
    *   **Command:** `!pm config project my-web-app --set methodology=Custom --set custom_statuses='["⚪️ Idea", "⚫️ Refinement", "🟡 Ready", "🔵 Dev", "🟣 Review", "🟢 Done"]'`
    *   **Note:** The value for `--set custom_statuses` must be a valid TOML array string.
*   **Defining WIP Limits (if `methodology = "Kanban"`):**
    *   **Command:** `!pm config project my-web-app --set wip_limits.'🔵 In Progress'=5 --set wip_limits.'🟣 Review'=2`
    *   **Note:** Use dot notation for nested TOML tables. WIP limits are informational for AI/tooling; direct enforcement is complex.
*   **Defining Sprints (if `methodology = "Scrum"`):**
    *   **Command:** `!pm config project my-web-app --set sprints.sprint_3='{ start_date = "2025-06-01", end_date = "2025-06-14", goal = "Implement search feature" }'`
    *   **Note:** Use TOML inline table syntax for the value.

## 8. Configuring GitHub Integration (Optional) 🔗

Connect your IntelliManage project to a GitHub repository.

*   **Step 8.1: Prepare GitHub PAT**
    *   Create a GitHub Personal Access Token (PAT) with the necessary scopes (e.g., `repo`). Refer to GitHub documentation for creating PATs.
    *   **Crucially:** Store this PAT securely as an **environment variable** accessible by your development environment/Roo Code. **Do not** paste the token directly into configuration files or chat.
*   **Step 8.2: Configure `project_config.toml`**
    *   Use the `!pm config project` command to set the required fields.
    *   **Command:**
        ```
        !pm config project my-web-app --set github_integration.enable_sync=true --set github_integration.repo_owner="your-github-username" --set github_integration.repo_name="your-repo-name" --set github_integration.pat_env_var_name="GITHUB_PAT"
        ```
    *   **Replace:** `"your-github-username"`, `"your-repo-name"`, and `"GITHUB_PAT"` (use the actual name of the environment variable where you stored the token).
*   **Step 8.3: Configure Mappings (Optional)**
    *   Adjust default label prefixes, sync flags, or specific label/status mappings if needed using `!pm config project ... --set github_integration.mapping...`. Refer to the GitHub Integration Specification (`DOC-GITHUB-SPEC-001`) for details.
    *   **Example:** `!pm config project my-web-app --set github_integration.mapping.label_prefix="IM:"`
*   **Step 8.4: Verify**
    *   Use `!pm status github --project my-web-app` to check if the integration is enabled and can connect (it may perform a basic API check).

## 9. Troubleshooting / Common Issues ❓

*   **Directory Not Created:** Ensure your environment has write permissions for the `.ruru/` directory. Try creating `.ruru/projects/` manually if automatic creation fails.
*   **Invalid TOML:** Double-check syntax when using `--set` for complex values like arrays or inline tables. Use online TOML validators if unsure.
*   **GitHub Sync Errors:** Verify your PAT is correct, stored in the specified environment variable, and has the required scopes. Check `repo_owner` and `repo_name`. Ensure network connectivity to GitHub.
*   **Command Not Found:** Ensure the IntelliManage capability/Roo Code extension is properly installed and active.

## 10. Conclusion ✅

You have now successfully set up the IntelliManage framework in your workspace. You can create and manage multiple projects, configure their methodologies, and optionally integrate with GitHub. Refer to the **User Interaction & Command Specification (`DOC-UI-CMD-SPEC-001`)** for details on how to create and manage project artifacts using the `!pm` commands.