+++
# --- Output Format & Constraint Specifier Prompt ---
id = "PROMPT-Craft-OutputConstraintSpec-[YYYYMMDDHHMMSS]" # Placeholder: e.g., PROMPT-Craft-OutputConstraintSpec-JSONOutput-20250528100000
title = "Output Format & Constraint Specification Assistant for AI Prompts"
prompt_type = "guidance_and_generation"
domain = "prompt_engineering_meta"
version = "1.0"
created_date = "{{YYYYMMDD}}"
last_updated = "{{TIMESTAMP_ISO_Z}}"
authors = ["[Your Name/Mode Slug]"]
tags = ["prompt", "prompt_crafting", "meta_prompt", "prompt_engineering", "output_formatting", "constraints", "prompt_design", "structured_output"]
# related_schema_doc = ".roo/commander/docs/prompts/prompt_crafting/prompt_PC_05_output_format_constraint_specifier.README.md" # Link to its own README
+++

Subject: **Assistance Request: Specifying Output Format & Constraints for an AI Prompt on [Core Task of New Prompt]**

I am designing a new AI prompt to perform the core task of **[Core Task of New Prompt, e.g., 'extracting data from text', 'generating a list of ideas', 'creating a structured report', 'answering questions based on a document']**.

I need your expert assistance in clearly defining and articulating the desired output format and any necessary constraints to include in my new prompt, ensuring the AI's response is precisely what I need.

**1. Overview of the New Prompt's Core Task & Desired Output Nature:**
   *   **Primary Function of the New Prompt:** [Reiterate the core task clearly, e.g., "Extract names, email addresses, and company names from unstructured text."]
   *   **General Nature of Desired Output:** [Briefly describe what the output should generally look like or contain, even if the specific format isn't yet defined. e.g., "A list of extracted entities," "A structured summary with specific sections," "A short, factual answer."]
   *   **Target AI Model (if known, or general LLM capabilities):** [e.g., Gemini, GPT-4, or "a general-purpose advanced LLM."]
   *   **Why specific formatting/constraints are important for this task:** [e.g., "Output needs to be machine-readable," "Output needs to fit within a character limit for another system," "Specific sections are required for a report."]

**2. Initial Thoughts on Output Format & Constraints (if any):**

*   **Desired Output Structure/Format (Initial Idea):**
    [Do you have a preliminary idea for the format? e.g., "I was thinking of a JSON array of objects," "A Markdown table," "A bulleted list under specific headings," "Plain text, but with each item on a new line."]
    ```text
    // Example (if JSON):
    // [
    //   { "name": "...", "email": "...", "company": "..." },
    //   ...
    // ]
    ```

*   **Key Constraints Considered So Far:**
    [List any constraints you've already thought of. e.g., "The summary must be under 150 words," "Only extract up to 5 entities," "Do not include any personal opinions in the answer," "The list should be ordered alphabetically."]

**3. Request for Output Specification & Constraint Development Assistance:**

I need you to act as an expert prompt engineer with a strong understanding of how to guide LLMs to produce precisely formatted and constrained outputs. Based on the information above, please help me by:

*   **A. Recommending Optimal Output Formats:**
    *   Given the core task and nature of the desired output, what specific output formats (e.g., JSON, XML, Markdown, plain text with specific delimiters, numbered/bulleted lists, custom structures) would be most suitable and reliable for the AI to generate?
    *   For each recommended format, briefly explain its advantages for this use case.

*   **B. Generating Specific Formatting Instructions for the Prompt:**
    *   For the most suitable format(s), provide example phrasing for clear and unambiguous instructions that I can include in my new prompt to tell the AI *how* to structure its output.
    *   If the format is complex (like a specific JSON schema), provide a template or describe how to define it within the prompt.
    *   Example: "If recommending JSON, show me how to ask for specific keys, data types, and nesting."

*   **C. Brainstorming Essential Constraints:**
    *   What **positive constraints** (what the output *must* include or adhere to) are critical for this task? (e.g., specific fields, sections, length requirements, keywords to include).
    *   What **negative constraints** (what the output *must not* include or do) would be important to prevent errors or undesirable content? (e.g., avoiding certain topics, not exceeding a word count, not using informal language).
    *   Consider constraints related to:
        *   Length (words, characters, items in a list)
        *   Style & Tone
        *   Content (inclusions/exclusions)
        *   Structure & Order
        *   Factualness / Speculation

*   **D. Phrasing Constraint Instructions for the Prompt:**
    *   Provide example phrasing for how to clearly and effectively communicate these constraints to the AI within my new prompt.
    *   How can I make these constraints as unambiguous as possible?

*   **E. Handling Variability & Edge Cases:**
    *   How can the output format and constraints be defined to gracefully handle potential variability in the AI's response or edge cases in the input?
    *   For example, if asking for a list, what if no items are found?

*   **F. Ensuring Machine Readability (if applicable):**
    *   If the output needs to be processed by another script or system, what formatting considerations are key for ensuring reliable parsing?

My goal is to develop a set of precise instructions for output format and constraints that will make my new prompt highly reliable and its output predictable and useful.

I am looking for **concrete, actionable phrasing and structural advice** that I can directly incorporate into my new prompt.