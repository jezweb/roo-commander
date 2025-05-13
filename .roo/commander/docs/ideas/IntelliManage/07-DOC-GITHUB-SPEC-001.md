# --- Basic Metadata ---
id = "DOC-GITHUB-SPEC-001"
title = "IntelliManage: GitHub Integration Specification"
status = "draft"
doc_version = "1.0"
content_version = 1.0
audience = ["developers", "architects", "contributors", "ai_modes"]
last_reviewed = "2025-04-28" # Use current date
template_schema_doc = ".ruru/templates/toml-md/09_documentation.README.md" # Assuming this is the schema doc template
tags = ["intellimanage", "architecture", "specification", "github", "integration", "issues", "labels", "milestones", "version-control"]
related_docs = ["DOC-ARCH-001", "DOC-FS-SPEC-001", "DOC-SCHEMA-001", "DOC-FUNC-SPEC-001", "DOC-METHODOLOGY-GUIDE-001"] # Link to relevant docs
+++

# IntelliManage: GitHub Integration Specification

## 1. Introduction / Overview 🎯

This document specifies how the IntelliManage project management framework integrates with GitHub. The goal is to provide seamless, bi-directional synchronization (where feasible and configured) between IntelliManage artifacts (Tasks, Stories, Bugs, Epics, Features) stored locally in `.ruru/projects/` and corresponding GitHub elements (Issues, Labels, Milestones).

This integration aims to:
*   Keep project management data consistent across both platforms.
*   Allow developers to manage tasks via familiar GitHub interfaces.
*   Enable automated status updates based on Git/GitHub events (commits, PRs).
*   Provide visibility into development progress directly within GitHub.

This specification details the configuration, mapping, synchronization logic, and error handling for the **Integration Layer** described in the Overall Architecture (`DOC-ARCH-001`).

## 2. Core Principles 💡

*   **Bi-directional Sync (Optional):** Aim for changes in one system to reflect in the other, but allow for configuration to make it one-way or selective.
*   **Configurable:** Integration **MUST** be explicitly enabled and configured on a per-project basis within `project_config.toml`.
*   **Clear Mapping:** Define unambiguous mappings between IntelliManage artifact types/fields and GitHub Issues/Labels/Milestones.
*   **Conflict Resolution:** Implement a defined strategy (e.g., last update wins, flag for user) to handle simultaneous updates.
*   **Secure Authentication:** Utilize secure methods (e.g., GitHub Personal Access Tokens stored in environment variables) for API access.
*   **Performance:** Minimize API calls; leverage webhooks for incoming changes where possible.
*   **Traceability:** Maintain links between IntelliManage artifacts and their corresponding GitHub counterparts.

## 3. Architecture & Interaction 🏗️

The **Integration Layer** component facilitates communication between the IntelliManage **Core Logic Engine (CLE)** and the **GitHub API**.

```mermaid
graph LR
    CLE[Core Logic Engine] <--> IL[Integration Layer];
    IL <--> GHAPI[GitHub API];
    FS[File System Store (.ruru/projects/)] <--> CLE;
    Git[Git Events] --> IL;

    subgraph IntelliManage System
        CLE
        FS
        IL
    end

    subgraph External
        GHAPI
        Git
    end

    style IL fill:#f9d,stroke:#333,stroke-width:2px
```

*   **CLE -> IL:** Sends requests to create/update/fetch GitHub items based on changes in the local File System Store.
*   **IL -> GHAPI:** Makes authenticated REST or GraphQL API calls to GitHub.
*   **GHAPI -> IL:** Returns data or confirmation from GitHub.
*   **Git Events -> IL:** Receives notifications (e.g., via filesystem watchers or hooks) about relevant Git events (commits, pushes).
*   **GitHub Webhooks -> IL (Future):** Could receive real-time updates from GitHub (requires a publicly accessible endpoint or alternative mechanism).
*   **IL -> CLE:** Sends notifications about changes originating from GitHub or Git events, triggering updates in the File System Store.

