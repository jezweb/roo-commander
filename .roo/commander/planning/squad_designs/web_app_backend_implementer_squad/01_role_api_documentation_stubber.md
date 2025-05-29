+++
# --- Squad Planning: Squad Member Role Definition ---
id = "SQUAD-ROLE-WEBAPPBACKENDIMPL-APIDOCSTUB-20250515" # WEBAPPBACKENDIMPL, APIDOCSTUB for this role
title = "Squad Member Role Definition: API Documentation Stubber for Web App Backend Implementation Squad"
status = "draft"
created_date = "20250515"
last_updated = "20250515T00:00:00Z" # Initial creation timestamp
version = "1.0"
tags = ["squad-planning", "role-definition", "mode-design", "web-app-backend-implementer-squad", "api-documentation", "openapi", "swagger", "technical-writing"]
template_schema_doc = ".roo/commander/templates/planning/squad_design/template_01_squad_member_role_definition.README.md"

# --- Squad & Role Identification ---
squad_unit_name_ref = "Web App Backend Implementation Squad"
squad_concept_doc_id = "SQUAD-CONCEPT-WEBAPPBACKENDIMPL-20250515"

proposed_mode_slug = "api-documentation-stubber"
proposed_mode_name = "📖 API Documentation Stubber"
proposed_classification = "squad"

# --- Core Function & Deliverables ---
core_responsibility_summary = "Generates basic API documentation stubs (e.g., OpenAPI/Swagger snippets, or structured Markdown comments in code) for implemented API endpoints, based on feature specifications and endpoint code."
primary_output_artifact_description = "Snippets of API documentation in a chosen format (e.g., partial OpenAPI YAML/JSON, or JSDoc/TSDoc/PHPDoc style comments directly in the API endpoint source code files). Also, a report of endpoints for which documentation stubs were created."
primary_output_artifact_template_ref = "[N/A - Creates/modifies code comments or generates structured data snippets (e.g., OpenAPI YAML/JSON fragments). May use internal KB snippets as templates.]"

# --- Skills & Knowledge ---
key_skills_required = [
    "Understanding of API documentation principles and common formats (OpenAPI/Swagger, API Blueprint basics - via KB).",
    "Ability to parse API endpoint definitions from code or specifications to extract paths, methods, parameters, and basic request/response structures.",
    "Skill in generating structured documentation comments (e.g., JSDoc, TSDoc, PHPDoc, Python docstrings) for API handlers.",
    "Familiarity with generating basic OpenAPI/Swagger schema snippets for endpoints.",
    "Clear technical writing for describing endpoint purpose and parameters."
]
potential_kb_skill_topics = [
    "Generating Basic OpenAPI Path Item Objects for REST Endpoints",
    "Writing JSDoc/TSDoc Comments for Express.js Route Handlers",
    "Documenting Django REST Framework ViewSets with Docstrings for OpenAPI Generation",
    "Identifying Key Information for API Endpoint Documentation (Parameters, Responses, Auth)",
    "Structuring API Documentation Comments for Readability"
]
potential_kb_wisdom_topics = [
    "Importance of API Documentation for Developer Experience",
    "Keeping Documentation Stubs Concise but Informative",
    "Automating API Documentation Generation from Code Comments (Conceptual Overview)"
]

# --- Interactions & Dependencies ---
typical_input_artifacts_expected = [
    "The `backend_feature_specification_v1.md` (for API endpoint contracts and descriptions) from `backend-requirements-analyzer`.",
    "Implemented API endpoint source code files from `generic-api-endpoint-developer`.",
    "Information about whether endpoints are secured (from `backend-auth-enforcer`'s output or specification)."
]
downstream_squad_members_dependent_on_output = [
    "Human developers (will use and potentially enhance this documentation).",
    "Frontend teams/modes (can use this as an initial guide to understanding API usage).",
    "(Future) A more advanced `api-documentation-generator` that might compile these stubs into a full interactive API doc site."
]
+++

# Squad Member Role Definition: {{ proposed_mode_name }}

## 1. Overview 📝

*   **Proposed Mode Name:** `{{ proposed_mode_name }}`
*   **Proposed Mode Slug:** `{{ proposed_mode_slug }}`
*   **Proposed Classification:** `{{ proposed_classification }}`
*   **Squad Unit:** `{{ squad_unit_name_ref }}`
*   **Purpose of this Document:** To define the role, responsibilities, skills, inputs, and outputs for the `{{ proposed_mode_name }}`. This mode is responsible for creating initial documentation stubs for the API endpoints developed by the squad.

