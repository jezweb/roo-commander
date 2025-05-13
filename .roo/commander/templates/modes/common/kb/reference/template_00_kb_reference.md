+++
# --- Basic Metadata (Required for KB Reference Files) ---
id = "KB-REF-[MODE_SLUG_UPPERCASE]-[ShortName]-V[Version]" # e.g., KB-REF-RC-MANAGERS-SUMMARY-V1
title = "[Mode Name]: Reference - [Descriptive Title of the Reference Material]"
context_type = "kb_reference" # Fixed type for KB reference files
scope = "Provides reference material on [topic] for the '[Mode Name]' ([mode_slug]) mode."
target_audience = ["[mode_slug]"] # The mode itself that uses this reference
granularity = "detailed_reference" # Or "summary_list", "mapping_table", "glossary_section"
status = "draft" # Initial status: "draft", "active"
last_updated = "{{YYYYMMDD}}" # Placeholder for date of last update
version = "1.0" # Version of this reference document when instantiated
tags = ["kb", "reference", "[mode_slug_tag]"] # Add specific tags related to the reference content
related_context = [
    ".roo/commander/modes/[mode_slug]/[mode_slug].mode.md", # Link to the mode definition
    ".roo/commander/modes/[mode_slug]/kb/README.md" # Link to its KB Index
    # Link to any KB procedure that uses this reference material
    # e.g., ".roo/commander/modes/[mode_slug]/kb/procedures/01-main-flow.md"
]
template_schema_doc = ".roo/commander/templates/modes/common/kb/reference/template_00_kb_reference.README.md" # Path to its own schema

# --- Reference Specific Fields (Optional) ---
# data_source = "[e.g., Derived from workspace analysis, External documentation URL, Curated list]"
# update_frequency = "[e.g., As needed, Quarterly, When new X is added]"
# key_entities_referenced = ["[Entity1]", "[Entity2]"]
+++

# [Mode Name]: Reference - {{ title | default: "[Specify Reference Title]" }}

## 1. Objective / Purpose of this Reference

[Clearly state what this reference document provides and why it is important for the `[Mode Name]` mode. What questions does it answer, or what information does it make readily available for the mode's operations?]

## 2. Reference Data / Information

[This is the core section containing the actual reference material. The format will vary greatly depending on the nature of the reference.]

*(Examples of how this section might be structured are below. Choose or adapt as needed. Delete unused examples when instantiating this template.)*

---
### Example A: List / Summary Table

*(Use for lists of items, modes, configurations, etc. Markdown tables are good here.)*

| Item Name / Key | Description / Value                      | Notes / Relevance                               |
|-----------------|------------------------------------------|-------------------------------------------------|
| `[Key1]`        | `[Value or description for Key1]`        | `[Any additional notes for Key1]`               |
| `[Key2]`        | `[Value or description for Key2]`        | `[Any additional notes for Key2]`               |
| ...             | ...                                      | ...                                             |

---
### Example B: Mapping / Definition List

*(Use for glossaries, mappings between terms, or detailed definitions.)*

*   **`[Term 1 / Concept A]`**:
    *   Definition: `[Detailed definition or explanation]`
    *   Usage for `[Mode Name]`: `[How this mode uses or interprets this term]`
    *   Related: `[Links to other terms or KB articles]`
*   **`[Term 2 / Concept B]`**:
    *   Definition: ...

---
### Example C: Configuration Snippet / Data Summary

*(Use for summarizing key configuration values or data points the mode needs to be aware of. Could include code blocks for config examples.)*

**Configuration Section: `[Section Name]`**
*   Parameter `[Param1]`: `[Value1]` - *(Purpose: ...)*
*   Parameter `[Param2]`: `[Value2]` - *(Purpose: ...)*

```json
// Example: Relevant JSON configuration snippet
{
  "settingA": true,
  "thresholdB": 42
}
```

---
### Example D: Pointers to External or Other Internal Documents

*(Use if this reference primarily serves to collate links to other important resources.)*

*   **[Resource Title 1]:** `[Path or URL]`
    *   Relevance: [Why this is important for the mode]
*   **[Resource Title 2]:** `[Path or URL]`
    *   Relevance: ...

---

## 3. How `[Mode Name]` Uses This Reference

[Briefly explain how and when the `[Mode Name]` mode is expected to consult this reference document. Which of its procedures or decision-making processes rely on this information?]

## 4. Maintenance Notes (Optional)

[If this reference data needs regular updates, note the process or triggers for updating it. This often corresponds to `update_frequency` in TOML.]

This reference material is intended to support the accurate and efficient operation of the `[Mode Name]` mode.