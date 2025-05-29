+++
# --- Infographic Content & Structure Draft Generation Prompt ---
id = "PROMPT-Gen-DraftInfographicContent-[YYYYMMDDHHMMSS]" # Placeholder: e.g., PROMPT-Gen-DraftInfographicContent-MarketTrends-20250528180000
title = "Infographic Content & Structure Draft Generation Request"
prompt_type = "content_generation"
domain = "content_creation_infographics_data_visualization"
version = "1.0"
created_date = "{{YYYYMMDD}}"
last_updated = "{{TIMESTAMP_ISO_Z}}"
authors = ["[Your Name/Mode Slug]"]
tags = ["prompt", "content_generation", "infographic_content", "data_visualization", "visual_content", "content_outline", "drafting"]
# related_schema_doc = ".roo/commander/docs/prompts/content_generation/prompt_CG_13_draft_infographic_content.README.md" # Adjust path if structure changes
+++

Subject: **Request for Draft Infographic Content & Structure: [Infographic Topic/Title]**

I require a first draft of the textual content, key data points, section headings, and logical flow for an infographic on the topic of **[Infographic Topic/Title, e.g., 'The Benefits of Remote Work', 'Key Statistics for the SaaS Industry in 2025', 'A Visual Guide to Our Onboarding Process']**. The AI should focus on providing the content; a human designer will create the actual visuals.

**1. Infographic Overview & Specifications:**

*   **Infographic Topic/Title:** `[Clearly define the core subject matter of the infographic.]`
*   **Primary Goal of this Infographic:** `[What should this infographic achieve? e.g., 'Educate the audience on [complex topic] in an easily digestible format', 'Present key data and trends compellingly', 'Summarize the benefits of [product/service]', 'Drive traffic to a related blog post/landing page'.]`
*   **Target Audience:** `[Describe the intended viewers: e.g., 'Busy executives needing quick insights', 'Potential customers unfamiliar with our process', 'Social media users interested in [topic]', 'Students learning about [subject]'.]`
*   **Key Message/Story:** `[What is the single most important narrative or takeaway you want the infographic to convey? Is there a story arc (e.g., problem -> solution -> benefit)?]`
*   **Desired Tone & Style (for the text):** `[e.g., Informative and authoritative, engaging and slightly playful, professional and data-centric, inspiring and aspirational.]`
*   **Brand Voice Elements (if specific):** `[Any particular brand voice characteristics to incorporate in the text.]`
*   **Call to Action (CTA) (Usually at the bottom):**
    *   CTA Text: `[e.g., 'Learn More at [YourWebsite.com]', 'Download the Full Report', 'Share this Infographic!', 'Contact Us for a Demo'.]`
    *   (Optional) QR Code Mention: `[If a QR code might be used, mention its conceptual destination, e.g., 'QR code to our resources page'.]`

**2. Content & Data Points for the Infographic:**

*   **Main Headline for the Infographic:** `[Suggest a compelling headline, or ask the AI to propose one based on the topic and key message.]`
*   **Introductory Snippet/Hook (Short, 1-2 sentences):** `[Text to grab attention and introduce the topic.]`
*   **Key Data Points / Statistics / Facts to Include (Provide as many as possible, or ask AI to suggest types of data relevant to the topic):**
    *   Data Point 1: `[e.g., '75% of employees report higher productivity when working remotely. (Source: XYZ Study, 2024)']` (AI should use placeholders if exact data/source isn't provided by user but is requested)
    *   Data Point 2: `[e.g., 'The global SaaS market is projected to reach $XXX billion by 2026.']`
    *   Data Point 3: `[e.g., 'Our process reduces onboarding time by an average of 2 weeks.']`
    *   (Add more data points, or specify: `Suggest 5-7 key data points relevant to [topic] that would be impactful in an infographic.`)
*   **Key Concepts or Steps to Explain (if not purely data-driven):**
    *   Concept/Step 1: `[e.g., 'Understanding the Core Problem']`
        *   Brief explanation/supporting text: `[1-2 sentences]`
    *   Concept/Step 2: `[e.g., 'Implementing Solution X']`
        *   Brief explanation/supporting text: `[1-2 sentences]`
    *   (Add more as needed)

**3. Desired Infographic Structure & Sections (AI to propose or flesh out):**

*   `[Ask the AI to propose a logical flow and structure for the infographic, breaking it down into 3-6 main sections. For each section, the AI should suggest a concise heading and indicate which data points or concepts from Section 2 would fit best. The AI should also draft brief explanatory text for each section if needed.]`
*   **Example of user input if providing section themes:**
    *   `Section 1 Theme: The Current State of [Topic]`
    *   `Section 2 Theme: Surprising Statistics About [Topic]`
    *   `Section 3 Theme: How [Our Solution/Approach] Addresses This`
    *   `Section 4 Theme: The Benefits/Impact`
    *   `Section 5 Theme: What You Can Do Next / CTA`

*   **Conceptual Visual Ideas for Sections (Optional - for AI to consider when drafting text):**
    *   `[For each section, you can suggest a type of visual a designer might use, e.g., 'Section 1: Use a large, bold statistic', 'Section 2: Iconography to represent different points', 'Section 3: A simple flow chart'. The AI will focus on the text that complements these ideas.]`

**4. Additional Instructions (Optional):**

*   **Things to Emphasize:** `[Any specific data, benefits, or messages to make particularly prominent.]`
*   **Things to Avoid:** `[e.g., 'Too much text in any single section', 'Complex charts that can't be simplified conceptually for text', 'Making it look like a boring report'.]`
*   **Source Citations (Conceptual):** `[If sources for data need to be included, indicate how they should be referenced conceptually, e.g., 'Small print at the bottom of each relevant section', 'A general sources list at the end'.]`

Please generate a structured draft of the content for this infographic, including a main headline, introductory snippet, distinct sections with headings, key data points/text for each section, and a call to action. Focus on clear, concise, and impactful language suitable for a visual medium. I understand a human designer will be responsible for the visual creation.