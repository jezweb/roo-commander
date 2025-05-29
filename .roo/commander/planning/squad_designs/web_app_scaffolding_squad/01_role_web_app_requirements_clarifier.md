+++
# --- Squad Planning: Squad Member Role Definition ---
id = "SQUAD-ROLE-WEBAPPSCAFFOLD-REQCLARIFY-20250515" # WEBAPPSCAFFOLD for Web App Scaffolding Squad, REQCLARIFY for this role
title = "Squad Member Role Definition: Web App Requirements Clarifier for Web App Scaffolding Squad"
status = "draft"
created_date = "20250515"
last_updated = "20250515T00:00:00Z" # Initial creation timestamp
version = "1.0"
tags = ["squad-planning", "role-definition", "mode-design", "web-app-scaffolding-squad", "requirements-engineering", "user-interaction"]
template_schema_doc = ".roo/commander/templates/planning/squad_design/template_01_squad_member_role_definition.README.md"

# --- Squad & Role Identification ---
squad_unit_name_ref = "Web App Scaffolding Squad"
squad_concept_doc_id = "SQUAD-CONCEPT-WEBAPPSCAFFOLD-20250515" # Assumes the concept doc ID will follow this pattern

proposed_mode_slug = "web-app-requirements-clarifier"
proposed_mode_name = "🗣️ Web App Requirements Clarifier"
proposed_classification = "squad"

# --- Core Function & Deliverables ---
core_responsibility_summary = "Interacts with the user (via its Manager) to elicit and refine high-level requirements for a new web application scaffold, focusing on core pages/views, key functionalities, and overall style."
primary_output_artifact_description = "A structured document (`requirements_summary_scaffold_v1.md`) detailing the clarified requirements for the web app scaffold, including key pages, essential features, and desired overall aesthetic."
primary_output_artifact_template_ref = "[.roo/commander/templates/design_artifacts/web_app_dev/template_scaffold_requirements_summary.md]" # Needs a new template

# --- Skills & Knowledge ---
key_skills_required = [
    "Natural Language Understanding (NLU) to interpret user requests.",
    "Ability to ask targeted, clarifying questions.",
    "Knowledge of common web application components and features (pages, forms, navigation, data display).",
    "Understanding of different web application types (e.g., static site, SPA, dashboard, e-commerce front).",
    "Structuring elicited information into a clear requirements summary."
]
potential_kb_skill_topics = [
    "Techniques for Eliciting Core Web App Requirements",
    "Identifying Key Pages/Views for a Scaffold",
    "Translating User Needs into Essential Feature Stubs",
    "Documenting High-Level Style Preferences (e.g., 'modern', 'minimalist')",
    "Using the 'template_scaffold_requirements_summary.md'"
]
potential_kb_wisdom_topics = [
    "Balancing User Desires with Scaffolding Scope",
    "Common Ambiguities in Initial Web App Ideas",
    "Importance of a Clear Problem Statement for Scaffolding"
]

# --- Interactions & Dependencies ---
typical_input_artifacts_expected = [
    "Initial user request or project idea for a web application (passed via Manager's MDTM task).",
    "Context from the active session."
]
downstream_squad_members_dependent_on_output = [
    "web-app-tech-stack-advisor (uses requirements to advise on stack)",
    "ui-layout-generator (uses defined pages/views for layout)",
    "generic-project-scaffolder (uses overall requirements for project setup context)"
]
+++

# Squad Member Role Definition: {{ proposed_mode_name }}

## 1. Overview 📝

*   **Proposed Mode Name:** `{{ proposed_mode_name }}`
*   **Proposed Mode Slug:** `{{ proposed_mode_slug }}`
*   **Proposed Classification:** `{{ proposed_classification }}`
*   **Squad Unit:** `{{ squad_unit_name_ref }}`
*   **Purpose of this Document:** To define the specific role, responsibilities, core skills, primary inputs, and key outputs for the proposed `{{ proposed_mode_name }}` squad member. This mode is the initial point of contact (via the Manager) for understanding the user's vision for their web application scaffold.

## 2. Core Responsibility & Domain Focus 🎯

