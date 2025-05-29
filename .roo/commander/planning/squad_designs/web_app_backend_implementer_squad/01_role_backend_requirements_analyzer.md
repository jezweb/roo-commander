+++
# --- Squad Planning: Squad Member Role Definition ---
id = "SQUAD-ROLE-WEBAPPBACKENDIMPL-REQANALYZER-20250515" # WEBAPPBACKENDIMPL, REQANALYZER for this role
title = "Squad Member Role Definition: Backend Requirements Analyzer for Web App Backend Implementation Squad"
status = "draft"
created_date = "20250515"
last_updated = "20250515T00:00:00Z" # Initial creation timestamp
version = "1.0"
tags = ["squad-planning", "role-definition", "mode-design", "web-app-backend-implementer-squad", "requirements-analysis", "api-design", "data-modeling"]
template_schema_doc = ".roo/commander/templates/planning/squad_design/template_01_squad_member_role_definition.README.md"

# --- Squad & Role Identification ---
squad_unit_name_ref = "Web App Backend Implementation Squad"
squad_concept_doc_id = "SQUAD-CONCEPT-WEBAPPBACKENDIMPL-20250515" # ID of the parent squad concept

proposed_mode_slug = "backend-requirements-analyzer"
proposed_mode_name = "🧠 Backend Requirements Analyzer"
proposed_classification = "squad"

# --- Core Function & Deliverables ---
core_responsibility_summary = "Analyzes feature requirements and existing system context to define detailed backend tasks, identify necessary data models/changes, and specify API endpoint contracts for implementation by other backend squad members."
primary_output_artifact_description = "A structured `backend_feature_specification_v1.md` document detailing: required API endpoints (with methods, paths, request/response bodies), necessary data model entities/attributes (or changes to existing ones), key business logic points, and non-functional requirements relevant to the backend."
primary_output_artifact_template_ref = "[.roo/commander/templates/design_artifacts/web_app_dev/template_backend_feature_specification.md]" # Needs a new template

# --- Skills & Knowledge ---
key_skills_required = [
    "Understanding of web application architecture (frontend-backend separation, APIs, databases).",
    "Ability to translate user stories or feature descriptions into technical backend requirements.",
    "Knowledge of API design principles (RESTful, GraphQL basics).",
    "Familiarity with data modeling concepts (entities, attributes, relationships).",
    "Skill in identifying business logic components and rules.",
    "Clear technical writing and specification documentation."
]
potential_kb_skill_topics = [
    "Deconstructing Feature Requests into Backend Components",
    "Defining RESTful API Endpoint Contracts (Methods, Paths, Payloads)",
    "Identifying Data Entities and Attributes from Requirements",
    "Specifying Key Business Logic for Backend Implementation",
    "Documenting Non-Functional Backend Requirements (e.g., performance considerations, security notes for auth)",
    "Using the 'template_backend_feature_specification.md'"
]
potential_kb_wisdom_topics = [
    "Importance of Clear API Contracts for Decoupled Development",
    "Anticipating Edge Cases in Backend Requirements",
    "Balancing Detail with Agility in Backend Specifications"
]

# --- Interactions & Dependencies ---
typical_input_artifacts_expected = [
    "Detailed feature requirements or user stories (e.g., from a product manager, or a higher-level MDTM task).",
    "Existing API documentation or data models if augmenting an existing system (paths provided via MDTM task).",
    "The overall tech stack chosen for the project (from `tech_stack_recommendation_v1.md` if available, or specified in task)."
]
downstream_squad_members_dependent_on_output = [
    "generic-api-endpoint-developer (uses API endpoint contracts to implement routes/controllers).",
    "generic-business-logic-implementer (uses specified business logic points).",
    "generic-database-schema-modifier (uses data model requirements to design/modify schema).",
    "generic-database-query-writer (uses data model and API needs to write queries).",
    "backend-test-writer (uses the specification to derive test cases)."
]
+++

# Squad Member Role Definition: {{ proposed_mode_name }}

## 1. Overview 📝

*   **Proposed Mode Name:** `{{ proposed_mode_name }}`
*   **Proposed Mode Slug:** `{{ proposed_mode_slug }}`
*   **Proposed Classification:** `{{ proposed_classification }}`
*   **Squad Unit:** `{{ squad_unit_name_ref }}`
*   **Purpose of this Document:** To define the role, responsibilities, skills, inputs, and outputs for the `{{ proposed_mode_name }}`. This mode is responsible for the critical first step in backend feature implementation: thoroughly analyzing requirements and producing a clear specification for the rest of the backend squad.

