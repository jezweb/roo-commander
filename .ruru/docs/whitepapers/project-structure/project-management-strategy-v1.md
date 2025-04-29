+++
# --- Metadata ---
id = "DOC-PM-STRATEGY-V1"
title = "Whitepaper: Roo Commander Project Management Strategy - Leveraging Epics, Features, and Tasks"
status = "published" # Or 'draft' initially
created_date = "2025-04-24"
updated_date = "2025-04-24"
version = "1.0"
authors = ["Roo Commander AI & Human Collaborator"]
tags = ["whitepaper", "documentation", "standard", "project-management", "strategy", "epic", "feature", "task", "mdtm", "hierarchy", "workflow"]
related_docs = [
    ".ruru/planning/project-structure/00-epic-feature-task-plan.md",
    ".roo/rules/04-mdtm-workflow-initiation.md"
]
objective = "To detail the standardized hierarchical approach for managing complex software development projects within the Roo Commander ecosystem, enabling better planning, tracking, and execution of large-scale initiatives."
scope = "Defines the concepts, artifacts, workflows, benefits, and usage guidelines for the Epic-Feature-Task hierarchy."
target_audience = ["Users", "Developers", "Project Managers", "Team Leads", "AI Modes"]
# --- Document Specific Fields ---
revision_history = [
    { version = "1.0", date = "2025-04-24", change = "Initial draft based on planning discussions." }
]
+++

# Whitepaper: Roo Commander Project Management Strategy (v1.0)
## Leveraging Epics, Features, and Tasks for Scalable Development

**Abstract:** As software projects grow in complexity, managing work solely through flat task lists becomes inefficient. This whitepaper introduces a standardized hierarchical project management strategy for Roo Commander, based on the industry-standard concepts of Epics, Features, and Tasks. This structure provides enhanced organization, clearer scope definition, improved long-term planning capabilities, and better traceability from high-level goals down to individual work items managed by specialized AI modes. We detail the new artifacts (Epics, Features), their standardized TOML+Markdown format, the workflow for decomposition, and the benefits this approach provides for both human users and AI agents operating within the Roo Commander ecosystem.

## 1. Introduction: The Need for Structure

Roo Commander excels at coordinating AI specialists to execute well-defined tasks. However, managing larger projects involving multiple related functionalities, complex dependencies, and work spanning days or weeks requires a more robust organizational framework than simple task lists or linear workflows. Traditional software development often relies on hierarchical structures to break down large initiatives into manageable pieces.

This document outlines Roo Commander's standardized approach to address this need, adopting an **Epic -> Feature -> Task** hierarchy. This strategy aims to:

*   Provide a clear structure for organizing complex project goals.
*   Enable better long-term planning and progress tracking.
*   Improve context sharing between different phases and AI modes.
*   Align AI-driven development with standard project management practices.
*   Scale Roo Commander's capabilities to handle substantial development efforts effectively.

## 2. The Epic-Feature-Task Hierarchy

This hierarchy provides three levels for organizing work:

*   **Epic:** Represents a large, significant body of work or a major initiative, often aligned with a strategic objective. Epics are typically too large to be completed in a single iteration or by a single team quickly. They serve as containers for related Features.
    *   *Example:* "Implement Comprehensive User Authentication System", "Build V1 E-commerce Product Catalog", "Refactor Monolith to Microservices".
*   **Feature:** Represents a distinct piece of functionality or capability that delivers value to the end-user or the system. Features should be sized appropriately to be planned and potentially completed within a reasonable development cycle (e.g., days to weeks). Each Feature belongs to a specific Epic.
    *   *Example (within "User Authentication" Epic):* "Implement Email/Password Sign-Up", "Develop Password Reset Flow", "Add Google OAuth Login", "Implement Role-Based Access Control".
*   **Task (MDTM):** Represents a specific, actionable unit of work required to implement a part of a Feature. Tasks are assigned to specialist AI modes (e.g., `dev-react`, `dev-api`) and tracked using the existing Markdown-Driven Task Management (MDTM) system (`TASK-...md` files). Tasks should be granular enough to be completed within hours or a few days.
    *   *Example (within "Password Reset Flow" Feature):* "Create password reset request API endpoint", "Design password reset email template", "Implement frontend form for requesting reset", "Implement frontend form for setting new password", "Write E2E test for password reset".

