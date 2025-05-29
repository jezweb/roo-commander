# Documentation: Prompt Template `prompt_PL_05_new_process_implementation_plan_outline.md`

## 1. Purpose

This prompt template is designed to generate a **high-level implementation plan outline for a new internal process or workflow**. It guides the user to provide details about the new process, the problem it solves or opportunity it addresses, its goals, affected teams, key stakeholders, and any known dependencies or anticipated challenges. The AI is then tasked with creating a structured outline covering key phases and activities for a successful rollout, such as preparation and planning, communication, training, pilot testing (if applicable), full implementation, and post-implementation monitoring.

The goal is to provide a strategic framework for managing the change associated with introducing a new process, ensuring all critical steps are considered for smooth adoption and successful integration into the organization.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/planning/prompt_PL_05_new_process_implementation_plan_outline.md](prompt_PL_05_new_process_implementation_plan_outline.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `plan_request_client_onboarding_process_impl_v1.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Plan-NewProcessImplOutline-ClientOnboard-20250528100000`.
    *   `title`: Update to reflect the specific process, e.g., `"Implementation Plan Outline: New Client Onboarding Process"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Name of New Process/Workflow]`.
    *   In Section 1 ("New Process/Workflow Overview & Objectives"), provide comprehensive details about the new process, why it's needed, its goals, affected teams, key stakeholders, and desired implementation timeframe.
    *   In Section 2 ("Key Considerations for Implementation"), list any tool/technology changes, known dependencies, anticipated challenges, and existing documentation for the new process.
    *   The more context provided about the new process and the organizational environment, the more tailored the generated implementation plan outline will be.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model for plan outline generation.

## 3. TOML Frontmatter Schema (for an instance of `prompt_PL_05_new_process_implementation_plan_outline.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Plan-NewProcessImplOutline-[ProcessNameShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Plan-NewProcessImplOutline-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this plan generation request.
    *   *Placeholder in template:* `"New Process/Workflow Implementation Plan Outline Generation Request"`
*   **`prompt_type` (String, Fixed):** `"planning_and_outlining"`
*   **`domain` (String, Fixed):** `"change_management_process_implementation_planning"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "planning", "process_implementation", "workflow_rollout", "change_management", "project_plan", "sop_development"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/planning/prompt_PL_05_new_process_implementation_plan_outline.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_PL_05_new_process_implementation_plan_outline.md`)

*   **Subject Line:** Pre-filled; update `[Name of New Process/Workflow]`.
*   **Section 1: New Process/Workflow Overview & Objectives:**
    *   `Name of New Process/Workflow`.
    *   `Problem Solved / Opportunity Addressed`.
    *   `Primary Goal(s) of Implementing this New Process`.
    *   `Key Differences from Old Process (if applicable)`.
    *   `Affected Teams/Departments/Roles`.
    *   `Key Stakeholders for Implementation Success`.
    *   `Desired Go-Live Date or Implementation Timeframe`.
*   **Section 2: Key Considerations for Implementation:**
    *   `Tools or Technology Changes Involved (if any)`.
    *   `Known Dependencies for Implementation`.
    *   `Potential Challenges or Resistance Anticipated`.
    *   `Existing Documentation for the New Process (if any)`.
*   **Section 3: Request for Implementation Plan Outline:**
    *   This section instructs the AI on the desired structure of the output, detailing categories (A-I) for phases like "Preparation & Planning," "Communication & Awareness," "Training," "Pilot Testing/Phased Rollout," "Full Implementation," "Post-Implementation Monitoring," and "Review & Continuous Improvement," as well as "Key Milestones" and "Implementation Risks." The user typically does not modify these instructions.

This structure ensures the AI receives comprehensive background information about the new process and the context of its implementation to generate a relevant and useful high-level plan.