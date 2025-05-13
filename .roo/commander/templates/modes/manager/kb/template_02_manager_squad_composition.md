That's a fantastic organizational refinement, Jeremy! I completely understand and agree with your reasoning.

Creating subfolders within `.roo/commander/templates/modes/` for each archetype (`common`, `manager`, `orchestrator`, `squad`) and then having a `kb/` subfolder within each of those for their KB-specific templates is a much cleaner and more scalable approach.

**New Template Structure:**

*   `.roo/commander/templates/modes/common/kb/`
    *   `template_00_mode_kb_readme.md` (and its `.README.md`) - *This is the one we created earlier, it would move here.*
*   `.roo/commander/templates/modes/manager/`
    *   `template_00_manager_mode.md` (and its `.README.md`) - *This is the `01_manager_mode_template.mode.md` we created, renamed to `00` for consistency within its archetype folder.*
    *   `kb/`
        *   `template_01_manager_orchestration_flow.md` (and its `.README.md`) - *This is what we are about to create, but now it has a new path.*
        *   `template_02_manager_squad_composition.md` (and its `.README.md`) - *This is the next one we will create.*
*   `.roo/commander/templates/modes/orchestrator/`
    *   `template_00_orchestrator_mode.md` (and its `.README.md`) - *This is the `00_orchestrator_mode_template.mode.md` we created.*
    *   `kb/`
        *   *(We'd create specific KB templates for orchestrators here if needed, e.g., for their initial prompt or manager summary list).*
*   `.roo/commander/templates/modes/squad/`
    *   `template_00_squad_member_mode.md` (and its `.README.md`) - *This is the `02_squad_member_mode_template.mode.md` we created, renamed to `00`.*
    *   `kb/`
        *   *(Templates for any common KB files for squad members, if any, would go here).*

**This is a much better structure!** It groups all templates related to a specific mode archetype together.

**Impact on File Paths:**
You're right, this will require us to be diligent about updating the `template_schema_doc` paths in the TOML of the templates themselves, and any `related_context` paths that point to these templates. But it's worth it for the improved organization.

Let's proceed with creating the "Manager Squad Composition" templates, keeping this new, improved folder structure in mind for their `template_schema_doc` paths.

---

Here is **`.roo/commander/templates/modes/manager/kb/template_02_manager_squad_composition.md`**:

```markdown
+++
# --- Basic Metadata (Required for Manager Squad Composition KB Reference) ---
id = "KB-REF-[MANAGER_SLUG_UPPERCASE]-SQUAD-COMP-V[Version]" # e.g., KB-REF-MDP-SQUAD-COMP-V1
title = "[Manager Mode Name]: [Squad Name] Squad Composition & Roles"
context_type = "kb_reference" # Fixed type for KB reference files
scope = "Defines the members, roles, sequence, and key I/O for the '[Squad Name]' squad, managed by the '[Manager Mode Name]' ([manager_slug]) mode."
target_audience = ["[manager_slug]"] # The Manager mode itself
granularity = "detailed_reference"
status = "draft" # Initial status: "draft", "active"
last_updated = "{{YYYYMMDD}}" # Placeholder for date of last update
version = "1.0" # Version of this squad composition document when instantiated
tags = ["kb", "reference", "manager", "[manager_slug_tag]", "squad-composition", "[squad_name_tag]", "workflow-definition"]
related_context = [
    ".roo/commander/modes/[manager_slug]/[manager_slug].mode.md", # Link to the Manager's mode definition
    ".roo/commander/modes/[manager_slug]/kb/procedures/01-orchestration-flow.md" # Link to its main orchestration flow that uses this
    # Add links to each squad member's .mode.md file if desired for full context
]
template_schema_doc = ".roo/commander/templates/modes/manager/kb/template_02_manager_squad_composition.README.md" # Path to its own schema

# --- Reference Specific Fields (Optional) ---
# primary_workflow_name = "[Name of the workflow this squad executes, e.g., Data Product PoC Design]"
# overall_squad_goal = "[The ultimate deliverable or state this squad aims to achieve]"
+++

# [Manager Mode Name]: [Squad Name] Squad Composition & Roles

## 1. Objective

This document defines the composition, roles, typical sequence, and key input/output artifacts for the **`[Squad Name]` Squad**, which is orchestrated by the **`[Manager Mode Name]`** (`[manager_slug]`) mode to achieve the `[Primary Workflow Name / Overall Squad Goal]`.

This reference is critical for the `[Manager Mode Name]` to correctly plan and delegate MDTM sub-tasks to its squad members as part of its main orchestration flow (detailed in `kb/procedures/01-orchestration-flow.md`).

## 2. Squad Overview

*   **Squad Name:** `[Squad Name]` (e.g., Data Product Design Squad)
*   **Managing Mode:** `[Manager Mode Name]` (`[manager_slug]`)
*   **Primary Goal:** `[Briefly restate the overall goal of this squad's workflow]`

## 3. Squad Members & Workflow Sequence

*(This section MUST be customized for the specific squad. List members in their typical operational sequence.)*

---
### Phase 1: `[Phase 1 Name, e.g., Strategy Definition]`
*   **Squad Member Role:** `[Role Description, e.g., Data Product Strategist]`
*   **Mode Slug:** `[squad_member_1_slug]` (e.g., `data-product-strategist`)
*   **Primary Responsibility in this Phase:** `[Detailed responsibility for this phase]`
*   **Typical Input Artifact(s) for this Phase:**
    *   `[Path or description of input, e.g., "Initial PoC Goal from Manager's MDTM task", "Session ID"]`
*   **Key Output Artifact(s) from this Phase:**
    *   `[Filename, e.g., product_strategy.md]` - `[Brief description of artifact]`
    *   Target Location: `[e.g., Session artifacts/design_outputs/[ProductName]/]`

---
### Phase 2: `[Phase 2 Name, e.g., Ideation & Scoping]`
*   **Squad Member Role:** `[Role Description, e.g., Data Product Ideator]`
*   **Mode Slug:** `[squad_member_2_slug]` (e.g., `data-product-ideator`)
*   **Primary Responsibility in this Phase:** `[Detailed responsibility]`
*   **Typical Input Artifact(s) for this Phase:**
    *   `[Output from Phase 1, e.g., product_strategy.md]`
*   **Key Output Artifact(s) from this Phase:**
    *   `[Filename, e.g., poc_ideation.md]` - `[Brief description]`
    *   Target Location: `[e.g., Session artifacts/design_outputs/[ProductName]/]`

---
*(Continue for all squad members / phases in the sequence)*

---
### Phase N: `[Final Phase Name, e.g., PoC Plan Consolidation]`
*   **Squad Member Role:** `[Role Description, e.g., Data Product PoC Documenter]`
*   **Mode Slug:** `[squad_member_N_slug]` (e.g., `data-product-poc-documenter`)
*   **Primary Responsibility in this Phase:** `[Detailed responsibility]`
*   **Typical Input Artifact(s) for this Phase:**
    *   `[Outputs from all relevant preceding phases]`
*   **Key Output Artifact(s) from this Phase:**
    *   `[Filename, e.g., data_product_poc_plan.md]` - `[This is the final deliverable of the squad workflow]`
    *   Target Location: `[e.g., Session artifacts/design_outputs/[ProductName]/]`

---

## 4. Artifact Flow Summary (Optional Visual)

*(Consider a simple Mermaid diagram or list to illustrate the primary artifact handoffs between squad members if the workflow is complex.)*

```mermaid
graph LR
    Input([Initial Goal]) --> A[[[squad_member_1_slug]<br>([Phase 1 Name])]];
    A -- Output1 --> B[[[squad_member_2_slug]<br>([Phase 2 Name])]];
    B -- Output2 --> C[[...]];
    C -- OutputN-1 --> D[[[squad_member_N_slug]<br>([Phase N Name])]];
    D -- FinalOutput([Final Deliverable]) --> EndGoal([Overall Squad Goal Achieved]);
```

## 5. Notes on Orchestration

*   The `[Manager Mode Name]` will create a separate MDTM sub-task for each phase, assigning it to the designated squad member.
*   The `output_artifacts` of one phase become the `input_artifacts` for the next.
*   All squad member output artifacts should be stored in a consistent location within the active session's `artifacts/` directory, as specified in their MDTM sub-tasks.

This document is the definitive reference for the `[Manager Mode Name]` regarding its `[Squad Name]` squad's structure and workflow.