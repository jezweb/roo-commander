# Documentation: Template `template_00_kb_skill.md`

## 1. Purpose

This template defines the standard structure for creating **Knowledge Base (KB) Skill documents**. These documents are stored within a mode's `kb/skills/` directory and are designed to codify specific, actionable techniques, "how-to" guides for particular domain-specific methods, or detailed usage instructions for abstract concepts or tools relevant to a mode's specialist function.

KB Skill documents represent the practical, applied knowledge of a mode – its library of learned abilities. They focus on *how to do* specific expert tasks within its domain.

## 2. Usage

1.  **Copy Template:** When documenting a new skill for a mode's KB:
    *   Copy `.roo/commander/templates/modes/common/kb/skills/template_00_kb_skill.md` to the relevant mode's `kb/skills/` directory (or a relevant subdirectory within `skills/`).
2.  **Rename File:** Rename the copied file descriptively, indicating the skill (e.g., `01-conducting-swot-analysis.md`, `how-to-write-effective-user-stories.md`).
3.  **Populate TOML Frontmatter:**
    *   Fill in all placeholders in the TOML block of the new skill file.
    *   `id`: Unique ID for this KB skill, including mode slug and version (e.g., `KB-SKILL-DPS-SWOT-V1`).
    *   `title`: `"[Mode Name]: Skill - [Descriptive Title of the Skill]"`.
    *   `scope`: Describe the skill and its relevance to the specific mode.
    *   `target_audience`: **MUST** be the slug of the mode this skill is for.
    *   `tags`: Include `"kb"`, `"skill"`, `"how-to"`, `"[mode_slug_tag]"`, and keywords for the skill's content.
    *   `related_context`: Link to the mode's `.mode.md`, its KB `README.md`, and any KB procedures that might invoke this skill or wisdom articles that provide principles for it.
    *   (Optional) `skill_category`, `tools_or_concepts_involved`, `proficiency_level_assumed`, `common_pitfalls_to_avoid`.
4.  **Define Skill Content in Markdown:**
    *   Replace all bracketed placeholders like `[Mode Name]` and `[mode_slug]` with actual values.
    *   **Crucially, customize Section 4 ("Step-by-Step 'How-To' / Methodology")** with the detailed, actionable steps for performing the skill.
    *   Fill in other sections (Objective, When to Apply, Prerequisites, Best Practices, Expected Outcome, Pitfalls) with information relevant to this specific skill.

## 3. TOML Frontmatter Schema

*   **`id` (String, Required):** Unique ID. Convention: `KB-SKILL-[MODE_SLUG_UPPERCASE]-[ShortName]-V[Version]`.
*   **`title` (String, Required):** Title: `"[Mode Name]: Skill - [Descriptive Title]"`.
*   **`context_type` (String, Fixed: `"kb_skill"`).**
*   **`scope` (String, Required):** Describes the skill and its relevance to the mode.
*   **`target_audience` (Array of Strings, Required):** **MUST** contain a single string: the slug of the mode.
*   **`granularity` (String, Required):** (e.g., `"detailed_how_to"`, `"technique_guide"`, `"methodology_steps"`).
*   **`status` (String, Required):** (e.g., `"draft"`, `"active"`).
*   **`last_updated` (String, Required):** Date.
*   **`version` (String, Required):** Document version.
*   **`tags` (Array of Strings, Required):** **MUST** include `"kb"`, `"skill"`, `"how-to"`, `"[mode_slug_tag]"`. Add content-specific tags.
*   `related_context` (Array of Strings, Optional): Links to relevant mode files, KB procedures, or wisdom articles.
*   **`template_schema_doc` (String, Required):** Path to this schema doc: `".roo/commander/templates/modes/common/kb/skills/template_00_kb_skill.README.md"`

### Skill Specific Fields (Optional in TOML)

*   `skill_category` (String, Optional): A broader category for the skill (e.g., "Strategic Analysis", "User Research").
*   `tools_or_concepts_involved` (Array of Strings, Optional): List of specific tools, frameworks, or conceptual models used in this skill.
*   `proficiency_level_assumed` (String, Optional): Any prerequisite knowledge or proficiency needed to apply this skill.
*   `common_pitfalls_to_avoid` (Array of Strings, Optional): Common mistakes or issues to watch out for.

## 4. Markdown Body Structure

*   `# [Mode Name]: Skill - {{ title }}`: Main title.
*   `## 1. Objective / Purpose of this Skill`: What this skill enables the mode to do.
*   `## 2. When to Apply this Skill`: Situations where this skill is relevant.
*   `## 3. Prerequisites / Inputs Needed`: What's required to use the skill.
*   `## 4. Step-by-Step "How-To" / Methodology`: **The core detailed instructions for performing the skill.**
*   `## 5. Best Practices / Tips for Effective Application`: Advice for better results.
*   `## 6. Expected Outcome / Deliverable from Applying this Skill`: Typical result of using the skill.
*   `## 7. Common Pitfalls to Avoid (Optional)`: What to watch out for.

This template provides a structured way to document actionable skills and techniques within a mode's Knowledge Base, enhancing its practical expertise.