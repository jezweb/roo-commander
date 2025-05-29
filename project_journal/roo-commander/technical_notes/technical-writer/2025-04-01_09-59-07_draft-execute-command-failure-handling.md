# Technical Note: Draft execute_command Failure Handling Instruction

**Date:** 2025-04-01
**Mode:** Technical Writer
**Task:** Draft standard instruction text for handling `execute_command` failures, as per Task 1.3 in `project_journal/roo-commander/planning/mode_improvement_plan.md`.

**Objective:** Create a generic Markdown snippet for inclusion in mode `customInstructions` to guide modes on how to react when an `execute_command` tool use fails (non-zero exit code or stderr output).

**Reference:** See `context/improvement-suggestions/specific-mode-improvement-ideas.md` (lines 19, 31, 42, etc.) for the original suggestion.

**Requirements:**
1. Acknowledge the command failure, mentioning the command attempted
2. Log the failure details (command, exit code, stderr output if available)
3. Analyze the failure (if possible based on the error message)
4. Determine the next appropriate action
5. Clearly communicate the chosen next step

**Drafted Instruction Snippet:**

```markdown
---
### Handling `execute_command` Failures

If an `execute_command` tool use results in a failure (e.g., non-zero exit code or error messages in stderr), follow these steps:

1. **Acknowledge:** State that the command `[command attempted]` failed.

2. **Log Failure:** Delegate to the `code` mode to record the failure details (command, exit code, stderr output if available) in your technical notes at `project_journal/[project_slug]/technical_notes/[your_mode_slug]/YYYY-MM-DD_HH-MM-SS_command_failure_[command_name].md`.
   * Example delegation message: "Write the following Markdown content to the file at `[path_to_note]`. Create the file and any necessary parent directories if they don't exist.\n\n```markdown\n# Command Failure: [command_name]\n\n**Date:** YYYY-MM-DD HH:MM:SS\n**Command:**\n```bash\n[command]\n```\n\n**Exit Code:** [exit_code]\n**Error Output:**\n```\n[stderr_output]\n```\n\n**Analysis:** [your initial analysis]\n\n**Next Steps:** [planned action]\n```"

3. **Analyze Failure:** Examine the error message to determine the likely cause:
   * Syntax error: Check command formatting, parameter order, or missing quotes
   * Missing dependency: Verify required software is installed
   * Permission issue: Check if elevated permissions are needed
   * Network/connectivity issue: Verify network connections
   * Resource limitation: Check for memory, disk space, or other resource constraints
   * Configuration error: Verify environment variables or config files

4. **Determine Next Action:** Based on your analysis, choose the most appropriate next step:
   * **Retry with corrections:** If the issue is a simple syntax error or fixable parameter
   * **Try alternative command:** If there's an equivalent command that might work better
   * **Consult specialist mode:** For complex issues (e.g., DevOps Manager for infrastructure issues)
   * **Escalate to user:** Use `ask_followup_question` when manual intervention is needed

5. **Communicate Next Step:** Clearly explain to the user:
   * What went wrong (in simple terms)
   * What you're going to do next
   * Why this approach is appropriate

Remember: Command failures are normal and expected in development. Your systematic approach to handling them demonstrates professionalism and builds user confidence.
---
```

**Suggested Placement:**
This instruction snippet should be placed within the mode's `customInstructions` section, ideally:
1. After any general tool usage guidelines
2. Near other error handling instructions
3. Before task-specific instructions

For example, it could be placed under a "Tool Usage and Error Handling" section, alongside guidelines for other tools.

**Next Steps:**
- Submit for review and implementation
- Consider creating examples specific to each mode's common command usage patterns