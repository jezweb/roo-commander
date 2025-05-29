+++
# --- Squad Planning: Squad Member Role Definition ---
id = "SQUAD-ROLE-WEBAPPSCAFFOLD-GENPROJSCAFFOLD-20250515" # WEBAPPSCAFFOLD, GENPROJSCAFFOLD for this role
title = "Squad Member Role Definition: Generic Project Scaffolder for Web App Scaffolding Squad"
status = "draft"
created_date = "20250515"
last_updated = "20250515T00:00:00Z" # Initial creation timestamp
version = "1.0"
tags = ["squad-planning", "role-definition", "mode-design", "web-app-scaffolding-squad", "project-setup", "scaffolding", "framework-agnostic-logic"]
template_schema_doc = ".roo/commander/templates/planning/squad_design/template_01_squad_member_role_definition.README.md"

# --- Squad & Role Identification ---
squad_unit_name_ref = "Web App Scaffolding Squad"
squad_concept_doc_id = "SQUAD-CONCEPT-WEBAPPSCAFFOLD-20250515"

proposed_mode_slug = "generic-project-scaffolder"
proposed_mode_name = "🏗️ Generic Project Scaffolder"
proposed_classification = "squad"

# --- Core Function & Deliverables ---
core_responsibility_summary = "Sets up the initial project structure, build configurations, and essential dependencies for a specified web framework, guided by its Knowledge Base."
primary_output_artifact_description = "A directory structure for the new web application project within the session artifacts, including base configuration files (e.g., `package.json`, `tsconfig.json`, framework-specific config files like `next.config.js`, `vite.config.js`), and a status report of the scaffolding process."
primary_output_artifact_template_ref = "[N/A - Creates directory structures and standard config files, not a single TOML+MD artifact from a specific template for its *entire* output, though it uses framework-specific templates/boilerplates from its KB internally.]"

# --- Skills & Knowledge ---
key_skills_required = [
    "Ability to execute file system operations (create directories, create files, copy files/templates).",
    "Understanding of common project structures for various web frameworks (e.g., Next.js, Vue/Nuxt, Svelte/SvelteKit, Astro).",
    "Knowledge of basic configuration files for these frameworks (e.g., package.json, tsconfig.json, vite.config.js, next.config.js).",
    "Ability to run initialization commands for frameworks if applicable (e.g., `npx create-next-app`, `npm create vite@latest`) via `execute_command` tool, or replicate their core setup.",
    "Skill in populating boilerplate files with initial content or placeholders based on KB procedures."
]
potential_kb_skill_topics = [
    # One skill per supported framework, e.g.:
    "Scaffolding a Next.js Project Structure",
    "Scaffolding a SvelteKit Project Structure",
    "Scaffolding a Vue.js (with Vite) Project Structure",
    "Scaffolding an Astro Project Structure",
    "Initializing package.json for a [Framework] Project",
    "Creating Basic tsconfig.json for a [Framework] Project",
    "Setting up Basic [Framework]-specific Config Files (e.g., next.config.js)"
]
potential_kb_wisdom_topics = [
    "Importance of Clean Project Scaffolds",
    "Common Pitfalls in Initial Project Setup for Different Frameworks",
    "Balancing Minimal Scaffolds with Developer-Ready Setups"
]

# --- Interactions & Dependencies ---
typical_input_artifacts_expected = [
    "The `tech_stack_recommendation_v1.md` from `web-app-tech-stack-advisor` (specifying chosen frontend framework, backend approach if any).",
    "The `requirements_summary_scaffold_v1.md` from `web-app-requirements-clarifier` (for project name and overall context)."
]
downstream_squad_members_dependent_on_output = [
    "ui-layout-generator (needs the project structure to place layout files)",
    "generic-component-stubber (needs the framework-specific project to add component stubs)",
    "generic-routing-configurator (needs the framework-specific project to configure routes)"
]
+++

# Squad Member Role Definition: {{ proposed_mode_name }}

## 1. Overview 📝

*   **Proposed Mode Name:** `{{ proposed_mode_name }}`
*   **Proposed Mode Slug:** `{{ proposed_mode_slug }}`
*   **Proposed Classification:** `{{ proposed_classification }}`
*   **Squad Unit:** `{{ squad_unit_name_ref }}`
*   **Purpose of this Document:** To define the role, responsibilities, skills, inputs, and outputs for the `{{ proposed_mode_name }}`. This mode is responsible for creating the initial file and directory structure, along with basic configuration files, for a new web application based on a chosen technology stack.

## 2. Core Responsibility & Domain Focus 🎯

