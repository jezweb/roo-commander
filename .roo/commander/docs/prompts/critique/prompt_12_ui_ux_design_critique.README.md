# Documentation: Prompt Template `prompt_12_ui_ux_design_critique.md`

## 1. Purpose

This prompt template is designed to elicit a comprehensive **critique and enhancement suggestions for a UI/UX design**. It guides the user to provide links to design artifacts (e.g., Figma, XD, prototypes, mockups), along with context about the product/feature, target audience, key user tasks, platform, and design stage. The critiquing AI is then directed to analyze aspects such as usability heuristics, information architecture, visual design, interaction design, content clarity, accessibility, and overall user experience.

The goal is to receive actionable feedback to create a more intuitive, engaging, accessible, and effective user experience that meets user needs and business objectives.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/critique/prompt_12_ui_ux_design_critique.md](prompt_12_ui_ux_design_critique.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `critique_request_dashboard_design_v3.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Critique-UIUXDesign-DashboardV3-20250526210000`.
    *   `title`: Update to reflect the specific design, e.g., `"UI/UX Design Critique: Web App Dashboard v3"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Name of Product/Feature/Screen(s)]`.
    *   In Section 1 ("Design Overview & Context"), provide details about the product/feature purpose, target audience, key user tasks, platform, and current design stage.
    *   **Crucially, in Section 2 ("Design Artifacts"):**
        *   Provide **direct links to the design artifacts** (Figma, Adobe XD, InVision, image files, etc.). This is essential for the AI to see the design.
        *   Alternatively, or for specific focus, describe key screens/flows if linking is problematic (though links are strongly preferred).
5.  **Submit to AI:** Provide the completed Markdown content to the AI model for critique.

## 3. TOML Frontmatter Schema (for an instance of `prompt_12_ui_ux_design_critique.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Critique-UIUXDesign-[FeatureNameShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Critique-UIUXDesign-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this critique request.
    *   *Placeholder in template:* `"UI/UX Design Critique & Enhancement Request"`
*   **`prompt_type` (String, Fixed):** `"critique_and_improvement"`
*   **`domain` (String, Fixed):** `"ui_ux_design"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "critique", "ui_design", "ux_design", "user_experience", "user_interface", "design_review"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/critique/prompt_12_ui_ux_design_critique.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_12_ui_ux_design_critique.md`)

*   **Subject Line:** Pre-filled; update `[Name of Product/Feature/Screen(s)]`.
*   **Section 1: Design Overview & Context:**
    *   `Product/Feature Purpose`.
    *   `Target Audience/User Personas`.
    *   `Key User Tasks/Goals for This Design`.
    *   `Platform(s)`.
    *   `Current Stage of Design`.
*   **Section 2: Design Artifacts:**
    *   `Link(s) to Design Artifacts`: **Essential for providing the visual design to be critiqued.**
    *   `Describe Key Screens/Flows` (Alternative/supplement).
*   **Section 3: Request for Critical Analysis & Improvement Suggestions:**
    *   Pre-filled with detailed questions for the AI, categorized by aspects (A-J) like "Usability & User-Centricity (Heuristics)," "Information Architecture & Navigation," "Visual Design & Aesthetics," "Interaction Design & Feedback," "Accessibility," and "Task Completion & Goal Achievement." The user typically does not modify this section.

This structure ensures the AI receives the visual designs and the necessary context to perform a thorough UI/UX review based on established principles and best practices.