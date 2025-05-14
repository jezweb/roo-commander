+++
# --- Squad Planning: Squad Member Role Definition ---
id = "SQUAD-ROLE-WSMAINT-SYMREFAC-20250720" # WSMAINT for Workspace Maintenance, SYMREFAC for Symbolic Refactor
title = "Squad Member Role Definition: Symbolic Language Refactor Agent for Workspace Maintenance Squad"
status = "draft" # This role is for a future capability
created_date = "{{YYYYMMDD}}"
updated_date = "{{YYYYMMDD}}"
version = "1.0"
tags = ["squad-planning", "role-definition", "mode-design", "workspace-maintenance-squad", "refactoring", "symbolic-language", "token-optimization", "meta-programming"]
template_schema_doc = ".roo/commander/templates/planning/squad_design/template_01_squad_member_role_definition.README.md"

# --- Squad & Role Identification ---
squad_unit_name_ref = "Workspace Maintenance Squad"
squad_concept_doc_id = "SQUAD-CONCEPT-WS-MAINT-20250720"

proposed_mode_slug = "symbolic-language-refactor-agent"
proposed_mode_name = "Σ Symbolic Language Refactor Agent" # Using Sigma as a placeholder for "symbol"
proposed_classification = "specialist" # Requires nuanced understanding

# --- Core Function & Deliverables ---
core_responsibility_summary = "Refactors existing Roo Commander V8 workspace documents (KBs, rules, prompts) to incorporate the established symbolic language, aiming to reduce token count and improve precision."
primary_output_artifact_description = "Updated .md files with verbose natural language replaced by their symbolic equivalents, along with a report of changes made and estimated token savings."
# primary_output_artifact_template_ref = "" # Modifies existing files.

# --- Skills & Knowledge ---
key_skills_required = [
    "Expert understanding of the Roo Commander V8 Symbolic Language (as defined in the glossary, e.g., 'PLAN-SYMOPT-GLOSSARY-001_Foundation_Glossary_v2.md').",
    "Ability to accurately map verbose natural language phrases to their correct symbolic representations.",
    "Proficiency in reading and precisely modifying Markdown and TOML+Markdown files (likely using diff application).",
    "Understanding of the context in which symbols are used to ensure meaning is preserved during refactoring.",
    "Ability to identify opportunities for symbolization in existing text.",
    "(Optional) Ability to estimate token count changes."
]
potential_kb_skill_topics = [
    "Identifying Common Phrases for Symbolization",
    "Applying Basic Symbolic Syntax (Symbol⟨Entity⟩{Parameter})",
    "Refactoring Procedural Steps into Symbols",
    "Refactoring Status Indicators and Constraints into Symbols",
    "Verifying Semantic Equivalence After Refactoring",
    "Estimating Token Impact of Symbolic Changes"
]
potential_kb_wisdom_topics = [
    "Balancing Symbol Density with Human Readability during Refactoring",
    "Prioritizing High-Impact Files for Symbolic Refactoring",
    "Strategies for Iterative Rollout of Symbolic Language"
]

# --- Interactions & Dependencies ---
typical_input_artifacts_expected = [
    "Path(s) to specific .md files (rules, KBs, prompts) to be refactored.",
    "Access to the definitive Symbolic Language Glossary.",
    "(Optional) Specific sections or types of phrases to target for refactoring."
]
downstream_squad_members_dependent_on_output = [
    "All AI modes (as their instructional context will become more token-efficient).",
    "Human developers (who will need to understand the symbolized files, supported by the glossary).",
    "standards-guardian (to verify correct application of symbolic language standards)."
]
+++

# Squad Member Role Definition: Σ Symbolic Language Refactor Agent

## 1. Overview

*   **Proposed Mode Name:** `Σ Symbolic Language Refactor Agent`
*   **Proposed Mode Slug:** `symbolic-language-refactor-agent`
*   **Squad Unit:** `Workspace Maintenance Squad`
*   **Purpose of this Document:** To define the role, responsibilities, skills, inputs, and outputs for the proposed `symbolic-language-refactor-agent`. This mode will specialize in refactoring existing Roo Commander V8 workspace documents (Knowledge Bases, rules, prompts, etc.) to utilize the established symbolic language, with the primary goals of reducing token counts and enhancing instructional precision. This role becomes active once the symbolic language itself is defined and approved.

## 2. Core Responsibility & Domain Focus

