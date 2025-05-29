# Documentation: Prompt Template `prompt_PL_06_product_launch_plan_checklist.md`

## 1. Purpose

This prompt template is designed to generate a **comprehensive checklist for a product or feature launch plan**. It guides the user to provide details about the product/feature being launched, its goals, target audience, key differentiators, target launch date, and involved teams. The AI is then tasked with creating a detailed checklist organized by common launch phases or functional areas, such as product readiness, marketing & communications, sales enablement, customer support readiness, launch day execution, and post-launch activities.

The goal is to provide a structured and extensive list of tasks and considerations to help ensure a smooth, well-coordinated, and successful product or feature launch, minimizing the risk of overlooking critical steps.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/planning/prompt_PL_06_product_launch_plan_checklist.md](prompt_PL_06_product_launch_plan_checklist.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `checklist_request_mobile_app_v3_launch.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Plan-ProductLaunchChecklist-MobileAppV3-20250528110000`.
    *   `title`: Update to reflect the specific launch, e.g., `"Product Launch Checklist: Mobile App v3.0"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Name of Product/Feature]`.
    *   In Section 1 ("Product/Feature Launch Overview & Objectives"), provide comprehensive details about the product/feature, launch goals, target audience, differentiators, target launch date, and scope of launch.
    *   In Section 2 ("Key Context & Considerations"), list involved teams, relationship to existing products (if applicable), initial ideas for marketing/sales channels, known dependencies, and budget considerations.
    *   The more specific the input, the more tailored and relevant the generated checklist will be.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model for checklist generation.

## 3. TOML Frontmatter Schema (for an instance of `prompt_PL_06_product_launch_plan_checklist.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Plan-ProductLaunchChecklist-[ProductNameShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Plan-ProductLaunchChecklist-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this checklist generation request.
    *   *Placeholder in template:* `"Product/Feature Launch Plan Checklist Generation Request"`
*   **`prompt_type` (String, Fixed):** `"planning_and_outlining"`
*   **`domain` (String, Fixed):** `"product_management_marketing_launch_planning"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "planning", "product_launch", "feature_launch", "go_to_market", "checklist", "project_management", "marketing_plan"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/planning/prompt_PL_06_product_launch_plan_checklist.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_PL_06_product_launch_plan_checklist.md`)

*   **Subject Line:** Pre-filled; update `[Name of Product/Feature]`.
*   **Section 1: Product/Feature Launch Overview & Objectives:**
    *   `Product/Feature Name`.
    *   `Brief Description`.
    *   `Primary Goal(s) of this Launch`.
    *   `Target Audience for this Product/Feature`.
    *   `Key Differentiators / Unique Selling Proposition (USP)`.
    *   `Target Launch Date / Window`.
    *   `Scope of Launch`.
*   **Section 2: Key Context & Considerations:**
    *   `Key Teams Involved in Launch`.
    *   `Existing Product (if this is a feature launch or update)`.
    *   `Marketing & Sales Channels to be Utilized (Initial thoughts)`.
    *   `Known Dependencies or Critical Path Items`.
    *   `Budget Considerations (High-Level, if relevant)`.
*   **Section 3: Request for Launch Plan Checklist:**
    *   This section instructs the AI on the desired structure of the output, suggesting categories (A-F) like "Product Readiness," "Marketing & Communications (Go-To-Market)," "Sales Enablement," "Customer Support & Operations Readiness," "Launch Day Execution," and "Post-Launch Activities." The user typically does not modify these instructions but expects the AI to populate them with detailed checklist items.

This structure ensures the AI receives comprehensive background information about the launch to generate a relevant and thorough checklist.