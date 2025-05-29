+++
# --- Basic Metadata ---
id = "DIR-README-[DirectoryNameShort]-[YYYYMMDD]" # Placeholder: To be generated
title = "Index/README: [Purpose of this Directory]" # Placeholder: To be filled
context_type = "directory_index" # Fixed for this template type
scope = "Provides an overview and index for the contents and purpose of the '[./path/to/this/directory/]' directory." # Placeholder: Update path
target_audience = ["all"] # Typically developers, users, or AI modes navigating the workspace
granularity = "index"
status = "active"
last_updated = "{{YYYYMMDD}}" # Placeholder: To be set by creating agent
version = "1.0"
tags = ["readme", "index", "documentation", "[directory_specific_tag]"] # Placeholder: Add specific tags
related_context = [
    # "[.roo/path/to/parent_directory/README.md]", # Link to parent README if applicable
    # "[.roo/path/to/relevant_standard_or_guide.md]"
]
template_schema_doc = ".roo/commander/templates/documentation/template_00_directory_readme.README.md" # Path to its own schema
# --- Directory Specific Fields (Optional) ---
# primary_artifact_type_contained = "[e.g., Mode Definitions, Standard Documents, Session Artifacts]"
# key_subdirectories_summary = ["[subdir1_purpose]", "[subdir2_purpose]"]
+++

# README: {{ title | default: "[Specify Directory Purpose]" }}

## 1. Purpose of this Directory

This directory, `[./path/to/this/directory/ relative to .roo/ or state full .roo/ path]`, serves the primary purpose of:
*   `[Clearly explain what this directory is for and what kind of files or subdirectories it contains. This should align with the 'scope' in the TOML.]`

## 2. Overview of Contents / Key Files & Subdirectories

[Provide a structured overview of the important contents within this directory. Use bullet points and link to key files or subdirectories directly.]

*   **Key Files:**
    *   `[./key_file_1.md](./key_file_1.md)`: [Brief description of key_file_1]
    *   `[./key_file_2.json](./key_file_2.json)`: [Brief description of key_file_2]
*   **Key Subdirectories:**
    *   `[./subdirectory_A/](./subdirectory_A/)`: [Purpose of subdirectory_A and link to its README.md if it exists]
    *   `[./subdirectory_B/](./subdirectory_B/)`: [Purpose of subdirectory_B]
*   *(List other important items as needed)*

## 3. Usage Notes / How to Contribute (If Applicable)

[Provide any specific instructions on how the contents of this directory should be used, or guidelines for contributing new files/subdirectories to it.]
*   Guideline 1:
*   Guideline 2:

## 4. Related Documents

[Link to any parent README.md files, overarching standards documents, or other contextually relevant documentation.]
*   Parent Index: `{{ related_context[0] | default: "[Path to parent README or relevant high-level doc]"}}`
*   Relevant Standard: `{{ related_context[1] | default: "[Path to relevant standard if applicable]"}}`

## 5. Maintenance

This `README.md` should be updated whenever significant changes are made to the structure or primary contents of this directory. Please update the `last_updated` field in the TOML frontmatter.