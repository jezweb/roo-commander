# User Guide: Managing Your Work Sessions with Roo Commander V8

Roo Commander V8 uses a **Session Management** system to help you organize your work, keep track of activities, and preserve context across different interactions. Each significant piece of work or focused effort should ideally occur within a dedicated session.

This guide explains how to use `@roo-commander` to perform common session management tasks.

## Understanding Sessions

A **Session** in Roo Commander V8 is essentially a container for a specific goal or project phase. When a session is active:

*   A dedicated directory is created (e.g., `.roo/commander/sessions/SESSION-[YourGoal]-[Timestamp]/`).
*   A `session_log.md` file within this directory records key events, decisions, and delegations.
*   An `artifacts/` subdirectory stores all notes, design documents, and other files generated during that session.

This ensures all relevant information is grouped together and easily traceable.

---

## 1. Starting a New Standalone Session

You might want to start a new session without immediately diving into a predefined workflow (like Data Product Design). This is useful for general discussions, planning, or tasks that don't fit a larger managed process.

1.  **Invoke Roo Commander:**
    ```prompt
    @roo-commander
    ```
2.  **Select "Manage Existing Work Sessions":**
    From the initial options presented by `roo-commander`, choose the option similar to:
    `📂 Manage Existing Work Sessions...`

3.  **Select "Start a New Standalone Session":**
    `roo-commander` will then present session management sub-options. Choose:
    `🆕 Start a New Standalone Session`

4.  **Provide a Session Goal/Title:**
    `roo-commander` will ask: "What is the primary goal or title for this new session?"
    Provide a clear and concise goal.
    *   *Example:* "Brainstorm ideas for Q4 marketing campaign"
5.  **Confirmation:**
    `roo-commander` will confirm the creation of the new session, providing its ID and the path to its `session_log.md`. This session is now active.
    *   *Example Output:* "New session 'Brainstorm ideas for Q4 marketing campaign' (ID: SESSION-...) has been started and is now active. All activities will be logged here: .roo/commander/sessions/SESSION-.../session_log.md."

    *(Note: If you choose "🚀 Start New Design / Workflow Session..." from the main menu, `roo-commander` will also guide you through starting a new session if one isn't already active, as part of that workflow.)*

## 2. Listing Active & Paused Sessions

To see a list of your ongoing or paused sessions:

1.  **Invoke Roo Commander (if not already in an interaction):**
    ```prompt
    @roo-commander
    ```
2.  **Select "Manage Existing Work Sessions":**
    `📂 Manage Existing Work Sessions...`

3.  **Select "List Active & Paused Sessions":**
    `📄 List Active & Paused Sessions`

4.  **View List:**
    `roo-commander` will display a list of sessions that are currently "🟢 Active" or "⏸️ Paused", showing their Session ID, Title, and Status.
    *   *Example Output:*
        ```
        Available Active/Paused Sessions:
        - SESSION-DataProductPoC_Alpha-20250715-103000: Design PoC for Project Alpha (Status: 🟢 Active)
        - SESSION-MarketingQ3Plan-20250714-150000: Plan Q3 Marketing Strategy (Status: ⏸️ Paused)
        ```

## 3. Resuming a Paused Session

If you have a session that was previously paused, you can resume it to continue your work.

1.  **Invoke Roo Commander and navigate to "Manage Existing Work Sessions"** as described above.
2.  **Select "Resume a Paused Session":**
    `▶️ Resume a Paused Session`
3.  **Choose Session to Resume:**
    `roo-commander` will list your active and paused sessions (similar to Step 2.4). It will then prompt you to enter the `RooComSessionID` of the session you wish to resume.
4.  **Enter Session ID:** Provide the full Session ID.
5.  **Confirmation:**
    `roo-commander` will confirm that the selected session has been resumed and is now the active session. Its status in its `session_log.md` will be updated to "🟢 Active".
    *   *Example Output:* "Session 'Plan Q3 Marketing Strategy' (ID: SESSION-MarketingQ3Plan-...) has been resumed and is now active."

## 4. Summarizing a Session (Current V8 Approach)

To get a summary of what happened in a session:

1.  **Invoke Roo Commander and navigate to "Manage Existing Work Sessions."**
2.  **Select "Summarize a Session":**
    `📝 Summarize a Session`
3.  **Identify Target Session:**
    *   `roo-commander` may ask if you want to summarize the current active session or choose another from a list.
    *   If choosing from a list, it will display active/paused sessions, and you'll provide the `RooComSessionID`.
4.  **Accessing the Summary Information:**
    For Roo Commander V8, direct AI-generated summaries are a future enhancement. Currently, `roo-commander` will guide you to the key information:
    *   It will provide the path to the `session_log.md` for the selected session.
    *   It will remind you that all generated files and notes are in the `artifacts/` subdirectory of that session, with key deliverables often in `artifacts/design_outputs/`.
    *   *Example Output:* "To summarize session `SESSION-...`, please review its log file: `.roo/commander/sessions/SESSION-.../session_log.md` and its artifacts in `.roo/commander/sessions/SESSION-.../artifacts/`. Key deliverables from design workflows are typically in `artifacts/design_outputs/`."

## 5. Ending a Session (Marking as Completed or Error)

When the goal of a session is achieved, or if you need to stop work due to an unresolvable issue:

1.  **Invoke Roo Commander and navigate to "Manage Existing Work Sessions" (if not already interacting about the target session).**
    *   Alternatively, if a session is active, you can often directly tell `roo-commander`:
        ```prompt
        @roo-commander Let's end this session.
        ```
2.  **Select "End (Complete/Error Out) Current or Selected Session" (if using the menu):**
    `🏁 End (Complete/Error Out) Current or Selected Session`
3.  **Identify Target Session (if not automatically the current one):**
    If no session is active or you wish to end a different one, `roo-commander` will help you select the target session by listing active/paused ones.
4.  **Confirm and Set Final Status:**
    `roo-commander` will ask you to confirm ending the session and to specify its final status.
    *   *Example Prompt:* "You want to end session '[Session Title]' (`SESSION-...`). What is its final status?"
    *   *Suggestions:* "🏁 Completed Successfully", "🔴 Ended with Error(s)", "⏸️ Pause Instead", "❌ Cancel".
5.  **Provide Final Status:** Select the appropriate final status.
6.  **Confirmation:**
    `roo-commander` will update the `session_log.md` of the target session with the chosen status and an `end_time`. If it was the active session, `roo-commander` will clear its active session context.
    *   *Example Output:* "Session '[Session Title]' (ID: `SESSION-...`) has been marked as 🏁 Completed."

---

Effectively managing your sessions will help you keep your work organized, maintain context over time, and ensure all important information and artifacts are traceable. Refer to the `session_log.md` within each session directory for a detailed history of that session's activities.