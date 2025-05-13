# Documentation: Template `template_00_mode_core_principles_rule.md`

## 1. Purpose

This template defines the standard structure for creating a **Mode Core Principles & KB Usage Rule document**. Every AI mode (Orchestrators, Managers, Squad Members) **MUST** have such a rule file, typically named `00-[mode_slug]-core-principles.md`, located in its dedicated rule directory (e.g., `.roo/rules-[mode_slug]/`).

This rule serves two primary functions:
1.  To codify the **fundamental operational principles** that govern the specific mode's behavior, decision-making, and responsibilities.
2.  To define the **standard procedure for how that mode consults and utilizes its own Knowledge Base (KB)** for detailed instructions and domain-specific knowledge.

This consolidated rule provides the "instant context" or foundational operational DNA for each mode.

## 2. Usage

1.  **Copy Template:** When defining the core principles and KB usage for a new or existing AI mode:
    *   Copy `.roo/commander/templates/rules/template_00_mode_core_principles_rule.md` to the mode's specific rule directory (e.g., `.roo/rules-manager-data-product/`).
2.  **Rename File:** Rename the copied file to `00-[mode_slug]-core-principles.md` (e.g., `00-manager-data-product-core-principles.md`). The `00-` prefix indicates its foundational nature for that mode.
3.  **Populate TOML Frontmatter:**
    *   Fill in all placeholders in the TOML block.
    *   The `id` **MUST** be unique, clearly indicate the mode, and include "CORE-PRINCIPLES" and a version (e.g., `MANAGER-DATA-PRODUCT-RULE-CORE-PRINCIPLES-V1`).
    *   The `title` should be: `"[Mode Name]: Rule - Core Operational Principles & KB Usage"`.
    *   `target_audience` **MUST** be an array containing only the slug of the mode this rule applies to.
    *   Update `tags` to include `"[mode_slug_tag]"`, `"core-principles"`, and `"kb-lookup"`. Also add a tag for the mode's archetype (e.g., `"manager"`, `"squad-member"`).
    *   Update `related_context` to point to the mode's `.mode.md` file and its KB `README.md`.
    *   Set `last_updated` to the current date.
4.  **Customize Markdown Body:**
    *   Replace all bracketed placeholders like `[Mode Name]` and `[mode_slug]` with the actual values.
    *   **Crucially, customize Section 3 ("Core Operational Principles for `[Mode Name]`")** with 3-7 high-level principles specific to that mode's role and responsibilities, drawing from its system prompt in its `.mode.md` file.
    *   The "Knowledge Base (KB) Utilization Procedure" (Section 4) provides a strong boilerplate. Minor tweaks might be needed in "Targeted Information Retrieval" (Section 4.3) to guide the mode to its most critical KB sections based on its archetype.

## 3. TOML Frontmatter Schema

*   **`id` (String, Required):** Unique ID. Convention: `[MODE_SLUG_UPPERCASE]-RULE-CORE-PRINCIPLES-V[Version]`.
*   **`title` (String, Required):** Title: `"[Mode Name]: Rule - Core Operational Principles & KB Usage"`.
*   **`context_type` (String, Fixed: `"rules"`).**
*   **`scope` (String, Required):** Describes that this rule governs core principles and KB usage for the specific mode.
*   **`target_audience` (Array of Strings, Required):** **MUST** contain a single string: the slug of the mode.
*   **`granularity` (String, Fixed: `"procedure"`).**
*   **`status` (String, Required):** (e.g., `"draft"`, `"active"`).
*   **`last_updated` (String, Required):** Date.
*   **`version` (String, Required):** Rule document version.
*   **`tags` (Array of Strings, Required):** **MUST** include `"rules"`, `"mode-specific"`, `"[mode_slug_tag]"`, `"core-principles"`, `"kb-lookup"`. Add archetype tag.
*   `related_context` (Array of Strings, Required): **MUST** include paths to the mode's `.mode.md` file and its KB `README.md`. Should also list key workspace rules the mode must adhere to.
*   **`template_schema_doc` (String, Required):** Path to this schema doc: `".roo/commander/templates/rules/template_00_mode_core_principles_rule.README.md"`

### Rule Specific Fields (Optional)

*   `enforcement_level` (String, Optional): (e.g., `"critical"`).
*   `rationale_summary` (String, Optional): Brief justification.
*   `trigger_conditions` (String, Optional): Typically "Applied continuously during the mode's operation."

## 4. Markdown Body Structure

*   `# [Mode Name]: Rule - Core Operational Principles & KB Usage`: Main title.
*   `## 1. Objective`: Purpose of this consolidated rule for the specific mode.
*   `## 2. Scope & Applicability`: Defines when this rule applies to the mode.
*   `## 3. Core Operational Principles for [Mode Name]`: **This section requires significant customization for each mode.** It lists the fundamental guiding principles for that mode's behavior.
*   `## 4. Knowledge Base (KB) Utilization Procedure for [Mode Name]`: Standardized steps on how the mode should find and use information within its own KB.
*   `## 5. Rationale`: Why this consolidated rule is important for the mode.

This template ensures that every mode has a single, foundational rule document that defines its core operational DNA and its relationship with its Knowledge Base, promoting consistency and reducing the number of "instant context" files per mode.