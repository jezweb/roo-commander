+++
# --- Code Explanation & Walkthrough Prompt ---
id = "PROMPT-Coding-CodeExplanation-[YYYYMMDDHHMMSS]" # Placeholder: e.g., PROMPT-Coding-CodeExplanation-JSFunctionX-20250528070000
title = "Code Explanation & Walkthrough Request"
prompt_type = "explanation_technical_code"
domain = "coding_and_technical"
version = "1.0"
created_date = "{{YYYYMMDD}}"
last_updated = "{{TIMESTAMP_ISO_Z}}"
authors = ["[Your Name/Mode Slug]"]
tags = ["prompt", "coding", "code_explanation", "code_review", "debugging", "learning_code"]
# related_schema_doc = ".roo/commander/docs/prompts/coding/prompt_CD_02_code_explanation_walkthrough.README.md" # Link to its own README
+++

Subject: **Code Explanation Request: [Brief Description of Code or its Source]**

I require a detailed explanation and walkthrough of the following code snippet/function/module: **[Brief Description of Code or its Source, e.g., 'JavaScript utility function for date formatting', 'Python class for API interaction', 'A specific function from our legacy codebase']**.

**1. Code for Explanation:**

```[language_here_eg_python_javascript_java]
// Paste the EXACT code snippet, function, class, or module you want explained here.
// For very large pieces of code, you might select a key function or section,
// but ensure enough context is provided if it relies on other parts not shown.

function exampleUtility(data, options) {
  if (!data || data.length === 0) {
    return options && options.default ? options.default : "No data provided";
  }
  
  let processedData = data.map(item => item * (options && options.multiplier ? options.multiplier : 2));
  
  if (options && options.toUpperCase) {
    processedData = processedData.map(String).map(s => s.toUpperCase());
  }
  
  return processedData.join(", ");
}
```

**2. Context (If Necessary):**
   *   **Programming Language:** `[Specify the programming language if not obvious from the snippet, e.g., Python, JavaScript, Java, C#]` (The language can also be specified in the code block fence.)
   *   **Source/Purpose (if known):** [Where did this code come from? What is its general purpose within a larger system, if known? This helps understand intent.]
       e.g., "This is a helper function from our data processing library."
       e.g., "I found this snippet on Stack Overflow and I'm trying to understand it."
   *   **Specific Questions or Areas of Confusion:** [Are there particular lines, concepts, or behaviors in the code you find confusing or want special attention paid to?]
       e.g., "I don't understand what the `options && options.multiplier ? options.multiplier : 2` part is doing."
       e.g., "Why is it converting to String before `toUpperCase()`?"
   *   **Desired Level of Detail:** [e.g., "High-level overview," "Detailed line-by-line explanation," "Focus on the algorithm used," "Explain like I'm a beginner in this language."]

**3. Request for Explanation:**

Please provide a clear and comprehensive explanation of the provided code. I would appreciate it if you could cover:

*   **Overall Purpose:** What is the main goal or functionality of this code?
*   **Inputs & Outputs:** What data does it take as input, and what does it produce as output (including types)?
*   **Step-by-Step Walkthrough:** Explain the logic flow, how variables are used and modified, and what each significant block or line of code does.
*   **Key Concepts/Techniques Used:** Highlight any important programming concepts, patterns, or language features employed (e.g., recursion, closures, specific library functions).
*   **Potential Edge Cases or Assumptions:** Does the code make any implicit assumptions? Are there any edge cases it might not handle well?
*   **(If specified in context) Answers to my specific questions.**

Please aim for an explanation that is easy to understand for someone with [mention your assumed or desired level of familiarity with the language/concepts, e.g., 'intermediate JavaScript knowledge', 'a basic understanding of Python'].