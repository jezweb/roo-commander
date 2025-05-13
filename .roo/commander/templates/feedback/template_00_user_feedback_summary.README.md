# Documentation: Template `template_00_user_feedback_summary.md`

## 1. Purpose

This template defines the standard structure for creating a **User Feedback Summary document**. Its purpose is to consolidate and analyze feedback received from users (or other stakeholders) regarding a specific feature, mode, version of Roo Commander V8, or the overall user experience.

This summary helps in identifying trends, pain points, positive aspects, and actionable insights for future improvements.

## 2. Usage

1.  **After Collecting Feedback:** Once a round of user feedback has been collected (e.g., through interviews, surveys, session artifact `FDBK-*.md` files, GitHub issues):
    *   Create a new directory for feedback summaries if needed (e.g., `[.roo/commander/docs/feedback/](.roo/commander/docs/feedback/)`).
    *   Copy `[.roo/commander/templates/feedback/template_00_user_feedback_summary.md](.roo/commander/templates/feedback/template_00_user_feedback_summary.md)` into this directory.
2.  **Rename File:** Rename it descriptively (e.g., `feedback_summary_rcv8_initial_ux_aug2025.md`).
3.  **Populate TOML Frontmatter:**
    *   `id`: Unique ID for the summary.
    *   `title`: `User Feedback Summary: [Topic/Feature/Version]`.
    *   `summary_date`: Date this summary was compiled.
    *   Detail `feedback_source`, `date_range_of_feedback`, `number_of_respondents_or_sources`.
    *   Summarize `positive_themes`, `areas_for_improvement_themes`, and `key_suggestions_received` in the TOML for quick overview.
4.  **Synthesize Feedback in Markdown Body:**
    *   Write the Executive Summary.
    *   Elaborate on positive themes, areas for improvement, and key suggestions, using illustrative examples or anonymized quotes.
    *   Crucially, derive Actionable Insights & Recommendations.

## 3. TOML Frontmatter Schema

*   **`id` (String, Required):** Unique ID. Convention: `FEEDBACK-SUMMARY-[Topic]-[YYYYMMDD]`.
*   **`title` (String, Required):** Title of the feedback summary.
*   **`summary_date` (String, Required):** Date summary was compiled.
*   **`status` (String, Required):** (e.g., `"draft"`, `"finalized"`).
*   **`tags` (Array of Strings, Required):** Include `"feedback"`, `"summary"`, `"user-research"`, and a topic tag.
*   **`template_schema_doc` (String, Required):** `".roo/commander/templates/feedback/template_00_user_feedback_summary.README.md"`

### Feedback Context (TOML)

*   `feedback_source` (String, Optional): How/where feedback was collected.
*   `date_range_of_feedback` (String, Optional): Period feedback pertains to.
*   `number_of_respondents_or_sources` (Integer, Optional).
*   `summarized_by` (String, Optional): Person/role who compiled summary.

### Key Themes (Summary - TOML)

*   `positive_themes` (Array of Strings, Optional): High-level positive points.
*   `areas_for_improvement_themes` (Array of Strings, Optional): High-level negative points.
*   `key_suggestions_received` (Array of Strings, Optional): Key user suggestions.

## 4. Markdown Body Structure

*   `# User Feedback Summary: {{ title }}`: Main title.
*   Header section with Summary Date, Source, Period, Respondent Count.
*   `## 1. Executive Summary of Feedback`
*   `## 2. Positive Feedback Themes 👍`
*   `## 3. Areas for Improvement / Pain Points 👎`
*   `## 4. Key Suggestions & Feature Requests ✨`
*   `## 5. Actionable Insights & Recommendations 🚀`
*   `## 6. Appendix: Raw Feedback Pointers (Optional)`

This template helps in systematically processing user feedback to drive product and system improvements.