+++
# --- Workflow Metadata ---
id = "WF-WORKFLOW-CREATION-V1" # (String, Required) Unique identifier (e.g., "WF-REPOMIX-COMPREHENSIVE-V2")
title = "Workflow: Create New Workflow Definition" # (String, Required)
description = """
Defines the standard process for creating a new directory-based workflow definition using the established templates.
"""
version = "1.0.0" # (String, Required) Semantic version for the workflow definition.
status = "Draft" # (String, Required) Current status: "Draft", "Active", "Deprecated", "Experimental".
tags = ["workflow", "meta", "creation", "standard"] # (Array of Strings, Optional) Keywords for search/categorization.

# --- Execution Control ---
entry_point = "00_start.md" # (String, Required) Filename of the first step to execute.

# --- Interface ---
inputs = [ # (Array of Strings, Optional) Describe overall inputs needed to start the workflow.
    "User request specifying the new workflow's name and goal.",
]
outputs = [ # (Array of Strings, Optional) Describe the expected final artifacts or outcomes.
    "A new directory under .ruru/workflows/ containing the populated workflow definition files (README, start, steps, finish).",
]

# --- Housekeeping ---
last_updated = "2025-04-29" # (String, Required) Date of last modification. Use placeholder.
template_schema_doc = ".ruru/templates/toml-md/23_workflow_readme.md" # (String, Required) Link to this template definition.
related_docs = [".ruru/templates/toml-md/23_workflow_readme.md", ".ruru/templates/toml-md/24_workflow_step_start.md", ".ruru/templates/toml-md/25_workflow_step_standard.md", ".ruru/templates/toml-md/26_workflow_step_finish.md"] # (Array of Strings, Optional) Links to related rules, KBs, ADRs.
+++

# Workflow: Workflow: Create New Workflow Definition

## Overview

Defines the standard process for creating a new directory-based workflow definition using the established templates.

## Usage

This workflow is used to scaffold a new workflow definition directory and its core files based on standard templates. Initiate this workflow when a new repeatable process needs to be formally defined.

## Inputs

The primary input required to start this workflow is:
*   User request specifying the new workflow's name and goal.

## Outputs

The expected outcome of this workflow is:
*   A new directory under `.ruru/workflows/` (named according to the workflow ID) containing the populated workflow definition files (README.md, 00_start.md, 01_create_directory_readme.md, 02_create_start_step.md, 03_define_standard_steps.md, 04_create_finish_step.md, 05_review_workflow.md, 06_present_suggestions.md, 99_finish.md).

## Workflow Steps

1.  **00_start.md:** Gathers initial user input (workflow name, goal).
2.  **01_create_directory_readme.md:** Creates the workflow directory and the main README.md file.
3.  **02_create_start_step.md:** Creates the `00_start.md` file for the target workflow.
4.  **03_define_standard_steps.md:** Prompts the user to define standard steps and creates their corresponding files.
5.  **04_create_finish_step.md:** Creates the initial `99_finish.md` file for the target workflow.
6.  **05_review_workflow.md:** Delegates a review of all created files to `util-reviewer` to gather suggestions.
7.  **06_present_suggestions.md:** Presents the review suggestions to the user and prompts for action (apply, ignore, manual).
8.  **99_finish.md:** Finalizes the process, reporting the created files, any review suggestions, and the user's decision.