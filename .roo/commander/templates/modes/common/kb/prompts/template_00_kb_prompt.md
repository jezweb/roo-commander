+++
# --- Basic Metadata (Required for KB Prompt Files) ---
id = "KB-PROMPT-[mode_slug_uppercase]-[ShortName]-V[Version]" # Placeholder: e.g., KB-PROMPT-RC-INITIAL-OPTIONS-V1
title = "[Mode Name]: Prompt - [Descriptive Title of the Prompt's Purpose]" # Placeholder
context_type = "kb_prompt_text" # Fixed type for KB prompt files
scope = "Provides structured text for the '[Mode Name]' (`[mode_slug]`) mode to use when [situation where prompt is used, e.g., 'presenting initial options to the user', 'requesting clarification on X']." # Placeholder
target_audience = ["[mode_slug]"] # Placeholder: The mode itself that uses this prompt text
granularity = "specific_prompt_component" # Options: "specific_prompt_component", "full_prompt_dialogue", "message_template"
status = "draft" # Default for a new prompt article
created_date = "{{YYYYMMDD}}" # Placeholder: To be set by creating agent
last_updated = "{{TIMESTAMP_ISO_Z}}" # Placeholder: To be set by creating agent
version = "1.0" # Version of this prompt document instance
tags = ["kb", "prompt", "prompt-engineering", "[mode_slug_tag]", "[prompt_purpose_tag]"] # Placeholder: Add specific tags
related_context = [
    ".roo/commander/modes/[mode_slug]/[mode_slug].mode.md", # Placeholder: Link to the mode definition
    # "[.roo/commander/modes/[mode_slug]/kb/procedures/relevant_procedure.md]" # Optional: Link to any KB procedure that references or uses this prompt
]
template_schema_doc = ".roo/commander/templates/modes/common/kb/prompts/template_00_kb_prompt.README.md"

# --- Prompt Specific Fields (Optional - for the instance, fill as needed) ---
# prompt_type = "ask_followup_question" # Options: "ask_followup_question", "information_display", "confirmation_request", "delegation_message_template", "user_greeting", "error_message"
# expected_user_response_format = "[e.g., Selection from list, Free-form text, Yes/No. Or remove field.]" # Placeholder or remove
# placeholders_used = ["[placeholder1]", "[placeholder2 or remove array field]"] # List of {{placeholders}} used in the prompt text that need dynamic filling. Or remove field.
+++

# [Mode Name]: Prompt - {{ title | default: "[Specify Prompt Title]" }}

## 1. Objective / Purpose of this Prompt 🎯

[Clearly state what this prompt is trying to achieve when used by the `[Mode Name]` (`[mode_slug]`) mode. What information is it trying to elicit from the user, or what action is it trying to guide them towards? What is the context in which the mode will use this prompt text?]

*(Optional: Briefly mention the `prompt_type` if defined in TOML and relevant here.)*

## 2. Prompt Components 💬

[This section contains the structured text components for the prompt. Use sub-headings for different parts of a complex prompt, like a question and its suggested follow-ups for `ask_followup_question`.]

### 2.1. Main Question / Statement Text:

```text
[The primary text of the prompt, question, or statement. Use {{PLACEHOLDER_NAME}} for dynamic content that the mode will fill in at runtime. Ensure placeholders are listed in the TOML `placeholders_used` field if that field is used.]
```

### 2.2. Suggested Follow-up Options (If Applicable, e.g., for `ask_followup_question`):

*(Each suggestion should be on a new line or clearly delineated if the mode needs to parse them into a list for a tool.)*

*   `[Suggestion 1 Text - may include {{PLACEHOLDER_NAME}}]`
    *   *(Optional: Note on what selecting this option implies or what action the mode should take.)*
*   `[Suggestion 2 Text - may include {{PLACEHOLDER_NAME}}]`
    *   *(Optional: Note on implication.)*
*   `[Default/Cancel Option Text, e.g., "⬅️ Go Back", "❌ Cancel", "None of the above"]`

### 2.3. Additional Instructions / Formatting Notes for `[Mode Name]` (Optional):

[Any specific instructions for the `[Mode Name]` mode on how to use or format this prompt text, how to handle responses, or how to fill in placeholders. This helps the mode use the prompt effectively.]
*   Placeholder `{{PLACEHOLDER_NAME_1}}` should be replaced with [description of what it represents and where the mode gets this data].
*   If the user selects "[Suggestion 1 Text]", the mode should then proceed to [next step or consult KB procedure X].

## 3. Example Invocation (Conceptual - Optional) 🎬

[Optional: Show how the `[Mode Name]` might conceptually use this prompt text with a tool, especially if it's for `ask_followup_question`.]

**Example for `ask_followup_question`:**
```xml
<ask_followup_question>
    <question>[Text from Section 2.1, with {{PLACEHOLDERS}} filled by the mode]</question>
    <follow_up>
        <suggest>[Suggestion 1 Text, with {{PLACEHOLDERS}} filled]</suggest>
        <suggest>[Suggestion 2 Text, with {{PLACEHOLDERS}} filled]</suggest>
        <suggest>[Default/Cancel Option Text]</suggest>
    </follow_up>
</ask_followup_question>
```

This prompt structure helps the `[Mode Name]` mode maintain consistent and effective communication.