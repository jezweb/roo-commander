+++
# --- Code Snippet Generation Prompt ---
id = "PROMPT-Coding-CodeSnippetGen-[YYYYMMDDHHMMSS]" # Placeholder: e.g., PROMPT-Coding-CodeSnippetGen-PythonCSVRead-20250528060000
title = "Code Snippet Generation Request"
prompt_type = "generation_technical_code"
domain = "coding_and_technical"
version = "1.0"
created_date = "{{YYYYMMDD}}"
last_updated = "{{TIMESTAMP_ISO_Z}}"
authors = ["[Your Name/Mode Slug]"]
tags = ["prompt", "coding", "code_generation", "snippet", "scripting", "programming_assistance"]
# related_schema_doc = ".roo/commander/docs/prompts/coding/prompt_CD_01_code_snippet_generation.README.md" # Link to its own README
+++

Subject: **Code Snippet Generation Request: [Brief Description of Desired Functionality]**

I require a code snippet to perform the following task: **[Brief Description of Desired Functionality, e.g., 'Read data from a CSV file', 'Calculate Fibonacci sequence', 'Validate an email format']**.

**1. Desired Functionality & Specifications:**
   *   **Programming Language:** `[Specify the programming language, e.g., Python, JavaScript, Java, C#, Ruby, Go, PHP, Bash, PowerShell]`
   *   **Core Task:** [Clearly and concisely describe what the code should do. Be specific about the operation to be performed.]
       e.g., "Read all rows from a CSV file into a list of dictionaries."
       e.g., "Generate the first N numbers of the Fibonacci sequence."
       e.g., "Check if a given string is a valid email address format."
   *   **Inputs (if any):** [Describe the inputs the code snippet should accept. Specify data types and formats if important.]
       e.g., "Input: File path to a CSV file (string)."
       e.g., "Input: An integer N representing the count of Fibonacci numbers."
       e.g., "Input: A string representing the email address to validate."
   *   **Outputs (Expected Result):** [Describe the expected output or behavior of the code. Specify data types and formats.]
       e.g., "Output: A list of dictionaries, where each dictionary represents a row with column headers as keys."
       e.g., "Output: A list of N integers representing the Fibonacci sequence."
       e.g., "Output: Boolean (True if valid email format, False otherwise)."
   *   **Key Libraries/Frameworks to Use (if specific):** [Mention any preferred libraries, modules, or frameworks. If none, state "None" or "Use standard libraries where possible".]
       e.g., "Python: Use the `csv` module."
       e.g., "JavaScript: No external libraries needed."
   *   **Error Handling (Basic Requirements, if any):** [Should the code include basic error handling? If so, what kind? (e.g., "Handle file not found errors for CSV reading," "Return an empty list if N is less than 1 for Fibonacci"). If not critical, state "Basic error handling preferred but not strictly required for this snippet." ]
   *   **Style/Context (Optional):** [Any preferences for coding style (e.g., functional, object-oriented snippet if applicable), or context for where this snippet will be used if it influences the design.]
       e.g., "Prefer a functional approach for the Fibonacci generator."
       e.g., "This snippet will be part of a larger data processing script."

**2. Example (Optional but Highly Recommended for Complex Requests):**

*   **Example Input:**
    ```
    // [Provide a concrete example of the input]
    // e.g., For CSV reading: File path: "data/my_data.csv"
    // e.g., Content of my_data.csv:
    // name,age
    // Alice,30
    // Bob,24
    ```
*   **Example Output (corresponding to the example input):**
    ```
    // [Provide the expected output for the given example input]
    // e.g., For CSV reading:
    // [
    //   {'name': 'Alice', 'age': '30'},
    //   {'name': 'Bob', 'age': '24'}
    // ]
    ```

**Request for Code Snippet:**

Please generate a clear, correct, and reasonably efficient code snippet in **[Re-state Programming Language]** that accomplishes the task described above. Include brief comments where necessary to explain key parts of the logic. If multiple approaches are common, you can briefly note them, but provide one primary, recommended snippet.