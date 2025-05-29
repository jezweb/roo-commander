+++
# --- Basic Metadata ---
id = "DIR-README-PromptsLearning-20250528" # Date of creation/update
title = "Index/README: Learning & Development Prompts"
context_type = "directory_index"
scope = "Provides an overview and index for standardized AI prompts focused on facilitating learning, skill acquisition, conceptual understanding, and knowledge organization, located in the './' directory (relative to this README)."
target_audience = ["all_employees", "team_leads", "hr_ld_specialists"]
granularity = "index"
status = "active"
last_updated = "{{YYYYMMDD}}" # Placeholder: To be set by creating agent (or today's date)
version = "1.0"
tags = ["readme", "index", "documentation", "prompts", "learning", "skill_development", "education", "knowledge_transfer"]
related_context = [
    "../../../templates/documentation/template_00_directory_readme.README.md", # Link to the template this is based on
    "../README.md" # Link to the parent /prompts/ README
]
template_schema_doc = "../../../templates/documentation/template_00_directory_readme.README.md" # Path to its own schema
# --- Directory Specific Fields (Optional) ---
primary_artifact_type_contained = "AI Prompt Templates (Learning & Development Focused)"
key_subdirectories_summary = ["N/A - This directory contains prompt files directly."]
+++

# README: Index/README: Learning & Development Prompts

## 1. Purpose of this Directory

This directory, `.roo/commander/docs/prompts/learning/`, serves the primary purpose of:
*   Housing a standardized collection of AI prompt templates specifically designed to **support and accelerate learning, skill development, conceptual understanding, and knowledge organization** for individuals and teams within the agency.
*   Providing tools to create structured learning plans, simplify complex topics, curate resources, generate practice ideas, and prepare informational briefings.

## 2. Overview of Contents / Key Files & Subdirectories

This directory contains Markdown files, each representing a specific learning-focused prompt template. Each template typically consists of:
*   A `prompt_LRN_XX_description.md` file: The actual prompt text with TOML frontmatter and placeholders for customization.
*   A corresponding `prompt_LRN_XX_description.README.md` file: Documentation explaining the prompt's purpose, TOML schema, and usage instructions.

The prompt templates currently available in this category include:

*   **`prompt_LRN_01_structured_learning_plan.md` / `.README.md`**
    *   Generates a personalized, structured learning plan for acquiring a new skill or understanding a complex topic.
*   **`prompt_LRN_02_complex_concept_explanation.md` / `.README.md`**
    *   Provides a clear and simplified explanation of a complex concept, tailored to a specific audience's level of understanding.
*   **`prompt_LRN_03_key_terminology_glossary.md` / `.README.md`**
    *   Generates a glossary of key terms, acronyms, and jargon relevant to a specific field, project, or technology.
*   **`prompt_LRN_04_learning_resource_pathway.md` / `.README.md`**
    *   Suggests types of high-quality learning resources and a potential learning pathway for a specified skill or topic.
*   **`prompt_LRN_05_practice_project_exercise_ideas.md` / `.README.md`**
    *   Generates practical project and exercise ideas to help solidify understanding and build hands-on experience.
*   **`prompt_LRN_06_comparative_analysis_learning.md` / `.README.md`**
    *   Provides a structured comparison of two or more related concepts, tools, or technologies to deepen understanding.
*   **`prompt_LRN_07_teach_back_understanding_check.md` / `.README.md`**
    *   Allows users to "teach back" a concept and receive feedback on their explanation's accuracy, clarity, and completeness.
*   **`prompt_LRN_08_industry_trend_briefing_prep.md` / `.README.md`**
    *   Helps prepare a structured outline for an industry trend briefing note or internal presentation.

*(This list should be kept up-to-date as new prompt templates are added or existing ones are modified within this `/learning` directory.)*

## 3. Usage Notes / How to Contribute

*   **Using a Prompt Template:**
    1.  Navigate to this directory (`.roo/commander/docs/prompts/learning/`).
    2.  Identify the relevant `prompt_LRN_XX_description.md` file for your learning or informational needs.
    3.  Consult its corresponding `prompt_LRN_XX_description.README.md` for specific usage instructions, TOML frontmatter schema, and guidance on filling placeholders.
    4.  Copy the `.md` prompt template to your working location.
    5.  Rename the copied file and populate all placeholders with your specific information.
    6.  Submit the completed prompt instance to your chosen AI model.

*   **Contributing a New Prompt Template:**
    1.  Identify a recurring need for a learning-focused prompt not yet covered.
    2.  Discuss with the team or lead to ensure it aligns with agency standards and doesn't excessively overlap with existing prompts.
    3.  Use an existing prompt template from this directory as a structural and stylistic base.
    4.  Develop the new prompt (`.md` file), including clear TOML frontmatter, well-defined placeholders for user input, and specific instructions for the AI.
    5.  Create a corresponding `README.md` file for the new prompt, explaining its purpose, schema, and usage.
    6.  Name files consistently (e.g., `prompt_LRN_YY_description.md` and `prompt_LRN_YY_description.README.md`).
    7.  Update this main `README.md` file (this document) to include the new prompt template in the "Overview of Contents" section.
    8.  Ensure the new prompt template is committed to the repository.

## 4. Related Documents

*   `../README.md` (Parent README for all prompt categories)
*   `[.roo/commander/docs/standards/XX-ai-prompting-guidelines.md]` (Link to any general AI prompting guidelines if they exist)
*   `../../../templates/documentation/template_00_directory_readme.README.md` (The template used as a base for this README)

## 5. Maintenance

This `README.md` should be updated whenever new learning-focused prompt templates are added to this directory, or existing ones are significantly modified or removed. Please ensure the `last_updated` field in the TOML frontmatter of this document is also updated.