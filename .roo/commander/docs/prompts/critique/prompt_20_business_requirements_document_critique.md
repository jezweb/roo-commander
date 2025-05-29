+++
# --- Business Requirements Document (BRD) Critique Prompt ---
id = "PROMPT-Critique-BRD-[YYYYMMDDHHMMSS]" # Placeholder: e.g., PROMPT-Critique-BRD-NewCRM-20250527160000
title = "Business Requirements Document (BRD) Critique & Enhancement Request"
prompt_type = "critique_and_improvement"
domain = "requirements_analysis_documentation"
version = "1.0"
created_date = "{{YYYYMMDD}}"
last_updated = "{{TIMESTAMP_ISO_Z}}"
authors = ["[Your Name/Mode Slug]"]
tags = ["prompt", "critique", "brd", "business_requirements", "requirements_document", "product_management", "project_management"]
# related_schema_doc = ".roo/commander/docs/prompts/critique/prompt_20_business_requirements_document_critique.README.md" # Link to its own README
+++

Subject: **Critical Review & Enhancement Request for Business Requirements Document (BRD): [Project/System Name]**

I require your advanced critical analysis of the following Business Requirements Document (BRD) for the **[Project/System Name, e.g., 'New CRM Implementation', 'Website Redesign Phase 2', 'Mobile App Feature Enhancement']**.

**1. BRD Overview & Context:**
   *   **Project/System Name:** [Official name of the project or system the BRD pertains to.]
   *   **Overall Goal of the Project/System:** [What is the primary business problem being solved or opportunity being addressed? What is the desired future state?]
   *   **Key Business Stakeholders:** [List the main business units, departments, or roles that have a vested interest in this project/system and its requirements.]
   *   **Intended Audience for the BRD:** [Who will primarily use this BRD? (e.g., Development team, QA team, project managers, designers, vendors).]
   *   **Relationship to Other Documents (if any):** [e.g., Is this BRD based on a project charter, feasibility study, or market research report? Will it feed into functional specifications or technical design documents?]

**2. The Business Requirements Document (BRD) for Review:**

*   **Link to the BRD:**
    [Provide a direct link to the full BRD document (e.g., Google Doc, SharePoint, Confluence page, PDF). Ensure the AI will have access.]
    e.g., `https://docs.google.com/document/d/your_doc_id/edit`

*   **(Alternatively, or for specific focus) Paste Key Sections:**
    [If a direct link is not feasible, or if you want focus on specific parts, paste the text of key sections here. For example:
    - Introduction / Project Overview
    - Business Goals & Objectives
    - Scope (In Scope / Out of Scope)
    - Business Requirements (typically a numbered list)
    - Key Assumptions & Constraints
    - Success Criteria / Acceptance Criteria (if included at BRD level)]

    ```text
    // Example: Paste key sections or a sample of requirements here
    // ## 3. Business Requirements
    // BR-001: The system MUST allow users to register for a new account using their email address.
    // BR-002: The system SHALL provide an administrative interface for managing user accounts.
    // BR-003: Registered users SHOULD be able to reset their password via an email link.
    // ...
    // ## 4. Scope
    // ### 4.1 In Scope
    // - User registration and login
    // - Password management
    // ### 4.2 Out of Scope
    // - Integration with third-party SSO providers
    // [Rest of the relevant sections]
    ```

**3. Request for Critical Analysis & Improvement Suggestions:**

I need you to operate as an expert business analyst, a seasoned product manager, and a meticulous technical lead who will rely on this BRD for implementation. Assume the current BRD may have weaknesses in clarity, completeness, testability, or consistency. My goal is to refine this BRD to be a clear, unambiguous, and comprehensive foundation for successful project execution.

Please rigorously analyze the provided BRD and context, and provide detailed feedback on:

*   **A. Clarity & Unambiguity of Requirements:**
    *   Is each requirement stated clearly, concisely, and without jargon or ambiguity?
    *   Could any requirement be interpreted in multiple ways?
    *   Are terms and acronyms defined or used consistently?

*   **B. Completeness & Coverage:**
    *   Does the BRD capture all known business needs and objectives for the defined scope?
    *   Are there any obvious gaps or missing requirements that would be critical for achieving the project goals?
    *   Does it adequately cover different user roles or scenarios if applicable?

*   **C. Testability & Verifiability:**
    *   Is each requirement testable? Can a clear test case be derived to verify if the requirement has been met?
    *   Are acceptance criteria (if included or implied) clear and sufficient?

*   **D. Consistency & Non-Contradiction:**
    *   Are the requirements internally consistent with each other?
    *   Are there any conflicting or contradictory statements within the BRD?
    *   Is the level of detail consistent across similar types of requirements?

*   **E. Traceability (Conceptual):**
    *   Can requirements be easily traced back to business goals or stakeholder needs (even if not formally mapped in this document)?
    *   Are requirements uniquely identifiable (e.g., numbered)?

*   **F. Feasibility (High-Level Business Perspective):**
    *   From a business perspective, do the requirements seem generally feasible and realistic to implement? (Detailed technical feasibility might be assessed later, but flag obvious business impossibilities).

*   **G. Scope Definition:**
    *   Is the scope of the project/system clearly defined?
    *   Are "in scope" and "out of scope" items explicitly and unambiguously stated?

*   **H. Prioritization (if indicated):**
    *   If requirements are prioritized (e.g., Must Have, Should Have, Could Have, Won't Have - MoSCoW), is the prioritization clear and justified?

*   **I. Assumptions & Constraints:**
    *   Are key business assumptions and constraints clearly documented? Are they reasonable?
    *   Are there any unstated assumptions that should be made explicit?

*   **J. Focus on "What" vs. "How":**
    *   Does the BRD primarily focus on *what* the business needs, rather than prescribing *how* it should be implemented (which is typically for functional/technical specs)?

*   **K. Readability & Organization of the Document:**
    *   Is the BRD well-organized, easy to navigate, and understandable for its intended audience?
    *   Is the formatting consistent and does it aid readability?

*   **L. Overall Quality & Fitness for Purpose:**
    *   How well does this BRD serve as a foundation for subsequent design, development, and testing phases?
    *   What are the biggest risks or weaknesses in this BRD that could impact project success?
    *   What are the top 3-5 actionable recommendations you would make to significantly improve this BRD?

I am looking for a **transformative critique** that challenges current assumptions and provides practical, actionable insights to make this BRD significantly more robust and effective. Please be direct, thorough, and provide justifications for your recommendations.