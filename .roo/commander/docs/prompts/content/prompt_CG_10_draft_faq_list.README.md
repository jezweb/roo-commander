# Documentation: Prompt Template `prompt_CG_10_draft_faq_list.md`

## 1. Purpose

This prompt template is designed to instruct an AI to generate a **draft list of Frequently Asked Questions (FAQs) and their corresponding answers** related to a specific product, service, topic, or event. It guides the user to provide context about the subject of the FAQs, its target audience, the desired tone for answers, and key information from which the AI can derive relevant questions and craft helpful responses.

This template helps in quickly creating a foundational FAQ list that can be used for website pages, knowledge bases, customer support documentation, or event preparation, which can then be reviewed and refined by subject matter experts.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/content_generation/prompt_CG_10_draft_faq_list.md](prompt_CG_10_draft_faq_list.md)` (adjust path if your directory structure differs) to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `draft_request_saas_product_faq_v1.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Gen-DraftFAQList-SaaSProductX-20250528150000`.
    *   `title`: Update to reflect the specific subject, e.g., `"Draft FAQ List: SaaS Product X"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Product/Service/Topic]`.
    *   **In Section 1 ("FAQ Context & Specifications"):**
        *   Clearly define the `Product/Service/Topic for FAQs`.
        *   State the `Primary Goal of this FAQ List`.
        *   Describe the `Target Audience`.
        *   Specify the `Desired Tone & Style for Answers`.
        *   Indicate the approximate `Number of FAQs to Generate`.
        *   Provide any `Source of Potential Questions` or instruct the AI to generate them based on the provided information.
    *   **Crucially, in Section 2 ("Key Information about the Product/Service/Topic"):**
        *   Provide a `Brief Description`.
        *   List `Key Features/Aspects` with brief details.
        *   Describe `Common Use Cases or Scenarios`.
        *   Highlight `Potential Areas of Confusion or Difficulty`.
        *   Mention `Unique Selling Propositions (USPs)` or `Key Benefits`.
        *   Include `Important Policies or Terms` if relevant.
        **The more comprehensive this section, the better the AI can generate relevant FAQs.**
    *   In Section 3 ("Desired Structure for Each FAQ Entry"), confirm the Question/Answer format and optional link placeholders.
    *   In Section 4 ("Additional Instructions"), provide guidance on categorization, points to emphasize/avoid, and conceptual formatting.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model to generate the draft FAQ list.

## 3. TOML Frontmatter Schema (for an instance of `prompt_CG_10_draft_faq_list.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Gen-DraftFAQList-[SubjectShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Gen-DraftFAQList-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this draft request.
    *   *Placeholder in template:* `"Frequently Asked Questions (FAQ) List Draft Generation Request"`
*   **`prompt_type` (String, Fixed):** `"content_generation"`
*   **`domain` (String, Fixed):** `"content_creation_support_documentation"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "content_generation", "faq", "customer_support", "knowledge_base", "website_content", "drafting"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/content_generation/prompt_CG_10_draft_faq_list.README.md"` (adjust path if necessary).

## 4. Markdown Body Structure (for an instance of `prompt_CG_10_draft_faq_list.md`)

*   **Subject Line:** Pre-filled; update `[Product/Service/Topic]`.
*   **Section 1: FAQ Context & Specifications:**
    *   User provides details about the FAQ subject, goal, audience, tone, desired number of FAQs, and potential question sources.
*   **Section 2: Key Information about the Product/Service/Topic:**
    *   User provides a description, features/aspects, use cases, potential confusion points, USPs/benefits, and relevant policies. **This information is critical for the AI to generate meaningful questions and accurate answers.**
*   **Section 3: Desired Structure for Each FAQ Entry:**
    *   User confirms the Question/Answer format and handling of links.
*   **Section 4: Additional Instructions (Optional):**
    *   User can specify categorization, points to emphasize/avoid, and conceptual formatting.

This detailed structure provides the AI with clear instructions and the necessary background information to generate a relevant and helpful list of FAQs and their draft answers.