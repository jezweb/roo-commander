+++
# --- Basic Metadata ---
id = "DIR-README-PromptsCommunication-20250528" # Updated date
title = "Index/README: Client Communication Prompts (Email Drafts)"
context_type = "directory_index"
scope = "Provides an overview and index for standardized AI prompts focused on drafting various types of client communication, primarily emails. These are located in the './' directory (relative to this README)."
target_audience = ["all_client_facing_roles"] # Account Managers, Project Managers, Sales, Support
granularity = "index"
status = "active"
last_updated = "{{YYYYMMDD}}" # Placeholder: To be set by creating agent (or today's date)
version = "1.0" # Initial version for this specific directory
tags = ["readme", "index", "documentation", "prompts", "client_communication", "email_drafts", "professional_communication"]
related_context = [
    "../../../templates/documentation/template_00_directory_readme.README.md", # Link to the template this is based on
    "../critique/README.md" # Link to the critique prompts directory
]
template_schema_doc = "../../../templates/documentation/template_00_directory_readme.README.md" # Path to its own schema
# --- Directory Specific Fields (Optional) ---
primary_artifact_type_contained = "AI Prompt Templates (Client Communication Email Drafts)"
key_subdirectories_summary = ["N/A - This directory contains prompt files directly."]
+++

# README: Index/README: Client Communication Prompts (Email Drafts)

## 1. Purpose of this Directory

This directory, `.roo/commander/docs/prompts/communication/`, serves the primary purpose of:
*   Housing a standardized collection of AI prompt templates specifically designed for **drafting various types of client communication emails**.
*   Ensuring consistency, professionalism, and efficiency in routine and critical client interactions across different stages of the client lifecycle and project management.

## 2. Overview of Contents / Key Files & Subdirectories

This directory contains Markdown files, each representing a specific prompt template for drafting client emails. Each template typically consists of:
*   A `prompt_CM_XX_description.md` file: The actual prompt text with TOML frontmatter and placeholders for customization.
*   A corresponding `prompt_CM_XX_description.README.md` file: Documentation explaining the prompt's purpose, TOML schema, and usage instructions.

The prompt templates cover a range of common client communication scenarios:

*   **Initial Contact & Onboarding:**
    *   `prompt_CM_01_client_outreach_introduction_email.md` / `.README.md`
    *   `prompt_CM_12_project_welcome_pre_kickoff_email.md` / `.README.md`
    *   `prompt_CM_02_meeting_confirmation_agenda_email.md` / `.README.md` (Often used for kickoff)

*   **Project Management & Execution:**
    *   `prompt_CM_03_post_meeting_recap_email.md` / `.README.md`
    *   `prompt_CM_04_project_status_update_email.md` / `.README.md`
    *   `prompt_CM_05_request_client_feedback_approval.md` / `.README.md`
    *   `prompt_CM_13_request_client_digital_assets_email.md` / `.README.md`
    *   `prompt_CM_06_addressing_scope_creep_change_request.md` / `.README.md`
    *   `prompt_CM_07_managing_expectations_difficult_news.md` / `.README.md`
    *   `prompt_CM_08_gentle_reminder_email.md` / `.README.md`

*   **Project Closure & Relationship Building:**
    *   `prompt_CM_09_project_completion_thank_you_email.md` / `.README.md`
    *   `prompt_CM_10_testimonial_referral_request_email.md` / `.README.md`
    *   `prompt_CM_11_public_review_request_email.md` / `.README.md`

*(This list should be kept up-to-date as new prompt templates are added or existing ones are modified within this category.)*

## 3. Usage Notes / How to Contribute

*   **Using a Prompt Template:**
    1.  Navigate to this directory (`.roo/commander/docs/prompts/communication/`).
    2.  Identify the relevant `prompt_CM_XX_description.md` file for your communication need.
    3.  Consult its corresponding `prompt_CM_XX_description.README.md` for specific usage instructions, TOML frontmatter schema, and guidance on filling placeholders.
    4.  Copy the `.md` prompt template to your working location.
    5.  Rename the copied file and populate all placeholders with your specific client and project information.
    6.  Submit the completed prompt instance to your chosen AI model to generate the email draft. Review and personalize the draft before sending.

*   **Contributing a New Prompt Template:**
    1.  Identify a recurring client communication scenario that could benefit from a standardized prompt template.
    2.  Discuss with the team or lead to ensure it aligns with agency communication standards and doesn't excessively overlap with existing prompts.
    3.  Use an existing prompt template from this directory as a structural and stylistic base.
    4.  Develop the new prompt (`.md` file), including clear TOML frontmatter, well-defined placeholders for user input, and specific instructions for the AI on the desired email content and tone.
    5.  Create a corresponding `README.md` file for the new prompt, explaining its purpose, schema, and usage.
    6.  Name files consistently (e.g., `prompt_CM_YY_description_email.md`).
    7.  Update this main `README.md` file (this document) to include the new prompt template in the "Overview of Contents" section.
    8.  Ensure the new prompt template is committed to the repository.

## 4. Related Documents

*   `[.roo/commander/docs/standards/XX-client-communication-guidelines.md]` (Link to any general client communication standards if they exist)
*   `../critique/README.md` (Critique prompts can be useful for reviewing important client communications before sending)

## 5. Maintenance

This `README.md` should be updated whenever new client communication prompt templates are added to this directory, or existing ones are significantly modified or removed. Please ensure the `last_updated` field in the TOML frontmatter of this document is also updated.