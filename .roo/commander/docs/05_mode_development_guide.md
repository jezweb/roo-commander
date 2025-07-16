# Roo Commander V8.1: Mode Development Guide

This guide provides concise instructions for creating new custom modes within the Roo Commander V8.1 ecosystem, adhering to the lean, token-efficient principles.

## 1. Design Your Mode

Before coding, clearly define:
*   **Role:** Is it an Orchestrator, Manager, or Squad Member?
*   **Purpose:** What is its core function? What problem does it solve?
*   **Inputs:** What information does it receive (e.g., via MDTM task)?
*   **Outputs:** What artifacts or results does it produce?
*   **Dependencies:** Which other modes does it interact with (delegates to, reports to)?
*   **Knowledge:** What specific knowledge (procedures, skills, references) does it need?

## 2. Create Mode Directory Structure

For a new mode with `[mode_slug]` (e.g., `project-manager`):

1.  **Mode Definition YAML:** Create `/.roo/commander/modes/[mode_slug].yaml`.
2.  **Mode-Specific Rules Folder:** Create `/.roo/rules-[mode_slug]/`.
3.  **Knowledge Base (KB) Folder:** Create `/.roo/rules-[mode_slug]/kb/`.

## 3. Define the Mode (`.roo/commander/modes/[mode_slug].yaml`)

This YAML file defines the mode's core identity for Roo Code. Keep it concise.

```yaml
slug: [mode_slug] # Unique identifier (e.g., project-manager)
name: [Mode Name] # Human-readable name (e.g., 🧑‍💼 Project Manager)
description: [Concise one-sentence summary of purpose] # e.g., Orchestrates project workflows and manages a team of specialists.
roleDefinition: |
  [Very concise statement of core persona and high-level purpose.]
  # Example: "You are a highly organized Project Manager responsible for planning, executing, and overseeing software development projects."
  # Note: The directive for dynamic KB lookup is handled by the mode's pre-loaded core principles (00-[mode_slug]-core-principles.md).
groups: # List of tools this mode has access to
  - read
  - edit
  - command
  # Add other tools as needed (e.g., browser, mcp)
whenToUse: |
  [Describe scenarios or keywords for Roo Code's orchestrator to suggest/activate this mode.]
  # Example: "When the user initiates a new project, requests project planning, or asks for task management."
customInstructions: |
  [Very brief, overarching instruction, if any. Otherwise, can be empty or a general directive.]
  # Example: "Adhere strictly to project standards and communicate progress clearly."
```

## 4. Create Mode-Specific Pre-loaded Rules (`.roo/rules-[mode_slug]/00-[mode_slug]-core-principles.md`)

This file defines the mode's fundamental operational tenets that are *always* loaded.

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

## 5. Populate Knowledge Base (`.roo/rules-[mode_slug]/kb/`)

This is where the detailed, dynamically retrieved knowledge resides.

*   **`README.md`:** Create an index for your KB. This file should guide the AI on how to navigate and find information within its own KB.
    ```markdown
    # Knowledge Base Index for [Mode Name]

    This index helps you navigate your internal knowledge base.

    ## Procedures
    *   `procedures/main-orchestration-flow.md`: Step-by-step guide for [main workflow].
    *   `procedures/error-handling.md`: How to handle common errors.

    ## Skills
    *   `skills/task-breakdown-techniques.md`: Methods for breaking down complex tasks.

    ## Reference
    *   `reference/squad-composition.md`: List of your squad members and their roles.

    ## Examples
    *   `examples/sample-input-task.md`: A sample MDTM task this mode expects.
    ```
*   **Subdirectories:** Create `procedures/`, `prompts/`, `reference/`, `examples/`, `skills/`, `wisdom/` as needed.
*   **Content:** Fill these with Markdown files containing specific, actionable knowledge. Remember to remove TOML frontmatter from these files if you're copying them from an old `.mode.md` structure, as they are now pure Markdown content for the AI.

## 6. Update `.roomodes` Generation Script

You will need a simple Node.js script (e.g., `/.roo/commander/scripts/combine_mode_yamls.js`) to read all individual YAML files from `/.roo/commander/modes/` and combine them into a single `.roomodes` file.

```javascript
// .roo/commander/scripts/combine_mode_yamls.js
const fs = require('fs').promises;
const path = require('path');
const yaml = require('js-yaml');

const MODES_DIR = path.join(__dirname, '..', 'modes');
const OUTPUT_FILE = path.join(__dirname, '..', '..', '..', '.roomodes'); // Project root

async function combineModeYamls() {
    const customModes = [];
    try {
        const files = await fs.readdir(MODES_DIR);
        for (const file of files) {
            if (file.endsWith('.yaml')) {
                const filePath = path.join(MODES_DIR, file);
                const fileContent = await fs.readFile(filePath, 'utf8');
                const modeConfig = yaml.load(fileContent);
                customModes.push(modeConfig);
            }
        }

        const finalYaml = yaml.dump({ customModes: customModes }, { indent: 2 });
        await fs.writeFile(OUTPUT_FILE, finalYaml, 'utf8');
        console.log(`Successfully combined ${customModes.length} modes into ${OUTPUT_FILE}`);

    } catch (error) {
        console.error('Error combining mode YAMLs:', error);
    }
}

combineModeYamls();
```

## 7. Deployment

Users will copy the entire `roo-commander` project (including the `/.roo/commander/` and `/.roo/rules-[mode_slug]/` structures) into their project's `.roo/` directory. They will then run the `combine_mode_yamls.js` script to generate the final `.roomodes` file.