+++
# --- Gentle Reminder Email Draft Prompt ---
id = "PROMPT-Draft-GentleReminderEmail-[YYYYMMDDHHMMSS]" # Placeholder: e.g., PROMPT-Draft-GentleReminderEmail-FeedbackOnDesigns-20250528130000
title = "Gentle Reminder Email Draft"
prompt_type = "drafting_communication"
domain = "client_communication_follow_up"
version = "1.0"
created_date = "{{YYYYMMDD}}"
last_updated = "{{TIMESTAMP_ISO_Z}}"
authors = ["[Your Name/Mode Slug]"]
tags = ["prompt", "drafting", "email_draft", "reminder_email", "follow_up", "client_communication", "accounts_receivable", "project_management"]
# related_schema_doc = ".roo/commander/docs/prompts/communication/prompt_CM_08_gentle_reminder_email.README.md" # Link to its own README
+++

Subject: **Draft Gentle Reminder Email to: [Client Name] Regarding [Pending Item]**

I need a draft for a polite and professional "gentle reminder" email to **[Client Name/Key Client Contact(s)]** regarding **[Specific Pending Item, e.g., 'feedback on the design mockups', 'Invoice #12345', 'outstanding information needed for X task']**.

**1. Reminder Context & Email Objectives:**
   *   **Client Name / Primary Contact(s):** `[e.g., Jane Doe at Innovate Corp]`
   *   **Specific Pending Item:** `[Clearly state what is outstanding. Be precise. e.g., "Feedback on the Homepage Design Mockups V2", "Payment for Invoice #12345", "The list of approved brand assets for the new brochure", "Approval of the SOW for Phase 2"]`
   *   **Original Request Date / Due Date (if applicable):** `[When was this item originally requested or due? e.g., "We sent the mockups for review on YYYY-MM-DD with a requested feedback date of YYYY-MM-DD.", "Invoice #12345 was due on YYYY-MM-DD."]`
   *   **Link to Previous Email/Document (if helpful to reference):** `[If you can easily link to the original request or the item itself, include it.]`
       e.g., `"You can find the mockups here again for your convenience: [Figma_link]"`
       e.g., `"I've re-attached Invoice #12345 to this email."`
   *   **Impact of Delay (Optional, state politely and factually if necessary):** `[If the delay is impacting project timelines or next steps, you can briefly and gently mention it. e.g., "Your timely feedback will help us keep the design phase on schedule.", "Prompt payment is appreciated to ensure uninterrupted service."]`
   *   **Number of Previous Reminders (if any, for tone adjustment):** `[e.g., "This is the first reminder," "This is a second gentle follow-up." This helps the AI adjust the firmness/tone if needed, though the default is "gentle."]`
   *   **Overall Goal of this Email:** [e.g., Obtain the pending item, secure payment, get necessary information to proceed, without damaging the client relationship.]
   *   **Desired Tone:** [e.g., Polite and understanding, helpful and courteous, professional and brief, slightly more direct if it's a later reminder but still respectful.]

**2. Request for Email Draft:**

Please draft a gentle reminder email based on the information above. The email should:
*   Have a clear, polite, and easily identifiable subject line (e.g., "Friendly Reminder: [Pending Item]" or "Following Up: [Pending Item] for [Project Name]").
*   Start with a courteous and understanding opening.
*   Clearly and politely state the specific item that is pending.
*   Reference the original request date or due date if applicable.
*   Make it easy for the client to act (e.g., by re-providing a link or attachment).
*   Optionally, briefly and gently mention the impact of further delay if appropriate.
*   Avoid accusatory or demanding language.
*   Offer assistance if they are facing any issues in providing the item.
*   End with a professional and appreciative closing.

Provide the **Subject Line** and the **Email Body**.