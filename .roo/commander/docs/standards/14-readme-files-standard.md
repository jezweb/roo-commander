+++
# --- Basic Metadata ---
id = "STANDARD-README-FILES-V1"
title = "Standard: README.md File Usage, Naming, and Structure"
context_type = "standards_document"
scope = "Defines the standards for creating and maintaining README.md files within directories in the Roo Commander workspace, including their purpose, naming, location, and recommended structure."
target_audience = ["all"] # Developers, AI Modes creating/maintaining directory structures
granularity = "standard_guide"
status = "active"
created_date = "20250515"
last_updated = "20250515"
version = "1.0"
tags = ["standards", "readme", "documentation", "navigation", "directory-index", "best-practices"]
related_context = [
    ".roo/commander/docs/standards/00-directory-structure.md",
    ".roo/commander/docs/standards/01-naming-conventions.md", # For path referencing within READMEs
    ".roo/commander/docs/standards/02-toml-md-document-format.md", # READMEs use this format
    ".roo/commander/templates/documentation/template_00_directory_readme.md", # Proposed template
    ".roo/commander/templates/modes/common/kb/template_00_mode_kb_readme.md" # For specific Mode KB READMEs
]
template_schema_doc = ".roo/commander/templates/docs/template_00_standard_document.README.md"
# --- Document Specific Fields ---
# maintainer = "Core Architecture Team"
# review_cycle = "Annually"
+++

# Standard: README.md File Usage, Naming, and Structure

## 1. Purpose

This standard defines the guidelines for creating, naming, locating, and structuring `README.md` files within the Roo Commander workspace. `README.md` files serve as essential entry points and navigational aids for directories, explaining their purpose and guiding users and developers to relevant content.

Consistent `README.md` files improve discoverability, understanding, and maintainability of the workspace.

## 2. When to Create a `README.md` File

A `README.md` file **SHOULD** be created at the root of any significant directory that:
*   Contains multiple related files or subdirectories.
*   Serves a specific, definable purpose within the workspace structure.
*   Requires explanation for users or developers to understand its contents or how to contribute to it.

Examples of directories that **MUST** or **SHOULD** have a `README.md`:
*   Root of major sections (e.g., `[.roo/commander/docs/README.md](.roo/commander/docs/README.md)`, `[.roo/commander/templates/README.md](.roo/commander/templates/README.md)`).
*   Each mode's Knowledge Base root (`[.roo/commander/modes/[mode_slug]/kb/README.md](.roo/commander/modes/[mode_slug]/kb/README.md)` - uses a specific template).
*   Directories containing a collection of similar items (e.g., `[.roo/commander/docs/standards/README.md](.roo/commander/docs/standards/README.md)`, `[.roo/commander/templates/planning/squad_design/README.md](.roo/commander/templates/planning/squad_design/README.md)`).
*   Each subdirectory within `[.roo/commander/templates/sessions/artifacts/](.roo/commander/templates/sessions/artifacts/)` explaining the purpose of that artifact type.

## 3. Naming and Location

*   **Filename:** The standard filename **MUST** be `README.md` (all uppercase).
*   **Location:** A `README.md` file **MUST** reside at the root of the directory it describes.

## 4. Types of README.md Files & Their Standards

### 4.1. General Directory Index READMEs
*   **Purpose:** To explain the purpose of the directory and provide an index or guide to its contents (key files and subdirectories).
*   **Template:** **SHOULD** use `[.roo/commander/templates/documentation/template_00_directory_readme.md](.roo/commander/templates/documentation/template_00_directory_readme.md)`.
*   **TOML Frontmatter:** **MUST** include standard metadata fields like `id`, `title` (e.g., "Index: [Directory Purpose]"), `context_type="directory_index"`, `scope`, `tags`.
*   **Markdown Body Structure (Recommended):**
    1.  `# [Directory Name/Purpose] - README / Index` (Main Title)
    2.  `## 1. Purpose of this Directory`
    3.  `## 2. Overview of Contents / Key Files & Subdirectories` (List key items with brief descriptions and relative links)
    4.  `## 3. Usage Notes / How to Contribute (If Applicable)`
    5.  `## 4. Related Documents` (Links to parent READMEs or overarching standards)

### 4.2. Mode Knowledge Base (KB) Index READMEs
*   **Purpose:** A specialized directory index for a mode's `kb/` folder.
*   **Standard & Template:** **MUST** adhere to the structure defined in `[.roo/commander/templates/modes/common/kb/template_00_mode_kb_readme.md](.roo/commander/templates/modes/common/kb/template_00_mode_kb_readme.md)` and its accompanying schema documentation.
*   **Location:** `[.roo/commander/modes/[mode_slug]/kb/README.md](.roo/commander/modes/[mode_slug]/kb/README.md)`.

### 4.3. Template Schema Documentation READMEs
*   **Purpose:** To document the schema, usage, TOML frontmatter, and Markdown structure of a specific template `.md` file.
*   **Naming:** **MUST** match the template filename with a `.README.md` suffix (e.g., `template_00_generic_task.README.md` documents `template_00_generic_task.md`).
*   **Location:** **MUST** reside in the same directory as the template file it documents.
*   **Content Structure (General Convention):**
    1.  Purpose of the template.
    2.  Usage instructions for the template.
    3.  Detailed TOML Frontmatter Schema (listing all fields in an *instance* created from the template, their types, required/optional status, descriptions, and placeholders used in the template).
    4.  Markdown Body Structure (describing the sections of an *instance* created from the template).
    5.  The template's README also has its own TOML frontmatter for self-documentation (e.g., `id`, `title="Documentation: Template template_name.md"`, `context_type="template_schema_documentation"`).
*   **Note:** A generic template for *creating these schema READMEs themselves* might be useful but is not strictly defined yet; current practice is to model them after existing examples.

## 5. General Content Guidelines for All READMEs

*   **Clarity and Conciseness:** Provide clear and to-the-point information.
*   **Audience:** Write for the intended audience (typically developers or AI modes needing to understand a directory's structure).
*   **Links:** Use correct workspace-root-relative paths (starting with `.roo/`) for all internal links.
*   **Formatting:** Adhere to `[.roo/commander/docs/standards/06-documentation-style-guide.md](.roo/commander/docs/standards/06-documentation-style-guide.md)`.
*   **TOML+MD Format:** All `README.md` files (except potentially the project root README) **MUST** use the standard TOML+Markdown format as per `[.roo/commander/docs/standards/02-toml-md-document-format.md](.roo/commander/docs/standards/02-toml-md-document-format.md)`.
*   **Maintenance:** `README.md` files **SHOULD** be kept up-to-date as the directory contents or purpose evolves. The `last_updated` field in their TOML **MUST** be updated.

## 6. Rationale

*   **Discoverability:** Helps users and developers quickly understand the purpose and contents of directories.
*   **Navigation:** Provides a structured way to navigate complex directory trees.
*   **Consistency:** Ensures a uniform approach to documenting directory structures across the workspace.
*   **Onboarding:** Aids new contributors in learning the workspace layout.

By adhering to these standards for `README.md` files, we significantly improve the overall organization and usability of the Roo Commander workspace.