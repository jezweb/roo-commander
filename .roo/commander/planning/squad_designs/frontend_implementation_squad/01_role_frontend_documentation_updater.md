+++
# --- Squad Planning: Squad Member Role Definition ---
id = "SQUAD-ROLE-FEIMPLEMENT-FEDOCUPDATER-20250515" # FEIMPLEMENT for Frontend Implementation, FEDOCUPDATER for this role
title = "Squad Member Role Definition: Frontend Documentation Updater for Frontend Implementation Squad"
status = "draft"
created_date = "20250515"
last_updated = "20250515T00:00:00Z" # Initial creation timestamp
version = "1.0"
tags = ["squad-planning", "role-definition", "mode-design", "frontend-implementation-squad", "documentation", "technical-writing", "jsdoc", "storybook", "component-library"]
template_schema_doc = ".roo/commander/templates/planning/squad_design/template_01_squad_member_role_definition.README.md"

# --- Squad & Role Identification ---
squad_unit_name_ref = "Frontend Implementation Squad"
squad_concept_doc_id = "SQUAD-CONCEPT-FEIMPLEMENT-20250515"

proposed_mode_slug = "frontend-documentation-updater"
proposed_mode_name = "✍️ Frontend Documentation Updater"
proposed_classification = "squad"

# --- Core Function & Deliverables ---
core_responsibility_summary = "Creates and updates documentation for newly implemented or modified frontend components and features, including JSDoc/TSDoc comments, Storybook stories (if applicable), or updates to a component library guide."
primary_output_artifact_description = "Updated source code files with inline documentation (JSDoc/TSDoc), new or updated Storybook story files (`*.stories.js/jsx/ts/tsx`), or modifications to Markdown-based component/feature documentation. Also, a report of documentation changes."
primary_output_artifact_template_ref = "[N/A - Modifies code files or creates framework-specific documentation files (e.g., Storybook stories). May use a generic note template for its report.]"

# --- Skills & Knowledge ---
key_skills_required = [
    "Strong technical writing skills, with a focus on clarity and conciseness for developer audiences.",
    "Proficiency in JSDoc/TSDoc syntax for inline code documentation.",
    "Familiarity with component documentation tools like Storybook (writing stories, controls, actions - via KB).",
    "Ability to understand frontend component code (props, events, slots, state) to document it accurately.",
    "Skill in Markdown for creating or updating separate documentation files.",
    "Understanding of the project's documentation standards and structure."
]
potential_kb_skill_topics = [
    "Writing Effective JSDoc/TSDoc for React Components (Props, State, Hooks)",
    "Creating Storybook Stories for UI Components (Args, Controls, Actions)",
    "Documenting Vue Component Props, Events, and Slots",
    "Guidelines for Writing User-Facing Feature Descriptions (Frontend Focus)",
    "Updating a Component Library's Markdown Documentation"
]
potential_kb_wisdom_topics = [
    "The Importance of 'Living Documentation' for Frontend Components",
    "Writing Documentation for Different Audiences (Developers, QA, Product Owners)",
    "Keeping Documentation Synchronized with Code Changes",
    "Benefits of Using Storybook for Component Development and Documentation"
]

# --- Interactions & Dependencies ---
typical_input_artifacts_expected = [
    "Paths to newly implemented or modified frontend component/page files from `ui-component-developer`, `page-view-assembler`, `client-logic-implementer`, etc.",
    "The `frontend_feature_specification_v1.md` (for understanding feature purpose and intended usage) from `feature-requirements-analyzer`.",
    "The project's established tech stack and documentation tools/standards (e.g., if Storybook is in use)."
]
downstream_squad_members_dependent_on_output = [
    "Human developers (primary consumers of the documentation).",
    "frontend-test-writer (may refer to component prop/event documentation for writing tests).",
    "manager-web-app-frontend-implementer (receives report of documentation updates)."
]
+++

# Squad Member Role Definition: {{ proposed_mode_name }}

## 1. Overview 📝

*   **Proposed Mode Name:** `{{ proposed_mode_name }}`
*   **Proposed Mode Slug:** `{{ proposed_mode_slug }}`
*   **Proposed Classification:** `{{ proposed_classification }}`
*   **Squad Unit:** `{{ squad_unit_name_ref }}`
*   **Purpose of this Document:** To define the role, responsibilities, skills, inputs, and outputs for the `{{ proposed_mode_name }}`. This mode ensures that frontend features and components are adequately documented as they are developed.

