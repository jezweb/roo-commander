# Documentation: Template `template_00_kb_wisdom.md`

## 1. Purpose

This template defines the standard structure for creating **Knowledge Base (KB) Wisdom documents**. These documents are stored within a mode's `kb/wisdom/` directory and are designed to capture higher-level insights, best practices, guiding principles, design philosophies, common pitfalls or anti-patterns, or strategic considerations relevant to a mode's domain of expertise.

KB Wisdom documents provide the conceptual and strategic underpinnings that guide a mode's judgment, decision-making, and overall approach to its tasks. They focus more on the "why" and "what to consider" rather than the specific "how-to" steps found in `kb/skills/` articles or the operational flows in `kb/procedures/` articles.

## 2. Usage

1.  **Copy Template:** When documenting a piece of wisdom for a mode's KB by an agent like `meta-kb-editor` or a human developer:
    *   Copy `[.roo/commander/templates/modes/common/kb/wisdom/template_00_kb_wisdom.md](.roo/commander/templates/modes/common/kb/wisdom/template_00_kb_wisdom.md)` to the relevant mode's `kb/wisdom/` directory (or a relevant subdirectory within `wisdom/`).
2.  **Rename File:** Rename the copied file descriptively, indicating the core principle or insight (e.g., `01-user-centricity-first-principle.md`, `balancing-scope-and-innovation.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace all placeholders (e.g., `[mode_slug_uppercase]`, `[Mode Name]`, `[mode_slug]`, `[topic]`, `[topic_tag]`) with values specific to the mode and the wisdom being documented.
    *   The `id` should be unique (e.g., `KB-WISDOM-MDP-LEAN-POC-V1`).
    *   `target_audience` **MUST** include the mode's slug.
    *   `created_date` and `last_updated` should be set to the current date/timestamp by the creating agent.
    *   Fill in optional "Wisdom Specific Fields" (`principle_category`, `applicability_context`, etc.) if applicable, or remove them.
4.  **Define Wisdom Content in Markdown (of the instance file):**
    *   Replace all `[Mode Name]` and `[mode_slug]` placeholders.
    *   Clearly articulate the "Core Principle / Insight" in Section 1.
    *   Fill in other sections (Explanation & Rationale, Application Context, Supporting Evidence, Trade-offs, Implications) with detailed information relevant to this specific piece of wisdom, tailored for the target mode.

## 3. TOML Frontmatter Schema (for an instance of `template_00_kb_wisdom.md`)

*   **`id` (String, Required):** Unique ID for the KB Wisdom document.
    *   *Convention:* `KB-WISDOM-[mode_slug_uppercase]-[ShortName]-V[Version]`
    *   *Placeholder in template:* `"KB-WISDOM-[mode_slug_uppercase]-[ShortName]-V[Version]"`
*   **`title` (String, Required):** Title of the wisdom article.
    *   *Placeholder in template:* `"[Mode Name]: Wisdom - [Descriptive Title of the Principle/Insight]"`
*   **`context_type` (String, Fixed: `"kb_wisdom"`).**
*   **`scope` (String, Required):** Describes the principle/insight and its relevance to the mode.
    *   *Placeholder in template:* `"Articulates a guiding principle, best practice, or key insight on [topic] for the '[Mode Name]' (`[mode_slug]`) mode."`
*   **`target_audience` (Array of Strings, Required):** **MUST** contain a single string: the slug of the mode.
    *   *Placeholder in template:* `["[mode_slug]"]`
*   **`granularity` (String, Required):** Describes the nature of the wisdom.
    *   *Options:* `"conceptual_guidance"`, `"best_practice_summary"`, `"strategic_insight"`
    *   *Placeholder in template:* `"conceptual_guidance"`
*   **`status` (String, Required):** Lifecycle status.
    *   *Default in template:* `"draft"`
    *   *Options:* `"draft"`, `"active"`, `"deprecated"`
*   **`created_date` (String, Required):** Date of wisdom article creation (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Timestamp of last update (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`version` (String, Required):** Version of this wisdom document instance.
*   **`tags` (Array of Strings, Required):** Keywords. **MUST** include `"kb"`, `"wisdom"`, `"principle"`, `"best-practice"`, `"[mode_slug_tag]"`. Add content-specific tags.
    *   *Placeholder in template:* `["kb", "wisdom", "principle", "best-practice", "[mode_slug_tag]", "[topic_tag]"]`
*   `related_context` (Array of Strings, Optional): Links to relevant mode files or other KB articles.
    *   *Placeholders in template show examples.*
*   **`template_schema_doc` (String, Required):** Path to this schema documentation file.
    *   *Value:* `".roo/commander/templates/modes/common/kb/wisdom/template_00_kb_wisdom.README.md"`

### Wisdom Specific Fields (Optional in the instance's TOML)

*   `principle_category` (String, Optional): A broader category for the wisdom (e.g., "Design Philosophy", "Strategic Thinking").
    *   *Placeholder in template:* `"[e.g., Design Philosophy, Strategic Thinking, Risk Management, User Centricity, Communication Best Practice]"`
*   `applicability_context` (String, Optional, Multiline): Specific situations where this wisdom is most relevant for the mode.
    *   *Placeholder in template:* `"[Specific situations or decision points where this wisdom is most relevant for the mode. Or remove field.]"`
*   `supporting_evidence_or_sources` (Array of Strings, Optional): Links or references supporting this wisdom.
    *   *Placeholder in template:* `["[Link to external article or internal document]", "[Anecdotal project success X or remove array field]"]`
*   `counter_arguments_or_tradeoffs` (Array of Strings, Optional): Important considerations or limitations.
    *   *Placeholder in template:* `["[Consideration A or remove array field]", "[Tradeoff B or remove array field]"]`

## 4. Markdown Body Structure (for an instance of `template_00_kb_wisdom.md`)

*   `# [Mode Name]: Wisdom - {{ title }}`: Main title.
*   `## 1. Core Principle / Insight ✨`: The central piece of wisdom.
*   `## 2. Explanation & Rationale 🧠`: Why it's important for the mode.
*   `## 3. Application Context & Examples for [Mode Name] 💡`: When and how the mode should apply it.
*   `## 4. Supporting Evidence / Sources (Optional) 📚`: Backing for the wisdom.
*   `## 5. Potential Trade-offs / Counter-Arguments (Optional) ⚖️`: Limitations or alternative views.
*   `## 6. Implications for [Mode Name]'s Behavior & Decision-Making 🚀`: How it should affect the mode's actions.

This template provides a structured way to document guiding principles and strategic insights within a mode's Knowledge Base, enabling more nuanced and effective AI decision-making.