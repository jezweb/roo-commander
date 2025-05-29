+++
# --- Squad Planning: Squad Member Role Definition ---
id = "SQUAD-ROLE-WEBAPPSCAFFOLD-ROUTECONFIG-20250515" # WEBAPPSCAFFOLD, ROUTECONFIG for this role
title = "Squad Member Role Definition: Generic Routing Configurator for Web App Scaffolding Squad"
status = "draft"
created_date = "20250515"
last_updated = "20250515T00:00:00Z" # Initial creation timestamp
version = "1.0"
tags = ["squad-planning", "role-definition", "mode-design", "web-app-scaffolding-squad", "routing", "navigation", "framework-agnostic-logic"]
template_schema_doc = ".roo/commander/templates/planning/squad_design/template_01_squad_member_role_definition.README.md"

# --- Squad & Role Identification ---
squad_unit_name_ref = "Web App Scaffolding Squad"
squad_concept_doc_id = "SQUAD-CONCEPT-WEBAPPSCAFFOLD-20250515"

proposed_mode_slug = "generic-routing-configurator"
proposed_mode_name = "🗺️ Generic Routing Configurator"
proposed_classification = "squad"

# --- Core Function & Deliverables ---
core_responsibility_summary = "Configures basic page routing within a scaffolded web application project, based on the chosen framework and the list of created pages/views."
primary_output_artifact_description = "Modified framework-specific routing files (e.g., `App.jsx` for React Router, `router/index.js` for Vue Router, file-system based routes for Next.js/SvelteKit) to include routes for the scaffolded pages/components. Also, a report of routes configured."
primary_output_artifact_template_ref = "[N/A - Modifies existing framework configuration files or creates route definition files, not a single TOML+MD artifact from a specific template for its *entire* output.]"

# --- Skills & Knowledge ---
key_skills_required = [
    "Understanding of routing concepts in web applications (paths, components, layouts).",
    "Knowledge of how routing is configured in common frontend frameworks (React Router, Vue Router, Next.js file-system routing, SvelteKit file-system routing - via KB).",
    "Ability to read project structure to identify page/component files to be routed.",
    "Skill in modifying existing code files (e.g., router configuration files) or creating new route definition files according to framework conventions.",
    "Basic understanding of nested routes and dynamic route parameters (for stubbing)."
]
potential_kb_skill_topics = [
    # One skill per supported framework for basic routing setup, e.g.:
    "Configuring Basic Routes in Next.js (App Router or Pages Router)",
    "Configuring Basic Routes in SvelteKit (File-System Routing)",
    "Configuring Basic Routes with React Router v6",
    "Configuring Basic Routes with Vue Router v4",
    "Setting up a Simple Navigation Menu Stub linking to Routes"
]
potential_kb_wisdom_topics = [
    "Importance of Consistent Routing Patterns",
    "File-System Routing vs. Config-Based Routing Pros & Cons (Conceptual)",
    "Planning for Future Route Growth in Scaffolds"
]

# --- Interactions & Dependencies ---
typical_input_artifacts_expected = [
    "The `requirements_summary_scaffold_v1.md` (for list of key pages/views) from `web-app-requirements-clarifier`.",
    "The `tech_stack_recommendation_v1.md` (for chosen frontend framework) from `web-app-tech-stack-advisor`.",
    "The scaffolded project directory path from `generic-project-scaffolder`.",
    "List of component files created by `generic-component-stubber` and their paths."
]
downstream_squad_members_dependent_on_output = [
    "readme-and-run-guide-writer (may list key routes available in the scaffold)",
    "Human developers (who will build upon these basic routes)."
]
+++

# Squad Member Role Definition: {{ proposed_mode_name }}

## 1. Overview 📝

*   **Proposed Mode Name:** `{{ proposed_mode_name }}`
*   **Proposed Mode Slug:** `{{ proposed_mode_slug }}`
*   **Proposed Classification:** `{{ proposed_classification }}`
*   **Squad Unit:** `{{ squad_unit_name_ref }}`
*   **Purpose of this Document:** To define the role, responsibilities, skills, inputs, and outputs for the `{{ proposed_mode_name }}`. This mode is responsible for setting up the initial page routing for the scaffolded web application, making the stubbed pages/components navigable.

## 2. Core Responsibility & Domain Focus 🎯

