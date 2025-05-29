+++
# --- Key Terminology & Glossary Generation Prompt ---
id = "PROMPT-Learn-GenGlossary-[YYYYMMDDHHMMSS]" # Placeholder: e.g., PROMPT-Learn-GenGlossary-AIProjectTerms-20250528080000
title = "Key Terminology & Glossary Generation Request"
prompt_type = "generation_reference_material"
domain = "learning_and_development_knowledge_organization"
version = "1.0"
created_date = "{{YYYYMMDD}}"
last_updated = "{{TIMESTAMP_ISO_Z}}"
authors = ["[Your Name/Mode Slug]"]
tags = ["prompt", "glossary", "terminology", "definitions", "learning_aid", "jargon_buster", "reference_material"]
# related_schema_doc = ".roo/commander/docs/prompts/learning/prompt_LRN_03_key_terminology_glossary.README.md" # Link to its own README
+++

Subject: **Request for Glossary of Key Terminology: [Specific Field/Project/Technology]**

I require a glossary of key terms, acronyms, and important jargon relevant to **[Specific Field, Project, Technology, Industry, or Client, e.g., 'our upcoming Project Phoenix', 'the field of Quantum Machine Learning', 'common terms used by Client XYZ in the logistics industry', 'Web3 development terminology']**.

**1. Glossary Context & Scope:**
   *   **Primary Domain for Glossary:** [Reiterate the specific field, project, technology, industry, or client.]
   *   **Target Audience for the Glossary:** [Who will primarily use this glossary? (e.g., New team members onboarding to Project Phoenix, non-technical stakeholders interacting with the Quantum ML team, our account managers working with Client XYZ, junior Web3 developers).]
   *   **Purpose of the Glossary:** [Why is this glossary needed? (e.g., To ensure consistent understanding of terms within a project team, to help new employees get up to speed quickly, to facilitate clearer communication with a client, to serve as a reference for technical documentation).]
   *   **Key Areas/Sub-topics to Cover (if specific):** [Are there particular sub-domains or categories of terms that are most important to include? (e.g., "For Project Phoenix, focus on terms related to our new microservice architecture and the specific AWS services we're using," "For Quantum ML, include foundational quantum concepts and common machine learning algorithms being adapted").]
   *   **Approximate Number of Terms Desired (Optional):** [e.g., "Around 20-30 key terms," "A comprehensive list for beginners."]
   *   **Existing List of Terms to Define (Optional):**
      [If you already have a list of specific terms you want defined, please provide them here. The AI can then focus on defining these and potentially suggesting related terms.]
      ```text
      // Example list:
      // - Qubit
      // - Superposition
      // - Entanglement
      // - ETL
      // - Data Lake
      // - Scrum Master
      ```

**2. Request for Glossary Generation:**

Please generate a glossary that includes:

*   **A. Term Selection:**
    *   Identify and select key terminology, acronyms, and jargon crucial for understanding the specified domain.
    *   If an initial list of terms was provided, prioritize defining those and then supplement with other highly relevant terms.

*   **B. Clear & Concise Definitions:**
    *   For each term, provide a clear, concise, and easy-to-understand definition.
    *   Tailor the complexity of the definition to the specified target audience. Avoid overly technical explanations if the audience is non-technical, or provide context accordingly.
    *   If a term has multiple meanings, clarify the relevant meaning for the specified domain.

*   **C. Contextual Examples (Optional but helpful):**
    *   Where appropriate and helpful for clarity, provide a brief example of how the term is used in context within the specified domain.

*   **D. Acronym Expansion:**
    *   For all acronyms, provide the full expanded form alongside the acronym itself.

*   **E. Logical Organization (Optional suggestion):**
    *   Consider organizing the glossary alphabetically or by sub-topic/category if that would enhance usability (the AI can attempt this or you can do it post-generation).

*   **F. (Optional) "See Also" or Related Terms:**
    *   For some terms, it might be useful to suggest related terms or concepts that the reader might also want to understand.

Please ensure the definitions are accurate for the given domain and helpful for the target audience. The primary goal is to create a practical reference that aids comprehension and communication.