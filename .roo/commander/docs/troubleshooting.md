# Roo Commander V8: Troubleshooting Guide

## 1. Introduction

This guide provides advice on troubleshooting common issues that may arise when using or developing for the Roo Commander V8 system. As the system is complex and involves interactions between multiple AI modes and file-based artifacts, problems can occasionally occur.

This is a living document and will be updated as new issues and solutions are identified.

## 2. General Troubleshooting Principles

Before diving into specific issues, consider these general troubleshooting steps:

1.  **Check Session Logs (`session_log.md`):**
    *   The `session_log.md` file within the relevant session directory (`.roo/commander/sessions/SESSION-.../`) is your primary source for understanding what `roo-commander` attempted to do, which Manager modes it delegated to, and any high-level errors it recorded. Look for timestamps and error messages.

2.  **Check MDTM Task Files (`.roo/commander/tasks/...`):**
    *   If a specific workflow or phase seems stuck or failed, locate the relevant MDTM task file for the Manager or Squad Member mode involved.
    *   Examine its `status` in the TOML frontmatter.
    *   Review the `Checklist / Sub-Tasks 📝` section to see which step was being processed.
    *   Carefully read the `Log Entries / Notes 🪵` section at the bottom of the task file for detailed progress, specific error messages from the mode, or reasons why it might be blocked.

3.  **Verify File Paths:**
    *   Many issues can stem from incorrect file paths in TOML fields (like `input_artifacts`, `output_artifacts`, `related_docs`) or in instructions within MDTM checklists. Double-check that all paths are correct and workspace-relative as per standards.

4.  **Validate TOML+Markdown Formatting:**
    *   Ensure that any recently edited `.mode.md` files, rule files, KB articles, MDTM tasks, or session logs adhere strictly to the TOML+Markdown format, especially the `+++` delimiters and valid TOML syntax within them. Use a TOML validator if unsure. (See `[./standards/02-toml-md-document-format.md](./standards/02-toml-md-document-format.md)`).

5.  **Review Mode System Prompts & KBs:**
    *   If a mode is behaving unexpectedly, review its `.mode.md` system prompt and its relevant KB procedures (`.roo/commander/modes/[mode_slug]/kb/procedures/`) to ensure its defined logic aligns with the expected behavior.

6.  **Check Workspace Rules:**
    *   Ensure the actions being performed are compliant with the defined workspace rules in `.roo/rules/`.

7.  **Isolate the Issue:**
    *   Try to determine which mode is failing or causing the problem (`roo-commander`, a specific Manager, or a specific Squad Member). The MDTM task hierarchy and session logs should help pinpoint this.

8.  **Simplify and Test:**
    *   If a complex workflow is failing, try to test a smaller part of it or a simpler version of the task to isolate the problematic component or step.

## 3. Common Issues & Potential Solutions (Placeholder Section)

*(This section will be populated as common issues are identified during development and usage. Each issue should have a clear description, potential causes, and suggested troubleshooting steps or solutions.)*

---

### Example Issue Template:

**Issue:** Mode `[mode_slug]` fails to update its MDTM task status to "🟢 Done".

*   **Potential Causes:**
    1.  The mode encountered an internal error during its final steps.
    2.  The mode's logic for updating the TOML `status` field is incorrect.
    3.  File permission issues preventing the mode from writing to the MDTM task file.
    4.  The mode did not correctly identify that all acceptance criteria were met.
*   **Troubleshooting Steps:**
    1.  Examine the `Log Entries / Notes 🪵` section in the mode's MDTM task file for any error messages or indications of its final actions.
    2.  Review the mode's system prompt and relevant KB procedures that govern how it updates its MDTM task file.
    3.  Check file system permissions for the `.roo/commander/tasks/` directory and the specific task file.
    4.  Manually review the task's acceptance criteria against the work performed (as logged by the mode) to see if completion was actually achieved.
    5.  If the mode is supposed to use a specific tool to update the TOML, ensure that tool call is formatted correctly.

---

**Issue:** `roo-commander` does not offer a newly created Manager workflow as an option.

*   **Potential Causes:**
    1.  The new Manager mode was not added to `roo-commander/kb/reference/00-available-managers-summary.md`.
    2.  The entry in `00-available-managers-summary.md` has an incorrect slug or formatting.
    3.  `roo-commander`'s KB was not correctly reloaded/re-indexed by the Roo Code environment after the change.
*   **Troubleshooting Steps:**
    1.  Verify the entry for the new Manager in `roo-commander/kb/reference/00-available-managers-summary.md` for correctness (workflow description, slug, domain).
    2.  Ensure the new Manager's `.mode.md` file exists at the correct path and its `id` (slug) matches the entry in the summary.
    3.  Try restarting the Roo Code environment or explicitly asking `roo-commander` to refresh its understanding of available managers (if such a command is implemented).

---

**(More issues and solutions will be added here over time.)**

## 4. Reporting New Issues

If you encounter an issue not covered here, or if the suggested solutions do not work:

1.  **Gather Information:**
    *   The relevant `RooComSessionID`.
    *   The IDs of any relevant MDTM task files.
    *   Specific error messages.
    *   Steps to reproduce the issue.
    *   Relevant snippets from `session_log.md` or MDTM task logs.
2.  **Document the Issue:** (Define your project's preferred method for reporting issues, e.g., GitHub Issues, internal bug tracker).

## 5. Seeking Help

*   Consult the rest of this documentation, particularly the architectural documents and specific mode documentation.
*   (Define other support channels if applicable, e.g., team chat, community forum).

---

By systematically approaching troubleshooting and contributing to this guide, we can build a more robust and reliable Roo Commander V8 system.