*   **Summary:** `{{ core_responsibility_summary }}`
*   **Detailed Responsibilities:**
    *   Receive an MDTM task from `manager-web-app-scaffolder` including:
        *   The `requirements_summary_scaffold_v1.md` (listing key pages/views).
        *   The chosen frontend framework (from `tech_stack_recommendation_v1.md`).
        *   The root path to the scaffolded project directory.
        *   A list of component files/paths created by `generic-component-stubber`.
    *   Consult its Knowledge Base for the routing conventions and setup procedures for the specified frontend framework.
    *   For each key page/view identified in the requirements:
        *   Determine the appropriate URL path (e.g., `/`, `/about`, `/products`, `/users/:id`).
        *   Identify the main component file (created by `generic-component-stubber`) that should render for that path.
        *   Modify the framework's routing configuration files (e.g., `App.jsx`/`main.jsx` for React Router, `router/index.js` for Vue Router) to define these routes.
        *   For file-system based routers (like Next.js, SvelteKit), ensure the page/component files created by `generic-component-stubber` are in the correct directories to automatically create routes (e.g., `pages/about.jsx` or `src/routes/about/+page.svelte`). This mode might primarily verify such structures or create very basic route files if the framework requires them even with file-system routing (e.g., SvelteKit `+page.js` or `+layout.js` stubs).
    *   (Optional) Create a very basic navigation menu stub (e.g., in a root layout component) with links to the newly configured routes.
    *   Report the configured routes and any modified/created routing files.

## 3. Primary Output Artifact(s) 📄➡️

*   **Description:** `{{ primary_output_artifact_description }}`
*   **Format/Template:** Modifications to existing framework-specific code files or creation of new route definition files (e.g., `.js`, `.jsx`, `.ts`, `.tsx`, `.svelte`).
*   **Key Characteristics of Output:** Functional basic routing that allows navigation between the scaffolded pages/views. The application should be runnable with these routes active.

## 4. Key Skills & Knowledge Required 🧠

*   **Essential Skills/Technologies:**
    *   `{{ key_skills_required[0] }}`
    *   `{{ key_skills_required[1] }}`
    *   `{{ key_skills_required[2] }}`
    *   `{{ key_skills_required[3] }}`
    *   `{{ key_skills_required[4] }}`
*   **Potential KB Topics (to bootstrap its expertise):**
    *   **Skills (`kb/skills/`):**
        *   *(Corresponds to `potential_kb_skill_topics` in TOML. One per supported framework's routing mechanism.)*
        *   `configuring_nextjs_app_router_basics.md`
        *   `configuring_sveltekit_filesystem_routing.md`
        *   `setting_up_react_router_v6_minimal.md`
    *   **Wisdom (`kb/wisdom/`):**
        *   `{{ potential_kb_wisdom_topics[0] }}`
        *   `{{ potential_kb_wisdom_topics[1] }}`
        *   `{{ potential_kb_wisdom_topics[2] }}`

## 5. Interactions & Dependencies within the Squad Workflow 🔄

### 5.1. Typical Input Artifacts Expected
*   `{{ typical_input_artifacts_expected[0] }}` (To know which pages need routes).
*   `{{ typical_input_artifacts_expected[1] }}` (To know which framework's routing conventions to use).
*   `{{ typical_input_artifacts_expected[2] }}` (The project to modify).
*   `{{ typical_input_artifacts_expected[3] }}` (The components to link to routes).

### 5.2. Downstream Dependencies (Who uses its output?)
*   `{{ downstream_squad_members_dependent_on_output[0] }}`: Will need to know the main routes to document how to navigate the scaffold.
*   `{{ downstream_squad_members_dependent_on_output[1] }}`: Will use these routes to navigate and further develop the application.
*   (Potentially) `web-app-basic-tester` might use these routes to plan basic navigation tests.

## 6. Considerations for `.mode.md` & System Prompt 💡

*   The `roleDefinition` for `generic-routing-configurator` must highlight its KB-driven ability to configure routing for various specified frameworks.
*   Its `[metadata]` should include:
    *   `squad_name = "Web App Scaffolding Squad"`
    *   `primary_output_description = "Modified/created routing configuration files making scaffolded pages navigable."`
    *   `primary_output_template = "N/A (modifies/creates framework-specific code files)"`
    *   `reports_to = "manager-web-app-scaffolder"`
*   It will primarily use file editing tools (`apply_diff`, `search_and_replace`, or `write_to_file` for new route definition files).
*   Its KB will be crucial for framework-specific routing syntax and file locations.

## 7. Open Questions / Further Definition Needed ❓

*   How does it handle dynamic routes (e.g., `/products/[id]`) at the scaffolding stage? (It should probably create placeholder dynamic route files/configs, e.g., a `[id].jsx` page in Next.js).
*   Should it attempt to create a basic `Navbar` component with links, or just set up the route definitions? (A very basic Navbar stub could be in scope).
*   How are layouts (e.g., shared headers/footers) handled in relation to routing? (For frameworks like Next.js/SvelteKit with built-in layout conventions, it should respect those. For others, it might create a root layout component if one doesn't exist).