+++
# --- Squad Planning: Squad Member Role Definition ---
id = "SQUAD-ROLE-FEIMPLEMENT-UICOMPDEV-20250515" # FEIMPLEMENT for Frontend Implementation, UICOMPDEV for this role
title = "Squad Member Role Definition: UI Component Developer for Frontend Implementation Squad"
status = "draft"
created_date = "20250515"
last_updated = "20250515T00:00:00Z" # Initial creation timestamp
version = "1.0"
tags = ["squad-planning", "role-definition", "mode-design", "frontend-implementation-squad", "ui-components", "frontend-development", "react", "vue", "svelte", "angular"]
template_schema_doc = ".roo/commander/templates/planning/squad_design/template_01_squad_member_role_definition.README.md"

# --- Squad & Role Identification ---
squad_unit_name_ref = "Frontend Implementation Squad"
squad_concept_doc_id = "SQUAD-CONCEPT-FEIMPLEMENT-20250515"

proposed_mode_slug = "ui-component-developer"
proposed_mode_name = "💻 UI Component Developer" # Changed emoji
proposed_classification = "squad"

# --- Core Function & Deliverables ---
core_responsibility_summary = "Develops individual, reusable UI components (e.g., forms, buttons, cards, modals) using a specified frontend framework and styling methodology, based on detailed component specifications and UI designs."
primary_output_artifact_description = "Functional UI component code files (e.g., `.jsx`, `.vue`, `.svelte`, `.ts`) adhering to the project's chosen framework and styling conventions, along with basic unit tests or Storybook stories if specified."
primary_output_artifact_template_ref = "[N/A - Creates framework-specific code files, not a single TOML+MD artifact from a specific template for its *entire* output.]"

# --- Skills & Knowledge ---
key_skills_required = [
    "Proficiency in one or more specified frontend frameworks (e.g., React, Vue, Svelte, Angular - via KB).",
    "Strong HTML5, CSS3 (including Flexbox, Grid), and JavaScript/TypeScript skills.",
    "Experience with chosen UI component libraries (e.g., MUI, Shadcn/ui) or utility CSS (Tailwind CSS).",
    "Ability to translate UI mockups and component specifications into working code.",
    "Writing clean, maintainable, and reusable component code.",
    "Understanding of component props, state, lifecycle (for the given framework).",
    "Basic unit testing practices for components (e.g., with Jest, Vitest, Testing Library - via KB)."
]
potential_kb_skill_topics = [
    # One skill per supported framework/library for component development, e.g.:
    "Building Accessible Forms in React with Formik/React Hook Form",
    "Creating Reusable Data Display Components in Vue with Vuetify",
    "Implementing Interactive Modals in Svelte with Tailwind CSS",
    "Developing Custom Input Controls with Shadcn/ui Primitives",
    "Writing Basic Unit Tests for React Components using Jest & RTL",
    "Best Practices for Structuring [Framework] Components"
]
potential_kb_wisdom_topics = [
    "Principles of Reusable Component Design",
    "Managing Component State Effectively in [Framework]",
    "Ensuring Component Accessibility (WCAG Basics)",
    "Writing Performant Frontend Components"
]

# --- Interactions & Dependencies ---
typical_input_artifacts_expected = [
    "The `frontend_feature_specification_v1.md` (or a specific component spec section) from `feature-requirements-analyzer`, detailing the component's purpose, props, interactions, and data needs.",
    "UI mockups or design specifications for the component.",
    "The project's established tech stack (frontend framework, UI library, styling methodology) from `manager-web-app-frontend-implementer` or project context.",
    "Path to the existing scaffolded project or relevant component directory."
]
downstream_squad_members_dependent_on_output = [
    "page-view-assembler (will integrate these components into pages/views)",
    "client-logic-implementer (may add more complex logic to or orchestrate these components)",
    "frontend-test-writer (will write more comprehensive integration/E2E tests involving these components)"
]
+++

# Squad Member Role Definition: {{ proposed_mode_name }}

## 1. Overview 📝

*   **Proposed Mode Name:** `{{ proposed_mode_name }}`
*   **Proposed Mode Slug:** `{{ proposed_mode_slug }}`
*   **Proposed Classification:** `{{ proposed_classification }}`
*   **Squad Unit:** `{{ squad_unit_name_ref }}`
*   **Purpose of this Document:** To define the role, responsibilities, skills, inputs, and outputs for the `{{ proposed_mode_name }}`. This mode is the primary workhorse for building individual, functional UI components as part of a feature implementation.

## 2. Core Responsibility & Domain Focus 🎯

