# Documentation: Template `template_00_kb_wisdom.md`

## 1. Purpose

This template defines the standard structure for creating **Knowledge Base (KB) Wisdom documents**. These documents are stored within a mode's `kb/wisdom/` directory and are designed to capture higher-level insights, best practices, guiding principles, design philosophies, common pitfalls or anti-patterns, or strategic considerations relevant to a mode's domain of expertise.

KB Wisdom documents provide the conceptual and strategic underpinnings that guide a mode's judgment, decision-making, and overall approach to its tasks. They focus more on the "why" and "what to consider" rather than the specific "how-to" steps found in `kb_skill` documents or the operational flows in `kb_procedure` documents.

## 2. Usage

1.  **Copy Template:** When documenting a piece of wisdom for a mode's KB:
    *   Copy `.roo/commander/templates/modes/common/kb/wisdom/template_00_kb_wisdom.md` to the relevant mode's `kb/wisdom/` directory (or a relevant subdirectory within `wisdom/`).
2.  **Rename File:** Rename the copied file descriptively, indicating the core principle or insight (e.g., `01-user-centricity-first-principle.md`, `balancing-scope-and-innovation.md`).
3.  **Populate TOML Frontmatter:**
    *   Fill in all placeholders in the TOML block of the new wisdom file.
    *   `id`: Unique ID for this KB wisdom, including mode slug and version (e.g., `KB-WISDOM-MDP-LEAN-POC-V1`).
    *   `title`: `"[Mode Name]: Wisdom - [Descriptive Title of the Principle]"`.
    *   `scope`: Describe the principle/insight and its relevance to the specific mode.
    *   `target_audience`: **MUST** be the slug of the mode this wisdom is for.
    *   `tags`: Include `"kb"`, `"wisdom"`, `"principle"`, `"best-practice"`, `"[mode_slug_tag]"`, and keywords for the content.
    *   `related_context`: Link to the mode's `.mode.md`, its KB `README.md`, and any KB procedures or skills that might be informed by this wisdom.
    *   (Optional) `principle_category`, `applicability_context`, `supporting_evidence_or_sources`, `counter_arguments_or_tradeoffs`.
4.  **Define Wisdom Content in Markdown:**
    *   Replace all bracketed placeholders like `[Mode Name]` and `[mode_slug]` with actual values.
    *   **Crucially, clearly articulate the "Core Principle / Insight" in Section 1.**
    *   Fill in other sections (Explanation & Rationale, Application Context, Supporting Evidence, Trade-offs, Implications) with detailed information relevant to this specific piece of wisdom.

## 3. TOML Frontmatter Schema

*   **`id` (String, Required):** Unique ID. Convention: `KB-WISDOM-[MODE_SLUG_UPPERCASE]-[ShortName]-V[Version]`.
*   **`title` (String, Required):** Title: `"[Mode Name]: Wisdom - [Descriptive Title]"`.
*   **`context_type` (String, Fixed: `"kb_wisdom"`).**
*   **`scope` (String, Required):** Describes the principle/insight and its relevance to the mode.
*   **`target_audience` (Array of Strings, Required):** **MUST** contain a single string: the slug of the mode.
*   **`granularity` (String, Required):** (e.g., `"conceptual_guidance"`, `"best_practice_summary"`, `"strategic_insight"`).
*   **`status` (String, Required):** (e.g., `"draft"`, `"active"`).
*   **`last_updated` (String, Required):** Date.
*   **`version` (String, Required):** Document version.
*   **`tags` (Array of Strings, Required):** **MUST** include `"kb"`, `"wisdom"`, `"principle"`, `"best-practice"`, `"[mode_slug_tag]"`. Add content-specific tags.
*   `related_context` (Array of Strings, Optional): Links to relevant mode files or other KB articles.
*   **`template_schema_doc` (String, Required):** Path to this schema doc: `".roo/commander/templates/modes/common/kb/wisdom/template_00_kb_wisdom.README.md"`

### Wisdom Specific Fields (Optional in TOML)

*   `principle_category` (String, Optional): A broader category for the wisdom (e.g., "Design Philosophy", "Strategic Planning").
*   `applicability_context` (String, Optional, Multiline): Specific situations where this wisdom is most relevant.
*   `supporting_evidence_or_sources` (Array of Strings, Optional): Links or references supporting this wisdom.
*   `counter_arguments_or_tradeoffs` (Array of Strings, Optional): Important considerations or limitations.

## 4. Markdown Body Structure

*   `# [Mode Name]: Wisdom - {{ title }}`: Main title.
*   `## 1. Core Principle / Insight`: The central piece of wisdom.
*   `## 2. Explanation & Rationale`: Why it's important.
*   `## 3. Application Context & Examples`: When and how to apply it.
*   `## 4. Supporting Evidence / Sources (Optional)`: Backing for the wisdom.
*   `## 5. Potential Trade-offs / Counter-Arguments (Optional)`: Limitations or alternative views.
*   `## 6. Implications for [Mode Name]'s Behavior`: How it should affect the mode's actions.

This template provides a structured way to document guiding principles and strategic insights within a mode's Knowledge Base, enabling more nuanced and effective AI decision-making.