## 4. Configuration (`project_config.toml`) ⚙️

Integration is configured within each project's `.ruru/projects/[project_slug]/project_config.toml` file.

```toml
# --- GitHub Integration Settings ---
[github_integration]
enable_sync = false              # Boolean, Required. Set to true to enable sync for this project.
repo_owner = "..."             # String, Required if enable_sync=true. GitHub username or org name.
repo_name = "..."              # String, Required if enable_sync=true. Repository name.
auth_method = "pat_env_var"    # String, Required if enable_sync=true. Currently supported: "pat_env_var".
pat_env_var_name = "GITHUB_PAT" # String, Required if auth_method="pat_env_var". Name of the env var holding the PAT.

# --- Mapping Configuration ---
[github_integration.mapping]
# --- Issue Mapping ---
# Defines which IntelliManage types map to GitHub Issues
issue_types = ["✨ Story", "🛠️ Task", "🐞 Bug", "💡 Spike"] # Array of Strings, Required. IntelliManage types to sync as Issues.

# --- Label Mapping ---
# Defines prefixes and specific mappings for labels <-> IntelliManage fields
label_prefix = "PM:"           # String, Optional. Prefix for IntelliManage-managed labels (e.g., "PM:Status:ToDo"). Default: "PM:".
sync_status_as_label = true    # Boolean, Optional. If true, sync IntelliManage 'status' with labels. Default: true.
sync_type_as_label = true      # Boolean, Optional. If true, sync IntelliManage 'type' with labels. Default: true.
sync_priority_as_label = true  # Boolean, Optional. If true, sync IntelliManage 'priority' with labels. Default: true.
sync_tags_as_labels = true     # Boolean, Optional. If true, sync IntelliManage 'tags' array with labels (without prefix). Default: true.

# Specific mapping for status values to labels (Optional, overrides default PM:Status:Value format)
# [github_integration.mapping.status_labels]
#   "⚪️ Backlog" = "PM:Status:Backlog"
#   "🟡 To Do" = "PM:Status:ToDo"
#   "🔵 In Progress" = "PM:Status:InProgress"
#   "🟣 Review" = "PM:Status:Review"
#   "🟢 Done" = "PM:Status:Done" # Note: GitHub 'closed' state might also be used

# Specific mapping for type values to labels (Optional, overrides default PM:Type:Value format)
# [github_integration.mapping.type_labels]
#   "✨ Story" = "PM:Type:Story"
#   "🐞 Bug" = "PM:Type:Bug"
#   # ... etc

# Specific mapping for priority values to labels (Optional, overrides default PM:Priority:Value format)
# [github_integration.mapping.priority_labels]
#   "🔼 High" = "PM:Priority:High"
#   # ... etc

# --- Milestone Mapping ---
# Defines which IntelliManage type maps to GitHub Milestones
milestone_type = "🗺️ Epic"     # String, Optional. IntelliManage type to sync as Milestones (e.g., "🗺️ Epic", "🌟 Feature"). Default: "🗺️ Epic".
sync_milestone_due_date = true # Boolean, Optional. Sync 'target_date'/'milestone_target_date' with Milestone due date. Default: true.

# --- Commit/PR Linking ---
enable_commit_linking = true   # Boolean, Optional. Scan commits for keywords to link to tasks. Default: true.
commit_link_keywords = ["Fixes", "Closes", "Resolves", "Refs", "Relates to"] # Array of Strings, Optional. Keywords triggering links.
commit_status_update_keywords = ["Fixes", "Closes", "Resolves"] # Array of Strings, Optional. Keywords suggesting task closure.

# --- Sync Behavior ---
conflict_resolution = "last_update_wins" # String, Optional. Options: "last_update_wins", "prefer_local", "prefer_github", "manual_flag". Default: "last_update_wins".
# create_missing_labels = true # Boolean, Optional. Automatically create mapped labels in GitHub if they don't exist. Default: true.
# create_missing_milestones = true # Boolean, Optional. Automatically create mapped milestones in GitHub if they don't exist. Default: true.
```

