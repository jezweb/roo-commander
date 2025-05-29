# Documentation: Prompt Template `prompt_CD_11_technical_concept_explanation_coding.md`

## 1. Purpose

This prompt template is designed to request a **clear explanation of a specific technical or coding-related concept**. It guides the user to state the concept they want to understand, specify any relevant programming language or context, describe their current understanding (or confusion), and indicate the desired level of detail for the explanation.

The goal is to receive an accurate, easy-to-understand explanation that clarifies the concept, explains its purpose and benefits, and ideally provides simple code examples or analogies to aid comprehension. This is useful for learning new topics or deepening understanding of existing ones.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/coding/prompt_CD_11_technical_concept_explanation_coding.md](prompt_CD_11_technical_concept_explanation_coding.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `explain_concept_js_promises.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Coding-TechConceptExplain-JSPromises-20250528160000`.
    *   `title`: Update to reflect the specific concept, e.g., `"Technical Concept Explanation: JavaScript Promises"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Name of Concept]`.
    *   **Crucially, in Section 1 ("Concept & Context for Explanation"):**
        *   Clearly state the `Technical Concept Name`.
        *   Specify `Programming Language(s) or Context` if the concept is context-specific.
        *   Briefly describe `Your Current Understanding`.
        *   Indicate the `Desired Level of Detail & Analogy Preference`.
        *   List any `Specific Questions` you have about the concept.
    *   Re-state the concept name and adjust the desired understanding level in the final request paragraph.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model to receive the explanation.

## 3. TOML Frontmatter Schema (for an instance of `prompt_CD_11_technical_concept_explanation_coding.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Coding-TechConceptExplain-[ConceptNameShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Coding-TechConceptExplain-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this concept explanation request.
    *   *Placeholder in template:* `"Technical Concept Explanation (Coding Related) Request"`
*   **`prompt_type` (String, Fixed):** `"explanation_technical_concept"`
*   **`domain` (String, Fixed):** `"coding_and_technical"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "coding", "technical_concept", "programming_principles", "data_structures", "algorithms", "design_patterns", "learning_code"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/coding/prompt_CD_11_technical_concept_explanation_coding.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_CD_11_technical_concept_explanation_coding.md`)

*   **Subject Line:** Pre-filled; update `[Name of Concept]`.
*   **Section 1: Concept & Context for Explanation:**
    *   `Technical Concept Name`: **User must specify.**
    *   `Programming Language(s) or Context`.
    *   `Your Current Understanding`: Helps tailor the explanation.
    *   `Desired Level of Detail & Analogy Preference`.
    *   `Specific Questions (if any)`.
*   **Section 2: Request for Explanation:**
    *   A pre-filled section outlining the desired components of the explanation (Definition, Core Principles, Purpose & Benefits, Code Examples, Use Cases, Pitfalls). The user can adjust the final sentence to specify their desired level of understanding for tailoring.

This structure ensures the AI receives clear guidance on the concept to be explained and the user's specific needs, leading to a more targeted and helpful explanation.