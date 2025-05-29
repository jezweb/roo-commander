+++
# --- Project Status Update Email Draft Prompt ---
id = "PROMPT-Draft-ProjectStatusEmail-[YYYYMMDDHHMMSS]" # Placeholder: e.g., PROMPT-Draft-ProjectStatusEmail-AlphaPhase2Wk4-20250528090000
title = "Project Status Update Email Draft"
prompt_type = "drafting_communication"
domain = "client_communication_project_management"
version = "1.0"
created_date = "{{YYYYMMDD}}"
last_updated = "{{TIMESTAMP_ISO_Z}}"
authors = ["[Your Name/Mode Slug]"]
tags = ["prompt", "drafting", "email_draft", "project_status_update", "client_reporting", "project_management", "client_communication"]
# related_schema_doc = ".roo/commander/docs/prompts/communication/prompt_CM_04_project_status_update_email.README.md" # Link to its own README
+++

Subject: **Draft Project Status Update Email for: [Project Name] - Period Ending [Date]**

I need a draft for a project status update email for **[Project Name]** to be sent to **[Client Name/Key Client Contact(s)]**, covering the period ending **[Date, e.g., 'Friday, May 30th, 2025', 'Week of May 26th']**.

**1. Project & Reporting Context:**
   *   **Project Name:** `[Full Name of the Project]`
   *   **Client Name / Primary Contact(s):** `[e.g., Jane Doe at Innovate Corp, The Innovate Corp Steering Committee]`
   *   **Reporting Period:** `[e.g., Week ending YYYY-MM-DD, Month of X, Sprint Y]`
   *   **Overall Project Health/Status (Optional - e.g., Green, Yellow, Red):** `[If you use a traffic light system, indicate current status and briefly why.]`
   *   **Key Objectives for this Reporting Period (What was planned):** [Briefly list what the team aimed to accomplish during this period.]
   *   **Overall Goal of this Email:** [e.g., Keep client informed of progress, highlight achievements, proactively communicate challenges, manage expectations, request necessary client input.]
   *   **Desired Tone:** [e.g., Professional and informative, concise and action-oriented, transparent and proactive.]

**2. Status Update Details:**

*   **Key Accomplishments / Progress Made This Period:**
    [List 3-5 key achievements or significant progress points from this reporting period. Be specific and outcome-focused where possible.]
    ```text
    // Example Accomplishments:
    // - Completed development of the user authentication module.
    // - Finalized UI designs for the dashboard and settings pages (awaiting final client approval).
    // - Conducted successful integration testing between API v1 and the frontend.
    // - Onboarded two new developers to the project team.
    ```

*   **Activities Planned for Next Period:**
    [List 3-5 key activities or goals planned for the next reporting period.]
    ```text
    // Example Planned Activities:
    // - Begin development of the reporting module.
    // - Incorporate client feedback into UI designs and submit for final sign-off.
    // - Prepare for and conduct User Acceptance Testing (UAT) for the authentication module.
    // - Draft initial technical documentation for APIs.
    ```

*   **Challenges, Roadblocks, or Risks (if any):**
    [Transparently list any current or anticipated challenges, roadblocks, or risks. For each, briefly state the potential impact and any mitigation steps being taken or proposed.]
    ```text
    // Example Challenges:
    // - **Challenge:** Delay in receiving client feedback on initial wireframes (Impact: Potentially shifts design finalization by 2 days). **Mitigation:** Followed up with client today; scheduled a brief call for tomorrow to discuss.
    // - **Risk:** Key team member (John S.) has planned leave next week (Impact: May slightly slow progress on reporting module). **Mitigation:** Knowledge transfer in progress; Alice B. will cover critical tasks.
    // - **Roadblock:** Awaiting API credentials from third-party vendor X (Impact: Blocks integration testing for feature Y). **Mitigation:** Escalated with vendor; exploring temporary mock service.
    ```

*   **Budget/Timeline Status (Optional - if part of regular updates):**
    [Provide a brief update on budget and timeline if this is standard for your reports.]
    e.g., `"Project is currently on track with the original timeline. Budget utilization is at 45%, as expected for this phase."`
    e.g., `"We are currently forecasting a 3-day delay on Milestone 2 due to [reason], but aim to recover this in the next phase. No budget impact at this time."`

*   **Action Items / Information Needed from Client (if any):**
    [Clearly list anything you need from the client, including deadlines if applicable.]
    ```text
    // Example Client Action Items:
    // - Please provide feedback on the dashboard UI designs by EOD [YYYY-MM-DD].
    // - Confirm availability for UAT participation during the week of [YYYY-MM-DD].
    // - Provide API credentials for third-party vendor X as soon as possible.
    ```

**3. Request for Email Draft:**

Please draft a project status update email based on the information above. The email should:
*   Have a clear and standardized subject line (e.g., "Project Status Update: [Project Name] - Week Ending [Date]").
*   Start with a brief, positive opening.
*   Clearly present accomplishments, planned activities, and any challenges/risks.
*   If applicable, include budget/timeline status and any items needed from the client.
*   Be well-organized, easy to scan (use bullet points), and professional.
*   Maintain a proactive and transparent tone.
*   End with an offer to discuss further if needed.

Provide the **Subject Line** and the **Email Body**.