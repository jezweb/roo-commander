+++
# --- Basic Metadata ---
id = "DEVGUIDE-MAINTAIN-STANDARDS-RULES-V2" # Updated version
title = "Developer Guide: Maintaining Workspace Standards & Rules"
context_type = "developer_guide"
scope = "Provides procedures and best practices for updating and maintaining foundational Workspace Rules and Standards Documents in Roo Commander V8."
target_audience = ["developers", "system_architects", "core_maintainers"]
granularity = "procedure"
status = "active"
last_updated = "{{YYYYMMDD}}" # Placeholder - To be filled with current date
version = "2.0" # Incremented due to significant path convention updates
tags = ["developer-guide", "maintenance", "standards", "rules", "governance", "workspace-management"]
related_context = [
    ".roo/commander/docs/standards/00-directory-structure.md",
    ".roo/commander/docs/standards/01-naming-conventions.md", # Includes path conventions
    ".roo/rules/", # Location of workspace rules
    ".roo/commander/docs/standards/" # Location of standards documents
]
template_schema_doc = ".roo/commander/templates/docs/template_00_developer_guide.README.md" # Assuming a template for dev guides
# --- Document Specific Fields ---
# review_cycle = "As needed, or annually"
# approval_process = "Review by core architecture team"
+++

# Developer Guide: Maintaining Workspace Standards & Rules

## 1. Introduction

The Roo Commander V8 system is built upon a set of foundational **Workspace Rules** (located in `[.roo/rules/](.roo/rules/)`) and **Standards Documents** (located in `[.roo/commander/docs/standards/](.roo/commander/docs/standards/)`). These documents define the core operational protocols, data formats, naming conventions, path referencing standards, and best practices that ensure consistency, interoperability, and maintainability across all AI modes and system components.

This guide is for developers, system architects, and core maintainers responsible for proposing, updating, or evolving these foundational documents. Proper and careful maintenance of these standards and rules is critical for the long-term health, stability, and scalability of the Roo Commander V8 ecosystem.

All file path references within these documents and any related proposals **MUST** adhere to the workspace-root-relative path convention (starting with `.roo/`) as defined in `[.roo/commander/docs/standards/01-naming-conventions.md](.roo/commander/docs/standards/01-naming-conventions.md)`.

## 2. Why Maintain Standards and Rules?

*   **Adaptation & Evolution:** As the Roo Commander system evolves, new modes are added, core Roo Code capabilities change, or improved development practices are identified, existing standards and rules may need to be updated.
*   **Clarity & Precision:** Over time, ambiguities, omissions, or areas for improvement in existing standards may be discovered.
*   **Consistency Enforcement:** Ensuring that all parts of the system continue to adhere to a common, up-to-date set of principles.
*   **Error Prevention:** Outdated, conflicting, or unclear rules can lead to inconsistent mode behavior, integration issues, and runtime errors.

## 3. Process for Updating Workspace Rules (in `[.roo/rules/](.roo/rules/)`)

Workspace rules define mandatory operational behaviors for all modes. Changes to these files have a broad impact and must be handled with care.

1.  **Identify Need for Change:**
    *   A new system-wide requirement emerges that necessitates a new workspace rule.
    *   An existing rule is found to be ambiguous, incomplete, incorrect, outdated, or conflicting with new system capabilities or other rules.
    *   A significantly better approach to a standard process is identified.
2.  **Proposal & Discussion (MANDATORY for significant changes):**
    *   For any non-trivial change (i.e., more than a minor typo correction), draft a brief proposal or an Architecture Decision Record (ADR) in `[.roo/commander/decisions/](.roo/commander/decisions/)`.
    *   The proposal/ADR should outline:
        *   The current problem or limitation.
        *   The proposed change to the rule.
        *   The rationale and expected benefits.
        *   Potential impacts on existing modes, templates, or other rules/standards.
        *   Any necessary migration steps for existing components.
    *   Discuss this proposal with the core development/architecture team for review and approval before implementation.
3.  **Drafting/Editing the Rule File:**
    *   **Creating a New Rule:**
        *   Use the `[.roo/commander/templates/rules/template_00_workspace_rule.md](.roo/commander/templates/rules/template_00_workspace_rule.md)` as the basis.
        *   Assign a new sequential number and a descriptive name following conventions in `[.roo/commander/docs/standards/01-naming-conventions.md](.roo/commander/docs/standards/01-naming-conventions.md)` (e.g., `04-new-workspace-standard.md`).
        *   Carefully define the rule's `id`, `title`, `scope`, `target_audience`, `granularity`, `tags`, and the rule definition itself. Ensure all path references are workspace-root-relative (e.g., starting with `.roo/`).
    *   **Modifying an Existing Rule:**
        *   Carefully edit the relevant `.md` file in `[.roo/rules/](.roo/rules/)`.
        *   **Update TOML Frontmatter:**
            *   Update the `last_updated` field to the current date.
            *   Increment the `version` field (e.g., from `"1.0"` to `"1.1"` for minor changes/clarifications, or to `"2.0"` for significant or breaking changes).
            *   Review and update `tags` and `related_context` if necessary.
        *   Clearly mark changes in the Markdown body if possible (e.g., using comments or a changelog section if appropriate for very large changes, though Git history is primary).
