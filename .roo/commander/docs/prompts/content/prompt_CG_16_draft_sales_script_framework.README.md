# Documentation: Prompt Template `prompt_CG_16_draft_sales_script_framework.md`

## 1. Purpose

This prompt template is designed to instruct an AI to generate a **draft framework or key talking points for various types of sales scripts or interactions**. It guides the user to provide context about the specific sales interaction (e.g., discovery call, product demo, objection handling), the product/service being sold, the target prospect profile, the primary goal of the interaction, and key differentiators. The AI is tasked with outlining the structure of the conversation, suggesting questions, framing value propositions, and proposing ways to handle common objections and close for the next step.

This template helps sales teams develop consistent and effective communication guides, providing a solid starting point that can be customized and practiced.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/content_generation/prompt_CG_16_draft_sales_script_framework.md](prompt_CG_16_draft_sales_script_framework.md)` (adjust path if your directory structure differs) to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `draft_request_saas_demo_script_v1.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Gen-DraftSalesScriptFrame-SaaSDemo-20250528210000`.
    *   `title`: Update to reflect the specific script, e.g., `"Draft Sales Script: SaaS Product Demo Framework"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Type of Sales Interaction] for [Product/Service]`.
    *   **In Section 1 ("Sales Interaction Overview & Context"):**
        *   Specify the `Type of Sales Interaction`, `Product/Service Being Sold`, `Target Prospect Profile/Persona`, `Primary Goal of this Specific Interaction`, `Stage in Sales Funnel`, `Key Differentiators/USPs`, and `Desired Tone & Style`.
    *   **Crucially, in Section 2 ("Script Framework & Key Content Elements"):**
        *   Instruct the AI on the key components to develop: `Opening / Introduction`, `Needs Discovery / Qualification Questions` (especially for discovery), `Value Proposition / Solution Presentation`, `Key Talking Points / Feature-Benefit Links` (linking to USPs), `Common Objections & Potential Responses`, `Call to Action / Next Steps`, and `Closing`. Provide specific common objections if known, or ask the AI to suggest some.
    *   In Section 3 ("Additional Instructions"), provide guidance on points to emphasize/avoid, conceptual length, and anticipated prospect questions.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model to generate the draft sales script framework.

## 3. TOML Frontmatter Schema (for an instance of `prompt_CG_16_draft_sales_script_framework.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Gen-DraftSalesScriptFrame-[InteractionTypeShort]-[ProductShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Gen-DraftSalesScriptFrame-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this draft request.
    *   *Placeholder in template:* `"Sales Script/Talking Points Framework Draft Generation Request"`
*   **`prompt_type` (String, Fixed):** `"content_generation"`
*   **`domain` (String, Fixed):** `"sales_communication_scripting"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "content_generation", "sales_script", "talking_points", "sales_enablement", "discovery_call", "demo_script", "objection_handling"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/content_generation/prompt_CG_16_draft_sales_script_framework.README.md"` (adjust path if necessary).

## 4. Markdown Body Structure (for an instance of `prompt_CG_16_draft_sales_script_framework.md`)

*   **Subject Line:** Pre-filled; update `[Type of Sales Interaction] for [Product/Service]`.
*   **Section 1: Sales Interaction Overview & Context:**
    *   User provides comprehensive details about the interaction type, product/service, prospect, goal, sales funnel stage, USPs, and tone.
*   **Section 2: Script Framework & Key Content Elements:**
    *   User instructs the AI to develop specific parts of the script: opening, discovery questions, value presentation, talking points, objection handling, CTA, and closing. **This section is key for guiding the AI on the desired structure and content of the sales conversation.**
*   **Section 3: Additional Instructions (Optional):**
    *   User can specify points to emphasize/avoid, conceptual length, and anticipated prospect questions.

This detailed structure provides the AI with clear instructions for generating a relevant and strategically sound framework for various sales interactions.