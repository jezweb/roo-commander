+++
# --- Basic Metadata (Required for KB Prompt Files) ---
id = "KB-PROMPT-[MODE_SLUG_UPPERCASE]-[ShortName]-V[Version]" # e.g., KB-PROMPT-RC-INITIAL-OPTIONS-V1
title = "[Mode Name]: Prompt - [Descriptive Title of the Prompt's Purpose]"
context_type = "kb_prompt_text" # Fixed type for KB prompt files
scope = "Provides structured text for the '[Mode Name]' ([mode_slug]) mode to use when [situation where prompt is used, e.g., 'presenting initial options to the user', 'requesting clarification on X']."
target_audience = ["[mode_slug]"] # The mode itself that uses this prompt text
granularity = "specific_prompt_component" # Or "full_prompt_dialogue"
status = "draft" # Initial status: "draft", "active"
last_updated = "{{YYYYMMDD}}" # Placeholder for date of last update
version = "1.0" # Version of this prompt document when instantiated
tags = ["kb", "prompt", "prompt-engineering", "[mode_slug_tag]"] # Add specific tags related to the prompt's content or purpose
related_context = [
    ".roo/commander/modes/[mode_slug]/[mode_slug].mode.md", # Link to the mode definition
    # Link to any KB procedure that references or uses this prompt
    # e.g., ".roo/commander/modes/[mode_slug]/kb/procedures/01-initial-interaction.md"
]
template_schema_doc = ".roo/commander/templates/modes/common/kb/prompts/template_00_kb_prompt.README.md" # Path to its own schema

# --- Prompt Specific Fields (Optional) ---
# prompt_type = "ask_followup_question" # e.g., "ask_followup_question", "delegation_message_template", "user_greeting"
# expected_user_response_format = "[e.g., Selection from list, Free-form text, Yes/No]"
# placeholders = ["[placeholder1]", "[placeholder2]"] # List of placeholders used in the prompt text that need dynamic filling
+++

# [Mode Name]: Prompt - {{ title | default: "[Specify Prompt Title]" }}

## 1. Objective / Purpose of this Prompt

[Clearly state what this prompt is trying to achieve. What information is it trying to elicit from the user, or what action is it trying to guide them towards? What is the context in which the `[Mode Name]` mode will use this prompt text?]

## 2. Prompt Components

[This section contains the structured text components for the prompt. Use sub-headings for different parts of a complex prompt, like a question and its suggested follow-ups for `ask_followup_question`.]

### 2.1. Main Question / Statement Text:

```text
[The primary text of the prompt, question, or statement. Use {{placeholders}} for dynamic content that the mode will fill in at runtime.]
```

### 2.2. Suggested Follow-up Options (If Applicable, e.g., for `ask_followup_question`):

*(Each suggestion should be on a new line or clearly delineated if the mode needs to parse them into a list.)*

*   `[Suggestion 1 Text - may include {{placeholders}}]`
    *   *(Optional: Note on what selecting this option implies or what action the mode should take.)*
*   `[Suggestion 2 Text - may include {{placeholders}}]`
    *   *(Optional: Note on implication.)*
*   `[Default/Cancel Option Text, e.g., "⬅️ Go Back", "❌ Cancel"]`

### 2.3. Additional Instructions / Formatting Notes for the Mode (Optional):

[Any specific instructions for the `[Mode Name]` mode on how to use or format this prompt text, how to handle responses, or how to fill in placeholders.]
*   Placeholder `{{placeholder1}}` should be replaced with [description of what it represents].
*   If the user selects "[Suggestion 1 Text]", proceed to [next step or KB procedure].

## 3. Example Invocation (Conceptual)

[Optional: Show how the `[Mode Name]` might conceptually use this prompt text with a tool.]

**Example for `ask_followup_question`:**
```xml
<ask_followup_question>
    <question>[Text from Section 2.1, with placeholders filled]</question>
    <follow_up>
        <suggest>[Suggestion 1 Text, with placeholders filled]</suggest>
        <suggest>[Suggestion 2 Text, with placeholders filled]</suggest>
        <suggest>[Default/Cancel Option Text]</suggest>
    </follow_up>
</ask_followup_question>
```

This prompt structure helps the `[Mode Name]` mode maintain consistent and effective communication.