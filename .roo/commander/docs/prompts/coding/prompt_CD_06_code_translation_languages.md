+++
# --- Code Translation Between Languages Prompt ---
id = "PROMPT-Coding-CodeTranslation-[YYYYMMDDHHMMSS]" # Placeholder: e.g., PROMPT-Coding-CodeTranslation-PyToJS-20250528110000
title = "Code Translation Between Languages Request"
prompt_type = "generation_technical_code_translate"
domain = "coding_and_technical"
version = "1.0"
created_date = "{{YYYYMMDD}}"
last_updated = "{{TIMESTAMP_ISO_Z}}"
authors = ["[Your Name/Mode Slug]"]
tags = ["prompt", "coding", "code_translation", "language_conversion", "porting_code", "programming_languages"]
# related_schema_doc = ".roo/commander/docs/prompts/coding/prompt_CD_06_code_translation_languages.README.md" # Link to its own README
+++

Subject: **Code Translation Request: [Source Language] to [Target Language] for [Brief Description of Code]**

I require assistance translating a piece of code from **[Source Language]** to **[Target Language]**. The code performs: **[Brief Description of Code's Functionality, e.g., 'string manipulation', 'a simple calculation', 'file reading logic']**.

**1. Original Code (Source Language):**

```[source_language_here_eg_python]
// Paste the EXACT code snippet, function, class, or module from the SOURCE language here.
// Ensure it's a manageable size for translation. For very large systems, focus on a key component.

// Example (Python):
// def greet(name):
//   message = "Hello, " + name + "!"
//   if len(name) > 10:
//     message += " You have a long name!"
//   return message

// items = ["apple", "banana", "cherry"]
// for item in items:
//   print(greet(item))
```

**2. Translation Requirements & Context:**
   *   **Source Programming Language & Version (if relevant):** `[e.g., Python 3.8, JavaScript ES6]`
   *   **Target Programming Language & Version (if relevant):** `[e.g., JavaScript ES2020, Java 11, Go 1.18, C# .NET 6]`
   *   **Core Functionality to Preserve:** [Reiterate the essential logic or behavior that MUST be maintained in the translated code.]
       e.g., "The translated code must perform the same greeting logic, including the conditional check for name length."
   *   **Idiomatic Translation Preferred:** [e.g., "Yes, please make the target language code idiomatic and leverage standard libraries/features of [Target Language]," or "A direct, literal translation is acceptable for now, focusing on functional equivalence."]
   *   **Dependencies / Libraries (Source Language):** [List any specific libraries or modules used in the source code that might have equivalents or require different handling in the target language.]
       e.g., "Source uses Python's `requests` library. The target (JavaScript) should use `node-fetch` or browser `fetch`."
       e.g., "No external libraries used in the source."
   *   **Target Environment (if relevant):** [Where will the translated code run? (e.g., Node.js server, web browser, standalone application). This might influence library choices or available features.]
   *   **Specific Areas of Concern for Translation (Optional):** [Are there any parts of the source code you anticipate might be tricky to translate or have specific requirements for in the target language?]
       e.g., "How Python's list comprehensions translate to Java."
       e.g., "Error handling approach in Go compared to Python's try-except."

**3. Request for Translated Code:**

Please translate the provided **[Source Language]** code into **[Target Language]**. The translated code should:

*   Accurately replicate the core functionality of the original code.
*   Be well-structured and readable in the target language.
*   Use idiomatic constructs of the **[Target Language]** where appropriate (if requested).
*   Include brief comments to explain any non-obvious translation choices or assumptions made, especially if direct equivalents for libraries or features don't exist.
*   Handle basic error conditions similarly if they were handled in the original, or note if error handling needs to be re-thought for the target language.

Provide the complete translated code snippet. If there are significant differences in approach or potential pitfalls in the translation, please highlight them.