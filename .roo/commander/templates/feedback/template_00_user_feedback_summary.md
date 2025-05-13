+++
# --- User Feedback Summary ---
id = "FEEDBACK-SUMMARY-[Topic]-[YYYYMMDD]" # e.g., FEEDBACK-SUMMARY-RCV8-INITIAL-UX-20250815
title = "User Feedback Summary: [Topic/Feature/Version Being Reviewed]"
summary_date = "{{YYYYMMDD}}"
status = "draft" # Options: draft, finalized
tags = ["feedback", "summary", "user-research", "[topic_tag]"]
template_schema_doc = ".roo/commander/templates/feedback/template_00_user_feedback_summary.README.md"

# --- Feedback Context ---
# feedback_source = "[e.g., User interviews, Survey responses, GitHub issues, Session artifact FDBK- files]"
# date_range_of_feedback = "[e.g., 2025-08-01 to 2025-08-14]"
# number_of_respondents_or_sources = 0
# summarized_by = "[Role/Name]"

# --- Key Themes (Summary) ---
# positive_themes = [
#    "Theme 1: [e.g., Clarity of initial prompts]",
#    "Theme 2: [e.g., Usefulness of session artifacts]"
# ]
# areas_for_improvement_themes = [
#    "Theme A: [e.g., Speed of manager delegation]",
#    "Theme B: [e.g., Difficulty finding specific KB articles]"
# ]
# key_suggestions_received = [
#    "Suggestion X: [e.g., Add a global search for KBs]",
#    "Suggestion Y: [e.g., Provide more examples in developer guides]"
# ]
+++

# User Feedback Summary: {{ title | default: "[Specify Topic/Feature]" }}

*   **Summary Date:** `{{ summary_date }}`
*   **Feedback Source(s):** `{{ feedback_source | default: "[Specify sources]" }}`
*   **Feedback Period:** `{{ date_range_of_feedback | default: "[Specify date range]" }}`
*   **Number of Respondents/Sources:** `{{ number_of_respondents_or_sources | default: "N/A" }}`

## 1. Executive Summary of Feedback

[Provide a 2-3 paragraph overview of the key findings from the user feedback. What were the most prominent positive points and areas for improvement?]

## 2. Positive Feedback Themes 👍

[Detail the recurring positive themes. Use bullet points and include illustrative (anonymized) quotes if possible.]

*   **Theme 1: `{{ positive_themes[0] | default: "[Positive Theme 1]" }}`**
    *   [Details and examples/quotes]
*   **Theme 2: `{{ positive_themes[1] | default: "[Positive Theme 2]" }}`**
    *   [Details and examples/quotes]

## 3. Areas for Improvement / Pain Points 👎

[Detail the recurring negative themes or pain points identified by users. Use bullet points and include illustrative (anonymized) quotes.]

*   **Improvement Area 1: `{{ areas_for_improvement_themes[0] | default: "[Improvement Theme A]" }}`**
    *   [Details and examples/quotes]
*   **Improvement Area 2: `{{ areas_for_improvement_themes[1] | default: "[Improvement Theme B]" }}`**
    *   [Details and examples/quotes]

## 4. Key Suggestions & Feature Requests ✨

[List specific suggestions or feature requests made by users.]

*   Suggestion 1: `{{ key_suggestions_received[0] | default: "[Suggestion X]" }}`
    *   [Details]
*   Suggestion 2: `{{ key_suggestions_received[1] | default: "[Suggestion Y]" }}`
    *   [Details]

## 5. Actionable Insights & Recommendations 🚀

[Based on the feedback, what are the key actionable insights? What recommendations can be made for product improvements, documentation updates, or process changes? Assign potential owners or next steps if possible.]

*   **Insight/Recommendation 1:**
    *   Action:
    *   (Optional) Potential Owner/Mode:
*   **Insight/Recommendation 2:**
    *   Action:

## 6. Appendix: Raw Feedback Pointers (Optional)

[Links to raw feedback data, survey results, or specific session artifact feedback files (e.g., `FDBK-*.md` files from session artifacts) if applicable and not containing PII.]

This summary provides a consolidated view of user feedback regarding `[Topic/Feature]`.