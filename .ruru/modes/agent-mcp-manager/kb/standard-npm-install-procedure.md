+++
id = "KB-MCP-STANDARD-NPM-INSTALL-V1" # New ID
title = "Standard Procedure for Installing NPM-based MCP Servers"
context_type = "knowledge_base"
scope = "The standard procedure for installing all NPM-based MCP servers into dedicated ./.ruru/mcp-servers/[server-name]/ subdirectories."
target_audience = ["agent-mcp-manager", "developer"] # Agent is primary audience for execution
granularity = "procedure"
status = "active"
last_updated = "2025-05-09" # Updated date
tags = ["kb", "mcp", "installation", "configuration", "npm", "mcp.json", "standard", "procedure"] # Updated tags
related_context = [
    ".roo/mcp.json",
    ".ruru/modes/agent-mcp-manager/kb/install-vertex-ai.md" # Example that will be updated to follow this
    ]
template_schema_doc = ".ruru/templates/toml-md/15_kb_article.README.md"
relevance = "Critical: Defines the mandatory installation pattern for NPM-based MCP servers." # Updated relevance
+++

# Standard Procedure for Installing NPM-based MCP Servers

This document outlines the **standard and mandatory procedure** for installing all NPM-based MCP servers. Servers **MUST** be installed into dedicated subdirectories within the `./.ruru/mcp-servers/` folder at the project root. This approach ensures consistent organization of server code and dependencies.

This method standardizes the location of NPM packages for MCP servers, moving away from installations into the root `node_modules` directory for better project structure and MCP server management.

## 1. Create Directories

For each NPM-based MCP server to be installed:

1.  **Ensure Base Directory:** Confirm the base `./.ruru/mcp-servers/` directory exists at the project root. If not, create it.
2.  Create a specific subdirectory for the server within `./.ruru/mcp-servers/`. Use a descriptive name, typically matching the server's package name or identifier (e.g., `vertex-ai`, `another-server`).

```bash
# Example commands from project root:
mkdir -p ./.ruru/mcp-servers/[server-name] 
# e.g., mkdir -p ./.ruru/mcp-servers/vertex-ai
```

## 2. Install via NPM within the Subdirectory

Navigate into the server-specific subdirectory and run `npm install` for the desired MCP server package.

```bash
# Example command run *within* the server subdirectory:
# (First, navigate to ./.ruru/mcp-servers/[server-name] if you are not already there)
npm install [mcp-server-package-name] --save-dev
# e.g., npm install vertex-ai-mcp-server --save-dev
```
**Note:** It's recommended to run `npm install` directly within the target subdirectory (`./.ruru/mcp-servers/[server-name]`) rather than chaining `cd` and `npm install` commands from the project root, especially to ensure compatibility across different shells and operating systems (like Windows PowerShell).

This installs the package and its dependencies into `./.ruru/mcp-servers/[server-name]/node_modules/`.

## 3. Configure `.roo/mcp.json`

Update the central `.roo/mcp.json` file. Locate or add the entry for the specific server. The crucial part is setting the `args` path correctly to point to the server's entry point within its dedicated subdirectory.

```json
// Example within .roo/mcp.json
{
  "mcpServers": {
    "[server-name]": { // e.g., "vertex-ai-mcp-server"
      "command": "node", // Or the appropriate command
      "args": [
        // Adjust this path based on the server's entry point
        "./.ruru/mcp-servers/[server-name]/node_modules/[mcp-server-package-name]/[path/to/entry/point.js]" 
        // Example for vertex-ai: "./.ruru/mcp-servers/vertex-ai/node_modules/vertex-ai-mcp-server/build/index.js"
      ],
      "env": {
        // Add required environment variables for the server here
        "VAR_NAME": "VALUE" 
      },
      "disabled": false,
      "alwaysAllow": [ /* ... tools ... */ ],
      "timeout": 3600 
    }
    // ... other server configurations ...
  }
}
```

**Key Points:**

*   **`args` Path:** This is the most critical part. Ensure it accurately reflects the path relative to the project root, including the `mcp-servers/[server-name]/node_modules/` structure and the correct path to the server's main executable file.
*   **Consistency:** This structure **MUST** be applied consistently for all NPM-based MCP servers.

## 4. Activating

1.  Ensure the configuration in `.roo/mcp.json` is correct, `disabled` is `false`, and all required `env` variables are set.
2.  **Restart or Reload Roo Commander:** This is necessary for Roo Commander to load the updated `.roo/mcp.json` and launch the server from the specified custom path.
