+++
# --- Meeting Minutes Summary & Action Item List Prompt ---
id = "PROMPT-SUM-MeetingMinutes-[YYYYMMDDHHMMSS]" # Placeholder: e.g., PROMPT-SUM-MeetingMinutes-ProjectAlphaWk20-20250528100000
title = "Meeting Minutes Summary & Action Item List Generation Request"
prompt_type = "summarization_extraction_structuring"
domain = "meeting_documentation_task_tracking"
version = "1.0"
created_date = "{{YYYYMMDD}}"
last_updated = "{{TIMESTAMP_ISO_Z}}"
authors = ["[Your Name/Mode Slug]"]
tags = ["prompt", "summarization", "meeting_minutes", "action_items", "decision_log", "meeting_summary", "task_extraction"]
# related_schema_doc = ".roo/commander/docs/prompts/summarization/prompt_SUM_05_meeting_minutes_summary.README.md" # Link to its own README
+++

Subject: **Meeting Summary & Action Item List Request for: [Meeting Name/Date]**

I require a structured summary, including key discussion points, decisions made, and a clear list of action items, from the following meeting notes/transcript: **[Meeting Name/Date, e.g., 'Project Alpha Weekly Sync - 2025-05-28', 'Client X Kickoff Meeting Notes', 'Q3 Planning Session Transcript']**.

**1. Meeting Context for Summary:**
   *   **Meeting Name/Topic:** [Full name or topic of the meeting.]
   *   **Meeting Date:** [Date the meeting was held.]
   *   **Primary Purpose of the Meeting:** [What was the main goal of this meeting? (e.g., To align on project status, make specific decisions, brainstorm solutions, plan next steps).]
   *   **Key Attendees (Optional - if helpful for context or action item assignment if not in notes):** [List main attendees or roles if not clear from the notes.]
   *   **Desired Format for the Output:** [e.g.,
        *   "Section for Key Discussion Points (bulleted), Section for Decisions Made (bulleted), Section for Action Items (table: Action, Owner, Deadline)."
        *   "Brief narrative summary followed by a numbered list of action items."
        *   Default: Key Discussion Points (bullets), Decisions Made (bullets), Action Items (bullets with Owner/Deadline if specified).]
   *   **Specific Information to Prioritize/Extract (if any):** [e.g., "Ensure all deadlines for action items are captured," "Focus particularly on decisions related to budget," "Extract any unresolved questions."]

**2. Meeting Notes/Transcript for Processing:**

*   **Link to Meeting Notes/Transcript Document (if accessible by AI and preferred):**
    [Provide a direct link. Ensure the AI will have access.]
    e.g., `https://ourcompany.sharepoint.com/sites/projectalpha/Minutes_20250528.docx`

*   **(Alternatively, and often necessary for AI) Paste the Full Meeting Notes/Transcript Here:**
    ```text
    // Paste the raw meeting notes or transcript here.
    // Include as much detail as possible, even if it's messy.
    // The AI will parse through it to find the relevant information.

    // Example:
    // Meeting: Project Alpha Weekly Sync
    // Date: 2025-05-28
    // Attendees: Sarah (PM), John (Dev), Lisa (QA), Mark (Client Stakeholder via Zoom)

    // Agenda Item 1: Review last week's action items
    // - John: AI-001 (Integrate API) - Completed.
    // - Lisa: AI-002 (Test new build) - In progress, found 2 new bugs. Will log by EOD.

    // Agenda Item 2: Feature X Development Update (John)
    // John presented current progress. Blocked by dependency on Team B's module.
    // Sarah said she will chase Team B lead (Mike) for an update on their timeline. This needs to be resolved by Friday.
    // Mark asked if this impacts the overall Q3 deadline. Sarah thinks it might if not resolved quickly.
    // Decision: Postpone final decision on Q3 deadline adjustment until Team B's status is clear.

    // Agenda Item 3: QA Update (Lisa)
    // Lisa: As mentioned, 2 new critical bugs found in build 2.3.4. Will be in Jira by EOD.
    // Action: Lisa to log bugs in Jira by EOD today.
    // Action: John to review new bugs first thing tomorrow and estimate fix time.

    // Agenda Item 4: Next Steps
    // Next meeting scheduled for next Wednesday.
    // Mark needs the updated risk assessment from Sarah by Monday.
    // [... more notes ...]
    ```

**3. Request for Summary & Action Item List Generation:**

I need you to operate as an efficient project coordinator or executive assistant skilled at distilling meeting discussions into clear, actionable summaries. Based on the provided meeting notes/transcript and context:

1.  **Thoroughly review** the notes/transcript to understand the flow of discussion, key topics, decisions, and commitments.
2.  **Extract and list the Key Discussion Points**, summarizing the main topics that were covered.
3.  **Clearly identify and list all Decisions Made** during the meeting.
4.  **Compile a comprehensive list of Action Items.** For each action item, identify:
    *   The specific **action** to be taken.
    *   The **owner** or person responsible (if mentioned or clearly implied).
    *   The **deadline** or due date (if mentioned or clearly implied).
5.  **Organize the output** according to the `Desired Format for the Output`, ensuring clarity and readability.
6.  If there was `Specific Information to Prioritize/Extract`, ensure that is reflected in the output.
7.  The summary should be objective and accurately reflect what was discussed and agreed upon.

Please generate the meeting summary, list of decisions, and action item list.