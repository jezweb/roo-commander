# Documentation: Prompt Template `prompt_ID_06_brand_naming_ideation.md`

## 1. Purpose

This prompt template is designed to **brainstorm a variety of potential names for a new brand, product, service, feature, or company**. It guides the user to provide context about the entity to be named, its target audience, core brand attributes/values, key differentiators, desired (and undesired) connotations, and any practical considerations like name length or type. The AI is then tasked with generating a specified number of distinct name ideas, each with a brief rationale, potential positive connotations, and an optional style categorization.

The goal is to generate a diverse pool of creative and strategically aligned name options that can be further evaluated, checked for availability, and considered for branding efforts.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/ideation/prompt_ID_06_brand_naming_ideation.md](prompt_ID_06_brand_naming_ideation.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `ideation_request_saas_product_names.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Ideation-BrandNaming-SaaSProduct-20250528110000`.
    *   `title`: Update to reflect the specific naming task, e.g., `"Brand Naming Ideation: New SaaS Project Management Tool"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line specifying the `[Number]` of name ideas and the `[Type of Entity]`.
    *   In Section 1 ("Naming Context & Objectives"), provide comprehensive details about the entity to be named, its target audience, brand attributes, differentiators, desired/undesired connotations, competitor names (optional), inspirational keywords (optional), and any practical considerations.
    *   Ensure the `[Number]` in Section 2 matches the number requested in the subject line.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model for ideation.

## 3. TOML Frontmatter Schema (for an instance of `prompt_ID_06_brand_naming_ideation.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Ideation-BrandNaming-[EntityTypeShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Ideation-BrandNaming-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this ideation request.
    *   *Placeholder in template:* `"Brand Naming Ideation & Brainstorming Request"`
*   **`prompt_type` (String, Fixed):** `"ideation_and_brainstorming"`
*   **`domain` (String, Fixed):** `"branding_naming_strategy"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "ideation", "brainstorming", "brand_naming", "product_naming", "service_naming", "company_naming", "naming_conventions"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/ideation/prompt_ID_06_brand_naming_ideation.README.md"` (adjust path if necessary).

## 4. Markdown Body Structure (for an instance of `prompt_ID_06_brand_naming_ideation.md`)

*   **Subject Line:** User specifies the number of name ideas and the type of entity.
*   **Section 1: Naming Context & Objectives:**
    *   `Entity to be Named`: **Crucial for defining what needs a name.**
    *   `Target Audience`: **Influences style and appeal.**
    *   `Core Brand Attributes/Personality/Values to Convey`: **Guides the feeling of the name.**
    *   `Key Differentiators or Unique Selling Propositions (USPs)`.
    *   `Desired Connotations`.
    *   `Connotations to Avoid`.
    *   `Competitor Names (Optional)`.
    *   `Inspiration/Keywords/Themes (Optional)`.
    *   `Practical Considerations (Optional)`: Length, type, domain availability thoughts, pronunciation.
*   **Section 2: Request for Name Ideas:**
    *   This section outlines the request for a specific number of name ideas.
    *   For each name, it requests: Proposed Name, Brief Rationale, Potential Connotations, and Name Style (Optional).
*   **Example Structure for Output:** Provides a clear format for the AI's response.
*   **Guidelines for Generation:** Pre-filled instructions for the AI to aim for diversity, memorability, and to avoid competitor similarities.

This structure ensures the AI receives clear direction and sufficient context to generate a diverse and strategically relevant set of name options.