+++
# --- Squad Planning: Squad Member Role Definition ---
id = "SQUAD-ROLE-FEIMPLEMENT-PAGEVIEWASS-20250515" # FEIMPLEMENT for Frontend Implementation, PAGEVIEWASS for this role
title = "Squad Member Role Definition: Page/View Assembler for Frontend Implementation Squad"
status = "draft"
created_date = "20250515"
last_updated = "20250515T00:00:00Z" # Initial creation timestamp
version = "1.0"
tags = ["squad-planning", "role-definition", "mode-design", "frontend-implementation-squad", "ui-assembly", "page-layout", "component-integration"]
template_schema_doc = ".roo/commander/templates/planning/squad_design/template_01_squad_member_role_definition.README.md"

# --- Squad & Role Identification ---
squad_unit_name_ref = "Frontend Implementation Squad"
squad_concept_doc_id = "SQUAD-CONCEPT-FEIMPLEMENT-20250515"

proposed_mode_slug = "page-view-assembler"
proposed_mode_name = "📰 Page/View Assembler" # Changed emoji
proposed_classification = "squad"

# --- Core Function & Deliverables ---
core_responsibility_summary = "Assembles complete pages or complex views by integrating multiple UI components (from `ui-component-developer` or existing libraries) according to layout designs and feature specifications."
primary_output_artifact_description = "Page-level component files or view template files (e.g., `UserProfilePage.jsx`, `ProductListing.vue`) that import and arrange individual UI components to form a complete user interface for a specific route or view."
primary_output_artifact_template_ref = "[N/A - Creates/modifies framework-specific page/view files, not a single TOML+MD artifact from a specific template for its *entire* output.]"

# --- Skills & Knowledge ---
key_skills_required = [
    "Strong understanding of how to structure pages/views in the chosen frontend framework (React, Vue, Svelte, Angular, Next.js, SvelteKit - via KB).",
    "Ability to import and correctly pass props to child components.",
    "Knowledge of layout principles and how to arrange components to match design specifications (e.g., using wrapper divs, flex/grid if not handled by a root layout).",
    "Understanding of how routing maps to page/view components in the framework.",
    "Skill in reading component specifications and UI mockups to understand the overall page structure."
]
potential_kb_skill_topics = [
    # One skill per supported framework for page assembly, e.g.:
    "Assembling a Page in Next.js using Imported Components",
    "Creating a View in Vue by Composing Components",
    "Structuring a SvelteKit Page with Multiple Components",
    "Implementing Nested Layouts in [Framework]",
    "Passing Data and Event Handlers Between Parent and Child Components (Basic)"
]
potential_kb_wisdom_topics = [
    "Principles of Maintainable Page Structures",
    "Separation of Concerns Between Page/View Components and Reusable UI Components",
    "Optimizing Page Load by Lazy Loading Components (Conceptual)"
]

# --- Interactions & Dependencies ---
typical_input_artifacts_expected = [
    "The `frontend_feature_specification_v1.md` (for overall page structure, list of components per page) from `feature-requirements-analyzer`.",
    "UI mockups or design specifications for the full page/view.",
    "Access to the library of UI components developed by `ui-component-developer` (paths to their files).",
    "The project's established tech stack (frontend framework) from `manager-web-app-frontend-implementer` or project context.",
    "Path to the existing scaffolded project and relevant page/view directory."
]
downstream_squad_members_dependent_on_output = [
    "client-logic-implementer (will add page-level specific logic or orchestrate state across components on this page)",
    "state-management-integrator (may connect these assembled pages/views to global state)",
    "api-client-integrator (may wire up data fetching at the page/view level)",
    "frontend-test-writer (will write integration tests for these assembled pages/views)"
]
+++

# Squad Member Role Definition: {{ proposed_mode_name }}

## 1. Overview 📝

*   **Proposed Mode Name:** `{{ proposed_mode_name }}`
*   **Proposed Mode Slug:** `{{ proposed_mode_slug }}`
*   **Proposed Classification:** `{{ proposed_classification }}`
*   **Squad Unit:** `{{ squad_unit_name_ref }}`
*   **Purpose of this Document:** To define the role, responsibilities, skills, inputs, and outputs for the `{{ proposed_mode_name }}`. This mode is responsible for taking individual UI components and arranging them into complete, structured pages or views within the application.

## 2. Core Responsibility & Domain Focus 🎯

