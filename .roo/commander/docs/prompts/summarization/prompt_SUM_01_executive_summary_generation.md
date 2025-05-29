+++
# --- Executive Summary Generation Prompt ---
id = "PROMPT-SUM-ExecSummary-[YYYYMMDDHHMMSS]" # Placeholder: e.g., PROMPT-SUM-ExecSummary-Q3Report-20250528060000
title = "Executive Summary Generation Request"
prompt_type = "summarization_generation"
domain = "document_analysis_reporting"
version = "1.0"
created_date = "{{YYYYMMDD}}"
last_updated = "{{TIMESTAMP_ISO_Z}}"
authors = ["[Your Name/Mode Slug]"]
tags = ["prompt", "summarization", "executive_summary", "reporting", "document_condensation", "key_findings"]
# related_schema_doc = ".roo/commander/docs/prompts/summarization/prompt_SUM_01_executive_summary_generation.README.md" # Link to its own README
+++

Subject: **Executive Summary Generation Request for: [Document Title/Topic]**

I require an executive summary for the following document/text: **[Document Title/Topic, e.g., 'Q3 Sales Performance Report', 'Market Research Findings on Gen Z Trends', 'Proposal for New Software Implementation']**.

**1. Document Overview & Context for Summary:**
   *   **Document Title/Topic:** [Full title or clear topic of the original document.]
   *   **Original Purpose of the Document:** [What was the main goal of the longer document? (e.g., To report on performance, to present research findings, to propose a project, to analyze a problem).]
   *   **Target Audience for THIS Executive Summary:** [Who will be reading this summary? (e.g., Senior leadership, board members, department heads, clients who need a quick overview). This will influence tone and emphasis.]
   *   **Key Aspects to Emphasize in the Summary:** [Are there specific areas, findings, conclusions, or recommendations from the original document that MUST be highlighted in the summary?]
   *   **Desired Length/Format of the Summary:** [e.g., "Approximately 250 words," "One page," "3-4 key paragraphs," "A main summary paragraph followed by 3-5 bullet points for key findings/recommendations."]
   *   **Overall Tone for the Summary:** [e.g., Formal, objective, persuasive, cautiously optimistic.]

**2. Document Text for Summarization:**

*   **Link to the Full Document (if accessible by AI and preferred):**
    [Provide a direct link to the document. Ensure the AI will have access if it's a live link.]
    e.g., `https://ourcompany.sharepoint.com/sites/reports/Q3SalesReport.pdf`

*   **(Alternatively, and often necessary for AI) Paste the Full Text or Key Extended Sections Here:**
    ```text
    // Paste the full text of the document to be summarized here.
    // For extremely long documents, paste the most critical sections (e.g., introduction, key findings chapters, conclusion, recommendations) 
    // and clearly indicate if the provided text is an excerpt. However, providing as much relevant text as possible yields better summaries.

    // Example:
    // ## Introduction
    // This report details the sales performance for the third quarter of 2025...
    // [... entire content of the document ...]
    // ## Conclusion and Recommendations
    // In conclusion, while overall sales saw a 5% increase, the Alpha product line underperformed... We recommend investing in targeted marketing for Alpha...
    ```

**3. Request for Executive Summary Generation:**

I need you to operate as an expert business analyst and concise writer. Based on the provided document text and context:

1.  **Identify and extract** the most critical information, including main objectives of the original document, key findings, significant data points, primary conclusions, and any major recommendations.
2.  **Synthesize** this information into a coherent and concise executive summary.
3.  **Ensure the summary is tailored** to the specified `Target Audience for THIS Executive Summary` and emphasizes the `Key Aspects to Emphasize`.
4.  **Adhere** to the `Desired Length/Format` and maintain the requested `Overall Tone`.
5.  The summary should be a stand-alone piece that gives a reliable and accurate overview of the original document's essence, enabling the target audience to grasp the core message quickly without needing to read the entire source document.
6.  **Omit** minor details, extensive background unless critical for context in the summary, and overly technical jargon unless the summary's target audience is technical.

Please generate the executive summary.