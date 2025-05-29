+++
# --- Basic Metadata (Required for KB Reference Files) ---
id = "KB-REF-[mode_slug_uppercase]-[ShortName]-V[Version]" # Placeholder: e.g., KB-REF-RC-MANAGERS-SUMMARY-V1
title = "[Mode Name]: Reference - [Descriptive Title of the Reference Material]" # Placeholder
context_type = "kb_reference" # Fixed type for KB reference files
scope = "Provides reference material on [topic] for the '[Mode Name]' (`[mode_slug]`) mode." # Placeholder
target_audience = ["[mode_slug]"] # Placeholder: The mode itself that uses this reference
granularity = "detailed_reference" # Options: "detailed_reference", "summary_list", "mapping_table", "glossary_section", "configuration_summary"
status = "draft" # Default for a new reference article
created_date = "{{YYYYMMDD}}" # Placeholder: To be set by creating agent
last_updated = "{{TIMESTAMP_ISO_Z}}" # Placeholder: To be set by creating agent
version = "1.0" # Version of this reference document instance
tags = ["kb", "reference", "[mode_slug_tag]", "[reference_topic_tag]"] # Placeholder: Add specific tags
related_context = [
    ".roo/commander/modes/[mode_slug]/[mode_slug].mode.md", # Placeholder: Link to the mode definition
    ".roo/commander/modes/[mode_slug]/kb/README.md", # Placeholder: Link to its KB Index
    # "[.roo/commander/modes/[mode_slug]/kb/procedures/relevant_procedure.md]" # Optional: Link to procedures that use this reference
]
template_schema_doc = ".roo/commander/templates/modes/common/kb/reference/template_00_kb_reference.README.md"

# --- Reference Specific Fields (Optional - for the instance, fill as needed) ---
# data_source = "[e.g., Derived from workspace analysis, External documentation URL, Curated list. Or remove field.]" # Placeholder or remove
# update_frequency = "[e.g., As needed, Quarterly, When new X is added. Or remove field.]" # Placeholder or remove
# key_entities_referenced = ["[Entity1 or remove array field]", "[Entity2 or remove array field]"] # Placeholder or remove
+++

# [Mode Name]: Reference - {{ title | default: "[Specify Reference Title]" }}

## 1. Objective / Purpose of this Reference 🎯

[Clearly state what this reference document provides and why it is important for the `[Mode Name]` (`[mode_slug]`) mode. What questions does it answer, or what specific information does it make readily available for the mode's operations or decision-making, especially when executing steps from its rules or MDTM task checklists?]

## 2. Reference Data / Information 📚

[This is the core section containing the actual reference material. The format will vary greatly depending on the nature of the reference. **Choose or adapt one of the example structures below, or create a custom structure. Delete unused examples when instantiating this template.** Ensure data is presented clearly for AI parsing.]

---
### Example A: List / Summary Table (for `[Mode Name]`)

*(Use for lists of items, modes, configurations, parameters, etc. Markdown tables are good here.)*

| Item Name / Key         | Description / Value                      | Notes / Relevance for `[Mode Name]`       |
|-------------------------|------------------------------------------|-------------------------------------------|
| `[Key1_Placeholder]`    | `[Value or description for Key1]`        | `[Any additional notes for Key1]`         |
| `[Key2_Placeholder]`    | `[Value or description for Key2]`        | `[Any additional notes for Key2]`         |
| ...                     | ...                                      | ...                                       |

---
### Example B: Mapping / Definition List (for `[Mode Name]`)

*(Use for glossaries, mappings between terms, or detailed definitions relevant to the mode.)*

*   **`[Term 1 / Concept A_Placeholder]`**:
    *   Definition: `[Detailed definition or explanation]`
    *   Usage by `[Mode Name]`: `[How this mode uses or interprets this term/concept]`
    *   Related (Optional): `[Links to other terms or KB articles, using .roo/ paths]`
*   **`[Term 2 / Concept B_Placeholder]`**:
    *   Definition: ...

---
### Example C: Configuration Snippet / Data Summary (for `[Mode Name]`)

*(Use for summarizing key configuration values the mode needs to be aware of, or data points. Could include code blocks for config examples.)*

**Configuration Section: `[Section Name Placeholder]`**
*   Parameter `[Param1_Placeholder]`: `[Value1_Placeholder]` - *(Purpose for `[Mode Name]`: ...)*
*   Parameter `[Param2_Placeholder]`: `[Value2_Placeholder]` - *(Purpose for `[Mode Name]`: ...)*

```json
// Example: Relevant JSON configuration snippet for [Mode Name]
{
  "settingA_Placeholder": true,
  "thresholdB_Placeholder": 42
}
```

---
### Example D: Pointers to Other Documents (for `[Mode Name]`)

*(Use if this reference primarily serves to collate links to other important resources, internal or external.)*

*   **[Resource Title 1 Placeholder]:** `[.roo/path/to/internal_document.md]` or `[External URL]`
    *   Relevance for `[Mode Name]`: `[Why this is important for the mode]`
*   **[Resource Title 2 Placeholder]:** ...
    *   Relevance for `[Mode Name]`: ...

---

## 3. How `[Mode Name]` Uses This Reference ⚙️

[Briefly explain how and when the `[Mode Name]` (`[mode_slug]`) mode is expected to consult this reference document. Which of its procedures (from its KB or rules) or decision-making processes rely on this information? Be specific.]

## 4. Maintenance Notes (Optional) 🛠️

[If this reference data needs regular updates, note the process or triggers for updating it. This often corresponds to `update_frequency` in TOML. Who is responsible for keeping it current?]

This reference material is intended to support the accurate and efficient operation of the `[Mode Name]` mode.