+++
# --- Post-Meeting Follow-Up / Recap Email Draft Prompt ---
id = "PROMPT-Draft-MeetingRecapEmail-[YYYYMMDDHHMMSS]" # Placeholder: e.g., PROMPT-Draft-MeetingRecapEmail-ClientXKickoffFollowup-20250528080000
title = "Post-Meeting Follow-Up / Recap Email Draft"
prompt_type = "drafting_communication"
domain = "client_communication_meeting_management"
version = "1.0"
created_date = "{{YYYYMMDD}}"
last_updated = "{{TIMESTAMP_ISO_Z}}"
authors = ["[Your Name/Mode Slug]"]
tags = ["prompt", "drafting", "email_draft", "meeting_recap", "follow_up_email", "action_items", "client_communication", "project_management"]
# related_schema_doc = ".roo/commander/docs/prompts/communication/prompt_CM_03_post_meeting_recap_email.README.md" # Link to its own README
+++

Subject: **Draft Post-Meeting Recap Email for: [Meeting Purpose] with [Client Name/Attendees] on [Date]**

I need a draft for a post-meeting follow-up/recap email regarding the meeting about **[Meeting Purpose/Topic, e.g., 'Project Kickoff', 'Design Review Session', 'Quarterly Business Review']** held with **[Client Name and/or Key Client Attendees, e.g., 'Jane Doe from Innovate Corp', 'the Innovate Corp Marketing Team']** on **[Date of Meeting]**.

**1. Meeting Recap Details & Email Objectives:**
   *   **Client Name(s) / Primary Attendee(s) from Client Side:** `[e.g., Jane Doe, John Smith]`
   *   **Client Company:** `[Name of Client's Company]`
   *   **Meeting Purpose/Topic:** `[Original purpose of the meeting]`
   *   **Date of Meeting:** `[YYYY-MM-DD]`
   *   **Key Attendees from Our Agency (who were present):** `[e.g., Your Name (Project Manager), Sarah K. (Lead Designer)]`
   *   **Overall Goal of this Email:** [e.g., Summarize key discussion points, confirm decisions, assign/reiterate action items, maintain momentum, ensure alignment.]
   *   **Desired Tone:** [e.g., Professional and efficient, appreciative and collaborative, action-oriented.]

**2. Key Discussion Points & Decisions Made:**
   [Summarize the main topics discussed and any significant decisions or agreements reached during the meeting. Use bullet points for clarity.]

   ```text
   // Example Key Discussion Points & Decisions:
   // - Confirmed project scope for Phase 1 aligns with SOW.
   // - Decision: Client approved initial design concept 'A' with minor revisions to the color palette.
   // - Discussed timeline for development; client understands the 6-week estimate.
   // - Agreed on bi-weekly progress update meetings.
   ```

**3. Action Items:**
   [List each action item clearly. For each item, specify:
    - The action to be taken.
    - Who is responsible (owner) for the action item (can be someone from your agency or the client's team).
    - The due date for the action item.]

   ```text
   // Example Action Items:
   // - [Our Agency] Alice W. to send revised color palette options by [YYYY-MM-DD].
   // - [Client] Jane Doe to provide consolidated feedback on Concept A by [YYYY-MM-DD].
   // - [Our Agency] John B. to schedule recurring bi-weekly progress meetings. Due: End of this week.
   // - [Client] Mark Lee to provide access to their analytics platform by [YYYY-MM-DD].
   ```

**4. Next Steps (Broader than specific action items, if applicable):**
   [Outline any general next steps or upcoming phases/meetings that were discussed.]
   e.g., `"Our team will now proceed with refining Design Concept A based on your feedback. We anticipate sharing the updated version by [Date]. Our next scheduled check-in is [Date]."`

**5. Attachments (if any):**
   [List any documents that will be attached to the email, e.g., meeting minutes (if separate), presentation slides, revised documents.]
   e.g., `"- Presentation Slides from today's meeting\n- Detailed Meeting Notes (attached separately)"`

**6. Request for Email Draft:**

Please draft a post-meeting follow-up/recap email based on the information above. The email should:
*   Have a clear and informative subject line (e.g., "Recap & Action Items: [Meeting Purpose] - [Date]").
*   Start with a brief thank you for their time and participation.
*   Clearly and concisely summarize the key discussion points and decisions made.
*   List all action items with assigned owners and due dates.
*   Outline any broader next steps.
*   Mention any attachments.
*   Be professional, organized, and action-oriented.
*   End with a positive closing, reinforcing collaboration.

Provide the **Subject Line** and the **Email Body**.

---
**Example of how to fill in the placeholders for the AI:**

*Subject: Draft Post-Meeting Recap Email for: Project Alpha Kickoff with Innovate Corp on 2025-06-10*

*1. Meeting Recap Details & Email Objectives:*
   *   *Client Name(s) / Primary Attendee(s) from Client Side: `Jane Doe, Mark Lee`*
   *   *Client Company: `Innovate Corp`*
   *   *Meeting Purpose/Topic: `Project Alpha - Official Kickoff Meeting`*
   *   *Date of Meeting: `2025-06-10`*
   *   *Key Attendees from Our Agency (who were present): `John B. (Account Manager), Alice W. (Project Lead)`*
   *   *Overall Goal of this Email: "Summarize kickoff discussion, confirm action items, and set the stage for next steps."*
   *   *Desired Tone: "Professional, organized, and collaborative."*

*2. Key Discussion Points & Decisions Made:*
   ```text
   // - Agreement on Project Alpha's primary success metric: 20% increase in user engagement.
   // - Decision: Communication for project updates will primarily be via a shared Slack channel and bi-weekly email summaries.
   // - Confirmed Innovate Corp's internal subject matter expert for content is Sarah Chen.
   ```

*3. Action Items:*
   ```text
   // - [Our Agency] Alice W. to set up the shared Slack channel for Project Alpha by 2025-06-11.
   // - [Client] Jane Doe to introduce Alice W. to Sarah Chen via email by 2025-06-12.
   // - [Our Agency] John B. to send the detailed project timeline document by 2025-06-11.
   ```

*4. Next Steps (Broader than specific action items, if applicable):*
   `"Our team will begin drafting the initial content outlines. We look forward to our first bi-weekly update call on 2025-06-24."`

*5. Attachments (if any):*
   `"- Kickoff Meeting Presentation Slides"`
---