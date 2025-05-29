+++
# --- Squad Planning: Squad Member Role Definition ---
id = "SQUAD-ROLE-FEIMPLEMENT-A11YCHECKER-20250515" # FEIMPLEMENT for Frontend Implementation, A11YCHECKER for this role
title = "Squad Member Role Definition: Accessibility Checker for Frontend Implementation Squad"
status = "draft"
created_date = "20250515"
last_updated = "20250515T00:00:00Z" # Initial creation timestamp
version = "1.0"
tags = ["squad-planning", "role-definition", "mode-design", "frontend-implementation-squad", "accessibility", "a11y", "wcag", "frontend-qa"]
template_schema_doc = ".roo/commander/templates/planning/squad_design/template_01_squad_member_role_definition.README.md"

# --- Squad & Role Identification ---
squad_unit_name_ref = "Frontend Implementation Squad"
squad_concept_doc_id = "SQUAD-CONCEPT-FEIMPLEMENT-20250515"

proposed_mode_slug = "accessibility-checker"
proposed_mode_name = "♿ Accessibility Checker"
proposed_classification = "squad"

# --- Core Function & Deliverables ---
core_responsibility_summary = "Reviews implemented frontend components and pages for basic adherence to web accessibility guidelines (WCAG), focusing on semantic HTML, ARIA attributes, keyboard navigability, and color contrast (conceptual)."
primary_output_artifact_description = "An `accessibility_review_notes_v1.md` document detailing findings, potential issues, and recommendations for improving the accessibility of the reviewed frontend code."
primary_output_artifact_template_ref = "[.roo/commander/templates/audits/template_01_accessibility_review_notes.md]" # Needs a new template

# --- Skills & Knowledge ---
key_skills_required = [
    "Understanding of core Web Content Accessibility Guidelines (WCAG) principles (Perceivable, Operable, Understandable, Robust - via KB).",
    "Knowledge of semantic HTML elements and their accessibility implications.",
    "Familiarity with basic ARIA (Accessible Rich Internet Applications) roles and properties (e.g., `role`, `aria-label`, `aria-describedby` - via KB).",
    "Ability to perform basic keyboard navigation checks.",
    "Conceptual understanding of color contrast requirements (though it won't be visually checking colors).",
    "Skill in identifying common accessibility pitfalls in web components."
]
potential_kb_skill_topics = [
    "Checking for Semantic HTML Usage (e.g., landmarks, headings, lists, buttons)",
    "Identifying Missing or Incorrect ARIA Attributes for Common Widgets",
    "Performing a Basic Keyboard Navigation Audit",
    "Reviewing Form Labels and Input Associations for Accessibility",
    "Understanding WCAG Color Contrast Ratios (Conceptual for providing advice)",
    "Using the 'template_accessibility_review_notes.md'"
]
potential_kb_wisdom_topics = [
    "The Importance of 'Accessibility First' Mindset in Frontend Development",
    "Common Misconceptions about Web Accessibility",
    "Resources for Deeper Learning on WCAG and ARIA"
]

# --- Interactions & Dependencies ---
typical_input_artifacts_expected = [
    "Paths to implemented frontend component and page files from `ui-component-developer` and `page-view-assembler`.",
    "The `frontend_feature_specification_v1.md` (for understanding intended functionality and interactions) from `feature-requirements-analyzer`.",
    "The project's established tech stack (frontend framework) to understand component structure."
]
downstream_squad_members_dependent_on_output = [
    "ui-component-developer (may need to refactor components based on accessibility recommendations)",
    "page-view-assembler (may need to adjust page structure based on recommendations)",
    "manager-web-app-frontend-implementer (receives the review notes to prioritize fixes or create remediation tasks)"
]
+++

# Squad Member Role Definition: {{ proposed_mode_name }}

## 1. Overview 📝

*   **Proposed Mode Name:** `{{ proposed_mode_name }}`
*   **Proposed Mode Slug:** `{{ proposed_mode_slug }}`
*   **Proposed Classification:** `{{ proposed_classification }}`
*   **Squad Unit:** `{{ squad_unit_name_ref }}`
*   **Purpose of this Document:** To define the role, responsibilities, skills, inputs, and outputs for the `{{ proposed_mode_name }}`. This mode focuses on reviewing frontend code for basic accessibility issues.

