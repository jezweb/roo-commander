+++
# --- Squad Planning: Squad Member Role Definition ---
id = "SQUAD-ROLE-FEIMPLEMENT-FETESTWRITER-20250515" # FEIMPLEMENT for Frontend Implementation, FETESTWRITER for this role
title = "Squad Member Role Definition: Frontend Test Writer for Frontend Implementation Squad"
status = "draft"
created_date = "20250515"
last_updated = "20250515T00:00:00Z" # Initial creation timestamp
version = "1.0"
tags = ["squad-planning", "role-definition", "mode-design", "frontend-implementation-squad", "testing", "unit-testing", "integration-testing", "frontend-qa", "jest", "vitest", "rtl", "playwright"]
template_schema_doc = ".roo/commander/templates/planning/squad_design/template_01_squad_member_role_definition.README.md"

# --- Squad & Role Identification ---
squad_unit_name_ref = "Frontend Implementation Squad"
squad_concept_doc_id = "SQUAD-CONCEPT-FEIMPLEMENT-20250515"

proposed_mode_slug = "frontend-test-writer"
proposed_mode_name = "🧪 Frontend Test Writer"
proposed_classification = "squad"

# --- Core Function & Deliverables ---
core_responsibility_summary = "Writes unit tests and integration tests for frontend components, client-side logic, state management, and API integrations, using the testing framework established for the project."
primary_output_artifact_description = "A set of test files (e.g., `*.test.js`, `*.spec.ts`) containing unit and integration tests for the implemented frontend features and components. Also, a report summarizing test coverage and results if applicable."
primary_output_artifact_template_ref = "[N/A - Creates framework-specific test code files.]"

# --- Skills & Knowledge ---
key_skills_required = [
    "Proficiency in JavaScript/TypeScript and the project's chosen frontend framework.",
    "Strong understanding of testing principles (unit, integration, E2E concepts).",
    "Experience with one or more specified JavaScript testing frameworks (e.g., Jest, Vitest, React Testing Library, Vue Test Utils, Svelte Testing Library, Playwright/Cypress for component/integration level - via KB).",
    "Ability to write clear, concise, and maintainable test cases.",
    "Skill in mocking dependencies and API calls for testing frontend logic in isolation.",
    "Understanding of test assertions and coverage concepts."
]
potential_kb_skill_topics = [
    # One skill per supported testing framework/library, e.g.:
    "Writing Unit Tests for React Components with Jest and RTL",
    "Testing Vue Components with Vitest and Vue Test Utils",
    "Integration Testing Svelte Components that Fetch Data (with Mocks)",
    "Mocking API Calls in Jest/Vitest using `msw` or framework-specific mocks",
    "Writing Tests for Redux Actions and Reducers",
    "Basic E2E Test Stubs for Critical User Flows with Playwright"
]
potential_kb_wisdom_topics = [
    "The Test Pyramid and Its Application to Frontend Testing",
    "Writing Effective Assertions",
    "Best Practices for Mocking in Frontend Tests",
    "Achieving Good Test Coverage without Over-Testing",
    "Keeping Frontend Tests Fast and Reliable"
]

# --- Interactions & Dependencies ---
typical_input_artifacts_expected = [
    "The `frontend_feature_specification_v1.md` (for understanding feature behavior and acceptance criteria) from `feature-requirements-analyzer`.",
    "Implemented component, page, logic, state, and API integration files from other squad members (`ui-component-developer`, `page-view-assembler`, `client-logic-implementer`, `state-management-integrator`, `api-client-integrator`).",
    "The project's established testing framework and configuration (from `basic-test-environment-setup` or existing project setup).",
    "Path to the existing scaffolded/implemented project."
]
downstream_squad_members_dependent_on_output = [
    "manager-web-app-frontend-implementer (receives test results/coverage reports).",
    "Human developers (who will run these tests and maintain them).",
    "CI/CD pipelines (which will execute these tests)."
]
+++

# Squad Member Role Definition: {{ proposed_mode_name }}

## 1. Overview 📝

*   **Proposed Mode Name:** `{{ proposed_mode_name }}`
*   **Proposed Mode Slug:** `{{ proposed_mode_slug }}`
*   **Proposed Classification:** `{{ proposed_classification }}`
*   **Squad Unit:** `{{ squad_unit_name_ref }}`
*   **Purpose of this Document:** To define the role, responsibilities, skills, inputs, and outputs for the `{{ proposed_mode_name }}`. This mode is dedicated to ensuring the quality and correctness of frontend code by writing automated tests.

