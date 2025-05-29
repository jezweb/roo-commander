# Documentation: Prompt Template `prompt_18_strategic_project_plan_critique.md`

## 1. Purpose

This prompt template is designed to elicit a comprehensive **critique and enhancement suggestions for a strategic plan or a detailed project plan document**. It guides the user to provide the plan document itself (or key sections), along with context about its goals, scope, target audience, and timeframe. The critiquing AI is then directed to analyze aspects such as clarity of objectives, feasibility, completeness, risk assessment, resource allocation, timeline realism, success metrics, and overall strategic alignment or actionability.

The goal is to receive actionable feedback to refine the plan, making it more robust, actionable, and increasing its likelihood of successful execution and achievement of objectives.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/critique/prompt_18_strategic_project_plan_critique.md](prompt_18_strategic_project_plan_critique.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `critique_request_q4_marketing_plan_v1.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Critique-StrategicProjectPlan-Q4Marketing-20250527140000`.
    *   `title`: Update to reflect the specific plan, e.g., `"Strategic Plan Critique: Q4 Marketing Initiatives"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Name of Strategic Plan or Project Plan]`.
    *   In Section 1 ("Plan Overview & Context"), specify the type of plan and provide details about its goals, scope, target audience, stakeholders, and timeframe.
    *   **Crucially, in Section 2 ("The Plan Document for Review"):**
        *   Provide a **direct link to the plan document** (preferred).
        *   Alternatively, or for specific focus, **paste key sections or an executive summary** into the designated area.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model for critique.

## 3. TOML Frontmatter Schema (for an instance of `prompt_18_strategic_project_plan_critique.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Critique-StrategicProjectPlan-[PlanNameShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Critique-StrategicProjectPlan-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this critique request.
    *   *Placeholder in template:* `"Strategic Plan / Project Plan Document Critique & Enhancement Request"`
*   **`prompt_type` (String, Fixed):** `"critique_and_improvement"`
*   **`domain` (String, Fixed):** `"planning_strategy_project_management"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "critique", "strategic_plan", "project_plan", "project_management", "business_planning", "risk_assessment"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/critique/prompt_18_strategic_project_plan_critique.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_18_strategic_project_plan_critique.md`)

*   **Subject Line:** Pre-filled; update `[Name of Strategic Plan or Project Plan]`.
*   **Section 1: Plan Overview & Context:**
    *   `Type of Plan`.
    *   `Primary Goal(s) of this Plan`.
    *   `Scope of the Plan`.
    *   `Target Audience for the Plan Document`.
    *   `Key Stakeholders Involved in Execution`.
    *   `Timeframe Covered by the Plan`.
*   **Section 2: The Plan Document for Review:**
    *   `Link to the Plan Document` (Preferred).
    *   `Paste Key Sections or an Executive Summary` (Alternative): **Crucial for providing the content to be critiqued.**
*   **Section 3: Request for Critical Analysis & Improvement Suggestions:**
    *   Pre-filled with detailed questions for the AI, categorized by aspects (A-L) like "Clarity & Specificity of Goals & Objectives," "Feasibility & Realism," "Completeness & Thoroughness," "Risk Assessment & Mitigation," "Success Metrics, KPIs & Monitoring," and "Overall Coherence." The user typically does not modify this section.

This structure ensures the AI receives the actual plan document (or its core components) and sufficient strategic context to provide a thorough and insightful critique.