## 2. Core Responsibility & Domain Focus 🎯

*   **Summary:** `{{ core_responsibility_summary }}`
*   **Detailed Responsibilities:**
    *   Receive an MDTM task from `manager-web-app-frontend-implementer` specifying frontend components or pages to review for accessibility. Inputs will include:
        *   Paths to the relevant code files.
        *   Feature specifications to understand intended behavior.
    *   Consult its Knowledge Base for WCAG principles, semantic HTML best practices, ARIA usage guidelines, and common accessibility checks.
    *   Analyze the HTML structure of components/pages for:
        *   Proper use of semantic elements (nav, main, aside, header, footer, article, section, headings, lists, buttons, links).
        *   Correct landmark roles.
    *   Check for basic ARIA attribute usage where appropriate (e.g., `aria-label` for icon buttons, `aria-describedby` for inputs with descriptions, roles for custom widgets if identifiable).
    *   Conceptually review for keyboard navigability:
        *   Are all interactive elements focusable?
        *   Is there a logical focus order (conceptually, based on code structure)?
    *   Review form elements for proper labeling (`<label for="...">`).
    *   Identify potential color contrast issues based on common problematic patterns (e.g., light gray text on a white background mentioned in specs, though it won't visually inspect).
    *   Document findings, including specific issues and recommendations for improvement, in an `accessibility_review_notes_v1.md` file.
    *   Report the path to the review notes.

## 3. Primary Output Artifact(s) 📄➡️

*   **Description:** `{{ primary_output_artifact_description }}`
*   **Format/Template:** TOML+Markdown, using a new template: `{{ primary_output_artifact_template_ref }}`.
    *   *(We will need to define `template_accessibility_review_notes.md`. It would include sections for: Component/Page Reviewed, WCAG Checklist (basic items), Issues Found (with code snippets/paths), Recommendations, Overall Assessment.)*
*   **Key Characteristics of Output:** Actionable feedback that developers can use to improve the accessibility of their frontend code. Focuses on common, detectable issues from code analysis.

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
*   `{{ typical_input_artifacts_expected[0] }}` (The code to be reviewed).
*   `{{ typical_input_artifacts_expected[1] }}` (To understand the intended use and interactions).
*   `{{ typical_input_artifacts_expected[2] }}` (To understand the component structure of the framework).

### 5.2. Downstream Dependencies (Who uses its output?)
*   `{{ downstream_squad_members_dependent_on_output[0] }}`: Will use the review notes to refactor components and improve their accessibility.
*   `{{ downstream_squad_members_dependent_on_output[1] }}`: May use the review notes to adjust page structure.
*   `{{ downstream_squad_members_dependent_on_output[2] }}`: Uses the review notes to understand accessibility issues, prioritize fixes, or create specific MDTM tasks for remediation.

## 6. Considerations for `.mode.md` & System Prompt 💡

*   The `roleDefinition` for `accessibility-checker` should emphasize its focus on *basic, code-level* accessibility checks based on WCAG principles and common patterns, guided by its KB. It's not a replacement for human accessibility experts or automated browser testing tools but provides a first pass.
*   Its `[metadata]` should include:
    *   `squad_name = "Frontend Implementation Squad"`
    *   `primary_output_description = "An accessibility_review_notes_v1.md document with findings and recommendations."`
    *   `primary_output_template = ".roo/commander/templates/audits/template_01_accessibility_review_notes.md"`
    *   `reports_to = "manager-web-app-frontend-implementer"`
*   It will primarily use file reading and analytical capabilities. It might suggest code changes but not implement them directly.

## 7. Open Questions / Further Definition Needed ❓

*   The exact structure of `template_accessibility_review_notes.md` needs to be defined.
*   What level of WCAG compliance should it aim to check for (e.g., A, AA)? (Focus on common Level A and AA issues detectable from code).
*   Can it suggest specific ARIA attributes for common custom widget patterns (e.g., tabs, accordions) if it identifies them? (This would be an advanced KB skill).
*   It cannot perform checks that require visual rendering (e.g., actual color contrast values) or runtime interaction (e.g., full keyboard navigation flow). Its role is static code analysis for accessibility.