+++
# --- Squad Planning: Squad Member Role Definition ---
id = "SQUAD-ROLE-WEBAPPSCAFFOLD-TECHADVISOR-20250515" # WEBAPPSCAFFOLD for Web App Scaffolding Squad, TECHADVISOR for this role
title = "Squad Member Role Definition: Web App Tech Stack Advisor for Web App Scaffolding Squad"
status = "draft"
created_date = "20250515"
last_updated = "20250515T00:00:00Z" # Initial creation timestamp
version = "1.0"
tags = ["squad-planning", "role-definition", "mode-design", "web-app-scaffolding-squad", "technology-stack", "architecture-advice", "framework-selection"]
template_schema_doc = ".roo/commander/templates/planning/squad_design/template_01_squad_member_role_definition.README.md"

# --- Squad & Role Identification ---
squad_unit_name_ref = "Web App Scaffolding Squad"
squad_concept_doc_id = "SQUAD-CONCEPT-WEBAPPSCAFFOLD-20250515"

proposed_mode_slug = "web-app-tech-stack-advisor"
proposed_mode_name = "🧐 Web App Tech Stack Advisor"
proposed_classification = "squad"

# --- Core Function & Deliverables ---
core_responsibility_summary = "Advises on suitable frontend frameworks, backend approaches (if any), and potentially UI libraries or BaaS options for the web app scaffold, based on clarified requirements and user preferences."
primary_output_artifact_description = "A `tech_stack_recommendation_v1.md` document outlining the chosen/recommended technologies (e.g., frontend framework, backend approach, UI library) with brief justifications."
primary_output_artifact_template_ref = "[.roo/commander/templates/design_artifacts/web_app_dev/template_tech_stack_recommendation.md]" # Needs a new template

# --- Skills & Knowledge ---
key_skills_required = [
    "Broad knowledge of popular frontend frameworks (React/Next.js, Vue/Nuxt, Svelte/SvelteKit, Astro, Angular).",
    "Understanding of different backend approaches (e.g., Node.js/Express, Python/Django/Flask, full-stack framework APIs, BaaS).",
    "Familiarity with common UI component libraries (e.g., MUI, Shadcn/ui, Bootstrap) and utility CSS (Tailwind).",
    "Awareness of BaaS options (Firebase, Supabase) and their core offerings.",
    "Ability to map project requirements (e.g., interactivity, SEO needs, data handling complexity) to suitable technologies.",
    "Skill in presenting options and trade-offs clearly."
]
potential_kb_skill_topics = [
    "Comparing Frontend Frameworks for Scaffolding Projects",
    "Choosing a Backend Approach for Simple Web Apps",
    "Advising on UI Library Selection Based on Style Preferences",
    "Introduction to Firebase/Supabase for Scaffolding",
    "Documenting Tech Stack Decisions and Rationale",
    "Using the 'template_tech_stack_recommendation.md'"
]
potential_kb_wisdom_topics = [
    "Balancing Cutting-Edge Tech with Stability for Scaffolds",
    "Considering Developer Experience in Tech Stack Choices",
    "When to Recommend a Full-Stack Framework vs. Separate Frontend/Backend",
    "The Role of BaaS in Rapid Prototyping"
]

# --- Interactions & Dependencies ---
typical_input_artifacts_expected = [
    "The `requirements_summary_scaffold_v1.md` from `web-app-requirements-clarifier` (via Manager's MDTM task).",
    "(Optional) User's pre-stated technology preferences or constraints."
]
downstream_squad_members_dependent_on_output = [
    "generic-project-scaffolder (needs chosen frameworks to set up project)",
    "generic-component-stubber (needs chosen frontend framework)",
    "generic-routing-configurator (needs chosen frontend framework)"
]
+++

# Squad Member Role Definition: {{ proposed_mode_name }}

## 1. Overview 📝

*   **Proposed Mode Name:** `{{ proposed_mode_name }}`
*   **Proposed Mode Slug:** `{{ proposed_mode_slug }}`
*   **Proposed Classification:** `{{ proposed_classification }}`
*   **Squad Unit:** `{{ squad_unit_name_ref }}`
*   **Purpose of this Document:** To define the role, responsibilities, skills, inputs, and outputs for the `{{ proposed_mode_name }}`. This mode assists the user (via the Manager) in selecting an appropriate technology stack for their web application scaffold.

## 2. Core Responsibility & Domain Focus 🎯

