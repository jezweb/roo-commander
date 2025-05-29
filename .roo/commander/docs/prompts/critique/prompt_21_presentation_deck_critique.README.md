# Documentation: Prompt Template `prompt_21_presentation_deck_critique.md`

## 1. Purpose

This prompt template is designed to elicit a comprehensive **critique and enhancement suggestions for a presentation deck (slides)**. It guides the user to provide the presentation file itself (e.g., Google Slides, PowerPoint), along with context about its purpose, target audience, setting, and key messages. The critiquing AI is then directed to analyze aspects such as narrative flow, content clarity, visual design, information hierarchy, use of visuals, engagement factor, persuasiveness, and overall effectiveness as a communication tool.

The goal is to receive actionable feedback to refine the presentation deck, making it more impactful, clear, engaging, and successful in achieving its objectives.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/critique/prompt_21_presentation_deck_critique.md](prompt_21_presentation_deck_critique.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `critique_request_q3_sales_deck_v2.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Critique-PresentationDeck-Q3Sales-20250527170000`.
    *   `title`: Update to reflect the specific presentation, e.g., `"Presentation Deck Critique: Q3 Sales Pitch to Client X"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Title/Purpose of Presentation]`.
    *   In Section 1 ("Presentation Overview & Context"), provide details about the presentation's title, goals, target audience, setting, key messages, and desired audience action.
    *   **Crucially, in Section 2 ("The Presentation Deck for Review"):**
        *   Provide a **direct link to the presentation deck file**. This is essential for the AI to review the slides. Ensure view access is granted.
        *   Indicate if speaker notes are available and relevant for the critique.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model for critique.

## 3. TOML Frontmatter Schema (for an instance of `prompt_21_presentation_deck_critique.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Critique-PresentationDeck-[PresentationPurposeShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Critique-PresentationDeck-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this critique request.
    *   *Placeholder in template:* `"Presentation Deck Content & Design Critique & Enhancement Request"`
*   **`prompt_type` (String, Fixed):** `"critique_and_improvement"`
*   **`domain` (String, Fixed):** `"presentations_communication_design"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "critique", "presentation_deck", "slides", "public_speaking", "visual_communication", "sales_pitch"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/critique/prompt_21_presentation_deck_critique.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_21_presentation_deck_critique.md`)

*   **Subject Line:** Pre-filled; update `[Title/Purpose of Presentation]`.
*   **Section 1: Presentation Overview & Context:**
    *   `Presentation Title/Topic`.
    *   `Primary Goal(s) of this Presentation`.
    *   `Target Audience`.
    *   `Presenter(s) (if relevant)`.
    *   `Presentation Setting/Format`.
    *   `Key Message(s) or Takeaways`.
    *   `Desired Action from Audience (if any)`.
*   **Section 2: The Presentation Deck for Review:**
    *   `Link to the Presentation Deck`: **Essential for providing the slides to be critiqued.**
    *   `Describe Key Slides or Sections` (Alternative, less preferred).
    *   `Speaker Notes (if available and relevant)`.
*   **Section 3: Request for Critical Analysis & Improvement Suggestions:**
    *   Pre-filled with detailed questions for the AI, categorized by aspects (A-L) like "Narrative Flow & Storytelling," "Clarity & Conciseness of Content," "Visual Design & Aesthetics," "Use of Imagery, Charts, & Graphics," "Engagement Factor," and "Call to Action." The user typically does not modify this section.

This structure ensures the AI receives the actual presentation deck and sufficient context about its purpose, audience, and delivery setting to provide a thorough and insightful critique.