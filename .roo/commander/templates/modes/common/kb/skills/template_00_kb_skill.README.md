# Documentation: Template `template_00_kb_skill.md`

## 1. Purpose

This template defines the standard structure for creating **Knowledge Base (KB) Skill documents**. These documents are stored within a mode's `kb/skills/` directory and are designed to codify specific, actionable techniques, "how-to" guides for particular domain-specific methods, or detailed usage instructions for abstract concepts or tools relevant to a mode's specialist function.

KB Skill documents represent the practical, applied knowledge of a mode – its library of learned abilities. They focus on *how to do* specific expert tasks within its domain, often elaborating on steps mentioned in the mode's rules or MDTM task checklists.

## 2. Usage

1.  **Copy Template:** When documenting a new skill for a mode's KB by an agent like `meta-kb-editor` or a human developer:
    *   Copy `[.roo/commander/templates/modes/common/kb/skills/template_00_kb_skill.md](.roo/commander/templates/modes/common/kb/skills/template_00_kb_skill.md)` to the relevant mode's `kb/skills/` directory (or a relevant subdirectory within `skills/`).
2.  **Rename File:** Rename the copied file descriptively, indicating the skill (e.g., `01-conducting-swot-analysis.md`, `how-to-write-effective-user-stories.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace all placeholders (e.g., `[mode_slug_uppercase]`, `[Mode Name]`, `[mode_slug]`, `[skill_name]`, `[skill_domain_tag]`) with values specific to the mode and the skill being documented.
    *   The `id` should be unique (e.g., `KB-SKILL-DPS-SWOT-V1`).
    *   `target_audience` **MUST** include the mode's slug.
    *   `created_date` and `last_updated` should be set to the current date/timestamp by the creating agent.
    *   Fill in optional "Skill Specific Fields" (`skill_category`, `tools_or_concepts_involved`, etc.) if applicable, or remove them.
4.  **Define Skill Content in Markdown (of the instance file):**
    *   Replace all `[Mode Name]` and `[mode_slug]` placeholders.
    *   Clearly articulate the "Objective / Purpose of this Skill" in Section 1.
    *   **Crucially, customize Section 4 ("Step-by-Step 'How-To' / Methodology")** with the detailed, actionable steps for performing the skill from the mode's perspective.
    *   Fill in other sections (When to Apply, Prerequisites, Best Practices, Expected Outcome, Pitfalls) with information relevant to this specific skill.

## 3. TOML Frontmatter Schema (for an instance of `template_00_kb_skill.md`)

*   **`id` (String, Required):** Unique ID for the KB Skill document.
    *   *Convention:* `KB-SKILL-[mode_slug_uppercase]-[ShortName]-V[Version]`
    *   *Placeholder in template:* `"KB-SKILL-[mode_slug_uppercase]-[ShortName]-V[Version]"`
*   **`title` (String, Required):** Title of the skill article.
    *   *Placeholder in template:* `"[Mode Name]: Skill - [Descriptive Title of the Skill/Technique]"`
*   **`context_type` (String, Fixed: `"kb_skill"`).**
*   **`scope` (String, Required):** Describes the skill and its relevance to the mode.
    *   *Placeholder in template:* `"Details the skill/technique of [skill_name] for the '[Mode Name]' (`[mode_slug]`) mode, including how-to steps and best practices."`
*   **`target_audience` (Array of Strings, Required):** **MUST** contain a single string: the slug of the mode.
    *   *Placeholder in template:* `["[mode_slug]"]`
*   **`granularity` (String, Required):** Describes the nature of the skill documentation.
    *   *Options:* `"detailed_how_to"`, `"technique_guide"`, `"methodology_steps"`
    *   *Placeholder in template:* `"detailed_how_to"`
*   **`status` (String, Required):** Lifecycle status.
    *   *Default in template:* `"draft"`
    *   *Options:* `"draft"`, `"active"`, `"deprecated"`
*   **`created_date` (String, Required):** Date of skill article creation (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Timestamp of last update (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`version` (String, Required):** Version of this skill document instance.
*   **`tags` (Array of Strings, Required):** Keywords. **MUST** include `"kb"`, `"skill"`, `"how-to"`, `"[mode_slug_tag]"`. Add content-specific tags.
    *   *Placeholder in template:* `["kb", "skill", "how-to", "[mode_slug_tag]", "[skill_domain_tag]"]`
*   `related_context` (Array of Strings, Optional): Links to relevant mode files or other KB articles.
    *   *Placeholders in template show examples.*
*   **`template_schema_doc` (String, Required):** Path to this schema documentation file.
    *   *Value:* `".roo/commander/templates/modes/common/kb/skills/template_00_kb_skill.README.md"`

### Skill Specific Fields (Optional in the instance's TOML)

*   `skill_category` (String, Optional): A broader category for the skill (e.g., "Strategic Analysis", "File Manipulation").
    *   *Placeholder in template:* `"[e.g., Strategic Analysis, Data Modeling, UI Prototyping, Requirement Elicitation, File Manipulation]"`
*   `tools_or_concepts_involved` (Array of Strings, Optional): List of specific tools, frameworks, or conceptual models used in this skill.
    *   *Placeholder in template:* `["[ToolName/Concept1 or remove array field]", "[ToolName/Concept2 or remove array field]"]`
*   `proficiency_level_assumed` (String, Optional): Any prerequisite knowledge or proficiency needed to apply this skill.
    *   *Placeholder in template:* `"[e.g., Basic understanding of X required to apply this skill. Or remove field.]"`
*   `common_pitfalls_to_avoid` (Array of Strings, Optional): Common mistakes or issues to watch out for.
    *   *Placeholder in template:* `["[Pitfall 1 or remove array field]", "[Pitfall 2 or remove array field]"]`

## 4. Markdown Body Structure (for an instance of `template_00_kb_skill.md`)

*   `# [Mode Name]: Skill - {{ title }}`: Main title.
*   `## 1. Objective / Purpose of this Skill 🎯`: What this skill enables the mode to do.
*   `## 2. When to Apply this Skill ⏱️`: Situations where this skill is relevant.
*   `## 3. Prerequisites / Inputs Needed 📥`: What's required to use the skill.
*   `## 4. Step-by-Step "How-To" / Methodology 🛠️`: **The core detailed instructions for performing the skill.**
*   `## 5. Best Practices / Tips for Effective Application ✨`: Advice for better results.
*   `## 6. Expected Outcome / Deliverable from Applying this Skill 📤`: Typical result of using the skill.
*   `## 7. Common Pitfalls to Avoid (Optional) ⚠️`: What to watch out for.

This template provides a structured way to document actionable skills and techniques within a mode's Knowledge Base, enhancing its practical expertise.