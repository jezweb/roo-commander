+++
# --- Squad Planning: Squad Member Role Definition ---
id = "SQUAD-ROLE-WEBAPPSCAFFOLD-TESTSETUP-20250515" # WEBAPPSCAFFOLD, TESTSETUP for this role
title = "Squad Member Role Definition: Basic Test Environment Setup Specialist for Web App Scaffolding Squad"
status = "draft"
created_date = "20250515"
last_updated = "20250515T00:00:00Z" # Initial creation timestamp
version = "1.0"
tags = ["squad-planning", "role-definition", "mode-design", "web-app-scaffolding-squad", "testing", "test-setup", "jest", "vitest", "playwright"]
template_schema_doc = ".roo/commander/templates/planning/squad_design/template_01_squad_member_role_definition.README.md"

# --- Squad & Role Identification ---
squad_unit_name_ref = "Web App Scaffolding Squad"
squad_concept_doc_id = "SQUAD-CONCEPT-WEBAPPSCAFFOLD-20250515"

proposed_mode_slug = "basic-test-environment-setup"
proposed_mode_name = "🧪 Basic Test Environment Setup Specialist"
proposed_classification = "squad"

# --- Core Function & Deliverables ---
core_responsibility_summary = "Sets up a basic testing framework (e.g., Jest, Vitest, Playwright for E2E stubs) within the scaffolded project, including initial configuration and example empty test files."
primary_output_artifact_description = "Modified `package.json` with testing dependencies and scripts, testing configuration files (e.g., `jest.config.js`, `vitest.config.js`, `playwright.config.js`), and a few example empty test files (e.g., `example.test.js`). Also, a report of the setup."
primary_output_artifact_template_ref = "[N/A - Modifies/creates config and code files, not a single TOML+MD artifact from a specific template for its *entire* output.]"

# --- Skills & Knowledge ---
key_skills_required = [
    "Knowledge of common JavaScript/TypeScript testing frameworks (Jest, Vitest, Playwright, Cypress - via KB).",
    "Ability to install testing framework dependencies via package manager commands (or by specifying them for `devops-dependency-manager`).",
    "Skill in creating basic configuration files for these testing frameworks.",
    "Understanding of where to place test files within common project structures.",
    "Ability to write a simple 'empty' or 'passing' example test case for each framework."
]
potential_kb_skill_topics = [
    # One skill per supported testing framework, e.g.:
    "Setting up Jest for a React/Next.js Project",
    "Setting up Vitest for a Vite-based (Vue/Svelte/React) Project",
    "Setting up Playwright for Basic E2E Test Stubs",
    "Creating an Example Vitest Unit Test File",
    "Adding Test Scripts to package.json"
]
potential_kb_wisdom_topics = [
    "Importance of Including Test Setup in Scaffolds",
    "Choosing Between Jest and Vitest for Unit/Integration Tests",
    "Minimal Viable Test Setup for a New Project"
]

# --- Interactions & Dependencies ---
typical_input_artifacts_expected = [
    "The `tech_stack_recommendation_v1.md` (for chosen frontend/backend frameworks, which influences test framework choice) from `web-app-tech-stack-advisor`.",
    "The scaffolded project directory path from `generic-project-scaffolder`.",
    "(Optional) User preference for a specific testing framework, if provided via requirements."
]
downstream_squad_members_dependent_on_output = [
    "readme-and-run-guide-writer (will include instructions on how to run tests).",
    "Human developers (who will write actual tests based on these stubs and setup)."
]
+++

# Squad Member Role Definition: {{ proposed_mode_name }}

## 1. Overview 📝

*   **Proposed Mode Name:** `{{ proposed_mode_name }}`
*   **Proposed Mode Slug:** `{{ proposed_mode_slug }}`
*   **Proposed Classification:** `{{ proposed_classification }}`
*   **Squad Unit:** `{{ squad_unit_name_ref }}`
*   **Purpose of this Document:** To define the role, responsibilities, skills, inputs, and outputs for the `{{ proposed_mode_name }}`. This mode makes the scaffolded project "test-ready" by setting up a basic testing environment.

## 2. Core Responsibility & Domain Focus 🎯

