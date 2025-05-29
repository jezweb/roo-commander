# Documentation: Prompt Template `prompt_ID_02_content_pillar_topic_cluster_brainstorm.md`

## 1. Purpose

This prompt template is designed to **brainstorm core content pillars and related topic cluster ideas** for a specific brand, website, or subject area. It guides the user to provide context about their content strategy goals, target audience, key themes, and desired content style. The AI is then tasked with generating a specified number of content pillars (broad, foundational topics) and, for each pillar, a set of more specific topic cluster ideas (potential content pieces like blog posts, videos, etc.), including suggested titles/angles, brief descriptions, and content formats.

The goal is to develop a structured and strategic foundation for content creation, supporting efforts to build topical authority, engage audiences, and achieve content marketing objectives.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/ideation/prompt_ID_02_content_pillar_topic_cluster_brainstorm.md](prompt_ID_02_content_pillar_topic_cluster_brainstorm.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `ideation_request_gardening_blog_pillars.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Ideation-ContentPillarCluster-GardeningBlog-20250528070000`.
    *   `title`: Update to reflect the specific brainstorming request, e.g., `"Content Pillar Brainstorm: Urban Gardening Blog"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line specifying the `[Number]` of pillars and clusters, and the `[Brand/Subject]`.
    *   In Section 1 ("Content Strategy Context"), provide comprehensive details about the brand/subject, content goals, target audience, existing themes, desired tone, and envisioned content formats.
    *   Ensure the `[Number]` placeholders in Section 2 match the numbers requested in the subject line.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model for ideation.

## 3. TOML Frontmatter Schema (for an instance of `prompt_ID_02_content_pillar_topic_cluster_brainstorm.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Ideation-ContentPillarCluster-[SubjectShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Ideation-ContentPillarCluster-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this ideation request.
    *   *Placeholder in template:* `"Content Pillar & Topic Cluster Brainstorming Request"`
*   **`prompt_type` (String, Fixed):** `"ideation_and_brainstorming"`
*   **`domain` (String, Fixed):** `"content_strategy_seo_ideation"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "ideation", "brainstorming", "content_strategy", "seo", "topic_clusters", "content_pillars", "blogging", "content_marketing"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/ideation/prompt_ID_02_content_pillar_topic_cluster_brainstorm.README.md"` (adjust path if necessary).

## 4. Markdown Body Structure (for an instance of `prompt_ID_02_content_pillar_topic_cluster_brainstorm.md`)

*   **Subject Line:** User specifies the number of pillars and topic clusters, and the brand/subject.
*   **Section 1: Content Strategy Context:**
    *   `Primary Brand/Website/Subject`: **Crucial for defining the scope.**
    *   `Overall Goal(s) for this Content`: **Sets the strategic direction.**
    *   `Target Audience`: **Essential for tailoring ideas.**
    *   `Key Themes/Keywords Already Identified (if any)`.
    *   `Desired Tone & Style of Content`.
    *   `Primary Content Formats Envisioned (if specific)`.
    *   `Competitor Content (Optional)`.
*   **Section 2: Request for Content Pillars & Topic Clusters:**
    *   This section outlines the request for a specific number of Content Pillars.
    *   For each pillar, it requests:
        *   `A. Pillar Name/Title`
        *   `B. Brief Pillar Description`
        *   `C. [Number] Topic Cluster Ideas`, each with a potential Title/Angle, Description/Key Points, and suggested Content Format.
*   **Example Structure for Output:** Provides a clear format for the AI's response.
*   **Guidelines for Generation:** Pre-filled instructions for the AI to ensure pillars are broad yet focused, and topics are distinct and valuable.

This structure ensures the AI receives clear direction and sufficient context to generate a strategic and creative set of content pillars and topic ideas.