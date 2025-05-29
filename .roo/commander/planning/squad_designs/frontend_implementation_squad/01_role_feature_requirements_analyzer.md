+++
# --- Squad Planning: Squad Member Role Definition ---
id = "SQUAD-ROLE-FEIMPLEMENT-FEATREQANA-20250515" # FEIMPLEMENT for Frontend Implementation, FEATREQANA for this role
title = "Squad Member Role Definition: Feature Requirements Analyzer for Frontend Implementation Squad"
status = "draft"
created_date = "20250515"
last_updated = "20250515T00:00:00Z" # Initial creation timestamp
version = "1.0"
tags = ["squad-planning", "role-definition", "mode-design", "frontend-implementation-squad", "requirements-analysis", "feature-breakdown", "frontend"]
template_schema_doc = ".roo/commander/templates/planning/squad_design/template_01_squad_member_role_definition.README.md"

# --- Squad & Role Identification ---
squad_unit_name_ref = "Frontend Implementation Squad"
squad_concept_doc_id = "SQUAD-CONCEPT-FEIMPLEMENT-20250515" # ID of the parent squad concept document

proposed_mode_slug = "feature-requirements-analyzer"
proposed_mode_name = "🔍 Feature Requirements Analyzer" # Changed emoji for distinction
proposed_classification = "squad"

# --- Core Function & Deliverables ---
core_responsibility_summary = "Analyzes detailed feature specifications, user stories, UI mockups/designs, and API contracts to produce a clear, actionable breakdown of frontend development tasks and component requirements."
primary_output_artifact_description = "A `frontend_feature_specification_v1.md` document detailing the frontend components to be built/modified, their interactions, data needs (from APIs), and client-side logic requirements for a given feature."
primary_output_artifact_template_ref = "[.roo/commander/templates/design_artifacts/web_app_dev/template_frontend_feature_specification.md]" # Needs a new template

# --- Skills & Knowledge ---
key_skills_required = [
    "Ability to understand and interpret user stories, UI/UX design specifications (mockups, wireframes), and API contracts.",
    "Skill in decomposing complex features into smaller, manageable frontend tasks and component definitions.",
    "Knowledge of common frontend architectural patterns and component design principles.",
    "Ability to identify data requirements for the frontend based on feature needs and API responses.",
    "Clear technical writing skills to document frontend specifications.",
    "Understanding of how frontend components interact to deliver a feature."
]
potential_kb_skill_topics = [
    "Deconstructing User Stories into Frontend Tasks",
    "Mapping UI Mockups to Component Hierarchies",
    "Defining Component Props and State from Feature Requirements",
    "Specifying Client-Side Logic for User Interactions",
    "Documenting Frontend Data Needs from API Contracts",
    "Using the 'template_frontend_feature_specification.md'"
]
potential_kb_wisdom_topics = [
    "Importance of Clear Specifications for Frontend Development",
    "Balancing Granularity and Overview in Feature Breakdowns",
    "Anticipating Frontend Edge Cases from Requirements"
]

# --- Interactions & Dependencies ---
typical_input_artifacts_expected = [
    "Detailed feature requirements document or user story (e.g., from a product manager or a higher-level planning phase).",
    "UI/UX design mockups or wireframes (e.g., Figma links, image files).",
    "API contract specifications (e.g., OpenAPI/Swagger doc, or a `backend_api_design.md` from a backend squad)."
]
downstream_squad_members_dependent_on_output = [
    "ui-component-developer (uses the component specifications to build individual components)",
    "page-view-assembler (uses the overall feature breakdown and component list to assemble pages)",
    "client-logic-implementer (uses the specified client-side logic requirements)",
    "manager-web-app-frontend-implementer (uses the output to create and assign detailed sub-tasks to other squad members)"
]
+++

# Squad Member Role Definition: {{ proposed_mode_name }}

## 1. Overview 📝

*   **Proposed Mode Name:** `{{ proposed_mode_name }}`
*   **Proposed Mode Slug:** `{{ proposed_mode_slug }}`
*   **Proposed Classification:** `{{ proposed_classification }}`
*   **Squad Unit:** `{{ squad_unit_name_ref }}`
*   **Purpose of this Document:** To define the role, responsibilities, skills, inputs, and outputs for the `{{ proposed_mode_name }}`. This mode acts as the initial analytical step within the Frontend Implementation Squad, ensuring feature requests are well-understood and broken down for effective frontend development.

