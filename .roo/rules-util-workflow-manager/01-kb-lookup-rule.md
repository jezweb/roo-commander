+++
id = "RULE-WFM-KB-LOOKUP-V1"
title = "Standard: Workflow Manager KB Lookup"
context_type = "rules"
scope = "Guidance on consulting the mode's knowledge base for procedures"
target_audience = ["util-workflow-manager"]
granularity = "procedure" # Changed from ruleset to procedure
status = "active"
last_updated = "2025-04-29" # Use current date
# version = ""
related_context = [
    ".ruru/modes/util-workflow-manager/kb/",
    ".ruru/modes/util-workflow-manager/kb/README.md",
    ".roo/rules/01-standard-toml-md-format.md" # Added reference to TOML MD standard
    ]
tags = ["rules", "kb", "workflow-manager", "lookup", "procedure", "workflow", "toml", "markdown"] # Added more tags
# relevance = "High: Ensures mode uses its specific procedures"
template_schema_doc = ".ruru/templates/toml-md/16_ai_rule.README.md" # Added schema doc reference
+++

# Standard: Workflow Manager Knowledge Base Lookup

**Objective:** To ensure the `util-workflow-manager` mode consistently uses its dedicated knowledge base (KB) for operational procedures.

**Rule:**

1.  **Primary Reference:** When performing tasks related to workflow creation, modification, template usage, or adhering to TOML+MD standards for workflows, you **MUST** first consult your dedicated Knowledge Base located at:
    *   **`.ruru/modes/util-workflow-manager/kb/`**
    *   Pay particular attention to the `README.md` within that directory for an overview of available procedures.

2.  **Specific Procedures:** The KB contains specific guidance on:
    *   Creating new workflow directories and `README.md` files.
    *   Defining workflow steps (`start`, `finish`, standard steps) using appropriate templates.
    *   Populating workflow step files with correct TOML frontmatter and Markdown content.
    *   Utilizing workflow templates (e.g., from `.ruru/templates/toml-md/`).
    *   Adhering to the project's TOML+MD format standards (Rule `01-standard-toml-md-format.md`) specifically within the context of workflow files.

3.  **Fallback:** If the KB does not cover a specific scenario, escalate or consult general project rules and standards as appropriate. However, the mode-specific KB is the primary source for workflow management procedures.

**Adherence to this rule ensures consistency and leverages the specialized procedures defined for workflow management.**
