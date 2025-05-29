+++
# --- FAQ List Draft Generation Prompt ---
id = "PROMPT-Gen-DraftFAQList-[YYYYMMDDHHMMSS]" # Placeholder: e.g., PROMPT-Gen-DraftFAQList-ProductX-20250528150000
title = "Frequently Asked Questions (FAQ) List Draft Generation Request"
prompt_type = "content_generation"
domain = "content_creation_support_documentation"
version = "1.0"
created_date = "{{YYYYMMDD}}"
last_updated = "{{TIMESTAMP_ISO_Z}}"
authors = ["[Your Name/Mode Slug]"]
tags = ["prompt", "content_generation", "faq", "customer_support", "knowledge_base", "website_content", "drafting"]
# related_schema_doc = ".roo/commander/docs/prompts/content_generation/prompt_CG_10_draft_faq_list.README.md" # Adjust path if structure changes
+++

Subject: **Request for Draft FAQ List: [Product/Service/Topic]**

I require a first draft of a list of Frequently Asked Questions (FAQs) and their corresponding answers related to **[Product/Service/Topic, e.g., 'Our New SaaS Product Alpha', 'The Returns Policy for our E-commerce Store', 'The upcoming Industry Conference X', 'Common issues with Software Y']**.

**1. FAQ Context & Specifications:**

*   **Product/Service/Topic for FAQs:** `[Clearly define what the FAQs should cover.]`
*   **Primary Goal of this FAQ List:** `[e.g., 'Reduce customer support tickets', 'Help users self-serve information', 'Address common pre-purchase questions', 'Clarify complex aspects of [topic]', 'Improve user onboarding'.]`
*   **Target Audience for these FAQs:** `[Describe who will be reading these FAQs: e.g., 'Prospective customers', 'New users', 'Existing customers needing support', 'Event attendees'. Consider their likely level of understanding and common points of confusion.]`
*   **Desired Tone & Style for Answers:** `[e.g., Clear and concise, friendly and helpful, technical and precise (if for a technical audience), reassuring and empathetic.]`
*   **Number of FAQs to Generate (Approximate):** `[e.g., 'Generate 5-7 key FAQs', 'Around 10-15 FAQs covering common areas', 'As many relevant FAQs as possible based on the input'.]`
*   **Source of Potential Questions (if you have ideas):**
    *   `[List any known common questions you already receive from customers/users.]`
    *   `[Mention areas where users often get confused or need clarification.]`
    *   `[Point to existing documentation that might imply common questions.]`
    *   (If you have no specific questions in mind, state: `Generate questions based on the product/service/topic description and common user queries for similar offerings.`)

**2. Key Information about the Product/Service/Topic (for AI to derive questions & answers):**

*   **Brief Description:** `[Provide a concise overview of the product, service, or topic.]`
*   **Key Features/Aspects:**
    *   Feature/Aspect 1: `[e.g., 'User authentication system']`
        *   Detail: `[Brief explanation or key detail about this feature/aspect]`
    *   Feature/Aspect 2: `[e.g., 'Subscription billing process']`
        *   Detail: `[Brief explanation or key detail about this feature/aspect]`
    *   Feature/Aspect 3: `[e.g., 'Integration with third-party tools']`
        *   Detail: `[Brief explanation or key detail about this feature/aspect]`
    *   (Add more as needed)
*   **Common Use Cases or Scenarios:** `[Describe how people typically use or interact with the product/service/topic.]`
*   **Potential Areas of Confusion or Difficulty:** `[What parts might users find tricky or have questions about?]`
*   **Unique Selling Propositions (USPs) or Key Benefits (if relevant to FAQs):** `[What makes it special or valuable?]`
*   **Important Policies or Terms (if relevant to FAQs):** `[e.g., 'Return policy is 30 days', 'Free trial lasts 14 days', 'Event cancellation policy details'.]`

**3. Desired Structure for Each FAQ Entry:**

*   **Question:** `[Clear and phrased as a user would ask it.]`
*   **Answer:** `[Concise, direct, and helpful. Use simple language.]`
*   **(Optional) Links to further information (Conceptual Placeholder):** `[If answers should point to more detailed documentation, the AI can include a placeholder like '[Link to relevant guide/page]'.]`

**4. Additional Instructions (Optional):**

*   **Categorization of FAQs (If desired):** `[e.g., 'Group FAQs by topic: General, Billing, Technical Support', or 'No specific categorization needed for the draft'.]`
*   **Things to Emphasize in Answers:** `[e.g., 'Ease of use', 'Security features', 'Customer support availability'.]`
*   **Things to Avoid in Answers:** `[e.g., 'Overly technical jargon for a general audience', 'Making promises the product can't keep', 'Directly comparing to named competitors in the FAQ answers'.]`
*   **Formatting Preferences (Conceptual for AI):** `[e.g., 'Use bold for questions', 'Keep answers to 2-3 sentences where possible'.]`

Please generate a list of relevant FAQs and their draft answers based on the information provided. Aim for questions that genuinely reflect common user queries and answers that are clear, accurate, and helpful. I understand this will require human review, editing, and verification.