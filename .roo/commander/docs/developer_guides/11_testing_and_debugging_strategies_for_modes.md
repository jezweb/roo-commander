# Developer Guide: Testing and Debugging Strategies for Roo Commander V8 Modes

## 1. Introduction

Developing AI modes for the Roo Commander V8 system requires a robust approach to testing and debugging to ensure they behave as expected, follow rules, utilize their Knowledge Bases (KBs) correctly, and interact seamlessly within the "Orchestrator -> Manager -> Squad" architecture.

This guide provides strategies and best practices for:
*   "Unit" testing individual modes.
*   Testing the orchestration logic of Manager modes.
*   Performing end-to-end workflow testing.
*   Debugging common issues.

**Prerequisites:**
*   A working Roo Code development environment.
*   Deep understanding of the mode being tested, its `.mode.md` definition, its specific rules (`rules-[mode_slug]/`), and its KB content (`kb/`).
*   Familiarity with MDTM task structure (`[.roo/commander/docs/standards/03-mdtm-task-files.md](.roo/commander/docs/standards/03-mdtm-task-files.md)`) and Session Logs (`[.roo/commander/docs/standards/04-session-logs-and-artifacts.md](.roo/commander/docs/standards/04-session-logs-and-artifacts.md)`).

## 2. General Testing Principles

*   **Test Incrementally:** Test individual modes before testing complex orchestrations.
*   **Isolate Variables:** When debugging, try to isolate the component or interaction causing the issue.
*   **Focus on Inputs & Outputs:** Modes are function-like; they receive inputs (primarily via MDTM tasks or user prompts) and produce outputs (artifacts, updated MDTM tasks, messages). Test these contracts.
*   **MDTM as Test Harness:** MDTM task files are your primary tool for crafting test scenarios for Manager and Squad Member modes.
*   **Session Logs for Debugging:** Session logs provide a rich history of interactions and decisions, invaluable for debugging `roo-commander` and high-level flows.
*   **MDTM Task Logs for Detail:** The "Log Entries" section within an MDTM task file provides the detailed operational log for the mode executing that task.
*   **Iterate on Prompts and KBs:** Testing often reveals ambiguities in system prompts or gaps in KB articles. Be prepared to refine these.

## 3. Testing Squad Member Modes ("Unit Testing")

Squad Member modes are the easiest to test in isolation as they have a very defined input (an MDTM task) and expected outputs.

1.  **Prepare a Test MDTM Task:**
    *   Manually create an MDTM task file (using `.roo/commander/templates/tasks/template_00_mdtm_task_generic.md`) that simulates what its Manager would assign.
    *   **Key considerations for the test task:**
        *   Set `assigned_to` to your Squad Member's slug.
        *   Set `coordinator` to a test/dummy value (e.g., "test-harness-manual").
        *   Provide realistic `input_artifacts` paths (you might need to create dummy input artifact files).
        *   Write a clear `Description`, `Acceptance Criteria`, and a detailed `Checklist` that covers the scenarios you want to test.
        *   Define the expected `output_artifacts` paths (where the Squad Member should save its deliverables).
    *   Save this test MDTM task file (e.g., in a temporary `tests/` directory or within the mode's `kb/examples/` if it's a good general example).
2.  **Invoke the Squad Member Mode:**
    *   Directly invoke your Squad Member mode (e.g., `@data-product-strategist`).
    *   Provide it with the path to your test MDTM task file as its primary instruction.
