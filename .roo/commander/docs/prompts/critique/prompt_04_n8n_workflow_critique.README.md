# Documentation: Prompt Template `prompt_04_n8n_workflow_critique.md`

## 1. Purpose

This prompt template is designed to elicit a comprehensive **critique and enhancement suggestions for an n8n automation workflow**. It guides the user to provide the n8n workflow details (preferably as a JSON export) and its operational context. The critiquing AI is then directed to analyze aspects such as logic, efficiency, error handling, scalability, maintainability, security, and adherence to n8n best practices.

The goal is to receive actionable feedback to improve the workflow's robustness, efficiency, and overall design.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/critique/prompt_04_n8n_workflow_critique.md](prompt_04_n8n_workflow_critique.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `critique_request_customer_onboarding_n8n_v1.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Critique-n8nWorkflow-CustOnboard-20250526130000`.
    *   `title`: Update to reflect the specific workflow, e.g., `"n8n Workflow Critique: Customer Onboarding Automation"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Name/Purpose of the Workflow]`.
    *   In Section 1 ("Workflow Overview & Purpose"), provide details about the workflow's goals, triggers, involved services, and expected volume.
    *   **Crucially, in Section 2 ("Workflow Details / Representation"), provide the n8n workflow information.**
        *   **The preferred method is to paste the JSON export of the workflow into the designated code block.** This gives the AI the most complete information.
        *   Alternatively, provide a detailed textual description of nodes and connections.
        *   Screenshots can supplement but should not replace the JSON or detailed text.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model for critique.

## 3. TOML Frontmatter Schema (for an instance of `prompt_04_n8n_workflow_critique.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Critique-n8nWorkflow-[SpecificWorkflowName]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Critique-n8nWorkflow-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this critique request.
    *   *Placeholder in template:* `"n8n Workflow Design Critique & Enhancement Request"`
*   **`prompt_type` (String, Fixed):** `"critique_and_improvement"`
*   **`domain` (String, Fixed):** `"automation_n8n"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "critique", "n8n", "workflow_automation", "automation_design", "process_improvement"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/critique/prompt_04_n8n_workflow_critique.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_04_n8n_workflow_critique.md`)

*   **Subject Line:** Pre-filled; update `[Name/Purpose of the Workflow]`.
*   **Section 1: Workflow Overview & Purpose:**
    *   `Primary Goal(s)`: Workflow's objective.
    *   `Trigger(s)`: How the workflow starts.
    *   `Key Applications/Services Involved`: Connected systems.
    *   `Expected Volume/Frequency`: Usage scale.
*   **Section 2: Workflow Details / Representation:**
    *   **Preferred:** JSON export of the workflow pasted into a code block.
    *   Alternative: Detailed textual description of nodes, configurations, and connections.
    *   Optional: Links to screenshots.
*   **Section 3: Request for Critical Analysis & Improvement Suggestions:**
    *   Pre-filled with detailed questions for the AI, categorized by aspects (A-I) like "Logic & Correctness," "Efficiency & Performance," "Error Handling & Resilience," "Security," and "Use of n8n Best Practices." The user typically does not modify this section.

This structure ensures the AI receives the necessary technical details (ideally the full workflow JSON) and context to perform a thorough and actionable critique.