*   **Summary:** `{{ core_responsibility_summary }}`
*   **Detailed Responsibilities:**
    *   Receive an MDTM task from `manager-web-app-scaffolder` including:
        *   The chosen technology stack (especially frontend framework).
        *   The root path to the scaffolded project directory.
        *   (Optional) User preference for a testing framework.
    *   Consult its Knowledge Base to determine a suitable testing framework (e.g., Jest or Vitest for unit/integration; Playwright or Cypress for E2E stubs) based on the project's tech stack, or use the user's preference if valid.
    *   Add necessary testing framework dependencies to the project's `package.json` (either directly editing or preparing a list for `devops-dependency-manager`).
    *   Add basic test execution scripts to the `scripts` section of `package.json` (e.g., `"test": "jest"`, `"test:e2e": "playwright test"`).
    *   Create initial configuration files for the chosen testing framework(s) (e.g., `jest.config.js`, `vitest.config.js`, `playwright.config.js`) with sensible defaults for a scaffolded project.
    *   Create one or two example empty/passing test files in the appropriate test directory (e.g., `src/__tests__/example.test.js` or `tests/e2e/example.spec.js`) to demonstrate setup and provide a starting point.
    *   Report the testing frameworks configured, paths to config files, and example test files.

## 3. Primary Output Artifact(s) 📄➡️

*   **Description:** `{{ primary_output_artifact_description }}`
*   **Format/Template:** Modifications to `package.json`, new configuration files (e.g., `.js`, `.ts`), new test files (e.g., `.test.js`, `.spec.ts`).
*   **Key Characteristics of Output:** A project scaffold that has a recognized testing framework installed (or ready to be installed) and configured, with basic test scripts in `package.json` and example test files, allowing a developer to immediately start writing tests.

## 4. Key Skills & Knowledge Required 🧠

*   **Essential Skills/Technologies:**
    *   `{{ key_skills_required[0] }}`
    *   `{{ key_skills_required[1] }}`
    *   `{{ key_skills_required[2] }}`
    *   `{{ key_skills_required[3] }}`
    *   `{{ key_skills_required[4] }}`
*   **Potential KB Topics (to bootstrap its expertise):**
    *   **Skills (`kb/skills/`):**
        *   *(Corresponds to `potential_kb_skill_topics` in TOML. One per testing framework setup.)*
        *   `setup_jest_with_babel_react.md`
        *   `setup_vitest_for_vite_project.md`
        *   `setup_playwright_initial_config.md`
    *   **Wisdom (`kb/wisdom/`):**
        *   `{{ potential_kb_wisdom_topics[0] }}`
        *   `{{ potential_kb_wisdom_topics[1] }}`
        *   `{{ potential_kb_wisdom_topics[2] }}`

## 5. Interactions & Dependencies within the Squad Workflow 🔄

### 5.1. Typical Input Artifacts Expected
*   `{{ typical_input_artifacts_expected[0] }}` (To select an appropriate testing framework).
*   `{{ typical_input_artifacts_expected[1] }}` (The project to modify).
*   `{{ typical_input_artifacts_expected[2] }}`

### 5.2. Downstream Dependencies (Who uses its output?)
*   `{{ downstream_squad_members_dependent_on_output[0] }}`: Will include instructions in the main project `README.md` on how to run the configured tests.
*   `{{ downstream_squad_members_dependent_on_output[1] }}`: Will use this setup to write actual unit, integration, or E2E tests for the features they build.

## 6. Considerations for `.mode.md` & System Prompt 💡

*   The `roleDefinition` for `basic-test-environment-setup` should emphasize its ability to configure common testing frameworks for different JavaScript/TypeScript project types, guided by its KB.
*   Its `[metadata]` should include:
    *   `squad_name = "Web App Scaffolding Squad"`
    *   `primary_output_description = "Configured testing framework, updated package.json, and example empty test files."`
    *   `primary_output_template = "N/A (modifies/creates config and code files)"`
    *   `reports_to = "manager-web-app-scaffolder"`
*   It will use file editing tools and potentially `execute_command` if it needs to run package manager commands to add dev dependencies (though deferring to `devops-dependency-manager` might be cleaner).

## 7. Open Questions / Further Definition Needed ❓

*   Which testing frameworks should be prioritized for its initial KB? (Jest and Vitest for unit/integration, Playwright for E2E seem like good starts).
*   Should it install dev dependencies directly, or just update `package.json` for `devops-dependency-manager` to handle? (Updating `package.json` is likely cleaner for a scaffolder).
*   How complex should the "example empty test" be? (A single `expect(true).toBe(true);` is often sufficient to prove setup).