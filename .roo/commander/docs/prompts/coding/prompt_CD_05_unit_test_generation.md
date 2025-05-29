+++
# --- Unit Test Generation Prompt ---
id = "PROMPT-Coding-UnitTestGen-[YYYYMMDDHHMMSS]" # Placeholder: e.g., PROMPT-Coding-UnitTestGen-JSUtilFunc-20250528100000
title = "Unit Test Generation Request"
prompt_type = "generation_technical_code_test"
domain = "coding_and_technical"
version = "1.0"
created_date = "{{YYYYMMDD}}"
last_updated = "{{TIMESTAMP_ISO_Z}}"
authors = ["[Your Name/Mode Slug]"]
tags = ["prompt", "coding", "unit_testing", "test_generation", "jest", "pytest", "junit", "software_quality"]
# related_schema_doc = ".roo/commander/docs/prompts/coding/prompt_CD_05_unit_test_generation.README.md" # Link to its own README
+++

Subject: **Unit Test Generation for: [Function/Method/Class Name] in [Language]**

I require assistance generating unit tests for the following code: **[Function/Method/Class Name, e.g., 'calculateDiscount function', 'User class constructor and methods', 'DataProcessor.process method']**.

**1. Code to be Tested:**

```[language_here_eg_python_javascript_java]
// Paste the EXACT code snippet, function, class, or module for which you want unit tests.
// Ensure it's self-contained enough for testing or describe necessary mocks/stubs.

// Example (JavaScript):
// export function calculateDiscount(price, percentage) {
//   if (typeof price !== 'number' || typeof percentage !== 'number') {
//     throw new Error("Invalid input types: price and percentage must be numbers.");
//   }
//   if (percentage < 0 || percentage > 100) {
//     throw new Error("Discount percentage must be between 0 and 100.");
//   }
//   if (price < 0) {
//     throw new Error("Price cannot be negative.");
//   }
//   return price * (percentage / 100);
// }
```

**2. Testing Context & Requirements:**
   *   **Programming Language & Version (if relevant):** `[Specify language and version, e.g., Python 3.9, JavaScript (ES2020) with Node.js, Java 11]`
   *   **Testing Framework/Library:** `[Specify the testing framework to be used, e.g., Jest, PyTest, JUnit, Mocha, NUnit, RSpec, PHPUnit]. If none, state "Suggest a common framework for [Language]." `
   *   **Key Functionalities to Test:** [List the main behaviors, paths, or outcomes of the code that need to be covered by tests. What are the most critical aspects?]
       e.g., "Test with valid inputs, invalid input types, percentage out of bounds, negative price."
       e.g., "Test user creation, password hashing, and login method for the User class."
   *   **Edge Cases to Consider:** [Mention any specific edge cases or boundary conditions you want tests for.]
       e.g., "Test with percentage = 0, percentage = 100, price = 0."
       e.g., "Test with empty arrays, null inputs, very large numbers."
   *   **Mocking/Stubbing Needs (if any):** [Does the code interact with external dependencies (e.g., APIs, databases, other modules) that will need to be mocked or stubbed for unit testing? If so, briefly describe them.]
       e.g., "The `getUserData` function makes an API call to `/api/users/{id}`. This should be mocked."
       e.g., "No external dependencies."
   *   **Desired Test Structure/Style (Optional):** [Any preferences for how tests are structured or named? (e.g., "Arrange-Act-Assert pattern," "Behavior-Driven Development (BDD) style descriptions").]

**3. Request for Unit Tests:**

Please generate a set of unit tests for the provided code using the **[Re-state Testing Framework/Library, or ask for suggestion]** framework in **[Re-state Programming Language]**. The tests should:

*   Cover the key functionalities and edge cases identified.
*   Include clear assertions to verify expected outcomes.
*   Be well-structured and easy to understand.
*   Include necessary setup (e.g., imports, mock setups) and teardown if applicable.
*   Follow common naming conventions for tests and test files (if applicable for the framework).

Provide the complete test code, ready to be run (assuming the testing framework is set up).