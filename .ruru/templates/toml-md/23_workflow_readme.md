+++
# --- Workflow Metadata ---
id = "WF-[WORKFLOW_NAME]-V[VERSION]" # (String, Required) Unique identifier (e.g., "WF-REPOMIX-COMPREHENSIVE-V2")
title = "Workflow: [Human Readable Title]" # (String, Required)
description = """
(String, Required) Multi-line description of the workflow's purpose, goals,
and overall process.
"""
version = "1.0.0" # (String, Required) Semantic version for the workflow definition.
status = "Draft" # (String, Required) Current status: "Draft", "Active", "Deprecated", "Experimental".
tags = ["workflow", "category", "example"] # (Array of Strings, Optional) Keywords for search/categorization.

# --- Execution Control ---
entry_point = "00_start.md" # (String, Required) Filename of the first step to execute.

# --- Interface ---
inputs = [ # (Array of Strings, Optional) Describe overall inputs needed to start the workflow.
    "User request detailing the goal.",
]
outputs = [ # (Array of Strings, Optional) Describe the expected final artifacts or outcomes.
    "Final result summary.",
]

# --- Housekeeping ---
last_updated = "{{DATE}}" # (String, Required) Date of last modification. Use placeholder.
template_schema_doc = ".ruru/templates/toml-md/23_workflow_readme.md" # (String, Required) Link to this template definition.
related_docs = [] # (Array of Strings, Optional) Links to related rules, KBs, ADRs.
+++

# Workflow: {{title}}

## Overview

{{description}}

## Usage

(Provide instructions on how to initiate and use this workflow)

## Inputs

(Detail the required inputs listed in the TOML block)

## Outputs

(Detail the expected outputs listed in the TOML block)