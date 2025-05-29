# Documentation: Prompt Template `prompt_SUM_07_comparative_summary.md`

## 1. Purpose

This prompt template is designed to guide an AI in **creating a comparative summary of multiple (two or more) texts or sources related to a common topic**. It helps the user provide the source materials, specify the overall topic of comparison, outline any specific aspects or criteria for comparison, and define the desired format and length of the summary. The AI is then instructed to analyze each source, identify key themes and differences, and synthesize these findings into a coherent overview.

The goal is to enable users to quickly understand the similarities, differences, and unique contributions of various sources on a particular subject, facilitating informed decision-making, research, or understanding of diverse perspectives.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/summarization/prompt_SUM_07_comparative_summary.md](prompt_SUM_07_comparative_summary.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `compare_summary_ai_ethics_articles.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-SUM-ComparativeSummary-AIEthicsArticles-20250528120000`.
    *   `title`: Can remain as is, or be made more specific like `"Comparative Summary: AI Ethics Articles A & B"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with the `[Topic of Comparison]` and `[Number]` of sources.
    *   In Section 1 ("Texts/Sources & Context for Comparison"):
        *   Clearly state the `Overall Topic of Comparison`.
        *   Define the `Primary Goal` of the summary.
        *   List any `Specific Aspects/Criteria for Comparison` (optional but helpful).
        *   Specify the `Desired Format/Structure` and `Desired Length` of the summary.
    *   **Crucially, in Section 2 ("Texts/Sources for Comparison"):**
        *   For each source, provide a brief identifier.
        *   Provide a **link to the source** if the AI can access it.
        *   More commonly, **paste the full text or relevant excerpts** for each source, clearly labeling each one.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model to generate the comparative summary.

## 3. TOML Frontmatter Schema (for an instance of `prompt_SUM_07_comparative_summary.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-SUM-ComparativeSummary-[TopicShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-SUM-ComparativeSummary-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this prompt request.
    *   *Placeholder in template:* `"Comparative Summary of Multiple Texts/Sources Request"`
*   **`prompt_type` (String, Fixed):** `"summarization_analysis_comparison"`
*   **`domain` (String, Fixed):** `"document_analysis_research_synthesis"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "summarization", "comparative_analysis", "text_comparison", "synthesis", "research_summary", "competitive_analysis"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/summarization/prompt_SUM_07_comparative_summary.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_SUM_07_comparative_summary.md`)

*   **Subject Line:** Pre-filled; update `[Topic of Comparison]` and `[Number]` of sources.
*   **Section 1: Texts/Sources & Context for Comparison:**
    *   `Overall Topic of Comparison`.
    *   `Primary Goal of this Comparative Summary`.
    *   `Specific Aspects/Criteria for Comparison (if any)`: **Helps focus the AI's analysis.**
    *   `Desired Format/Structure of the Summary`.
    *   `Desired Length of Summary`.
*   **Section 2: Texts/Sources for Comparison:**
    *   Dedicated subsections for `Source 1`, `Source 2`, etc.
    *   Each source subsection includes fields for a `Link` (optional) and a code block to `Paste Text`: **Essential for providing all source materials.**
*   **Section 3: Request for Comparative Summary Generation:**
    *   This section contains pre-filled instructions for the AI on how to read, understand, compare, contrast, and synthesize information from the multiple provided sources, adhering to the specified focus and format. The user typically does not modify this section.

This structure ensures the AI receives all necessary source texts and clear instructions on how to perform the comparison and structure the summary.