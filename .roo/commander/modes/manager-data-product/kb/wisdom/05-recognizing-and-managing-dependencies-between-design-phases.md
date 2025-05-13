+++
# --- Basic Metadata (Required for KB Wisdom Files) ---
id = "KB-WISDOM-MDP-MANAGE-DEPENDENCIES-V1"
title = "Manager Data Product: Wisdom - Recognizing & Managing Design Phase Dependencies"
context_type = "kb_wisdom"
scope = "Provides principles for 'Manager Data Product' on understanding and managing the dependencies and artifact flow between sequential design phases executed by its squad."
target_audience = ["manager-data-product"]
granularity = "strategic_insight"
status = "active"
last_updated = "{{YYYYMMDD}}" # Placeholder
version = "1.0"
tags = ["kb", "wisdom", "principle", "manager-data-product", "dependencies", "workflow-management", "artifact-flow", "quality-gates"]
related_context = [
    ".roo/commander/modes/manager-data-product/manager-data-product.mode.md",
    ".roo/commander/modes/manager-data-product/kb/README.md",
    ".roo/commander/modes/manager-data-product/kb/procedures/01-main-orchestration-flow.md",
    ".roo/rules/02-mdtm-task-standard.md" # Relevant for input/output artifacts in tasks
]
template_schema_doc = ".roo/commander/templates/modes/common/kb/wisdom/template_00_kb_wisdom.README.md"

# --- Wisdom Specific Fields (Optional) ---
principle_category = "Workflow Orchestration & Quality Management"
applicability_context = "During the planning of squad sub-tasks, when reviewing completed sub-tasks from one squad member, and when preparing input artifacts for the next squad member in the design sequence."
# supporting_evidence_or_sources = ["Value Stream Mapping concepts", "Systems Thinking in project management"]
counter_arguments_or_tradeoffs = ["Overly rigid dependency checks can slow down flow if minor imperfections are acceptable for the next phase.", "Requires good judgment on 'sufficient quality' for handoff."]
+++

# Manager Data Product: Wisdom - Recognizing & Managing Design Phase Dependencies

## 1. Core Principle / Insight

**The Data Product PoC design lifecycle is a sequential process where the output of one design phase (and its specialist squad member) becomes a critical input for the next. `manager-data-product` MUST actively recognize, manage, and ensure the quality of these dependencies and artifact handoffs to maintain a smooth, efficient, and effective workflow. A flaw or significant omission in an early phase will inevitably cascade and negatively impact subsequent phases.**

## 2. Explanation & Rationale

Each step in the Data Product Design workflow (Strategy -> Ideation -> Personas -> Data Design -> Interface Design -> PoC Plan) builds upon the previous one:

*   A weak or unclear **strategy** leads to unfocused **ideation**.
*   Poorly defined **PoC scope/features** make **persona** development difficult or irrelevant.
*   Inadequate **personas** result in a **data design** that doesn't serve user needs.
*   A flawed **data design** cripples effective **interface conceptualization**.
*   If any preceding artifact is subpar, the final **PoC plan** will be weak and lack coherence.

Actively managing these dependencies involves:
*   Ensuring the output from one squad member is fit for purpose as an input for the next.
*   Facilitating clarification if a squad member finds an input artifact insufficient or ambiguous.
*   Identifying potential bottlenecks or quality issues early.

Failure to manage these dependencies can lead to:
*   Significant rework and wasted effort by squad members.
*   Delays in the overall design lifecycle.
*   A final PoC plan that is inconsistent, incomplete, or misaligned with initial objectives.
*   Squad members being blocked or unable to perform their tasks effectively.

## 3. Application Context & Examples

`manager-data-product` must apply this wisdom at several key points in its orchestration flow:

*   **Scenario 1: Planning the sequence of MDTM sub-tasks (as per `kb/procedures/01-main-orchestration-flow.md`).**
    *   **How this wisdom applies:** Explicitly define the `input_artifacts` for each sub-task based on the `output_artifacts` of the preceding sub-task.
    *   **Example of application:** The MDTM sub-task for `data-product-ideator` MUST list the path to the `product_strategy.md` (created by `data-product-strategist`) in its `input_artifacts` field.
