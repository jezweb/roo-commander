# Standard: Understanding TOML+Markdown Documents

## 1. What is a TOML+Markdown Document?

In the Roo Commander V8 ecosystem, many important files like tasks, session logs, design artifacts, and even AI mode configurations use a special format called **TOML+Markdown**. This format cleverly combines two things:

1.  **TOML Frontmatter:** For structured, machine-readable metadata at the beginning of the file.
2.  **Markdown Body:** For human-readable content, descriptions, checklists, and notes that follow the metadata.

**Why this format?**
It gives us the best of both worlds: data that AI modes and tools can easily understand and process (the TOML part), and rich, formatted text that humans can easily read and write (the Markdown part).

This standard is formally defined in the workspace rule: `[.roo/rules/01-standard-toml-md-format.md](.././/rules/01-standard-toml-md-format.md)`. This guide provides a more user-friendly explanation.

## 2. The Basic Structure: `+++` is Key!

Every TOML+Markdown document **must** start with its TOML metadata section, and this section **must** be enclosed by triple-plus signs (`+++`) on lines by themselves.

**Basic Anatomy:**

```markdown
+++
# This is the TOML Frontmatter section
# Metadata goes here, like:
title = "My Awesome Document"
status = "draft"
tags = ["example", "important", "toml-md"]
# ... other fields specific to this document type
+++

# This is the Markdown Body section
## Welcome to the Content!

Here you can write detailed descriptions, use lists, add code blocks, and anything else Markdown supports.
- Like this bullet point.
- And another one.
```

*   **The `+++` Delimiters:** These are critical. They tell any system (and you!) where the structured metadata ends and the free-form Markdown content begins.
*   **TOML Frontmatter:** Everything between the opening `+++` and the closing `+++`.
*   **Markdown Body:** Everything *after* the closing `+++`.

## 3. Understanding TOML Frontmatter (The Metadata Bit)

TOML stands for "Tom's Obvious, Minimal Language." It's designed to be easy to read due to its simple syntax. Here's what you need to know:

*   **Key-Value Pairs:** Metadata is stored as `key = value`.
    *   `title = "Data Product Strategy for AlphaPoC"`
    *   `version = "1.0"`
*   **Strings:** Text values are enclosed in double quotes (`"`).
    *   `summary = "This document outlines the core strategy."`
*   **Numbers:** Just write them directly.
    *   `priority_level = 1`
*   **Booleans:** `true` or `false` (lowercase).
    *   `is_critical = true`
*   **Dates & Times:** Typically use ISO 8601 format (e.g., `YYYY-MM-DD` or `YYYY-MM-DDTHH:MM:SSZ`).
    *   `created_date = "2025-07-16"`
    *   `updated_time = "2025-07-16T14:30:00Z"`
*   **Arrays (Lists):** Enclosed in square brackets `[]`, with values separated by commas.
    *   `tags = ["data-product", "strategy", "poc", "alpha-project"]`
    *   `reviewers = ["manager-data-product", "data-product-strategist"]`
*   **Comments:** Lines starting with `#` are comments and are ignored by parsers. They are for human notes within the TOML section.
    *   `# This is a TOML comment`
*   **Multiline Strings:** For longer text values within TOML, you can use triple double-quotes `"""`.
    ```toml
    description = """
    This is a longer description that
    spans multiple lines. It's still part of
    the 'description' field.
    """
    ```

**Example of Good TOML Frontmatter:**
```toml
+++
id = "TASK-DPSTRAT-20250716-100000"
title = "Define Product Strategy for AlphaPoC"
status = "🟡 To Do"
type = "📊 DataProductDesignPhase"
priority = "🟧 High"
created_date = "2025-07-16T10:00:00Z"
updated_date = "2025-07-16T10:00:00Z"
assigned_to = "data-product-strategist"
coordinator = "manager-data-product"
input_artifacts = [".roo/commander/sessions/SESSION-AlphaPoC-20250716-090000/artifacts/notes/initial_brief.md"]
output_artifacts = [] # To be filled by the assignee
tags = ["mdtm", "data-product", "strategy", "alpha-project"]
template_schema_doc = ".roo/commander/templates/tasks/template_00_mdtm_task_generic.README.md"
+++
```

**Tips for TOML:**
*   **Case Sensitivity:** TOML keys are case-sensitive (`title` is different from `Title`). Our standard is usually lowercase with underscores (`snake_case`).
*   **Quoting:** Be careful with quotes. If your string value itself contains a double quote, you might need to escape it or use single quotes for the string if the TOML parser supports it (though double quotes are most common for strings).
*   **Schema Adherence:** Each type of document (task, session log, etc.) has a defined "schema" (list of expected fields, their types, and whether they are required). This schema is usually documented in the `.README.md` file of the template used to create that document type. **Always refer to the relevant template's README for the correct fields.**

## 4. Understanding the Markdown Body (The Content Bit)

Everything *after* the closing `+++` is standard Markdown (we prefer GitHub Flavored Markdown - GFM). This is where you write the human-readable content.

*   Use headings (`#`, `##`, `###`) to structure your content.
*   Use bullet points (`-` or `*`) and numbered lists (`1.`, `2.`).
*   Use `**bold**` and `*italic*` for emphasis.
*   Create `[links](https://example.com)`.
*   Include code blocks using triple backticks:
    ```python
    def hello():
        print("Hello, world!")
    ```
*   Create tables using Markdown table syntax.
*   Use GFM checklists for actionable items: `- [ ] To Do Item` or `- [x] Done Item`.

**Example Markdown Body (continuing the task example):**
```markdown
# Task: Define Product Strategy for AlphaPoC

## 1. Description ✍️

*   **Goal:** Collaborate with the user/stakeholder to define the core product strategy for the "AlphaPoC" data product.
*   **Context:** This is the first phase of the Data Product Design PoC workflow. Input is an initial project idea.
*   **Scope:** Focus on vision, objectives, target audience, value proposition, and strategic alignment.

## 2. Acceptance Criteria ✅

*   - [ ] All sections of the `product_strategy.md` template are thoughtfully completed.
*   - [ ] Key strategic objectives are SMART.
*   - [ ] The value proposition is clear and compelling.

## 3. Checklist / Sub-Tasks 📝

*   - [ ] Discuss initial PoC idea with the user to understand the core problem/opportunity.
*   - [ ] Elicit and define 2-3 SMART objectives.
*   - [ ] Identify primary target audience segments.
*   - [ ] ... more steps ...
*   - [ ] Create the `product_strategy.md` artifact in the session's `artifacts/design_outputs/AlphaPoC/` directory.
*   - [ ] Update this task's `output_artifacts` TOML field with the path to `product_strategy.md`.
*   - [ ] Update this task's `status` TOML field to '🟢 Done'.
*   - [ ] Report completion to `manager-data-product`.

## 4. Log Entries / Notes 🪵

*   `2025-07-16T10:05:00Z - data-product-strategist: Task ingested. Reviewing input artifacts.`
```

## 5. Why This Standard Matters

Using the TOML+Markdown format consistently:
*   Allows AI modes to reliably find and use important metadata.
*   Helps tools (like the MDTM CLI or future validation scripts) process files correctly.
*   Makes documents easier for humans to read and understand, as the metadata provides quick context.
*   Ensures that as the system evolves, all its structured documents remain interoperable.

If you are ever unsure about the specific TOML fields required for a particular document type, always refer to the `.README.md` file associated with its template (usually found in `.roo/commander/templates/`).