+++
# --- Regular Expression Generation & Explanation Prompt ---
id = "PROMPT-Coding-RegexGenExplain-[YYYYMMDDHHMMSS]" # Placeholder: e.g., PROMPT-Coding-RegexGenExplain-EmailValidation-20250528120000
title = "Regular Expression Generation & Explanation Request"
prompt_type = "generation_explanation_technical_regex"
domain = "coding_and_technical"
version = "1.0"
created_date = "{{YYYYMMDD}}"
last_updated = "{{TIMESTAMP_ISO_Z}}"
authors = ["[Your Name/Mode Slug]"]
tags = ["prompt", "coding", "regex", "regular_expression", "pattern_matching", "text_processing", "data_validation"]
# related_schema_doc = ".roo/commander/docs/prompts/coding/prompt_CD_07_regex_generation_explanation.README.md" # Link to its own README
+++

Subject: **Regular Expression Request: [Generate/Explain] for [Brief Description of Pattern/Regex]**

I require assistance with a regular expression.
**Request Type:** `[Specify: "Generate a new regex" OR "Explain an existing regex"]`

**1. Details for Regex Generation (If Request Type is "Generate a new regex"):**
   *   **Pattern to Match/Validate:** [Clearly describe the pattern you want the regex to identify, validate, or extract. Be as specific as possible.]
       e.g., "Validate a standard email address format."
       e.g., "Extract all URLs (http, https, ftp) from a block of text."
       e.g., "Match North American phone numbers with optional country code and various delimiters like spaces, hyphens, or parentheses."
       e.g., "Find lines in a log file that start with a timestamp in 'YYYY-MM-DD HH:MM:SS' format and contain the word 'ERROR'."
   *   **Examples of Strings that SHOULD Match:**
       ```text
       // Provide 3-5 diverse examples of strings the regex should successfully match.
       // e.g., For email validation:
       // user@example.com
       // firstname.lastname@subdomain.example.co.uk
       // user+mailbox@example.org
       ```
   *   **Examples of Strings that SHOULD NOT Match (if applicable for validation):**
       ```text
       // Provide 3-5 examples of strings the regex should correctly reject.
       // e.g., For email validation:
       // user@example
       // @example.com
       // user with spaces@example.com
       // user@.com
       ```
   *   **Regex Flavor/Engine (if specific, otherwise assume PCRE/common):** `[e.g., JavaScript, Python, PCRE, Java, .NET. If unsure, state "General/Common".]`
   *   **Specific Requirements (e.g., case sensitivity, multiline, capture groups):** [Any special flags or features needed? Should specific parts of the match be captured in groups? If so, describe what to capture.]
       e.g., "Case-insensitive matching for the domain part of an email."
       e.g., "Capture the protocol, domain, and path separately for URLs."
       e.g., "Must work in multiline mode."

**2. Regex for Explanation (If Request Type is "Explain an existing regex"):**

```regex
// Paste the EXACT regular expression you want explained here.
// e.g., /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
```
   *   **Context of Use (Optional):** [Where did you find this regex or what is it used for? This can sometimes help in understanding its intent.]

**3. Request:**

*   **If Generating:** Please provide the regular expression. Also, include a clear, step-by-step explanation of how the regex works, breaking down its components (e.g., anchors, character classes, quantifiers, groups, lookarounds).
*   **If Explaining:** Please provide a clear, step-by-step explanation of the provided regular expression, breaking down its components and describing what patterns it is designed to match. Explain the meaning of each special character and construct used.

For generated regexes, please also provide a brief example of how it might be used in [Specify a common language like Python or JavaScript, or the flavor requested] if it's not obvious.