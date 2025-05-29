+++
# --- Basic Metadata (Required for Manager Squad Composition KB Reference) ---
id = "KB-REF-[manager_slug_uppercase]-SQUAD-COMP-V[Version]" # Placeholder: e.g., KB-REF-MDP-SQUAD-COMP-V1
title = "[Manager Mode Name]: [Squad Name] Squad Composition & Roles" # Placeholder
context_type = "kb_reference" # Fixed type for KB reference files
scope = "Defines the members, roles, sequence, and key I/O for the '[Squad Name]' squad, managed by the '[Manager Mode Name]' (`[manager_slug]`) mode for the '[Primary Workflow Name]' workflow." # Placeholder
target_audience = ["[manager_slug]"] # Placeholder: The Manager mode itself
granularity = "detailed_reference"
status = "draft" # Default for a new reference article
created_date = "{{YYYYMMDD}}" # Placeholder: To be set by creating agent
last_updated = "{{TIMESTAMP_ISO_Z}}" # Placeholder: To be set by creating agent
version = "1.0" # Version of this squad composition document instance
tags = ["kb", "reference", "manager", "[manager_slug_tag]", "squad-composition", "[squad_name_tag]", "workflow-definition"] # Placeholder: Add specific tags
related_context = [
    ".roo/commander/modes/[manager_slug]/[manager_slug].mode.md", # Placeholder: Link to the Manager's mode definition
    ".roo/commander/modes/[manager_slug]/kb/procedures/01-main-orchestration-flow.md", # Placeholder: Link to its main orchestration flow that uses this
    # Add .roo/ anchored paths to each squad member's .mode.md file for full context
    # e.g., ".roo/commander/modes/[squad_member_1_slug]/[squad_member_1_slug].mode.md"
]
template_schema_doc = ".roo/commander/templates/modes/manager/kb/template_02_manager_squad_composition.README.md"

# --- Reference Specific Fields (Optional - for the instance, fill as needed) ---
# primary_workflow_name = "[Name of the workflow this squad executes, e.g., Data Product PoC Design. Or remove field.]" # Placeholder or remove
# overall_squad_goal = "[The ultimate deliverable or state this squad aims to achieve. Or remove field.]" # Placeholder or remove
+++

# [Manager Mode Name]: [Squad Name] Squad Composition & Roles

## 1. Objective 🎯

This document defines the composition, roles, typical operational sequence, and key input/output artifacts for the **`[Squad Name]` Squad**. This squad is orchestrated by the **`[Manager Mode Name]`** (`[manager_slug]`) mode to achieve the `{{ primary_workflow_name | default: "[Primary Workflow Name / Overall Squad Goal]" }}`.

This reference is critical for the `[Manager Mode Name]` to correctly plan and delegate MDTM sub-tasks to its squad members as part of its main orchestration flow (detailed in `[.roo/commander/modes/[manager_slug]/kb/procedures/01-main-orchestration-flow.md]`).

## 2. Squad Overview 🧑‍🤝‍🧑

*   **Squad Name:** `[Squad Name]` (e.g., Data Product Design Squad)
*   **Managing Mode:** `[Manager Mode Name]` (`[manager_slug]`)
*   **Primary Goal of this Squad's Workflow:** `{{ overall_squad_goal | default: "[Briefly restate the overall goal of this squad's workflow, e.g., To produce a comprehensive Data Product PoC Plan.]" }}`

## 3. Squad Members & Workflow Sequence 🔄

*(This section **MUST** be customized for the specific squad. List members in their typical operational sequence. Ensure all artifact paths and template references use the `.roo/` anchor.)*

