+++
id = "KB-MCP-VERTEX-INSTALL-V2"
title = "Standard Installation: Vertex AI MCP Server (NPM)"
context_type = "knowledge_base"
scope = "Standard instructions for setting up the Vertex AI MCP server using the mandatory NPM subdirectory method."
target_audience = ["agent-mcp-manager", "developer"]
granularity = "procedure"
status = "active"
last_updated = "2025-05-09" # Updated date
tags = ["kb", "mcp", "vertex-ai", "installation", "configuration", "npm", "mcp.json", "standard"]
related_context = [
    ".roo/mcp.json",
    ".roo/rules/10-vertex-mcp-usage-guideline.md",
    ".ruru/modes/agent-mcp-manager/kb/data/03-vertex-ai-mcp-json-example.md",
    ".ruru/modes/agent-mcp-manager/kb/standard-npm-install-procedure.md" # General NPM standard this follows
    ]
template_schema_doc = ".ruru/templates/toml-md/15_kb_article.README.md"
relevance = "High: Core setup for Vertex AI integration, exemplifying the standard NPM install."
+++

# Standard Installation: Vertex AI MCP Server (NPM)

This document outlines the **standard procedure** for installing and configuring the `vertex-ai-mcp-server`. This method involves installing the NPM package into a dedicated subdirectory within `.ruru/mcp-servers/` and configuring it via the central `.roo/mcp.json` file.

This procedure adheres to the general guidelines outlined in `[.ruru/modes/agent-mcp-manager/kb/standard-npm-install-procedure.md](.ruru/modes/agent-mcp-manager/kb/standard-npm-install-procedure.md:1)`.

## 1. Create Server Directory and Install via NPM

1.  **Define Server Name:** For consistency, let's use `vertex-ai-mcp-server` as the server name.
2.  **Create Directory:** Ensure the target directory exists.
    ```bash
    # Command to be run from the project root
    mkdir -p ./.ruru/mcp-servers/vertex-ai-mcp-server
    ```
3.  **Install Package:** Navigate into the server-specific subdirectory and run `npm install`.
    ```bash
    # Command to be run by the agent, ensuring correct CWD:
    # Agent should execute 'npm install vertex-ai-mcp-server --save-dev'
    # with the CWD set to './.ruru/mcp-servers/vertex-ai-mcp-server'
    ```
    The `agent-mcp-manager` will use `execute_command` with the `cwd` parameter:
    `<execute_command>`
    `<command>npm install vertex-ai-mcp-server --save-dev</command>`
    `<cwd>./.ruru/mcp-servers/vertex-ai-mcp-server</cwd>`
    `</execute_command>`

This installs the package and its dependencies into `./.ruru/mcp-servers/vertex-ai-mcp-server/node_modules/`.

## 2. Configuration via `.roo/mcp.json`

All configuration for the `vertex-ai-mcp-server` is managed centrally within `.roo/mcp.json`.

Locate or add the `vertex-ai-mcp-server` entry. Configure it according to the example in:
**`.ruru/modes/agent-mcp-manager/kb/data/03-vertex-ai-mcp-json-example.md`**

Ensure you replace placeholder values with your actual GCP project details and credentials.

**Key Configuration Points:**

*   **`args`**: This is critical. Ensure the path points correctly to the server's entry point within its dedicated subdirectory:
    `"./.ruru/mcp-servers/vertex-ai-mcp-server/node_modules/vertex-ai-mcp-server/build/index.js"`
*   **`env`**:
    *   Provide your valid GCP `PROJECT_ID`, `LOCATION` (region), and the path to your `GOOGLE_APPLICATION_CREDENTIALS` JSON key file. **These are essential.**
    *   Adjust `VERTEX_AI_MODEL_ID`, `TEMPERATURE`, `MAX_OUTPUT_TOKENS`, etc., based on your specific needs and the models available in your GCP project/region.
    *   Retry settings (`MAX_RETRIES`, `RETRY_DELAY_MS`) can be adjusted for network reliability.
*   **`disabled`**: Set to `false` to enable the server.
*   **`alwaysAllow`**: Carefully consider which tools should bypass per-call user confirmation.
*   **`timeout`**: Adjust if you expect very long-running tool operations.

## 3. Restart Roo Commander

After modifying `.roo/mcp.json`, restart Roo Commander to ensure it picks up the new configuration and attempts to connect to the Vertex AI MCP server. Check the Roo Commander logs or MCP status indicators for successful connection.
