Okay, Jeremy, let's create these templates for your KB example files. This will provide a nice wrapper and context for each example we create.

---

First, here is **`.roo/commander/templates/modes/common/kb/examples/template_00_kb_example_file.md`**:

```markdown
+++
# --- KB Example Metadata (Required for all KB Example Files) ---
id = "KB-EX-[MODE_PREFIX]-[ShortDescription]-V[Version]" # e.g., KB-EX-MDP-INPUT-TASK-V1, KB-EX-DPS-STRATEGY-OUTPUT-V1
title = "Example: [Descriptive Title of What This Example Illustrates]"
context_type = "kb_example" # Fixed type for KB example files
scope = "Provides a concrete example of [artifact_type_being_exemplified] relevant to the '[mode_name_this_example_is_for]' mode."
target_audience = ["[mode_slug_this_example_is_for]", "developers_maintaining_mode", "users_learning_system"]
granularity = "specific_instance"
status = "draft" # Initial status: "draft", "active"
last_updated = "{{YYYYMMDD}}" # Placeholder for date of last update
version = "1.0" # Version of this example document when instantiated
tags = ["kb", "example", "[mode_slug_tag]", "[artifact_type_tag]"] # e.g., "manager-data-product", "mdtm-task"
related_context = [
    # Path to the primary template file that this example is an instance of (if applicable)
    # e.g., ".roo/commander/templates/tasks/template_00_mdtm_task_generic.md"
    # Path to the mode definition this example is most relevant for
    # e.g., ".roo/commander/modes/manager-data-product/manager-data-product.mode.md"
]
template_schema_doc = ".roo/commander/templates/modes/common/kb/examples/template_00_kb_example_file.README.md" # Path to its own schema

# --- Example Specific Fields (Customize as needed) ---
illustrates_artifact_type = "[e.g., MDTM Task, Session Log, Product Strategy Document, Squad Sub-Task]"
# scenario_description = "[Brief description of the scenario this example represents, e.g., 'Initial task from coordinator to manager for a new PoC']"
# source_for_example_content = "[e.g., Based on template_00_mdtm_task_generic.md, Manually crafted for illustration]"
# key_takeaway_from_example = "[What is the main point this example demonstrates?]"
+++

# Example: {{ title | default: "[Specify Example Title]" }}

## 1. Purpose of this Example

This document provides a concrete example of a `{{ illustrates_artifact_type | default: "[Specify Artifact Type]" }}`. It is intended to:

*   Illustrate the standard structure and content for this type of artifact.
*   Serve as a reference for the **`[Mode Name this example is for]`** mode when it needs to create or interpret such an artifact.
*   Aid human developers and users in understanding the practical application of the related templates and standards.

*(Optional: Add more details about the specific scenario this example represents, if `scenario_description` is used in TOML.)*

## 2. Example Content

[This is where the actual example content begins. If the example is itself a TOML+Markdown document (like an MDTM task or a design artifact), it will start with its own `+++` TOML frontmatter block, followed by its Markdown body. Ensure the example content is clearly delineated, perhaps with a horizontal rule or a sub-heading as below.]

---
### Illustrative Instance of: `{{ illustrates_artifact_type | default: "[Specify Artifact Type]" }}`

```
[Paste or generate the full example content here. For a TOML+MD example, it would look like:]
+++
# --- Example TOML Frontmatter for the illustrated artifact ---
id = "EXAMPLE-ARTIFACT-ID-001"
title = "Example Title for Illustrated Artifact"
# ... other relevant fields for the artifact being exemplified ...
+++

# Example Markdown Body for the Illustrated Artifact

This is the Markdown content of the example.
- It follows the structure of the artifact it represents.
```

---

## 3. How to Use This Example

*   **For AI Modes:** When instructed to create an artifact of type `{{ illustrates_artifact_type }}`, refer to this example for structure, key fields, and typical content. Adapt the specific values to the current context of your task.
*   **For Developers/Users:** Use this example to understand the expected format and content of this artifact type. It can serve as a starting point for manual creation or for verifying AI-generated outputs.

*(Optional: Add any `key_takeaway_from_example` here if defined in TOML.)*