*   **Summary:** `{{ core_responsibility_summary }}`
*   **Detailed Responsibilities:**
    *   Receive an MDTM task from `manager-web-app-scaffolder` containing the initial user request for a web application scaffold.
    *   Analyze the initial request to identify ambiguities or missing information regarding core requirements.
    *   Formulate clarifying questions for the user (to be relayed by the Manager) to understand:
        *   The primary purpose of the web application.
        *   Key pages or views needed in the scaffold (e.g., Home, About, Contact, Product List, Dashboard).
        *   Essential high-level functionalities to be stubbed out (e.g., user registration placeholder, basic search bar, data display area).
        *   Overall desired style or aesthetic (e.g., "modern and clean," "playful," "corporate").
        *   Any known critical data entities to be represented (very high level, e.g., "users," "products").
    *   Synthesize the elicited information into a structured `requirements_summary_scaffold_v1.md` document.
    *   Ensure the requirements are focused on what is needed for a *scaffold* or *starter kit*, not a fully implemented application.

## 3. Primary Output Artifact(s) 📄➡️

*   **Description:** `{{ primary_output_artifact_description }}`
*   **Format/Template:** TOML+Markdown, using a new template: `{{ primary_output_artifact_template_ref }}`.
    *   *(We will need to define `template_scaffold_requirements_summary.md` later. It would likely include sections for: Overall Purpose, Key Pages/Views, Essential Features (as stubs), Style Preference, Core Data Entities (names only).)*
*   **Key Characteristics of Output:** The summary must be clear, concise, and actionable for subsequent squad members (Tech Stack Advisor, UI Layout Generator). It should define the *minimum viable scaffold*.

## 4. Key Skills & Knowledge Required 🧠

*   **Essential Skills/Technologies:**
    *   `{{ key_skills_required[0] }}`
    *   `{{ key_skills_required[1] }}`
    *   `{{ key_skills_required[2] }}`
    *   `{{ key_skills_required[3] }}`
    *   `{{ key_skills_required[4] }}`
*   **Potential KB Topics (to bootstrap its expertise):**
    *   **Skills (`kb/skills/`):**
        *   `{{ potential_kb_skill_topics[0] }}`
        *   `{{ potential_kb_skill_topics[1] }}`
        *   `{{ potential_kb_skill_topics[2] }}`
        *   `{{ potential_kb_skill_topics[3] }}`
        *   `{{ potential_kb_skill_topics[4] }}`
    *   **Wisdom (`kb/wisdom/`):**
        *   `{{ potential_kb_wisdom_topics[0] }}`
        *   `{{ potential_kb_wisdom_topics[1] }}`
        *   `{{ potential_kb_wisdom_topics[2] }}`

## 5. Interactions & Dependencies within the Squad Workflow 🔄

### 5.1. Typical Input Artifacts Expected
*   `{{ typical_input_artifacts_expected[0] }}`
*   `{{ typical_input_artifacts_expected[1] }}`
*   (Potentially) User responses to clarifying questions, passed via the Manager.

### 5.2. Downstream Dependencies (Who uses its output?)
*   `{{ downstream_squad_members_dependent_on_output[0] }}` will use the `requirements_summary_scaffold_v1.md` to guide technology stack suggestions.
*   `{{ downstream_squad_members_dependent_on_output[1] }}` will use the defined pages/views from the summary to generate initial UI layouts.
*   `{{ downstream_squad_members_dependent_on_output[2] }}` will use the overall requirements for context during project setup.

## 6. Considerations for `.mode.md` & System Prompt 💡

*   The `roleDefinition` for `web-app-requirements-clarifier` should emphasize its interactive nature (via the Manager) and its focus on eliciting *scaffold-level* requirements.
*   Its `[metadata]` should include:
    *   `squad_name = "Web App Scaffolding Squad"`
    *   `primary_output_description = "A structured requirements_summary_scaffold_v1.md detailing key pages, essential features, and style for a web app scaffold."`
    *   `primary_output_template = ".roo/commander/templates/design_artifacts/web_app_dev/template_scaffold_requirements_summary.md"`
    *   `reports_to = "manager-web-app-scaffolder"`
*   It will need strong NLU capabilities and the ability to formulate good clarifying questions.

## 7. Open Questions / Further Definition Needed ❓

*   The exact structure of `template_scaffold_requirements_summary.md` needs to be defined.
*   How deep should the "key functionalities" elicitation go for a scaffold? (Focus on *what* stubs are needed, not *how* they are implemented).