# Documentation: Template `template_00_kb_prompt.md`

## 1. Purpose

This template defines the standard structure for creating **Knowledge Base (KB) Prompt documents**. These documents are stored within a mode's `kb/prompts/` directory and contain structured text that the mode uses to construct dynamic prompts for user interaction (e.g., via the `ask_followup_question` tool) or for formulating messages to other modes.

Storing prompt texts in dedicated KB files allows for:
*   Easy updates to wording without changing the mode's core logic or rules.
*   Consistency in communication style.
*   Better organization of conversational elements.
*   Potential for localization or A/B testing of prompts in the future.

## 2. Usage

1.  **Copy Template:** When creating a new prompt definition for a mode's KB by an agent like `meta-kb-editor` or a human developer:
    *   Copy `[.roo/commander/templates/modes/common/kb/prompts/template_00_kb_prompt.md](.roo/commander/templates/modes/common/kb/prompts/template_00_kb_prompt.md)` to the relevant mode's `kb/prompts/` directory (e.g., `[.roo/commander/modes/roo-commander/kb/prompts/]`).
2.  **Rename File:** Rename the copied file descriptively, often using a numbered prefix and indicating its purpose (e.g., `00-initial-options.md`, `01-clarify-task-details.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace all placeholders (e.g., `[mode_slug_uppercase]`, `[Mode Name]`, `[mode_slug]`, `[ShortName]`, `[prompt_purpose_tag]`) with values specific to the mode and the prompt.
    *   The `id` should be unique (e.g., `KB-PROMPT-RC-INITIAL-OPTIONS-V1`).
    *   `target_audience` **MUST** include the mode's slug.
    *   `created_date` and `last_updated` should be set to the current date/timestamp by the creating agent.
    *   Fill in optional "Prompt Specific Fields" (`prompt_type`, `expected_user_response_format`, `placeholders_used`) if applicable, or remove them.
4.  **Define Prompt Content in Markdown (of the instance file):**
    *   Replace all `[Mode Name]` and `[mode_slug]` placeholders.
    *   In Section 2 ("Prompt Components"), provide the actual text for the main question/statement and any suggested follow-up options. Use `{{PLACEHOLDER_NAME}}` for dynamic content that the mode will fill at runtime.
    *   Add any necessary instructions for the mode on how to use these components.

## 3. TOML Frontmatter Schema (for an instance of `template_00_kb_prompt.md`)

*   **`id` (String, Required):** Unique ID for the KB Prompt document.
    *   *Convention:* `KB-PROMPT-[mode_slug_uppercase]-[ShortName]-V[Version]`
    *   *Placeholder in template:* `"KB-PROMPT-[mode_slug_uppercase]-[ShortName]-V[Version]"`
*   **`title` (String, Required):** Title of the prompt article.
    *   *Placeholder in template:* `"[Mode Name]: Prompt - [Descriptive Title of the Prompt's Purpose]"`
*   **`context_type` (String, Fixed: `"kb_prompt_text"`).**
*   **`scope` (String, Required):** Describes when and why the mode uses this prompt.
    *   *Placeholder in template:* `"Provides structured text for the '[Mode Name]' (`[mode_slug]`) mode to use when [situation where prompt is used, e.g., 'presenting initial options to the user', 'requesting clarification on X']."`
*   **`target_audience` (Array of Strings, Required):** **MUST** contain a single string: the slug of the mode.
    *   *Placeholder in template:* `["[mode_slug]"]`
*   **`granularity` (String, Required):** Describes the nature of the prompt.
    *   *Options:* `"specific_prompt_component"`, `"full_prompt_dialogue"`, `"message_template"`
    *   *Placeholder in template:* `"specific_prompt_component"`
*   **`status` (String, Required):** Lifecycle status.
    *   *Default in template:* `"draft"`
    *   *Options:* `"draft"`, `"active"`, `"deprecated"`
*   **`created_date` (String, Required):** Date of prompt article creation (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Timestamp of last update (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`version` (String, Required):** Version of this prompt document instance.
*   **`tags` (Array of Strings, Required):** Keywords. **MUST** include `"kb"`, `"prompt"`, `"prompt-engineering"`, `"[mode_slug_tag]"`. Add content-specific tags.
    *   *Placeholder in template:* `["kb", "prompt", "prompt-engineering", "[mode_slug_tag]", "[prompt_purpose_tag]"]`
*   `related_context` (Array of Strings, Optional): Links to relevant mode files or KB procedures.
    *   *Placeholders in template show examples.*
*   **`template_schema_doc` (String, Required):** Path to this schema documentation file.
    *   *Value:* `".roo/commander/templates/modes/common/kb/prompts/template_00_kb_prompt.README.md"`

### Prompt Specific Fields (Optional in the instance's TOML)

*   `prompt_type` (String, Optional): The primary way this prompt is used.
    *   *Options:* `"ask_followup_question"`, `"information_display"`, `"confirmation_request"`, `"delegation_message_template"`, `"user_greeting"`, `"error_message"`
    *   *Placeholder in template:* `"ask_followup_question"`
*   `expected_user_response_format` (String, Optional): Guidance on what kind of response is anticipated.
    *   *Placeholder in template:* `"[e.g., Selection from list, Free-form text, Yes/No. Or remove field.]"`
*   `placeholders_used` (Array of Strings, Optional): A list of `{{PLACEHOLDER_NAME}}` variables used in the prompt text that the mode needs to replace with dynamic values at runtime.
    *   *Placeholder in template:* `["[placeholder1]", "[placeholder2 or remove array field]"]`

## 4. Markdown Body Structure (for an instance of `template_00_kb_prompt.md`)

*   `# [Mode Name]: Prompt - {{ title }}`: Main title.
*   `## 1. Objective / Purpose of this Prompt 🎯`: Explains when and why the mode uses this prompt.
*   `## 2. Prompt Components 💬`: Contains the actual text.
    *   `### 2.1. Main Question / Statement Text:`: The core message.
    *   `### 2.2. Suggested Follow-up Options (If Applicable):`: For tools like `ask_followup_question`.
    *   `### 2.3. Additional Instructions / Formatting Notes for [Mode Name] (Optional):`: Guidance for the mode using this prompt.
*   `## 3. Example Invocation (Conceptual - Optional) 🎬`: Optional illustration of how the mode might use this prompt with a tool.

This template helps standardize how conversational prompts and message templates are stored and managed within a mode's Knowledge Base, making them easier to maintain and refine.