+++
# --- Comparative Summary of Multiple Texts/Sources Prompt ---
id = "PROMPT-SUM-ComparativeSummary-[YYYYMMDDHHMMSS]" # Placeholder: e.g., PROMPT-SUM-ComparativeSummary-ArticleAB-20250528120000
title = "Comparative Summary of Multiple Texts/Sources Request"
prompt_type = "summarization_analysis_comparison"
domain = "document_analysis_research_synthesis"
version = "1.0"
created_date = "{{YYYYMMDD}}"
last_updated = "{{TIMESTAMP_ISO_Z}}"
authors = ["[Your Name/Mode Slug]"]
tags = ["prompt", "summarization", "comparative_analysis", "text_comparison", "synthesis", "research_summary", "competitive_analysis"]
# related_schema_doc = ".roo/commander/docs/prompts/summarization/prompt_SUM_07_comparative_summary.README.md" # Link to its own README
+++

Subject: **Comparative Summary Request for: [Topic of Comparison] based on [Number] Sources**

I require a comparative summary of **[Number, e.g., 'two', 'three']** texts/sources related to **[Topic of Comparison, e.g., 'different approaches to AI ethics', 'reviews for Product X vs. Product Y', 'competitor strategies in the Z market']**.

**1. Texts/Sources & Context for Comparison:**
   *   **Overall Topic of Comparison:** [Clearly state the overarching theme or subject being compared across the sources.]
   *   **Primary Goal of this Comparative Summary:** [What do you want to understand or achieve with this summary? (e.g., Identify common themes and differences, understand varying perspectives, evaluate strengths/weaknesses of different options, inform a decision).]
   *   **Specific Aspects/Criteria for Comparison (if any):** [Are there particular points, features, arguments, or criteria you want the comparison to focus on? (e.g., "Compare their proposed solutions, methodologies, and target audiences," "Focus on differences in pricing, features, and customer support mentioned in the reviews.")] If not, the AI will identify salient points of comparison.
   *   **Desired Format/Structure of the Summary:** [e.g.,
        *   "A point-by-point comparison highlighting similarities and differences for each aspect."
        *   "A narrative summary discussing overarching themes, then detailing key distinctions."
        *   "A table comparing [Aspect 1], [Aspect 2], [Aspect 3] across the sources."
        *   Default: Narrative summary covering commonalities and divergences, followed by bullet points for key distinct features/arguments of each source.]
   *   **Desired Length of Summary (approximate):** [e.g., "About 300-500 words," "One page." If flexible, state "Concise yet comprehensive."]

**2. Texts/Sources for Comparison:**

*   **Source 1: [Brief Identifier for Source 1, e.g., 'Article A by Author X', 'Product X Review from Site Y']**
    *   **Link (if accessible by AI and preferred):** `[Link to Source 1]`
    *   **(OR) Paste Text for Source 1 Here:**
        ```text
        // Paste the full text or relevant excerpts for Source 1 here.
        // Clearly label the beginning of this source's text.
        // Text for Source 1...
        ```

*   **Source 2: [Brief Identifier for Source 2, e.g., 'Article B by Author Z', 'Product Y Review from Site W']**
    *   **Link (if accessible by AI and preferred):** `[Link to Source 2]`
    *   **(OR) Paste Text for Source 2 Here:**
        ```text
        // Paste the full text or relevant excerpts for Source 2 here.
        // Clearly label the beginning of this source's text.
        // Text for Source 2...
        ```

*   **(Add more sources as needed, following the same format)**
    **Source 3: [Brief Identifier for Source 3]**
    *   **Link (if accessible by AI and preferred):** `[Link to Source 3]`
    *   **(OR) Paste Text for Source 3 Here:**
        ```text
        // Text for Source 3...
        ```

**3. Request for Comparative Summary Generation:**

I need you to operate as an analytical researcher and skilled synthesizer of information. Based on the provided texts/sources and context:

1.  **Thoroughly read and understand** each provided source document.
2.  **Identify key themes, arguments, features, or points** within each source relevant to the `Overall Topic of Comparison` and any `Specific Aspects/Criteria for Comparison`.
3.  **Systematically compare and contrast** the sources, noting:
    *   **Similarities/Common Ground:** Where do the sources agree or present similar information/perspectives?
    *   **Differences/Divergences:** Where do the sources differ, offer conflicting views, or highlight unique aspects?
    *   **Unique Contributions:** What unique information or perspective does each source bring (if any)?
4.  **Synthesize these findings** into a coherent comparative summary, structured according to the `Desired Format/Structure of the Summary`.
5.  Ensure the summary is **objective and accurately represents** the information from all provided sources. Avoid injecting personal opinions not found in the texts.
6.  Adhere to the `Desired Length of Summary`.
7.  The summary should help the reader quickly understand the landscape of information or opinions presented across the sources regarding the specified topic.

Please generate the comparative summary.