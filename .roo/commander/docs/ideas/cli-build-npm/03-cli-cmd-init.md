+++
id = "PLAN-CLI-CMD-INIT-V1"
title = "CLI Build Plan: Phase 3 - Implement `init` Command"
status = "pending"
created_date = "2025-04-24"
updated_date = "2025-04-24"
version = "1.0"
tags = ["plan", "cli", "init", "command", "boilerplate", "fs-extra"]
related_docs = [
    ".ruru/docs/whitepapers/cli-build-npm/00-cli-build-plan.md",
    ".ruru/docs/whitepapers/cli-build-npm/02-cli-core-structure.md"
]
objective = "Implement the logic for the `roo init` command to copy the default `.roo`/`.ruru` configuration boilerplate into the user's current working directory."
+++

# CLI Build Plan: Phase 3 - Implement `init` Command

**Objective:** Implement the `roo init` command.

**Target Files:** `cli/src/commands/init.ts` (New file), `cli/bin/roo-cli.ts` (Update registration)

**Procedure:**

1.  **Create Command File (Delegate to `util-typescript`):**
    *   Tool: `new_task`
    *   Mode: `util-typescript`
    *   Message: "Create a new file `cli/src/commands/init.ts`.
        *   Import necessary modules: `fs` (from `fs-extra`), `path`, `chalk`, `inquirer`.
        *   Define an asynchronous function `handleInitCommand()`.
        *   Inside the function:
            *   Define source paths relative to the *CLI's execution context*: `const rooSource = path.resolve(__dirname, '../../templates/.roo');` and `const ruruSource = path.resolve(__dirname, '../../templates/.ruru');` (Note: `__dirname` works with CommonJS, need alternative like `import.meta.url` for ES Modules - adjust as needed).
            *   Define target paths relative to the *user's current working directory*: `const rooTarget = path.resolve(process.cwd(), '.roo');` and `const ruruTarget = path.resolve(process.cwd(), '.ruru');`.
            *   Use `fs.pathExists(rooTarget)` and `fs.pathExists(ruruTarget)` to check if directories already exist.
            *   If either exists, use `inquirer.prompt` to ask the user: `{ type: 'confirm', name: 'overwrite', message: 'Configuration directory .roo/.ruru already exists. Overwrite?', default: false }`.
            *   If user confirms overwrite OR if directories don't exist:
                *   Use `fs.copy(rooSource, rooTarget, { overwrite: true })` and `fs.copy(ruruSource, ruruTarget, { overwrite: true })`.
                *   Log success using `console.log(chalk.green('Roo configuration initialized successfully!'))`.
            *   Else (user chose not to overwrite):
                *   Log cancellation using `console.log(chalk.yellow('Initialization cancelled.'))`.
            *   Add basic error handling (try/catch) around file operations and log errors using `console.error(chalk.red(...))`.
        *   Export the `handleInitCommand` function."
    *   Action: Delegate task. Await completion. Review code.

2.  **Register Command (Delegate to `util-typescript`):**
    *   Tool: `new_task`
    *   Mode: `util-typescript`
    *   Message: "Modify `cli/bin/roo-cli.ts`.
        *   Import `handleInitCommand` from `../src/commands/init.js` (Note: import from compiled JS).
        *   Update the placeholder registration for the `init` command: `.command('init').description('Initialize Roo configuration in the current directory').action(handleInitCommand);`"
    *   Action: Delegate task. Await completion. Review changes.

3.  **Build & Test (Coordinator Task):**
    *   Tool: `execute_command`
    *   Command: `npm run build`
    *   CWD: `cli/`
    *   Action: Execute command. Ensure no build errors.
    *   Manual Test (Instruct User): Ask user to navigate to a *test directory outside the CLI project* and run `node /path/to/cli/dist/bin/roo-cli.js init`. Verify it copies the placeholder `.roo` and `.ruru` directories. Test overwrite confirmation.

**Completion:** Proceed to Phase 4 (`04-cli-cmd-install-mcp.md`).