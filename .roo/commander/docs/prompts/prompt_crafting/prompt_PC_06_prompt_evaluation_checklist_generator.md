+++
# --- Prompt Evaluation Checklist Generator Prompt ---
id = "PROMPT-Craft-EvalChecklistGen-[YYYYMMDDHHMMSS]" # Placeholder: e.g., PROMPT-Craft-EvalChecklistGen-SummarizationPrompts-20250528110000
title = "Prompt Evaluation Checklist Generator Assistant"
prompt_type = "guidance_and_generation"
domain = "prompt_engineering_meta"
version = "1.0"
created_date = "{{YYYYMMDD}}"
last_updated = "{{TIMESTAMP_ISO_Z}}"
authors = ["[Your Name/Mode Slug]"]
tags = ["prompt", "prompt_crafting", "meta_prompt", "prompt_engineering", "prompt_evaluation", "testing_prompts", "checklist_generator"]
# related_schema_doc = ".roo/commander/docs/prompts/prompt_crafting/prompt_PC_06_prompt_evaluation_checklist_generator.README.md" # Link to its own README
+++

Subject: **Assistance Request: Generating an Evaluation Checklist for AI Prompts Designed for [General Task Type]**

I am developing and testing several variations of AI prompts designed to perform tasks related to **[General Task Type, e.g., 'text summarization', 'creative content generation', 'code generation', 'data extraction', 'customer service responses', 'factual question answering']**.

To systematically evaluate and compare the effectiveness of these different prompt variations, I need your help to generate a comprehensive evaluation checklist.

**1. Overview of the Prompts Being Evaluated:**
   *   **General Task Type:** [Reiterate the main category of tasks the prompts are designed for.]
   *   **Key Objectives of These Prompts:** [What are the primary goals these prompts are trying to achieve with the AI's output? e.g., "Produce accurate and concise summaries," "Generate engaging and original story ideas," "Write efficient and bug-free Python code."]
   *   **Typical Inputs to These Prompts:** [Briefly describe the kind of input data or queries these prompts will handle. e.g., "Long articles or research papers," "A theme or starting sentence," "A description of a programming problem."]
   *   **Desired Characteristics of the AI's Output:** [What qualities define a "good" or "successful" output from these prompts? e.g., Accuracy, conciseness, creativity, adherence to style, completeness, efficiency (for code), helpfulness.]
   *   **Target AI Model (if known, or general LLM capabilities):** [e.g., Gemini, GPT-4, or "a general-purpose advanced LLM."]

**2. Specific Aspects to Consider for Evaluation (Optional):**
   *   [Are there any particular aspects of prompt performance or output quality that are especially important for this task type that you want to ensure are covered in the checklist? e.g., "For creative writing, originality and coherence are key," "For code generation, correctness and efficiency are paramount."]

**3. Request for Evaluation Checklist Generation:**

I need you to act as an expert in prompt engineering, AI evaluation, and quality assurance. Based on the information above, please generate a detailed and actionable evaluation checklist that I can use to assess and compare different prompt variations for the specified general task type.

The checklist should include criteria related to both the **prompt's design** (if I were reviewing the prompt text itself) and, more importantly, the **quality and effectiveness of the AI's output** when using the prompt.

Please structure the checklist with clear categories and specific, measurable (where possible) checklist items. For each item, consider if a simple Yes/No, a rating scale (e.g., 1-5), or a qualitative comment would be most appropriate for evaluation.

Consider including categories such as:

*   **A. Output Accuracy & Correctness:**
    *   (e.g., Is the information factually correct? Does the code run without errors? Is the summary faithful to the source?)
*   **B. Relevance & Task Adherence:**
    *   (e.g., Does the output directly address the prompt's request? Does it stay on topic?)
*   **C. Clarity & Understandability of Output:**
    *   (e.g., Is the language clear and easy to comprehend? Is the structure logical?)
*   **D. Completeness & Thoroughness of Output:**
    *   (e.g., Does the output cover all necessary aspects? Is it sufficiently detailed for the purpose?)
*   **E. Conciseness & Efficiency of Output:**
    *   (e.g., Is the output free of unnecessary verbosity? Is it an efficient solution (for code/problem-solving)?)
*   **F. Adherence to Specified Format & Constraints:**
    *   (e.g., Does the output follow the requested format (JSON, Markdown, etc.)? Does it meet length or style constraints?)
*   **G. Tone, Style & Persona Consistency (if applicable):**
    *   (e.g., Does the output match the desired tone and persona specified in or implied by the prompt?)
*   **H. Creativity & Originality (if applicable):**
    *   (e.g., For creative tasks, does the output demonstrate originality and imagination?)
*   **I. Absence of Bias & Harmful Content:**
    *   (e.g., Is the output free from obvious biases or inappropriate content?)
*   **J. User Experience / Helpfulness (if applicable):**
    *   (e.g., For tasks like customer service or Q&A, how helpful and user-friendly is the response?)
*   **K. Robustness & Handling of Edge Cases (if testable with variations):**
    *   (e.g., How well does the prompt perform with slightly different inputs or edge cases?)

*   **L. (Optional - For Prompt Design Review) Prompt Clarity & Effectiveness:**
    *   (e.g., Is the prompt itself clear and unambiguous? Does it provide sufficient context?)

Please tailor the checklist items to be as specific as possible for the **[General Task Type]** I've indicated. The goal is to have a practical tool for systematically improving my prompts through iterative testing and evaluation.

I am looking for a **comprehensive and actionable checklist** that I can directly use or adapt for my prompt evaluation process.