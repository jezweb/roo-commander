# Documentation: Prompt Template `prompt_17_graphic_design_asset_critique.md`

## 1. Purpose

This prompt template is designed to elicit a comprehensive **critique and enhancement suggestions for a specific graphic design asset**, such as a logo, advertisement, brochure, social media graphic, or infographic. It guides the user to provide the design asset itself (via link or description), along with context about its purpose, target audience, brand identity, key messages, and usage platform. The critiquing AI is then directed to analyze aspects such as visual appeal, clarity of message, composition, typography, color usage, brand alignment, originality, and overall effectiveness.

The goal is to receive actionable feedback to refine the design asset, making it more visually compelling, communicative, and successful in achieving its objectives.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/critique/prompt_17_graphic_design_asset_critique.md](prompt_17_graphic_design_asset_critique.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `critique_request_new_logo_concept_a.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Critique-GraphicDesignAsset-NewLogoA-20250527130000`.
    *   `title`: Update to reflect the specific asset, e.g., `"Graphic Design Critique: New Logo Concept A"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Name/Type of Asset]`.
    *   In Section 1 ("Design Asset Overview & Context"), provide details about the asset type, goals, target audience, brand identity, key messages, and usage context.
    *   **Crucially, in Section 2 ("The Design Asset for Review"):**
        *   Provide **direct links to the design asset file(s)**. This is essential for the AI to see the design.
        *   If linking is not possible, embed a preview image or, as a last resort, describe the visual elements in detail.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model for critique.

## 3. TOML Frontmatter Schema (for an instance of `prompt_17_graphic_design_asset_critique.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Critique-GraphicDesignAsset-[AssetNameShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Critique-GraphicDesignAsset-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this critique request.
    *   *Placeholder in template:* `"Graphic Design Asset Critique & Enhancement Request"`
*   **`prompt_type` (String, Fixed):** `"critique_and_improvement"`
*   **`domain` (String, Fixed):** `"graphic_design_visual_communication"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "critique", "graphic_design", "visual_design", "branding", "logo_design", "advertisement_design", "brochure_design"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/critique/prompt_17_graphic_design_asset_critique.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_17_graphic_design_asset_critique.md`)

*   **Subject Line:** Pre-filled; update `[Name/Type of Asset]`.
*   **Section 1: Design Asset Overview & Context:**
    *   `Asset Type`.
    *   `Primary Goal(s) of this Asset`.
    *   `Target Audience`.
    *   `Brand Identity/Guidelines (if applicable)`.
    *   `Key Message(s) this Asset Should Convey`.
    *   `Usage Context/Platform`.
    *   `Competitor Examples (Optional)`.
*   **Section 2: The Design Asset for Review:**
    *   `Link(s) to the Design Asset File(s)`: **Essential for providing the visual to be critiqued.**
    *   `Embed or Describe the Asset` (Alternative).
*   **Section 3: Request for Critical Analysis & Improvement Suggestions:**
    *   Pre-filled with detailed questions for the AI, categorized by aspects (A-L) like "Visual Appeal & Aesthetics," "Clarity & Communication of Message," "Composition & Layout," "Typography," "Color Palette," "Brand Alignment," and "Call to Action Effectiveness." The user typically does not modify this section.

This structure ensures the AI receives the visual asset and sufficient context about its strategic purpose and brand environment to provide a thorough and useful design critique.