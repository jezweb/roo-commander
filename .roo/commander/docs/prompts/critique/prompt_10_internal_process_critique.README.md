# Documentation: Prompt Template `prompt_10_internal_process_critique.md`

## 1. Purpose

This prompt template is designed to elicit a comprehensive **critique and enhancement suggestions for an internal agency process or workflow**. It guides the user to describe the process, its goals, stakeholders, triggers, current steps, and any known pain points. The critiquing AI is then directed to analyze aspects such as clarity, efficiency, roles and responsibilities, tool usage, communication, error handling, adaptability, and measurement.

The goal is to receive actionable feedback to refine the internal process, making it more streamlined, effective, clear, and error-resistant, ultimately improving operational efficiency.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/critique/prompt_10_internal_process_critique.md](prompt_10_internal_process_critique.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `critique_request_qa_testing_process_v1.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Critique-InternalProcess-QATesting-20250526190000`.
    *   `title`: Update to reflect the specific process, e.g., `"Internal Process Critique: QA Testing Workflow"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Name of the Process/Workflow]`.
    *   In Section 1 ("Process Overview & Purpose"), provide context about the process's goals, stakeholders, triggers, and any known issues.
    *   **Crucially, in Section 2 ("Process Details / Documentation"):**
        *   Provide a **link to any existing process documentation**.
        *   Alternatively, or if documentation is lacking, **describe the current process steps in detail**.
        *   List any `Tools & Systems Used`.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model for critique.

## 3. TOML Frontmatter Schema (for an instance of `prompt_10_internal_process_critique.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Critique-InternalProcess-[ProcessNameShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Critique-InternalProcess-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this critique request.
    *   *Placeholder in template:* `"Internal Process/Workflow Critique & Enhancement Request"`
*   **`prompt_type` (String, Fixed):** `"critique_and_improvement"`
*   **`domain` (String, Fixed):** `"internal_operations_process_improvement"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "critique", "internal_process", "workflow_optimization", "process_improvement", "operations"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/critique/prompt_10_internal_process_critique.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_10_internal_process_critique.md`)

*   **Subject Line:** Pre-filled; update `[Name of the Process/Workflow]`.
*   **Section 1: Process Overview & Purpose:**
    *   `Primary Goal(s) of the Process`.
    *   `Key Stakeholders/Teams Involved`.
    *   `Trigger(s) for the Process`.
    *   `Current Perceived Pain Points (if any)`.
*   **Section 2: Process Details / Documentation:**
    *   `Link to Process Documentation` (if it exists).
    *   `Describe the Current Process Steps` (Alternative or supplement). **This is crucial if no formal docs exist.**
    *   `Tools & Systems Used`.
*   **Section 3: Request for Critical Analysis & Improvement Suggestions:**
    *   Pre-filled with detailed questions for the AI, categorized by aspects (A-I) like "Clarity & Definition," "Efficiency & Flow," "Roles & Responsibilities," "Tools & Technology Usage," "Communication & Collaboration," and "Measurement & Key Performance Indicators (KPIs)." The user typically does not modify this section.

This structure ensures the AI receives a clear understanding of the current internal process, enabling it to provide targeted recommendations for optimization.