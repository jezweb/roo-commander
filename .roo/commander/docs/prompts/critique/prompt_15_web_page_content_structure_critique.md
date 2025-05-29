+++
# --- Web Page Content & Structure Critique Prompt ---
id = "PROMPT-Critique-WebPageContent-[YYYYMMDDHHMMSS]" # Placeholder: e.g., PROMPT-Critique-WebPageContent-Homepage-20250527110000
title = "Web Page Content & Structure Effectiveness Critique & Enhancement Request"
prompt_type = "critique_and_improvement"
domain = "web_content_information_architecture"
version = "1.0"
created_date = "{{YYYYMMDD}}"
last_updated = "{{TIMESTAMP_ISO_Z}}"
authors = ["[Your Name/Mode Slug]"]
tags = ["prompt", "critique", "web_page_content", "website_structure", "information_architecture", "ux_writing", "seo"]
# related_schema_doc = ".roo/commander/docs/prompts/critique/prompt_15_web_page_content_structure_critique.README.md" # Link to its own README
+++

Subject: **Critical Review & Enhancement Request for Web Page: [Name/Purpose of Web Page]**

I require your advanced critical analysis of the content and structure for the web page: **[Name/Purpose of Web Page, e.g., 'Homepage', 'Services Page', 'About Us Page', 'Product Landing Page for Product X']**.

**1. Web Page Overview & Context:**
   *   **Web Page Title/URL (or proposed):** [Exact title or URL of the web page, or its proposed title/location.]
   *   **Primary Goal(s) of this Web Page:** [What is this specific page intended to achieve? (e.g., Introduce the company, detail services, convert visitors to leads, facilitate a purchase, provide support information).]
   *   **Target Audience for this Page:** [Describe the intended visitors. What are their needs, goals, pain points, and prior knowledge when they land on this page?]
   *   **Key Message(s) this Page Should Convey:** [What are the most important takeaways for a visitor?]
   *   **Desired User Action(s) on this Page:** [What specific action(s) do you want users to take on this page? (e.g., Click a CTA button, fill a form, navigate to another page, understand a key concept).]
   *   **Relationship to Overall Website Structure:** [How does this page fit into the broader website? Is it a top-level page, a sub-page, a landing page from an ad campaign?]
   *   **Primary Target Keyword(s) for this Page (if SEO is a focus):** [List the main keyword(s) this page is trying to rank for.]

**2. The Web Page Content & Structure for Review:**

*   **Link to the Live Web Page or Staging/Preview Link:**
    [Provide a direct link to the web page. Ensure the AI will have access.]
    e.g., `https://www.example.com/services`

