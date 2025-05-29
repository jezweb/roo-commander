# Documentation: Prompt Template `prompt_PL_01_project_plan_outline.md`

## 1. Purpose

This prompt template is designed to generate a **high-level project plan outline**. It guides the user to provide essential project context, including the project name, goals, objectives, stakeholders, known constraints, and any initial ideas about deliverables or phases. The AI is then tasked with creating a structured outline covering key project management areas such as scope, major phases, key activities, deliverables, timeline/milestones, stakeholders, resource categories, potential risks, and success metrics.

The goal is to provide a solid framework or starting point for more detailed project planning, helping to structure thoughts and ensure key areas are considered early in the planning process.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/planning/prompt_PL_01_project_plan_outline.md](prompt_PL_01_project_plan_outline.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `outline_request_new_website_project_v1.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Plan-ProjectOutline-NewWebsite-20250528060000`.
    *   `title`: Update to reflect the specific project, e.g., `"Project Plan Outline Request: New Company Website Launch"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Name of Project]`.
    *   In Section 1 ("Project Context & Objectives"), provide comprehensive details about the project's name, goals, specific objectives, stakeholders, constraints, and timeline.
    *   In Section 2 ("Key Information or Assumptions"), list high-level deliverables, success criteria, any initial thoughts on phases, and known dependencies.
    *   The more context provided, the more tailored and useful the generated outline will be.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model for outline generation.

## 3. TOML Frontmatter Schema (for an instance of `prompt_PL_01_project_plan_outline.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Plan-ProjectOutline-[ProjectNameShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Plan-ProjectOutline-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this outline generation request.
    *   *Placeholder in template:* `"High-Level Project Plan Outline Generation Request"`
*   **`prompt_type` (String, Fixed):** `"planning_and_outlining"`
*   **`domain` (String, Fixed):** `"project_management_planning"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "planning", "project_plan", "project_outline", "project_management", "strategy_execution"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/planning/prompt_PL_01_project_plan_outline.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_PL_01_project_plan_outline.md`)

*   **Subject Line:** Pre-filled; update `[Name of Project]`.
*   **Section 1: Project Context & Objectives:**
    *   `Project Name`.
    *   `Primary Goal(s) of the Project`.
    *   `Specific Measurable Objectives (if defined)`.
    *   `Key Stakeholders (Groups or Individuals)`.
    *   `Known Constraints or Limitations`.
    *   `Projected Start Date / End Date (or Duration, if known)`.
*   **Section 2: Key Information or Assumptions:**
    *   `Core Deliverables Expected (High-Level)`.
    *   `Main Success Criteria`.
    *   `Any Initial Ideas on Major Phases or Workstreams`.
    *   `Critical Dependencies (Internal/External, if known)`.
*   **Section 3: Request for Project Plan Outline:**
    *   This section instructs the AI on the desired structure of the output, detailing categories (A-I) like "Project Overview," "Scope Definition," "Major Phases & Key Activities," "Estimated Timeline & Key Milestones," "Potential Risks & Mitigation Ideas," etc. The user typically does not modify these instructions.

This structure ensures the AI receives comprehensive background information to generate a relevant and well-structured high-level project plan outline.