+++
# --- Basic Metadata ---
id = "DIR-README-PromptsContentGeneration-20250528" # Date of creation/update
title = "Index/README: Content Generation Prompts"
context_type = "directory_index"
scope = "Provides an overview and index for standardized AI prompts focused on generating first drafts of various types of content, located in the './' directory (relative to this README)."
target_audience = ["all"] # Content creators, marketers, copywriters, social media managers, HR, sales, AI agents
granularity = "index"
status = "active"
last_updated = "{{YYYYMMDD}}" # Placeholder: To be set by creating agent (or today's date)
version = "1.0" 
tags = ["readme", "index", "documentation", "prompts", "content_generation", "ai_prompts", "drafting_prompts"]
related_context = [
    "../../../templates/documentation/template_00_directory_readme.README.md" # Link to the template this is based on
]
template_schema_doc = "../../../templates/documentation/template_00_directory_readme.README.md" # Path to its own schema
# --- Directory Specific Fields (Optional) ---
primary_artifact_type_contained = "AI Prompt Templates (Content Generation-focused)"
key_subdirectories_summary = ["N/A - This directory contains prompt files directly."]
+++

# README: Index/README: Content Generation Prompts

## 1. Purpose of this Directory

This directory, `.roo/commander/docs/prompts/content_generation/`, serves the primary purpose of:
*   Housing a standardized collection of AI prompt templates specifically designed for **generating first drafts of various types of written and conceptual content**.
*   Providing a structured starting point to accelerate content creation across different domains such as blogging, social media, email marketing, website copy, video scripting, sales, and HR.
*   Ensuring consistency in requesting draft content from AI and leveraging its capabilities to overcome the "blank page" challenge.

## 2. Overview of Contents / Key Files & Subdirectories

This directory contains Markdown files, each representing a specific content generation-focused prompt template. Each template typically consists of:
*   A `prompt_CG_XX_description.md` file: The actual prompt text with TOML frontmatter and placeholders for customization.
*   A corresponding `prompt_CG_XX_description.README.md` file: Documentation explaining the prompt's purpose, TOML schema, and usage instructions.

The prompt templates cover a range of content generation needs:

**General & Blog Content:**
*   `prompt_CG_01_draft_blog_post.md` / `.README.md`
*   `prompt_CG_10_draft_faq_list.md` / `.README.md`
*   `prompt_CG_13_draft_infographic_content.md` / `.README.md`

**Social Media & Video Content:**
*   `prompt_CG_02_draft_social_media_post_series.md` / `.README.md`
*   `prompt_CG_05_draft_video_script_outline_intro.md` / `.README.md`
*   `prompt_CG_12_draft_short_form_video_concept.md` / `.README.md`

**Marketing & Sales Content:**
*   `prompt_CG_03_draft_email_marketing_copy.md` / `.README.md`
*   `prompt_CG_04_draft_website_page_copy.md` / `.README.md`
*   `prompt_CG_06_draft_product_description.md` / `.README.md`
*   `prompt_CG_07_draft_case_study_framework.md` / `.README.md`
*   `prompt_CG_08_draft_press_release.md` / `.README.md`
*   `prompt_CG_09_draft_ad_copy_variations.md` / `.README.md`
*   `prompt_CG_15_draft_lead_magnet_content.md` / `.README.md`
*   `prompt_CG_16_draft_sales_script_framework.md` / `.README.md`

**HR & Internal Content:**
*   `prompt_CG_14_draft_webinar_workshop_outline.md` / `.README.md` (Can also be external)
*   `prompt_CG_17_draft_survey_questions.md` / `.README.md`
*   `prompt_CG_18_draft_job_description.md` / `.README.md`

*(This list should be kept up-to-date as new prompt templates are added or existing ones are modified.)*

## 3. Usage Notes / How to Contribute

*   **Using a Prompt Template:**
    1.  Navigate to this directory (`.roo/commander/docs/prompts/content_generation/`).
    2.  Identify the relevant `prompt_CG_XX_description.md` file for your content drafting needs.
    3.  Consult its corresponding `prompt_CG_XX_description.README.md` for specific usage instructions, TOML frontmatter schema, and guidance on filling placeholders.
    4.  Copy the `.md` prompt template to your working location.
    5.  Rename the copied file and populate all placeholders with your specific information and content requirements.
    6.  Submit the completed prompt instance to your chosen AI model.
    7.  Remember that AI-generated content is a *first draft* and will require human review, editing, fact-checking, and refinement to ensure quality, accuracy, and brand alignment.

*   **Contributing a New Prompt Template:**
    1.  Identify a recurring need for a content generation prompt in an area not yet covered.
    2.  Discuss with the team or lead to ensure it aligns with agency standards.
    3.  Use an existing prompt template from this directory as a structural and stylistic base.
    4.  Develop the new prompt (`.md` file), including clear TOML frontmatter, well-defined placeholders for user input, and specific instructions for the AI on the desired output format and content.
    5.  Create a corresponding `README.md` file for the new prompt, explaining its purpose, schema, and usage.
    6.  Name files consistently (e.g., `prompt_CG_YY_description.md` and `prompt_CG_YY_description.README.md`).
    7.  Update this main `README.md` file (this document) to include the new prompt template in the "Overview of Contents" section.
    8.  Ensure the new prompt template is committed to the repository.

## 4. Related Documents

*   `[.roo/commander/docs/standards/XX-ai-prompting-guidelines.md]` (Link to any general AI prompting guidelines if they exist)
*   `[.roo/commander/docs/prompts/critique/README.md]` (For prompts related to critiquing existing content or plans)

## 5. Maintenance

This `README.md` should be updated whenever new content generation prompt templates are added to this directory, or existing ones are significantly modified or removed. Please ensure the `last_updated` field in the TOML frontmatter of this document is also updated.