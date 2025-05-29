# Documentation: Prompt Template `prompt_19_marketing_campaign_plan_critique.md`

## 1. Purpose

This prompt template is designed to elicit a comprehensive **critique and enhancement suggestions for a marketing campaign plan**. It guides the user to provide the campaign plan document (or key sections), along with context about its goals, target audience, product/service, duration, and budget. The critiquing AI is then directed to analyze aspects such as clarity of objectives, target audience understanding, messaging, channel strategy, content plan, budget allocation, timeline, measurement plan, and overall strategic coherence.

The goal is to receive actionable feedback to refine the campaign plan, making it more effective, efficient, and increasing its likelihood of achieving its marketing objectives.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/critique/prompt_19_marketing_campaign_plan_critique.md](prompt_19_marketing_campaign_plan_critique.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `critique_request_product_launch_campaign_v1.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Critique-MarketingCampaignPlan-ProductLaunch-20250527150000`.
    *   `title`: Update to reflect the specific campaign, e.g., `"Marketing Campaign Critique: Product X Launch Plan"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Name of Campaign]`.
    *   In Section 1 ("Campaign Plan Overview & Context"), provide details about the campaign name, goals, target audience, product/service, duration, budget, and competitors.
    *   **Crucially, in Section 2 ("The Marketing Campaign Plan Document for Review"):**
        *   Provide a **direct link to the full campaign plan document** (preferred).
        *   Alternatively, or for specific focus, **paste key sections or an executive summary** into the designated area.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model for critique.

## 3. TOML Frontmatter Schema (for an instance of `prompt_19_marketing_campaign_plan_critique.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Critique-MarketingCampaignPlan-[CampaignNameShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Critique-MarketingCampaignPlan-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this critique request.
    *   *Placeholder in template:* `"Marketing Campaign Plan Critique & Enhancement Request"`
*   **`prompt_type` (String, Fixed):** `"critique_and_improvement"`
*   **`domain` (String, Fixed):** `"marketing_strategy_campaign_planning"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "critique", "marketing_campaign", "marketing_plan", "digital_marketing", "advertising", "campaign_strategy"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/critique/prompt_19_marketing_campaign_plan_critique.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_19_marketing_campaign_plan_critique.md`)

*   **Subject Line:** Pre-filled; update `[Name of Campaign]`.
*   **Section 1: Campaign Plan Overview & Context:**
    *   `Campaign Name/Theme`.
    *   `Primary Goal(s) of this Campaign` (SMART goals).
    *   `Target Audience`.
    *   `Product/Service Being Promoted`.
    *   `Campaign Duration`.
    *   `Overall Budget (if applicable)`.
    *   `Key Competitors & Their Likely Activities (if known)`.
*   **Section 2: The Marketing Campaign Plan Document for Review:**
    *   `Link to the Campaign Plan Document` (Preferred).
    *   `Paste Key Sections or an Executive Summary` (Alternative): **Crucial for providing the plan content to be critiqued.**
*   **Section 3: Request for Critical Analysis & Improvement Suggestions:**
    *   Pre-filled with detailed questions for the AI, categorized by aspects (A-L) like "Clarity & Measurability of Objectives & KPIs," "Target Audience Understanding," "Key Messaging & Creative Strategy," "Channel Strategy & Mix," "Budget Allocation," "Measurement & Tracking," and "Overall Strategic Soundness." The user typically does not modify this section.

This structure ensures the AI receives the campaign plan (or its core components) and sufficient strategic context to provide a thorough and insightful critique.