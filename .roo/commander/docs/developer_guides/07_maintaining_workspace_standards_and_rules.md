# Developer Guide: Maintaining Workspace Standards & Rules

## 1. Introduction

The Roo Commander V8 system is built upon a set of **Workspace Rules** (located in `.roo/rules/`) and **Standards Documents** (located in `.roo/commander/docs/standards/`). These documents define the core operational protocols, data formats, naming conventions, and best practices that ensure consistency, interoperability, and maintainability across all AI modes and system components.

This guide is for developers, system architects, and maintainers responsible for updating or evolving these foundational documents. Proper maintenance of these standards and rules is critical for the long-term health and scalability of the Roo Commander V8 ecosystem.

**Prerequisites:**
*   Deep understanding of the Roo Commander V8 architecture and its components.
*   Familiarity with all existing Workspace Rules and Standards Documents.
*   Access to version control (e.g., Git) for managing changes.

## 2. Why Maintain Standards and Rules?

*   **Adaptation:** As the Roo Commander system evolves, new modes are added, or core Roo Code capabilities change, standards and rules may need to be updated to reflect new realities or improved practices.
*   **Clarity:** Over time, ambiguities or areas for improvement in existing standards may be identified.
*   **Consistency:** Ensuring that all parts of the system continue to adhere to a common set of principles.
*   **Bug Prevention:** Outdated or unclear rules can lead to inconsistent mode behavior and errors.

## 3. Process for Updating Workspace Rules (`.roo/rules/`)

Workspace rules define mandatory operational behaviors for all modes. Changes here have a broad impact.

1.  **Identify Need for Change:**
    *   A new requirement emerges that necessitates a new workspace-wide rule.
    *   An existing rule is found to be ambiguous, incomplete, incorrect, or conflicting with new system capabilities.
    *   A better approach to a standard process is identified.
2.  **Proposal & Discussion (Recommended for significant changes):**
    *   If the change is substantial, consider drafting a brief proposal or an ADR (Architecture Decision Record in `.roo/commander/decisions/`) outlining the proposed change, its rationale, and potential impacts.
    *   Discuss with the team or key stakeholders.
3.  **Drafting/Editing the Rule File:**
    *   **New Rule:**
        *   Use the `[.roo/commander/templates/rules/template_00_workspace_rule.md](../../templates/rules/template_00_workspace_rule.md)` as a basis.
        *   Assign a new sequential number and descriptive name (e.g., `04-new-standard.md`).
        *   Carefully define the rule's objective, scope, definition, and rationale.
    *   **Existing Rule:**
        *   Carefully edit the relevant `.md` file in `.roo/rules/`.
        *   Update the `last_updated` field in the TOML frontmatter.
        *   Increment the `version` field in the TOML if the change is significant (e.g., alters the rule's core meaning or requirements). Minor clarifications might not require a version bump.
4.  **Update Related User-Friendly Standard Document:**
    *   If the workspace rule has a corresponding user-friendly explanation in `.roo/commander/docs/standards/` (e.g., `.roo/rules/01-standard-toml-md-format.md` is explained by `docs/standards/02-toml-md-document-format.md`), **that explanatory document MUST also be updated** to reflect the changes in the rule.
5.  **Update Template Schema Documentation (If Applicable):**
    *   If the rule change impacts the schema of a template it references (e.g., a change to the MDTM standard might affect `template_00_mdtm_task_generic.README.md`), that README **MUST** be updated.
6.  **Review & Testing:**
    *   Have the changes reviewed by another developer or architect familiar with the system.
    *   Consider the impact on existing modes. Will they need to be updated to comply with the new/changed rule?
    *   If possible, test the impact of the rule change in a development environment.
7.  **Communication:**
    *   Announce significant rule changes to all relevant developers and users of the system.
    *   Update any overarching system documentation (like the main project README or architectural overview) if affected.
8.  **Version Control:** Commit changes with clear messages explaining the update.

## 4. Process for Updating Standards Documents (`.roo/commander/docs/standards/`)

Standards documents provide human-readable explanations, conventions, and best practices.

1.  **Identify Need for Change:**
    *   A corresponding Workspace Rule has been updated.
    *   New best practices or conventions have emerged.
    *   Existing explanations are unclear or incomplete.
2.  **Drafting/Editing the Standard Document:**
    *   Edit the relevant `.md` file in `.roo/commander/docs/standards/`.
    *   Ensure clarity, provide good examples, and maintain consistency with related rules or other standards.
    *   Update the `last_updated` field and `version` (if applicable) in its TOML frontmatter.
3.  **Update Related Documents:**
    *   Ensure consistency with any formal Workspace Rule it explains.
    *   Update the `README.md` (Standards Index) in the `docs/standards/` directory if a new standard is added or a title changes significantly.
4.  **Review & Communication:**
    *   Have changes reviewed.
    *   Communicate updates to the team.
5.  **Version Control:** Commit changes with clear messages.

## 5. Key Considerations for Maintenance

*   **Impact Analysis:** Before changing any rule or standard, consider its potential impact on all existing modes, templates, and documentation.
*   **Backward Compatibility (for Rules):** If a rule change is not backward-compatible, this is a MAJOR change. Clearly document the implications and any necessary migration steps for existing modes or artifacts.
*   **Clarity for AI:** Remember that AI modes will interpret these rules. Strive for precise, unambiguous language. Avoid colloquialisms or overly complex sentence structures in formal rule definitions.
*   **User-Friendliness (for Standards Docs):** Ensure documents in `docs/standards/` are easy for human developers to understand and apply. Use examples, clear headings, and straightforward language.
*   **Centralization:** Keep these foundational documents in their designated locations (`.roo/rules/` and `.roo/commander/docs/standards/`) to maintain a single source of truth.
*   **Regular Review Cycle:** Consider establishing a periodic review cycle (e.g., quarterly) for all workspace rules and key standards to ensure they remain relevant and accurate as the system evolves.

Maintaining these foundational documents with care and diligence is essential for the stability, consistency, and long-term success of the Roo Commander V8 ecosystem.