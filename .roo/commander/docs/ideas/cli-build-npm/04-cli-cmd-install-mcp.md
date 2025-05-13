+++
id = "PLAN-CLI-CMD-INSTALL-MCP-V1"
title = "CLI Build Plan: Phase 4 - Implement `install-mcp` Command"
status = "draft" # Generated as draft since original was missing
created_date = "2025-05-03"
updated_date = "2025-05-03"
version = "1.0"
tags = ["plan", "cli", "install-mcp", "command", "mcp", "git", "npm", "env", "json"]
related_docs = [
    ".ruru/docs/whitepapers/cli-build-npm/00-cli-build-plan.md",
    ".ruru/docs/whitepapers/cli-build-npm/03-cli-cmd-init.md"
]
objective = "Implement the logic for the `roo install-mcp <server-name>` command. This involves cloning the server repository, installing dependencies, prompting for configuration, creating `.env` files, and updating the user's `.roo/mcp.json`."
+++

# CLI Build Plan: Phase 4 - Implement `install-mcp` Command

**Objective:** Implement the `roo install-mcp <server-name>` command.

**Target Files:** `cli/src/commands/install-mcp.ts` (New file), `cli/bin/roo-cli.ts` (Update registration), User's `.roo/mcp.json` (Modification)

**Procedure:**

1.  **Create Command File (Delegate to `util-typescript`):**
    *   Tool: `new_task`
    *   Mode: `util-typescript`
    *   Message: "Create a new file `cli/src/commands/install-mcp.ts`.
        *   Import necessary modules: `fs` (from `fs-extra`), `path`, `chalk`, `inquirer`, `child_process` (for `execSync`).
        *   Define an asynchronous function `handleInstallMcpCommand(serverName: string)`.
        *   Inside the function:
            *   Define a configuration object mapping `serverName` to its repository URL and required environment variables. Start with 'vertex-ai' (URL: `https://github.com/shariqriazz/vertex-ai-mcp-server.git`, env vars: `GOOGLE_APPLICATION_CREDENTIALS`, `GCP_PROJECT_ID`, `GCP_LOCATION`). Add 'github' (URL: `https://github.com/github/github-mcp-server.git`, env vars: `GITHUB_PERSONAL_ACCESS_TOKEN`) and 'fetch' (URL: `https://github.com/rooveterinary/uvx-mcp-server-fetch.git`, env vars: none) as well.
            *   Check if the provided `serverName` exists in the configuration. If not, log an error using `chalk.red('Unknown server name.')` and return.
            *   Define the target installation directory relative to the user's CWD: `const installDir = path.resolve(process.cwd(), '.mcp_servers', serverName);`.
            *   Check if `installDir` already exists using `fs.pathExists`. If it does, log a warning with `chalk.yellow(\`Directory ${installDir} already exists. Skipping clone.\`)` and proceed to dependency install/config steps (or add overwrite logic if preferred).
            *   If directory doesn't exist: Use `child_process.execSync(\`git clone \${repoUrl} \${installDir}\`)`. Wrap in try/catch for error handling. Log progress/errors with `chalk`. If clone fails, return.
            *   Use `child_process.execSync('npm install', { cwd: installDir, stdio: 'inherit' })`. Wrap in try/catch. Log progress/errors. If install fails, return.
            *   Retrieve the list of required environment variables for the `serverName` from the config object.
            *   If env vars are required: Use `inquirer.prompt` to ask the user for the value of each required variable (e.g., `{ type: 'input', name: varName, message: \`Enter value for \${varName}:\` }`).
            *   Construct the `.env` file content string (e.g., `VAR1=value1\nVAR2=value2`).
            *   Use `fs.writeFile(path.join(installDir, '.env'), envContent)` to save the environment variables. Wrap in try/catch.
            *   Define the path to the user's mcp config: `const mcpConfigPath = path.resolve(process.cwd(), '.roo/mcp.json');`.
            *   Read `mcpConfigPath` using `fs.readFile`. If it doesn't exist or is invalid JSON, initialize `config = { servers: {} }`. Parse the JSON content. Handle errors.
            *   Add or update the server entry: `config.servers[serverName] = { path: path.relative(process.cwd(), installDir).replace(/\\\\/g, '/'), command: 'node index.js' };` (Ensure relative path uses forward slashes). Adjust command based on server specifics if needed (e.g., some might use `uvx mcp-server-fetch`).
            *   Write the updated configuration back to `mcpConfigPath` using `fs.writeFile(mcpConfigPath, JSON.stringify(config, null, 2))`. Wrap in try/catch.
            *   Log success message using `chalk.green(\`MCP server '\${serverName}' installed and configured successfully!\`)`.
        *   Export the `handleInstallMcpCommand` function."
    *   Action: Delegate task. Await completion. Review code.

2.  **Register Command (Delegate to `util-typescript`):**
    *   Tool: `new_task`
    *   Mode: `util-typescript`
    *   Message: "Modify `cli/bin/roo-cli.ts`.
        *   Import `handleInstallMcpCommand` from `../src/commands/install-mcp.js` (compiled JS path).
        *   Update the placeholder registration for the `install-mcp` command: `.command('install-mcp <server-name>').description('Install and configure an MCP server').action(handleInstallMcpCommand);`"
    *   Action: Delegate task. Await completion. Review changes.

3.  **Build & Test (Coordinator Task):**
    *   Tool: `execute_command`
    *   Command: `npm run build`
    *   CWD: `cli/`
    *   Action: Execute command. Ensure no build errors.
    *   Manual Test (Instruct User): Ask user to:
        *   Navigate to a clean test directory.
        *   Run `roo init` (using the compiled CLI path: `node /path/to/cli/dist/bin/roo-cli.js init`).
        *   Run `roo install-mcp vertex-ai` (using the compiled CLI path).
        *   Follow the prompts (provide dummy API keys/paths).
        *   Verify that the `.mcp_servers/vertex-ai` directory is created, contains `node_modules` and a `.env` file.
        *   Verify that `.roo/mcp.json` is created/updated with the 'vertex-ai' server entry using a relative path with forward slashes.

**Completion:** Proceed to Phase 5 (`05-cli-build-test.md`).