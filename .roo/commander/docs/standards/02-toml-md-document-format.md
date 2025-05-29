+++
# --- Basic Metadata ---
id = "STANDARD-TOML-MD-FORMAT-V2.1" # Incremented patch for date/timestamp clarification
title = "Standard: TOML+Markdown Document Format & Conventions"
context_type = "standards_document"
scope = "Workspace-wide standard for the structure, syntax, data types, and interaction patterns for all documents combining TOML frontmatter with Markdown content."
target_audience = ["all"] # Applies to all modes creating or processing these files, and human developers
granularity = "standard"
status = "active"
created_date = "2025-05-15"
last_updated = "2025-05-15T10:30:00Z"
version = "2.1" # Incremented due to significant clarifications on date/timestamps
tags = ["standards", "toml", "markdown", "format", "structure", "metadata", "data-types", "timestamps", "placeholders"]
related_context = [
    ".roo/rules/01-standard-toml-md-format.md", # The formal workspace rule this explains
    ".roo/commander/docs/standards/01-naming-conventions.md" # For related ID and tag formatting
]
template_schema_doc = ".roo/commander/templates/docs/template_00_standard_document.README.md"
# --- Document Specific Fields ---
# maintainer = "Core Architecture Team"
# review_cycle = "Quarterly"
+++

# Standard: TOML+Markdown Document Format & Conventions

## 1. Objective

