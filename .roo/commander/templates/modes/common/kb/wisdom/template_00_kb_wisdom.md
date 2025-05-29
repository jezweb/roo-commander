+++
# --- Basic Metadata (Required for KB Wisdom Files) ---
id = "KB-WISDOM-[mode_slug_uppercase]-[ShortName]-V[Version]" # Placeholder: e.g., KB-WISDOM-MDP-LEAN-POC-V1
title = "[Mode Name]: Wisdom - [Descriptive Title of the Principle/Insight]" # Placeholder
context_type = "kb_wisdom" # Fixed type for KB wisdom files
scope = "Articulates a guiding principle, best practice, or key insight on [topic] for the '[Mode Name]' (`[mode_slug]`) mode." # Placeholder
target_audience = ["[mode_slug]"] # Placeholder: The mode itself that applies this wisdom
granularity = "conceptual_guidance" # Options: "conceptual_guidance", "best_practice_summary", "strategic_insight"
status = "draft" # Default for a new wisdom article
created_date = "{{YYYYMMDD}}" # Placeholder: To be set by creating agent
last_updated = "{{TIMESTAMP_ISO_Z}}" # Placeholder: To be set by creating agent
version = "1.0" # Version of this wisdom document instance
tags = ["kb", "wisdom", "principle", "best-practice", "[mode_slug_tag]", "[topic_tag]"] # Placeholder: Add specific tags
related_context = [
    ".roo/commander/modes/[mode_slug]/[mode_slug].mode.md", # Placeholder: Link to the mode definition
    ".roo/commander/modes/[mode_slug]/kb/README.md" # Placeholder: Link to its KB Index
    # "[.roo/commander/modes/[mode_slug]/kb/skills/relevant_skill.md]", # Optional: Link to related skills
    # "[.roo/commander/modes/[mode_slug]/kb/procedures/relevant_procedure.md]" # Optional: Link to related procedures
]
template_schema_doc = ".roo/commander/templates/modes/common/kb/wisdom/template_00_kb_wisdom.README.md"

# --- Wisdom Specific Fields (Optional - for the instance, fill as needed) ---
# principle_category = "[e.g., Design Philosophy, Strategic Thinking, Risk Management, User Centricity, Communication Best Practice]" # Placeholder
# applicability_context = "[Specific situations or decision points where this wisdom is most relevant for the mode. Or remove field.]" # Placeholder or remove
# supporting_evidence_or_sources = ["[Link to external article or internal document]", "[Anecdotal project success X or remove array field]"] # Placeholder or remove
# counter_arguments_or_tradeoffs = ["[Consideration A or remove array field]", "[Tradeoff B or remove array field]"] # Placeholder or remove
+++

# [Mode Name]: Wisdom - {{ title | default: "[Specify Wisdom Title]" }}

## 1. Core Principle / Insight ✨

[Clearly and concisely state the core piece of wisdom, guiding principle, best practice, or key insight. This should be the main takeaway of this document. This is what the `[Mode Name]` (`[mode_slug]`) should internalize.]

*(Optional: Briefly mention the `principle_category` if defined in TOML and relevant here.)*

## 2. Explanation & Rationale 🧠

[Elaborate on the core principle/insight. Explain its meaning, importance, and the reasoning behind it. Why is this considered "wisdom" in this mode's domain?]
*   Why is this important for the `[Mode Name]` mode's function or decision-making?
*   What are the benefits of adhering to this principle for the mode?
*   What are the potential negative consequences if the mode ignores it?

## 3. Application Context & Examples for `[Mode Name]` 💡

[Describe specific situations, scenarios, or decision-making contexts where the `[Mode Name]` mode should apply this wisdom. Provide concrete examples of how it would influence the mode's behavior or outputs. This section should be highly tailored to the mode.]

*   **Scenario 1: [Description of a typical scenario the mode encounters]**
    *   **How this wisdom applies:** `[Explanation of how the principle guides action in this scenario]`
    *   **Example of mode behavior:** `[Concrete example of what the mode might say, do, or decide based on this wisdom]`
*   **Scenario 2: [Another relevant scenario]**
    *   **How this wisdom applies:** `[Explanation]`
    *   **Example of mode behavior:** `[Example]`

*(This often relates to `applicability_context` from TOML.)*

## 4. Supporting Evidence / Sources (Optional) 📚

[If this wisdom is derived from specific external sources, established best practices, or internal project experiences, list or link to them here. This corresponds to `supporting_evidence_or_sources` in TOML.]
*   Source 1: `[Description or link (e.g., to a specific standard or an architectural decision)]`
*   Source 2: ...

## 5. Potential Trade-offs / Counter-Arguments (Optional) ⚖️

[Acknowledge any potential downsides, limitations, trade-offs, or situations where this wisdom might not apply or needs careful balancing by the `[Mode Name]` mode. This corresponds to `counter_arguments_or_tradeoffs` in TOML.]
*   Consideration 1:
*   Trade-off 1:

## 6. Implications for `[Mode Name]`'s Behavior & Decision-Making 🚀

[Summarize how this piece of wisdom should directly influence the `[Mode Name]` mode's decision-making, planning, interaction style, or output generation when performing its tasks, especially when interpreting its rules or MDTM checklist items.]

This piece of wisdom helps guide the `[Mode Name]` mode in making more effective and strategic decisions within its domain of expertise.