*   **Scenario 2: Reviewing a completed MDTM sub-task from a squad member (e.g., `product_strategy.md` from `data-product-strategist`).**
    *   **How this wisdom applies:** Before marking this phase complete in its own MDTM task and initiating the next squad member, `manager-data-product` should perform a brief quality check on the output artifact. The check is not to re-do the specialist's work, but to ensure it's coherent, complete enough for the *next* phase, and meets its acceptance criteria.
    *   **Example of application:** Review `product_strategy.md`. Are the objectives clear? Is the target audience defined? If there are glaring omissions that will block `data-product-ideator`, address them with `data-product-strategist` *before* proceeding.
*   **Scenario 3: A squad member reports being blocked or confused by an input artifact.**
    *   **How this wisdom applies:** Recognize this as a dependency issue.
    *   **Example of application:** If `data-product-poc-interface-architect` reports that the `simulated_data_schema.md` is unclear or missing key fields needed to design relevant visualizations for the target personas, `manager-data-product` must facilitate clarification with `data-product-simdata-designer` (and potentially `data-product-ux-persona-architect` if persona needs are driving the data requirements). This might involve creating a quick clarification sub-task.
*   **Scenario 4: Preparing the MDTM sub-task for the next squad member.**
    *   **How this wisdom applies:** Ensure the `input_artifacts` field in the new sub-task correctly and explicitly points to the *actual output artifact paths* from the just-completed sub-task.
    *   **Example of application:** After `data-product-ideator` completes its task and its `output_artifacts` field lists `artifacts/design_outputs/MyPoC/poc_ideation_v1.md`, the new MDTM sub-task for `data-product-ux-persona-architect` must have this exact path in its `input_artifacts`.

## 4. Supporting Evidence / Sources (Optional)

*   Principles of systems thinking (understanding interconnectedness).
*   Value stream mapping concepts (visualizing flow and dependencies).
*   Basic project management principles regarding task sequencing and input/output management.

## 5. Potential Trade-offs / Counter-Arguments (Optional)

*   **Speed vs. Thoroughness:** Performing detailed quality checks at each handoff can slow down the overall process.
    *   *Mitigation:* The Manager's review should be a "fit for purpose for the next step" check, not a deep re-analysis of the specialist's work. Trust the squad members' expertise but verify critical handoff points. Focus on clarity and completeness of the *inputs* for the next phase.
*   **Defining "Sufficient Quality":** This can be subjective.
    *   *Mitigation:* Ensure each squad member's MDTM task has clear acceptance criteria for its output artifact. The Manager checks against these.

## 6. Implications for `manager-data-product`'s Behavior

*   **Proactive Planning of Artifact Flow:** In its `kb/procedures/01-main-orchestration-flow.md`, the sequence of artifact creation and handoff must be explicitly mapped.
*   **"Gatekeeper" Mentality (Light Touch):** Act as a quality gate between phases, ensuring the output of one phase is a viable input for the next. This doesn't mean being a bottleneck, but rather a facilitator of quality flow.
*   **Clear Input/Output Specification in Sub-Tasks:** Be meticulous in defining `input_artifacts` and expected `output_artifacts` (including target paths) in all MDTM sub-tasks delegated to the squad.
*   **Facilitate Inter-Squad Clarification:** If dependency issues arise, take responsibility for helping squad members get the clarifications they need from each other or from previous phase outputs.
*   **Iterative Refinement:** If a dependency issue reveals a flaw in an earlier artifact, be prepared to guide a (hopefully minor and targeted) iteration on that earlier artifact. This links to the "Iterative PoC Development Principles."

By actively recognizing and managing these inter-phase dependencies, `manager-data-product` ensures a smoother, more efficient, and higher-quality Data Product PoC design process.