## 2. Core Responsibility & Domain Focus 🎯

*   **Summary:** `{{ core_responsibility_summary }}`
*   **Detailed Responsibilities:**
    *   Receive an MDTM task from `manager-web-app-frontend-implementer` containing high-level feature requirements, user stories, UI designs (e.g., mockups, wireframes), and relevant API contract information.
    *   Thoroughly analyze all provided input materials.
    *   Identify and list all new or modified frontend UI components required to implement the feature. For each component, specify its purpose and key interactive elements if discernible from designs.
    *   Outline the necessary client-side logic and user interactions associated with the feature (e.g., "on button click, validate form and call API X").
    *   Specify the data requirements for each component/view, including what data needs to be fetched from APIs and what data needs to be managed in client-side state.
    *   Identify any dependencies on other features or backend services.
    *   Formulate clarifying questions for the Manager if requirements or designs are ambiguous or incomplete.
    *   Compile all this analysis into a structured `frontend_feature_specification_v1.md` document.

## 3. Primary Output Artifact(s) 📄➡️

*   **Description:** `{{ primary_output_artifact_description }}`
*   **Format/Template:** TOML+Markdown, using a new template: `{{ primary_output_artifact_template_ref }}`.
    *   *(We will need to define `template_frontend_feature_specification.md`. It would likely include sections for: Feature Overview, Target User Stories, UI Component Breakdown (name, purpose, key elements), Client-Side Logic/Interactions, Data Requirements (API endpoints, state needs), Dependencies, Open Questions.)*
*   **Key Characteristics of Output:** The specification must be detailed and clear enough for other frontend squad members (`ui-component-developer`, `client-logic-implementer`, etc.) to begin their implementation tasks.

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
    *   **Wisdom (`kb/wisdom/`):**
        *   `{{ potential_kb_wisdom_topics[0] }}`
        *   `{{ potential_kb_wisdom_topics[1] }}`
        *   `{{ potential_kb_wisdom_topics[2] }}`

## 5. Interactions & Dependencies within the Squad Workflow 🔄

### 5.1. Typical Input Artifacts Expected
*   `{{ typical_input_artifacts_expected[0] }}`
*   `{{ typical_input_artifacts_expected[1] }}`
*   `{{ typical_input_artifacts_expected[2] }}`
*   (Potentially) Access to the existing codebase if modifying a feature.

### 5.2. Downstream Dependencies (Who uses its output?)
*   `{{ downstream_squad_members_dependent_on_output[0] }}`: Uses the component specifications to build individual UI components.
*   `{{ downstream_squad_members_dependent_on_output[1] }}`: Uses the overall feature breakdown and component list to assemble pages/views.
*   `{{ downstream_squad_members_dependent_on_output[2] }}`: Uses the specified client-side logic requirements to implement interactivity.
*   `{{ downstream_squad_members_dependent_on_output[3] }}`: Uses this detailed specification to create and assign more granular sub-tasks to the other implementer modes in the squad.

## 6. Considerations for `.mode.md` & System Prompt 💡

*   The `roleDefinition` for `feature-requirements-analyzer` should emphasize its analytical skills in breaking down feature requests into concrete frontend tasks and specifications.
*   Its `[metadata]` should include:
    *   `squad_name = "Frontend Implementation Squad"`
    *   `primary_output_description = "A frontend_feature_specification_v1.md detailing components, interactions, and data needs for a feature."`
    *   `primary_output_template = ".roo/commander/templates/design_artifacts/web_app_dev/template_frontend_feature_specification.md"`
    *   `reports_to = "manager-web-app-frontend-implementer"`
*   It will primarily use reading and analytical capabilities, and then document generation tools/skills.

## 7. Open Questions / Further Definition Needed ❓

*   The exact structure of `template_frontend_feature_specification.md` needs to be defined.
*   How does it handle very large features? Does it break them into multiple specification documents, or one large one? (One per manageable feature/epic seems appropriate).
*   What's the process if API contracts are missing or incomplete? (It should flag this as a major blocker/dependency).