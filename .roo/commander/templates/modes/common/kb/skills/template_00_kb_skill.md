+++
# --- Basic Metadata (Required for KB Skill Files) ---
id = "KB-SKILL-[mode_slug_uppercase]-[ShortName]-V[Version]" # Placeholder: e.g., KB-SKILL-DPS-SWOT-ANALYSIS-V1
title = "[Mode Name]: Skill - [Descriptive Title of the Skill/Technique]" # Placeholder
context_type = "kb_skill" # Fixed type for KB skill files
scope = "Details the skill/technique of [skill_name] for the '[Mode Name]' (`[mode_slug]`) mode, including how-to steps and best practices." # Placeholder
target_audience = ["[mode_slug]"] # Placeholder: The mode itself that possesses and uses this skill
granularity = "detailed_how_to" # Options: "detailed_how_to", "technique_guide", "methodology_steps"
status = "draft" # Default for a new skill article
created_date = "{{YYYYMMDD}}" # Placeholder: To be set by creating agent
last_updated = "{{TIMESTAMP_ISO_Z}}" # Placeholder: To be set by creating agent
version = "1.0" # Version of this skill document instance
tags = ["kb", "skill", "how-to", "[mode_slug_tag]", "[skill_domain_tag]"] # Placeholder: Add specific tags
related_context = [
    ".roo/commander/modes/[mode_slug]/[mode_slug].mode.md", # Placeholder: Link to the mode definition
    ".roo/commander/modes/[mode_slug]/kb/README.md", # Placeholder: Link to its KB Index
    # "[.roo/commander/modes/[mode_slug]/kb/procedures/relevant_procedure.md]", # Optional: Link to procedures that use this skill
    # "[.roo/commander/modes/[mode_slug]/kb/wisdom/related_principle.md]" # Optional: Link to wisdom that informs this skill
]
template_schema_doc = ".roo/commander/templates/modes/common/kb/skills/template_00_kb_skill.README.md"

# --- Skill Specific Fields (Optional - for the instance, fill as needed) ---
# skill_category = "[e.g., Strategic Analysis, Data Modeling, UI Prototyping, Requirement Elicitation, File Manipulation]" # Placeholder
# tools_or_concepts_involved = ["[ToolName/Concept1 or remove array field]", "[ToolName/Concept2 or remove array field]"] # Placeholder or remove
# proficiency_level_assumed = "[e.g., Basic understanding of X required to apply this skill. Or remove field.]" # Placeholder or remove
# common_pitfalls_to_avoid = ["[Pitfall 1 or remove array field]", "[Pitfall 2 or remove array field]"] # Placeholder or remove
+++

# [Mode Name]: Skill - {{ title | default: "[Specify Skill Title]" }}

## 1. Objective / Purpose of this Skill 🎯

[Clearly state what this skill enables the `[Mode Name]` (`[mode_slug]`) mode to *do* or *achieve*. What specific problem does it solve or what capability does it provide within its domain? This should be an actionable capability.]

*(Optional: Briefly mention the `skill_category` if defined in TOML and relevant here.)*

## 2. When to Apply this Skill ⏱️

[Describe the specific situations, triggers, or task requirements (e.g., from an MDTM checklist item or a step in a KB procedure) that would lead the `[Mode Name]` mode to utilize this skill. When is it most relevant or effective?]

## 3. Prerequisites / Inputs Needed 📥

[List any information, data, artifacts (with expected paths if applicable, e.g., from `input_artifacts` of an MDTM task), or prior states that are necessary for the `[Mode Name]` mode to successfully apply this skill.]
*   Prerequisite 1: (e.g., "A validated `product_strategy.md` file path.")
*   Prerequisite 2: (e.g., "Clear definition of target user segments from a persona document.")
*   Prerequisite 3: (e.g., "Access to `[specific_tool_if_intrinsic]` tool via `execute_command`.")

## 4. Step-by-Step "How-To" / Methodology 🛠️

[This is the core of the skill document. Provide a detailed, sequential, step-by-step guide on how the `[Mode Name]` mode should perform the technique or apply the methodology. Use numbered lists for clarity. Be explicit about actions, considerations, and decision points. If this skill involves using specific tools (even abstractly described), detail those interactions.]

1.  **Step 1: [Action/Phase Name]**
    *   Detail: [Explanation of what to do in this step. Mention any `tools_or_concepts_involved` from TOML if applicable. Key considerations for the mode.]
    *   Example: `[If applicable, a small, concrete example illustrating this step from the mode's perspective.]`
    *   Output of this step: `[What is produced or what state is achieved by the mode after this step?]`

2.  **Step 2: [Action/Phase Name]**
    *   Detail: ...
    *   Example: ...
    *   Output of this step: ...

3.  **Step N: [Action/Phase Name]**
    *   Detail: ...
    *   Example: ...
    *   Output of this step: ...

## 5. Best Practices / Tips for Effective Application ✨

[Share any best practices, tips, or nuances that enhance the effectiveness of this skill when applied by the `[Mode Name]` mode.]
*   Tip 1: (e.g., "Always validate input X before proceeding.")
*   Tip 2: (e.g., "When generating Y, ensure it adheres to Z standard.")

## 6. Expected Outcome / Deliverable from Applying this Skill 📤

[What is the typical tangible output or result when this skill is successfully applied by the `[Mode Name]` mode? This might be a specific section of a larger artifact, a particular type of analysis, a generated file, or a well-formed recommendation/decision.]

## 7. Common Pitfalls to Avoid (Optional) ⚠️

[If `common_pitfalls_to_avoid` is defined in TOML, list and elaborate on them here. What common mistakes should the `[Mode Name]` mode avoid when applying this skill?]
*   Pitfall 1: `[Description and how the mode should avoid it]`
*   Pitfall 2: ...

This skill enables `[Mode Name]` to effectively `[reiterate primary benefit/action of the skill]`.