*   **Summary:** Refactors existing Roo Commander V8 workspace documents (KBs, rules, prompts) to incorporate the established symbolic language, aiming to reduce token count and improve precision.
*   **Detailed Responsibilities:**
    *   Receive an MDTM task specifying one or more `.md` files (or directories of files) to be refactored.
    *   Consult the definitive Symbolic Language Glossary (e.g., `PLAN-SYMOPT-GLOSSARY-001_Foundation_Glossary_v2.md` or its successor standard document) for all symbol definitions and syntax rules.
    *   Read the content of the target file(s).
    *   Identify verbose natural language phrases, common actions, states, entities, or constraints within the Markdown content that have defined symbolic equivalents.
    *   Carefully replace these phrases with their correct symbolic representations, ensuring the original meaning and intent of the instruction are preserved.
    *   Apply basic symbolic syntax conventions (e.g., `Symbol⟨Entity⟩{Parameter="Value"}`) as defined in the glossary.
    *   Focus on refactoring Markdown body content; be cautious with TOML string values to ensure they remain valid and human-readable where necessary. Avoid changing TOML keys or XML tags.
    *   (Optional) Estimate and report the token count reduction achieved for the refactored file(s).
    *   Produce updated versions of the input files with symbols integrated.

## 3. Primary Output Artifact(s)

*   **Description:**
    1.  **Modified `.md` files:** The input files with natural language refactored into symbolic language.
    2.  **Refactoring Report (Optional):** A brief report summarizing:
        *   Files processed.
        *   Key types of symbols applied.
        *   Estimated token savings (if calculated).
        *   Any ambiguities encountered or sections that were difficult to symbolize.
*   **Format/Template:** Direct modifications to existing `.md` files. The report could use a simple note template.

## 4. Key Skills & Knowledge Required

*   **Expert-level understanding of the Roo Commander V8 Symbolic Language and its glossary.** This is paramount.
*   Strong natural language understanding to accurately map phrases to symbols.
*   Proficiency in precisely editing Markdown files, ideally by generating and applying diffs to minimize unintended changes.
*   Contextual awareness to ensure that symbolization does not alter the original intent of instructions.
*   Ability to identify patterns and repetitive phrases suitable for symbolization.
*   (Optional but useful) Basic understanding of tokenization concepts in LLMs.

*   **Potential KB Topics (to bootstrap its expertise):**
    *   **Skills (`kb/skills/`):**
        *   `01-applying-action-symbols.md` (e.g., for ✍️, 🔍, ✨)
        *   `02-using-entity-and-parameter-syntax.md` (e.g., ⟨File⟩{path="..."})
        *   `03-refactoring-status-and-constraint-phrases.md` (e.g., for 🟢, 🟡, ≤, ‼️)
        *   `04-safe-refactoring-of-kb-procedures.md`
        *   `05-generating-a-refactoring-summary-report.md`
    *   **Wisdom (`kb/wisdom/`):**
        *   `01-when-not-to-symbolize-maintaining-clarity.md`
        *   `02-ensuring-semantic-equivalence-post-refactor.md`
        *   `03-iterative-approach-to-symbolic-refactoring.md`

## 5. Interactions & Dependencies within the Squad Workflow

### 5.1. Typical Input Artifacts Expected
*   An MDTM task from `manager-workspace-maintenance` specifying:
    *   A list of target file paths (or directory paths) for symbolic refactoring.
    *   A path to the current official Symbolic Language Glossary.
    *   (Optional) Any specific focus areas or types of symbols to prioritize.
    *   (Optional) Instruction on whether to estimate token savings.

### 5.2. Downstream Dependencies (Who uses its output?)
*   All AI modes in the system: They will consume the refactored, more token-efficient KBs and rules.
*   Human developers: They will read and maintain these symbolized files (requiring them to also understand the glossary).
*   `standards-guardian`: May review refactored files to ensure correct and consistent application of the symbolic language.

## 6. Considerations for `.mode.md` & System Prompt

*   The system prompt must heavily emphasize its reliance on the official Symbolic Language Glossary.
*   It needs to be instructed on the importance of preserving meaning during refactoring.
*   It should be capable of reading files, identifying symbolization opportunities based on the glossary, and then generating precise modifications (ideally as diffs).
*   Its primary goal is token reduction and precision, but not at the cost of breaking the logic of the document.

## 7. Open Questions / Further Definition Needed

*   How will it handle phrases that are *almost* a match for a symbol but not quite? (Initially, it should probably be conservative and only replace exact or very close semantic matches).
*   What is the review process for its refactored outputs? (Likely human review, especially in early stages).
*   How will token savings be accurately measured? (May require external tooling or a simplified estimation heuristic).