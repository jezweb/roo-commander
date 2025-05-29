+++
# --- Basic Metadata ---
id = "STANDARD-DOC-STYLE-GUIDE-V1"
title = "Standard: Documentation Style Guide"
context_type = "standards_document"
scope = "Defines the writing style, tone, voice, formatting conventions, referencing standards, and emoji usage for all human-readable documentation within the Roo Commander workspace."
target_audience = ["all"] # All developers and AI modes (like system-documentation-updater) creating documentation
granularity = "style_guide"
status = "active"
created_date = "20250515"
last_updated = "20250515"
version = "1.0"
tags = ["standards", "style-guide", "documentation", "writing-conventions", "formatting", "emoji"]
related_context = [
    ".roo/commander/docs/standards/01-naming-conventions.md", # For path referencing within docs
    ".roo/commander/docs/standards/02-toml-md-document-format.md" # For structure of docs that are TOML+MD
]
template_schema_doc = ".roo/commander/templates/docs/template_00_standard_document.README.md"
# --- Document Specific Fields ---
# maintainer = "Core Architecture Team"
# review_cycle = "Annually"
+++

# Standard: Documentation Style Guide

## 1. Purpose

This style guide provides conventions and best practices for writing all human-readable documentation within the Roo Commander workspace. This includes, but is not limited to:
*   Standard documents (`[.roo/commander/docs/standards/](.roo/commander/docs/standards/)`)
*   Architectural overviews (`[.roo/commander/docs/architecture/](.roo/commander/docs/architecture/)`)
*   Developer guides (`[.roo/commander/docs/developer_guides/](.roo/commander/docs/developer_guides/)`)
*   User guides (`[.roo/commander/docs/user_guides/](.roo/commander/docs/user_guides/)`)
*   Knowledge Base (KB) articles (`[.roo/commander/modes/[mode_slug]/kb/...](.roo/commander/modes/[mode_slug]/kb/...)`)
*   The Markdown body of `.mode.md` files.
*   Planning documents (`[.roo/commander/docs/planning/](.roo/commander/docs/planning/)`)
*   Process documents / SOPs (`[.roo/commander/docs/processes/](.roo/commander/docs/processes/)`)
*   Testing documents (`[.roo/commander/docs/testing/](.roo/commander/docs/testing/)`)

Adherence to this guide ensures clarity, consistency, professionalism, and ease of understanding across all project documentation for both human readers and AI modes that may process or generate documentation.

## 2. Tone and Voice

*   **Tone:** Professional, clear, concise, helpful, and objective.
*   **Voice:** Active voice is generally preferred over passive voice for directness and clarity.
    *   *Prefer:* "The mode processes the input file."
    *   *Over:* "The input file is processed by the mode."
*   **Audience Awareness:** Tailor the language and level of technical detail to the primary audience of the specific document (e.g., developer guides can be more technical than user guides).
*   **Avoid Jargon (where possible):** If technical terms or acronyms are necessary, define them upon first use or ensure they are listed in the project glossary (`[.roo/commander/docs/glossary.md](.roo/commander/docs/glossary.md)`).
*   **Positive Framing:** When possible, frame instructions and explanations positively.

## 3. Formatting Conventions

All documentation **MUST** be written in Markdown (GitHub Flavored Markdown - GFM is preferred).

### 3.1. Headings
*   Use `#` for H1 (typically only the document title), `##` for H2, `###` for H3, etc.
*   Ensure a logical heading hierarchy. Do not skip heading levels (e.g., H1 directly to H3).
*   Use Title Case for H1 and H2 headings. Sentence case is acceptable for H3 and lower if it improves readability for longer headings.
    *   *Example H2:* `## 3. Core Architectural Concepts`
    *   *Example H3:* `### 3.1. Mandatory Workspace-Root-Relative Paths`

### 3.2. Lists
*   **Bulleted Lists:** Use hyphens (`-`) or asterisks (`*`) consistently within a document for unordered lists. Prefer hyphens.
    ```markdown
    - Item 1
    - Item 2
      - Sub-item 2a
    ```
*   **Numbered Lists:** Use for sequential steps or ordered items.
    ```markdown
    1. First step.
    2. Second step.
       1. Sub-step 2a.
    ```

### 3.3. Emphasis
*   **Bold:** Use double asterisks (`**bold text**`) for strong emphasis, UI element names, or to highlight key terms upon first introduction. Use sparingly.
*   *Italics:* Use single asterisks (`*italic text*`) or underscores (`_italic text_`) for mild emphasis, foreign words, or titles of books/papers. Prefer asterisks.

### 3.4. Code Blocks
*   **Inline Code:** Use single backticks (`` `code` ``) for short code snippets, filenames, paths, variable names, TOML field names, or commands within a sentence.
    *   *Example:* "The `id` field in `template_00_generic_task.md` is required."
*   **Fenced Code Blocks:** Use triple backticks (``` ```) for multi-line code examples.
    *   Specify the language for syntax highlighting (e.g., `toml`, `markdown`, `javascript`, `python`, `bash`, `json`, `xml`).
    ```toml
    +++
    title = "Example"
    tags = ["tag1", "tag2"]
    +++
    ```

### 3.5. Links
*   **Internal Links (Workspace):** All links to other documents or directories within the Roo Commander workspace **MUST** use workspace-root-relative paths starting with `.roo/`.
    *   *Example:* `[MDTM Task Standard](.roo/commander/docs/standards/03-mdtm-task-files.md)`
*   **External Links:** Use full URLs. Provide meaningful link text.
    *   *Example:* `[Keep a Changelog](https://keepachangelog.com/en/1.0.0/)`

