# Template: template_00_session_learning.md - Session Learning/Problem/Solution

## 1. Purpose

This template is for documenting specific problems encountered, solutions devised, insights gained, or significant learnings that occurred during an active user interaction session. These artifacts are crucial for knowledge sharing, preventing repeated mistakes, and building a repository of practical solutions.

## 2. TOML Frontmatter Schema

*   `id` (String, Required, Auto-generated Format): Unique identifier for this learning artifact.
    *   *Format:* `LEARNING-[BriefProblemOrInsight]-[YYMMDDHHMMSS]`
    *   *Example:* `LEARNING-ApiRateLimitWorkaround-240101141500`
*   `title` (String, Required): A concise title summarizing the learning, problem, or solution.
    *   *Example:* `"Workaround for API Rate Limiting Issue"`
*   `created_date` (String, Required, Timestamp): Timestamp of artifact creation.
*   `original_session_id` (String, Required): The `RooComSessionID` of the session this learning belongs to.
*   `problem_statement` (String, Optional): A clear description of the problem or challenge encountered.
*   `solution_description` (String, Optional): A detailed explanation of the solution or workaround implemented.
*   `key_insight` (String, Optional): The core learning or "aha!" moment.
*   `tags` (Array of Strings, Optional): Keywords for discoverability (e.g., "api", "performance", "workaround", "debugging").
*   `related_artifacts` (Array of Strings, Optional): Paths to other relevant session artifacts (e.g., notes, snippets).

## 3. Markdown Body Structure

The Markdown body should elaborate on the TOML fields:

*   **`## Problem / Context`**:
    *   Describe the situation or problem encountered in more detail.
    *   What were you trying to achieve? What went wrong?
*   **`## Investigation / Steps Taken`**:
    *   Outline the steps taken to diagnose or understand the problem.
*   **`## Solution / Workaround Implemented`**:
    *   Detail the solution or workaround. Include code snippets if applicable.
*   **`## Key Learning / Insight`**:
    *   Explain the main takeaway or insight gained from this experience.
*   **`## Recommendations / Future Considerations`**:
    *   Any advice for others facing similar issues, or considerations for future prevention/improvement.

## 4. Usage Guidelines

*   Use this template to capture significant learnings, especially those related to problem-solving.
*   Store these artifacts in the `artifacts/learnings/` subdirectory of the relevant session folder.
*   The `session_log.md` should reference this learning artifact.
*   This helps build a knowledge base within the session context.