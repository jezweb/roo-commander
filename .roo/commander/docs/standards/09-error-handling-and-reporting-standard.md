+++
# --- Basic Metadata ---
id = "STANDARD-ERROR-HANDLING-REPORTING-V1"
title = "Standard: AI Mode Error Handling and Reporting"
context_type = "standards_document"
scope = "Defines workspace-wide standards for how AI modes should identify, handle, log, and report errors encountered during task execution or other operations."
target_audience = ["all"] # All AI modes and developers creating/maintaining them
granularity = "standard_procedure"
status = "active"
created_date = "20250515"
last_updated = "20250515"
version = "1.0"
tags = ["standards", "error-handling", "reporting", "logging", "mdtm", "debugging", "stability"]
related_context = [
    ".roo/commander/docs/standards/03-mdtm-task-files.md", # Errors are often reported in MDTM tasks
    ".roo/commander/docs/standards/04-session-logs-and-artifacts.md", # Session logs may also capture high-level errors
    ".roo/rules/02-mdtm-task-standard.md" # MDTM task status updates include error states
]
template_schema_doc = ".roo/commander/templates/docs/template_00_standard_document.README.md"
# --- Document Specific Fields ---
# maintainer = "Core Architecture Team"
# review_cycle = "Annually"
+++

# Standard: AI Mode Error Handling and Reporting

## 1. Purpose

To establish a consistent, workspace-wide standard for how AI modes within the Roo Commander system identify, handle, log, and report errors encountered during their operations. Effective error handling and reporting are crucial for:

*   System stability and resilience.
*   Efficient debugging and troubleshooting by developers.
*   Clear communication of issues to users and coordinating modes.
*   Enabling appropriate recovery or alternative actions.

## 2. General Principles of Error Handling for AI Modes

*   **Attempt Graceful Handling:** Modes **SHOULD** attempt to handle expected or common errors gracefully (e.g., retrying a transient network issue if appropriate for the tool, attempting to parse a file with a fallback encoding if primary fails and it makes sense).
*   **Fail Fast for Unrecoverable Errors:** If an error is unrecoverable or prevents the mode from achieving its core task objective, it **MUST NOT** continue processing in a potentially erroneous state. It **MUST** stop and report the error.
*   **Clarity in Reporting:** Error reports **MUST** be clear, concise, and provide sufficient context for diagnosis.
*   **No Silent Failures:** Modes **MUST NOT** fail silently. All significant errors that prevent task completion **MUST** be reported.
*   **Security:** Error messages **MUST NOT** expose sensitive information (e.g., full API keys, raw sensitive data).

## 3. Error Identification & Categorization (Conceptual)

While AI modes may not explicitly categorize errors with codes, their descriptions should allow developers to infer the type. Common categories include:

*   **Input Errors:**
    *   Missing required input artifacts.
    *   Incorrectly formatted input artifacts (e.g., invalid TOML, unparsable JSON).
    *   Input data not meeting expected schema or constraints.
    *   Ambiguous or contradictory instructions in MDTM tasks.
*   **Tool Execution Errors:**
    *   Failure of an external tool or MCP call (e.g., API error, command execution failure).
    *   Tool not available or misconfigured.
*   **File System Errors:**
    *   File not found (when expected).
    *   Permission denied when trying to read/write a file.
    *   Disk full (less likely for AI, but possible for scripts it runs).
*   **Internal Logic Errors:**
    *   Unexpected state within the mode's own reasoning process.
    *   Failure to meet an internal precondition for an action.
*   **Resource Unavailability:**
    *   Network connectivity issues.
    *   External service downtime.
*   **Validation Errors:**
    *   Output produced by the mode fails to meet acceptance criteria or internal quality checks.

## 4. Standard Error Logging & Reporting Procedure

When an AI mode encounters an error that it cannot gracefully recover from and that prevents the successful completion of its current primary objective (e.g., an MDTM task):

### 4.1. Logging the Error