*   **Summary:** `{{ core_responsibility_summary }}`
*   **Detailed Responsibilities:**
    *   Receive an MDTM task from `manager-web-app-frontend-implementer` specifying a page or view to be assembled. Inputs will include:
        *   Feature specifications detailing the components needed for the page and their general arrangement (from `frontend_feature_specification_v1.md`).
        *   UI mockups or layout designs for the page.
        *   Paths to the already developed UI components (from `ui-component-developer`).
        *   The target frontend framework.
    *   Consult its Knowledge Base for framework-specific conventions on page/view structure, component importation, and layout composition.
    *   Create or modify the main file for the page/view (e.g., `UserProfilePage.jsx`, `views/ProductDetail.vue`).
    *   Import the required individual UI components into this page/view file.
    *   Arrange and nest these components according to the design specifications, using appropriate HTML structuring elements (divs, sections, articles, etc.) and layout CSS (e.g., Tailwind classes if used by the project, or framework-specific layout components).
    *   Pass down necessary (placeholder or basic) props to child components as indicated by the feature specification.
    *   Ensure the assembled page/view adheres to any root layout components (e.g., main app shell with header/footer) if they exist.
    *   Report the path to the created/modified page/view file.

## 3. Primary Output Artifact(s) 📄➡️

*   **Description:** `{{ primary_output_artifact_description }}`
*   **Format/Template:** Framework-specific code files (e.g., `.jsx`, `.tsx`, `.vue`, `.svelte`).
*   **Key Characteristics of Output:** Well-structured page/view files that correctly import and compose individual UI components to match the intended design layout. These pages should be ready for routing and for more complex client-side logic or state management to be added.

## 4. Key Skills & Knowledge Required 🧠

*   **Essential Skills/Technologies:**
    *   `{{ key_skills_required[0] }}`
    *   `{{ key_skills_required[1] }}`
    *   `{{ key_skills_required[2] }}`
    *   `{{ key_skills_required[3] }}`
    *   `{{ key_skills_required[4] }}`
*   **Potential KB Topics (to bootstrap its expertise):**
    *   **Skills (`kb/skills/`):**
        *   *(Corresponds to `potential_kb_skill_topics` in TOML. One per supported framework.)*
        *   `composing_pages_in_nextjs_with_app_router.md`
        *   `building_views_in_vue_using_sfc_imports.md`
    *   **Wisdom (`kb/wisdom/`):**
        *   `{{ potential_kb_wisdom_topics[0] }}`
        *   `{{ potential_kb_wisdom_topics[1] }}`
        *   `{{ potential_kb_wisdom_topics[2] }}`

## 5. Interactions & Dependencies within the Squad Workflow 🔄

### 5.1. Typical Input Artifacts Expected
*   `{{ typical_input_artifacts_expected[0] }}` (Defines what components go on the page and their general layout).
*   `{{ typical_input_artifacts_expected[1] }}` (Visual guide for assembly).
*   `{{ typical_input_artifacts_expected[2] }}` (The actual building blocks).
*   `{{ typical_input_artifacts_expected[3] }}` (To use correct framework conventions).
*   `{{ typical_input_artifacts_expected[4] }}` (Where to create/modify the page file).

### 5.2. Downstream Dependencies (Who uses its output?)
*   `{{ downstream_squad_members_dependent_on_output[0] }}`: Will add specific business logic, complex event handling, or orchestrate state across the components within these assembled pages.
*   `{{ downstream_squad_members_dependent_on_output[1] }}`: Will connect these assembled pages/views to global application state.
*   `{{ downstream_squad_members_dependent_on_output[2] }}`: Will wire up data fetching calls at the page/view level or within components on these pages.
*   `{{ downstream_squad_members_dependent_on_output[3] }}`: Will write tests for these complete pages/views.

## 6. Considerations for `.mode.md` & System Prompt 💡

*   The `roleDefinition` for `page-view-assembler` should emphasize its role in composing larger UI structures from smaller, pre-built components, adhering to framework conventions for page creation.
*   Its `[metadata]` should include:
    *   `squad_name = "Frontend Implementation Squad"`
    *   `primary_output_description = "Page-level component files or view templates that arrange UI components into complete user interfaces."`
    *   `primary_output_template = "N/A (creates/modifies framework-specific page/view files)"`
    *   `reports_to = "manager-web-app-frontend-implementer"`
*   It will primarily use file creation and editing tools, with a strong reliance on its KB for framework-specific page construction patterns.

## 7. Open Questions / Further Definition Needed ❓

*   How does it handle shared layouts (e.g., app shells with headers, footers, sidebars)? (It should assume these are either pre-existing from scaffolding or that it might be tasked to create/use a basic page layout component).
*   What is the expected level of detail for "placeholder props" it passes to child components? (Initially, minimal, just enough for structural assembly; actual data flow logic comes later).