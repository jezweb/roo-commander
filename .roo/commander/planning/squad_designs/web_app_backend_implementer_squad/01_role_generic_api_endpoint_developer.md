+++
# --- Squad Planning: Squad Member Role Definition ---
id = "SQUAD-ROLE-WEBAPPBACKENDIMPL-APIENDPOINTDEV-20250515" # WEBAPPBACKENDIMPL, APIENDPOINTDEV for this role
title = "Squad Member Role Definition: Generic API Endpoint Developer for Web App Backend Implementation Squad"
status = "draft"
created_date = "20250515"
last_updated = "20250515T00:00:00Z" # Initial creation timestamp
version = "1.0"
tags = ["squad-planning", "role-definition", "mode-design", "web-app-backend-implementer-squad", "api-development", "rest-api", "graphql", "framework-agnostic-logic"]
template_schema_doc = ".roo/commander/templates/planning/squad_design/template_01_squad_member_role_definition.README.md"

# --- Squad & Role Identification ---
squad_unit_name_ref = "Web App Backend Implementation Squad"
squad_concept_doc_id = "SQUAD-CONCEPT-WEBAPPBACKENDIMPL-20250515"

proposed_mode_slug = "generic-api-endpoint-developer"
proposed_mode_name = "↔️ Generic API Endpoint Developer"
proposed_classification = "squad"

# --- Core Function & Deliverables ---
core_responsibility_summary = "Implements API endpoints (e.g., RESTful routes, GraphQL resolvers/mutations) in a specified backend framework, based on API contracts and feature specifications. Handles request parsing, basic validation, and response formatting, often delegating core business logic."
primary_output_artifact_description = "New or modified source code files (e.g., route handlers, controllers, resolvers) within the backend project that define and implement the specified API endpoints. Also, a report of endpoints created/modified."
primary_output_artifact_template_ref = "[N/A - Creates/modifies framework-specific code files, not a single TOML+MD artifact from a specific template for its *entire* output.]"

# --- Skills & Knowledge ---
key_skills_required = [
    "Strong understanding of API design principles (REST, GraphQL basics).",
    "Proficiency in creating routes/controllers/resolvers for common backend frameworks (e.g., Node.js/Express, Python/Django/Flask, Ruby on Rails - via KB).",
    "Ability to handle HTTP request/response objects, including headers, status codes, and body parsing.",
    "Skill in implementing basic input validation for API requests.",
    "Knowledge of how to structure API responses (e.g., consistent JSON format, error responses).",
    "Understanding of how to call service layers or business logic modules."
]
potential_kb_skill_topics = [
    # One skill per supported framework for API endpoint creation, e.g.:
    "Implementing RESTful Endpoints in Node.js with Express",
    "Implementing RESTful Endpoints in Python with Django REST Framework",
    "Implementing Basic GraphQL Resolvers with Apollo Server (Node.js)",
    "Request Validation Techniques for [Framework]",
    "Standard API Error Response Formatting"
]
potential_kb_wisdom_topics = [
    "Idempotency in REST APIs",
    "Best Practices for API Versioning (Conceptual)",
    "Securing API Endpoints (Deferring to auth-enforcer, but conceptual awareness)"
]

# --- Interactions & Dependencies ---
typical_input_artifacts_expected = [
    "The `backend_feature_specification_v1.md` (containing API endpoint contracts) from `backend-requirements-analyzer`.",
    "The `tech_stack_recommendation_v1.md` (for chosen backend framework) or equivalent information.",
    "Path to the existing backend project directory."
]
downstream_squad_members_dependent_on_output = [
    "generic-business-logic-implementer (may be called by these endpoints, or endpoints call its output).",
    "backend-auth-enforcer (will secure these endpoints).",
    "backend-test-writer (will write tests for these endpoints).",
    "api-documentation-stubber (will document these endpoints).",
    "Frontend teams/modes (will consume these APIs)."
]
+++

# Squad Member Role Definition: {{ proposed_mode_name }}

## 1. Overview 📝

*   **Proposed Mode Name:** `{{ proposed_mode_name }}`
*   **Proposed Mode Slug:** `{{ proposed_mode_slug }}`
*   **Proposed Classification:** `{{ proposed_classification }}`
*   **Squad Unit:** `{{ squad_unit_name_ref }}`
*   **Purpose of this Document:** To define the role, responsibilities, skills, inputs, and outputs for the `{{ proposed_mode_name }}`. This mode is responsible for the actual coding of API endpoints based on provided specifications.

