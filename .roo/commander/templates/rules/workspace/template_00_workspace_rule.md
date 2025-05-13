+++
# --- Basic Metadata (Required for all Workspace Rules) ---
id = "WORKSPACE-RULE-[ShortName]-V[Version]" # e.g., WORKSPACE-RULE-NAMING-CONVENTIONS-V1
title = "Workspace Standard: [Descriptive Title of the Rule]"
context_type = "rules" # Fixed for rule documents
scope = "Workspace-wide standard for [briefly what the rule governs]"
target_audience = ["all"] # Typically "all" for workspace rules, or specific roles if applicable
granularity = "standard" # Or "guideline", "procedure" depending on the rule's nature
status = "draft" # Initial status: "draft", "active", "deprecated"
last_updated = "{{YYYYMMDD}}" # Placeholder for date of last update
version = "1.0" # Initial version of the rule document
tags = ["rules", "standard"] # Add specific tags relevant to the rule's content
related_context = [
    # List paths to other relevant rules, standards, or key documents
    # e.g., ".roo/rules/01-another-related-rule.md"
]
template_schema_doc = ".roo/commander/templates/rules/template_00_workspace_rule.README.md" # Path to its own schema

# --- Rule Specific Fields (Optional - Add as needed per rule) ---
# enforcement_level = "critical" # e.g., "critical", "high", "medium", "recommendation"
# rationale_summary = "[Brief summary of why this rule is important]"
# exceptions = "[Are there any documented exceptions to this rule?]"
+++

# Workspace Standard: {{ title | default: "[Specify Rule Title]" }}

## 1. Objective

[Clearly state the primary goal or purpose of this rule. What problem does it solve or what behavior does it standardize?]

## 2. Scope & Applicability

*   **Scope:** [Define precisely what aspects of the workspace, modes, or artifacts this rule applies to.]
*   **Applies To:** [Specify which modes, roles, or situations are governed by this rule (e.g., "All modes creating MDTM tasks," "All modes interacting with the file system"). Often aligns with `target_audience` in TOML.]

## 3. Rule Definition / Procedure

[This is the core section. Clearly define the rule, standard, or procedure.]

*   **Guideline/Requirement 1:** [Detail the first part of the rule.]
    *   *Example/Clarification (Optional):*
*   **Guideline/Requirement 2:** [Detail the second part of the rule.]
    *   *Example/Clarification (Optional):*
*   *(Use bullet points, numbered lists, and sub-headings as needed for clarity.)*
*   *(If it's a procedure, list the steps.)*

## 4. Rationale

[Explain the reasoning behind this rule. Why is it necessary or beneficial for the workspace?]
*   (e.g., Ensures consistency, improves maintainability, reduces errors, enhances collaboration.)

## 5. Examples (Optional)

[Provide concrete examples of correct and/or incorrect application of the rule, if helpful for clarity.]

### Correct Usage Example:
```
[Example of correct application]
```

### Incorrect Usage Example (and why):
```
[Example of incorrect application]
```
*   *Reasoning:*

## 6. Enforcement & Compliance (Optional)

[Briefly describe how compliance with this rule might be ensured or checked (e.g., code reviews, automated linting, mode self-correction based on this rule).]

## 7. Related Standards / Documents

[List any other workspace rules, standards, or documents that are closely related to or should be considered alongside this rule. This often mirrors `related_context` from TOML.]
*   `[Path to related document 1]`
*   `[Path to related document 2]`