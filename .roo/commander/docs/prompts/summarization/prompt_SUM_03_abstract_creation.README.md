# Documentation: Prompt Template `prompt_SUM_03_abstract_creation.md`

## 1. Purpose

This prompt template is designed to guide an AI in **creating a formal abstract for a document or article**, such as a research paper, technical report, or whitepaper. It helps the user provide the source material and contextual information like the document's purpose, methodology, findings, conclusions, and desired abstract length. The AI is then instructed to synthesize this information into a concise, self-contained, accurate, and objective summary that reflects the essence of the original work.

The goal is to generate a well-crafted abstract suitable for academic or professional purposes, allowing readers to quickly understand the document's scope and significance.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/summarization/prompt_SUM_03_abstract_creation.md](prompt_SUM_03_abstract_creation.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `create_abstract_ai_marketing_paper.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-SUM-AbstractCreation-AIMarketingPaper-20250528080000`.
    *   `title`: Can remain as is, or be made more specific like `"Abstract Creation Request: AI Marketing Paper"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with the `[Document/Article Title]`.
    *   In Section 1 ("Document/Article Overview for Abstract Creation"), provide all relevant details about the original document, including its type, purpose, methodology, findings, conclusions, target audience, desired abstract length, and optional keywords.
    *   **Crucially, in Section 2 ("Document/Article Text for Abstract Creation"):**
        *   Provide a **link to the full document/article** if the AI can access it.
        *   More commonly, **paste the full text or key extended sections** (especially Introduction, Methodology, Results, Discussion, Conclusion) into the designated code block.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model to generate the abstract.

## 3. TOML Frontmatter Schema (for an instance of `prompt_SUM_03_abstract_creation.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-SUM-AbstractCreation-[DocumentNameShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-SUM-AbstractCreation-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this prompt request.
    *   *Placeholder in template:* `"Abstract Creation Request for Document/Article"`
*   **`prompt_type` (String, Fixed):** `"summarization_generation_formal"`
*   **`domain` (String, Fixed):** `"academic_technical_writing_summarization"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "summarization", "abstract", "research_paper", "technical_document", "academic_writing", "concise_summary"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/summarization/prompt_SUM_03_abstract_creation.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_SUM_03_abstract_creation.md`)

*   **Subject Line:** Pre-filled; update `[Document/Article Title]`.
*   **Section 1: Document/Article Overview for Abstract Creation:**
    *   `Full Title`.
    *   `Type of Document/Article`.
    *   `Primary Purpose/Objective(s) of the Document`.
    *   `Methodology/Approach (if applicable)`: **Important for research-based abstracts.**
    *   `Key Findings/Results (if applicable)`: **Important for research-based abstracts.**
    *   `Main Conclusions/Implications`.
    *   `Target Audience for the Original Document`.
    *   `Desired Length of Abstract`: **Guides AI output length.**
    *   `Keywords (Optional)`.
*   **Section 2: Document/Article Text for Abstract Creation:**
    *   `Link to the Full Document/Article` (Optional, if AI can access).
    *   `Paste the Full Text or Key Extended Sections Here`: **Essential for providing the source material.**
*   **Section 3: Request for Abstract Generation:**
    *   This section contains pre-filled instructions for the AI on how to analyze the document and synthesize its core components into a formal, self-contained, accurate, and concise abstract, adhering to length and tone requirements. The user typically does not modify this section.

This structure ensures the AI receives the source document and clear instructions on the specific requirements for crafting a formal abstract.