## 5. Synchronization Logic 🔄

### 5.1. Issues <-> Tasks/Stories/Bugs

*   **Linking:**
    *   When a new IntelliManage item (of `issue_types`) is created, the Integration Layer creates a corresponding GitHub Issue.
    *   The GitHub Issue URL/Number is stored in the IntelliManage item's `related_issues` TOML field (e.g., `["https://github.com/owner/repo/issues/123"]` or `["GH-123"]`).
    *   The IntelliManage item's ID (`TASK-123`) is added to the GitHub Issue body or a dedicated comment (e.g., `IntelliManage-ID: TASK-123`).
    *   When a GitHub Issue is detected (via webhook or polling) that lacks an IntelliManage ID, a corresponding IntelliManage item can optionally be created.
*   **Field Sync:**
    *   **Title:** Bi-directional sync between IntelliManage `title` and GitHub Issue `title`.
    *   **Description:** Bi-directional sync between IntelliManage Markdown body and GitHub Issue `body`. Markdown format differences should be handled gracefully.
    *   **Status <-> State/Labels:**
        *   IntelliManage `status` maps to GitHub Labels based on `github_integration.mapping.status_labels` or the default `PM:Status:[Value]` convention.
        *   Changing status in IntelliManage updates labels on the linked GitHub Issue.
        *   Changing relevant status labels on GitHub updates the status in the linked IntelliManage item.
        *   Closing a GitHub Issue typically sets the IntelliManage `status` to `"🟢 Done"` or `"🧊 Archived"`. Reopening sets it back to a configurable state (e.g., `"🟡 To Do"`).
    *   **Assignee:** Bi-directional sync between IntelliManage `assigned_to` (if it maps to a GitHub username) and GitHub Issue `assignees`.
    *   **Type/Priority/Tags <-> Labels:** Sync based on configuration flags (`sync_type_as_label`, etc.) and mapping rules.

### 5.2. Labels <-> Metadata

*   **Convention:** Use a configurable `label_prefix` (default "PM:") to distinguish IntelliManage-managed labels.
*   **Creation:** If `create_missing_labels` is true, the Integration Layer automatically creates labels in GitHub (e.g., "PM:Status:ToDo", "PM:Type:Bug") when an IntelliManage item with that metadata is synced for the first time.
*   **Sync:**
    *   When IntelliManage `status`, `type`, or `priority` changes, corresponding labels are added/removed on the linked GitHub Issue.
    *   When relevant prefixed labels are added/removed on GitHub, the corresponding IntelliManage field is updated.
    *   If `sync_tags_as_labels` is true, IntelliManage `tags` are synced bi-directionally with GitHub labels (without the prefix).

### 5.3. Milestones <-> Epics/Features

*   **Mapping:** Based on `github_integration.mapping.milestone_type` (default "🗺️ Epic").
*   **Linking:** Similar to Issues, store GitHub Milestone URL/Number in the Epic's `related_issues` (or a dedicated `related_milestones` field) and the Epic ID in the Milestone description.
*   **Field Sync:**
    *   **Title:** Bi-directional sync.
    *   **Description:** Bi-directional sync.
    *   **State:** GitHub Milestone `state` (open/closed) syncs with Epic `status` (mapping "closed" to `"🟢 Done"`/`"🧊 Archived"`).
    *   **Due Date:** If `sync_milestone_due_date` is true, sync Epic `target_date` / `milestone_target_date` with Milestone `due_on`.

### 5.4. Commit/PR Linking -> Tasks

*   **Detection:** The Integration Layer (or a separate Git hook mechanism) scans commit messages and PR titles/bodies pushed to the configured repository.
*   **Parsing:** Looks for keywords defined in `commit_link_keywords` followed by a valid IntelliManage artifact ID (e.g., "Fixes TASK-123", "Refs EPIC-005").
*   **Action:**
    1.  Adds the commit SHA or PR URL/ID to the `related_commits` or `related_prs` array in the corresponding artifact's TOML.
    2.  If a keyword from `commit_status_update_keywords` is used (e.g., "Closes TASK-123"), the AI Engine suggests changing the artifact `status` to `"🟢 Done"` (requiring user confirmation).