4.  **Update Corresponding Standards Document(s):**
    *   If the workspace rule has a user-friendly explanatory companion in `[.roo/commander/docs/standards/](.roo/commander/docs/standards/)` (e.g., `[.roo/rules/01-standard-toml-md-format.md](.roo/rules/01-standard-toml-md-format.md)` is explained by `[.roo/commander/docs/standards/02-toml-md-document-format.md](.roo/commander/docs/standards/02-toml-md-document-format.md)`), that explanatory document **MUST also be updated** to accurately reflect the changes in the rule.
5.  **Update Template Schema Documentation (If Impacted):**
    *   If a rule change impacts the schema or usage of a system template it references (e.g., a change to the MDTM standard might affect `[.roo/commander/templates/tasks/template_00_mdtm_task_generic.README.md](.roo/commander/templates/tasks/template_00_mdtm_task_generic.README.md)`), that template's `.README.md` (schema documentation) **MUST** be updated.
6.  **Review & Test:**
    *   Have all changes (rule file, standards docs, template READMEs) peer-reviewed.
    *   Thoroughly consider the impact on all existing modes. Identify any modes whose system prompts, rules, or KBs might need updating to comply with the new/changed rule.
    *   If possible, conduct tests to verify that modes still behave as expected or correctly adopt the new rule.
7.  **Communication & Documentation:**
    *   Clearly announce significant rule changes to all developers and stakeholders.
    *   Update any overarching system documentation (e.g., the main project `README.md`, architectural overviews in `[.roo/commander/docs/architecture/](.roo/commander/docs/architecture/)`) if they are affected by the rule change.
8.  **Version Control:** Commit changes with clear, detailed messages explaining the purpose and scope of the rule update. Reference the proposal/ADR if one was created.

## 4. Process for Updating Standards Documents (in `[.roo/commander/docs/standards/](.roo/commander/docs/standards/)`)

Standards documents provide human-readable explanations, conventions, and best practices.

1.  **Identify Need for Change:**
    *   A corresponding Workspace Rule (in `[.roo/rules/](.roo/rules/)`) has been updated.
    *   New best practices, conventions, or structural elements (e.g., new KB subdirectories) have been adopted.
    *   Existing explanations in a standards document are found to be unclear, incomplete, or outdated.
2.  **Drafting/Editing the Standard Document:**
    *   Edit the relevant `.md` file in `[.roo/commander/docs/standards/](.roo/commander/docs/standards/)`.
    *   Prioritize clarity, provide good examples, and ensure consistency with related formal rules or other standards documents.
    *   Ensure all path references are workspace-root-relative (starting with `.roo/`).
    *   Update the `last_updated` field and `version` (if applicable for major revisions) in its TOML frontmatter.
3.  **Update Related Documents:**
    *   Ensure consistency with any formal Workspace Rule it explains.
    *   Update the `README.md` (Standards Index) in the `[.roo/commander/docs/standards/](.roo/commander/docs/standards/)` directory if a new standard document is added, or if an existing one's title or scope changes significantly.
4.  **Review & Communication:**
    *   Have changes peer-reviewed for accuracy and clarity.
    *   Communicate updates to the team.
5.  **Version Control:** Commit changes with clear messages.

## 5. Key Considerations for Maintaining Foundational Documents

*   **Impact Analysis (Critical):** Before modifying any rule or widely referenced standard, thoroughly assess its potential impact on all existing modes, templates, other rules/standards, and overall system behavior.
*   **Backward Compatibility (Especially for Rules):** If a change to a rule is not backward-compatible, it constitutes a MAJOR revision. Clearly document the breaking changes, the rationale, and any necessary migration steps for existing components.
*   **Clarity for AI (Rules):** Workspace Rules are directly consumed by AI modes. Language must be precise, unambiguous, and avoid colloquialisms. Define terms clearly.
*   **User-Friendliness (Standards Documents):** Documents in `[.roo/commander/docs/standards/](.roo/commander/docs/standards/)` are primarily for human developers. They must be easy to understand, well-structured, and include practical examples.
*   **Single Source of Truth:** Maintain these foundational documents in their designated, centralized locations to avoid conflicting information.
*   **Regular Review Cycle:** Consider establishing a periodic review cycle (e.g., quarterly or alongside major Roo Commander version releases) for all workspace rules and key standards documents to ensure they remain relevant, accurate, and effective.

Careful and diligent maintenance of these workspace rules and standards is paramount for the stability, consistency, and long-term success of the Roo Commander V8 ecosystem.