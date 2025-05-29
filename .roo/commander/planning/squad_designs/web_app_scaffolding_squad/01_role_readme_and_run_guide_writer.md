+++
# --- Squad Planning: Squad Member Role Definition ---
id = "SQUAD-ROLE-WEBAPPSCAFFOLD-READMEWRITER-20250515" # WEBAPPSCAFFOLD, READMEWRITER for this role
title = "Squad Member Role Definition: README and Run Guide Writer for Web App Scaffolding Squad"
status = "draft"
created_date = "20250515"
last_updated = "20250515T00:00:00Z" # Initial creation timestamp
version = "1.0"
tags = ["squad-planning", "role-definition", "mode-design", "web-app-scaffolding-squad", "documentation", "readme", "technical-writing"]
template_schema_doc = ".roo/commander/templates/planning/squad_design/template_01_squad_member_role_definition.README.md"

# --- Squad & Role Identification ---
squad_unit_name_ref = "Web App Scaffolding Squad"
squad_concept_doc_id = "SQUAD-CONCEPT-WEBAPPSCAFFOLD-20250515"

proposed_mode_slug = "readme-and-run-guide-writer"
proposed_mode_name = "📖 README & Run Guide Writer"
proposed_classification = "squad"

# --- Core Function & Deliverables ---
core_responsibility_summary = "Generates a basic README.md file for the scaffolded web application project, including project overview, setup instructions, and how to run the development server."
primary_output_artifact_description = "A `README.md` file at the root of the scaffolded project directory, providing essential information for a developer to understand and start working with the scaffold."
primary_output_artifact_template_ref = "[.roo/commander/templates/project_root/template_README_scaffolded_app.md]" # Needs a new template

# --- Skills & Knowledge ---
key_skills_required = [
    "Clear technical writing skills.",
    "Ability to summarize project purpose and structure.",
    "Knowledge of common commands for running development servers for various frameworks (e.g., `npm run dev`, `yarn dev`, `rails s`, `python manage.py runserver` - via KB).",
    "Understanding of basic project README structure.",
    "Proficiency in Markdown."
]
potential_kb_skill_topics = [
    "Structuring a Project README for a Scaffolded App",
    "Writing Clear 'Getting Started' Instructions",
    "Documenting Common Dev Server Commands (Next.js, Vite, SvelteKit, etc.)",
    "Explaining Basic Project Folder Structure",
    "Using the 'template_README_scaffolded_app.md'"
]
potential_kb_wisdom_topics = [
    "The Importance of a Good First README",
    "Keeping READMEs Concise and Actionable for Scaffolds",
    "Anticipating Common Developer Questions for a New Project"
]

# --- Interactions & Dependencies ---
typical_input_artifacts_expected = [
    "The `requirements_summary_scaffold_v1.md` (for project purpose/name) from `web-app-requirements-clarifier`.",
    "The `tech_stack_recommendation_v1.md` (for chosen frameworks and run commands) from `web-app-tech-stack-advisor`.",
    "The scaffolded project directory path from `generic-project-scaffolder`.",
    "List of key routes configured by `generic-routing-configurator` (optional, for 'Available Pages' section)."
]
downstream_squad_members_dependent_on_output = [
    "Human developers (primary consumers of the README)."
]
+++

# Squad Member Role Definition: {{ proposed_mode_name }}

## 1. Overview 📝

*   **Proposed Mode Name:** `{{ proposed_mode_name }}`
*   **Proposed Mode Slug:** `{{ proposed_mode_slug }}`
*   **Proposed Classification:** `{{ proposed_classification }}`
*   **Squad Unit:** `{{ squad_unit_name_ref }}`
*   **Purpose of this Document:** To define the role, responsibilities, skills, inputs, and outputs for the `{{ proposed_mode_name }}`. This mode is responsible for generating the initial `README.md` file for the newly scaffolded web application project.

## 2. Core Responsibility & Domain Focus 🎯

