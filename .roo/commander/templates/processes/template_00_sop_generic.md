+++
# --- Standard Operating Procedure (SOP) ---
id = "SOP-[DomainShortCode]-[ProcedureNameShort]-V[Version]" # e.g., SOP-BUILD-GITHUB-RELEASE-V1
title = "SOP: [Descriptive Title of the Standard Operating Procedure]"
status = "draft" # Options: draft, active, under-review, deprecated
created_date = "{{YYYYMMDD}}"
updated_date = "{{YYYYMMDD}}"
version = "1.0" # Version of this SOP document
tags = ["sop", "procedure", "standard-operating-procedure", "[domain_tag]", "[process_tag]"]
template_schema_doc = ".roo/commander/templates/processes/template_00_sop_generic.README.md" # Path to its own schema

# --- SOP Context & Ownership ---
# process_owner = "[Role/Team responsible for maintaining this SOP, e.g., DevOps Lead, Core Maintainers]"
# primary_audience = "[Who primarily follows this SOP? e.g., Developers, Release Manager, AI Modes like manager-build-release]"
# related_workspace_rules = [ # Workspace rules that this SOP adheres to or implements
#    # e.g., ".roo/rules/02-mdtm-task-standard.md"
# ]
# related_tools_or_scripts = [ # Key tools or scripts used in this SOP
#    # e.g., ".roo/commander/scripts/build_release/build.js", "Git CLI", "GitHub Actions"
# ]

# --- SOP Specifics ---
# objective_summary = "[One-sentence summary of what this SOP achieves.]"
# frequency_of_execution = "[e.g., As needed, Per release, Daily, Weekly]"
# estimated_duration = "[e.g., ~1 hour, 15 minutes]"
# key_inputs_for_sop = ["[Input 1]", "[Input 2]"]
# key_outputs_of_sop = ["[Output 1]", "[Output 2]"]
+++

# SOP: {{ title | default: "[Specify SOP Title]" }}

## 1. Purpose & Objective

*   **Objective:** `{{ objective_summary | default: "[Clearly state the primary goal of this Standard Operating Procedure. What outcome is achieved by following these steps?]" }}`
*   **Scope:** [Define the boundaries of this SOP. What does it cover, and what does it explicitly not cover?]
*   **Audience:** `{{ primary_audience | default: "[Specify who this SOP is for.]" }}`
*   **Frequency:** `{{ frequency_of_execution | default: "[Specify how often this SOP is typically performed.]" }}`

## 2. Prerequisites

[List any conditions that must be met, tools that must be available, or information that must be gathered *before* starting this SOP.]
*   Prerequisite 1: (e.g., "Git repository is clean and all changes are committed.")
*   Prerequisite 2: (e.g., "Node.js version X.Y.Z or higher is installed.")
*   Prerequisite 3: (e.g., "Access credentials for [System Z] are configured.")
*   Key Inputs: `{{ key_inputs_for_sop | join: ", " | default: "[List key inputs]" }}`

## 3. Roles & Responsibilities (Optional)

[If multiple roles are involved in executing this SOP, define them and their responsibilities within this process.]
*   **Role 1: `[Role Name, e.g., Release Engineer]`**
    *   Responsibility A:
    *   Responsibility B:
*   **Role 2: `[Role Name, e.g., QA Reviewer]`**
    *   Responsibility C:

## 4. Procedural Steps

[This is the core of the SOP. Provide a detailed, sequential, step-by-step breakdown of the actions to be performed. Use numbered lists for clarity. Be explicit about actions, tools used, checks to perform, and decision points.]

1.  **Step 1: `[Action/Phase Name]`**
    *   Detail: [Explanation of what to do in this step.]
    *   Tool(s) Used (if any): `[e.g., Git CLI, Node.js script at path/to/script.js, Specific AI Mode]`
    *   Instruction/Command (if applicable): `[e.g., git tag -a v1.0.0 -m "Release v1.0.0"]`
    *   Verification: [How to confirm this step was successful?]
    *   Potential Issues & Troubleshooting: [Common problems and how to resolve them for this step.]

2.  **Step 2: `[Action/Phase Name]`**
    *   Detail: ...
    *   Tool(s) Used: ...
    *   Instruction/Command: ...
    *   Verification: ...
    *   Potential Issues & Troubleshooting: ...

3.  **Step N: `[Final Action/Phase Name]`**
    *   Detail: ...

## 5. Expected Outcomes / Deliverables

[What are the tangible outputs or the desired end state after successfully completing this SOP?]
*   *(Corresponds to `key_outputs_of_sop` in TOML)*
    *   Outcome 1: (e.g., "A new version of the software is tagged in Git.")
    *   Outcome 2: (e.g., "Release artifacts are packaged in `[.roo/commander/builds/[version]/](.roo/commander/builds/[version]/)`.")
    *   Outcome 3: (e.g., "`CHANGELOG.md` is updated.")

## 6. Error Handling & Escalation (General for this SOP)

[Describe how to handle common errors that might occur during the execution of this SOP as a whole, and when/how to escalate if problems cannot be resolved by the person following the SOP.]
*   If [Common Error X] occurs, [Corrective Action Y].
*   Escalate to `[Process Owner/Senior Role]` if [Condition Z].

## 7. SOP Maintenance & Review

*   **Process Owner:** `{{ process_owner | default: "[Specify Owner]" }}`
*   This SOP should be reviewed `[Frequency, e.g., annually, per major release]` or when significant changes occur in related tools or processes.
*   Proposed changes should be discussed with the `[Process Owner]`.

This SOP ensures that `[Primary Goal of SOP]` is performed consistently and reliably.