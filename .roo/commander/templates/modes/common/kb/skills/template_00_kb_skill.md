+++
# --- Basic Metadata (Required for KB Skill Files) ---
id = "KB-SKILL-[MODE_SLUG_UPPERCASE]-[ShortName]-V[Version]" # e.g., KB-SKILL-DPS-SWOT-ANALYSIS-V1
title = "[Mode Name]: Skill - [Descriptive Title of the Skill/Technique]"
context_type = "kb_skill" # Fixed type for KB skill files
scope = "Details the skill/technique of [skill_name] for the '[Mode Name]' ([mode_slug]) mode, including how-to steps and best practices."
target_audience = ["[mode_slug]"] # The mode itself that possesses and uses this skill
granularity = "detailed_how_to" # Or "technique_guide", "methodology_steps"
status = "draft" # Initial status: "draft", "active"
last_updated = "{{YYYYMMDD}}" # Placeholder for date of last update
version = "1.0" # Version of this skill document when instantiated
tags = ["kb", "skill", "how-to", "[mode_slug_tag]"] # Add specific tags related to the skill's content or domain
related_context = [
    ".roo/commander/modes/[mode_slug]/[mode_slug].mode.md", # Link to the mode definition
    ".roo/commander/modes/[mode_slug]/kb/README.md" # Link to its KB Index
    # Link to any KB procedure that might call upon this skill
    # Link to any KB wisdom article that provides principles behind this skill
]
template_schema_doc = ".roo/commander/templates/modes/common/kb/skills/template_00_kb_skill.README.md" # Path to its own schema

# --- Skill Specific Fields (Optional) ---
# skill_category = "[e.g., Strategic Analysis, Data Modeling, UI Prototyping, Requirement Elicitation]"
# tools_or_concepts_involved = ["[ToolName/Concept1]", "[ToolName/Concept2]"]
# proficiency_level_assumed = "[e.g., Basic understanding of X required to apply this skill]"
# common_pitfalls_to_avoid = ["[Pitfall 1]", "[Pitfall 2]"]
+++

# [Mode Name]: Skill - {{ title | default: "[Specify Skill Title]" }}

## 1. Objective / Purpose of this Skill

[Clearly state what this skill enables the `[Mode Name]` mode to do or achieve. What specific problem does it solve or what capability does it provide within its domain?]

*(Optional: Briefly mention the `skill_category` if defined in TOML.)*

## 2. When to Apply this Skill

[Describe the specific situations, triggers, or task requirements that would lead the `[Mode Name]` mode to utilize this skill. When is it most relevant or effective?]

## 3. Prerequisites / Inputs Needed

[List any information, data, artifacts, or prior states that are necessary for the `[Mode Name]` mode to successfully apply this skill.]
*   Prerequisite 1: (e.g., "Completed Product Strategy Document")
*   Prerequisite 2: (e.g., "Clear definition of target user segments")

## 4. Step-by-Step "How-To" / Methodology

[This is the core of the skill document. Provide a detailed, step-by-step guide on how to perform the technique or apply the methodology. Use numbered lists for clarity. Be explicit about actions, considerations, and decision points.]

1.  **Step 1: [Action/Phase Name]**
    *   Detail: [Explanation of what to do in this step, tools/concepts involved, key considerations.]
    *   Example: `[If applicable, a small, concrete example illustrating this step.]`
    *   Output of this step: `[What is produced or what state is achieved?]`

2.  **Step 2: [Action/Phase Name]**
    *   Detail: ...
    *   Example: ...
    *   Output of this step: ...

3.  **Step N: [Action/Phase Name]**
    *   Detail: ...
    *   Example: ...
    *   Output of this step: ...

## 5. Best Practices / Tips for Effective Application

[Share any best practices, tips, or nuances that enhance the effectiveness of this skill.]
*   Tip 1:
*   Tip 2:

## 6. Expected Outcome / Deliverable from Applying this Skill

[What is the typical tangible output or result when this skill is successfully applied? This might be a specific section of a larger artifact, a particular type of analysis, or a well-formed recommendation.]

## 7. Common Pitfalls to Avoid (Optional)

[If `common_pitfalls_to_avoid` is defined in TOML, list and elaborate on them here. What common mistakes should the mode avoid when applying this skill?]
*   Pitfall 1: [Description and how to avoid]
*   Pitfall 2: ...

This skill enables `[Mode Name]` to effectively `[reiterate primary benefit of the skill]`.