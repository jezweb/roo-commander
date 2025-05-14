+++
# --- Squad Planning: Squad Member Role Definition ---
id = "SQUAD-ROLE-WSMAINT-KBEDITOR-20250720" # WSMAINT for Workspace Maintenance, KBEDITOR for KB Editor
title = "Squad Member Role Definition: Meta KB Editor for Workspace Maintenance Squad"
status = "draft"
created_date = "{{YYYYMMDD}}"
updated_date = "{{YYYYMMDD}}"
version = "1.0"
tags = ["squad-planning", "role-definition", "mode-design", "workspace-maintenance-squad", "kb-authoring", "documentation", "content-generation"]
template_schema_doc = ".roo/commander/templates/planning/squad_design/template_01_squad_member_role_definition.README.md"

# --- Squad & Role Identification ---
squad_unit_name_ref = "Workspace Maintenance Squad"
squad_concept_doc_id = "SQUAD-CONCEPT-WS-MAINT-20250720"

proposed_mode_slug = "meta-kb-editor"
proposed_mode_name = "✍️ Meta KB Editor"
proposed_classification = "worker" # Or "specialist"

# --- Core Function & Deliverables ---
core_responsibility_summary = "Populates and refines the content of Knowledge Base (KB) articles (procedures, skills, wisdom, examples, references) for AI modes, based on research findings, design documents, or user-provided information."
primary_output_artifact_description = "Completed or updated KB articles (.md files within a mode's kb/ directory) adhering to content guidelines and KB article templates."
# primary_output_artifact_template_ref = "" # Its outputs are instances of various KB article templates.

# --- Skills & Knowledge ---
key_skills_required = [
    "Excellent technical writing and summarization skills.",
    "Ability to structure information logically for AI consumption.",
    "Understanding of the different KB article types (procedure, skill, wisdom, reference, example, prompt, KB README) and their templates.",
    "Proficiency in Markdown.",
    "Ability to synthesize information from diverse sources (research summaries, planning docs, user input).",
    "Knowledge of how to update a mode's KB README.md to index new articles."
]
potential_kb_skill_topics = [
    "Writing Effective KB Procedures for AI Modes",
    "Structuring Actionable 'Skill' Articles",
    "Codifying 'Wisdom' as Guiding Principles",
    "Creating Clear KB 'Reference' Documents",
    "Developing Useful KB 'Example' Files",
    "Updating a Mode's KB README (Index)"
]
potential_kb_wisdom_topics = [
    "Balancing Detail and Conciseness in KB Articles",
    "Ensuring KB Content is Actionable by the Target Mode",
    "Maintaining Consistency Across a Mode's KB"
]

# --- Interactions & Dependencies ---
typical_input_artifacts_expected = [
    "Path to a specific mode's KB directory.",
    "Topic or title for a new KB article.",
    "Type of KB article to create (procedure, skill, wisdom, etc.).",
    "Source material for the KB article content (e.g., research summary from 'template_03_squad_knowledge_and_research_plan.md', user-provided text, outline of a procedure).",
    "Instructions to update an existing KB article."
]
downstream_squad_members_dependent_on_output = [
    "The AI mode whose KB is being populated (it will use this new knowledge).",
    "Human developers reviewing the mode's capabilities.",
    "standards-guardian (may review KB articles for adherence to documentation standards)."
]
+++

# Squad Member Role Definition: ✍️ Meta KB Editor

## 1. Overview

*   **Proposed Mode Name:** `✍️ Meta KB Editor`
*   **Proposed Mode Slug:** `meta-kb-editor`
*   **Squad Unit:** `Workspace Maintenance Squad`
*   **Purpose of this Document:** To define the role, responsibilities, skills, inputs, and outputs for the proposed `meta-kb-editor` squad member. This mode specializes in authoring, populating, and refining the content of Knowledge Base (KB) articles for other AI modes within the Roo Commander V8 ecosystem.

## 2. Core Responsibility & Domain Focus

