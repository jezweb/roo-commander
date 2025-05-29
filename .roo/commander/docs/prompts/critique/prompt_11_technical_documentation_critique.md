+++
# --- Technical Documentation Critique Prompt ---
id = "PROMPT-Critique-TechDocs-[YYYYMMDDHHMMSS]" # Placeholder: e.g., PROMPT-Critique-TechDocs-20250525200000
title = "Technical Documentation Critique & Enhancement Request"
prompt_type = "critique_and_improvement"
domain = "technical_writing_documentation"
version = "1.0"
created_date = "{{YYYYMMDD}}"
last_updated = "{{TIMESTAMP_ISO_Z}}"
authors = ["[Your Name/Mode Slug]"]
tags = ["prompt", "critique", "technical_documentation", "user_manuals", "api_guides", "knowledge_base"]
# related_schema_doc = ".roo/commander/docs/prompts/critique/prompt_11_technical_documentation_critique.README.md" # Link to its own README
+++

Subject: **Critical Review & Enhancement Request for Technical Documentation: [Title of the Document / System Documented]**

I require your advanced critical analysis of the technical documentation for **[Title of the Document / System Documented, e.g., 'User Guide for Product X', 'API Reference for Service Y', 'System Architecture Document for Project Z', 'Knowledge Base Article on Feature A']**.

**1. Documentation Overview & Context:**
   *   **Document Title/Topic:** [Exact title or specific topic of the documentation piece.]
   *   **Purpose of the Documentation:** [What is this document intended to help the reader achieve or understand?]
   *   **Target Audience:** [Who is this documentation written for? (e.g., End-users (novice/expert), developers, system administrators, internal support staff). Describe their likely technical proficiency.]
   *   **Type of Documentation:** [e.g., User manual, tutorial, API reference, troubleshooting guide, conceptual overview, installation guide.]

**2. Documentation Details:**

*   **Link to the Documentation:**
    [Provide a direct link to the documentation (e.g., URL of a web page, Google Doc, SharePoint link, PDF hosted online). Ensure the AI will have access if it's a live link.]
    e.g., `https://docs.example.com/product-x/user-guide`

*   **(Alternatively, or for specific focus) Paste Key Sections or the Full Text:**
    [If a direct link is not feasible, or if you want focus on specific parts, paste the relevant text here. For very long documents, pasting a representative chapter or section is acceptable, but indicate if it's partial.]

    ```text
    // Example: Paste a section of the documentation here
    // ## Section 2.1: Configuring Your Account
    // To configure your account, first navigate to the 'Settings' panel located in the top-right corner.
    // Click on 'Profile Settings'. You will see fields for 'Username', 'Email', and 'Password'.
    // To change your password, enter your current password followed by the new password twice.
    ```

**3. Request for Critical Analysis & Improvement Suggestions:**

I need you to operate as an expert technical writer, a meticulous editor, and a representative of the target audience. Assume the current documentation may have weaknesses in clarity, accuracy, completeness, usability, or overall effectiveness. My goal is to create documentation that is exceptionally clear, helpful, accurate, and enables the target audience to succeed with minimal friction.

Please rigorously analyze the provided documentation and context, and provide detailed feedback on:

*   **A. Clarity & Understandability:**
    *   Is the language clear, concise, and easy for the *target audience* to understand?
    *   Are technical terms and jargon explained appropriately, or avoided if the audience is non-technical?
    *   Are concepts presented in a logical and easy-to-follow manner?
    *   Are there any ambiguous statements, confusing sentences, or overly complex explanations?

*   **B. Accuracy & Completeness:**
    *   Is the information technically accurate and up-to-date?
    *   Are all necessary steps, options, and information included for the tasks or concepts being described?
    *   Are there any gaps in information that would leave the reader with unanswered questions or unable to complete a task?
    *   Are prerequisites or dependencies clearly stated?

*   **C. Structure & Navigability:**
    *   Is the document well-organized with a clear structure (e.g., headings, subheadings, table of contents)?
    *   Is it easy for readers to find the specific information they need quickly?
    *   Is there effective use of cross-references or links to related information (if applicable)?
    *   Is the information flow logical from section to section?

*   **D. Actionability & Usefulness:**
    *   Does the documentation enable the reader to perform tasks successfully and efficiently?
    *   Are instructions step-by-step and easy to follow?
    *   Does it address common user problems, questions, or use cases relevant to the topic?
    *   Is it practical and focused on what the user needs to do or know?

*   **E. Consistency:**
    *   Is there consistency in terminology, formatting, style, and tone throughout the document (and with related documentation, if known)?
    *   Are instructions for similar actions presented consistently?

*   **F. Examples, Illustrations & Visuals:**
    *   Is there effective use of examples (e.g., code snippets, sample configurations, usage scenarios)?
    *   Are screenshots, diagrams, or other visuals used appropriately to clarify complex information or illustrate steps? Are they clear and up-to-date?
    *   Could additional examples or visuals improve understanding?

*   **G. Language, Tone & Style:**
    *   Is the tone appropriate for the target audience and the purpose of the document?
    *   Is the style engaging (where appropriate) or suitably direct and professional?
    *   Are there any grammatical errors, typos, punctuation mistakes, or awkward phrasing?
    *   Is active voice used appropriately for instructions?

*   **H. Accessibility (General Considerations):**
    *   While a full accessibility audit is complex, are there any obvious issues (e.g., very small font in images, poor color contrast in diagrams if provided as images, reliance solely on color to convey information)?

*   **I. Overall Effectiveness & User Experience:**
    *   How well does the documentation meet the needs of its target audience and achieve its stated purpose?
    *   What would be a reader's likely overall experience (e.g., helpful, frustrating, confusing)?
    *   What are the documentation's strongest points and its most significant weaknesses?
    *   What are the top 3-5 actionable recommendations you would make to significantly improve this piece of technical documentation?

I am looking for a **transformative critique** that challenges current assumptions and provides practical, actionable insights to make this documentation significantly more effective. Please be direct, thorough, and provide justifications for your recommendations.