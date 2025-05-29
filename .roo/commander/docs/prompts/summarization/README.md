+++
# --- Basic Metadata ---
id = "DIR-README-PromptsSummarization-20250528" # Date of creation/update
title = "Index/README: Summarization Prompts"
context_type = "directory_index"
scope = "Provides an overview and index for standardized AI prompts focused on summarization, condensation, extraction, and simplification of text-based content, located in the './' directory (relative to this README)."
target_audience = ["all"] # Content creators, analysts, researchers, managers, anyone needing to distill information
granularity = "index"
status = "active"
last_updated = "{{YYYYMMDD}}" # Placeholder: To be set by creating agent (or today's date)
version = "1.0"
tags = ["readme", "index", "documentation", "prompts", "summarization", "ai_prompts", "information_distillation"]
related_context = [
    "../../../templates/documentation/template_00_directory_readme.README.md", # Link to the template this is based on
    "../critique/README.md" # Link to the critique prompts directory README for context
]
template_schema_doc = "../../../templates/documentation/template_00_directory_readme.README.md" # Path to its own schema
# --- Directory Specific Fields (Optional) ---
primary_artifact_type_contained = "AI Prompt Templates (Summarization-focused)"
key_subdirectories_summary = ["N/A - This directory contains prompt files directly."]
+++

# README: Index/README: Summarization Prompts

## 1. Purpose of this Directory

This directory, `.roo/commander/docs/prompts/summarization/`, serves the primary purpose of:
*   Housing a standardized collection of AI prompt templates specifically designed for **summarizing, condensing, extracting key information from, and simplifying text-based content**.
*   Enabling users to efficiently process and understand large volumes of information, repurpose content for different channels, and communicate complex ideas more clearly.

## 2. Overview of Contents / Key Files & Subdirectories

This directory contains Markdown files, each representing a specific summarization-focused prompt template. Each template typically consists of:
*   A `prompt_SUM_XX_description.md` file: The actual prompt text with TOML frontmatter and placeholders for customization.
*   A corresponding `prompt_SUM_XX_description.README.md` file: Documentation explaining the prompt's purpose, TOML schema, and usage instructions.

The prompt templates cover a range of summarization needs:

*   **`prompt_SUM_01_executive_summary_generation.md` / `.README.md`**
    *   Generates a concise executive summary from a longer document, tailored for a senior audience.
*   **`prompt_SUM_02_key_takeaways_extraction.md` / `.README.md`**
    *   Extracts a specified number of key takeaways or action items from text, presented as a clear list.
*   **`prompt_SUM_03_abstract_creation.md` / `.README.md`**
    *   Creates a formal abstract for academic or technical documents, outlining purpose, methodology, results, and conclusions.
*   **`prompt_SUM_04_concept_simplification_eliX.md` / `.README.md`**
    *   Simplifies complex concepts or technical terms for a specified audience level (e.g., "Explain Like I'm 5").
*   **`prompt_SUM_05_meeting_minutes_summary.md` / `.README.md`**
    *   Processes raw meeting notes or transcripts into a structured summary with discussion points, decisions, and action items.
*   **`prompt_SUM_06_content_condensation_for_distribution.md` / `.README.md`**
    *   Adapts longer content into shorter versions for specific channels like social media or newsletters.
*   **`prompt_SUM_07_comparative_summary.md` / `.README.md`**
    *   Summarizes multiple texts on a common topic, highlighting similarities, differences, and unique contributions.
*   **`prompt_SUM_08_technical_doc_section_summary.md` / `.README.md`**
    *   Summarizes a specific, dense section of a technical document for broader understanding or quick reference.

*(This list should be kept up-to-date as new summarization prompt templates are added or existing ones are modified.)*

## 3. Usage Notes / How to Contribute

*   **Using a Summarization Prompt Template:**
    1.  Navigate to this directory (`.roo/commander/docs/prompts/summarization/`).
    2.  Identify the relevant `prompt_SUM_XX_description.md` file for your summarization task.
    3.  Consult its corresponding `prompt_SUM_XX_description.README.md` for specific usage instructions, TOML frontmatter schema, and guidance on providing source text and contextual details.
    4.  Copy the `.md` prompt template to your working location.
    5.  Rename the copied file and populate all placeholders with your specific information, including the text to be summarized and any parameters for the summary.
    6.  Submit the completed prompt instance to your chosen AI model.

*   **Contributing a New Summarization Prompt Template:**
    1.  Identify a recurring need for a specific type of summarization or text transformation not yet covered.
    2.  Discuss with the team or lead to ensure it aligns with agency standards and doesn't excessively overlap with existing prompts.
    3.  Use an existing prompt template from this directory as a structural and stylistic base.
    4.  Develop the new prompt (`.md` file), including clear TOML frontmatter, well-defined placeholders for user input (source text, desired output characteristics), and specific instructions for the AI.
    5.  Create a corresponding `README.md` file for the new prompt, explaining its purpose, schema, and usage, modeled after existing READMEs in this directory.
    6.  Name files consistently (e.g., `prompt_SUM_YY_description.md` and `prompt_SUM_YY_description.README.md`).
    7.  Update this main `README.md` file (this document) to include the new prompt template in the "Overview of Contents" section.
    8.  Ensure the new prompt template is committed to the repository.

## 4. Related Documents

*   `[.roo/commander/docs/standards/XX-ai-prompting-guidelines.md]` (Link to any general AI prompting guidelines if they exist)
*   `../critique/README.md` (Index for Critique & Improvement Prompts)
*   `../../../templates/documentation/template_00_directory_readme.README.md` (Often used as a base for creating the `README.md` files for new prompt templates)

## 5. Maintenance

This `README.md` should be updated whenever new summarization prompt templates are added to this directory, or existing ones are significantly modified or removed. Please ensure the `last_updated` field in the TOML frontmatter of this document is also updated.

## 6. Google AI Studio
https://aistudio.google.com/prompts/1Uv8grQi075slrijHi4Y5h3kqLnezIaEn