*   **Summary:** `{{ core_responsibility_summary }}`
*   **Detailed Responsibilities:**
    *   Receive an MDTM task from `manager-web-app-scaffolder` including:
        *   The project name/purpose (from `requirements_summary_scaffold_v1.md`).
        *   The chosen technology stack, especially the frontend framework (from `tech_stack_recommendation_v1.md`).
        *   The root path to the scaffolded project directory.
    *   Consult its Knowledge Base for the standard README structure and common run commands for the specified framework.
    *   Create a `README.md` file in the root of the scaffolded project directory.
    *   Populate the `README.md` with sections such as:
        *   Project Title (from requirements).
        *   Brief Project Description/Purpose (from requirements).
        *   Prerequisites (e.g., Node.js version, package manager like npm/yarn/bun).
        *   Setup Instructions (e.g., `npm install` or `yarn install`).
        *   Running the Development Server (e.g., `npm run dev`).
        *   Brief overview of the project structure (key folders like `src/`, `pages/`, `components/`).
        *   (Optional) List of initially available pages/routes (from `generic-routing-configurator`'s output if provided).
        *   (Optional) Next steps for development.
    *   Ensure the `README.md` is clear, concise, and provides enough information for a developer to get the scaffolded project running locally.
    *   Report the path to the created `README.md` file.

## 3. Primary Output Artifact(s) 📄➡️

*   **Description:** `{{ primary_output_artifact_description }}`
*   **Format/Template:** Markdown, using a new template: `{{ primary_output_artifact_template_ref }}`.
    *   *(We will need to define `template_README_scaffolded_app.md`. It would have standard sections like Project Title, About, Getting Started, Available Scripts, Folder Structure.)*
*   **Key Characteristics of Output:** A helpful, actionable `README.md` that enables a developer to quickly understand and start working with the scaffolded project.

## 4. Key Skills & Knowledge Required 🧠

*   **Essential Skills/Technologies:**
    *   `{{ key_skills_required[0] }}`
    *   `{{ key_skills_required[1] }}`
    *   `{{ key_skills_required[2] }}`
    *   `{{ key_skills_required[3] }}`
    *   `{{ key_skills_required[4] }}`
*   **Potential KB Topics (to bootstrap its expertise):**
    *   **Skills (`kb/skills/`):**
        *   *(Corresponds to `potential_kb_skill_topics` in TOML.)*
        *   `writing_readme_setup_instructions_nextjs.md`
        *   `writing_readme_setup_instructions_vite_react.md`
        *   `writing_readme_setup_instructions_sveltekit.md`
    *   **Wisdom (`kb/wisdom/`):**
        *   `{{ potential_kb_wisdom_topics[0] }}`
        *   `{{ potential_kb_wisdom_topics[1] }}`
        *   `{{ potential_kb_wisdom_topics[2] }}`

## 5. Interactions & Dependencies within the Squad Workflow 🔄

### 5.1. Typical Input Artifacts Expected
*   `{{ typical_input_artifacts_expected[0] }}` (For project name and purpose).
*   `{{ typical_input_artifacts_expected[1] }}` (To know which framework's run commands to include).
*   `{{ typical_input_artifacts_expected[2] }}` (The location to create the `README.md`).
*   `{{ typical_input_artifacts_expected[3] }}` (To list available pages/routes).

### 5.2. Downstream Dependencies (Who uses its output?)
*   `{{ downstream_squad_members_dependent_on_output[0] }}`: The README is primarily for human developers who will take over the scaffolded project. It's the first file they'll likely read.

## 6. Considerations for `.mode.md` & System Prompt 💡

*   The `roleDefinition` for `readme-and-run-guide-writer` should emphasize its technical writing capabilities and its knowledge of how to document initial project setup for various frameworks (via its KB).
*   Its `[metadata]` should include:
    *   `squad_name = "Web App Scaffolding Squad"`
    *   `primary_output_description = "A README.md file for the scaffolded project with setup and run instructions."`
    *   `primary_output_template = ".roo/commander/templates/project_root/template_README_scaffolded_app.md"`
    *   `reports_to = "manager-web-app-scaffolder"`
*   It will primarily use file creation/editing tools.
*   Its KB will contain templates/snippets for README sections tailored to different frameworks.

## 7. Open Questions / Further Definition Needed ❓

*   The exact structure and content of `template_README_scaffolded_app.md` needs to be defined.
*   How much detail should it go into about the project structure versus keeping it very high-level for a scaffold? (Probably high-level, pointing to key directories).
*   Should it include a section on "How to add new components/pages" specific to the framework? (Could be a good "Next Steps" item).