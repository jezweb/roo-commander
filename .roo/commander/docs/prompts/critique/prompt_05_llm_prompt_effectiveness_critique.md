+++
# --- LLM Prompt Effectiveness Critique Prompt ---
id = "PROMPT-Critique-LLMPromptEffectiveness-[YYYYMMDDHHMMSS]" # Placeholder: e.g., PROMPT-Critique-LLMPromptEffectiveness-20250525140000
title = "LLM Prompt Effectiveness Critique & Enhancement Request"
prompt_type = "critique_and_improvement"
domain = "llm_prompt_engineering"
version = "1.0"
created_date = "{{YYYYMMDD}}"
last_updated = "{{TIMESTAMP_ISO_Z}}"
authors = ["[Your Name/Mode Slug]"]
tags = ["prompt", "critique", "llm", "prompt_engineering", "gemini", "gpt", "ai_interaction"]
# related_schema_doc = ".roo/commander/docs/prompts/critique/prompt_05_llm_prompt_effectiveness_critique.README.md" # Link to its own README
+++

Subject: **Critical Review & Enhancement Request for LLM Prompt: [Brief Description of Prompt's Purpose]**

I require your advanced critical analysis of the following prompt designed for use with a Large Language Model (LLM). My goal is to significantly improve its effectiveness in achieving the desired output.

**1. LLM Prompt Details:**

*   **The Prompt Under Review:**
    ```text
    // Paste the EXACT prompt you are using or proposing here.
    // For example:
    // "Summarize the following text into three bullet points, focusing on the main financial implications. The tone should be formal and concise. Text: [Paste Text Here]"
    ```

*   **Target LLM (if specific):** [e.g., Gemini Pro, GPT-4, Claude 3 Opus, a specific fine-tuned model. If not specific, state "General LLM".]
*   **Intended Task / Desired Output:** [Clearly describe what you want the LLM to do or generate. What does a successful response look like? e.g., "Generate a marketing email," "Extract key entities from text," "Answer a specific question based on provided context," "Write Python code for X."]
*   **Context Provided to LLM (if separate from the prompt text above):** [Describe any additional context, documents, or few-shot examples that are provided to the LLM along with the main prompt. If none, state "None".]
*   **(Optional) Example of a Good Output (if you have one):**
    ```text
    // Paste an example of what you consider a good response from the LLM.
    ```
*   **(Optional) Example of a Bad or Undesired Output (if you have one):**
    ```text
    // Paste an example of a problematic response you've received.
    ```

**2. Request for Critical Analysis & Improvement Suggestions:**

I need you to operate as an expert in prompt engineering and LLM behavior. Assume my current prompt may be suboptimal, ambiguous, or lacking necessary components for consistent, high-quality responses.

Please rigorously analyze the provided prompt and context, and provide detailed feedback on the following aspects:

*   **A. Clarity & Specificity:**
    *   Is the prompt clear, unambiguous, and easy for the LLM to understand?
    *   Does it precisely define the task the LLM should perform?
    *   Are there any phrases or instructions that could be misinterpreted?

*   **B. Context Sufficiency & Quality:**
    *   Does the prompt provide enough relevant context for the LLM to perform the task effectively?
    *   Is the provided context (if any) well-structured and easy for the LLM to utilize?
    *   Is any of the context irrelevant, potentially confusing, or missing?

*   **C. Instruction Quality & Completeness:**
    *   Are the instructions comprehensive? Do they cover all necessary aspects of the desired output (e.g., format, length, style, content constraints)?
    *   Are instructions actionable and direct?
    *   Does the prompt effectively guide the LLM towards the desired output structure (e.g., using delimiters, requesting specific formats like JSON, Markdown)?

*   **D. Constraint Definition & Control:**
    *   Does the prompt effectively constrain the LLM's output to prevent irrelevant, overly verbose, or off-topic responses?
    *   Are negative constraints (what *not* to do) used appropriately, if needed?
    *   How well does the prompt control for length, detail, and scope?

*   **E. Persona & Tone (if applicable):**
    *   If a specific persona or tone is desired in the output, does the prompt effectively instruct the LLM to adopt it?
    *   Is the instructed persona/tone consistent and appropriate for the task?

*   **F. Potential for Bias or Undesired Output:**
    *   Are there any elements in the prompt that might inadvertently introduce bias or lead to harmful, unethical, or nonsensical outputs?
    *   Does the prompt guard against common LLM failure modes (e.g., hallucination, making up facts, sycophancy) for this type of task?

*   **G. Efficiency & Token Usage (Consideration):**
    *   Is the prompt unnecessarily verbose, potentially leading to higher token consumption than needed?
    *   Could the same intent be conveyed more concisely without sacrificing clarity or effectiveness? (This is a secondary concern to effectiveness but good to note).

*   **H. Use of Prompt Engineering Techniques:**
    *   Does the prompt effectively use techniques like role-playing, few-shot examples (if applicable), chain-of-thought prompting (if relevant for complex tasks), or explicit output structuring?
    *   Are there other techniques that could be beneficial for this specific prompt and task?

*   **I. Iterative Refinement Suggestions:**
    *   Suggest specific alternative phrasings or additions to the prompt.
    *   If providing few-shot examples would help, suggest what those examples should look like.
    *   Offer a revised version of the prompt if you believe it would be significantly better.

*   **J. Overall Effectiveness & Robustness:**
    *   How likely is the current prompt to consistently produce the desired output across various inputs (if applicable)?
    *   What are the biggest weaknesses of this prompt?
    *   What are the top 3-5 actionable recommendations you would make to significantly improve this LLM prompt?

I am looking for a **transformative critique** that provides concrete, actionable insights to make this prompt far more effective and reliable. Please be direct, thorough, and provide justifications for your recommendations.