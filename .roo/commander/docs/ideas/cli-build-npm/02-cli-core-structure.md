+++
id = "PLAN-CLI-CORE-V1"
title = "CLI Build Plan: Phase 2 - Core CLI Structure"
status = "pending"
created_date = "2025-04-24"
updated_date = "2025-04-24"
version = "1.0"
tags = ["plan", "cli", "core", "commanderjs", "typescript"]
related_docs = [
    ".ruru/docs/whitepapers/cli-build-npm/00-cli-build-plan.md",
    ".ruru/docs/whitepapers/cli-build-npm/01-cli-project-setup.md"
]
objective = "Set up the main CLI entry point script, install core dependencies like `commander`, and define the basic command registration structure."
+++

# CLI Build Plan: Phase 2 - Core CLI Structure

**Objective:** Implement the fundamental structure of the CLI using `commander.js` for argument parsing and command handling.

**Target Directory:** `cli/`
**Target Files:** `cli/bin/roo-cli.ts`, `cli/package.json`

**Procedure:**

1.  **Install Core Dependencies (Coordinator Task):**
    *   Tool: `execute_command`
    *   Command: `npm install commander chalk inquirer fs-extra` (Installs commander for command parsing, chalk for colored output, inquirer for prompts, fs-extra for robust file operations).
    *   CWD: `cli/`
    *   Action: Execute command. Await confirmation. Handle errors.

2.  **Install Dev Dependencies (Coordinator Task):**
    *   Tool: `execute_command`
    *   Command: `npm install --save-dev typescript @types/node @types/inquirer @types/fs-extra`
    *   CWD: `cli/`
    *   Action: Execute command. Await confirmation. Handle errors.

3.  **Create Main CLI Script (Delegate to `util-typescript`):**
    *   Tool: `new_task`
    *   Mode: `util-typescript`
    *   Message: "Create the main CLI entry point script at `cli/bin/roo-cli.ts`.
        *   Add the shebang `#!/usr/bin/env node` at the top.
        *   Import `Command` from `commander`.
        *   Initialize a `program` instance: `const program = new Command();`
        *   Set the program version (read from `package.json`) and description.
        *   Define placeholder commands using `program.command('command-name').description('Description').action(() => { console.log('Command not yet implemented'); });` for:
            *   `init`: Initialize Roo configuration.
            *   `install-mcp <server-name>`: Install an MCP server.
            *   (Add other future commands as placeholders if desired).
        *   Parse arguments at the end: `program.parse(process.argv);`
        *   Include basic imports for `chalk` and `inquirer` but don't use them heavily yet.
        *   Ensure the code compiles with the `cli/tsconfig.json` settings."
    *   Action: Delegate task. Await completion. Review generated code.

4.  **Initial Build Test (Coordinator Task):**
    *   Tool: `execute_command`
    *   Command: `npm run build`
    *   CWD: `cli/`
    *   Action: Execute command. Await confirmation. Check for compilation errors in `stderr`. If errors, delegate fixes back to `util-typescript`.

**Completion:** Proceed to Phase 3 (`03-cli-cmd-init.md`).