*   **Summary:** `{{ core_responsibility_summary }}`
*   **Detailed Responsibilities:**
    *   Receive an MDTM task from `manager-web-app-scaffolder` including the `tech_stack_recommendation_v1.md` (specifying frameworks) and `requirements_summary_scaffold_v1.md` (for project name, etc.).
    *   Consult its Knowledge Base for the specific scaffolding procedure corresponding to the chosen frontend framework (and backend framework/approach, if applicable).
    *   Create the main project directory within the session's `artifacts/scaffolds/[ProjectName]/` directory.
    *   Generate standard configuration files (e.g., `package.json` with basic scripts, `tsconfig.json` if TypeScript, `.gitignore`).
    *   Create framework-specific configuration files (e.g., `next.config.js`, `vite.config.js`, `svelte.config.js`, `astro.config.js`).
    *   Establish the standard directory structure for the chosen framework (e.g., `pages/` or `app/` for Next.js, `src/routes` for SvelteKit, `src/components`, `public`, etc.).
    *   (Optional) Run framework-specific initialization commands (e.g., `npx create-next-app` with minimal options, `npm create vite@latest`) if its rules and KB guide this for a particular framework and it's deemed safe and controllable. More often, it will replicate the *results* of such commands by creating files and directories directly.
    *   Install core framework dependencies (e.g., `react`, `next`, `vue`, `svelte`) by preparing a list for `devops-dependency-manager` or by directly creating a `package.json` for later installation.
    *   Report the outcome of the scaffolding process, including paths to key created files and directories.

## 3. Primary Output Artifact(s) 📄➡️

*   **Description:** `{{ primary_output_artifact_description }}`
*   **Format/Template:** This mode primarily creates a directory structure and standard configuration files (e.g., `.json`, `.js`, `.md`). It does not produce a single TOML+MD artifact *as its main output*, but rather a collection of files and folders. Its MDTM task `output_artifacts` field will list key created files/directories.
*   **Key Characteristics of Output:** A clean, well-organized project scaffold adhering to the conventions of the chosen framework, ready for subsequent squad members to populate with layouts, components, and routes.

## 4. Key Skills & Knowledge Required 🧠

*   **Essential Skills/Technologies:**
    *   `{{ key_skills_required[0] }}`
    *   `{{ key_skills_required[1] }}`
    *   `{{ key_skills_required[2] }}`
    *   `{{ key_skills_required[3] }}`
    *   `{{ key_skills_required[4] }}`
*   **Potential KB Topics (to bootstrap its expertise):**
    *   **Skills (`kb/skills/`):**
        *   *(Corresponds to `potential_kb_skill_topics` in TOML. One detailed procedure per supported framework is key.)*
        *   `scaffolding_nextjs_project_structure.md`
        *   `scaffolding_sveltekit_project_structure.md`
        *   `initializing_package_json_for_web_project.md`
    *   **Wisdom (`kb/wisdom/`):**
        *   `{{ potential_kb_wisdom_topics[0] }}`
        *   `{{ potential_kb_wisdom_topics[1] }}`
        *   `{{ potential_kb_wisdom_topics[2] }}`

## 5. Interactions & Dependencies within the Squad Workflow 🔄

### 5.1. Typical Input Artifacts Expected
*   `{{ typical_input_artifacts_expected[0] }}` (Primary input specifying the chosen technologies).
*   `{{ typical_input_artifacts_expected[1] }}` (For project name, overall context).

### 5.2. Downstream Dependencies (Who uses its output?)
*   `{{ downstream_squad_members_dependent_on_output[0] }}`: Needs the created project structure (especially `public/` or `static/` folders, and source folders) to place generated UI layout files.
*   `{{ downstream_squad_members_dependent_on_output[1] }}`: Needs the framework-specific project structure (e.g., `components/` folder) to add component stubs.
*   `{{ downstream_squad_members_dependent_on_output[2] }}`: Needs the framework-specific project structure (e.g., `pages/`, `app/`, `src/routes/`) to configure routes.

## 6. Considerations for `.mode.md` & System Prompt 💡

*   The `roleDefinition` for `generic-project-scaffolder` must emphasize its ability to work with *multiple specified frameworks* by consulting its KB.
*   Its `[metadata]` should include:
    *   `squad_name = "Web App Scaffolding Squad"`
    *   `primary_output_description = "A scaffolded project directory with initial configuration files for a specified web framework."`
    *   `primary_output_template = "N/A (generates directory structure and config files)"`
    *   `reports_to = "manager-web-app-scaffolder"`
*   It will heavily rely on the `execute_command` tool for file system operations (mkdir, touch, cp if copying from internal KB templates) and potentially for running framework CLI init commands.
*   Its KB will be extensive, with detailed procedures for each supported framework.

## 7. Open Questions / Further Definition Needed ❓

*   To what extent should it run `npm install` or `yarn install` for dependencies, versus just creating the `package.json` for a later step by `devops-dependency-manager`? (Initially, just creating `package.json` might be safer and cleaner).
*   How does it handle variations within a framework (e.g., Next.js with App Router vs. Pages Router)? (This would need to be part of the `tech_stack_recommendation_v1.md` input, and the KB would have procedures for each).
*   How are boilerplate files (e.g., a basic `index.html`, a simple `App.vue`) stored and used? (Likely as text blobs or mini-templates within its KB procedures).