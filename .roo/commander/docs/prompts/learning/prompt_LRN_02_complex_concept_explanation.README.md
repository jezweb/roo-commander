# Documentation: Prompt Template `prompt_LRN_02_complex_concept_explanation.md`

## 1. Purpose

This prompt template is designed to generate a **clear, simplified, and audience-tailored explanation of a complex concept, theory, or technical topic**. It guides the user to specify the concept they need explained and, crucially, the target audience for whom the explanation is intended. The AI is then tasked with breaking down the concept using plain language, relatable analogies, and relevant examples appropriate for that audience.

The goal is to facilitate understanding and knowledge transfer, whether for personal learning, educating colleagues, or communicating with clients or stakeholders who may not share the same technical background.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/learning/prompt_LRN_02_complex_concept_explanation.md](prompt_LRN_02_complex_concept_explanation.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `explanation_request_cap_theorem_for_pm.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Learn-ExplainConcept-CAPTheoremForPM-20250528070000`.
    *   `title`: Update to reflect the specific request, e.g., `"Concept Explanation: CAP Theorem for Project Managers"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Concept Name] for [Target Audience]`.
    *   **Crucially, in Section 1 ("Concept & Explanation Context"):**
        *   Clearly state the `Complex Concept/Topic to Explain`.
        *   Define the `Target Audience for the Explanation` with as much relevant detail as possible (e.g., their role, prior knowledge, what they need to get out of the explanation).
        *   Specify any `Key Aspects to Emphasize`.
        *   Optionally, suggest a `Desired Length/Format`.
        *   State the `Purpose of the Explanation`.
    *   Section 2 ("Request for Explanation") contains instructions for the AI and typically does not need modification by the user.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model to generate the explanation.

## 3. TOML Frontmatter Schema (for an instance of `prompt_LRN_02_complex_concept_explanation.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Learn-ExplainConcept-[ConceptShort]-[AudienceShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Learn-ExplainConcept-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this explanation request.
    *   *Placeholder in template:* `"Complex Concept Explanation Request (Customized Audience)"`
*   **`prompt_type` (String, Fixed):** `"explanation_clarification"`
*   **`domain` (String, Fixed):** `"learning_and_development_knowledge_transfer"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "explanation", "complex_concepts", "learning_aid", "knowledge_simplification", "customized_explanation"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/learning/prompt_LRN_02_complex_concept_explanation.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_LRN_02_complex_concept_explanation.md`)

*   **Subject Line:** Pre-filled; update `[Concept Name] for [Target Audience]`.
*   **Section 1: Concept & Explanation Context:**
    *   `Complex Concept/Topic to Explain`: **User must specify this clearly.**
    *   `Target Audience for the Explanation`: **Essential for tailoring the explanation effectively.**
    *   `Key Aspects to Emphasize (if any)`.
    *   `Desired Length/Format of Explanation (Optional)`.
    *   `Purpose of the Explanation`.
*   **Section 2: Request for Explanation:**
    *   This section is pre-filled with instructions for the AI on the principles the explanation should adhere to (Simplicity, Audience Appropriateness, Analogies/Examples, Focus, Accuracy). The user typically does not modify this section.

This structure ensures the AI receives all necessary information to generate a relevant, accurate, and appropriately simplified explanation tailored to the specified audience.