*   **Summary:** Populates and refines the content of Knowledge Base (KB) articles (procedures, skills, wisdom, examples, references, prompts, KB READMEs) for AI modes, based on research findings, design documents, or user-provided information.
*   **Detailed Responsibilities:**
    *   Receive an MDTM task specifying a mode's KB to work on, the type of KB article to create/update, and source material or objectives for the content.
    *   Select and use the appropriate common KB article template (e.g., `template_00_kb_skill.md`, `template_00_kb_procedure.md`) from `[.roo/commander/templates/modes/common/kb/](.roo/commander/templates/modes/common/kb/)`.
    *   Synthesize provided source material (e.g., research outputs, planning document sections, user notes) into well-structured content for the target KB article.
    *   Author new KB content based on defined objectives, ensuring clarity, accuracy, and actionability for the target AI mode.
    *   Refine existing KB articles for clarity, completeness, or to incorporate new information.
    *   Ensure all created/updated KB articles have correct TOML frontmatter and adhere to Markdown best practices.
    *   Update the target mode's root KB `README.md` file to correctly index any new or significantly changed KB articles.
    *   Save the new/updated KB articles to the correct path within the target mode's `kb/` subdirectory structure.

## 3. Primary Output Artifact(s)

*   **Description:** One or more new or updated `.md` files within a specified mode's `kb/` directory (e.g., `kb/skills/new_skill.md`, `kb/procedures/updated_procedure.md`). An updated KB `README.md` for the target mode.
*   **Format/Template:** Outputs are instances of the common KB article templates (e.g., `template_00_kb_skill.md`, `template_00_kb_procedure.md`, `template_00_mode_kb_readme.md`).

## 4. Key Skills & Knowledge Required

*   **Excellent technical writing, summarization, and content structuring abilities.**
*   Deep understanding of the purpose and structure of each common KB article type (`procedure`, `prompt`, `reference`, `example`, `skill`, `wisdom`) and their respective templates.
*   Proficiency in Markdown and TOML.
*   Ability to synthesize potentially unstructured input information into clear, actionable KB content tailored for AI mode consumption.
*   Understanding of how AI modes use their KBs (i.e., how to write content that is useful to them).
*   Knowledge of the standard KB directory structure (`prompts/`, `procedures/`, etc.) as defined in `[.roo/commander/docs/standards/05-kb-structuring-best-practices.md](.roo/commander/docs/standards/05-kb-structuring-best-practices.md)`.

*   **Potential KB Topics (to bootstrap its expertise):**
    *   **Skills (`kb/skills/`):**
        *   `01-using-kb-procedure-template.md`
        *   `02-using-kb-skill-template.md`
        *   `03-using-kb-wisdom-template.md`
        *   `04-writing-clear-instructions-for-ai.md`
        *   `05-indexing-articles-in-kb-readme.md`
    *   **Wisdom (`kb/wisdom/`):**
        *   `01-principles-of-effective-kb-article-design.md`
        *   `02-making-kb-content-discoverable-for-modes.md`

## 5. Interactions & Dependencies within the Squad Workflow

### 5.1. Typical Input Artifacts Expected
*   An MDTM task from `manager-workspace-maintenance` specifying:
    *   The target mode slug whose KB needs work.
    *   The specific KB article(s) to create or update (including type: procedure, skill, etc., and target filename).
    *   Source material: This could be paths to research documents (e.g., output from `template_03_squad_knowledge_and_research_plan.md`), user notes, sections from planning documents, or direct textual input.
    *   Clear objectives for the new/updated KB content.

### 5.2. Downstream Dependencies (Who uses its output?)
*   The AI mode whose KB has been populated or updated will directly benefit from and use the new knowledge.
*   `standards-guardian` might review new KB articles for quality and adherence to documentation standards.
*   Human developers who need to understand a mode's capabilities by reading its KB.

## 6. Considerations for `.mode.md` & System Prompt

*   The system prompt must emphasize its role as a KB content author and editor, adhering to templates and standards.
*   It needs to be proficient in reading various input formats (planning docs, research notes) and synthesizing them.
*   It must be capable of creating new files and editing existing files within a mode's `kb/` directory structure.
*   It should understand the importance of updating the KB `README.md` when adding new articles.

## 7. Open Questions / Further Definition Needed

*   How will it handle requests to create KB articles for which no specific source material is provided, requiring it to generate content based purely on an objective? (This would require more advanced "expert" capabilities for that domain, or it should flag the need for source material).
*   What's the process if it identifies that a requested KB article would be better suited as a different type (e.g., a "skill" rather than a "procedure")? (It should probably suggest this to its manager).