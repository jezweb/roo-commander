+++
# --- Squad Planning: Squad Member Role Definition ---
id = "SQUAD-ROLE-AUTHINTEG-TESTSPECIALIST-20250515" # AUTHINTEG, TESTSPECIALIST for this role
title = "Squad Member Role Definition: Auth Testing Specialist for Authentication Integration Squad"
status = "draft"
created_date = "20250515"
last_updated = "20250515T00:00:00Z" # Initial creation timestamp
version = "1.0"
tags = ["squad-planning", "role-definition", "mode-design", "authentication-integration-squad", "testing", "auth-testing", "security-testing", "quality-assurance", "e2e-testing", "integration-testing"]
template_schema_doc = ".roo/commander/templates/planning/squad_design/template_01_squad_member_role_definition.README.md"

# --- Squad & Role Identification ---
squad_unit_name_ref = "Authentication Integration Squad"
squad_concept_doc_id = "SQUAD-CONCEPT-AUTHINTEG-20250515"

proposed_mode_slug = "auth-testing-specialist"
proposed_mode_name = "✔️ Auth Testing Specialist"
proposed_classification = "squad"

# --- Core Function & Deliverables ---
core_responsibility_summary = "Designs and implements unit, integration, and end-to-end (E2E) tests for authentication and authorization flows, ensuring all security mechanisms function as specified and are resilient."
primary_output_artifact_description = "New test files (e.g., `auth.spec.js`, `login.e2e-spec.ts`) containing implemented test cases for various authentication scenarios (login, logout, signup, route protection, API protection, session handling). Also, a report of tests written and their initial pass/fail status if executed."
primary_output_artifact_template_ref = "[N/A - Creates framework-specific test code files.]"

# --- Skills & Knowledge ---
key_skills_required = [
    "Strong understanding of software testing principles and methodologies, especially for security features.",
    "Proficiency in writing tests using common frontend and backend testing frameworks (e.g., Jest, Vitest, Playwright, Cypress, PyTest, Supertest - via KB).",
    "Ability to design test cases for various authentication scenarios: successful login/signup, failed attempts, password reset, MFA, token expiry, session management, route/API protection (authenticated/unauthenticated/unauthorized).",
    "Skill in mocking dependencies, auth providers, or generating test tokens/users.",
    "Understanding of how to test both client-side UI flows and server-side API security.",
    "Familiarity with E2E testing tools and concepts."
]
potential_kb_skill_topics = [
    # Skills for testing auth with specific frameworks/providers, e.g.:
    "Writing E2E Tests for Clerk Login Flow with Playwright",
    "Unit Testing Firebase Auth Logic in React Components with Jest/RTL",
    "Integration Testing Supabase Auth Protected API Endpoints (Node.js/Supertest)",
    "Testing Custom JWT Token Validation and Expiry Scenarios",
    "Mocking Auth Provider SDKs for Frontend Unit Tests"
]
potential_kb_wisdom_topics = [
    "Key Scenarios to Cover in Authentication Testing",
    "Security Considerations for Test Data in Auth Tests",
    "Automating Auth Tests in a CI/CD Pipeline (Conceptual)",
    "Differentiating Between Testing Authentication and Authorization"
]

# --- Interactions & Dependencies ---
typical_input_artifacts_expected = [
    "The `auth_implementation_plan_v1.md` (detailing all auth flows and protection rules) from `auth-requirements-specifier`.",
    "Implemented frontend auth UI components from `frontend-auth-ui-implementer`.",
    "Implemented frontend route protection logic from `frontend-route-protector`.",
    "Implemented backend API security (middleware, token validation) from `backend-api-auth-enforcer`.",
    "Implemented session management logic from `auth-session-manager`.",
    "Information about the project's tech stack and chosen testing frameworks (potentially from `basic-test-environment-setup` if that squad was involved earlier, or specified in the task)."
]
downstream_squad_members_dependent_on_output = [
    "manager-auth-integrator (receives report on test creation and status, contributing to overall feature completion).",
    "Human developers (will run, maintain, and expand these test suites).",
    "CI/CD pipeline (will execute these tests automatically)."
]
+++

# Squad Member Role Definition: {{ proposed_mode_name }}

## 1. Overview 📝

*   **Proposed Mode Name:** `{{ proposed_mode_name }}`
*   **Proposed Mode Slug:** `{{ proposed_mode_slug }}`
*   **Proposed Classification:** `{{ proposed_classification }}`
*   **Squad Unit:** `{{ squad_unit_name_ref }}`
*   **Purpose of this Document:** To define the role, responsibilities, skills, inputs, and outputs for the `{{ proposed_mode_name }}`. This mode is dedicated to creating automated tests to verify all aspects of the implemented authentication and authorization solution.

## 2. Core Responsibility & Domain Focus 🎯

