+++
# --- Abstract Creation Prompt ---
id = "PROMPT-SUM-AbstractCreation-[YYYYMMDDHHMMSS]" # Placeholder: e.g., PROMPT-SUM-AbstractCreation-ResearchPaperX-20250528080000
title = "Abstract Creation Request for Document/Article"
prompt_type = "summarization_generation_formal"
domain = "academic_technical_writing_summarization"
version = "1.0"
created_date = "{{YYYYMMDD}}"
last_updated = "{{TIMESTAMP_ISO_Z}}"
authors = ["[Your Name/Mode Slug]"]
tags = ["prompt", "summarization", "abstract", "research_paper", "technical_document", "academic_writing", "concise_summary"]
# related_schema_doc = ".roo/commander/docs/prompts/summarization/prompt_SUM_03_abstract_creation.README.md" # Link to its own README
+++

Subject: **Abstract Creation Request for: [Document/Article Title]**

I require a formal abstract for the following document/article: **[Document/Article Title, e.g., 'The Impact of AI on Modern Marketing Strategies', 'A Study of Remote Work Productivity Trends', 'Technical Specification for Project Phoenix']**.

**1. Document/Article Overview for Abstract Creation:**
   *   **Full Title:** [Exact full title of the document/article.]
   *   **Type of Document/Article:** [e.g., Research paper, journal article, technical report, whitepaper, conference paper, thesis chapter.]
   *   **Primary Purpose/Objective(s) of the Document:** [What did the document aim to investigate, explain, prove, or describe?]
   *   **Methodology/Approach (if applicable, especially for research):** [Briefly, what methods were used? (e.g., Quantitative analysis, qualitative interviews, literature review, experimental design, system development.)]
   *   **Key Findings/Results (if applicable):** [What were the most important outcomes or results presented in the document?]
   *   **Main Conclusions/Implications:** [What are the primary conclusions drawn, or the broader implications of the work?]
   *   **Target Audience for the Original Document:** [Who was the document originally written for?]
   *   **Desired Length of Abstract (approximate word count):** [e.g., "150-250 words," "around 200 words." If no preference, state "Standard academic abstract length."]
   *   **Keywords (Optional - if you want them identified or have some in mind):** [List any important keywords that should be reflected in or accompany the abstract.]

**2. Document/Article Text for Abstract Creation:**

*   **Link to the Full Document/Article (if accessible by AI and preferred):**
    [Provide a direct link. Ensure the AI will have access.]
    e.g., `https://www.researchgate.net/publication/your_paper_id`

*   **(Alternatively, and often necessary for AI) Paste the Full Text or Key Extended Sections Here:**
    ```text
    // Paste the full text of the document/article here.
    // For very long documents, ensure at least the Introduction, Methodology (if any), Results/Findings, Discussion, and Conclusion sections are included.
    // Clearly indicate if the provided text is an excerpt. However, the more complete the text, the better the abstract.

    // Example:
    // ## Abstract (Existing, if any - for reference or to be ignored)
    // [If there's an old abstract, you can include it and specify if the AI should ignore it or use it as a very loose reference]
    //
    // ## Introduction
    // The rise of artificial intelligence (AI) presents both opportunities and challenges for modern marketing...
    // [... entire content of the document/article ...]
    // ## Conclusion
    // Our findings suggest that AI-driven personalization significantly enhances customer engagement... Future research should explore...
    ```

**3. Request for Abstract Generation:**

I need you to operate as an academic or technical writer skilled in crafting concise and informative abstracts. Based on the provided document/article text and context:

1.  **Thoroughly analyze** the content to identify its core components: purpose, scope, methodology (if applicable), key findings/results, and principal conclusions/implications.
2.  **Synthesize** these components into a single, coherent paragraph (unless a multi-paragraph format is standard for the specified document type and length).
3.  The abstract must be **self-contained**, providing a comprehensive overview of the document's essence without requiring the reader to consult the full text for basic understanding.
4.  It should be **accurate**, reflecting the content of the document faithfully without adding new information or interpretations.
5.  It should be **concise and specific**, using precise language and avoiding vague statements.
6.  Adhere to the `Desired Length of Abstract`.
7.  If `Keywords` were requested or provided, ensure the abstract reflects these or suggest appropriate keywords based on the content.
8.  The tone should be **objective and formal**, appropriate for the specified `Type of Document/Article`.

Please generate the abstract.