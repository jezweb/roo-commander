+++
# --- Basic Metadata ---
id = "DIR-README-PromptsIdeation-20250528" # Date of creation/update
title = "Index/README: Ideation & Brainstorming Prompts"
context_type = "directory_index"
scope = "Provides an overview and index for standardized AI prompts focused on ideation, brainstorming, and creative concept generation, located in the './' directory (relative to this README)."
target_audience = ["all"] # Marketers, strategists, product managers, content creators, team leads, AI agents
granularity = "index"
status = "active"
last_updated = "{{YYYYMMDD}}" # Placeholder: To be set by creating agent (or today's date)
version = "1.0" # Initial version for this category README
tags = ["readme", "index", "documentation", "prompts", "ideation", "brainstorming", "creative_prompts", "ai_prompts"]
related_context = [
    "../../../templates/documentation/template_00_directory_readme.README.md", # Link to the template this is based on
    "../README.md" # Link to the parent prompts directory README
]
template_schema_doc = "../../../templates/documentation/template_00_directory_readme.README.md" # Path to its own schema
# --- Directory Specific Fields (Optional) ---
primary_artifact_type_contained = "AI Prompt Templates (Ideation & Brainstorming)"
key_subdirectories_summary = ["N/A - This directory contains prompt files directly."]
+++

# README: Index/README: Ideation & Brainstorming Prompts

## 1. Purpose of this Directory

This directory, `.roo/commander/docs/prompts/ideation/`, serves the primary purpose of:
*   Housing a standardized collection of AI prompt templates specifically designed to facilitate **ideation, brainstorming, creative exploration, and the generation of new concepts** across various domains.
*   Providing structured starting points for using AI to overcome creative blocks, explore different angles, and develop innovative ideas for campaigns, content, products, strategies, and problem-solving.

## 2. Overview of Contents / Key Files & Subdirectories

This directory contains Markdown files, each representing a specific ideation-focused prompt template. Each template typically consists of:
*   A `prompt_ID_XX_description.md` file: The actual prompt text with TOML frontmatter and placeholders for customization.
*   A corresponding `prompt_ID_XX_description.README.md` file: Documentation explaining the prompt's purpose, TOML schema, and usage instructions.

The prompt templates currently available in this category include:

*   **`prompt_ID_01_campaign_concept_generation.md` / `.README.md`**
    *   Generates multiple distinct campaign concepts for a given product/service, target audience, and objective.

*   **`prompt_ID_02_content_pillar_topic_cluster_brainstorm.md` / `.README.md`**
    *   Brainstorms core content pillars and related topic cluster ideas for a specific brand or subject.

*   **`prompt_ID_03_product_service_feature_ideation.md` / `.README.md`**
    *   Generates new feature ideas or significant enhancements for an existing or conceptual product or service.

*   **`prompt_ID_04_problem_reframe_solution_brainstorm.md` / `.README.md`**
    *   Facilitates creative problem-solving by first reframing a given problem and then brainstorming innovative solutions for each reframing.

*   **`prompt_ID_05_tagline_headline_valueprop_brainstorm.md` / `.README.md`**
    *   Brainstorms a variety of taglines, headlines, and core value proposition statements for a brand, product, service, or campaign.

*   **`prompt_ID_06_brand_naming_ideation.md` / `.README.md`**
    *   Generates potential names for a new brand, product, service, feature, or company.

*   **`prompt_ID_07_what_if_scenario_exploration.md` / `.README.md`**
    *   Explores the potential implications of a specific "what if" scenario to aid strategic thinking and contingency planning.

*   **`prompt_ID_08_event_workshop_theme_activity_ideation.md` / `.README.md`**
    *   Brainstorms potential themes, catchy titles, and interactive activities for an upcoming event or workshop.

*(This list should be kept up-to-date as new prompt templates are added or existing ones are modified within this "ideation" category.)*

## 3. Usage Notes / How to Contribute

*   **Using an Ideation Prompt Template:**
    1.  Navigate to this directory (`.roo/commander/docs/prompts/ideation/`).
    2.  Identify the relevant `prompt_ID_XX_description.md` file for your ideation needs.
    3.  Consult its corresponding `prompt_ID_XX_description.README.md` for specific usage instructions, TOML frontmatter schema, and guidance on filling placeholders.
    4.  Copy the `.md` prompt template to your working location.
    5.  Rename the copied file and populate all placeholders with your specific information and context. The more detailed your input, the more targeted the AI's ideation will be.
    6.  Submit the completed prompt instance to your chosen AI model.

*   **Contributing a New Ideation Prompt Template:**
    1.  Identify a recurring need for an ideation-focused prompt in an area not yet covered.
    2.  Discuss with the team or lead to ensure it aligns with agency standards and doesn't excessively overlap with existing prompts.
    3.  Use an existing prompt template from this directory as a structural and stylistic base.
    4.  Develop the new prompt (`.md` file), including clear TOML frontmatter, well-defined placeholders for user input, and specific instructions for the AI on the type and format of ideas to generate.
    5.  Create a corresponding `README.md` file for the new prompt, explaining its purpose, schema, and usage.
    6.  Name files consistently (e.g., `prompt_ID_YY_topic_description.md`).
    7.  Update this main `README.md` file (this document) to include the new prompt template in the "Overview of Contents" section.
    8.  Ensure the new prompt template is committed to the repository.

## 4. Related Documents

*   `../README.md` (Main README for all prompt categories)
*   `../../../templates/documentation/template_00_directory_readme.README.md` (Template used for this README)
*   `[.roo/commander/docs/standards/XX-ai-prompting-guidelines.md]` (Link to any general AI prompting guidelines if they exist)

## 5. Maintenance

This `README.md` should be updated whenever new ideation prompt templates are added to this directory, or existing ones are significantly modified or removed. Please ensure the `last_updated` field in the TOML frontmatter of this document is also updated.

## 6. Google AI Studio
https://aistudio.google.com/prompts/1phZXlI5R6jTyiVD1KrN6Md3OivDVZcOH