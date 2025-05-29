# Documentation: Prompt Template `prompt_LRN_06_comparative_analysis_learning.md`

## 1. Purpose

This prompt template is designed to generate a **structured comparative analysis of two or more related concepts, tools, technologies, methodologies, or strategies**. It guides the user to specify the items they want compared, their reason for the comparison (learning goal), the target audience for the analysis, and any specific criteria for comparison. The AI is then tasked with providing an overview of each item, highlighting key similarities and differences, discussing pros and cons, outlining typical use cases, and summarizing the main distinctions.

The goal is to facilitate deeper conceptual understanding, clarify nuances, and support informed decision-making by providing a balanced and structured comparison.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/learning/prompt_LRN_06_comparative_analysis_learning.md](prompt_LRN_06_comparative_analysis_learning.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `compare_analysis_request_sql_vs_nosql.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Learn-CompareAnalysis-SQLvsNoSQL-20250528110000`.
    *   `title`: Update to reflect the specific comparison, e.g., `"Comparative Analysis: SQL vs. NoSQL Databases"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Item A] vs. [Item B] (vs. [Item C...])`.
    *   **Crucially, in Section 1 ("Comparison Context & Goals"):**
        *   Clearly list the `Items to Compare`.
        *   State the `Primary Reason for Comparison/Learning Goal`.
        *   Define the `Target Audience for this Comparison` (if not just for self).
        *   Specify any `Key Aspects/Criteria for Comparison` or let the AI suggest them.
        *   Optionally, suggest a `Desired Format for Comparison`.
    *   Section 2 ("Request for Comparative Analysis") contains instructions for the AI on how to structure the analysis and typically does not need modification by the user.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model to generate the comparative analysis.

## 3. TOML Frontmatter Schema (for an instance of `prompt_LRN_06_comparative_analysis_learning.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Learn-CompareAnalysis-[ItemsShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Learn-CompareAnalysis-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this comparative analysis request.
    *   *Placeholder in template:* `"Comparative Analysis for Deeper Understanding Request"`
*   **`prompt_type` (String, Fixed):** `"analysis_explanation"`
*   **`domain` (String, Fixed):** `"learning_and_development_conceptual_understanding"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "comparative_analysis", "learning_aid", "conceptual_clarity", "decision_making_tool", "technology_comparison"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/learning/prompt_LRN_06_comparative_analysis_learning.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_LRN_06_comparative_analysis_learning.md`)

*   **Subject Line:** Pre-filled; update `[Item A] vs. [Item B] (vs. [Item C...])`.
*   **Section 1: Comparison Context & Goals:**
    *   `Items to Compare`: **User must clearly list all items.**
    *   `Primary Reason for Comparison/Learning Goal`: **Essential for focusing the analysis.**
    *   `Target Audience for this Comparison`.
    *   `Key Aspects/Criteria for Comparison (if specific)`.
    *   `Desired Format for Comparison (Optional)`.
*   **Section 2: Request for Comparative Analysis:**
    *   This section is pre-filled with instructions for the AI on what the analysis should cover (Overview, Similarities, Differences, Pros & Cons, Use Cases, Learning Curve, Summary). The user typically does not modify this section.

This structure ensures the AI receives clear instructions on what to compare and why, enabling it to generate a relevant, balanced, and insightful analysis.