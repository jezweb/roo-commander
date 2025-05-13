+++
# --- Basic Metadata (Required for KB Procedure Files) ---
id = "KB-PROC-[MODE_SLUG_UPPERCASE]-[ShortName]-V[Version]" # e.g., KB-PROC-MDP-MAIN-ORCH-FLOW-V1
title = "[Mode Name]: Procedure - [Descriptive Title of the Procedure]"
context_type = "kb_procedure" # Fixed type for KB procedure files
scope = "Details a specific operational procedure or workflow for the '[Mode Name]' ([mode_slug]) mode."
target_audience = ["[mode_slug]"] # The mode itself that executes this procedure
granularity = "detailed_procedure"
status = "draft" # Initial status: "draft", "active"
last_updated = "{{YYYYMMDD}}" # Placeholder for date of last update
version = "1.0" # Version of this procedure document when instantiated
tags = ["kb", "procedure", "[mode_slug_tag]"] # Add specific tags related to the procedure's content
related_context = [
    ".roo/commander/modes/[mode_slug]/[mode_slug].mode.md", # Link to the mode definition
    ".roo/commander/modes/[mode_slug]/kb/README.md" # Link to its KB Index
    # Add paths to relevant workspace rules or other KB articles this procedure relies on or implements
]
template_schema_doc = ".roo/commander/templates/modes/common/kb/procedures/template_00_kb_procedure.README.md" # Path to its own schema

# --- Procedure Specific Fields (Optional) ---
# trigger_condition = "[When or under what circumstances does the mode execute this procedure?]"
# primary_input = "[What is the main input or starting state for this procedure? e.g., 'Assigned MDTM Task']"
# primary_output_goal = "[What is the main deliverable or end state this procedure aims to achieve?]"
# estimated_complexity = "medium" # e.g., "low", "medium", "high"
+++

# [Mode Name]: Procedure - {{ title | default: "[Specify Procedure Title]" }}

## 1. Objective

[Clearly state the primary goal of this specific procedure. What outcome is the `[Mode Name]` mode trying to achieve by following these steps?]

## 2. Trigger / When to Use

[Describe the specific conditions, user requests, or internal states that should trigger the `[Mode Name]` mode to execute this procedure. This often corresponds to `trigger_condition` in TOML.]

## 3. Prerequisites

[List any conditions that must be true or information/artifacts that the `[Mode Name]` mode must have access to before starting this procedure.]
*   Prerequisite 1: (e.g., "An active MDTM task has been assigned and read.")
*   Prerequisite 2: (e.g., "Access to `kb/reference/[specific_reference_file].md` is confirmed.")
*   Prerequisite 3: (e.g., "Active `RooComSessionID` is known.")

## 4. Procedural Steps

[This is the core of the document. Provide a detailed, step-by-step breakdown of the actions the `[Mode Name]` mode **MUST** take. Use numbered lists for clarity. Be explicit about decision points, loops, and interactions with other modes or tools (described by function). Reference other KB articles or rules where necessary.]

1.  **Step 1: [Action Description]**
    *   Detail: [Further explanation or sub-steps for Action 1]
    *   (If applicable) Tool/Technique: [Describe the conceptual tool or method, e.g., "Analyze input artifacts," "Formulate delegation message"]
    *   (If applicable) KB Reference: [e.g., "Consult `kb/skills/specific_skill.md` for this step"]
    *   (If applicable) Output: [e.g., "Updated internal state variable `[variable_name]`"]

2.  **Step 2: [Action Description]**
    *   Detail: ...
    *   (Conditional Logic Example) **If** [condition] **then** proceed to Step 2.X, **else** proceed to Step 2.Y.

3.  **Step 3: [Looping Example]**
    *   For each `[item]` in `[list_of_items]` (obtained from [source]):
        1.  Perform [Action A on item].
        2.  Perform [Action B on item].

4.  **Step N: [Final Action/Reporting]**
    *   Detail: [e.g., "Update primary MDTM task status to '🟢 Done'.", "Report completion to coordinator."]

## 5. Artifact Management (If Applicable)

[If this procedure involves creating, modifying, or consuming specific artifacts, detail how they are handled.]
*   Input Artifacts Expected: `[List or describe]`
*   Output Artifacts Produced: `[List or describe, including target paths and naming conventions]`
*   Logging: "All significant actions and artifact manipulations within this procedure **MUST** be logged in the mode's active MDTM task log and/or the main session log as appropriate (see `.roo/rules/03-session-management-standard.md`)."

## 6. Error Handling / Exceptional Cases

[Describe how the `[Mode Name]` mode should handle common errors or exceptional situations encountered during this procedure.]
*   **Error Type 1:** [Description]
    *   **Handling:** [Steps to take]
*   **If general failure:** "Report '🔴 Error' status on the relevant MDTM task and notify the coordinator with details."

## 7. Postconditions / Expected Outcome

[What should be the state of the system, or what should have been achieved, after this procedure is successfully completed? This should align with the `primary_output_goal` if defined in TOML.]
*   Outcome 1:
*   Outcome 2:

This procedure is a core part of the `[Mode Name]` mode's operational logic.