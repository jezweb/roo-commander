+++
# --- Squad Planning: Squad Member Role Definition ---
id = "SQUAD-ROLE-WEBAPPSCAFFOLD-COMPSTUBBER-20250515" # WEBAPPSCAFFOLD, COMPSTUBBER for this role
title = "Squad Member Role Definition: Generic Component Stubber for Web App Scaffolding Squad"
status = "draft"
created_date = "20250515"
last_updated = "20250515T00:00:00Z" # Initial creation timestamp
version = "1.0"
tags = ["squad-planning", "role-definition", "mode-design", "web-app-scaffolding-squad", "component-generation", "frontend-scaffolding", "framework-agnostic-logic"]
template_schema_doc = ".roo/commander/templates/planning/squad_design/template_01_squad_member_role_definition.README.md"

# --- Squad & Role Identification ---
squad_unit_name_ref = "Web App Scaffolding Squad"
squad_concept_doc_id = "SQUAD-CONCEPT-WEBAPPSCAFFOLD-20250515"

proposed_mode_slug = "generic-component-stubber"
proposed_mode_name = "🧩 Generic Component Stubber"
proposed_classification = "squad"

# --- Core Function & Deliverables ---
core_responsibility_summary = "Creates placeholder/stub component files (e.g., .jsx, .vue, .svelte) within a scaffolded project, based on provided UI layouts and the chosen frontend framework, populating them with minimal boilerplate."
primary_output_artifact_description = "A set of new component files (e.g., `UserProfile.jsx`, `ProductCard.vue`) within the appropriate directories of the scaffolded project, containing basic boilerplate structure for the specified framework. Also, a report of components created."
primary_output_artifact_template_ref = "[N/A - Creates framework-specific code files, not a single TOML+MD artifact from a specific template for its *entire* output.]"

# --- Skills & Knowledge ---
key_skills_required = [
    "Understanding of component-based architecture in web development.",
    "Knowledge of the basic file structure and boilerplate for common frontend frameworks (React, Vue, Svelte, Angular, Next.js, SvelteKit - via KB).",
    "Ability to interpret UI layout files/descriptions to identify distinct component areas.",
    "Skill in creating new files with basic, framework-specific boilerplate code (e.g., function component structure for React, `<template><script><style>` for Vue).",
    "Naming components according to common conventions (e.g., PascalCase)."
]
potential_kb_skill_topics = [
    # One skill per supported framework for generating basic component boilerplate, e.g.:
    "Creating a Basic React Functional Component Stub",
    "Creating a Basic Vue Single File Component Stub",
    "Creating a Basic Svelte Component Stub",
    "Identifying Component Boundaries from HTML Layouts",
    "Standard Naming Conventions for UI Components"
]
potential_kb_wisdom_topics = [
    "The Purpose of Component Stubs in Scaffolding",
    "Keeping Stub Components Minimal and Focused",
    "Anticipating Basic Props for Stub Components (Optional)"
]

# --- Interactions & Dependencies ---
typical_input_artifacts_expected = [
    "Path(s) to UI layout files (e.g., HTML/Tailwind snippets) from `ui-layout-generator`.",
    "The `tech_stack_recommendation_v1.md` (or just the chosen frontend framework name) from `web-app-tech-stack-advisor`.",
    "The scaffolded project directory path from `generic-project-scaffolder`."
]
downstream_squad_members_dependent_on_output = [
    "generic-routing-configurator (may need to know component names/paths to set up routes)",
    "readme-and-run-guide-writer (may list key components created)",
    "Human developers (who will flesh out these stub components)."
]
+++

# Squad Member Role Definition: {{ proposed_mode_name }}

## 1. Overview 📝

*   **Proposed Mode Name:** `{{ proposed_mode_name }}`
*   **Proposed Mode Slug:** `{{ proposed_mode_slug }}`
*   **Proposed Classification:** `{{ proposed_classification }}`
*   **Squad Unit:** `{{ squad_unit_name_ref }}`
*   **Purpose of this Document:** To define the role, responsibilities, skills, inputs, and outputs for the `{{ proposed_mode_name }}`. This mode takes the structural UI layouts and the chosen frontend framework to create empty or minimal boilerplate component files within the scaffolded project.

## 2. Core Responsibility & Domain Focus 🎯

