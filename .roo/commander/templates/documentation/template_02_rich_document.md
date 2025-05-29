+++
# --- Rich Markdown Document ---
id = "DOC-[TopicShort]-[YYYYMMDDHHMMSS]" # Placeholder: e.g., DOC-SystemOverview-20250515150000
title = "[Full Title of the Document]" # REQUIRED - Placeholder
subtitle = "[Optional Subtitle for Additional Context or remove field]" # OPTIONAL - Placeholder or remove
document_type = "[e.g., Design Document, Research Summary, Technical Explanation, Meeting Minutes (Detailed). Or remove field.]" # OPTIONAL - Placeholder or remove
status = "draft" # Default. Options: draft, in-review, finalized, living-document, archived
created_date = "{{YYYYMMDD}}" # Placeholder: To be set by creating agent
last_updated = "{{TIMESTAMP_ISO_Z}}" # Placeholder: To be set by creating agent
version = "1.0" # Version of this document instance
authors = ["[Author Name/Mode Slug or remove array field]"] # OPTIONAL - Placeholder or remove
# reviewers = ["[Reviewer Name/Mode Slug or remove array field]"] # OPTIONAL - Placeholder or remove
tags = ["documentation", "[primary_topic_tag]", "[secondary_topic_tag]"] # Placeholder: Add specific tags
related_context = [ # OPTIONAL - Placeholder: Add .roo/ anchored paths or remove array field
    # "[.roo/path/to/related_document_1.md]",
    # "[.roo/path/to/related_task_or_session.md]"
]
template_schema_doc = ".roo/commander/templates/documentation/template_02_rich_document.README.md"
+++

# {{ title | default: "[Document Title]" }}
{{ subtitle | default: "" }}

*(Created: {{ created_date }}; Last Updated: {{ last_updated }})*
*(Version: {{ version }})*
*(Authors: {{ authors | join: ", " | default: "N/A" }})*

## Table of Contents (Optional - Recommended for longer documents)
<!-- 
For longer documents, consider adding a Table of Contents.
This can be manually created or generated if tools allow.
- [1. Section One](#1-section-one)
- [2. Section Two](#2-section-two)
  - [2.1. Subsection A](#21-subsection-a)
-->

## 1. Introduction / Overview 🎯 (Example Section)

[Provide a brief introduction to the document, outlining its purpose, scope, and what the reader can expect to find.]

## 2. Main Section Title 📄 (Example Section)

[Use clear, descriptive headings for major sections. Structure your content logically.]

### 2.1. Subsection Title (Example Section)

[Break down complex topics into subsections for better readability.]
*   Use bullet points for lists.
*   Use numbered lists for sequential information.
*   Embed `code_snippets` where appropriate.

    ```python
    # Example code snippet
    def example_function():
        return True
    ```

## 3. Another Main Section Title 💡 (Example Section)

[Continue structuring your document with clear headings and well-organized content.]

## 4. Conclusion / Summary (Optional) ✅

[Summarize the key points or conclusions of the document.]

## Appendix (Optional)

### A.1. Related Resources
*   [Link 1](.roo/path/to/resource_or_external_url)
*   [Link 2](.roo/path/to/resource_or_external_url)

### A.2. Glossary of Terms Used (If specific to this document)
*   **Term 1:** Definition