---
### Phase 1: `[Phase 1 Name, e.g., Strategy Definition]`
*   **Squad Member Role:** `[Role Description, e.g., Data Product Strategist]`
*   **Mode Slug:** `[squad_member_1_slug]` (e.g., `data-product-strategist`)
*   **Primary Responsibility in this Phase:** `[Detailed responsibility for this phase]`
*   **Typical Input Artifact(s) for this Phase:**
    *   `[Description of Input 1, e.g., "Initial PoC Goal from Manager's MDTM task (passed as description or input_artifact path)"]`
    *   `[Description of Input 2, e.g., "Active Session ID and Path (e.g., `[.roo/commander/sessions/[SESSION_ID]/]`) for context"]`
*   **Key Output Artifact(s) from this Phase:**
    *   `[Filename, e.g., product_strategy_v1.md]` - `[Brief description of artifact]`
    *   Target Location: `[e.g., `[.roo/commander/sessions/[SESSION_ID]/artifacts/design_outputs/[ProductName]/product_strategy_v1.md]`. Use placeholders like `[ActiveSessionPath]` if defined in Manager's procedure.]`
    *   Template Used: `[e.g., `[.roo/commander/templates/design_artifacts/data_product/template_product_strategy.md]`. Use `.roo/` path.]`

---
### Phase 2: `[Phase 2 Name, e.g., Ideation & Scoping]`
*   **Squad Member Role:** `[Role Description]`
*   **Mode Slug:** `[squad_member_2_slug]`
*   **Primary Responsibility in this Phase:** `[Detailed responsibility]`
*   **Typical Input Artifact(s) for this Phase:**
    *   `[Output from Phase 1, e.g., Path to product_strategy_v1.md]`
*   **Key Output Artifact(s) from this Phase:**
    *   `[Filename]` - `[Brief description]`
    *   Target Location: `[Path]`
    *   Template Used: `[Path]`

---
*(Continue for all squad members / phases in the sequence)*

---
### Phase N: `[Final Phase Name, e.g., PoC Plan Consolidation]`
*   **Squad Member Role:** `[Role Description]`
*   **Mode Slug:** `[squad_member_N_slug]`
*   **Primary Responsibility in this Phase:** `[Detailed responsibility]`
*   **Typical Input Artifact(s) for this Phase:**
    *   `[Outputs from all relevant preceding phases, listing their typical filenames or paths]`
*   **Key Output Artifact(s) from this Phase:**
    *   `[Filename of final deliverable]` - `[This is the final deliverable of the squad workflow]`
    *   Target Location: `[Path]`
    *   Template Used: `[Path]`

---

## 4. Artifact Flow Summary (Optional Visual) 📊

*(Consider a simple Mermaid diagram or list to illustrate the primary artifact handoffs between squad members if the workflow is complex. Ensure mode slugs are used.)*

```mermaid
graph LR
    Input([Initial Goal from Coordinator]) --> Mgr({{manager_slug}});
    Mgr -- MDTM Task (Initial Inputs) --> SM1{{squad_member_1_slug}};
    SM1 -- OutputArtifact1 --> Mgr;
    Mgr -- MDTM Task (Input: OutputArtifact1) --> SM2{{squad_member_2_slug}};
    SM2 -- OutputArtifact2 --> Mgr;
    Mgr -- ... --> SMN{{squad_member_N_slug}};
    SMN -- FinalDeliverable --> Mgr;
    Mgr -- Reports FinalDeliverable to Coordinator --> Output([Overall Squad Goal Achieved]);
```

## 5. Notes on Orchestration 📝

*   The `[Manager Mode Name]` (`[manager_slug]`) will create a separate MDTM sub-task for each phase, assigning it to the designated squad member.
*   The `output_artifacts` (with full `.roo/` anchored paths) of one phase become the `input_artifacts` for the next.
*   All squad member output artifacts **MUST** be stored in a consistent location within the active session's `artifacts/` directory (e.g., `[ActiveSessionPath]/artifacts/[output_subdir]/[ProductNameOrIdentifier]/`), as specified in their MDTM sub-tasks by the Manager.

This document is the definitive reference for the `[Manager Mode Name]` regarding its `[Squad Name]` squad's structure, roles, and operational workflow.