### 3.6. Tables
*   Use standard Markdown table syntax for structured data. Ensure tables are simple and readable.

### 3.7. Blockquotes
*   Use `>` for quoting text from other sources or for emphasis of a particular passage.
    *   *Example:*
        > This is an important note or quote.

### 3.8. Horizontal Rules
*   Use triple hyphens (`---`) on a separate line to create a thematic break or separate major sections if needed, but use sparingly. Headings are usually sufficient.

## 4. Referencing Conventions

*   **Referring to Modes:** Use the mode's `name` (including emoji if applicable) and its `id` (slug) in backticks upon first mention or when clarity is needed.
    *   *Example:* "The `👑 Roo Commander` (`roo-commander`) delegates tasks to `🧑‍💼 Data Product Manager` (`manager-data-product`)."
*   **Referring to Files/Directories:** Use the full workspace-root-relative path in backticks.
    *   *Example:* "Refer to `[.roo/rules/01-standard-toml-md-format.md](.roo/rules/01-standard-toml-md-format.md)` for details."
*   **Referring to TOML Fields:** Use backticks around the field name.
    *   *Example:* "The `status` field should be updated."
*   **Referring to Sections within Documents:** Use Markdown links with anchors.
    *   *Example:* `[See Section 3.1. Core Structure](#31-core-structure)` (if linking within the same document).
    *   *Example:* `[See Path Referencing](.roo/commander/docs/standards/01-naming-conventions.md#3-file-path-referencing-critical-standard)` (if linking to a section in another document).

## 5. Placeholder Conventions (in Documentation)

When documenting templates or providing examples that require user/agent input:
*   Use `{{VARIABLE_NAME_UPPERCASE}}` for values that are typically auto-filled by a script or agent at the time of template instantiation (e.g., `{{YYYYMMDD}}`, `{{MODE_SLUG}}`).
*   Use `[Descriptive Placeholder Text in Title Case]` for values that a human user or an AI agent needs to fill in based on context after the template instance is created (e.g., `[Full Name of New Squad Unit]`).

## 6. Emoji Usage Standard ✨

Emojis can enhance readability and provide quick visual cues when used consistently and sparingly.

### 6.1. Mode Names:
*   A relevant emoji **SHOULD** prefix the `name` of an AI mode in its `.mode.md` definition and when referred to in documentation.
*   **Orchestrator:** `👑` (e.g., `👑 Roo Commander`)
*   **Manager:** `🧑‍💼` (e.g., `🧑‍💼 Data Product Manager`), `🧑‍🔧` (e.g., `🧑‍🔧 Workspace Maintenance Manager`)
*   **Squad Members (Examples - choose one appropriate for the role):**
    *   Strategy/Analysis: `📊`, `📈`
    *   Ideation/Creativity: `💡`
    *   User/Persona Focus: `👤`
    *   Data/Schema/Technical Design: `🔧`, `⚙️`
    *   Interface/Visual Design: `🎨`
    *   Documentation/Writing: `📝`, `📖`
    *   Code/Development: `🛠️`, `💻`
    *   Automation/Process: `🤖`, `⚙️`
    *   Search/Crawl: `🕷️`
    *   Specialist Tool (NPM): `📦`
    *   Integration/Linking: `🔗`
    *   Guardianship/Security: `🛡️`
    *   Refactoring/Symbols: `Σ` (or other suitable symbol)
*   A central list of preferred emojis for new mode types may be maintained.

### 6.2. Document Section Headings:
*   Emojis **MAY** be used after the heading text in certain planning or high-level documents for visual appeal and quick identification of sections. Use sparingly and consistently within a document type.
*   **Examples (from planning templates):**
    *   `## 1. Overview & Purpose 🎯`
    *   `## 2. Mission Statement 🚀`
    *   `## 3. Problem/Opportunity Addressed 🤔`
    *   `## 4. Core Capabilities of the Unit ✨`
    *   `## 5. Target Users / Beneficiaries 👥`
    *   `## 6. Strategic Alignment 🔗`
    *   `## 7. Value Proposition & Key Outputs 🌟`
    *   `## 8. High-Level Success Metrics for the Unit 📈`
    *   `## 9. Initial Assumptions & Dependencies (Conceptual) 📝`
    *   `## 10. Next Steps in Squad Design ➡️`
*   **MDTM Task Sections:**
    *   `## 1. Description ✍️`
    *   `## 2. Acceptance Criteria ✅`
    *   `## 3. Checklist / Sub-Tasks 📝`
    *   `## 4. Log Entries / Notes 🪵`

### 6.3. Status Indicators:
*   Emojis **MUST** be used as part of standard status values in TOML fields (e.g., `status = "🟢 Done"`). Refer to `[.roo/commander/docs/standards/01-naming-conventions.md](.roo/commander/docs/standards/01-naming-conventions.md)` for defined status sets.

### 6.4. General Principles for Emoji Use:
*   **Relevance:** Choose emojis that are thematically relevant to the content.
*   **Consistency:** Use the same emoji for the same concept across documents.
*   **Sparsity:** Do not overuse emojis; they should aid readability, not clutter it.
*   **Accessibility:** Be mindful that emojis are not universally rendered or interpreted. The primary meaning should always come from the text.

## 7. Acronyms

*   Define acronyms upon first use in a document, e.g., "Markdown-Driven Task Management (MDTM)".
*   Subsequently, the acronym can be used.
*   Maintain a list of common project acronyms in `[.roo/commander/docs/glossary.md](.roo/commander/docs/glossary.md)`.

## 8. Review and Updates

This style guide should be reviewed periodically and updated as new documentation needs or conventions emerge. All contributors are encouraged to adhere to these guidelines to maintain high-quality, consistent documentation.