*   **Summary:** `{{ core_responsibility_summary }}`
*   **Detailed Responsibilities:**
    *   Receive an MDTM task from `manager-web-app-scaffolder` including the `requirements_summary_scaffold_v1.md`.
    *   Analyze the requirements (e.g., type of application, desired interactivity, data needs, style preferences) and any user-stated technology preferences.
    *   Consult its Knowledge Base for information on various frontend frameworks (React/Next.js, Vue/Nuxt, Svelte/SvelteKit, Astro, Angular), backend approaches (Node.js/Express, Python/Django/Flask, full-stack framework APIs, BaaS like Firebase/Supabase), and common UI libraries/CSS frameworks (MUI, Shadcn/ui, Bootstrap, Tailwind CSS).
    *   If requirements are clear and a user preference is strong and suitable, confirm the choice.
    *   If choices are open or requirements suggest alternatives, present 1-2 suitable options for key stack components (e.g., frontend framework, backend approach if needed) with brief pros/cons relevant to the project's scaffold nature. This interaction is facilitated by the Manager.
    *   Based on user selection or direct analysis, finalize the recommended tech stack.
    *   Document the chosen/recommended stack and brief rationale in a `tech_stack_recommendation_v1.md` file.

## 3. Primary Output Artifact(s) 📄➡️

*   **Description:** `{{ primary_output_artifact_description }}`
*   **Format/Template:** TOML+Markdown, using a new template: `{{ primary_output_artifact_template_ref }}`.
    *   *(We will need to define `template_tech_stack_recommendation.md`. It would include sections for: Chosen Frontend Framework, Chosen Backend Approach (if any), Chosen UI Library/CSS, Chosen BaaS (if any), and Justification for each choice.)*
*   **Key Characteristics of Output:** The recommendation should be clear, justified, and provide sufficient information for the `generic-project-scaffolder` to proceed.

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
        *   `{{ potential_kb_skill_topics[0] }}`
        *   `{{ potential_kb_skill_topics[1] }}`
        *   `{{ potential_kb_skill_topics[2] }}`
        *   `{{ potential_kb_skill_topics[3] }}`
        *   `{{ potential_kb_skill_topics[4] }}`
        *   `{{ potential_kb_skill_topics[5] }}`
    *   **Wisdom (`kb/wisdom/`):**
        *   `{{ potential_kb_wisdom_topics[0] }}`
        *   `{{ potential_kb_wisdom_topics[1] }}`
        *   `{{ potential_kb_wisdom_topics[2] }}`
        *   `{{ potential_kb_wisdom_topics[3] }}`

## 5. Interactions & Dependencies within the Squad Workflow 🔄

### 5.1. Typical Input Artifacts Expected
*   `{{ typical_input_artifacts_expected[0] }}` (This is the primary input).
*   `{{ typical_input_artifacts_expected[1] }}` (Passed via Manager from user interaction).

### 5.2. Downstream Dependencies (Who uses its output?)
*   `{{ downstream_squad_members_dependent_on_output[0] }}`: Critically needs the chosen frameworks to initialize the correct project type and install base dependencies.
*   `{{ downstream_squad_members_dependent_on_output[1] }}`: Needs the chosen frontend framework to create appropriate component stubs.
*   `{{ downstream_squad_members_dependent_on_output[2] }}`: Needs the chosen frontend framework to set up framework-specific routing.

## 6. Considerations for `.mode.md` & System Prompt 💡

*   The `roleDefinition` for `web-app-tech-stack-advisor` should highlight its knowledge of various web technologies and its advisory role in selecting a suitable stack *for scaffolding purposes*.
*   Its `[metadata]` should include:
    *   `squad_name = "Web App Scaffolding Squad"`
    *   `primary_output_description = "A tech_stack_recommendation_v1.md document outlining chosen technologies for the scaffold."`
    *   `primary_output_template = ".roo/commander/templates/design_artifacts/web_app_dev/template_tech_stack_recommendation.md"`
    *   `reports_to = "manager-web-app-scaffolder"`
*   It needs to be ables to present options and rationale clearly, for the Manager to relay to the user.

## 7. Open Questions / Further Definition Needed ❓

*   The exact structure of `template_tech_stack_recommendation.md` needs to be defined.
*   How deep should its comparison of frameworks go? (For scaffolding, it might focus on ease of setup, community size, and suitability for the stated project type, rather than deep performance benchmarks).
*   How does it handle conflicting user preferences vs. suitability based on requirements? (Likely presents trade-offs and makes a recommendation, with the Manager facilitating the final user decision).