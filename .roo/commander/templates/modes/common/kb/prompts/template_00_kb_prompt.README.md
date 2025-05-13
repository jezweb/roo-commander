# Documentation: Template `template_00_kb_prompt.md`

## 1. Purpose

This template defines the standard structure for creating **Knowledge Base (KB) Prompt documents**. These documents are stored within a mode's `kb/prompts/` directory and contain structured text that the mode uses to construct dynamic prompts for user interaction (e.g., via the `ask_followup_question` tool) or for formulating messages to other modes.

Storing prompt texts in dedicated KB files allows for:
*   Easy updates to wording without changing the mode's core logic.
*   Consistency in communication style.
*   Better organization of conversational elements.
*   Potential for localization or A/B testing of prompts in the future.

## 2. Usage

1.  **Copy Template:** When creating a new prompt definition for a mode's KB:
    *   Copy `.roo/commander/templates/modes/common/kb/prompts/template_00_kb_prompt.md` to the relevant mode's `kb/prompts/` directory (e.g., `.roo/commander/modes/roo-commander/kb/prompts/`).
2.  **Rename File:** Rename the copied file descriptively, often using a numbered prefix and indicating its purpose (e.g., `00-initial-options.md`, `01-clarify-task-details.md`).
3.  **Populate TOML Frontmatter:**
    *   Fill in all placeholders in the TOML block of the new prompt file.
    *   `id`: Unique ID for this KB prompt, including mode slug and version (e.g., `KB-PROMPT-RC-INITIAL-OPTIONS-V1`).
    *   `title`: `"[Mode Name]: Prompt - [Descriptive Title]"`.
    *   `scope`: Describe when and why the mode uses this prompt.
    *   `target_audience`: **MUST** be the slug of the mode this prompt is for.
    *   `tags`: Include `"kb"`, `"prompt"`, `"[mode_slug_tag]"`, and keywords for the prompt's purpose.
    *   `related_context`: Link to the mode's `.mode.md` and any KB procedure that uses this prompt.
    *   (Optional) `prompt_type`, `expected_user_response_format`, `placeholders`.
4.  **Define Prompt Content in Markdown:**
    *   Replace all bracketed placeholders like `[Mode Name]` and `[mode_slug]` with actual values.
    *   In Section 2 ("Prompt Components"), provide the actual text for the main question/statement and any suggested follow-up options. Use `{{placeholders}}` for dynamic content.
    *   Add any necessary instructions for the mode on how to use these components.

## 3. TOML Frontmatter Schema

*   **`id` (String, Required):** Unique ID. Convention: `KB-PROMPT-[MODE_SLUG_UPPERCASE]-[ShortName]-V[Version]`.
*   **`title` (String, Required):** Title: `"[Mode Name]: Prompt - [Descriptive Title]"`.
*   **`context_type` (String, Fixed: `"kb_prompt_text"`).**
*   **`scope` (String, Required):** Describes the situation in which this prompt is used by the mode.
*   **`target_audience` (Array of Strings, Required):** **MUST** contain a single string: the slug of the mode.
*   **`granularity` (String, Required):** (e.g., `"specific_prompt_component"`, `"full_prompt_dialogue"`).
*   **`status` (String, Required):** (e.g., `"draft"`, `"active"`).
*   **`last_updated` (String, Required):** Date.
*   **`version` (String, Required):** Document version.
*   **`tags` (Array of Strings, Required):** **MUST** include `"kb"`, `"prompt"`, `"[mode_slug_tag]"`. Add content-specific tags.
*   `related_context` (Array of Strings, Optional): Links to relevant mode files or KB procedures.
*   **`template_schema_doc` (String, Required):** Path to this schema doc: `".roo/commander/templates/modes/common/kb/prompts/template_00_kb_prompt.README.md"`

### Prompt Specific Fields (Optional in TOML)

*   `prompt_type` (String, Optional): The primary way this prompt is used (e.g., `"ask_followup_question"`, `"delegation_message_template"`, `"user_greeting"`, `"error_message"`).
*   `expected_user_response_format` (String, Optional): Guidance on what kind of response is anticipated (e.g., `"Selection from list"`, `"Free-form text describing X"`, `"Yes/No confirmation"`).
*   `placeholders` (Array of Strings, Optional): A list of placeholder variables (e.g., `["{{userName}}", "{{fileName}}"]`) used in the prompt text that the mode needs to replace with dynamic values at runtime.

## 4. Markdown Body Structure

*   `# [Mode Name]: Prompt - {{ title }}`: Main title.
*   `## 1. Objective / Purpose of this Prompt`: Explains when and why the mode uses this prompt.
*   `## 2. Prompt Components`: Contains the actual text.
    *   `### 2.1. Main Question / Statement Text:`: The core message.
    *   `### 2.2. Suggested Follow-up Options (If Applicable):`: For tools like `ask_followup_question`.
    *   `### 2.3. Additional Instructions / Formatting Notes for the Mode (Optional):`: Guidance for the mode using this prompt.
*   `## 3. Example Invocation (Conceptual)`: Optional illustration of how the mode might use this prompt with a tool.

This template helps standardize how conversational prompts and message templates are stored and managed within a mode's Knowledge Base.