**Relationship:**

```mermaid
graph TD
    E[Epic: High-Level Goal] --> F1[Feature 1];
    E --> F2[Feature 2];
    E --> FN[Feature N...];
    F1 --> T11[Task 1.1 (MDTM)];
    F1 --> T12[Task 1.2 (MDTM)];
    F1 --> T1M[Task 1.M...];
    F2 --> T21[Task 2.1 (MDTM)];
    F2 --> T2N[Task 2.N...];

    style E fill:#f9d,stroke:#333,stroke-width:2px;
    style F1 fill:#ccf,stroke:#333,stroke-width:1px;
    style F2 fill:#ccf,stroke:#333,stroke-width:1px;
    style FN fill:#ccf,stroke:#333,stroke-width:1px;
    style T11 fill:#cfc,stroke:#666,stroke-width:1px;
    style T12 fill:#cfc,stroke:#666,stroke-width:1px;
    style T1M fill:#cfc,stroke:#666,stroke-width:1px;
    style T21 fill:#cfc,stroke:#666,stroke-width:1px;
    style T2N fill:#cfc,stroke:#666,stroke-width:1px;
```

## 3. Implementation Details: Artifacts and Formats

This hierarchy is implemented using standardized TOML+Markdown files stored in dedicated directories within the `.ruru/` structure. This ensures both human readability and machine parsability. (Reference: `.roo/rules/01-standard-toml-md-format.md`)

**3.1. Epic Artifacts:**

*   **Location:** `.ruru/epics/`
*   **Filename:** `EPIC-[ID]-[kebab-case-short-name].md` (e.g., `EPIC-001-user-authentication.md`)
*   **Template:** `.ruru/templates/toml-md/20_epic.md`
*   **Format:** TOML Frontmatter (`+++`) + Markdown Body
*   **Key TOML Fields:**
    *   `id` (string, required, e.g., "EPIC-001")
    *   `title` (string, required)
    *   `status` (string, required: "Draft", "Planned", "In Progress", "Done", "On Hold")
    *   `objective` (string, required)
    *   `related_features` (array of strings, optional, e.g., `["FEAT-023", "FEAT-024"]`) - *Links to child Features*
    *   `tags` (array of strings, optional)
*   **Body Content:** Detailed description, rationale, goals, scope (in/out), success metrics.

**3.2. Feature Artifacts:**

*   **Location:** `.ruru/features/`
*   **Filename:** `FEAT-[ID]-[kebab-case-short-name].md` (e.g., `FEAT-023-password-reset-flow.md`)
*   **Template:** `.ruru/templates/toml-md/21_feature.md`
*   **Format:** TOML Frontmatter (`+++`) + Markdown Body
*   **Key TOML Fields:**
    *   `id` (string, required, e.g., "FEAT-023")
    *   `title` (string, required)
    *   `status` (string, required: "Draft", "Ready for Dev", "In Progress", "Blocked", "In Review", "Done")
    *   `epic_id` (string, required) - *Links to parent Epic*
    *   `description` (string, required)
    *   `acceptance_criteria` (array of strings, required)
    *   `related_tasks` (array of strings, optional) - *Links to child Tasks*
    *   `tags` (array of strings, optional)
*   **Body Content:** User stories, detailed requirements, technical notes, design links.

**3.3. Task Artifacts (MDTM):**

*   **Location:** `.ruru/tasks/` (Existing)
*   **Filename:** `TASK-[MODE]-[YYYYMMDD-HHMMSS].md` (Existing)
*   **Template:** Existing MDTM templates (e.g., `01_mdtm_feature.md`) updated.
*   **Format:** TOML Frontmatter (`+++`) + Markdown Body (Existing)
*   **Key TOML Fields (Additions):**
    *   `feature_id` (string, required) - *Links to parent Feature*
    *   `epic_id` (string, optional but recommended) - *Links to parent Epic (derived from Feature)*
*   **Body Content:** (Existing: Description, Acceptance Criteria, Checklist). Checklist items represent the granular steps for the AI specialist.