To define a consistent and mandatory format for all structured documents within the Roo Commander workspace that combine machine-readable TOML (Tom's Obvious, Minimal Language) frontmatter for metadata with human-readable Markdown content. This standard also outlines conventions for data types, specific common metadata fields like `created_date` and `last_updated`, and how AI modes should interact with template placeholders.

This document provides a human-friendly explanation and elaboration of the formal workspace rule: `[.roo/rules/01-standard-toml-md-format.md](.roo/rules/01-standard-toml-md-format.md)`.

## 2. Core Structure: TOML Frontmatter + Markdown Body

All documents adhering to this standard **MUST** begin with a TOML frontmatter block, enclosed by triple-plus (`+++`) delimiters on separate lines, followed by the Markdown body.

**Basic Anatomy:**
```toml
+++
# TOML frontmatter: key-value pairs for metadata.
# Comments like this are for illustration within this standards document;
# actual instance files should primarily contain clean key-value pairs.
title = "Example Document"
status = "draft"
tags = ["example", "standard"]
created_date = "2025-05-15" # Date of creation
last_updated = "2025-05-15T10:30:00Z" # Timestamp of last significant update
is_critical = true
# ... other fields specific to this document type
+++

# Markdown body: human-readable content
## Main Content Heading

This is where detailed descriptions, notes, checklists, etc., go.
- Bullet point 1
- Bullet point 2
```

*   **`+++` Delimiters:** These are mandatory and signal the start and end of the TOML frontmatter.
*   **TOML Frontmatter:** All content between the delimiters **MUST** be valid TOML syntax.
*   **Markdown Body:** All content after the closing `+++` delimiter **MUST** be standard Markdown (GitHub Flavored Markdown - GFM is preferred).

## 3. TOML Frontmatter Conventions

### 3.1. Syntax and Schema Adherence
*   Each document type (e.g., MDTM task, session log, mode definition, KB article, planning document) **MUST** have a specific TOML schema.
*   This schema, detailing required/optional fields and their data types, **MUST** be defined in the `.README.md` file of the template used to create that document type (e.g., `[.roo/commander/templates/tasks/template_00_mdtm_task_generic.README.md]`).
*   Modes and developers creating or modifying these documents **MUST** strictly adhere to the defined schema for that document type.

### 3.2. Standard Common Metadata Fields

While specific schemas vary, the following fields are highly recommended for most document types to ensure consistent lifecycle management and discoverability:

*   **`id` (String, Required for most types):** A unique identifier for the document instance. Format conventions are defined in `[.roo/commander/docs/standards/01-naming-conventions.md](.roo/commander/docs/standards/01-naming-conventions.md)`.
*   **`title` (String, Required for most types):** A human-readable title for the document.
*   **`created_date` (String, Highly Recommended):**
    *   **Purpose:** The date the document instance was first created or formally adopted under current standards.
    *   **Format:** **MUST** use `YYYY-MM-DD` (e.g., `"2025-05-15"`).
*   **`last_updated` (String, Highly Recommended):**
    *   **Purpose:** The timestamp of the last significant modification to the document instance.
    *   **Format:** **MUST** use ISO 8601 UTC: `YYYY-MM-DDTHH:MM:SSZ` (e.g., `"2025-05-15T14:30:00Z"`).
*   **`version` (String, Recommended for versioned documents):** Version of the document instance itself (e.g., `"1.0"`, `"2.1"`).
*   **`status` (String, Recommended for documents with a lifecycle):** Current status of the document (e.g., `"draft"`, `"active"`, `"🟢 Done"`). Standard status values for different document types are defined in `[.roo/commander/docs/standards/01-naming-conventions.md](.roo/commander/docs/standards/01-naming-conventions.md)` or the relevant template README.
*   **`tags` (Array of Strings, Recommended):** Keywords for categorization and search. Format and common tags are defined in `[.roo/commander/docs/standards/01-naming-conventions.md](.roo/commander/docs/standards/01-naming-conventions.md)`.

### 3.3. Common Data Types & Formatting (in TOML)

*   **Strings:** Enclosed in double quotes (`"`). For multiline strings, use triple double-quotes `"""`.
    *   `description = "This is a single-line string."`
*   **Integers:** Whole numbers, written directly.
    *   `count = 10`
*   **Floats:** Numbers with a decimal point.
    *   `ratio = 0.75`
*   **Booleans:** `true` or `false` (lowercase).
    *   `is_enabled = true`
*   **Arrays (Lists):** Enclosed in square brackets `[]`, with values separated by commas.
    *   `tags = ["important", "review", "version-2"]`
*   **Tables (Inline Tables / Objects - if used):** TOML supports inline tables.
    *   `point = { x = 1, y = 2 }`
*   **Comments:** Lines starting with `#` are comments and are ignored by parsers. Use sparingly in instance files; primary documentation belongs in the Markdown body or related schema docs.

### 3.4. Placeholder Conventions & AI Interaction (for Templates)

Templates for TOML+Markdown documents will use placeholders. AI modes populating these templates **MUST** follow these conventions (detailed further in `[.roo/commander/docs/standards/01-naming-conventions.md](.roo/commander/docs/standards/01-naming-conventions.md)` and `[.roo/commander/docs/standards/07-template-authoring-guide.md](.roo/commander/docs/standards/07-template-authoring-guide.md)`):

*   **Automated Placeholders (Agent/Script Filled):** `{{VARIABLE_NAME}}` (e.g., `{{YYYYMMDD}}`, `{{TIMESTAMP_ISO_Z}}`).
*   **Contextual Placeholders (User/Agent Filled based on Context):** `[Descriptive Placeholder Text]`.
*   **Handling Optional Fields:**
    *   The `.README.md` for each template **MUST** specify field optionality.
    *   **Required Fields:** Placeholder **MUST** be replaced.
    *   **Recommended/Optional Fields:** Replace placeholder if data is available; otherwise, the entire field line **SHOULD** be removed by the populating agent to keep instances clean. Avoid empty fields unless explicitly meaningful.

## 4. Markdown Body Conventions

*   The content following the closing `+++` delimiter **MUST** be standard Markdown (GitHub Flavored Markdown - GFM is preferred).
*   This section is for human-readable descriptions, checklists, logs, notes, etc.
*   Structure content logically using headings, lists, etc., as per `[.roo/commander/docs/standards/06-documentation-style-guide.md](.roo/commander/docs/standards/06-documentation-style-guide.md)` and as defined by the specific document's template.
*   Placeholder usage (`{{VARIABLE}}` or `[Placeholder]`) in the Markdown body of templates is also common.

## 5. Rationale

*   **Machine Readability & Parsability:** TOML is simple and robust for metadata.
*   **Human Readability & Writability:** Markdown is user-friendly for content.
*   **Consistency & Interoperability:** A unified format simplifies development and AI interaction.
*   **Discoverability & Organization:** Standardized metadata aids in managing documents.
*   **Clear Template Interaction:** Explicit conventions improve AI reliability.

## 6. Enforcement

*   AI modes and developers **MUST** adhere to this format and the specific schema of the document type being handled.
*   Automated validation **SHOULD** be implemented where possible.

**Adherence to this TOML+Markdown standard is critical for the integrity, maintainability, and automated processing capabilities of the Roo Commander ecosystem.**