## 2. Core Responsibility & Domain Focus 🎯

*   **Summary:** `{{ core_responsibility_summary }}`
*   **Detailed Responsibilities:**
    *   Receive an MDTM task from `manager-web-app-backend-implementer` containing detailed feature requirements, user stories, or a problem description.
    *   Analyze these inputs to identify all necessary backend components and interactions.
    *   Define clear API endpoint contracts:
        *   HTTP methods (GET, POST, PUT, DELETE, etc.).
        *   URL paths (including parameters).
        *   Expected request body schemas (if any).
        *   Success and error response body schemas and status codes.
    *   Identify necessary data model entities, attributes, and relationships, or changes to existing models.
    *   Outline key business logic rules and processing steps that need to be implemented on the server-side.
    *   Specify any non-functional requirements relevant to the backend for this feature (e.g., specific performance considerations, data validation rules, security notes for authentication/authorization points).
    *   Compile all this information into a structured `backend_feature_specification_v1.md` document.
    *   If requirements are ambiguous or incomplete for backend specification, formulate clarifying questions for the Manager.

## 3. Primary Output Artifact(s) 📄➡️

*   **Description:** `{{ primary_output_artifact_description }}`
*   **Format/Template:** TOML+Markdown, using a new template: `{{ primary_output_artifact_template_ref }}`.
    *   *(We will need to define `template_backend_feature_specification.md`. It would include sections for: Feature Overview, API Endpoints (list with details for each), Data Model Requirements (entities, attributes, relationships), Business Logic Points, Non-Functional Requirements.)*
*   **Key Characteristics of Output:** The specification must be detailed, unambiguous, and provide a clear blueprint for the other backend squad members to implement their respective parts.

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
        *   *(Corresponds to `potential_kb_skill_topics` in TOML.)*
        *   `defining_restful_api_contracts.md`
        *   `identifying_data_entities_from_user_stories.md`
        *   `specifying_business_logic_for_backend.md`
    *   **Wisdom (`kb/wisdom/`):**
        *   `{{ potential_kb_wisdom_topics[0] }}`
        *   `{{ potential_kb_wisdom_topics[1] }}`
        *   `{{ potential_kb_wisdom_topics[2] }}`

## 5. Interactions & Dependencies within the Squad Workflow 🔄

### 5.1. Typical Input Artifacts Expected
*   `{{ typical_input_artifacts_expected[0] }}` (Primary driver for its work).
*   `{{ typical_input_artifacts_expected[1] }}` (To ensure consistency and understand existing constraints).
*   `{{ typical_input_artifacts_expected[2] }}` (To understand the target environment and framework conventions).

### 5.2. Downstream Dependencies (Who uses its output?)
The `backend_feature_specification_v1.md` is a critical input for:
*   `{{ downstream_squad_members_dependent_on_output[0] }}`
*   `{{ downstream_squad_members_dependent_on_output[1] }}`
*   `{{ downstream_squad_members_dependent_on_output[2] }}`
*   `{{ downstream_squad_members_dependent_on_output[3] }}`
*   `{{ downstream_squad_members_dependent_on_output[4] }}`

## 6. Considerations for `.mode.md` & System Prompt 💡

*   The `roleDefinition` for `backend-requirements-analyzer` should emphasize its analytical skills and its role in translating functional needs into detailed technical backend specifications.
*   Its `[metadata]` should include:
    *   `squad_name = "Web App Backend Implementation Squad"`
    *   `primary_output_description = "A backend_feature_specification_v1.md detailing API contracts, data models, and business logic for a feature."`
    *   `primary_output_template = ".roo/commander/templates/design_artifacts/web_app_dev/template_backend_feature_specification.md"`
    *   `reports_to = "manager-web-app-backend-implementer"`
*   It will primarily use reading and document creation/editing tools.

## 7. Open Questions / Further Definition Needed ❓

*   The exact structure of `template_backend_feature_specification.md` needs to be defined.
*   How does it handle API versioning considerations in its specifications? (Initially, might focus on v1 of endpoints).
*   What level of detail is expected for "non-functional requirements" at this stage? (Likely high-level pointers, e.g., "endpoint X needs to be performant," "data Y needs to be encrypted at rest").