*   **Summary:** `{{ core_responsibility_summary }}`
*   **Detailed Responsibilities:**
    *   Receive an MDTM task from `manager-web-app-scaffolder` including:
        *   Paths to UI layout files (e.g., HTML/Tailwind structures for different pages/views).
        *   The name of the chosen frontend framework (e.g., "React/Next.js", "Vue/Nuxt", "Svelte/SvelteKit").
        *   The root path to the scaffolded project directory.
    *   Analyze the provided UI layouts to identify logical component boundaries (e.g., Header, Footer, Sidebar, ProductCard, UserProfileSection).
    *   For each identified component:
        *   Determine an appropriate component name (e.g., `UserProfileHeader.jsx`, `ProductItem.vue`) following PascalCase convention.
        *   Consult its Knowledge Base for the boilerplate structure of a component in the chosen framework.
        *   Create a new file with the correct extension (e.g., `.jsx`, `.tsx`, `.vue`, `.svelte`) in the appropriate framework directory (e.g., `[ProjectPath]/src/components/`, `[ProjectPath]/app/components/`).
        *   Populate the new file with minimal, valid boilerplate for that framework (e.g., a basic functional component in React, a `<template><script><style>` structure in Vue). Include a placeholder comment like `<!-- TODO: Implement [ComponentName] -->` or similar.
    *   (Optional) If layouts suggest basic props (e.g., a product card layout showing "title" and "price"), include these as placeholder props in the stub component.
    *   Report the list of created component files and their paths.

## 3. Primary Output Artifact(s) 📄➡️

*   **Description:** `{{ primary_output_artifact_description }}`
*   **Format/Template:** Framework-specific code files (e.g., `.jsx`, `.vue`, `.svelte`). The content is minimal boilerplate.
*   **Key Characteristics of Output:** A set of correctly named and located component files with basic, valid syntax for the chosen framework, ready for developers to implement their actual logic and detailed markup.

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
        *   `creating_react_functional_component_stub.md`
        *   `creating_vue_sfc_stub.md`
        *   `creating_svelte_component_stub.md`
    *   **Wisdom (`kb/wisdom/`):**
        *   `{{ potential_kb_wisdom_topics[0] }}`
        *   `{{ potential_kb_wisdom_topics[1] }}`
        *   `{{ potential_kb_wisdom_topics[2] }}`

## 5. Interactions & Dependencies within the Squad Workflow 🔄

### 5.1. Typical Input Artifacts Expected
*   `{{ typical_input_artifacts_expected[0] }}` (To understand what components are implied by the layout).
*   `{{ typical_input_artifacts_expected[1] }}` (To know which framework's boilerplate to use).
*   `{{ typical_input_artifacts_expected[2] }}` (To know where to create the component files).

### 5.2. Downstream Dependencies (Who uses its output?)
*   `{{ downstream_squad_members_dependent_on_output[0] }}`: Will use the created component files/names to set up page routes.
*   `{{ downstream_squad_members_dependent_on_output[1] }}`: May list some of the key created components in the project's initial README.
*   `{{ downstream_squad_members_dependent_on_output[2] }}`: Will take these stubs and implement the actual UI and logic.

## 6. Considerations for `.mode.md` & System Prompt 💡

*   The `roleDefinition` for `generic-component-stubber` must emphasize its ability to generate boilerplate for *various specified frameworks* by consulting its KB.
*   Its `[metadata]` should include:
    *   `squad_name = "Web App Scaffolding Squad"`
    *   `primary_output_description = "A set of placeholder component files with basic boilerplate for a specified frontend framework."`
    *   `primary_output_template = "N/A (generates framework-specific code files)"`
    *   `reports_to = "manager-web-app-scaffolder"`
*   It will heavily rely on file creation tools and its KB for framework-specific boilerplate.

## 7. Open Questions / Further Definition Needed ❓

*   How "intelligent" should it be in identifying component boundaries from the HTML layouts? (Initially, it might rely on explicit placeholders or simple heuristics).
*   Should it attempt to import these new stub components into parent layout files/pages, or just create the files? (Just creating the files is a safer, simpler first step for a scaffolder).
*   How are common/shared components handled versus page-specific components? (Initially, it might create all identified components in a general `components/` folder).