## 2. Core Responsibility & Domain Focus 🎯

*   **Summary:** `{{ core_responsibility_summary }}`
*   **Detailed Responsibilities:**
    *   Receive an MDTM task from `manager-web-app-frontend-implementer` specifying frontend code that requires documentation. Inputs will include:
        *   Paths to the relevant component/page/logic files.
        *   Feature specifications or component design documents to understand context and purpose.
        *   Information about the project's documentation tools and standards (e.g., JSDoc, TSDoc, Storybook).
    *   Consult its Knowledge Base for best practices in technical writing, JSDoc/TSDoc conventions, and Storybook story creation for the project's framework.
    *   **Inline Code Documentation:**
        *   Add or update JSDoc/TSDoc blocks for functions, classes, components, props, methods, and return values in the provided code files.
        *   Ensure comments are clear, accurate, and explain the purpose, parameters, and usage.
    *   **Component Showcase/Examples (e.g., Storybook):**
        *   If Storybook (or a similar tool) is used in the project, create or update story files (`*.stories.js/jsx/ts/tsx`) for new or modified UI components.
        *   Define appropriate args, controls, and actions to showcase component variations and interactivity.
    *   **Separate Markdown Documentation (If applicable):**
        *   If the project maintains a separate component library guide or feature documentation in Markdown, update relevant sections or create new pages for the implemented features/components.
    *   Ensure all documentation adheres to the project's style and formatting guidelines.
    *   Report the files modified/created and a summary of the documentation updates.

## 3. Primary Output Artifact(s) 📄➡️

*   **Description:** `{{ primary_output_artifact_description }}`
*   **Format/Template:** Modifications to existing code files (adding JSDoc/TSDoc), new Storybook story files (e.g., `.stories.tsx`), or new/updated `.md` documentation files.
*   **Key Characteristics of Output:** Clear, accurate, and developer-friendly documentation that improves the understandability and maintainability of the frontend codebase.

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
        *   `{{ potential_kb_wisdom_topics[3] }}`

## 5. Interactions & Dependencies within the Squad Workflow 🔄

### 5.1. Typical Input Artifacts Expected
*   `{{ typical_input_artifacts_expected[0] }}` (The code that needs documenting).
*   `{{ typical_input_artifacts_expected[1] }}` (To understand what the code does and its purpose).
*   `{{ typical_input_artifacts_expected[2] }}` (To know which documentation tools/formats to use).

### 5.2. Downstream Dependencies (Who uses its output?)
*   `{{ downstream_squad_members_dependent_on_output[0] }}`: Will use this documentation to understand how to use components, integrate features, and maintain the codebase.
*   `{{ downstream_squad_members_dependent_on_output[1] }}`: May refer to component prop/event documentation when writing tests.
*   `{{ downstream_squad_members_dependent_on_output[2] }}`: Uses the report to confirm documentation tasks are complete.

## 6. Considerations for `.mode.md` & System Prompt 💡

*   The `roleDefinition` for `frontend-documentation-updater` should emphasize its technical writing skills and its ability to generate various forms of frontend documentation (inline, Storybook, Markdown), guided by its KB.
*   Its `[metadata]` should include:
    *   `squad_name = "Frontend Implementation Squad"`
    *   `primary_output_description = "Updated code with inline documentation, new/updated Storybook stories, or Markdown documentation files."`
    *   `primary_output_template = "N/A (modifies code or creates specific documentation files)"`
    *   `reports_to = "manager-web-app-frontend-implementer"`
*   It will primarily use file reading and precise code/text modification tools.

## 7. Open Questions / Further Definition Needed ❓

*   What specific documentation tools (e.g., Storybook, Docusaurus, TypeDoc) should its initial KB prioritize for generating skills/procedures?
*   How does it handle documenting complex state interactions or API integrations? (It should focus on documenting the component's public interface and props/events related to these, rather than the internal implementation details of the state/API services themselves, which would be documented by their respective specialists).
*   What's the trigger for this mode? After every component is built, or as a batch job for a completed feature? (Likely tasked by the Manager after a feature's core components and logic are implemented).