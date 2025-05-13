# Documentation: Template `template_00_mode_specific_rule.md`

## 1. Purpose

This template defines the standard structure for creating **Mode-Specific Rule documents**. These rules provide operational guidelines, procedures, or standards that are uniquely applicable to a single, specific AI mode (e.g., `roo-commander`, `manager-data-product`, `data-product-strategist`).

They differ from Workspace Rules, which apply globally to all modes. Mode-Specific Rules allow for tailoring behavior and internal logic for individual modes while maintaining a consistent documentation format. These rules are typically stored in a dedicated subdirectory for that mode, such as `.roo/rules-[mode_slug]/`.

## 2. Usage

1.  **Copy Template:** When creating a new Mode-Specific Rule:
    *   Copy `.roo/commander/templates/rules/template_00_mode_specific_rule.md` to the relevant mode's rule directory (e.g., `.roo/rules-manager-data-product/`).
2.  **Rename File:** Rename the copied file descriptively, often using a numbered prefix and a short name indicating its content (e.g., `01-mdp-squad-orchestration-logic.md`).
3.  **Populate TOML Frontmatter:**
    *   Fill in all placeholders in the TOML block of the new rule file.
    *   The `id` **MUST** be unique and should clearly indicate the mode it belongs to and include a version (e.g., `MDP-RULE-SQUAD-ORCH-V1`).
    *   The `title` should be descriptive and include the mode's name (e.g., `"Manager Data Product: Rule - Squad Orchestration Logic"`).
    *   The `target_audience` **MUST** be an array containing only the slug of the mode this rule applies to (e.g., `["manager-data-product"]`).
    *   Update `scope`, `tags`, and `related_context` as appropriate for the specific rule and mode.
    *   Set `last_updated` to the current date.
4.  **Define Rule Content in Markdown:**
    *   Fill in the Markdown sections (Objective, Scope & Applicability, Rule Definition, Rationale, etc.) with the specific details of the rule as it applies to that particular mode.

## 3. TOML Frontmatter Schema

The following fields are defined within the `+++` delimiters for a mode-specific rule document:

*   **`id` (String, Required):**
    *   A unique identifier for the rule document, indicating the mode and rule version.
    *   Convention: `[MODE_SLUG_UPPERCASE]-RULE-[ShortName]-V[Version]` (e.g., `"RC-RULE-KB-LOOKUP-V1"`).
*   **`title` (String, Required):**
    *   A human-readable title, typically prefixed with the Mode's name.
*   **`context_type` (String, Fixed: `"rules"`):**
    *   Indicates the document type.
*   **`scope` (String, Required):**
    *   A brief description of what aspect of the mode's behavior this rule governs.
*   **`target_audience` (Array of Strings, Required):**
    *   **MUST** contain a single string: the slug of the mode this rule applies to (e.g., `["roo-commander"]`).
*   **`granularity` (String, Required):**
    *   Describes the nature of the rule (e.g., `"procedure"`, `"guideline"`, `"standard"`).
*   **`status` (String, Required):**
    *   Lifecycle status of the rule (e.g., `"draft"`, `"active"`, `"deprecated"`).
*   **`last_updated` (String, Required):**
    *   Date of the last significant update.
*   **`version` (String, Required):**
    *   Version number of this rule document.
*   **`tags` (Array of Strings, Required):**
    *   Keywords. **MUST** include `"rules"`, `"mode-specific"`, and a tag for the mode's slug (e.g., `"roo-commander"`).
*   `related_context` (Array of Strings, Optional):
    *   Paths to relevant mode KB files, other mode rules, or workspace rules.
*   **`template_schema_doc` (String, Required):**
    *   Path to this schema documentation file.
    *   Value: `".roo/commander/templates/rules/template_00_mode_specific_rule.README.md"`

### Rule Specific Fields (Optional)

*These fields can be added to the TOML block if needed for a specific rule.*
*   `enforcement_level` (String, Optional): (e.g., `"critical"`, `"high"`).
*   `rationale_summary` (String, Optional): Brief justification.
*   `trigger_conditions` (String, Optional, Multiline): Describes when the mode should apply this rule.

## 4. Markdown Body Structure

The Markdown body provides the detailed definition of the mode-specific rule:

*   `# [Mode Name]: Rule - {{ title }}`: Main title.
*   `## 1. Objective`: Purpose of this rule for the specific mode.
*   `## 2. Scope & Applicability`: What aspects of *this mode's* operations it applies to.
*   `## 3. Rule Definition / Procedure`: The core logic/steps the mode must follow.
*   `## 4. Rationale`: Why this rule is important for this mode.
*   `## 5. Examples (Optional)`: Illustrative examples of the mode applying the rule.
*   `## 6. Related Mode KB Articles (If Applicable)`: Links to its own KB.
*   `## 7. Enforcement & Compliance (Optional)`: How the mode ensures compliance.

This structure ensures that mode-specific rules are clearly defined, justified, and linked to the mode they govern.