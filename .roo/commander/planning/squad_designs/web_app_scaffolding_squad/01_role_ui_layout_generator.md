+++
# --- Squad Planning: Squad Member Role Definition ---
id = "SQUAD-ROLE-WEBAPPSCAFFOLD-UILAYOUTGEN-20250515" # WEBAPPSCAFFOLD, UILAYOUTGEN for this role
title = "Squad Member Role Definition: UI Layout Generator for Web App Scaffolding Squad"
status = "draft"
created_date = "20250515"
last_updated = "20250515T00:00:00Z" # Initial creation timestamp
version = "1.0"
tags = ["squad-planning", "role-definition", "mode-design", "web-app-scaffolding-squad", "ui-layout", "html-css", "tailwind-css"]
template_schema_doc = ".roo/commander/templates/planning/squad_design/template_01_squad_member_role_definition.README.md"

# --- Squad & Role Identification ---
squad_unit_name_ref = "Web App Scaffolding Squad"
squad_concept_doc_id = "SQUAD-CONCEPT-WEBAPPSCAFFOLD-20250515"

proposed_mode_slug = "ui-layout-generator"
proposed_mode_name = "🖼️ UI Layout Generator"
proposed_classification = "squad"

# --- Core Function & Deliverables ---
core_responsibility_summary = "Generates basic HTML structure and CSS (potentially utility-first like Tailwind CSS) for key pages/views defined in the requirements, focusing on layout and placeholders, not full component implementation."
primary_output_artifact_description = "A set of HTML files (or framework-agnostic template snippets) representing the basic layout for specified pages/views, potentially styled with utility CSS classes. For example, `home_layout.html`, `dashboard_layout.html`."
primary_output_artifact_template_ref = "[N/A - Produces HTML/CSS files or snippets, not a single TOML+MD artifact from a specific template.]"

# --- Skills & Knowledge ---
key_skills_required = [
    "Strong understanding of HTML5 semantics and structure.",
    "Proficiency in CSS for layout (Flexbox, Grid).",
    "Experience with utility-first CSS frameworks (especially Tailwind CSS, if chosen as a standard).",
    "Ability to translate textual descriptions of pages/views (from requirements) into visual structure.",
    "Creating responsive layout stubs.",
    "Understanding of common web layout patterns (e.g., header, footer, sidebar, main content area)."
]
potential_kb_skill_topics = [
    "Generating a Basic Two-Column Layout with Tailwind CSS",
    "Creating a Standard Header and Footer Structure (HTML/Tailwind)",
    "Implementing a Responsive Navigation Bar Stub (HTML/Tailwind)",
    "Structuring a Dashboard Layout with Placeholders (HTML/Tailwind)",
    "Converting Wireframe Descriptions to HTML/CSS Layouts"
]
potential_kb_wisdom_topics = [
    "Principles of Clean and Semantic HTML for Layouts",
    "Mobile-First Approach to Layout Scaffolding",
    "Keeping Layouts Simple and Flexible for Scaffolding"
]

# --- Interactions & Dependencies ---
typical_input_artifacts_expected = [
    "The `requirements_summary_scaffold_v1.md` from `web-app-requirements-clarifier` (detailing key pages/views and overall style preference).",
    "The scaffolded project directory path from `generic-project-scaffolder` (to know where to place layout files or how to structure them for the chosen framework)."
]
downstream_squad_members_dependent_on_output = [
    "generic-component-stubber (uses the generated layouts as a visual guide and structural basis for creating component stubs within the chosen framework)"
]
+++

# Squad Member Role Definition: {{ proposed_mode_name }}

## 1. Overview 📝

*   **Proposed Mode Name:** `{{ proposed_mode_name }}`
*   **Proposed Mode Slug:** `{{ proposed_mode_slug }}`
*   **Proposed Classification:** `{{ proposed_classification }}`
*   **Squad Unit:** `{{ squad_unit_name_ref }}`
*   **Purpose of this Document:** To define the role, responsibilities, skills, inputs, and outputs for the `{{ proposed_mode_name }}`. This mode focuses on creating the basic visual structure (layout) for the key pages of the web application scaffold.

## 2. Core Responsibility & Domain Focus 🎯

