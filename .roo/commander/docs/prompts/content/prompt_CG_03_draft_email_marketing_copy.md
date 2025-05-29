+++
# --- Email Marketing Copy Draft Generation Prompt ---
id = "PROMPT-Gen-DraftEmailCopy-[YYYYMMDDHHMMSS]" # Placeholder: e.g., PROMPT-Gen-DraftEmailCopy-WelcomeSeries-20250528080000
title = "Email Marketing Copy Draft Generation Request"
prompt_type = "content_generation"
domain = "content_creation_email_marketing"
version = "1.0"
created_date = "{{YYYYMMDD}}"
last_updated = "{{TIMESTAMP_ISO_Z}}"
authors = ["[Your Name/Mode Slug]"]
tags = ["prompt", "content_generation", "email_marketing", "email_copywriting", "marketing_automation", "drafting", "email_sequence"]
# related_schema_doc = ".roo/commander/docs/prompts/content_generation/prompt_CG_03_draft_email_marketing_copy.README.md" # Adjust path if structure changes
+++

Subject: **Request for Draft Email Marketing Copy: [Purpose/Name of Email or Sequence]**

I require a first draft of email marketing copy for **[Purpose/Name of Email or Sequence, e.g., 'a 3-part Welcome Email Series', 'a Promotional Email for our New Course', 'a Monthly Newsletter Teaser Email']**. Please generate content based on the following specifications:

**1. Email/Sequence Overview & Specifications:**

*   **Purpose/Name:** `[Clearly define the purpose or name of this email or email sequence.]`
*   **Type:** `[Specify: 'Single Email' or 'Email Sequence'.]`
*   **Number of Emails (if a sequence):** `[e.g., 3, 5. If single, put 1.]`
*   **Primary Goal of this Email/Sequence:** `[What should this email/sequence achieve? e.g., 'Nurture new leads', 'Drive sales for product X', 'Increase webinar registrations', 'Re-engage inactive subscribers', 'Share company news and build loyalty'.]`
*   **Target Audience Segment:** `[Describe the recipients: e.g., 'New subscribers who signed up via website pop-up', 'Existing customers who purchased product Y in the last 6 months', 'Leads who downloaded [specific lead magnet]'. Include their likely interests or pain points.]`
*   **Brand Voice & Tone:** `[e.g., Professional and informative, friendly and conversational, urgent and persuasive, empathetic and supportive, witty and engaging.]`
*   **Key Offer/Message/Value Proposition:** `[What is the core message or offer being communicated in this email/sequence?]`
*   **Main Call to Action (CTA) for the Email/Sequence:** `[What is the ultimate action you want recipients to take? e.g., 'Purchase Product X', 'Register for Webinar', 'Read Blog Post', 'Book a Demo'.]`

**2. Individual Email Details (If a single email, complete only "Email #1". If a sequence, repeat this section for each email):**

---
*   **Email # [1 of X]:**
    *   **Specific Goal of this Email:** `[What is the primary objective for this specific email within the sequence, or for the single email? e.g., 'Welcome and set expectations', 'Introduce problem and hint at solution', 'Highlight benefit A of product X', 'Create urgency for limited-time offer'.]`
    *   **Proposed Subject Line (or ask AI to suggest):** `[Your idea, or 'Suggest subject line']`
    *   **Proposed Preheader Text (Optional, or ask AI to suggest):** `[Your idea, or 'Suggest preheader']`
    *   **Key Talking Points/Content to Cover:**
        *   `[Point 1 for this email]`
        *   `[Point 2 for this email]`
        *   `[Point 3 for this email (add more as needed)]`
    *   **Specific Call to Action (CTA) for this Email (Text & Link Placeholder):** `[e.g., 'Button Text: Learn More -> [link_to_learn_more_page]', 'Link Text: Read the Full Story Here -> [link_to_blog_post]']`
    *   **Desired Length (Conceptual):** `[e.g., Short and punchy (approx. 100-150 words), Medium (approx. 200-300 words), Longer form (if a newsletter style - approx. 400-600 words)]`
    *   **Visual Element Suggestion (Conceptual):** `[e.g., 'Include a hero image of the product', 'A GIF demonstrating the feature', 'No visuals, text-only'.]`
---
*   **Email # [2 of X] (If a sequence):**
    *   **Specific Goal of this Email:** `[e.g., 'Build trust with a testimonial', 'Explain feature B in detail', 'Overcome common objection Y', 'Offer a bonus'.]`
    *   **Proposed Subject Line (or ask AI to suggest):** `[Your idea, or 'Suggest subject line']`
    *   **Proposed Preheader Text (Optional, or ask AI to suggest):** `[Your idea, or 'Suggest preheader']`
    *   **Key Talking Points/Content to Cover:**
        *   `[Point 1 for this email]`
        *   `[Point 2 for this email]`
    *   **Specific Call to Action (CTA) for this Email (Text & Link Placeholder):** `[e.g., 'Button Text: Get Started Now -> [link_to_signup]', 'Link Text: Watch the Demo -> [link_to_video]']`
    *   **Desired Length (Conceptual):** `[e.g., Short, Medium, Long]`
    *   **Visual Element Suggestion (Conceptual):** `[e.g., 'Customer photo with quote', 'Screenshot of the software interface'.]`
---
    *(Copy and complete the "Email # [Number]" block for each email in the sequence)*

**3. Additional Instructions (Optional):**

*   **Things to Emphasize Across the Email(s):** `[Any overarching benefits, pain points to address, or unique selling propositions.]`
*   **Things to Avoid Across the Email(s):** `[Any topics, tones, phrases, or common industry clichés to steer clear of.]`
*   **Personalization Tokens to Include (Conceptual):** `[e.g., '[FirstName]', '[CompanyName]'. The AI should use these placeholders.]`
*   **Structure of Email Body:** `[e.g., 'Start with a compelling hook/question', 'Use short paragraphs and bullet points', 'Ensure a clear P.S. section if desired'.]`

Please generate coherent and engaging draft copy for the specified email(s). While these are drafts, aim for clarity, a strong call to action, and language appropriate for the target audience and brand voice. I understand this will require human editing and refinement.