# Template: template_00_session_question.md - Session Q&A Log

## 1. Purpose

This template is for recording specific questions asked (by user or AI) and answers provided during an active user interaction session. It helps capture clarifications, information exchange, and resolutions to queries that arise during the session.

## 2. TOML Frontmatter Schema

*   `id` (String, Required, Auto-generated Format): Unique identifier for this Q&A artifact.
    *   *Format:* `QNA-[BriefQuestionTopic]-[YYMMDDHHMMSS]`
    *   *Example:* `QNA-ApiEndpointDetails-240101190000`
*   `title` (String, Required): A concise title summarizing the main question or topic.
    *   *Example:* `"Clarification on API Endpoint for User Data"`
*   `created_date` (String, Required, Timestamp): Timestamp of artifact creation.
*   `original_session_id` (String, Required): The `RooComSessionID` of the session this Q&A belongs to.
*   `question_by` (String, Optional): Who asked the question (e.g., "User", "Mode:dev-react").
*   `answered_by` (String, Optional): Who answered the question (e.g., "Mode:prime-coordinator", "User").
*   `status` (String, Optional): Status of the question.
    *   *Options:* `"❓ Asked"`, `"💬 Answered"`, `"⏳ Pending Further Info"`
*   `tags` (Array of Strings, Optional): Keywords (e.g., "question", "clarification", "api", "user-data").

## 3. Markdown Body Structure

*   **`## Question`**:
    *   The full text of the question asked.
*   **`## Answer / Information Provided`**:
    *   The full text of the answer or information provided in response.
    *   Include links or references if applicable.
*   **`## Context / Relevance`**:
    *   Briefly explain the context in which the question arose and its relevance to the session.

## 4. Usage Guidelines

*   Use this to log distinct Q&A exchanges that are important for session context.
*   Store these artifacts in the `artifacts/questions/` (or `qna/`) subdirectory of the relevant session folder.
*   The `session_log.md` should reference this artifact.
*   This helps in understanding the flow of information and clarifications during the session.