## 2. Core Responsibility & Domain Focus 🎯

*   **Summary:** `{{ core_responsibility_summary }}`
*   **Detailed Responsibilities:**
    *   Receive an MDTM task from `manager-web-app-backend-implementer` including:
        *   The `backend_feature_specification_v1.md` detailing API endpoint contracts (paths, methods, request/response schemas).
        *   The chosen backend framework.
        *   Path to the project codebase.
    *   Consult its Knowledge Base for framework-specific procedures for creating API endpoints.
    *   For each specified endpoint:
        *   Create or modify route handler files/controller methods.
        *   Implement request parsing (e.g., for query parameters, request bodies).
        *   Perform basic input validation (e.g., checking for required fields, basic data types).
        *   Call appropriate service layer functions or business logic modules (to be implemented by `generic-business-logic-implementer`) to handle the core processing.
        *   Format and send appropriate HTTP responses (success data, error messages with correct status codes).
    *   Ensure created endpoints adhere to RESTful principles or GraphQL best practices as applicable.
    *   Write clean, maintainable code according to project coding standards.
    *   Report the list of implemented/modified endpoint files.

## 3. Primary Output Artifact(s) 📄➡️

*   **Description:** `{{ primary_output_artifact_description }}`
*   **Format/Template:** Framework-specific code files (e.g., `.js`, `.ts`, `.py`, `.rb`).
*   **Key Characteristics of Output:** Functional API endpoints that correctly handle requests, delegate to business logic, and return appropriate responses according to the specification.

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
        *   *(Corresponds to `potential_kb_skill_topics` in TOML. One per framework.)*
        *   `implementing_express_routes_controllers.md`
        *   `implementing_django_rest_viewsets.md`
        *   `handling_json_requests_responses_flask.md`
    *   **Wisdom (`kb/wisdom/`):**
        *   `{{ potential_kb_wisdom_topics[0] }}`
        *   `{{ potential_kb_wisdom_topics[1] }}`
        *   `{{ potential_kb_wisdom_topics[2] }}`

## 5. Interactions & Dependencies within the Squad Workflow 🔄

### 5.1. Typical Input Artifacts Expected
*   `{{ typical_input_artifacts_expected[0] }}` (This is the primary specification for its work).
*   `{{ typical_input_artifacts_expected[1] }}` (To know which framework's conventions and KB procedures to use).
*   `{{ typical_input_artifacts_expected[2] }}` (The codebase to modify/add to).

### 5.2. Downstream Dependencies (Who uses its output?)
*   `{{ downstream_squad_members_dependent_on_output[0] }}`: The business logic implementer will provide the services these endpoints call. There's a tight coupling here; often, the API endpoint developer might also stub out the service calls.
*   `{{ downstream_squad_members_dependent_on_output[1] }}`: Will add security layers to these endpoints.
*   `{{ downstream_squad_members_dependent_on_output[2] }}`: Will test these endpoints.
*   `{{ downstream_squad_members_dependent_on_output[3] }}`: Will generate documentation for these endpoints.
*   `{{ downstream_squad_members_dependent_on_output[4] }}`: Will consume these APIs.

## 6. Considerations for `.mode.md` & System Prompt 💡

*   The `roleDefinition` for `generic-api-endpoint-developer` must emphasize its KB-driven ability to implement API endpoints in various specified backend frameworks.
*   Its `[metadata]` should include:
    *   `squad_name = "Web App Backend Implementation Squad"`
    *   `primary_output_description = "Implemented API endpoint source code files for a specified backend framework."`
    *   `primary_output_template = "N/A (generates/modifies framework-specific code files)"`
    *   `reports_to = "manager-web-app-backend-implementer"`
*   It will heavily use file creation/editing tools and its KB for framework-specific API patterns.

## 7. Open Questions / Further Definition Needed ❓

*   How much initial data validation should this mode perform versus deferring to a dedicated validation layer within the business logic? (Basic validation like required fields and types seems appropriate for the endpoint layer).
*   How does it handle API versioning if specified in the requirements? (Initially, it might focus on implementing v1 and add comments for future versioning considerations).
*   Does it stub out calls to the business logic layer if those components aren't implemented yet? (Yes, this would be good practice, e.g., `// TODO: Call userService.getUser(id)`).