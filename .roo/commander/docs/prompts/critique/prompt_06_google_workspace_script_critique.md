+++
# --- Google Workspace Script/Automation Critique Prompt ---
id = "PROMPT-Critique-GoogleWorkspaceScript-[YYYYMMDDHHMMSS]" # Placeholder: e.g., PROMPT-Critique-GoogleWorkspaceScript-20250525150000
title = "Google Workspace Script/Automation Critique & Enhancement Request"
prompt_type = "critique_and_improvement"
domain = "google_workspace_automation"
version = "1.0"
created_date = "{{YYYYMMDD}}"
last_updated = "{{TIMESTAMP_ISO_Z}}"
authors = ["[Your Name/Mode Slug]"]
tags = ["prompt", "critique", "google_apps_script", "google_workspace", "automation", "scripting"]
# related_schema_doc = ".roo/commander/docs/prompts/critique/prompt_06_google_workspace_script_critique.README.md" # Link to its own README
+++

Subject: **Critical Review & Enhancement Request for Google Workspace Script: [Name/Purpose of the Script]**

I require your advanced critical analysis of the following Google Apps Script (or other Google Workspace automation) designed for **[Name/Purpose of the Script, e.g., 'Automating Email Responses in Gmail', 'Generating Reports in Google Sheets', 'Managing Calendar Events', 'Custom Document Workflow in Google Docs']**.

**1. Script Overview & Purpose:**
   *   **Primary Goal(s):** [Clearly state what the script is intended to achieve. What process does it automate or enhance within Google Workspace?]
   *   **Target Google Workspace App(s):** [e.g., Google Sheets, Gmail, Google Docs, Google Calendar, Google Drive, Google Forms.]
   *   **Trigger(s) / Execution Method:** [How is the script run? (e.g., Custom menu, `onOpen()` trigger, time-driven trigger, `onEdit()` trigger, manually from script editor, as a web app, from a Google Form submission).]
   *   **Key Functionality:** [Briefly describe the main actions the script performs.]

**2. Script Details:**

*   **The Script Code:**
    ```javascript
    // Paste your Google Apps Script code here.
    // For very long scripts, consider providing the most relevant functions
    // or a link to a shared Google Doc/GitHub Gist if absolutely necessary,
    // but pasting directly is preferred for self-contained critique.

    function exampleFunction() {
      var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
      var data = sheet.getRange("A1:B10").getValues();
      // ... more script logic
      MailApp.sendEmail("user@example.com", "Subject", "Body");
    }

    function onOpen() {
      SpreadsheetApp.getUi()
          .createMenu('Custom Menu')
          .addItem('Run Example Function', 'exampleFunction')
          .addToUi();
    }
    ```

*   **Required Scopes/Permissions (if known):** [List any specific OAuth scopes the script requires, e.g., `https://www.googleapis.com/auth/spreadsheets`, `https://www.googleapis.com/auth/gmail.send`.]
*   **External Services Called (if any):** [Does the script use `UrlFetchApp` or interact with non-Google APIs? If so, which ones?]
*   **User Interface Elements (if any):** [Does the script create custom menus, dialogs, sidebars, or web apps? Describe them briefly.]

**3. Request for Critical Analysis & Improvement Suggestions:**

I need you to operate as an expert Google Apps Script developer and Google Workspace automation specialist. Assume my current script may have inefficiencies, potential errors, security vulnerabilities, or areas that don't follow best practices. My goal is to create a robust, efficient, secure, maintainable, and user-friendly script.

Please rigorously analyze the provided script and context, and provide detailed feedback on:

*   **A. Code Quality & Readability:**
    *   Is the code well-structured, clearly written, and easy to understand?
    *   Are variable and function names descriptive?
    *   Is there adequate commenting, especially for complex logic?
    *   Is the code organized into logical functions?

*   **B. Efficiency & Performance:**
    *   Are there any inefficient operations, especially within loops or when interacting with Google Workspace services (e.g., excessive `getValue/setValue` calls instead of batch operations like `getValues/setValues`)?
    *   How well does the script handle potentially large datasets or frequent executions in terms of performance?
    *   Are Google Workspace service calls optimized (e.g., minimizing calls to `SpreadsheetApp`, `GmailApp`)?

*   **C. Error Handling & Resilience:**
    *   Is error handling implemented (e.g., using `try...catch` blocks)?
    *   How does the script behave if an API call fails, a service is temporarily unavailable, or unexpected data is encountered?
    *   Does it provide meaningful error messages to the user or log errors effectively?

*   **D. Security & Permissions:**
    *   Are the requested OAuth scopes appropriate and minimized to what the script actually needs?
    *   Is sensitive data handled securely (e.g., avoiding hardcoding API keys or passwords, being careful with user data)?
    *   If the script is published as a web app, are permissions (`AuthMode`, `ExecutionApiAccess`) set correctly and securely?
    *   Are there any potential vulnerabilities (e.g., if processing user-supplied input that could be malicious)?

*   **E. Adherence to Google Apps Script Best Practices & Quotas:**
    *   Does the script follow recommended Google Apps Script best practices?
    *   Are there any parts of the script that might frequently hit Google Workspace quotas or limitations (e.g., daily email limits, script runtime limits, trigger limits)?
    *   Is caching used where appropriate (`CacheService`)?

*   **F. Maintainability & Extensibility:**
    *   How easy would it be for another developer (or future you) to understand, debug, and modify this script?
    *   Is the script modular? Could parts be reused?
    *   Are there any hardcoded values that should be configurable?

*   **G. User Experience (if the script has UI elements):**
    *   If the script creates custom menus, dialogs, or sidebars, are they intuitive and user-friendly?
    *   Is feedback provided to the user during long operations?

*   **H. Trigger Management (if applicable):**
    *   If using triggers, are they configured correctly and efficiently?
    *   Are there considerations for managing or programmatically creating/deleting triggers if needed?

*   **I. Specific Recommendations & Code Improvements:**
    *   Provide concrete examples of how the code could be refactored or improved.
    *   Suggest alternative approaches or specific Apps Script methods that might be better.
    *   What are the top 3-5 actionable recommendations you would make to significantly improve this script?

I am looking for a **transformative critique** that challenges my current script and provides practical, actionable insights. Please be direct, thorough, and provide justifications for your recommendations.