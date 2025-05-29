+++
# --- Technical Document Section Summary Prompt ---
id = "PROMPT-SUM-TechDocSection-[YYYYMMDDHHMMSS]" # Placeholder: e.g., PROMPT-SUM-TechDocSection-APISpecAuth-20250528130000
title = "Technical Document Section Summary Request"
prompt_type = "summarization_explanation_technical"
domain = "technical_writing_documentation_comprehension"
version = "1.0"
created_date = "{{YYYYMMDD}}"
last_updated = "{{TIMESTAMP_ISO_Z}}"
authors = ["[Your Name/Mode Slug]"]
tags = ["prompt", "summarization", "technical_documentation", "section_summary", "api_docs", "specification_summary", "knowledge_distillation"]
# related_schema_doc = ".roo/commander/docs/prompts/summarization/prompt_SUM_08_technical_doc_section_summary.README.md" # Link to its own README
+++

Subject: **Summary Request for Technical Document Section: [Section Title/Topic] from [Document Name]**

I require a summary of a specific section from a technical document: **[Section Title/Topic, e.g., 'Authentication Methods', 'Data Model Overview', 'Error Handling Protocols']** from the document titled **[Full Document Name, e.g., 'Project Phoenix API Specification v2.1', 'System Architecture Document - Zeta Module']**.

**1. Section & Document Context for Summary:**
   *   **Full Document Name:** [Provide the full title of the overarching technical document.]
   *   **Overall Purpose of the Full Document:** [Briefly, what is the main purpose of the entire document? (e.g., To specify API endpoints, to describe system architecture, to guide developers on using a library).]
   *   **Specific Section Title/Topic to be Summarized:** [Clearly identify the section. If it's not a formal title, describe it, e.g., "The section discussing database schema migration starting on page 12."]
   *   **Purpose of THIS Summary:** [Why is this specific section summary needed? (e.g., For a quick overview for a new team member, to include in a higher-level briefing document, to help a non-technical stakeholder understand its essence, to prepare for a discussion on this topic).]
   *   **Target Audience for THIS Summary:** [Who will be reading this summary? What is their likely technical background relative to the section's content? (e.g., "A project manager with some technical understanding," "A junior developer new to this system," "A marketing team member needing a high-level grasp.")]
   *   **Key Information to Capture in the Summary:** [Are there specific points, definitions, processes, or conclusions from this section that are most important to include in the summary?]
   *   **Desired Length/Format of Summary:** [e.g., "One or two concise paragraphs," "A bulleted list of 3-5 key points," "Approximately 100-150 words." If flexible, state "Clear and concise overview."]
   *   **Level of Technical Detail for Summary:** [e.g., "High-level, avoid deep jargon," "Moderately technical, can include key terms if explained," "As technical as the original but more concise."]

**2. Text of the Technical Document Section for Summarization:**

*   **Link to the Full Document (if AI can access and navigate to the section):**
    [Provide a direct link. If possible, specify page numbers or a direct anchor link to the section.]
    e.g., `https://ourcompany.dev/docs/project-phoenix-api-spec-v2.1#authentication`
    e.g., `Link to System Architecture PDF, see pages 12-15`

*   **(Alternatively, and often most reliable) Paste the Full Text of the Specific Section Here:**
    ```text
    // Paste the complete text of the technical document section that needs to be summarized.
    // Ensure all relevant diagrams, code snippets (if textual representation is key), and explanations from that section are included.

    // Example:
    // ### 3.2 Authentication Methods
    // The Project Phoenix API supports two primary methods of authentication: API Key Authentication and OAuth 2.0 Client Credentials Flow.
    // 
    // #### 3.2.1 API Key Authentication
    // Clients must include a valid API key in the `X-API-Key` header of each request. API keys are generated via the developer portal and should be treated as sensitive credentials...
    // [...rest of the text for section 3.2...]
    // This method is suitable for server-to-server integrations where the client application can securely store the API key.
    //
    // #### 3.2.2 OAuth 2.0 Client Credentials Flow
    // For applications requiring a more robust and standard token-based authentication, the OAuth 2.0 Client Credentials grant type is supported. Clients must first obtain an access token from the `/oauth/token` endpoint by presenting their client ID and client secret...
    // [...rest of the text for section 3.2...]
    // Access tokens are short-lived and must be refreshed periodically.
    ```

**3. Request for Section Summary Generation:**

I need you to operate as a skilled technical writer capable of distilling complex information into clear and concise summaries. Based on the provided section text and context:

1.  **Thoroughly analyze** the provided section to understand its core concepts, processes, definitions, and conclusions.
2.  **Identify and extract** the most critical information relevant to the `Purpose of THIS Summary` and the `Key Information to Capture`.
3.  **Synthesize** this information into a coherent summary, tailored to the `Target Audience for THIS Summary` and adhering to the specified `Level of Technical Detail`.
4.  **Ensure the summary is accurate** and faithfully represents the key aspects of the original section without introducing outside information or misinterpretations.
5.  **Adhere** to the `Desired Length/Format of Summary`.
6.  The summary should provide a clear and useful overview of the section's content, enabling the target audience to grasp its essence quickly.

Please generate the summary for the specified technical document section.