*   **Summary:** `{{ core_responsibility_summary }}`
*   **Detailed Responsibilities:**
    *   Receive an MDTM task from `manager-web-app-scaffolder` including the `requirements_summary_scaffold_v1.md` (which lists key pages/views and style preferences) and the path to the scaffolded project directory.
    *   For each key page/view identified in the requirements:
        *   Generate basic HTML structure representing the main layout areas (e.g., header, navigation, main content, sidebar, footer).
        *   Apply basic styling using a utility-first CSS framework (e.g., Tailwind CSS, if specified by `web-app-tech-stack-advisor` or as a default) to define the layout (e.g., flex, grid) and spacing.
        *   Include placeholders or simple text within layout sections to indicate where content or components will go (e.g., `<!-- [Hero Section Placeholder] -->`, `<!-- [Product List Placeholder] -->`).
        *   Ensure layouts are responsive at a basic level (e.g., stacking columns on smaller screens).
    *   Save these layout files (e.g., as `.html` snippets or framework-agnostic template files) into an appropriate directory within the scaffolded project (e.g., `[ProjectPath]/src/layouts/` or `[ProjectPath]/src/views/`).
    *   Report the paths to the created layout files.

## 3. Primary Output Artifact(s) 📄➡️

*   **Description:** `{{ primary_output_artifact_description }}`
*   **Format/Template:** HTML files or text-based template snippets. If Tailwind CSS is used, the output will be HTML with Tailwind classes.
*   **Key Characteristics of Output:** Clean, semantic HTML structure. Basic, responsive layout defined. Clear placeholders for content/components. The output is *not* fully styled components, but the structural backbone.

## 4. Key Skills & Knowledge Required 🧠

*   **Essential Skills/Technologies:**
    *   `{{ key_skills_required[0] }}`
    *   `{{ key_skills_required[1] }}`
    *   `{{ key_skills_required[2] }}`
    *   `{{ key_skills_required[3] }}`
    *   `{{ key_skills_required[4] }}`
    *   `{{ key_skills_required[5] }}`
*   **Potential KB Topics (to bootstrap its expertise):**
    *   **Skills (`kb/skills/`):**
        *   *(Corresponds to `potential_kb_skill_topics` in TOML. One detailed procedure per common layout type.)*
        *   `generating_holy_grail_layout_tailwind.md`
        *   `creating_simple_marketing_page_layout_html_tailwind.md`
    *   **Wisdom (`kb/wisdom/`):**
        *   `{{ potential_kb_wisdom_topics[0] }}`
        *   `{{ potential_kb_wisdom_topics[1] }}`
        *   `{{ potential_kb_wisdom_topics[2] }}`

## 5. Interactions & Dependencies within the Squad Workflow 🔄

### 5.1. Typical Input Artifacts Expected
*   `{{ typical_input_artifacts_expected[0] }}` (Provides the list of pages/views to create layouts for, and style hints).
*   `{{ typical_input_artifacts_expected[1] }}` (Provides the target location for output files within the project structure).
*   (Potentially) Output from `web-app-tech-stack-advisor` if a specific CSS framework like Tailwind was chosen and needs to be assumed.

### 5.2. Downstream Dependencies (Who uses its output?)
*   `{{ downstream_squad_members_dependent_on_output[0] }}`: This is the primary consumer. The `generic-component-stubber` will take these HTML/CSS layouts and translate them into the chosen JavaScript framework's component structure, filling in the placeholders with actual (but still stubbed) components.

## 6. Considerations for `.mode.md` & System Prompt 💡

*   The `roleDefinition` for `ui-layout-generator` should emphasize its focus on **structural layout** using HTML and utility CSS (like Tailwind), not detailed component design or JavaScript logic.
*   Its `[metadata]` should include:
    *   `squad_name = "Web App Scaffolding Squad"`
    *   `primary_output_description = "A set of HTML/CSS files defining basic page layouts with placeholders."`
    *   `primary_output_template = "N/A (produces HTML/CSS files)"`
    *   `reports_to = "manager-web-app-scaffolder"`
*   It will primarily use file creation/editing tools.
*   Its KB will contain common layout patterns and Tailwind CSS techniques.

## 7. Open Questions / Further Definition Needed ❓

*   Should it always default to Tailwind CSS, or should this be an explicit input from the `web-app-tech-stack-advisor`? (Having it as an input makes the system more flexible).
*   How detailed should the "placeholders" be? Just comments, or simple `<div>`s with IDs? (Simple `<div>`s with descriptive IDs or classes might be more useful for the next mode).
*   Will it generate separate CSS files, or inline all styles via utility classes (if using Tailwind)? (Utility classes are more aligned with rapid scaffolding).