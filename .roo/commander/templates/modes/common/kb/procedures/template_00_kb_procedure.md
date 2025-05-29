+++
# --- Basic Metadata (Required for KB Procedure Files) ---
id = "KB-PROC-[mode_slug_uppercase]-[ShortName]-V[Version]" # Placeholder: e.g., KB-PROC-MDP-MAIN-ORCH-FLOW-V1
title = "[Mode Name]: Procedure - [Descriptive Title of the Procedure]" # Placeholder
context_type = "kb_procedure" # Fixed type for KB procedure files
scope = "Details a specific operational procedure or workflow for the '[Mode Name]' (`[mode_slug]`) mode to [achieve specific outcome]." # Placeholder
target_audience = ["[mode_slug]"] # Placeholder: The mode itself that executes this procedure
granularity = "detailed_procedure" # Options: "detailed_procedure", "high_level_workflow_overview"
status = "draft" # Default for a new procedure article
created_date = "{{YYYYMMDD}}" # Placeholder: To be set by creating agent
last_updated = "{{TIMESTAMP_ISO_Z}}" # Placeholder: To be set by creating agent
version = "1.0" # Version of this procedure document instance
tags = ["kb", "procedure", "workflow", "sop", "[mode_slug_tag]", "[procedure_domain_tag]"] # Placeholder: Add specific tags
related_context = [
    ".roo/commander/modes/[mode_slug]/[mode_slug].mode.md", # Placeholder: Link to the mode definition
    ".roo/commander/modes/[mode_slug]/kb/README.md", # Placeholder: Link to its KB Index
    ".roo/rules-[mode_slug]/00-[mode_slug]-core-principles.md", # Placeholder: Often linked from the core principles rule
    # "[.roo/rules/relevant_workspace_rule.md]", # Optional: Link to workspace rules this procedure implements
    # "[.roo/commander/modes/[mode_slug]/kb/skills/skill_used_in_procedure.md]" # Optional: Link to skills applied
]
template_schema_doc = ".roo/commander/templates/modes/common/kb/procedures/template_00_kb_procedure.README.md"

# --- Procedure Specific Fields (Optional - for the instance, fill as needed) ---
# trigger_condition = "[When or under what circumstances does the mode execute this procedure? Or remove field.]" # Placeholder or remove
# primary_input = "[What is the main input or starting state for this procedure? e.g., 'Assigned MDTM Task'. Or remove field.]" # Placeholder or remove
# primary_output_goal = "[What is the main deliverable or end state this procedure aims to achieve? Or remove field.]" # Placeholder or remove
# estimated_complexity = "medium" # Options: "low", "medium", "high". Or remove field.
+++

# [Mode Name]: Procedure - {{ title | default: "[Specify Procedure Title]" }}

## 1. Objective 🎯

[Clearly state the primary goal of this specific procedure. What outcome is the `[Mode Name]` (`[mode_slug]`) mode trying to achieve by following these steps? This should align with the `scope` and `primary_output_goal` from TOML if used.]

## 2. Trigger / When to Use ⚡

[Describe the specific conditions, user requests, MDTM task assignments, or internal states (often dictated by its rules in `[.roo/rules-[mode_slug]/]`) that should trigger the `[Mode Name]` mode to execute this procedure. This often corresponds to `trigger_condition` in TOML.]

## 3. Prerequisites 🔑

[List any conditions that **MUST** be true or information/artifacts that the `[Mode Name]` mode **MUST** have access to before starting this procedure. Reference specific input artifacts or KB documents if applicable, using `.roo/` anchored paths.]
*   Prerequisite 1: (e.g., "An active MDTM task has been assigned and its content fully read.")
*   Prerequisite 2: (e.g., "Access to `[.roo/commander/modes/[mode_slug]/kb/reference/specific_reference.md]` is confirmed.")
*   Prerequisite 3: (e.g., "Active `RooComSessionID` is known and valid.")