## 2. Core Responsibility & Domain Focus 🎯

*   **Summary:** `{{ core_responsibility_summary }}`
*   **Detailed Responsibilities:**
    *   Receive an MDTM task from `manager-web-app-frontend-implementer` specifying frontend features or components that require testing. Inputs will include:
        *   Feature specifications or component details.
        *   Paths to the implemented code files.
        *   Information about the project's testing framework and setup.
    *   Consult its Knowledge Base for testing patterns, assertion libraries, and mocking techniques relevant to the project's tech stack.
    *   Analyze the code and specifications to identify key functionalities, edge cases, and integration points to test.
    *   Write unit tests for individual components and utility functions to verify their logic and rendering based on props and state.
    *   Write integration tests to verify interactions between components, or between components and state management or API services (using mocks for external dependencies).
    *   (If within scope for this squad) Write basic E2E test stubs for critical user flows using tools like Playwright or Cypress, focusing on component integration at a higher level.
    *   Ensure tests are clear, maintainable, and provide good coverage for the specified functionalities.
    *   Run the tests (or guide the user/Manager on how to run them) and report results.
    *   Save test files in the appropriate directories within the project structure (e.g., `__tests__`, `src/tests`).
    *   Report the paths to the created test files and a summary of tests written/passed.

## 3. Primary Output Artifact(s) 📄➡️

*   **Description:** `{{ primary_output_artifact_description }}`
*   **Format/Template:** Framework-specific test code files (e.g., `MyComponent.test.js`, `featureX.spec.ts`).
*   **Key Characteristics of Output:** A suite of automated tests that verify the functionality and reliability of the implemented frontend code, contributing to overall code quality and reducing regressions.

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
        *   *(Corresponds to `potential_kb_skill_topics` in TOML. One per testing framework/library.)*
    *   **Wisdom (`kb/wisdom/`):**
        *   `{{ potential_kb_wisdom_topics[0] }}`
        *   `{{ potential_kb_wisdom_topics[1] }}`
        *   `{{ potential_kb_wisdom_topics[2] }}`
        *   `{{ potential_kb_wisdom_topics[3] }}`
        *   `{{ potential_kb_wisdom_topics[4] }}`

## 5. Interactions & Dependencies within the Squad Workflow 🔄

### 5.1. Typical Input Artifacts Expected
*   `{{ typical_input_artifacts_expected[0] }}` (To understand what behavior to test).
*   `{{ typical_input_artifacts_expected[1] }}` (The code to be tested).
*   `{{ typical_input_artifacts_expected[2] }}` (To use the correct tools and conventions).
*   `{{ typical_input_artifacts_expected[3] }}`

### 5.2. Downstream Dependencies (Who uses its output?)
*   `{{ downstream_squad_members_dependent_on_output[0] }}`: Uses test results to assess feature readiness and overall quality.
*   `{{ downstream_squad_members_dependent_on_output[1] }}`: Will run these tests locally during development and before committing code.
*   `{{ downstream_squad_members_dependent_on_output[2] }}`: Will execute these tests as part of automated quality gates.

## 6. Considerations for `.mode.md` & System Prompt 💡

*   The `roleDefinition` for `frontend-test-writer` should emphasize its expertise in various frontend testing methodologies and frameworks (via KB), and its goal of improving code quality and reliability.
*   Its `[metadata]` should include:
    *   `squad_name = "Frontend Implementation Squad"`
    *   `primary_output_description = "A suite of unit and integration test files for frontend components and features."`
    *   `primary_output_template = "N/A (creates framework-specific test code files)"`
    *   `reports_to = "manager-web-app-frontend-implementer"`
*   It will primarily use file creation and editing tools, and potentially `execute_command` to run test scripts (though reporting test results might be its primary focus rather than direct execution in all cases).

## 7. Open Questions / Further Definition Needed ❓

*   Which specific testing frameworks and libraries should be prioritized for its initial KB? (Jest, Vitest, React Testing Library, Vue Test Utils, Svelte Testing Library seem like good starting points. Playwright/Cypress for E2E stubs).
*   What is the expected level of test coverage? (This might be part of the input MDTM task's acceptance criteria).
*   Does it only write new tests, or can it also be tasked to update existing tests when features change? (Should be capable of both).
*   How are E2E tests (even stubs) differentiated from component/integration tests in its tasking? (The MDTM task should specify the type of tests required).