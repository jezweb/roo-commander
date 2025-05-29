+++
# --- Squad Planning: Squad Member Role Definition ---
id = "SQUAD-ROLE-WEBAPPBACKENDIMPL-TESTWRITER-20250515" # WEBAPPBACKENDIMPL, TESTWRITER for this role
title = "Squad Member Role Definition: Backend Test Writer for Web App Backend Implementation Squad"
status = "draft"
created_date = "20250515"
last_updated = "20250515T00:00:00Z" # Initial creation timestamp
version = "1.0"
tags = ["squad-planning", "role-definition", "mode-design", "web-app-backend-implementer-squad", "testing", "unit-testing", "integration-testing", "api-testing", "quality-assurance"]
template_schema_doc = ".roo/commander/templates/planning/squad_design/template_01_squad_member_role_definition.README.md"

# --- Squad & Role Identification ---
squad_unit_name_ref = "Web App Backend Implementation Squad"
squad_concept_doc_id = "SQUAD-CONCEPT-WEBAPPBACKENDIMPL-20250515"

proposed_mode_slug = "backend-test-writer"
proposed_mode_name = "✔️ Backend Test Writer"
proposed_classification = "squad"

# --- Core Function & Deliverables ---
core_responsibility_summary = "Writes unit and integration tests for backend API endpoints, business logic modules, and service layers, using the project's chosen testing framework and based on feature specifications."
primary_output_artifact_description = "New test files (e.g., `*.test.js`, `*_spec.py`) containing implemented test cases for backend components. Also, a report of tests written and their initial status (e.g., if they can be run in a dry-run mode)."
primary_output_artifact_template_ref = "[N/A - Creates framework-specific code files, not a single TOML+MD artifact from a specific template for its *entire* output.]"

# --- Skills & Knowledge ---
key_skills_required = [
    "Strong understanding of testing principles (unit, integration, API testing).",
    "Proficiency in writing tests using common backend testing frameworks (e.g., Jest, Supertest for Node.js; PyTest, Django Test Client for Python; RSpec for Rails - via KB).",
    "Ability to write assertions and mock dependencies.",
    "Skill in deriving test cases from feature specifications and API contracts.",
    "Understanding of how to test different layers of a backend application (controllers/routes, services, data access).",
    "Familiarity with setting up test data and managing test environments (basics)."
]
potential_kb_skill_topics = [
    # One skill per supported framework/testing tool, e.g.:
    "Writing Unit Tests for Express Controllers with Jest & Supertest",
    "Writing Integration Tests for Django Views with Django Test Client",
    "Testing Python Business Logic with PyTest and Mocks",
    "Best Practices for Naming Test Cases and Test Files",
    "Techniques for Mocking Database Interactions in Tests"
]
potential_kb_wisdom_topics = [
    "The Testing Pyramid and Its Application to Backend Testing",
    "Writing Maintainable and Readable Tests",
    "Achieving Good Test Coverage (Conceptual)",
    "Test-Driven Development (TDD) vs. Behavior-Driven Development (BDD) Basics (Conceptual)"
]

# --- Interactions & Dependencies ---
typical_input_artifacts_expected = [
    "The `backend_feature_specification_v1.md` (for understanding what to test) from `backend-requirements-analyzer`.",
    "Implemented API endpoint files from `generic-api-endpoint-developer`.",
    "Implemented business logic files from `generic-business-logic-implementer`.",
    "Database schema/model information from `generic-database-schema-modifier` (for test data setup).",
    "The `tech_stack_recommendation_v1.md` (for chosen backend framework and testing tools) or equivalent information.",
    "Path to the existing backend project directory, including any existing test setup from `basic-test-environment-setup`."
]
downstream_squad_members_dependent_on_output = [
    "CI/CD pipeline (will execute these tests).",
    "Human developers (will run and maintain these tests).",
    "manager-web-app-backend-implementer (receives report on test creation)."
]
+++

# Squad Member Role Definition: {{ proposed_mode_name }}

## 1. Overview 📝

*   **Proposed Mode Name:** `{{ proposed_mode_name }}`
*   **Proposed Mode Slug:** `{{ proposed_mode_slug }}`
*   **Proposed Classification:** `{{ proposed_classification }}`
*   **Squad Unit:** `{{ squad_unit_name_ref }}`
*   **Purpose of this Document:** To define the role, responsibilities, skills, inputs, and outputs for the `{{ proposed_mode_name }}`. This mode is dedicated to creating automated tests for the backend components developed by other squad members.

## 2. Core Responsibility & Domain Focus 🎯

