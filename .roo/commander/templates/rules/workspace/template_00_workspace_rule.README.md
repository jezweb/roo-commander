# Documentation: Template `template_00_workspace_rule.md`

## 1. Purpose

This template defines the standard structure for creating **Workspace Rule documents**. Workspace rules are foundational guidelines, standards, or procedures that apply broadly across the Roo Commander V8 ecosystem, affecting how various modes operate, how documents are formatted, or how common processes are executed.

Using this template ensures that all workspace rules are documented consistently, making them easier to understand, maintain, and reference.

## 2. Usage

1.  **Copy Template:** When creating a new Workspace Rule:
    *   Copy `.roo/commander/templates/rules/template_00_workspace_rule.md` to the `.roo/rules/` directory.
2.  **Rename File:** Rename the copied file descriptively, typically using a numbered prefix and a short name indicating its content (e.g., `05-file-naming-conventions.md`).
3.  **Populate TOML Frontmatter:**
    *   Fill in all placeholders in the TOML block of the new rule file.
    *   The `id` should be unique and versioned (e.g., `WORKSPACE-RULE-NAMING-CONVENTIONS-V1`).
    *   The `title` should be descriptive.
    *   Update `scope`, `target_audience`, `tags`, and `related_context` as appropriate for the specific rule.
    *   Set `last_updated` to the current date.
4.  **Define Rule Content in Markdown:**
    *   Fill in the Markdown sections (Objective, Scope & Applicability, Rule Definition, Rationale, etc.) with the specific details of the new workspace rule.

## 3. TOML Frontmatter Schema

The following fields are defined within the `+++` delimiters for a workspace rule document:

*   **`id` (String, Required):**
    *   A unique identifier for the rule document, including a version.
    *   Convention: `WORKSPACE-RULE-[ShortName]-V[Version]` (e.g., `"WORKSPACE-RULE-TOML-MD-FORMAT-V1"`).
*   **`title` (String, Required):**
    *   A human-readable title for the rule.
*   **`context_type` (String, Fixed: `"rules"`):**
    *   Indicates the document type.
*   **`scope` (String, Required):**
    *   A brief description of what area or aspect the rule governs.
*   **`target_audience` (Array of Strings, Required):**
    *   Specifies which modes or roles this rule applies to. Often `"all"` for workspace rules.
*   **`granularity` (String, Required):**
    *   Describes the nature of the rule.
    *   Options: `"standard"` (a defined way of doing things), `"guideline"` (a recommendation), `"procedure"` (step-by-step instructions), `"policy"`.
*   **`status` (String, Required):**
    *   Lifecycle status of the rule.
    *   Options: `"draft"`, `"active"`, `"deprecated"`, `"proposed"`.
*   **`last_updated` (String, Required):**
    *   Date of the last significant update to the rule, in `YYYYMMDD` or `YYYY-MM-DD` format.
*   **`version` (String, Required):**
    *   Version number of this rule document itself (e.g., `"1.0"`, `"1.1"`).
*   **`tags` (Array of Strings, Required):**
    *   Keywords for searching and categorization. **MUST** include `"rules"`, `"standard"` (or other granularity). Add specific tags relevant to the rule's content.
*   `related_context` (Array of Strings, Optional):
    *   Paths to other relevant rules, standards, or key documents that provide context or are related.
*   **`template_schema_doc` (String, Required):**
    *   Path to this schema documentation file.
    *   Value: `".roo/commander/templates/rules/template_00_workspace_rule.README.md"`

### Rule Specific Fields (Optional)

*These fields can be added to the TOML block if needed for a specific rule.*
*   `enforcement_level` (String, Optional): Describes how strictly the rule should be followed (e.g., `"critical"`, `"high"`, `"medium"`, `"recommendation"`).
*   `rationale_summary` (String, Optional): A very brief summary of the rule's importance.
*   `exceptions` (String, Optional, Multiline): Documents any known and approved exceptions to the rule.

## 4. Markdown Body Structure

The Markdown body provides the detailed definition of the workspace rule:

*   `# Workspace Standard: {{ title }}`: Main title.
*   `## 1. Objective`: The purpose of the rule.
*   `## 2. Scope & Applicability`: What and whom the rule applies to.
*   `## 3. Rule Definition / Procedure`: The core content of the rule or standard.
*   `## 4. Rationale`: Why the rule exists.
*   `## 5. Examples (Optional)`: Illustrative examples.
*   `## 6. Enforcement & Compliance (Optional)`: How the rule is maintained.
*   `## 7. Related Standards / Documents`: Links to other relevant documents.

This structure ensures that workspace rules are clear, well-justified, and easy for all modes (and human developers) to understand and follow.