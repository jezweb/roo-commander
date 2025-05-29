# Documentation: Prompt Template `prompt_SUM_04_concept_simplification_eliX.md`

## 1. Purpose

This prompt template is designed to guide an AI in **simplifying a complex concept or technical term into an explanation suitable for a specified audience level (e.g., "Explain Like I'm 5," "Explain to a non-technical manager")**. It helps the user provide the concept to be simplified, the target audience's level of understanding, any specific aspects to focus on, and optionally, source material that contains a more complex explanation. The AI is then instructed to break down the topic using clear language, analogies, and relatable examples.

The goal is to make difficult subjects more accessible and understandable to a broader or less specialized audience.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/summarization/prompt_SUM_04_concept_simplification_eliX.md](prompt_SUM_04_concept_simplification_eliX.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `simplify_concept_blockchain_eli10.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-SUM-ConceptSimplification-BlockchainELI10-20250528090000`.
    *   `title`: Can remain as is, or be made more specific like `"Concept Simplification: Blockchain for a 10-Year-Old"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with the `[Complex Concept/Term]` and `[Target Audience Level]`.
    *   In Section 1 ("Concept & Simplification Context"):
        *   Clearly state the `Complex Concept/Term to be Simplified`.
        *   **Crucially, specify the `Target Audience Level for Simplification (ELI_X_)`**. This is the most important input for tailoring the explanation.
        *   Provide other context like key aspects to focus on, purpose, desired length, and things to avoid.
    *   In Section 2 ("Source Material / Existing Explanation"), optionally provide a link to or paste a more complex existing explanation that the AI can use as a basis for simplification.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model to generate the simplified explanation.

## 3. TOML Frontmatter Schema (for an instance of `prompt_SUM_04_concept_simplification_eliX.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-SUM-ConceptSimplification-[ConceptShort]-[AudienceLevel]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-SUM-ConceptSimplification-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this prompt request.
    *   *Placeholder in template:* `"Concept Simplification (Explain Like I'm X) Request"`
*   **`prompt_type` (String, Fixed):** `"summarization_explanation_simplification"`
*   **`domain` (String, Fixed):** `"communication_education_clarification"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "summarization", "eli5", "eli10", "concept_simplification", "explanation", "analogy", "clarification"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/summarization/prompt_SUM_04_concept_simplification_eliX.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_SUM_04_concept_simplification_eliX.md`)

*   **Subject Line:** Pre-filled; update `[Complex Concept/Term]` and `[Target Audience Level]`.
*   **Section 1: Concept & Simplification Context:**
    *   `Complex Concept/Term to be Simplified`.
    *   `Target Audience Level for Simplification (ELI_X_)`: **Key for tailoring the output.**
    *   `Key Aspect(s) to Focus On (if any)`.
    *   `Purpose of this Simplified Explanation`.
    *   `Desired Length/Format of Explanation`.
    *   `Things to Avoid (if any)`.
*   **Section 2: Source Material / Existing Explanation (Optional but helpful):**
    *   `Link to an Existing Explanation`.
    *   `Paste a More Complex Explanation Here`.
*   **Section 3: Request for Concept Simplification:**
    *   This section contains pre-filled instructions for the AI on how to approach the simplification task, emphasizing clarity, tailoring to the audience, use of analogies, avoidance of jargon, and accuracy. The user typically does not modify this section.

This structure ensures the AI understands both the concept to be simplified and, critically, the level of understanding of the intended audience, enabling it to craft an appropriate and effective explanation.