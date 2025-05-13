+++
# --- Basic Metadata (Required for all Mode-Specific Rules) ---
id = "[MODE_SLUG_UPPERCASE]-RULE-[ShortName]-V[Version]" # e.g., RC-RULE-KB-LOOKUP-V1, MDP-RULE-SQUAD-SEQ-V1
title = "[Mode Name]: Rule - [Descriptive Title of the Rule]"
context_type = "rules" # Fixed for rule documents
scope = "Mode-specific rule for [briefly what this rule governs for this mode]"
target_audience = ["[mode_slug]"] # MUST be the slug of the mode this rule applies to
granularity = "procedure" # Or "guideline", "standard" depending on the rule's nature
status = "draft" # Initial status: "draft", "active", "deprecated"
last_updated = "{{YYYYMMDD}}" # Placeholder for date of last update
version = "1.0" # Initial version of the rule document
tags = ["rules", "mode-specific", "[mode_slug_tag]"] # Add specific tags relevant to the rule and mode
related_context = [
    # List paths to relevant mode KB files, other mode rules, or workspace rules
    # e.g., ".roo/commander/modes/[mode_slug]/kb/procedures/main_flow.md"
    # e.g., ".roo/rules/02-mdtm-task-standard.md"
]
template_schema_doc = ".roo/commander/templates/rules/template_00_mode_specific_rule.README.md" # Path to its own schema

# --- Rule Specific Fields (Optional - Add as needed per rule) ---
# enforcement_level = "critical" # e.g., "critical", "high", "medium", "recommendation"
# rationale_summary = "[Brief summary of why this rule is important for this mode]"
# trigger_conditions = "[When does this mode apply this rule?]"
+++

# [Mode Name]: Rule - {{ title | default: "[Specify Rule Title]" }}

## 1. Objective

[Clearly state the primary goal or purpose of this rule *for this specific mode*. What aspect of its behavior or operation does it define or standardize?]

## 2. Scope & Applicability

*   **Scope:** [Define precisely what aspects of *this mode's* operations or decision-making this rule applies to.]
*   **Applies To:** This rule applies exclusively to the `[mode_slug]` mode.

## 3. Rule Definition / Procedure

[This is the core section. Clearly define the rule or procedure that *this mode* must follow.]

*   **Condition/Trigger 1 (If applicable):** [When X happens...]
    *   **Action/Step 1.1:** [The mode MUST do Y.]
    *   **Action/Step 1.2:** [The mode SHOULD consider Z.]
*   **Guideline/Requirement 1:** [Detail the first part of the rule specific to this mode.]
    *   *Example/Clarification (Optional):*
*   *(Use bullet points, numbered lists, and sub-headings as needed for clarity.)*

## 4. Rationale

[Explain the reasoning behind this rule *for this specific mode*. Why is it necessary for its effective operation or its role within the broader system?]

## 5. Examples (Optional)

[Provide concrete examples of how *this mode* should apply the rule, if helpful for clarity.]

### Correct Application Example:
```
[Example of the mode correctly applying this rule]
```

## 6. Related Mode KB Articles (If Applicable)

[If this rule directs the mode to use specific parts of its own KB, list them here.]
*   `kb/procedures/[relevant_procedure].md`
*   `kb/reference/[relevant_reference].md`

## 7. Enforcement & Compliance (Optional)

[Briefly describe how this mode ensures its own compliance with this rule (e.g., "This rule is embedded in the mode's primary operational loop described in its system_prompt and core KB procedures.").]