+++
# --- Debugging Assistance & Error Analysis Prompt ---
id = "PROMPT-Coding-DebuggingHelp-[YYYYMMDDHHMMSS]" # Placeholder: e.g., PROMPT-Coding-DebuggingHelp-PythonTypeError-20250528080000
title = "Debugging Assistance & Error Analysis Request"
prompt_type = "assistance_technical_code_debug"
domain = "coding_and_technical"
version = "1.0"
created_date = "{{YYYYMMDD}}"
last_updated = "{{TIMESTAMP_ISO_Z}}"
authors = ["[Your Name/Mode Slug]"]
tags = ["prompt", "coding", "debugging", "error_analysis", "troubleshooting", "code_fix"]
# related_schema_doc = ".roo/commander/docs/prompts/coding/prompt_CD_03_debugging_assistance_error_analysis.README.md" # Link to its own README
+++

Subject: **Debugging Help Needed: [Brief Description of Problem/Error] in [Language/File]**

I require assistance debugging an issue with my code. Problem: **[Brief Description of Problem/Error, e.g., 'TypeError when processing list', 'Unexpected output from API call', 'Infinite loop in function X']**.

**1. Code Snippet Causing Issues:**

```[language_here_eg_python_javascript_java]
// Paste the RELEVANT code snippet, function, or class that is exhibiting the error or unexpected behavior.
// Include enough context for the AI to understand the flow, but try to keep it focused on the problematic area.

function processItems(items, config) {
  if (!items) {
    return []; // Guard against null items
  }
  
  const threshold = config.threshold || 10; // Default threshold if not in config
  let results = [];

  for (let i = 0; i < items.length; i++) {
    // Potential issue might be here if items[i] is not as expected
    if (items[i].value > threshold) { 
      results.push(items[i].name.toUpperCase()); // Assumes item has name and value
    }
  }
  return results;
}

// Example usage that might cause an error:
// const myItems = [ {name: "apple", value: 5}, {name: "banana"} ]; // banana has no value
// const myConfig = { threshold: 3 };
// console.log(processItems(myItems, myConfig)); 
```

**2. Error Message & Stack Trace (if applicable):**

```text
// Paste the FULL error message and stack trace here, if available.
// This is extremely helpful for debugging.

// Example:
// TypeError: Cannot read properties of undefined (reading 'value')
//     at processItems (eval at <anonymous> (file:///script.js:25:1), <anonymous>:10:24)
//     at eval (eval at <anonymous> (file:///script.js:25:1), <anonymous>:19:13)
//     at <anonymous>:1:1
//     at Script.runInThisContext (node:vm:139:12)
//     ...
```

**3. Problem Description & Context:**
   *   **Programming Language & Environment:** `[Specify language, version (if relevant), and environment (e.g., Node.js v18, Python 3.9 in a Django app, Browser (Chrome), Unity Engine)]`
   *   **Observed Behavior:** [Describe exactly what is happening when you run the code. What output do you see? How does it differ from what you expect?]
       e.g., "The script crashes with the TypeError above."
       e.g., "The function returns an empty array, but I expect it to return ['APPLE', 'BANANA']."
   *   **Expected Behavior:** [Describe what you *expect* the code to do or output.]
       e.g., "I expect it to process items that have a value property and skip those that don't, or handle it gracefully."
   *   **Steps to Reproduce (if not obvious from code):** [If specific steps are needed to trigger the error, list them.]
   *   **What You've Tried So Far (Optional):** [Briefly mention any debugging steps you've already taken or theories you have. This helps avoid redundant suggestions.]
       e.g., "I've tried printing `items[i]` inside the loop. I suspect `items[i].value` is sometimes undefined."

**4. Request for Debugging Assistance:**

Please help me understand the cause of this issue and suggest how to fix it. Specifically, I'd like to know:

*   **Probable Cause(s):** What is the most likely reason for the error message or unexpected behavior based on the code and error provided?
*   **Explanation:** Why is this happening?
*   **Suggested Fix(es):** How can I modify the code to resolve the issue and achieve the expected behavior? Please provide corrected code snippets if possible.
*   **Preventative Measures/Best Practices (if applicable):** Are there any general coding practices I could adopt to avoid similar issues in the future?

Thank you for your help!