3.  **Observe and Verify:**
    *   **Output Artifacts:** Did the mode create its primary output artifact (e.g., `product_strategy.md`) in the expected location and format? Does the content meet the requirements?
    *   **MDTM Task Updates:**
        *   Did it update the checklist items (`- [✅]`) correctly?
        *   Are its `Log Entries / Notes 🪵` detailed and accurate?
        *   Is the `status` field in the TOML updated to "🟢 Done" (or "🔴 Error"/"⚪ Blocked" if you're testing those paths)?
        *   Is the `output_artifacts` field in the TOML populated with the correct path(s)?
        *   Is `updated_date` changed?
    *   **Error Handling:** If you designed the test task to induce an error or require clarification, did the mode handle it gracefully (e.g., log the error, set status to "🔴 Error" or "⚪ Blocked", request clarification via its log)?
4.  **Iterate:** Adjust the Squad Member's `.mode.md` system prompt or its KB content based on test results. Repeat until behavior is correct.

## 4. Testing Manager Modes

Testing a Manager mode involves verifying its ability to orchestrate its squad.

1.  **Ensure Squad Members are Unit Tested:** It's best if the Squad Members the Manager delegates to are already individually tested and functional.
2.  **Prepare a Test Primary MDTM Task:**
    *   Manually create an MDTM task file that simulates what `roo-commander` would assign to this Manager.
    *   This task should define a clear, high-level objective for the Manager's domain (e.g., "Design PoC for Project Alpha").
    *   Include a reference to a (real or dummy) `RooComSessionID` and session path, as the Manager will need this for artifact storage paths.
3.  **Invoke the Manager Mode:**
    *   Directly invoke your Manager mode (e.g., `@manager-data-product`).
    *   Provide it with the path to its test primary MDTM task file.
4.  **Observe and Verify Orchestration:**
    *   **Sub-Task Creation:** Did the Manager correctly create MDTM sub-tasks for its squad members in the sequence defined in its KB (`procedures/01-main-orchestration-flow.md`)?
        *   Check the `tasks/` directory for these new sub-task files.
        *   Are they correctly populated (assigned_to, coordinator set to Manager, parent_task_id, inputs/outputs defined)?
    *   **Manager's Primary MDTM Task Log:** Does its log show evidence of planning, sub-task delegation, and monitoring?
    *   **(Advanced) Simulate Squad Member Completions:** To test the full flow, you might need to:
        *   Manually edit the MDTM sub-task files created by the Manager, marking them as "🟢 Done" and populating their `output_artifacts` with paths to dummy output files you create.
        *   Then, re-prompt the Manager, informing it that a sub-task is complete (e.g., "Sub-task TASK-DPSTRAT-XYZ is now Done. Please proceed.").
    *   **Final Output:** Did the Manager correctly identify and link the final consolidated output from its squad (e.g., the PoC Plan) in its own primary MDTM task's `output_artifacts` field?
    *   **Status Reporting:** Did it update its primary MDTM task status to "🟢 Done" and correctly report completion (conceptually, as if to `roo-commander`)?
5.  **Iterate:** Adjust the Manager's `.mode.md` system prompt, its rules (especially the squad orchestration rule), or its KB procedures/references based on test results.

## 5. Testing `roo-commander` (Orchestrator)

Testing `roo-commander` focuses on its initial interaction, session management, and delegation to Manager modes.

1.  **Test Initial Prompts:**
    *   Start a new conversation with `@roo-commander`.
    *   Does it present the correct initial options based on its `.roo/commander/modes/roo-commander/kb/prompts/00-initial-options.md`?
2.  **Test Session Management Workflow:**
    *   Select the "Manage Sessions" option.
    *   Test each sub-option (Start New, List, Resume, Summarize, End) by following the prompts.
    *   Verify:
        *   Session directories and `session_log.md` files are created/updated correctly in `.roo/commander/sessions/`.
        *   The artifact scaffold is created in new sessions (check for `artifacts/` and its subdirectories).
        *   Session statuses are updated in the `session_log.md` TOML.
        *   Session log entries are made by `roo-commander`.
3.  **Test Manager Delegation Workflow:**
    *   Select the option to start a new managed workflow (e.g., "Start Data Product Design Session").
    *   If multiple Managers are configured in `.roo/commander/modes/roo-commander/kb/reference/00-available-managers-summary.md`, does it correctly prompt you to choose one?
    *   Verify:
        *   It initiates a session if one isn't active (or confirms using the current one).
        *   It creates a top-level MDTM task for the correct Manager mode in `.roo/commander/tasks/`.
        *   This MDTM task is correctly populated (assigned to Manager, coordinator is `roo-commander`, links to session).
        *   The MDTM task ID is added to the `session_log.md`'s `related_tasks`.
        *   It informs you that the Manager will take over.
4.  **Iterate:** Adjust `roo-commander`'s `.mode.md` system prompt, its rules, or its KB files based on test results.

## 6. Debugging Tips

*   **Check the Logs, Always:**
    *   **Session Log (`session_log.md`):** For `roo-commander`'s actions and high-level flow.
    *   **MDTM Task Logs (in each task file):** For the detailed actions of the mode executing that task (`manager-data-product` or a `data-product-*` squad member). This is your primary source for debugging mode-specific logic.
*   **Verify File Paths:** Incorrect or missing file paths in `input_artifacts` or `output_artifacts` are a common source of errors. Double-check paths in MDTM tasks and ensure they are workspace-relative as required.
*   **Check TOML Syntax:** Errors in TOML frontmatter can prevent modes from reading task files or other documents. Use a TOML validator if unsure.
*   **Review Mode System Prompts:** Ensure the mode's system prompt clearly defines its role, how it should handle MDTM tasks, and how it should use its KB. Ambiguity here leads to unpredictable behavior.
*   **Review Mode-Specific Rules:** Ensure the rules in `rules-[mode_slug]/` are correctly defined and are being triggered/followed as expected.
*   **Review KB Content:** Is the KB procedure the mode is supposed to follow clear and correct? Is the reference data accurate?
*   **Simplify the Scenario:** If a complex workflow fails, try to break it down and test smaller parts or individual mode delegations.
*   **Verbose Logging (During Development):** Temporarily instruct modes (via their MDTM task checklist or system prompt) to be more verbose in their MDTM task logs to get more insight into their decision-making process.

By systematically applying these testing and debugging strategies, you can build and maintain a robust and reliable Roo Commander V8 system with its specialized Manager and Squad modes.