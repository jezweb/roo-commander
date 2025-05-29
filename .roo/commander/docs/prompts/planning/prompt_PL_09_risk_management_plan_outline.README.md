# Documentation: Prompt Template `prompt_PL_09_risk_management_plan_outline.md`

## 1. Purpose

This prompt template is designed to generate a **high-level outline for a risk management plan** for a specific project or initiative. It guides the user to provide details about the project/initiative, its goals, stakeholders, timeline, and any initial thoughts on potential risk areas. The AI is then tasked with creating a structured outline covering key components of a risk management plan, including introduction, roles and responsibilities, risk identification processes, risk analysis and assessment (qualitative/quantitative), risk treatment strategies, risk monitoring and control, and risk reporting.

The goal is to provide a foundational structure that can be used to develop a more detailed and comprehensive risk management plan, ensuring a systematic approach to identifying, assessing, and managing potential threats to project success.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/planning/prompt_PL_09_risk_management_plan_outline.md](prompt_PL_09_risk_management_plan_outline.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `outline_request_risk_plan_software_rollout_v1.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Plan-RiskMgmtOutline-SoftwareRollout-20250528140000`.
    *   `title`: Update to reflect the specific project, e.g., `"Risk Management Plan Outline: New Software System Rollout"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Project/Initiative Name]`.
    *   In Section 1 ("Project/Initiative Overview & Context"), provide comprehensive details about the project name, description, goals, stakeholders, timeline, constraints, and any relevant history.
    *   In Section 2 ("Initial Thoughts on Potential Risk Areas"), list any preliminary ideas about technical, resource, market, or operational risks, or any specific risks already identified.
    *   The more context provided about the project and potential vulnerabilities, the more tailored the generated outline will be.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model for plan outline generation.

## 3. TOML Frontmatter Schema (for an instance of `prompt_PL_09_risk_management_plan_outline.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Plan-RiskMgmtOutline-[ProjectNameShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Plan-RiskMgmtOutline-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this plan generation request.
    *   *Placeholder in template:* `"Risk Management Plan Outline Generation Request"`
*   **`prompt_type` (String, Fixed):** `"planning_and_outlining"`
*   **`domain` (String, Fixed):** `"project_management_risk_assessment_planning"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "planning", "risk_management", "risk_assessment", "project_plan", "contingency_planning", "mitigation_strategy"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/planning/prompt_PL_09_risk_management_plan_outline.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_PL_09_risk_management_plan_outline.md`)

*   **Subject Line:** Pre-filled; update `[Project/Initiative Name]`.
*   **Section 1: Project/Initiative Overview & Context:**
    *   `Project/Initiative Name`.
    *   `Brief Description`.
    *   `Primary Goal(s)`.
    *   `Key Stakeholders`.
    *   `Projected Timeline/Duration`.
    *   `Known Constraints or Sensitivities`.
    *   `Previous Similar Projects/Initiatives (if any)`.
*   **Section 2: Initial Thoughts on Potential Risk Areas:**
    *   `Technical Risks (Initial thoughts)`.
    *   `Resource Risks (Initial thoughts)`.
    *   `Market/External Risks (Initial thoughts)`.
    *   `Operational/Process Risks (Initial thoughts)`.
    *   `Any specific risks already identified` (Optional).
*   **Section 3: Request for Risk Management Plan Outline:**
    *   This section instructs the AI on the desired structure of the output, detailing categories (A-H) for "Introduction & Purpose," "Roles & Responsibilities," "Risk Identification Process," "Risk Analysis & Assessment," "Risk Treatment / Response Strategies," "Risk Monitoring & Control," "Risk Reporting," and "Contingency Planning." The user typically does not modify these instructions.

This structure ensures the AI receives comprehensive background information about the project to generate a relevant and well-structured outline for its risk management plan.