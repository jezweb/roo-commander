+++
# --- Key Takeaways Extraction Prompt ---
id = "PROMPT-SUM-KeyTakeaways-[YYYYMMDDHHMMSS]" # Placeholder: e.g., PROMPT-SUM-KeyTakeaways-ArticleX-20250528070000
title = "Key Takeaways Extraction Request"
prompt_type = "summarization_extraction"
domain = "document_analysis_information_extraction"
version = "1.0"
created_date = "{{YYYYMMDD}}"
last_updated = "{{TIMESTAMP_ISO_Z}}"
authors = ["[Your Name/Mode Slug]"]
tags = ["prompt", "summarization", "key_takeaways", "information_extraction", "bullet_points", "action_items"]
# related_schema_doc = ".roo/commander/docs/prompts/summarization/prompt_SUM_02_key_takeaways_extraction.README.md" # Link to its own README
+++

Subject: **Key Takeaways Extraction Request for: [Document Title/Topic]**

I require a list of key takeaways from the following document/text: **[Document Title/Topic, e.g., 'Minutes from Project Alpha Weekly Meeting', 'Research Paper on AI Ethics', 'Client Feedback Survey Results', 'Article on New Marketing Trends']**.

**1. Document Overview & Context for Takeaways:**
   *   **Document Title/Topic:** [Full title or clear topic of the original document.]
   *   **Original Purpose of the Document:** [What was the main goal of the longer document? (e.g., To record meeting discussions, present research, share feedback, inform about trends).]
   *   **Target Audience for THESE Key Takeaways:** [Who will be using this list of takeaways? (e.g., Team members needing a quick reminder, managers needing an overview, individuals needing action items). This influences the type of takeaways to prioritize.]
   *   **Number of Key Takeaways Desired:** [Specify a number, e.g., "Top 5 key takeaways," "Approximately 3-7 important points." If flexible, state "Identify the most significant takeaways."]
   *   **Focus of Takeaways (if specific):** [Should the takeaways focus on particular aspects? (e.g., "Focus on actionable items," "Highlight surprising findings," "Emphasize decisions made," "Extract all recommendations"). If no specific focus, state "General key takeaways."]
   *   **Format of Takeaways:** [e.g., "Bulleted list," "Numbered list," "Short sentences." Default is usually a bulleted list.]

**2. Document Text for Extraction:**

*   **Link to the Full Document (if accessible by AI and preferred):**
    [Provide a direct link to the document. Ensure the AI will have access if it's a live link.]
    e.g., `https://ourcompany.sharepoint.com/sites/projectalpha/MeetingMinutes_20250528.docx`

*   **(Alternatively, and often necessary for AI) Paste the Full Text or Relevant Sections Here:**
    ```text
    // Paste the full text of the document from which takeaways are to be extracted.
    // For very long documents, pasting the most relevant sections (e.g., discussion points, conclusions, action item sections from minutes) 
    // is acceptable, but clearly indicate if the provided text is an excerpt. Providing as much relevant text as possible yields better results.

    // Example (from meeting notes):
    // ## Discussion Point 1: Timeline for Feature X
    // The team discussed the feasibility of the current timeline. John mentioned a potential blocker due to dependency on Team B.
    // Decision: Sarah will follow up with Team B lead by EOD tomorrow to clarify.
    // ## Discussion Point 2: Budget Allocation
    // Concerns were raised about the Q3 marketing budget.
    // Action Item: Mark to review budget and propose adjustments by Friday.
    // [... more content ...]
    ```

**3. Request for Key Takeaways Extraction:**

I need you to operate as an astute analyst and concise communicator. Based on the provided document text and context:

1.  **Carefully read and understand** the provided document text.
2.  **Identify and extract** the most important, significant, or actionable pieces of information that align with the `Focus of Takeaways` and would be valuable for the `Target Audience for THESE Key Takeaways`.
3.  **Present these takeaways** in the specified `Format of Takeaways` (defaulting to a clear, concise bulleted list).
4.  **Adhere** to the `Number of Key Takeaways Desired`. If a specific number is given, prioritize the most impactful ones to meet that number.
5.  Each takeaway should be **phrased clearly and succinctly**.
6.  If the focus is on action items, ensure they clearly state the action, who is responsible (if mentioned), and any deadlines (if mentioned).

Please generate the list of key takeaways.