## 4. Workflow: Planning and Decomposition

The process generally flows top-down, but can be iterative:

1.  **Epic Definition:** Initiated by a user's high-level goal. `roo-commander` interacts with the user, potentially delegating to `manager-product` or `core-architect` to define the Epic's objective, scope, and value. An initial `EPIC-...md` file is created (Status: "Draft").
2.  **Feature Breakdown:** Once an Epic is sufficiently defined (Status: "Planned"), `manager-product` or relevant leads, guided by `roo-commander` and user input, decompose the Epic into smaller, deliverable Features. `FEAT-...md` files are created (Status: "Draft"), linking back to the Epic via `epic_id`. The Epic's `related_features` list is updated.
3.  **Task Creation:** When a Feature is fully defined and prioritized (Status: "Ready for Dev"), `manager-project` or relevant Leads break it down into actionable Tasks for AI specialists. This utilizes the standard MDTM workflow (Rule `04-mdtm-workflow-initiation.md`), ensuring the `feature_id` (and ideally `epic_id`) are added to each new `TASK-...md` file's metadata. The Feature's `related_tasks` list is updated.
4.  **Execution:** Specialist AI modes execute the Tasks, updating their status within the `TASK-...md` file as per standard MDTM procedure.
5.  **Status Roll-up:** `manager-project` or `roo-commander` can monitor the status of Tasks associated with a Feature, and Features associated with an Epic, to provide higher-level progress reports. Feature and Epic statuses are updated manually or potentially via automated triggers based on child item completion (future enhancement).

## 5. Benefits of the Hierarchical Structure

*   **Improved Organization:** Clearly structures large projects into manageable levels.
*   **Enhanced Clarity:** Defines scope and objectives at different granularities (Epic vs. Feature vs. Task).
*   **Better Planning:** Facilitates long-term planning (Epics), release planning (Features), and sprint/iteration planning (Tasks).
*   **Increased Traceability:** Creates clear links from high-level goals down to specific implementation tasks and vice-versa.
*   **Scalability:** Handles projects of increasing size and complexity more effectively.
*   **Clearer Reporting:** Enables status reporting at the Epic, Feature, or Task level.
*   **Improved AI Context:** Allows AI modes to request context at the appropriate level (e.g., loading the parent Feature description when working on a Task).
*   **Role Alignment:** Better aligns with standard development roles (Product vs. Project vs. Technical Lead vs. Developer).

## 6. User Interaction and Discoverability

Users interact with this system primarily through `roo-commander`:

*   **Initiation:** Request planning ("Plan user auth epic", "Break down feature FEAT-023").
*   **Status Review:** Ask for status updates ("What is the status of Epic EPIC-001?", "Show tasks for Feature FEAT-023").
*   **Navigation:** Ask to see related items ("Show features for Epic EPIC-001", "What is the parent feature for TASK-REACT-...")

Discoverability relies on:

*   **Linking IDs:** The core mechanism enabling modes to find related artifacts.
*   **Directory Structure:** Standardized locations for Epics, Features, and Tasks.
*   **Querying/Searching:** Modes like `agent-context-resolver` or `manager-project` can be tasked with searching artifact metadata (e.g., finding all tasks linked to a feature ID).

## 7. Future Directions

*   **Automated Status Roll-up:** Automatically update Feature/Epic status based on child task completion.
*   **Visualization:** Generate visual representations (e.g., roadmaps, dependency graphs) from the artifact data.
*   **Enhanced Indexing/Search:** Create dedicated index files for faster querying of Epics and Features if metadata search becomes too slow.
*   **Integration:** Link artifacts to external tools (e.g., GitHub issues, project management software).
*   **Metrics & Reporting:** Generate automated progress reports, burndown charts, etc.

## 8. Conclusion

The introduction of the Epic-Feature-Task hierarchy provides a necessary structural foundation for managing complex software projects within Roo Commander. By standardizing artifacts, defining clear workflows, and enabling explicit linking, this strategy enhances planning, tracking, and execution capabilities, making Roo Commander a more powerful tool for substantial development efforts involving both human users and collaborating AI agents. Its successful adoption relies on consistent use of the defined artifacts and workflows by all participating modes and users.