*   **Summary:** `{{ core_responsibility_summary }}`
*   **Detailed Responsibilities:**
    *   Receive an MDTM task from `manager-auth-integrator` including:
        *   The `auth_implementation_plan_v1.md` detailing all expected authentication/authorization behaviors.
        *   Paths to the implemented frontend and backend code related to authentication.
        *   Information about the project's tech stack and chosen testing frameworks.
    *   Consult its Knowledge Base for framework-specific and auth-provider-specific best practices for writing tests.
    *   Design test cases covering:
        *   Successful user signup and login flows (various providers/methods if applicable).
        *   Failed login attempts (invalid credentials, locked accounts).
        *   Password reset and account recovery flows.
        *   MFA flows (if implemented).
        *   Session creation, persistence, expiry, and secure logout.
        *   Frontend route protection (access by unauthenticated, authenticated, and unauthorized users).
        *   Backend API endpoint protection (access with valid/invalid/missing tokens, correct/incorrect permissions).
        *   Token validation and refresh mechanisms (if applicable).
    *   Implement these test cases using the project's chosen testing frameworks (e.g., Jest, Vitest, RTL for frontend components; Supertest, PyTest for backend APIs; Playwright, Cypress for E2E flows).
    *   Write unit tests for specific auth-related functions or modules.
    *   Write integration tests for interactions between auth components (e.g., UI calling auth service, API validating token).
    *   Write E2E tests for critical user authentication journeys.
    *   Set up necessary mocks for external dependencies or auth providers where appropriate.
    *   Ensure tests are placed in the conventional test directories within the project.
    *   Report on the test files created, a summary of scenarios covered, and (if possible via a dry run or actual execution in a test environment) initial pass/fail status.

## 3. Primary Output Artifact(s) 📄➡️

*   **Description:** `{{ primary_output_artifact_description }}`
*   **Format/Template:** Framework-specific test code files (e.g., `login.spec.js`, `auth.test.py`, `user-session.e2e.ts`).
*   **Key Characteristics of Output:** A comprehensive suite of automated tests that validate the security, functionality, and reliability of the implemented authentication and authorization mechanisms. These tests should be executable via the project's test runner.

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
        *   *(Corresponds to `potential_kb_skill_topics` in TOML. One per testing tool/auth scenario.)*
        *   `e2e_testing_clerk_signup_flow_with_playwright.md`
        *   `unit_testing_firebase_auth_react_hooks_jest.md`
        *   `integration_testing_supabase_protected_api_supertest.md`
    *   **Wisdom (`kb/wisdom/`):**
        *   `{{ potential_kb_wisdom_topics[0] }}`
        *   `{{ potential_kb_wisdom_topics[1] }}`
        *   `{{ potential_kb_wisdom_topics[2] }}`
        *   `{{ potential_kb_wisdom_topics[3] }}`

## 5. Interactions & Dependencies within the Squad Workflow 🔄

### 5.1. Typical Input Artifacts Expected
*   `{{ typical_input_artifacts_expected[0] }}` (The complete specification of what needs to be tested).
*   `{{ typical_input_artifacts_expected[1] }}` (The frontend code implementing auth UI).
*   `{{ typical_input_artifacts_expected[2] }}` (The frontend code implementing route protection).
*   `{{ typical_input_artifacts_expected[3] }}` (The backend code implementing API security).
*   `{{ typical_input_artifacts_expected[4] }}` (The code implementing session logic).
*   `{{ typical_input_artifacts_expected[5] }}` (To use the correct testing tools and framework conventions).

### 5.2. Downstream Dependencies (Who uses its output?)
*   `{{ downstream_squad_members_dependent_on_output[0] }}`: Uses the test results to assess the overall quality and security of the auth implementation.
*   `{{ downstream_squad_members_dependent_on_output[1] }}`: Will run these tests as part of their development loop and when making changes to auth-related code.
*   `{{ downstream_squad_members_dependent_on_output[2] }}`: Will execute these tests to prevent regressions and ensure ongoing security.

## 6. Considerations for `.mode.md` & System Prompt 💡

*   The `roleDefinition` for `auth-testing-specialist` must highlight its expertise in designing and writing comprehensive tests for authentication and authorization features across different frameworks and providers, guided by its KB.
*   Its `[metadata]` should include:
    *   `squad_name = "Authentication Integration Squad"`
    *   `primary_output_description = "A suite of automated test files covering various authentication and authorization scenarios."`
    *   `primary_output_template = "N/A (generates framework-specific test code files)"`
    *   `reports_to = "manager-auth-integrator"`
*   It will primarily use file creation/editing tools and its KB for testing patterns and framework-specific testing utilities. It might also use `execute_command` to run linters or formatters on the test code it generates.

## 7. Open Questions / Further Definition Needed ❓

*   What is the expected level of detail for test case design if not fully specified in the `auth_implementation_plan_v1.md`? (It should be able to derive common test scenarios for standard auth flows).
*   Does it actually *run* the tests and report pass/fail status, or only *write* the test files? (Initially, writing the test files is the primary goal. Running them might require a more complex setup or be part of a CI/CD pipeline that this mode doesn't manage directly, but it could report on the *ability* to run them).
*   How does it handle setting up test users or specific database states needed for auth tests? (It might need to generate simple mock data or user stubs within the test files, or coordinate with a data setup utility if one exists).