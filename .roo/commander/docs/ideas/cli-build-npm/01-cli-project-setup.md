+++
id = "PLAN-CLI-SETUP-V1"
title = "CLI Build Plan: Phase 1 - Project Setup"
status = "pending"
created_date = "2025-04-24"
updated_date = "2025-04-24"
version = "1.0"
tags = ["plan", "cli", "setup", "npm", "typescript"]
related_docs = [".ruru/docs/whitepapers/cli-build-npm/00-cli-build-plan.md"]
objective = "Initialize the basic Node.js project structure, package.json, and TypeScript configuration for the `roocommander` CLI tool."
+++

# CLI Build Plan: Phase 1 - Project Setup

**Objective:** Create the initial project files and directories for the CLI.

**Target Directory:** `cli/` (relative to workspace root `{Current Working Directory}`)

**Procedure:**

1.  **Create Project Directory (Coordinator Task):**
    *   Tool: `execute_command`
    *   Command: `mkdir cli` (Check OS Rule 05 for potential cross-platform needs, though `mkdir` is usually safe).
    *   CWD: `{Current Working Directory}`
    *   Action: Execute the command. Await confirmation. Handle errors (e.g., directory exists - maybe confirm overwrite/skip).

2.  **Create Subdirectories (Coordinator Task):**
    *   Tool: `execute_command`
    *   Commands (Check OS Rule 05 - use `&&` for Linux/macOS, separate commands for Windows):
        *   `mkdir cli/bin`
        *   `mkdir cli/src`
        *   `mkdir cli/dist` (for compiled output)
        *   `mkdir cli/templates` (to store boilerplate `.roo`/`.ruru`)
    *   CWD: `{Current Working Directory}`
    *   Action: Execute the commands. Await confirmation. Handle errors.

3.  **Initialize `package.json` (Coordinator Task):**
    *   Tool: `write_to_file`
    *   Path: `cli/package.json`
    *   Content (Initial):
        ```json
        {
          "name": "roocommander-cli", // Or choose a preferred name
          "version": "0.1.0",
          "description": "CLI tool for managing Roo Commander workspace configurations and tasks.",
          "type": "module", // Use ES Modules
          "bin": {
            "roo": "./dist/bin/roo-cli.js" // Command name 'roo' linked to compiled JS
          },
          "main": "./dist/index.js", // Entry point for potential library use
          "scripts": {
            "build": "tsc",
            "start": "node ./dist/bin/roo-cli.js", // To run the compiled CLI
            "dev": "tsc --watch", // For development
            "test": "echo \"Error: no test specified\" && exit 1"
          },
          "keywords": [
            "roo",
            "ai",
            "agent",
            "cli",
            "development",
            "automation"
          ],
          "author": "[Your Name/Org]", // Replace later
          "license": "MIT", // Or your chosen license
          "files": [ // Files to include in npm package
            "dist",
            "bin",
            "templates",
            "README.md",
            "LICENSE"
          ],
          "dependencies": {}, // To be added in Phase 2
          "devDependencies": {} // To be added later
        }
        ```
    *   Action: Write the file. Await confirmation. Handle errors.

4.  **Create `tsconfig.json` (Coordinator Task):**
    *   Tool: `write_to_file`
    *   Path: `cli/tsconfig.json`
    *   Content:
        ```json
        {
          "compilerOptions": {
            "target": "ES2022", // Modern Node supports ES2022 features
            "module": "NodeNext", // Modern module system for Node
            "moduleResolution": "NodeNext",
            "outDir": "./dist", // Output compiled JS here
            "rootDir": "./src", // Source TS files are here
            "strict": true, // Enable strict type checking
            "esModuleInterop": true, // Allows default imports from commonjs modules
            "skipLibCheck": true, // Skip type checking of declaration files
            "forceConsistentCasingInFileNames": true,
            "declaration": true, // Generate .d.ts files
            "sourceMap": true // Generate source maps for debugging
          },
          "include": ["src/**/*"], // Compile files in src
          "exclude": ["node_modules", "dist"] // Ignore these directories
        }
        ```
    *   Action: Write the file. Await confirmation. Handle errors.

5.  **Create `.gitignore` (Coordinator Task):**
    *   Tool: `write_to_file`
    *   Path: `cli/.gitignore`
    *   Content:
        ```gitignore
        # Node
        node_modules/
        npm-debug.log*
        yarn-debug.log*
        yarn-error.log*
        pnpm-debug.log*
        lerna-debug.log*

        # TypeScript
        dist/
        *.tsbuildinfo

        # OS generated files
        .DS_Store
        Thumbs.db

        # Env files
        .env*
        !.env.example
        ```
    *   Action: Write the file. Await confirmation. Handle errors.

6.  **Add Initial Boilerplate Placeholder (Coordinator Task):**
    *   Purpose: Create placeholders so the `init` command has something to copy later. The actual content will be copied from the main project.
    *   Tool: `execute_command`
    *   Commands (Check OS Rule 05):
        *   `mkdir cli/templates/.roo`
        *   `mkdir cli/templates/.ruru`
        *   `echo "# Placeholder" > cli/templates/.roo/placeholder.md` (Adjust for Windows: `echo # Placeholder > cli\templates\.roo\placeholder.md`)
        *   `echo "# Placeholder" > cli/templates/.ruru/placeholder.md` (Adjust for Windows)
    *   CWD: `{Current Working Directory}`
    *   Action: Execute commands. Await confirmation. Handle errors.

**Completion:** Proceed to Phase 2 (`02-cli-core-structure.md`).