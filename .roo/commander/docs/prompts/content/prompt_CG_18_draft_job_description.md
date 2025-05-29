+++
# --- Job Description Draft Generation Prompt ---
id = "PROMPT-Gen-DraftJobDescription-[YYYYMMDDHHMMSS]" # Placeholder: e.g., PROMPT-Gen-DraftJobDescription-MarketingManager-20250528230000
title = "Job Description Draft Generation Request"
prompt_type = "content_generation"
domain = "hr_recruitment_job_postings"
version = "1.0"
created_date = "{{YYYYMMDD}}"
last_updated = "{{TIMESTAMP_ISO_Z}}"
authors = ["[Your Name/Mode Slug]"]
tags = ["prompt", "content_generation", "job_description", "recruitment", "hr_documents", "job_posting", "drafting"]
# related_schema_doc = ".roo/commander/docs/prompts/content_generation/prompt_CG_18_draft_job_description.README.md" # Adjust path if structure changes
+++

Subject: **Request for Draft Job Description: [Job Title]**

I require a first draft of a job description for the role of **[Job Title, e.g., 'Senior Marketing Manager', 'Full-Stack Software Engineer', 'Customer Support Specialist', 'Graphic Designer']**. Please generate content based on the following specifications.

**1. Job Role Overview & Specifications:**

*   **Job Title:** `[Exact Job Title]`
*   **Department/Team:** `[e.g., Marketing, Engineering, Customer Success, Creative Services]`
*   **Reporting To (Title of Manager):** `[e.g., Director of Marketing, Lead Engineer, Head of Support]`
*   **Location (if specific, or state if remote/hybrid):** `[e.g., San Francisco, CA; Remote (US-based); Hybrid (Office/Remote)]`
*   **Employment Type (Optional):** `[e.g., Full-time, Part-time, Contract]`
*   **Primary Goal/Purpose of this Role:** `[In 1-2 sentences, what is the main objective or contribution of this position to the company? e.g., 'To lead our content marketing strategy and drive organic growth', 'To develop and maintain scalable web applications', 'To provide exceptional support and ensure customer satisfaction'.]`
*   **Ideal Candidate Profile (Briefly):** `[Describe the type of person who would thrive in this role: e.g., 'A creative and data-driven marketer', 'A collaborative problem-solver passionate about clean code', 'An empathetic communicator dedicated to helping others'.]`

**2. Key Responsibilities & Duties:**

*   `[Ask the AI to generate a list of 5-10 key responsibilities based on the Job Title and Department. Alternatively, provide your own list of core responsibilities for the AI to refine or expand upon.]`
*   **Example of user input if providing responsibilities:**
    *   Responsibility 1: `Develop and execute content marketing strategies.`
    *   Responsibility 2: `Manage a team of content creators.`
    *   Responsibility 3: `Analyze content performance and optimize for SEO.`
    *   Responsibility 4: `Collaborate with sales and product teams.`
    *   Responsibility 5: `Stay updated on industry trends.`

**3. Required Skills & Qualifications:**

*   **Education/Certifications (if specific):** `[e.g., 'Bachelor's degree in Marketing or related field', 'Relevant certifications like PMP or Google Ads Certified'. State if "equivalent experience" is acceptable.]`
*   **Years of Experience (Range):** `[e.g., '3-5 years of experience in [field]', '7+ years in a senior leadership role'.]`
*   **Technical Skills (Hard Skills):**
    *   `[Ask AI to list 3-5 essential technical skills based on Job Title/Department. Or, provide your own list.]`
    *   Example: `['SEO/SEM tools (Ahrefs, Moz)', 'Content Management Systems (WordPress)', 'Marketing Automation (HubSpot)']`
*   **Soft Skills/Interpersonal Abilities:**
    *   `[Ask AI to list 3-5 key soft skills. Or, provide your own list.]`
    *   Example: `['Excellent written and verbal communication', 'Strong analytical and problem-solving skills', 'Team leadership and collaboration']`
*   **"Nice-to-Haves" (Optional Qualifications):** `[Any skills or experiences that are beneficial but not strictly required.]`

**4. Company Culture & Values (to be woven in or included as a section):**

*   `[Provide 2-4 bullet points or a short paragraph describing the company culture, work environment, and core values. This helps attract candidates who are a good fit.]`
*   Example: `Our culture is collaborative, innovative, and customer-focused. We value continuous learning and empower our employees to take initiative.`

**5. Benefits & Perks (Optional - AI can include a generic placeholder or you can list key ones):**

*   `[e.g., 'Competitive salary and performance bonuses', 'Comprehensive health, dental, and vision insurance', 'Generous PTO and flexible work arrangements', 'Professional development opportunities', '401(k) matching'. Or, 'Include a placeholder for standard benefits section'.]`

**6. Call to Action & Application Instructions:**

*   `[e.g., 'To apply, please submit your resume and a cover letter detailing your relevant experience to [email address or link to application portal].', 'Interested candidates are encouraged to apply via our careers page: [URL]'.]`
*   **Equal Opportunity Employer Statement (Standard - AI can include a generic version):** `[e.g., '[Company Name] is an equal opportunity employer...']`

**7. Additional Instructions (Optional):**

*   **Desired Tone & Style for the Job Description:** `[e.g., Professional and formal, engaging and enthusiastic, direct and concise, inclusive and welcoming.]`
*   **Things to Emphasize:** `[Any specific aspects of the role, company, or opportunity to highlight.]`
*   **Things to Avoid:** `[e.g., 'Internal jargon candidates won't understand', 'Unrealistic expectations', 'Discriminatory language'.]`

Please generate a comprehensive and engaging first draft of this job description, organized into standard sections (e.g., Role Overview, Responsibilities, Qualifications, About Us, How to Apply). Aim for clarity, an appealing tone for ideal candidates, and inclusion of all necessary information. I understand this will require human review and refinement.