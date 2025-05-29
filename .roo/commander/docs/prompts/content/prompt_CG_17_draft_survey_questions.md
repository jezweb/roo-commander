+++
# --- Survey/Questionnaire Draft Questions Generation Prompt ---
id = "PROMPT-Gen-DraftSurveyQuestions-[YYYYMMDDHHMMSS]" # Placeholder: e.g., PROMPT-Gen-DraftSurveyQuestions-CustSat-20250528220000
title = "Survey/Questionnaire Draft Questions Generation Request"
prompt_type = "content_generation"
domain = "research_surveys_questionnaire_design"
version = "1.0"
created_date = "{{YYYYMMDD}}"
last_updated = "{{TIMESTAMP_ISO_Z}}"
authors = ["[Your Name/Mode Slug]"]
tags = ["prompt", "content_generation", "survey_questions", "questionnaire_design", "market_research", "customer_feedback", "employee_feedback", "drafting"]
# related_schema_doc = ".roo/commander/docs/prompts/content_generation/prompt_CG_17_draft_survey_questions.README.md" # Adjust path if structure changes
+++

Subject: **Request for Draft Survey/Questionnaire Questions: [Purpose of Survey]**

I require a first draft of questions for a survey/questionnaire designed to **[Purpose of Survey, e.g., 'measure customer satisfaction with Product X', 'gather market research on interest in Service Y', 'collect employee feedback on company culture', 'assess training program effectiveness']**.

**1. Survey/Questionnaire Overview & Specifications:**

*   **Survey Title/Topic:** `[Clearly define the core subject matter of the survey.]`
*   **Primary Goal(s) of this Survey:** `[What specific information do you need to gather? What decisions will this data inform? e.g., 'Identify key drivers of customer satisfaction/dissatisfaction', 'Understand demand for a new service feature', 'Pinpoint areas for cultural improvement', 'Measure knowledge gain from training'.]`
*   **Target Respondents:** `[Describe who will be taking this survey: e.g., 'Customers who purchased Product X in the last 3 months', 'Potential users in the [demographic/industry]', 'All current employees', 'Participants of the recent [Training Program Name]'.]`
*   **Anonymity/Confidentiality:** `[Will responses be anonymous, confidential, or attributed? This can influence question wording and honesty of responses.]`
*   **Desired Tone & Style of Questions:** `[e.g., Neutral and objective, friendly and conversational, direct and formal. Language should be appropriate for respondents.]`
*   **Approximate Number of Questions Desired:** `[e.g., '5-7 key questions', '10-15 questions covering various aspects', 'A comprehensive set of 20-25 questions'. Consider respondent fatigue.]`
*   **Key Areas/Themes of Inquiry (Main sections for the survey):**
    *   Theme 1: `[e.g., 'Overall Satisfaction', 'Product Features', 'Customer Support Experience', 'Ease of Use']`
    *   Theme 2: `[e.g., 'Interest in New Features', 'Pricing Perception', 'Competitor Awareness']`
    *   Theme 3: `[e.g., 'Communication', 'Work-Life Balance', 'Career Development Opportunities']`
    *   (Add more themes as needed)

**2. Question Types & Content Guidance (AI to suggest specific questions within these guidelines):**

*   **For each Theme/Area of Inquiry listed above, specify (or ask AI to propose) types of questions:**
    *   **Theme 1: [Repeat Theme Name]**
        *   Desired Question Types (Conceptual - AI will draft text): `[e.g., '1-2 Likert scale questions (e.g., Strongly Disagree to Strongly Agree, or 1-5 scale for satisfaction)', '1 open-ended question for qualitative feedback', 'A multiple-choice question with predefined options'.]`
        *   Specific aspects to probe within this theme: `[e.g., For 'Product Features', ask about 'reliability', 'user-friendliness', 'value for money of specific features'.]`
    *   **Theme 2: [Repeat Theme Name]**
        *   Desired Question Types: `[As above]`
        *   Specific aspects to probe: `[As above]`
    *   (Repeat for each theme)

*   **Demographic/Firmographic Questions (Optional, place at end usually):**
    *   `[If needed, specify what demographic data is required, e.g., 'Role/Job Title', 'Department', 'Years of Experience', 'Company Size'. Ensure these are justified by the survey goals and handled appropriately regarding anonymity/confidentiality.]`
    *   (Ask AI to phrase these sensitively and provide "Prefer not to say" options where appropriate.)

*   **Introductory Text (Brief - AI to draft):**
    *   `[AI to draft a short introduction explaining the survey's purpose, estimated completion time, and a statement on anonymity/confidentiality.]`
*   **Concluding Text / Thank You (Brief - AI to draft):**
    *   `[AI to draft a short thank you message and any information about next steps, if applicable.]`

**3. Additional Instructions (Optional):**

*   **Things to Emphasize in Question Phrasing:** `[e.g., 'Focus on actionable insights', 'Ensure questions are not leading', 'Use simple and clear language'.]`
*   **Things to Avoid in Questions:** `[e.g., 'Double-barreled questions (asking two things in one)', 'Jargon respondents won't understand', 'Questions that are too personal or invasive for the context'.]`
*   **Logical Flow/Ordering of Themes/Questions (Conceptual):** `[e.g., 'Start with general questions, then move to specifics', 'Group similar topics together'. AI should attempt a logical flow.]`

Please generate a draft list of survey questions, organized by the specified themes, and including appropriate question types as guided. Also, draft brief introductory and concluding text. Aim for questions that are clear, unbiased, and effective in gathering the required information. I understand this will require human review, refinement, and testing before deployment.