+++
# --- Concept Simplification (ELI_X_) Prompt ---
id = "PROMPT-SUM-ConceptSimplification-[YYYYMMDDHHMMSS]" # Placeholder: e.g., PROMPT-SUM-ConceptSimplification-QuantumPhysics-20250528090000
title = "Concept Simplification (Explain Like I'm X) Request"
prompt_type = "summarization_explanation_simplification"
domain = "communication_education_clarification"
version = "1.0"
created_date = "{{YYYYMMDD}}"
last_updated = "{{TIMESTAMP_ISO_Z}}"
authors = ["[Your Name/Mode Slug]"]
tags = ["prompt", "summarization", "eli5", "eli10", "concept_simplification", "explanation", "analogy", "clarification"]
# related_schema_doc = ".roo/commander/docs/prompts/summarization/prompt_SUM_04_concept_simplification_eliX.README.md" # Link to its own README
+++

Subject: **Concept Simplification Request: Explain [Complex Concept/Term] Like I'm [Target Audience Level]**

I require a simplified explanation of the following complex concept or term: **[Complex Concept/Term, e.g., 'Quantum Entanglement', 'Blockchain Technology', 'General Relativity', 'Machine Learning Algorithms', 'The CAP Theorem']**.

**1. Concept & Simplification Context:**
   *   **Complex Concept/Term to be Simplified:** [Clearly state the concept or term.]
   *   **Target Audience Level for Simplification (ELI_X_):** [Specify the desired level of understanding. This is crucial. Examples:
        *   "Explain Like I'm 5 (ELI5)" (Very simple, basic analogy)
        *   "Explain Like I'm 10 (ELI10)" (Simple, relatable examples)
        *   "Explain to a high school student"
        *   "Explain to a non-technical marketing manager"
        *   "Explain to someone with a basic understanding of [related field], but not this specific concept"
        *   "Explain to a new intern in our [technical] department"]
   *   **Key Aspect(s) to Focus On (if any):** [Are there particular parts of the concept that are most important to simplify or that the audience needs to grasp?]
   *   **Purpose of this Simplified Explanation:** [Why is this explanation needed? (e.g., For a presentation to a non-technical audience, to help a new team member understand a core technology, for a blog post aimed at beginners, personal understanding).]
   *   **Desired Length/Format of Explanation:** [e.g., "A short paragraph," "A few bullet points with simple analogies," "About 100-200 words." If flexible, state "Concise and easy to understand."]
   *   **Things to Avoid (if any):** [e.g., "Avoid highly technical jargon from [specific field]," "Don't use mathematical formulas in the explanation."]

**2. Source Material / Existing Explanation (Optional but helpful):**

*   **Link to an Existing Explanation (if you have one that is too complex):**
    [If you have a link to an article, Wikipedia page, or document that explains the concept but is too difficult, provide it here. The AI can use this as source material to simplify.]
    e.g., `https://en.wikipedia.org/wiki/Quantum_entanglement`

*   **(Alternatively) Paste a More Complex Explanation Here:**
    ```text
    // If you have a paragraph or section from a document that explains the concept in a way that is too technical or dense, paste it here.
    // The AI will work to simplify this specific text.

    // Example:
    // "Quantum entanglement is a physical phenomenon that occurs when a pair or group of particles is generated, interacts, or shares spatial proximity 
    // in such a way that the quantum state of each particle of the pair or group cannot be described independently of the state of the others, 
    // including when the particles are separated by a large distance."
    ```

**3. Request for Concept Simplification:**

I need you to operate as an expert educator and communicator, skilled at breaking down complex topics into easily digestible explanations. Based on the provided concept and context:

1.  **Thoroughly understand** the core meaning of the `Complex Concept/Term to be Simplified`, using the provided source material if available, or your general knowledge.
2.  **Craft an explanation** that is specifically tailored to the `Target Audience Level for Simplification (ELI_X_)`.
3.  **Prioritize clarity and simplicity** above exhaustive detail. The goal is understanding of the fundamental idea.
4.  **Use analogies, relatable examples, or metaphors** where appropriate to make the concept more accessible, especially for ELI5/ELI10 or non-technical audiences.
5.  **Avoid jargon** specific to the field unless it's absolutely necessary and can be simply defined within the explanation, or adhere to the `Things to Avoid` list.
6.  Focus on the `Key Aspect(s) to Focus On` if specified.
7.  Adhere to the `Desired Length/Format of Explanation`.
8.  Ensure the explanation is **accurate in its simplified form** and does not misrepresent the core concept.

Please generate the simplified explanation.