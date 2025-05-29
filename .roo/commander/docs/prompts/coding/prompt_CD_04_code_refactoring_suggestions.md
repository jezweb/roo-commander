+++
# --- Code Refactoring Suggestions Prompt ---
id = "PROMPT-Coding-CodeRefactor-[YYYYMMDDHHMMSS]" # Placeholder: e.g., PROMPT-Coding-CodeRefactor-PythonFuncOptimize-20250528090000
title = "Code Refactoring Suggestions Request"
prompt_type = "improvement_technical_code_refactor"
domain = "coding_and_technical"
version = "1.0"
created_date = "{{YYYYMMDD}}"
last_updated = "{{TIMESTAMP_ISO_Z}}"
authors = ["[Your Name/Mode Slug]"]
tags = ["prompt", "coding", "refactoring", "code_quality", "optimization", "maintainability", "best_practices"]
# related_schema_doc = ".roo/commander/docs/prompts/coding/prompt_CD_04_code_refactoring_suggestions.README.md" # Link to its own README
+++

Subject: **Code Refactoring Suggestions for: [Brief Description of Code/Functionality]**

I am seeking suggestions to refactor the following code snippet/function/module: **[Brief Description of Code/Functionality, e.g., 'Python function for data transformation', 'JavaScript class for user authentication', 'A complex conditional logic block']**. The goal is to improve its quality without altering its core external behavior.

**1. Code for Refactoring:**

```[language_here_eg_python_javascript_java]
// Paste the EXACT code snippet, function, class, or module you want refactoring suggestions for here.
// Provide enough code so the AI can understand its current structure and logic.

// Example (Python):
// def process_user_data(user_list):
//     results = []
//     for user in user_list:
//         if user['is_active']:
//             if user['age'] > 18 and user['country'] == 'USA':
//                 name = user['first_name'] + ' ' + user['last_name']
//                 status = "Eligible Adult (USA)"
//                 temp_data = {'full_name': name, 'eligibility_status': status, 'id': user['id']}
//                 if 'email' in user:
//                     temp_data['contact_email'] = user['email']
//                 results.append(temp_data)
//             elif user['age'] > 18:
//                 name = user['first_name'] + ' ' + user['last_name']
//                 status = "Eligible Adult (Non-USA)"
//                 temp_data = {'full_name': name, 'eligibility_status': status, 'id': user['id']}
//                 results.append(temp_data)
//     return results
```

**2. Context & Refactoring Goals:**
   *   **Programming Language & Version (if relevant):** `[Specify language and version, e.g., Python 3.9, JavaScript ES2020, Java 11]`
   *   **Current Issues or Concerns with the Code (if any):** [What specifically about this code do you feel could be improved? (e.g., "It's hard to read," "It seems inefficient," "It's difficult to modify without breaking things," "It has a lot of nested conditionals," "Code duplication").]
   *   **Primary Refactoring Objectives:** [What are your main goals for refactoring this code? Choose one or more, or state "General improvement." (e.g., Improve readability, Increase performance, Enhance maintainability, Reduce complexity, Adhere to specific design patterns, Improve testability, Make it more idiomatic for the language).]
   *   **Constraints or Limitations (if any):** [Are there any constraints to consider? (e.g., "Cannot introduce new external libraries," "Must maintain compatibility with an older version of X," "Performance is absolutely critical over readability for this specific section").]
   *   **Specific Design Patterns or Idioms to Consider (Optional):** [If you have specific patterns (e.g., Strategy pattern, Factory pattern) or language idioms in mind, mention them.]

**3. Request for Refactoring Suggestions:**

Please analyze the provided code and offer specific, actionable suggestions for refactoring it. For each suggestion or area of improvement, please:

*   **Identify the Area:** Clearly point out the part of the code your suggestion applies to.
*   **Explain the Rationale:** Briefly explain *why* this change would be an improvement (e.g., how it improves readability, performance, etc., aligning with the stated objectives).
*   **Provide Refactored Code Snippet(s):** Show the code *after* applying your suggested refactoring. If multiple small changes are suggested for a block, a single refactored block is fine.
*   **Discuss Trade-offs (if significant):** If a suggestion involves notable trade-offs (e.g., slight performance decrease for much better readability), please mention them.

I am looking for practical ways to make this code cleaner, more robust, and easier to work with, while ensuring its external functionality remains unchanged.