## 2. Core Responsibility & Domain Focus 🎯

*   **Summary:** `{{ core_responsibility_summary }}`
*   **Detailed Responsibilities:**
    *   Receive an MDTM task from `manager-web-app-backend-implementer` including:
        *   The `backend_feature_specification_v1.md` (for API endpoint contracts, descriptions, expected request/response schemas).
        *   Paths to the implemented API endpoint source code files.
        *   Information on which endpoints are protected by authentication/authorization.
    *   Consult its Knowledge Base for conventions on API documentation (e.g., OpenAPI snippet structure, JSDoc/TSDoc style for the specific backend language).
    *   For each implemented API endpoint:
        *   Extract or infer the path, HTTP method, key request parameters (path, query, body), and basic success/error response structures.
        *   Generate documentation comments directly within the API endpoint source code files (e.g., using JSDoc, TSDoc, PHPDoc, Python docstrings that are compatible with documentation generators like Swagger UI via annotations).
        *   Alternatively, or additionally, generate snippets in a standard API description format like OpenAPI (YAML or JSON) for each endpoint or a collection of endpoints.
        *   Include information about required authentication/authorization if applicable.
        *   Ensure documentation stubs clearly describe the endpoint's purpose, parameters, and expected responses at a high level.
    *   Report the list of endpoints for which documentation stubs were created and the method used (e.g., "Added JSDoc comments to 5 controller files," "Generated OpenAPI snippets for user_api.yaml").

## 3. Primary Output Artifact(s) 📄➡️

*   **Description:** `{{ primary_output_artifact_description }}`
*   **Format/Template:** Modifications to existing source code files (adding structured comments) or new files containing API description snippets (e.g., `.yaml`, `.json` for OpenAPI fragments).
*   **Key Characteristics of Output:** Initial, structured documentation for API endpoints that can be used by developers or processed by API documentation generation tools. These are "stubs" – not necessarily exhaustive, but a good starting point.

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
        *   `generating_openapi_path_item_stubs.md`
        *   `writing_jsdoc_for_express_routes.md`
        *   `documenting_django_views_for_drf_spectacular.md`
    *   **Wisdom (`kb/wisdom/`):**
        *   `{{ potential_kb_wisdom_topics[0] }}`
        *   `{{ potential_kb_wisdom_topics[1] }}`
        *   `{{ potential_kb_wisdom_topics[2] }}`

## 5. Interactions & Dependencies within the Squad Workflow 🔄

### 5.1. Typical Input Artifacts Expected
*   `{{ typical_input_artifacts_expected[0] }}` (Provides the intended contract and descriptions).
*   `{{ typical_input_artifacts_expected[1] }}` (The actual code to be documented).
*   `{{ typical_input_artifacts_expected[2] }}` (To correctly note security requirements).

### 5.2. Downstream Dependencies (Who uses its output?)
*   `{{ downstream_squad_members_dependent_on_output[0] }}`: Will use this documentation to understand and integrate with the API.
*   `{{ downstream_squad_members_dependent_on_output[1] }}`: Will use this documentation to understand how to call and test the API.
*   `{{ downstream_squad_members_dependent_on_output[2] }}`: If a separate tool or mode compiles these stubs into a full API documentation site, it would be the primary consumer.

## 6. Considerations for `.mode.md` & System Prompt 💡

*   The `roleDefinition` for `api-documentation-stubber` should emphasize its ability to generate initial API documentation in common formats or as structured code comments, based on endpoint specifications and code, guided by its KB.
*   Its `[metadata]` should include:
    *   `squad_name = "Web App Backend Implementation Squad"`
    *   `primary_output_description = "API documentation stubs (e.g., OpenAPI snippets or structured code comments) for implemented endpoints."`
    *   `primary_output_template = "N/A (generates/modifies code comments or creates structured data snippets)"`
    *   `reports_to = "manager-web-app-backend-implementer"`
*   It will primarily use file reading and precise file editing tools (for comments) or file creation tools (for OpenAPI snippets).

## 7. Open Questions / Further Definition Needed ❓

*   Which API documentation format should be prioritized for its initial KB (e.g., OpenAPI snippets vs. JSDoc/TSDoc comments)? (OpenAPI snippets might be more universally useful as a starting point, but code comments are good for co-location).
*   How does it handle complex request/response schemas? (It should aim to stub out basic structures based on the specification, not necessarily generate exhaustive schemas for deeply nested objects initially).
*   Should it attempt to infer parameter types from code if not fully specified in the input? (Basic inference could be a skill, but it should primarily rely on the input specification).