# Documentation: Prompt Template `prompt_CG_06_draft_product_description.md`

## 1. Purpose

This prompt template is designed to instruct an AI to generate a **first draft of a compelling product description**. It guides the user to provide detailed information about the product, including its name, category, target customer, unique selling propositions (USPs), key features, and corresponding benefits. The user also specifies the desired tone, brand voice elements, primary keywords (if SEO is a focus), and a conceptual call to action. The AI is tasked with crafting a description that highlights benefits, engages the target customer, and encourages a purchase decision.

This template helps create persuasive and informative product copy for e-commerce platforms, websites, or marketing materials, providing a solid base for further refinement.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/content_generation/prompt_CG_06_draft_product_description.md](prompt_CG_06_draft_product_description.md)` (adjust path if your directory structure differs) to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `draft_request_eco_water_bottle_desc_v1.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Gen-DraftProductDesc-EcoBottle-20250528110000`.
    *   `title`: Update to reflect the specific product, e.g., `"Draft Product Description: Eco-Friendly Water Bottle"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Product Name]`.
    *   **Crucially, in Section 1 ("Product Overview & Specifications"):**
        *   Provide the `Product Name`, `Product Category`, and a detailed `Target Customer/Ideal Buyer Persona`.
        *   State the `Primary Goal of the Product Description`.
        *   List 1-3 `Unique Selling Proposition(s) (USPs)`.
        *   List 3-7 `Key Features` and their corresponding `Key Benefits`.
        *   Specify the `Desired Tone & Style`, any `Brand Voice Elements`, `Primary Keyword(s)`, and the conceptual `Call to Action`.
    *   **In Section 2 ("Content Structure & Elements to Include"):**
        *   Instruct the AI on the `Compelling Headline/Opening Statement`.
        *   Guide the AI on developing `Benefit-Oriented Paragraphs`.
        *   Specify preferences for `Feature Highlights` (e.g., bullet points).
        *   Mention any conceptual `Addressing Potential Objections` or `Social Proof/Trust Element` placeholders.
        *   Outline the `Closing Statement & Reinforce Value`.
        *   Suggest an `Approximate Length`.
    *   In Section 3 ("Additional Instructions"), provide any other relevant guidance.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model to generate the draft product description.

## 3. TOML Frontmatter Schema (for an instance of `prompt_CG_06_draft_product_description.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Gen-DraftProductDesc-[ProductNameShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Gen-DraftProductDesc-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this draft request.
    *   *Placeholder in template:* `"Product Description Draft Generation Request"`
*   **`prompt_type` (String, Fixed):** `"content_generation"`
*   **`domain` (String, Fixed):** `"content_creation_ecommerce_product_copy"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "content_generation", "product_description", "ecommerce_copy", "marketing_copy", "persuasive_writing", "drafting"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/content_generation/prompt_CG_06_draft_product_description.README.md"` (adjust path if necessary).

## 4. Markdown Body Structure (for an instance of `prompt_CG_06_draft_product_description.md`)

*   **Subject Line:** Pre-filled; update `[Product Name]`.
*   **Section 1: Product Overview & Specifications:**
    *   User provides comprehensive details about the product: name, category, target customer, description goal, USPs, features, benefits, tone, brand voice, keywords, and CTA. **This section is vital for the AI to understand the product thoroughly.**
*   **Section 2: Content Structure & Elements to Include:**
    *   User guides the AI on the desired structure: headline, benefit paragraphs, feature highlights, addressing objections, social proof, closing statement, and approximate length.
*   **Section 3: Additional Instructions (Optional):**
    *   User can specify points to emphasize/avoid, target platform considerations, and other elements to include.

This detailed structure provides the AI with clear instructions and constraints, increasing the likelihood of generating a relevant, persuasive, and useful first draft for a product description.