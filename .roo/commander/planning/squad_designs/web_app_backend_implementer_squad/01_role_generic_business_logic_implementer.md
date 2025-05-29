+++
# --- Squad Planning: Squad Member Role Definition ---
id = "SQUAD-ROLE-WEBAPPBACKENDIMPL-LOGICIMPL-20250515" # WEBAPPBACKENDIMPL, LOGICIMPL for this role
title = "Squad Member Role Definition: Generic Business Logic Implementer for Web App Backend Implementation Squad"
status = "draft"
created_date = "20250515"
last_updated = "20250515T00:00:00Z" # Initial creation timestamp
version = "1.0"
tags = ["squad-planning", "role-definition", "mode-design", "web-app-backend-implementer-squad", "business-logic", "service-layer", "domain-logic", "framework-agnostic-logic"]
template_schema_doc = ".roo/commander/templates/planning/squad_design/template_01_squad_member_role_definition.README.md"

# --- Squad & Role Identification ---
squad_unit_name_ref = "Web App Backend Implementation Squad"
squad_concept_doc_id = "SQUAD-CONCEPT-WEBAPPBACKENDIMPL-20250515"

proposed_mode_slug = "generic-business-logic-implementer"
proposed_mode_name = "💡 Generic Business Logic Implementer"
proposed_classification = "squad"

# --- Core Function & Deliverables ---
core_responsibility_summary = "Implements server-side business logic, service functions, data transformations, and algorithms as specified, often within service layers or utility modules, interacting with data access layers."
primary_output_artifact_description = "New or modified source code files (e.g., service classes/modules, utility functions) containing the implemented business logic for the specified backend framework. Also, a report of logic implemented."
primary_output_artifact_template_ref = "[N/A - Creates/modifies framework-specific or plain language (e.g., Python, JavaScript/TypeScript) code files.]"

# --- Skills & Knowledge ---
key_skills_required = [
    "Strong programming skills in relevant backend languages (e.g., JavaScript/TypeScript for Node.js, Python, Ruby - via KB).",
    "Ability to translate business rules and requirements into algorithmic logic.",
    "Understanding of common design patterns for service layers and business logic (e.g., separation of concerns).",
    "Skill in data manipulation and transformation.",
    "Knowledge of how to interact with data access layers or ORMs (without necessarily writing the raw queries themselves).",
    "Error handling best practices within business logic."
]
potential_kb_skill_topics = [
    # Skills related to implementing common business logic patterns in different languages/frameworks
    "Implementing Data Validation Logic in a [Framework] Service Layer",
    "Structuring Service Functions for Reusability in [Language]",
    "Error Handling and Propagation in Business Logic Modules ([Language])",
    "Integrating with Data Access Layers (Conceptual)",
    "Implementing Complex Conditional Logic for [Business_Domain_Example]"
]
potential_kb_wisdom_topics = [
    "Principles of Clean Code for Business Logic",
    "Separation of Concerns: Business Logic vs. API Controllers vs. Data Access",
    "Designing Testable Business Logic",
    "Idempotent Operations in Business Services"
]

# --- Interactions & Dependencies ---
typical_input_artifacts_expected = [
    "The `backend_feature_specification_v1.md` (containing business logic points and data model context) from `backend-requirements-analyzer`.",
    "The `tech_stack_recommendation_v1.md` (for chosen backend language/framework) or equivalent information.",
    "Path to the existing backend project directory.",
    "(Optional) API endpoint contracts from `generic-api-endpoint-developer` if logic is tightly coupled."
]
downstream_squad_members_dependent_on_output = [
    "generic-api-endpoint-developer (will call these business logic services/functions).",
    "generic-database-query-writer (may be called by this mode, or this mode uses its output/ORM models).",
    "backend-test-writer (will write unit/integration tests for this logic)."
]
+++

# Squad Member Role Definition: {{ proposed_mode_name }}

## 1. Overview 📝

*   **Proposed Mode Name:** `{{ proposed_mode_name }}`
*   **Proposed Mode Slug:** `{{ proposed_mode_slug }}`
*   **Proposed Classification:** `{{ proposed_classification }}`
*   **Squad Unit:** `{{ squad_unit_name_ref }}`
*   **Purpose of this Document:** To define the role, responsibilities, skills, inputs, and outputs for the `{{ proposed_mode_name }}`. This mode is responsible for coding the core server-side business rules and processes.

