# Documentation: Prompt Template `prompt_SUM_01_executive_summary_generation.md`

## 1. Purpose

This prompt template is designed to guide an AI in **generating a concise and effective executive summary from a longer document or pasted text**. It helps the user provide the necessary source material and context, such as the original document's purpose, the target audience for the summary, key aspects to highlight, and desired length/format. The AI is then instructed to identify critical information, synthesize it, and produce a summary tailored to these requirements.

The goal is to create a stand-alone overview that allows busy stakeholders to quickly grasp the essence, key findings, and conclusions of the original document.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/summarization/prompt_SUM_01_executive_summary_generation.md](prompt_SUM_01_executive_summary_generation.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `generate_summary_q3_sales_report.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-SUM-ExecSummary-Q3Report-20250528060000`.
    *   `title`: Can remain as is, or be made more specific like `"Executive Summary Request: Q3 Sales Report"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with the `[Document Title/Topic]`.
    *   In Section 1 ("Document Overview & Context for Summary"), provide all details about the original document and the requirements for the summary (target audience, emphasis, length, tone).
    *   **Crucially, in Section 2 ("Document Text for Summarization"):**
        *   Provide a **link to the full document** if the AI can access it and it's preferred.
        *   More commonly, **paste the full text or key extended sections** of the document to be summarized into the designated code block. The more complete the relevant text, the better the summary.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model to generate the executive summary.

## 3. TOML Frontmatter Schema (for an instance of `prompt_SUM_01_executive_summary_generation.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-SUM-ExecSummary-[DocumentNameShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-SUM-ExecSummary-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this prompt request.
    *   *Placeholder in template:* `"Executive Summary Generation Request"`
*   **`prompt_type` (String, Fixed):** `"summarization_generation"`
*   **`domain` (String, Fixed):** `"document_analysis_reporting"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "summarization", "executive_summary", "reporting", "document_condensation", "key_findings"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/summarization/prompt_SUM_01_executive_summary_generation.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_SUM_01_executive_summary_generation.md`)

*   **Subject Line:** Pre-filled; update `[Document Title/Topic]`.
*   **Section 1: Document Overview & Context for Summary:**
    *   `Document Title/Topic`.
    *   `Original Purpose of the Document`.
    *   `Target Audience for THIS Executive Summary`: **Key for tailoring the summary.**
    *   `Key Aspects to Emphasize in the Summary`.
    *   `Desired Length/Format of the Summary`.
    *   `Overall Tone for the Summary`.
*   **Section 2: Document Text for Summarization:**
    *   `Link to the Full Document` (Optional, if AI can access).
    *   `Paste the Full Text or Key Extended Sections Here`: **Essential for providing the source material.**
*   **Section 3: Request for Executive Summary Generation:**
    *   This section contains pre-filled instructions for the AI on how to approach the summarization task, focusing on identifying critical information, synthesizing it, tailoring it to the audience and requirements, and maintaining conciseness and accuracy. The user typically does not modify this section.

This structure ensures the AI receives the source document and clear instructions on the context, audience, and desired output for the executive summary.