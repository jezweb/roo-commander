# Documentation: Prompt Template `prompt_ID_01_campaign_concept_generation.md`

## 1. Purpose

This prompt template is designed to **generate multiple distinct campaign concepts** for a specific product, service, or brand. It guides the user to provide essential context about what is being promoted, the campaign objectives, target audience, brand voice, and any mandatory inclusions or exclusions. The AI is then tasked with brainstorming a specified number of campaign concepts, each including a name, core message, unique hook, potential channels, visual ideas, an example tagline, and a rationale for why it might resonate with the target audience.

The goal is to kickstart the creative process for marketing campaigns by providing a diverse set of initial ideas for further development and refinement.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/ideation/prompt_ID_01_campaign_concept_generation.md](prompt_ID_01_campaign_concept_generation.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `ideation_request_new_drink_launch_campaigns.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Ideation-CampaignConceptGen-NewDrinkLaunch-20250528060000`.
    *   `title`: Update to reflect the specific brainstorming request, e.g., `"Campaign Concept Generation: "HydraBoost" Drink Launch"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line specifying the `[Number]` of concepts and the `[Product/Service/Brand]`.
    *   In Section 1 ("Campaign Context & Objectives"), provide comprehensive details about the product/service, campaign objectives, target audience, brand voice, budget tier (optional), desired tone, and any mandatories.
    *   Ensure the `[Number]` in Section 2 matches the number requested in the subject line.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model for ideation.

## 3. TOML Frontmatter Schema (for an instance of `prompt_ID_01_campaign_concept_generation.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Ideation-CampaignConceptGen-[SubjectShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Ideation-CampaignConceptGen-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this ideation request.
    *   *Placeholder in template:* `"Campaign Concept Generation & Brainstorming Request"`
*   **`prompt_type` (String, Fixed):** `"ideation_and_brainstorming"`
*   **`domain` (String, Fixed):** `"marketing_campaign_ideation"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "ideation", "brainstorming", "marketing_campaign", "campaign_concepts", "creative_strategy", "advertising_ideas"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/ideation/prompt_ID_01_campaign_concept_generation.README.md"` (adjust path if necessary).

## 4. Markdown Body Structure (for an instance of `prompt_ID_01_campaign_concept_generation.md`)

*   **Subject Line:** User specifies the number of concepts and the product/service/brand.
*   **Section 1: Campaign Context & Objectives:**
    *   `Product/Service/Brand to be Promoted`: **Crucial for grounding the ideas.**
    *   `Primary Campaign Objective(s)`: **Defines what success looks like.**
    *   `Target Audience`: **Essential for tailoring concepts.**
    *   `Campaign Duration (Approximate, if known)`.
    *   `Budget Tier (Optional)`.
    *   `Brand Voice/Personality to Reflect`.
    *   `Mandatory Inclusions or Exclusions (if any)`.
    *   `Desired Tone/Feeling of the Campaign`.
*   **Section 2: Request for Campaign Concepts:**
    *   This section outlines the specific deliverables for each concept (A-G): Concept Name, Core Message, Unique Hook, Potential Channels, Visual Ideas, Example Tagline, and Audience Resonance Rationale. The user ensures the number of concepts requested matches their input in the subject line.
*   **Guidelines for Generation:** Pre-filled instructions for the AI to aim for distinct concepts and focus on high-level ideas.

This structure ensures the AI receives clear direction and sufficient context to generate a diverse and relevant set of initial campaign concepts.