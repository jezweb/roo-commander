+++
# --- Basic Metadata (Required for KB Wisdom Files) ---
id = "KB-WISDOM-MDP-ITERATIVE-POC-V1"
title = "Manager Data Product: Wisdom - Iterative PoC Development Principles"
context_type = "kb_wisdom" # Fixed type for KB wisdom files
scope = "Articulates the guiding principle of embracing iteration throughout the Data Product PoC design lifecycle for the 'Manager Data Product' (manager-data-product) mode."
target_audience = ["manager-data-product"] # The mode itself that applies this wisdom
granularity = "conceptual_guidance"
status = "active"
last_updated = "{{YYYYMMDD}}" # Placeholder for date of last update
version = "1.0"
tags = ["kb", "wisdom", "principle", "best-practice", "manager-data-product", "iterative-development", "poc", "agile"]
related_context = [
    ".roo/commander/modes/manager-data-product/manager-data-product.mode.md",
    ".roo/commander/modes/manager-data-product/kb/README.md",
    ".roo/commander/modes/manager-data-product/kb/procedures/01-main-orchestration-flow.md" # This wisdom informs the orchestration flow
]
template_schema_doc = ".roo/commander/templates/modes/common/kb/wisdom/template_00_kb_wisdom.README.md"

# --- Wisdom Specific Fields (Optional) ---
principle_category = "PoC Design Philosophy"
applicability_context = "All phases of PoC design, especially during planning, scope definition, and when squad members are working on deliverables."
# supporting_evidence_or_sources = []
# counter_arguments_or_tradeoffs = ["Risk of premature conclusions if iterations are too shallow.", "Requires clear communication about the 'good enough' for each phase."]
+++

# Manager Data Product: Wisdom - Iterative PoC Development Principles

## 1. Core Principle / Insight

**Embrace an iterative approach throughout the entire Data Product Proof of Concept (PoC) design lifecycle. Prioritize learning, adaptation, and validating core assumptions quickly over attempting to achieve perfection in any single phase or artifact in the initial pass.**

## 2. Explanation & Rationale

The design of a Data Product PoC is an exercise in discovery and de-risking. An iterative mindset, even during the design and planning stages, offers significant benefits:

*   **Reduces Risk:** By breaking down the design into phases and producing tangible (even if draft) artifacts at each step (strategy, ideation, personas, etc.), we can identify misunderstandings, flawed assumptions, or unworkable ideas earlier. This prevents investing significant effort based on a faulty foundation.
*   **Facilitates Early Feedback (Conceptual):** While the PoC itself isn't built yet, the design artifacts from each phase can be reviewed. This allows for conceptual feedback and course correction much earlier than waiting for a single, monolithic design document.
*   **Promotes Adaptability:** Requirements and understanding often evolve as we delve deeper into a problem. Iteration allows the design to adapt to new insights.
*   **Focuses on Learning:** Each phase and its output (e.g., `product_strategy.md`, `poc_ideation.md`) should be viewed as an opportunity to learn more about the problem, the user, and the potential solution. The goal of an early PoC design isn't a perfect final specification, but a sufficiently robust plan to validate key hypotheses.
*   **Manages Complexity:** Breaking the design process into sequential, iterative steps managed by specialist squad members makes the overall complexity more manageable.

Ignoring iteration can lead to a "waterfall" design approach where significant flaws are only discovered late in the process, resulting in wasted effort and a PoC that may not address the right problems or test the most critical assumptions.

## 3. Application Context & Examples

This principle applies throughout the workflow orchestrated by `manager-data-product`:

*   **Scenario 1: Initial PoC Planning (with `roo-commander` or during self-planning)**
    *   **How this wisdom applies:** When defining the overall scope of the PoC design task, recognize that the outputs of early phases (e.g., strategy) will inform and potentially reshape the inputs for later phases.
    *   **Example of application:** The initial scope for data simulation might be broad, but after persona development, it might become clear that only a subset of data is needed to test the core hypothesis for those specific users in the PoC.
*   **Scenario 2: Squad Member Execution (e.g., `data-product-strategist` working on `product_strategy.md`)**
    *   **How this wisdom applies:** The goal is to produce a *good enough* strategy document that allows the `data-product-ideator` to proceed effectively. It doesn't need to be the ultimate, final strategy for a full product, but rather the strategy *for the PoC*.
    *   **Example of application:** If the `data-product-strategist` is spending excessive time perfecting minor wording on a secondary objective, `manager-data-product` might guide it to finalize the core elements and move on, noting that refinements can occur in a later iteration if the PoC proves viable.
*   **Scenario 3: Scope Creep During Ideation (`data-product-ideator`)**
    *   **How this wisdom applies:** If the ideation phase starts to expand the PoC scope significantly beyond what's testable or relevant to the core learning objectives.
    *   **Example of application:** `manager-data-product` should use this principle to guide the `data-product-ideator` to focus on a minimal set of features that validate the most critical assumptions, deferring other interesting ideas for future iterations or a later MVP.
*   **Scenario 4: Reviewing Squad Member Outputs**
    *   **How this wisdom applies:** When `manager-data-product` reviews an artifact from a squad member, the focus should be: "Is this sufficient and clear enough for the *next phase* of the PoC design?" rather than "Is this a perfect, exhaustive document?"
    *   **Example of application:** The first draft of personas might identify key user types. This is enough for the data designer to start thinking about relevant data, even if deeper persona nuances are explored later.

## 4. Supporting Evidence / Sources (Optional)

*   Agile development methodologies (Lean Startup, Scrum) emphasize iterative development and learning cycles. These principles can be adapted to the design phase of a PoC.

## 5. Potential Trade-offs / Counter-Arguments (Optional)

*   **Risk of Premature Conclusions:** If iterations are too shallow or key considerations are consistently deferred, the final PoC plan might lack necessary depth.
    *   *Mitigation:* Ensure each phase has clear minimum acceptance criteria.
*   **Communication Overhead:** Iteration requires clear communication about what "good enough" means for each phase to avoid rework if a previous phase's output is insufficient.
    *   *Mitigation:* Well-defined MDTM tasks with clear acceptance criteria for each squad member.

## 6. Implications for `manager-data-product`'s Behavior

*   **Task Definition:** When creating MDTM sub-tasks for squad members, emphasize producing artifacts that are "complete enough for the next step" rather than "perfect."
*   **Monitoring & Guidance:** If a squad member appears to be over-perfecting or getting stuck, gently guide them towards completing the core requirements for their phase to enable the workflow to proceed.
*   **Feedback Loop:** Encourage a mindset where feedback on an artifact from one phase can inform minor adjustments in subsequent phases, rather than requiring a full restart of previous phases unless absolutely necessary.
*   **Prioritization:** Continuously evaluate if the work being done by the squad aligns with the core learning objectives of the PoC, and de-prioritize activities that don't contribute directly to this.
*   **Reporting:** When reporting progress to `roo-commander`, highlight key learnings from each iterative phase.

This iterative principle helps `manager-data-product` guide the squad towards efficiently developing a focused and valuable Data Product PoC plan.