### 5.5. GitHub Projects Integration (Future Consideration)

*   Mapping IntelliManage hierarchies to GitHub Projects v2 boards/roadmaps is complex due to differing structures and API limitations.
*   Initial integration could focus on creating project items linked to Issues, but maintaining hierarchy sync is challenging. This is considered out of scope for v1.0.

## 6. Conflict Resolution Strategy ⚔️

*   The `conflict_resolution` setting in `project_config.toml` defines behavior when an item is updated in both IntelliManage and GitHub near-simultaneously before a sync occurs.
    *   `"last_update_wins"` (Default): The change with the later timestamp overwrites the other. Simplest but can lead to data loss.
    *   `"prefer_local"`: Changes made locally in IntelliManage always overwrite GitHub changes.
    *   `"prefer_github"`: Changes made in GitHub always overwrite local IntelliManage changes.
    *   `"manual_flag"`: The system detects a conflict, flags both items (e.g., adds a "Conflict" label/tag), logs the issue, and requires manual user intervention to resolve. Safest but requires user action.

## 7. Authentication 🔑

*   **Method:** Primarily uses GitHub Personal Access Tokens (PATs).
*   **Scopes:** The PAT requires appropriate scopes (e.g., `repo`, `read:org`, `project` if GitHub Projects integration is added). The specific required scopes MUST be documented clearly for the user.
*   **Storage:** PATs **MUST NOT** be stored directly in configuration files. The `pat_env_var_name` setting specifies the **name of the environment variable** where the user must store their PAT (e.g., `GITHUB_PAT`). The Integration Layer reads the token from this environment variable at runtime.

## 8. AI Assistance 🤖

The AI Engine can assist with GitHub integration by:

*   Guiding the user through the initial setup in `project_config.toml`.
*   Suggesting label mappings based on existing IntelliManage statuses/types/priorities.
*   Helping users generate a PAT with the correct scopes on GitHub.
*   Flagging synchronization conflicts for user review (especially if `conflict_resolution = "manual_flag"`).
*   Explaining sync errors reported by the Integration Layer.

## 9. Error Handling ⚠️

The Integration Layer must handle and report errors, including:

*   **Authentication Errors:** Invalid or missing PAT, insufficient scopes.
*   **API Errors:** GitHub API rate limits, server errors, invalid requests.
*   **Mapping Errors:** Configured label/milestone mappings are incorrect or reference non-existent GitHub items.
*   **Not Found Errors:** Linked Issue/Milestone deleted on GitHub.
*   **Conflict Errors:** If resolution fails or requires manual intervention.
*   **Network Errors:** Failure to connect to GitHub API.

Errors should be logged, and user notifications provided via the Interaction Layer.

## 10. Limitations & Considerations

*   **API Rate Limits:** Frequent updates or large projects may hit GitHub API rate limits. Implement appropriate backoff/retry logic.
*   **Sync Delay:** Synchronization is not instantaneous. There will be a delay between changes in one system reflecting in the other (especially without webhooks).
*   **Mapping Complexity:** Mapping statuses and custom fields perfectly between systems can be challenging. Focus on core fields initially.
*   **Webhook Dependency (Future):** Real-time updates from GitHub rely on webhooks, which require a publicly accessible endpoint for the Integration Layer or alternative event handling. Initial implementation might rely on polling.

## 11. Conclusion ✅

Integrating IntelliManage with GitHub provides significant value by bridging the gap between project management and the development workflow. By enabling configurable, bi-directional synchronization of key artifacts like Tasks/Issues, Labels, and Milestones, developers can work more efficiently within their preferred environment while maintaining consistent project visibility and status tracking across both IntelliManage and GitHub. Careful configuration, clear mapping, robust error handling, and secure authentication are essential for a successful implementation.