## 2. Core Responsibility & Domain Focus 🎯

*   **Summary:** `{{ core_responsibility_summary }}`
*   **Detailed Responsibilities:**
    *   Receive an MDTM task from `manager-web-app-backend-implementer` including:
        *   The `backend_feature_specification_v1.md` detailing required business logic, data transformations, and algorithms.
        *   The chosen backend language/framework.
        *   Path to the project codebase.
    *   Consult its Knowledge Base for language/framework-specific best practices for structuring service layers and implementing business logic.
    *   Implement the specified business rules and logic in appropriate service classes, modules, or functions.
    *   Perform necessary data transformations or manipulations.
    *   Interact with data access layers (e.g., calling functions provided by `generic-database-query-writer` or using ORM methods on models defined by `generic-database-schema-modifier`) to fetch or persist data.
    *   Implement robust error handling within the business logic.
    *   Ensure the implemented logic is testable and adheres to separation of concerns principles.
    *   Write clean, maintainable, and well-commented code according to project standards.
    *   Report the list of implemented/modified logic modules/files.

## 3. Primary Output Artifact(s) 📄➡️

*   **Description:** `{{ primary_output_artifact_description }}`
*   **Format/Template:** Framework-specific or plain language code files (e.g., `.js`, `.ts`, `.py`, `.rb`).
*   **Key Characteristics of Output:** Functional, testable, and well-structured server-side code that accurately implements the required business rules and processes.

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
        *   `implementing_service_layer_nodejs.md`
        *   `data_validation_patterns_python_django.md`
        *   `transaction_management_in_business_logic.md`
    *   **Wisdom (`kb/wisdom/`):**
        *   `{{ potential_kb_wisdom_topics[0] }}`
        *   `{{ potential_kb_wisdom_topics[1] }}`
        *   `{{ potential_kb_wisdom_topics[2] }}`
        *   `{{ potential_kb_wisdom_topics[3] }}`

## 5. Interactions & Dependencies within the Squad Workflow 🔄

### 5.1. Typical Input Artifacts Expected
*   `{{ typical_input_artifacts_expected[0] }}` (Primary specification for its work).
*   `{{ typical_input_artifacts_expected[1] }}` (To know which language/framework conventions and KB procedures to use).
*   `{{ typical_input_artifacts_expected[2] }}` (The codebase to modify/add to).
*   `{{ typical_input_artifacts_expected[3] }}` (To understand how its logic will be invoked).

### 5.2. Downstream Dependencies (Who uses its output?)
*   `{{ downstream_squad_members_dependent_on_output[0] }}`: API endpoints will call the services/functions created by this mode.
*   `{{ downstream_squad_members_dependent_on_output[1] }}`: This mode will typically *call* functions/methods provided by the database query writer or use ORM models whose schema was defined by the schema modifier. The dependency can be bi-directional or layered.
*   `{{ downstream_squad_members_dependent_on_output[2] }}`: Will write tests for the implemented business logic.

## 6. Considerations for `.mode.md` & System Prompt 💡

*   The `roleDefinition` for `generic-business-logic-implementer` must emphasize its ability to implement core processing logic in various specified backend languages/frameworks, guided by its KB.
*   Its `[metadata]` should include:
    *   `squad_name = "Web App Backend Implementation Squad"`
    *   `primary_output_description = "Implemented server-side business logic modules and service functions."`
    *   `primary_output_template = "N/A (generates/modifies framework-specific or plain language code files)"`
    *   `reports_to = "manager-web-app-backend-implementer"`
*   It will heavily use file creation/editing tools and its KB for language/framework-specific patterns and best practices.

## 7. Open Questions / Further Definition Needed ❓

*   How does it handle complex algorithms or highly specialized domain logic? (Initially, it might focus on more common business rules and data transformations, escalating very complex algorithms).
*   What is the expected level of detail in the input `backend_feature_specification_v1.md` regarding the logic? (It should be specific enough to translate into code, but might not be pseudo-code).
*   How are transactions or multi-step processes managed within the business logic it creates? (Its KB should contain patterns for this for supported frameworks).