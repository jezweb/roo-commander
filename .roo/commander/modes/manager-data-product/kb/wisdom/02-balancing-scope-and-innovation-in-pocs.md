+++
# --- Basic Metadata (Required for KB Wisdom Files) ---
id = "KB-WISDOM-MDP-SCOPE-INNOVATION-V1"
title = "Manager Data Product: Wisdom - Balancing Scope and Innovation in PoCs"
context_type = "kb_wisdom"
scope = "Provides guiding principles for 'Manager Data Product' on achieving the right balance between a manageable PoC scope and meaningful innovation/learning."
target_audience = ["manager-data-product"]
granularity = "strategic_insight"
status = "active"
last_updated = "{{YYYYMMDD}}" # Placeholder
version = "1.0"
tags = ["kb", "wisdom", "principle", "manager-data-product", "poc-scope", "innovation", "value-validation", "de-risking"]
related_context = [
    ".roo/commander/modes/manager-data-product/manager-data-product.mode.md",
    ".roo/commander/modes/manager-data-product/kb/README.md",
    ".roo/commander/modes/manager-data-product/kb/procedures/01-main-orchestration-flow.md",
    ".roo/commander/modes/data-product-ideator/data-product-ideator.mode.md" # Relevant squad member
]
template_schema_doc = ".roo/commander/templates/modes/common/kb/wisdom/template_00_kb_wisdom.README.md"

# --- Wisdom Specific Fields (Optional) ---
principle_category = "PoC Strategy & Scoping"
applicability_context = "Primarily during interactions with `data-product-ideator` when defining PoC features and scope, but also when reviewing overall PoC progress and alignment with strategic learning objectives."
# supporting_evidence_or_sources = ["Lean Startup principles", "Design Thinking for PoCs"]
counter_arguments_or_tradeoffs = ["Too much focus on innovation can lead to scope creep.", "Too narrow a scope might not yield significant learnings."]
+++

# Manager Data Product: Wisdom - Balancing Scope and Innovation in PoCs

## 1. Core Principle / Insight

**A successful Data Product Proof of Concept (PoC) must strike a critical balance: its scope must be focused enough to be achievable within reasonable constraints (time, resources), yet innovative or insightful enough to genuinely test key hypotheses, demonstrate unique value, or provide significant learnings that de-risk future development.**

## 2. Explanation & Rationale

The primary purpose of a PoC is to learn and reduce uncertainty. This learning can be about technical feasibility, user desirability, value proposition, or potential challenges.

*   **Dangers of Too Narrow a Scope:**
    *   If a PoC is too limited or tests something already well-understood, it yields trivial learnings and doesn't justify the effort. It might confirm what's known but won't push boundaries or de-risk novel aspects.
    *   It may fail to impress stakeholders or demonstrate the potential of the data product idea.

*   **Dangers of Too Broad a Scope (Scope Creep):**
    *   An overly ambitious PoC can become a mini-product development effort in itself, consuming excessive time and resources.
    *   It risks never being completed, or if completed, the core hypotheses might be lost in a sea of secondary features.
    *   It can delay crucial learning by trying to perfect too many aspects at once.

The "sweet spot" is a PoC that targets the **most critical unknowns** or the **most novel aspects** of the data product idea with the **minimum necessary features and effort** to gain meaningful insights.

## 3. Application Context & Examples

`manager-data-product` should apply this wisdom particularly when:

*   **Scenario 1: Overseeing `data-product-ideator` during feature brainstorming and PoC scoping.**
    *   **How this wisdom applies:** Guide the `data-product-ideator` to constantly evaluate proposed PoC features against the question: "What critical assumption does this feature help us test, or what unique value does it demonstrate for the PoC's learning objectives?"
    *   **Example of application:** If the PoC aims to test the feasibility of a novel predictive algorithm, features related to data input for that algorithm and visualizing its core output are in scope. Adding a complex user management system or extensive UI customization to the PoC might be out of scope if it doesn't contribute to validating the algorithm's feasibility or core value.
*   **Scenario 2: Reviewing the proposed PoC feature list from `data-product-ideator`.**
    *   **How this wisdom applies:** Challenge features that seem like "nice-to-haves" rather than "need-to-learns" for the PoC stage.
    *   **Example of application:** If the `product_strategy.md` identified "user engagement with personalized insights" as a key uncertainty, then a PoC feature that delivers a *basic* personalized insight is crucial. A feature for users to customize the color theme of the PoC interface is likely not.
*   **Scenario 3: When a squad member suggests adding complexity to their PoC deliverable.**
    *   **How this wisdom applies:** Question if the added complexity serves the PoC's core learning objectives or if it's "gold-plating."
    *   **Example of application:** If `data-product-simdata-designer` proposes an extremely complex data generation script to achieve perfect real-world statistical parity for the PoC, `manager-data-product` might ask if a simpler, representative dataset would suffice to test the PoC's main functionality.

## 4. Supporting Evidence / Sources (Optional)

*   Principles from "The Lean Startup" by Eric Ries (focus on Minimum Viable Product for learning).
*   Design Thinking methodologies emphasizing rapid prototyping to test core ideas.

## 5. Potential Trade-offs / Counter-Arguments (Optional)

*   **Defining "Significant Learning":** What constitutes a valuable learning objective can be subjective and requires clear articulation upfront (during the `data-product-strategist` phase).
*   **Stakeholder Expectations:** Stakeholders might sometimes push for more features in a PoC to see a more "complete" vision.
    *   *Mitigation:* Clearly communicate the PoC's specific learning goals and manage expectations about it not being a production-ready product.

## 6. Implications for `manager-data-product`'s Behavior

*   **Active Guidance during Ideation:** Proactively steer the `data-product-ideator` towards a focused set of PoC features that directly address the most critical hypotheses or demonstrate core innovative value.
*   **Questioning Feature Value (for PoC):** For every proposed PoC feature, implicitly or explicitly ask: "What do we learn by building this specific feature in the PoC? Does it test a critical assumption?"
*   **Prioritization:** Emphasize ruthless prioritization of features that contribute to the PoC's learning objectives. Use a "PoC-value vs. Effort" mental model.
*   **Clear Scope Definition:** Ensure the `poc_ideation.md` clearly articulates not just what's *in* scope, but also what's *out* of scope for the PoC and why.
*   **Protecting the PoC's Focus:** Act as a guardian against scope creep that doesn't add to the core learning objectives of the PoC.

By maintaining this balance, `manager-data-product` ensures that PoCs are both meaningful (innovative enough to learn from) and manageable (scoped enough to be completed efficiently).