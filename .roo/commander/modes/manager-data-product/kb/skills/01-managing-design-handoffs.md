+++
# --- Basic Metadata (Required for KB Skill Files) ---
id = "KB-SKILL-MDP-DESIGN-HANDOFFS-V1"
title = "Manager Data Product: Skill - Managing Design Handoffs Between Squad Members"
context_type = "kb_skill"
scope = "Details the skill and techniques for manager-data-product to effectively manage handoffs of artifacts and context between data-product-design squad members."
target_audience = ["manager-data-product"]
granularity = "detailed_how_to"
status = "active"
last_updated = "{{YYYYMMDD}}"
version = "1.0"
tags = ["kb", "skill", "how-to", "manager-data-product", "squad-management", "artifact-management", "handoffs", "coordination"]
related_context = [
    ".roo/commander/modes/manager-data-product/manager-data-product.mode.md",
    ".roo/commander/modes/manager-data-product/kb/README.md",
    ".roo/commander/modes/manager-data-product/kb/procedures/01-main-data-product-orchestration-flow.md",
    ".roo/rules/02-mdtm-task-standard.md"
]
template_schema_doc = ".roo/commander/templates/modes/common/kb/skills/template_00_kb_skill.README.md"

# --- Skill Specific Fields (Optional) ---
skill_category = "Squad Coordination & Workflow Management"
tools_or_concepts_involved = ["MDTM Sub-Tasks", "Input/Output Artifacts", "Clear Communication"]
# proficiency_level_assumed = "Basic understanding of MDTM task structure."
common_pitfalls_to_avoid = [
    "Assuming implicit knowledge transfer between squad members.",
    "Not explicitly defining input artifacts for a sub-task.",
    "Failing to verify output artifacts from a completed sub-task before initiating the next."
]
+++

# Manager Data Product: Skill - Managing Design Handoffs Between Squad Members

## 1. Objective / Purpose of this Skill

To ensure seamless and effective transitions of work, context, and artifacts between sequential members of the `data-product-*` squad during the Data Product PoC design lifecycle. Proper handoffs are critical for maintaining momentum, accuracy, and shared understanding.

## 2. When to Apply this Skill

This skill is applied by `manager-data-product` at the completion of each squad member's MDTM sub-task and before initiating the next sub-task in the sequence defined in `kb/procedures/01-main-data-product-orchestration-flow.md`.

## 3. Prerequisites / Inputs Needed

*   The preceding squad member's MDTM sub-task is marked "🟢 Done".
*   The `output_artifacts` field in the completed sub-task's TOML frontmatter is populated with the correct path(s) to their deliverable(s).
*   The actual output artifact file(s) exist at the specified path(s) within the session's `artifacts/design_outputs/[ProductName]/` directory.

## 4. Step-by-Step "How-To" / Methodology

1.  **Step 1: Verify Completion of Preceding Sub-Task**
    *   Detail: Read the MDTM task file of the squad member who just completed their phase. Confirm its `status` is "🟢 Done".
    *   Output of this step: Confirmation of completion.

2.  **Step 2: Validate Output Artifact(s) from Preceding Phase**
    *   Detail:
        *   Identify the path(s) listed in the `output_artifacts` field of the completed sub-task.
        *   Verify that the file(s) exist at these paths.
        *   Briefly review the content of the output artifact(s) to ensure they generally meet the acceptance criteria of the completed sub-task (a full quality review might be out of scope for the manager, but a sanity check is good).
    *   Output of this step: Validated output artifact(s) and their paths. Let these be `[PreviousPhaseOutputPaths]`.

3.  **Step 3: Identify Next Squad Member and Their Input Requirements**
    *   Detail: Consult `kb/reference/00-data-product-squad-composition.md` to identify the next squad member in the sequence and the typical input artifacts they require.
    *   Output of this step: `[NextSquadMemberSlug]`, list of `[RequiredInputTypesForNextPhase]`.

4.  **Step 4: Prepare MDTM Sub-Task for the Next Squad Member**
    *   Detail: When creating the new MDTM sub-task for `[NextSquadMemberSlug]`:
        *   Ensure the `input_artifacts` TOML field accurately lists all necessary paths from `[PreviousPhaseOutputPaths]` and any other relevant context files (e.g., the initial strategy document if still relevant for a later phase).
        *   In the `Description` and `Checklist` of the new sub-task, explicitly reference these input artifacts and instruct the `[NextSquadMemberSlug]` to use them.
    *   Example: For `data-product-ideator`'s sub-task, the `input_artifacts` must include the path to `product_strategy_v1.md`. The checklist should state: "Review the `product_strategy_v1.md` provided in `input_artifacts`."
    *   Output of this step: A fully prepared MDTM sub-task definition for the next phase.

5.  **Step 5: Delegate and Log**
    *   Detail: Create and delegate the new MDTM sub-task to `[NextSquadMemberSlug]`.
    *   Log this delegation and the key input/output artifact handoff in your (the Manager's) primary MDTM task log.
    *   Output of this step: Delegation initiated for the next phase.

## 5. Best Practices / Tips for Effective Application

*   **Explicitly List Paths:** Always use full, correct relative paths for artifacts in the `input_artifacts` and `output_artifacts` fields of MDTM tasks.
*   **Clear Instructions:** Ensure the checklist for the receiving squad member clearly states which input artifacts to use.
*   **Verify Existence:** Before passing an artifact path as input, quickly verify the file exists.
*   **Standard Naming:** Encourage squad members to use consistent naming for their output artifacts (e.g., `_v1.md`) to make handoffs predictable.

## 6. Expected Outcome / Deliverable from Applying this Skill

*   Smooth transition of work from one squad member to the next.
*   The receiving squad member has all necessary input artifacts clearly identified and accessible.
*   Reduced ambiguity and potential for errors due to missing or incorrect inputs.
*   Clear traceability of artifact flow within the Manager's MDTM task log.

## 7. Common Pitfalls to Avoid

*   Assuming the next squad member will "just know" where to find the previous outputs.
*   Passing incorrect or incomplete paths in the `input_artifacts` field.
*   Not verifying that the output artifact from the previous phase was actually created before initiating the next phase.