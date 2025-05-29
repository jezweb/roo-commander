# Documentation: Prompt Template `prompt_ID_04_problem_reframe_solution_brainstorm.md`

## 1. Purpose

This prompt template is designed to facilitate **creative problem-solving by first reframing a given problem and then brainstorming innovative solutions for each reframing**. It guides the user to provide a detailed description of a problem, its context, current assumed causes, and desired outcomes. The AI is then tasked with generating multiple distinct ways to reinterpret or reframe the problem. For each of these reframings, the AI will then brainstorm a set of innovative or unconventional solution ideas, outlining their benefits, novelty, and potential first steps.

The goal is to encourage out-of-the-box thinking, challenge assumptions, and explore a wider, more creative range of potential solutions than might be generated through traditional problem-solving approaches.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/ideation/prompt_ID_04_problem_reframe_solution_brainstorm.md](prompt_ID_04_problem_reframe_solution_brainstorm.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `ideation_request_low_engagement_solutions.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Ideation-ProblemReframingSolutions-LowEngagement-20250528090000`.
    *   `title`: Update to reflect the specific problem, e.g., `"Problem Reframing: Low User Engagement on Mobile App"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with a `[Brief Description of Problem]`.
    *   In Section 1 ("Problem Context & Current Understanding"), provide a **detailed problem statement**, current assumed causes, previous attempts to solve, desired outcomes, stakeholders, and any constraints. The more context, the better the reframing.
    *   Specify the `[Number]` of reframings and the `[Number]` of solutions per reframing requested in Section 2.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model for ideation.

## 3. TOML Frontmatter Schema (for an instance of `prompt_ID_04_problem_reframe_solution_brainstorm.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Ideation-ProblemReframingSolutions-[ProblemShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Ideation-ProblemReframingSolutions-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this ideation request.
    *   *Placeholder in template:* `"Problem Reframing & Innovative Solution Brainstorming Request"`
*   **`prompt_type` (String, Fixed):** `"ideation_and_brainstorming"`
*   **`domain` (String, Fixed):** `"problem_solving_innovation_strategy"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "ideation", "brainstorming", "problem_solving", "innovation", "creative_thinking", "strategy", "solution_generation"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/ideation/prompt_ID_04_problem_reframe_solution_brainstorm.README.md"` (adjust path if necessary).

## 4. Markdown Body Structure (for an instance of `prompt_ID_04_problem_reframe_solution_brainstorm.md`)

*   **Subject Line:** User provides a brief description of the problem.
*   **Section 1: Problem Context & Current Understanding:**
    *   `Detailed Problem Statement`: **Crucial for the AI to understand the core issue.**
    *   `Current Assumed Causes (if any)`.
    *   `Previous Attempts to Solve (if any, and their outcomes)`.
    *   `Desired Outcome / Ideal Future State`.
    *   `Key Stakeholders Involved/Affected`.
    *   `Constraints or Limitations (if any)`.
*   **Section 2: Request for Problem Reframing & Solution Brainstorming:**
    *   **Part 1: Problem Reframing:** User specifies the number of distinct reframings desired. For each, the AI should provide the reframed statement and rationale.
    *   **Part 2: Innovative Solution Brainstorming:** For each reframing, the user specifies the number of solution ideas. For each solution, the AI should provide the concept, how it addresses the reframed problem, benefits, novelty, and potential first steps.
*   **Example Structure for Output:** Provides a clear format for the AI's response.
*   **Guidelines for Generation:** Pre-filled instructions for the AI to ensure reframings are distinct and solutions are creative.

This structured approach ensures the AI first helps broaden the understanding of the problem through reframing, then generates targeted, innovative solutions for these new perspectives.