## 4. Procedural Steps ⚙️

[This is the core of the document. Provide a detailed, step-by-step breakdown of the actions the `[Mode Name]` mode **MUST** take. Use numbered lists for clarity. Be explicit about decision points, loops, and interactions with other modes or tools (described by function). Reference other KB articles (skills, wisdom, other procedures) or rules where necessary, using `.roo/` anchored paths.]

1.  **Step 1: [Action Description]**
    *   Detail: [Further explanation or sub-steps for Action 1. Be specific about data manipulation, file access, or tool usage from the mode's perspective.]
    *   (If applicable) Tool/Technique: [Describe the conceptual tool or method, e.g., "Analyze input artifacts using text processing capabilities," "Formulate delegation message based on `template_X.md`."]
    *   (If applicable) KB Reference: [e.g., "Consult `[.roo/commander/modes/[mode_slug]/kb/skills/specific_skill.md]` for this step."]
    *   (If applicable) Output/State Change: [e.g., "Internal variable `[variable_name]` is populated with [data].", "File `[.roo/path/to/output.md]` is created."]

2.  **Step 2: [Action Description]**
    *   Detail: ...
    *   (Conditional Logic Example) **If** [condition based on previous step's output or mode state] **then** proceed to Step 2.X, **else** proceed to Step 2.Y.

3.  **Step 3: [Looping Example]**
    *   For each `[item]` in `[list_of_items]` (obtained from `[source, e.g., MDTM input_artifacts, KB reference]`):
        1.  Perform `[Action A on item]`.
        2.  Perform `[Action B on item]`.

4.  **Step N: [Final Action/Reporting]**
    *   Detail: [e.g., "Update primary MDTM task status to '🟢 Done' as per `[.roo/rules/02-mdtm-task-standard.md]`.", "Report completion to coordinator `[coordinator_slug]`."]

## 5. Artifact Management (If Applicable) 📂

[If this procedure involves creating, modifying, or consuming specific artifacts, detail how they are handled, adhering to session and MDTM standards.]
*   Input Artifacts Expected: `[List or describe, referencing MDTM task inputs or specific KB files. Use `.roo/` paths.]`
*   Output Artifacts Produced: `[List or describe, including target paths (e.g., within session artifacts) and naming conventions. Use `.roo/` paths.]`
*   Logging: "All significant actions, decisions, and artifact manipulations within this procedure **MUST** be logged in the mode's active MDTM task log and/or the main session log as appropriate (see `[.roo/rules/03-session-management-standard.md]` and `[.roo/rules/02-mdtm-task-standard.md]`)."

## 6. Error Handling / Exceptional Cases ⚠️

[Describe how the `[Mode Name]` mode should handle common errors or exceptional situations encountered during this procedure, aligning with `[.roo/commander/docs/standards/09-error-handling-and-reporting-standard.md]`. Be specific to this procedure.]
*   **Error Type 1:** [Description, e.g., "Required input artifact `[artifact_name]` not found or unreadable."]
    *   **Handling:** [Steps to take, e.g., "Log error in MDTM task. Set MDTM task status to '🔴 Error'. Report to coordinator `[coordinator_slug]` with details."]
*   **If general failure:** "Report '🔴 Error' status on the relevant MDTM task and notify the coordinator with details of the failed step in this procedure."

## 7. Postconditions / Expected Outcome ✅

[What should be the state of the system, or what should have been achieved, after this procedure is successfully completed? This should align with the `primary_output_goal` if defined in TOML.]
*   Outcome 1: (e.g., "MDTM sub-task for `[squad_member_slug]` is created and delegated.")
*   Outcome 2: (e.g., "The specified `[output_artifact.md]` is generated and saved to the session artifacts.")

This procedure is a core part of the `[Mode Name]` mode's operational logic, often invoked based on its rules in `[.roo/rules-[mode_slug]/]`.