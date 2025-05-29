+++
# --- Basic Metadata ---
id = "TROUBLESHOOTING-GUIDE-RC-V1"
title = "Troubleshooting Guide: Roo Commander"
context_type = "support_document" # Or "developer_guide" if more technical
scope = "Provides guidance on identifying, diagnosing, and resolving common issues encountered when using or developing for the Roo Commander system."
target_audience = ["developers", "users", "system_maintainers"]
granularity = "troubleshooting_guide"
status = "draft" # Initial draft, to be populated as issues arise
last_updated = "20250515"
version = "1.0"
tags = ["troubleshooting", "support", "debugging", "faq", "roo-commander", "common-issues"]
related_context = [
    ".roo/commander/docs/standards/03-mdtm-task-files.md",
    ".roo/commander/docs/standards/04-session-logs-and-artifacts.md",
    ".roo/commander/docs/standards/09-error-handling-and-reporting-standard.md",
    ".roo/commander/docs/glossary.md"
]
template_schema_doc = ".roo/commander/templates/docs/template_00_standard_document.README.md" # Assuming a generic standard doc template
# --- Document Specific Fields ---
# maintainer = "Core Architecture Team / Support Lead"
# review_cycle = "As needed when new common issues are identified"
+++

# Troubleshooting Guide: Roo Commander

## 1. Introduction

This guide provides advice on troubleshooting common issues that may arise when using or developing for the Roo Commander system. As the system involves interactions between multiple AI modes and file-based artifacts, problems can occasionally occur.

This is a living document and will be updated as new issues and solutions are identified. All file path references herein adhere to the workspace-root-relative standard, starting with `.roo/`.

## 2. General Troubleshooting Principles

Before diving into specific issues, consider these general troubleshooting steps:

1.  **Consult Session Logs (`session_log.md`):**
    *   The `session_log.md` file within the relevant session directory (e.g., `[.roo/commander/sessions/SESSION-.../session_log.md](.roo/commander/sessions/SESSION-.../session_log.md)`) is your primary source for understanding what `👑 Roo Commander` attempted to do, which Manager modes it delegated to, and any high-level errors it recorded. Look for ISO 8601 UTC timestamps (`YYYY-MM-DDTHH:MM:SSZ`) and error messages.
    *   Refer to: `[.roo/commander/docs/standards/04-session-logs-and-artifacts.md](.roo/commander/docs/standards/04-session-logs-and-artifacts.md)`

2.  **Examine MDTM Task Files (`.roo/commander/tasks/...`):**
    *   If a specific workflow or phase seems stuck or failed, locate the relevant MDTM task file for the Manager or Squad Member mode involved.
    *   Examine its `status` field in the TOML frontmatter (e.g., `"🔴 Error"`, `"⚪ Blocked"`).
    *   Review the `Checklist / Sub-Tasks 📝` section to see which step was being processed.
    *   Carefully read the `Log Entries / Notes 🪵` section at the bottom of the task file for detailed progress, specific error messages from the mode, or reasons why it might be blocked. Timestamps here are also ISO 8601 UTC.
    *   Refer to: `[.roo/commander/docs/standards/03-mdtm-task-files.md](.roo/commander/docs/standards/03-mdtm-task-files.md)`

3.  **Verify File Paths:**
    *   Many issues can stem from incorrect file paths in TOML fields (like `input_artifacts`, `output_artifacts`, `related_docs`, `custom_instructions_dir`) or in instructions within MDTM checklists.
    *   Ensure all internal paths are workspace-root-relative, starting with `.roo/`, as per `[.roo/commander/docs/standards/01-naming-conventions.md](.roo/commander/docs/standards/01-naming-conventions.md)`.

4.  **Validate TOML+Markdown Formatting:**
    *   Ensure that any recently edited `.mode.md` files, rule files, KB articles, MDTM tasks, or session logs adhere strictly to the TOML+Markdown format, especially the `+++` delimiters and valid TOML syntax within them.
    *   Refer to: `[.roo/commander/docs/standards/02-toml-md-document-format.md](.roo/commander/docs/standards/02-toml-md-document-format.md)`.

5.  **Review Mode Definitions, Rules, and KBs:**
    *   If a mode is behaving unexpectedly, review its `.mode.md` file (especially the `roleDefinition`), its specific rules in `[.roo/rules-[mode_slug]/](.roo/rules-[mode_slug]/)` (particularly `00-[mode_slug]-core-principles.md`), and relevant KB procedures in `[.roo/commander/modes/[mode_slug]/kb/procedures/](.roo/commander/modes/[mode_slug]/kb/procedures/)`.
    *   Ensure these align with the expected behavior and workspace standards.

6.  **Check Workspace Rules & Standards:**
    *   Ensure the actions being performed are compliant with defined workspace rules in `[.roo/rules/](.roo/rules/)` and standards in `[.roo/commander/docs/standards/](.roo/commander/docs/standards/)`.
    *   Refer to the `[.roo/commander/docs/standards/09-error-handling-and-reporting-standard.md](.roo/commander/docs/standards/09-error-handling-and-reporting-standard.md)` for how modes should report errors.

7.  **Isolate the Issue:**
    *   Try to determine which mode is failing or causing the problem (`👑 Roo Commander`, a specific Manager, or a specific Squad Member). The MDTM task hierarchy and session logs should help pinpoint this.

