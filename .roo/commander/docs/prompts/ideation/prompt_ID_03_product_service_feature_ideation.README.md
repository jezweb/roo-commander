# Documentation: Prompt Template `prompt_ID_03_product_service_feature_ideation.md`

## 1. Purpose

This prompt template is designed to **brainstorm new feature ideas or significant enhancements for an existing or conceptual product or service**. It guides the user to provide context about the product/service, its core functionality, target users, goals for new features, known user pain points, and strategic direction. The AI is then tasked with generating a specified number of distinct feature ideas, each including a name, description, the user problem it addresses, key benefits, potential impact on goals, and optionally, its uniqueness and implementation considerations.

The goal is to generate a diverse set of creative and strategically relevant feature ideas that can be further evaluated and potentially developed to improve the product/service offering.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/ideation/prompt_ID_03_product_service_feature_ideation.md](prompt_ID_03_product_service_feature_ideation.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `ideation_request_taskmaster_app_features.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Ideation-ProductFeatureGen-TaskMasterApp-20250528080000`.
    *   `title`: Update to reflect the specific product/service, e.g., `"Feature Ideation: TaskMaster Pro App Enhancements"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line specifying the `[Number]` of feature ideas and the `[Product/Service Name]`.
    *   In Section 1 ("Product/Service Context"), provide comprehensive details about the product/service, goals for new features, target users, existing features, known pain points, competitor landscape (optional), technological considerations, and strategic vision.
    *   Ensure the `[Number]` in Section 2 matches the number requested in the subject line.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model for ideation.

## 3. TOML Frontmatter Schema (for an instance of `prompt_ID_03_product_service_feature_ideation.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Ideation-ProductFeatureGen-[ProductNameShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Ideation-ProductFeatureGen-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this ideation request.
    *   *Placeholder in template:* `"Product/Service Feature Ideation & Brainstorming Request"`
*   **`prompt_type` (String, Fixed):** `"ideation_and_brainstorming"`
*   **`domain` (String, Fixed):** `"product_development_innovation"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "ideation", "brainstorming", "product_features", "service_enhancements", "innovation", "user_needs", "product_management"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/ideation/prompt_ID_03_product_service_feature_ideation.README.md"` (adjust path if necessary).

## 4. Markdown Body Structure (for an instance of `prompt_ID_03_product_service_feature_ideation.md`)

*   **Subject Line:** User specifies the number of feature ideas and the product/service name.
*   **Section 1: Product/Service Context:**
    *   `Product/Service Name & Core Functionality`: **Essential for understanding the base.**
    *   `Primary Goal for New Features/Enhancements`: **Sets the strategic direction for ideation.**
    *   `Target User Persona(s)`: **Ensures ideas are user-centric.**
    *   `Existing Key Features (Briefly)`.
    *   `Known User Pain Points or Unmet Needs (if any)`: **Key inspiration for new features.**
    *   `Competitor Landscape (Optional)`.
    *   `Technological Constraints or Opportunities (if any)`.
    *   `Strategic Direction/Vision for the Product (if defined)`.
*   **Section 2: Request for Feature Ideas:**
    *   This section outlines the specific deliverables for each feature idea (A-G): Feature Name, Description, User Problem Addressed, Key Benefits, Potential Impact on Goal, Uniqueness Factor (Optional), and Potential Challenges.
*   **Guidelines for Generation:** Pre-filled instructions for the AI to aim for a mix of ideas and focus on user value and strategic alignment.

This structure ensures the AI receives clear direction and sufficient context about the product and its users to generate relevant and potentially valuable new feature ideas.