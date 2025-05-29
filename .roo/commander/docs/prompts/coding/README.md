+++
# --- Basic Metadata ---
id = "DIR-README-PromptsCoding-20250528" # Example date
title = "Index/README: Coding & Technical Assistance Prompts"
context_type = "directory_index"
scope = "Provides an overview and index for standardized AI prompts focused on coding assistance, technical explanations, and related development tasks, located in the './' directory (relative to this README)."
target_audience = ["developers", "engineers", "technical_leads", "ai_agents"]
granularity = "index"
status = "active"
last_updated = "{{YYYYMMDD}}" # Placeholder: To be set by creating agent (or today's date)
version = "1.0"
tags = ["readme", "index", "documentation", "prompts", "coding", "technical_prompts", "development_assistance"]
related_context = [
    "../../../templates/documentation/template_00_directory_readme.README.md", # Link to the template this is based on
    "../README.md" # Link to the parent prompts/README.md
]
template_schema_doc = "../../../templates/documentation/template_00_directory_readme.README.md" # Path to its own schema
# --- Directory Specific Fields (Optional) ---
primary_artifact_type_contained = "AI Prompt Templates (Coding & Technical Assistance)"
key_subdirectories_summary = ["N/A - This directory contains prompt files directly."]
+++

# README: Index/README: Coding & Technical Assistance Prompts

## 1. Purpose of this Directory

This directory, `.roo/commander/docs/prompts/coding/`, serves the primary purpose of:
*   Housing a standardized collection of AI prompt templates specifically designed for eliciting **coding assistance, technical explanations, code generation, debugging help, and other development-related tasks**.
*   Ensuring consistency and high-quality outputs when using AI to support software development, scripting, and technical problem-solving.

## 2. Overview of Contents / Key Files & Subdirectories

This directory contains Markdown files, each representing a specific prompt template for coding and technical assistance. Each template typically consists of:
*   A `prompt_CD_XX_description.md` file: The actual prompt text with TOML frontmatter and placeholders for customization.
*   A corresponding `prompt_CD_XX_description.README.md` file: Documentation explaining the prompt's purpose, TOML schema, and usage instructions.

The prompt templates currently available in this category include:

*   **Code Generation & Snippets:**
    *   `prompt_CD_01_code_snippet_generation.md` / `.README.md` - For generating functional code snippets for specific tasks.
    *   `prompt_CD_06_code_translation_languages.md` / `.README.md` - For translating code between programming languages.
    *   `prompt_CD_07_regex_generation_explanation.md` / `.README.md` - For generating or explaining regular expressions.
    *   `prompt_CD_08_api_interaction_code_generation.md` / `.README.md` - For generating code to interact with API endpoints.
    *   `prompt_CD_09_database_query_generation_sql.md` / `.README.md` - For generating SQL database queries.
    *   `prompt_CD_12_dockerfile_compose_generation.md` / `.README.md` - For generating Dockerfiles or docker-compose snippets.

*   **Code Understanding & Improvement:**
    *   `prompt_CD_02_code_explanation_walkthrough.md` / `.README.md` - For getting detailed explanations of existing code.
    *   `prompt_CD_03_debugging_assistance_error_analysis.md` / `.README.md` - For help with debugging code and analyzing errors.
    *   `prompt_CD_04_code_refactoring_suggestions.md` / `.README.md` - For suggestions on improving code quality and structure.
    *   `prompt_CD_11_technical_concept_explanation_coding.md` / `.README.md` - For explanations of programming concepts, patterns, etc.

*   **Testing & Algorithms:**
    *   `prompt_CD_05_unit_test_generation.md` / `.README.md` - For generating unit test cases.
    *   `prompt_CD_10_algorithm_implementation_outline.md` / `.README.md` - For getting outlines or pseudocode for algorithm implementation.

*(This list should be kept up-to-date as new prompt templates are added or existing ones are modified within this category.)*

## 3. Usage Notes / How to Contribute

*   **Using a Prompt Template:**
    1.  Navigate to this directory (`.roo/commander/docs/prompts/coding/`).
    2.  Identify the relevant `prompt_CD_XX_description.md` file for your needs.
    3.  Consult its corresponding `prompt_CD_XX_description.README.md` for specific usage instructions.
    4.  Copy the `.md` prompt template, rename it, and populate all placeholders with your specific information.
    5.  Submit the completed prompt instance to your chosen AI model.

*   **Contributing a New Prompt Template:**
    1.  Identify a recurring need for a coding or technical assistance prompt.
    2.  Follow the general contribution guidelines outlined in the parent `prompts/README.md` or any specific agency standards.
    3.  Model your new prompt and its README after existing examples in this directory.
    4.  Use the `CD` prefix for "Coding & Technical" prompts (e.g., `prompt_CD_YY_...`).
    5.  Update this main `README.md` file (this document) to include the new prompt template in the "Overview of Contents" section.

## 4. Related Documents

*   `../README.md` (Parent directory README for all prompt categories)
*   `[.roo/commander/docs/standards/XX-ai-prompting-guidelines.md]` (Link to any general AI prompting guidelines if they exist)

## 5. Maintenance

This `README.md` should be updated whenever new coding/technical assistance prompt templates are added to this directory, or existing ones are significantly modified or removed. Please ensure the `last_updated` field in the TOML frontmatter of this document is also updated.