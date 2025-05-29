+++
# --- Meeting Confirmation & Agenda Email Draft Prompt ---
id = "PROMPT-Draft-MeetingConfirmEmail-[YYYYMMDDHHMMSS]" # Placeholder: e.g., PROMPT-Draft-MeetingConfirmEmail-ClientXProjectKickoff-20250528070000
title = "Meeting Confirmation & Agenda Email Draft"
prompt_type = "drafting_communication"
domain = "client_communication_meeting_management"
version = "1.0"
created_date = "{{YYYYMMDD}}"
last_updated = "{{TIMESTAMP_ISO_Z}}"
authors = ["[Your Name/Mode Slug]"]
tags = ["prompt", "drafting", "email_draft", "meeting_confirmation", "meeting_agenda", "client_communication", "professional_communication"]
# related_schema_doc = ".roo/commander/docs/prompts/communication/prompt_CM_02_meeting_confirmation_agenda_email.README.md" # Link to its own README
+++

Subject: **Draft Meeting Confirmation & Agenda Email for: [Meeting Purpose] with [Client Name/Attendees]**

I need a draft for a meeting confirmation and agenda email for an upcoming meeting regarding **[Meeting Purpose/Topic, e.g., 'Project Kickoff', 'Design Review Session', 'Quarterly Business Review']** with **[Client Name and/or Key Client Attendees, e.g., 'Jane Doe from Innovate Corp', 'the Innovate Corp Marketing Team']**.

**1. Meeting Details & Email Objectives:**
   *   **Client Name(s) / Primary Attendee(s) from Client Side:** `[e.g., Jane Doe, John Smith]`
   *   **Client Company:** `[Name of Client's Company]`
   *   **Meeting Purpose/Topic:** `[Clear and concise purpose of the meeting]`
   *   **Date of Meeting:** `[YYYY-MM-DD]`
   *   **Time of Meeting (including timezone):** `[HH:MM AM/PM Timezone, e.g., 02:00 PM EST]`
   *   **Duration of Meeting:** `[e.g., 60 minutes, 1.5 hours]`
   *   **Location/Platform & Link:** `[e.g., "Our Office Boardroom", "Google Meet: [link]", "Zoom: [link] - Passcode: [if any]", "Client's Office at [address]"]`
   *   **Key Attendees from Our Agency:** `[e.g., Your Name (Project Manager), Sarah K. (Lead Designer)]`
   *   **Overall Goal of this Email:** [e.g., Confirm meeting details, set clear expectations with an agenda, ensure client preparedness, reduce no-shows.]

**2. Agenda Items:**
   [List each agenda item clearly. For each item, specify (if applicable):
    - Brief description of the topic.
    - Who is leading or primarily responsible for that item (from your agency or theirs).
    - Estimated time allocation for the item.]

   ```text
   // Example Agenda Items:
   // 1. Introductions & Project Overview (Led by: [Your Name]) - 10 minutes
   // 2. Review of Client's Key Objectives for this Project (Led by: [Client Contact]) - 15 minutes
   // 3. Presentation of Initial Design Concepts (Led by: [Designer's Name]) - 20 minutes
   // 4. Q&A and Feedback on Concepts - 10 minutes
   // 5. Next Steps & Timeline Confirmation (Led by: [Your Name]) - 5 minutes
   ```

**3. Pre-Reading or Preparation (Optional):**
   *   **Materials to Review Beforehand (if any):** [List any documents, links, or materials attendees should review before the meeting. Provide links if possible.]
       e.g., `"- Project Brief: [link]\n- Competitor Analysis Summary: [link]"`
   *   **Specific Questions for Client to Consider Beforehand (if any):** [Any questions you'd like them to think about to make the meeting more productive.]
       e.g., `"- Please come prepared to discuss your top 3 priorities for the new website design."`

**4. Request for Email Draft:**

Please draft a meeting confirmation and agenda email based on the information above. The email should:
*   Have a clear and informative subject line.
*   Politely confirm the meeting details (purpose, date, time, location/link).
*   Clearly present the agenda with topics, leads (if applicable), and time allocations.
*   Mention any pre-reading or preparation required.
*   Offer an opportunity for the client to suggest additions or changes to the agenda if appropriate.
*   Be professional, courteous, and organized.
*   End with a positive closing, looking forward to the meeting.

Provide the **Subject Line** and the **Email Body**.

---
**Example of how to fill in the placeholders for the AI:**

*Subject: Draft Meeting Confirmation & Agenda Email for: Project Kickoff with Innovate Corp*

*1. Meeting Details & Email Objectives:*
   *   *Client Name(s) / Primary Attendee(s) from Client Side: `Jane Doe, Mark Lee`*
   *   *Client Company: `Innovate Corp`*
   *   *Meeting Purpose/Topic: `Project Alpha - Official Kickoff Meeting`*
   *   *Date of Meeting: `2025-06-10`*
   *   *Time of Meeting (including timezone): `10:00 AM PST`*
   *   *Duration of Meeting: `60 minutes`*
   *   *Location/Platform & Link: `Google Meet: https://meet.google.com/xyz-abc-pqr`*
   *   *Key Attendees from Our Agency: `John B. (Account Manager), Alice W. (Project Lead)`*
   *   *Overall Goal of this Email: "Confirm details, share agenda, and ensure everyone is aligned for a productive kickoff."*

*2. Agenda Items:*
   ```text
   // 1. Welcome & Team Introductions (All) - 10 minutes
   // 2. Recap of Project Goals & Scope (Led by: Alice W.) - 15 minutes
   // 3. Innovate Corp's Success Metrics for Project Alpha (Led by: Jane Doe) - 15 minutes
   // 4. Communication Plan & Next Steps (Led by: Alice W.) - 15 minutes
   // 5. Q&A - 5 minutes
   ```

*3. Pre-Reading or Preparation (Optional):*
   *   *Materials to Review Beforehand (if any): `"- Signed Statement of Work: [link_to_SOW.pdf]\n- Project Timeline Overview: [link_to_timeline.pdf]"`*
---