8.  **Simplify and Test:**
    *   If a complex workflow is failing, try to test a smaller part of it or a simpler version of the task to isolate the problematic component or step. Refer to `[.roo/commander/docs/developer_guides/11_testing_and_debugging_strategies_for_modes.md](.roo/commander/docs/developer_guides/11_testing_and_debugging_strategies_for_modes.md)`.

## 3. Common Issues & Potential Solutions

*(This section will be populated over time as common issues are identified. Below are placeholders and examples of how issues might be documented.)*

---
### **Issue Category: MDTM Task Processing**

**Issue 3.1.1: Mode fails to start an MDTM task or reports "File Not Found" for the task file.**
*   **Potential Causes:**
    1.  Incorrect path to the MDTM task file was provided to the mode during delegation.
    2.  The MDTM task file was not created or saved correctly by the delegating mode.
    3.  File system permission issues.
*   **Troubleshooting Steps:**
    1.  Verify the path provided in the `new_task` call or delegation message. Ensure it's a full, workspace-root-relative path (e.g., `[.roo/commander/tasks/manager-data-product/TASK-MDP-XYZ.md]`).
    2.  Check the file system to confirm the MDTM task file exists at the specified path.
    3.  Review the logs of the *delegating* mode to ensure it reported successful creation of the task file.
    4.  Check file/directory permissions if applicable to your environment.

**Issue 3.1.2: Mode marks MDTM task as `"🔴 Error"` with "Failed to parse input artifact."**
*   **Potential Causes:**
    1.  An `input_artifacts` path in the MDTM task's TOML is incorrect or the file is missing.
    2.  The input artifact file is not valid TOML+Markdown or has incorrect TOML syntax.
    3.  The input artifact does not conform to the schema expected by the mode.
*   **Troubleshooting Steps:**
    1.  In the problematic MDTM task file, check the `Log Entries / Notes 🪵` for details on which input artifact caused the issue.
    2.  Verify all paths listed in `input_artifacts` are correct and the files exist.
    3.  Open the problematic input artifact and validate its TOML frontmatter (using a TOML validator or by careful inspection against its template's `.README.md` schema).
    4.  Ensure the content of the input artifact is what the current mode expects (e.g., `data-product-ideator` expects a valid `product_strategy.md`).

---
### **Issue Category: Session Management**

**Issue 3.2.1: `👑 Roo Commander` fails to create a new session directory or `session_log.md`.**
*   **Potential Causes:**
    1.  File system permission issues in `[.roo/commander/sessions/](.roo/commander/sessions/)`.
    2.  Error in the delegated file worker mode (e.g., `code`) responsible for creating the scaffold.
    3.  Incorrect session naming logic leading to an invalid directory name.
*   **Troubleshooting Steps:**
    1.  Check `👑 Roo Commander`'s own logs (if available outside a session log, or its last active session log) for errors during session creation.
    2.  Verify permissions for the `[.roo/commander/sessions/](.roo/commander/sessions/)` directory.
    3.  If a file worker mode is used, check its capability and if it reported any errors.

---
### **Issue Category: Mode Behavior**

**Issue 3.3.1: A mode is not following its defined KB procedure or rules.**
*   **Potential Causes:**
    1.  The mode's `roleDefinition` in its `.mode.md` does not sufficiently instruct it to prioritize its KB/rules.
    2.  The mode's Core Principles rule (`.roo/rules-[mode_slug]/00-[mode_slug]-core-principles.md`) is missing, incorrect, or not being loaded by Roo Code.
    3.  The specific KB procedure or rule file has errors or is unclear.
    4.  The path to the KB or rules in `custom_instructions_dir` (in `.mode.md`) or in the Core Principles rule is incorrect.
*   **Troubleshooting Steps:**
    1.  Review the mode's `.mode.md` `roleDefinition`.
    2.  Verify its `00-[mode_slug]-core-principles.md` rule exists, is correctly formatted, and explicitly instructs KB/rule consultation.
    3.  Check the `custom_instructions_dir` path in the `.mode.md` file.
    4.  Examine the specific KB procedure or rule file for clarity and correctness.

---
**(More issues and solutions will be added here over time based on experience.)**

## 4. Reporting New Issues

If you encounter an issue not covered here, or if the suggested solutions do not work:

1.  **Gather Information:**
    *   The relevant `RooComSessionID` (if applicable).
    *   The `id`s of any relevant MDTM task files.
    *   Specific error messages (copy-paste exact text).
    *   Steps to reproduce the issue.
    *   Relevant snippets from `session_log.md` or MDTM task logs.
    *   The version of Roo Commander being used.
2.  **Document the Issue:** (Define your project's preferred method for reporting issues, e.g., GitHub Issues, internal bug tracker). Provide as much detail as possible.

## 5. Seeking Help

*   Consult the rest of this documentation, particularly the architectural documents (`[.roo/commander/docs/architecture/](.roo/commander/docs/architecture/)`), specific mode documentation (`[.roo/commander/modes/[mode_slug]/](.roo/commander/modes/[mode_slug]/)`), and other standards (`[.roo/commander/docs/standards/](.roo/commander/docs/standards/)`).
*   Refer to the `[.roo/commander/docs/glossary.md](.roo/commander/docs/glossary.md)` for term definitions.
*   (Define other support channels if applicable, e.g., team chat, community forum).

---

By systematically approaching troubleshooting and contributing to this guide, we can build a more robust and reliable Roo Commander system.