*   **Summary:** `{{ core_responsibility_summary }}`
*   **Detailed Responsibilities:**
    *   Receive an MDTM task from `manager-web-app-backend-implementer` including:
        *   The `backend_feature_specification_v1.md` detailing the expected behavior of features.
        *   Paths to the implemented backend code files (API endpoints, business logic, data access layers).
        *   Information about the chosen backend framework and testing framework (potentially set up by `basic-test-environment-setup`).
        *   Path to the project codebase.
    *   Consult its Knowledge Base for framework-specific and testing-tool-specific procedures for writing unit and integration tests.
    *   Analyze the feature specifications and implemented code to identify key test scenarios (happy paths, edge cases, error conditions).
    *   Write unit tests for individual functions, modules, or classes in the business logic and data access layers, mocking external dependencies where appropriate.
    *   Write integration tests for API endpoints, testing request handling, interaction with service/logic layers, and response generation. This may involve setting up in-memory databases or mocking database calls.
    *   Ensure tests are well-named, isolated, and provide clear assertions.
    *   Place test files in the conventional directories for the project's testing framework.
    *   Report the list of test files created and a summary of test coverage (conceptual, e.g., "unit tests for X service, integration tests for Y endpoints").

## 3. Primary Output Artifact(s) 📄➡️

*   **Description:** `{{ primary_output_artifact_description }}`
*   **Format/Template:** Framework-specific test code files (e.g., `user.service.test.js`, `auth_api_spec.py`).
*   **Key Characteristics of Output:** A suite of automated tests that verify the correctness and reliability of the implemented backend features. These tests should be runnable via the project's test scripts (e.g., `npm test`).

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
        *   *(Corresponds to `potential_kb_skill_topics` in TOML. One per framework/testing tool.)*
        *   `writing_jest_unit_tests_for_node_services.md`
        *   `api_integration_testing_with_supertest_express.md`
        *   `pytest_fixtures_for_django_tests.md`
    *   **Wisdom (`kb/wisdom/`):**
        *   `{{ potential_kb_wisdom_topics[0] }}`
        *   `{{ potential_kb_wisdom_topics[1] }}`
        *   `{{ potential_kb_wisdom_topics[2] }}`
        *   `{{ potential_kb_wisdom_topics[3] }}`

## 5. Interactions & Dependencies within the Squad Workflow 🔄

### 5.1. Typical Input Artifacts Expected
*   `{{ typical_input_artifacts_expected[0] }}` (To understand expected behavior and derive test cases).
*   `{{ typical_input_artifacts_expected[1] }}` (The code to be tested).
*   `{{ typical_input_artifacts_expected[2] }}` (The code to be tested).
*   `{{ typical_input_artifacts_expected[3] }}` (For understanding data structures involved in tests).
*   `{{ typical_input_artifacts_expected[4] }}` (To know which testing framework and KB procedures to use).
*   `{{ typical_input_artifacts_expected[5] }}` (The codebase to add test files to, and any existing test setup).

### 5.2. Downstream Dependencies (Who uses its output?)
*   `{{ downstream_squad_members_dependent_on_output[0] }}`: The tests written by this mode will be executed as part of the CI/CD pipeline to ensure code quality before deployment.
*   `{{ downstream_squad_members_dependent_on_output[1] }}`: Will run these tests during development and use them to catch regressions.
*   `{{ downstream_squad_members_dependent_on_output[2] }}`: Receives a report on the tests created, which contributes to the overall feature completion status.

## 6. Considerations for `.mode.md` & System Prompt 💡

*   The `roleDefinition` for `backend-test-writer` must emphasize its KB-driven ability to write unit and integration tests for various backend frameworks using common testing libraries.
*   Its `[metadata]` should include:
    *   `squad_name = "Web App Backend Implementation Squad"`
    *   `primary_output_description = "New test files containing unit and integration tests for backend components and APIs."`
    *   `primary_output_template = "N/A (generates framework-specific code files)"`
    *   `reports_to = "manager-web-app-backend-implementer"`
*   It will heavily use file creation/editing tools and its KB for testing patterns and framework-specific testing utilities.

## 7. Open Questions / Further Definition Needed ❓

*   What is the target level of test coverage for the generated tests? (Initially, focus on key happy paths and critical error conditions for core logic and API endpoints).
*   Does it handle setting up test data within the test files, or does it assume test data utilities might be provided by other modes or developers? (It should be capable of setting up simple mock data or using basic fixtures).
*   How does it interact with the `basic-test-environment-setup` from the Scaffolding Squad? (It assumes the basic environment and configurations are already in place and builds upon that by adding specific test files).