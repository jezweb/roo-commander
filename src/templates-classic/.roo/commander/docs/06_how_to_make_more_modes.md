# For Gemini Agent: How to Make More Roo Commander Modes

This guide provides a quick, actionable checklist for creating new custom modes within the Roo Commander V8.1 framework. It builds upon the `05_mode_development_guide.md` but focuses on the practical steps and common considerations.

## 1. Design the Mode (Quick Review)

Before creating files, clearly define the mode's:
*   **Role:** Orchestrator, Manager, or Squad Member.
*   **Purpose:** What specific problem does it solve? What is its core function?
*   **Inputs/Outputs:** What does it receive? What does it produce?
*   **Dependencies:** Who does it report to? Who does it delegate to?
*   **Knowledge:** What specific procedures, skills, or references does it need?

## 2. Create the File Structure

For a new mode with `[mode_slug]` (e.g., `code-reviewer`):

1.  **Mode Definition YAML:** Create `/.roo/commander/modes/[mode_slug].yaml`.
2.  **Mode-Specific Rules Folder:** Create `/.roo/rules-[mode_slug]/`.
3.  **Knowledge Base (KB) Folder:** Create `/.roo/rules-[mode_slug]/kb/`.

## 3. Populate the Mode Definition YAML (`/.roo/commander/modes/[mode_slug].yaml`)

Keep this file **lean and focused** on the mode's core identity for Roo Code.

```yaml
slug: [mode_slug] # Unique identifier (e.g., code-reviewer)
name: [Mode Name] # Human-readable name (e.g., 🔍 Code Reviewer) - Single emoji at start!
description: [Concise one-sentence summary of purpose] # e.g., Provides expert code review feedback focusing on best practices.
roleDefinition: |
  [Very concise statement of core persona and high-level purpose.]
  # Example: "You are an expert Code Reviewer, meticulously analyzing code for quality, maintainability, and adherence to standards."
groups: # List of tools this mode has access to (e.g., read, edit, command, browser, mcp)
  - read
  - edit
whenToUse: |
  [Describe scenarios or keywords for Roo Code's orchestrator to suggest/activate this mode.]
  # Example: "When a code review is requested, or a pull request needs analysis."
customInstructions: |
  [Very brief, overarching instruction, if any. Otherwise, can be empty or a general directive.]
  # Example: "Prioritize security and performance in all code assessments."
```

## 4. Create Mode-Specific Pre-loaded Rules (`/.roo/rules-[mode_slug]/00-[mode_slug]-core-principles.md`)

This file defines the mode's fundamental operational tenets that are *always* loaded by Roo Code when the mode is active. It's crucial for guiding the AI's behavior.

```markdown
+++
id = "[MODE_SLUG_UPPERCASE]-CORE-PRINCIPLES-V1"
title = "[Mode Name]: Core Operational Principles"
context_type = "rules"
scope = "Defines foundational operational principles for the [Mode Name] mode."
target_audience = ["[mode_slug]"]
status = "active"
# ... other metadata
+++

# [Mode Name]: Core Operational Principles

## 1. MDTM Task Adherence
*   Your work **MUST** be driven by your assigned MDTM task. Fully understand its `Description`, `Acceptance Criteria`, and `Checklist`.
*   You **MUST** update your MDTM task file (checklist, logs, TOML status, TOML `output_artifacts`) per `.roo/rules/02-mdtm-task-standard.md`.

## 2. Knowledge Base (KB) Utilization
*   For detailed guidance, procedures, and reference, consult your `kb/` directory.
*   Start by reading `kb/README.md` to understand the KB's structure and find relevant articles.
*   Dynamically retrieve and apply information from `kb/procedures/`, `kb/skills/`, `kb/reference/`, etc., as needed for the current task.

## 3. Communication & Reporting
*   Report progress and completion to your `coordinator` (as defined in your MDTM task).
*   If blocked or encountering unresolvable issues, clearly articulate the problem and seek guidance.

# ... Add other core principles specific to this mode (e.g., for a Manager: "Squad Orchestration", for a Squad Member: "Artifact Production")
```

## 5. Populate Knowledge Base (`/.roo/rules-[mode_slug]/kb/`)

This is where the detailed, dynamically retrieved knowledge resides. This content is *not* pre-loaded by Roo Code, but accessed by the AI using its `read` tool, guided by its `roleDefinition` and `00-*-core-principles.md`.

*   **`README.md`:** Create an index for your KB. This file should guide the AI on how to navigate and find information within its own KB.
    ```markdown
    # Knowledge Base Index for [Mode Name]

    This index helps you navigate your internal knowledge base.

    ## Procedures
    *   `procedures/main-workflow.md`: Step-by-step guide for [main workflow].
    *   `procedures/error-handling.md`: How to handle common errors.

    ## Skills
    *   `skills/code-review-techniques.md`: Methods for effective code review.

    ## Reference
    *   `reference/coding-standards.md`: Project-specific coding standards.

    ## Examples
    *   `examples/sample-review-report.md`: A sample output review report.
    ```
*   **Subdirectories:** Create `procedures/`, `prompts/`, `reference/`, `examples/`, `skills/`, `wisdom/` as needed.
*   **Content:** Fill these with Markdown files containing specific, actionable knowledge. Ensure they are pure Markdown (no TOML frontmatter).

## 6. Build Step

After creating/modifying modes, remember to run the `combine_mode_yamls.js` script to update the `.roomodes` file:

```bash
node .roo/commander/scripts/combine_mode_yamls.js
```

## 7. Testing

*   After generating `.roomodes`, restart Roo Code (or reload VS Code window).
*   Activate your new mode and test its behavior. Verify it correctly uses its pre-loaded rules and dynamically retrieves KB content.

## Key Reminders

*   **`groups` vs. `availableTools`:** Roo Code's `.roomodes` YAML uses the key `groups` for tool permissions.
*   **YAML Multi-line Strings:** Use `|` (literal style) for `roleDefinition` and `customInstructions` to preserve formatting.
*   **Single Emoji:** Mode names should have a single, leading emoji (e.g., `💼 Project Manager`).
*   **File Paths:** All paths in rules and documentation should be relative to the project root (e.g., `.mdtm/sessions/`).
