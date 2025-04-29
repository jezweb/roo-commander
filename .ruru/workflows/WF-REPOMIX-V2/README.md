+++
# --- Workflow Metadata ---
id = "WF-REPOMIX-V2" # (String, Required) Unique identifier (e.g., "WF-REPOMIX-COMPREHENSIVE-V2")
title = "Workflow: Repomix Standard Workflow V2" # (String, Required)
description = """
Standard workflow for using the Repomix Specialist mode (MODE-SPEC-REPOMIX)
to generate or update code based on repository context. This workflow guides
the process from defining the scope and context to generating, reviewing,
and applying the code changes.
"""
version = "1.0.0" # (String, Required) Semantic version for the workflow definition.
status = "Draft" # (String, Required) Current status: "Draft", "Active", "Deprecated", "Experimental".
tags = ["workflow", "repomix", "code-generation", "context-aware", "MODE-SPEC-REPOMIX"] # (Array of Strings, Optional) Keywords for search/categorization.

# --- Execution Control ---
entry_point = "00_start.md" # (String, Required) Filename of the first step to execute.

# --- Interface ---
inputs = [ # (Array of Strings, Optional) Describe overall inputs needed to start the workflow.
    "User request detailing the goal (e.g., generate new component, refactor function).",
    "Specification of target files/directories for generation/modification.",
    "Identification of relevant context source files/directories.",
    "Optionally, specific instructions or constraints for Repomix.",
]
outputs = [ # (Array of Strings, Optional) Describe the expected final artifacts or outcomes.
    "Generated or modified code files.",
    "Summary report of actions taken and files affected.",
    "Optionally, a diff or patch file.",
]

# --- Housekeeping ---
last_updated = "2025-04-29" # (String, Required) Date of last modification. Use placeholder.
template_schema_doc = ".ruru/templates/toml-md/23_workflow_readme.md" # (String, Required) Link to this template definition.
related_docs = [
    ".roo/rules-MODE-SPEC-REPOMIX/01-repomix-workflow.md",
    ".ruru/modes/mode-spec-repomix/kb/01-repomix-procedures.md"
] # (Array of Strings, Optional) Links to related rules, KBs, ADRs.
+++

# Workflow: Workflow: Repomix Standard Workflow V2

## Overview

Standard workflow for using the Repomix Specialist mode (MODE-SPEC-REPOMIX)
to generate or update code based on repository context. This workflow guides
the process from defining the scope and context to generating, reviewing,
and applying the code changes.

## Usage

This workflow is typically initiated by a coordinator (like Roo Commander or Prime Coordinator) when a task requires context-aware code generation or modification using the Repomix Specialist. The coordinator provides the initial inputs, and the workflow steps guide the Repomix Specialist through the process.

## Inputs

*   **User Request:** Clear description of the desired outcome (e.g., "Generate a React component named 'UserProfile' based on the API spec").
*   **Target Path(s):** The file(s) or directory(ies) where the code should be generated or modified.
*   **Context Path(s):** The file(s) or directory(ies) that Repomix should use as context for generation.
*   **Specific Instructions (Optional):** Any additional constraints, style guides, or specific methods Repomix should follow.

## Outputs

*   **Code Artifacts:** The primary output is the newly generated or modified code file(s).
*   **Summary Report:** A confirmation message detailing the actions performed and listing the affected files.
*   **Diff/Patch (Optional):** A diff file might be generated for review before final application, depending on the specific step configuration.