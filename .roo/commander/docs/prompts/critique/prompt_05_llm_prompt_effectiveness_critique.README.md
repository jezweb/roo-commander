# Documentation: Prompt Template `prompt_05_llm_prompt_effectiveness_critique.md`

## 1. Purpose

This prompt template is designed to elicit a comprehensive **critique and enhancement suggestions for a prompt intended for use with a Large Language Model (LLM)**. It guides the user to provide the exact prompt text, target LLM (if specific), desired output, and any relevant context or examples. The critiquing AI is then directed to analyze aspects such as clarity, specificity, context sufficiency, instruction quality, potential for bias, and use of prompt engineering techniques.

The goal is to receive actionable feedback to significantly improve the LLM prompt's effectiveness, reliability, and the quality of the generated output.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/critique/prompt_05_llm_prompt_effectiveness_critique.md](prompt_05_llm_prompt_effectiveness_critique.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `critique_request_summary_llm_prompt_v3.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Critique-LLMPromptEffectiveness-SummaryGen-20250526140000`.
    *   `title`: Update to reflect the specific LLM prompt's purpose, e.g., `"LLM Prompt Critique: Text Summarization Prompt"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Brief Description of Prompt's Purpose]`.
    *   **Crucially, in Section 1 ("LLM Prompt Details"):**
        *   Paste the **exact LLM prompt** you want critiqued into the designated code block under "The Prompt Under Review."
        *   Specify the `Target LLM`, `Intended Task / Desired Output`, and any `Context Provided to LLM`.
        *   Optionally, provide examples of good and bad outputs you have observed.
    *   The more precise and complete this information, the better the critique.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model for critique.

## 3. TOML Frontmatter Schema (for an instance of `prompt_05_llm_prompt_effectiveness_critique.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Critique-LLMPromptEffectiveness-[PromptPurposeShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Critique-LLMPromptEffectiveness-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this critique request.
    *   *Placeholder in template:* `"LLM Prompt Effectiveness Critique & Enhancement Request"`
*   **`prompt_type` (String, Fixed):** `"critique_and_improvement"`
*   **`domain` (String, Fixed):** `"llm_prompt_engineering"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "critique", "llm", "prompt_engineering", "gemini", "gpt", "ai_interaction"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/critique/prompt_05_llm_prompt_effectiveness_critique.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_05_llm_prompt_effectiveness_critique.md`)

*   **Subject Line:** Pre-filled; update `[Brief Description of Prompt's Purpose]`.
*   **Section 1: LLM Prompt Details:**
    *   `The Prompt Under Review`: **User must paste the exact LLM prompt here.**
    *   `Target LLM`: Specific model or "General LLM".
    *   `Intended Task / Desired Output`: Clear description of the goal.
    *   `Context Provided to LLM`: Any additional information given to the LLM.
    *   `Example of a Good Output` (Optional).
    *   `Example of a Bad or Undesired Output` (Optional).
*   **Section 2: Request for Critical Analysis & Improvement Suggestions:**
    *   Pre-filled with detailed questions for the AI, categorized by aspects (A-J) like "Clarity & Specificity," "Context Sufficiency & Quality," "Instruction Quality & Completeness," "Potential for Bias," and "Use of Prompt Engineering Techniques." The user typically does not modify this section.

This structure ensures the critiquing AI receives the precise prompt text and all relevant surrounding information to conduct a thorough analysis based on prompt engineering best practices.