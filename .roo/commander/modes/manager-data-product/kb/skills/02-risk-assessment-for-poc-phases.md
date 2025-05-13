+++
# --- Basic Metadata (Required for KB Skill Files) ---
id = "KB-SKILL-MDP-POC-PHASE-RISK-ASSESSMENT-V1"
title = "Manager Data Product: Skill - Basic Risk Assessment for PoC Design Phases"
context_type = "kb_skill"
scope = "Details a thinking process for manager-data-product to identify potential risks associated with each phase of the Data Product PoC design lifecycle and consider mitigations."
target_audience = ["manager-data-product"]
granularity = "conceptual_how_to" # As it's a thinking process
status = "active" # Assuming it's ready for use once drafted
last_updated = "{{YYYYMMDD}}"
version = "1.0"
tags = ["kb", "skill", "risk-assessment", "poc-planning", "manager-data-product", "proactive-management"]
related_context = [
    ".roo/commander/modes/manager-data-product/manager-data-product.mode.md",
    ".roo/commander/modes/manager-data-product/kb/README.md",
    ".roo/commander/modes/manager-data-product/kb/procedures/01-main-data-product-orchestration-flow.md",
    ".roo/commander/modes/manager-data-product/kb/reference/00-data-product-squad-composition.md"
]
template_schema_doc = ".roo/commander/templates/modes/common/kb/skills/template_00_kb_skill.README.md"

# --- Skill Specific Fields (Optional) ---
skill_category = "Project & Workflow Management"
# tools_or_concepts_involved = ["Dependency Analysis", "Assumption Checking", "Contingency Thinking"]
# proficiency_level_assumed = "Understanding of the PoC design lifecycle."
common_pitfalls_to_avoid = [
    "Ignoring dependencies between design phases.",
    "Assuming all inputs will be perfect and timely.",
    "Not considering potential ambiguities in requirements early on.",
    "Failing to communicate potential risks to the coordinator if significant."
]
+++

# Manager Data Product: Skill - Basic Risk Assessment for PoC Design Phases

## 1. Objective / Purpose of this Skill

To enable `manager-data-product` to proactively identify potential risks or challenges that could impact the successful and timely completion of each phase within the Data Product PoC design lifecycle. This skill helps in anticipating problems and considering simple mitigation or monitoring strategies.

## 2. When to Apply this Skill

This skill should be mentally applied by `manager-data-product`:
*   During the initial planning phase (Phase 0 of `kb/procedures/01-main-data-product-orchestration-flow.md`) when outlining the sequence of squad sub-tasks.
*   Before delegating each new MDTM sub-task to a squad member.
*   When a preceding phase experiences delays or produces unexpected outputs.

## 3. Prerequisites / Inputs Needed

*   Understanding of the overall PoC goal (from its primary MDTM task).
*   Knowledge of the current phase's objectives and the squad member responsible (from `kb/reference/00-data-product-squad-composition.md`).
*   Awareness of the expected inputs for the current phase and the outputs from the previous phase.

## 4. Step-by-Step "How-To" / Methodology (Thinking Process)

This is primarily a cognitive checklist for `manager-data-product`.

1.  **Step 1: Review Current Phase Objectives & Inputs**
    *   Detail: For the upcoming design phase (e.g., "Ideation & Scoping," "UX Persona Development"):
        *   Re-confirm its specific objectives.
        *   Identify all critical input artifacts required (e.g., "Product Strategy Document," "User Research Summary").
    *   Output of this step: Clear understanding of the phase's goal and dependencies.

2.  **Step 2: Consider Potential Input-Related Risks**
    *   Detail: Ask internally:
        *   "Are all required input artifacts available and complete from the previous phase?"
        *   "Is there any known ambiguity, incompleteness, or quality concern with these inputs that could hinder the current squad member?"
        *   "Is there a risk of delay in receiving these inputs?"
    *   Example: If the `product_strategy.md` was vague on target audience, this poses a risk for the `data-product-ux-persona-architect`.
    *   Output of this step: List of potential input-related risks.

3.  **Step 3: Consider Potential Execution Risks for the Current Phase**
    *   Detail: Ask internally, considering the specific squad member and task:
        *   "Is the scope of this phase very large or complex for a single iteration?" (Relates to `.roo/rules/06-iterative-execution-policy.md` which squad members follow).
        *   "Are there any new tools, techniques, or concepts involved in this phase that might present a learning curve or uncertainty for the squad member?"
        *   "Does this phase depend on external information or clarification that might be slow to obtain?"
        *   "Are there any known technical limitations (e.g., of simulation tools for `data-product-simdata-designer`) that might impact this phase?"
    *   Output of this step: List of potential execution-related risks.

4.  **Step 4: Consider Potential Output-Related Risks**
    *   Detail: Ask internally:
        *   "Is there a risk that the output artifact of this phase might not meet the quality or detail needed for the *subsequent* phase?"
        *   "Are the acceptance criteria for this phase's output clear enough to avoid rework?"
    *   Output of this step: List of potential output-related risks.

5.  **Step 5: Identify Simple Mitigations or Monitoring Actions**
    *   Detail: For each identified risk, consider:
        *   **Clarification:** Can I provide more context or clarify instructions in the MDTM sub-task for the squad member to mitigate this risk?
        *   **Contingency Note:** Should I add a note in my own MDTM task log to specifically monitor for this risk during the phase?
        *   **Early Check-in:** Should I plan for an earlier (conceptual) check-in or prompt the squad member for an interim update if a risk is high? (This would be managed via MDTM task communication).
        *   **Highlight Dependency:** If a risk stems from a previous phase's output, ensure this is clearly communicated if that previous phase needs adjustment (though this is more about feedback to a completed task).
    *   Output of this step: List of potential actions to take or monitor.

6.  **Step 6: Document Significant Risks & Actions (If Necessary)**
    *   Detail: If any identified risks are deemed significant (e.g., high probability or high impact on the PoC timeline/quality):
        *   Log the risk and planned monitoring/mitigation in your (the Manager's) primary MDTM task file (`Log Entries / Notes 🪵` section).
        *   If the risk is severe enough to potentially require intervention from `roo-commander` or significantly alter the PoC plan, note it for potential escalation.
    *   Output of this step: Documented risks in the Manager's MDTM task.

## 5. Best Practices / Tips for Effective Application

*   **Be Proactive:** Apply this thinking *before* a phase starts, not just when problems arise.
*   **Focus on Controllables:** Concentrate on risks that can be influenced by clearer tasking, better input management, or closer monitoring by `manager-data-product`.
*   **Don't Over-Engineer:** This is a *basic* risk assessment. The goal is to anticipate common issues, not to conduct a formal, exhaustive risk analysis for each minor step.
*   **Leverage Squad Expertise:** Trust squad members to manage risks within their own specific tasks, but be aware of inter-phase dependencies.

## 6. Expected Outcome / Deliverable from Applying this Skill

*   Increased awareness by `manager-data-product` of potential challenges in the PoC design workflow.
*   More clearly defined MDTM sub-tasks for squad members, potentially with preemptive clarifications.
*   Notes in the `manager-data-product`'s MDTM task log regarding risks being monitored.
*   Earlier identification of issues that might require escalation to `roo-commander`.

## 7. Common Pitfalls to Avoid
*(As listed in TOML)*
*   Ignoring dependencies between design phases.
*   Assuming all inputs will be perfect and timely.
*   Not considering potential ambiguities in requirements early on.
*   Failing to communicate potential significant risks to the coordinator (`roo-commander`).

This skill helps `manager-data-product` to be a more proactive and effective orchestrator by encouraging foresight and basic contingency thinking.