*   **Summary:** `{{ core_responsibility_summary }}`
*   **Detailed Responsibilities:**
    *   Receive an MDTM task from `manager-web-app-frontend-implementer` specifying one or more UI components to develop. Inputs will include:
        *   Detailed component specifications (from `frontend_feature_specification_v1.md`).
        *   UI mockups/designs.
        *   The target frontend framework and styling conventions for the project.
    *   Consult its Knowledge Base for framework-specific syntax, best practices, and established patterns for the chosen framework and UI library (e.g., React, Vue, Angular, Svelte; MUI, Shadcn/ui, Tailwind CSS).
    *   Write clean, semantic, and maintainable HTML, CSS (or utility classes), and JavaScript/TypeScript code to implement the component's structure, styling, and basic interactivity.
    *   Implement component props as per specification for configurability and data passing.
    *   Manage internal component state appropriately using framework conventions.
    *   Ensure basic responsiveness and consider accessibility best practices during development.
    *   (If specified in task) Write basic unit tests for the component's core functionality.
    *   (If specified in task) Create Storybook stories or similar isolated development/documentation for the component.
    *   Save the component code in the appropriate directory within the project structure.
    *   Report the paths to the created/modified component files and any associated test/story files.

## 3. Primary Output Artifact(s) 📄➡️

*   **Description:** `{{ primary_output_artifact_description }}`
*   **Format/Template:** Framework-specific code files (e.g., `.jsx`, `.tsx`, `.vue`, `.svelte`, `.ts`, `.css`, `.scss`).
*   **Key Characteristics of Output:** Well-structured, functional, and styled UI components that meet the provided specifications and are ready for integration into larger views or pages. Code should adhere to project linting and formatting standards.

## 4. Key Skills & Knowledge Required 🧠

*   **Essential Skills/Technologies:**
    *   `{{ key_skills_required[0] }}`
    *   `{{ key_skills_required[1] }}`
    *   `{{ key_skills_required[2] }}`
    *   `{{ key_skills_required[3] }}`
    *   `{{ key_skills_required[4] }}`
    *   `{{ key_skills_required[5] }}`
    *   `{{ key_skills_required[6] }}`
*   **Potential KB Topics (to bootstrap its expertise):**
    *   **Skills (`kb/skills/`):**
        *   *(Corresponds to `potential_kb_skill_topics` in TOML. One detailed guide per framework/UI library for common component types.)*
    *   **Wisdom (`kb/wisdom/`):**
        *   `{{ potential_kb_wisdom_topics[0] }}`
        *   `{{ potential_kb_wisdom_topics[1] }}`
        *   `{{ potential_kb_wisdom_topics[2] }}`
        *   `{{ potential_kb_wisdom_topics[3] }}`

## 5. Interactions & Dependencies within the Squad Workflow 🔄

### 5.1. Typical Input Artifacts Expected
*   `{{ typical_input_artifacts_expected[0] }}` (Primary input detailing what to build).
*   `{{ typical_input_artifacts_expected[1] }}` (Visual guide for the component).
*   `{{ typical_input_artifacts_expected[2] }}` (To ensure consistency and correct framework usage).
*   `{{ typical_input_artifacts_expected[3] }}` (Where to place the new component files).

### 5.2. Downstream Dependencies (Who uses its output?)
*   `{{ downstream_squad_members_dependent_on_output[0] }}`: Will take these developed components and arrange them into complete page layouts or views.
*   `{{ downstream_squad_members_dependent_on_output[1] }}`: May add more complex client-side business logic or state management interactions that span multiple components, including those built by this mode.
*   `{{ downstream_squad_members_dependent_on_output[2] }}`: Will write more comprehensive tests that cover how these components behave individually and in integration.

## 6. Considerations for `.mode.md` & System Prompt 💡

*   The `roleDefinition` for `ui-component-developer` must emphasize its KB-driven ability to implement components in various specified frontend frameworks and styling solutions.
*   Its `[metadata]` should include:
    *   `squad_name = "Frontend Implementation Squad"`
    *   `primary_output_description = "Functional UI component code files for a specified frontend framework."`
    *   `primary_output_template = "N/A (generates framework-specific code files)"`
    *   `reports_to = "manager-web-app-frontend-implementer"`
*   It will heavily use file creation and editing tools, and its KB will be rich with framework-specific component patterns, styling techniques, and testing stubs.

## 7. Open Questions / Further Definition Needed ❓

*   How does it handle requests for highly complex or novel UI components not covered by standard patterns in its KB? (It should flag these to the Manager for potential human intervention or more detailed specification).
*   What's the expected level of "pixel-perfection" against mockups? (For AI, "structurally and functionally representative" is a more realistic initial goal than pixel-perfect).
*   How are global styles or theme variables accessed/applied? (It should assume these are pre-configured in the project by the scaffolding squad or are part of the input specifications).