# Documentation: Prompt Template `prompt_PL_07_research_project_plan_outline.md`

## 1. Purpose

This prompt template is designed to generate a **high-level plan outline for a research project**, such as market research, user research, or competitive analysis. It guides the user to provide details about the research topic, primary questions, objectives, target audience for the findings, and any initial thoughts on methodology or scope. The AI is then tasked with creating a structured outline covering key research planning elements including scope definition, proposed methodology, data collection plan, data analysis plan, timeline/milestones, resource requirements, potential challenges, ethical considerations, and deliverables.

The goal is to provide a strategic framework that helps in systematically planning and executing a research project effectively to answer key questions and inform decisions.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/planning/prompt_PL_07_research_project_plan_outline.md](prompt_PL_07_research_project_plan_outline.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `plan_request_customer_churn_research_v1.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Plan-ResearchProjectOutline-ChurnStudy-20250528120000`.
    *   `title`: Update to reflect the specific research project, e.g., `"Research Plan Outline: Customer Churn Driver Analysis"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Topic/Focus of Research]`.
    *   In Section 1 ("Research Project Overview & Objectives"), provide comprehensive details about the research title/topic, primary research questions, key objectives, target audience for findings, decisions to be informed, constraints, and desired timeline.
    *   In Section 2 ("Key Information & Scope"), list target subjects/population, initial thoughts on methodology (if any), key data points to collect, and the scope (inclusions/exclusions).
    *   The more specific the input, especially regarding research questions and objectives, the more tailored the generated plan outline will be.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model for plan outline generation.

## 3. TOML Frontmatter Schema (for an instance of `prompt_PL_07_research_project_plan_outline.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Plan-ResearchProjectOutline-[ResearchTopicShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Plan-ResearchProjectOutline-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this plan generation request.
    *   *Placeholder in template:* `"Research Project Plan Outline Generation Request"`
*   **`prompt_type` (String, Fixed):** `"planning_and_outlining"`
*   **`domain` (String, Fixed):** `"research_planning_methodology"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "planning", "research_plan", "research_outline", "market_research", "user_research", "project_management"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/planning/prompt_PL_07_research_project_plan_outline.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_PL_07_research_project_plan_outline.md`)

*   **Subject Line:** Pre-filled; update `[Topic/Focus of Research]`.
*   **Section 1: Research Project Overview & Objectives:**
    *   `Research Project Title/Topic`.
    *   `Primary Research Question(s)`.
    *   `Key Objectives of the Research`.
    *   `Target Audience for the Research Findings`.
    *   `Decisions to be Informed by this Research`.
    *   `Known Constraints or Limitations`.
    *   `Desired Timeline for Research Completion`.
*   **Section 2: Key Information & Scope:**
    *   `Target Subjects/Population (if applicable)`.
    *   `Initial Thoughts on Research Methodology (if any)`.
    *   `Key Information or Data Points to Collect`.
    *   `Scope of Research (Inclusions/Exclusions)`.
*   **Section 3: Request for Research Project Plan Outline:**
    *   This section instructs the AI on the desired structure of the output, detailing categories (A-J) like "Research Project Overview," "Scope Definition," "Proposed Research Methodology," "Data Collection Plan," "Data Analysis Plan," "Estimated Timeline & Key Milestones," "Potential Challenges & Ethical Considerations," and "Deliverables & Reporting." The user typically does not modify these instructions.

This structure ensures the AI receives comprehensive background information about the research needs to generate a relevant and well-structured high-level research plan.