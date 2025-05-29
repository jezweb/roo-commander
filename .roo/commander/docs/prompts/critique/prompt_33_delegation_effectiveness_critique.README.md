# Documentation: Prompt Template `prompt_33_delegation_effectiveness_critique.md`

## 1. Purpose

This prompt template is designed to elicit a comprehensive **critique and enhancement suggestions for a manager's delegation effectiveness**, either for a specific instance of delegation or their general approach. It guides the manager (delegator) to describe the task delegated, the delegatee, the reasons for delegation, the desired outcome, and the process they followed (or plan to follow) for communication, granting authority, providing support, and follow-up. The critiquing AI is then directed to analyze aspects such as clarity of the task and purpose, appropriateness for the delegatee, clarity of expectations, sufficiency of authority and resources, effectiveness of check-ins, and the developmental impact of the delegation.

The goal is to receive actionable feedback to help the manager refine their delegation skills, leading to better team empowerment, employee development, and more efficient achievement of results.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/critique/prompt_33_delegation_effectiveness_critique.md](prompt_33_delegation_effectiveness_critique.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `critique_request_delegating_report_to_jane.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Critique-DelegationEffectiveness-ReportToJane-20250528050000`.
    *   `title`: Update to reflect the specific delegation, e.g., `"Delegation Critique: Market Research Report to Jane D."`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add the manager's name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Task/Responsibility Delegated] to [Delegatee's Name/Role]`.
    *   In Section 1 ("Delegation Context & Overview"), provide details about the task, delegatee, reasons for delegation, desired outcome, timeline, and the focus of the critique (specific instance, future plan, or general approach).
    *   **Crucially, in Section 2 ("My Delegation Process & Communication"):**
        *   Describe in detail how the task was/is communicated, expectations set, authority granted, resources provided, and how check-ins/follow-up are handled.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model for critique.

## 3. TOML Frontmatter Schema (for an instance of `prompt_33_delegation_effectiveness_critique.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Critique-DelegationEffectiveness-[TaskShort]-[DelegateeShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Critique-DelegationEffectiveness-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this critique request.
    *   *Placeholder in template:* `"Delegation Effectiveness Critique & Enhancement Request"`
*   **`prompt_type` (String, Fixed):** `"critique_and_improvement"`
*   **`domain` (String, Fixed):** `"management_leadership_delegation"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** Manager/delegator filling out the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug (Manager's Name)]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "critique", "delegation", "management_skills", "leadership_development", "team_empowerment", "task_assignment"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/critique/prompt_33_delegation_effectiveness_critique.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_33_delegation_effectiveness_critique.md`)

*   **Subject Line:** Pre-filled; update `[Task/Responsibility Delegated] to [Delegatee's Name/Role]`.
*   **Section 1: Delegation Context & Overview:**
    *   `Specific Task/Responsibility Delegated`.
    *   `Delegatee(s)`.
    *   `My (Delegator's) Reasons for Delegating this Task`.
    *   `Desired Outcome/Standard of Completion`.
    *   `Timeline/Deadline for the Delegated Task`.
    *   `Focus of this Critique`.
*   **Section 2: My Delegation Process & Communication (as I recall or planned it):**
    *   `Initial Communication & Task Assignment`: **Crucial for describing how the delegation was initiated.**
    *   `Clarity of Expectations & Deliverables`.
    *   `Level of Authority Granted`.
    *   `Resources & Support Provided`.
    *   `Check-in / Follow-up Plan`.
    *   `Feedback (Given or Received, if a past instance)`.
*   **Section 3: Request for Critical Analysis & Improvement Suggestions:**
    *   Pre-filled with detailed questions for the AI, categorized by aspects (A-L) like "Clarity of Task & Purpose," "Appropriateness of Task for Delegatee," "Sufficiency of Authority & Empowerment," "Effectiveness of Check-ins," "Developmental Aspect," and "My (Delegator's) Mindset." The user typically does not modify this section.

This structure ensures the AI receives a comprehensive account of the delegation situation from the manager's perspective, enabling a focused critique on improving their delegation skills.