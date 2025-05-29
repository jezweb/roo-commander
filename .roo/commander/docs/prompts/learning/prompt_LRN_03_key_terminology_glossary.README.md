# Documentation: Prompt Template `prompt_LRN_03_key_terminology_glossary.md`

## 1. Purpose

This prompt template is designed to generate a **glossary of key terms, acronyms, and important jargon relevant to a specific field, project, technology, industry, or client**. It guides the user to specify the domain for the glossary, the target audience, its purpose, and any particular areas or existing terms to focus on. The AI is then tasked with identifying relevant terms and providing clear, concise, audience-appropriate definitions, potentially with contextual examples.

The goal is to create a practical reference document that aids understanding, facilitates clearer communication, and helps onboard individuals to new or complex domains.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/learning/prompt_LRN_03_key_terminology_glossary.md](prompt_LRN_03_key_terminology_glossary.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `glossary_request_project_phoenix_terms_v1.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Learn-GenGlossary-ProjPhoenix-20250528080000`.
    *   `title`: Update to reflect the specific glossary request, e.g., `"Glossary Generation: Project Phoenix Key Terminology"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Specific Field/Project/Technology]`.
    *   **Crucially, in Section 1 ("Glossary Context & Scope"):**
        *   Clearly state the `Primary Domain for Glossary`.
        *   Define the `Target Audience for the Glossary`.
        *   Explain the `Purpose of the Glossary`.
        *   Specify any `Key Areas/Sub-topics to Cover`.
        *   Optionally, suggest an `Approximate Number of Terms Desired`.
        *   Optionally, provide an `Existing List of Terms to Define`.
    *   Section 2 ("Request for Glossary Generation") contains instructions for the AI and typically does not need modification by the user.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model to generate the glossary.

## 3. TOML Frontmatter Schema (for an instance of `prompt_LRN_03_key_terminology_glossary.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Learn-GenGlossary-[DomainShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Learn-GenGlossary-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this glossary generation request.
    *   *Placeholder in template:* `"Key Terminology & Glossary Generation Request"`
*   **`prompt_type` (String, Fixed):** `"generation_reference_material"`
*   **`domain` (String, Fixed):** `"learning_and_development_knowledge_organization"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "glossary", "terminology", "definitions", "learning_aid", "jargon_buster", "reference_material"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/learning/prompt_LRN_03_key_terminology_glossary.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_LRN_03_key_terminology_glossary.md`)

*   **Subject Line:** Pre-filled; update `[Specific Field/Project/Technology]`.
*   **Section 1: Glossary Context & Scope:**
    *   `Primary Domain for Glossary`: **User must specify this clearly.**
    *   `Target Audience for the Glossary`: **Essential for tailoring definitions.**
    *   `Purpose of the Glossary`.
    *   `Key Areas/Sub-topics to Cover (if specific)`.
    *   `Approximate Number of Terms Desired (Optional)`.
    *   `Existing List of Terms to Define (Optional)`: **Provide this if you have specific terms in mind.**
*   **Section 2: Request for Glossary Generation:**
    *   This section is pre-filled with instructions for the AI on what the glossary should include (Term Selection, Definitions, Examples, Acronym Expansion, Organization). The user typically does not modify this section.

This structure ensures the AI receives all necessary information to generate a relevant, accurate, and audience-appropriate glossary.