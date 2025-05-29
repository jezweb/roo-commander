+++
# --- Basic Metadata ---
id = "DIR-README-PromptCrafting-20250528" # Updated date
title = "Index/README: Prompt Crafting & Meta-Prompt Templates"
context_type = "directory_index"
scope = "Provides an overview and index for standardized AI meta-prompts designed to assist in the engineering, refinement, and evaluation of other AI prompts. These are located in the './' directory (relative to this README)."
target_audience = ["all"] # Anyone involved in creating or refining AI prompts
granularity = "index"
status = "active"
last_updated = "{{YYYYMMDD}}" # Placeholder: To be set by creating agent (or today's date)
version = "1.0"
tags = ["readme", "index", "documentation", "prompts", "meta_prompts", "prompt_crafting", "prompt_engineering", "ai_prompts"]
related_context = [
    "../../../templates/documentation/template_00_directory_readme.README.md" # Link to the template this is based on
]
template_schema_doc = "../../../templates/documentation/template_00_directory_readme.README.md" # Path to its own schema
# --- Directory Specific Fields (Optional) ---
primary_artifact_type_contained = "AI Meta-Prompt Templates (for Prompt Crafting)"
key_subdirectories_summary = ["N/A - This directory contains prompt files directly."]
+++

# README: Index/README: Prompt Crafting & Meta-Prompt Templates

## 1. Purpose of this Directory

This directory, `.roo/commander/docs/prompts/prompt_crafting/`, serves the primary purpose of:
*   Housing a standardized collection of **meta-prompt templates** specifically designed to assist users in the **creation, refinement, and evaluation of other AI prompts**.
*   Providing tools to improve the quality, consistency, and effectiveness of prompt engineering practices within the agency.
*   Leveraging AI to help humans become better at instructing and interacting with AI.

## 2. Overview of Contents / Key Files & Subdirectories

This directory contains Markdown files, each representing a specific meta-prompt template. Each template consists of:
*   A `prompt_PC_XX_description.md` file: The actual meta-prompt text with TOML frontmatter and placeholders for customization.
*   A corresponding `prompt_PC_XX_description.README.md` file: Documentation explaining the meta-prompt's purpose, TOML schema, and usage instructions.

The meta-prompt templates currently available include:

*   **`prompt_PC_01_new_prompt_scaffolding_assistant.md` / `.README.md`**: Assists in outlining the structure and essential components for a brand new AI prompt.
*   **`prompt_PC_02_prompt_element_brainstormer.md` / `.README.md`**: Helps brainstorm various options for key elements (persona, task phrasing, context, etc.) within a new prompt.
*   **`prompt_PC_03_prompt_refinement_clarity.md` / `.README.md`**: Takes a user's draft prompt and provides feedback to enhance its clarity, conciseness, and effectiveness.
*   **`prompt_PC_04_few_shot_example_developer.md` / `.README.md`**: Guides the user in creating high-quality few-shot examples to include in a new prompt for better AI guidance.
*   **`prompt_PC_05_output_format_constraint_specifier.md` / `.README.md`**: Helps define and articulate desired output formats and constraints for a new prompt to ensure precise AI responses.
*   **`prompt_PC_06_prompt_evaluation_checklist_generator.md` / `.README.md`**: Generates a customized checklist for systematically evaluating the effectiveness of different prompt variations for a specific task type.
*   **`prompt_PC_07_persona_crafting_for_prompts.md` / `.README.md`**: Assists in developing detailed and effective AI persona descriptions to guide the AI's tone, style, and approach in its responses.

*(This list should be kept up-to-date as new meta-prompt templates are added or existing ones are modified.)*

## 3. Usage Notes / How to Contribute

*   **Using a Meta-Prompt Template:**
    1.  Navigate to this directory (`.roo/commander/docs/prompts/prompt_crafting/`).
    2.  Identify the relevant `prompt_PC_XX_description.md` file for your prompt engineering assistance needs.
    3.  Consult its corresponding `prompt_PC_XX_description.README.md` for specific usage instructions, TOML frontmatter schema, and guidance on filling placeholders.
    4.  Copy the `.md` meta-prompt template to your working location.
    5.  Rename the copied file and populate all placeholders with your specific information about the prompt you are trying to build or refine.
    6.  Submit the completed meta-prompt instance to your chosen AI model to receive guidance or generated content (e.g., a scaffold, brainstormed ideas, a checklist).

*   **Contributing a New Meta-Prompt Template:**
    1.  Identify a recurring need in the prompt engineering lifecycle that could be assisted by a new meta-prompt.
    2.  Discuss with the team or lead to ensure it aligns with existing tools and standards.
    3.  Use an existing meta-prompt template (e.g., `prompt_PC_01_...`) as a structural and stylistic base.
    4.  Develop the new meta-prompt (`.md` file) and its corresponding `README.md` file.
    5.  Name files consistently (e.g., `prompt_PC_YY_topic_description.md`).
    6.  Update this main `README.md` file (this document) to include the new meta-prompt template in the "Overview of Contents" section.
    7.  Ensure the new meta-prompt template is committed to the repository.

## 4. Related Documents

*   `[.roo/commander/docs/prompts/critique/README.md]` (Index for critique-focused prompts, which these meta-prompts can help build or refine)
*   `[.roo/commander/docs/standards/XX-ai-prompting-guidelines.md]` (Link to any general AI prompting guidelines if they exist)

## 5. Maintenance

This `README.md` should be updated whenever new meta-prompt templates are added to this directory, or existing ones are significantly modified or removed. Please ensure the `last_updated` field in the TOML frontmatter of this document is also updated.

## 6. Google AI Studio
https://aistudio.google.com/prompts/1AX7TZ-ubXWTw8102WGhEsUZ-EYyQNgnw