*   **(Alternatively, or for new/draft content) Paste the Page Content and Describe its Structure:**
    [If the page isn't live, or to focus on planned content, paste the text content and describe the intended layout/structure. Indicate headings (H1, H2, etc.), key sections, calls to action, and placement of important elements like forms or images.]

    ```html
    <!-- 
    If possible, include proposed HTML structure or at least indicate headings (H1, H2, H3), 
    key sections, CTAs, forms, image placements, etc.
    Also include:
    Proposed Meta Title: [Your proposed meta title for this page]
    Proposed Meta Description: [Your proposed meta description for this page]
    -->

    <!-- Proposed Meta Title: [Page Title | Brand Name] -->
    <!-- Proposed Meta Description: [Compelling description of the page content, including keywords.] -->

    <header>
      <!-- Navigation elements -->
    </header>

    <main>
      <section class="hero">
        <h1>[Main Page Heading (H1) - Clear and Keyword Rich]</h1>
        <p>[Introductory paragraph or value proposition.]</p>
        <button class="cta-primary">[Primary Call to Action Button Text]</button>
      </section>

      <section class="features-overview">
        <h2>[Section Heading (H2) - e.g., Our Services, Key Features]</h2>
        <div class="feature-item">
          <h3>[Feature 1 Name (H3)]</h3>
          <p>[Description of feature 1.]</p>
        </div>
        <div class="feature-item">
          <h3>[Feature 2 Name (H3)]</h3>
          <p>[Description of feature 2.]</p>
        </div>
        <!-- ... more items ... -->
      </section>

      <section class="social-proof">
        <h2>[Section Heading (H2) - e.g., What Our Clients Say]</h2>
        <!-- Testimonials or logos -->
      </section>

      <section class="final-cta">
        <h2>[Section Heading (H2) - e.g., Ready to Get Started?]</h2>
        <p>[Reinforce value and next steps.]</p>
        <button class="cta-secondary">[Secondary Call to Action Button Text]</button>
      </section>
    </main>

    <footer>
      <!-- Footer links, copyright -->
    </footer>
    ```

**3. Request for Critical Analysis & Improvement Suggestions:**

I need you to operate as an expert web content strategist, an information architect, a UX writer, and an on-page SEO specialist. Assume the current web page content and structure may have weaknesses in clarity, user flow, persuasiveness, information hierarchy, or search engine optimization. My goal is to refine this page to be highly effective in engaging users, achieving its goals, and performing well in search.

Please rigorously analyze the provided web page information and provide detailed feedback on:

*   **A. Clarity of Purpose & Value Proposition:**
    *   Is the page's purpose immediately clear to a first-time visitor from the target audience?
    *   Does the "above the fold" content (what's visible without scrolling) effectively communicate the core value proposition?
    *   Are the key messages easily identifiable and understandable?

*   **B. Information Architecture & Content Hierarchy:**
    *   Is the content organized logically and intuitively? Is information easy to find?
    *   Is there a clear visual and textual hierarchy (e.g., effective use of headings H1-H6, font sizes, white space)?
    *   Does the structure guide the user towards the desired actions or key information?

*   **C. Content Quality & Readability (UX Writing):**
    *   Is the language clear, concise, engaging, and appropriate for the target audience?
    *   Is the content scannable (e.g., short paragraphs, bullet points, bold text for emphasis)?
    *   Does the copy effectively address user needs, answer potential questions, and overcome objections?
    *   Is the tone consistent with the brand voice?

*   **D. Persuasiveness & Conversion Effectiveness (if applicable):**
    *   If the page aims to convert (e.g., lead gen, sales), how persuasive is the content?
    *   Are benefits highlighted effectively over just features?
    *   Is there sufficient social proof (testimonials, case studies, logos) if appropriate?
    *   Are calls to action (CTAs) clear, compelling, and strategically placed? Are there enough/too many?

*   **E. On-Page SEO Elements (if SEO is a focus):**
    *   **Meta Title & Description:** Are they optimized for the target keyword(s), compelling for clicks, and within length limits?
    *   **Headings (H1-H6):** Is there a single H1? Do headings use keywords naturally and create a logical outline?
    *   **Body Content:** Are target keywords and related terms used naturally within the copy? Is the content substantial and valuable for the targeted keywords?
    *   **Image Alt Text:** (If images are described/visible) Is alt text descriptive and does it use keywords where appropriate?
    *   **Internal Linking:** Are there relevant internal links to and from this page?
    *   **User Experience Signals:** Does the page structure and content likely contribute to good UX signals (e.g., low bounce rate, high time on page – by being engaging and easy to navigate)?

*   **F. User Flow & Navigation (within the page):**
    *   Does the page guide the user smoothly towards the primary goal(s)?
    *   Are interactive elements (links, buttons) clear and do they behave as expected?

*   **G. Mobile Responsiveness & Readability (Conceptual):**
    *   Based on the content and structure described, are there any potential issues with how this might translate to mobile devices (e.g., very long blocks of text, overly complex structures)?

*   **H. Overall Effectiveness & User Experience:**
    *   How well does this page likely achieve its stated goals for the target audience?
    *   What are the page's strongest elements and its most significant weaknesses?

*   **I. Specific Recommendations for Improvement:**
    *   Provide concrete suggestions for rewriting copy, restructuring content sections, improving headings, or optimizing CTAs.
    *   Suggest specific on-page SEO improvements.
    *   What are the top 3-5 actionable recommendations you would make to significantly improve this web page's effectiveness?

I am looking for a **transformative critique** that provides practical, actionable insights to make this web page significantly more effective. Please be direct, thorough, and provide justifications for your recommendations.