*   **MDTM Task Log (Primary Location for Task-Specific Errors):**
    *   If the error occurs during the execution of an MDTM task, the mode **MUST** append a detailed error entry to the `Log Entries / Notes 🪵` section of *its own MDTM task file*.
    *   The log entry **MUST** include:
        1.  **Timestamp:** ISO 8601 UTC format (`YYYY-MM-DDTHH:MM:SSZ`).
        2.  **Mode Slug:** The slug of the mode reporting the error.
        3.  **Error Indicator:** Clearly state "ERROR:" or "FAILURE:".
        4.  **Description of Error:** A clear, human-readable description of what went wrong.
        5.  **Context:** What the mode was attempting to do when the error occurred (e.g., "Attempting to read file: `[.roo/path/to/input.md]`", "Executing tool `[tool_name]` with parameters `[...]`").
        6.  **Specific Error Message (If Available):** Any error message received from a tool, API, or system call (sanitized of sensitive info).
        7.  **Relevant Data (If Safe and Brief):** e.g., filename, line number if a parsing error.
    *   *Example MDTM Log Entry:*
        ```markdown
        *   `2025-07-20T15:10:00Z - data-product-strategist: ERROR: Failed to parse input artifact.`
            *   Context: Attempting to read and parse TOML from `input_artifacts` (path: `[.roo/commander/sessions/SESSION-XYZ/artifacts/notes/brief.md]`).
            *   Details: TOML parsing error: "Invalid table array header on line 5".
        ```
*   **Session Log (`session_log.md` - For Orchestrator/Manager Level Errors):**
    *   If `roo-commander` encounters a high-level error, or if a Manager mode encounters an error that it needs to escalate beyond its own MDTM task, this **MAY** also be logged in the active `session_log.md`.
    *   This log entry should be more concise, potentially referencing the detailed error in the relevant MDTM task.
    *   *Example Session Log Entry (by `roo-commander` after `manager-data-product` escalation):*
        ```markdown
        - 2025-07-20T15:30:00Z - roo-commander: Received critical error report from `manager-data-product` for MDTM task `TASK-MDP-XYZ`. Details in task log. User notified.
        ```

### 4.2. Updating MDTM Task Status
*   If the error pertains to an MDTM task, the mode **MUST** update the `status` field in the TOML frontmatter of its MDTM task file to `"🔴 Error"`.
*   The `updated_date` field **MUST** also be updated.

### 4.3. Reporting/Escalating the Error

*   **To Direct Coordinator (MDTM Context):**
    *   The mode **MUST** report the error status (and reference its MDTM task ID) to its `coordinator` as specified in its MDTM task. This is typically done via an `attempt_completion` call with a failure status or a specific error reporting mechanism if available.
*   **To User (If `roo-commander` or direct user-facing mode):**
    *   If `roo-commander` encounters an error or receives an escalated error, it **MUST** inform the user clearly about the problem and may request guidance.
    *   *Example User Message from `roo-commander`*: "I've encountered an issue: The `manager-data-product` reported an error while trying to [action]. The error was: '[brief error summary]'. Please check task `TASK-MDP-XYZ` for details. How would you like to proceed?"

## 5. Handling Blockers vs. Errors

*   **Blocker (`⚪ Blocked`):** Use this status if progress is impeded by an external factor or missing information that the mode *cannot resolve itself* but is not an internal processing failure. The mode should clearly log the reason for the block and what is needed to proceed.
    *   *Example:* `data-product-strategist` is blocked because it needs user clarification on a strategic goal.
*   **Error (`🔴 Error`):** Use this status for internal processing failures, unrecoverable tool errors, or situations where the mode cannot fulfill its task objectives due to a fault.

## 6. Rationale

*   **Diagnosability:** Standardized error logging provides developers with the necessary information to quickly diagnose and fix issues.
*   **System Awareness:** Allows coordinating modes to understand the status of delegated tasks and take appropriate action (e.g., retry, escalate, inform user).
*   **User Experience:** Clear error reporting to the user (when appropriate) helps manage expectations and allows them to participate in resolving issues if needed.
*   **Automation Potential:** Consistent error formats can eventually be used by other AI modes for automated error analysis or recovery attempts.

By adhering to these error handling and reporting standards, all modes contribute to a more robust, transparent, and maintainable Roo Commander system.