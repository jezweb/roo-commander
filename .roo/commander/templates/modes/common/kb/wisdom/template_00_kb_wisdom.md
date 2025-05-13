+++
# --- Basic Metadata (Required for KB Wisdom Files) ---
id = "KB-WISDOM-[MODE_SLUG_UPPERCASE]-[ShortName]-V[Version]" # e.g., KB-WISDOM-MDP-LEAN-POC-PRINCIPLES-V1
title = "[Mode Name]: Wisdom - [Descriptive Title of the Principle/Insight]"
context_type = "kb_wisdom" # Fixed type for KB wisdom files
scope = "Articulates a guiding principle, best practice, or key insight on [topic] for the '[Mode Name]' ([mode_slug]) mode."
target_audience = ["[mode_slug]"] # The mode itself that applies this wisdom
granularity = "conceptual_guidance" # Or "best_practice_summary", "strategic_insight"
status = "draft" # Initial status: "draft", "active"
last_updated = "{{YYYYMMDD}}" # Placeholder for date of last update
version = "1.0" # Version of this wisdom document when instantiated
tags = ["kb", "wisdom", "principle", "best-practice", "[mode_slug_tag]"] # Add specific tags related to the content
related_context = [
    ".roo/commander/modes/[mode_slug]/[mode_slug].mode.md", # Link to the mode definition
    ".roo/commander/modes/[mode_slug]/kb/README.md" # Link to its KB Index
    # Link to any KB procedures or skills that might be informed by this wisdom
]
template_schema_doc = ".roo/commander/templates/modes/common/kb/wisdom/template_00_kb_wisdom.README.md" # Path to its own schema

# --- Wisdom Specific Fields (Optional) ---
# principle_category = "[e.g., Design Philosophy, Strategic Thinking, Risk Management, User Centricity]"
# applicability_context = "[Specific situations or decision points where this wisdom is most relevant]"
# supporting_evidence_or_sources = ["[Link to external article]", "[Anecdotal project success X]"]
# counter_arguments_or_tradeoffs = ["[Consideration A]", "[Tradeoff B]"]
+++

# [Mode Name]: Wisdom - {{ title | default: "[Specify Wisdom Title]" }}

## 1. Core Principle / Insight

[Clearly and concisely state the core piece of wisdom, guiding principle, best practice, or key insight. This should be the main takeaway of this document.]

*(Optional: Briefly mention the `principle_category` if defined in TOML.)*

## 2. Explanation & Rationale

[Elaborate on the core principle/insight. Explain its meaning, importance, and the reasoning behind it. Why is this considered "wisdom" in this mode's domain?]
*   Why is this important for the `[Mode Name]` mode's function?
*   What are the benefits of adhering to this principle?
*   What are the potential negative consequences of ignoring it?

## 3. Application Context & Examples

[Describe specific situations, scenarios, or decision-making contexts where the `[Mode Name]` mode should apply this wisdom. Provide concrete examples if possible.]

*   **Scenario 1: [Description of scenario]**
    *   How this wisdom applies: `[Explanation]`
    *   Example of application: `[Concrete example]`
*   **Scenario 2: [Description of scenario]**
    *   How this wisdom applies: `[Explanation]`

*(This often relates to `applicability_context` from TOML.)*

## 4. Supporting Evidence / Sources (Optional)

[If this wisdom is derived from specific sources, experiences, or established best practices, list or link to them here. This corresponds to `supporting_evidence_or_sources` in TOML.]
*   Source 1: [Description or link]
*   Source 2: ...

## 5. Potential Trade-offs / Counter-Arguments (Optional)

[Acknowledge any potential downsides, limitations, trade-offs, or situations where this wisdom might not apply or needs careful consideration. This corresponds to `counter_arguments_or_tradeoffs` in TOML.]
*   Consideration 1:
*   Trade-off 1:

## 6. Implications for `[Mode Name]`'s Behavior

[How should this piece of wisdom directly influence the `[Mode Name]` mode's decision-making, planning, or interaction style when performing its tasks?]

This piece of wisdom helps guide the `[Mode Name]` mode in making more effective and strategic decisions within its domain.