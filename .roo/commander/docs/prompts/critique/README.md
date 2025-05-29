+++
# --- Basic Metadata ---
id = "DIR-README-PromptsCritique-20250528" # Updated date
title = "Index/README: Critique & Improvement Prompts"
context_type = "directory_index"
scope = "Provides an overview and index for standardized AI prompts focused on critique, review, and improvement of various artifacts and processes, located in the './' directory (relative to this README)."
target_audience = ["all"] # Developers, designers, project managers, content creators, HR, operations, AI agents
granularity = "index"
status = "active"
last_updated = "{{YYYYMMDD}}" # Placeholder: To be set by creating agent (or today's date)
version = "1.1" # Incremented version due to significant additions
tags = ["readme", "index", "documentation", "prompts", "critique", "ai_prompts", "improvement_prompts"]
related_context = [
    "../../../templates/documentation/template_00_directory_readme.README.md" # Link to the template this is based on
]
template_schema_doc = "../../../templates/documentation/template_00_directory_readme.README.md" # Path to its own schema
# --- Directory Specific Fields (Optional) ---
primary_artifact_type_contained = "AI Prompt Templates (Critique-focused)"
key_subdirectories_summary = ["N/A - This directory contains prompt files directly."]
+++

# README: Index/README: Critique & Improvement Prompts

## 1. Purpose of this Directory

This directory, `.roo/commander/docs/prompts/critique/`, serves the primary purpose of:
*   Housing a standardized collection of AI prompt templates specifically designed for eliciting **critique, review, and suggestions for improvement** across various domains relevant to our agency work.
*   Ensuring consistency and high-quality feedback when using AI to analyze and enhance documents, code, designs, strategies, processes, and operational procedures.

## 2. Overview of Contents / Key Files & Subdirectories

This directory contains Markdown files, each representing a specific critique-focused prompt template. Each template consists of:
*   A `prompt_XX_description.md` file: The actual prompt text with TOML frontmatter and placeholders for customization.
*   A corresponding `prompt_XX_description.README.md` file: Documentation explaining the prompt's purpose, TOML schema, and usage instructions.

The prompt templates cover a wide range of critique areas, including but not limited to:

**Software, Web & Technical Development:**
*   `prompt_01_ai_agent_design_critique.md` / `.README.md`
*   `prompt_02_agentic_system_collaboration_critique.md` / `.README.md`
*   `prompt_03_json_schema_critique.md` / `.README.md`
*   `prompt_04_n8n_workflow_critique.md` / `.README.md`
*   `prompt_05_llm_prompt_effectiveness_critique.md` / `.README.md`
*   `prompt_06_google_workspace_script_critique.md` / `.README.md`
*   `prompt_07_api_design_documentation_critique.md` / `.README.md`
*   `prompt_08_server_config_deployment_critique.md` / `.README.md`
*   `prompt_11_technical_documentation_critique.md` / `.README.md`
*   `prompt_12_ui_ux_design_critique.md` / `.README.md`

**Content Creation, SEO & Marketing:**
*   `prompt_13_general_content_effectiveness_critique.md` / `.README.md`
*   `prompt_14_blog_post_impact_seo_critique.md` / `.README.md`
*   `prompt_15_web_page_content_structure_critique.md` / `.README.md`
*   `prompt_16_seo_strategy_keyword_usage_critique.md` / `.README.md`
*   `prompt_17_graphic_design_asset_critique.md` / `.README.md`
*   `prompt_19_marketing_campaign_plan_critique.md` / `.README.md`
*   `prompt_21_presentation_deck_critique.md` / `.README.md`
*   `prompt_22_email_marketing_critique.md` / `.README.md`
*   `prompt_23_social_media_content_strategy_critique.md` / `.README.md`

**Business, Strategy & Proposals:**
*   `prompt_09_client_proposal_critique.md` / `.README.md`
*   `prompt_18_strategic_project_plan_critique.md` / `.README.md`
*   `prompt_20_business_requirements_document_critique.md` / `.README.md`
*   `prompt_24_rfp_response_critique.md` / `.README.md`

**Workplace Management, HR & Operations:**
*   `prompt_10_internal_process_critique.md` / `.README.md`
*   `prompt_25_meeting_effectiveness_critique.md` / `.README.md`
*   `prompt_26_internal_communication_critique.md` / `.README.md`
*   `prompt_27_workplace_safety_procedure_critique.md` / `.README.md`
*   `prompt_28_employee_onboarding_process_critique.md` / `.README.md`
*   `prompt_29_performance_review_process_critique.md` / `.README.md`
*   `prompt_30_employee_feedback_mechanism_critique.md` / `.README.md`
*   `prompt_31_task_management_process_critique.md` / `.README.md`
*   `prompt_32_team_time_management_strategy_critique.md` / `.README.md`
*   `prompt_33_delegation_effectiveness_critique.md` / `.README.md`

*(This list should be kept up-to-date as new prompt templates are added or existing ones are modified.)*

## 3. Usage Notes / How to Contribute

*   **Using a Prompt Template:**
    1.  Navigate to this directory (`.roo/commander/docs/prompts/critique/`).
    2.  Identify the relevant `prompt_XX_description.md` file for your critique needs.
    3.  Consult its corresponding `prompt_XX_description.README.md` for specific usage instructions, TOML frontmatter schema, and guidance on filling placeholders.
    4.  Copy the `.md` prompt template to your working location.
    5.  Rename the copied file and populate all placeholders with your specific information.
    6.  Submit the completed prompt instance to your chosen AI model.

*   **Contributing a New Prompt Template:**
    1.  Identify a recurring need for a critique-focused prompt in an area not yet covered.
    2.  Discuss with the team or lead to ensure it doesn't overlap excessively with existing prompts and aligns with agency standards.
    3.  Use an existing prompt template (e.g., `prompt_01_...`, `prompt_13_...`) as a structural and stylistic base.
    4.  Develop the new prompt (`.md` file), including clear TOML frontmatter, well-defined placeholders for user input, and specific, categorized questions for the AI.
    5.  Create a corresponding `README.md` file for the new prompt, explaining its purpose, schema, and usage, modeled after existing READMEs in this directory.
    6.  Name files consistently (e.g., `prompt_YY_topic_description_critique.md` and `prompt_YY_topic_description_critique.README.md`).
    7.  Update this main `README.md` file (this document) to include the new prompt template in the "Overview of Contents" section.
    8.  Ensure the new prompt template is committed to the repository.

## 4. Related Documents

*   `[.roo/commander/docs/standards/XX-ai-prompting-guidelines.md]` (Link to any general AI prompting guidelines if they exist)
*   `[.roo/commander/templates/documentation/template_02_rich_document.README.md]` (Often used as a base for creating the `README.md` files for new prompt templates)

## 5. Maintenance

This `README.md` should be updated whenever new critique prompt templates are added to this directory, or existing ones are significantly modified or removed. Please ensure the `last_updated` field in the TOML frontmatter of this document is also updated.